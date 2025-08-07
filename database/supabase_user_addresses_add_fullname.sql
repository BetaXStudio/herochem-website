-- Add full_name column to user_addresses table (safe migration)
DO $$ 
BEGIN
    -- Check if the column already exists
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'user_addresses' 
        AND column_name = 'full_name'
    ) THEN
        -- Add the column
        ALTER TABLE user_addresses 
        ADD COLUMN full_name VARCHAR(255);
        
        -- Update existing records with a default value
        UPDATE user_addresses 
        SET full_name = 'Please update name' 
        WHERE full_name IS NULL;
        
        -- Make it NOT NULL
        ALTER TABLE user_addresses 
        ALTER COLUMN full_name SET NOT NULL;
        
        -- Add comment
        COMMENT ON COLUMN user_addresses.full_name IS 'Full name for this specific address (separate from username in user_profiles)';
        
        RAISE NOTICE 'Added full_name column to user_addresses table';
    ELSE
        RAISE NOTICE 'Column full_name already exists in user_addresses table';
    END IF;
END $$;
