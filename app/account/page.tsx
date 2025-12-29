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
  const [isReady, setIsReady] = useState(false);

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

  // Set page title and wait for navbar to be stable before rendering
  useEffect(() => {
    document.title = "HEROCHEM - MY ACCOUNT";
    
    // Small delay to wait for navbar to finish rendering/auth check
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Show nothing until ready (prevents double-render flash)
  if (!isReady) {
    return <div className="min-h-screen" style={{ background: "#2d2d34" }} />;
  }

  return (
    <>
      {/* Responsive padding for desktop navbar + background for transition */}
      <style>{`
        @media (min-width: 768px) {
          .account-page-container {
            padding-top: 110px !important;
          }
        }
        /* Ensure background color is visible during page transition */
        body {
          background-color: #2d2d34;
        }
        /* Fade-only animation without translateY to avoid black background showing */
        @keyframes fadeInOnly {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      <div
        className="min-h-screen relative account-page-container"
        style={{
          background: "#2d2d34",
          animation:
            "fadeInOnly 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        }}
      >
      {/* Main Content Container - matches checkout modal style */}
      <div
        className="w-full px-4 pt-4 pb-8"
        style={{
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
              animation:
                "fadeInPage 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
              animationDelay: "0.1s",
              opacity: "0",
            }}
          >
            <div className="flex">
              {/* Desktop Sidebar Menu - only visible on md and up */}
              <div className="hidden md:flex flex-col py-6 pl-6 pr-4" style={{ minWidth: "200px" }}>
                <nav className="flex flex-col gap-2" style={{ marginLeft: "4px" }}>
                  <button
                    onClick={() => setSelectedSection("PROFILE SETTINGS")}
                    className={`px-2 py-2 rounded-lg font-medium text-left transition-all duration-200 text-sm ${
                      selectedSection === "PROFILE SETTINGS"
                        ? "text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    style={selectedSection === "PROFILE SETTINGS" ? {
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                    } : undefined}
                  >
                    Profile Settings
                  </button>
                  <button
                    onClick={() => setSelectedSection("ORDER HISTORY")}
                    className={`px-2 py-2 rounded-lg font-medium text-left transition-all duration-200 text-sm ${
                      selectedSection === "ORDER HISTORY"
                        ? "text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    style={selectedSection === "ORDER HISTORY" ? {
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                    } : undefined}
                  >
                    Order History
                  </button>
                  <button
                    onClick={() => setSelectedSection("ADDRESS BOOK")}
                    className={`px-2 py-2 rounded-lg font-medium text-left transition-all duration-200 text-sm ${
                      selectedSection === "ADDRESS BOOK"
                        ? "text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    style={selectedSection === "ADDRESS BOOK" ? {
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                    } : undefined}
                  >
                    Address Book
                  </button>
                  <button
                    onClick={() => setSelectedSection("REWARD POINTS")}
                    className={`px-2 py-2 rounded-lg font-medium text-left transition-all duration-200 text-sm ${
                      selectedSection === "REWARD POINTS"
                        ? "text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    style={selectedSection === "REWARD POINTS" ? {
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                    } : undefined}
                  >
                    Reward Points
                  </button>
                </nav>
              </div>
              
              {/* Vertical Divider - only visible on md and up */}
              <div 
                className="hidden md:block self-stretch" 
                style={{ 
                  width: "1px", 
                  backgroundColor: "#e5e7eb",
                  marginTop: "24px",
                  marginBottom: "24px"
                }}
              ></div>
              
              {/* Main Content */}
              <div className="flex-1 p-4 md:p-6" style={{ paddingTop: "30px" }}>
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
    </div>
    </>
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
