"use client";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../contexts/modal-context";
import { useAuth } from "../auth/auth-context";
import { useWishlist } from "./wishlist-context";

interface WishlistCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthRequired?: () => void;
}

export default function WishlistCheckoutModal({
  isOpen,
  onClose,
  onAuthRequired,
}: WishlistCheckoutModalProps) {
  const { user } = useAuth();
  const { items } = useWishlist();
  const { setWishlistCheckoutModalOpen } = useModal();
  
  // Scroll position ref für korrekte Wiederherstellung
  const scrollYRef = useRef(0);
  
  // Portal container for rendering outside of any parent's stacking context
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  // State um Modal erst zu rendern wenn Blur bereits aktiv ist
  const [shouldRenderModal, setShouldRenderModal] = useState(false);
  
  // State for copy feedback
  const [copied, setCopied] = useState(false);
  
  // Generate share link with product IDs
  const generateShareLink = () => {
    if (items.length === 0) return "";
    
    const productIds = items.map(item => item.id).join(",");
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://herochem.com";
    return `${baseUrl}/?wishlist=${encodeURIComponent(productIds)}`;
  };
  
  // Handle share link button click
  const handleShareLink = async () => {
    const link = generateShareLink();
    if (!link) return;
    
    try {
      // Check if clipboard API is available
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = link;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      
      setCopied(true);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
      // Final fallback attempt
      try {
        const textArea = document.createElement("textarea");
        textArea.value = link;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (fallbackError) {
        console.error("Fallback copy also failed:", fallbackError);
      }
    }
  };
  
  // Initialize portal container
  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  // Blur + Scroll-Sperre für Modal - Blur ZUERST, dann Modal rendern
  // EXAKT wie Checkout Modal
  useEffect(() => {
    if (isOpen) {
      // Speichere Scroll-Position
      scrollYRef.current = window.scrollY;
      
      // Verhindere Scrolling auf html und body - EXAKT wie Checkout Modal
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      setWishlistCheckoutModalOpen(true);
      
      // Wait for blur to be applied before rendering modal
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShouldRenderModal(true);
        });
      });

      // Cleanup
      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        setWishlistCheckoutModalOpen(false);
        setShouldRenderModal(false);
        
        // Stelle die Scroll-Position wieder her
        window.scrollTo(0, scrollYRef.current);
      };
    }
  }, [isOpen, setWishlistCheckoutModalOpen]);

  // Show auth required screen if not logged in
  const showLoginRequired = !user;

  // Don't render until blur is applied, portal is ready, AND shouldRenderModal is true
  // EXAKT wie Checkout Modal - EINE Bedingung mit ||
  if (!isOpen || !portalContainer || !shouldRenderModal) return null;

  const modalContent = (
    <React.Fragment>
      {/* Unsichtbarer Backdrop für Click-Handling */}
      <div
        className="fixed inset-0 z-[10025] max-[800px]:top-0 min-[801px]:top-[99px]"
        style={{
          backgroundColor: "transparent",
          animation: "backdropFadeIn 0.3s ease-out",
        }}
        onClick={onClose}
      />
      <div
        className="fixed inset-0 z-[10030] flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[107px] max-[800px]:pb-[10px]"
        style={{ 
          touchAction: "none",
          pointerEvents: "none",
        }}
      >
        <div
          className="relative shadow-xl w-full max-w-md mx-4 max-h-[70vh] flex flex-col"
          style={{ 
            backgroundColor: "white",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            animation: "modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            borderRadius: "0.75rem",
            touchAction: "auto",
            pointerEvents: "auto",
            // CPU/Hardware rendering - no GPU acceleration
            WebkitBackfaceVisibility: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {showLoginRequired ? (
            // Login Required View
            <>
              {/* Header */}
              <div
                className="sticky top-0 flex items-center justify-between border-b"
                style={{
                  borderColor: 'rgb(45,45,52)',
                  backgroundColor: 'rgb(45,45,52)',
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                  margin: '-1px 0 -1px 0',
                  padding: '12px 16px'
                }}
              >
                <h2 
                  className="text-lg font-medium text-white"
                  style={{ fontFamily: "Calibri, Arial, sans-serif" }}
                >
                  Wishlist
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl transition-colors duration-200 group"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div 
                className="flex-1 overflow-y-auto p-8" 
                style={{ 
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-y",
                  overscrollBehavior: "contain",
                }}
              >
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Login Required
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Please login or register to save your wishlist permanently.
                  </p>

                  <button
                    onClick={() => {
                      if (onAuthRequired) {
                        onAuthRequired();
                      }
                    }}
                    className="w-full py-2 px-4 text-white font-medium rounded-xl transition-colors duration-200"
                    style={{
                      backgroundColor: "#e91111",
                      boxShadow: "0 4px 15px rgba(233, 17, 17, 0.3)",
                      border: "2px solid #e91111",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c00d0d";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#e91111";
                    }}
                  >
                    Login or Register to proceed
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Logged In - Placeholder View
            <>
              {/* Header */}
              <div
                className="sticky top-0 flex items-center justify-between border-b"
                style={{
                  borderColor: 'rgb(45,45,52)',
                  backgroundColor: 'rgb(45,45,52)',
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                  margin: '-1px 0 -1px 0',
                  padding: '12px 16px'
                }}
              >
                <h2 
                  className="text-lg font-medium text-white"
                  style={{ fontFamily: "Calibri, Arial, sans-serif" }}
                >
                  Wishlist
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl transition-colors duration-200 group"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div 
                className="flex-1 overflow-y-auto p-8" 
                style={{ 
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-y",
                  overscrollBehavior: "contain",
                }}
              >
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p className="text-gray-500 mb-6">
                    You have {items.length} item{items.length !== 1 ? 's' : ''} in your wishlist.
                  </p>
                  
                  {/* Share Link Button */}
                  <button
                    onClick={handleShareLink}
                    disabled={items.length === 0}
                    className="w-full px-6 py-3 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: copied 
                        ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" 
                        : "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: copied 
                        ? "0 4px 15px rgba(34, 197, 94, 0.3)" 
                        : "0 4px 15px rgba(45, 45, 52, 0.3)",
                      minHeight: "44px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {copied ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckIcon className="w-5 h-5" />
                        Link Copied!
                      </span>
                    ) : (
                      "Share Link"
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
    </React.Fragment>
  );

  return createPortal(modalContent, portalContainer);
}
