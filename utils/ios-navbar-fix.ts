/**
 * Ultra-Aggressive iOS Safari Navbar Position Fix
 *
 * This fixes the iOS Safari keyboard bug where the navbar disappears or moves
 * when the virtual keyboard opens/closes during scrolling.
 */

let isIOS = false;
let navbarElement: HTMLElement | null = null;
let mutationObserver: MutationObserver | null = null;
let intervalId: NodeJS.Timeout | null = null;
let keyboardOpen = false;

// Detect iOS Safari - safe for SSR
const detectIOS = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
  );
};

// Ultra-aggressive navbar position forcing
const forceNavbarFixed = (): void => {
  if (!navbarElement) return;

  console.log("🔧 iOS Safari Fix: Ultra-aggressive navbar position fixing");

  // Apply ultra-strong position fixing with multiple approaches
  navbarElement.style.setProperty("position", "fixed", "important");
  navbarElement.style.setProperty("top", "0px", "important");
  navbarElement.style.setProperty("left", "0px", "important");
  navbarElement.style.setProperty("right", "0px", "important");
  navbarElement.style.setProperty("width", "100%", "important");

  // Multiple transform approaches to override Safari's changes
  navbarElement.style.setProperty("transform", "translateY(0px)", "important");
  navbarElement.style.setProperty(
    "-webkit-transform",
    "translateY(0px)",
    "important",
  );
  navbarElement.style.setProperty(
    "transform",
    "translate3d(0px, 0px, 0px)",
    "important",
  );
  navbarElement.style.setProperty(
    "-webkit-transform",
    "translate3d(0px, 0px, 0px)",
    "important",
  );

  // GPU acceleration and performance
  navbarElement.style.setProperty("will-change", "auto", "important");
  navbarElement.style.setProperty("backface-visibility", "hidden", "important");
  navbarElement.style.setProperty(
    "-webkit-backface-visibility",
    "hidden",
    "important",
  );
  navbarElement.style.setProperty("perspective", "1000px", "important");

  // Add class for CSS targeting
  navbarElement.classList.add("ios-navbar-fixed");
};

// Setup aggressive mutation observer for real-time transform monitoring
const setupMutationObserver = (): void => {
  if (!navbarElement || mutationObserver) return;

  console.log("⚡ iOS Safari Fix: Setting up mutation observer");

  mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        const target = mutation.target as HTMLElement;
        const currentTransform = target.style.transform;

        // Check if transform was changed from our desired value
        if (
          currentTransform &&
          currentTransform !== "translateY(0px)" &&
          currentTransform !== "translate3d(0px, 0px, 0px)" &&
          currentTransform !== "translate3d(0, 0, 0)" &&
          !currentTransform.includes("translateY(0")
        ) {
          console.log(
            "⚡ iOS Safari Fix: Safari changed transform, correcting:",
            currentTransform,
          );
          forceNavbarFixed();
        }
      }
    });
  });

  mutationObserver.observe(navbarElement, {
    attributes: true,
    attributeFilter: ["style", "class"],
    childList: false,
    subtree: false,
  });
};

// Continuous monitoring during keyboard interaction (50ms intervals)
const startContinuousMonitoring = (): void => {
  if (intervalId) return;

  console.log("🔄 iOS Safari Fix: Starting continuous monitoring");

  intervalId = setInterval(() => {
    if (keyboardOpen && navbarElement) {
      const currentTransform = navbarElement.style.transform;
      if (
        currentTransform &&
        !currentTransform.includes("translateY(0") &&
        !currentTransform.includes("translate3d(0")
      ) {
        console.log("🔄 iOS Safari Fix: Continuous correction");
        forceNavbarFixed();
      }
    }
  }, 50); // Very aggressive 50ms monitoring
};

const stopContinuousMonitoring = (): void => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("🛑 iOS Safari Fix: Stopped continuous monitoring");
  }
};

// Aggressive input focus event handling
const handleInputFocus = (event: Event): void => {
  const target = event.target as HTMLElement;
  if (!target || (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA"))
    return;

  console.log("📱 iOS Safari Fix: Input focus detected - AGGRESSIVE MODE");
  keyboardOpen = true;

  if (navbarElement) {
    // Immediate aggressive fixing
    forceNavbarFixed();
    setupMutationObserver();
    startContinuousMonitoring();

    // Additional delayed fixes for Safari's async behavior
    setTimeout(() => forceNavbarFixed(), 50);
    setTimeout(() => forceNavbarFixed(), 100);
    setTimeout(() => forceNavbarFixed(), 200);
  }
};

// Aggressive input blur event handling
const handleInputBlur = (): void => {
  console.log("📱 iOS Safari Fix: Input blur detected - AGGRESSIVE RESET");
  keyboardOpen = false;
  stopContinuousMonitoring();

  // Multiple aggressive resets after keyboard closes
  const resetTimes = [50, 100, 200, 300, 500, 1000, 1500];
  resetTimes.forEach((delay, index) => {
    setTimeout(() => {
      if (navbarElement && !keyboardOpen) {
        console.log(
          `🔄 iOS Safari Fix: Reset ${index + 1}/${resetTimes.length} after ${delay}ms`,
        );
        forceNavbarFixed();
      }
    }, delay);
  });
};

// Handle viewport changes (keyboard open/close detection)
const handleViewportChange = (): void => {
  if (!keyboardOpen) return;

  console.log("📱 iOS Safari Fix: Viewport change during keyboard interaction");
  setTimeout(() => {
    if (navbarElement) {
      forceNavbarFixed();
    }
  }, 100);

  // Additional delayed fix
  setTimeout(() => {
    if (navbarElement) {
      forceNavbarFixed();
    }
  }, 300);
};

// Setup aggressive event listeners
const setupEventListeners = (): void => {
  if (typeof window === "undefined") return;

  console.log("🎯 iOS Safari Fix: Setting up aggressive event listeners");

  // Aggressive input monitoring with capture
  document.addEventListener("focusin", handleInputFocus, {
    capture: true,
    passive: true,
  });
  document.addEventListener("focusout", handleInputBlur, {
    capture: true,
    passive: true,
  });

  // Additional input event types
  document.addEventListener("focus", handleInputFocus, {
    capture: true,
    passive: true,
  });
  document.addEventListener("blur", handleInputBlur, {
    capture: true,
    passive: true,
  });

  // Viewport and orientation changes
  window.addEventListener("resize", handleViewportChange, { passive: true });
  window.addEventListener("orientationchange", handleViewportChange, {
    passive: true,
  });

  // Visual viewport API for advanced keyboard detection
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleViewportChange, {
      passive: true,
    });
  }

  // Scroll events during keyboard interaction
  document.addEventListener(
    "scroll",
    () => {
      if (keyboardOpen && navbarElement) {
        forceNavbarFixed();
      }
    },
    { passive: true },
  );
};

// Cleanup function
const cleanup = (): void => {
  console.log("🧹 iOS Safari Fix: Cleanup");

  if (mutationObserver) {
    mutationObserver.disconnect();
    mutationObserver = null;
  }

  stopContinuousMonitoring();

  if (typeof window !== "undefined") {
    document.removeEventListener("focusin", handleInputFocus, {
      capture: true,
    });
    document.removeEventListener("focusout", handleInputBlur, {
      capture: true,
    });
    document.removeEventListener("focus", handleInputFocus, { capture: true });
    document.removeEventListener("blur", handleInputBlur, { capture: true });
    window.removeEventListener("resize", handleViewportChange);
    window.removeEventListener("orientationchange", handleViewportChange);

    if (window.visualViewport) {
      window.visualViewport.removeEventListener("resize", handleViewportChange);
    }
  }

  if (navbarElement) {
    navbarElement.classList.remove("ios-navbar-fixed");
  }
};

// Initialize the ultra-aggressive iOS navbar fix
export const initIOSNavbarFix = (): void => {
  if (typeof window === "undefined") return;

  isIOS = detectIOS();
  if (!isIOS) {
    console.log("📱 iOS Safari Fix: Not iOS, skipping");
    return;
  }

  console.log(
    "🚀 iOS Safari Fix: iOS detected - INITIALIZING ULTRA-AGGRESSIVE MODE",
  );

  // Find navbar with multiple selectors
  navbarElement = document.querySelector(
    'nav[class*="fixed"][style*="zIndex: 10025"]',
  ) as HTMLElement;
  if (!navbarElement) {
    navbarElement = document.querySelector(
      'nav[class*="fixed"]:not([class*="mobile-menu"])',
    ) as HTMLElement;
  }
  if (!navbarElement) {
    navbarElement = document.querySelector("nav") as HTMLElement;
  }

  if (!navbarElement) {
    console.warn("📱 iOS Safari Fix: Navbar not found");
    return;
  }

  console.log("🎯 iOS Safari Fix: Navbar found, setup initiated");

  setupEventListeners();

  // Initial aggressive fix
  forceNavbarFixed();

  // Additional delayed initial fixes
  setTimeout(() => forceNavbarFixed(), 100);
  setTimeout(() => forceNavbarFixed(), 500);
};

// Cleanup the iOS navbar fix
export const cleanupIOSNavbarFix = (): void => {
  console.log("🧹 iOS Safari Fix: Cleanup initiated");
  cleanup();
};
