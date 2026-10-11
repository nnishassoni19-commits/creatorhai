import React, { useState } from 'react';
import { useAgency } from '../context/AgencyContext';
import { Sparkles, Presentation, Palette, Check, ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { ColorTheme } from '../types';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const {
    colorTheme,
    setColorTheme,
    isDeckMode,
    setIsDeckMode,
    themeConfig,
    contactInfo,
    openInquiryModal,
    openRepresentationalModal,
  } = useAgency();
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppTap = () => {
    const raw = contactInfo.phone ? contactInfo.phone.replace(/[^0-9]/g, '') : '919876543210';
    const num = raw.length === 10 ? `91${raw}` : raw;
    const text = encodeURIComponent(
      `Hi CreatorHai Team! We are looking to collaborate with creators / launch an influencer campaign for our brand.`
    );
    window.open(`https://wa.me/${num}?text=${text}`, '_blank');
  };

  const themes: {
    id: ColorTheme;
    label: string;
    pairText: string;
    primary: string;
    secondary: string;
    tag?: string;
  }[] = [
    {
      id: 'neon-pink',
      label: 'Neon Pink & Cyber Mint',
      pairText: 'Hot Pink + Mint Contrast',
      primary: '#FF1E88',
      secondary: '#00F5D4',
      tag: 'Default Contrast',
    },
    {
      id: 'magenta-lime',
      label: 'Magenta & Volt Lime',
      pairText: 'Hot Magenta + Volt',
      primary: '#FF007F',
      secondary: '#CCFF00',
      tag: 'High Voltage',
    },
    {
      id: 'rose-amber',
      label: 'Sunset Rose & Amber',
      pairText: 'Rose Pink + Warm Amber',
      primary: '#FB7185',
      secondary: '#FBBF24',
      tag: 'Warm Harmony',
    },
    {
      id: 'electric-violet',
      label: 'Hot Pink & Neon Violet',
      pairText: 'Hot Pink + Violet',
      primary: '#FF2A85',
      secondary: '#A855F7',
      tag: 'Cyberpunk',
    },
    {
      id: 'lime',
      label: 'Electric Lime & Emerald',
      pairText: 'Chartreuse + Emerald',
      primary: '#CCFF00',
      secondary: '#10B981',
    },
    {
      id: 'cobalt',
      label: 'Hyper Cobalt & Sky',
      pairText: 'Cobalt + Sky Blue',
      primary: '#38BDF8',
      secondary: '#818CF8',
    },
    {
      id: 'coral',
      label: 'Sunset Coral & Flame',
      pairText: 'Sunset Coral + Flame',
      primary: '#FF5C35',
      secondary: '#F59E0B',
    },
    {
      id: 'monochrome',
      label: 'Luxe Obsidian & White',
      pairText: 'Pure White + Platinum',
      primary: '#FFFFFF',
      secondary: '#9CA3AF',
    },
  ];

  const navLinks = [
    { name: 'Creators', href: '#creators-roster' },
    { name: 'About', href: '#about' },
    { name: 'Approach', href: '#approach' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'UGC', href: '#ugc' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0c0d10]/95 border-b border-white/10 transition-colors">
      {/* Top Representational Showcase Notice Bar */}
      <div className="w-full bg-[#08090e] border-b border-white/10 px-3 sm:px-4 py-1.5 text-center text-[11px] sm:text-xs text-neutral-300 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono font-bold text-[10px] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Representational Showcase
        </span>
        <span className="text-neutral-300">
          This website and its campaign references are for representational & portfolio demonstration purposes.
        </span>
        <button
          onClick={openRepresentationalModal}
          className="text-amber-300 hover:text-white underline font-semibold transition-colors cursor-pointer ml-1 inline-flex items-center gap-0.5"
        >
          <span>Notice Details</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {/* Brand Name (Logo icon removed, placed at generous distance on big screens) */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-white/20 rounded-xl shrink-0"
            aria-label="CREATORHAI - Connecting Brands with the Right Creators"
          >
            <BrandLogo variant="navbar" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-6 shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs 2xl:text-sm font-semibold text-neutral-300 hover:text-white transition-colors whitespace-nowrap px-1 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Toolbar with Crystal-Clear Button Purpose Badges */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5 xl:gap-3 shrink-0">
            {/* Pitch Deck View Button */}
            <button
              onClick={() => setIsDeckMode(true)}
              aria-label="Open 2-Page Pitch Deck View"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-xl bg-neutral-900 border border-neutral-700/90 text-white hover:border-neutral-400 hover:bg-neutral-800 transition-all shadow-sm shrink-0 group"
              title="Open full-screen 2-page spread pitch deck view"
            >
              <Presentation className="w-3.5 h-3.5 shrink-0" style={{ color: themeConfig.accent }} />
              <div className="text-left leading-tight hidden lg:block">
                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400">PITCH DECK</div>
                <div className="text-xs font-semibold text-white whitespace-nowrap">2-Page View</div>
              </div>
            </button>

            {/* High-Contrast Palette Selector Dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                aria-label="Change color theme palette"
                aria-expanded={showThemeMenu}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-700/80 text-neutral-200 hover:text-white hover:border-neutral-500 transition-all shadow-sm shrink-0"
                title="Change high-contrast color palette"
              >
                <Palette className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <div className="flex -space-x-1 items-center shrink-0">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/60 shadow-sm z-10"
                    style={{ backgroundColor: themeConfig.accent }}
                  />
                  <span
                    className="w-3 h-3 rounded-full border border-black/60"
                    style={{ backgroundColor: themeConfig.secondaryAccent }}
                  />
                </div>
              </button>

              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#14141d] border border-white/15 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
                  <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/10 mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Select Palette Duo
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">
                      High Contrast
                    </span>
                  </div>

                  <div className="space-y-1">
                    {themes.map((th) => {
                      const isSelected = colorTheme === th.id;
                      return (
                        <button
                          key={th.id}
                          onClick={() => {
                            setColorTheme(th.id);
                            setShowThemeMenu(false);
                          }}
                          aria-label={`Select ${th.label} theme`}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                            isSelected
                              ? 'bg-white/15 text-white font-bold border border-white/20 shadow-inner'
                              : 'text-neutral-300 hover:bg-white/5 hover:text-white border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="flex -space-x-1 items-center">
                              <span
                                className="w-3.5 h-3.5 rounded-full border border-black/60 shadow-sm z-10"
                                style={{ backgroundColor: th.primary }}
                              />
                              <span
                                className="w-3 h-3 rounded-full border border-black/60"
                                style={{ backgroundColor: th.secondary }}
                              />
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-xs leading-tight">{th.label}</div>
                              <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                                {th.pairText}
                              </div>
                            </div>
                          </div>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 shrink-0" style={{ color: th.primary }} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* HIGHLIGHTED: Direct Connect / Inquiry Form Button for Brands */}
            <button
              onClick={() => openInquiryModal('brand')}
              aria-label="For Brands: Open Quick Campaign Connect Form"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/15 hover:from-emerald-500/30 hover:to-teal-500/25 border border-emerald-400/50 text-emerald-200 hover:text-white transition-all shadow-md group shrink-0"
              title="For Brands: Open Direct Inquiry Form"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400">FOR BRANDS</div>
                <div className="text-xs font-bold text-white flex items-center gap-1 whitespace-nowrap">
                  <span>Let's Connect</span>
                  <MessageCircle className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            </button>

            {/* Direct 1-Tap WhatsApp Button */}
            <button
              onClick={directWhatsAppTap}
              aria-label="Direct WhatsApp Chat with Agency"
              className="hidden xl:flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-emerald-300 transition-all shrink-0"
              title="1-Tap direct WhatsApp chat with campaign lead"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#25D366]">1-TAP CHAT</div>
                <div className="text-xs font-bold text-white whitespace-nowrap">WhatsApp</div>
              </div>
            </button>

            {/* Launch Campaign CTA */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold text-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shrink-0 whitespace-nowrap"
              style={{
                backgroundColor: themeConfig.accent,
                color: themeConfig.accentBtnText,
              }}
            >
              <div className="text-left leading-tight">
                <div className="text-[9px] font-mono uppercase tracking-wider opacity-85 font-black">LAUNCH BRIEF</div>
                <div className="text-xs font-black flex items-center gap-1 whitespace-nowrap">
                  <span>Get Creators</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button & Quick WhatsApp Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => openInquiryModal('brand')}
              aria-label="Open Quick WhatsApp Inquiry"
              className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
              title="Connect Form"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setIsDeckMode(true)}
              aria-label="Open presentation pitch deck view"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white"
            >
              <Presentation className="w-4 h-4" style={{ color: themeConfig.accent }} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>



      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111216] border-b border-white/10 px-4 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-white/5 text-neutral-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="text-xs text-neutral-400">
              <div className="font-semibold mb-2 text-neutral-300">Color Palette Duo:</div>
              <div className="grid grid-cols-2 gap-1.5">
                {themes.map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setColorTheme(th.id)}
                    aria-label={`Switch to ${th.label} theme`}
                    className={`flex items-center gap-2 p-2 rounded-lg border text-left text-[11px] ${
                      colorTheme === th.id
                        ? 'bg-white/10 border-white/40 text-white font-bold'
                        : 'bg-white/[0.02] border-white/5 text-neutral-400'
                    }`}
                  >
                    <div className="flex -space-x-1 items-center shrink-0">
                      <span
                        className="w-3 h-3 rounded-full border border-black"
                        style={{ backgroundColor: th.primary }}
                      />
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black"
                        style={{ backgroundColor: th.secondary }}
                      />
                    </div>
                    <span className="truncate">{th.pairText.split('+')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInquiryModal('brand');
              }}
              aria-label="Open Inquiry Form in mobile menu"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp Inquiry Form</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                directWhatsAppTap();
              }}
              aria-label="Direct 1-tap WhatsApp chat"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-[#25D366] text-black"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Tap to Chat on WhatsApp ({contactInfo.phone})</span>
            </button>


            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-bold"
              style={{
                backgroundColor: themeConfig.accent,
                color: themeConfig.accentBtnText,
              }}
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
