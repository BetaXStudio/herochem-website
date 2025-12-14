"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSimpleCart } from "../../components/cart/simple-cart-context";
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
  const { addItem } = useSimpleCart();
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setShowToast(true);
    setToastFadeOut(false);

    setTimeout(() => {
      setToastFadeOut(true);
    }, 1500);

    setTimeout(() => {
      setShowToast(false);
      setToastFadeOut(false);
    }, 2500);
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
          }}
        >
          <div className="flex min-h-screen relative overflow-hidden hide-scrollbar" style={{ background: "white" }}>
            <div className="relative z-10 flex w-full">
              <main
                className="flex-1 px-4 sm:px-6 lg:px-8 pb-16 hide-scrollbar relative"
                style={{
                  fontFamily: "Inter, Arial, sans-serif",
                  paddingTop: "65px",
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

                {/* Product Image */}
                <div className="flex-shrink-0 flex justify-center mb-6">
                  <div
                    className="w-32 h-24 md:w-48 md:h-36 rounded-lg flex items-center justify-center p-1"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      border: `1px solid ${
                        product?.brand === "astera" ? "#d67f3f" : "#e91111"
                      }`,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
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
                </div>

                {/* Product Info */}
                <div className="mb-6">
                  <p
                    className="mb-3 text-base md:text-lg text-center"
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
                      className="text-3xl md:text-4xl font-bold"
                      style={{
                        color: "#1f2937",
                      }}
                    >
                      €{product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2 text-sm mb-4 justify-center flex-wrap">
                    <span
                      className="text-white px-2 py-1 rounded capitalize"
                      style={{
                        backgroundColor: getBrandColors().primary,
                        fontSize: "12px",
                      }}
                    >
                      {product.category.toLowerCase()}
                    </span>
                    <span
                      className="text-white px-2 py-1 rounded capitalize"
                      style={{
                        backgroundColor: getBrandColors().primary,
                        fontSize: "12px",
                      }}
                    >
                      {product.brand}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={handleAddToCart}
                      className="w-full font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 bg-white bg-opacity-90 text-gray-900"
                      style={{
                        minHeight: "50px",
                        fontSize: "16px",
                        minWidth: "200px",
                        border: `2px solid ${getBrandColors().primary}`,
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = getBrandColors().primary;
                        target.style.color = "white";
                        const icon = target.querySelector("svg");
                        if (icon) {
                          icon.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                        target.style.color = "rgb(17, 24, 39)";
                        const icon = target.querySelector("svg");
                        if (icon) {
                          icon.style.color = "rgb(17, 24, 39)";
                        }
                      }}
                      onMouseDown={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = getBrandColors().accent;
                      }}
                      onMouseUp={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = getBrandColors().primary;
                      }}
                    >
                      <ShoppingCartIcon className="w-5 h-5 transition-colors duration-200 text-gray-900" />
                      Add to Cart - €{product.price.toFixed(2)}
                    </button>
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
