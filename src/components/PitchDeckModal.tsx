import React, { useState, useEffect } from 'react';
import { useAgency } from '../context/AgencyContext';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Printer,
  Sparkles,
  QrCode,
  ExternalLink,
  Layers,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  Video,
  PlaySquare,
  ShieldCheck,
  CheckCircle2,
  Play
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import {
  edtechStudentHeadphones,
  colgateSmileToothbrush,
  fashionIndianEthnic,
  techSmartphoneFlagship,
  vicksWellnessJar,
} from '../assets/images';

export const PitchDeckModal: React.FC = () => {
  const {
    isDeckMode,
    setIsDeckMode,
    caseStudies,
    categoryExperiences,
    contactInfo,
    themeConfig,
  } = useAgency();

  // Slide index
  // 0: Cover
  // 1: Who We Are & Philosophy
  // 2: 9-Step Working Process
  // 3: 05 — Industry Exposure (5 Categories)
  // 4: Case Study 01: THE SARKARI RISE (2-Page Spread)
  // 5: 07 — UGC & Creator Content (Solutions)
  // 6: 12 — Why CreatorHai? & Philosophy
  // 7: Let's Collaborate (Closing)
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  // Keyboard navigation
  useEffect(() => {
    if (!isDeckMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        setIsDeckMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDeckMode, totalSlides, setIsDeckMode]);

  if (!isDeckMode) return null;

  const handlePrint = () => {
    window.print();
  };

  const cs = caseStudies[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#07080b] flex flex-col justify-between text-white select-none overflow-hidden">
      {/* Top Deck Toolbar */}
      <div className="no-print h-14 px-3 sm:px-6 bg-[#0e0f14] border-b border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <BrandLogo variant="mark" size="sm" />
          <span className="font-bold tracking-tight text-white hidden sm:inline truncate">
            CREATORHAI — Pitch Deck
          </span>
          <span className="text-neutral-500 hidden sm:inline">•</span>
          <span className="text-neutral-400 font-mono text-[10px] sm:text-[11px] whitespace-nowrap">
            Slide {currentSlide + 1}/{totalSlides}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-mono text-[10px] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Representational Deck
          </span>
          <button
            onClick={handlePrint}
            aria-label="Print or export pitch deck to PDF"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
            title="Print / Save PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
          <button
            onClick={() => setIsDeckMode(false)}
            aria-label="Exit Pitch Deck Mode"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Exit Presentation (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Responsive Slide Canvas: 16:9 on desktop/tablet, adaptive height with smooth scroll on mobile */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
        <div
          id="pitch-deck-slide-container"
          className="w-full max-w-6xl md:aspect-[16/9] min-h-[75vh] md:min-h-0 md:max-h-[82vh] bg-[#101117] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden text-left"
        >
          {/* SLIDE 0: COVER */}
          {currentSlide === 0 && (
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
                  01 — COVER • AGENCY OVERVIEW
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                  style={{
                    backgroundColor: themeConfig.accent,
                    color: themeConfig.accentBtnText,
                  }}
                >
                  Creator Marketing Agency
                </span>
              </div>

              <div className="my-auto space-y-4">
                <div className="pb-2">
                  <BrandLogo variant="hero" size="xl" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Connecting Brands with the Right Creators.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                  We bring brands and creators together to build meaningful collaborations, authentic content, and impactful digital experiences.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-300 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Influencer Marketing</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">UGC</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Creator Discovery</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">D2C Marketing</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Campaign Management</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATORHAI — Connecting Brands with the Right Creators</span>
                <span className="font-mono">{contactInfo.website}</span>
              </div>
            </div>
          )}

          {/* SLIDE 1: WHO WE ARE */}
          {currentSlide === 1 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  02 — WHO WE ARE
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  We Build the Right Brand–Creator Connections.
                </h2>
                <div className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                  <p>
                    <strong className="text-white">CreatorHai</strong> is a creator marketing agency focused on helping brands connect with the right creators, create authentic content, and execute impactful influencer campaigns.
                  </p>
                  <p>
                    We believe successful collaborations go beyond follower counts. They are built on the right audience, creative alignment, genuine storytelling, and a clear understanding of brand objectives.
                  </p>
                  <p>
                    From creator discovery to campaign execution, we bridge the gap between brands and creators to make collaborations seamless, strategic, and meaningful.
                  </p>
                </div>
              </div>

              {/* Philosophy Callout */}
              <div className="my-auto p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                  Our Philosophy
                </span>
                <div className="text-base sm:text-xl font-display font-bold text-white tracking-tight">
                  Right Creators. Relevant Content. Meaningful Connections.
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATORHAI Pitch Deck</span>
                <span className="font-mono">Who We Are</span>
              </div>
            </div>
          )}

          {/* SLIDE 2: OUR WORKING PROCESS */}
          {currentSlide === 2 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  11 — OUR WORKING PROCESS
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  A Clear Process. Seamless Collaborations.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  We follow a structured approach to make creator partnerships easier for brands and creators.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 my-auto py-2">
                {[
                  { n: '01', title: 'UNDERSTAND', desc: 'Brand, audience & campaign objectives' },
                  { n: '02', title: 'STRATEGISE', desc: 'Approach based on requirements' },
                  { n: '03', title: 'DISCOVER', desc: 'Shortlist aligned creators' },
                  { n: '04', title: 'CONNECT', desc: 'Outreach & confirmations' },
                  { n: '05', title: 'CREATE', desc: 'Briefs & brand approvals' },
                  { n: '06', title: 'EXECUTE', desc: 'Publishing & deliverables' },
                  { n: '07', title: 'REVIEW', desc: 'Insights & campaign outcomes' },
                ].map((step) => (
                  <div key={step.n} className="p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
                    <span className="font-mono text-xs font-black" style={{ color: themeConfig.accent }}>
                      {step.n}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white mt-1">{step.title}</div>
                      <div className="text-[10px] text-neutral-400 leading-tight mt-1">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>From strategy to execution, we keep every connection moving.</span>
                <span className="font-mono">Working Process</span>
              </div>
            </div>
          )}

          {/* SLIDE 3: 05 — OUR INDUSTRY EXPOSURE */}
          {currentSlide === 3 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  05 — OUR INDUSTRY EXPOSURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  Industry Exposure. Creator-First Thinking.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-3xl">
                  Every industry has a unique story, and every brand deserves a distinctive voice.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 my-auto py-2">
                {[
                  {
                    n: '01',
                    cat: 'EDTECH & EDUCATION',
                    h: 'Making Learning More Relatable',
                    refs: 'upGrad | Simplilearn',
                    img: edtechStudentHeadphones,
                    color: '#38bdf8'
                  },
                  {
                    n: '02',
                    cat: 'FMCG & CONSUMER GOODS',
                    h: 'Making Everyday Brands More Memorable',
                    refs: 'Colgate | Everest Masala',
                    img: colgateSmileToothbrush,
                    color: '#f87171'
                  },
                  {
                    n: '03',
                    cat: 'FASHION & LIFESTYLE',
                    h: 'Turning Style Into Stories',
                    refs: 'Libas | Biba',
                    img: fashionIndianEthnic,
                    color: '#ec4899'
                  },
                  {
                    n: '04',
                    cat: 'TECHNOLOGY & ELECTRONICS',
                    h: 'Bringing Innovation Closer Through Creativity',
                    refs: 'Vivo | realme',
                    img: techSmartphoneFlagship,
                    color: '#60a5fa'
                  },
                  {
                    n: '05',
                    cat: 'HEALTH, WELLNESS & NUTRITION',
                    h: 'Inspiring Everyday Wellness',
                    refs: 'Vicks | Plant-Based Sugar Control',
                    img: vicksWellnessJar,
                    color: '#34d399'
                  },
                ].map((item) => (
                  <div key={item.n} className="rounded-2xl bg-black/60 border border-white/10 overflow-hidden flex flex-col justify-between group text-left">
                    <div className="h-24 sm:h-28 overflow-hidden relative">
                      <img
                        src={item.img}
                        alt={item.cat}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-white px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10">
                        {item.n} • {item.cat.split('&')[0].trim()}
                      </span>
                    </div>
                    <div className="p-3 flex flex-col justify-between flex-1">
                      <div className="text-xs font-bold text-white leading-snug">{item.h}</div>
                      <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-neutral-300 font-mono">
                        Ref: <strong className="text-white">{item.refs}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Different Categories. Different Audiences. One Creator-First Approach. <span className="text-amber-400/90 text-[10px] font-mono ml-2">(Representational References)</span></span>
                <span className="font-mono">Category Breadth</span>
              </div>
            </div>
          )}

          {/* SLIDE 4: CASE STUDY 01 — THE SARKARI RISE */}
          {currentSlide === 4 && cs && (
            <div className="h-full flex flex-col justify-between">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-white px-2 py-0.5 rounded bg-white/10">
                    CASE STUDY 01
                  </span>
                  <span className="font-bold text-white">{cs.brandName}</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-neutral-400">{cs.category}</span>
                </div>
                <span className="font-mono text-neutral-400">2-PAGE CANVA PITCH SPREAD</span>
              </div>

              {/* 2-Page Spread Body */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-auto overflow-hidden">
                {/* Page 1: Campaign Brief */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-black text-sm"
                        style={{ backgroundColor: themeConfig.accent }}
                      >
                        {cs.brandLogoText || 'TSR'}
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-neutral-400 uppercase">PAGE 1 — CAMPAIGN BRIEF</div>
                        <div className="text-sm font-bold text-white">{cs.title}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">{cs.creatorsCount}</span>
                  </div>

                  <div className="text-xs text-neutral-300">
                    <strong className="text-neutral-400 uppercase text-[10px] block mb-0.5">Objective:</strong>
                    {cs.objective}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.formatTags.slice(0, 4).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs pt-1 border-t border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">Execution:</span>
                    <p className="text-[11px] text-neutral-300 leading-snug">{cs.duration}</p>
                  </div>
                </div>

                {/* Page 2: Proof & Reels */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-mono text-neutral-400 uppercase">PAGE 2 — PROOF & REELS</span>
                      <span className="text-xs font-mono font-bold" style={{ color: themeConfig.accent }}>
                        {cs.resultStat}
                      </span>
                    </div>

                    {/* Video Still + Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="col-span-2 aspect-video rounded-xl overflow-hidden relative bg-black">
                        <img src={cs.videoThumbnail} alt={cs.title} className="w-full h-full object-cover opacity-85" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-black">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between p-2 rounded-xl bg-white/5 text-[10px]">
                        <div>
                          <div className="font-bold text-white">Live Proof</div>
                          <div className="text-neutral-400 mt-1">12 Creators</div>
                        </div>
                        <div className="font-mono text-emerald-400 font-bold">1M+ VIEWS</div>
                      </div>
                    </div>

                    {/* Creator Highlights */}
                    <div className="grid grid-cols-2 gap-1.5 mb-2">
                      {[
                        { name: 'Rohan Sharma', views: '320K' },
                        { name: 'Pooja Verma', views: '210K' },
                        { name: 'Amit Tyagi', views: '290K' },
                        { name: 'Simran Kaur', views: '380K' },
                      ].map((cr) => (
                        <div key={cr.name} className="px-2 py-1 rounded bg-white/5 text-[10px] flex items-center justify-between border border-white/5">
                          <span className="text-neutral-300 truncate">{cr.name}</span>
                          <span className="font-mono font-bold text-emerald-400">{cr.views}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-2 rounded-lg bg-white/5 text-[10px] italic text-neutral-300 border-l-2 border-white/40">
                      "{cs.campaignHighlight}"
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">Visit Live Campaign Proof</span>
                    <span className="font-mono text-white underline">{cs.qrValue}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI — 100% Working Campaign Proof • Representational Pitch Spread</span>
                <span className="font-mono">Section 2.0: Proof & Performance</span>
              </div>
            </div>
          )}

          {/* SLIDE 5: 07 — UGC & CREATOR CONTENT */}
          {currentSlide === 5 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  07 — UGC & CREATOR CONTENT
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  Authentic Content That Connects.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
                  We help brands create creator-generated content that brings their products and stories to life through authentic experiences and creative storytelling.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-auto">
                {[
                  'UGC Video Production',
                  'Product Demonstration Videos',
                  'Lifestyle & Product Integration',
                  'Testimonial-Style Content',
                  'Unboxing & First-Impression',
                  'Social Media Creatives',
                  'Ad-Ready Creator Content',
                  'Content Usage Rights',
                ].map((sol, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                    <div className="font-mono text-[10px] text-neutral-400">0{idx + 1}</div>
                    <div className="text-xs font-bold text-white mt-1">{sol}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Make Your Brand Feel More Human Through Creator-Led Content.</span>
                <span className="font-mono">UGC Solutions</span>
              </div>
            </div>
          )}

          {/* SLIDE 6: 12 — WHY CREATORHAI? */}
          {currentSlide === 6 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  12 — WHY CREATORHAI?
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  We Believe the Right Connections Create Better Collaborations.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-3xl leading-relaxed">
                  Creator marketing is not just about connecting brands with influencers. It's about understanding what makes a collaboration relevant, authentic, and valuable.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-auto">
                {[
                  { title: 'Creator-First Approach', desc: 'Prioritizing audience alignment over plain follower counts.' },
                  { title: 'End-to-End Execution', desc: 'From first briefing to live links and final performance review.' },
                  { title: 'Strategic Alignment', desc: 'Matching brand voice with natural creator storytelling.' },
                  { title: 'Focus on Value', desc: 'Campaigns engineered for real awareness, trust, and results.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-xs font-mono text-neutral-400">0{idx + 1}</div>
                    <div className="text-sm font-bold text-white mt-1">{item.title}</div>
                    <div className="text-xs text-neutral-300 mt-1 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Right Creators. Relevant Content. Meaningful Connections.</span>
                <span className="font-mono">Why Us</span>
              </div>
            </div>
          )}

          {/* SLIDE 7: LET'S COLLABORATE / CLOSING */}
          {currentSlide === 7 && (
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  CONNECT WITH US
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">
                  Get In Touch
                </span>
              </div>

              <div className="my-auto space-y-4">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
                    THANK YOU.
                  </h2>
                  <div className="text-xl sm:text-2xl font-bold text-neutral-200 mt-1">
                    Let's Build Something Meaningful Together.
                  </div>
                  <div className="text-sm font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                    CREATORHAI — Connecting Brands with the Right Creators.
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                  We bring brands and creators together to build meaningful collaborations, authentic content, and impactful digital experiences.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold">Email</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.email}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold">Instagram</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.instagram}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold">Direct Desk</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.phone}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold">Portal</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.website}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>© {new Date().getFullYear()} CREATORHAI. All rights reserved.</span>
                <span className="font-mono">Pitch Deck End</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Deck Controls */}
      <div className="no-print h-14 sm:h-16 px-3 sm:px-6 bg-[#0e0f14] border-t border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <span className="font-mono text-[11px] sm:text-xs text-neutral-300 px-1 sm:px-2 whitespace-nowrap">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next Slide"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Slide Selector dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsDeckMode(false)}
          className="text-xs text-neutral-400 hover:text-white transition-colors py-1 px-2 rounded-lg bg-white/5 sm:bg-transparent"
        >
          Close (Esc)
        </button>
      </div>
    </div>
  );
};
