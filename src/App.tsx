/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AgencyProvider, useAgency } from './context/AgencyContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ApproachPipeline } from './components/ApproachPipeline';
import { ExperienceStats } from './components/ExperienceStats';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { UgcPortfolio } from './components/UgcPortfolio';
import { LocalActivations } from './components/LocalActivations';
import { MoreExperienceGrid } from './components/MoreExperienceGrid';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { PitchDeckModal } from './components/PitchDeckModal';
import { EditBar } from './components/EditBar';
import { ThreeCanvasBackground } from './components/ThreeCanvasBackground';
import { ScrollBridgeHUD } from './components/ScrollBridgeHUD';
import { initSmoothScroll, stopLenis, startLenis } from './lib/lenis';
import { useScrollAnimations } from './hooks/useScrollAnimations';

const AppContent: React.FC = () => {
  const { themeConfig, isDeckMode } = useAgency();

  // Initialize master GSAP scroll-driven deconstruction & depth timelines
  useScrollAnimations();

  // Initialize Lenis smooth inertia scrolling
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      lenis.destroy();
    };
  }, []);

  // Pause smooth scroll when Pitch Deck modal is active
  useEffect(() => {
    if (isDeckMode) {
      stopLenis();
    } else {
      startLenis();
    }
  }, [isDeckMode]);

  return (
    <div
      className="min-h-screen text-[#f3f4f6] font-sans transition-colors duration-500 relative"
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

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* About Section & 4 Capabilities */}
        <AboutSection />

        {/* 9-Step Approach Pipeline */}
        <ApproachPipeline />

        {/* Experience & Core Numbers */}
        <ExperienceStats />

        {/* 2-Page Spread Case Studies (01-06) */}
        <CaseStudiesSection />

        {/* UGC Portfolio */}
        <UgcPortfolio />

        {/* Local Creator Activations & 5 Focus Pillars */}
        <LocalActivations />

        {/* More Campaign Experience Category Grid */}
        <MoreExperienceGrid />

        {/* Why CREATOR HAI & Match Formula */}
        <WhyUsSection />

        {/* Contact & Campaign Brief Builder */}
        <ContactSection />
      </main>

      {/* Canvas-based Real-time Waveform Stream & Scroll Progress HUD */}
      <ScrollBridgeHUD />

      {/* Canva 16:9 Pitch Deck Presentation Mode */}
      <PitchDeckModal />

      {/* Floating Edit Controls Bar */}
      <EditBar />
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
