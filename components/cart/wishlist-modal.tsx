"use client";

import {
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../contexts/modal-context";
import { useAuthModal } from "../auth/auth-modal-context";
import { ProductDetailOverlay } from "../categories/product-detail-overlay";
import CartItemImage from "./cart-item-image";
import { useSimpleCart } from "./simple-cart-context";
import { useWishlist } from "./wishlist-context";

export default function WishlistModal() {
  const {
    items,
    totalItems,
    removeItem,
    isHydrated,
    setIsWishlistCheckoutOpen,
    saveCookieWishlistToSupabase,
    isLoggedIn,
    shouldOpenWishlistModal,
    setShouldOpenWishlistModal,
  } = useWishlist();
  const { addItem: addToCart } = useSimpleCart();
  const { setWishlistModalOpen, openProductDetailModal } = useModal();
  const { openModal: openAuthModal, isOpen: isAuthModalOpen } = useAuthModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  // Track if we're waiting for auth to complete to save wishlist
  const [pendingSaveAfterAuth, setPendingSaveAfterAuth] = useState(false);
  
  // Ref for scroll container - needed for IntersectionObserver VRAM optimization
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Effect to save wishlist after successful authentication
  useEffect(() => {
    // If auth modal just closed and we have a pending save and user is now logged in
    if (!isAuthModalOpen && pendingSaveAfterAuth && isLoggedIn) {
      setPendingSaveAfterAuth(false);
      // Save cookie wishlist to Supabase
      saveCookieWishlistToSupabase();
      // Open the wishlist checkout modal
      setIsWishlistCheckoutOpen(true);
    }
  }, [isAuthModalOpen, pendingSaveAfterAuth, isLoggedIn, saveCookieWishlistToSupabase, setIsWishlistCheckoutOpen]);

  // Effect to open wishlist modal when signaled from shared link processing
  useEffect(() => {
    if (shouldOpenWishlistModal) {
      openWishlist();
      setShouldOpenWishlistModal(false);
    }
  }, [shouldOpenWishlistModal, setShouldOpenWishlistModal]);

  // Handler for Save/Share button click
  const handleSaveOrShareClick = () => {
    closeWishlist();
    
    if (isLoggedIn) {
      // Already logged in - just open the checkout modal for sharing
      setTimeout(() => {
        setIsWishlistCheckoutOpen(true);
      }, 300);
    } else {
      // Not logged in - open auth modal and set pending save
      setTimeout(() => {
        setPendingSaveAfterAuth(true);
        openAuthModal();
      }, 300);
    }
  };

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animated close function - waits for animation before hiding
  const closeWishlist = () => {
    if (isClosing || !isOpen) return;
    
    requestAnimationFrame(() => {
      setIsClosing(true);
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsOpen(false);
          setIsClosing(false);
          setWishlistModalOpen(false);
        }, 250);
      });
    });
  };

  // Handler to open product detail modal when clicking on a wishlist item
  const handleProductClick = (productId: string) => {
    // Close the wishlist modal first
    closeWishlist();
    
    // Open the product detail modal after a short delay to allow wishlist animation
    setTimeout(() => {
      if (isMobile) {
        // Mobile: Use local ProductDetailOverlay
        setSelectedProductId(productId);
        setIsProductDetailOpen(true);
      } else {
        // Desktop: Use global ProductDetailModalDesktop via context
        openProductDetailModal(productId);
      }
    }, 300);
  };

  // Handler to add item to cart and remove from wishlist
  const handleAddToCart = (e: React.MouseEvent, item: { id: string; name: string; price: number; image: string }) => {
    e.stopPropagation();
    
    // Add to cart
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    
    // Remove from wishlist
    removeItem(item.id);
  };

  // Close product detail overlay (mobile)
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
    setSelectedProductId(null);
  };

  const openWishlist = () => {
    // Dispatch event so categories modal can close
    window.dispatchEvent(new CustomEvent("open-wishlist-modal"));
    
    // First open the wishlist modal
    setIsClosing(false);
    setIsOpen(true);
    setWishlistModalOpen(true);
    
    // Then close cart modal after a delay so both overlap during transition
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("close-simple-cart-modal"));
    }, 300);
  };

  const toggleWishlist = () => {
    if (isOpen || isClosing) {
      closeWishlist();
    } else {
      openWishlist();
    }
  };

  // Listen for close-wishlist-modal event
  useEffect(() => {
    const handleCloseWishlist = () => {
      if (isOpen && !isClosing) {
        closeWishlist();
      }
    };

    window.addEventListener("close-wishlist-modal", handleCloseWishlist);
    return () => window.removeEventListener("close-wishlist-modal", handleCloseWishlist);
  }, [isOpen, isClosing]);

  // Portal mount state
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  // On desktop, hide with CSS instead of return null to avoid hydration mismatch
  const hideOnDesktop = !isMobile;

  // The modal content that will be rendered via portal
  const modalContent = portalContainer ? createPortal(
    <>
      {/* Backdrop */}
      {(isOpen || isClosing) && (
        <div
          className="fixed bg-transparent pointer-events-none"
          style={{
            top: "88px",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: 10019,
          }}
          aria-hidden="true"
        />
      )}

      {/* Wishlist Modal - Slides from LEFT to RIGHT (mirrored from cart) */}
      <div
        className="wishlist-modal"
        style={{
          position: "fixed",
          top: "88px",
          height: "calc(100vh - 88px)",
          zIndex: 10019,
          transition: "transform 250ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          width: "100vw",
          right: "0px",
          left: "0px",
          // MIRRORED: Slides from left (-2%) instead of right (+2%)
          transform: (isOpen && !isClosing)
            ? "translateX(0) translateY(0)"
            : "translateX(-2%) translateY(-0.5vh)",
          opacity: (isOpen && !isClosing) ? 1 : 0,
          background: "#2d2d34",
          backdropFilter: "blur(20px)",
          pointerEvents: (isOpen && !isClosing) ? "auto" : "none",
          paddingBottom: "100px",
        }}
      >
        {/* Wishlist Content Container */}
        <div
          className="h-full flex flex-col"
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Wishlist Content */}
          <div
            className="flex flex-col flex-1 mx-4"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "inset 0 4px 16px rgba(0, 0, 0, 0.25)",
              marginTop: "20px",
              marginBottom: "30px"
            }}
          >
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-start pt-16 p-4">
              <HeartIcon className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-base font-medium text-gray-500 mb-2">
                Your wishlist is empty
              </p>
              <p className="text-sm text-gray-400 text-center">
                Add products you love to your wishlist
              </p>
            </div>
          ) : (
            <>
              {/* Wishlist Items */}
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 pb-2">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleProductClick(item.id)}
                      className="flex items-center space-x-4 p-3 rounded-xl group cursor-pointer hover:bg-gray-50 transition-colors"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid rgba(45, 45, 52, 0.1)",
                        contain: "layout style paint",
                        WebkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                        willChange: "auto",
                      }}
                    >
                      {/* Product Image */}
                      <CartItemImage
                        src={item.image}
                        alt={item.name}
                        size={56}
                        scrollContainerRef={scrollContainerRef}
                        className="rounded-lg"
                        style={{ border: "1px solid rgba(45, 45, 52, 0.2)" }}
                      />

                      {/* Product Details */}
                      <div className="flex-1 min-w-0 flex flex-col" style={{ height: '56px', paddingTop: '0px', paddingBottom: '0px' }}>
                        <h3 className="text-xs font-medium text-gray-900" style={{ whiteSpace: 'nowrap', marginBottom: '4px' }}>
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-gray-900 mt-auto">
                          €{item.price.toFixed(2)}
                        </p>
                      </div>

                      {/* Button Container */}
                      <div className="flex items-center gap-2">
                        {/* Add to Cart Button */}
                        <button
                          onClick={(e) => handleAddToCart(e, item)}
                          className="font-medium rounded-lg flex items-center gap-1 text-[10px] px-2 py-1.5 transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: "#e91111",
                            color: "white",
                          }}
                        >
                          <ShoppingCartIcon className="w-3 h-3" />
                          <span>ADD</span>
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(item.id);
                          }}
                          className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: "#e91111",
                          }}
                        >
                          <TrashIcon className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wishlist Footer */}
              <div
                className="mt-auto p-4"
                style={{
                  backgroundColor: "rgba(45, 45, 52, 0.05)",
                  borderTop: "1px solid rgba(45, 45, 52, 0.1)",
                  borderRadius: "0 0 12px 12px",
                }}
              >
                <div className="pb-20 md:pb-0" style={{ marginBottom: "-80px" }}>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Items ({isHydrated ? totalItems : 0})</span>
                    </div>
                  </div>

                  <button
                    className="w-full rounded-xl py-3 px-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                      minHeight: "44px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    onClick={handleSaveOrShareClick}
                  >
                    {isLoggedIn ? "Share Wishlist" : "Save to Wishlist"}
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
    <div className={hideOnDesktop ? "hidden" : ""}>
      {/* Wishlist Button - stays in navbar */}
      <button
        aria-label="Toggle wishlist"
        onClick={toggleWishlist}
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
        <HeartIcon className="h-4 w-4 text-white group-hover:text-[#eb1313] transition-colors duration-200" />
        {/* Badge for wishlist count */}
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
            visibility: "visible",
          }}
        >
          {!isHydrated ? 0 : totalItems}
        </div>
      </button>

      {/* Modal rendered via portal */}
      {modalContent}

      {/* Product Detail Overlay - Mobile */}
      {selectedProductId && (
        <ProductDetailOverlay
          isOpen={isProductDetailOpen}
          productId={selectedProductId}
          onCloseAction={closeProductDetail}
        />
      )}
    </div>
  );
}
