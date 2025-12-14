"use client";

import { useEffect, useState } from "react";
import { useModal } from "../../contexts/modal-context";
import { ProductDetailModalDesktop } from "../categories/product-detail-modal-desktop";

export default function ProductDetailModalWrapper() {
  const { 
    isProductDetailModalOpen, 
    productDetailModalId, 
    closeProductDetailModal 
  } = useModal();
  
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render until mounted (SSR safety)
  if (!mounted) {
    return null;
  }

  // Only render on desktop
  if (isMobile) {
    return null;
  }

  if (!productDetailModalId) {
    return null;
  }

  return (
    <ProductDetailModalDesktop
      isOpen={isProductDetailModalOpen}
      productId={productDetailModalId}
      onCloseAction={closeProductDetailModal}
    />
  );
}
