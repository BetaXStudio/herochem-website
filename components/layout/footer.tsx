"use client";

import Link from "next/link";
import { useModal } from "../../contexts/modal-context";

// Helper function to reset scroll position on mobile before navigation
const resetMobileScroll = () => {
  // Target the MobileScrollContainer
  const scrollContainer = document.querySelector('[data-mobile-scroll-container]') as HTMLElement;
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
  // Also try window scroll
  window.scrollTo(0, 0);
};

export default function Footer() {
  const { setFAQModalOpen, setContactModalOpen } = useModal();

  return (
    <>
      <style>{`
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
      <footer
      className="text-white relative"
      style={{
        background: "#2d2d34",
        backdropFilter: "blur(20px)",
        zIndex: 10,
      }}
    >
      {/* Desktop Shadow Overlay - mit heller Linie */}
      <div
        className="absolute top-0 left-0 right-0 hidden md:block pointer-events-none"
        style={{
          height: "1px",
          boxShadow:
            "0 -8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          zIndex: 50,
        }}
      />

      {/* Feature Boxes Section */}
      <div className="px-8 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
            {/* Textbox 1: Official Partner */}
            <div
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 w-full max-w-[160px] relative"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <div
                className="absolute inset-0 rounded-lg md:[box-shadow:0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] lg:opacity-0 lg:[box-shadow:none]"
                style={{
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-10 mb-1">
                <img
                  src="/bottom/official.png"
                  alt="Official Partner"
                  className="object-contain mx-auto transition-transform duration-300"
                  style={{
                    filter: "brightness(0) invert(1)",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </div>
              <h3 className="relative z-10 text-xs font-bold mb-1 uppercase text-white">
                OFFICIAL PARTNER
              </h3>
              <p
                className="relative z-10 text-gray-200 leading-tight"
                style={{ fontSize: "9px" }}
              >
                We guarantee very
                <br />
                high quality products
              </p>
            </div>

            {/* Textbox 2: Lab Tested */}
            <div
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 w-full max-w-[160px] relative"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <div
                className="absolute inset-0 rounded-lg md:[box-shadow:0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] lg:opacity-0 lg:[box-shadow:none]"
                style={{
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-10 mb-1">
                <img
                  src="/bottom/test.png"
                  alt="Lab Tested"
                  className="object-contain mx-auto transition-transform duration-300"
                  style={{
                    filter: "brightness(0) invert(1)",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </div>
              <h3 className="relative z-10 text-xs font-bold mb-1 uppercase text-white">
                LAB TESTED
              </h3>
              <p
                className="relative z-10 text-gray-200 leading-tight"
                style={{ fontSize: "9px" }}
              >
                Products are regularly tested
                <br />
                by independent laboratories
              </p>
            </div>

            {/* Textbox 3: Discreet Packaging */}
            <div
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 w-full max-w-[160px] relative"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <div
                className="absolute inset-0 rounded-lg md:[box-shadow:0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] lg:opacity-0 lg:[box-shadow:none]"
                style={{
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-10 mb-1">
                <img
                  src="/bottom/paket.png"
                  alt="Discreet Packaging"
                  className="object-contain mx-auto transition-transform duration-300"
                  style={{
                    filter: "brightness(0) invert(1)",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </div>
              <h3 className="relative z-10 text-xs font-bold mb-1 uppercase text-white">
                DISCREET PACKAGING
              </h3>
              <p
                className="relative z-10 text-gray-200 leading-tight"
                style={{ fontSize: "9px" }}
              >
                The packaging provides no
                <br />
                indication of the contents
              </p>
            </div>

            {/* Textbox 4: 24/7 Support */}
            <div
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 w-full max-w-[160px] relative"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <div
                className="absolute inset-0 rounded-lg md:[box-shadow:0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] lg:opacity-0 lg:[box-shadow:none]"
                style={{
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-10 mb-1">
                <img
                  src="/bottom/support.png"
                  alt="24/7 Support"
                  className="object-contain mx-auto transition-transform duration-300"
                  style={{
                    filter: "brightness(0) invert(1)",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </div>
              <h3 className="relative z-10 text-xs font-bold mb-1 uppercase text-white">
                24/7 SUPPORT
              </h3>
              <p
                className="relative z-10 text-gray-200 leading-tight"
                style={{ fontSize: "9px" }}
              >
                We are here to help you
                <br />
                around the clock
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="px-8 py-6" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {/* Information */}
            <div className="text-center">
              <h4 className="font-semibold text-white mb-3 text-sm">
                Information
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/about" 
                    className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                    onClick={resetMobileScroll}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <button 
                    className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                    onClick={() => setFAQModalOpen(true)}
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => setContactModalOpen(true)} className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Contact
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Verify Product
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Hero Guide
                  </button>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div className="text-center">
              <h4 className="font-semibold text-white mb-3 text-sm">Account</h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    My Account
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Profile Settings
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Order History
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Address Book
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Reward Points
                  </button>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="col-span-2 md:col-span-1 text-center">
              <h4 className="font-semibold text-white mb-3 text-sm">
                Policies
              </h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Reship Policy
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Privacy & Security
                  </button>
                </li>
                <li>
                  <button className="text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }} className="pt-4">
            <h4 className="font-semibold text-white mb-2 text-sm">
              Newsletter
            </h4>
            <p className="text-xs text-gray-300 mb-3">
              Stay up to date with all News, Coming Outs, Promotions and Special
              Offers by joining our Newsletter
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="newsletter-input flex-1 px-3 py-2 text-xs border rounded-xl placeholder-opacity-100"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  backgroundColor: "transparent",
                  color: "rgba(209, 213, 219)",
                  outline: "none",
                  boxShadow: "none"
                } as React.CSSProperties}
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

      {/* Mobile spacer - 100px transparent container only on mobile */}
      <div className="md:hidden h-[100px]" />
    </footer>
    </>
  );
}
