"use client";
import { ChevronDownIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useAuth } from "components/auth/auth-context";
import { useAuthModal } from "components/auth/auth-modal-context";
import { useSimpleCart } from "components/cart/simple-cart-context";
import SimpleCartModal from "components/cart/simple-cart-modal";
import LogoSquare from "components/logo-square";
import { products, type Brand, type CategoryLabel } from "lib/products-database";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useModal } from "../../../contexts/modal-context";
import { ProductDetailModalDesktop } from "../../categories/product-detail-modal-desktop";
import MobileMenu from "./mobile-menu";
import NavbarSearchModal from "./navbar-search-modal";
import Search, { SearchSkeleton } from "./search";

export function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [bundlesDropdownOpen, setBundlesDropdownOpen] = useState(false);
  const [verifyDropdownOpen, setVerifyDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { openModal } = useAuthModal();
  const { user, signOut, isHydrated } = useAuth();
  const { totalItems: cartTotalItems, isHydrated: cartIsHydrated } = useSimpleCart();
  const { 
    isProductsModalOpen, 
    setProductsModalOpen,
    isGMPModalOpen,
    setGMPModalOpen,
    isDeliveryModalOpen,
    setDeliveryModalOpen,
    isCommunityModalOpen,
    setCommunityModalOpen,
    isLabReportsModalOpen,
    setLabReportsModalOpen,
    isFAQModalOpen,
    setFAQModalOpen,
    isContactModalOpen,
    setContactModalOpen,
    isWelcomeModalOpen,
    isAuthModalOpen,
    isProductDetailModalOpen,
    productDetailModalId,
    openProductDetailModal,
    closeProductDetailModal
  } = useModal();

  // Disable body scroll when products dropdown is open
  useEffect(() => {
    if (productsDropdownOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      // Auch mobile scroll container blocken - mit korrektem Selector für pt-[88px]
      const scrollContainer = document.querySelector(".fixed.inset-0.pt-\\[88px\\].overflow-y-auto") as HTMLElement;
      if (scrollContainer) {
        scrollContainer.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      // Mobile scroll container wieder freigeben
      const scrollContainer = document.querySelector(".fixed.inset-0.pt-\\[88px\\].overflow-y-auto") as HTMLElement;
      if (scrollContainer) {
        scrollContainer.style.overflow = "auto";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      const scrollContainer = document.querySelector(".fixed.inset-0.pt-\\[88px\\].overflow-y-auto") as HTMLElement;
      if (scrollContainer) {
        scrollContainer.style.overflow = "auto";
      }
    };
  }, [productsDropdownOpen]);

  // Close modals and dropdowns on route change
  useEffect(() => {
    // Close product detail modal
    closeProductDetailModal();
    // Close all dropdowns
    setDropdownOpen(false);
    setProductsDropdownOpen(false);
    setBundlesDropdownOpen(false);
    setVerifyDropdownOpen(false);
    setLanguageDropdownOpen(false);
    setActiveDropdown(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  let closeTimeout: NodeJS.Timeout | null = null;
  let languageCloseTimeout: NodeJS.Timeout | null = null;
  let productsCloseTimeout: NodeJS.Timeout | null = null;
  let bundlesCloseTimeout: NodeJS.Timeout | null = null;
  let verifyCloseTimeout: NodeJS.Timeout | null = null;

  // Check if ANY navbar modal is open (these blur the navbar)
  // All extracted modals should blur the navbar since they render at root level
  const isAnyNavbarModalOpen = 
    isProductsModalOpen || 
    isGMPModalOpen || 
    isDeliveryModalOpen || 
    isCommunityModalOpen || 
    isLabReportsModalOpen ||
    isFAQModalOpen || 
    isContactModalOpen ||
    isWelcomeModalOpen ||
    isAuthModalOpen;

  // Check if we're on the account page
  const isAccountPage = pathname?.startsWith("/account");

  // Check if we're on the categories page (only there should brand colors be applied)
  const isCategoriesPage = pathname?.startsWith("/categories");

  const handleDropdownEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    // Schließe alle anderen Dropdowns sofort ohne Animation
    if (activeDropdown !== "shop") {
      if (activeDropdown === "products") {
        if (productsCloseTimeout) clearTimeout(productsCloseTimeout);
        setProductsDropdownOpen(false);
      }
      if (activeDropdown === "bundles") {
        if (bundlesCloseTimeout) clearTimeout(bundlesCloseTimeout);
        setBundlesDropdownOpen(false);
      }
      if (activeDropdown === "verify") {
        if (verifyCloseTimeout) clearTimeout(verifyCloseTimeout);
        setVerifyDropdownOpen(false);
      }
      if (activeDropdown === "language") {
        if (languageCloseTimeout) clearTimeout(languageCloseTimeout);
        setLanguageDropdownOpen(false);
      }
    }
    setActiveDropdown("shop");
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeout = setTimeout(() => {
      setDropdownOpen(false);
      setActiveDropdown(null);
    }, 200);
  };

  const handleLanguageDropdownEnter = () => {
    if (languageCloseTimeout) {
      clearTimeout(languageCloseTimeout);
      languageCloseTimeout = null;
    }
    // Schließe alle anderen Dropdowns sofort ohne Animation
    if (activeDropdown !== "language") {
      if (activeDropdown === "shop") {
        if (closeTimeout) clearTimeout(closeTimeout);
        setDropdownOpen(false);
      }
      if (activeDropdown === "products") {
        if (productsCloseTimeout) clearTimeout(productsCloseTimeout);
        setProductsDropdownOpen(false);
      }
      if (activeDropdown === "bundles") {
        if (bundlesCloseTimeout) clearTimeout(bundlesCloseTimeout);
        setBundlesDropdownOpen(false);
      }
      if (activeDropdown === "verify") {
        if (verifyCloseTimeout) clearTimeout(verifyCloseTimeout);
        setVerifyDropdownOpen(false);
      }
    }
    setActiveDropdown("language");
    setLanguageDropdownOpen(true);
  };

  const handleLanguageDropdownLeave = () => {
    languageCloseTimeout = setTimeout(() => {
      setLanguageDropdownOpen(false);
      setActiveDropdown(null);
    }, 200);
  };

  const handleProductsDropdownEnter = () => {
    if (productsCloseTimeout) {
      clearTimeout(productsCloseTimeout);
      productsCloseTimeout = null;
    }
    // Schließe alle anderen Dropdowns sofort ohne Animation
    if (activeDropdown !== "products") {
      if (activeDropdown === "shop") {
        if (closeTimeout) clearTimeout(closeTimeout);
        setDropdownOpen(false);
      }
      if (activeDropdown === "bundles") {
        if (bundlesCloseTimeout) clearTimeout(bundlesCloseTimeout);
        setBundlesDropdownOpen(false);
      }
      if (activeDropdown === "verify") {
        if (verifyCloseTimeout) clearTimeout(verifyCloseTimeout);
        setVerifyDropdownOpen(false);
      }
      if (activeDropdown === "language") {
        if (languageCloseTimeout) clearTimeout(languageCloseTimeout);
        setLanguageDropdownOpen(false);
      }
    }
    setActiveDropdown("products");
    setProductsDropdownOpen(true);
  };

  const handleProductsDropdownLeave = () => {
    productsCloseTimeout = setTimeout(() => {
      setProductsDropdownOpen(false);
      setActiveDropdown(null);
    }, 200);
  };

  const handleBundlesDropdownEnter = () => {
    if (bundlesCloseTimeout) {
      clearTimeout(bundlesCloseTimeout);
      bundlesCloseTimeout = null;
    }
    // Schließe alle anderen Dropdowns sofort ohne Animation
    if (activeDropdown !== "bundles") {
      if (activeDropdown === "shop") {
        if (closeTimeout) clearTimeout(closeTimeout);
        setDropdownOpen(false);
      }
      if (activeDropdown === "products") {
        if (productsCloseTimeout) clearTimeout(productsCloseTimeout);
        setProductsDropdownOpen(false);
      }
      if (activeDropdown === "verify") {
        if (verifyCloseTimeout) clearTimeout(verifyCloseTimeout);
        setVerifyDropdownOpen(false);
      }
      if (activeDropdown === "language") {
        if (languageCloseTimeout) clearTimeout(languageCloseTimeout);
        setLanguageDropdownOpen(false);
      }
    }
    setActiveDropdown("bundles");
    setBundlesDropdownOpen(true);
  };

  const handleBundlesDropdownLeave = () => {
    bundlesCloseTimeout = setTimeout(() => {
      setBundlesDropdownOpen(false);
      setActiveDropdown(null);
    }, 200);
  };

  const handleVerifyDropdownEnter = () => {
    if (verifyCloseTimeout) {
      clearTimeout(verifyCloseTimeout);
      verifyCloseTimeout = null;
    }
    // Schließe alle anderen Dropdowns sofort ohne Animation
    if (activeDropdown !== "verify") {
      if (activeDropdown === "shop") {
        if (closeTimeout) clearTimeout(closeTimeout);
        setDropdownOpen(false);
      }
      if (activeDropdown === "products") {
        if (productsCloseTimeout) clearTimeout(productsCloseTimeout);
        setProductsDropdownOpen(false);
      }
      if (activeDropdown === "bundles") {
        if (bundlesCloseTimeout) clearTimeout(bundlesCloseTimeout);
        setBundlesDropdownOpen(false);
      }
      if (activeDropdown === "language") {
        if (languageCloseTimeout) clearTimeout(languageCloseTimeout);
        setLanguageDropdownOpen(false);
      }
    }
    setActiveDropdown("verify");
    setVerifyDropdownOpen(true);
  };

  const handleVerifyDropdownLeave = () => {
    verifyCloseTimeout = setTimeout(() => {
      setVerifyDropdownOpen(false);
      setActiveDropdown(null);
    }, 200);
  };

  const handleCategoryClick = () => {
    setDropdownOpen(false);
  };

  // Helper function to organize products by brand and category - memoized to prevent hydration issues
  const getProductsByBrandAndCategory = () => {
    // Products to exclude from dropdown display
    const excludedDescriptions = [
      "Trenbolone Enanthate",
      "Trenbolone Acetate",
      "Trenbolone Hexahydrobenzylcarbonate",
      "Testosterone Phenylpropionate",
      "Testosterone Isocaproate",
      "Testosterone Decanoate",
      "Testosterone Propionate",
      "Drostanolone Enanthate",
      "Testosterone Enanthate",
      "Drostanolone propionate",
      "Sildenafil Citrate",
      "Tadalafil",
      "Dapoxetine HCL",
    ];

    const categories: CategoryLabel[] = [
      "INJECTION",
      "ORAL",
      "POST CYCLE",
      "FAT BURN",
      "SEXUAL WELLNESS",
      "PEPTIDES & HGH",
      "SARMS",
      "AMINO ACIDS",
    ];

    const brands: Brand[] = ["deus", "astera"];
    
    // Create a structure: { brand: { category: [{ id, name, description }] } }
    const organized: Record<Brand, Record<CategoryLabel, Array<{id: string, name: string, description: string}>>> = {
      deus: {} as Record<CategoryLabel, Array<{id: string, name: string, description: string}>>,
      astera: {} as Record<CategoryLabel, Array<{id: string, name: string, description: string}>>,
    };

    categories.forEach(cat => {
      organized.deus[cat] = [];
      organized.astera[cat] = [];
    });

    // Populate with products
    products.forEach(product => {
      // Check if product should be excluded
      const isExcluded = excludedDescriptions.some(excluded => 
        product.description.includes(excluded)
      );
      
      if (isExcluded) {
        return; // Skip this product
      }

      let displayDesc = product.description.replace(/\s+\d+mg\s*$/i, "").trim();
      
      // If the cleaned description is too short or empty, use original
      if (!displayDesc || displayDesc.length < 2) {
        displayDesc = product.description;
      }
      
      if (organized[product.brand]?.[product.category]) {
        organized[product.brand][product.category].push({
          id: product.id,
          name: product.name,
          description: displayDesc
        });
      }
    });

    // Remove duplicates based on product name and sort by name
    (Object.keys(organized) as Brand[]).forEach(brand => {
      (Object.keys(organized[brand]) as CategoryLabel[]).forEach(cat => {
        const items = organized[brand][cat];
        // Use Map to track unique products by name
        const uniqueMap = new Map<string, {id: string, name: string, description: string}>();
        items.forEach(item => {
          if (!uniqueMap.has(item.name)) {
            uniqueMap.set(item.name, item);
          }
        });
        organized[brand][cat] = Array.from(uniqueMap.values()).sort((a, b) => a.name.localeCompare(b.name));
      });
    });

    return { organized, categories };
  };

  // No need for loading state management here anymore

  const menu = [
    { title: "Home", path: "/" },
    { title: "SHOP", path: "/categories" },
  ];

  const bottomMenuItems = [
    { title: "Home", path: "/" },
    { title: "SHOP", path: "/categories" },
    { title: "PRODUCTS", path: "#" },
    { title: "BUNDLES", path: "#" },
    { title: "VERIFY", path: "#" },
    { title: "FAQ", path: "#" },
    { title: "CONTACT", path: "#" },
    { title: "ABOUT", path: "#" },
  ];

  const subCategories = [
    "INJECTION",
    "ORAL",
    "POST CYCLE",
    "FAT BURN",
    "SEXUAL WELLNESS",
    "PEPTIDES & HGH",
    "SARMS",
    "AMINO ACIDS",
  ];

  const languages = [
    { code: "EN (EUR)", name: "English Euro" },
    { code: "EN (USD)", name: "English Dollar" },
    { code: "DE (EUR)", name: "Deutsch Euro" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 flex flex-col navbar-mobile-opaque transition-all duration-300"
        style={{
          background: "#2d2d34",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.25)",
          zIndex: 10020,
          filter: isAnyNavbarModalOpen ? "blur(4px)" : "blur(0px)",
          pointerEvents: isAnyNavbarModalOpen ? "none" : "auto",
          transition: "filter 0.3s ease-out",
        }}
      >
      {/* First row - Logo, Search, Account */}
      <div className="flex items-center justify-between px-2 lg:justify-center" style={{ paddingTop: "4px", paddingBottom: "5px", minHeight: "41px" }}>
        <style>{`@media (min-width: 768px) { nav > div:first-of-type { min-height: 70px !important; } }`}</style>
        {/* Inner content wrapper - mobile full width, desktop max-w-7xl */}
        <div className="flex w-full lg:max-w-7xl lg:px-8 md:px-4 items-center gap-0 md:gap-0 lg:gap-0">
          {/* Mobile Menu & Search - Only on Mobile */}
          <div className="flex items-center gap-0 flex-none md:hidden">
            <MobileMenu menu={menu} />
            <button
              aria-label="Open search"
              className="flex items-center justify-center transition-all duration-200 group outline-none"
              style={{
                width: "32px",
                height: "32px",
                minWidth: "32px",
                minHeight: "32px",
                maxWidth: "32px",
                maxHeight: "32px",
                flexShrink: 0,
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
              onClick={() => {
                // TODO: Implement wishlist modal functionality
                console.log("Wishlist button clicked - functionality to be implemented");
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.boxShadow = "none !important";
                e.currentTarget.style.backgroundColor = "transparent !important";
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.boxShadow = "none !important";
                e.currentTarget.style.backgroundColor = "transparent !important";
              }}
            >
              <HeartIcon
                className="text-white group-hover:text-[#eb1313] transition-colors duration-200"
                style={{
                  width: "17px !important",
                  height: "17px !important",
                  minWidth: "17px",
                  minHeight: "17px",
                  maxWidth: "17px",
                  maxHeight: "17px",
                  flexShrink: 0,
                }}
              />
            </button>
          </div>
        <div className="flex w-full md:w-1/4 gap-0 md:gap-0 lg:gap-0">
          <a
            href="/"
            className="mr-2 flex items-center md:w-auto lg:-mr-[18px] -ml-[20pt] md:ml-0"
          >
            <div className="opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto">
              <LogoSquare />
            </div>
            <div className="ml-2 flex-none text-sm md:text-lg lg:text-xl font-medium uppercase leading-none">
              <span>hero</span>
              <span
                className="transition-colors duration-300"
                style={{ color: "#eb1313" }}
              >
                chem
              </span>
            </div>
          </a>

          {/* Language Selector - Mobile Only */}
          <div
            className="relative md:hidden ml-[38pt]"
            style={{ zIndex: 10030 }}
            onMouseEnter={handleLanguageDropdownEnter}
            onMouseLeave={handleLanguageDropdownLeave}
          >
            <button
              className="text-white text-sm font-medium uppercase px-2 py-1 flex items-center gap-1"
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
              EN
              <ChevronDownIcon
                className={`h-3 w-3 transition-transform duration-200 ${
                  languageDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className="absolute top-full left-1/2"
              style={{
                minWidth: "120px",
                marginTop: "70px",
                transform: languageDropdownOpen
                  ? "translateX(-50%) translateY(0)"
                  : "translateX(-50%) translateY(-10px)",
                zIndex: 10030,
                opacity: languageDropdownOpen ? 1 : 0,
                pointerEvents: languageDropdownOpen ? "auto" : "none",
                willChange: "transform, opacity",
                transition: languageDropdownOpen 
                  ? "opacity 0.3s ease, transform 0.3s ease"
                  : "opacity 0.1s ease, transform 0.3s ease 0.1s",
              }}
            >
              <ul
                className="rounded-lg"
                style={{
                  backgroundColor: "rgb(45, 45, 52)",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  padding: "4px 0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className="block w-full px-3 py-2 text-left text-white text-sm transition-all duration-300 cursor-pointer"
                      style={{
                        background: "transparent",
                        border: "none",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onClick={() => {
                        // TODO: Implement language change functionality
                        setLanguageDropdownOpen(false);
                      }}
                    >
                      {lang.code}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="hidden gap-0 md:gap-0 lg:gap-0 text-sm md:flex md:items-center">
            {/* Desktop top menu removed - moved to bottom menu */}
          </ul>
        </div>
        <div
          className="hidden justify-center md:flex md:w-1/2 w-full gap-2 md:gap-4 lg:gap-6"
          style={{ minWidth: "400px", maxWidth: "none" }}
        >
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/4 gap-2 md:gap-4 lg:gap-6">
          <div
            className="flex items-center"
            style={{ gap: "calc(0.5rem - 5pt)" }}
          >
              {isHydrated && user ? (
                <>
                  <Link
                    href="/account"
                    className={`uppercase px-2 py-1 rounded flex items-center gap-1 text-sm whitespace-nowrap group ${
                      isAccountPage
                        ? "text-[#e91111]"
                        : "text-white hover:text-[#e91111]"
                    }`}
                    style={{ textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      if (!isAccountPage) {
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          img.style.filter =
                            "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)";
                        }
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isAccountPage) {
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          img.style.filter = "brightness(0) invert(1)";
                        }
                      }
                    }}
                  >
                    <img
                      src="/login.png"
                      alt="Account Icon"
                      className="object-contain w-[22px] h-[22px] min-w-[22px] min-h-[22px] max-w-[22px] max-h-[22px] flex-shrink-0"
                      style={{
                        filter: isAccountPage
                          ? "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)"
                          : "brightness(0) invert(1)",
                      }}
                    />
                    MY ACCOUNT
                  </Link>
                  <button
                    onClick={signOut}
                    className="text-white uppercase hover:text-[#e91111] px-2 py-1 rounded text-sm whitespace-nowrap md:-mr-1 max-[800px]:hidden cursor-pointer"
                    style={{ textDecoration: "none" }}
                  >
                    LOGOUT
                  </button>
                </>
              ) : (
                <button
                  onClick={isHydrated ? openModal : undefined}
                  className="text-white uppercase hover:text-[#e91111] px-2 py-1 md:px-4 md:py-2 rounded md:rounded-lg flex items-center gap-1 md:gap-2 text-sm whitespace-nowrap group -mr-2 md:-mr-3 cursor-pointer"
                  style={{ 
                    textDecoration: "none",
                  }}
                  onMouseEnter={
                    isHydrated
                      ? (e) => {
                          const img = e.currentTarget.querySelector("img");
                          if (img) {
                            img.style.filter =
                              "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)";
                          }
                        }
                      : undefined
                  }
                  onMouseLeave={
                    isHydrated
                      ? (e) => {
                          const img = e.currentTarget.querySelector("img");
                          if (img) {
                            img.style.filter = "brightness(0) invert(1)";
                          }
                        }
                      : undefined
                  }
                >
                  <img
                    src="/login.png"
                    alt="Login Icon"
                    className="object-contain w-[22px] h-[22px] min-w-[22px] min-h-[22px] max-w-[22px] max-h-[22px] flex-shrink-0 transition-all duration-300"
                    style={{
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                  LOGIN / SIGN UP
                </button>
              )}
            </div>
            <div className="md:hidden flex items-center">
              <SimpleCartModal />
            </div>
          </div>
        </div>
      </div>
      
      {/* Second row - Bottom navigation menu (Desktop only) */}
      <div className="hidden md:flex items-center justify-center border-t border-gray-700" style={{ borderTopColor: "rgba(255, 255, 255, 0.1)", paddingTop: "4px", paddingBottom: "5px" }}>
        <div className="flex w-full lg:max-w-7xl lg:px-8 md:px-4 items-center gap-0">
          <ul className="flex gap-0 text-sm items-center" style={{ width: "100%", marginRight: "-12px", flexWrap: "nowrap" }}>
            {bottomMenuItems.map((item) => (
              <li key={item.title} className="relative" style={{ overflow: "visible" }}>
                {item.title === "SHOP" ? (
                  <div
                    className="inline-block w-full"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={item.path}
                      prefetch={true}
                      className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 group"
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                      onClick={handleCategoryClick}
                      onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (img) {
                          img.style.filter =
                            "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)";
                        }
                        if (chevron) {
                          chevron.style.color = "#e91111";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (img) {
                          img.style.filter = "brightness(0) invert(1)";
                        }
                        if (chevron) {
                          chevron.style.color = "white";
                        }
                      }}
                    >
                      <img
                        src="/shop.png"
                        alt="Shop Icon"
                        className="object-contain w-6 h-6 flex-shrink-0 transition-all duration-300"
                        style={{
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                      {item.title.toUpperCase()}
                      <ChevronDownIcon
                        className={`chevron-icon h-4 w-4 transition-all duration-300 ${
                          dropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        style={{ color: "white" }}
                      />
                    </Link>
                    <div
                      className="dropdown absolute top-full z-50 transition-all duration-600"
                      style={{
                        minWidth: "220px",
                        maxWidth: "340px",
                        width: "max-content",
                        left: "50%",
                        marginTop: "22pt",
                        opacity: dropdownOpen ? 1 : 0,
                        transform: dropdownOpen
                          ? "translateX(-50%) translateY(0)"
                          : "translateX(-50%) translateY(-16px)",
                        pointerEvents: dropdownOpen ? "auto" : "none",
                        transition:
                          "opacity 0.15s cubic-bezier(0.4,0,0.2,1), transform 0.15s cubic-bezier(0.4,0,0.2,1)",
                        willChange: "transform, opacity",
                        contain: "layout style paint",
                      }}
                    >
                      <div className="relative flex flex-col items-center mt-0">
                        <span
                          style={{
                            position: "absolute",
                            top: "-16.5px",
                            left: "50%",
                            transform: "translateX(-50%) rotate(180deg)",
                            zIndex: 60,
                            pointerEvents: "none",
                          }}
                        >
                          <svg
                            width="24"
                            height="12"
                            viewBox="0 0 24 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id="arrowGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgb(45,45,52)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(45,45,52)"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="url(#arrowGradient)"
                            />
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="rgba(255,255,255,0.1)"
                            />
                            <line
                              x1="0"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                            <line
                              x1="24"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                          </svg>
                        </span>
                        <ul
                          className="flex flex-col items-center mt-0 pt-4 text-center"
                          style={{
                            borderRadius: "0.75rem", // Updated to match cart modal consistency
                            backgroundColor: "rgb(45, 45, 52)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          {subCategories.map((sub) => (
                            <li key={sub} className="w-full">
                              <Link
                                href={`/categories?category=${encodeURIComponent(sub)}`}
                                className={`block px-6 py-3 w-full text-white uppercase text-center hover:text-[#e91111]${sub === subCategories[subCategories.length - 1] ? " rounded-b-lg" : ""}`}
                                style={{
                                  textDecoration: "none",
                                  borderRadius: 0,
                                  fontWeight: "500",
                                  fontSize: "14px",
                                  letterSpacing: "0.5px",
                                  transition:
                                    "color 0.15s ease",
                                }}
                                onClick={handleCategoryClick}
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                          <li
                            style={{ height: "10pt" }}
                            aria-hidden="true"
                          ></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : item.title === "PRODUCTS" ? (
                  <div
                    className="inline-block w-full relative"
                    onMouseEnter={handleProductsDropdownEnter}
                    onMouseLeave={handleProductsDropdownLeave}
                  >
                    <button
                      className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 group"
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (img) {
                          img.style.filter =
                            "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)";
                        }
                        if (chevron) {
                          chevron.style.color = "#e91111";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (img) {
                          img.style.filter = "brightness(0) invert(1)";
                        }
                        if (chevron) {
                          chevron.style.color = "white";
                        }
                      }}
                    >
                      <img
                        src="/products.png"
                        alt="Products Icon"
                        className="object-contain w-6 h-6 flex-shrink-0 transition-all duration-300"
                        style={{
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                      {item.title.toUpperCase()}
                      <ChevronDownIcon
                        className={`chevron-icon h-4 w-4 transition-all duration-300 ${
                          productsDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        style={{ color: "white" }}
                      />
                    </button>
                    <div
                      className="dropdown products-dropdown fixed z-50 transition-all duration-600"
                      style={{
                        width: "calc(100vw - 100px)",
                        maxHeight: "75vh",
                        left: "50px",
                        right: "50px",
                        top: "auto",
                        bottom: "auto",
                        transform: productsDropdownOpen
                          ? "translateY(0) translateX(0)"
                          : "translateY(-16px) translateX(0)",
                        marginTop: productsDropdownOpen ? "calc(70px - 30pt)" : "calc(70px - 30pt)",
                        opacity: productsDropdownOpen ? 1 : 0,
                        pointerEvents: productsDropdownOpen ? "auto" : "none",
                        transition:
                          "opacity 0.15s cubic-bezier(0.4,0,0.2,1), transform 0.15s cubic-bezier(0.4,0,0.2,1)",
                        willChange: "transform, opacity",
                        contain: "layout style paint",
                        overflow: "hidden",
                        borderRadius: "0.75rem", // Updated to match cart modal consistency
                        backgroundColor: "rgb(45, 45, 52)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                      onWheel={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchMove={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div 
                        className="relative flex flex-col items-center mt-0" 
                        style={{ overflow: "auto", maxHeight: "75vh", borderRadius: "0.75rem" }} // Updated to match cart modal consistency
                      >
                        <style>{`
                          .products-dropdown > div::-webkit-scrollbar {
                            width: 8px;
                          }
                          .products-dropdown > div::-webkit-scrollbar-track {
                            background: transparent;
                          }
                          .products-dropdown > div::-webkit-scrollbar-thumb {
                            background: rgba(255, 255, 255, 0.3);
                            border-radius: 4px;
                          }
                          .products-dropdown > div::-webkit-scrollbar-thumb:hover {
                            background: rgba(255, 255, 255, 0.5);
                          }
                        `}</style>
                        <span
                          style={{
                            position: "absolute",
                            top: "-16.5px",
                            left: "50%",
                            transform: "translateX(-50%) rotate(180deg)",
                            zIndex: 60,
                            pointerEvents: "none",
                          }}
                        >
                          <svg
                            width="24"
                            height="12"
                            viewBox="0 0 24 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id="arrowGradientProducts"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgb(45,45,52)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(45,45,52)"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="url(#arrowGradientProducts)"
                            />
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="rgba(255,255,255,0.1)"
                            />
                            <line
                              x1="0"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                            <line
                              x1="24"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                          </svg>
                        </span>
                        <div
                          style={{
                            padding: "24px",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "32px",
                            maxWidth: "calc(100vw - 80px)",
                            width: "fit-content",
                          }}
                        >
                          {(() => {
                            const { organized, categories } = getProductsByBrandAndCategory();
                            const brands: Brand[] = ["deus", "astera"];
                            const allItems: Array<{ brand: Brand; category: CategoryLabel; items: Array<{name: string, description: string}> }> = [];

                            brands.forEach(brand => {
                              categories.forEach(category => {
                                const items = organized[brand]?.[category] || [];
                                if (items.length > 0) {
                                  allItems.push({
                                    brand,
                                    category,
                                    items,
                                  });
                                }
                              });
                            });

                            // Create organized structure for exact layout
                            const deusInjection = organized.deus?.["INJECTION"] || [];
                            const deusFatBurn = organized.deus?.["FAT BURN"] || [];
                            const deusOral = organized.deus?.["ORAL"] || [];
                            const deusPostCycle = organized.deus?.["POST CYCLE"] || [];
                            const deusSexualWellness = organized.deus?.["SEXUAL WELLNESS"] || [];
                            const deusPeptides = organized.deus?.["PEPTIDES & HGH"] || [];
                            const deusSarms = organized.deus?.["SARMS"] || [];
                            
                            const asteraOral = organized.astera?.["ORAL"] || [];
                            const asteraInjection = organized.astera?.["INJECTION"] || [];
                            const asteraPostCycle = organized.astera?.["POST CYCLE"] || [];
                            const asteraFatBurn = organized.astera?.["FAT BURN"] || [];
                            const asteraPeptides = organized.astera?.["PEPTIDES & HGH"] || [];
                            const asteraSarms = organized.astera?.["SARMS"] || [];

                            const renderCategory = (items: Array<{id: string, name: string, description: string}>, brand: Brand, category: string) => {
                              if (items.length === 0) return null;
                              return (
                                <div key={`${brand}-${category}`} style={{ marginBottom: "12px" }}>
                                  <h3
                                    style={{
                                      fontSize: "13px",
                                      fontWeight: "700",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.5px",
                                      marginBottom: "12px",
                                      color: brand === "deus" ? "#e91111" : "#d67f3f",
                                      borderBottom: `2px solid ${brand === "deus" ? "#e91111" : "#d67f3f"}`,
                                      paddingBottom: "6px",
                                    }}
                                  >
                                    {brand.toUpperCase()} {category}
                                  </h3>
                                  <ul
                                    style={{
                                      listStyle: "none",
                                      padding: 0,
                                      margin: 0,
                                      fontSize: "12px",
                                      userSelect: "none",
                                    }}
                                  >
                                    {items.map((product, itemIdx) => {
                                      const displayText = product.description.length > 35
                                        ? product.description.substring(0, 35) + "..."
                                        : product.description;
                                      return (
                                        <li
                                          key={itemIdx}
                                          style={{
                                            color: "#e0e0e0",
                                            marginBottom: "6px",
                                            lineHeight: "1.4",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            cursor: "pointer",
                                            transition: "color 0.15s ease",
                                          }}
                                          title={product.description}
                                          onClick={() => {
                                            openProductDetailModal(product.id);
                                            setProductsDropdownOpen(false);
                                          }}
                                          onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.color = brand === "deus" ? "#e91111" : "#d67f3f";
                                          }}
                                          onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.color = "#e0e0e0";
                                          }}
                                        >
                                          • {displayText}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              );
                            };

                            return (
                              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                                {/* Container 1: 5 columns with DEUS + mixed ASTERA */}
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    gap: "32px",
                                  }}
                                >
                                  {/* Column 1: DEUS INJECTION + DEUS ORAL + DEUS FAT BURN */}
                                  <div>
                                    {renderCategory(deusInjection, "deus", "INJECTION")}
                                    {renderCategory(deusOral, "deus", "ORAL")}
                                    {renderCategory(deusFatBurn, "deus", "FAT BURN")}
                                  </div>

                                  {/* Column 2: DEUS POST CYCLE + DEUS SEXUAL WELLNESS + DEUS SARMS */}
                                  <div>
                                    {renderCategory(deusPostCycle, "deus", "POST CYCLE")}
                                    {renderCategory(deusSexualWellness, "deus", "SEXUAL WELLNESS")}
                                    {renderCategory(deusSarms, "deus", "SARMS")}
                                  </div>

                                  {/* Column 3: DEUS PEPTIDES & HGH */}
                                  <div>
                                    {renderCategory(deusPeptides, "deus", "PEPTIDES & HGH")}
                                  </div>

                                  {/* Column 4: ASTERA ORAL */}
                                  <div>
                                    {renderCategory(asteraOral, "astera", "ORAL")}
                                  </div>

                                  {/* Column 5: ASTERA INJECTION */}
                                  <div>
                                    {renderCategory(asteraInjection, "astera", "INJECTION")}
                                  </div>
                                </div>

                                {/* Container 2: 5 columns with pure ASTERA categories */}
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    gap: "32px",
                                  }}
                                >
                                  {/* Column 1: ASTERA POST CYCLE */}
                                  <div>
                                    {renderCategory(asteraPostCycle, "astera", "POST CYCLE")}
                                  </div>

                                  {/* Column 2: ASTERA FAT BURN */}
                                  <div>
                                    {renderCategory(asteraFatBurn, "astera", "FAT BURN")}
                                  </div>

                                  {/* Column 3: ASTERA PEPTIDES & HGH */}
                                  <div>
                                    {renderCategory(asteraPeptides, "astera", "PEPTIDES & HGH")}
                                  </div>

                                  {/* Column 4: ASTERA SARMS */}
                                  <div>
                                    {renderCategory(asteraSarms, "astera", "SARMS")}
                                  </div>

                                  {/* Column 5: Placeholder */}
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      minHeight: "100px",
                                      color: "#666",
                                      fontSize: "12px",
                                    }}
                                  >
                                    —
                                  </div>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                        <div
                          style={{ height: "10pt" }}
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : item.title === "BUNDLES" ? (
                  <div
                    className="inline-block w-full"
                    onMouseEnter={handleBundlesDropdownEnter}
                    onMouseLeave={handleBundlesDropdownLeave}
                  >
                    <button
                      className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 group"
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (img) {
                          img.style.filter =
                            "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)";
                        }
                        if (chevron) {
                          chevron.style.color = "#e91111";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (img) {
                          img.style.filter = "brightness(0) invert(1)";
                        }
                        if (chevron) {
                          chevron.style.color = "white";
                        }
                      }}
                    >
                      <img
                        src="/bundles.png"
                        alt="Bundles Icon"
                        className="object-contain w-6 h-6 flex-shrink-0 transition-all duration-300"
                        style={{
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                      {item.title.toUpperCase()}
                      <ChevronDownIcon
                        className={`chevron-icon h-4 w-4 transition-all duration-300 ${
                          bundlesDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        style={{ color: "white" }}
                      />
                    </button>
                    <div
                      className="dropdown absolute top-full z-50 transition-all duration-600"
                      style={{
                        minWidth: "220px",
                        maxWidth: "340px",
                        width: "max-content",
                        left: "50%",
                        marginTop: "22pt",
                        opacity: bundlesDropdownOpen ? 1 : 0,
                        transform: bundlesDropdownOpen
                          ? "translateX(-50%) translateY(0)"
                          : "translateX(-50%) translateY(-16px)",
                        pointerEvents: bundlesDropdownOpen ? "auto" : "none",
                        transition:
                          "opacity 0.15s cubic-bezier(0.4,0,0.2,1), transform 0.15s cubic-bezier(0.4,0,0.2,1)",
                        willChange: "transform, opacity",
                        contain: "layout style paint",
                      }}
                    >
                      <div className="relative flex flex-col items-center mt-0">
                        <span
                          style={{
                            position: "absolute",
                            top: "-16.5px",
                            left: "50%",
                            transform: "translateX(-50%) rotate(180deg)",
                            zIndex: 60,
                            pointerEvents: "none",
                          }}
                        >
                          <svg
                            width="24"
                            height="12"
                            viewBox="0 0 24 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id="arrowGradientBundles"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgb(45,45,52)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(45,45,52)"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="url(#arrowGradientBundles)"
                            />
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="rgba(255,255,255,0.1)"
                            />
                            <line
                              x1="0"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                            <line
                              x1="24"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                          </svg>
                        </span>
                        <ul
                          className="flex flex-col items-center mt-0 pt-4 text-center"
                          style={{
                            borderRadius: "0.75rem", // Updated to match cart modal consistency
                            backgroundColor: "rgb(45, 45, 52)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <li className="w-full">
                            <button
                              className="block px-6 py-3 w-full text-white uppercase text-center hover:text-[#e91111] cursor-pointer"
                              style={{
                                textDecoration: "none",
                                borderRadius: 0,
                                fontWeight: "500",
                                fontSize: "14px",
                                letterSpacing: "0.5px",
                                transition:
                                  "color 0.15s ease",
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                            >
                              PLACEHOLDER 1
                            </button>
                          </li>
                          <li className="w-full">
                            <button
                              className="block px-6 py-3 w-full text-white uppercase text-center hover:text-[#e91111] rounded-b-lg cursor-pointer"
                              style={{
                                textDecoration: "none",
                                borderRadius: 0,
                                fontWeight: "500",
                                fontSize: "14px",
                                letterSpacing: "0.5px",
                                transition:
                                  "color 0.15s ease",
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                            >
                              PLACEHOLDER 2
                            </button>
                          </li>
                          <li
                            style={{ height: "10pt" }}
                            aria-hidden="true"
                          ></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : item.title === "VERIFY" ? (
                  <div
                    className="inline-block w-full"
                    onMouseEnter={handleVerifyDropdownEnter}
                    onMouseLeave={handleVerifyDropdownLeave}
                  >
                    <button
                      className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 group"
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onMouseEnter={(e) => {
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (chevron) {
                          chevron.style.color = "#e91111";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const chevron = e.currentTarget.querySelector(
                          ".chevron-icon",
                        ) as HTMLElement;
                        if (chevron) {
                          chevron.style.color = "white";
                        }
                      }}
                    >
                      {item.title.toUpperCase()}
                      <ChevronDownIcon
                        className={`chevron-icon h-4 w-4 transition-all duration-300 ${
                          verifyDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        style={{ color: "white" }}
                      />
                    </button>
                    <div
                      className="dropdown absolute top-full z-50 transition-all duration-600"
                      style={{
                        minWidth: "220px",
                        maxWidth: "340px",
                        width: "max-content",
                        left: "50%",
                        marginTop: "22pt",
                        opacity: verifyDropdownOpen ? 1 : 0,
                        transform: verifyDropdownOpen
                          ? "translateX(-50%) translateY(0)"
                          : "translateX(-50%) translateY(-16px)",
                        pointerEvents: verifyDropdownOpen ? "auto" : "none",
                        transition:
                          "opacity 0.15s cubic-bezier(0.4,0,0.2,1), transform 0.15s cubic-bezier(0.4,0,0.2,1)",
                        willChange: "transform, opacity",
                        contain: "layout style paint",
                      }}
                    >
                      <div className="relative flex flex-col items-center mt-0">
                        <span
                          style={{
                            position: "absolute",
                            top: "-16.5px",
                            left: "50%",
                            transform: "translateX(-50%) rotate(180deg)",
                            zIndex: 60,
                            pointerEvents: "none",
                          }}
                        >
                          <svg
                            width="24"
                            height="12"
                            viewBox="0 0 24 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id="arrowGradientVerify"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgb(45,45,52)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(45,45,52)"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="url(#arrowGradientVerify)"
                            />
                            <path
                              d="M12 12L0 0H24L12 12Z"
                              fill="rgba(255,255,255,0.1)"
                            />
                            <line
                              x1="0"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                            <line
                              x1="24"
                              y1="0"
                              x2="12"
                              y2="12"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="1"
                            />
                          </svg>
                        </span>
                        <ul
                          className="flex flex-col items-center mt-0 pt-4 text-center"
                          style={{
                            borderRadius: "0.75rem", // Updated to match cart modal consistency
                            backgroundColor: "rgb(45, 45, 52)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <li className="w-full">
                            <a
                              href="https://deusmedical.com/verify/verify-product/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-6 py-3 w-full text-white uppercase text-center hover:text-[#e91111] cursor-pointer"
                              style={{
                                textDecoration: "none",
                                borderRadius: 0,
                                fontWeight: "500",
                                fontSize: "14px",
                                letterSpacing: "0.5px",
                                transition:
                                  "color 0.15s ease",
                              }}
                            >
                              VERIFY DEUS
                            </a>
                          </li>
                          <li className="w-full">
                            <a
                              href="https://asteracheck.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-6 py-3 w-full text-white uppercase text-center hover:text-[#e91111] rounded-b-lg cursor-pointer"
                              style={{
                                textDecoration: "none",
                                borderRadius: 0,
                                fontWeight: "500",
                                fontSize: "14px",
                                letterSpacing: "0.5px",
                                transition:
                                  "color 0.15s ease",
                              }}
                            >
                              VERIFY ASTERA
                            </a>
                          </li>
                          <li
                            style={{ height: "10pt" }}
                            aria-hidden="true"
                          ></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : item.title === "FAQ" ? (
                  <button
                    onClick={() => setFAQModalOpen(true)}
                    className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg flex items-center gap-2 group"
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item.title.toUpperCase()}
                  </button>
                ) : item.title === "CONTACT" ? (
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg flex items-center gap-2 group"
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item.title.toUpperCase()}
                  </button>
                ) : item.title === "ABOUT" ? (
                  <Link
                    href="/about"
                    prefetch={true}
                    className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg flex items-center gap-2 group"
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      // Close all modals and dropdowns when clicking About
                      closeProductDetailModal();
                      setDropdownOpen(false);
                      setProductsDropdownOpen(false);
                      setBundlesDropdownOpen(false);
                      setVerifyDropdownOpen(false);
                      setLanguageDropdownOpen(false);
                      setActiveDropdown(null);
                      setSearchModalOpen(false);
                    }}
                  >
                    {item.title.toUpperCase()}
                  </Link>
                ) : (
                  <Link
                    href={item.path}
                    prefetch={true}
                    className={`text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg flex items-center gap-2 group${item.title === "Über uns" ? " whitespace-nowrap" : ""}`}
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                      marginLeft: item.title === "Home" ? "-15px" : "0",
                    }}
                    onClick={item.title === "Home" ? () => {
                      // Close all modals and dropdowns when clicking Home
                      closeProductDetailModal();
                      setDropdownOpen(false);
                      setProductsDropdownOpen(false);
                      setBundlesDropdownOpen(false);
                      setVerifyDropdownOpen(false);
                      setLanguageDropdownOpen(false);
                      setActiveDropdown(null);
                      setSearchModalOpen(false);
                    } : undefined}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector("img");
                      if (img && item.title === "Home") {
                        img.style.filter =
                          "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector("img");
                      if (img && item.title === "Home") {
                        img.style.filter = "brightness(0) invert(1)";
                      }
                    }}
                  >
                    {item.title === "Home" ? (
                      <>
                        <img
                          src="/home.png"
                          alt="Home Icon"
                          className="object-contain w-6 h-6 flex-shrink-0 transition-all duration-300"
                          style={{
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                        {item.title.toUpperCase()}
                      </>
                    ) : (
                      item.title.toUpperCase()
                    )}
                  </Link>
                )
              }
              </li>
            ))}
          </ul>
          {/* Language/Currency Selector - Desktop Only - Moved to second row, right aligned */}
          <div
            className="relative hidden md:block ml-2"
            onMouseEnter={handleLanguageDropdownEnter}
            onMouseLeave={handleLanguageDropdownLeave}
          >
            <button
              className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg flex items-center gap-2 group whitespace-nowrap"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector(
                  ".chevron-icon",
                ) as HTMLElement;
                if (icon) {
                  icon.style.color = "#e91111";
                }
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector(
                  ".chevron-icon",
                ) as HTMLElement;
                if (icon) {
                  icon.style.color = "white";
                }
              }}
            >
              EN (EUR)
              <ChevronDownIcon
                className={`chevron-icon h-4 w-4 transition-all duration-300 ${
                  languageDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                style={{ color: "white" }}
              />
            </button>
            <div
              className="dropdown absolute top-full right-0 transition-all duration-600"
              style={{
                zIndex: 10002,
                minWidth: "140px",
                maxWidth: "180px",
                width: "max-content",
                marginTop: "22pt",
                opacity: languageDropdownOpen ? 1 : 0,
                transform: languageDropdownOpen
                  ? "translateY(0)"
                  : "translateY(-16px)",
                pointerEvents: languageDropdownOpen ? "auto" : "none",
                transition:
                  "opacity 0.15s cubic-bezier(0.4,0,0.2,1), transform 0.15s cubic-bezier(0.4,0,0.2,1)",
                willChange: "transform, opacity",
              }}
            >
              <div className="relative flex flex-col items-center mt-0">
                <ul
                  className="flex flex-col items-center mt-0 pt-4 text-center"
                  style={{
                    borderRadius: "0.75rem", // Updated to match cart modal consistency
                    backgroundColor: "rgb(45, 45, 52)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                  }}
                >
                  {languages.map((lang, index) => (
                    <li key={lang.code} className="w-full">
                      <button
                        onClick={() => {
                          // TODO: Implement language change functionality
                          setLanguageDropdownOpen(false);
                        }}
                        className={`block px-6 py-3 w-full text-white uppercase text-center hover:text-[#e91111] cursor-pointer${index === languages.length - 1 ? " rounded-b-lg" : ""}`}
                        style={{
                          textDecoration: "none",
                          borderRadius: 0,
                          fontWeight: "500",
                          fontSize: "14px",
                          letterSpacing: "0.5px",
                          transition:
                            "color 0.15s ease",
                        }}
                      >
                        {lang.code}
                      </button>
                    </li>
                  ))}
                  <li style={{ height: "10pt" }} aria-hidden="true"></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Shopping Cart Button - Desktop Only - Right aligned after Language Selector */}
          <div className="hidden md:flex items-center ml-2 -mr-3">
            <button
              className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg flex items-center gap-2 group whitespace-nowrap relative transition-all duration-200"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "14px",
                border: "none",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector("svg");
                if (icon) {
                  icon.style.color = "#e91111";
                }
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector("svg");
                if (icon) {
                  icon.style.color = "white";
                }
              }}
              onClick={(e) => {
                // Delegate click to SimpleCartModal button
                const cartButton = document.querySelector('[aria-label="Open cart"]') as HTMLButtonElement;
                if (cartButton) {
                  cartButton.click();
                }
              }}
            >
              <div className="relative">
                <ShoppingCartIcon className="h-4 w-4 text-white transition-colors duration-200" />
              </div>
              <div className="relative">
                SHOPPING CART
                {/* Item count badge */}
                <div
                  className="absolute bg-[#e91111] text-white text-xs font-bold rounded-full flex items-center justify-center transition-opacity duration-200"
                  style={{
                    top: "-6px",
                    right: "-12px",
                    width: "16px",
                    height: "16px",
                    fontSize: "9px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    opacity: !cartIsHydrated || cartTotalItems === 0 ? 0 : 1,
                    visibility: "visible",
                  }}
                >
                  {!cartIsHydrated ? 0 : cartTotalItems}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Products Modal - Moved from Hero Section */}
      {/* All modal wrappers now rendered at root level in app/layout.tsx */}

      {/* Navbar Search Modal */}
      <NavbarSearchModal
        isOpen={searchModalOpen}
        onCloseAction={() => setSearchModalOpen(false)}
      />

      {/* Product Detail Modal for Products Dropdown */}
      {productDetailModalId && (
        <ProductDetailModalDesktop
          isOpen={isProductDetailModalOpen}
          productId={productDetailModalId}
          onCloseAction={closeProductDetailModal}
        />
      )}
    </nav>
    </>
  );
}
