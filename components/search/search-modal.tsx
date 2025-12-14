"use client";

import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, Suspense, useEffect, useState } from "react";
import Search, { SearchSkeleton } from "../layout/navbar/search";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const handleSearchDropdownChange = (isOpen: boolean) => {
    setIsSearchDropdownOpen(isOpen);
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Transition show={isOpen} as={Fragment}>
      {/* Backdrop */}
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          style={{ zIndex: 10050 }}
          onClick={onClose}
        />
      </Transition.Child>

      {/* Modal Panel */}
      <Transition.Child
        as={Fragment}
        enter="transition-all ease-out duration-300"
        enterFrom="opacity-0 scale-95 translate-y-4"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition-all ease-in duration-200"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 translate-y-4"
      >
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-4"
          style={{ zIndex: 10051 }}
        >
          <div
            className="rounded-lg shadow-xl overflow-hidden"
            style={{
              background: "rgb(45,45,52)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white">Search Products</h2>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Search Content */}
            <div className="p-4">
              {/* Search Bar */}
              <div className="mb-4 w-full relative">
                <Suspense fallback={<SearchSkeleton />}>
                  <Search keepResultsOpen={true} onDropdownStateChange={handleSearchDropdownChange} />
                </Suspense>
                
                {/* Overlay Layer - appears when search dropdown is open */}
                {isSearchDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 350px)", // search bar height + dropdown height
                      left: "0",
                      right: "0",
                      bottom: "-500px",
                      backgroundColor: "rgb(45, 45, 52)",
                      zIndex: "9997",
                      pointerEvents: "auto",
                    }}
                  />
                )}
              </div>

              {/* Additional Modal Content */}
              <div className="text-neutral-400 text-sm">
                <p>Start typing to search for products...</p>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
}
