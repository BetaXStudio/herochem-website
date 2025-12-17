"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSimpleCart } from "../../components/cart/simple-cart-context";
import { useModal } from "../../contexts/modal-context";
import { getProductDetailById, type ProductDetail } from "../../lib/product-details-database";

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
        transition: "all 1.0s ease-in-out",
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

interface ProductDetailOverlayProps {
  isOpen: boolean;
  productId: string;
  onCloseAction: () => void;
}

export function ProductDetailOverlay({
  isOpen,
  productId,
  onCloseAction,
}: ProductDetailOverlayProps) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastFadeOut, setToastFadeOut] = useState(false);
  const [titleFontSize, setTitleFontSize] = useState("2xl");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useSimpleCart();
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Check if any navbar modal is open to blur this modal's content
  const {
    isProductsModalOpen,
    isGMPModalOpen,
    isDeliveryModalOpen,
    isCommunityModalOpen,
    isLabReportsModalOpen,
    isFAQModalOpen,
    isContactModalOpen,
    isWelcomeModalOpen,
    isAuthModalOpen,
  } = useModal();
  
  const isAnyNavbarModalOpen = 
    isProductsModalOpen || 
    isGMPModalOpen || 
    isDeliveryModalOpen || 
    isCommunityModalOpen || 
    isLabReportsModalOpen ||
    isAuthModalOpen ||
    isFAQModalOpen || 
    isContactModalOpen ||
    isWelcomeModalOpen;

  // Load product when opening
  useEffect(() => {
    if (isOpen && productId) {
      const loadProduct = async () => {
        try {
          const productDetail = await getProductDetailById(productId);
          if (productDetail) {
            setProduct(productDetail);
          }
        } catch (error) {
          console.error("Failed to load product:", error);
        }
      };

      loadProduct();
    }
  }, [isOpen, productId]);

  // Handle closing - clear product
  useEffect(() => {
    if (!isOpen) {
      setProduct(null);
      setQuantity(1);
    }
  }, [isOpen]);

  // Adjust font size based on product name length
  useEffect(() => {
    if (!titleRef.current || !product) return;

    const adjustFontSize = () => {
      const textLength = product.name.length;
      if (textLength > 60) {
        setTitleFontSize("lg");
      } else if (textLength > 30) {
        setTitleFontSize("xl");
      } else {
        setTitleFontSize("2xl");
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;

    // Add items based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }

    setShowToast(true);
    setToastFadeOut(false);

    setTimeout(() => {
      setToastFadeOut(true);
    }, 1500);

    setTimeout(() => {
      setShowToast(false);
      setToastFadeOut(false);
    }, 2500);
    
    // Reset quantity after adding
    setQuantity(1);
  };

  const handleClose = () => {
    // Close the modal - Headless UI handles the animation
    onCloseAction();
  };

  const getBrandColors = () => {
    if (product?.brand === "astera") {
      return {
        primary: "#d67f3f",
        accent: "#e68d50",
      };
    } else {
      return {
        primary: "#e91111",
        accent: "#dc2626",
      };
    }
  };

  if (!isOpen || !product) return null;

  return createPortal(
    <>
      <SlideUpToast showToast={showToast} toastFadeOut={toastFadeOut} />

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={handleClose}
          style={{ pointerEvents: "auto" }}
        />
      )}

      {/* Content */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "white",
            overflowY: "auto",
            zIndex: 9999,
            filter: isAnyNavbarModalOpen ? "blur(4px)" : "none",
            transition: "filter 0.3s ease-out",
            pointerEvents: isAnyNavbarModalOpen ? "none" : "auto",
          }}
        >
          <div className="flex min-h-screen relative overflow-hidden hide-scrollbar" style={{ background: "white" }}>
            <div className="relative z-10 flex w-full">
              <main
                className="flex-1 px-4 sm:px-6 lg:px-8 pb-16 hide-scrollbar relative"
                style={{
                  fontFamily: "Inter, Arial, sans-serif",
                  paddingTop: "112px",
                }}
              >
                <style>{`@media (min-width: 768px) { main { padding-top: 119px !important; } }`}</style>
                {/* Header with back button */}
                <div className="relative mb-4" style={{ height: "40px" }}>
                  <button
                    onClick={handleClose}
                    className="absolute left-0 p-2 text-gray-900 hover:text-gray-700 transition-colors duration-200 z-10"
                    style={{
                      top: "50%",
                      transform: "translateY(-50%) translateY(-4px)",
                    }}
                    aria-label="Back to categories"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "0px",
                      top: "50%",
                      transform:
                        "translateY(-50%) translateY(-4px) translateX(-15px)",
                      paddingLeft: "60px",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      ref={titleRef}
                      className={`text-gray-900 text-${titleFontSize} font-bold transition-all duration-300`}
                      style={{
                        fontFamily: "Calibri, Arial, sans-serif",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "320px",
                      }}
                    >
                      {product.name.toUpperCase().replace(/^(ASTERA|DEUS)\s+/i, "")}
                    </h1>
                  </div>
                </div>

                {/* Trennlinie unter der Überschrift */}
                <div 
                  className="h-[1px] mb-4 rounded-full" 
                  style={{ backgroundColor: getBrandColors().primary, marginTop: "0px" }}
                />

                {/* Product Image with Brand Label */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-32 h-24 rounded-lg flex items-center justify-center p-1 flex-shrink-0"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain rounded transition-opacity duration-300"
                      style={{
                        opacity: 1,
                        transform:
                          product?.brand === "astera" ||
                          product?.name.toLowerCase().includes("astera")
                            ? "scale(1.0)"
                            : "scale(1.8)",
                      }}
                    />
                  </div>
                  
                  {/* Brand Label */}
                  <img
                    src={product?.brand === "astera" ? "/astera_labs.png" : "/deus_medical.png"}
                    alt={product?.brand === "astera" ? "Astera Labs" : "Deus Medical"}
                    className="h-8 object-contain flex-shrink-0"
                  />
                </div>

                {/* Price and Add to Cart Section */}
                <div className="flex items-center justify-between gap-3 py-3 px-3 bg-gray-50 rounded-lg mb-4">
                  {/* Price */}
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      €{product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity and Add to Cart */}
                  <div className="flex items-center gap-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ width: '26px', height: '26px', fontSize: '13px', lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        disabled={quantity <= 1}
                      >
                        −
                      </button>
                      <span className="px-2 border-x border-gray-300 min-w-[32px] text-center font-medium text-gray-900" style={{ fontSize: '13px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(99, quantity + 1))}
                        className="flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ width: '26px', height: '26px', fontSize: '13px' }}
                        disabled={quantity >= 99}
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      className="font-medium py-1.5 px-3 rounded-lg flex items-center gap-1.5"
                      style={{
                        backgroundColor: getBrandColors().primary,
                        color: "white",
                        fontSize: "11px",
                        minWidth: "100px",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = product?.brand === "astera" ? "#c06d2f" : "#c00d0d";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = getBrandColors().primary;
                      }}
                    >
                      <ShoppingCartIcon className="w-3.5 h-3.5" />
                      ADD TO CART
                    </button>
                  </div>
                </div>

                {/* Chemical Description */}
                <div className="mb-4 bg-white rounded-lg p-3" style={{ border: "1px solid #e5e7eb" }}>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Chemical Description</h3>
                  <div 
                    className="text-sm text-gray-700 leading-relaxed mb-2"
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        const match = product.details.match(/<h2[^>]*class="[^"]*chemical-description[^"]*"[^>]*>([\s\S]*?)<\/h2>/i);
                        return match ? match[1] || product.description : product.description;
                      })()
                    }}
                  />
                  
                  {/* Dosage */}
                  <div 
                    className="pt-2 border-t border-gray-200 text-sm text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        const match = product.details.match(/<p><strong>Dosage:<\/strong>\s*([\s\S]*?)<\/p>/i);
                        return match ? `<strong>Dosage:</strong> ${match[1]}` : "";
                      })()
                    }}
                  />
                </div>

                {/* Trust Icons */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700">Third-party tested for identity, purity and concentration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700">Each product has a unique code to check authenticity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700">Certified by WHO-GMP, compliant with EUGMP and UKMHRA</span>
                  </div>
                </div>

                {/* Product Details */}
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .product-details {
                      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                      max-width: none;
                      margin: 0;
                      padding: 0;
                      line-height: 1.6;
                      background: transparent !important;
                      border-radius: 0;
                      box-shadow: none !important;
                      width: 100%;
                    }
                    .product-details h1 {
                      font-size: 2rem;
                      font-weight: 700;
                      margin-bottom: 1.5rem;
                      color: ${product?.brand === "astera" ? "#8b4513" : "#1f2937"};
                      text-align: center;
                      padding-bottom: 1rem;
                      border-bottom: 2px solid ${
                        product?.brand === "astera" ? "#d67f3f" : "#e91111"
                      };
                    }
                    .product-details h2 {
                      font-size: 1.5rem;
                      font-weight: 600;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                      color: ${product?.brand === "astera" ? "#8b4513" : "#1f2937"};
                      padding-left: 1rem;
                      border-left: 3px solid ${
                        product?.brand === "astera" ? "#d67f3f" : "#e91111"
                      };
                    }
                    .product-details h3 {
                      font-size: 1.25rem;
                      font-weight: 600;
                      margin-top: 1.5rem;
                      margin-bottom: 0.75rem;
                      color: ${product?.brand === "astera" ? "#8b4513" : "#1f2937"};
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
                    .product-details ul {
                      padding-left: 1.5rem;
                      margin-bottom: 1rem;
                    }
                    .product-details ol {
                      padding-left: 1.5rem;
                      margin-bottom: 1rem;
                    }
                    .product-details li {
                      margin-bottom: 0.5rem;
                      color: #4b5563;
                      line-height: 1.6;
                    }
                    `,
                  }}
                />
                <div
                  className="product-details text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: product.details
                      .replace(/<style[\s\S]*?<\/style>/gi, "")
                      .replace(
                        /<h1[^>]*class="product-title"[^>]*>[\s\S]*?<\/h1>/gi,
                        ""
                      )
                      .replace(
                        /<[^>]*class="[^"]*chemical-description[^"]*"[^>]*>[\s\S]*?<\/[^>]+>/gi,
                        ""
                      ),
                  }}
                />
              </main>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
