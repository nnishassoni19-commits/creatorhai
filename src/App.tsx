/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, Suspense, lazy } from 'react';
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

// Lazy-load non-critical desktop and interactive overlay components
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const desktopCheck = window.innerWidth >= 1024 && !window.matchMedia('(pointer: coarse)').matches;
    setIsDesktop(desktopCheck);

    if (!desktopCheck) return;

    // On desktop devices with mouse, dynamically load Lenis inertia and GSAP scrubs after idle
    let cleanupScroll: (() => void) | null = null;
    let cleanupLenis: (() => void) | null = null;

    const timer = setTimeout(() => {
      import('./lib/lenis').then(({ initSmoothScroll, destroyLenis }) => {
        initSmoothScroll();
        cleanupLenis = () => destroyLenis();
      });
      import('./hooks/useScrollAnimations').then(({ initScrollAnimations }) => {
        cleanupScroll = initScrollAnimations();
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
      cleanupLenis?.();
      cleanupScroll?.();
    };
  }, []);

  // Pause smooth scroll when Pitch Deck modal is active (Desktop only)
  useEffect(() => {
    if (!isDesktop) return;
    import('./lib/lenis').then(({ stopLenis, startLenis }) => {
      if (isDeckMode) {
        stopLenis();
      } else {
        startLenis();
      }
    });
  }, [isDeckMode, isDesktop]);

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

      {/* Interactive WebGL / Three.js 3D Constellation & Bridge Mesh (Desktop Only, Lazy) */}
      {isDesktop && (
        <Suspense fallback={null}>
          <ThreeCanvasBackground />
        </Suspense>
      )}

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

      {/* Canvas-based Real-time Waveform Stream & Scroll Progress HUD (Desktop Only, Lazy) */}
      {isDesktop && (
        <Suspense fallback={null}>
          <ScrollBridgeHUD />
        </Suspense>
      )}

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
