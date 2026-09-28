import React, { createContext, useContext, useState, useEffect } from 'react';
import { CaseStudy, UgcCampaign, LocalActivation, CategoryExperience, ContactInfo, ColorTheme } from '../types';
import { initialCaseStudies, initialUgcCampaigns, initialLocalActivations, initialCategoryExperiences, initialContactInfo } from '../data/initialData';

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  accentBtnText: string;
  secondaryAccent: string;
  secondaryBg: string;
  secondaryBorder: string;
  secondaryText: string;
  badgeBg: string;
  glowColor: string;
  selectionBg: string;
  canvasBg: string;
  contrastPairName: string;
}

interface AgencyContextType {
  caseStudies: CaseStudy[];
  ugcCampaigns: UgcCampaign[];
  localActivations: LocalActivation[];
  categoryExperiences: CategoryExperience[];
  contactInfo: ContactInfo;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  isDeckMode: boolean;
  setIsDeckMode: (val: boolean) => void;
  activeCaseStudyIndex: number;
  setActiveCaseStudyIndex: (idx: number) => void;
  updateCaseStudy: (id: string, updated: Partial<CaseStudy>) => void;
  updateContactInfo: (updated: Partial<ContactInfo>) => void;
  resetToDefaults: () => void;
  themeConfig: ThemeConfig;
}

const AgencyContext = createContext<AgencyContextType | undefined>(undefined);

export const AgencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() => {
    const saved = localStorage.getItem('creatorhai_case_studies') || localStorage.getItem('tcb_case_studies');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If old data has thecollabbridge, refresh to initialCaseStudies
        if (JSON.stringify(parsed).includes('thecollabbridge')) {
          return initialCaseStudies;
        }
        return parsed;
      } catch (e) {
        return initialCaseStudies;
      }
    }
    return initialCaseStudies;
  });

  const [ugcCampaigns, setUgcCampaigns] = useState<UgcCampaign[]>(() => {
    const saved = localStorage.getItem('creatorhai_ugc') || localStorage.getItem('tcb_ugc');
    return saved ? JSON.parse(saved) : initialUgcCampaigns;
  });

  const [localActivations, setLocalActivations] = useState<LocalActivation[]>(() => {
    const saved = localStorage.getItem('creatorhai_local') || localStorage.getItem('tcb_local');
    return saved ? JSON.parse(saved) : initialLocalActivations;
  });

  const [categoryExperiences, setCategoryExperiences] = useState<CategoryExperience[]>(() => {
    const saved = localStorage.getItem('creatorhai_category_exp') || localStorage.getItem('tcb_category_exp');
    return saved ? JSON.parse(saved) : initialCategoryExperiences;
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('creatorhai_contact') || localStorage.getItem('tcb_contact');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.email?.includes('thecollabbridge') || parsed.website?.includes('thecollabbridge')) {
          return initialContactInfo;
        }
        return parsed;
      } catch (e) {
        return initialContactInfo;
      }
    }
    return initialContactInfo;
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem('creatorhai_theme') || localStorage.getItem('tcb_theme');
    const validThemes: ColorTheme[] = [
      'neon-pink',
      'magenta-lime',
      'rose-amber',
      'electric-violet',
      'lime',
      'cobalt',
      'coral',
      'monochrome',
    ];
    // If user previously had default 'lime' stored from prior session, upgrade to 'neon-pink'
    if (saved && validThemes.includes(saved as ColorTheme)) {
      if (saved === 'lime') return 'neon-pink';
      return saved as ColorTheme;
    }
    return 'neon-pink';
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isDeckMode, setIsDeckMode] = useState<boolean>(false);
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<number>(0);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('tcb_case_studies', JSON.stringify(caseStudies));
  }, [caseStudies]);

  useEffect(() => {
    localStorage.setItem('tcb_contact', JSON.stringify(contactInfo));
  }, [contactInfo]);

  useEffect(() => {
    localStorage.setItem('tcb_theme', colorTheme);
  }, [colorTheme]);

  const updateCaseStudy = (id: string, updated: Partial<CaseStudy>) => {
    setCaseStudies((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const updateContactInfo = (updated: Partial<ContactInfo>) => {
    setContactInfo((prev) => ({ ...prev, ...updated }));
  };

  const resetToDefaults = () => {
    setCaseStudies(initialCaseStudies);
    setUgcCampaigns(initialUgcCampaigns);
    setLocalActivations(initialLocalActivations);
    setCategoryExperiences(initialCategoryExperiences);
    setContactInfo(initialContactInfo);
    setColorTheme('neon-pink');
    localStorage.removeItem('tcb_case_studies');
    localStorage.removeItem('tcb_contact');
    localStorage.removeItem('tcb_theme');
    localStorage.removeItem('tcb_ugc');
    localStorage.removeItem('tcb_local');
  };

  // Color theme definitions featuring high contrast with Pink and matching accent pairings
  const themeStyles: Record<ColorTheme, ThemeConfig> = {
    'neon-pink': {
      id: 'neon-pink',
      name: 'Neon Pink & Cyber Mint',
      contrastPairName: 'Neon Pink + Cyber Mint',
      accent: '#FF1E88',
      accentBg: 'rgba(255, 30, 136, 0.12)',
      accentBorder: 'rgba(255, 30, 136, 0.35)',
      accentText: '#FF3B9A',
      accentBtnText: '#060308',
      secondaryAccent: '#00F5D4',
      secondaryBg: 'rgba(0, 245, 212, 0.12)',
      secondaryBorder: 'rgba(0, 245, 212, 0.35)',
      secondaryText: '#00F5D4',
      badgeBg: 'bg-[#FF1E88]/15 text-[#FF3B9A] border-[#FF1E88]/30',
      glowColor: 'rgba(255, 30, 136, 0.22)',
      selectionBg: '#FF1E88',
      canvasBg: '#09080E',
    },
    'magenta-lime': {
      id: 'magenta-lime',
      name: 'Hot Magenta & Volt Lime',
      contrastPairName: 'Hot Magenta + Volt Lime',
      accent: '#FF007F',
      accentBg: 'rgba(255, 0, 127, 0.12)',
      accentBorder: 'rgba(255, 0, 127, 0.35)',
      accentText: '#FF2E93',
      accentBtnText: '#050308',
      secondaryAccent: '#CCFF00',
      secondaryBg: 'rgba(204, 255, 0, 0.12)',
      secondaryBorder: 'rgba(204, 255, 0, 0.35)',
      secondaryText: '#CCFF00',
      badgeBg: 'bg-[#FF007F]/15 text-[#FF2E93] border-[#FF007F]/30',
      glowColor: 'rgba(255, 0, 127, 0.22)',
      selectionBg: '#FF007F',
      canvasBg: '#08070D',
    },
    'rose-amber': {
      id: 'rose-amber',
      name: 'Sunset Rose & Radiant Amber',
      contrastPairName: 'Sunset Rose + Warm Amber',
      accent: '#FB7185',
      accentBg: 'rgba(251, 113, 133, 0.12)',
      accentBorder: 'rgba(251, 113, 133, 0.35)',
      accentText: '#FB7185',
      accentBtnText: '#0D0609',
      secondaryAccent: '#FBBF24',
      secondaryBg: 'rgba(251, 191, 36, 0.12)',
      secondaryBorder: 'rgba(251, 191, 36, 0.35)',
      secondaryText: '#FBBF24',
      badgeBg: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
      glowColor: 'rgba(251, 113, 133, 0.20)',
      selectionBg: '#FB7185',
      canvasBg: '#0B080A',
    },
    'electric-violet': {
      id: 'electric-violet',
      name: 'Hot Pink & Neon Violet',
      contrastPairName: 'Hot Pink + Neon Violet',
      accent: '#FF2A85',
      accentBg: 'rgba(255, 42, 133, 0.12)',
      accentBorder: 'rgba(255, 42, 133, 0.35)',
      accentText: '#FF3D94',
      accentBtnText: '#050208',
      secondaryAccent: '#A855F7',
      secondaryBg: 'rgba(168, 85, 247, 0.12)',
      secondaryBorder: 'rgba(168, 85, 247, 0.35)',
      secondaryText: '#C084FC',
      badgeBg: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
      glowColor: 'rgba(255, 42, 133, 0.22)',
      selectionBg: '#FF2A85',
      canvasBg: '#0A0711',
    },
    lime: {
      id: 'lime',
      name: 'Electric Lime & Emerald',
      contrastPairName: 'Electric Lime + Emerald',
      accent: '#CCFF00',
      accentBg: 'rgba(204, 255, 0, 0.1)',
      accentBorder: 'rgba(204, 255, 0, 0.3)',
      accentText: '#CCFF00',
      accentBtnText: '#08080C',
      secondaryAccent: '#10B981',
      secondaryBg: 'rgba(16, 185, 129, 0.1)',
      secondaryBorder: 'rgba(16, 185, 129, 0.3)',
      secondaryText: '#34D399',
      badgeBg: 'bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/25',
      glowColor: 'rgba(204, 255, 0, 0.15)',
      selectionBg: '#CCFF00',
      canvasBg: '#090A0D',
    },
    cobalt: {
      id: 'cobalt',
      name: 'Hyper Cobalt & Sky',
      contrastPairName: 'Hyper Cobalt + Sky',
      accent: '#38BDF8',
      accentBg: 'rgba(56, 189, 248, 0.1)',
      accentBorder: 'rgba(56, 189, 248, 0.3)',
      accentText: '#38BDF8',
      accentBtnText: '#050B14',
      secondaryAccent: '#818CF8',
      secondaryBg: 'rgba(129, 140, 248, 0.1)',
      secondaryBorder: 'rgba(129, 140, 248, 0.3)',
      secondaryText: '#A5B4FC',
      badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
      glowColor: 'rgba(56, 189, 248, 0.15)',
      selectionBg: '#38BDF8',
      canvasBg: '#080A10',
    },
    coral: {
      id: 'coral',
      name: 'Sunset Coral & Flame',
      contrastPairName: 'Sunset Coral + Flame Gold',
      accent: '#FF5C35',
      accentBg: 'rgba(255, 92, 53, 0.1)',
      accentBorder: 'rgba(255, 92, 53, 0.3)',
      accentText: '#FF5C35',
      accentBtnText: '#0A0503',
      secondaryAccent: '#F59E0B',
      secondaryBg: 'rgba(245, 158, 11, 0.1)',
      secondaryBorder: 'rgba(245, 158, 11, 0.3)',
      secondaryText: '#FBBF24',
      badgeBg: 'bg-[#ff5c35]/10 text-[#ff5c35] border-[#ff5c35]/25',
      glowColor: 'rgba(255, 92, 53, 0.15)',
      selectionBg: '#FF5C35',
      canvasBg: '#0B0807',
    },
    monochrome: {
      id: 'monochrome',
      name: 'Luxe Obsidian & White',
      contrastPairName: 'Luxe Obsidian + Pure White',
      accent: '#FFFFFF',
      accentBg: 'rgba(255, 255, 255, 0.1)',
      accentBorder: 'rgba(255, 255, 255, 0.3)',
      accentText: '#FFFFFF',
      accentBtnText: '#0A0A0A',
      secondaryAccent: '#9CA3AF',
      secondaryBg: 'rgba(156, 163, 175, 0.1)',
      secondaryBorder: 'rgba(156, 163, 175, 0.3)',
      secondaryText: '#E5E7EB',
      badgeBg: 'bg-white/10 text-white border-white/25',
      glowColor: 'rgba(255, 255, 255, 0.1)',
      selectionBg: '#FFFFFF',
      canvasBg: '#0A0A0C',
    },
  };

  return (
    <AgencyContext.Provider
      value={{
        caseStudies,
        ugcCampaigns,
        localActivations,
        categoryExperiences,
        contactInfo,
        colorTheme,
        setColorTheme,
        isEditMode,
        setIsEditMode,
        isDeckMode,
        setIsDeckMode,
        activeCaseStudyIndex,
        setActiveCaseStudyIndex,
        updateCaseStudy,
        updateContactInfo,
        resetToDefaults,
        themeConfig: themeStyles[colorTheme],
      }}
    >
      {children}
    </AgencyContext.Provider>
  );
};

export const useAgency = () => {
  const context = useContext(AgencyContext);
  if (!context) {
    throw new Error('useAgency must be used within an AgencyProvider');
  }
  return context;
};
