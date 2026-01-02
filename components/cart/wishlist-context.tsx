"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { products } from "../../lib/products-database";
import { supabase } from "../../lib/supabase";
import {
  clearWishlistCookie,
  getWishlistFromCookie,
  setWishlistCookie,
  WishlistItem,
} from "../../lib/wishlist-cookie";
import { useAuth } from "../auth/auth-context";

// Re-export WishlistItem for convenience
export type { WishlistItem } from "../../lib/wishlist-cookie";

// Helper function to get product info from product ID
const getProductById = (productId: string): WishlistItem | null => {
  const product = products.find(p => p.id === productId);
  if (!product) return null;
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  };
};

// Helper function to clean wishlist parameter from URL
const cleanWishlistFromUrl = () => {
  if (typeof window === "undefined") return;
  
  const url = new URL(window.location.href);
  url.searchParams.delete("wishlist");
  window.history.replaceState({}, "", url.toString());
};

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
  totalItems: number;
  // Wishlist checkout modal state
  isWishlistCheckoutOpen: boolean;
  setIsWishlistCheckoutOpen: (open: boolean) => void;
  // Auth modal state (for wishlist checkout flow)
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  // Hydration state
  isHydrated: boolean;
  // Save cookie wishlist to Supabase (for logged in users)
  saveCookieWishlistToSupabase: () => Promise<void>;
  // Is user logged in (for UI purposes)
  isLoggedIn: boolean;
  // Signal to open wishlist modal after shared link processing
  shouldOpenWishlistModal: boolean;
  setShouldOpenWishlistModal: (open: boolean) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export function WishlistProvider({
  children,
  initialWishlist = [],
}: {
  children: React.ReactNode;
  initialWishlist?: WishlistItem[];
}) {
  const { user } = useAuth();
  const isLoggedIn = !!user;
  
  // Initialize with cookie data (passed from server or read on client)
  const [items, setItems] = useState<WishlistItem[]>(initialWishlist);
  // Wishlist checkout modal state
  const [isWishlistCheckoutOpen, setIsWishlistCheckoutOpen] = useState(false);
  // Auth modal state (for wishlist checkout flow)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  // Hydration state - set to true immediately if we have initial data
  const [isHydrated, setIsHydrated] = useState(initialWishlist.length > 0);
  // Track if Supabase wishlist has been loaded
  const [supabaseLoaded, setSupabaseLoaded] = useState(false);
  // Track if URL has been processed
  const [urlProcessed, setUrlProcessed] = useState(false);
  // Signal to open wishlist modal after shared link processing
  const [shouldOpenWishlistModal, setShouldOpenWishlistModal] = useState(false);

  // Load wishlist from Supabase when user logs in
  // This also merges any cookie wishlist items that aren't already in Supabase
  const loadWishlistFromSupabase = useCallback(async () => {
    if (!user) return;
    
    try {
      // FIRST: Get cookie wishlist before we do anything
      const cookieWishlist = getWishlistFromCookie();
      
      // Load existing Supabase wishlist
      const { data, error } = await supabase
        .from("user_wishlist")
        .select("product_id, product_name, product_price, product_image")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading wishlist from Supabase:", error);
        return;
      }

      // Convert Supabase data to WishlistItem format
      const supabaseItems: WishlistItem[] = (data || []).map((item) => ({
        id: item.product_id,
        name: item.product_name,
        price: item.product_price,
        image: item.product_image || "",
      }));

      // MERGE: Add cookie items that don't exist in Supabase
      if (cookieWishlist.length > 0) {
        const existingProductIds = new Set(supabaseItems.map((item) => item.id));
        const newItemsFromCookie = cookieWishlist.filter((item) => !existingProductIds.has(item.id));
        
        if (newItemsFromCookie.length > 0) {
          console.log("💖 Merging cookie wishlist items to Supabase:", newItemsFromCookie);
          
          // Insert new items into Supabase
          const insertData = newItemsFromCookie.map((item) => ({
            user_id: user.id,
            product_id: item.id,
            product_name: item.name,
            product_price: item.price,
            product_image: item.image,
          }));

          const { error: insertError } = await supabase
            .from("user_wishlist")
            .insert(insertData);

          if (insertError) {
            console.error("Error merging cookie wishlist to Supabase:", insertError);
          } else {
            // Add new items to our local array
            supabaseItems.push(...newItemsFromCookie);
            console.log("💖 Cookie wishlist merged to Supabase successfully");
          }
        }
      }

      // Set items from merged result
      setItems(supabaseItems);
      console.log("💖 Wishlist loaded from Supabase:", supabaseItems);
      
      // Clear cookie since Supabase is now the source of truth
      clearWishlistCookie();
      
      setSupabaseLoaded(true);
    } catch (error) {
      console.error("Error loading wishlist from Supabase:", error);
    }
  }, [user]);

  // Save cookie wishlist to Supabase (merge with existing)
  const saveCookieWishlistToSupabase = useCallback(async () => {
    if (!user) return;
    
    try {
      // Get current cookie wishlist
      const cookieWishlist = getWishlistFromCookie();
      
      if (cookieWishlist.length === 0) {
        console.log("💖 No cookie wishlist to save");
        return;
      }

      // Get existing Supabase wishlist
      const { data: existingData, error: fetchError } = await supabase
        .from("user_wishlist")
        .select("product_id")
        .eq("user_id", user.id);

      if (fetchError) {
        console.error("Error fetching existing wishlist:", fetchError);
        return;
      }

      const existingProductIds = new Set(existingData?.map((item) => item.product_id) || []);

      // Filter out items that already exist in Supabase
      const newItems = cookieWishlist.filter((item) => !existingProductIds.has(item.id));

      if (newItems.length === 0) {
        console.log("💖 All cookie items already in Supabase wishlist");
        // Clear cookie and reload from Supabase
        clearWishlistCookie();
        await loadWishlistFromSupabase();
        return;
      }

      // Insert new items into Supabase
      const insertData = newItems.map((item) => ({
        user_id: user.id,
        product_id: item.id,
        product_name: item.name,
        product_price: item.price,
        product_image: item.image,
      }));

      const { error: insertError } = await supabase
        .from("user_wishlist")
        .insert(insertData);

      if (insertError) {
        console.error("Error saving wishlist to Supabase:", insertError);
        return;
      }

      console.log("💖 Cookie wishlist saved to Supabase:", newItems);
      
      // Clear cookie wishlist after successful save
      clearWishlistCookie();
      
      // Reload from Supabase to get merged list
      await loadWishlistFromSupabase();
    } catch (error) {
      console.error("Error saving wishlist to Supabase:", error);
    }
  }, [user, loadWishlistFromSupabase]);

  // Add item - to Supabase if logged in, to cookies if not
  const addItem = useCallback(async (newItem: WishlistItem) => {
    if (isLoggedIn && user) {
      // Add to Supabase
      try {
        const { error } = await supabase
          .from("user_wishlist")
          .upsert({
            user_id: user.id,
            product_id: newItem.id,
            product_name: newItem.name,
            product_price: newItem.price,
            product_image: newItem.image,
          }, { onConflict: "user_id,product_id" });

        if (error) {
          console.error("Error adding to Supabase wishlist:", error);
          return;
        }

        // Update local state
        setItems((currentItems) => {
          const existingItem = currentItems.find((item) => item.id === newItem.id);
          if (existingItem) {
            console.log("💖 Item already in wishlist:", newItem.name);
            return currentItems;
          }
          console.log("💖 Item added to Supabase wishlist:", newItem.name);
          return [...currentItems, newItem];
        });
      } catch (error) {
        console.error("Error adding to Supabase wishlist:", error);
      }
    } else {
      // Add to cookies (local state)
      setItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.id === newItem.id);
        if (existingItem) {
          console.log("💖 Item already in wishlist:", newItem.name);
          return currentItems;
        }
        console.log("💖 Item added to cookie wishlist:", newItem.name);
        return [...currentItems, newItem];
      });
    }
  }, [isLoggedIn, user]);

  // Remove item - from Supabase if logged in, from cookies if not
  const removeItem = useCallback(async (id: string) => {
    console.log("🗑️ removeItem called:", id, "isLoggedIn:", isLoggedIn, "user:", user?.id);
    
    if (isLoggedIn && user) {
      // Remove from Supabase
      try {
        console.log("🗑️ Attempting to delete from Supabase...");
        const { data, error, count } = await supabase
          .from("user_wishlist")
          .delete()
          .eq("user_id", user.id)
          .eq("product_id", id)
          .select();

        console.log("🗑️ Supabase delete response:", { data, error, count });

        if (error) {
          console.error("Error removing from Supabase wishlist:", error);
          // Still update local state so UI responds
          setItems((currentItems) => currentItems.filter((item) => item.id !== id));
          return;
        }

        // Update local state
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
        console.log("💔 Item removed from Supabase wishlist:", id);
      } catch (error) {
        console.error("Error removing from Supabase wishlist:", error);
        // Still update local state so UI responds
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
      }
    } else {
      // Remove from cookies (local state)
      setItems((currentItems) => currentItems.filter((item) => item.id !== id));
      console.log("💔 Item removed from cookie wishlist:", id);
    }
  }, [isLoggedIn, user]);

  // Clear wishlist - from Supabase if logged in, from cookies if not
  const clearWishlist = useCallback(async () => {
    if (isLoggedIn && user) {
      // Clear from Supabase
      try {
        const { error } = await supabase
          .from("user_wishlist")
          .delete()
          .eq("user_id", user.id);

        if (error) {
          console.error("Error clearing Supabase wishlist:", error);
          return;
        }

        setItems([]);
        console.log("💔 Supabase wishlist cleared");
      } catch (error) {
        console.error("Error clearing Supabase wishlist:", error);
      }
    } else {
      // Clear cookies
      setItems([]);
      clearWishlistCookie();
      console.log("💔 Cookie wishlist cleared");
    }
  }, [isLoggedIn, user]);

  // On client mount, sync with cookie (handles case where initialWishlist was empty)
  // Only do this if user is NOT logged in
  useEffect(() => {
    let mounted = true;
    
    const initializeWishlist = () => {
      try {
        // Only load from cookie if NOT logged in
        if (!isLoggedIn && initialWishlist.length === 0) {
          const cookieWishlist = getWishlistFromCookie();
          if (cookieWishlist.length > 0 && mounted) {
            setItems(cookieWishlist);
            console.log("💖 Wishlist loaded from cookie:", cookieWishlist);
          }
        }
      } catch (error) {
        console.error("Error during wishlist initialization:", error);
      }
      
      if (mounted) {
        setIsHydrated(true);
      }
    };
    
    // Run initialization immediately
    initializeWishlist();
    
    return () => { mounted = false; };
  }, [initialWishlist.length, isLoggedIn]);

  // Load from Supabase when user logs in
  useEffect(() => {
    if (isLoggedIn && !supabaseLoaded) {
      loadWishlistFromSupabase();
    }
    // Reset supabaseLoaded when user logs out
    if (!isLoggedIn && supabaseLoaded) {
      setSupabaseLoaded(false);
      // Load from cookie again when logged out
      const cookieWishlist = getWishlistFromCookie();
      if (cookieWishlist.length > 0) {
        setItems(cookieWishlist);
      } else {
        setItems([]);
      }
    }
  }, [isLoggedIn, supabaseLoaded, loadWishlistFromSupabase]);

  // Save wishlist to cookie on changes (only if NOT logged in)
  useEffect(() => {
    if (!isHydrated || isLoggedIn) return;
    
    const timeoutId = setTimeout(() => {
      try {
        setWishlistCookie(items);
      } catch (error) {
        console.error("Error saving wishlist to cookie:", error);
      }
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [items, isHydrated, isLoggedIn]);

  const isInWishlist = useCallback((id: string) => {
    return items.some((item) => item.id === id);
  }, [items]);

  const totalItems = items.length;

  // Replace wishlist with items from shared link (for logged out users)
  const replaceWishlistFromLink = useCallback(async (productIds: string[]) => {
    // Convert product IDs to wishlist items
    const newItems: WishlistItem[] = [];
    for (const productId of productIds) {
      const product = getProductById(productId);
      if (product) {
        newItems.push(product);
      }
    }

    if (newItems.length === 0) {
      console.log("💖 No valid products found in shared link");
      cleanWishlistFromUrl();
      return;
    }

    if (isLoggedIn && user) {
      // Logged in: Replace Supabase wishlist
      try {
        // First, delete all existing wishlist items
        const { error: deleteError } = await supabase
          .from("user_wishlist")
          .delete()
          .eq("user_id", user.id);

        if (deleteError) {
          console.error("Error clearing Supabase wishlist:", deleteError);
          return;
        }

        // Insert new items
        const insertData = newItems.map((item) => ({
          user_id: user.id,
          product_id: item.id,
          product_name: item.name,
          product_price: item.price,
          product_image: item.image,
        }));

        const { error: insertError } = await supabase
          .from("user_wishlist")
          .insert(insertData);

        if (insertError) {
          console.error("Error inserting shared wishlist to Supabase:", insertError);
          return;
        }

        setItems(newItems);
        console.log("💖 Wishlist replaced from shared link (Supabase):", newItems);
      } catch (error) {
        console.error("Error replacing Supabase wishlist from link:", error);
      }
    } else {
      // Logged out: Replace cookie wishlist
      clearWishlistCookie();
      setItems(newItems);
      setWishlistCookie(newItems);
      console.log("💖 Wishlist replaced from shared link (cookies):", newItems);
    }

    // Clean URL after processing
    cleanWishlistFromUrl();
  }, [isLoggedIn, user]);

  // Check for wishlist parameter in URL on mount
  useEffect(() => {
    if (typeof window === "undefined" || urlProcessed) return;
    
    const url = new URL(window.location.href);
    const wishlistParam = url.searchParams.get("wishlist");
    
    if (!wishlistParam) {
      setUrlProcessed(true);
      return;
    }

    // Parse product IDs from URL
    const productIds = decodeURIComponent(wishlistParam).split(",").filter(id => id.trim());
    
    if (productIds.length === 0) {
      cleanWishlistFromUrl();
      setUrlProcessed(true);
      return;
    }

    console.log("💖 Found shared wishlist in URL:", productIds);

    // Wait for hydration to complete
    if (!isHydrated) return;

    if (isLoggedIn) {
      // Wait for Supabase wishlist to be loaded before showing confirmation
      if (!supabaseLoaded) return;
      
      // Logged in: Show native browser confirmation dialog
      const hasExistingItems = items.length > 0;
      const confirmMessage = hasExistingItems
        ? `Du hast bereits ${items.length} Artikel in deiner Wishlist. Möchtest du diese durch ${productIds.length} neue Artikel aus dem geteilten Link ersetzen?`
        : `Möchtest du ${productIds.length} Artikel aus dem geteilten Link zu deiner Wishlist hinzufügen?`;
      
      // Use setTimeout to ensure it runs after render
      setTimeout(() => {
        const userConfirmed = window.confirm(confirmMessage);
        
        if (userConfirmed) {
          replaceWishlistFromLink(productIds);
          // Signal to open wishlist modal after 1000ms delay
          setTimeout(() => {
            setShouldOpenWishlistModal(true);
          }, 1000);
        } else {
          cleanWishlistFromUrl();
          console.log("💔 Shared wishlist declined");
        }
      }, 100);
    } else {
      // Logged out: Replace cookie wishlist directly
      replaceWishlistFromLink(productIds);
      // Signal to open wishlist modal after 1000ms delay
      setTimeout(() => {
        setShouldOpenWishlistModal(true);
      }, 1000);
    }

    setUrlProcessed(true);
  }, [isHydrated, isLoggedIn, urlProcessed, replaceWishlistFromLink, supabaseLoaded, items.length]);

  return (
    <WishlistContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearWishlist,
        isInWishlist,
        totalItems,
        // Wishlist checkout modal state
        isWishlistCheckoutOpen,
        setIsWishlistCheckoutOpen,
        // Auth modal state (for wishlist checkout flow)
        isAuthModalOpen,
        setIsAuthModalOpen,
        // Hydration state
        isHydrated,
        // Supabase functions
        saveCookieWishlistToSupabase,
        isLoggedIn,
        // Signal to open wishlist modal after shared link processing
        shouldOpenWishlistModal,
        setShouldOpenWishlistModal,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
