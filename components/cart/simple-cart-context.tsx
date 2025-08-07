'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Simple Cart Item structure for localStorage
export interface SimpleCartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface SimpleCartContextType {
  items: SimpleCartItem[];
  addItem: (item: Omit<SimpleCartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isHydrated: boolean;
}

const SimpleCartContext = createContext<SimpleCartContextType | undefined>(undefined);

export function SimpleCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<SimpleCartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on start
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('herochem-cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
        console.log('🛒 Cart loaded from localStorage:', parsedCart);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('herochem-cart', JSON.stringify(items));
      console.log('💾 Cart saved to localStorage:', items);
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const addItem = (newItem: Omit<SimpleCartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id);
      if (existingItem) {
        // Erhöhe Quantity wenn Item bereits existiert
        return currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Füge neues Item hinzu
        return [...currentItems, { ...newItem, quantity: 1 }];
      }
    });
    console.log('➕ Item added to cart:', newItem);
  };

  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
    console.log('🗑️ Item removed from cart:', id);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
    console.log('🔄 Item quantity updated:', id, quantity);
  };

  const clearCart = () => {
    setItems([]);
    console.log('🗑️ Cart cleared');
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <SimpleCartContext.Provider value={{
      items: isHydrated ? items : [],
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems: isHydrated ? totalItems : 0,
      totalPrice: isHydrated ? totalPrice : 0,
      isHydrated
    }}>
      {children}
    </SimpleCartContext.Provider>
  );
}

export function useSimpleCart() {
  const context = useContext(SimpleCartContext);
  if (context === undefined) {
    throw new Error('useSimpleCart must be used within a SimpleCartProvider');
  }
  return context;
}
