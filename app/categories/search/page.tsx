"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
    Suspense,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import { createPortal } from "react-dom";
import { useSimpleCart } from "../../../components/cart/simple-cart-context";
import ProductCard from "../../../components/product/product-card";
import { SearchProductModal } from "../../../components/search/search-product-modal";
import {
    productDetails,
    type ProductDetail,
} from "../../../lib/product-details-database";
import { type Product } from "../../../lib/products-database";
import { searchProductsDatabase } from "../../../lib/search-products";
import SearchSidebar from "./SearchSidebar";

// Toast notification component - matching categories page
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

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center text-gray-900">
          Loading...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}

function SearchContent() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastFadeOut, setToastFadeOut] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(
    null,
  );
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem } = useSimpleCart();
  const inputRef = useRef<HTMLInputElement>(null);

  // Hydration safety effect
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Brand management - handle brand from URL parameters
  useEffect(() => {
    if (!isHydrated) return;

    const brandParam = searchParams?.get("brand");

    // Set brand class on document element based on URL parameter
    if (brandParam === "astera") {
      document.documentElement.classList.add("astera-brand-active");
    } else {
      document.documentElement.classList.remove("astera-brand-active");
    }
  }, [searchParams, isHydrated]);

  // Set search query from URL parameters
  useEffect(() => {
    if (!isHydrated) return;

    const queryParam = searchParams?.get("q");
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [searchParams, isHydrated]);

  // Set dynamic page title
  useEffect(() => {
    document.title = searchQuery
      ? `HEROCHEM - Search: ${searchQuery}`
      : "HEROCHEM - SEARCH";
  }, [searchQuery]);

  // Cleanup effect for brand class when component unmounts
  useEffect(() => {
    return () => {
      // Note: We don't remove the brand class on unmount as other pages should manage their own brand state
      // This prevents conflicts when navigating between pages
    };
  }, []);

  // Memoized filtered products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    return searchProductsDatabase(searchQuery);
  }, [searchQuery]);

  // Determine dominant brand from search results for search bar styling
  const dominantBrand = useMemo(() => {
    if (filteredProducts.length === 0) return "deus"; // Default to deus

    const brandCounts = filteredProducts.reduce(
      (acc, product) => {
        acc[product.brand] = (acc[product.brand] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    // Return the brand with more products, or 'deus' if tied
    return (brandCounts.astera || 0) > (brandCounts.deus || 0)
      ? "astera"
      : "deus";
  }, [filteredProducts]);

  // Handle search input changes
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      setSearchQuery(newQuery);

      // Update URL with search query
      const url = new URL(window.location.href);
      if (newQuery.trim()) {
        url.searchParams.set("q", newQuery);
      } else {
        url.searchParams.delete("q");
      }
      window.history.replaceState({}, "", url.toString());
    },
    [],
  );

  // Handle "BUY" button click
  const handleKaufenClick = useCallback(
    (e: React.MouseEvent, product: Product) => {
      e.stopPropagation();

      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });

      // Show toast message
      setShowToast(true);
      setToastFadeOut(false);

      setTimeout(() => {
        setToastFadeOut(true);
      }, 700);

      setTimeout(() => {
        setShowToast(false);
        setToastFadeOut(false);
      }, 1000);
    },
    [addItem],
  );

  // Handle "INFO" button click
  const handleDetailsClick = useCallback(
    (e: React.MouseEvent, product: Product) => {
      e.stopPropagation();

      const productDetail = productDetails.find(
        (detail) => detail.name === product.name,
      );
      if (productDetail) {
        setSelectedProduct(productDetail);
        setIsModalOpen(true);
      }
    },
    [],
  );

  // Modal handlers
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  // Handle clear search
  const clearSearch = useCallback(() => {
    setSearchQuery("");
    const url = new URL(window.location.href);
    url.searchParams.delete("q");
    window.history.replaceState({}, "", url.toString());
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div
        className="flex min-h-screen relative overflow-hidden hide-scrollbar bg-gradient-to-br from-gray-50 to-white"
        style={{ contain: "layout style" }}
      >
        {/* Content */}
        <div className="relative z-10 flex w-full">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block fixed left-0 top-0 h-full z-30">
            <SearchSidebar />
          </div>

          <main
            className="flex-1 px-4 md:px-8 pb-16 hide-scrollbar lg:ml-64"
            style={{
              fontFamily: "Inter, Arial, sans-serif",
              animation:
                "fadeInPage 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
              animationDelay: "0.2s",
              opacity: "0",
              paddingTop: "24px",
            }}
          >
            {/* Page Header */}
            <div className="relative mb-4">
              <h1
                className="text-gray-900 text-2xl font-bold text-center"
                style={{ fontFamily: "Calibri, Arial, sans-serif" }}
              >
                SEARCH
              </h1>
            </div>
            
            {/* Trennlinie - matching categories page design */}
            <div className="hidden md:block h-[2px] mb-6 brand-aware-divider rounded-full" />

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative w-full max-w-md mx-auto">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for Products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full rounded-lg px-4 py-2 pr-12 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-0 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.boxShadow = "none";
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.boxShadow = "none";
                  }}
                />

                {/* Clear button and search icon */}
                <div className="absolute right-0 top-0 mr-3 flex h-full items-center gap-2">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded hover:bg-gray-100"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                  <svg
                    className="h-4 w-4 text-gray-400 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Results */}
            {isHydrated && (
              <div className="mt-6">
                {searchQuery.trim() === "" ? (
                  <div className="text-center text-gray-500 py-12">
                    <svg
                      className="h-16 w-16 mx-auto mb-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <p className="text-lg">
                      Enter a search term to find products
                    </p>
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="text-center text-gray-500 py-12">
                    <svg
                      className="h-16 w-16 mx-auto mb-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 01-2.009 5.291m-2.82 2.82A8.962 8.962 0 0112 21a8.963 8.963 0 01-1.17-.071m-3.821-2.82A7.963 7.963 0 016 12a8 8 0 012.009-5.291m2.82-2.82A8.962 8.962 0 0112 3c.441 0 .875.039 1.291.109m0 17.792A8.962 8.962 0 0012 21z"
                      />
                    </svg>
                    <p className="text-lg">
                      No products found for &quot;{searchQuery}&quot;
                    </p>
                    <p className="text-sm mt-2">
                      Try different keywords or check your spelling
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Results count */}
                    <div className="text-center text-gray-600 mb-6">
                      <p>
                        Found {filteredProducts.length} product
                        {filteredProducts.length !== 1 ? "s" : ""} for &quot;
                        {searchQuery}&quot;
                      </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-4 mb-8">
                      {filteredProducts.map((product, index) => (
                        <ProductCard
                          key={`${product.id}-${index}`}
                          product={product}
                          onAddToCart={handleKaufenClick}
                          onDetailsClick={handleDetailsClick}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Toast Notification */}
      <SlideUpToast showToast={showToast} toastFadeOut={toastFadeOut} />

      {/* Product Detail Modal */}
      <SearchProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
