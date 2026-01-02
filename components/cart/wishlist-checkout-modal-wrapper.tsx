"use client";

import AuthModal from "../auth/auth-modal";
import WishlistCheckoutModal from "./wishlist-checkout-modal";
import { useWishlist } from "./wishlist-context";

export default function WishlistCheckoutModalWrapper() {
  const {
    isWishlistCheckoutOpen,
    setIsWishlistCheckoutOpen,
    isAuthModalOpen,
    setIsAuthModalOpen,
  } = useWishlist();

  return (
    <>
      {/* Wishlist Checkout Modal */}
      <WishlistCheckoutModal
        isOpen={isWishlistCheckoutOpen}
        onClose={() => setIsWishlistCheckoutOpen(false)}
        onAuthRequired={() => {
          setIsWishlistCheckoutOpen(false);
          setIsAuthModalOpen(true);
        }}
      />

      {/* Auth Modal from Wishlist Checkout */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onCloseAction={() => {
          setIsAuthModalOpen(false);
          // Nach dem Login/Register wird das Wishlist Checkout Modal wieder geöffnet
          setTimeout(() => {
            setIsWishlistCheckoutOpen(true);
          }, 300);
        }}
      />
    </>
  );
}
