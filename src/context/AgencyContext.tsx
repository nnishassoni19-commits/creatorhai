import React, { createContext, useContext, useState, useEffect } from 'react';
import { CaseStudy, CategoryExperience, ContactInfo, ColorTheme } from '../types';
import { initialCaseStudies, initialCategoryExperiences, initialContactInfo } from '../data/initialData';

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
  categoryExperiences: CategoryExperience[];
  contactInfo: ContactInfo;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  isDeckMode: boolean;
  setIsDeckMode: (val: boolean) => void;
  isInquiryModalOpen: boolean;
  setIsInquiryModalOpen: (val: boolean) => void;
  inquiryModalMode: 'brand' | 'creator';
  openInquiryModal: (mode?: 'brand' | 'creator') => void;
  closeInquiryModal: () => void;
  isRepresentationalModalOpen: boolean;
  setIsRepresentationalModalOpen: (val: boolean) => void;
  openRepresentationalModal: () => void;
  closeRepresentationalModal: () => void;
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
        if (
          Array.isArray(parsed) &&
          parsed.length === 1 &&
          parsed[0]?.brandName === 'THE SARKARI RISE'
        ) {
          return parsed;
        }
        return initialCaseStudies;
      } catch (e) {
        return initialCaseStudies;
      }
    }
    return initialCaseStudies;
  });

  const [categoryExperiences, setCategoryExperiences] = useState<CategoryExperience[]>(() => {
    return initialCategoryExperiences;
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
    if (saved && validThemes.includes(saved as ColorTheme)) {
      if (saved === 'lime') return 'neon-pink';
      return saved as ColorTheme;
    }
    return 'neon-pink';
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isDeckMode, setIsDeckMode] = useState<boolean>(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [inquiryModalMode, setInquiryModalMode] = useState<'brand' | 'creator'>('brand');
  const [isRepresentationalModalOpen, setIsRepresentationalModalOpen] = useState<boolean>(false);
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<number>(0);

  const openInquiryModal = (mode: 'brand' | 'creator' = 'brand') => {
    setInquiryModalMode(mode);
    setIsInquiryModalOpen(true);
  };

  const closeInquiryModal = () => {
    setIsInquiryModalOpen(false);
  };

  const openRepresentationalModal = () => {
    setIsRepresentationalModalOpen(true);
  };

  const closeRepresentationalModal = () => {
    setIsRepresentationalModalOpen(false);
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('creatorhai_case_studies', JSON.stringify(caseStudies));
  }, [caseStudies]);

  useEffect(() => {
    localStorage.setItem('creatorhai_contact', JSON.stringify(contactInfo));
  }, [contactInfo]);

  useEffect(() => {
    localStorage.setItem('creatorhai_theme', colorTheme);
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
    setCategoryExperiences(initialCategoryExperiences);
    setContactInfo(initialContactInfo);
    setColorTheme('neon-pink');
    localStorage.removeItem('creatorhai_case_studies');
    localStorage.removeItem('creatorhai_contact');
    localStorage.removeItem('creatorhai_theme');
    localStorage.removeItem('tcb_case_studies');
    localStorage.removeItem('tcb_contact');
    localStorage.removeItem('tcb_theme');
  };

  // Color theme definitions featuring high contrast pairings
  const themeStyles: Record<ColorTheme, ThemeConfig> = {
    'neon-pink': {
      id: 'neon-pink',
      name: 'Neon Pink & Cyber Mint',
      contrastPairName: 'Neon Pink + Cyber Mint',
      accent: '#FF1E88',
      accentBg: 'rgba(255, 30, 136, 0.12)',
      accentBorder: 'rgba(255, 30, 136, 0.35)',
      accentText: '#FF1E88',
      accentBtnText: '#000000',
      secondaryAccent: '#00F5D4',
      secondaryBg: 'rgba(0, 245, 212, 0.12)',
      secondaryBorder: 'rgba(0, 245, 212, 0.35)',
      secondaryText: '#00F5D4',
      badgeBg: 'bg-[#ff1e88]/10 text-[#ff1e88] border-[#ff1e88]/25',
      glowColor: 'rgba(255, 30, 136, 0.2)',
      selectionBg: '#FF1E88',
      canvasBg: '#090A0E',
    },
    'magenta-lime': {
      id: 'magenta-lime',
      name: 'Electric Magenta & Lime',
      contrastPairName: 'Vivid Magenta + Electric Lime',
      accent: '#FF007F',
      accentBg: 'rgba(255, 0, 127, 0.12)',
      accentBorder: 'rgba(255, 0, 127, 0.35)',
      accentText: '#FF007F',
      accentBtnText: '#FFFFFF',
      secondaryAccent: '#CCFF00',
      secondaryBg: 'rgba(204, 255, 0, 0.12)',
      secondaryBorder: 'rgba(204, 255, 0, 0.35)',
      secondaryText: '#CCFF00',
      badgeBg: 'bg-[#ff007f]/10 text-[#ff007f] border-[#ff007f]/25',
      glowColor: 'rgba(255, 0, 127, 0.2)',
      selectionBg: '#FF007F',
      canvasBg: '#08080C',
    },
    'rose-amber': {
      id: 'rose-amber',
      name: 'Hot Rose & Golden Amber',
      contrastPairName: 'Hot Rose + Warm Gold',
      accent: '#F43F5E',
      accentBg: 'rgba(244, 63, 94, 0.12)',
      accentBorder: 'rgba(244, 63, 94, 0.35)',
      accentText: '#F43F5E',
      accentBtnText: '#FFFFFF',
      secondaryAccent: '#F59E0B',
      secondaryBg: 'rgba(245, 158, 11, 0.12)',
      secondaryBorder: 'rgba(245, 158, 11, 0.35)',
      secondaryText: '#FBBF24',
      badgeBg: 'bg-[#f43f5e]/10 text-[#f43f5e] border-[#f43f5e]/25',
      glowColor: 'rgba(244, 63, 94, 0.2)',
      selectionBg: '#F43F5E',
      canvasBg: '#0A080A',
    },
    'electric-violet': {
      id: 'electric-violet',
      name: 'Hot Pink & Neon Violet',
      contrastPairName: 'Hot Pink + Violet Cyber',
      accent: '#FF2A85',
      accentBg: 'rgba(255, 42, 133, 0.12)',
      accentBorder: 'rgba(255, 42, 133, 0.35)',
      accentText: '#FF2A85',
      accentBtnText: '#FFFFFF',
      secondaryAccent: '#A855F7',
      secondaryBg: 'rgba(168, 85, 247, 0.12)',
      secondaryBorder: 'rgba(168, 85, 247, 0.35)',
      secondaryText: '#C084FC',
      badgeBg: 'bg-[#ff2a85]/10 text-[#ff2a85] border-[#ff2a85]/25',
      glowColor: 'rgba(255, 42, 133, 0.2)',
      selectionBg: '#FF2A85',
      canvasBg: '#090810',
    },
    lime: {
      id: 'lime',
      name: 'Electric Lime & Emerald',
      contrastPairName: 'Lime Neon + Emerald Depth',
      accent: '#CCFF00',
      accentBg: 'rgba(204, 255, 0, 0.1)',
      accentBorder: 'rgba(204, 255, 0, 0.3)',
      accentText: '#CCFF00',
      accentBtnText: '#0A0A00',
      secondaryAccent: '#10B981',
      secondaryBg: 'rgba(16, 185, 129, 0.1)',
      secondaryBorder: 'rgba(16, 185, 129, 0.3)',
      secondaryText: '#34D399',
      badgeBg: 'bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/25',
      glowColor: 'rgba(204, 255, 0, 0.15)',
      selectionBg: '#CCFF00',
      canvasBg: '#08090A',
    },
    cobalt: {
      id: 'cobalt',
      name: 'Hyper Cobalt & Sky',
      contrastPairName: 'Sky Blue + Cobalt Indigo',
      accent: '#38BDF8',
      accentBg: 'rgba(56, 189, 248, 0.1)',
      accentBorder: 'rgba(56, 189, 248, 0.3)',
      accentText: '#38BDF8',
      accentBtnText: '#040914',
      secondaryAccent: '#818CF8',
      secondaryBg: 'rgba(129, 140, 248, 0.1)',
      secondaryBorder: 'rgba(129, 140, 248, 0.3)',
      secondaryText: '#A5B4FC',
      badgeBg: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/25',
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
        categoryExperiences,
        contactInfo,
        colorTheme,
        setColorTheme,
        isEditMode,
        setIsEditMode,
        isDeckMode,
        setIsDeckMode,
        isInquiryModalOpen,
        setIsInquiryModalOpen,
        inquiryModalMode,
        openInquiryModal,
        closeInquiryModal,
        isRepresentationalModalOpen,
        setIsRepresentationalModalOpen,
        openRepresentationalModal,
        closeRepresentationalModal,
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
