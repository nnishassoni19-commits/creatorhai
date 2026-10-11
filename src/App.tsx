/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AgencyProvider, useAgency } from './context/AgencyContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndianCreatorsShowcase } from './components/IndianCreatorsShowcase';
import { AboutSection } from './components/AboutSection';
import { ApproachPipeline } from './components/ApproachPipeline';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { UgcPortfolio } from './components/UgcPortfolio';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { ThreeCanvasBackground } from './components/ThreeCanvasBackground';
import { ScrollBridgeHUD } from './components/ScrollBridgeHUD';
import { PitchDeckModal } from './components/PitchDeckModal';
import { TopInquiryModal } from './components/TopInquiryModal';
import { RepresentationalModal } from './components/RepresentationalModal';
import { initSmoothScroll, stopLenis, startLenis } from './lib/lenis';
import { useScrollAnimations } from './hooks/useScrollAnimations';

const AppContent: React.FC = () => {
  const {
    themeConfig,
    isDeckMode,
    isInquiryModalOpen,
    inquiryModalMode,
    closeInquiryModal,
  } = useAgency();

  // Initialize master GSAP scroll-driven 3D deconstruction & depth animations
  useScrollAnimations();

  // Initialize Lenis smooth inertia scrolling
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      lenis?.destroy();
    };
  }, []);

  // Pause smooth scroll when Pitch Deck modal or Inquiry modal is active
  useEffect(() => {
    if (isDeckMode || isInquiryModalOpen) {
      stopLenis();
    } else {
      startLenis();
    }
  }, [isDeckMode, isInquiryModalOpen]);

  return (
    <div
      className="min-h-screen w-full max-w-full overflow-x-hidden text-[#f3f4f6] font-sans transition-colors duration-500 relative"
      style={{ backgroundColor: themeConfig.canvasBg }}
    >
      <style>{`
        ::selection {
          background-color: ${themeConfig.selectionBg};
          color: ${themeConfig.accentBtnText};
        }
      `}</style>

      {/* Interactive WebGL / Three.js 3D Constellation & Bridge Mesh */}
      <ThreeCanvasBackground />

      {/* Navigation Header */}
      <Navbar />

      <main className="relative z-10" id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* 02 — Trending Indian Creators & Celebrity Moving Cards & 3D Grid */}
        <IndianCreatorsShowcase />

        {/* About Section & 4 Capabilities */}
        <AboutSection />

        {/* 9-Step Approach Pipeline */}
        <ApproachPipeline />

        {/* 06 — Featured Case Study • Brand–Creator Collaborations (Creator-First Thinking) */}
        <CaseStudiesSection />

        {/* 07 — UGC & Creator Content Solutions */}
        <UgcPortfolio />

        {/* Why CREATOR HAI & Philosophy */}
        <WhyUsSection />

        {/* Contact & Campaign Brief Builder */}
        <ContactSection />
      </main>

      {/* Canvas-based Real-time Waveform Stream & Scroll Progress HUD */}
      <ScrollBridgeHUD />

      {/* 16:9 Pitch Deck Presentation Mode */}
      {isDeckMode && <PitchDeckModal />}

      {/* Global Top Inquiry & Connect Modal (Brand & Creator Two Forms) */}
      <TopInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={closeInquiryModal}
        defaultMode={inquiryModalMode}
      />

      {/* Representational Portfolio Transparency Modal */}
      <RepresentationalModal />
    </div>
  );
};

export default function App() {
  return (
    <AgencyProvider>
      <AppContent />
    </AgencyProvider>
  );
}
