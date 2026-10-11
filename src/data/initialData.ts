import { CaseStudy, CategoryExperience, ContactInfo } from '../types';
import {
  indianCreatorTech,
  indianCreatorComedy,
  indianCreatorFinance,
  indianCreatorFashion,
} from '../assets/images';

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 'cs-01',
    number: '01',
    brandName: 'THE SARKARI RISE',
    brandLogoText: 'TSR',
    title: 'Paid Creator Awareness Campaign',
    category: 'Education & Career',
    platforms: ['YouTube', 'Instagram'],
    creatorsCount: '12 Creators',
    duration: '14-Day Execution (Planned: 25 Days)',
    objective: 'Build awareness for The Sarkari Rise among relevant education and career-focused audiences through creator-led content.',
    formatTags: [
      '12 creators',
      'YouTube + Instagram',
      'Educational & career creators',
      'Paid collaborations',
      'Completed in 14 days (Planned: 25 Days)',
      'High-intent student audience'
    ],
    myRole: 'End-to-end creator coordination with multiple stakeholders, from creator discovery and outreach to briefing, creative direction, draft approvals, and final publishing.',
    myRoleSteps: [
      'Creator Discovery',
      'Outreach',
      'Negotiation',
      'Briefing',
      'Creative Direction',
      'Draft Approval',
      'Publishing'
    ],
    resultStat: '1M+ VIEWS',
    resultLabel: 'Total Campaign Reach',
    campaignHighlight: 'End-to-end creator coordination with multiple stakeholders, completed ahead of the planned campaign timeline.',
    highlightSubtitle: '14-Day Rapid Turnaround',
    mediaType: 'video',
    videoThumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    videoDuration: '1:45',
    creatorThumbnails: [
      {
        name: 'Rohan Sharma',
        handle: '@rohan_govprep',
        followers: '185K',
        views: '320K',
        image: indianCreatorTech,
      },
      {
        name: 'Pooja Verma',
        handle: '@careerwithpooja',
        followers: '92K',
        views: '210K',
        image: indianCreatorComedy,
      },
      {
        name: 'Amit Tyagi',
        handle: '@aspirant_guide',
        followers: '140K',
        views: '290K',
        image: indianCreatorFinance,
      },
      {
        name: 'Simran Kaur',
        handle: '@studysmart_simran',
        followers: '210K',
        views: '380K',
        image: indianCreatorFashion,
      }
    ],
    liveContentUrl: 'https://creatorhai.com/case-studies/the-sarkari-rise',
    qrValue: 'creatorhai.com/case-studies/the-sarkari-rise',
    accentColor: '#CCFF00'
  }
];

export const initialCategoryExperiences: CategoryExperience[] = [
  {
    number: '01',
    category: 'EDTECH & EDUCATION',
    headline: 'Making Learning More Relatable',
    description: 'Connecting education-focused brands with aspiring learners and professionals through relevant creators and engaging digital content.',
    references: 'upGrad | Simplilearn',
    iconName: 'GraduationCap'
  },
  {
    number: '02',
    category: 'FMCG & CONSUMER GOODS',
    headline: 'Making Everyday Brands More Memorable',
    description: 'Bringing everyday consumer products closer to audiences through relatable storytelling and creator-led brand communication.',
    references: 'Colgate | Everest Masala',
    iconName: 'Sparkles'
  },
  {
    number: '03',
    category: 'FASHION & LIFESTYLE',
    headline: 'Turning Style Into Stories',
    description: 'Celebrating fashion, individuality, and lifestyle through creators who understand trends, aesthetics, and consumer preferences.',
    references: 'Libas | Biba',
    iconName: 'Sparkles'
  },
  {
    number: '04',
    category: 'TECHNOLOGY & ELECTRONICS',
    headline: 'Bringing Innovation Closer Through Creativity',
    description: 'Connecting technology brands with digitally engaged audiences through product-focused and lifestyle-led storytelling.',
    references: 'Vivo | realme',
    iconName: 'Layers'
  },
  {
    number: '05',
    category: 'HEALTH, WELLNESS & NUTRITION',
    headline: 'Inspiring Everyday Wellness Through Meaningful Stories',
    description: 'Communicating health and wellness products through relatable content and relevant creator communities.',
    references: 'Vicks | Plant-Based Sugar Control',
    iconName: 'HeartPulse'
  }
];

export const initialContactInfo: ContactInfo = {
  email: 'contact@creatorhai.com',
  instagram: '@creatorhai.agency',
  phone: '+91 98765 43210',
  website: 'www.creatorhai.com',
  location: 'Mumbai & Delhi, India (Global Remote)'
};
