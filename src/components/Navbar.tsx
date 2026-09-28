import React, { useState } from 'react';
import { useAgency } from '../context/AgencyContext';
import { Sparkles, Presentation, Edit3, Palette, Check, ArrowUpRight, Menu, X } from 'lucide-react';
import { ColorTheme } from '../types';

export const Navbar: React.FC = () => {
  const { colorTheme, setColorTheme, isEditMode, setIsEditMode, isDeckMode, setIsDeckMode, themeConfig } = useAgency();
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'About', href: '#about' },
    { name: 'Approach', href: '#approach' },
    { name: 'Experience', href: '#experience' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'UGC', href: '#ugc' },
    { name: 'Local Activations', href: '#local' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0c0d10]/90 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="CREATOR HAI - Best Influencer Marketing Agency Homepage">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black tracking-tighter text-black transition-transform group-hover:scale-105 shadow-lg"
              style={{ backgroundColor: themeConfig.accent }}
            >
              CH
            </div>
            <div>
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white block">
                CREATOR HAI
              </span>
              <span className="text-[10px] tracking-wider uppercase text-neutral-300 font-medium block">
                Best Influencer Marketing Agency • 100% Working ROI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Toolbar */}
          <div className="hidden md:flex items-center gap-3">
            {/* Canva Pitch Deck Mode Toggle */}
            <button
              onClick={() => setIsDeckMode(true)}
              aria-label="Open full-screen pitch deck view"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-neutral-900 border border-neutral-700/80 text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all shadow-sm"
              title="Open full-screen 2-page spread pitch deck view"
            >
              <Presentation className="w-4 h-4" style={{ color: themeConfig.accent }} />
              <span>Pitch Deck View</span>
            </button>

            {/* Live Edit Mode Toggle */}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              aria-label={isEditMode ? 'Exit inline editing mode' : 'Enter inline editing mode'}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all border ${
                isEditMode
                  ? 'bg-white text-black border-white shadow-lg'
                  : 'bg-neutral-900 border-neutral-700/80 text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
              title="Toggle inline editing for texts, stats, and links"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Editing Active' : 'Edit Mode'}</span>
            </button>

            {/* Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                aria-label="Change color theme palette"
                aria-expanded={showThemeMenu}
                className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700/80 text-neutral-200 hover:text-white hover:border-neutral-500 transition-all shadow-sm"
                title="Change high-contrast color palette"
              >
                <Palette className="w-3.5 h-3.5 text-neutral-400" />
                <div className="flex -space-x-1 items-center">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/60 shadow-sm z-10"
                    style={{ backgroundColor: themeConfig.accent }}
                  />
                  <span
                    className="w-3 h-3 rounded-full border border-black/60"
                    style={{ backgroundColor: themeConfig.secondaryAccent }}
                  />
                </div>
                <span className="hidden xl:inline text-xs font-mono font-medium text-neutral-300">
                  {themeConfig.name.split('&')[0].trim()}
                </span>
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

            {/* Collaborate CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs transition-all duration-200 hover:opacity-95 shadow-md active:scale-95"
              style={{
                backgroundColor: themeConfig.accent,
                color: themeConfig.accentBtnText,
              }}
            >
              <span>Let's Collaborate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
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
                setIsEditMode(!isEditMode);
                setMobileMenuOpen(false);
              }}
              aria-label={isEditMode ? 'Exit inline editing mode' : 'Enter inline editing mode'}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-neutral-800 text-white border border-neutral-700"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}</span>
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
