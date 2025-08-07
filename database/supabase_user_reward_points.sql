-- Create user_reward_points table
CREATE TABLE IF NOT EXISTS user_reward_points (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  points INTEGER NOT NULL DEFAULT 0,
  transaction_type VARCHAR(50) NOT NULL, -- 'earned', 'redeemed', 'expired', 'bonus'
  transaction_description TEXT,
  order_id VARCHAR(100), -- Reference to order if points earned from order
  points_change INTEGER NOT NULL, -- positive for earned, negative for redeemed
  expiry_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_reward_balance table for current balance tracking
CREATE TABLE IF NOT EXISTS user_reward_balance (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  total_points INTEGER NOT NULL DEFAULT 0,
  available_points INTEGER NOT NULL DEFAULT 0,
  lifetime_earned INTEGER NOT NULL DEFAULT 0,
  lifetime_redeemed INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE user_reward_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_reward_balance ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_reward_points
CREATE POLICY "Users can view their own reward points" ON user_reward_points
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own reward points" ON user_reward_points
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reward points" ON user_reward_points
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for user_reward_balance
CREATE POLICY "Users can view their own reward balance" ON user_reward_balance
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own reward balance" ON user_reward_balance
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reward balance" ON user_reward_balance
  FOR UPDATE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_user_reward_points_user_id ON user_reward_points(user_id);
CREATE INDEX idx_user_reward_points_created_at ON user_reward_points(created_at DESC);
CREATE INDEX idx_user_reward_points_type ON user_reward_points(transaction_type);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_reward_points_updated_at 
  BEFORE UPDATE ON user_reward_points
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_reward_balance_updated_at 
  BEFORE UPDATE ON user_reward_balance
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Function to update user reward balance
CREATE OR REPLACE FUNCTION update_user_reward_balance()
RETURNS TRIGGER AS $$
BEGIN
    -- Insert or update the user's reward balance
    INSERT INTO user_reward_balance (user_id, total_points, available_points, lifetime_earned, lifetime_redeemed)
    VALUES (
        NEW.user_id,
        CASE WHEN NEW.points_change > 0 THEN NEW.points_change ELSE 0 END,
        CASE WHEN NEW.points_change > 0 THEN NEW.points_change ELSE 0 END,
        CASE WHEN NEW.points_change > 0 THEN NEW.points_change ELSE 0 END,
        CASE WHEN NEW.points_change < 0 THEN ABS(NEW.points_change) ELSE 0 END
    )
    ON CONFLICT (user_id)
    DO UPDATE SET
        total_points = user_reward_balance.total_points + NEW.points_change,
        available_points = GREATEST(0, user_reward_balance.available_points + NEW.points_change),
        lifetime_earned = CASE 
            WHEN NEW.points_change > 0 THEN user_reward_balance.lifetime_earned + NEW.points_change
            ELSE user_reward_balance.lifetime_earned
        END,
        lifetime_redeemed = CASE 
            WHEN NEW.points_change < 0 THEN user_reward_balance.lifetime_redeemed + ABS(NEW.points_change)
            ELSE user_reward_balance.lifetime_redeemed
        END,
        updated_at = NOW();
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update balance when points are added/removed
CREATE TRIGGER update_balance_on_points_change
  AFTER INSERT ON user_reward_points
  FOR EACH ROW
  EXECUTE FUNCTION update_user_reward_balance();
