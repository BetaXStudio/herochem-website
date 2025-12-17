/**
 * Cart Cookie Utilities
 * Handles cart persistence via cookies for SSR compatibility
 */

import { SimpleCartItem } from "../components/cart/simple-cart-context";

const CART_COOKIE_NAME = "herochem-cart";
const CART_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/**
 * Parse cart items from cookie string
 */
export function parseCartCookie(cookieString: string | undefined): SimpleCartItem[] {
  if (!cookieString) return [];
  
  try {
    // Find the cart cookie
    const cookies = cookieString.split(";");
    const cartCookie = cookies.find((c) => c.trim().startsWith(`${CART_COOKIE_NAME}=`));
    
    if (!cartCookie) return [];
    
    const value = cartCookie.split("=")[1];
    if (!value) return [];
    
    const decoded = decodeURIComponent(value);
    const parsed = JSON.parse(decoded);
    
    // Validate structure
    if (!Array.isArray(parsed)) return [];
    
    return parsed.filter(
      (item): item is SimpleCartItem =>
        item &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number"
    );
  } catch (error) {
    console.error("Error parsing cart cookie:", error);
    return [];
  }
}

/**
 * Set cart cookie (client-side)
 */
export function setCartCookie(items: SimpleCartItem[]): void {
  // Guard: Only run on client
  if (typeof document === "undefined") return;
  
  try {
    // Clean items to ensure valid JSON
    const cleanItems = items.map(item => ({
      id: String(item.id || ""),
      name: String(item.name || ""),
      price: Number(item.price) || 0,
      image: String(item.image || ""),
      quantity: Math.max(1, Math.floor(Number(item.quantity) || 1)),
    }));
    
    const value = encodeURIComponent(JSON.stringify(cleanItems));
    
    // Check size limit (4KB max for cookies)
    if (value.length > 4000) {
      console.warn("Cart cookie size exceeds 4KB limit, truncating older items");
      // Keep only the most recent items that fit
      const truncatedItems = cleanItems.slice(-20);
      const truncatedValue = encodeURIComponent(JSON.stringify(truncatedItems));
      document.cookie = `${CART_COOKIE_NAME}=${truncatedValue}; path=/; max-age=${CART_COOKIE_MAX_AGE}; SameSite=Lax`;
      return;
    }
    
    document.cookie = `${CART_COOKIE_NAME}=${value}; path=/; max-age=${CART_COOKIE_MAX_AGE}; SameSite=Lax`;
  } catch (error) {
    console.error("Error setting cart cookie:", error);
  }
}

/**
 * Get cart from cookie (client-side)
 */
export function getCartFromCookie(): SimpleCartItem[] {
  if (typeof document === "undefined") return [];
  return parseCartCookie(document.cookie);
}

/**
 * Clear cart cookie (client-side)
 */
export function clearCartCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${CART_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
}
