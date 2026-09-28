import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { CaseStudy } from '../types';
import {
  Play,
  QrCode,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Instagram,
  Youtube,
  Share2,
  Bookmark,
  Heart,
  Volume2,
  Maximize2
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { caseStudies, activeCaseStudyIndex, setActiveCaseStudyIndex, themeConfig, isEditMode, updateCaseStudy } = useAgency();
  const [mobileTab, setMobileTab] = useState<'campaign' | 'proof'>('campaign');
  const [selectedVideoModal, setSelectedVideoModal] = useState<CaseStudy | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const current = caseStudies[activeCaseStudyIndex] || caseStudies[0];

  const handleCopyLink = (url?: string) => {
    navigator.clipboard.writeText(url || window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#090a0d] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left"
        >
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: themeConfig.accentBg,
                borderColor: themeConfig.accentBorder,
                color: themeConfig.accentText,
              }}
            >
              PROVEN 100% WORKING CASE STUDIES
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Featured <span className="font-serif italic font-normal text-white">Campaign Cases.</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
              Explore how CREATOR HAI, recognized as the best influencer marketing agency, architects 100% working campaigns—pairing rigorous creator calibration with verified commercial outcomes.
            </p>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setActiveCaseStudyIndex(
                  activeCaseStudyIndex > 0 ? activeCaseStudyIndex - 1 : caseStudies.length - 1
                )
              }
              className="p-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 text-white transition-colors"
              title="Previous Case Study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 font-mono text-xs text-neutral-300 font-bold">
              {current.number} / 0{caseStudies.length}
            </div>
            <button
              onClick={() =>
                setActiveCaseStudyIndex(
                  activeCaseStudyIndex < caseStudies.length - 1 ? activeCaseStudyIndex + 1 : 0
                )
              }
              className="p-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/25 text-white transition-colors"
              title="Next Case Study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Case Study Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {caseStudies.map((cs, idx) => {
            const isSelected = activeCaseStudyIndex === idx;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveCaseStudyIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2.5 border ${
                  isSelected
                    ? 'bg-[#1a1b24] text-white border-white/40 shadow-lg'
                    : 'bg-[#111217] text-neutral-400 border-white/5 hover:border-white/20 hover:text-neutral-200'
                }`}
              >
                <span
                  className="font-mono text-[11px] font-extrabold"
                  style={{ color: isSelected ? themeConfig.accent : '#6b7280' }}
                >
                  {cs.number}
                </span>
                <span>{cs.brandName}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Spread View Selector (Page 1 vs Page 2) */}
        <div className="flex lg:hidden rounded-xl bg-neutral-900 p-1 mb-6 border border-white/10">
          <button
            onClick={() => setMobileTab('campaign')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              mobileTab === 'campaign' ? 'bg-white text-black shadow' : 'text-neutral-400'
            }`}
          >
            Page 1: Campaign Brief
          </button>
          <button
            onClick={() => setMobileTab('proof')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              mobileTab === 'proof' ? 'bg-white text-black shadow' : 'text-neutral-400'
            }`}
          >
            Page 2: Proof & Reels
          </button>
        </div>

        {/* THE 2-PAGE SPREAD CONTAINER */}
        <motion.div
          id="case-study-spread-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[#111218] border border-white/15 shadow-2xl overflow-hidden transform-gpu"
        >
          {/* Top Pitch Deck Bar */}
          <div className="px-6 py-4 bg-[#161720] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono font-black text-white px-2 py-0.5 rounded bg-white/10">
                CASE STUDY {current.number}
              </span>
              <span className="text-neutral-300 font-bold">{current.brandName}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">{current.category}</span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-neutral-400 font-mono">
              <span className="hidden sm:inline">2-PAGE SPREAD PITCH DECK</span>
              <span
                className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: themeConfig.accentBg,
                  color: themeConfig.accentText,
                }}
              >
                {current.duration}
              </span>
            </div>
          </div>

          {/* Spread Body: Page 1 (Left) & Page 2 (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* ================= PAGE 1 — CAMPAIGN ================= */}
            <div
              className={`p-6 sm:p-10 flex flex-col justify-between space-y-8 text-left ${
                mobileTab === 'proof' ? 'hidden lg:flex' : 'flex'
              }`}
            >
              <div>
                {/* Page 1 Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-extrabold text-lg shadow-md"
                      style={{
                        backgroundColor: themeConfig.accent,
                        color: themeConfig.accentBtnText,
                      }}
                    >
                      {current.brandLogoText}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block font-bold">
                        BRAND CASE
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                        {current.brandName}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-neutral-400 font-bold bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                    SPREAD P.01
                  </span>
                </div>

                {/* Campaign Title & Category */}
                <div className="mb-6">
                  <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-snug">
                    {current.title}
                  </h4>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-1">
                    {current.category} • {current.platforms.join(' + ')}
                  </p>
                </div>

                {/* 3-5 Campaign Stats Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-[#171822] border border-white/5">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Creators</div>
                    <div className="text-sm font-bold text-white mt-0.5">{current.creatorsCount}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171822] border border-white/5">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Platform</div>
                    <div className="text-sm font-bold text-white mt-0.5">{current.platforms.join(' & ')}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171822] border border-white/5 col-span-2 sm:col-span-1">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Execution</div>
                    <div className="text-sm font-bold text-white mt-0.5 truncate">{current.duration}</div>
                  </div>
                </div>

                {/* Objective */}
                <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.accent }} />
                    <span>OBJECTIVE</span>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
                    {current.objective}
                  </p>
                </div>

                {/* Campaign Format / Structure */}
                <div className="mb-8">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
                    CAMPAIGN FORMAT & HIGHLIGHTS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.formatTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-900 border border-neutral-700/80 text-neutral-200 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeConfig.accent }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* My Role (Pipeline Management) */}
                <div>
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    MY ROLE & END-TO-END EXECUTION
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
                    {current.myRole}
                  </p>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-wrap items-center gap-2">
                    {current.myRoleSteps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="text-[11px] font-semibold text-white">
                          {step}
                        </span>
                        {sIdx < current.myRoleSteps.length - 1 && (
                          <span className="text-neutral-600 text-xs font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Page 1 Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI — Best Influencer Marketing Agency</span>
                <span className="font-mono">Section 1.0: Strategy & Architecture</span>
              </div>
            </div>

            {/* ================= PAGE 2 — PROOF & MEDIA ================= */}
            <div
              className={`p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-[#0d0e13] text-left ${
                mobileTab === 'campaign' ? 'hidden lg:flex' : 'flex'
              }`}
            >
              <div>
                {/* Page 2 Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block font-bold">
                      VISUAL PROOF & ENGAGEMENT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                      Content That Performed
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-neutral-400 font-bold bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                    SPREAD P.02
                  </span>
                </div>

                {/* Hero Result Banner */}
                <div
                  className="p-6 rounded-2xl mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border"
                  style={{
                    backgroundColor: themeConfig.accentBg,
                    borderColor: themeConfig.accentBorder,
                  }}
                >
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300">
                      {current.resultLabel}
                    </div>
                    <div
                      className="text-3xl sm:text-4xl font-display font-black tracking-tight mt-1"
                      style={{ color: themeConfig.accent }}
                    >
                      {current.resultStat}
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-xs px-3 py-1 rounded-full bg-black/40 text-white font-bold border border-white/10">
                      Verified Client Outcome
                    </span>
                  </div>
                </div>

                {/* Large Creator Video / Reel Screenshot Mockup */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 group shadow-2xl mb-6 aspect-[16/9] bg-black">
                  <img
                    src={current.videoThumbnail}
                    alt={current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

                  {/* Play Button Trigger */}
                  <button
                    onClick={() => setSelectedVideoModal(current)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform"
                    title="Play Preview"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform"
                      style={{
                        backgroundColor: themeConfig.accent,
                        color: themeConfig.accentBtnText,
                      }}
                    >
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                  </button>

                  {/* Video Overlay Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[11px]">
                      {current.platforms.includes('YouTube') ? 'YouTube Video / Shorts' : 'Instagram Reel'}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-black/70 font-mono text-[11px]">
                      {current.videoDuration || '0:58'}
                    </span>
                  </div>

                  {/* Video Overlay Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-200 pointer-events-none">
                    <div>
                      <div className="font-bold text-white text-sm truncate max-w-[280px]">
                        {current.brandName} Showcase
                      </div>
                      <div className="text-[11px] text-neutral-300">
                        {current.creatorsCount} • {current.resultStat}
                      </div>
                    </div>
                    <span className="text-[11px] underline text-white font-semibold">
                      Click to Preview Reel
                    </span>
                  </div>
                </div>

                {/* 4 Creator Thumbnails Showcase */}
                <div className="mb-6">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span>CREATOR HIGHLIGHTS</span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Sample Creator Roster ({current.creatorThumbnails.length} of {current.creatorsCount})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {current.creatorThumbnails.map((cr, cIdx) => (
                      <div
                        key={cIdx}
                        className="rounded-xl overflow-hidden bg-[#161720] border border-white/10 hover:border-white/30 transition-all group"
                      >
                        <div className="aspect-square relative overflow-hidden bg-black">
                          <img
                            src={cr.image}
                            alt={cr.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <span className="absolute bottom-1.5 left-2 font-mono text-[10px] font-bold text-white">
                            {cr.views} views
                          </span>
                        </div>
                        <div className="p-2 text-left">
                          <div className="text-xs font-bold text-white truncate">{cr.name}</div>
                          <div className="text-[10px] text-neutral-400 font-mono truncate">{cr.handle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Links & QR Code Section */}
                <div className="p-4 rounded-2xl bg-[#14151e] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                      <QrCode className="w-10 h-10 text-black" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Scan or Visit Live Campaign Content
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono truncate max-w-[220px]">
                        {current.qrValue || 'creatorhai.com/proof'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleCopyLink(current.liveContentUrl)}
                      className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-neutral-200 border border-white/10 transition-colors"
                      title="Copy proof link"
                    >
                      {copiedLink ? 'Link Copied!' : 'Copy Link'}
                    </button>
                    <a
                      href={current.liveContentUrl || 'https://instagram.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-transform hover:scale-105"
                      style={{
                        backgroundColor: themeConfig.accent,
                        color: themeConfig.accentBtnText,
                      }}
                    >
                      <span>VIEW LIVE CONTENT</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Key Takeaway / Campaign Highlight Box */}
                <div className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-white/40 text-left">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    KEY TAKEAWAY & CAMPAIGN HIGHLIGHT
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 font-medium italic">
                    "{current.campaignHighlight}"
                  </p>
                </div>
              </div>

              {/* Page 2 Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>CREATOR HAI — 100% Working Campaign Proof</span>
                <span className="font-mono">Section 2.0: Proof & Performance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simulated Video / Reel Player Modal */}
      {selectedVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedVideoModal(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl bg-[#15161e] border border-white/20 p-6 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Live Reel Preview: {selectedVideoModal.brandName}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="text-neutral-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {/* Video Frame */}
            <div className="aspect-[9/16] max-h-[500px] mx-auto rounded-2xl overflow-hidden relative bg-black border border-white/10">
              <img
                src={selectedVideoModal.videoThumbnail}
                alt="Reel Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

              {/* Top Icons */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-black/60 px-2 py-0.5 rounded font-mono text-[10px]">
                  {selectedVideoModal.platforms.join(' / ')}
                </span>
                <Volume2 className="w-4 h-4" />
              </div>

              {/* Bottom Details inside reel */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-2">
                <div className="text-sm font-bold text-white">
                  {selectedVideoModal.brandName} — {selectedVideoModal.title}
                </div>
                <p className="text-xs text-neutral-300 leading-snug">
                  {selectedVideoModal.campaignHighlight}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                  <span className="font-bold text-white" style={{ color: themeConfig.accent }}>
                    {selectedVideoModal.resultStat}
                  </span>
                  <span className="text-[11px] text-neutral-300">
                    {selectedVideoModal.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-neutral-400">
                End-to-end directed by CREATOR HAI • Best Influencer Agency
              </div>
              <a
                href={selectedVideoModal.liveContentUrl || 'https://instagram.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
                style={{
                  backgroundColor: themeConfig.accent,
                  color: themeConfig.accentBtnText,
                }}
              >
                <span>Open Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
