-- Sample data for testing the Order History system
-- This file contains sample orders and order items for testing purposes

-- IMPORTANT: Replace 'your-user-id-here' with your actual user ID from Supabase auth.users table
-- You can find your user ID by running: SELECT id FROM auth.users WHERE email = 'your-email@example.com';

-- Sample orders (replace the user_id with your actual user ID)
DO $$
DECLARE
    sample_user_id UUID := 'your-user-id-here'; -- REPLACE THIS WITH YOUR ACTUAL USER ID
    order1_id UUID;
    order2_id UUID;
    order3_id UUID;
    sample_address_id UUID;
BEGIN
    -- First, create a sample address if none exists
    INSERT INTO user_addresses (user_id, full_name, street, house_number, city, postal_code, country, is_primary)
    VALUES (sample_user_id, 'John Doe', 'Main Street', '123', 'Berlin', '10115', 'Germany', true)
    ON CONFLICT DO NOTHING
    RETURNING id INTO sample_address_id;
    
    -- If address already exists, get the ID
    IF sample_address_id IS NULL THEN
        SELECT id INTO sample_address_id FROM user_addresses 
        WHERE user_id = sample_user_id AND is_primary = true LIMIT 1;
    END IF;

    -- Sample Order 1: Delivered order
    INSERT INTO orders (
        user_id, status, total_amount, currency, shipping_cost, tax_amount, 
        shipping_address_id, created_at, shipped_at, delivered_at
    ) VALUES (
        sample_user_id, 'delivered', 89.97, 'EUR', 4.99, 17.14,
        sample_address_id, NOW() - INTERVAL '15 days', NOW() - INTERVAL '10 days', NOW() - INTERVAL '7 days'
    ) RETURNING id INTO order1_id;

    -- Sample Order 2: Shipped order
    INSERT INTO orders (
        user_id, status, total_amount, currency, shipping_cost, tax_amount,
        shipping_address_id, created_at, shipped_at
    ) VALUES (
        sample_user_id, 'shipped', 145.50, 'EUR', 6.99, 27.69,
        sample_address_id, NOW() - INTERVAL '5 days', NOW() - INTERVAL '2 days'
    ) RETURNING id INTO order2_id;

    -- Sample Order 3: Processing order
    INSERT INTO orders (
        user_id, status, total_amount, currency, shipping_cost, tax_amount,
        shipping_address_id, created_at
    ) VALUES (
        sample_user_id, 'processing', 67.45, 'EUR', 4.99, 12.87,
        sample_address_id, NOW() - INTERVAL '1 day'
    ) RETURNING id INTO order3_id;

    -- Sample order items for Order 1
    INSERT INTO order_items (order_id, product_id, product_name, product_variant, quantity, unit_price, total_price, product_image_url) VALUES
    (order1_id, 'whey-protein-1kg', 'Premium Whey Protein', '1kg - Vanilla', 1, 29.99, 29.99, '/products/whey-protein.jpg'),
    (order1_id, 'creatine-500g', 'Pure Creatine Monohydrate', '500g', 2, 19.99, 39.98, '/products/creatine.jpg'),
    (order1_id, 'vitamin-d3', 'Vitamin D3 + K2', '90 Capsules', 1, 15.00, 15.00, '/products/vitamin-d3.jpg');

    -- Sample order items for Order 2
    INSERT INTO order_items (order_id, product_id, product_name, product_variant, quantity, unit_price, total_price, product_image_url) VALUES
    (order2_id, 'pre-workout', 'Extreme Pre-Workout', 'Berry Blast - 300g', 1, 34.99, 34.99, '/products/pre-workout.jpg'),
    (order2_id, 'whey-protein-2kg', 'Premium Whey Protein', '2kg - Chocolate', 1, 49.99, 49.99, '/products/whey-protein.jpg'),
    (order2_id, 'bcaa-powder', 'BCAA 2:1:1', 'Lemon - 400g', 1, 24.99, 24.99, '/products/bcaa.jpg'),
    (order2_id, 'fish-oil', 'Omega-3 Fish Oil', '120 Softgels', 1, 22.54, 22.54, '/products/fish-oil.jpg');

    -- Sample order items for Order 3
    INSERT INTO order_items (order_id, product_id, product_name, product_variant, quantity, unit_price, total_price, product_image_url) VALUES
    (order3_id, 'mass-gainer', 'Serious Mass Gainer', '3kg - Strawberry', 1, 39.99, 39.99, '/products/mass-gainer.jpg'),
    (order3_id, 'glutamine', 'L-Glutamine Powder', '500g', 1, 16.47, 16.47, '/products/glutamine.jpg');

    RAISE NOTICE 'Sample orders created successfully with IDs: %, %, %', order1_id, order2_id, order3_id;
    
EXCEPTION
    WHEN others THEN
        RAISE NOTICE 'Error creating sample data: %', SQLERRM;
        RAISE NOTICE 'Make sure to replace your-user-id-here with your actual user ID from auth.users table';
END $$;

-- Query to get your user ID (run this first to get your user ID)
-- SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';

-- After getting your user ID, replace 'your-user-id-here' in this file and run the script above
