"use client";

import {
    ShoppingCartIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Cart Button */}
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





      {/* Backdrop - verdeckt weiße Linie von der Navbar */}
      {isOpen && isMobile && (
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

      {/* Cart Modal */}
      <div
        style={{
          position: "fixed",
          top: isMobile ? "88px" : "52px", // Mobile: 88px, Desktop: 52px
          height: isMobile ? "calc(100vh - 88px)" : "calc(100vh - 52px)", // Responsive height
          zIndex: 10025, // Über der Navbar search bar (10020)
          transition: "transform 120ms ease-out", // Faster transition
          // Responsive width and positioning
          width: isMobile ? "100vw" : "400px",
          right: "0px",
          left: isMobile ? "0px" : "auto",
          transform: isOpen
            ? "translateX(0)"
            : isMobile
              ? "translateX(100vw)" // Mobile: komplette Viewport-Breite verschieben
              : "translateX(calc(100% + 50px))", // Desktop: Modal-Breite + 50px verschieben
          background: "#2d2d34", // Match categories page background
          backdropFilter: "blur(20px)", // Match categories page blur effect
          pointerEvents: "auto",
          paddingBottom: isMobile ? "100px" : "20px", // Extra space for Safari browser elements
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
                      className="flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 group"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        border: "1px solid rgba(45, 45, 52, 0.1)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {/* Product Image */}
                      <div className="relative h-14 w-14 overflow-hidden rounded-lg flex-shrink-0" style={{
                        backgroundColor: "rgba(45, 45, 52, 0.1)",
                        border: "1px solid rgba(45, 45, 52, 0.2)"
                      }}>
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
                        <h3 className="text-sm font-medium text-gray-900" style={{ whiteSpace: 'nowrap' }}>
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          €{item.price.toFixed(2)}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 mt-1">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="h-5 w-5 rounded flex items-center justify-center transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: "rgba(45, 45, 52, 0.1)",
                            border: "1px solid rgba(45, 45, 52, 0.2)",
                          }}
                        >
                          <span className="text-gray-600 text-xs font-medium">
                            -
                          </span>
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="h-5 w-5 rounded flex items-center justify-center transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: "rgba(45, 45, 52, 0.1)",
                            border: "1px solid rgba(45, 45, 52, 0.2)",
                          }}
                        >
                          <span className="text-gray-600 text-xs font-medium">
                            +
                          </span>
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
                        style={{
                          backgroundColor: "rgba(239, 68, 68, 0.1)",
                          border: "1px solid rgba(239, 68, 68, 0.2)",
                        }}
                      >
                        <TrashIcon className="h-4 w-4 text-red-500" />
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
                      setIsCheckoutOpen(true);
                      setIsOpen(false);
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


    </>
  );
}
