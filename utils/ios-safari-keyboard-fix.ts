/**
 * iOS Safari Virtual Keyboard Fix
 *
 * Prevents navbar scroll behavior issues when virtual keyboard opens/closes
 * This is a common iOS Safari bug where the viewport height changes affect navbar positioning
 */

let isKeyboardOpen = false;
let originalNavbarBehavior: string | null = null;
let navbarElement: HTMLElement | null = null;

export const initIOSSafariKeyboardFix = () => {
  // Only run on iOS Safari
  if (typeof window === "undefined") return;

  const isIOSSafari =
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    /Safari/.test(navigator.userAgent);
  if (!isIOSSafari) return;

  // Get navbar element
  navbarElement = document.querySelector("nav") as HTMLElement;
  if (!navbarElement) return;

  // Store original behavior
  originalNavbarBehavior = navbarElement.style.transform;

  // Add event listeners for input focus/blur
  document.addEventListener("focusin", handleInputFocus, { passive: true });
  document.addEventListener("focusout", handleInputBlur, { passive: true });

  // Handle viewport changes (keyboard open/close detection)
  let initialViewportHeight = window.innerHeight;

  const handleViewportChange = () => {
    const currentHeight = window.innerHeight;
    const heightDiff = initialViewportHeight - currentHeight;

    // If height decreased by more than 150px, keyboard is likely open
    if (heightDiff > 150 && !isKeyboardOpen) {
      isKeyboardOpen = true;
      lockNavbarPosition();
    }
    // If height increased back to normal, keyboard is likely closed
    else if (heightDiff < 50 && isKeyboardOpen) {
      isKeyboardOpen = false;
      restoreNavbarBehavior();
    }
  };

  window.addEventListener("resize", handleViewportChange, { passive: true });
  window.addEventListener(
    "orientationchange",
    () => {
      setTimeout(() => {
        initialViewportHeight = window.innerHeight;
        if (isKeyboardOpen) {
          restoreNavbarBehavior();
          isKeyboardOpen = false;
        }
      }, 500);
    },
    { passive: true },
  );
};

const handleInputFocus = (event: Event) => {
  const target = event.target as HTMLElement;

  // Check if focused element is an input field
  if (
    target &&
    (target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.contentEditable === "true")
  ) {
    isKeyboardOpen = true;
    lockNavbarPosition();
  }
};

const handleInputBlur = () => {
  // Small delay to allow for focus switching between inputs
  setTimeout(() => {
    const activeElement = document.activeElement as HTMLElement;

    // Check if focus moved to another input
    if (
      !activeElement ||
      (activeElement.tagName !== "INPUT" &&
        activeElement.tagName !== "TEXTAREA" &&
        activeElement.contentEditable !== "true")
    ) {
      isKeyboardOpen = false;
      restoreNavbarBehavior();
    }
  }, 100);
};

const lockNavbarPosition = () => {
  if (!navbarElement) return;

  // Force navbar to stay at top
  navbarElement.style.position = "fixed";
  navbarElement.style.top = "0";
  navbarElement.style.transform = "translateY(0)";
  navbarElement.style.transition = "none";
  navbarElement.style.willChange = "auto";

  // Add class to prevent scroll behavior
  navbarElement.classList.add("keyboard-open");
  document.body.classList.add("keyboard-open");

  // IMPORTANT: Do NOT interfere with mobile menu visual styles
  // Only lock position, don't change visibility or z-index
};

const restoreNavbarBehavior = () => {
  if (!navbarElement) return;

  // Restore original navbar behavior
  navbarElement.style.transition = "";
  navbarElement.style.willChange = "";

  // Remove classes
  navbarElement.classList.remove("keyboard-open");
  document.body.classList.remove("keyboard-open");

  // Small delay to ensure smooth transition back
  setTimeout(() => {
    if (navbarElement && !isKeyboardOpen) {
      navbarElement.style.transform = originalNavbarBehavior || "";
    }
  }, 100);
};

// Cleanup function
export const cleanupIOSSafariKeyboardFix = () => {
  if (typeof window === "undefined") return;

  document.removeEventListener("focusin", handleInputFocus);
  document.removeEventListener("focusout", handleInputBlur);

  if (navbarElement) {
    navbarElement.classList.remove("keyboard-open");
    navbarElement.style.transform = originalNavbarBehavior || "";
  }

  document.body.classList.remove("keyboard-open");
};
