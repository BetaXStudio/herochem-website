'use client';

import AuthModal from '../auth/auth-modal';
import CheckoutModal from './checkout-modal';
import { useSimpleCart } from './simple-cart-context';

export default function CheckoutModalWrapper() {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    items 
  } = useSimpleCart();

  return (
    <>
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onAuthRequired={() => {
          setIsCheckoutOpen(false);
          setIsAuthModalOpen(true);
        }}
        cartItems={items.map(item => ({
          id: item.id,
          title: item.name,
          handle: item.id, // Verwende ID als Handle falls nicht verfügbar
          quantity: item.quantity,
          price: item.price,
          variant: undefined, // SimpleCart hat keine Varianten
          image: item.image || ''
        }))}
      />
      
      {/* Auth Modal from Checkout */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onCloseAction={() => {
          setIsAuthModalOpen(false);
          // Nach dem Login/Register wird das Checkout Modal wieder geöffnet
          setTimeout(() => {
            setIsCheckoutOpen(true);
          }, 300);
        }}
      />
    </>
  );
}
