"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook zum Freezing von Seiten - verhindert Re-Renders beim Navigieren weg/zurück
 * Speichert den Component State zwischen und stellt ihn wieder her
 */
export function useFreezeComponent<T extends Record<string, any>>(
  componentState: T,
  dependencies: any[] = []
) {
  const frozenStateRef = useRef<T | null>(null);
  const isFrozenRef = useRef(false);
  const [isFrozen, setIsFrozen] = useState(false);

  // Speichere den State wenn die Komponente "schlafen gelegt" wird (visibility change)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Seite wird verborgen - freezen
        frozenStateRef.current = componentState;
        isFrozenRef.current = true;
        setIsFrozen(true);
      } else {
        // Seite wird wieder sichtbar - unfreeze
        isFrozenRef.current = false;
        setIsFrozen(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [...dependencies]);

  return {
    isFrozen,
    frozenState: frozenStateRef.current,
    getFrozenState: () => frozenStateRef.current,
  };
}

/**
 * Performance Optimization: Verhindert State Updates während der Navigation
 */
export function usePreventStateUpdates() {
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const handleRouteChange = () => {
      isNavigatingRef.current = true;
      // Nach 500ms wieder erlauben
      const timeout = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 500);
      return () => clearTimeout(timeout);
    };

    window.addEventListener("beforeunload", handleRouteChange);
    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return {
    isNavigating: isNavigatingRef.current,
    safeSetState: (callback: () => void) => {
      if (!isNavigatingRef.current) {
        callback();
      }
    },
  };
}
