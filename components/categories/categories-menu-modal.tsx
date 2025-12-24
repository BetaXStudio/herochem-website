"use client";

import { Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// Categories without the "CATEGORIES" button - starts with INJECTION
const categories: {
  label: string;
  icon: string;
  path: string;
  param: string;
}[] = [
  {
    label: "INJECTION",
    icon: "/inject.png",
    path: "/categories",
    param: "INJECTION",
  },
  { label: "ORAL", icon: "/oral.png", path: "/categories", param: "ORAL" },
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

interface CategoriesMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBrand?: "deus" | "astera" | null;
  currentCategory?: string;
}

export default function CategoriesMenuModal({
  isOpen,
  onClose,
  currentBrand,
  currentCategory,
}: CategoriesMenuModalProps) {
  const searchParams = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openCategoryDropdowns, setOpenCategoryDropdowns] = useState<string[]>([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [closeButtonOpacity, setCloseButtonOpacity] = useState(0);

  // Handler called when modal enter animation completes
  const handleAfterEnter = () => {
    // No delay - fade in header immediately when animation completes
    setCloseButtonOpacity(1);
  };

  // Reset opacity when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCloseButtonOpacity(0);
    }
  }, [isOpen]);

  // Auto-open dropdown for current category when modal opens
  useEffect(() => {
    if (isOpen && currentCategory && currentCategory !== "ALL PRODUCTS" && currentCategory !== "CATEGORIES") {
      // Find matching category label
      const matchingCategory = categories.find(
        cat => cat.label === currentCategory || cat.param === currentCategory
      );
      if (matchingCategory) {
        setOpenCategoryDropdowns([matchingCategory.label]);
      }
    } else if (!isOpen) {
      // Reset dropdowns when modal closes
      setOpenCategoryDropdowns([]);
    }
  }, [isOpen, currentCategory]);

  // Block scrolling on the mobile scroll container when modal is open
  useEffect(() => {
    const mobileScrollContainer = document.querySelector('[data-mobile-scroll-container]') as HTMLElement;
    
    if (isOpen) {
      if (mobileScrollContainer) {
        mobileScrollContainer.style.overflow = 'hidden';
        mobileScrollContainer.style.touchAction = 'none';
      }
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling when modal closes - must set back to original values!
      if (mobileScrollContainer) {
        // MobileScrollContainer uses overflowY: auto with WebkitOverflowScrolling: touch
        mobileScrollContainer.style.overflow = '';
        mobileScrollContainer.style.overflowY = 'auto';
        mobileScrollContainer.style.touchAction = '';
        (mobileScrollContainer.style as any).webkitOverflowScrolling = 'touch';
      }
      document.body.style.overflow = '';
    }
    
    return () => {
      // Cleanup on unmount - restore original values
      if (mobileScrollContainer) {
        mobileScrollContainer.style.overflow = '';
        mobileScrollContainer.style.overflowY = 'auto';
        mobileScrollContainer.style.touchAction = '';
        (mobileScrollContainer.style as any).webkitOverflowScrolling = 'touch';
      }
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Capture scroll position when modal opens
  useEffect(() => {
    if (isOpen) {
      const scrollContainer = document.querySelector('.fixed.inset-0.pt-\\[88px\\]');
      if (scrollContainer) {
        setScrollTop(scrollContainer.scrollTop);
      }
    }
  }, [isOpen]);

  const toggleCategoryDropdown = (categoryLabel: string) => {
    setOpenCategoryDropdowns(prev => 
      prev.includes(categoryLabel)
        ? [] // Close current dropdown
        : [categoryLabel] // Open only this dropdown (closes all others)
    );
  };

  const generateBrandAwareUrl = useCallback(
    (basePath: string, categoryParam?: string) => {
      const brand = currentBrand;

      if (!categoryParam) {
        return brand === "astera" ? `${basePath}?brand=astera` : basePath;
      }

      if (brand === "astera") {
        return `${basePath}?category=${categoryParam}&brand=astera`;
      } else {
        return `${basePath}?category=${categoryParam}`;
      }
    },
    [currentBrand],
  );

  return (
    <Transition show={isOpen}>
      {/* Backdrop */}
      <Transition.Child
        as="div"
        enter="transition-opacity ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
        onClick={onClose}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      />

      {/* Modal Panel */}
      <Transition.Child
        as="div"
        enter="transition-all duration-200"
        enterFrom="transform translate-y-[-20vh] opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition-all ease-in-out duration-150"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform translate-y-[-20vh] opacity-0"
        afterEnter={handleAfterEnter}
        className="fixed left-0 right-0 z-50 md:hidden flex flex-col"
        style={{
          top: `${88 + scrollTop}px`,
          height: "calc(100vh - 88px)",
          background: "#2d2d34",
          backdropFilter: "blur(20px)",
          pointerEvents: "auto",
          transitionTimingFunction: "cubic-bezier(0.1, 0.1, 0.25, 1)",
        }}
      >
        <div
          className="flex flex-col h-full overflow-y-auto relative"
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Search Button - MagnifyingGlassIcon positioned top left, fades in after animation */}
          <div
            className="absolute left-4 p-2 z-50"
            style={{ 
              top: "22px",
              opacity: closeButtonOpacity,
              transition: "opacity 300ms ease-out",
              color: "rgb(212, 212, 212)",
            }}
            aria-label="Search icon"
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
          </div>

          {/* CATEGORIES Title - centered between search and close button */}
          <h1
            className="absolute left-0 right-0 text-center text-2xl font-semibold z-50"
            style={{ 
              top: "24px",
              opacity: closeButtonOpacity,
              transition: "opacity 300ms ease-out",
              fontFamily: "Calibri, Arial, sans-serif",
              color: "white",
            }}
          >
            {currentCategory && currentCategory !== "ALL PRODUCTS" ? currentCategory : "CATEGORIES"}
          </h1>

          {/* Close Button - Bars3Icon positioned top right, fades in after animation */}
          <button
            onClick={onClose}
            className="absolute right-4 p-2 hover:text-gray-300 z-50"
            style={{ 
              top: "20px",
              opacity: closeButtonOpacity,
              transition: "opacity 300ms ease-out",
              color: "rgb(212, 212, 212)",
            }}
            aria-label="Close categories menu modal"
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

          {/* Categories List */}
          <div 
            className="flex-1 overflow-y-auto px-4"
            style={{
              paddingTop: "80px",
              opacity: isDropdownOpen ? 0 : 1,
              pointerEvents: isDropdownOpen ? "none" : "auto",
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            {/* Categories List */}
            <nav>
              <ul className="space-y-2">
              {categories.map((category) => {
                const categoryParam = searchParams.get("category");
                const expectedParam =
                  category.param === "PEPTIDES %26 HGH"
                    ? "PEPTIDES & HGH"
                    : category.param;
                const isActive = categoryParam === expectedParam;

                // All categories have dropdown functionality
                const isDropdownOpenForCategory = openCategoryDropdowns.includes(category.label);

                return (
                  <li key={category.label}>
                    <button
                      onClick={() => toggleCategoryDropdown(category.label)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center justify-between group overflow-hidden focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none text-white`}
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        zIndex: 10,
                        outline: "none !important",
                        boxShadow: "none !important",
                        WebkitTapHighlightColor: "transparent"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.outline = "none !important";
                        e.currentTarget.style.boxShadow = "none !important";
                        if (!isActive) {
                          if (currentBrand === "astera") {
                            e.currentTarget.style.border =
                              "2px solid rgba(214, 127, 63, 0.6)";
                          } else {
                            e.currentTarget.style.border =
                              "2px solid rgba(233, 17, 17, 0.6)";
                          }
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.outline = "none !important";
                        e.currentTarget.style.boxShadow = "none !important";
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
                          className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                        <span className="truncate text-xs">{category.label}</span>
                      </div>
                      <span className="text-white">
                        {isDropdownOpenForCategory ? '−' : '+'}
                      </span>
                    </button>
                    {isDropdownOpenForCategory && (
                      <div className="px-4 py-1 border-t border-white/10" style={{ backgroundColor: "rgb(45, 45, 52)", marginTop: "-6px", position: "relative", zIndex: 20 }}>
                        <div className="space-y-2">
                          <button
                            onClick={() => {
                              // DEUS MEDICAL Navigation
                              onClose();
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
                              outline: "none !important",
                              boxShadow: "none !important",
                              paddingLeft: "32px",
                              WebkitTapHighlightColor: "transparent"
                            }}
                          >
                            DEUS MEDICAL
                          </button>
                          <button
                            onClick={() => {
                              // ASTERA LABS Navigation
                              onClose();
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
                              outline: "none !important",
                              boxShadow: "none !important",
                              paddingLeft: "32px",
                              WebkitTapHighlightColor: "transparent"
                            }}
                          >
                            ASTERA LABS
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
}
