"use client";

import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { type Product } from "../../lib/products-database";

// Brand colors function
const getBrandColors = (productBrand: string) => {
  return productBrand === "astera" 
    ? { primary: "#d67f3f" } 
    : { primary: "#e91111" };
};

// Static styles constants for better performance
const STATIC_STYLES = {
  staticImage: {
    transform: "scale(2.0)",
  },
  staticImageMobile: {
    transform: "scale(1.8)",
  },
};

// CSS class names for consistent rendering - handled by globals.css
const IMAGE_SCALE_CLASSES = {
  deus: "",
  astera: "",
};

// Produktkachel-Komponente mit React.memo für optimierte Performance
const ProductCardComponent = ({
    product,
    onAddToCart,
    onAddToWishlist,
    onDetailsClick,
    selectedBrand,
    hoveredProductId,
    onHoverChange,
  }: {
    product: Product;
    onAddToCart: (e: React.MouseEvent, product: Product) => void;
    onAddToWishlist?: (e: React.MouseEvent, product: Product) => void;
    onDetailsClick: (e: React.MouseEvent, product: Product) => void;
    selectedBrand?: "deus" | "astera" | null;
    hoveredProductId?: string | null;
    onHoverChange?: (productId: string | null) => void;
  }) => {
    const [localIsHovered, setLocalIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Always start with false for SSR consistency
    const [imageSrc, setImageSrc] = useState<string | null>(null); // Lazy load images - Priority 5
    
    // Track if component is mounted to prevent setState on unmounted component
    const isMountedRef = useRef(true);
    const imageRef = useRef<HTMLDivElement>(null);
    
    // Priority 5: Lazy load images with IntersectionObserver
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !imageSrc && isMountedRef.current) {
              // Image is visible, start loading
              setImageSrc(product.image);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "50px" } // Start loading 50px before visible
      );

      if (imageRef.current) {
        observer.observe(imageRef.current);
      }

      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }, [product.image, imageSrc]);
    
    // Cleanup on unmount
    useEffect(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);

    // Use global hover state if provided, otherwise use local state
    const isHovered = hoveredProductId !== undefined 
      ? hoveredProductId === product.id 
      : localIsHovered;

    const setIsHovered = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
      if (onHoverChange) {
        // Use global state
        const newValue = typeof value === 'function' ? value(isHovered) : value;
        onHoverChange(newValue ? product.id : null);
      } else {
        // Use local state
        setLocalIsHovered(value);
      }
    }, [onHoverChange, product.id, isHovered]);

    // Mobile detection - runs only on client after hydration
    useEffect(() => {
      const checkMobile = () => {
        if (isMountedRef.current) {
          setIsMobile(window.innerWidth <= 768);
        }
      };
      // Set initial value after mount
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleImageError = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        if (!isMountedRef.current) return;
        const target = e.target as HTMLImageElement;
        target.style.display = "none";
        const fallback = target.nextElementSibling as HTMLElement;
        if (fallback) {
          fallback.classList.remove("hidden");
        }
        setImageLoaded(true);
      },
      [],
    );

    const handleImageLoad = useCallback(() => {
      if (isMountedRef.current) {
        setImageLoaded(true);
      }
    }, []);

    const handleMouseEnter = useCallback(() => {
      if (isMountedRef.current) {
        setIsHovered(true);
      }
    }, [setIsHovered]);

    const handleMouseLeave = useCallback(() => {
      if (isMountedRef.current) {
        setIsHovered(false);
      }
    }, [setIsHovered]);

    const handleMobileTap = useCallback((e: React.MouseEvent) => {
      if (!isMountedRef.current) return;
      if (isMobile) {
        // Check if the click target is a button or inside a button
        const target = e.target as HTMLElement;
        const isButton = target.tagName === 'BUTTON' || target.closest('button');
        
        // Only toggle hover if it's not a button click
        if (!isButton) {
          e.preventDefault();
          e.stopPropagation();
          setIsHovered((prev) => !prev);
        }
      }
    }, [isMobile, setIsHovered]);

    const handleDetailsClick = useCallback(
      (e: React.MouseEvent) => {
        console.log("🎯 ProductCard DETAILS button clicked");
        e.preventDefault();
        e.stopPropagation();
        onDetailsClick(e, product);
      },
      [onDetailsClick, product],
    );

    const imageClasses = useMemo(() => {
      const baseClasses =
        "w-full h-full object-cover rounded transition-opacity duration-300";
      const opacityClass = imageLoaded ? "opacity-100" : "opacity-0";
      return `${baseClasses} ${opacityClass}`;
    }, [imageLoaded]);

    return (
      <div
        className="bg-white md:bg-white rounded-lg flex flex-col mb-4 md:mb-8 w-full box-border md:max-w-none"
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      >
        <div
          className={`product-card-inner w-full rounded-xl mb-1 flex items-center justify-center relative p-2 md:p-0 bg-white md:bg-white h-[85px] md:h-[110px]`}
          style={{
            transition: "border-color 0.2s ease",
            border: "1px solid #e5e7eb",
            zIndex: 1,
            clipPath: "inset(0)",
          }}
          onClick={handleMobileTap}
          ref={imageRef}
        >
          {/* Loading Animation */}
          {!imageLoaded && (
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              <div
                className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300"
                style={{
                  borderTopColor:
                    selectedBrand === "astera" ? "#d67f3f" : "#ef4444",
                }}
              ></div>
            </div>
          )}

          <img
            src={imageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3C/svg%3E"}
            alt={product.name}
            className={`${imageClasses} product-image`}
            style={{
              transition: "none",
              objectFit: "contain" as const,
              // CPU rendering with more reasonable sizes
              // Astera: 75% on mobile, 60% on desktop; Deus: 150%
              width: (selectedBrand === "astera" || product.name.toLowerCase().includes("astera")) 
                ? (isMobile ? "75%" : "60%")
                : "150%",
              height: (selectedBrand === "astera" || product.name.toLowerCase().includes("astera")) 
                ? (isMobile ? "75%" : "60%")
                : "150%",
              maxWidth: "none",
              maxHeight: "none",
            }}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          <span className="text-gray-600 text-xs hidden">Produktbild</span>

          {/* Separater Blur Layer über gesamte Card */}
          <div
            className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-150 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              zIndex: 10,
              overflow: "hidden",
            }}
          />

          {/* Hover Overlay mit Buttons */}
          <div
            className={`absolute inset-0 flex flex-row items-center justify-center gap-1 md:gap-2 bg-transparent rounded ${
              isHovered ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{
              transition: "opacity 150ms ease-out, visibility 150ms ease-out",
              willChange: isHovered ? "opacity" : "auto",
              pointerEvents: "auto",
              zIndex: 20,
              overflow: "hidden",
            }}
          >
            <button
              className="px-2 md:px-3 py-1.5 md:py-2.5 text-white font-bold rounded-lg text-[9px] md:text-[10px] min-w-[56px] md:min-w-[70px]"
              style={{
                backgroundColor: "#2d2d34",
                transition: "background-color 150ms ease-out, opacity 200ms ease-out",
                opacity: isHovered ? 1 : 0.8,
                cursor: "pointer",
                pointerEvents: "auto",
                boxShadow: "inset 0 0 0 10px rgba(0, 0, 0, 0)",
              }}
              onClick={handleDetailsClick}
            >
              DETAILS
            </button>
          </div>
        </div>

        <h3
          className="text-gray-900 font-bold mb-0.5 line-clamp-1 px-2 md:px-3 text-[10px] md:text-[12px] leading-[12px] md:leading-[14px]"
        >
          {product.name}
        </h3>
        <div
          className="text-gray-600 mb-0.5 overflow-hidden px-2 md:px-3 text-[8px] md:text-[9px] leading-[10px] md:leading-[11px] max-h-[10px] md:max-h-[11px]"
        >
          {(() => {
            const items = product.description.split(/,\s+/);
            const firstItem = items[0] || "";
            const hasMore = items.length > 1;
            return (
              <div className="truncate">
                {firstItem}{hasMore ? "..." : ""}
              </div>
            );
          })()}
        </div>
        
        {/* Price and Add to Cart Row */}
        <div className="flex items-center justify-between px-2 md:px-3 pb-2 gap-1">
          <p
            className="text-gray-900 font-bold text-[22px] md:text-[28px] leading-[26px] md:leading-[32px]"
            style={{ marginRight: "5px" }}
          >
            €{product.price.toFixed(2)}
          </p>
          
          {/* Button Container */}
          <div className="flex items-center gap-1" style={{ marginRight: "-5px" }}>
            {/* Add to Cart Button - always visible */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(e, product);
              }}
              className="font-medium rounded-lg flex items-center gap-1 text-[10px] md:text-[12px] px-1.5 py-1 md:px-3 md:py-1.5 min-w-[45px] md:min-w-[65px]"
              style={{
                backgroundColor: getBrandColors(product.brand).primary,
                color: "white",
                transition: "background-color 0.15s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = product.brand === "astera" ? "#c06d2f" : "#c00d0d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = getBrandColors(product.brand).primary;
              }}
            >
              <ShoppingCartIcon className="w-2 h-2 md:w-3 md:h-3 ml-[3px]" />
              <span className="mr-1">ADD</span>
            </button>
            
            {/* Heart Button - always visible on mobile and desktop */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onAddToWishlist) {
                  onAddToWishlist(e, product);
                }
              }}
              className="font-medium rounded-lg flex items-center justify-center text-[8px] md:text-[10px] p-[3px] md:p-[3.5px] min-w-[24px] md:min-w-[30px] h-[24px] md:h-[30px]"
              style={{
                backgroundColor: getBrandColors(product.brand).primary,
                color: "white",
                cursor: "pointer",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = product.brand === "astera" ? "#c06d2f" : "#c00d0d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = getBrandColors(product.brand).primary;
              }}
            >
              <HeartIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
};

// Wrap mit React.memo um unnötige Re-renders zu verhindern
const ProductCard = React.memo(ProductCardComponent);

ProductCard.displayName = "ProductCard";

export default ProductCard;
