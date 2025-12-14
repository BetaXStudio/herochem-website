"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// Global loading state
let globalLoadingState = {
  isLoading: false,
  isLoadingFadeOut: false,
  listeners: new Set<
    (state: { isLoading: boolean; isLoadingFadeOut: boolean }) => void
  >(),
};

// Global functions to control loading state
export const showGlobalLoading = () => {
  globalLoadingState.isLoading = true;
  globalLoadingState.isLoadingFadeOut = false;
  globalLoadingState.listeners.forEach((listener) =>
    listener({ isLoading: true, isLoadingFadeOut: false }),
  );

  // Show loading screen for 500ms, then fade-out
  setTimeout(() => {
    globalLoadingState.isLoadingFadeOut = true;
    globalLoadingState.listeners.forEach((listener) =>
      listener({ isLoading: true, isLoadingFadeOut: true }),
    );

    // Remove loading screen after fade-out animation
    setTimeout(() => {
      globalLoadingState.isLoading = false;
      globalLoadingState.isLoadingFadeOut = false;
      globalLoadingState.listeners.forEach((listener) =>
        listener({ isLoading: false, isLoadingFadeOut: false }),
      );
    }, 300); // 300ms for fade-out
  }, 500); // 500ms loading time
};

export const hideGlobalLoading = () => {
  globalLoadingState.isLoading = false;
  globalLoadingState.isLoadingFadeOut = false;
  globalLoadingState.listeners.forEach((listener) =>
    listener({ isLoading: false, isLoadingFadeOut: false }),
  );
};

export default function GlobalLoading() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFadeOut, setIsLoadingFadeOut] = useState(false);

  // Echtzeit Brand-Erkennung
  const getCurrentBrand = useCallback(() => {
    // 1. Prüfe URL Parameter
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const brandParam = urlParams.get("brand");
      if (brandParam === "astera") return "astera";
      if (brandParam === "deus") return "deus";
    }

    // 2. Prüfe DOM für aktive Brand-Klasse
    if (typeof document !== "undefined") {
      const hasAsteraClass =
        document.documentElement.classList.contains("astera-brand-active") ||
        document.body.classList.contains("astera-brand-active");
      if (hasAsteraClass) return "astera";
    }

    // 3. Default zu Deus
    return "deus";
  }, []);

  const isAstera = getCurrentBrand() === "astera";

  useEffect(() => {
    const listener = (state: {
      isLoading: boolean;
      isLoadingFadeOut: boolean;
    }) => {
      setIsLoading(state.isLoading);
      setIsLoadingFadeOut(state.isLoadingFadeOut);
    };

    globalLoadingState.listeners.add(listener);

    return () => {
      globalLoadingState.listeners.delete(listener);
    };
  }, []);

  // Handle fullscreen for mobile loading
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isLoading && isMobile && !isLoadingFadeOut) {
      // Enter fullscreen mode on mobile
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.log("Fullscreen failed:", err);
        });
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        (document.documentElement as any).webkitRequestFullscreen();
      }
    } else if (!isLoading && document.fullscreenElement) {
      // Exit fullscreen when loading is done
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.log("Exit fullscreen failed:", err);
        });
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  }, [isLoading, isLoadingFadeOut]);

  // Reset loading state when pathname changes
  useEffect(() => {
    hideGlobalLoading();
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <>
      {/* Full screen black layer - simple and effective */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 ${
          isLoadingFadeOut ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundColor: "#000000",
          zIndex: 9998,
          // Ensure coverage in fullscreen mode
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* Loading content layer on top */}
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isLoadingFadeOut ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 9999,
          // Ensure coverage in fullscreen mode
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="flex flex-col items-center gap-4 relative z-10">
          {/* Main spinner */}
          <div
            className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300"
            style={{
              borderTopColor: isAstera ? "#d67f3f" : "#e91111",
            }}
          ></div>

          {/* Loading text */}
          <div className="text-white text-lg font-medium">Loading...</div>

          {/* Loading dots animation */}
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: isAstera ? "#d67f3f" : "#e91111" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                backgroundColor: isAstera ? "#d67f3f" : "#e91111",
                animationDelay: "0.1s",
              }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                backgroundColor: isAstera ? "#d67f3f" : "#e91111",
                animationDelay: "0.2s",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
