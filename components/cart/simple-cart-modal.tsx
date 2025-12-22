"use client";

import {
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../contexts/modal-context";
import { useSimpleCart } from "./simple-cart-context";

export default function SimpleCartModal() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    isHydrated,
    setIsCheckoutOpen,
  } = useSimpleCart();
  const { setSimpleCartModalOpen } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null = not yet determined

  // Animated close function - waits for animation before hiding
  const closeCart = () => {
    if (isClosing || !isOpen) return;
    
    // Use requestAnimationFrame to ensure the isClosing state triggers a visual update
    // before we start the timeout. This prevents the animation from being skipped
    // on pages with heavy DOM updates (like Categories page)
    requestAnimationFrame(() => {
      setIsClosing(true);
      // Use another rAF to ensure the browser has painted the closing state
      requestAnimationFrame(() => {
        // Wait for animation to complete (250ms opacity transition)
        setTimeout(() => {
          setIsOpen(false);
          setIsClosing(false);
          // Set modal context to false AFTER animation completes and isOpen is false
          setSimpleCartModalOpen(false);
        }, 250);
      });
    });
  };

  const openCart = () => {
    setIsClosing(false);
    setIsOpen(true);
    setSimpleCartModalOpen(true);
  };

  const toggleCart = () => {
    if (isOpen || isClosing) {
      closeCart();
    } else {
      openCart();
    }
  };

  // Check if we're on mobile - only render on mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Portal mount state - needed to render modal outside navbar's blur filter
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  // Don't render anything on desktop or before hydration
  if (isMobile === null || isMobile === false) {
    return null;
  }

  // The modal content that will be rendered via portal (outside navbar's blur filter)
  const modalContent = portalContainer ? createPortal(
    <>
      {/* Backdrop - verdeckt weiße Linie von der Navbar */}
      {(isOpen || isClosing) && (
        <div
          className="fixed bg-transparent pointer-events-none"
          style={{
            top: "88px", // 41px navbar + 47px search modal
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: 10025, // Über der Navbar search bar
          }}
          aria-hidden="true"
        />
      )}

      {/* Cart Modal - Mobile only - Rendered via Portal to escape navbar blur */}
      <div
        className="simple-cart-modal"
        style={{
          position: "fixed",
          top: "88px", // Mobile navbar height
          height: "calc(100vh - 88px)", // Mobile height
          zIndex: 10025, // Über der Navbar search bar (10020)
          transition: "transform 250ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)", // Both 250ms for smooth close
          // Mobile full width
          width: "100vw",
          right: "0px",
          left: "0px",
          transform: (isOpen && !isClosing)
            ? "translateX(0) translateY(0)"
            : "translateX(2%) translateY(-0.5vh)", // Tiny offset - almost no movement
          opacity: (isOpen && !isClosing) ? 1 : 0,
          background: "#2d2d34", // Match categories page background
          backdropFilter: "blur(20px)", // Match categories page blur effect
          pointerEvents: (isOpen && !isClosing) ? "auto" : "none",
          paddingBottom: "100px", // Extra space for Safari browser elements
          // CPU/Hardware rendering - no GPU acceleration to reduce memory pressure
        }}
      >
        {/* Cart Content Container */}
        <div
          className="h-full flex flex-col"
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >




          {/* Cart Content */}
          <div
            className="flex flex-col flex-1 mx-4"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "inset 0 4px 16px rgba(0, 0, 0, 0.25)",
              marginTop: "20px", // Adjusted top padding for better spacing
              marginBottom: "30px" // Balanced space for gray area visibility
            }}
          >
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-start pt-16 p-4">
              <ShoppingCartIcon className="h-16 w-16 text-gray-300 mb-4" />
              <p
                className="text-base font-medium text-gray-500 mb-2"
              >
                Your cart is empty
              </p>
              <p
                className="text-sm text-gray-400 text-center"
              >
                Add some products to get started
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 pb-2">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-3 rounded-xl group"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid rgba(45, 45, 52, 0.1)",
                        // CPU rendering - no backdropFilter (GPU-intensive)
                        contain: "layout style paint",
                        WebkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                        willChange: "auto",
                      }}
                    >
                      {/* Product Image - CPU rendering, no caching */}
                      <div className="relative h-14 w-14 overflow-hidden rounded-lg flex-shrink-0 bg-white" style={{
                        border: "1px solid rgba(45, 45, 52, 0.2)",
                        // CPU rendering - avoid GPU compositing
                        contain: "layout style paint",
                        WebkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                        willChange: "auto",
                      }}>
                        <img
                          className="h-full w-full object-cover"
                          alt={item.name}
                          src={item.image}
                          style={{
                            // CPU rendering - avoid GPU compositing
                            WebkitBackfaceVisibility: "hidden",
                            backfaceVisibility: "hidden",
                            willChange: "auto",
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Product Details - spacing matched to 56px image height */}
                      <div className="flex-1 min-w-0 flex flex-col" style={{ height: '56px', paddingTop: '0px', paddingBottom: '0px' }}>
                        <h3 className="text-xs font-medium text-gray-900" style={{ whiteSpace: 'nowrap', marginBottom: '4px' }}>
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500" style={{ marginBottom: '4px' }}>
                          €{item.price.toFixed(2)}
                        </p>
                        <p className="text-xs font-semibold text-gray-900">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{ width: '22px', height: '22px', fontSize: '12px', lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="px-2 border-x border-gray-300 min-w-[26px] text-center font-medium text-gray-900" style={{ fontSize: '12px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{ width: '22px', height: '22px', fontSize: '12px' }}
                          disabled={item.quantity >= 99}
                        >
                          +
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
                        style={{
                          backgroundColor: "#e91111",
                        }}
                      >
                        <TrashIcon className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Footer with Total */}
              <div
                className="mt-auto p-4"
                style={{
                  backgroundColor: "rgba(45, 45, 52, 0.05)",
                  borderTop: "1px solid rgba(45, 45, 52, 0.1)",
                  borderRadius: "0 0 12px 12px",
                }}
              >
                {/* Content with padding and mobile-safe bottom margin */}
                <div className="pb-20 md:pb-0" style={{ marginBottom: "-80px" }}>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Items ({isHydrated ? totalItems : 0})</span>
                      <span>
                        €{isHydrated ? totalPrice.toFixed(2) : "0.00"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>
                        €{isHydrated ? totalPrice.toFixed(2) : "0.00"}
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-full rounded-xl py-3 px-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                      minHeight: "44px", // Ensure minimum touch target size
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    onClick={() => {
                      // First close cart (which sets isSimpleCartModalOpen to false)
                      // Then open checkout AFTER the cart close animation completes (250ms)
                      closeCart();
                      // Wait for the full 250ms animation + small buffer before opening checkout
                      setTimeout(() => {
                        setIsCheckoutOpen(true);
                      }, 300); // 250ms animation + 50ms buffer
                    }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </>,
    portalContainer
  ) : null;

  return (
    <>
      {/* Cart Button - stays in navbar */}
      <button
        aria-label="Toggle cart"
        onClick={toggleCart}
        className="relative transition-all duration-200 group"
        style={{
          width: "32px",
          height: "32px",
          backgroundColor: "transparent !important",
          border: "none !important",
          borderRadius: "7px",
          boxShadow: "none !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          pointerEvents: "auto",
          outline: "none !important",
          WebkitAppearance: "none",
          appearance: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "none !important";
          e.currentTarget.style.backgroundColor = "transparent !important";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none !important";
          e.currentTarget.style.backgroundColor = "transparent !important";
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.boxShadow = "none !important";
          e.currentTarget.style.backgroundColor = "transparent !important";
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.boxShadow = "none !important";
          e.currentTarget.style.backgroundColor = "transparent !important";
        }}
      >
        <ShoppingCartIcon className="h-4 w-4 text-white group-hover:text-[#eb1313] transition-colors duration-200" />
        {/* Always render badge but control visibility with opacity only */}
        <div
          className="absolute bg-[#e91111] text-white text-xs font-bold rounded-full flex items-center justify-center transition-opacity duration-200"
          style={{
            top: "0px",
            right: "0px",
            width: "14px",
            height: "14px",
            fontSize: "9px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            opacity: !isHydrated || totalItems === 0 ? 0 : 1,
            visibility: "visible", // Always visible, opacity controls display
          }}
        >
          {!isHydrated ? 0 : totalItems}
        </div>
      </button>

      {/* Modal rendered via portal to escape navbar's blur filter */}
      {modalContent}
    </>
  );
}
