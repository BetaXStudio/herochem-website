"use client";

import { Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Search, { SearchSkeleton } from "../layout/navbar/search";

interface SearchModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function SearchModal({
  isOpen,
  onCloseAction,
}: SearchModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const modal = (
    <Transition show={isOpen}>
      {/* Backdrop */}
      <Transition.Child
        as="div"
        enter="transition-opacity ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
        onClick={onCloseAction}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      />

      {/* Modal Panel */}
      <Transition.Child
        as="div"
        enter="transition-all ease-in-out duration-300"
        enterFrom="transform -translate-y-full opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition-all ease-in-out duration-200"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-full opacity-0"
        className="fixed left-0 right-0 z-50 md:hidden flex flex-col"
        style={{
          top: "88px",
          height: "calc(100vh - 88px)",
          background: "#2d2d34",
          backdropFilter: "blur(20px)",
          pointerEvents: "auto",
        }}
      >
        {/* Close Button - Up Arrow at top */}
        <div 
          className="absolute left-0 right-0 flex justify-center items-center z-10 transition-all duration-300" 
          style={{ 
            top: "550px",
            opacity: isDropdownOpen ? 0 : 1,
            pointerEvents: isDropdownOpen ? "none" : "auto"
          }}
        >
          <button
            onClick={onCloseAction}
            className="group p-2 rounded-full transition-all duration-300 hover:bg-red-600/20"
            aria-label="Close modal"
          >
            <ChevronUpIcon className="h-6 w-6 text-white/60 group-hover:text-red-400 transition-colors duration-300" />
          </button>
        </div>

        <div
          className="flex flex-col h-full overflow-y-auto relative"
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="pt-6 px-4 space-y-4">
            {/* Search Bar - Professional Search Component */}
            <div className="w-full relative" style={{ zIndex: "10001" }}>
              <Suspense fallback={<SearchSkeleton />}>
                <Search 
                  keepResultsOpen={true}
                  onDropdownStateChange={setIsDropdownOpen}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );

  return createPortal(modal, document.body);
}
