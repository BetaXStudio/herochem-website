"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ModalContextType {
  isProductsModalOpen: boolean;
  setProductsModalOpen: (isOpen: boolean) => void;
  isGMPModalOpen: boolean;
  setGMPModalOpen: (isOpen: boolean) => void;
  isDeliveryModalOpen: boolean;
  setDeliveryModalOpen: (isOpen: boolean) => void;
  isCommunityModalOpen: boolean;
  setCommunityModalOpen: (isOpen: boolean) => void;
  isLabReportsModalOpen: boolean;
  setLabReportsModalOpen: (isOpen: boolean) => void;
  isFAQModalOpen: boolean;
  setFAQModalOpen: (isOpen: boolean) => void;
  isContactModalOpen: boolean;
  setContactModalOpen: (isOpen: boolean) => void;
  isWelcomeModalOpen: boolean;
  setWelcomeModalOpen: (isOpen: boolean) => void;
  isAuthModalOpen: boolean;
  setAuthModalOpen: (isOpen: boolean) => void;
  isCategoriesModalOpen: boolean;
  setCategoriesModalOpen: (isOpen: boolean) => void;
  isSearchModalOpen: boolean;
  setSearchModalOpen: (isOpen: boolean) => void;
  // Product Detail Modal (Desktop)
  isProductDetailModalOpen: boolean;
  productDetailModalId: string | null;
  openProductDetailModal: (productId: string) => void;
  closeProductDetailModal: () => void;
  resetAllModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isProductsModalOpen, setIsProductsModalOpenState] = useState(false);
  const [isGMPModalOpen, setIsGMPModalOpenState] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpenState] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpenState] = useState(false);
  const [isLabReportsModalOpen, setIsLabReportsModalOpenState] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpenState] = useState(false);
  const [isContactModalOpen, setIsContactModalOpenState] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpenState] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpenState] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpenState] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpenState] = useState(false);
  // Product Detail Modal (Desktop)
  const [isProductDetailModalOpen, setIsProductDetailModalOpen] = useState(false);
  const [productDetailModalId, setProductDetailModalId] = useState<string | null>(null);

  const setProductsModalOpen = (isOpen: boolean) => {
    setIsProductsModalOpenState(isOpen);
  };

  const setGMPModalOpen = (isOpen: boolean) => {
    setIsGMPModalOpenState(isOpen);
  };

  const setDeliveryModalOpen = (isOpen: boolean) => {
    setIsDeliveryModalOpenState(isOpen);
  };

  const setCommunityModalOpen = (isOpen: boolean) => {
    setIsCommunityModalOpenState(isOpen);
  };

  const setLabReportsModalOpen = (isOpen: boolean) => {
    setIsLabReportsModalOpenState(isOpen);
  };

  const setFAQModalOpen = (isOpen: boolean) => {
    setIsFAQModalOpenState(isOpen);
  };

  const setContactModalOpen = (isOpen: boolean) => {
    setIsContactModalOpenState(isOpen);
  };

  const setWelcomeModalOpen = (isOpen: boolean) => {
    setIsWelcomeModalOpenState(isOpen);
  };

  const setAuthModalOpen = (isOpen: boolean) => {
    setIsAuthModalOpenState(isOpen);
  };

  const setCategoriesModalOpen = (isOpen: boolean) => {
    setIsCategoriesModalOpenState(isOpen);
  };

  const setSearchModalOpen = (isOpen: boolean) => {
    setIsSearchModalOpenState(isOpen);
  };

  const openProductDetailModal = (productId: string) => {
    setProductDetailModalId(productId);
    setIsProductDetailModalOpen(true);
  };

  const closeProductDetailModal = () => {
    setIsProductDetailModalOpen(false);
    setProductDetailModalId(null);
  };

  const resetAllModals = () => {
    setIsProductsModalOpenState(false);
    setIsGMPModalOpenState(false);
    setIsDeliveryModalOpenState(false);
    setIsCommunityModalOpenState(false);
    setIsLabReportsModalOpenState(false);
    setIsFAQModalOpenState(false);
    setIsContactModalOpenState(false);
    setIsWelcomeModalOpenState(false);
    setIsAuthModalOpenState(false);
    setIsCategoriesModalOpenState(false);
    setIsSearchModalOpenState(false);
    setIsProductDetailModalOpen(false);
    setProductDetailModalId(null);
  };

  // Reset modals on pathname OR searchParams change
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    resetAllModals();
  }, [pathname, searchParams]);

  return (
    <ModalContext.Provider value={{ 
      isProductsModalOpen, 
      setProductsModalOpen,
      isGMPModalOpen,
      setGMPModalOpen,
      isDeliveryModalOpen,
      setDeliveryModalOpen,
      isCommunityModalOpen,
      setCommunityModalOpen,
      isLabReportsModalOpen,
      setLabReportsModalOpen,
      isFAQModalOpen,
      setFAQModalOpen,
      isContactModalOpen,
      setContactModalOpen,
      isWelcomeModalOpen,
      setWelcomeModalOpen,
      isAuthModalOpen,
      setAuthModalOpen,
      isCategoriesModalOpen,
      setCategoriesModalOpen,
      isSearchModalOpen,
      setSearchModalOpen,
      isProductDetailModalOpen,
      productDetailModalId,
      openProductDetailModal,
      closeProductDetailModal,
      resetAllModals
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
