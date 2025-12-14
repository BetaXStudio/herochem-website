"use client";

import { TruckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useModal } from "../../../contexts/modal-context";

export default function DeliveryModalWrapper() {
  const { isDeliveryModalOpen, setDeliveryModalOpen } = useModal();

  useEffect(() => {
    if (isDeliveryModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isDeliveryModalOpen]);

  if (!isDeliveryModalOpen) return null;

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
              Delivery
            </h2>
          </div>
          <button
            onClick={() => setDeliveryModalOpen(false)}
            className="p-2 rounded-md transition-colors duration-200 group"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] max-[800px]:max-h-[calc(90vh-225px)]">
          <div className="text-center mb-6">
            <TruckIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          </div>
          <div className="prose prose-gray max-w-none">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We offer worldwide shipping and flexible delivery options with tracking and insurance. All orders are carefully packaged and dispatched quickly to ensure safe delivery. For more information check out our FAQ. or send us a mail to our support address down below.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
