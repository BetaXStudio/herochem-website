"use client";

import { useEffect } from "react";

export default function IOSNavbarScrollFix() {
  useEffect(() => {
    // Only run on iOS Safari
    const isIOSSafari =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      /Safari/.test(navigator.userAgent);
    if (!isIOSSafari) return;

    // Simple CSS injection without DOM manipulation
    const style = document.createElement("style");
    style.id = "ios-navbar-fix";
    style.textContent = `
      /* iOS Safari navbar scroll fix */
      @supports (-webkit-touch-callout: none) {
        nav[class*="fixed"] {
          position: fixed !important;
          top: 0 !important;
          transform: translateY(0) !important;
          transition: none !important;
        }
        
        /* Prevent any scroll-based hiding */
        nav {
          transform: translateY(0) !important;
        }
      }
    `;

    // Only add if not already present
    if (!document.getElementById("ios-navbar-fix")) {
      document.head.appendChild(style);
    }

    // Cleanup function
    return () => {
      const existingStyle = document.getElementById("ios-navbar-fix");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
