import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  X,
  CheckCircle2,
  User,
  Building,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useAgency } from '../context/AgencyContext';

interface TopInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'brand' | 'creator';
}

export const TopInquiryModal: React.FC<TopInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'brand'
}) => {
  const { themeConfig, contactInfo } = useAgency();
  const [activeTab, setActiveTab] = useState<'brand' | 'creator'>(defaultMode);

  // Sync tab mode whenever modal opens or defaultMode changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultMode);
    }
  }, [isOpen, defaultMode]);

  // Form 1: Brand / Campaign Inquiry
  const [brandForm, setBrandForm] = useState({
    name: '',
    brandName: '',
    email: '',
    phone: '',
    service: 'Influencer Marketing',
    budget: '₹50,000 – ₹2,00,000',
    message: ''
  });

  // Form 2: Creator Onboarding / Collab Application
  const [creatorForm, setCreatorForm] = useState({
    name: '',
    handle: '',
    platform: 'Instagram',
    followers: '10K – 50K',
    category: 'Fashion & Lifestyle',
    phone: '',
    city: '',
    message: ''
  });

  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Clean numeric phone for WhatsApp wa.me link
  const rawPhone = contactInfo.phone ? contactInfo.phone.replace(/[^0-9]/g, '') : '919876543210';
  const whatsappNumber = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;

  // Brand direct WhatsApp trigger
  const handleBrandWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Brand Inquiry - CreatorHai*\n\n` +
      `*Name:* ${brandForm.name || 'Not specified'}\n` +
      `*Brand/Company:* ${brandForm.brandName || 'Not specified'}\n` +
      `*Service Required:* ${brandForm.service}\n` +
      `*Budget Range:* ${brandForm.budget}\n` +
      `*Phone/WhatsApp:* ${brandForm.phone || 'Direct Chat'}\n` +
      `*Email:* ${brandForm.email || 'N/A'}\n` +
      (brandForm.message ? `*Brief/Details:* ${brandForm.message}\n` : '') +
      `\n_Sent directly via CreatorHai Website_`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setSubmittedMessage('Opening WhatsApp with your Brand Inquiry...');
    setTimeout(() => {
      setSubmittedMessage(null);
      onClose();
    }, 2200);
  };

  // Creator direct WhatsApp trigger
  const handleCreatorWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Creator Collaboration - CreatorHai*\n\n` +
      `*Creator Name:* ${creatorForm.name || 'Creator'}\n` +
      `*Handle/Profile:* ${creatorForm.handle || '@handle'}\n` +
      `*Primary Platform:* ${creatorForm.platform}\n` +
      `*Follower Range:* ${creatorForm.followers}\n` +
      `*Niche/Category:* ${creatorForm.category}\n` +
      `*City/Base:* ${creatorForm.city || 'India'}\n` +
      `*Contact Phone:* ${creatorForm.phone || 'Direct Chat'}\n` +
      (creatorForm.message ? `*Collaboration Note:* ${creatorForm.message}\n` : '') +
      `\n_Sent directly via CreatorHai Website_`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setSubmittedMessage('Opening WhatsApp with your Creator Profile...');
    setTimeout(() => {
      setSubmittedMessage(null);
      onClose();
    }, 2200);
  };

  // Instant direct 1-tap WhatsApp chat
  const handleDirectInstantChat = () => {
    const text = encodeURIComponent(
      `Hi CreatorHai Team! I'm visiting your website and would like to connect directly regarding a campaign collaboration.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-dialog-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden"
    >
      {/* Dimmed Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Responsive Modal Card (Constrained strictly to 92vh on mobile & laptop, scroll inside body) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-[#0d0e14] border border-white/20 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col z-10 text-left overflow-hidden select-text"
      >
        {/* Sticky Header Banner */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#171822] via-[#12131b] to-[#0d0e14] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center text-black font-extrabold shadow-md shrink-0"
              style={{ backgroundColor: themeConfig.accent }}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-black tracking-wider uppercase" style={{ color: themeConfig.accent }}>
                  CREATORHAI
                </span>
                <span className="text-white/30 text-xs hidden sm:inline">·</span>
                <h3
                  id="inquiry-dialog-title"
                  className="font-display font-extrabold text-sm sm:text-base text-white truncate"
                >
                  Direct WhatsApp Inquiry
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                  1-Tap WhatsApp
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-400 truncate">
                Direct to Agency WhatsApp: <strong className="text-white">{contactInfo.phone}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Inquiry Modal"
            className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1-Tap Quick Action Bar */}
        <div className="shrink-0 px-4 sm:px-6 py-2.5 bg-emerald-950/40 border-b border-emerald-500/20 flex flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-300 font-medium text-[11px] sm:text-xs truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">Active Now • Fast Response</span>
          </div>
          <button
            type="button"
            onClick={handleDirectInstantChat}
            className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-md text-[11px] sm:text-xs shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Chat Directly</span>
          </button>
        </div>

        {/* Tab Switcher: Clear Role Belongings (Brands vs Creators) */}
        <div className="shrink-0 px-4 sm:px-6 pt-3 sm:pt-4 pb-2 bg-[#0d0e14]">
          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center justify-between">
            <span>WHO ARE YOU CONNECTING AS?</span>
            <span className="text-emerald-400 font-bold">Select Role</span>
          </div>
          <div className="grid grid-cols-2 p-1 rounded-xl sm:rounded-2xl bg-black/60 border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('brand')}
              className={`py-2 px-1.5 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer ${
                activeTab === 'brand'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-black shadow-lg font-extrabold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Building className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">👑 For Brands <span className="hidden xs:inline">(Launch)</span></span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('creator')}
              className={`py-2 px-1.5 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer ${
                activeTab === 'creator'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-black shadow-lg font-extrabold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">✨ For Creators <span className="hidden xs:inline">(Roster)</span></span>
            </button>
          </div>
        </div>

        {/* Scrollable Form Body Container (Handles any screen height smoothly) */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-3 sm:py-4 overscroll-contain">
          {submittedMessage ? (
            <div className="py-10 px-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 my-auto">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white">
                {submittedMessage}
              </h4>
              <p className="text-xs text-neutral-300">
                If WhatsApp didn't open automatically,{' '}
                <button
                  type="button"
                  onClick={handleDirectInstantChat}
                  className="text-emerald-400 underline font-bold"
                >
                  tap here to launch WhatsApp directly
                </button>
                .
              </p>
            </div>
          ) : activeTab === 'brand' ? (
            /* FORM 1: BRAND / CLIENT INQUIRY FORM */
            <form onSubmit={handleBrandWhatsApp} className="space-y-3.5">
              <div className="text-[11px] sm:text-xs text-neutral-300 font-medium pb-0.5">
                Tell us about your brand. Tapping submit sends your inquiry directly to our agency WhatsApp.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={brandForm.name}
                    onChange={(e) => setBrandForm({ ...brandForm, name: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Brand / Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Minimalist, Libas, Vivo"
                    value={brandForm.brandName}
                    onChange={(e) => setBrandForm({ ...brandForm, brandName: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={brandForm.phone}
                    onChange={(e) => setBrandForm({ ...brandForm, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Work Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@brand.com"
                    value={brandForm.email}
                    onChange={(e) => setBrandForm({ ...brandForm, email: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Service Required
                  </label>
                  <select
                    value={brandForm.service}
                    onChange={(e) => setBrandForm({ ...brandForm, service: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/80 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-white transition-all"
                  >
                    <option value="Influencer Marketing">Influencer Marketing (Paid / Scale)</option>
                    <option value="UGC & Content Creation">UGC & Content Creation (Ad-Ready)</option>
                    <option value="Creator Discovery">Creator Discovery & Shortlisting</option>
                    <option value="D2C Brand Marketing">D2C Brand Marketing (Performance)</option>
                    <option value="Local Store Activations">Local Store Activations & Visits</option>
                    <option value="Full Campaign Management">End-to-End Campaign Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={brandForm.budget}
                    onChange={(e) => setBrandForm({ ...brandForm, budget: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/80 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-white transition-all"
                  >
                    <option value="Under ₹50,000">Under ₹50,000 (Barter / Seeding)</option>
                    <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000 (Micro Blitz)</option>
                    <option value="₹2,00,000 – ₹5,00,000">₹2,00,000 – ₹5,00,000 (Multi-Creator)</option>
                    <option value="₹5,00,000+">₹5,00,000+ (Scale Campaign)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Brief / Requirement Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you're looking for (e.g., 20 beauty creators for a product launch next month)..."
                  value={brandForm.message}
                  onChange={(e) => setBrandForm({ ...brandForm, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                />
              </div>

              {/* Action Button for Brands */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>[FOR BRANDS] Send Campaign Brief to WhatsApp</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </form>
          ) : (
            /* FORM 2: CREATOR COLLABORATION FORM */
            <form onSubmit={handleCreatorWhatsApp} className="space-y-3.5">
              <div className="text-[11px] sm:text-xs text-neutral-300 font-medium pb-0.5">
                Join our creator roster to collaborate with leading brands. Fill details to connect directly via WhatsApp.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Priya Singh"
                    value={creatorForm.name}
                    onChange={(e) => setCreatorForm({ ...creatorForm, name: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Social Handle / Profile Link *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="@yourhandle or profile link"
                    value={creatorForm.handle}
                    onChange={(e) => setCreatorForm({ ...creatorForm, handle: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Primary Platform
                  </label>
                  <select
                    value={creatorForm.platform}
                    onChange={(e) => setCreatorForm({ ...creatorForm, platform: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/80 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-white transition-all"
                  >
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Both Instagram & YouTube">Both Instagram & YouTube</option>
                    <option value="UGC Creator (Ad Filming)">UGC Creator (Ad Actor)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Followers
                  </label>
                  <select
                    value={creatorForm.followers}
                    onChange={(e) => setCreatorForm({ ...creatorForm, followers: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/80 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-white transition-all"
                  >
                    <option value="Nano (1K – 10K)">Nano (1K – 10K)</option>
                    <option value="Micro (10K – 50K)">Micro (10K – 50K)</option>
                    <option value="Mid-Tier (50K – 200K)">Mid-Tier (50K – 200K)</option>
                    <option value="Macro (200K+)">Macro (200K+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Niche / Category
                  </label>
                  <select
                    value={creatorForm.category}
                    onChange={(e) => setCreatorForm({ ...creatorForm, category: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/80 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-white transition-all"
                  >
                    <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
                    <option value="Beauty & Skincare">Beauty & Skincare</option>
                    <option value="Tech & Gadgets">Tech & Gadgets</option>
                    <option value="Fitness & Health">Fitness & Health</option>
                    <option value="Education & Finance">Education & Finance</option>
                    <option value="Food & FMCG">Food & FMCG</option>
                    <option value="Comedy & Entertainment">Comedy & Entertainment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={creatorForm.phone}
                    onChange={(e) => setCreatorForm({ ...creatorForm, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Current City / Base *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Mumbai, Pune, Delhi NCR"
                    value={creatorForm.city}
                    onChange={(e) => setCreatorForm({ ...creatorForm, city: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Collaboration Preferences / Commercials
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Open to Paid & Barter campaigns, available for store visits in Pune/Mumbai..."
                  value={creatorForm.message}
                  onChange={(e) => setCreatorForm({ ...creatorForm, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-all shadow-inner"
                />
              </div>

              {/* Action Button for Creators */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 text-black font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>[FOR CREATORS] Submit Profile to Agency WhatsApp</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sticky Modal Footer */}
        <div className="shrink-0 px-4 sm:px-6 py-2.5 bg-black/70 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Encrypted Direct WhatsApp</span>
          </span>
          <span className="font-mono text-neutral-300">{contactInfo.phone}</span>
        </div>
      </motion.div>
    </div>
  );
};
