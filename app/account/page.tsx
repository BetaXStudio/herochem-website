"use client";

import { Suspense, useEffect, useState } from "react";
import AccountSidebar from "./AccountSidebar";
import AddressBook from "./AddressBook";
import OrderHistory from "./OrderHistory";
import ProfileSettings from "./ProfileSettings";
import RewardPoints from "./RewardPoints";
import SecuritySettings from "./SecuritySettings";

function AccountContent() {
  const [selectedSection, setSelectedSection] = useState("PROFILE SETTINGS");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "HEROCHEM - MY ACCOUNT";
  }, []);

  const accountSections = [
    "PROFILE SETTINGS",
    "SECURITY SETTINGS",
    "ORDER HISTORY",
    "ADDRESS BOOK",
    "REWARD POINTS",
  ];

  return (
    <div
      className="min-h-screen bg-neutral-950 text-neutral-100 relative"
      style={{
        animation:
          "fadeInPage 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      }}
    >
      {/* Mobile Menu Button */}
      <button
        onClick={() => {}} // Deaktiviert für visuellen Zweck
        className="md:hidden fixed left-0 z-30 bg-[#e91111] text-white px-1 py-4 rounded-r-lg shadow-lg transition-all duration-300 hover:bg-[#d10f0f] hover:shadow-xl"
        style={{
          animation:
            "slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
          animationDelay: "0.3s",
          opacity: "0",
          width: "20px",
          top: "10px",
        }}
      >
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Transparenter Klick-Layer über dem roten Menu Button - größere Hitbox für Mobile */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed left-0 z-40 bg-transparent transition-all duration-300"
        style={{
          animation:
            "slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
          animationDelay: "0.3s",
          opacity: "0",
          width: "60px", // Viel größere Breite für bessere Hitbox
          height: "80px", // Größere Höhe für bessere Hitbox
          top: "0px", // Startet von ganz oben
          left: "0px",
        }}
        aria-label="Menu öffnen"
      />

      <div className="flex">
        {/* Sidebar */}
        <AccountSidebar
          sections={accountSections}
          selectedSection={selectedSection}
          onSectionChangeAction={setSelectedSection}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <div
          className="flex-1 p-4 md:p-6 md:ml-0 pl-4 pr-4 md:pl-6 md:pr-6"
          style={{
            animation:
              "fadeInPage 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
            animationDelay: "0.2s",
            opacity: "0",
          }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header with red line */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-4 text-center">
                {selectedSection}
              </h1>
              <div
                className="h-[2px] mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(233, 17, 17, 0.1) 0%, #e91111 50%, rgba(233, 17, 17, 0.1) 100%)",
                  width: "100%",
                }}
              />
            </div>

            {/* Content Area */}
            <div className="bg-neutral-900 rounded-lg p-4 md:p-6 min-h-[400px]">
              {selectedSection === "PROFILE SETTINGS" ? (
                <ProfileSettings />
              ) : selectedSection === "SECURITY SETTINGS" ? (
                <SecuritySettings />
              ) : selectedSection === "ORDER HISTORY" ? (
                <OrderHistory />
              ) : selectedSection === "ADDRESS BOOK" ? (
                <AddressBook />
              ) : selectedSection === "REWARD POINTS" ? (
                <RewardPoints />
              ) : (
                <>
                  <h2 className="text-xl text-white mb-4">{selectedSection}</h2>
                  <p className="text-neutral-300">
                    Content for {selectedSection} will be implemented here.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountContent />
    </Suspense>
  );
}
