"use client";

import { useEffect, useRef, useState } from "react";

interface IOSSafeNavbarProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function IOSSafeNavbar({
  children,
  className = "",
  style = {},
}: IOSSafeNavbarProps) {
  const [isIOS, setIsIOS] = useState(false);
  const [useAbsolute, setUseAbsolute] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    if (!iOS) {
      return;
    }

    // Check for modals that might trigger keyboard
    const checkForModals = () => {
      const mobileMenuOpen =
        document.querySelector('[data-mobile-menu="true"]') !== null;
      const authModalOpen =
        document.querySelector('[data-auth-modal="true"]') !== null;
      const checkoutModalOpen =
        document.querySelector('[data-checkout-modal="true"]') !== null;

      const shouldUseAbsolute =
        mobileMenuOpen || authModalOpen || checkoutModalOpen;
      setUseAbsolute(shouldUseAbsolute);
    };

    // Check initially
    checkForModals();

    // Create a MutationObserver to watch for modal changes
    const observer = new MutationObserver(() => {
      checkForModals();
    });

    // Watch for changes in the document body (where modals are added/removed)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "data-mobile-menu",
        "data-auth-modal",
        "data-checkout-modal",
      ],
    });

    return () => {
      observer.disconnect();
    };
  }, [isIOS]);

  // Only add scroll tracking when we're in absolute mode on iOS
  useEffect(() => {
    if (!isIOS || !useAbsolute || !navRef.current) {
      return;
    }

    const navbar = navRef.current;
    let ticking = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let lastScrollY = 0;

    const updatePosition = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY =
            window.pageYOffset || document.documentElement.scrollTop;
          
          // Only update if scroll position changed significantly (more than 2px)
          // This reduces unnecessary DOM updates - Priority 3 optimization
          if (Math.abs(scrollY - lastScrollY) > 2) {
            navbar.style.transform = `translate3d(0, ${scrollY}px, 0)`;
            lastScrollY = scrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Debounced scroll handler - Priority 3 fix
    const debouncedScroll = () => {
      updatePosition();
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Debounce additional updates to max once per 100ms
      scrollTimeout = setTimeout(() => {
        updatePosition();
      }, 100);
    };

    // Initial position
    updatePosition();

    // Listen to scroll when in absolute mode - with debounce
    window.addEventListener("scroll", debouncedScroll, { passive: true });
    window.addEventListener("resize", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("resize", updatePosition);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      // Reset transform when switching back to fixed
      if (navbar) {
        navbar.style.transform = "";
      }
    };
  }, [isIOS, useAbsolute]);

  const getNavbarStyle = () => {
    const baseStyle = { ...style };

    if (!isIOS) {
      // Non-iOS: always use normal fixed positioning
      return baseStyle;
    }

    if (useAbsolute) {
      // iOS with modals open: use absolute positioning with scroll tracking
      return {
        ...baseStyle,
        position: "absolute" as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: baseStyle.zIndex || 10025,
        willChange: "transform",
        WebkitBackfaceVisibility: "hidden" as const,
        backfaceVisibility: "hidden" as const,
      };
    }

    // iOS without modals: use normal fixed positioning
    return baseStyle;
  };

  const getFinalClassName = () => {
    if (!isIOS) {
      return className;
    }

    if (useAbsolute) {
      return className.replace("fixed", "absolute");
    }

    return className;
  };

  return (
    <nav ref={navRef} style={getNavbarStyle()} className={getFinalClassName()}>
      {children}
    </nav>
  );
}
