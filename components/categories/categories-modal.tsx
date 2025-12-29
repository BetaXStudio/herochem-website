"use client";

import { Transition } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// Brand selection component

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

interface CategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBrand?: "deus" | "astera" | null;
}

export default function CategoriesModal({
  isOpen,
  onClose,
  currentBrand,
}: CategoriesModalProps) {
  const searchParams = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openCategoryDropdowns, setOpenCategoryDropdowns] = useState<string[]>([]);
  const [scrollTop, setScrollTop] = useState(0);

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
        enterFrom="translate-y-[-20vh] opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all duration-150"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-[-20vh] opacity-0"
        className="fixed left-0 right-0 z-50 md:hidden flex flex-col categories-modal-panel"
        style={{
          top: `${88 + scrollTop}px`,
          height: "calc(100vh - 88px)",
          background: "#2d2d34",
          backdropFilter: "blur(20px)",
          pointerEvents: "auto",
        }}
      >
        <style>{`
          .categories-modal-panel {
            transition: transform 200ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1) 20ms !important;
          }
          .categories-modal-panel[data-closed] {
            transition: transform 150ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 120ms cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
        `}</style>
        <div
          className="flex flex-col h-full overflow-y-auto relative"
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Categories List */}
          <div 
            className="flex-1 overflow-y-auto px-4 pt-6"
            style={{
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
                const isActive =
                  (expectedParam === "" && !categoryParam) ||
                  categoryParam === expectedParam;

                // Check if category has dropdown (all categories except "CATEGORIES")
                const hasDropdown = category.label !== "CATEGORIES";
                const isDropdownOpen = openCategoryDropdowns.includes(category.label);

                if (hasDropdown) {
                  // Categories with dropdown functionality
                  return (
                    <li key={category.label}>
                      <button
                        onClick={() => toggleCategoryDropdown(category.label)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center justify-between group overflow-hidden focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none ${
                          isActive
                            ? "text-white"
                            : "text-neutral-300 hover:text-white"
                        }`}
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
                        <span 
                          className="text-white transition-transform duration-200"
                          style={{
                            display: "inline-block",
                            transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </button>
                      <div 
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ 
                          maxHeight: isDropdownOpen ? "120px" : "0px",
                          opacity: isDropdownOpen ? 1 : 0,
                        }}
                      >
                        <div className="py-1" style={{ backgroundColor: "rgb(45, 45, 52)", position: "relative", zIndex: 20 }}>
                          {/* Separator line - aligned with button content */}
                          <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.1)", marginLeft: "16px", marginRight: "16px", marginBottom: "4px" }} />
                          <div className="space-y-2 px-4">
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
                      </div>
                    </li>
                  );
                } else {
                  // CATEGORIES Button without dropdown (like before)
                  const href = generateBrandAwareUrl(
                    category.path,
                    category.param || undefined,
                  );

                  return (
                    <li key={category.label}>
                      <Link
                        href={href}
                        onClick={() => {
                          onClose();
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center justify-between group overflow-hidden block focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none ${
                          isActive
                            ? "text-white"
                            : "text-neutral-300 hover:text-white"
                        }`}
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
                          if (!isActive) {
                            e.currentTarget.style.border =
                              "1px solid rgba(255, 255, 255, 0)";
                          }
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
                        <ChevronRightIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                      </Link>
                      {/* Separator line after CATEGORIES button */}
                      <div 
                        
                        style={{
                          marginTop: "12px",
                          marginBottom: "18px",
                          height: "1px",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

            {/* Close Button - Up Arrow centered at bottom */}
            <div 
              className="flex justify-center items-center pt-6 pb-3"
            >
              <button
                onClick={onClose}
                className="group p-2 rounded-full transition-all duration-300 hover:bg-red-600/20"
                aria-label="Close modal"
              >
                <ChevronUpIcon className="h-6 w-6 text-white/60 group-hover:text-red-400 transition-colors duration-300" />
              </button>
            </div>
            </div>
        </div>
      </Transition.Child>
    </Transition>
  );
}
