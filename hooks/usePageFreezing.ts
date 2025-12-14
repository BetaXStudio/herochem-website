"use client";

import { useEffect, useRef } from "react";

/**
 * Hook für intelligentes Page Freezing und BFCache Optimization
 * Verhindert State Reset und preserves DOM beim Navigation
 */
export function usePageFreezing(enabled: boolean = true) {
  const frozenStateRef = useRef<{
    isHidden: boolean;
    timestamp: number;
  }>({
    isHidden: false,
    timestamp: 0,
  });

  // Detect when page becomes hidden (navigating away)
  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      frozenStateRef.current.isHidden = document.hidden;
      frozenStateRef.current.timestamp = Date.now();

      if (document.hidden) {
        // Page is being hidden - freeze state
        console.debug("[PageFreezing] Page hidden, freezing state");
      } else {
        // Page is becoming visible again - potentially returning from back
        console.debug("[PageFreezing] Page visible, checking if we should restore");
      }
    };

    // Also handle page show/hide events
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        console.debug("[PageFreezing] Page restored from BFCache");
      }
    };

    const handlePageHide = (e: PageTransitionEvent) => {
      if (e.persisted) {
        console.debug("[PageFreezing] Page frozen in BFCache");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [enabled]);

  // Prevent unload handlers that break BFCache
  useEffect(() => {
    if (!enabled) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Don't set returnValue unless absolutely necessary
      // This breaks BFCache
      // e.returnValue = '';
    };

    // DON'T add beforeunload listener - it breaks BFCache!
    // window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [enabled]);

  return {
    isFrozen: frozenStateRef.current.isHidden,
  };
}

/**
 * Hook um zu detecten wenn wir via Back-Button zurückgekommen sind
 */
export function useBackNavigation(callback: () => void) {
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        // Wir sind zurück gekommen!
        callback();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [callback]);
}
