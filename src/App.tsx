/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, Suspense, lazy } from 'react';
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
import { initSmoothScroll, stopLenis, startLenis } from './lib/lenis';
import { useScrollAnimations } from './hooks/useScrollAnimations';

// Lazy-load non-critical, below-the-fold, and interactive overlay components
const ThreeCanvasBackground = lazy(() =>
  import('./components/ThreeCanvasBackground').then((m) => ({ default: m.ThreeCanvasBackground }))
);
const ScrollBridgeHUD = lazy(() =>
  import('./components/ScrollBridgeHUD').then((m) => ({ default: m.ScrollBridgeHUD }))
);
const PitchDeckModal = lazy(() =>
  import('./components/PitchDeckModal').then((m) => ({ default: m.PitchDeckModal }))
);
const EditBar = lazy(() =>
  import('./components/EditBar').then((m) => ({ default: m.EditBar }))
);

const AppContent: React.FC = () => {
  const { themeConfig, isDeckMode, isEditMode } = useAgency();

  // Initialize master GSAP scroll-driven deconstruction & depth timelines after idle
  useScrollAnimations();

  // Initialize Lenis smooth inertia scrolling
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      lenis?.destroy();
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

      {/* Interactive WebGL / Three.js 3D Constellation & Bridge Mesh (Lazy) */}
      <Suspense fallback={null}>
        <ThreeCanvasBackground />
      </Suspense>

      {/* Navigation Header */}
      <Navbar />

      <main className="relative z-10" id="main-content">
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
      <Suspense fallback={null}>
        <ScrollBridgeHUD />
      </Suspense>

      {/* Canva 16:9 Pitch Deck Presentation Mode (Mounted only when active) */}
      {isDeckMode && (
        <Suspense fallback={null}>
          <PitchDeckModal />
        </Suspense>
      )}

      {/* Floating Edit Controls Bar */}
      {isEditMode && (
        <Suspense fallback={null}>
          <EditBar />
        </Suspense>
      )}
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
