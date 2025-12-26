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

// Helper function to set a cookie with expiration
const setCookie = (name: string, value: string, hours: number) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

// Helper function to get a cookie
const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]?.trim();
    if (cookie && cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
};

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
    // Only mark as hidden for 24 hours if user checked "don't show again"
    if (dontShowAgain) {
      try {
        // Set cookie that expires in 24 hours
        setCookie("herochem-welcome-hidden", "true", 24);
      } catch (error) {
        // In case cookies are not available
        console.log("Cookies not available");
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
        // Check if user has hidden the modal within the last 24 hours
        const isHidden = getCookie("herochem-welcome-hidden");

        // Show the modal unless user has hidden it (cookie still valid)
        if (!isHidden) {
          setIsOpen(true);
        }
      } catch (error) {
        // In case cookies are not available, show the modal
        setIsOpen(true);
      }
    }, 1000); // 1 second delay after page load

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
