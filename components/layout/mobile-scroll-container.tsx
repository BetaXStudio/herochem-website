"use client";

import { useEffect, useState } from "react";
import { useModal } from "../../contexts/modal-context";
import CategoriesModal from "../categories/categories-modal";
import Footer from "./footer";

interface MobileScrollContainerProps {
  children: React.ReactNode;
}

export default function MobileScrollContainer({
  children,
}: MobileScrollContainerProps) {
  const [isMounted, setIsMounted] = useState(false); // CRITICAL: Track if mounted to prevent hydration mismatch
  const [isMobile, setIsMobile] = useState(false); // Start with false for SSR consistency
  
  // Get all modal states from context
  const {
    isProductsModalOpen,
    isGMPModalOpen,
    isDeliveryModalOpen,
    isCommunityModalOpen,
    isLabReportsModalOpen,
    isFAQModalOpen,
    isContactModalOpen,
    isWelcomeModalOpen,
    isAuthModalOpen,
    isCategoriesModalOpen,
    setCategoriesModalOpen
  } = useModal();
  
  // Check if ANY NAVBAR modal is open (NOT including page-specific modals like Categories)
  const isAnyNavbarModalOpen = 
    isProductsModalOpen || 
    isGMPModalOpen || 
    isDeliveryModalOpen || 
    isCommunityModalOpen || 
    isLabReportsModalOpen ||
    isAuthModalOpen ||
    isFAQModalOpen || 
    isContactModalOpen ||
    isWelcomeModalOpen;

  // Check if ANY modal is open (for scroll blocking purposes)
  const isAnyModalOpen = isAnyNavbarModalOpen || isCategoriesModalOpen;

  // CRITICAL: Detect mobile only AFTER mount to prevent hydration mismatch
  // This ensures Server renders with isMobile=false, then Client updates after mount
  useEffect(() => {
    const detectMobile = () => {
      // Check for mobile user agents
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|FxiOS|EdgiOS/i;
      const isMobileUA = mobileRegex.test(navigator.userAgent);

      // Check for touch capability
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // Check screen size (mobile-like dimensions)
      const isSmallScreen =
        window.innerWidth <= 768 || window.innerHeight <= 768;

      // Device is mobile if it matches user agent OR has touch AND small screen
      const result = isMobileUA || (isTouchDevice && isSmallScreen);
      console.log('Mobile detection:', { isMobileUA, isTouchDevice, isSmallScreen, result });
      return result;
    };

    // Detect and set mobile state
    const detected = detectMobile();
    setIsMobile(detected);
    setIsMounted(true);

    // Add resize listener to update mobile detection
    const handleResize = () => {
      setIsMobile(detectMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keep DOM structure consistent: always render the same way
  // Apply mobile styles through a combination of base class + inline styles
  const containerStyle: React.CSSProperties = {
    height: (isMounted && isMobile) ? "100vh" : "auto",
    transition: "filter 0.3s ease-out",
    pointerEvents: isAnyModalOpen ? "none" : "auto",
  };

  // Only add blur filter if a modal is actually open
  if (isAnyNavbarModalOpen) {
    containerStyle.filter = "blur(4px)";
  }

  // Mobile layout overrides - only apply if truly mounted and mobile
  if (isMounted && isMobile) {
    containerStyle.position = "fixed" as const;
    containerStyle.inset = "0px" as any;
    containerStyle.paddingTop = "88px";
    containerStyle.overflowY = "auto" as const;
    containerStyle.WebkitOverflowScrolling = "touch";
    containerStyle.overscrollBehavior = "contain" as const;
    containerStyle.zIndex = 1;
  }

  // Only add paddingTop override if on mobile after mount
  const mainStyle: React.CSSProperties = (isMounted && isMobile) ? { paddingTop: "0" } : {};

  return (
    <div className="hide-scrollbar" style={containerStyle}>
      <main 
        className="min-h-screen bg-neutral-950 text-neutral-100 hide-scrollbar pt-[41px]"
        style={mainStyle}
        data-scroll-container
      >
        {children}
      </main>
      <Footer />
      <CategoriesModal
        isOpen={isCategoriesModalOpen}
        onClose={() => setCategoriesModalOpen(false)}
      />
    </div>
  );
}
