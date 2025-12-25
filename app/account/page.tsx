"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import AddressBook from "./AddressBook";
import OrderHistory from "./OrderHistory";
import ProfileSettings from "./ProfileSettings";
import RewardPoints from "./RewardPoints";
import SecuritySettings from "./SecuritySettings";

function AccountContent() {
  const searchParams = useSearchParams();
  const [selectedSection, setSelectedSection] = useState("PROFILE SETTINGS");

  // Map URL parameter to section name
  const sectionMap: Record<string, string> = {
    "profile": "PROFILE SETTINGS",
    "security": "SECURITY SETTINGS",
    "orders": "ORDER HISTORY",
    "addresses": "ADDRESS BOOK",
    "rewards": "REWARD POINTS",
  };

  // Read section from URL parameter on mount and when it changes
  useEffect(() => {
    const sectionParam = searchParams.get("section");
    if (sectionParam && sectionMap[sectionParam]) {
      setSelectedSection(sectionMap[sectionParam]);
    }
  }, [searchParams]);

  // Set page title
  useEffect(() => {
    document.title = "HEROCHEM - MY ACCOUNT";
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "#2d2d34",
        animation:
          "fadeInPage 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      }}
    >
      {/* Main Content Container - matches checkout modal style */}
      <div
        className="w-full px-4 pt-4 pb-8"
        style={{
          animation:
            "fadeInPage 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
          animationDelay: "0.1s",
          opacity: "0",
          marginTop: "2px",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Content Area - white background like modals */}
          <div 
            className="rounded-xl overflow-hidden"
            style={{
              backgroundColor: "white",
              border: "2px solid rgb(45, 45, 52)",
              boxShadow: "inset 0 4px 16px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="p-4 md:p-6" style={{ paddingTop: "30px" }}>
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
                  <h2 className="text-xl text-gray-900 mb-4">{selectedSection}</h2>
                  <p className="text-gray-600">
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
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#2d2d34" }}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    }>
      <AccountContent />
    </Suspense>
  );
}
