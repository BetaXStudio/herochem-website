"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/modal-context";

interface WelcomeModalProps {
  isOpen: boolean;
  onCloseAction: (dontShowAgain?: boolean) => void;
}

export default function WelcomeModal({
  isOpen,
  onCloseAction,
}: WelcomeModalProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { setWelcomeModalOpen } = useModal();

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Blockiere Body-Scroll wenn Modal offen ist
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      const originalPosition = window.getComputedStyle(document.body).position;
      const originalTop = window.getComputedStyle(document.body).top;
      const scrollY = window.scrollY;
      
      // Speichere die aktuelle Scroll-Position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
      
      // Setze Modal State im Context
      setWelcomeModalOpen(true);

      return () => {
        // Stelle die ursprünglichen Styles wieder her
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.overflow = originalStyle;
        document.body.style.width = '';
        
        // Stelle die Scroll-Position wieder her
        window.scrollTo(0, scrollY);
        
        // Entferne Modal State aus Context
        setWelcomeModalOpen(false);
      };
    }
  }, [isOpen, setWelcomeModalOpen]);

  const handleClose = () => {
    onCloseAction(dontShowAgain);
  };

  const handleBackdropClick = () => {
    onCloseAction(false); // Don't save preference when clicking backdrop
  };

  // Don't render on server side to prevent hydration issues
  if (!isClient || !isOpen) return null;

  return (
    <React.Fragment>
      {/* Modal Container */}
      <div
        className="fixed inset-0 z-[10030] flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[107px] max-[800px]:pb-[50px]"
        style={{ 
          touchAction: "none", 
          pointerEvents: "none",
          overflow: "hidden"
        }}
        onTouchMove={(e) => e.preventDefault()}
      >
        {/* Modal with animation */}
        <div
          className="relative bg-white shadow-xl max-w-lg max-h-[80vh] max-[800px]:max-h-[calc(90vh-105px)] flex flex-col"
          style={{
            backgroundColor: "white",
            border: "2px solid rgb(45,45,52)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            animation: "modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            borderRadius: "0.75rem", // Updated to match cart modal consistency
            touchAction: "auto",
            pointerEvents: "auto",
            overflow: "visible",
            width: "calc(100% - 28px)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Header */}
          <div
            className="sticky top-0 flex items-center justify-between border-b"
            style={{
              borderColor: 'rgb(45,45,52)',
              backgroundColor: 'rgb(45,45,52)',
              borderTopLeftRadius: '0.75rem',
              borderTopRightRadius: '0.75rem',
              margin: '-2px -2px 0 -2px',
              padding: '12px 16px'
            }}
          >
            <h2
              className="text-lg font-medium text-white"
              style={{ fontFamily: "Calibri, Arial, sans-serif" }}
            >
              {"Special Offer - Winter Sale 🎄"}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 rounded-xl transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
            </button>
          </div>

          {/* Content */}
          <div
            className="p-6 overflow-y-auto flex-1"
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y",
              overscrollBehavior: "contain",
            }}
            onTouchMove={(e) => {
              // Verhindere Scroll-Durchbruch am oberen und unteren Ende
              if (e.touches.length > 0) {
                const element = e.currentTarget;
                const { scrollTop, scrollHeight, clientHeight } = element;
                const touch = e.touches[0];
                
                if (scrollTop === 0 && touch && touch.clientY > touch.pageY) {
                  e.preventDefault();
                }
                
                if (scrollTop + clientHeight >= scrollHeight && touch && touch.clientY < touch.pageY) {
                  e.preventDefault();
                }
              }
            }}
          >
            <div className="space-y-6 pt-4">
              {/* Hero Image/Icon Placeholder */}
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 bg-[#e91111] rounded-full flex items-center justify-center"
                  style={{
                    boxShadow: "0 4px 15px rgba(233, 17, 17, 0.3)"
                  }}
                >
                  <span className="text-3xl font-bold text-white">%</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  CODE: SNOW15
                </h3>
                <p className="text-gray-600 text-sm">
                  Use Coupon Code to get 15% off on all our products. Place your
                  order now!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleClose}
                  className="w-full py-3 px-4 text-white font-medium rounded-xl transition-colors duration-200 hover:bg-[#d10f0f]"
                  style={{ 
                    backgroundColor: "#e91111",
                    boxShadow: "0 4px 15px rgba(233, 17, 17, 0.3)"
                  }}
                >
                  Start Shopping
                </button>

                <button
                  onClick={handleClose}
                  className="w-full py-2 px-4 text-gray-600 font-medium border border-gray-300 rounded-xl transition-colors duration-200 hover:bg-gray-50"
                >
                  Close
                </button>

                {/* Don't show again checkbox */}
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="dontShowAgain"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="w-4 h-4 text-[#e91111] bg-gray-100 border-gray-300 rounded focus:ring-[#e91111] focus:ring-2"
                  />
                  <label
                    htmlFor="dontShowAgain"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Do not show again
                  </label>
                </div>
              </div>

              {/* Footer Info */}
              <div className="text-center pt-4 pb-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  🔒 Secure payments • 📦 Discrete shipping{" "}
                  <span className="max-[800px]:block">
                    🌍 Worldwide delivery
                  </span>
                </p>
              </div>

              {/* Navigation Links */}
              <div className="border-t border-gray-200 -mx-6 px-6">
                <div className="grid grid-cols-2 gap-6 mb-6 pt-6">
                {/* Information */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-3 text-sm">
                    Information
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        About Us
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        FAQ
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        Contact
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        Verify Product
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        Hero Guide
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Account */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-3 text-sm">
                    Account
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        My Account
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        Profile Settings
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        Order History
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        Address Book
                      </button>
                    </li>
                    <li>
                      <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
                        Reward Points
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-700 mb-2 text-sm">
                  Newsletter
                </h4>
                <p className="text-xs text-gray-600 mb-3">
                  Stay up to date with all News, Coming Outs, Promotions and
                  Special Offers by joining our Newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                  <button 
                    className="px-4 py-2 bg-[#e91111] text-white text-xs font-medium rounded-xl hover:bg-[#d10f0f] transition-colors"
                    style={{
                      boxShadow: "0 4px 15px rgba(233, 17, 17, 0.3)"
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
      </div>
    </React.Fragment>
  );
}
