export interface CaseStudy {
  id: string;
  number: string;
  brandName: string;
  brandLogoText: string;
  title: string;
  category: string;
  platforms: string[];
  creatorsCount: string;
  duration: string;
  objective: string;
  formatTags: string[];
  myRole: string;
  myRoleSteps: string[];
  resultStat: string;
  resultLabel: string;
  campaignHighlight: string;
  highlightSubtitle?: string;
  mediaType: 'video' | 'reel' | 'grid';
  videoThumbnail: string;
  videoDuration?: string;
  creatorThumbnails: {
    name: string;
    handle: string;
    followers: string;
    views: string;
    image: string;
  }[];
  liveContentUrl?: string;
  qrValue?: string;
  accentColor?: string;
}

export interface UgcCampaign {
  id: string;
  brand: string;
  category: string;
  format: string;
  adRights: string;
  duration: string;
  description: string;
  videoThumbnail: string;
  creatorHandle: string;
  videoTitle: string;
  keyMetric: string;
}

export interface LocalActivation {
  id: string;
  brand: string;
  creators: string;
  locations: string;
  type: string;
  description: string;
  image: string;
}

export interface CategoryExperience {
  number?: string;
  category: string;
  headline?: string;
  description?: string;
  references?: string;
  iconName: string;
  items?: {
    brand: string;
    details: string;
    tag: string;
    metric?: string;
  }[];
}

export interface ContactInfo {
  email: string;
  instagram: string;
  phone: string;
  website: string;
  location: string;
}

export type ColorTheme =
  | 'neon-pink'
  | 'magenta-lime'
  | 'rose-amber'
  | 'electric-violet'
  | 'lime'
  | 'cobalt'
  | 'coral'
  | 'monochrome';
