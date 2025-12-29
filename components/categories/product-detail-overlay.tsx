"use client";

import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useRef, useState } from "react";
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
        // CPU/Hardware rendering - no GPU acceleration
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
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  
  // Pinch-to-zoom - use refs for real-time tracking to avoid React re-renders during gestures
  const [isPinching, setIsPinching] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const pinchStateRef = useRef({
    scale: 1,
    translateX: 0,
    translateY: 0,
    lastDistance: 0,
    lastCenterX: 0,
    lastCenterY: 0,
  });
  
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
    isCheckoutModalOpen,
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
    isWelcomeModalOpen ||
    isCheckoutModalOpen;

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
      setIsImageZoomed(false);
      // Reset pinch-to-zoom state
      pinchStateRef.current = {
        scale: 1,
        translateX: 0,
        translateY: 0,
        lastDistance: 0,
        lastCenterX: 0,
        lastCenterY: 0,
      };
      // Note: Don't reset transform here - modal is closing anyway
      // and resetting causes a visual glitch
    }
  }, [isOpen]);

  // Reset pinch-to-zoom state when zoom is toggled off (but only if modal is still open)
  // Note: We don't touch imageRef.current.style.transform here - React's style prop handles it
  useEffect(() => {
    if (!isImageZoomed && isOpen) {
      pinchStateRef.current = {
        scale: 1,
        translateX: 0,
        translateY: 0,
        lastDistance: 0,
        lastCenterX: 0,
        lastCenterY: 0,
      };
    }
  }, [isImageZoomed, isOpen]);

  // Apply transform directly to DOM for smooth performance
  // baseScale is 1.8 for Deus, 1.0 for Astera
  const applyTransform = useCallback((baseScale: number) => {
    if (!imageRef.current) return;
    const { scale, translateX, translateY } = pinchStateRef.current;
    const totalScale = baseScale * scale;
    imageRef.current.style.transform = `scale(${totalScale}) translate(${translateX / scale}px, ${translateY / scale}px)`;
  }, []);

  // Handle pinch-to-zoom touch events - direct DOM manipulation for performance
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isImageZoomed) return;
    
    if (e.touches.length === 2) {
      e.preventDefault();
      const touch1 = e.touches[0]!;
      const touch2 = e.touches[1]!;
      
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      pinchStateRef.current.lastDistance = distance;
      pinchStateRef.current.lastCenterX = (touch1.clientX + touch2.clientX) / 2;
      pinchStateRef.current.lastCenterY = (touch1.clientY + touch2.clientY) / 2;
      setIsPinching(true);
    }
  }, [isImageZoomed]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isImageZoomed || e.touches.length !== 2) return;
    
    e.preventDefault();
    const touch1 = e.touches[0]!;
    const touch2 = e.touches[1]!;
    
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    const newDistance = Math.sqrt(dx * dx + dy * dy);
    const newCenterX = (touch1.clientX + touch2.clientX) / 2;
    const newCenterY = (touch1.clientY + touch2.clientY) / 2;
    
    const state = pinchStateRef.current;
    
    if (state.lastDistance > 0) {
      // Calculate scale change
      const scaleChange = newDistance / state.lastDistance;
      state.scale = Math.max(1, Math.min(4, state.scale * scaleChange));
      
      // Calculate pan/translate change
      const deltaX = newCenterX - state.lastCenterX;
      const deltaY = newCenterY - state.lastCenterY;
      
      // Only allow panning when zoomed in
      if (state.scale > 1) {
        state.translateX += deltaX;
        state.translateY += deltaY;
      }
      
      // Apply transform directly - baseScale is 1.8 for Deus, 1.0 for Astera
      const isAstera = product?.brand === "astera" || product?.name.toLowerCase().includes("astera");
      const baseScale = isAstera ? 1.0 : 1.8;
      applyTransform(baseScale);
    }
    
    state.lastDistance = newDistance;
    state.lastCenterX = newCenterX;
    state.lastCenterY = newCenterY;
  }, [isImageZoomed, product, applyTransform]);

  const handleTouchEnd = useCallback(() => {
    // Only process if we were actually pinching
    const wasPinching = pinchStateRef.current.lastDistance > 0;
    setIsPinching(false);
    pinchStateRef.current.lastDistance = 0;
    
    if (!wasPinching) return; // Don't modify transform if we weren't pinching
    
    // Get base scale for this product
    const isAstera = product?.brand === "astera" || product?.name.toLowerCase().includes("astera");
    const baseScale = isAstera ? 1.0 : 1.8;
    
    // If scale is close to 1, reset to base scale
    if (pinchStateRef.current.scale <= 1.1) {
      pinchStateRef.current.scale = 1;
      pinchStateRef.current.translateX = 0;
      pinchStateRef.current.translateY = 0;
      if (imageRef.current) {
        // Animate back to base scale and keep it there
        imageRef.current.style.transition = "transform 0.3s ease-out";
        imageRef.current.style.transform = `scale(${baseScale})`;
        setTimeout(() => {
          if (imageRef.current) {
            imageRef.current.style.transition = "";
            // Keep the baseScale set - don't clear it
          }
        }, 300);
      }
    }
  }, [product]);

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
            // No transition on filter - instant blur to avoid interfering with other modal animations
            pointerEvents: isAnyNavbarModalOpen ? "none" : "auto",
            willChange: "filter",
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
                <div className="relative mb-4">
                  <div
                    ref={imageContainerRef}
                    className="rounded-lg flex items-center justify-center p-1 relative overflow-hidden"
                    style={{
                      width: isImageZoomed ? "100%" : "128px",
                      height: isImageZoomed ? "200px" : "96px",
                      background: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid #e5e7eb",
                      // CPU rendering - avoid GPU compositing for VRAM optimization
                      transform: "none",
                      willChange: "auto",
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                      contain: "layout style paint",
                      transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      touchAction: isImageZoomed ? "none" : "auto",
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {/* Zoom Toggle Button */}
                    <button
                      onClick={() => {
                        if (isImageZoomed) {
                          // When closing zoom, first reset image to base scale
                          const isAstera = product?.brand === "astera" || product?.name.toLowerCase().includes("astera");
                          const baseScale = isAstera ? 1.0 : 1.8;
                          
                          // Reset pinch state
                          pinchStateRef.current = {
                            scale: 1,
                            translateX: 0,
                            translateY: 0,
                            lastDistance: 0,
                            lastCenterX: 0,
                            lastCenterY: 0,
                          };
                          
                          // Animate image back to base scale first
                          if (imageRef.current) {
                            imageRef.current.style.transition = "transform 0.2s ease-out";
                            imageRef.current.style.transform = `scale(${baseScale})`;
                          }
                          
                          // Then start container transition after a short delay
                          setTimeout(() => {
                            if (imageRef.current) {
                              imageRef.current.style.transition = "";
                            }
                            setIsImageZoomed(false);
                          }, 200);
                        } else {
                          setIsImageZoomed(true);
                        }
                      }}
                      className="absolute top-1 right-1 p-1 rounded-md hover:bg-gray-100 z-10"
                      style={{
                        color: "#9ca3af",
                        transition: "background-color 0.2s ease",
                      }}
                      aria-label={isImageZoomed ? "Zoom out" : "Zoom in"}
                    >
                      {isImageZoomed ? (
                        <MinusIcon className="w-4 h-4" />
                      ) : (
                        <PlusIcon className="w-4 h-4" />
                      )}
                    </button>
                    
                    <img
                      ref={imageRef}
                      src={product.image}
                      alt={product.name}
                      className="object-contain rounded"
                      style={{
                        opacity: 1,
                        width: "100%",
                        height: "100%",
                        // Keep scale constant - container size change handles the zoom
                        transform:
                          product?.brand === "astera" ||
                          product?.name.toLowerCase().includes("astera")
                            ? "scale(1.0)" // Astera images are already large
                            : "scale(1.8)", // Deus always at 1.8x - container growth makes it bigger
                        // CPU rendering - avoid GPU compositing
                        WebkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                        willChange: "auto",
                        transition: isPinching ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        pointerEvents: "none",
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Brand Label - absolutely positioned so it doesn't affect layout */}
                  <img
                    src={product?.brand === "astera" ? "/astera_labs.png" : "/deus_medical.png"}
                    alt={product?.brand === "astera" ? "Astera Labs" : "Deus Medical"}
                    className="h-8 object-contain absolute top-0 right-0"
                    style={{
                      // CPU rendering - avoid GPU compositing
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                      willChange: "auto",
                      opacity: isImageZoomed ? 0 : 1,
                      transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      pointerEvents: isImageZoomed ? "none" : "auto",
                    }}
                    loading="lazy"
                    decoding="async"
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
