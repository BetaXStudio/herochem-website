"use client";
import CommunitySection from "components/home/community-section";
import HeroSection from "components/home/hero-section";
import LabTestsSection from "components/home/lab-tests-section";
import NewsSection from "components/home/news-section";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isReady, setIsReady] = useState(false);

  // Set page title and wait for layout to be stable before rendering
  useEffect(() => {
    document.title = "HEROCHEM - Official Deus & Astera Reseller";
    
    // Wait for layout to stabilize:
    // - Double rAF ensures browser has painted
    // - setTimeout(0) ensures React state updates are flushed
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsReady(true);
        }, 0);
      });
    });
  }, []);

  // Show nothing until ready (prevents double-render flash)
  if (!isReady) {
    return <main className="min-h-screen" style={{ background: "#2d2d34" }} />;
  }

  return (
    <div style={{ background: "#2d2d34", minHeight: "100vh" }}>
      <main 
        className="min-h-screen"
        style={{
          background: "#2d2d34",
          animation: "fadeInPage 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        }}
      >
        {/* Hero Section - Main area with animated slides */}
        <HeroSection />
        {/* News Section - Crypto discount banner and partner images (mobile only) */}
        <NewsSection />
        {/* Lab Tests Section - Quality assurance and lab reports */}
        <LabTestsSection />
        {/* Community Section - Telegram/WhatsApp and testimonials */}
        <CommunitySection />
      </main>
    </div>
  );
}
