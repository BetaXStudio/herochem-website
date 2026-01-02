"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false); // Delayed visibility for smooth transition
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Start with null - unknown state until detected
  const pathname = usePathname(); // Track route changes
  const containerRef = useRef<HTMLDivElement>(null); // Ref for scroll container
  
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
    setCategoriesModalOpen,
    isProductDetailModalOpen,
    isCheckoutModalOpen,
    isWishlistCheckoutModalOpen,
    isSimpleCartModalOpen
  } = useModal();
  
  // Check if ANY NAVBAR modal is open (NOT including page-specific modals like Categories)
  // Note: isSimpleCartModalOpen is excluded because the cart modal overlays on top
  // and doesn't need the background to be blurred
  const isAnyNavbarModalOpen = 
    isProductsModalOpen || 
    isGMPModalOpen || 
    isDeliveryModalOpen || 
    isCommunityModalOpen || 
    isLabReportsModalOpen ||
    isAuthModalOpen ||
    isFAQModalOpen || 
    isContactModalOpen ||
    isWelcomeModalOpen ||
    isProductDetailModalOpen ||
    isCheckoutModalOpen ||
    isWishlistCheckoutModalOpen;

  // Check if ANY modal is open (for scroll blocking purposes)
  // Include isSimpleCartModalOpen here to disable scroll/pointer events
  const isAnyModalOpen = isAnyNavbarModalOpen || isCategoriesModalOpen || isSimpleCartModalOpen;

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
      // Use window.innerWidth < 768 to match Tailwind's md: breakpoint
      const isSmallScreen = window.innerWidth < 768;

      // Device is mobile if:
      // 1. Matches mobile user agent, OR
      // 2. Has touch AND small screen, OR
      // 3. Just small screen (for DevTools compatibility)
      const result = isMobileUA || (isTouchDevice && isSmallScreen) || isSmallScreen;
      console.log('Mobile detection:', { isMobileUA, isTouchDevice, isSmallScreen, result });
      return result;
    };

    // Detect and set mobile state
    const detected = detectMobile();
    setIsMobile(detected);
    setIsMounted(true);
    
    // Delay visibility to ensure:
    // 1. React has processed the state updates (isMobile, isMounted)
    // 2. The browser has painted the correct layout (mobile vs desktop)
    // Using a small timeout after double rAF ensures the layout is stable
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Additional microtask to ensure React has flushed all updates
        setTimeout(() => {
          setIsVisible(true);
        }, 0);
      });
    });

    // Add resize listener to update mobile detection
    const handleResize = () => {
      setIsMobile(detectMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Derived state: explicitly check if mobile is true (not null or false)
  const isMobileDetected = isMobile === true;

  // Scroll to top on route change for mobile
  useEffect(() => {
    if (isMounted && isMobileDetected && containerRef.current) {
      // Reset scroll position to 0 on route change
      containerRef.current.scrollTop = 0;
    }
  }, [pathname, isMounted, isMobileDetected]);

  // Keep DOM structure consistent: always render the same way
  // Apply mobile styles through a combination of base class + inline styles
  const containerStyle: React.CSSProperties = {
    height: (isMounted && isMobileDetected) ? "100vh" : "auto",
    // No transition on filter - instant blur to avoid competing with modal animations
    // This significantly improves modal animation performance on pages with many images
    pointerEvents: isAnyModalOpen ? "none" : "auto",
    willChange: "filter",
    // Only hide until mobile state is detected - no transition needed
    // The page content has its own fadeInPage animation that handles the smooth entry
    opacity: (isVisible && isMobile !== null) ? 1 : 0,
  };

  // Only add blur filter if a modal is actually open
  if (isAnyNavbarModalOpen) {
    containerStyle.filter = "blur(4px)";
  }

  // Mobile layout overrides - only apply if truly mounted and mobile
  if (isMounted && isMobileDetected) {
    containerStyle.position = "fixed" as const;
    containerStyle.inset = "0px" as any;
    // Use fixed 88px - the navbar already handles safe-area-inset-top
    containerStyle.paddingTop = "88px";
    containerStyle.overflowY = "auto" as const;
    containerStyle.WebkitOverflowScrolling = "touch";
    containerStyle.overscrollBehavior = "contain" as const;
    containerStyle.zIndex = 1;
  }

  // Only add paddingTop override if on mobile after mount - use !important to override Tailwind class
  const mainClassName = (isMounted && isMobileDetected) 
    ? "min-h-screen bg-white text-neutral-100 hide-scrollbar"  // Remove pt-[41px] on mobile
    : "min-h-screen bg-white text-neutral-100 hide-scrollbar pt-[41px]";

  return (
    <div ref={containerRef} className="hide-scrollbar" style={containerStyle} data-mobile-scroll-container>
      <main 
        className={mainClassName}
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
