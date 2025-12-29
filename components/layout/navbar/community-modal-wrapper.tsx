"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useModal } from "../../../contexts/modal-context";

export default function CommunityModalWrapper() {
  const { isCommunityModalOpen, setCommunityModalOpen } = useModal();

  useEffect(() => {
    if (isCommunityModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isCommunityModalOpen]);

  if (!isCommunityModalOpen) return null;

  const handleTelegramJoin = () => {
    // Redirect to Telegram channel
    window.open("https://t.me/herochemOfficial", "_blank");
  };

  return (
    <>
      {/* Modal Container - No backdrop here, global backdrop handles it */}
      <div
        className="fixed inset-0 z-[10030] flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[107px] max-[800px]:pb-[50px] max-[800px]:top-0 min-[801px]:top-[99px]"
        style={{ touchAction: "none", pointerEvents: "none" }}
      >
        {/* Modal with animation */}
        <div
          className="relative bg-white shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] max-[800px]:max-h-[calc(90vh-105px)]"
          style={{
            backgroundColor: "white",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            animation: "modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            borderRadius: "0.75rem",
            touchAction: "auto",
            pointerEvents: "auto",
          }}
        >
          <div
            className="sticky top-0 flex items-center justify-between border-b"
            style={{
              borderColor: 'rgb(45,45,52)',
              backgroundColor: 'rgb(45,45,52)',
              borderTopLeftRadius: '0.75rem',
              borderTopRightRadius: '0.75rem',
              margin: '-1px 0 -1px 0',
              padding: '12px 16px'
            }}
          >
            <div>
              <h2
                className="text-lg font-medium text-white"
                style={{ fontFamily: "Calibri, Arial, sans-serif" }}
              >
                Join the Community
              </h2>
            </div>
            <button
              onClick={() => setCommunityModalOpen(false)}
              className="p-2 rounded-md transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
            </button>
          </div>

          <div
            className="p-6 overflow-y-auto flex-1"
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y",
              overscrollBehavior: "contain",
            }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Become Part of Our Community
              </h3>
              <p className="text-gray-600">
                Get exclusive access to offers, news and direct support
              </p>
            </div>

            <div className="grid md:grid-cols-1 max-[800px]:grid-cols-1 gap-6 pb-[20px]">
              {/* Telegram Card */}
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Telegram Channel
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Fast updates, exclusive offers and direct contact
                  </p>
                  <button
                    onClick={handleTelegramJoin}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 lg:py-3 px-4 rounded-xl font-medium lg:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Join Telegram
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
