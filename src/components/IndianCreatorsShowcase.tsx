import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { indianCreatorsRoster, IndianCreator } from '../data/creatorsData';
import {
  Sparkles,
  TrendingUp,
  Users,
  Instagram,
  Youtube,
  Eye,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Award,
  Zap,
  MapPin,
  Play,
  X,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const IndianCreatorsShowcase: React.FC = () => {
  const { themeConfig, openInquiryModal, openRepresentationalModal } = useAgency();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [selectedCreator, setSelectedCreator] = useState<IndianCreator | null>(null);
  const [marqueeSpeed, setMarqueeSpeed] = useState<'normal' | 'slow' | 'fast'>('normal');

  const categories = [
    { key: 'all', label: 'All Creators', count: indianCreatorsRoster.length },
    { key: 'fashion', label: 'Fashion & Style', count: 2 },
    { key: 'tech', label: 'Tech & Gadgets', count: 1 },
    { key: 'comedy', label: 'Comedy & Entertainment', count: 1 },
    { key: 'finance', label: 'Finance & EdTech', count: 2 },
    { key: 'beauty', label: 'Beauty & Skincare', count: 1 },
    { key: 'fitness', label: 'Fitness & Sports', count: 1 },
  ];

  const filteredCreators = activeCategory === 'all'
    ? indianCreatorsRoster
    : indianCreatorsRoster.filter(c => c.categoryKey === activeCategory);

  // Split into 2 rows for the moving cards marquee
  const row1 = [...indianCreatorsRoster];
  const row2 = [...indianCreatorsRoster].reverse();

  const handleSelectForCampaign = (creator: IndianCreator) => {
    openInquiryModal('brand');
  };

  const getSpeedClass = () => {
    if (marqueeSpeed === 'slow') return 'animate-marquee-slow';
    if (marqueeSpeed === 'fast') return 'animate-marquee-fast';
    return '';
  };

  return (
    <section id="creators-roster" className="py-20 lg:py-28 bg-[#090a0f] border-b border-white/10 relative overflow-hidden">
      {/* Background radial glowing ambient orbs */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: themeConfig.accent }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ backgroundColor: themeConfig.secondaryAccent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border transition-colors"
                style={{
                  backgroundColor: themeConfig.accentBg,
                  borderColor: themeConfig.accentBorder,
                  color: themeConfig.accentText,
                }}
              >
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>02 — CREATOR ROSTER • INDIAN INFLUENCERS & CELEBRITIES</span>
              </span>

              <button
                onClick={openRepresentationalModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-[11px] font-mono transition-colors cursor-pointer"
                title="View Representational Portfolio Notice"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Verified Matchmaking Network</span>
              </button>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.08]">
              India’s Top Creators & Celebrities. <br />
              <span className="font-serif italic font-normal text-white">
                Handpicked For Your Brand.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Direct access to vetted Indian influencers across Mega-Celebrity, Tech, Lifestyle, Comedy, and Finance. High-converting creative storytelling with verified audience retention and proven ROI.
            </p>
          </div>

          {/* Interactive Mode & Speed Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            {/* Mode Switcher: Moving Cards vs 3D Grid */}
            <div className="p-1 rounded-2xl bg-neutral-900 border border-white/10 flex items-center gap-1 shadow-lg">
              <button
                type="button"
                onClick={() => setViewMode('marquee')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  viewMode === 'marquee'
                    ? 'bg-white text-neutral-900 shadow-md scale-[1.02]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Moving Cards</span>
                <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  LIVE
                </span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-neutral-900 shadow-md scale-[1.02]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Grid</span>
              </button>
            </div>

            {/* Speed pills if in marquee mode */}
            {viewMode === 'marquee' && (
              <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1.5 rounded-xl border border-white/10">
                <span className="text-neutral-400">Speed:</span>
                {(['slow', 'normal', 'fast'] as const).map(speed => (
                  <button
                    key={speed}
                    onClick={() => setMarqueeSpeed(speed)}
                    className={`px-2 py-0.5 rounded capitalize transition-colors ${
                      marqueeSpeed === speed ? 'bg-white/20 text-white font-bold' : 'hover:text-white'
                    }`}
                  >
                    {speed}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Filters (Active in both modes) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-left">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? 'bg-white text-neutral-950 border-white shadow-md scale-[1.02]'
                    : 'bg-[#12131b] text-neutral-400 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-neutral-900 text-white' : 'bg-white/10 text-neutral-300'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* VIEW MODE 1: MOVING CARDS INFINITE MARQUEE (DUAL TRACKS) */}
        {/* ======================================================== */}
        {viewMode === 'marquee' && (
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-4 select-none group">
            {/* Edge fade gradients for polished cinematic look */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#090a0f] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#090a0f] to-transparent z-20 pointer-events-none" />

            {/* Track 1: Moving Left */}
            <div className="mb-6 overflow-hidden">
              <div className={`animate-marquee-left ${getSpeedClass()} pause-hover flex gap-5`}>
                {[...row1, ...row1].map((creator, idx) => (
                  <CreatorCard
                    key={`t1-${creator.id}-${idx}`}
                    creator={creator}
                    onOpenPreview={() => setSelectedCreator(creator)}
                    onSelectCampaign={() => handleSelectForCampaign(creator)}
                    themeAccent={themeConfig.accent}
                  />
                ))}
              </div>
            </div>

            {/* Track 2: Moving Right */}
            <div className="overflow-hidden">
              <div className={`animate-marquee-right ${getSpeedClass()} pause-hover flex gap-5`}>
                {[...row2, ...row2].map((creator, idx) => (
                  <CreatorCard
                    key={`t2-${creator.id}-${idx}`}
                    creator={creator}
                    onOpenPreview={() => setSelectedCreator(creator)}
                    onSelectCampaign={() => handleSelectForCampaign(creator)}
                    themeAccent={themeConfig.accent}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[11px] font-mono text-neutral-400 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hover over any card to pause ticker & inspect live influencer metrics</span>
              </p>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW MODE 2: INTERACTIVE 3D GRID WITH DETAILED CARDS     */}
        {/* ======================================================== */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left"
          >
            {filteredCreators.map((creator, idx) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-[#13141f]/95 border border-white/10 hover:border-white/30 overflow-hidden shadow-2xl transition-all flex flex-col justify-between group relative"
              >
                {/* Top Image with Badge Overlay */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={creator.image}
                    alt={`${creator.name} - Indian Influencer & Creator Showcase`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13141f] via-transparent to-black/40" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/20 text-white shadow"
                      style={{ backgroundColor: `${creator.badgeColor || '#ec4899'}cc` }}
                    >
                      {creator.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-neutral-200">
                      {creator.tier}
                    </span>
                  </div>

                  {/* Location & Platforms */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="inline-flex items-center gap-1 text-[11px] text-neutral-300 font-medium">
                      <MapPin className="w-3 h-3 text-red-400" />
                      {creator.location}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {creator.platforms.includes('Instagram') && (
                        <span className="p-1 rounded-lg bg-pink-500/20 text-pink-300 border border-pink-500/30">
                          <Instagram className="w-3.5 h-3.5" />
                        </span>
                      )}
                      {creator.platforms.includes('YouTube') && (
                        <span className="p-1 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30">
                          <Youtube className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        <span>{creator.name}</span>
                        <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">{creator.handle}</span>
                    </div>

                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                      {creator.highlightQuote}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-black/40 border border-white/10 text-center font-mono">
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase">Followers</div>
                      <div className="text-xs font-bold text-white mt-0.5">{creator.followers}</div>
                    </div>
                    <div className="border-x border-white/10">
                      <div className="text-[10px] text-neutral-400 uppercase">Avg Views</div>
                      <div className="text-xs font-bold text-white mt-0.5">{creator.avgViews}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase">Eng. Rate</div>
                      <div className="text-xs font-bold text-emerald-400 mt-0.5">{creator.engagementRate}</div>
                    </div>
                  </div>

                  {/* Brand Collabs */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase text-neutral-400">Past Collabs:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {creator.topCollabs.map((collab) => (
                        <span
                          key={collab}
                          className="px-2 py-0.5 rounded-md text-[10px] bg-white/5 border border-white/10 text-neutral-300"
                        >
                          {collab}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="pt-2 flex items-center gap-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => handleSelectForCampaign(creator)}
                      className="flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                      style={{
                        backgroundColor: themeConfig.accent,
                        color: themeConfig.accentBtnText,
                      }}
                    >
                      <span>Book For Campaign</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCreator(creator)}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
                      title="View Full Media Kit"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom Banner Roster Pitch */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#12161f] to-neutral-900 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left shadow-2xl">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              1,200+ INDIAN CREATORS IN OUR ROSTER
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Need a Custom Shortlist of Creators for Your Brand Brief?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl">
              Tell us your target audience, deliverables, and budget. We provide curated influencer decks with real demographics, content samples, and commercial rates within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openInquiryModal('brand')}
              className="px-6 py-3.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 shadow-xl bg-emerald-400 text-neutral-950 hover:bg-emerald-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Custom Creator Shortlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* POPUP MODAL: DETAILED CREATOR MEDIA KIT PREVIEW         */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedCreator && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#12131c] border border-white/20 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl text-left relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCreator(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left image column */}
                <div className="md:col-span-5 relative aspect-[3/4] md:aspect-auto">
                  <img
                    src={selectedCreator.image}
                    alt={selectedCreator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#12131c] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/90 text-white">
                      {selectedCreator.tier}
                    </span>
                  </div>
                </div>

                {/* Right details column */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {selectedCreator.category}
                      </span>
                      <span className="text-neutral-600">•</span>
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-red-400" />
                        {selectedCreator.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-extrabold text-white flex items-center gap-2">
                      <span>{selectedCreator.name}</span>
                      <ShieldCheck className="w-5 h-5 text-sky-400" />
                    </h3>
                    <div className="text-xs font-mono text-neutral-400 mt-0.5">
                      {selectedCreator.handle}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {selectedCreator.highlightQuote}
                    </p>
                  </div>

                  {/* Detailed Media Kit Stats */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      Audience & Performance Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-neutral-900/90 border border-white/10 text-center font-mono">
                      <div>
                        <div className="text-[10px] text-neutral-400">Followers</div>
                        <div className="text-base font-extrabold text-white">{selectedCreator.followers}</div>
                      </div>
                      <div className="border-x border-white/10">
                        <div className="text-[10px] text-neutral-400">Avg Views</div>
                        <div className="text-base font-extrabold text-white">{selectedCreator.avgViews}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-400">Eng. Rate</div>
                        <div className="text-base font-extrabold text-emerald-400">{selectedCreator.engagementRate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Campaign Highlight */}
                  {selectedCreator.featuredCampaign && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase">Top Case Result:</div>
                      <div className="text-white font-semibold mt-0.5">
                        {selectedCreator.featuredCampaign}
                      </div>
                    </div>
                  )}

                  {/* Bottom Action */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCreator(null);
                        handleSelectForCampaign(selectedCreator);
                      }}
                      className="flex-1 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                      style={{
                        backgroundColor: themeConfig.accent,
                        color: themeConfig.accentBtnText,
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Select {selectedCreator.name} for Brief</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Sub-component for individual moving card in marquee
interface CreatorCardProps {
  creator: IndianCreator;
  onOpenPreview: () => void;
  onSelectCampaign: () => void;
  themeAccent: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  creator,
  onOpenPreview,
  onSelectCampaign,
  themeAccent
}) => {
  return (
    <div
      onClick={onOpenPreview}
      className="w-[280px] sm:w-[310px] shrink-0 rounded-2xl bg-[#141520]/95 border border-white/10 hover:border-white/30 overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer group text-left relative flex flex-col justify-between"
    >
      {/* Visual Image Header */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
        <img
          src={creator.image}
          alt={`${creator.name} Indian Creator`}
          className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141520] via-black/20 to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <span
            className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase backdrop-blur-md text-white border border-white/20 shadow"
            style={{ backgroundColor: `${creator.badgeColor || '#ec4899'}cc` }}
          >
            {creator.badge}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono text-neutral-300 border border-white/10">
            {creator.category.split('&')[0]}
          </span>
        </div>

        {/* Floating Soundwave indicator simulating live viral reel */}
        <div className="absolute bottom-2 right-2.5 flex items-end gap-0.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
          <span className="w-0.5 h-2.5 bg-emerald-400 animate-pulse" />
          <span className="w-0.5 h-4 bg-emerald-400 animate-pulse delay-75" />
          <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse delay-150" />
          <span className="w-0.5 h-3 bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono text-emerald-300 ml-1 font-bold">REEL</span>
        </div>
      </div>

      {/* Creator Info */}
      <div className="p-4 space-y-3">
        <div>
          <div className="flex items-center justify-between">
            <h4 className="font-display font-bold text-sm text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1">
              <span>{creator.name}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            </h4>
            <span className="text-[10px] font-mono text-neutral-400">{creator.handle}</span>
          </div>

          <p className="text-[11px] text-neutral-300 line-clamp-1 mt-1 font-normal">
            {creator.highlightQuote}
          </p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-3 gap-1.5 p-2 rounded-xl bg-black/50 border border-white/10 text-center font-mono">
          <div>
            <div className="text-[9px] text-neutral-400 uppercase">Followers</div>
            <div className="text-[11px] font-bold text-white mt-0.5">{creator.followers}</div>
          </div>
          <div className="border-x border-white/10">
            <div className="text-[9px] text-neutral-400 uppercase">Avg Views</div>
            <div className="text-[11px] font-bold text-white mt-0.5">{creator.avgViews}</div>
          </div>
          <div>
            <div className="text-[9px] text-neutral-400 uppercase">Eng. Rate</div>
            <div className="text-[11px] font-bold text-emerald-400 mt-0.5">{creator.engagementRate}</div>
          </div>
        </div>

        {/* Collabs Ticker */}
        <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/10">
          <span className="font-mono text-neutral-400">Brands:</span>
          <span className="text-neutral-200 font-medium truncate max-w-[190px]">
            {creator.topCollabs.slice(0, 3).join(' • ')}
          </span>
        </div>

        {/* Hover Action Strip */}
        <div className="pt-1 flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectCampaign();
            }}
            className="w-full py-1.5 rounded-lg text-[11px] font-bold bg-white/10 hover:bg-emerald-500 hover:text-neutral-950 text-white border border-white/15 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Book Creator</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
