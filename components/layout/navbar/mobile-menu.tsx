"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useModal } from "../../../contexts/modal-context";

// Temporary type definition
type Menu = {
  title: string;
  path: string;
};

// Categories mit Icons wie in der Sidebar
const categories: {
  label: string;
  icon: string;
  path: string;
  param: string;
}[] = [
  {
    label: "CATEGORIES",
    icon: "/products.png",
    path: "/categories",
    param: "",
  },
  {
    label: "INJECTION",
    icon: "/inject.png",
    path: "/categories",
    param: "INJECTION",
  },
  {
    label: "ORAL",
    icon: "/oral.png",
    path: "/categories",
    param: "ORAL",
  },
  {
    label: "POST CYCLE",
    icon: "/post.png",
    path: "/categories",
    param: "POST CYCLE",
  },
  {
    label: "FAT BURN",
    icon: "/fatburn.png",
    path: "/categories",
    param: "FAT BURN",
  },
  {
    label: "SEXUAL WELLNESS",
    icon: "/sexual.png",
    path: "/categories",
    param: "SEXUAL WELLNESS",
  },
  {
    label: "PEPTIDES & HGH",
    icon: "/peptides.png",
    path: "/categories",
    param: "PEPTIDES %26 HGH",
  },
  { label: "SARMS", icon: "/sarms.png", path: "/categories", param: "SARMS" },
  {
    label: "AMINO ACIDS",
    icon: "/amino.png",
    path: "/categories",
    param: "AMINO ACIDS",
  },
];

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentBrand, setCurrentBrand] = useState<"deus" | "astera" | null>(
    null,
  );
  const [openCategoryDropdowns, setOpenCategoryDropdowns] = useState<string[]>([]);

  // Get modal setters from context
  const {
    setFAQModalOpen,
    setContactModalOpen,
  } = useModal();

  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  const toggleCategoryDropdown = (categoryLabel: string) => {
    setOpenCategoryDropdowns(prev => {
      // Wenn das Dropdown bereits geöffnet ist, schließe es
      if (prev.includes(categoryLabel)) {
        return prev.filter(label => label !== categoryLabel);
      }
      // Ansonsten schließe alle anderen und öffne nur das gewählte
      return [categoryLabel];
    });
  };

  // Hydration-safe mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Silent mobile menu pre-render on mobile load (all pages except /about)
  useEffect(() => {
    if (mounted && pathname !== "/about") {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        // Silently open menu for 1ms to trigger render, then close
        setTimeout(() => {
          setIsOpen(true);
          setTimeout(() => {
            setIsOpen(false);
          }, 1);
        }, 100);
      }
    }
  }, [mounted, pathname]);

  // Function to detect current brand state from URL or page context
  const getCurrentBrand = useCallback((): "deus" | "astera" | null => {
    if (!mounted) return null; // Prevent hydration issues

    // Check URL parameters first - also check window.location for immediate access
    const brandParam = searchParams.get("brand");
    if (brandParam === "astera" || brandParam === "deus") {
      return brandParam as "deus" | "astera";
    }

    // Also check window.location directly for immediate URL parameter access
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const windowBrandParam = urlParams.get("brand");
      if (windowBrandParam === "astera" || windowBrandParam === "deus") {
        return windowBrandParam as "deus" | "astera";
      }
    }

    // Check if we're on categories page and can detect brand from DOM/context
    if (pathname === "/categories") {
      // Try to detect brand from the page's active state
      // Look for Astera brand indicators in the DOM
      if (typeof window !== "undefined") {
        const asteraBrandElements = document.querySelectorAll(
          ".astera-brand-active",
        );
        if (asteraBrandElements.length > 0) {
          return "astera";
        }
      }
    }

    return "deus"; // Default to deus
  }, [searchParams, pathname, mounted]);

  // Update current brand when mounted or params change
  useEffect(() => {
    if (mounted) {
      setCurrentBrand(getCurrentBrand());
    }
  }, [mounted, getCurrentBrand]);

  // Function to generate brand-aware URLs
  const generateBrandAwareUrl = useCallback(
    (basePath: string, categoryParam?: string) => {
      if (!mounted) return basePath; // Return simple path if not mounted

      const brand = currentBrand;

      if (!categoryParam) {
        // For "ALL PRODUCTS" - just use base path, optionally with brand
        return brand === "astera" ? `${basePath}?brand=astera` : basePath;
      }

      // For specific categories
      if (brand === "astera") {
        return `${basePath}?category=${categoryParam}&brand=astera`;
      } else {
        return `${basePath}?category=${categoryParam}`;
      }
    },
    [currentBrand, mounted],
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    // Menu schließen bei pathname Änderung (echte Navigation)
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Menu nur bei searchParams Änderung schließen, wenn wir nicht auf der Startseite, Categories Seite oder Search Seite sind
    if (
      pathname !== "/" &&
      pathname !== "/categories" &&
      !pathname.startsWith("/categories/search")
    ) {
      setIsOpen(false);
    }
  }, [searchParams, pathname]);

  return (
    <>
      <button
        aria-label="Open mobile menu"
        className="flex items-center justify-center text-white md:hidden relative group"
        style={{
          width: "32px",
          height: "32px",
          backgroundColor: "transparent !important",
          border: "none !important",
          borderRadius: "7px",
          boxShadow: "none !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          outline: "none !important",
          WebkitAppearance: "none",
          appearance: "none",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openMobileMenu();
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "none !important";
          e.currentTarget.style.backgroundColor = "transparent !important";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none !important";
          e.currentTarget.style.backgroundColor = "transparent !important";
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
        <Bars3Icon
          className="text-white group-hover:text-[#eb1313] transition-colors duration-200"
          style={{
            width: "21.06px !important",
            height: "21.06px !important",
            minWidth: "21.06px",
            minHeight: "21.06px",
            maxWidth: "21.06px",
            maxHeight: "21.06px",
            flexShrink: 0,
          }}
        />
      </button>

      {/* Invisible overlay button when menu is open - for closing */}
      {isOpen && (
        <button
          aria-label="Close mobile menu"
          className="absolute transition-all duration-200 md:hidden group"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "transparent", // Completely transparent
            border: "none",
            borderRadius: "7px",
            boxShadow: "none", // No shadow
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            zIndex: 10001, // Higher than menu panel
            top: "3pt",
            left: "6pt",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
          }}
        >
          {/* Invisible icon - no content rendered */}
        </button>
      )}
      <Transition show={isOpen}>
        {/* Custom styles for delayed opacity transition */}
        <style>{`
          .mobile-menu-panel {
            transition: transform 50ms ease-out, opacity 150ms ease-in-out 0ms !important;
          }
          .mobile-menu-panel[data-closed] {
            transition: transform 40ms ease-in, opacity 100ms ease-in-out 0ms !important;
          }
        `}</style>

        {/* Menu Panel */}
        <Transition.Child
          as="div"
          className="fixed left-0 right-0 flex w-full flex-col pb-6 overflow-hidden mobile-menu-panel"
          style={{
            top: "88px", // 41px navbar + 47px search modal
            height: "calc(100vh - 88px)", // Adjust height accordingly
            background: "rgb(45,45,52)",
            zIndex: 10019, // Under navbar (10020) so shadow is visible
          }}
          enter="transition-all ease-out duration-50"
          enterFrom="translate-x-[-100%] translate-y-[-8vh] opacity-0"
          enterTo="translate-x-0 translate-y-0 opacity-100"
          leave="transition-all ease-in duration-50"
          leaveFrom="translate-x-0 translate-y-0 opacity-100"
          leaveTo="translate-x-[-100%] translate-y-[-8vh] opacity-0"
        >  <div
            className="p-4 overflow-y-auto flex-1 relative mobile-menu-content"
            data-mobile-menu="true"
            style={{
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
              zIndex: 10000, // Erhöht von 101 auf 10000, um über allen anderen Elementen zu sein
            }}
          >


            {/* Main Navigation (HOME, SHOP) */}
            {menu.length ? (
              <div className="mb-4">
                <ul className="space-y-2">
                  {/* HOME BUTTON */}
                  <li>
                    <Link
                      href="/home"
                      prefetch={true}
                      onClick={(e) => {
                        // Navigation erst erlauben, dann Menu schließen
                        setTimeout(() => {
                          closeMobileMenu();
                        }, 100);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium uppercase transition-all duration-300 group overflow-hidden flex items-center justify-between text-white`}
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        zIndex: 10,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src="/home.png"
                          alt="Home Icon"
                          className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                        <span className="text-xs font-medium uppercase">Home</span>
                      </div>
                      <ChevronRightIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    </Link>
                  </li>
                  
                  {menu.filter((item: Menu) => item.title !== "Home").map((item: Menu) => {
                    const isActive = pathname === item.path;
                    
                    return (
                      <li key={item.title}>
                        <Link
                          href={item.path}
                          prefetch={true}
                          onClick={(e) => {
                            // Navigation erst erlauben, dann Menu schließen
                            setTimeout(() => {
                              closeMobileMenu();
                            }, 100);
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium uppercase transition-all duration-300 group overflow-hidden flex items-center justify-between text-white`}
                          style={{
                            background: "transparent",
                            border: "1px solid rgba(255, 255, 255, 0)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: "relative",
                            zIndex: 10,
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src="/shop.png"
                              alt={`${item.title} Icon`}
                              className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{ filter: "brightness(0) invert(1)" }}
                            />
                            <span className="text-xs font-medium uppercase">{item.title}</span>
                          </div>
                          <ChevronRightIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                        </Link>
                      </li>
                    );
                  })}

                </ul>
              </div>
            ) : null}

            {/* Categories Navigation */}
            <nav className="mb-4">
              <div
                className="h-[1px] mb-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  width: "100%",
                }}
              />
              <ul className="space-y-2">
                {categories.map((category) => {
                  const categoryParam = searchParams.get("category");
                  // Für PEPTIDES & HGH: URL-decodierte Version vergleichen
                  const expectedParam =
                    category.param === "PEPTIDES %26 HGH"
                      ? "PEPTIDES & HGH"
                      : category.param;
                  const isActive =
                    (expectedParam === "" && !categoryParam) ||
                    categoryParam === expectedParam;

                  // Prüfe ob es sich um eine Category mit Dropdown handelt (alle außer CATEGORIES)
                  const hasDropdown = category.label !== "CATEGORIES";
                  const isDropdownOpen = openCategoryDropdowns.includes(category.label);

                  if (hasDropdown) {
                    // Category Button mit Dropdown
                    return (
                      <li key={category.label} className="rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleCategoryDropdown(category.label)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center justify-between group overflow-hidden focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none active:ring-0 active:outline-none text-white`}
                          style={{
                            background: "transparent",
                            border: "1px solid rgba(255, 255, 255, 0)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: "relative",
                            zIndex: 10,
                            outline: "none !important",
                            boxShadow: "none !important",
                            WebkitAppearance: "none",
                            appearance: "none",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.border =
                                "2px solid rgba(255, 255, 255, 0)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.border =
                                "1px solid rgba(255, 255, 255, 0)";
                            }
                          }}
                          onMouseDown={(e) => {
                            e.currentTarget.style.outline = "none !important";
                            e.currentTarget.style.boxShadow = "none !important";
                            e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0)";
                          }}
                          onMouseUp={(e) => {
                            e.currentTarget.style.outline = "none !important";
                            e.currentTarget.style.boxShadow = "none !important";
                            if (!isActive) {
                              e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0)";
                            }
                          }}
                          onTouchStart={(e) => {
                            e.currentTarget.style.outline = "none !important";
                            e.currentTarget.style.boxShadow = "none !important";
                            e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0)";
                          }}
                          onTouchEnd={(e) => {
                            e.currentTarget.style.outline = "none !important";
                            e.currentTarget.style.boxShadow = "none !important";
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={category.icon}
                              alt={`${category.label} Icon`}
                              className="w-5 h-5 object-contain flex-shrink-0"
                              style={{ filter: "brightness(0) invert(1)" }}
                            />
                            <span className="text-xs font-medium uppercase">{category.label}</span>
                          </div>
                          <span className="text-white">
                            {isDropdownOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isDropdownOpen && (
                          <div className="px-4 py-1 border-t border-white/10" style={{ backgroundColor: "rgb(45, 45, 52)", marginTop: "-6px", position: "relative", zIndex: 20 }}>
                            <div className="space-y-2">
                              <button
                                onClick={() => {
                                  // DEUS MEDICAL Navigation
                                  closeMobileMenu();
                                  const href = `/categories?category=${encodeURIComponent(category.param)}`;
                                  setTimeout(() => {
                                    window.location.href = href;
                                  }, 100);
                                }}
                                className="w-full text-left py-2 text-xs font-medium uppercase rounded transition-colors focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none"
                                style={{ 
                                  backgroundColor: "transparent",
                                  border: "none",
                                  color: "#e91111",
                                  outline: "none",
                                  boxShadow: "none",
                                  paddingLeft: "32px"
                                }}
                              >
                                DEUS MEDICAL
                              </button>
                              <button
                                onClick={() => {
                                  // ASTERA LABS Navigation
                                  closeMobileMenu();
                                  const href = `/categories?category=${encodeURIComponent(category.param)}&brand=astera`;
                                  setTimeout(() => {
                                    window.location.href = href;
                                  }, 100);
                                }}
                                className="w-full text-left py-2 text-xs font-medium uppercase rounded transition-colors focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none"
                                style={{ 
                                  backgroundColor: "transparent",
                                  border: "none",
                                  color: "#d67f3f",
                                  outline: "none",
                                  boxShadow: "none",
                                  paddingLeft: "32px"
                                }}
                              >
                                ASTERA LABS
                              </button>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  } else {
                    // CATEGORIES Button ohne Dropdown (wie vorher)
                    const href = generateBrandAwareUrl(
                      category.path,
                      category.param || undefined,
                    );

                    return (
                      <li key={category.label}>
                        <Link
                          href={href}
                          onClick={(e) => {
                            // Spezialbehandlung für ALL PRODUCTS - Reload der Seite
                            if (category.label === "CATEGORIES") {
                              e.preventDefault();
                              closeMobileMenu();
                              const brandAwareUrl = generateBrandAwareUrl("/categories");
                              window.history.replaceState({}, "", brandAwareUrl);
                              setTimeout(() => {
                                window.location.reload();
                              }, 50);
                              return;
                            }

                            setTimeout(() => {
                              closeMobileMenu();
                            }, 100);
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center justify-between group overflow-hidden block text-white`}
                          style={{
                            background: "transparent",
                            border: "1px solid rgba(255, 255, 255, 0)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: "relative",
                            zIndex: 10,
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={category.icon}
                              alt={`${category.label} Icon`}
                              className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{ filter: "brightness(0) invert(1)" }}
                            />
                            <span className="truncate text-xs">{category.label}</span>
                          </div>
                          <ChevronRightIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </nav>

            {/* FAQ and Contact Section */}
            <div className="mb-6">
              <div
                className="h-[1px] mb-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  width: "100%",
                }}
              />
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      window.open(
                        "https://deusmedical.com/verify/verify-product/",
                        "_blank",
                      );
                      closeMobileMenu();
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-xs font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-white"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <span className="truncate text-xs">VERIFY DEUS</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.open("https://asteracheck.com", "_blank");
                      closeMobileMenu();
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-xs font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-white"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <span className="truncate text-xs">VERIFY ASTERA</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setFAQModalOpen(true);
                      closeMobileMenu();
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-xs font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-white"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <span className="truncate text-xs">FAQ</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setContactModalOpen(true);
                      closeMobileMenu();
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-xs font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-white"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <span className="truncate text-xs">CONTACT</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.location.href = "/about";
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-xs font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-white"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <span className="truncate text-xs">ABOUT</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Unsichtbares Spacer-Element für bessere Scrollbarkeit */}
            <div style={{ height: "100px", width: "100%" }} />
          </div>

          {/* Shadow Overlay für Tiefeneffekt - Gradient mit Navbar-ähnlichen Schatten */}
          {/* TEMPORARILY DISABLED - keeping code for restoration if needed:
          <div
            className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 0.3%, rgba(0, 0, 0, 0.15) 0.7%, transparent 1%, transparent 99%, rgba(0, 0, 0, 0.15) 99.3%, rgba(0, 0, 0, 0.3) 99.7%, rgba(0, 0, 0, 0.4) 100%)",
              zIndex: 10001,
            }}
          />
          */}

          {/* Inner shadow overlay - copying navbar shadow with inverted/inset values */}
          {/* TEMPORARILY DISABLED - keeping code for restoration if needed:
          <div
            className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none"
            style={{
              boxShadow:
                "inset 0 4px 12px rgba(0,0,0,0.4), inset 0 2px 6px rgba(0,0,0,0.25), inset 0 -4px 12px rgba(0,0,0,0.4), inset 0 -2px 6px rgba(0,0,0,0.25)",
              zIndex: 10001,
            }}
          />
          */}
        </Transition.Child>

        {/* Invisible shadow layer above menu - displays navbar shadow */}
        <Transition.Child
          as="div"
          className="fixed left-0 right-0 pointer-events-none"
          style={{
            top: "0px",
            height: "41px",
            background: "transparent",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.25)",
            clipPath: "inset(0 0 -20px 0)",
            zIndex: 10020,
          }}
          enter="transition-all ease-in-out duration-200"
          enterFrom="translate-x-[-100%]"
          enterTo="translate-x-0"
          leave="transition-all ease-in-out duration-150"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[-100%]"
        />
      </Transition>
    </>
  );
}
