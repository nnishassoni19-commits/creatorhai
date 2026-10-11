import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { ArrowDown, Sparkles, Play, ShieldCheck, Video, Users, TrendingUp, Layers, MessageCircle, ArrowRight } from 'lucide-react';

const heroCreators = [
  {
    name: 'Kavya Singhania',
    handle: '@kavyasinghania.style',
    category: 'Fashion & Style',
    reach: '2.8M Reach',
    image: '/src/assets/images/indian_creator_fashion_1791703826710.jpg',
    tag: 'Libas Festive Collab',
    quote: '"Styling contemporary ethnic Indo-western looks driving 14M impressions."'
  },
  {
    name: 'Aarav Malhotra',
    handle: '@aaravtechtalks',
    category: 'Tech & Gadgets',
    reach: '4.2M Reach',
    image: '/src/assets/images/indian_creator_tech_1791703847629.jpg',
    tag: 'Vivo Flagship Unbox',
    quote: '"Real camera breakdown and benchmark reviews for flagship launch day."'
  },
  {
    name: 'Pooja Vashisht',
    handle: '@pooja.unfiltered',
    category: 'Comedy & Pop Culture',
    reach: '3.5M Reach',
    image: '/src/assets/images/indian_creator_comedy_1791703885292.jpg',
    tag: 'Swiggy Desi Moments',
    quote: '"High-relatability comedic sketches generating 8.2M organic views."'
  },
  {
    name: 'Vikram Joshi',
    handle: '@vikram.finpulse',
    category: 'Finance & Upskilling',
    reach: '1.9M Reach',
    image: '/src/assets/images/indian_creator_finance_1791703907870.jpg',
    tag: 'The Sarkari Rise',
    quote: '"Reaching high-intent career aspirants, driving 1M+ views in 14 days."'
  }
];

export const Hero: React.FC = () => {
  const { themeConfig, contactInfo, openInquiryModal, openRepresentationalModal } = useAgency();
  const [activeReelIdx, setActiveReelIdx] = useState(0);
  const activeReel = heroCreators[activeReelIdx];

  const directWhatsAppTap = () => {
    const raw = contactInfo.phone ? contactInfo.phone.replace(/[^0-9]/g, '') : '919876543210';
    const num = raw.length === 10 ? `91${raw}` : raw;
    const text = encodeURIComponent(
      `Hi CreatorHai Team! We want to connect regarding brand collaboration & creator marketing.`
    );
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  const services = [
    'Influencer Marketing',
    'UGC',
    'Creator Discovery',
    'D2C Marketing',
    'Campaign Management',
  ];

  const quickStats = [
    { value: '100+', label: 'Campaigns Delivered', icon: Layers },
    { value: '1M+', label: 'Featured Campaign Views', icon: TrendingUp },
    { value: '90', label: 'Creators in Single Fashion Scale', icon: Users },
    { value: '8 Outlets', label: 'Hyperlocal Activations', icon: Video },
  ];

  return (
    <section id="hero-section" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-white/10">
      {/* Ambient serene background glows: Primary Pink & Matching Contrast Accent */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-1000 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.accent }}
      />
      <div
        className="absolute bottom-10 right-10 w-[480px] h-[320px] rounded-full blur-[140px] pointer-events-none opacity-15 transition-all duration-1000 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.secondaryAccent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Peaceful Typography & Intent */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Tagline Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase transition-colors"
                style={{
                  backgroundColor: themeConfig.accentBg,
                  borderColor: themeConfig.accentBorder,
                  color: themeConfig.accentText,
                }}
              >
                <Sparkles className="w-3.5 h-3.5 opacity-80" />
                <span>01 — COVER • Creator Marketing Agency</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeConfig.secondaryAccent }} />
              </div>

              <button
                onClick={openRepresentationalModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="View Representational Portfolio Notice"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Representational Portfolio</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 id="hero-headline" className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-black tracking-tight text-white leading-[1.08] sm:leading-[1.06]">
              CREATOR<span className="transition-all duration-300" style={{ color: themeConfig.accent, textShadow: `0 0 35px ${themeConfig.accent}50` }}>HAI</span> <br />
              <span className="font-serif italic font-normal tracking-tight text-white block mt-1">
                Connecting Brands with the Right Creators.
              </span>
            </h1>

            {/* Sub-headline / Description */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
              We bring brands and creators together to build meaningful collaborations, authentic content, and impactful digital experiences.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {services.map((srv) => (
                <span
                  key={srv}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:border-neutral-700 transition-colors"
                >
                  {srv}
                </span>
              ))}
            </div>

            {/* User-Friendly Dual-Track Action Suite: Crystal-Clear Purpose & High-Contrast Belongings */}
            <div className="pt-2 space-y-3">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeConfig.accent }} />
                <span>SELECT YOUR GOAL • CLEAR PURPOSE ACTIONS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {/* BUTTON 1: HIGHLIGHTED FOR BRANDS (Primary Most-Needed CTA) */}
                <button
                  type="button"
                  onClick={() => openInquiryModal('brand')}
                  className="p-4 rounded-2xl text-left transition-all duration-200 border relative overflow-hidden group shadow-xl hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-br from-emerald-500/20 via-[#141d1a] to-[#0d1210] border-emerald-400/50 hover:border-emerald-400"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      FOR BRANDS & BUSINESSES
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="font-display font-extrabold text-base text-white group-hover:text-emerald-200 transition-colors">
                    Let's Connect — Launch Campaign
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 leading-snug">
                    Submit brand campaign brief → Get curated creator roster & pricing shortlist in 24 hrs
                  </p>
                </button>

                {/* BUTTON 2: FOR CREATORS & TALENT */}
                <button
                  type="button"
                  onClick={() => openInquiryModal('creator')}
                  className="p-4 rounded-2xl text-left transition-all duration-200 border relative overflow-hidden group shadow-xl hover:scale-[1.02] active:scale-[0.98] bg-[#141520]/90 border-white/15 hover:border-white/30"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: themeConfig.accentBg,
                        color: themeConfig.accentText,
                        borderColor: themeConfig.accentBorder,
                      }}
                    >
                      FOR CREATORS & TALENT
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="font-display font-extrabold text-base text-white transition-colors">
                    Join Creator Roster
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 leading-snug">
                    Apply to collaborate on paid brand campaigns, gifting & sponsored video deals
                  </p>
                </button>
              </div>

              {/* Secondary Utility Actions: 1-Tap WhatsApp & Case Studies */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={directWhatsAppTap}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 border border-[#25D366]/40 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] transition-all shadow-sm"
                  title="Direct 1-tap WhatsApp chat with agency director"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-mono uppercase text-[10px] text-emerald-300 font-bold">1-TAP CHAT:</span>
                  <span className="text-white font-semibold">WhatsApp Us Directly</span>
                </button>

                <a
                  href="#case-studies"
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 bg-neutral-900 border border-neutral-700/80 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-all"
                >
                  <span className="font-mono text-[10px] text-neutral-400 uppercase">PROOF:</span>
                  <span>Featured Case Studies (TSR 14-Day)</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Mini Moving Ticker / Trust Strip for Indian Creators */}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="#creators-roster"
                  className="group flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all text-left"
                >
                  {/* Overlapping Indian creator avatars */}
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover"
                      src="/src/assets/images/indian_creator_fashion_1791703826710.jpg"
                      alt="Indian Creator Kavya"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover"
                      src="/src/assets/images/indian_creator_tech_1791703847629.jpg"
                      alt="Indian Creator Aarav"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover"
                      src="/src/assets/images/indian_creator_comedy_1791703885292.jpg"
                      alt="Indian Creator Pooja"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover"
                      src="/src/assets/images/indian_creator_finance_1791703907870.jpg"
                      alt="Indian Creator Vikram"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover"
                      src="/src/assets/images/indian_creator_beauty_1791703936633.jpg"
                      alt="Indian Creator Rhea"
                    />
                  </div>

                  <div className="flex-1 min-w-[200px]">
                    <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <span>1,200+ Verified Indian Creators Roster</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      Celebrity, Tech, Fashion, Comedy & EdTech • Tap to explore moving cards roster
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Reel / Proof Mockup Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            style={{ perspective: 1000 }}
          >
            {/* Interactive Creator Reel Selector */}
            <div className="flex items-center justify-center gap-1.5 mb-3">
              {heroCreators.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setActiveReelIdx(i)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    activeReelIdx === i
                      ? 'bg-white text-neutral-900 shadow-md scale-105'
                      : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10'
                  }`}
                >
                  {c.category.split(' ')[0]}
                </button>
              ))}
            </div>

            <div id="hero-phone-mockup" className="relative mx-auto max-w-[330px] sm:max-w-[360px] animate-peaceful-float transform-gpu">
              {/* Phone Frame Simulator */}
              <div className="rounded-[40px] p-3 bg-gradient-to-b from-neutral-700/80 to-neutral-900 border-2 border-neutral-600/70 shadow-2xl relative overflow-hidden">
                {/* Screen glass */}
                <div className="relative rounded-[30px] overflow-hidden bg-black aspect-[9/16] border border-white/10">
                  {/* Indian Creator Video Still */}
                  <img
                    key={activeReel.name}
                    src={activeReel.image}
                    alt={`${activeReel.name} - Top Indian Creator Reel Showcase`}
                    width="360"
                    height="640"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-top opacity-95 transition-all duration-500 scale-100 hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

                  {/* Top Bar inside reel */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/80 backdrop-blur-md border border-emerald-400/30 font-bold text-[10px] tracking-wider uppercase text-white shadow">
                      {activeReel.tag}
                    </span>
                    <span className="text-[11px] font-mono text-white font-bold bg-black/60 px-2 py-0.5 rounded-full border border-white/20">
                      {activeReel.reach}
                    </span>
                  </div>

                  {/* Floating Middle Play Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm transition-transform animate-pulse"
                      style={{
                        backgroundColor: themeConfig.accent,
                        color: themeConfig.accentBtnText,
                      }}
                    >
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Creator Card inside reel */}
                  <div className="absolute bottom-4 left-4 right-4 text-left z-10 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full border-2 border-white/60 overflow-hidden shadow-md">
                        <img
                          src={activeReel.image}
                          alt={activeReel.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          <span>{activeReel.name}</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                        </div>
                        <div className="text-[10px] text-neutral-300 font-mono">
                          {activeReel.handle} • {activeReel.category}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-200 line-clamp-2 leading-snug">
                      {activeReel.quote}
                    </p>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-300 border-t border-white/15">
                      <span className="text-emerald-300 font-medium">92% Indian Audience</span>
                      <span className="font-bold text-white">Instagram + YouTube</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card 1 - Carefully bounded positioning */}
              <div id="hero-float-card-left" className="absolute -bottom-4 -left-4 sm:-left-8 bg-[#17181f]/95 border border-white/15 p-3.5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[200px] hidden sm:block z-20">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeConfig.accent }} />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Fast Turnaround</span>
                </div>
                <div className="text-xs font-medium text-neutral-300">
                  Planned: 25 Days → Completed in <strong className="text-white">14 Days</strong>
                </div>
              </div>

              {/* Floating Highlight Card 2 - Carefully bounded positioning */}
              <div id="hero-float-card-right" className="absolute -top-3 -right-3 sm:-right-6 bg-[#17181f]/95 border border-white/15 p-3 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[180px] hidden sm:block z-20">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Indian Roster</div>
                <div className="text-sm font-extrabold text-white mt-0.5">1,200+ Creators</div>
                <div className="text-[11px] text-neutral-400">All major Indian cities</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Numbers Bar with on-scroll reveals */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {quickStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                className="hero-quick-stat p-5 rounded-2xl bg-[#121318]/80 border border-white/5 hover:border-white/15 transition-all text-left group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:scale-105 transition-transform inline-block">
                    {stat.value}
                  </span>
                  <div
                    className="p-2 rounded-xl"
                    style={{
                      backgroundColor: idx % 2 === 0 ? themeConfig.accentBg : themeConfig.secondaryBg,
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{
                        color: idx % 2 === 0 ? themeConfig.accentText : themeConfig.secondaryText,
                      }}
                    />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-neutral-400 block leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>


    </section>
  );
};
