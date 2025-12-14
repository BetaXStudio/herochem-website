"use client";
import CommunitySection from "components/home/community-section";
import HeroSection from "components/home/hero-section";
import LabTestsSection from "components/home/lab-tests-section";
import NewsSection from "components/home/news-section";
import { useEffect } from "react";

export default function HomePage() {
  // Set page title
  useEffect(() => {
    document.title = "HEROCHEM - Official Deus & Astera Reseller";
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Main area with animated slides */}
      <HeroSection />
      {/* News Section - Crypto discount banner and partner images (mobile only) */}
      <NewsSection />
      {/* Lab Tests Section - Quality assurance and lab reports */}
      <LabTestsSection />
      {/* Community Section - Telegram/WhatsApp and testimonials */}
      <CommunitySection />
    </main>
  );
}
