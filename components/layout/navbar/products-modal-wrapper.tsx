"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useModal } from "../../../contexts/modal-context";

export default function ProductsModalWrapper() {
  const { isProductsModalOpen, setProductsModalOpen, setFAQModalOpen, setContactModalOpen } = useModal();

  useEffect(() => {
    if (isProductsModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isProductsModalOpen]);

  if (!isProductsModalOpen) return null;

  const handleClose = () => setProductsModalOpen(false);
  const handleOpenFAQ = () => setFAQModalOpen(true);
  const handleOpenContact = () => setContactModalOpen(true);

  return (
    <>
      {/* Unsichtbarer Backdrop für Click-Handling */}
      <div
        className="fixed inset-0 z-[10026] max-[800px]:top-0 min-[801px]:top-[99px]"
        style={{
          backgroundColor: "transparent",
          animation: "backdropFadeIn 0.3s ease-out",
        }}
        onClick={handleClose}
      />

      {/* Modal Container - No black backdrop here, global backdrop handles it */}
      <div
        className="fixed inset-0 z-[10030] flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[107px] max-[800px]:pb-[50px] max-[800px]:top-0 min-[801px]:top-[99px]"
        style={{ touchAction: "none", pointerEvents: "none" }}
      >
        {/* Modal with animation */}
        <div
          className="relative bg-white shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] max-[800px]:max-h-[calc(90vh-105px)]"
          style={{
            backgroundColor: 'white',
            border: '2px solid rgb(45,45,52)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            borderRadius: '0.75rem', // Matches "Proceed to Checkout" button rounded-xl
            touchAction: "auto",
            pointerEvents: "auto",
          }}
        >
        <div
          className="sticky top-0 flex items-center justify-between border-b"
          style={{
            borderColor: 'rgb(45,45,52)',
            backgroundColor: 'rgb(45,45,52)',
            borderTopLeftRadius: '0.75rem', // Updated to match cart modal consistency
            borderTopRightRadius: '0.75rem', // Updated to match cart modal consistency
            margin: '-2px -2px 0 -2px',
            padding: '12px 16px'
          }}
        >
          <div>
            <h2
              className="text-lg font-medium text-white"
              style={{ fontFamily: 'Calibri, Arial, sans-serif' }}
            >
              Official Reseller
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl transition-colors duration-200 group"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)] max-[800px]:max-h-[calc(90vh-225px)]">
          {/* HeroChem Logo */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: 'rgb(45,45,52)',
                boxShadow: '0 4px 15px rgba(233, 17, 17, 0.3)'
              }}
            >
              <img 
                src="/HC_Logo.png" 
                alt="HeroChem Logo" 
                className="w-12 h-12 object-contain"
                style={{ marginLeft: '2px' }}
              />
            </div>
          </div>
          
          <div className="prose prose-gray max-w-none">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                HeroChem is a one-stop online shop that provides you with high quality Deus Medical and Astera Steroids, SARMS, Peptides, HGH and much more.
              </p>

              <p>
                Deus Medical is a pharmaceutical company located in India, and is
                one of the fastest growing companies that offer a wide range of
                world-class quality products. Deus Medical manufacturing is
                certified by WHO-GMP, fully compliant with EUGMP and UKMHRA.
              </p>

              <p>
                We verify every batch of every product. and all our products have
                test reports made by Janoshik Analytics - you can find independent
                third party laboratory test reports on each product down below. Also, all Deus Medical products have a unique product code,
                and with this code you can verify your product on the official Deus Medical Webpage.
              </p>

              <p>
                We ship Deus Medical and Astera products worldwide and all orders are shipped
                from EU warehouses using discreet packaging.
              </p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center pt-4 pb-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              🔒 Secure payments • 📦 Discrete shipping <span className="max-[800px]:block">🌍 Worldwide delivery</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="pt-6 border-t border-gray-200 rounded-b-xl -mx-6 -mb-6 px-6 pb-6" style={{ backgroundColor: 'white' }}>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Information */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Information</h4>
                <ul className="space-y-2">
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">About Us</button></li>
                  <li><button 
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={handleOpenFAQ}
                  >
                    FAQ
                  </button></li>
                  <li><button 
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={handleOpenContact}
                  >
                    Contact
                  </button></li>
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Verify Product</button></li>
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Hero Guide</button></li>
                </ul>
              </div>

              {/* Account */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Account</h4>
                <ul className="space-y-2">
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">My Account</button></li>
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Profile Settings</button></li>
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Order History</button></li>
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Address Book</button></li>
                  <li><button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Reward Points</button></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Newsletter</h4>
              <p className="text-xs text-gray-600 mb-3">Stay up to date with all News, Coming Outs, Promotions and Special Offers by joining our Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-transparent text-gray-700 placeholder-gray-400"
                />
                <button 
                  className="px-4 py-2 bg-[#e91111] text-white text-xs font-medium rounded-xl hover:bg-[#d10f0f] transition-colors"
                  style={{
                    boxShadow: "0 4px 15px rgba(233, 17, 17, 0.3)", // Subtle shadow like auth modal
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
