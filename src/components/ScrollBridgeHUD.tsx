import React, { useEffect, useRef, useState } from 'react';
import { useAgency } from '../context/AgencyContext';
import { getLenis } from '../lib/lenis';
import { Compass, ArrowUp } from 'lucide-react';

export const ScrollBridgeHUD: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeConfig } = useAgency();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('Hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = [
    { id: 'hero', label: 'Top', name: 'Intro' },
    { id: 'about', label: 'About', name: 'Agency' },
    { id: 'approach', label: 'Approach', name: '9-Step' },
    { id: 'experience', label: 'Experience', name: 'Numbers' },
    { id: 'case-studies', label: 'Cases', name: 'Spreads' },
    { id: 'ugc', label: 'UGC', name: 'Portfolio' },
    { id: 'local', label: 'Local', name: 'Outlets' },
    { id: 'why-us', label: 'Why Us', name: 'Formula' },
    { id: 'contact', label: 'Contact', name: 'Proposal' },
  ];

  // Canvas particle stream effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 160);
    let height = (canvas.height = 40);

    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle glowing scroll-driven waveform
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = themeConfig.accent;
      ctx.shadowColor = themeConfig.accent;
      ctx.shadowBlur = 8;

      for (let x = 0; x < width; x++) {
        const progressFactor = Math.sin((x / width) * Math.PI);
        const y =
          height / 2 +
          Math.sin(x * 0.05 + phase) * (8 * progressFactor) +
          Math.cos(x * 0.03 - phase * 0.5) * (4 * progressFactor);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Second complementary wave
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = themeConfig.secondaryAccent;
      ctx.shadowColor = themeConfig.secondaryAccent;
      ctx.shadowBlur = 4;

      for (let x = 0; x < width; x++) {
        const progressFactor = Math.sin((x / width) * Math.PI);
        const y =
          height / 2 +
          Math.sin(x * 0.04 - phase * 1.2) * (6 * progressFactor);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      phase += 0.04;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeConfig.accent, themeConfig.secondaryAccent]);

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const progress = Math.min(Math.max(current / Math.max(totalScroll, 1), 0), 1);
      setScrollProgress(progress);
      setShowBackToTop(current > 600);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35) {
            setActiveSection(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Scroll Progress Bar (Minimalist & Smooth) */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/5">
        <div
          className="h-full transition-all duration-75"
          style={{
            width: `${scrollProgress * 100}%`,
            backgroundColor: themeConfig.accent,
            boxShadow: `0 0 10px ${themeConfig.accent}`,
          }}
        />
      </div>

      {/* Desktop Floating HUD / Interactive Timeline at bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 select-none">
        {/* Real-time WebGL/Canvas Wave Stream */}
        <div className="rounded-2xl bg-[#0f1016]/90 border border-white/10 p-2 shadow-2xl backdrop-blur-md flex items-center gap-3">
          <canvas
            ref={canvasRef}
            className="w-28 h-8 rounded-lg opacity-85"
            width={160}
            height={40}
          />
          <div className="pr-3 text-left border-l border-white/10 pl-3">
            <div className="text-[9px] font-mono tracking-wider uppercase text-neutral-400">
              Active Stage
            </div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: themeConfig.accent }}
              />
              <span>{activeSection}</span>
            </div>
          </div>
          <div className="pr-2 font-mono text-[11px] font-bold text-neutral-400">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>

        {/* Back to Top quick button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-2xl bg-[#14151e]/90 border border-white/15 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl backdrop-blur-md"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
};
