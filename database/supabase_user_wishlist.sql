-- =====================================================
-- HEROCHEM - User Wishlist Table
-- Speichert Wishlist-Einträge für eingeloggte Benutzer
-- =====================================================

-- Wishlist Tabelle
CREATE TABLE IF NOT EXISTS user_wishlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    product_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Unique constraint: Ein Produkt kann nur einmal pro User in der Wishlist sein
    UNIQUE(user_id, product_id)
);

-- Index für schnelle Abfragen nach user_id
CREATE INDEX IF NOT EXISTS idx_user_wishlist_user_id ON user_wishlist(user_id);

-- Index für schnelle Abfragen nach product_id
CREATE INDEX IF NOT EXISTS idx_user_wishlist_product_id ON user_wishlist(product_id);

-- =====================================================
-- Row Level Security (RLS) Policies
-- =====================================================

-- Enable RLS
ALTER TABLE user_wishlist ENABLE ROW LEVEL SECURITY;

-- Policy: Benutzer können nur ihre eigenen Wishlist-Einträge lesen
CREATE POLICY "Users can view own wishlist items"
    ON user_wishlist
    FOR SELECT
    USING (auth.uid() = user_id);

-- Policy: Benutzer können nur ihre eigenen Wishlist-Einträge erstellen
CREATE POLICY "Users can insert own wishlist items"
    ON user_wishlist
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Policy: Benutzer können nur ihre eigenen Wishlist-Einträge löschen
CREATE POLICY "Users can delete own wishlist items"
    ON user_wishlist
    FOR DELETE
    USING (auth.uid() = user_id);

-- Policy: Benutzer können ihre eigenen Wishlist-Einträge aktualisieren (falls nötig)
CREATE POLICY "Users can update own wishlist items"
    ON user_wishlist
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);
