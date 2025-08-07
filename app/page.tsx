
"use client";
import CommunitySection, { CommunityModal } from 'components/home/community-section';
import HeroSection from 'components/home/hero-section';
import LabTestsSection, { LabTestsModal } from 'components/home/lab-tests-section';
import { useState } from 'react';



export default function HomePage() {
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isLabReportsModalOpen, setIsLabReportsModalOpen] = useState(false);

  const openCommunityModal = () => setIsCommunityModalOpen(true);
  const closeCommunityModal = () => setIsCommunityModalOpen(false);
  const openLabReportsModal = () => setIsLabReportsModalOpen(true);
  const closeLabReportsModal = () => setIsLabReportsModalOpen(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Main area with animated slides */}
      <HeroSection 
        onOpenCommunityModal={openCommunityModal}
        onOpenLabReportsModal={openLabReportsModal}
      />
      {/* Lab Tests Section - Quality assurance and lab reports */}
      <LabTestsSection onOpenLabReportsModal={openLabReportsModal} />
      {/* Community Section - Telegram/WhatsApp and testimonials */}
      <CommunitySection onOpenCommunityModalAction={openCommunityModal} />
      {/* Community Modal rendered once here */}
      <CommunityModal isOpen={isCommunityModalOpen} onCloseAction={closeCommunityModal} />
      {/* Lab Reports Modal rendered once here */}
      <LabTestsModal isOpen={isLabReportsModalOpen} onClose={closeLabReportsModal} />
    </main>
  );
}
