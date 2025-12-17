"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { featuredProductLists } from "../../lib/featured-products";
import { productDetails } from "../../lib/product-details-database";
import { ProductDetailOverlay } from "../categories/product-detail-overlay";

export default function NewsSection() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const productsContainerRef = useRef<HTMLDivElement>(null);
  const productsScrollRef = useRef<HTMLDivElement>(null);

  // Rotate banners every 10 seconds
  useEffect(() => {
    setIsClient(true);
    // No rotation needed - only one banner
    return () => {};
  }, []);

  // Center scroll on load - start at middle product
  useEffect(() => {
    if (isClient && productsScrollRef.current) {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        const element = productsScrollRef.current;
        if (!element) return;
        
        // Get dimensions
        const containerWidth = element.clientWidth;
        const cardWidth = 144; // w-36 = 144px (mobile)
        const gap = 16; // gap-4 = 16px
        const padding = 16; // pl-4 = 16px
        
        // 14 products total - start at middle product (7th)
        const middleProductIndex = 6; // 0-indexed, so 6 = 7th product
        const scrollPosition = padding + (middleProductIndex * (cardWidth + gap)) + cardWidth / 2 - containerWidth / 2;
        
        // Add small timeout to ensure hydration is complete before scrolling
        setTimeout(() => {
          if (element) {
            element.scrollLeft = Math.max(0, scrollPosition);
          }
        }, 0);
      });
    }
  }, [isClient]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0]?.clientX || 0;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0]?.clientX || 0;
    handleSwipe();
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;
    const isLeftSwipe = difference > 50; // Swipe left = next banner
    const isRightSwipe = difference < -50; // Swipe right = previous banner

    if (isLeftSwipe) {
      setCurrentBanner((prev) => (prev + 1) % 2);
    } else if (isRightSwipe) {
      setCurrentBanner((prev) => (prev - 1 + 2) % 2);
    }
  };

  // Handle product swipe
  const handleProductTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0]?.clientX || 0;
  };

  const handleProductTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0]?.clientX || 0;
    handleProductSwipe();
  };

  const handleProductSwipe = () => {
    if (!productsScrollRef.current) return;
    const difference = touchStartX.current - touchEndX.current;
    const scrollAmount = 150; // Scroll distance per swipe
    const currentScroll = productsScrollRef.current.scrollLeft;
    const maxScroll = productsScrollRef.current.scrollWidth - productsScrollRef.current.clientWidth;
    const threshold = 5; // Small threshold for scroll position

    if (difference > 30) {
      // Swipe left = scroll right (smooth)
      if (currentScroll < maxScroll - threshold) {
        productsScrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    } else if (difference < -30) {
      // Swipe right = scroll left (smooth)
      if (currentScroll > threshold) {
        productsScrollRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  // Get bestseller products
  const getBestsellerProducts = () => {
    const productIds = featuredProductLists.home_products;
    return productIds
      .map(id => productDetails.find(p => p.id === id))
      .filter((product): product is NonNullable<typeof product> => Boolean(product));
  };

  // Get product brand color
  const getProductBrandColor = (productName: string): string => {
    if (productName?.toLowerCase().includes("astera")) {
      return "#d67f3f"; // ASTERA orange/brown
    }
    return "#e91111"; // Default DEUS red
  };

  // Extract active ingredient name without dosage
  const getActiveIngredientName = (description: string): string => {
    const cleaned = description
      .replace(/\d+(\.\d+)?\s*(mg|mcg|µg|iu|IU|ml|ML)\b/g, '')
      .replace(/,\s*,/g, ',')
      .replace(/^,\s*|,\s*$/g, '')
      .replace(/,\s+/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
    return cleaned;
  };

  // Modal handlers
  const openModal = (product: any) => {
    setSelectedProductId(product.id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  // ...existing code...
  return (
    <div className="md:hidden">
      {/* Scrolling Text Banner */}
      <div className="bg-gradient-to-br from-gray-50 to-white md:mt-0 relative z-10" style={{ marginTop: '-260px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative z-20">
          <div className="overflow-hidden relative">
            <div
              className="flex whitespace-nowrap animate-scroll"
              style={{
                animation: "scroll-left 15.4s linear infinite",
              }}
            >
              <span className="text-red-600 font-bold text-lg mr-4">
                CRYPTO DISCOUNT
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
              <span className="text-gray-900 font-bold text-lg mr-4">
                5% OFF EVERY ORDER
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
              <span className="text-red-600 font-bold text-lg mr-4">
                CRYPTO DISCOUNT
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
              <span className="text-gray-900 font-bold text-lg mr-4">
                5% OFF EVERY ORDER
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
              <span className="text-red-600 font-bold text-lg mr-4">
                CRYPTO DISCOUNT
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
              <span className="text-gray-900 font-bold text-lg mr-4">
                5% OFF EVERY ORDER
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
              <span className="text-red-600 font-bold text-lg mr-4">
                CRYPTO DISCOUNT
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
              <span className="text-gray-900 font-bold text-lg mr-4">
                5% OFF EVERY ORDER
              </span>
              <span className="text-gray-900 font-bold text-lg mr-4">•</span>
            </div>

            {/* Fade out effects */}
            <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-8 bg-white pointer-events-none z-0"></div>
      </div>

      {/* Banner Container with Alternating Images */}
      <div 
        className="relative w-full h-48 bg-white overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={isClient ? handleTouchStart : undefined}
        onTouchEnd={isClient ? handleTouchEnd : undefined}
      >
        {/* Deus Banner */}
        <div
          className="absolute w-full h-full transition-opacity duration-500"
          style={{ opacity: currentBanner === 0 ? 1 : 0 }}
        >
          <Image
            src="/deus_banner.jpg"
            alt="Deus Medical Banner"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay Content */}
          <div className="absolute top-2 left-3 z-20">
            <h3 className="text-lg font-bold mb-3">
              <span className="text-black">DEUS</span>
              <span className="text-red-600">MEDICAL</span>
            </h3>
          </div>
          <div className="absolute bottom-6 left-3 z-10">
            <Link 
              href="/categories"
              className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 text-xs font-medium transition-colors rounded-lg"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        {/* Banner Indicators */}
        <div className="absolute bottom-6 right-2 z-20 flex gap-2">
          <button
            onClick={() => setCurrentBanner(0)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor: '#e91111',
              width: '24px',
            }}
            aria-label="Show Deus banner"
          />
        </div>

        {/* Top Fade Out Effect */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none z-10"></div>

        {/* Bottom Fade Out Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[rgb(249,250,251)] via-[rgb(249,250,251)]/50 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* bottom wave */}
      <div className="relative z-10" style={{ marginTop: '-12px' }}>
        <svg viewBox="0 0 1200 120" className="w-full h-16 lg:h-20" style={{ transform: 'scaleY(-1) scaleX(-1)' }}>
          <path
            d="M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z"
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
      

      {/* Info Section Background*/}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white pt-0 relative" style={{ marginTop: '-40px', paddingBottom: 'calc(2rem + 500px)', marginBottom: '0' }}>
        <div className="space-y-0 pt-10 px-4">
          {/* Main Info first the wave element */}
          <div className="absolute left-0 right-0" style={{ marginTop: '86px' }}>
		          <svg viewBox="0 0 1200 120" className="w-full h-16 lg:h-20">
		          <path
			        d="M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z"
			          fill="rgb(249, 250, 251)"
		              />
		              </svg>
	        </div>


          <div className="absolute left-0 right-0 top-12 px-0">
                <p className="text-sm text-gray-400 leading-relaxed space-y-0 px-12 text-center">
                  Discover our exclusive selection of premium health and performance products from trusted brands worldwide.
                </p>
                {/* Container with white background and Bestseller Section - Full Width */}
      <div className="absolute left-0 right-0 h-[200px] relative w-full" style={{ marginTop: '64px', marginBottom: '-16px', backgroundColor: 'rgb(249, 250, 251)' }}>
        {/* Bestseller Products Container */}
        <div 
          ref={productsScrollRef}
          className="flex gap-4 py-2 pl-4 md:pl-6 overflow-x-auto scrollbar-hide h-full w-full relative"
          onTouchStart={isClient ? handleProductTouchStart : undefined}
          onTouchEnd={isClient ? handleProductTouchEnd : undefined}
          suppressHydrationWarning
          style={{ scrollBehavior: 'auto', paddingTop: '20px' }}
        >
          {getBestsellerProducts().map((product) => {
            const isHovered = hoveredProductId === product.id;
            return (
            <div
              key={product.id}
              onClick={() => setHoveredProductId(isHovered ? null : product.id)}
              className="flex-shrink-0 rounded-lg flex flex-col cursor-pointer w-36 md:w-48"
              style={{ backgroundColor: 'rgb(249, 250, 251)' }}
            >
              {/* Product Image Container */}
              <div className="w-full rounded-xl mb-1 flex items-center justify-center relative border border-gray-200 overflow-hidden p-1.5 md:p-2" style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="object-contain"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '80px',
                    maxHeight: '80px',
                    transform: product.brand === "astera" ? "scale(0.85)" : "scale(1.15)"
                  }}
                  unoptimized
                />
                
                {/* Blur Layer */}
                <div
                  className="absolute inset-0 transition-opacity duration-200 rounded-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: "none",
                    zIndex: 10
                  }}
                />
                
                {/* DETAILS Button Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 rounded-xl"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? "auto" : "none",
                    zIndex: 20
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                      setHoveredProductId(null);
                    }}
                    className="px-4 py-1.5 text-xs bg-gray-900 text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
                  >
                    DETAILS
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="px-1.5 pb-1.5 md:px-2 md:pb-2">
                <h3 className="text-gray-900 font-bold mb-0.5 line-clamp-1 text-xs md:text-sm">
                  {product.name}
                </h3>
                <div className="text-gray-600 mb-0.5 overflow-hidden leading-tight text-[8px] md:text-[9px]">
                  {(() => {
                    const cleanDescription = getActiveIngredientName(product.description);
                    const firstIngredient = cleanDescription.split(',')[0]?.split(' + ')[0]?.trim() || cleanDescription;
                    const hasMoreIngredients = cleanDescription.includes(',') || cleanDescription.includes(' + ');
                    return hasMoreIngredients ? firstIngredient + "..." : firstIngredient;
                  })()}
                </div>
                
                {/* Price and Category Row */}
                <div className="flex items-center justify-between mt-1 gap-1 md:gap-2">
                  <p className="text-gray-900 font-bold text-sm md:text-lg">
                    €{product.price.toFixed(2)}
                  </p>
                  
                  <span 
                    className="px-2 py-0.5 rounded text-white font-medium text-[8px]"
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
        {/* Left Fade Out Effect */}
        <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-[rgb(249,250,251)] via-[rgb(249,250,251)]/50 to-transparent pointer-events-none z-10"></div>
        {/* Right Fade Out Effect */}
        <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-[rgb(249,250,251)] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Bottom Wave - connects to next section */}
      <div className="relative w-full" style={{ marginTop: '4px' }}>
        <svg viewBox="0 0 1200 120" className="w-full h-16 lg:h-20" style={{ transform: 'scaleY(-1) scaleX(-1)' }}>
          <path
            d="M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z"
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
              </div>

        </div>
      </div>



          {/** Info Section second text for heroguide*/}
          <div className="absolute left-0 right-0" style={{ marginTop: '-120px' }}>
                <p className="text-sm text-gray-400 leading-relaxed space-y-0 px-12 text-center">
                  Plan and track your complete cycle journey with our intelligent guidance system.
                </p>
          </div>

            {/* Top Wave Element for labreports section*/}
          <div className="absolute left-0 right-0" style={{ marginTop: '-52px' }}>
		          <svg viewBox="0 0 1200 120" className="w-full h-16 lg:h-20">
		          <path
			        d="M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z"
			          fill="rgb(249, 250, 251)"
		              />
		              </svg>
	        </div>
      
      {/* Custom CSS for scroll animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll-left 15.4s linear infinite;
        }
      `}</style>

      {/* Product Modal */}
      <ProductDetailOverlay
        productId={selectedProductId || ""}
        isOpen={isModalOpen}
        onCloseAction={closeModal}
      />
    </div>
  );
}
