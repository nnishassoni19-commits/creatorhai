import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import {
  Mail,
  Instagram,
  Phone,
  Globe,
  CheckCircle2,
  Copy,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Film,
  MessageCircle,
  Clock,
  TrendingUp,
  Check,
  Building2,
  ArrowUpRight,
  CheckCheck
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const ContactSection: React.FC = () => {
  const { contactInfo, themeConfig, openRepresentationalModal } = useAgency();

  // Audience track mode: 'brand' (highlighted default) vs 'creator'
  const [audienceTrack, setAudienceTrack] = useState<'brand' | 'creator'>('brand');

  // Campaign Archetype Presets for Brands
  const presets = [
    {
      id: 'ugc',
      label: '⚡ Viral UGC Ad Pack',
      desc: 'High-converting ad-ready video creatives',
      defaultService: 'UGC Video Ads',
      defaultPlatform: 'Instagram Reels + TikTok',
      defaultCount: '15-30 Creators',
      estReach: '850K – 2.2M Views',
      turnaround: '5–7 Days',
    },
    {
      id: 'influencer',
      label: '👑 Influencer Scale Blitz',
      desc: 'Paid reach with trusted creator voices',
      defaultService: 'Paid Creator Campaigns',
      defaultPlatform: 'Instagram + YouTube',
      defaultCount: '50-100 Creators',
      estReach: '3.5M – 8.0M Reach',
      turnaround: '7–10 Days',
    },
    {
      id: 'local',
      label: '🏬 Retail Store Footfall',
      desc: 'Hyperlocal creator visits to outlets',
      defaultService: 'Retail Store Visits',
      defaultPlatform: 'Local Store Outlets',
      defaultCount: '15-30 Creators',
      estReach: '450K Hyperlocal Reach',
      turnaround: '3–5 Days',
    },
    {
      id: 'seeding',
      label: '📦 Product Seeding & Barter',
      desc: 'Authentic organic gifting & unboxing',
      defaultService: 'Product Seeding & Barter',
      defaultPlatform: 'Instagram Stories & Reels',
      defaultCount: '100+ Creators',
      estReach: '1.2M – 3.0M Impressions',
      turnaround: '10–14 Days',
    },
  ];

  const [activePreset, setActivePreset] = useState<string>('influencer');

  // Brand Form State
  const [brandForm, setBrandForm] = useState({
    brandName: '',
    contactName: '',
    email: '',
    phone: '',
    service: 'Paid Creator Campaigns',
    platform: 'Instagram + YouTube',
    creatorScale: '50-100 Creators',
    deliverables: ['Instagram Reels', 'UGC Ad Usage Rights'],
    targetAudience: '',
    budgetRange: '₹1,00,000 – ₹5,00,000',
    message: '',
  });

  // Creator Form State
  const [creatorForm, setCreatorForm] = useState({
    creatorName: '',
    handle: '',
    platform: 'Instagram',
    followers: '25K – 100K',
    niche: 'Fashion & Lifestyle',
    phone: '',
    city: '',
    message: '',
  });

  const [brandSubmitted, setBrandSubmitted] = useState(false);
  const [creatorSubmitted, setCreatorSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const deliverableOptions = [
    { id: 'Instagram Reels', label: 'Instagram Reels (POV & Try-on)' },
    { id: 'YouTube Dedicated', label: 'YouTube Dedicated / Shorts' },
    { id: 'UGC Ad Usage Rights', label: 'Whitelisted Ad Usage Rights' },
    { id: 'Retail Store Walkthrough', label: 'Physical Store Walkthrough' },
    { id: 'Product Seeding Unboxing', label: 'Gifting & Organic Unboxing' },
  ];

  const creatorScales = [
    { id: '5-10 Creators', label: '5–10 Creators', tier: 'Niche Blitz' },
    { id: '15-30 Creators', label: '15–30 Creators', tier: 'Growth Burst' },
    { id: '50-100 Creators', label: '50–100 Creators', tier: 'Category Scale' },
    { id: '100+ Creators', label: '100+ Creators', tier: 'Mega Campaign' },
  ];

  const handleSelectPreset = (preset: typeof presets[0]) => {
    setActivePreset(preset.id);
    setBrandForm((prev) => ({
      ...prev,
      service: preset.defaultService,
      platform: preset.defaultPlatform,
      creatorScale: preset.defaultCount,
    }));
  };

  const toggleDeliverable = (item: string) => {
    setBrandForm((prev) => {
      const exists = prev.deliverables.includes(item);
      return {
        ...prev,
        deliverables: exists
          ? prev.deliverables.filter((d) => d !== item)
          : [...prev.deliverables, item],
      };
    });
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCopyBrandBrief = () => {
    const briefText = `CREATOR HAI — INFLUENCER MARKETING CAMPAIGN BRIEF
Brand: ${brandForm.brandName || 'Brand Partner'}
Contact: ${brandForm.contactName || 'Marketing Team'} (${brandForm.email || 'Email Provided'})
Phone/WhatsApp: ${brandForm.phone || 'Direct Chat'}
Campaign Type: ${brandForm.service}
Target Scale: ${brandForm.creatorScale}
Platforms: ${brandForm.platform}
Deliverables: ${brandForm.deliverables.join(', ')}
Budget Range: ${brandForm.budgetRange}
Audience / Notes: ${brandForm.message || 'Custom shortlist requested'}`;
    handleCopy(briefText, 'fullBrief');
  };

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBrandSubmitted(true);
  };

  const handleCreatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCreatorSubmitted(true);
  };

  // WhatsApp quick triggers
  const raw = contactInfo.phone ? contactInfo.phone.replace(/[^0-9]/g, '') : '919876543210';
  const num = raw.length === 10 ? `91${raw}` : raw;

  const openBrandWhatsAppPitch = () => {
    const text = encodeURIComponent(
      `*Hi CREATORHAI Team!*\n\nWe want to launch a creator marketing campaign for *${
        brandForm.brandName || 'our brand'
      }*.\n\n*Service Goal:* ${brandForm.service}\n*Scale:* ${brandForm.creatorScale}\n*Target Platforms:* ${
        brandForm.platform
      }\n*Deliverables:* ${brandForm.deliverables.join(', ')}\n*Budget Range:* ${
        brandForm.budgetRange
      }\n*Contact Email/Phone:* ${brandForm.email || ''} ${brandForm.phone || ''}\n*Brief Notes:* ${
        brandForm.message || 'Custom creator shortlist requested'
      }`
    );
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  const openCreatorWhatsAppPitch = () => {
    const text = encodeURIComponent(
      `*Hi CREATORHAI Talent Team!*\n\nI want to apply to join the CreatorHai Creator Roster.\n\n*Name:* ${
        creatorForm.creatorName || 'Creator'
      }\n*Handle:* ${creatorForm.handle || '@handle'}\n*Platform:* ${
        creatorForm.platform
      }\n*Follower Scale:* ${creatorForm.followers}\n*Niche:* ${
        creatorForm.niche
      }\n*City:* ${creatorForm.city || 'India'}\n*Phone:* ${
        creatorForm.phone || 'Direct WhatsApp'
      }\n*Details:* ${creatorForm.message || 'Looking for paid brand collaborations'}`
    );
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  const selectedPresetObj = presets.find((p) => p.id === activePreset) || presets[1];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#08090d] relative overflow-hidden border-t border-white/10">
      {/* Dynamic Background Glows */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-25 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.accent }}
      />
      <div
        className="absolute bottom-10 left-0 w-[450px] h-[300px] rounded-full blur-[150px] pointer-events-none opacity-20 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.secondaryAccent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{
              backgroundColor: themeConfig.accentBg,
              borderColor: themeConfig.accentBorder,
              color: themeConfig.accentText,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 — LET'S CONNECT • COLLABORATION HUB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1] sm:leading-[1.08]">
            Let's Build Something Great — <br />
            <span className="font-serif italic font-normal text-white">
              Together.
            </span>
          </h2>

          <div className="mt-3 text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span>CREATORHAI — Connecting Brands with the Right Creators.</span>
          </div>

          <p className="mt-4 text-base sm:text-lg text-neutral-200 max-w-2xl leading-relaxed">
            We bring brands and relevant creators together to execute impactful, strategic, and high-converting campaigns. Choose your path below to connect directly with our campaign directors.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* PURPOSE-HIGHLIGHTED AUDIENCE SWITCHER: WHICH ONE ARE YOU?     */}
        {/* ============================================================== */}
        <div className="mb-10 p-2 sm:p-2.5 rounded-3xl bg-[#111219] border border-white/15 max-w-4xl shadow-2xl">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 px-4 pt-2 pb-1.5 flex items-center justify-between">
            <span>STEP 1: SELECT YOUR BELONGING & PURPOSE</span>
            <span className="text-[10px] text-amber-300 font-mono">Click to switch form mode</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {/* TRACK 1: FOR BRANDS (HIGHLIGHTED) */}
            <button
              type="button"
              onClick={() => setAudienceTrack('brand')}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 relative overflow-hidden group cursor-pointer border ${
                audienceTrack === 'brand'
                  ? 'bg-gradient-to-br from-emerald-500/25 via-[#13201a] to-[#0d1512] border-emerald-400 shadow-xl scale-[1.01]'
                  : 'bg-black/40 border-white/10 hover:border-white/20 hover:bg-black/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  👑 HIGHLIGHTED FOR BRANDS & AGENCIES
                </span>
                {audienceTrack === 'brand' && (
                  <Check className="w-4 h-4 text-emerald-400" />
                )}
              </div>
              <div className="font-display font-extrabold text-base sm:text-lg text-white group-hover:text-emerald-200 transition-colors">
                I Want Creators For My Brand / Campaign
              </div>
              <p className="text-xs text-neutral-300 mt-1 leading-snug">
                Launch creator campaigns, get UGC ad creatives, boost store footfall, and receive custom creator rosters with pricing.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                <span>Active Track: Campaign Brief & Shortlist Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* TRACK 2: FOR CREATORS & INFLUENCERS */}
            <button
              type="button"
              onClick={() => setAudienceTrack('creator')}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 relative overflow-hidden group cursor-pointer border ${
                audienceTrack === 'creator'
                  ? 'bg-gradient-to-br from-purple-500/25 via-[#1a1324] to-[#120d1c] border-purple-400 shadow-xl scale-[1.01]'
                  : 'bg-black/40 border-white/10 hover:border-white/20 hover:bg-black/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-400/20 text-purple-300 border border-purple-400/40"
                >
                  <Users className="w-3 h-3" />
                  FOR CREATORS & TALENT
                </span>
                {audienceTrack === 'creator' && (
                  <Check className="w-4 h-4 text-purple-400" />
                )}
              </div>
              <div className="font-display font-extrabold text-base sm:text-lg text-white group-hover:text-purple-200 transition-colors">
                I Am A Creator / Influencer
              </div>
              <p className="text-xs text-neutral-300 mt-1 leading-snug">
                Join our verified agency roster to get matched with paid brand sponsorships, product barter gifting, and commercial casting.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-purple-300">
                <span>Active Track: Creator Profile & Media Kit Onboarding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BRAND TRACK CONTENT                                            */}
        {/* ============================================================== */}
        {audienceTrack === 'brand' && (
          <>
            {/* 1-CLICK CAMPAIGN ARCHETYPE PRESETS */}
            <div className="mb-10">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 mb-3 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>STEP 2: SELECT CAMPAIGN BLUEPRINT (FOR BRANDS)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {presets.map((preset) => {
                  const isSelected = activePreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset)}
                      aria-label={`Select ${preset.label} campaign blueprint`}
                      className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                        isSelected
                          ? 'bg-[#181a24] border-emerald-400 shadow-2xl scale-[1.01]'
                          : 'bg-[#111218]/90 border-white/10 hover:border-white/20 hover:bg-[#151620]'
                      }`}
                    >
                      {isSelected && (
                        <div
                          className="absolute top-0 left-0 right-0 h-1 bg-emerald-400"
                        />
                      )}
                      <div className="font-bold text-sm text-white mb-1 flex items-center justify-between">
                        <span>{preset.label}</span>
                        {isSelected && (
                          <Check
                            className="w-4 h-4 shrink-0 text-emerald-400"
                          />
                        )}
                      </div>
                      <p className="text-xs text-neutral-300 leading-snug">{preset.desc}</p>
                      <div className="mt-2 text-[10px] font-mono text-emerald-300 font-semibold">
                        Turnaround: {preset.turnaround}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MAIN STUDIO GRID FOR BRANDS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT: INTERACTIVE BRIEF CONFIGURATOR FOR BRANDS */}
              <div
                id="contact-interactive-studio"
                className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-[#12141c]/95 border border-white/15 shadow-2xl backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                      STEP 3: FILL BRAND CAMPAIGN SPECIFICATIONS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                      Brand Campaign Brief Builder
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-400/15 border border-emerald-400/30 text-emerald-300">
                    For Brands & Agencies
                  </span>
                </div>

                {brandSubmitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white">
                        Brand Campaign Brief Received!
                      </h4>
                      <p className="text-sm text-neutral-200 mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-white">{brandForm.brandName || 'Brand Partner'}</strong>. Our creator matchmaking leads are curating your custom creator roster right now.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/60 border border-white/10 max-w-md mx-auto text-left text-xs font-mono text-neutral-300 space-y-1.5">
                      <div>• Deliverables: {brandForm.deliverables.join(', ')}</div>
                      <div>• Creator Scale: {brandForm.creatorScale}</div>
                      <div>• Confirmation email sent to: {brandForm.email || 'Provided contact'}</div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <button
                        onClick={handleCopyBrandBrief}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedKey === 'fullBrief' ? 'Brief Copied!' : 'Copy Executive Brief'}</span>
                      </button>

                      <button
                        onClick={() => setBrandSubmitted(false)}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors cursor-pointer"
                      >
                        Adjust Parameters
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBrandSubmit} className="space-y-6">
                    {/* Brand Name & Contact Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="brief-brand-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                          Brand / Company Name *
                        </label>
                        <input
                          id="brief-brand-name"
                          required
                          type="text"
                          placeholder="e.g. Minimalist Skin Co. / upGrad"
                          value={brandForm.brandName}
                          onChange={(e) => setBrandForm({ ...brandForm, brandName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <label htmlFor="brief-contact-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                          Contact Person Name *
                        </label>
                        <input
                          id="brief-contact-name"
                          required
                          type="text"
                          placeholder="e.g. Priya Sharma (Brand Lead)"
                          value={brandForm.contactName}
                          onChange={(e) => setBrandForm({ ...brandForm, contactName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Work Email & Phone / WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="brief-work-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                          Work Email *
                        </label>
                        <input
                          id="brief-work-email"
                          required
                          type="email"
                          placeholder="marketing@brand.com"
                          value={brandForm.email}
                          onChange={(e) => setBrandForm({ ...brandForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <label htmlFor="brief-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          id="brief-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={brandForm.phone}
                          onChange={(e) => setBrandForm({ ...brandForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Creator Scale Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200">
                          Target Creator Pool Size
                        </label>
                        <span className="text-[11px] font-mono text-neutral-400">Selected: {brandForm.creatorScale}</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {creatorScales.map((scale) => {
                          const isScaleSelected = brandForm.creatorScale === scale.id;
                          return (
                            <button
                              type="button"
                              key={scale.id}
                              onClick={() => setBrandForm({ ...brandForm, creatorScale: scale.id })}
                              aria-label={`Select creator scale: ${scale.label} (${scale.tier})`}
                              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                                isScaleSelected
                                  ? 'bg-emerald-400 text-black font-extrabold border-emerald-400 shadow-lg'
                                  : 'bg-black/50 text-neutral-300 border-white/10 hover:border-white/25 hover:text-white'
                              }`}
                            >
                              <div className="text-xs font-bold">{scale.label}</div>
                              <div className="text-[10px] opacity-80 font-mono">{scale.tier}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Deliverables Checklist Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        Deliverable Modules Required
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {deliverableOptions.map((opt) => {
                          const isChecked = brandForm.deliverables.includes(opt.id);
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => toggleDeliverable(opt.id)}
                              aria-label={`Toggle deliverable: ${opt.label}`}
                              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 border cursor-pointer ${
                                isChecked
                                  ? 'bg-emerald-500/20 text-white border-emerald-400 shadow-md font-bold'
                                  : 'bg-black/40 text-neutral-400 border-white/10 hover:border-white/20 hover:text-neutral-200'
                              }`}
                            >
                              <div
                                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                                  isChecked ? 'bg-emerald-400 text-black font-bold' : 'border border-neutral-500'
                                }`}
                              >
                                {isChecked && '✓'}
                              </div>
                              <span>{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Target Audience & Guidelines */}
                    <div>
                      <label htmlFor="brief-target-audience" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        Target Audience, Industry Niche & Campaign Objectives
                      </label>
                      <textarea
                        id="brief-target-audience"
                        rows={3}
                        placeholder="E.g., Looking for tier-1 education or lifestyle creators to drive app downloads and course signups. Need authentic conversational tone similar to The Sarkari Rise campaign..."
                        value={brandForm.message}
                        onChange={(e) => setBrandForm({ ...brandForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-all shadow-inner"
                      />
                    </div>

                    {/* ============================================================== */}
                    {/* BUTTON ACTION SUITE: CRYSTAL-CLEAR PURPOSE BADGES FOR BRANDS   */}
                    {/* ============================================================== */}
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                        <span>WHAT WOULD YOU LIKE TO DO NEXT?</span>
                        <span className="text-emerald-400 font-semibold">Two options available</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* BUTTON 1: SUBMIT BRAND BRIEF */}
                        <button
                          type="submit"
                          className="p-4 rounded-2xl text-left bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-display shadow-2xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-black/20 text-black">
                              FOR BRANDS • SUBMIT BRIEF
                            </span>
                            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                          </div>
                          <div className="font-extrabold text-sm sm:text-base leading-snug">
                            Submit Campaign Brief →
                          </div>
                          <div className="text-[11px] opacity-90 mt-1 leading-tight font-medium">
                            Receive curated creator deck & pricing shortlist in 24 hours.
                          </div>
                        </button>

                        {/* BUTTON 2: 1-TAP WHATSAPP PITCH */}
                        <button
                          type="button"
                          onClick={openBrandWhatsAppPitch}
                          className="p-4 rounded-2xl text-left bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-white font-display shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300">
                              INSTANT 1-TAP CHAT
                            </span>
                            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="font-extrabold text-sm sm:text-base leading-snug text-emerald-300">
                            Send to WhatsApp Directly
                          </div>
                          <div className="text-[11px] text-neutral-300 mt-1 leading-tight">
                            Opens WhatsApp with your pre-filled campaign brief instantly.
                          </div>
                        </button>
                      </div>

                      {/* Brief Copy Micro-Action */}
                      <div className="text-center pt-1">
                        <button
                          type="button"
                          onClick={handleCopyBrandBrief}
                          className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copiedKey === 'fullBrief' ? 'Brief Copied to Clipboard!' : 'Or copy text brief to clipboard for your internal team'}</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* RIGHT: DYNAMIC FORECASTER & DIRECT AGENCY CHANNELS FOR BRANDS */}
              <div className="lg:col-span-5 space-y-6">
                {/* Real-time Project Architecture Forecast Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#12141c]/95 border border-white/15 shadow-2xl backdrop-blur-xl text-left relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      ESTIMATED CAMPAIGN ARCHITECTURE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400 text-black">
                      LIVE FORECAST
                    </span>
                  </div>

                  {/* Dynamic Metrics */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-2xl bg-black/50 border border-white/10">
                      <div className="text-[11px] font-mono text-neutral-400 uppercase flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Projected Campaign Reach</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                        {selectedPresetObj.estReach}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">
                        Calculated for {brandForm.creatorScale} across selected channels
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                        <div className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-400" />
                          <span>Shortlist</span>
                        </div>
                        <div className="text-base font-bold text-white mt-0.5">24–48 Hours</div>
                        <div className="text-[10px] text-neutral-400">Handpicked creators</div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                        <div className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1">
                          <Film className="w-3 h-3 text-emerald-400" />
                          <span>Go-Live</span>
                        </div>
                        <div className="text-base font-bold text-white mt-0.5">{selectedPresetObj.turnaround}</div>
                        <div className="text-[10px] text-neutral-400">Content production</div>
                      </div>
                    </div>
                  </div>

                  {/* Inclusions Guarantee */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs font-mono font-bold uppercase text-neutral-300 mb-3">
                      CREATOR HAI 100% Brand Guarantee:
                    </div>
                    <div className="space-y-2 text-xs text-neutral-200">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>100% Genuine Follower & Engagement Audit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Full Script & Creative Draft Approval</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Commercial Whitelisting & Ad Usage Rights</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>End-to-End Creator Coordination & Publishing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Agency Channels */}
                <div className="p-6 rounded-3xl bg-[#12141c]/95 border border-white/10 text-left space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 mb-2">
                    DIRECT AGENCY CHANNELS (BRANDS & CREATORS)
                  </div>

                  {/* Direct Phone / WhatsApp */}
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Direct Desk & WhatsApp</div>
                        <a href={`tel:${contactInfo.phone}`} className="text-xs font-bold text-white hover:underline">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(contactInfo.phone, 'phone')}
                      aria-label="Copy direct agency phone number"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors cursor-pointer"
                      title="Copy Phone"
                    >
                      {copiedKey === 'phone' ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-rose-500/10 text-rose-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-neutral-400 uppercase">Executive Brand Desk</div>
                        <a href={`mailto:${contactInfo.email}`} className="text-xs font-bold text-white hover:underline">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(contactInfo.email, 'email')}
                      aria-label="Copy executive email"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedKey === 'email' ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ============================================================== */}
        {/* CREATOR TRACK CONTENT                                          */}
        {/* ============================================================== */}
        {audienceTrack === 'creator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: CREATOR ONBOARDING FORM */}
            <div
              className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-[#14121c]/95 border border-purple-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-400">
                    FOR CREATORS & INFLUENCERS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                    Creator Roster Application
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 border border-purple-500/40 text-purple-300">
                  Talent Directory
                </span>
              </div>

              {creatorSubmitted ? (
                <div className="py-12 px-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-white">
                      Creator Application Submitted!
                    </h4>
                    <p className="text-sm text-neutral-200 mt-2 max-w-md mx-auto leading-relaxed">
                      Welcome, <strong className="text-white">{creatorForm.creatorName || 'Creator'}</strong>. Our talent managers will review your profile and match you with relevant brand campaigns.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 max-w-md mx-auto text-left text-xs font-mono text-neutral-300 space-y-1.5">
                    <div>• Handle: {creatorForm.handle}</div>
                    <div>• Primary Niche: {creatorForm.niche}</div>
                    <div>• Scale: {creatorForm.followers}</div>
                  </div>

                  <button
                    onClick={() => setCreatorSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    Submit Another Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreatorSubmit} className="space-y-6">
                  {/* Name and Handle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="creator-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        Creator / Stage Name *
                      </label>
                      <input
                        id="creator-name"
                        required
                        type="text"
                        placeholder="e.g. Aman Verma"
                        value={creatorForm.creatorName}
                        onChange={(e) => setCreatorForm({ ...creatorForm, creatorName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label htmlFor="creator-handle" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        Social Handle / Channel Link *
                      </label>
                      <input
                        id="creator-handle"
                        required
                        type="text"
                        placeholder="@yourhandle or youtube.com/@channel"
                        value={creatorForm.handle}
                        onChange={(e) => setCreatorForm({ ...creatorForm, handle: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Followers & Primary Niche */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="creator-followers" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        Follower / Subscriber Scale
                      </label>
                      <select
                        id="creator-followers"
                        value={creatorForm.followers}
                        onChange={(e) => setCreatorForm({ ...creatorForm, followers: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-purple-400 transition-all"
                      >
                        <option value="5K – 25K (Micro)">5K – 25K (Micro Creator)</option>
                        <option value="25K – 100K (Mid-Tier)">25K – 100K (Mid-Tier Creator)</option>
                        <option value="100K – 500K (Macro)">100K – 500K (Macro Creator)</option>
                        <option value="500K+ (Mega/Celebrity)">500K+ (Mega / Celebrity)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="creator-niche" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        Primary Content Niche
                      </label>
                      <select
                        id="creator-niche"
                        value={creatorForm.niche}
                        onChange={(e) => setCreatorForm({ ...creatorForm, niche: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-purple-400 transition-all"
                      >
                        <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
                        <option value="EdTech & Education">EdTech & Education</option>
                        <option value="Technology & Gadgets">Technology & Gadgets</option>
                        <option value="FMCG & Food/Cooking">FMCG & Food / Cooking</option>
                        <option value="Health, Fitness & Wellness">Health, Fitness & Wellness</option>
                        <option value="Finance & Career">Finance & Career</option>
                      </select>
                    </div>
                  </div>

                  {/* Phone & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="creator-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        id="creator-phone"
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={creatorForm.phone}
                        onChange={(e) => setCreatorForm({ ...creatorForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label htmlFor="creator-city" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                        City / Base
                      </label>
                      <input
                        id="creator-city"
                        type="text"
                        placeholder="e.g. Mumbai, Delhi, Bengaluru"
                        value={creatorForm.city}
                        onChange={(e) => setCreatorForm({ ...creatorForm, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Notes / Past Brands */}
                  <div>
                    <label htmlFor="creator-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                      Past Collaborations or Commercial Rate Card / Media Kit Link
                    </label>
                    <textarea
                      id="creator-message"
                      rows={3}
                      placeholder="Paste link to your Google Drive media kit, previous viral reels, or rates per reel/integration..."
                      value={creatorForm.message}
                      onChange={(e) => setCreatorForm({ ...creatorForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-all shadow-inner"
                    />
                  </div>

                  {/* CREATOR ACTION SUITE: CLEAR BUTTON LABELS */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      SUBMIT YOUR APPLICATION OR DIRECT WHATSAPP CHAT
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* BUTTON 1: SUBMIT CREATOR APPLICATION */}
                      <button
                        type="submit"
                        className="p-4 rounded-2xl text-left bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-display shadow-2xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-black/30 text-white">
                            FOR CREATORS • JOIN ROSTER
                          </span>
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="font-extrabold text-sm sm:text-base leading-snug">
                          Submit to Agency Roster →
                        </div>
                        <div className="text-[11px] opacity-90 mt-1 leading-tight font-medium">
                          Get discovered for paid sponsorships & high-budget brand deals.
                        </div>
                      </button>

                      {/* BUTTON 2: 1-TAP WHATSAPP FOR CREATORS */}
                      <button
                        type="button"
                        onClick={openCreatorWhatsAppPitch}
                        className="p-4 rounded-2xl text-left bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-emerald-300 font-display shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#25D366]/20 text-[#25D366]">
                            FAST-TRACK TALENT DESK
                          </span>
                          <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="font-extrabold text-sm sm:text-base leading-snug text-white">
                          Chat on WhatsApp
                        </div>
                        <div className="text-[11px] text-neutral-300 mt-1 leading-tight">
                          Connect directly with our talent manager to share your media kit.
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: CREATOR BENEFITS CARD */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#14121c]/95 border border-purple-500/20 shadow-2xl backdrop-blur-xl text-left space-y-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  CREATOR ADVANTAGES
                </span>
                <h3 className="text-xl font-display font-extrabold text-white">
                  Why Creators Love Partnering With CreatorHai:
                </h3>
                <div className="space-y-3 text-xs text-neutral-200 pt-2">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Timely & Transparent Payouts:</strong>
                      <p className="text-neutral-400 mt-0.5">Guaranteed payment schedules with zero follow-up friction.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Quality Brand Alignments:</strong>
                      <p className="text-neutral-400 mt-0.5">Work with respected brands across EdTech, Fashion, FMCG, Tech & Wellness.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Creative Freedom:</strong>
                      <p className="text-neutral-400 mt-0.5">We champion creator-first scripts that keep your authentic voice intact.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-[11px] text-neutral-400">
                    Prefer direct chat? WhatsApp our talent team at <strong className="text-white">{contactInfo.phone}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Official Representational Disclaimer Box */}
        <div className="mt-16 p-6 sm:p-7 rounded-3xl bg-[#111219]/90 border border-white/10 text-left shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Official Representational Disclaimer
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Portfolio Showcase
              </span>
            </div>
            <button
              onClick={openRepresentationalModal}
              className="text-xs text-amber-300 hover:text-white underline font-semibold transition-colors cursor-pointer"
            >
              Read Full Representational Standards →
            </button>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            This website is curated as a <strong>representational portfolio and pitch showcase</strong> to illustrate CreatorHai's creator marketing frameworks, strategic pipelines, and campaign execution models. All third-party brand names, category references (such as upGrad, Simplilearn, Colgate, Everest Masala, Libas, Biba, Vivo, realme, Vicks, Plant-Based Sugar Control), registered trademarks, company logos, and creator content are the intellectual property of their respective owners. Mentioning these references does not imply official direct corporate sponsorship or endorsement where not specifically verified.
          </p>
        </div>

        {/* Footer Brand Signoff & Internal Linking Architecture */}
        <footer className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6" role="contentinfo">
          {/* Pure clean brand wordmark (logo icon removed) */}
          <BrandLogo variant="navbar" size="md" />

          {/* Crawlable Internal Links Graph */}
          <nav aria-label="Footer quick links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#approach" className="hover:text-white transition-colors">9-Step Approach</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Study</a>
            <a href="#ugc" className="hover:text-white transition-colors">UGC</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="text-xs text-neutral-400 font-mono text-center md:text-right">
            <div>© {new Date().getFullYear()} CREATORHAI. Representational Agency Portfolio.</div>
            <div className="text-[10px] text-neutral-500 mt-0.5">All trademarks belong to their respective owners.</div>
          </div>
        </footer>
      </div>
    </section>
  );
};
