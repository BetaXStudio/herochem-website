"use client";

import { BeakerIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useModal } from "../../contexts/modal-context";

export default function LabTestsModalWrapper() {
  const { isLabReportsModalOpen, setLabReportsModalOpen } = useModal();

  // Block body scroll when modal is open
  useEffect(() => {
    if (isLabReportsModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isLabReportsModalOpen]);

  if (!isLabReportsModalOpen) return null;

  return (
    <>
      {/* Modal Container - No backdrop here, global backdrop handles it */}
      <div
        className="fixed inset-0 z-[10030] flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[107px] max-[800px]:pb-[50px] max-[800px]:top-0 min-[801px]:top-[99px]"
        style={{ touchAction: "none", pointerEvents: "none" }}
      >
        {/* Modal with animation */}
        <div
          className="relative bg-white shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] max-[800px]:max-h-[calc(90vh-105px)]"
          style={{
            backgroundColor: 'white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            borderRadius: '0.75rem',
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
              style={{ fontFamily: 'Calibri, Arial, sans-serif' }}
            >
              Laboratory Test Reports
            </h2>
          </div>
          <button
            onClick={() => setLabReportsModalOpen(false)}
            className="p-2 rounded-md transition-colors duration-200 group"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
          </button>
        </div>

        <div className="p-8 text-center">
          <div className="mb-6">
            <BeakerIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Pending Laboratory Tests
            </h3>
            <p className="text-gray-600">
              Laboratory reports are currently being processed and will be
              available soon.
            </p>
          </div>

          <div className="text-left rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-3">
              What we test for:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Product purity and potency</li>
              <li>• Microbiological safety</li>
              <li>• Complete chemical composition</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
