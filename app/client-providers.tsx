"use client";

import React from "react";
import { AuthProvider } from "../components/auth/auth-context";
import { AuthModalProvider } from "../components/auth/auth-modal-context";
import AuthModalWrapper from "../components/auth/auth-modal-wrapper";
import CheckoutModalWrapper from "../components/cart/checkout-modal-wrapper";
import {
    SimpleCartItem,
    SimpleCartProvider,
} from "../components/cart/simple-cart-context";
import LabTestsModalWrapper from "../components/home/lab-tests-modal-wrapper";
import GlobalLoading from "../components/layout/global-loading";
import MobileScrollContainer from "../components/layout/mobile-scroll-container";
import { Navbar } from "../components/layout/navbar";
import NavbarCoverLayer from "../components/layout/navbar-cover-layer";
import CommunityModalWrapper from "../components/layout/navbar/community-modal-wrapper";
import ContactModalWrapper from "../components/layout/navbar/contact-modal-wrapper";
import DeliveryModalWrapper from "../components/layout/navbar/delivery-modal-wrapper";
import FAQModalWrapper from "../components/layout/navbar/faq-modal-wrapper";
import GMPModalWrapper from "../components/layout/navbar/gmp-modal-wrapper";
import ProductsModalWrapper from "../components/layout/navbar/products-modal-wrapper";
import { WelcomeModalProvider } from "../components/layout/welcome-modal-context";
import WelcomeModalWrapper from "../components/layout/welcome-modal-wrapper";
import ProductDetailModalWrapper from "../components/product/product-detail-modal-wrapper";
import { CategoriesStateProvider } from "../contexts/categories-state-context";
import { ModalProvider } from "../contexts/modal-context";

interface ClientProvidersProps {
  children: React.ReactNode;
  initialCart: SimpleCartItem[];
}

export default function ClientProviders({
  children,
  initialCart,
}: ClientProvidersProps) {
  return (
    <AuthProvider>
      <AuthModalProvider>
        <SimpleCartProvider initialCart={initialCart}>
          <WelcomeModalProvider>
            <ModalProvider>
              <CategoriesStateProvider>
                <Navbar />
                <NavbarCoverLayer />
                <MobileScrollContainer>{children}</MobileScrollContainer>

                <AuthModalWrapper />
                <CheckoutModalWrapper />
                <WelcomeModalWrapper />
                <LabTestsModalWrapper />
                <GMPModalWrapper />
                <DeliveryModalWrapper />
                <FAQModalWrapper />
                <ContactModalWrapper />
                <CommunityModalWrapper />
                <ProductsModalWrapper />
                <ProductDetailModalWrapper />
                <GlobalLoading />
              </CategoriesStateProvider>
            </ModalProvider>
          </WelcomeModalProvider>
        </SimpleCartProvider>
      </AuthModalProvider>
    </AuthProvider>
  );
}
