"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { type ProductDetail } from "../../lib/product-details-database";
import { useSimpleCart } from "../cart/simple-cart-context";

interface SearchProductModalProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

// Toast notification component
const SlideUpToast = ({
  showToast,
  toastFadeOut,
}: {
  showToast: boolean;
  toastFadeOut: boolean;
}) => {
  if (!showToast) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        bottom: toastFadeOut ? "-100px" : "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "240px",
        zIndex: 999999,
        pointerEvents: "none",
        transition: "all 1.0s ease-in-out", // Langsamere Animation für sanftere Bewegung
        opacity: toastFadeOut ? 0 : 1,
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(64, 64, 74)",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "12px 24px",
          borderRadius: "0.75rem", // Matches "Proceed to Checkout" button rounded-xl
          boxShadow: "0 4px 12px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)",
          textAlign: "center",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        Added to Shopping Cart
      </div>
    </div>,
    document.body,
  );
};

export function SearchProductModal({
  product,
  isOpen,
  onClose,
}: SearchProductModalProps) {
  const { addItem } = useSimpleCart();
  const [showToast, setShowToast] = useState(false);
  const [toastFadeOut, setToastFadeOut] = useState(false);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      // Speichere aktuelle Scroll-Position
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      // Speichere aktuelles aktives Element
      const activeElement = document.activeElement as HTMLElement;

      // Speichere Position bevor wir etwas ändern
      document.body.dataset.scrollPosition = scrollY.toString();
      document.body.dataset.scrollPositionX = scrollX.toString();

      // Verwende eine sanftere Methode: nur overflow hidden
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight =
        "var(--removed-body-scroll-bar-size, 0px)";

      // Restore focus to the previously active element after a short delay
      setTimeout(() => {
        if (activeElement && activeElement.focus) {
          activeElement.focus();
        }
      }, 50);
    } else {
      // Stelle ursprünglichen Zustand wieder her
      const savedScrollY = parseInt(
        document.body.dataset.scrollPosition || "0",
      );
      const savedScrollX = parseInt(
        document.body.dataset.scrollPositionX || "0",
      );

      // Entferne Styles
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";

      // Cleanup
      delete document.body.dataset.scrollPosition;
      delete document.body.dataset.scrollPositionX;

      // Stelle Scroll-Position sofort wieder her
      if (savedScrollY || savedScrollX) {
        window.scrollTo(savedScrollX, savedScrollY);
      }
    }

    return () => {
      // Cleanup bei Unmount - einfacher
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";

      const savedScrollY = parseInt(
        document.body.dataset.scrollPosition || "0",
      );
      const savedScrollX = parseInt(
        document.body.dataset.scrollPositionX || "0",
      );

      delete document.body.dataset.scrollPosition;
      delete document.body.dataset.scrollPositionX;

      if (savedScrollY || savedScrollX) {
        window.scrollTo(savedScrollX, savedScrollY);
      }
    };
  }, [isOpen]);

  const handleAddToCart = () => {
    if (!product) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.price || 0,
      image: product.image || "",
    });

    // Show toast notification with longer timing for visible animation
    setShowToast(true);
    setToastFadeOut(false);

    // Start fade out after 1500ms (longer for better visibility)
    setTimeout(() => {
      setToastFadeOut(true);
    }, 1500);

    // Hide completely after 2500ms (1000ms animation duration)
    setTimeout(() => {
      setShowToast(false);
      setToastFadeOut(false);
    }, 2500);
  };

  // Function to get brand-specific colors
  const getBrandColors = () => {
    if (product?.brand === "astera") {
      return {
        primary: "#d67f3f", // Astera orange/braun - offizielle Farbe
        accent: "#e68d50", // Heller orange für Akzente
      };
    } else {
      // Default Deus colors (rot)
      return {
        primary: "#e91111", // Deus rot
        accent: "#dc2626", // Heller rot für Akzente
      };
    }
  };

  if (!isOpen || !product) return null;

  // Stelle sicher, dass das Modal an document.body angehängt wird
  const modalRoot = typeof document !== "undefined" ? document.body : null;
  if (!modalRoot) return null;

  return createPortal(
    <div
      className="fixed flex items-start justify-center"
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 999999,
        padding: 0,
      }}
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >

      {/* Modal Content */}
      <div
        className="w-full overflow-y-auto overflow-x-hidden hide-scrollbar"
        style={{
          height: "100vh",
          maxWidth: "95vw",
          padding: "25px 16px 32px 16px", // Top-Padding für Close Button + Bottom-Padding
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Product Card - Using categories page design */}
        <div 
          className="rounded-lg p-4 md:p-6 mb-4 md:mb-6"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
            backdropFilter: "blur(20px)",
            border: `2px solid ${product?.brand === "astera" ? "#d67f3f" : "#e91111"}`,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-shrink-0 flex justify-center">
              <div 
                className="w-24 h-20 md:w-32 md:h-24 rounded-lg flex items-center justify-center p-1"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: `1px solid white`,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded transition-opacity duration-300"
                  style={{
                    opacity: 1,
                    transform: (product?.brand === "astera" || product?.name.toLowerCase().includes("astera")) ? (() => {
                      console.log(`MODAL: Astera product detected: ${product?.name}, brand: ${product?.brand}`);
                      return "scale(1.0)";
                    })() : "scale(1.8)",
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <h2
                className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left"
                style={{
                  color: product?.brand === "astera" ? "#8b4513" : "#1f2937",
                  hyphens: "none",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  lineHeight: "1.2",
                }}
              >
                {product.name}
              </h2>

              <p
                className="mb-3 text-sm md:text-base text-center md:text-left"
                style={{
                  color: "#6b7280",
                  hyphens: "auto",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  lineHeight: "1.4",
                }}
              >
                {product.description}
              </p>
              <div className="flex items-center justify-center mb-4">
                <span 
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    color: product?.brand === "astera" ? "#8b4513" : "#1f2937",
                  }}
                >
                  €{product.price.toFixed(2)}
                </span>
              </div>
              <div className="flex gap-2 text-xs md:text-sm mb-4 justify-center md:justify-start flex-wrap">
                <span
                  className="text-white px-1.5 py-0.5 rounded capitalize"
                  style={{
                    backgroundColor: product?.brand === "astera" ? "#d67f3f" : "#e91111",
                    hyphens: "auto",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    fontSize: "10px", // Smaller font
                  }}
                >
                  {product.brand}
                </span>
              </div>
            </div>
          </div>

          {/* Add to Cart and Close Buttons - Inside the card */}
          <div className="mt-4 flex justify-center md:justify-start gap-3">
            <button
              onClick={handleAddToCart}
              className="md:w-auto font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 bg-white bg-opacity-90 text-gray-900"
              style={{
                minHeight: "40px", // Reduced height
                fontSize: "14px", // Smaller font
                minWidth: "140px", // Same width as close button
                border: `1px solid ${getBrandColors().primary}`,
              }}
              onMouseEnter={window.innerWidth > 768 ? (e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = getBrandColors().primary;
                target.style.color = "white";
                // Also change the icon color
                const icon = target.querySelector('svg');
                if (icon) {
                  icon.style.color = "white";
                }
              } : undefined}
              onMouseLeave={window.innerWidth > 768 ? (e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                target.style.color = "rgb(17, 24, 39)"; // text-gray-900 color
                // Reset icon color
                const icon = target.querySelector('svg');
                if (icon) {
                  icon.style.color = "rgb(17, 24, 39)"; // text-gray-900 color
                }
              } : undefined}
            >
              <ShoppingCartIcon className="w-4 h-4 transition-colors duration-200 text-gray-900" />
              Add to Cart
            </button>
            <button
              onClick={onClose}
              className="md:w-auto font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-white"
              style={{
                backgroundColor: "#2d2d34",
                minHeight: "40px", // Same height as Add to Cart
                fontSize: "14px", // Same font size
                minWidth: "140px", // Same width as add to cart button
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1f1f23";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2d2d34";
              }}
            >
              Close
            </button>
          </div>
        </div>

        {/* Product Details - With white background container */}
        <div
          className="text-gray-700 leading-relaxed mt-6 rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            padding: "16px 24px 32px 24px", // Top, Right, Bottom, Left - Extra Bottom-Padding
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .product-details {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 0;
                line-height: 1.6;
                background: transparent !important;
                border-radius: 0;
                box-shadow: none !important;
              }
              .chemical-description {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 2rem;
                margin-top: 10px;
                color: #374151;
                background: linear-gradient(135deg, ${product?.brand === "astera" ? "#faf8f5 0%, #f4ede0 100%" : "#fef2f2 0%, #fee2e2 100%"});
                padding: 1rem;
                border-radius: 12px;
                border-left: 5px solid ${getBrandColors().primary};
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .product-description {
                font-size: 1rem;
                color: #4b5563;
              }
              .product-description p {
                margin-bottom: 1.25rem;
                text-align: justify;
                padding: 0.75rem;
                background: #f9fafb !important;
                border-radius: 12px;
                border-left: 3px solid #e5e7eb;
                hyphens: auto;
                word-break: break-word;
                overflow-wrap: break-word;
                line-height: 1.5;
              }
              .product-description p:last-child {
                margin-bottom: 0;
              }
              .product-description strong {
                color: #1f2937;
                font-weight: 600;
              }
            `,
            }}
          />
          <div
            className="product-details"
            dangerouslySetInnerHTML={{
              __html: product.details
                .replace(/<style[\s\S]*?<\/style>/gi, "") // Remove embedded style tags
                .replace(/<h1[^>]*class="product-title"[^>]*>[\s\S]*?<\/h1>/gi, ""), // Remove product title elements
            }}
          />
        </div>

        {/* Additional transparent spacer container for bottom spacing */}
        <div
          className="mt-6"
          style={{
            height: "60px", // Additional spacing height
            background: "transparent",
            borderRadius: "0.75rem", // Updated to match cart modal consistency
          }}
        >
          {/* Transparent spacer content - can be empty or contain subtle design elements */}
        </div>
      </div>

      {/* Toast notification */}
      <SlideUpToast showToast={showToast} toastFadeOut={toastFadeOut} />
    </div>,
    modalRoot,
  );
}
