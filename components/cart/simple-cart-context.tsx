"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
    clearCartCookie,
    getCartFromCookie,
    setCartCookie,
} from "../../lib/cart-cookie";

// Simple Cart Item structure for cookie storage
export interface SimpleCartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface SimpleCartContextType {
  items: SimpleCartItem[];
  addItem: (item: Omit<SimpleCartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  // Checkout modal state
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  // Hydration state
  isHydrated: boolean;
}

const SimpleCartContext = createContext<SimpleCartContextType | undefined>(
  undefined,
);

export function SimpleCartProvider({
  children,
  initialCart = [],
}: {
  children: React.ReactNode;
  initialCart?: SimpleCartItem[];
}) {
  // Initialize with cookie data (passed from server or read on client)
  const [items, setItems] = useState<SimpleCartItem[]>(initialCart);
  // Checkout modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  // Hydration state - set to true immediately if we have initial data
  const [isHydrated, setIsHydrated] = useState(initialCart.length > 0);

  // On client mount, sync with cookie (handles case where initialCart was empty)
  useEffect(() => {
    let mounted = true;
    
    const initializeCart = () => {
      try {
        // If no initial cart was provided, try to read from cookie on client
        if (initialCart.length === 0) {
          const cookieCart = getCartFromCookie();
          if (cookieCart.length > 0 && mounted) {
            setItems(cookieCart);
            console.log("🍪 Cart loaded from cookie:", cookieCart);
          }
        }
        
        // Also migrate from old localStorage if exists
        if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
          const oldCart = localStorage.getItem("herochem-cart");
          if (oldCart) {
            try {
              const parsed = JSON.parse(oldCart);
              if (Array.isArray(parsed) && parsed.length > 0 && mounted) {
                // Only migrate if we don't already have items
                setItems((current) => {
                  if (current.length === 0) {
                    setCartCookie(parsed);
                    console.log("📦 Cart migrated from localStorage to cookie:", parsed);
                    return parsed;
                  }
                  return current;
                });
              }
              // Remove old localStorage cart after migration
              localStorage.removeItem("herochem-cart");
            } catch (parseError) {
              console.error("Error parsing localStorage cart:", parseError);
              localStorage.removeItem("herochem-cart");
            }
          }
        }
      } catch (error) {
        console.error("Error during cart initialization:", error);
      }
      
      if (mounted) {
        setIsHydrated(true);
      }
    };
    
    // Small delay to ensure DOM is ready (helps with Safari)
    requestAnimationFrame(initializeCart);
    
    return () => { mounted = false; };
  }, [initialCart.length]);

  // Save cart to cookie on changes (with debounce for performance)
  useEffect(() => {
    if (!isHydrated) return;
    
    const timeoutId = setTimeout(() => {
      try {
        setCartCookie(items);
      } catch (error) {
        console.error("Error saving cart to cookie:", error);
      }
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [items, isHydrated]);

  const addItem = (newItem: Omit<SimpleCartItem, "quantity">) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        // Erhöhe Quantity wenn Item bereits existiert
        return currentItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // Füge neues Item hinzu
        return [...currentItems, { ...newItem, quantity: 1 }];
      }
    });
    console.log("➕ Item added to cart:", newItem);
  };

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    console.log("🗑️ Item removed from cart:", id);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
    console.log("🔄 Item quantity updated:", id, quantity);
  };

  const clearCart = () => {
    setItems([]);
    clearCartCookie();
    console.log("🗑️ Cart cleared");
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <SimpleCartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        // Checkout modal state
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        // Hydration state
        isHydrated,
      }}
    >
      {children}
    </SimpleCartContext.Provider>
  );
}

export function useSimpleCart() {
  const context = useContext(SimpleCartContext);
  if (context === undefined) {
    throw new Error("useSimpleCart must be used within a SimpleCartProvider");
  }
  return context;
}
