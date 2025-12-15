"use client";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import {
  memo,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { createPortal } from "react-dom";
import { useSimpleCart } from "../../components/cart/simple-cart-context";
import CategoriesMenuModal from "../../components/categories/categories-menu-modal";
import CategoriesModal from "../../components/categories/categories-modal";
import FeaturedProductsSection from "../../components/categories/featured-products-section";
import { ProductDetailModalDesktop } from "../../components/categories/product-detail-modal-desktop";
import { ProductDetailOverlay } from "../../components/categories/product-detail-overlay";
import SearchModal from "../../components/categories/search-modal";
import ProductCard from "../../components/product/product-card";
import { SearchProductModal } from "../../components/search/search-product-modal";
import { useCategoriesState } from "../../contexts/categories-state-context";
import { useModal } from "../../contexts/modal-context";
import {
  productDetails,
  type ProductDetail,
} from "../../lib/product-details-database";
import {
  getAvailableFilters,
  getFilteredProducts as getFilteredProductsFromDB,
  products,
  type Brand,
  type CategoryLabel,
  type Product,
} from "../../lib/products-database";
// import CategoriesSidebar from "./CategoriesSidebar";
// Desktop sidebar ausgelagert in categories-desktop-sidebar.tsx

// Entferne force-dynamic damit Categories-Seite gecacht werden kann beim Navigieren
// export const dynamic = "force-dynamic";

// Verwende die externe Datenbankfunktion
const getFilteredProducts = (
  category: CategoryLabel,
  brand: Brand | null,
  filterType: string = "",
  sortBy: string = "name",
): Product[] => {
  return getFilteredProductsFromDB(category, brand, filterType, sortBy);
};

// Image preloading utility für bessere Performance
const preloadImages = (products: Product[], count: number = 8) => {
  const imagesToPreload = products.slice(0, count);
  imagesToPreload.forEach((product) => {
    const img = new Image();
    img.src = product.image;
  });
};

// Static styles constants for better performance
const STATIC_STYLES = {
  card: {
    width: "160pt",
    margin: "4px",
  },
  cardMobile: {
    width: "75pt", // Reduziert für zwei Spalten auf mobil
    marginLeft: "2px",
    marginRight: "2px",
    marginTop: "2px",
    marginBottom: "2px",
  },
  imageContainer: {
    height: "160pt",
  },
  imageContainerMobile: {
    height: "75pt", // Reduziert für mobile Ansicht
  },
  staticImage: {
    transform: "scale(2.0)", // Auch für Desktop reduziert für bessere Schärfe
  },
  staticImageMobile: {
    transform: "scale(1.8)", // Niedrigerer Wert für schärferes Rendering wie bei ASTERA
  },
  gridContainer: {
    contain: "layout style paint" as const,
    willChange: "transform" as const,
    transform: "translateZ(0)",
    backfaceVisibility: "hidden" as const,
  },
  button: {
    contain: "layout style paint" as const,
    transform: "translateZ(0)",
    backfaceVisibility: "hidden" as const,
  },
};

// Static arrays for dropdown options
const SORTING_OPTIONS = [
  { label: "RESET", value: "reset" },
  { label: "Name A-Z", value: "name" },
  { label: "Price (Low → High)", value: "price-low" },
  { label: "Price (High → Low)", value: "price-high" },
];

// ASTERA Loading Screen Component - Simple layer approach with fullscreen
const AsteraLoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
  // Handle fullscreen for mobile loading
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isVisible && isMobile) {
      // Enter fullscreen mode on mobile
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.log("Fullscreen failed:", err);
        });
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        (document.documentElement as any).webkitRequestFullscreen();
      }
    } else if (!isVisible && document.fullscreenElement) {
      // Exit fullscreen when loading is done
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.log("Exit fullscreen failed:", err);
        });
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Full screen black layer - simple and effective */}
      <div
        className="fixed inset-0 transition-opacity duration-300 opacity-100"
        style={{
          backgroundColor: "#000000",
          zIndex: 9998,
          // Ensure coverage in fullscreen mode
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* Loading content layer on top */}
      <div
        className="fixed inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 9999,
          // Ensure coverage in fullscreen mode
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="flex flex-col items-center gap-4 relative z-10">
          {/* Main spinner */}
          <div
            className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300"
            style={{
              borderTopColor: "#2d2d34",
            }}
          ></div>

          {/* Loading text */}
          <div className="text-white text-lg font-medium">Loading...</div>

          {/* Loading dots animation */}
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                backgroundColor: "white",
                animationDelay: "0.1s",
              }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                backgroundColor: "white",
                animationDelay: "0.2s",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

// DEUS Loading Screen Component - Simple layer approach with fullscreen
const DeusLoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
  // Handle fullscreen for mobile loading
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isVisible && isMobile) {
      // Enter fullscreen mode on mobile
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.log("Fullscreen failed:", err);
        });
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        (document.documentElement as any).webkitRequestFullscreen();
      }
    } else if (!isVisible && document.fullscreenElement) {
      // Exit fullscreen when loading is done
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.log("Exit fullscreen failed:", err);
        });
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Full screen black layer - simple and effective */}
      <div
        className="fixed inset-0 transition-opacity duration-300 opacity-100"
        style={{
          backgroundColor: "#000000",
          zIndex: 9998,
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* Loading content layer on top */}
      <div
        className="fixed inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 9999,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="flex flex-col items-center gap-4 relative z-10">
          {/* Main spinner */}
          <div
            className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300"
            style={{
              borderTopColor: "#2d2d34",
            }}
          ></div>

          {/* Loading text */}
          <div className="text-white text-lg font-medium">Loading...</div>

          {/* Loading dots animation */}
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: "white", animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: "white", animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

// Toast Komponente mit Slide-Animation von unten
const SlideUpToast = ({
  showToast,
  toastFadeOut,
}: {
  showToast: boolean;
  toastFadeOut: boolean;
}) => {
  if (!showToast) return null;

  const toastElement = (
    <div
      style={{
        position: "fixed",
        bottom: toastFadeOut ? "-100px" : "20px",
        left: "50%",
        marginLeft: "-120px", // Halbe Breite der Toast für perfekte Zentrierung
        width: "240px",
        zIndex: 9999, // Reduced z-index for Safari compatibility
        pointerEvents: "none",
        transition: "bottom 1.0s ease-in-out, opacity 1.0s ease-in-out", // Langsamere Animation für sanftere Bewegung
        opacity: toastFadeOut ? 0 : 1,
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(64,64,74)",
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
    </div>
  );

  return createPortal(toastElement, document.body);
};

const categoryContent: Record<CategoryLabel, string> = {
  INJECTION: "Injektion Produkte werden hier angezeigt.",
  ORAL: "Orale Produkte werden hier angezeigt.",
  "POST CYCLE": "Post Cycle Produkte werden hier angezeigt.",
  "FAT BURN": "Fat Burn Produkte werden hier angezeigt.",
  "SEXUAL WELLNESS": "Sexual Wellness Produkte werden hier angezeigt.",
  "PEPTIDES & HGH": "Peptides & HGH Produkte werden hier angezeigt.",
  SARMS: "SARMs Produkte werden hier angezeigt.",
  "AMINO ACIDS": "Amino Acids Produkte werden hier angezeigt.",
  "ALL PRODUCTS": "Alle Produkte werden hier angezeigt.",
};

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoriesContentMemo />
    </Suspense>
  );
}

// Memoized component to prevent unnecessary re-renders
const CategoriesContentMemo = memo(function CategoriesContent() {
  // Page State - wird beim Navigieren weg/zurück beibehalten mit SessionStorage
  const [currentCategory, setCurrentCategory] =
    useState<CategoryLabel>("ALL PRODUCTS");
  const [selectedBrand, setSelectedBrand] = useState<"deus" | "astera" | null>(
    null,
  );
  const [isHydrated, setIsHydrated] = useState(false);
  const [isParamsLoaded, setIsParamsLoaded] = useState(false); // New state to prevent flash
  const searchParams = useSearchParams();
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [isBrandFilterDropdownOpen, setIsBrandFilterDropdownOpen] = useState(false);
  const [isCategoryFilterDropdownOpen, setIsCategoryFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("No Filter");
  const [selectedSorting, setSelectedSorting] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Fixed products per page
  const [showToast, setShowToast] = useState(false);
  const [toastFadeOut, setToastFadeOut] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(
    null,
  );
  const [isAsteraLoading, setIsAsteraLoading] = useState(false);
  const [isDeusLoading, setIsDeusLoading] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null); // For single hover on mobile
  const router = useRouter();
  const { addItem } = useSimpleCart();
  const { isCategoriesModalOpen, setCategoriesModalOpen, isCategoriesMenuModalOpen, setCategoriesMenuModalOpen, isSearchModalOpen, setSearchModalOpen, resetAllModals } = useModal();
  const { saveState } = useCategoriesState();
  const mainRef = useRef<HTMLElement>(null); // Ref für Main-Container
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref für Scroll-Timeout
  const isInitializedRef = useRef(false); // Track if component has been initialized
  
  // Memory leak prevention refs
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]); // Track all setTimeout IDs for cleanup
  const intervalsRef = useRef<NodeJS.Timeout[]>([]); // Track all setInterval IDs for cleanup
  const isMountedRef = useRef(true); // Track if component is still mounted

  // Clear all pending timeouts - call this before soft-routing to prevent memory buildup
  const clearAllPendingTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current = [];
  }, []);

  // Safe setTimeout wrapper that tracks timeouts and respects mount state
  const safeSetTimeout = useCallback((callback: () => void, delay: number) => {
    // Limit the number of tracked timeouts to prevent memory buildup
    if (timeoutsRef.current.length > 50) {
      // Clear old timeouts that have likely already fired
      const oldTimeouts = timeoutsRef.current.splice(0, 25);
      oldTimeouts.forEach((t) => clearTimeout(t));
    }
    
    const timeout = setTimeout(() => {
      if (isMountedRef.current) {
        callback();
      }
      // Remove from tracking array after execution
      const index = timeoutsRef.current.indexOf(timeout);
      if (index > -1) {
        timeoutsRef.current.splice(index, 1);
      }
    }, delay);
    timeoutsRef.current.push(timeout);
    return timeout;
  }, []);

  // Safe setInterval wrapper
  const safeSetInterval = useCallback((callback: () => void, delay: number) => {
    const interval = setInterval(() => {
      if (isMountedRef.current) {
        callback();
      }
    }, delay);
    intervalsRef.current.push(interval);
    return interval;
  }, []);

  // Aggressive image preloading
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload brand images immediately
    preloadImage("/deus/deus.png");
    preloadImage("/astera/astera.png");
  }, []);

  // Hydration safety effect - runs first
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      // Mark component as unmounted to prevent state updates
      isMountedRef.current = false;
      
      // Clear scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Clear ALL tracked timeouts to prevent memory leaks
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current = [];
      
      // Clear ALL tracked intervals to prevent memory leaks
      intervalsRef.current.forEach((interval) => clearInterval(interval));
      intervalsRef.current = [];
      
      console.debug("[Categories] Component unmounted, cleaned up all timeouts/intervals");
    };
  }, []);

  // Page Freezing Effect - Speichert State beim Verlassen und stellt ihn wieder her
  // WICHTIG: Wir verwenden KEINE beforeunload Events, da diese BFCache brechen!
  useEffect(() => {
    // Nutze stattdessen sessionStorage als einfacher Fallback
    // Die Komponente wird mit BFCache sowieso nicht neu gemountet
    const savePageStateToStorage = () => {
      if (typeof window !== "undefined" && mainRef.current && isMountedRef.current) {
        // Speichere State persistent aber non-blocking
        try {
          sessionStorage.setItem(
            "categoriesPageState",
            JSON.stringify({
              currentCategory,
              selectedBrand,
              selectedFilter,
              selectedSorting,
              currentPage,
              scrollPosition: mainRef.current.scrollTop || 0,
              timestamp: Date.now(),
            })
          );
        } catch (error) {
          // Ignore storage quota exceeded
        }
      }
    };

    // Speichere State periodically (every 2 seconds) statt on beforeunload
    // Use safeSetInterval for proper cleanup on unmount
    const interval = safeSetInterval(savePageStateToStorage, 2000);

    return () => clearInterval(interval);
  }, [currentCategory, selectedBrand, selectedFilter, selectedSorting, currentPage, safeSetInterval]);

  // Restore Page State when coming back - aber nur if it wasn't BFCache
  useEffect(() => {
    if (!isInitializedRef.current && typeof window !== "undefined") {
      const savedState = sessionStorage.getItem("categoriesPageState");
      if (savedState) {
        try {
          const state = JSON.parse(savedState);
          const now = Date.now();
          
          // Nur restore wenn der State weniger als 10 Sekunden alt ist
          // Das deutet darauf hin, dass wir gerade zurück gekommen sind
          if (now - state.timestamp < 10000) {
            // Stelle den State wieder her
            setCurrentCategory(state.currentCategory);
            setSelectedBrand(state.selectedBrand);
            setSelectedFilter(state.selectedFilter);
            setSelectedSorting(state.selectedSorting);
            setCurrentPage(state.currentPage);
            isInitializedRef.current = true;
            
            // Restore scroll position
            if (state.scrollPosition > 0) {
              const restoreScroll = () => {
                const mainElement = document.querySelector('main') as HTMLElement;
                if (mainElement) {
                  mainElement.scrollTop = state.scrollPosition;
                }
              };
              // Versuche sofort
              restoreScroll();
              // Und nochmal nach einem Frame
              requestAnimationFrame(restoreScroll);
              // Und nochmal nach 100ms
              setTimeout(restoreScroll, 100);
            }
            
            console.debug("[Categories] Restored page state from sessionStorage");
          }
          
          // Lösche den gecachten State nach Restaurierung
          sessionStorage.removeItem("categoriesPageState");
        } catch (error) {
          console.error("Failed to restore page state:", error);
        }
      }
    }
  }, []);

  // Ensure page is scrolled to top on initial load and navigation
  useEffect(() => {
    // Immediate scroll to top without animation
    const scrollToTop = () => {
      const iosScrollContainer = document.querySelector(
        ".fixed.inset-0.pt-\\[41px\\].overflow-y-auto",
      ) as HTMLElement;
      if (iosScrollContainer) {
        iosScrollContainer.scrollTop = 0;
      } else {
        const mainContainer = document.querySelector("main") as HTMLElement;
        if (mainContainer) {
          mainContainer.scrollTop = 0;
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    // Scroll immediately
    scrollToTop();
    
    // Also scroll after a brief delay to catch any delayed rendering
    requestAnimationFrame(scrollToTop);
  }, [currentCategory, isHydrated]);

  // Set dynamic page title based on current category
  useEffect(() => {
    const categoryTitle =
      currentCategory === "ALL PRODUCTS" ? "CATEGORIES" : currentCategory;
    document.title = `HEROCHEM - ${categoryTitle}`;
  }, [currentCategory]);

  // Track if user has manually selected a brand to prevent automatic resets
  const hasManuallySelectedBrand = useRef(false);

  // Function to update category with URL navigation - SIMPLIFIED without transition
  const updateCategoryWithNavigation = useCallback(
    (category: CategoryLabel) => {
      // Clear pending timeouts before navigation to prevent memory buildup
      clearAllPendingTimeouts();
      
      // Reset all modals before navigation to prevent blur overlay issues
      resetAllModals();
      
      // Update category state
      setCurrentCategory(category);

      // Build new URL
      let newUrl: string;
      if (category === "ALL PRODUCTS") {
        newUrl = "/categories";
      } else {
        newUrl = `/categories?category=${encodeURIComponent(category)}`;
      }

      // Preserve brand=astera if currently in URL
      if (typeof window !== "undefined") {
        const currentUrlParams = new URLSearchParams(window.location.search);
        const currentBrand = currentUrlParams.get("brand");

        if (currentBrand === "astera" && category !== "ALL PRODUCTS") {
          newUrl += `&brand=astera`;
        }
      }

      // Navigate
      router.push(newUrl);

      // Scroll to top helper function - targets the MobileScrollContainer
      const scrollToTop = () => {
        const scrollContainer = 
          document.querySelector('[data-scroll-container]')?.parentElement ||
          document.querySelector('.fixed.inset-0.overflow-y-auto') as HTMLElement ||
          document.querySelector(".fixed.inset-0.pt-\\[41px\\].overflow-y-auto") as HTMLElement;
        
        if (scrollContainer) {
          scrollContainer.scrollTop = 0;
        } else {
          const mainContainer = document.querySelector("main") as HTMLElement;
          if (mainContainer) {
            mainContainer.scrollTop = 0;
          }
          window.scrollTo(0, 0);
        }
      };

      // Scroll to top
      scrollToTop();
      requestAnimationFrame(scrollToTop);
      safeSetTimeout(scrollToTop, 50);
    },
    [router, resetAllModals, safeSetTimeout, clearAllPendingTimeouts],
  );

  // Dynamische Filter basierend auf der aktuellen Kategorie
  const availableFilters = useMemo(() => {
    const baseFilters = getAvailableFilters(currentCategory);
    // Füge "No Filter" als erste Option hinzu
    return ["No Filter", ...baseFilters];
  }, [currentCategory]);

  // Get current sorting label
  const currentSortingLabel = useMemo(() => {
    const sortingOption = SORTING_OPTIONS.find(
      (option) => option.value === selectedSorting,
    );
    return sortingOption ? sortingOption.label : "Sort By";
  }, [selectedSorting]);

  // Memoized filtered products with deeper optimization
  const filteredProducts = useMemo(() => {
    // Wenn "No Filter" ausgewählt ist, zeige alle Produkte ohne Filter
    const filterToUse = selectedFilter === "No Filter" ? "" : selectedFilter;
    const result = getFilteredProducts(
      currentCategory,
      selectedBrand,
      filterToUse,
      selectedSorting || "name",
    );
    return result;
  }, [currentCategory, selectedBrand, selectedFilter, selectedSorting]);

  // Preload images for visible products
  useEffect(() => {
    if (filteredProducts.length > 0) {
      preloadImages(filteredProducts, 16); // Preload first 16 images
    }
  }, [filteredProducts]);

  // Paginierte Produkte für bessere Performance
  const { currentProducts, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const products = filteredProducts.slice(startIndex, endIndex);
    const pages = Math.ceil(filteredProducts.length / productsPerPage);

    return {
      currentProducts: products,
      totalPages: pages,
    };
  }, [filteredProducts, currentPage, productsPerPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory, selectedBrand, selectedFilter, selectedSorting]);

  // Reset filter when category changes
  useEffect(() => {
    setSelectedFilter("No Filter");
  }, [currentCategory]);

  // Optimized event handlers with RAF for better performance
  const handleBrandSelection = useCallback(
    (brand: "deus" | "astera" | null) => {
      // Prevent deselection if the same brand is already selected
      if (selectedBrand !== brand) {
        // Mark that user has manually selected a brand
        hasManuallySelectedBrand.current = true;

        // Set brand immediately to prevent race conditions
        setSelectedBrand(brand);

        // URL Management: Add/Remove brand parameter based on selection
        const url = new URL(window.location.href);

        if (brand === "astera") {
          // Add brand=astera parameter
          url.searchParams.set("brand", "astera");
          // Add astera-brand-active class to document element
          document.documentElement.classList.add("astera-brand-active");
        } else {
          // Remove brand parameter for Deus or null (default behavior)
          url.searchParams.delete("brand");
          // Remove astera-brand-active class
          document.documentElement.classList.remove("astera-brand-active");
        }

        // Update URL without page reload
        window.history.replaceState({}, "", url.toString());

        // Scroll to top after brand selection
        safeSetTimeout(() => {
          // Check for iOS scroll container first, then main container
          const iosScrollContainer = document.querySelector(
            ".fixed.inset-0.pt-\\[41px\\].overflow-y-auto",
          ) as HTMLElement;
          if (iosScrollContainer) {
            // iOS: scroll the iOS container
            iosScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            // Fallback: try to find main container or scroll window
            const mainContainer = document.querySelector("main") as HTMLElement;
            if (mainContainer) {
              mainContainer.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
        }, 100);

        if (brand === "astera") {
          // Show loading screen for ASTERA selection
          setIsAsteraLoading(true);

          // Hide loading screen after animation
          safeSetTimeout(() => {
            setIsAsteraLoading(false);
          }, 1000);
        } else if (brand === "deus") {
          // Show loading screen for DEUS selection
          setIsDeusLoading(true);

          // Hide loading screen after animation
          safeSetTimeout(() => {
            setIsDeusLoading(false);
          }, 1000);
        }
      }
    },
    [selectedBrand, safeSetTimeout],
  );

  // Listen for brand changes from mobile menu
  useEffect(() => {
    const handleBrandChange = (event: CustomEvent) => {
      const { brand } = event.detail;
      if (brand === "deus") {
        handleBrandSelection("deus");
      } else if (brand === "astera") {
        handleBrandSelection("astera");
      }
    };

    window.addEventListener("brandChanged", handleBrandChange as EventListener);

    return () => {
      window.removeEventListener(
        "brandChanged",
        handleBrandChange as EventListener,
      );
    };
  }, [handleBrandSelection]);

  const handleFilterSelection = useCallback((filter: string) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
  }, []);

  const handleSortingSelection = useCallback((sortValue: string) => {
    if (sortValue === "reset") {
      setSelectedSorting("");
    } else {
      setSelectedSorting(sortValue);
    }
    setIsSortingOpen(false);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);

    // Clear any existing scroll timeout to prevent conflicts
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Debounced scroll to top of container when changing page
    scrollTimeoutRef.current = setTimeout(() => {
      // Check for mobile scroll container first (via data attribute), then main container
      const mobileScrollContainer = document.querySelector(
        "[data-mobile-scroll-container]",
      ) as HTMLElement;
      if (mobileScrollContainer) {
        // Mobile: scroll the mobile container
        mobileScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      } else if (mainRef.current) {
        // Non-iOS: scroll the main container
        mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
      } else if (typeof window !== "undefined") {
        // Fallback: scroll window
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // 100ms delay to prevent event conflicts
  }, []);

  const toggleFilterDropdown = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
    setIsSortingOpen(false);
    setIsBrandFilterDropdownOpen(false);
    setIsCategoryFilterDropdownOpen(false);
  }, []);

  const toggleSortingDropdown = useCallback(() => {
    setIsSortingOpen((prev) => !prev);
    setIsFilterOpen(false);
    setIsBrandFilterDropdownOpen(false);
    setIsCategoryFilterDropdownOpen(false);
  }, []);

  const clearFilter = useCallback(() => setSelectedFilter("No Filter"), []);

  const clearSorting = useCallback(() => setSelectedSorting(""), []);

  const handleKaufenClick = useCallback(
    (e: React.MouseEvent, product: Product) => {
      e.stopPropagation();

      // Einfach zum localStorage Cart hinzufügen
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });

      // Zeige Toast-Nachricht mit Fade-Out-Animation
      setShowToast(true);
      setToastFadeOut(false);

      // Nach 1500ms Fade-Out starten (längere Sichtbarkeit für bessere UX)
      safeSetTimeout(() => {
        setToastFadeOut(true);
      }, 1500);

      // Nach 2500ms komplett ausblenden (1000ms Animation duration)
      safeSetTimeout(() => {
        setShowToast(false);
        setToastFadeOut(false);
      }, 2500);
    },
    [addItem, safeSetTimeout],
  );

  // Handle hover change for mobile - ensures only one product is hovered at a time
  const handleProductHoverChange = useCallback((productId: string | null) => {
    setHoveredProductId(productId);
  }, []);

  // Modal handlers - unterscheidet zwischen Mobile und Desktop
  const handleDetailsClick = useCallback(
    (e: React.MouseEvent, product: Product) => {
      e.stopPropagation();

      // Find product details from database
      const productDetail = productDetails.find(
        (detail) => detail.name === product.name,
      );
      if (productDetail) {
        // Check if we're on mobile or desktop
        const isMobile = window.innerWidth < 768; // md breakpoint
        
        if (isMobile) {
          // Mobile: Use the full-screen overlay (original behavior)
          setSelectedProductId(productDetail.id);
          setIsProductDetailOpen(true);
        } else {
          // Desktop: Use the new modal with categories page format
          setSelectedProductId(productDetail.id);
          setIsDesktopModalOpen(true);
        }
      }
    },
    [],
  );

  const closeProductDetail = useCallback(() => {
    setIsProductDetailOpen(false);
    setSelectedProductId(null);
  }, []);

  const closeDesktopModal = useCallback(() => {
    setIsDesktopModalOpen(false);
    setSelectedProductId(null);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  // Handle URL parameter changes - fully hydration safe
  useEffect(() => {
    // Only proceed after hydration is complete
    if (!isHydrated) return;

    const categoryParam = searchParams?.get("category");
    const brandParam = searchParams?.get("brand");

    // Set category from URL if valid, or default to ALL PRODUCTS if no category param
    if (categoryParam && categoryParam in categoryContent) {
      setCurrentCategory(categoryParam as CategoryLabel);
    } else {
      // No category parameter means we're on ALL PRODUCTS
      setCurrentCategory("ALL PRODUCTS");
    }

    // Set brand from URL if valid - only after hydration
    if (brandParam === "astera") {
      setSelectedBrand("astera");
      hasManuallySelectedBrand.current = true;
      document.documentElement.classList.add("astera-brand-active");
    } else if (brandParam === "deus") {
      setSelectedBrand("deus");
      hasManuallySelectedBrand.current = true;
      document.documentElement.classList.remove("astera-brand-active");
    } else {
      // No brand parameter in URL - default to deus for consistency
      setSelectedBrand("deus");
      document.documentElement.classList.remove("astera-brand-active");
    }

    // Mark parameters as loaded after processing
    setIsParamsLoaded(true);
  }, [searchParams, isHydrated, currentCategory]);

  // Handle brand selection based on category changes - fully hydration safe
  useEffect(() => {
    // Only proceed after hydration is complete
    if (!isHydrated) return;

    // Only auto-set brand for new category visits if no manual selection has been made
    if (hasManuallySelectedBrand.current) return;

    // For ALL PRODUCTS category, keep the brand selection as null unless explicitly set by URL
    if (currentCategory !== "ALL PRODUCTS") {
      setSelectedBrand("deus");
      document.documentElement.classList.remove("astera-brand-active");
    }
    // Note: For ALL PRODUCTS, we let the URL parameter handling set the brand

    // Reset filter and sorting when changing categories
    setSelectedFilter("No Filter");
    setSelectedSorting("");
    setIsFilterOpen(false);
    setIsSortingOpen(false);
  }, [currentCategory, isHydrated]);

  // Close dropdowns when clicking outside - optimized
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest(".dropdown-container")) {
      setIsFilterOpen(false);
      setIsSortingOpen(false);
      setIsBrandDropdownOpen(false);
      setIsBrandFilterDropdownOpen(false);
      setIsCategoryFilterDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Cleanup scroll timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop Top Container - ganz außerhalb aller Container */}
      <div
        className="hidden md:block fixed top-0 left-0 right-0"
        style={{
          height: "48px",
          zIndex: 1000,
          backgroundColor: "#ffffff",
        }}
      ></div>
      {/* ASTERA Loading Screen */}
      <AsteraLoadingScreen isVisible={isAsteraLoading} />
      {/* DEUS Loading Screen */}
      <DeusLoadingScreen isVisible={isDeusLoading} />
      {/* Prevent rendering until params are loaded to avoid flash */}
      {!isParamsLoaded ? (
        <div
          className="flex min-h-screen items-center justify-center bg-white"
          style={{ marginTop: "-80px" }}
        >
          <div className="text-gray-900 text-lg">Loading...</div>
        </div>
      ) : (
        <div
          className={`flex min-h-screen relative hide-scrollbar bg-white ${isCategoriesModalOpen ? "overflow-hidden" : "overflow-hidden"}`}
          style={{ contain: "layout style" }}
        >
          {/* Content with relative positioning */}
          <div className="relative z-10 flex w-full">
            {/* Desktop Sidebar ausgelagert in categories-desktop-sidebar.tsx */}

            <main
              ref={mainRef}
              className="flex-1 pb-16 hide-scrollbar relative"
              style={{
                fontFamily: "Inter, Arial, sans-serif",
                paddingTop: "24px",
                overflowY: isCategoriesModalOpen || isSearchModalOpen ? "hidden" : "auto",
              }}
            >
              <style>{`@media (min-width: 768px) { main { padding-top: 70px !important; } }`}</style>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative mb-4">
                {/* Back Arrow - nur bei spezifischen Kategorien anzeigen */}
                {currentCategory !== "ALL PRODUCTS" && (
                  <>
                    {/* Desktop Version - Soft Routing */}
                    <button
                      onClick={() => {
                        setCurrentCategory("ALL PRODUCTS");
                        const brandParam = searchParams.get("brand");
                        if (brandParam) {
                          window.history.pushState({}, "", `/categories?brand=${brandParam}`);
                        } else {
                          window.history.pushState({}, "", "/categories");
                        }
                      }}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-900 hover:text-red-600 cursor-pointer hidden md:block"
                      aria-label="Back to All Products"
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
                    {/* Mobile Version - Regular href routing */}
                    <a
                      href={searchParams.get("brand") ? `/categories?brand=${searchParams.get("brand")}` : "/categories"}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-900 hover:text-red-600 cursor-pointer md:hidden"
                      aria-label="Back to All Products"
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
                    </a>
                  </>
                )}
                <h1
                  className="text-gray-900 text-2xl font-bold text-center"
                  style={{ fontFamily: "Calibri, Arial, sans-serif" }}
                >
                  {currentCategory === "ALL PRODUCTS" ? "CATEGORIES" : currentCategory}
                </h1>
                {/* Search Button - nur auf Mobile und nur auf ALL PRODUCTS - LEFT side */}
                {currentCategory === "ALL PRODUCTS" && (
                  <button
                    onClick={() => {
                      // Directly focus the navbar search input - this is a real user touch so keyboard will open on iOS
                      const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
                      if (searchInput) {
                        searchInput.focus();
                      }
                    }}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-900 hover:text-gray-700 transition-colors duration-200 md:hidden"
                    aria-label="Focus navbar search"
                  >
                    <MagnifyingGlassIcon
                      className="w-5 h-5"
                      style={{
                        width: "20px",
                        height: "20px",
                        minWidth: "20px",
                        minHeight: "20px",
                      }}
                    />
                  </button>
                )}
                {/* Categories Menu Modal Button - nur auf Mobile - RIGHT side */}
                <button
                  onClick={() => setCategoriesMenuModalOpen(true)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-900 hover:text-gray-700 transition-colors duration-200 md:hidden"
                  aria-label="Open categories menu modal"
                >
                  <Bars3Icon
                    className="w-6 h-6"
                    style={{
                      width: "24px",
                      height: "24px",
                      minWidth: "24px",
                      minHeight: "24px",
                    }}
                  />
                </button>
              </div>
              {/* Trennlinie - nur für Desktop anzeigen */}
              <div className="hidden md:block h-[1px] mb-6 brand-aware-divider rounded-full" />

              {/* Für "ALL PRODUCTS" wird nur die Überschrift und Linie angezeigt */}
{currentCategory === "ALL PRODUCTS" && (
              <div className="-mt-[15px] md:mt-0">
                  {/* Produktpalette Übersicht */}
                  <div className="mb-8">
                    {/* Kategorie Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 ml-1">
                      {/* INJECTION Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-4 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() =>
                          updateCategoryWithNavigation("INJECTION")
                        }
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-3">
                          <img
                            src="/inject.png"
                            alt="Injection"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            INJECTION
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          High-concentrated solutions for maximum efficiency
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {
                            products.filter((p) => p.category === "INJECTION")
                              .length
                          }{" "}
                          Products
                        </div>
                      </div>

                      {/* ORAL Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-4 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() => updateCategoryWithNavigation("ORAL")}
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-3">
                          <img
                            src="/oral.png"
                            alt="Oral"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            ORAL
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          Tablets and capsules for easy application
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {products.filter((p) => p.category === "ORAL").length}{" "}
                          Products
                        </div>
                      </div>

                      {/* POST CYCLE Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-4 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() =>
                          updateCategoryWithNavigation("POST CYCLE")
                        }
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-3">
                          <img
                            src="/post.png"
                            alt="Post Cycle"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            POST CYCLE
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          Support for the recovery phase
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {
                            products.filter((p) => p.category === "POST CYCLE")
                              .length
                          }{" "}
                          Products
                        </div>
                      </div>

                      {/* FAT BURN Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-4 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() => updateCategoryWithNavigation("FAT BURN")}
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-3">
                          <img
                            src="/fatburn.png"
                            alt="Fat Burn"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            FAT BURN
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          Effective fat burning and metabolism support
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {
                            products.filter((p) => p.category === "FAT BURN")
                              .length
                          }{" "}
                          Products
                        </div>
                      </div>

                      {/* SEXUAL WELLNESS Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-4 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() =>
                          updateCategoryWithNavigation("SEXUAL WELLNESS")
                        }
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-3">
                          <img
                            src="/sexual.png"
                            alt="Sexual Wellness"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            SEXUAL WELLNESS
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          Products for wellbeing and vitality
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {
                            products.filter(
                              (p) => p.category === "SEXUAL WELLNESS",
                            ).length
                          }{" "}
                          Products
                        </div>
                      </div>

                      {/* PEPTIDES & HGH Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-4 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() =>
                          updateCategoryWithNavigation("PEPTIDES & HGH")
                        }
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-3">
                          <img
                            src="/peptides.png"
                            alt="Peptides & HGH"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            PEPTIDES & HGH
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          Advanced peptides for optimal recovery
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {
                            products.filter(
                              (p) => p.category === "PEPTIDES & HGH",
                            ).length
                          }{" "}
                          Products
                        </div>
                      </div>

                      {/* SARMS Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-4 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() => updateCategoryWithNavigation("SARMS")}
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-3">
                          <img
                            src="/sarms.png"
                            alt="SARMs"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            SARMS
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          Selective Androgen Receptor Modulators
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {
                            products.filter((p) => p.category === "SARMS")
                              .length
                          }{" "}
                          Products
                        </div>
                      </div>

                      {/* AMINO ACIDS Kategorie */}
                      <div
                        className="rounded-xl p-3 md:p-6 bg-white flex flex-col h-full md:shadow-none transition-all duration-300"
                        onClick={() =>
                          updateCategoryWithNavigation("AMINO ACIDS")
                        }
                        style={{ cursor: "pointer", border: "1px solid #e5e7eb" }}
                      >
                        <div className="flex items-center justify-center mb-2 md:mb-4">
                          <img
                            src="/amino.png"
                            alt="Amino Acids"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            style={{ filter: "brightness(0)" }}
                          />
                          <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                            AMINO ACIDS
                          </h3>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                          Essential amino acids for muscle building
                        </p>
                        <div className="text-xs text-white text-center mt-2 bg-red-600 rounded-lg px-3 py-px w-fit mx-auto">
                          {
                            products.filter((p) => p.category === "AMINO ACIDS")
                              .length
                          }{" "}
                          Products
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Products Section */}
                  <FeaturedProductsSection className="-mt-[10px] mb-12" />

                  {/* Trennlinie zwischen Kategorien und Informationen */}
                  <div className="h-[1px] mb-6 brand-aware-divider rounded-full" />

                  {/* Zusätzliche Informationen */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-stretch">
                    <div className="rounded-xl p-3 md:p-6 bg-white flex flex-col h-full min-h-[120px] md:min-h-[140px] transition-all duration-300">
                      <div className="flex items-center justify-center mb-2 md:mb-4">
                        <img
                          src="/deus/deus.png"
                          alt="Deus"
                          className="w-12 h-12 md:w-16 md:h-16 object-contain"
                          style={{ filter: "brightness(0.2) contrast(1.2)" }}
                        />
                        <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                          DEUS MEDICAL
                        </h3>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                        Premium quality from pharmaceutical manufacturing with
                        highest quality standards. Learn more at{" "}
                        <a
                          href="https://deusmedical.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e91111] hover:text-[#ff2222] hover:underline transition-colors"
                        >
                          https://deusmedical.com
                        </a>
                      </p>
                    </div>

                    <div className="rounded-xl p-3 md:p-6 bg-white flex flex-col h-full min-h-[120px] md:min-h-[140px] transition-all duration-300">
                      <div className="flex items-center justify-center mb-2 md:mb-4">
                        <img
                          src="/astera/astera.png"
                          alt="Astera"
                          className="w-12 h-12 md:w-16 md:h-16 object-contain"
                          style={{ filter: "brightness(0.2) contrast(1.2)" }}
                        />
                        <h3 className="text-gray-900 font-bold text-xs md:text-lg ml-2">
                          ASTERA
                        </h3>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm text-center leading-tight flex-grow">
                        Bringing the future of healthcare and improve your
                        quality of life. Learn more at{" "}
                        <a
                          href="https://asteralabs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e91111] hover:text-[#ff2222] hover:underline transition-colors"
                        >
                          https://asteralabs.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Container für andere Kategorien */}
              {currentCategory !== "ALL PRODUCTS" && (
                <>


                  {/* Desktop Version - original Design - ENTFERNT */}

                </>
              )}

              {/* Produktkacheln für alle Kategorien (außer ALL PRODUCTS) mit ausgewählter Brand */}
              {currentCategory !== "ALL PRODUCTS" &&
                selectedBrand !== undefined &&
                isHydrated && (
                  <div className="mt-1">
                    {/* Filter und Sorting Buttons */}
                    <div className="mb-6 ml-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Filter Button - nur anzeigen wenn Filter verfügbar sind */}
                          {availableFilters.length > 0 && (
                            <div className="relative dropdown-container">
                              <button
                                onClick={toggleFilterDropdown}
                                className="flex items-center gap-1 rounded-md px-1.5 py-1 text-xs transition-colors duration-300"
                                style={{
                                  color: "#2d2d34",
                                  background: "rgba(255, 255, 255, 0.9)",
                                  backdropFilter: "blur(16px)",
                                  border: "1px solid #2d2d34",
                                  ...STATIC_STYLES.button,
                                }}
                              >
                                <svg
                                  className="w-3 h-3 object-contain"
                                  fill="none"
                                  stroke="#2d2d34"
                                  viewBox="0 0 24 24"
                                  style={{
                                    transform: "translateZ(0)",
                                  }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                  />
                                </svg>
                                <span>Filter</span>
                                <svg
                                  className={`w-3 h-3 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                                  fill="none"
                                  stroke="#2d2d34"
                                  viewBox="0 0 24 24"
                                  style={{ transform: "translateZ(0)" }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>

                              {/* Filter Dropdown */}
                              <div
                                className="absolute top-full left-0 w-48 rounded-md z-10"
                                style={{
                                  marginTop: "5pt",
                                  background: "rgba(249, 250, 251, 1)",
                                  backdropFilter: "blur(20px)",
                                  contain: "layout style paint",
                                  backfaceVisibility: "hidden",
                                  opacity: isFilterOpen ? 1 : 0,
                                  transform: isFilterOpen ? "translateY(0)" : "translateY(-10px)",
                                  pointerEvents: isFilterOpen ? "auto" : "none",
                                  willChange: "transform, opacity",
                                  transition: isFilterOpen 
                                    ? "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
                                    : "opacity 0.1s ease, transform 0.3s ease 0.1s, box-shadow 0.1s ease, border-color 0.1s ease",
                                  boxShadow: isFilterOpen ? "0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 20px 40px rgba(0,0,0,0)",
                                  borderWidth: "1px",
                                  borderStyle: "solid",
                                  borderColor: isFilterOpen ? "#2d2d34" : "rgba(45, 45, 52, 0)",
                                }}
                              >
                                {isFilterOpen && (
                                  <div className="py-3">
                                    {availableFilters.map((filter) => (
                                      <button
                                        key={filter}
                                        onClick={() =>
                                          filter &&
                                          handleFilterSelection(filter)
                                        }
                                        className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                        style={{
                                          textDecoration: "none",
                                          borderRadius: 0,
                                          fontWeight: "500",
                                          fontSize: "8.4px",
                                          letterSpacing: "0.5px",
                                          transition:
                                            "color 0.15s ease",
                                          transform: "translateZ(0)",
                                        }}
                                      >
                                        {filter}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Sorting Button */}
                          <div className="relative dropdown-container">
                            <button
                              onClick={toggleSortingDropdown}
                              className="flex items-center gap-1 text-gray-900 rounded-md px-1.5 py-1 text-xs transition-colors duration-300"
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid #2d2d34",
                                ...STATIC_STYLES.button,
                              }}
                            >
                              <svg
                                className="w-3 h-3 object-contain"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{
                                  filter: "brightness(0)",
                                  transform: "translateZ(0)",
                                }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16V4m0 0L3 8m4-4l4 4m6-4v12m0 0l4-4m-4 4l-4-4"
                                />
                              </svg>
                              <span>{currentSortingLabel}</span>
                              <svg
                                className={`w-3 h-3 transition-transform ${isSortingOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ transform: "translateZ(0)" }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {/* Sorting Dropdown */}
                            <div
                              className="absolute top-full left-0 w-48 rounded-md z-10"
                              style={{
                                marginTop: "5pt",
                                background: "rgba(249, 250, 251, 1)",
                                backdropFilter: "blur(20px)",
                                contain: "layout style paint",
                                backfaceVisibility: "hidden",
                                opacity: isSortingOpen ? 1 : 0,
                                transform: isSortingOpen ? "translateY(0)" : "translateY(-10px)",
                                pointerEvents: isSortingOpen ? "auto" : "none",
                                willChange: "transform, opacity",
                                transition: isSortingOpen 
                                  ? "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
                                  : "opacity 0.1s ease, transform 0.3s ease 0.1s, box-shadow 0.1s ease, border-color 0.1s ease",
                                boxShadow: isSortingOpen ? "0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 20px 40px rgba(0,0,0,0)",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: isSortingOpen ? "#2d2d34" : "rgba(45, 45, 52, 0)",
                              }}
                            >
                              {isSortingOpen && (
                                <div className="py-3">
                                  {SORTING_OPTIONS.map((sorting) => (
                                    <button
                                      key={sorting.value}
                                      onClick={() =>
                                        handleSortingSelection(sorting.value)
                                      }
                                      className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                      style={{
                                        textDecoration: "none",
                                        borderRadius: 0,
                                        fontWeight: "500",
                                        fontSize: "8.4px",
                                        letterSpacing: "0.5px",
                                        transition:
                                          "color 0.15s ease",
                                        transform: "translateZ(0)",
                                      }}
                                    >
                                      {sorting.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Brand Filter Button */}
                          <div className="relative dropdown-container hidden md:block">
                            <button
                              onClick={() => {
                                setIsBrandFilterDropdownOpen(!isBrandFilterDropdownOpen);
                                setIsFilterOpen(false);
                                setIsSortingOpen(false);
                                setIsCategoryFilterDropdownOpen(false);
                              }}
                              className="flex items-center gap-1 text-gray-900 rounded-md px-1.5 py-1 text-xs transition-colors duration-300"
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(16px)",
                                boxShadow:
                                  "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
                                border: "1px solid #2d2d34",
                                ...STATIC_STYLES.button,
                              }}
                            >
                              <svg
                                className="w-3 h-3 object-contain"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{
                                  filter: "brightness(0)",
                                  transform: "translateZ(0)",
                                }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                              </svg>
                              <span>Brand</span>
                              <svg
                                className={`w-3 h-3 transition-transform ${isBrandFilterDropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ transform: "translateZ(0)" }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {/* Brand Dropdown */}
                            <div
                              className="absolute top-full left-0 w-48 rounded-md z-10"
                              style={{
                                marginTop: "5pt",
                                background: "rgba(249, 250, 251, 1)",
                                backdropFilter: "blur(20px)",
                                contain: "layout style paint",
                                backfaceVisibility: "hidden",
                                opacity: isBrandFilterDropdownOpen ? 1 : 0,
                                transform: isBrandFilterDropdownOpen ? "translateY(0)" : "translateY(-10px)",
                                pointerEvents: isBrandFilterDropdownOpen ? "auto" : "none",
                                willChange: "transform, opacity",
                                transition: isBrandFilterDropdownOpen 
                                  ? "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
                                  : "opacity 0.1s ease, transform 0.3s ease 0.1s, box-shadow 0.1s ease, border-color 0.1s ease",
                                boxShadow: isBrandFilterDropdownOpen ? "0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 20px 40px rgba(0,0,0,0)",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: isBrandFilterDropdownOpen ? "#2d2d34" : "rgba(45, 45, 52, 0)",
                              }}
                            >
                              {isBrandFilterDropdownOpen && (
                                <div className="py-3">
                                  <button
                                    onClick={() => {
                                      handleBrandSelection(null);
                                      setIsBrandFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition:
                                        "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    ALL BRANDS
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleBrandSelection("deus");
                                      setIsBrandFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition:
                                        "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    DEUS MEDICAL
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleBrandSelection("astera");
                                      setIsBrandFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition:
                                        "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    ASTERA LABS
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Category Filter Button */}
                          <div className="relative dropdown-container hidden md:block">
                            <button
                              onClick={() => {
                                setIsCategoryFilterDropdownOpen(!isCategoryFilterDropdownOpen);
                                setIsFilterOpen(false);
                                setIsSortingOpen(false);
                                setIsBrandFilterDropdownOpen(false);
                              }}
                              className="flex items-center gap-1 text-gray-900 rounded-md px-1.5 py-1 text-xs transition-colors duration-300"
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(16px)",
                                boxShadow:
                                  "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
                                border: "1px solid #2d2d34",
                                ...STATIC_STYLES.button,
                              }}
                            >
                              <svg
                                className="w-3 h-3 object-contain"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{
                                  filter: "brightness(0)",
                                  transform: "translateZ(0)",
                                }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 4H5a2 2 0 00-2 2v14a2 2 0 002 2h4m0-21v21m0-21h10a2 2 0 012 2v14a2 2 0 01-2 2h-10"
                                />
                              </svg>
                              <span>Categories</span>
                              <svg
                                className={`w-3 h-3 transition-transform ${isCategoryFilterDropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ transform: "translateZ(0)" }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {/* Category Dropdown */}
                            <div
                              className="absolute top-full left-0 w-48 rounded-md z-10"
                              style={{
                                marginTop: "5pt",
                                background: "rgba(249, 250, 251, 1)",
                                backdropFilter: "blur(20px)",
                                contain: "layout style paint",
                                backfaceVisibility: "hidden",
                                opacity: isCategoryFilterDropdownOpen ? 1 : 0,
                                transform: isCategoryFilterDropdownOpen ? "translateY(0)" : "translateY(-10px)",
                                pointerEvents: isCategoryFilterDropdownOpen ? "auto" : "none",
                                willChange: "transform, opacity",
                                transition: isCategoryFilterDropdownOpen 
                                  ? "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
                                  : "opacity 0.1s ease, transform 0.3s ease 0.1s, box-shadow 0.1s ease, border-color 0.1s ease",
                                boxShadow: isCategoryFilterDropdownOpen ? "0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 20px 40px rgba(0,0,0,0)",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: isCategoryFilterDropdownOpen ? "#2d2d34" : "rgba(45, 45, 52, 0)",
                              }}
                            >
                              {isCategoryFilterDropdownOpen && (
                                <div className="py-3">
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("INJECTION");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    INJECTION
                                  </button>
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("ORAL");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    ORAL
                                  </button>
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("POST CYCLE");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    POST CYCLE
                                  </button>
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("FAT BURN");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    FAT BURN
                                  </button>
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("SEXUAL WELLNESS");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    SEXUAL WELLNESS
                                  </button>
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("PEPTIDES & HGH");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    PEPTIDES & HGH
                                  </button>
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("SARMS");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    SARMS
                                  </button>
                                  <button
                                    onClick={() => {
                                      updateCategoryWithNavigation("AMINO ACIDS");
                                      setIsCategoryFilterDropdownOpen(false);
                                    }}
                                    className="block px-6 py-3 w-full uppercase text-center text-gray-900 brand-aware-filter-button-hover"
                                    style={{
                                      textDecoration: "none",
                                      borderRadius: 0,
                                      fontWeight: "500",
                                      fontSize: "8.4px",
                                      letterSpacing: "0.5px",
                                      transition: "color 0.15s ease",
                                      transform: "translateZ(0)",
                                    }}
                                  >
                                    AMINO ACIDS
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Indicators Container */}
                        <div className="flex items-center gap-4">
                          {/* Filter Indicator - anzeigen wenn ein Filter ausgewählt ist */}
                          {selectedFilter && (
                            <div className="flex items-center gap-2 text-sm" style={{ color: "#2d2d34" }}>
                              <img
                                src="/filter.png"
                                alt="Active Filter"
                                className="w-5 h-5 object-contain"
                                style={{
                                  filter: "brightness(0) saturate(0%)",
                                  opacity: 1,
                                }}
                              />
                              <span style={{ color: "#2d2d34" }}>
                                {selectedFilter}
                              </span>
                              <button
                                onClick={clearFilter}
                                className="relative flex h-5 w-5 items-center justify-center rounded-md ml-1"
                                style={{ color: "#2d2d34", border: "1px solid #2d2d34" }}
                              >
                                <span className="text-xs font-medium" style={{ color: "#2d2d34" }}>
                                  ×
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dynamisches Produktgrid - Performance optimiert mit Paginierung */}
                    <div
                      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-6 mb-8 ml-1"
                      style={STATIC_STYLES.gridContainer}
                    >
                      {/* Nur aktuelle Seite der Produktkacheln rendern */}
                      {currentProducts.map((product, index) => (
                        <ProductCard
                          key={`${product.id}-${index}`}
                          product={product}
                          onAddToCart={handleKaufenClick}
                          onDetailsClick={handleDetailsClick}
                          selectedBrand={selectedBrand}
                          hoveredProductId={hoveredProductId}
                          onHoverChange={handleProductHoverChange}
                        />
                      ))}

                      {/* Fallback wenn keine Produkte gefunden werden */}
                      {filteredProducts.length === 0 && (
                        <div className="col-span-full text-center text-gray-600 py-8 w-full">
                          <p>No products for this categorie found.</p>
                        </div>
                      )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="flex flex-col items-center mt-8 mb-0">
                        {/* Page Numbers */}
                        <div className="flex justify-center items-center gap-2 md:gap-1">
                          {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            const isActive = currentPage === pageNumber;
                            return (
                              <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`
                                  transition-all duration-200 font-bold
                                  md:px-2 md:py-1 md:bg-transparent md:rounded-md md:hover:bg-gray-100
                                  px-2 py-1 bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] hover:shadow-[0_0_12px_rgba(0,0,0,0.15)]
                                  ${isActive 
                                    ? "md:brand-aware-pagination-text text-gray-900" 
                                    : "md:text-gray-400 text-gray-600"
                                  }
                                `}
                                style={{ 
                                  fontSize: "12px", 
                                  minWidth: "32px",
                                  boxSizing: "border-box",
                                  border: isActive ? "1px solid rgb(45, 45, 52)" : "none"
                                }}
                              >
                                {pageNumber}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      )}{" "}
      {/* Closing tag for isParamsLoaded condition */}
      {/* Toast mit CSS-Transition statt Animation für stabile Position */}
      <SlideUpToast showToast={showToast} toastFadeOut={toastFadeOut} />
      {/* Search Product Modal - Same as used in search results */}
      <SearchProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      {/* Categories Modal */}
      <CategoriesModal
        isOpen={isCategoriesModalOpen}
        onClose={() => setCategoriesModalOpen(false)}
        currentBrand={selectedBrand}
      />
      {/* Categories Menu Modal - for categories page header button */}
      <CategoriesMenuModal
        isOpen={isCategoriesMenuModalOpen}
        onClose={() => setCategoriesMenuModalOpen(false)}
        currentBrand={selectedBrand}
      />
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onCloseAction={() => setSearchModalOpen(false)}
      />
      {/* Product Detail Overlay - shows instead of navigating (Mobile) */}
      {selectedProductId && (
        <ProductDetailOverlay
          isOpen={isProductDetailOpen}
          productId={selectedProductId}
          onCloseAction={closeProductDetail}
        />
      )}
      {/* Desktop Modal - Categories Page Format */}
      {selectedProductId && (
        <ProductDetailModalDesktop
          isOpen={isDesktopModalOpen}
          productId={selectedProductId}
          onCloseAction={closeDesktopModal}
        />
      )}
    </>
  );
});
