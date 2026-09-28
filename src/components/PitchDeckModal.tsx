import React, { useState, useEffect } from 'react';
import { useAgency } from '../context/AgencyContext';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Printer,
  Maximize2,
  Sparkles,
  QrCode,
  ExternalLink,
  Layers,
  Users,
  Video,
  Eye,
  CheckCircle2,
  Play
} from 'lucide-react';

export const PitchDeckModal: React.FC = () => {
  const {
    isDeckMode,
    setIsDeckMode,
    caseStudies,
    themeConfig,
    contactInfo,
    ugcCampaigns,
    localActivations,
  } = useAgency();

  // Slide index
  // 0: Cover
  // 1: About & Services
  // 2: 9-Step Approach
  // 3: Experience & Metrics
  // 4..9: Case Studies 01 to 06 (Full 2-page spreads)
  // 10: UGC Portfolio
  // 11: Local Activations
  // 12: Why Us & Match Formula
  // 13: Let's Collaborate (Closing)
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4 + caseStudies.length + 4; // 14 slides

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

  return (
    <div className="fixed inset-0 z-50 bg-[#07080b] flex flex-col justify-between text-white select-none overflow-hidden">
      {/* Top Deck Toolbar */}
      <div className="no-print h-14 px-6 bg-[#0e0f14] border-b border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span
            className="w-6 h-6 rounded-md flex items-center justify-center font-display font-extrabold text-[10px]"
            style={{
              backgroundColor: themeConfig.accent,
              color: themeConfig.accentBtnText,
            }}
          >
            CH
          </span>
          <span className="font-display font-bold tracking-tight text-white hidden sm:inline">
            CREATOR HAI — BEST INFLUENCER MARKETING AGENCY DECK
          </span>
          <span className="text-neutral-500 hidden sm:inline">|</span>
          <span className="font-mono text-neutral-400">
            Slide {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            aria-label="Export or Print Pitch Deck"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 transition-colors"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export / Print Deck</span>
          </button>

          <button
            onClick={() => setIsDeckMode(false)}
            aria-label="Exit Deck Mode"
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            title="Exit Deck Mode (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Canvas (16:9 Presentation Stage) */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-auto">
        <div className="w-full max-w-6xl aspect-[16/9] bg-[#111218] rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden text-left">
          {/* SLIDE 0: COVER */}
          {currentSlide === 0 && (
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
                  AGENCY CREDENTIALS & PORTFOLIO
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                  style={{
                    backgroundColor: themeConfig.accent,
                    color: themeConfig.accentBtnText,
                  }}
                >
                  Confidential Pitch
                </span>
              </div>

              <div className="my-auto space-y-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-2xl shadow-xl"
                  style={{
                    backgroundColor: themeConfig.accent,
                    color: themeConfig.accentBtnText,
                  }}
                >
                  CH
                </div>
                <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-none">
                  CREATOR HAI
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-neutral-200 tracking-tight">
                  Best Influencer Marketing Agency • 100% Working Creator ROI
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-300">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Influencer Marketing</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">UGC Video Creation</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Creator Partnerships</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Campaign Management</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI — Best Influencer Agency</span>
                <span className="font-mono">{contactInfo.website}</span>
              </div>
            </div>
          )}

          {/* SLIDE 1: ABOUT & WHAT WE DO */}
          {currentSlide === 1 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  01. ABOUT THE AGENCY
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  Why Brands Choose the Best Influencer Marketing Agency.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl mt-2 leading-relaxed">
                  CREATOR HAI delivers 100% working influencer campaigns, connecting brands with creators who strictly align with their target demographics, niche authority, location, and sales objectives.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-auto">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-xs font-mono font-bold text-neutral-400 mb-1">01</div>
                  <div className="text-sm font-bold text-white mb-2">Creator Discovery</div>
                  <p className="text-xs text-neutral-400 leading-snug">
                    Finding creators based on niche, audience, location, content quality & campaign goals.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-xs font-mono font-bold text-neutral-400 mb-1">02</div>
                  <div className="text-sm font-bold text-white mb-2">Influencer Collaborations</div>
                  <p className="text-xs text-neutral-400 leading-snug">
                    Paid, barter and product-seeding campaigns across Instagram and YouTube.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-xs font-mono font-bold text-neutral-400 mb-1">03</div>
                  <div className="text-sm font-bold text-white mb-2">UGC Campaigns</div>
                  <p className="text-xs text-neutral-400 leading-snug">
                    Creator-generated content designed specifically for brand communication and paid media.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-xs font-mono font-bold text-neutral-400 mb-1">04</div>
                  <div className="text-sm font-bold text-white mb-2">Campaign Management</div>
                  <p className="text-xs text-neutral-400 leading-snug">
                    From outreach and negotiation to briefing, approvals, publishing and reporting.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI Pitch Deck</span>
                <span className="font-mono">Capabilities Overview</span>
              </div>
            </div>
          )}

          {/* SLIDE 2: 9-STEP APPROACH */}
          {currentSlide === 2 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  02. OUR APPROACH
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  We Don't Just Find Creators. We Find the Right Creators.
                </h2>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 my-auto">
                {[
                  'BRAND BRIEF',
                  'CREATOR RESEARCH',
                  'SHORTLISTING',
                  'OUTREACH & NEGOTIATION',
                  'CAMPAIGN BRIEFING',
                  'CONTENT CREATION',
                  'BRAND APPROVAL',
                  'CONTENT GOES LIVE',
                  'TRACKING & REPORTING',
                ].map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-black/40 border border-white/10 text-center flex flex-col justify-between"
                  >
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: themeConfig.accent }}
                    >
                      0{sIdx + 1}
                    </span>
                    <div className="text-[11px] font-bold text-white uppercase mt-2 leading-tight">
                      {step}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI Pitch Deck</span>
                <span className="font-mono">End-to-End Workflow</span>
              </div>
            </div>
          )}

          {/* SLIDE 3: EXPERIENCE & STATS */}
          {currentSlide === 3 && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  03. AGENCY TRACK RECORD
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  100+ Creator Campaigns Managed
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Hands-on experience across education, fashion, lifestyle, wellness, D2C and local retail across Instagram and YouTube.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-auto">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-display font-black" style={{ color: themeConfig.accent }}>
                    100+
                  </div>
                  <div className="text-xs font-bold text-white mt-1">Creators in Single Campaign</div>
                  <div className="text-[10px] text-neutral-400 mt-1">Simplilearn YouTube</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-display font-black" style={{ color: themeConfig.accent }}>
                    90
                  </div>
                  <div className="text-xs font-bold text-white mt-1">Fashion Campaign Creators</div>
                  <div className="text-[10px] text-neutral-400 mt-1">The Seventh Muse</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-display font-black" style={{ color: themeConfig.accent }}>
                    20
                  </div>
                  <div className="text-xs font-bold text-white mt-1">Across 8 Retail Locations</div>
                  <div className="text-[10px] text-neutral-400 mt-1">The Cambridge Store Pune</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-display font-black" style={{ color: themeConfig.accent }}>
                    1M+
                  </div>
                  <div className="text-xs font-bold text-white mt-1">Views in 14-Day Sprint</div>
                  <div className="text-[10px] text-neutral-400 mt-1">The Sarkari Rise</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Instagram + YouTube Multi-Platform Native</span>
                <span className="font-mono">Performance Benchmarks</span>
              </div>
            </div>
          )}

          {/* SLIDES 4 to 9: CASE STUDIES 01 to 06 (THE 2-PAGE SPREAD) */}
          {currentSlide >= 4 && currentSlide < 4 + caseStudies.length && (() => {
            const cs = caseStudies[currentSlide - 4];
            return (
              <div className="h-full flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-white px-2 py-0.5 rounded bg-white/10">
                      CASE STUDY {cs.number}
                    </span>
                    <span className="font-bold text-white">{cs.brandName}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-400">{cs.category}</span>
                  </div>
                  <span className="font-mono text-neutral-400">2-PAGE CANVA PITCH SPREAD</span>
                </div>

                {/* 2-Page Spread Body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-auto overflow-hidden">
                  {/* Page 1: Campaign */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-black text-sm"
                          style={{ backgroundColor: themeConfig.accent }}
                        >
                          {cs.brandLogoText}
                        </div>
                        <div>
                          <div className="text-[9px] font-mono text-neutral-400 uppercase">PAGE 1 — CAMPAIGN</div>
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
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">My Role:</span>
                      <p className="text-[11px] text-neutral-300 leading-snug">{cs.myRole}</p>
                    </div>
                  </div>

                  {/* Page 2: Proof & Media */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase">PAGE 2 — PROOF & REELS</span>
                        <span className="text-xs font-mono font-bold" style={{ color: themeConfig.accent }}>
                          {cs.resultStat}
                        </span>
                      </div>

                      {/* Video Still + Creator Grid */}
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
                            <div className="text-neutral-400 mt-1">{cs.creatorThumbnails.length} Creators</div>
                          </div>
                          <div className="font-mono text-neutral-300">{cs.duration}</div>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-white/5 text-[11px] italic text-neutral-300 border-l-2 border-white/40">
                        "{cs.campaignHighlight}"
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-neutral-400">Scan / Live Content Proof</span>
                      <span className="font-mono text-white underline">{cs.qrValue || 'creatorhai.com'}</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Case Study 0{currentSlide - 3} of 06</span>
                  <span className="font-mono">{cs.brandName} • Completed</span>
                </div>
              </div>
            );
          })()}

          {/* SLIDE 10: UGC PORTFOLIO */}
          {currentSlide === 4 + caseStudies.length && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  UGC PORTFOLIO
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  Content That Brands Can Use.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
                  High-converting creator UGC designed for brand marketing channels, paid Meta/TikTok ads, and eCommerce product pages.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
                {ugcCampaigns.map((ugc) => (
                  <div key={ugc.id} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{ugc.brand}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10">{ugc.duration}</span>
                    </div>
                    <div className="text-[11px] text-neutral-400">{ugc.category} • {ugc.format}</div>
                    <p className="text-xs text-neutral-300 leading-snug">{ugc.description}</p>
                    <div className="pt-2 border-t border-white/10 text-[11px] font-mono font-bold" style={{ color: themeConfig.accent }}>
                      {ugc.adRights} • {ugc.keyMetric}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI Pitch Deck</span>
                <span className="font-mono">UGC & Ad Rights</span>
              </div>
            </div>
          )}

          {/* SLIDE 11: LOCAL ACTIVATIONS */}
          {currentSlide === 5 + caseStudies.length && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  LOCAL ACTIVATIONS
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  Bringing Brands Into Their Local Communities.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Store visits, outlet coverage, and location-specific creator drives.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
                {localActivations.map((loc) => (
                  <div key={loc.id} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{loc.brand}</span>
                      <span className="text-[10px] font-mono text-neutral-400">{loc.locations}</span>
                    </div>
                    <div className="text-xs font-bold" style={{ color: themeConfig.accent }}>{loc.creators}</div>
                    <p className="text-xs text-neutral-300 leading-snug">{loc.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Focus: Location • Audience • Niche • Content Style • Objective</span>
                <span className="font-mono">Retail Footfall</span>
              </div>
            </div>
          )}

          {/* SLIDE 12: WHY US & MATCH FORMULA */}
          {currentSlide === 6 + caseStudies.length && (
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  WHY CREATOR HAI — BEST INFLUENCER AGENCY
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
                  RIGHT CREATOR. RIGHT AUDIENCE. RIGHT COLLABORATION.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Follower count isn't everything. The right creator aligns across all 5 dimensions:
                </p>
              </div>

              <div className="grid grid-cols-5 gap-3 my-auto">
                {['Audience', 'Content', 'Niche', 'Location', 'Engagement'].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center">
                    <div className="text-xs font-mono text-neutral-400">0{idx + 1}</div>
                    <div className="text-sm font-bold text-white mt-1">{item}</div>
                    {idx < 4 && <div className="text-xs text-neutral-500 mt-2 font-bold">+</div>}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span>= Perfect Brand Campaign Alignment</span>
                <span className="font-bold text-white">100% Brand Safety</span>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI Pitch Deck</span>
                <span className="font-mono">Strategic Philosophy</span>
              </div>
            </div>
          )}

          {/* SLIDE 13: LET'S COLLABORATE / CLOSING */}
          {currentSlide === 7 + caseStudies.length && (
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  GET IN TOUCH
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">
                  Next Steps
                </span>
              </div>

              <div className="my-auto space-y-4">
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                  LET'S COLLABORATE.
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                  Whether you need UGC, Paid Creator Campaigns, Barter Collaborations, Product Seeding, or Retail Store Visits — CREATOR HAI delivers 100% working campaigns from brief to live.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Email</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.email}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Instagram</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.instagram}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Phone</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.phone}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Website</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{contactInfo.website}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI</span>
                <span className="font-mono">Best Influencer Marketing Agency • 100% Working Strategy</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Deck Navigation Bar */}
      <div className="no-print h-16 px-6 bg-[#0e0f14] border-t border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            aria-label="Previous presentation slide"
            className="px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 disabled:opacity-30 hover:bg-neutral-800 text-white font-bold flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next presentation slide"
            className="px-5 py-2 rounded-xl font-bold flex items-center gap-1.5 disabled:opacity-30 transition-all"
            style={{
              backgroundColor: themeConfig.accent,
              color: themeConfig.accentBtnText,
            }}
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Thumbnails / Indicator Pills */}
        <div className="hidden md:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx ? 'w-6' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              style={{
                backgroundColor: currentSlide === idx ? themeConfig.accent : undefined,
              }}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-neutral-400 text-xs hidden sm:block">
          Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">→</kbd> to navigate • <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">Esc</kbd> to exit
        </div>
      </div>
    </div>
  );
};
