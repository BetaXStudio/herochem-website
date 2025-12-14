"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { featuredProductLists, type FeaturedListType } from "../../lib/featured-products";
import { productDetails } from "../../lib/product-details-database";
import { SearchProductModal } from "../search/search-product-modal";

interface FeaturedProductsSectionProps {
  className?: string;
}

export default function FeaturedProductsSection({ className = "" }: FeaturedProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
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
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => openModal(product)}
                className={`
                  flex-shrink-0 bg-white rounded-lg flex flex-col cursor-pointer
                  ${isMobile ? "w-36" : "w-48"}
                `}
              >
                {/* Product Image Container */}
                <div className={`w-full rounded-xl mb-1 flex items-center justify-center relative bg-white border border-gray-200 overflow-hidden ${isMobile ? "p-1.5" : "p-2"}`}>
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
            ))}
            
            {/* Duplicate products for seamless loop on desktop */}
            {!isMobile && products.map((product) => (
              <div
                key={`${product.id}-duplicate`}
                onClick={() => openModal(product)}
                className={`
                  flex-shrink-0 bg-white rounded-lg flex flex-col cursor-pointer
                  ${isMobile ? "w-36" : "w-48"}
                `}
              >
                {/* Product Image Container */}
                <div className="w-full rounded-xl mb-1 flex items-center justify-center relative p-2 bg-white border border-gray-200 overflow-hidden">
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
                </div>

                {/* Product Info */}
                <div className="px-2 pb-2">
                  <h3 className="text-gray-900 font-bold mb-0.5 line-clamp-1 text-xs">
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
            ))}
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

      {/* Product Modal */}
      <SearchProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
