"use server";

// Shopify entfernt – Dummy-Logik/Supabase vorbereiten
// Dummy-Implementierungen für Cart-Funktionen

export async function addItem(prevState: any, selectedVariantId?: string) {
  if (!selectedVariantId) {
    return "Error adding item to cart";
  }
  return "Item added to cart (dummy)";
}
export async function removeItem(prevState: any, merchandiseId: string) {
  return "Item removed from cart (dummy)";
}

export async function updateItemQuantity(
  prevState: any,
  merchandiseId: string,
  quantity: number,
) {
  return "Item quantity updated (dummy)";
}

export async function redirectToCheckout() {
  return "Redirect to checkout (dummy)";
}

export async function createCartAndSetCookie() {
  return "Cart created (dummy)";
}
