"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../../contexts/modal-context";
import Search, { SearchSkeleton } from "./search";

interface NavbarSearchModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function NavbarSearchModal({
  isOpen,
  onCloseAction,
}: NavbarSearchModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { 
    isCategoriesModalOpen, 
    setCategoriesModalOpen,
    isProductsModalOpen,
    isGMPModalOpen,
    isDeliveryModalOpen,
    isCommunityModalOpen,
    isLabReportsModalOpen,
    isFAQModalOpen,
    isContactModalOpen,
    isWelcomeModalOpen,
    isAuthModalOpen
  } = useModal();

  // Check if ANY navbar modal is open (these blur the search modal)
  // Same logic as in the navbar component
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

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseAction();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseAction]);

  // Handle categories modal toggle
  const handleCategoriesToggle = () => {
    setCategoriesModalOpen(!isCategoriesModalOpen);
  };

  if (!mounted) return null;

  const modal = (
    // Always visible modal - no transition wrapper
    <div
      className="fixed left-0 right-0 z-[99999] md:hidden flex flex-col navbar-search-modal-enter"
      style={{
        top: "41px", // Below navbar (moved 1px up)
        height: "47px", // Reduced height by 1px
        background: "#2d2d34", // Same grey as navbar
        backdropFilter: "blur(20px)",
        pointerEvents: isAnyNavbarModalOpen ? "none" : "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        filter: isAnyNavbarModalOpen ? "blur(4px)" : "blur(0px)",
        transition: "filter 0.3s ease-out",
      }}
    >
        {/* Top separator line */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Same color as footer separator
            width: "100%",
          }}
        />
        <div
          className="flex flex-col justify-center px-4 relative"
          style={{
            height: "46px", // Adjusted for new modal height minus separator line
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Search Bar - Full Width */}
          <div className="w-full relative" style={{ zIndex: "100001" }}>
            <Suspense fallback={<SearchSkeleton isNavbarModal={true} />}>
              <Search 
                keepResultsOpen={true}
                onDropdownStateChange={setIsDropdownOpen}
                isNavbarModal={true}
              />
            </Suspense>
          </div>
          
          {/* Categories Arrow Button - positioned above search bar */}
          <button
            onClick={handleCategoriesToggle}
            className="group absolute py-4 pr-4 pl-8 transition-all duration-300 hover:bg-red-600/20 cursor-pointer"
            aria-label={isCategoriesModalOpen ? "Close categories modal" : "Open categories modal"}
            style={{ zIndex: "100010", right: "0px", top: "-1px" }}
          >
            <ChevronDownIcon 
              className={`h-4 w-4 text-neutral-300 group-hover:text-red-400 transition-all duration-300 ${
                isCategoriesModalOpen ? 'rotate-180' : 'rotate-0'
              }`} 
            />
          </button>
        </div>
    </div>
  );

  return createPortal(modal, document.body);
}
