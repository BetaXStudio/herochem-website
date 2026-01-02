/**
 * Wishlist Cookie Utilities
 * Handles wishlist persistence via cookies for SSR compatibility
 */

// Wishlist Item structure (duplicated from wishlist-context to avoid circular imports)
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

const WISHLIST_COOKIE_NAME = "herochem-wishlist";
const WISHLIST_COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

/**
 * Parse wishlist items from cookie string
 */
export function parseWishlistCookie(cookieString: string | undefined): WishlistItem[] {
  if (!cookieString) return [];
  
  try {
    // Find the wishlist cookie
    const cookies = cookieString.split(";");
    const wishlistCookie = cookies.find((c) => c.trim().startsWith(`${WISHLIST_COOKIE_NAME}=`));
    
    if (!wishlistCookie) return [];
    
    const value = wishlistCookie.split("=")[1];
    if (!value) return [];
    
    const decoded = decodeURIComponent(value);
    const parsed = JSON.parse(decoded);
    
    // Validate structure
    if (!Array.isArray(parsed)) return [];
    
    return parsed.filter(
      (item): item is WishlistItem =>
        item &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number"
    );
  } catch (error) {
    console.error("Error parsing wishlist cookie:", error);
    return [];
  }
}

/**
 * Set wishlist cookie (client-side)
 */
export function setWishlistCookie(items: WishlistItem[]): void {
  // Guard: Only run on client
  if (typeof document === "undefined") return;
  
  try {
    // Clean items to ensure valid JSON
    const cleanItems = items.map(item => ({
      id: String(item.id || ""),
      name: String(item.name || ""),
      price: Number(item.price) || 0,
      image: String(item.image || ""),
    }));
    
    const value = encodeURIComponent(JSON.stringify(cleanItems));
    
    // Check size limit (4KB max for cookies)
    if (value.length > 4000) {
      console.warn("Wishlist cookie size exceeds 4KB limit, truncating older items");
      // Keep only the most recent items that fit
      const truncatedItems = cleanItems.slice(-20);
      const truncatedValue = encodeURIComponent(JSON.stringify(truncatedItems));
      document.cookie = `${WISHLIST_COOKIE_NAME}=${truncatedValue}; path=/; max-age=${WISHLIST_COOKIE_MAX_AGE}; SameSite=Lax`;
      return;
    }
    
    document.cookie = `${WISHLIST_COOKIE_NAME}=${value}; path=/; max-age=${WISHLIST_COOKIE_MAX_AGE}; SameSite=Lax`;
  } catch (error) {
    console.error("Error setting wishlist cookie:", error);
  }
}

/**
 * Get wishlist from cookie (client-side)
 */
export function getWishlistFromCookie(): WishlistItem[] {
  if (typeof document === "undefined") return [];
  return parseWishlistCookie(document.cookie);
}

/**
 * Clear wishlist cookie (client-side)
 */
export function clearWishlistCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${WISHLIST_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
}
