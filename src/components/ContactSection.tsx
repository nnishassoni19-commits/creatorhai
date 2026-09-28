import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import {
  Mail,
  Instagram,
  Phone,
  Globe,
  Send,
  CheckCircle2,
  Copy,
  Edit2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Film,
  Store,
  MessageCircle,
  Clock,
  TrendingUp,
  Layers,
  Check
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contactInfo, updateContactInfo, themeConfig, isEditMode } = useAgency();

  // Campaign Archetype Presets
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

  const [formState, setFormState] = useState({
    brandName: '',
    email: '',
    service: 'Paid Creator Campaigns',
    platform: 'Instagram + YouTube',
    creatorScale: '50-100 Creators',
    deliverables: ['Instagram Reels', 'UGC Ad Usage Rights'],
    targetAudience: '',
    budgetRange: '$5,000 – $20,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
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
    setFormState((prev) => ({
      ...prev,
      service: preset.defaultService,
      platform: preset.defaultPlatform,
      creatorScale: preset.defaultCount,
    }));
  };

  const toggleDeliverable = (item: string) => {
    setFormState((prev) => {
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

  const handleCopyBrief = () => {
    const briefText = `CREATOR HAI — BEST INFLUENCER MARKETING AGENCY BRIEF
Brand: ${formState.brandName || 'Prospective Brand Partner'}
Email: ${formState.email || 'Contact Provided'}
Campaign Type: ${formState.service}
Target Scale: ${formState.creatorScale}
Platforms: ${formState.platform}
Deliverables: ${formState.deliverables.join(', ')}
Target Audience: ${formState.targetAudience || 'Category demographics'}
Budget Range: ${formState.budgetRange}
Notes: ${formState.message || 'Custom shortlist requested'}`;
    handleCopy(briefText, 'fullBrief');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // WhatsApp quick trigger
  const openWhatsAppPitch = () => {
    const text = encodeURIComponent(
      `Hi CREATOR HAI Team! We want to discuss a 100% working creator collaboration for ${
        formState.brandName || 'our brand'
      }.\n\nGoal: ${formState.service}\nScale: ${formState.creatorScale}\nPlatform: ${
        formState.platform
      }\nDeliverables: ${formState.deliverables.join(', ')}`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  const selectedPresetObj = presets.find((p) => p.id === activePreset) || presets[1];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#090a0e] relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-20 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.accent }}
      />
      <div
        className="absolute bottom-10 left-0 w-[450px] h-[300px] rounded-full blur-[150px] pointer-events-none opacity-15 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.secondaryAccent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
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
            <span>PARTNER WITH THE BEST INFLUENCER MARKETING AGENCY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            LAUNCH YOUR 100% WORKING CAMPAIGN <br />
            <span className="font-serif italic font-normal text-white">
              WITH CREATOR HAI.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-200 max-w-2xl leading-relaxed">
            Brief India's best influencer agency in under 2 minutes. We mathematically align our verified creator network to your exact niche, audience, and ROAS targets with 100% working execution.
          </p>
        </motion.div>

        {/* 1-CLICK CAMPAIGN ARCHETYPE PRESETS */}
        <div className="mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" style={{ color: themeConfig.accent }} />
            <span>STEP 1: SELECT CAMPAIGN BLUEPRINT</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {presets.map((preset) => {
              const isSelected = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  aria-label={`Select ${preset.label} campaign blueprint`}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#181a24] border-white/40 shadow-2xl scale-[1.01]'
                      : 'bg-[#111218]/90 border-white/10 hover:border-white/20 hover:bg-[#151620]'
                  }`}
                >
                  {isSelected && (
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: themeConfig.accent }}
                    />
                  )}
                  <div className="font-bold text-sm text-white mb-1 flex items-center justify-between">
                    <span>{preset.label}</span>
                    {isSelected && (
                      <Check
                        className="w-4 h-4 shrink-0"
                        style={{ color: themeConfig.accent }}
                      />
                    )}
                  </div>
                  <p className="text-xs text-neutral-300 leading-snug">{preset.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN STUDIO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: INTERACTIVE BRIEF CONFIGURATOR (Catchy Studio UI) */}
          <div
            id="contact-interactive-studio"
            className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-[#13141d]/95 border border-white/15 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                  STEP 2: CUSTOMIZE SPECIFICATIONS
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                  Campaign Architecture Builder
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 border border-white/10 text-neutral-300">
                Live Studio
              </span>
            </div>

            {submitted ? (
              <div className="py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    Proposal Request Dispatched!
                  </h4>
                  <p className="text-sm text-neutral-200 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formState.brandName || 'Brand Partner'}</strong>. Our creator matchmaking leads are building your tailored creator roster right now.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 max-w-md mx-auto text-left text-xs font-mono text-neutral-300 space-y-1.5">
                  <div>• Deliverables: {formState.deliverables.join(', ')}</div>
                  <div>• Creator Pool: {formState.creatorScale}</div>
                  <div>• Confirmation routed to: {formState.email || 'Provided contact'}</div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleCopyBrief}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'fullBrief' ? 'Brief Copied!' : 'Copy Executive Brief'}</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                  >
                    Adjust Parameters
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Brand & Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="brief-brand-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                      Brand / Agency Name *
                    </label>
                    <input
                      id="brief-brand-name"
                      required
                      type="text"
                      placeholder="e.g. Minimalist Skin Co."
                      value={formState.brandName}
                      onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label htmlFor="brief-work-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                      Work Email *
                    </label>
                    <input
                      id="brief-work-email"
                      required
                      type="email"
                      placeholder="marketing@brand.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Creator Scale Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-2">
                    Target Creator Pool Size
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {creatorScales.map((scale) => {
                      const isScaleSelected = formState.creatorScale === scale.id;
                      return (
                        <button
                          type="button"
                          key={scale.id}
                          onClick={() => setFormState({ ...formState, creatorScale: scale.id })}
                          aria-label={`Select creator scale: ${scale.label} (${scale.tier})`}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            isScaleSelected
                              ? 'bg-white text-black font-bold border-white shadow-lg'
                              : 'bg-black/50 text-neutral-300 border-white/10 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          <div className="text-xs">{scale.label}</div>
                          <div className="text-[10px] opacity-75 font-mono">{scale.tier}</div>
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
                      const isChecked = formState.deliverables.includes(opt.id);
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => toggleDeliverable(opt.id)}
                          aria-label={`Toggle deliverable: ${opt.label}`}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 border ${
                            isChecked
                              ? 'bg-neutral-800 text-white border-white/50 shadow-md font-bold'
                              : 'bg-black/40 text-neutral-400 border-white/10 hover:border-white/20 hover:text-neutral-200'
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                              isChecked ? 'text-black' : 'border border-neutral-500'
                            }`}
                            style={{
                              backgroundColor: isChecked ? themeConfig.accent : 'transparent',
                            }}
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
                    Target Niche, Audience, or Specific Creator Brief
                  </label>
                  <textarea
                    id="brief-target-audience"
                    rows={3}
                    placeholder="E.g., Looking for tier-1 beauty & lifestyle creators with high engagement in metro cities. Focus on honest ingredient review & discount code conversion..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>

                {/* Action Suite */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-6 rounded-2xl font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                    style={{
                      backgroundColor: themeConfig.accent,
                      color: themeConfig.accentBtnText,
                    }}
                  >
                    <span>Request Custom Creator Shortlist</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsAppPitch}
                    className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Pitch</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: DYNAMIC FORECASTER & DIRECT AGENCY CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real-time Project Architecture Forecast Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141622]/95 border border-white/15 shadow-2xl backdrop-blur-xl text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  ESTIMATED ARCHITECTURE
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-black"
                  style={{ backgroundColor: themeConfig.accent }}
                >
                  LIVE FORECAST
                </span>
              </div>

              {/* Dynamic Metrics */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" style={{ color: themeConfig.accent }} />
                    <span>Projected Campaign Reach</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                    {selectedPresetObj.estReach}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Calculated for {formState.creatorScale} across selected channels
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Shortlist</span>
                    </div>
                    <div className="text-base font-bold text-white mt-0.5">24–48 Hours</div>
                    <div className="text-[10px] text-neutral-400">Handpicked creators</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1">
                      <Film className="w-3 h-3" />
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
                  CREATOR HAI 100% Working Standards:
                </div>
                <div className="space-y-2 text-xs text-neutral-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Genuine Follower & Engagement Audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full Script Approval & Quality Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Complete Commercial Whitelisting Rights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Seamless End-to-End Creator Remittance</span>
                  </div>
                </div>
              </div>

              {/* Copy Full Brief Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={handleCopyBrief}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-neutral-200 flex items-center justify-center gap-2 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedKey === 'fullBrief' ? 'Brief Copied to Clipboard!' : 'Copy Configured Brief (for Team)'}</span>
                </button>
              </div>
            </div>

            {/* Direct Official Agency Contact Details */}
            <div className="p-6 rounded-3xl bg-[#12131b]/95 border border-white/10 text-left space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">
                DIRECT AGENCY CHANNELS
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-rose-500/10 text-rose-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Executive Email</div>
                    {isEditMode ? (
                      <input
                        type="email"
                        id="edit-agency-email"
                        aria-label="Edit executive agency email"
                        value={contactInfo.email}
                        onChange={(e) => updateContactInfo({ email: e.target.value })}
                        className="bg-black/50 border border-white/20 px-2 py-0.5 rounded text-sm text-white focus:outline-none focus:border-white"
                      />
                    ) : (
                      <a href={`mailto:${contactInfo.email}`} className="text-xs font-bold text-white hover:underline">
                        {contactInfo.email}
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  aria-label="Copy agency executive email"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                  title="Copy Email"
                >
                  {copiedKey === 'email' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Direct Desk / WhatsApp</div>
                    {isEditMode ? (
                      <input
                        type="text"
                        id="edit-agency-phone"
                        aria-label="Edit direct agency phone number"
                        value={contactInfo.phone}
                        onChange={(e) => updateContactInfo({ phone: e.target.value })}
                        className="bg-black/50 border border-white/20 px-2 py-0.5 rounded text-sm text-white focus:outline-none focus:border-white"
                      />
                    ) : (
                      <a href={`tel:${contactInfo.phone}`} className="text-xs font-bold text-white hover:underline">
                        {contactInfo.phone}
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.phone, 'phone')}
                  aria-label="Copy agency direct phone number"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                  title="Copy Phone"
                >
                  {copiedKey === 'phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Instagram */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-pink-500/10 text-pink-400">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Official Instagram</div>
                    <a
                      href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white hover:underline"
                    >
                      {contactInfo.instagram}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.instagram, 'insta')}
                  aria-label="Copy agency Instagram handle"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                  title="Copy Instagram"
                >
                  {copiedKey === 'insta' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Website */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-sky-500/10 text-sky-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Agency Portal</div>
                    <span className="text-xs font-bold text-white">
                      {contactInfo.website}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.website, 'web')}
                  aria-label="Copy agency website address"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                  title="Copy Website"
                >
                  {copiedKey === 'web' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Brand Signoff */}
        <footer className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6" role="contentinfo">
          <div>
            <div className="font-display font-black text-xl text-white tracking-tight">
              CREATOR HAI
            </div>
            <div className="text-xs text-neutral-300 mt-0.5">
              India's Best Influencer Marketing Agency • Best Influencer Agency for 100% Working ROI
            </div>
          </div>

          <div className="text-xs text-neutral-400 font-mono">
            © {new Date().getFullYear()} CREATOR HAI. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};
