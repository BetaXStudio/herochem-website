/**
 * Simple iOS Safari Navbar Fix
 *
 * This addresses the specific issue where iOS Safari changes navbar scroll behavior
 * after interacting with input fields. Uses a lightweight approach without DOM manipulation.
 */

let hasAppliedFix = false;

export const applyIOSNavbarScrollFix = () => {
  // Only apply once and only on iOS Safari
  if (hasAppliedFix || typeof window === "undefined") return;

  const isIOSSafari =
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    /Safari/.test(navigator.userAgent);
  if (!isIOSSafari) return;

  // Simple CSS injection approach - no DOM manipulation
  const style = document.createElement("style");
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

  document.head.appendChild(style);
  hasAppliedFix = true;

  console.log("🔧 iOS Safari navbar scroll fix applied via CSS");
};
