'use client';

import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CheckoutModal from './checkout-modal';
import { useSimpleCart } from './simple-cart-context';

function createUrl(pathname: string, params: URLSearchParams) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;
  return `${pathname}${queryString}`;
}

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useSimpleCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Debug: Log state changes
  useEffect(() => {
    console.log('🎯 STATE CHANGE: isCheckoutOpen =', isCheckoutOpen);
  }, [isCheckoutOpen]);
  
  useEffect(() => {
    console.log('🎯 STATE CHANGE: isOpen (cart modal) =', isOpen);
  }, [isOpen]);
  const quantityRef = useRef(totalItems);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // Debug: Console log für Cart State Changes
  useEffect(() => {
    console.log('🛒 Cart Modal - Items:', items);
    console.log('🛒 Cart Modal - Total items:', totalItems);
    console.log('🛒 Cart Modal - Total price:', totalPrice);
  }, [items, totalItems, totalPrice]);

  useEffect(() => {
    if (
      totalItems &&
      totalItems !== quantityRef.current &&
      totalItems > 0
    ) {
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = totalItems;
    }
  }, [isOpen, totalItems, quantityRef]);

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
        {totalItems && totalItems > 0 && (
          <div 
            className="absolute -top-1.5 -right-1.5 bg-[#e91111] text-white text-xs font-bold rounded-full flex items-center justify-center"
            style={{
              width: '14px',
              height: '14px',
              fontSize: '9px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {totalItems}
          </div>
        )}
      </button>
      
      {/* Cart Modal */}
      <div
        className={`fixed right-0 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[9999] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          top: '80px',
          height: 'calc(85vh - 80px)',
          width: '400px',
          boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.15), -2px 0 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between p-6 border-b" 
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

        {/* Cart Content */}
        <div className="flex flex-col h-full" style={{ backgroundColor: 'white' }}>
          {/* Debug Info */}
          <div className="p-2 bg-red-100 text-xs text-red-800 border-b">
            <strong>EXTENDED DEBUG:</strong><br/>
            Items exist: {items ? 'YES' : 'NO'}<br/>
            Items array: {items ? JSON.stringify(items.slice(0, 2), null, 2) : 'NONE'}<br/>
            Items length: {items?.length || 0}<br/>
            Total quantity: {totalItems || 0}<br/>
            Total price: {totalPrice || 0}
          </div>
          
          {!items ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <ShoppingCartIcon className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-xl font-medium text-black mb-2">Cart not initialized</p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <ShoppingCartIcon className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-xl font-medium text-black mb-2">Your cart is empty</p>
              <p className="text-gray-600 text-center">Add some products to get started</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {items.map((item: any, i: number) => (
                    <div
                      key={`cart-item-${i}-${item.id}`}
                      className="flex items-center space-x-4 p-4 rounded-lg border bg-white"
                      style={{ 
                        border: '2px solid rgb(64,64,74)', 
                        backgroundColor: 'white',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                      }}
                    >
                      {/* Product Image */}
                      <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-200 flex-shrink-0">
                        {item.image ? (
                          <Image
                            className="h-full w-full object-cover"
                            fill
                            alt={item.name || 'Product'}
                            src={item.image}
                            unoptimized
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                            <span className="text-xs text-gray-500">No Image</span>
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-black truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm font-bold text-black mt-1">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-red-100 flex items-center justify-center text-sm font-bold hover:text-red-600 transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-green-100 flex items-center justify-center text-sm font-bold hover:text-green-600 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-100 rounded-md transition-colors text-gray-400 hover:text-red-600"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Footer with Total */}
              <div className="border-t p-6"
                   style={{
                     borderColor: 'rgb(64,64,74)',
                     backgroundColor: 'rgb(64,64,74)'
                   }}>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm text-white">
                    <span>Taxes</span>
                    <span>€{(totalPrice * 0.19).toFixed(2)}</span>
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
                  className="w-full rounded-md py-3 px-4 text-sm font-medium text-black transition-colors duration-200"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}
                  onClick={() => {
                    alert('BUTTON CLICKED! Der Button funktioniert!');
                    console.log('🔥 CHECKOUT BUTTON CLICKED!');
                    console.log('🔥 Current isCheckoutOpen before:', isCheckoutOpen);
                    console.log('🔥 Current isOpen before:', isOpen);
                    console.log('🔥 Cart items for checkout:', items);
                    
                    // Set states
                    setIsCheckoutOpen(true);
                    setIsOpen(false);
                    
                    console.log('🔥 States set - isCheckoutOpen should be true, isOpen should be false');
                    
                    // Check after a small delay to see if state actually changed
                    setTimeout(() => {
                      console.log('🔥 After timeout - checking states...');
                    }, 100);
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
        cartItems={items?.map((item: any) => ({
          id: item.id || '',
          title: item.name,
          handle: item.handle || '',
          quantity: item.quantity,
          price: item.price,
          variant: item.variant || '',
          image: item.image
        })) || []}
      />
    </>
  );
}
