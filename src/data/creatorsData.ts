import {
  indianCreatorFashion,
  indianCreatorTech,
  indianCreatorComedy,
  indianCreatorFinance,
  indianCreatorBeauty,
  indianCreatorFitness,
} from '../assets/images';

export interface IndianCreator {
  id: string;
  name: string;
  handle: string;
  category: 'Fashion & Lifestyle' | 'Tech & Gadgets' | 'Comedy & Entertainment' | 'Finance & EdTech' | 'Beauty & Skincare' | 'Fitness & Wellness';
  categoryKey: 'all' | 'fashion' | 'tech' | 'comedy' | 'finance' | 'beauty' | 'fitness';
  image: string;
  followers: string;
  avgViews: string;
  engagementRate: string;
  platforms: ('Instagram' | 'YouTube')[];
  tier: 'Celebrity / Mega' | 'Macro Creator' | 'Rising Star';
  location: string;
  topCollabs: string[];
  highlightQuote: string;
  badge: string;
  badgeColor?: string;
  featuredCampaign?: string;
}

export const indianCreatorsRoster: IndianCreator[] = [
  {
    id: 'creator-01',
    name: 'Kavya Singhania',
    handle: '@kavyasinghania.style',
    category: 'Fashion & Lifestyle',
    categoryKey: 'fashion',
    image: indianCreatorFashion,
    followers: '2.8M',
    avgViews: '1.9M',
    engagementRate: '8.4%',
    platforms: ['Instagram', 'YouTube'],
    tier: 'Celebrity / Mega',
    location: 'Mumbai, Maharashtra',
    topCollabs: ['Libas', 'Nykaa Fashion', 'Tanishq', 'Zara India'],
    highlightQuote: 'Pioneer of modern Indo-Western aesthetic styling and viral festive shopping lookbooks with 92% Indian audience.',
    badge: '★ Top Fashion Icon',
    badgeColor: '#ec4899',
    featuredCampaign: 'Libas Festive Collection (14M Impressions)'
  },
  {
    id: 'creator-02',
    name: 'Aarav Malhotra',
    handle: '@aaravtechtalks',
    category: 'Tech & Gadgets',
    categoryKey: 'tech',
    image: indianCreatorTech,
    followers: '4.2M',
    avgViews: '3.1M',
    engagementRate: '9.8%',
    platforms: ['YouTube', 'Instagram'],
    tier: 'Celebrity / Mega',
    location: 'Bengaluru, Karnataka',
    topCollabs: ['Vivo India', 'realme', 'Google Pixel', 'Boat Lifestyle'],
    highlightQuote: 'India’s most trusted gadget breakdown specialist. Known for high-converting smartphone launch day videos.',
    badge: '⚡ Flagship Tech Partner',
    badgeColor: '#3b82f6',
    featuredCampaign: 'Vivo Flagship Showcase (4.5M Reach)'
  },
  {
    id: 'creator-03',
    name: 'Pooja Vashisht',
    handle: '@pooja.unfiltered',
    category: 'Comedy & Entertainment',
    categoryKey: 'comedy',
    image: indianCreatorComedy,
    followers: '3.5M',
    avgViews: '2.6M',
    engagementRate: '11.2%',
    platforms: ['Instagram', 'YouTube'],
    tier: 'Celebrity / Mega',
    location: 'Delhi NCR',
    topCollabs: ['Amazon Prime', 'Swiggy', 'Zomato', 'Netflix India'],
    highlightQuote: 'Relatable slice-of-life desi humor and viral sketches that generate massive conversation and organic shares.',
    badge: '🔥 Viral Sensation',
    badgeColor: '#f97316',
    featuredCampaign: 'Swiggy Desi Moments (8.2M Views)'
  },
  {
    id: 'creator-04',
    name: 'Vikram Joshi',
    handle: '@vikram.finpulse',
    category: 'Finance & EdTech',
    categoryKey: 'finance',
    image: indianCreatorFinance,
    followers: '1.9M',
    avgViews: '1.4M',
    engagementRate: '7.6%',
    platforms: ['YouTube', 'Instagram'],
    tier: 'Macro Creator',
    location: 'Mumbai, Maharashtra',
    topCollabs: ['upGrad', 'Simplilearn', 'CRED', 'Angel One'],
    highlightQuote: 'Simplifying career upskilling, personal finance, and D2C wealth building for ambitious young Indian professionals.',
    badge: '📈 High-Intent Audience',
    badgeColor: '#10b981',
    featuredCampaign: 'The Sarkari Rise Awareness (1M+ Views)'
  },
  {
    id: 'creator-05',
    name: 'Rhea Sengupta',
    handle: '@rheaglows.india',
    category: 'Beauty & Skincare',
    categoryKey: 'beauty',
    image: indianCreatorBeauty,
    followers: '1.6M',
    avgViews: '1.2M',
    engagementRate: '9.4%',
    platforms: ['Instagram'],
    tier: 'Macro Creator',
    location: 'Kolkata & Mumbai',
    topCollabs: ['Mamaearth', 'Plum Goodness', 'Dot & Key', 'L’Oréal Paris'],
    highlightQuote: 'Authentic dermat-backed skincare routines, clean ingredients reviews, and high-trust Indian beauty education.',
    badge: '✨ Beauty Authority',
    badgeColor: '#d946ef',
    featuredCampaign: 'Ayurvedic Skin Reset (3.1M Views)'
  },
  {
    id: 'creator-06',
    name: 'Kabir Roy',
    handle: '@kabir_fitculture',
    category: 'Fitness & Wellness',
    categoryKey: 'fitness',
    image: indianCreatorFitness,
    followers: '1.4M',
    avgViews: '980K',
    engagementRate: '10.5%',
    platforms: ['Instagram', 'YouTube'],
    tier: 'Macro Creator',
    location: 'Delhi NCR',
    topCollabs: ['Cult.fit', 'MuscleBlaze', 'Puma India', 'Fast&Up'],
    highlightQuote: 'Desi strength training, natural nutrition plans, and habit transformation coaching for modern lifestyles.',
    badge: '💪 Fitness Leader',
    badgeColor: '#06b6d4',
    featuredCampaign: 'Plant-Based Nutrition Challenge (2.2M Views)'
  },
  {
    id: 'creator-07',
    name: 'Ananya Sharma',
    handle: '@ananyatravels.in',
    category: 'Fashion & Lifestyle',
    categoryKey: 'fashion',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    followers: '1.2M',
    avgViews: '890K',
    engagementRate: '8.1%',
    platforms: ['Instagram'],
    tier: 'Macro Creator',
    location: 'Jaipur & Delhi',
    topCollabs: ['Biba', 'FabIndia', 'Taj Hotels', 'Airbnb India'],
    highlightQuote: 'Heritage aesthetics, sustainable textiles, and immersive visual storytelling across India’s cultural destinations.',
    badge: '🌿 Eco & Heritage',
    badgeColor: '#84cc16',
    featuredCampaign: 'Biba Festive Royale (3.8M Views)'
  },
  {
    id: 'creator-08',
    name: 'Rohan Verma',
    handle: '@rohangovprep',
    category: 'Finance & EdTech',
    categoryKey: 'finance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    followers: '920K',
    avgViews: '750K',
    engagementRate: '12.4%',
    platforms: ['YouTube'],
    tier: 'Rising Star',
    location: 'Prayagraj & Delhi',
    topCollabs: ['The Sarkari Rise', 'Testbook', 'Physics Wallah'],
    highlightQuote: 'High-conversion educational influencer reaching Tier-2 & Tier-3 aspirants with 90%+ completion rates.',
    badge: '🎯 12.4% Engagement',
    badgeColor: '#eab308',
    featuredCampaign: 'TSR Exam Strategy (650K Views in 48h)'
  }
];
