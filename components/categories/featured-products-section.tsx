"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { featuredProductLists, type FeaturedListType } from "../../lib/featured-products";
import { productDetails } from "../../lib/product-details-database";
import { ProductDetailModalDesktop } from "./product-detail-modal-desktop";
import { ProductDetailOverlay } from "./product-detail-overlay";

interface FeaturedProductsSectionProps {
  className?: string;
}

export default function FeaturedProductsSection({ className = "" }: FeaturedProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  
  // Auto-scroll states for desktop
  const bestSellersRef = useRef<HTMLDivElement>(null);
  const bestRatedRef = useRef<HTMLDivElement>(null);
  const [isPausedBestSellers, setIsPausedBestSellers] = useState(false);
  const [isPausedBestRated, setIsPausedBestRated] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get products for a specific list
  const getProductsForList = (listType: FeaturedListType) => {
    const productIds = featuredProductLists[listType];
    return productIds
      .map(id => productDetails.find(p => p.id === id))
      .filter((product): product is NonNullable<typeof product> => Boolean(product));
  };

  // Get brand color based on product name
  const getProductBrandColor = (productName: string): string => {
    if (productName?.toLowerCase().includes("astera")) {
      return "#d67f3f"; // ASTERA orange/brown
    }
    return "#e91111"; // Default DEUS red
  };

  // Function to extract active ingredient name without dosage
  const getActiveIngredientName = (description: string): string => {
    // Remove dosage numbers and units (mg, mcg, IU, etc.)
    const cleaned = description
      .replace(/\d+(\.\d+)?\s*(mg|mcg|µg|iu|IU|ml|ML)\b/g, '') // Remove dosage amounts
      .replace(/,\s*,/g, ',') // Remove double commas
      .replace(/^,\s*|,\s*$/g, '') // Remove leading/trailing commas
      .replace(/,\s+/g, ', ') // Normalize comma spacing
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim();
    
    return cleaned;
  };

  // Modal handlers
  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Center the 2nd card on mobile (initial scroll offset)
  useEffect(() => {
    if (!isMobile) return;
    
    const centerSecondCard = (container: HTMLDivElement | null) => {
      if (!container) return;
      
      // Card width (w-36 = 144px) + gap (gap-4 = 16px) + padding (px-4 = 16px)
      const cardWidth = 144;
      const gap = 16;
      const padding = 16;
      const containerWidth = container.clientWidth;
      
      // Calculate scroll position to center the 2nd card
      // Position of 2nd card start: padding + cardWidth + gap
      // Center offset: (containerWidth - cardWidth) / 2
      const secondCardStart = padding + cardWidth + gap;
      const centerOffset = (containerWidth - cardWidth) / 2;
      const scrollPosition = secondCardStart - centerOffset;
      
      container.scrollLeft = Math.max(0, scrollPosition);
    };
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      centerSecondCard(bestSellersRef.current);
      centerSecondCard(bestRatedRef.current);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Auto-scroll effect for desktop
  useEffect(() => {
    if (isMobile) return;

    const scrollContainer = (container: HTMLDivElement | null, isPaused: boolean, direction: 'left' | 'right' = 'left') => {
      if (!container || isPaused) return;
      
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      if (scrollWidth > clientWidth) {
        if (direction === 'left') {
          container.scrollLeft += 1;
          
          // Reset scroll when reaching the end
          if (container.scrollLeft >= scrollWidth - clientWidth) {
            container.scrollLeft = 0;
          }
        } else {
          container.scrollLeft -= 1;
          
          // Reset scroll when reaching the beginning
          if (container.scrollLeft <= 0) {
            container.scrollLeft = scrollWidth - clientWidth;
          }
        }
      }
    };

    const interval = setInterval(() => {
      scrollContainer(bestSellersRef.current, isPausedBestSellers, 'left');
      scrollContainer(bestRatedRef.current, isPausedBestRated, 'right');
    }, 50); // Smooth 20fps scrolling

    return () => clearInterval(interval);
  }, [isMobile, isPausedBestSellers, isPausedBestRated]);

  const renderProductRow = (
    title: string,
    listType: FeaturedListType,
    containerRef: React.RefObject<HTMLDivElement | null>,
    onMouseEnter: () => void,
    onMouseLeave: () => void
  ) => {
    const products = getProductsForList(listType);

    return (
      <div className="mb-4 last:mb-0">
        {/* Title */}
        <h2 className="text-xs md:text-lg font-bold text-gray-900 mb-0 px-4 md:px-6">
          {title}
        </h2>
        
        {/* Trennlinie */}
        <div 
          className="h-[1px] mb-3 rounded-full mx-4 md:mx-6"
          style={{ 
            width: title === "BEST SELLERS" ? "125px" : "110px", 
            backgroundColor: "#e91111" // DEUS rot
          }}
        />

        {/* Products Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Left Fade Out Effect */}
          <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
          {/* Right Fade Out Effect */}
          <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

          {/* Products Scroll Container */}
          <div 
            ref={containerRef}
            className={`
              flex gap-4 px-4 md:px-6 py-2
              ${isMobile ? "overflow-x-auto scrollbar-hide" : "overflow-hidden"}
            `}
            style={{
              scrollBehavior: isMobile ? "smooth" : "auto",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {products.map((product) => {
              const isHovered = hoveredProductId === product.id;
              return (
              <div
                key={product.id}
                className={`
                  flex-shrink-0 bg-white rounded-lg flex flex-col
                  ${isMobile ? "w-36" : "w-48"}
                `}
                onMouseEnter={() => !isMobile && setHoveredProductId(product.id)}
                onMouseLeave={() => !isMobile && setHoveredProductId(null)}
                onClick={() => isMobile && setHoveredProductId(isHovered ? null : product.id)}
              >
                {/* Product Image Container */}
                <div 
                  className={`w-full rounded-xl mb-1 flex items-center justify-center relative bg-white border border-gray-200 overflow-hidden ${isMobile ? "p-1.5 h-[80px]" : "p-2 h-[120px]"}`}
                  style={{ clipPath: "inset(0)" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={isMobile ? 80 : 120}
                    height={isMobile ? 80 : 120}
                    className="object-contain"
                    style={{
                      transform: product.brand === "astera" ? "scale(0.85)" : "scale(1)"
                    }}
                    unoptimized
                  />
                  
                  {/* Blur Layer on Hover */}
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
                  
                  {/* DETAILS Button Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${
                      isHovered ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    style={{
                      transition: "opacity 150ms ease-out, visibility 150ms ease-out",
                      zIndex: 20,
                      pointerEvents: isHovered ? "auto" : "none",
                      isolation: "isolate",
                    }}
                  >
                    <button
                      className={`text-white font-bold rounded-lg ${isMobile ? "px-2 py-1.5 text-[9px] min-w-[56px]" : "px-3 py-2 text-[10px] min-w-[70px]"}`}
                      style={{
                        backgroundColor: "#2d2d34",
                        cursor: "pointer",
                        pointerEvents: "auto",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(product);
                      }}
                    >
                      DETAILS
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className={`${isMobile ? "px-1.5 pb-1.5" : "px-2 pb-2"}`}>
                  <h3 className={`text-gray-900 font-bold mb-0.5 line-clamp-1 ${isMobile ? "text-xs" : "text-sm"}`}>
                    {product.name}
                  </h3>
                  <div className={`text-gray-600 mb-0.5 overflow-hidden leading-tight ${isMobile ? "text-[8px]" : "text-[9px]"}`}>
                    {(() => {
                      // Extract active ingredient name without dosage
                      const cleanDescription = getActiveIngredientName(product.description);
                      const firstIngredient = cleanDescription.split(',')[0]?.split(' + ')[0]?.trim() || cleanDescription;
                      const hasMoreIngredients = cleanDescription.includes(',') || cleanDescription.includes(' + ');
                      return hasMoreIngredients ? firstIngredient + "..." : firstIngredient;
                    })()}
                  </div>
                  
                  {/* Price and Category Row */}
                  <div className={`flex items-center justify-between mt-1 ${isMobile ? "gap-1" : "gap-2"}`}>
                    <p className={`text-gray-900 font-bold ${isMobile ? "text-sm" : "text-lg"}`}>
                      €{product.price.toFixed(2)}
                    </p>
                    
                    <span 
                      className={`px-2 py-0.5 rounded text-white font-medium ${isMobile ? "text-[8px]" : "text-[8px]"}`}
                      style={{
                        backgroundColor: getProductBrandColor(product.name)
                      }}
                    >
                      {product.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            );
            })}
            
            {/* Duplicate products for seamless loop on desktop */}
            {!isMobile && products.map((product) => {
              const duplicateId = `${product.id}-duplicate`;
              const isHovered = hoveredProductId === duplicateId;
              return (
              <div
                key={duplicateId}
                className="flex-shrink-0 bg-white rounded-lg flex flex-col w-48"
                onMouseEnter={() => setHoveredProductId(duplicateId)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                {/* Product Image Container */}
                <div 
                  className="w-full rounded-xl mb-1 flex items-center justify-center relative p-2 h-[120px] bg-white border border-gray-200 overflow-hidden"
                  style={{ clipPath: "inset(0)" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="object-contain"
                    style={{
                      transform: product.brand === "astera" ? "scale(0.85)" : "scale(1)"
                    }}
                    unoptimized
                  />
                  
                  {/* Blur Layer on Hover */}
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
                  
                  {/* DETAILS Button Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${
                      isHovered ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    style={{
                      transition: "opacity 150ms ease-out, visibility 150ms ease-out",
                      zIndex: 20,
                      pointerEvents: isHovered ? "auto" : "none",
                      isolation: "isolate",
                    }}
                  >
                    <button
                      className="px-3 py-2 text-white font-bold rounded-lg text-[10px] min-w-[70px]"
                      style={{
                        backgroundColor: "#2d2d34",
                        cursor: "pointer",
                        pointerEvents: "auto",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(product);
                      }}
                    >
                      DETAILS
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="px-2 pb-2">
                  <h3 className="text-gray-900 font-bold mb-0.5 line-clamp-1 text-sm">
                    {product.name}
                  </h3>
                  <div className="text-gray-600 mb-0.5 overflow-hidden text-[9px] leading-tight">
                    {(() => {
                      // Extract active ingredient name without dosage
                      const cleanDescription = getActiveIngredientName(product.description);
                      const firstIngredient = cleanDescription.split(',')[0]?.split(' + ')[0]?.trim() || cleanDescription;
                      const hasMoreIngredients = cleanDescription.includes(',') || cleanDescription.includes(' + ');
                      return hasMoreIngredients ? firstIngredient + "..." : firstIngredient;
                    })()}
                  </div>
                  
                  {/* Price and Category Row */}
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <p className="text-gray-900 font-bold text-lg">
                      €{product.price.toFixed(2)}
                    </p>
                    
                    <span 
                      className="text-[8px] px-2 py-0.5 rounded text-white font-medium"
                      style={{
                        backgroundColor: getProductBrandColor(product.name)
                      }}
                    >
                      {product.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={`py-8 ${className}`}>
      {/* Best Sellers Row */}
      {renderProductRow(
        "BEST SELLERS",
        "bestSellers",
        bestSellersRef,
        () => setIsPausedBestSellers(true),
        () => setIsPausedBestSellers(false)
      )}

      {/* Best Rated Row */}
      {renderProductRow(
        "BEST RATED",
        "bestRated",
        bestRatedRef,
        () => setIsPausedBestRated(true),
        () => setIsPausedBestRated(false)
      )}

      {/* Product Modal - Mobile: ProductDetailOverlay, Desktop: ProductDetailModalDesktop */}
      {isMobile ? (
        <ProductDetailOverlay
          productId={selectedProduct?.id || ""}
          isOpen={isModalOpen}
          onCloseAction={closeModal}
        />
      ) : (
        <ProductDetailModalDesktop
          productId={selectedProduct?.id || ""}
          isOpen={isModalOpen}
          onCloseAction={closeModal}
        />
      )}
    </section>
  );
}
