"use client";

import { useModal } from "../../contexts/modal-context";

export default function NavbarModalBackdrop() {
  const {
    isProductsModalOpen,
    isGMPModalOpen,
    isDeliveryModalOpen,
    isCommunityModalOpen,
    isLabReportsModalOpen,
    isFAQModalOpen,
    isContactModalOpen,
    isAuthModalOpen,
    isWelcomeModalOpen
  } = useModal();

  // Show backdrop when ANY navbar modal is open
  const isAnyNavbarModalOpen = 
    isProductsModalOpen || 
    isGMPModalOpen || 
    isDeliveryModalOpen || 
    isCommunityModalOpen || 
    isLabReportsModalOpen ||
    isAuthModalOpen ||
    isFAQModalOpen || 
    isContactModalOpen ||
    isWelcomeModalOpen;

  if (!isAnyNavbarModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[10025] bg-black/40"
      style={{
        animation: 'backdropFadeIn 0.3s ease-out',
        pointerEvents: 'none',
      }}
    />
  );
}
