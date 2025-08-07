"use client";
import { useSearchParams } from 'next/navigation';
import { memo, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSimpleCart } from '../../components/cart/simple-cart-context';
import CategoriesSidebar from './CategoriesSidebar';
import { 
  products, 
  getFilteredProducts as getFilteredProductsFromDB, 
  getAvailableFilters,
  type CategoryLabel,
  type Brand,
  type Product 
} from '../../lib/products-database';

export const dynamic = 'force-dynamic';


// Verwende die externe Datenbankfunktion
const getFilteredProducts = (
  category: CategoryLabel,
  brand: Brand | null,
  filterType: string = '',
  sortBy: string = 'name'
): Product[] => {
  return getFilteredProductsFromDB(category, brand, filterType, sortBy);
};

// Image preloading utility für bessere Performance
const preloadImages = (products: Product[], count: number = 8) => {
  const imagesToPreload = products.slice(0, count);
  imagesToPreload.forEach(product => {
    const img = new Image();
    img.src = product.image;
  });
};

// Static styles constants for better performance
const STATIC_STYLES = {
  card: {
    width: '160pt',
    margin: '4px'
  },
  imageContainer: {
    height: '160pt'
  },
  staticImage: {
    transform: 'scale(1.4)'
  },
  gridContainer: { 
    contain: 'layout style paint' as const,
    willChange: 'transform' as const,
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as const
  },
  button: {
    contain: 'layout style paint' as const,
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as const
  }
};

// Static arrays for dropdown options
const FILTER_OPTIONS = ['Gain', 'Definition', 'Base', 'Allround'];
const SORTING_OPTIONS = ['Price (Low > High)', 'Price (High > Low)', 'Most Viewed', 'Recommend'];

// Memoized Produktkachel-Komponente für bessere Performance mit React.memo und shallowEqual
const ProductCard = memo(({ product, onAddToCart }: { product: Product; onAddToCart: (e: React.MouseEvent, product: Product) => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer für bessere Lazy Loading Performance
  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { 
          rootMargin: '50px',
          threshold: 0.1
        }
      );
      observer.observe(node);
    }
  }, []);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.classList.remove('hidden');
    }
    setImageLoaded(true); // Stop loading animation even on error
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Optimized hover handlers for fast cursor movements
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleDetailsClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    // Hier kann später die Details-Funktionalität implementiert werden
  }, []);

  // Pre-calculated CSS classes for better performance
  const imageClasses = useMemo(() => {
    const baseClasses = 'w-full h-full object-cover rounded transition-opacity duration-300';
    const opacityClass = imageLoaded && isVisible ? 'opacity-100' : 'opacity-0';
    return `${baseClasses} ${opacityClass}`;
  }, [imageLoaded, isVisible]);

  return (
    <div 
      className="bg-transparent p-1 rounded-md flex-shrink-0 flex flex-col mb-8" 
      style={STATIC_STYLES.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="w-full rounded mb-1 flex items-center justify-center relative p-2" 
        style={{
          ...STATIC_STYLES.imageContainer,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
          e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        }}
      >
        {/* Loading Animation */}
        {(!imageLoaded || !isVisible) && (
          <div 
            className="absolute inset-0 flex items-center justify-center rounded"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-[#e91111]"></div>
          </div>
        )}
        
        <img 
          ref={imgRef}
          src={isVisible ? product.image : undefined} 
          alt={product.name}
          className={`${imageClasses} ${isHovered ? 'blur-sm' : ''}`}
          style={{
            ...STATIC_STYLES.staticImage,
            transition: 'filter 150ms ease-out',
            willChange: isHovered ? 'filter' : 'auto'
          }}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        <span className="text-white text-xs hidden">Produktbild</span>
        
          {/* Hover Overlay mit Buttons - optimized for fast transitions */}
          <div 
            className={`absolute inset-2 flex flex-row items-center justify-center gap-2 bg-transparent rounded ${
              isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{
              transition: 'opacity 150ms ease-out, visibility 150ms ease-out',
              willChange: isHovered ? 'opacity' : 'auto',
              pointerEvents: isHovered ? 'auto' : 'none'
            }}
          >
            <button 
              className="px-3 py-2 bg-white bg-opacity-90 border border-[#e91111] text-black font-bold rounded cursor-pointer"
              style={{ 
                fontSize: '10px', 
                minWidth: '70px',
                transition: 'background-color 150ms ease-out, color 150ms ease-out'
              }}
              onClick={(e) => onAddToCart(e, product)}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = '#e91111';
                target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                target.style.color = 'black';
              }}
            >
              SHOP
            </button>
                        <button 
              className="px-3 py-2 bg-black text-white font-bold rounded cursor-pointer"
              style={{ 
                fontSize: '10px', 
                minWidth: '70px',
                transition: 'background-color 150ms ease-out'
              }}
              onClick={handleDetailsClick}
            >
              DETAILS
            </button>
          </div>
      </div>
      
      {/* Rote Trennlinie linksbündig mit Text */}
      <div className="mb-2 mt-1">
        <div className="w-full h-1 rounded-full bg-[#e91111]"></div>
      </div>
      
      <h3 className="text-white font-bold mb-0.5 line-clamp-1" style={{ fontSize: '12px', lineHeight: '14px' }}>{product.name}</h3>
      <div className="text-neutral-300 mb-0.5 overflow-hidden" style={{ fontSize: '9px', lineHeight: '11px', maxHeight: '22px' }}>
        {product.description.split(/,\s+/).slice(0, 2).map((item, index) => (
          <div key={index} className="truncate">{item}</div>
        ))}
      </div>
      <p className="text-white font-bold" style={{ fontSize: '10px', lineHeight: '12px' }}>€{product.price.toFixed(2)}</p>
      {product.filterType && (
        <div className="mt-0.5">
          <span className="bg-[#e91111] text-white px-0.5 rounded" style={{ fontSize: '12px', lineHeight: '16px' }}>{product.filterType}</span>
        </div>
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for better memoization
  return (
    prevProps.product.id === nextProps.product.id &&
    prevProps.product.name === nextProps.product.name &&
    prevProps.product.price === nextProps.product.price &&
    prevProps.product.image === nextProps.product.image
  );
});

ProductCard.displayName = 'ProductCard';

// Toast Komponente mit Slide-Animation von unten
const SlideUpToast = ({ showToast, toastFadeOut }: { showToast: boolean; toastFadeOut: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !showToast) return null;

  const toastElement = (
    <div 
      style={{
        position: 'fixed',
        bottom: toastFadeOut ? '-100px' : '20px',
        left: '50%',
        marginLeft: '-120px', // Halbe Breite der Toast für perfekte Zentrierung
        width: '240px',
        zIndex: 999999,
        pointerEvents: 'none',
        transition: 'bottom 0.3s ease-in-out, opacity 0.3s ease-in-out',
        opacity: toastFadeOut ? 0 : 1
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(64,64,74)',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          padding: '12px 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          width: '100%'
        }}
      >
        Added to Shopping Cart
      </div>
    </div>
  );

  return createPortal(toastElement, document.body);
};

const categoryContent: Record<CategoryLabel, string> = {
  'INJECTION': 'Injektion Produkte werden hier angezeigt.',
  'ORAL': 'Orale Produkte werden hier angezeigt.',
  'POST CYCLE': 'Post Cycle Produkte werden hier angezeigt.',
  'FAT BURN': 'Fat Burn Produkte werden hier angezeigt.',
  'SEXUAL WELLNESS': 'Sexual Wellness Produkte werden hier angezeigt.',
  'PEPTIDES & HGH': 'Peptides & HGH Produkte werden hier angezeigt.',
  'SARMS': 'SARMs Produkte werden hier angezeigt.',
  'AMINO ACIDS': 'Amino Acids Produkte werden hier angezeigt.',
  'ALL PRODUCTS': 'Alle Produkte werden hier angezeigt.'
};

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}

function CategoriesContent() {
  const [currentCategory, setCurrentCategory] = useState<CategoryLabel>('ALL PRODUCTS');
  const [selectedBrand, setSelectedBrand] = useState<'deus' | 'astera' | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [selectedSorting, setSelectedSorting] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Fixed products per page
  const [showToast, setShowToast] = useState(false);
  const [toastFadeOut, setToastFadeOut] = useState(false);
  const searchParams = useSearchParams();
  const { addItem } = useSimpleCart();
  
  // Memoized filtered products with deeper optimization
  const filteredProducts = useMemo(() => {
    const result = getFilteredProducts(currentCategory, selectedBrand, selectedFilter, selectedSorting || 'name');
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
      totalPages: pages
    };
  }, [filteredProducts, currentPage, productsPerPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory, selectedBrand, selectedFilter, selectedSorting]);

  // Optimized event handlers with RAF for better performance
  const handleBrandSelection = useCallback((brand: 'deus' | 'astera') => {
    // Prevent deselection if the same brand is already selected
    if (selectedBrand !== brand) {
      setSelectedBrand(brand);
    }
  }, [selectedBrand]);

  const handleFilterSelection = useCallback((filter: string) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
  }, []);

  const handleSortingSelection = useCallback((sorting: string) => {
    setSelectedSorting(sorting);
    setIsSortingOpen(false);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing page - use requestAnimationFrame to ensure state update happens first
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  const toggleFilterDropdown = useCallback(() => {
    setIsFilterOpen(prev => !prev);
    setIsSortingOpen(false);
  }, []);

  const toggleSortingDropdown = useCallback(() => {
    setIsSortingOpen(prev => !prev);
    setIsFilterOpen(false);
  }, []);

  const clearFilter = useCallback(() => setSelectedFilter(''), []);
  
  const clearSorting = useCallback(() => setSelectedSorting(''), []);

  const handleKaufenClick = useCallback((e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    
    // Einfach zum localStorage Cart hinzufügen
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    // Zeige Toast-Nachricht mit Fade-Out-Animation
    setShowToast(true);
    setToastFadeOut(false);
    
    // Nach 700ms Fade-Out starten
    setTimeout(() => {
      setToastFadeOut(true);
    }, 700);
    
    // Nach 1000ms komplett ausblenden
    setTimeout(() => {
      setShowToast(false);
      setToastFadeOut(false);
    }, 1000);
  }, [addItem]);
  
  // Handle URL parameter changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryParam in categoryContent) {
      setCurrentCategory(categoryParam as CategoryLabel);
    }
  }, [searchParams]);

  // Handle brand selection based on category changes and reset filter/sorting - optimized
  useEffect(() => {
    if (currentCategory !== 'ALL PRODUCTS') {
      setSelectedBrand('deus');
    } else {
      setSelectedBrand(null);
    }
    // Reset filter and sorting when changing categories
    setSelectedFilter('');
    setSelectedSorting('');
    setIsFilterOpen(false);
    setIsSortingOpen(false);
  }, [currentCategory]);

  // Close dropdowns when clicking outside - optimized
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('.dropdown-container')) {
      setIsFilterOpen(false);
      setIsSortingOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div className="flex min-h-screen relative overflow-hidden" style={{ contain: 'layout style' }}>
        {/* Animated Background from Homepage */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/pattern-hero.png')] bg-repeat opacity-20"></div>
          </div>

          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-red-500/20 rounded-full animate-pulse"
                style={{
                  left: `${(i * 5.26) % 100}%`,
                  top: `${(i * 7.89) % 100}%`,
                  animationDelay: `${(i * 0.15) % 3}s`,
                  animationDuration: `${3 + (i * 0.2) % 4}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content with relative positioning */}
        <div className="relative z-10 flex w-full">
          <CategoriesSidebar currentCategory={currentCategory} onSelectCategory={setCurrentCategory} />
          <main 
            className="flex-1 px-8 pb-16" 
            style={{ 
              fontFamily: 'Inter, Arial, sans-serif',
              animation: 'fadeInPage 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
              animationDelay: '0.2s',
              opacity: '0',
              paddingTop: '24px'
            }}
          >
        <h1 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>{currentCategory}</h1>
        <div 
          className="h-[2px] mb-6"
          style={{ 
            background: 'linear-gradient(90deg, rgba(233, 17, 17, 0.1) 0%, #e91111 50%, rgba(233, 17, 17, 0.1) 100%)',
            width: '100%'
          }}
        />
        
        {/* Für "ALL PRODUCTS" wird nur die Überschrift und Linie angezeigt */}
        {currentCategory === 'ALL PRODUCTS' && (
          <div className="mt-4">
            {/* Produktpalette Übersicht */}
            <div className="mb-8">
              {/* Kategorie Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* INJECTION Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('INJECTION')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/inject.png" 
                      alt="Injection" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">INJECTION</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    High-concentrated injection solutions for maximum efficiency
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'INJECTION').length} Products available
                  </div>
                </div>

                {/* ORAL Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('ORAL')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/oral.png" 
                      alt="Oral" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">ORAL</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    Tablets and capsules for easy application
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'ORAL').length} Products available
                  </div>
                </div>

                {/* POST CYCLE Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('POST CYCLE')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/post.png" 
                      alt="Post Cycle" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">POST CYCLE</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    Support for the recovery phase
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'POST CYCLE').length} Products available
                  </div>
                </div>

                {/* FAT BURN Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('FAT BURN')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/fatburn.png" 
                      alt="Fat Burn" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">FAT BURN</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    Effective fat burning and metabolism support
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'FAT BURN').length} Products available
                  </div>
                </div>

                {/* SEXUAL WELLNESS Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('SEXUAL WELLNESS')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/sexual.png" 
                      alt="Sexual Wellness" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">SEXUAL WELLNESS</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    Products for wellbeing and vitality
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'SEXUAL WELLNESS').length} Products available
                  </div>
                </div>

                {/* PEPTIDES & HGH Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('PEPTIDES & HGH')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/peptides.png" 
                      alt="Peptides & HGH" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">PEPTIDES & HGH</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    Advanced peptides for optimal recovery
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'PEPTIDES & HGH').length} Products available
                  </div>
                </div>

                {/* SARMS Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('SARMS')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/sarms.png" 
                      alt="SARMs" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">SARMS</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    Selective Androgen Receptor Modulators
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'SARMS').length} Products available
                  </div>
                </div>

                {/* AMINO ACIDS Kategorie */}
                <div 
                  className="rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setCurrentCategory('AMINO ACIDS')}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/amino.png" 
                      alt="Amino Acids" 
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <h3 className="text-white font-bold text-lg">AMINO ACIDS</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4 h-10 flex items-start">
                    Essential amino acids for muscle building
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {products.filter(p => p.category === 'AMINO ACIDS').length} Products available
                  </div>
                </div>
              </div>
            </div>

            {/* Zusätzliche Informationen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div 
                className="rounded-lg p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/deus/deus.png" 
                    alt="Deus" 
                    className="h-6 w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <h3 className="text-white font-bold">DEUS MEDICAL</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Premium quality from pharmaceutical manufacturing with highest quality standards. Learn more at <a href="https://deusmedical.com" target="_blank" rel="noopener noreferrer" className="text-[#e91111] hover:text-[#ff2222] hover:underline transition-colors">https://deusmedical.com</a>
                </p>
              </div>
              
              <div 
                className="rounded-lg p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/astera/astera.png" 
                    alt="Astera" 
                    className="h-6 w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <h3 className="text-white font-bold">ASTERA</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Bringing the future of healthcare and improve your quality of life. Learn more at <a href="https://asteralabs.org" target="_blank" rel="noopener noreferrer" className="text-[#e91111] hover:text-[#ff2222] hover:underline transition-colors">https://asteralabs.org</a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Container für andere Kategorien */}
        {currentCategory !== 'ALL PRODUCTS' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2" style={{ marginTop: '-12px' }}>
            {/* Container 1 - Deus */}
            <div 
              className="bg-transparent rounded-lg h-20 flex items-center justify-center cursor-pointer relative"
              onClick={() => handleBrandSelection('deus')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleBrandSelection('deus')}
            >
              <div className={`p-2 rounded-lg ${
                selectedBrand === 'deus' ? 'border-2 border-[#e91111]' : ''
              }`}>
                <img 
                  src="/deus/deus.png" 
                  alt="Deus" 
                  className="h-8 w-auto object-contain transition-transform hover:scale-105"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  loading="eager"
                />
              </div>
            </div>
            
            {/* Container 2 - Astera */}
            <div 
              className="bg-transparent rounded-lg h-20 flex items-center justify-center cursor-pointer relative"
              onClick={() => handleBrandSelection('astera')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleBrandSelection('astera')}
            >
              <div className={`p-2 rounded-lg ${
                selectedBrand === 'astera' ? 'border-2 border-[#e91111]' : ''
              }`}>
                <img 
                  src="/astera/astera.png" 
                  alt="Astera"
                  className="h-8 w-auto object-contain transition-transform hover:scale-105"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        )}

        {/* Produktkacheln für alle Kategorien (außer ALL PRODUCTS) mit ausgewählter Brand */}
        {currentCategory !== 'ALL PRODUCTS' && selectedBrand && (
          <div className="mt-1">
            {/* Filter und Sorting Buttons */}
            <div className="mb-6 ml-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Filter Button */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={toggleFilterDropdown}
                      className="flex items-center gap-1 text-white rounded-md px-1.5 py-1 text-xs transition-colors duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                        ...STATIC_STYLES.button
                      }}
                    >
                      <img 
                        src="/filter.png" 
                        alt="Filter" 
                        className="w-3 h-3 object-contain"
                        style={{ filter: 'brightness(0) invert(1)', transform: 'translateZ(0)' }}
                      />
                      <span>Filter</span>
                      <svg className={`w-3 h-3 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateZ(0)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Filter Dropdown */}
                    {isFilterOpen && (
                      <div 
                        className="absolute top-full left-0 w-48 rounded-md shadow-lg z-10" 
                        style={{ 
                          marginTop: '5pt',
                          background: 'linear-gradient(135deg, rgba(64,64,74,0.95) 0%, rgba(45,45,52,0.95) 100%)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                          contain: 'layout style paint',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <div className="py-1">
                          {FILTER_OPTIONS.map((filter) => (
                            <button
                              key={filter}
                              onClick={() => handleFilterSelection(filter)}
                              className={`block px-6 py-3 w-full text-white uppercase text-center ${
                                selectedFilter === filter 
                                  ? 'bg-gradient-to-r from-red-500/30 to-red-600/40 text-white shadow-lg' 
                                  : 'text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-600/30 hover:text-white hover:shadow-lg'
                              }`}
                              style={{ 
                                textDecoration: 'none', 
                                borderRadius: 0,
                                fontWeight: '500',
                                fontSize: '8.4px',
                                letterSpacing: '0.5px',
                                transition: 'background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
                                transform: 'translateZ(0)' 
                              }}
                            >
                              {filter}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sorting Button */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={toggleSortingDropdown}
                      className="flex items-center gap-1 text-white rounded-md px-1.5 py-1 text-xs transition-colors duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                        ...STATIC_STYLES.button
                      }}
                    >
                      <img 
                        src="/sorting.png" 
                        alt="Sorting" 
                        className="w-3 h-3 object-contain"
                        style={{ filter: 'brightness(0) invert(1)', transform: 'translateZ(0)' }}
                      />
                      <span>Sort By</span>
                      <svg className={`w-3 h-3 transition-transform ${isSortingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateZ(0)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Sorting Dropdown */}
                    {isSortingOpen && (
                      <div 
                        className="absolute top-full left-0 w-48 rounded-md shadow-lg z-10" 
                        style={{ 
                          marginTop: '5pt',
                          background: 'linear-gradient(135deg, rgba(64,64,74,0.95) 0%, rgba(45,45,52,0.95) 100%)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                          contain: 'layout style paint',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <div className="py-1">
                          {SORTING_OPTIONS.map((sorting) => (
                            <button
                              key={sorting}
                              onClick={() => handleSortingSelection(sorting)}
                              className={`block px-6 py-3 w-full text-white uppercase text-center ${
                                selectedSorting === sorting 
                                  ? 'bg-gradient-to-r from-red-500/30 to-red-600/40 text-white shadow-lg' 
                                  : 'text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-600/30 hover:text-white hover:shadow-lg'
                              }`}
                              style={{ 
                                textDecoration: 'none', 
                                borderRadius: 0,
                                fontWeight: '500',
                                fontSize: '8.4px',
                                letterSpacing: '0.5px',
                                transition: 'background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
                                transform: 'translateZ(0)' 
                              }}
                            >
                              {sorting}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Indicators Container */}
                <div className="flex items-center gap-4">
                  {/* Sorting Indicator - nur anzeigen wenn eine Sortierung ausgewählt ist */}
                  {selectedSorting && (
                    <div className="flex items-center gap-2 text-white text-sm">
                      <img 
                        src="/sorting.png" 
                        alt="Active Sorting" 
                        className="w-5 h-5 object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                      <span>{selectedSorting}</span>
                      <button
                        onClick={clearSorting}
                        className="relative flex h-7 w-7 items-center justify-center rounded-md border border-neutral-600 text-white transition-colors hover:bg-neutral-700 ml-1"
                      >
                        <span className="text-sm font-medium">×</span>
                      </button>
                    </div>
                  )}
                  
                  {/* Filter Indicator - nur anzeigen wenn ein Filter ausgewählt ist */}
                  {selectedFilter && (
                    <div className="flex items-center gap-2 text-white text-sm">
                      <img 
                        src="/filter.png" 
                        alt="Active Filter" 
                        className="w-5 h-5 object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                      <span>{selectedFilter}</span>
                      <button
                        onClick={clearFilter}
                        className="relative flex h-7 w-7 items-center justify-center rounded-md border border-neutral-600 text-white transition-colors hover:bg-neutral-700 ml-1"
                      >
                        <span className="text-sm font-medium">×</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Dynamisches Produktgrid - Performance optimiert mit Paginierung */}
            <div className="flex flex-wrap gap-4 mb-8 -m-1" style={STATIC_STYLES.gridContainer}>
              {/* Nur aktuelle Seite der Produktkacheln rendern */}
              {currentProducts.map((product, index) => (
                <ProductCard 
                  key={`${product.id}-${index}`} 
                  product={product} 
                  onAddToCart={handleKaufenClick}
                />
              ))}
              
              {/* Fallback wenn keine Produkte gefunden werden */}
              {filteredProducts.length === 0 && (
                <div className="col-span-full text-center text-gray-600 py-8 w-full">
                  <p>Keine Produkte für die aktuelle Auswahl gefunden.</p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center mt-8 mb-4">
                {/* Obere rote Trennlinie */}
                <div 
                  className="h-[2px] mb-2"
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(233, 17, 17, 0.1) 0%, #e91111 50%, rgba(233, 17, 17, 0.1) 100%)',
                    width: '100%'
                  }}
                />
                
                {/* Page Numbers */}
                <div className="flex justify-center items-center gap-2">
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-2 py-1 bg-transparent rounded-md transition-colors duration-200 font-bold cursor-pointer ${
                          currentPage === pageNumber
                            ? 'text-[#e91111]'
                            : 'text-gray-400'
                        }`}
                        style={{ fontSize: '14px', minWidth: '32px' }}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
                
                {/* Untere rote Trennlinie */}
                <div 
                  className="h-[2px] mt-2"
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(233, 17, 17, 0.1) 0%, #e91111 50%, rgba(233, 17, 17, 0.1) 100%)',
                    width: '100%'
                  }}
                />
              </div>
            )}
          </div>
        )}
      </main>
        </div>
      </div>

      {/* Toast mit CSS-Transition statt Animation für stabile Position */}
      <SlideUpToast showToast={showToast} toastFadeOut={toastFadeOut} />
    </>
  );
}
