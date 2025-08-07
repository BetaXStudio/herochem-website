'use client';

import { ShoppingCartIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import AuthModal from '../auth/auth-modal';
import CheckoutModal from './checkout-modal';
import { useSimpleCart } from './simple-cart-context';

export default function SimpleCartModal() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, isHydrated } = useSimpleCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {/* Cart Button */}
      <button
        aria-label="Open cart"
        onClick={openCart}
        className="relative transition-all duration-200 hover:bg-[#23232b] group"
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: 'rgba(45, 45, 52, 0.8)',
          border: 'none',
          borderRadius: '7px',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 2px 8px 0 rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'inset 0 3px 6px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.7), inset 0 -1px 0 rgba(255, 255, 255, 0.08), 0 0 0 1px rgba(233, 17, 17, 0.3), 0 2px 8px 0 rgba(0,0,0,0.25)';
          e.currentTarget.style.backgroundColor = 'rgba(40, 40, 47, 0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 2px 8px 0 rgba(0,0,0,0.25)';
          e.currentTarget.style.backgroundColor = 'rgba(45, 45, 52, 0.8)';
        }}
      >
        <ShoppingCartIcon 
          className="h-4 w-4 text-white group-hover:text-[#eb1313] transition-colors duration-200" 
        />
        <div 
          className="absolute -top-1.5 -right-1.5 bg-[#e91111] text-white text-xs font-bold rounded-full flex items-center justify-center transition-opacity duration-200"
          style={{
            width: '14px',
            height: '14px',
            fontSize: '9px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            opacity: isHydrated && totalItems > 0 ? 1 : 0,
            visibility: isHydrated && totalItems > 0 ? 'visible' : 'hidden'
          }}
        >
          {isHydrated ? totalItems : 0}
        </div>
      </button>
      
      {/* Cart Modal */}
      <div
        className={`bg-white shadow-xl transform transition-transform duration-300 ease-in-out w-[400px] max-w-[400px] min-w-[400px]
                    max-[800px]:w-full max-[800px]:max-w-full max-[800px]:min-w-full ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          position: 'fixed',
          top: '47px',
          right: '0px',
          height: 'calc(100vh - 119px)',
          zIndex: 9998,
          boxShadow: '-4px 0 24px rgba(27, 26, 26, 0.15), -2px 0 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between p-4 border-b" 
             style={{ borderColor: 'rgb(64,64,74)', backgroundColor: 'rgb(64,64,74)' }}>
          <h2 className="text-lg font-semibold text-white" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>Shopping Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-600 rounded-md transition-colors duration-200"
            aria-label="Close cart"
          >
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Top Shadow Overlay */}
        <div 
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.1) 60%, transparent 100%)'
          }}
        ></div>

        {/* Cart Content */}
        <div className="flex flex-col h-full" style={{ backgroundColor: 'white' }}>
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <ShoppingCartIcon className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-xl font-medium text-black mb-2" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>Your cart is empty</p>
              <p className="text-gray-600 text-center" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>Add some products to get started</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 pb-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 rounded-lg border bg-white"
                      style={{ 
                        border: '2px solid rgb(64,64,74)', 
                        backgroundColor: 'white',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                      }}
                    >
                      {/* Product Image */}
                      <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-200 flex-shrink-0">
                        <Image
                          className="h-full w-full object-cover"
                          fill
                          alt={item.name}
                          src={item.image}
                          unoptimized
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-black overflow-visible whitespace-nowrap z-10 relative">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          €{item.price.toFixed(2)} each
                        </p>
                        <p className="text-sm font-bold text-black mt-1">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-6 w-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-500 text-sm font-bold">-</span>
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-6 w-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <span className="text-gray-500 text-sm font-bold">+</span>
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Footer with Total */}
              <div className="border-t p-4"
                   style={{
                     borderColor: 'rgb(64,64,74)',
                     backgroundColor: 'rgb(64,64,74)'
                   }}>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm text-white">
                    <span>Items ({totalItems})</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white">
                    <span>Total</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  className="w-full rounded-md py-2 px-4 text-sm font-medium text-black transition-colors duration-200"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}
                  onClick={() => {
                    setIsCheckoutOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
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
      
      {/* Auth Modal */}
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
