"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface WelcomeModalContextType {
  isOpen: boolean;
  closeModal: (dontShowAgain?: boolean) => void;
}

const WelcomeModalContext = createContext<WelcomeModalContextType | undefined>(
  undefined,
);

export function WelcomeModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeModal = (dontShowAgain = false) => {
    setIsOpen(false);
    // Only mark as permanently hidden if user checked "don't show again"
    if (dontShowAgain) {
      try {
        localStorage.setItem("herochem-welcome-shown", "true");
      } catch (error) {
        // In case localStorage is not available
        console.log("Storage not available");
      }
    }
  };

  // Check if we should show the welcome modal on first load
  useEffect(() => {
    // Only run on client side
    if (!isClient) return;
    
    // Only show on homepage (root path)
    if (pathname !== "/") {
      return;
    }

    // Only run on client side and after a small delay to ensure everything is loaded
    const timer = setTimeout(() => {
      try {
        const hasSeenWelcome = localStorage.getItem("herochem-welcome-shown");

        // Show always unless user has permanently disabled it
        if (!hasSeenWelcome) {
          setIsOpen(true);
        }
      } catch (error) {
        // In case localStorage is not available, show the modal
        setIsOpen(true);
      }
    }, 1500); // 1.5 second delay after page load

    return () => clearTimeout(timer);
  }, [pathname, isClient]);

  return (
    <WelcomeModalContext.Provider value={{ isOpen, closeModal }}>
      {children}
    </WelcomeModalContext.Provider>
  );
}

export function useWelcomeModal() {
  const context = useContext(WelcomeModalContext);
  if (context === undefined) {
    throw new Error(
      "useWelcomeModal must be used within a WelcomeModalProvider",
    );
  }
  return context;
}
