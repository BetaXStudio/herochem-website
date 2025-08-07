-- Fix missing DELETE policies for orders system
-- This allows users to delete their own orders and order items

-- Add DELETE policy for orders table
CREATE POLICY "Users can delete their own orders" ON orders
  FOR DELETE USING (auth.uid() = user_id);

-- Add DELETE policy for order_items table  
CREATE POLICY "Users can delete their own order items" ON order_items
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
  );

-- Add DELETE policy for order_status_history table (optional, for completeness)
CREATE POLICY "Users can delete their own order status history" ON order_status_history
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_status_history.order_id AND orders.user_id = auth.uid())
  );
