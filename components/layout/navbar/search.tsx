"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "../../../contexts/modal-context";
import { productDetails } from "../../../lib/product-details-database";
import {
  getProductStats,
  searchProductsDatabase,
} from "../../../lib/search-products";
import { ProductDetailOverlay } from "../../categories/product-detail-overlay";

// Function to get brand color based on product brand (extracted for reuse)
const getProductBrandColor = (productName: string): string => {
  if (productName?.toLowerCase().includes("astera")) {
    return "#d67f3f"; // ASTERA orange/brown
  }
  return "#e91111"; // Default DEUS red
};

// Individual search result item with its own loading state
interface SearchResultItemProps {
  product: any;
  isMobile: boolean;
  onResultClick: (product: any) => void;
}

function SearchResultItem({ product, isMobile, onResultClick }: SearchResultItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(true);

  // IntersectionObserver for lazy loading AND unloading images
  // This prevents Safari VRAM crashes by unloading images when they scroll out of view
  useEffect(() => {
    isMountedRef.current = true;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isMountedRef.current) return;
          
          if (entry.isIntersecting) {
            // Element is visible - load the image
            setIsVisible(true);
            setImageSrc(product.image);
          } else {
            // Element is NOT visible - unload the image to free VRAM
            setIsVisible(false);
            setImageSrc(null);
            setImageLoaded(false);
          }
        });
      },
      { 
        rootMargin: "100px", // Start loading 100px before visible
        threshold: 0 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      isMountedRef.current = false;
      observer.disconnect();
    };
  }, [product.image]);

  const handleImageLoad = useCallback(() => {
    if (isMountedRef.current) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <button
      onClick={() => onResultClick(product)}
      className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 text-left group relative search-product-item cursor-pointer ${
        !isMobile ? "hover:translate-x-2" : ""
      }`}
      style={{ "--brand-color": getProductBrandColor(product.name) } as React.CSSProperties}
    >
      {/* Red Hover Line */}
      <div
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 opacity-0 transition-opacity duration-200 ${
          !isMobile ? "group-hover:opacity-100" : ""
        }`}
        style={{
          backgroundColor: getProductBrandColor(product.name),
        }}
      ></div>
      {/* Product Image */}
      <div
        ref={containerRef}
        className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200"
        style={{
          backgroundColor: "rgb(45, 45, 52)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Loading Animation - show when visible but image not loaded yet */}
        {isVisible && !imageLoaded && (
          <div
            className="absolute inset-0 flex items-center justify-center rounded-md"
            style={{
              background: "rgba(45, 45, 52, 0.9)",
              zIndex: 5,
            }}
          >
            <div
              className="animate-spin rounded-full h-5 w-5 border-2 border-gray-500"
              style={{
                borderTopColor: product.brand === "astera" ? "#d67f3f" : "#ef4444",
              }}
            ></div>
          </div>
        )}
        {/* Only render Image when visible - this unloads from VRAM when not visible */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={product.name}
            width={64}
            height={64}
            className={`object-cover w-full h-full transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            style={{
              transform: product.brand === "astera" ? "scale(0.85)" : "scale(1.15)",
            }}
            loading="lazy"
            onLoad={handleImageLoad}
            unoptimized
          />
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-white truncate transition-colors duration-200 product-name">
          {product.name}
        </h4>
        <p className={`text-xs text-neutral-400 truncate transition-colors duration-200 ${
          !isMobile ? "group-hover:text-neutral-300" : ""
        }`}>
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="text-right flex-shrink-0">
        <span className="text-sm font-bold text-white transition-colors duration-200 product-price">
          €{product.price.toFixed(2)}
        </span>
      </div>
    </button>
  );
}

export default function Search({
  keepResultsOpen = false,
  onDropdownStateChange,
  isNavbarModal = false,
  disabled = false,
}: {
  keepResultsOpen?: boolean;
  onDropdownStateChange?: (isOpen: boolean) => void;
  isNavbarModal?: boolean;
  disabled?: boolean;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(searchParams?.get("q") || "");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [preventClose, setPreventClose] = useState(false); // New state to prevent dropdown closing
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Check if we're exactly on /categories (not subpages) and without category filter
  const isExactCategoriesPage = pathname === "/categories";
  const hasNoCategoryFilter = !searchParams?.get("category") && !searchParams?.get("categorie");
  
  // Get modal context for desktop product detail modal and categories menu modal
  const { openProductDetailModal, isCategoriesMenuModalOpen, setCategoriesMenuModalOpen } = useModal();
  
  // Show overlay on: 
  // 1. ALL PRODUCTS page (normal search focus behavior) OR
  // 2. ANY categories page when CategoriesMenuModal is open (to allow closing it via search icon tap)
  const showCategoriesOverlay = (isExactCategoriesPage && hasNoCategoryFilter && isMobile && scrollY < 60 && !isProductDetailOpen) 
    || (isExactCategoriesPage && isMobile && isCategoriesMenuModalOpen);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll position for categories overlay
  useEffect(() => {
    if (!isExactCategoriesPage || !isMobile || !hasNoCategoryFilter) {
      setScrollY(0); // Reset when not on categories page
      return;
    }
    
    const handleScroll = () => {
      // iOS/Mobile uses MobileScrollContainer with data-mobile-scroll-container attribute
      const mobileScrollContainer = document.querySelector('[data-mobile-scroll-container]') as HTMLElement;
      
      if (mobileScrollContainer) {
        setScrollY(mobileScrollContainer.scrollTop);
      } else {
        setScrollY(window.scrollY);
      }
    };
    
    // Small delay to ensure the scroll container is mounted
    const initTimeout = setTimeout(() => {
      const mobileScrollContainer = document.querySelector('[data-mobile-scroll-container]') as HTMLElement;
      
      handleScroll(); // Initial check
      
      if (mobileScrollContainer) {
        mobileScrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      } else {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }
    }, 200);
    
    return () => {
      clearTimeout(initTimeout);
      const mobileScrollContainer = document.querySelector('[data-mobile-scroll-container]') as HTMLElement;
      
      if (mobileScrollContainer) {
        mobileScrollContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExactCategoriesPage, isMobile, hasNoCategoryFilter]);

  // Handle categories overlay tap - focuses input for iOS keyboard
  // If categories menu modal is open, close it AND also focus search
  const handleCategoriesOverlayTap = () => {
    // Close the categories menu modal if open
    if (isCategoriesMenuModalOpen) {
      setCategoriesMenuModalOpen(false);
    }
    
    // Always focus search input (whether modal was open or not)
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  };

  const openProductDetail = (productId: string) => {
    setPreventClose(true); // Prevent dropdown from closing
    setSelectedProductId(productId);
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
    setSelectedProductId(null);
    setPreventClose(false); // Allow dropdown to close again
  };

  // Handle search query changes using the new product database
  useEffect(() => {
    if (query.trim()) {
      const results = searchProductsDatabase(query); // No limit - show all matching results
      setSearchResults(results);
      setIsDropdownOpen(results.length > 0 && isFocused);

      // Debug: Log search results and stats
      console.log(`🔍 Search "${query}" found ${results.length} results`);
      if (query.length > 2) {
        const stats = getProductStats();
        console.log(`📊 Product Database Stats:`, stats);
      }
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  }, [query, isFocused]);

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if modal is open or we're preventing close
      if (preventClose || isProductDetailOpen) return;

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        // Remove animation immediately when clicking outside
        const dropdown = document.querySelector('.absolute.top-full') as HTMLElement;
        if (dropdown) {
          dropdown.style.transition = 'none';
          dropdown.style.opacity = '0';
        }
        setIsDropdownOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [preventClose, isProductDetailOpen]);

  // Call callback when dropdown state changes - memoized to avoid re-renders
  useEffect(() => {
    onDropdownStateChange?.(isDropdownOpen);
  }, [isDropdownOpen, onDropdownStateChange]);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (searchResults.length > 0) {
      setIsDropdownOpen(true);
    }

    e.target.style.boxShadow = "none";
    e.target.style.backgroundColor = "rgba(45, 45, 52, 0.8)";
    // Apply the same placeholder color as disabled state
    e.target.classList.remove('placeholder:text-neutral-300');
    e.target.classList.add('placeholder:text-neutral-600');
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Restore original placeholder color when losing focus
    e.target.classList.remove('placeholder:text-neutral-600');
    e.target.classList.add('placeholder:text-neutral-300');

    // Don't close if modal is open or we're preventing close
    if (preventClose || isProductDetailOpen) {
      e.target.style.boxShadow = "none";
      e.target.style.backgroundColor = "rgba(45, 45, 52, 0.8)";
      return;
    }

    // In mobile menu, keep results open unless explicitly closed
    if (keepResultsOpen) {
      e.target.style.boxShadow = "none";
      e.target.style.backgroundColor = "rgba(45, 45, 52, 0.8)";
      return;
    }

    // Default behavior: Delay to allow clicking on dropdown items
    setTimeout(() => {
      if (!searchRef.current?.contains(document.activeElement)) {
        // Remove animation immediately when input loses focus
        const dropdown = document.querySelector('.absolute.top-full') as HTMLElement;
        if (dropdown) {
          dropdown.style.transition = 'none';
          dropdown.style.opacity = '0';
        }
        setIsFocused(false);
        setIsDropdownOpen(false);
      }
    }, 150);

    e.target.style.boxShadow = "none";
    e.target.style.backgroundColor = "rgba(45, 45, 52, 0.8)";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (product: any) => {
    // Get full product details
    const fullProduct = productDetails.find((p) => p.id === product.id);
    if (fullProduct) {
      // Check if we're on desktop
      if (!isMobile) {
        // Desktop: Use the global ProductDetailModalDesktop via context
        openProductDetailModal(fullProduct.id);
        // Close search dropdown
        setIsDropdownOpen(false);
        setIsFocused(false);
      } else {
        // Mobile: Use the ProductDetailOverlay
        openProductDetail(fullProduct.id);
        // Close search dropdown on mobile too
        setIsDropdownOpen(false);
        setIsFocused(false);
      }
    }
  };

  const clearSearch = () => {
    // Remove animation immediately when clearing search
    const dropdown = document.querySelector('.absolute.top-full') as HTMLElement;
    if (dropdown) {
      dropdown.style.transition = 'none';
      dropdown.style.opacity = '0';
    }
    setQuery("");
    setSearchResults([]);
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  const handleSearchIconClick = () => {
    // Mobile: Close the keyboard
    // Desktop: Do nothing
    if (isMobile && inputRef.current) {
      inputRef.current.blur(); // Close the keyboard on mobile
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mobile: Close the keyboard
    // Desktop: Do nothing
    if (isMobile && inputRef.current) {
      inputRef.current.blur(); // Close the keyboard on mobile
    }
    // Desktop: No action (do nothing)
  };

  return (
    <div ref={searchRef} className="relative">
      <Form
        action="#"
        onSubmit={handleFormSubmit}
        className="relative w-full md:w-[30vw] max-w-[500px] md:max-w-[600px]"
      >
        <input
          ref={inputRef}
          key={searchParams?.get("q")}
          type="text"
          name="q"
          placeholder="Search for Products..."
          autoComplete="off"
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="go"
          data-ms-editor="false"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={disabled}
          className={`text-md w-full rounded-lg px-4 py-2 md:py-1 pr-20 md:text-sm focus:outline-none focus:ring-0 ${
            disabled 
              ? 'text-neutral-500 placeholder:text-neutral-600 cursor-not-allowed' 
              : 'text-white placeholder:text-neutral-300'
          }`}
          style={{
            backgroundColor: disabled ? "rgba(45, 45, 52, 0.4)" : "rgba(45, 45, 52, 0.8)",
            border: isMobile ? "1px solid rgba(255, 255, 255, 0)" : "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "none",
            minWidth: "280px",
            width: "100%",
            opacity: disabled ? 0.6 : 1,
          }}
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center gap-2">
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={handleSearchIconClick}
            className={`text-neutral-300 hover:text-white transition-colors ${
              query.trim() ? "cursor-pointer" : "cursor-default"
            }`}
            disabled={!query.trim()}
            title={query.trim() ? "Go to search page" : ""}
            style={isNavbarModal ? { marginRight: "20px" } : {}}
          >
            <MagnifyingGlassIcon className="h-4 text-neutral-300" />
          </button>
        </div>
      </Form>

      {/* Search Results Dropdown */}
      {isDropdownOpen && searchResults.length > 0 && (
        <div
          className={`absolute top-full left-0 right-0 rounded-lg z-[9999] overflow-hidden ${isMobile ? "mt-[19px]" : "mt-[7px]"}`}
          style={{
            backgroundColor: "rgb(45, 45, 52)",
            border: isMobile ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
            maxHeight: "70vh", // Maximum height for the dropdown
            minHeight: "auto",
            display: "flex",
            flexDirection: "column",
            boxShadow: isMobile ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "none",
          }}
        >
          <div
            className={`overflow-y-auto overflow-x-hidden flex-1 ${isMobile ? "py-4" : "py-2"}`}
            style={{
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {searchResults.map((product) => (
              <SearchResultItem
                key={product.id}
                product={product}
                isMobile={isMobile}
                onResultClick={handleResultClick}
              />
            ))}
          </div>

          {/* Dropdown Footer Bar */}
          <div
            className="flex items-stretch gap-0 border-t"
            style={{
              borderColor: "rgba(255, 255, 255, 0.1)",
              backgroundColor: "rgb(45, 45, 52)",
            }}
          >
            <button
              onClick={() => {
                // Remove animation immediately by setting display to none
                const dropdown = document.querySelector('.absolute.top-full') as HTMLElement;
                if (dropdown) {
                  dropdown.style.transition = 'none';
                  dropdown.style.opacity = '0';
                  setTimeout(() => {
                    setIsDropdownOpen(false);
                    setIsFocused(false);
                  }, 0);
                } else {
                  setIsDropdownOpen(false);
                  setIsFocused(false);
                }
              }}
              className="flex-1 px-4 py-2.5 text-white font-medium uppercase text-sm rounded-l transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              CLOSE
            </button>
            {/* Divider Line - Full Height */}
            <div
              style={{
                width: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            />
            <button
              onClick={handleSearchIconClick}
              className="flex-1 px-4 py-2.5 text-white font-medium uppercase text-sm rounded-r transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              SHOW ALL
            </button>
          </div>
        </div>
      )}

      {/* Product Detail Overlay - Mobile */}
      {selectedProductId && (
        <ProductDetailOverlay
          isOpen={isProductDetailOpen}
          productId={selectedProductId}
          onCloseAction={closeProductDetail}
        />
      )}

      {/* Categories Page Touch Overlay - iOS keyboard fix */}
      {showCategoriesOverlay && (
        <div
          onClick={handleCategoriesOverlayTap}
          style={{
            position: "fixed",
            left: "13px",
            top: `${64 - scrollY}px`, // Moves up with scroll
            width: "44px",
            height: "44px",
            zIndex: 99999,
            cursor: "pointer",
            backgroundColor: "transparent",
          }}
        />
      )}
    </div>
  );
}

export function SearchSkeleton({ isNavbarModal = false }: { isNavbarModal?: boolean }) {
  return (
    <form
      className="relative w-full"
      style={{ maxWidth: "500px", width: "100%" }}
    >
      <input
        placeholder="Search for Products..."
        className="w-full rounded-lg px-4 py-1 text-sm text-white placeholder:text-neutral-300 focus:outline-none focus:ring-0"
        style={{
          backgroundColor: "rgba(45, 45, 52, 0.8)",
          border: "none",
          boxShadow:
            "inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.05)",
          minWidth: "380px",
          width: "100%",
        }}
      />
      <div 
        className="absolute right-0 top-0 mr-3 flex h-full items-center"
        style={isNavbarModal ? { marginRight: "20px" } : {}}
      >
        <MagnifyingGlassIcon className="h-4 text-neutral-300" />
      </div>
    </form>
  );
}
