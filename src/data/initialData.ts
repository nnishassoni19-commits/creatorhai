import { CaseStudy, UgcCampaign, LocalActivation, CategoryExperience, ContactInfo } from '../types';

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 'cs-01',
    number: '01',
    brandName: 'THE SARKARI RISE',
    brandLogoText: 'TSR',
    title: 'Paid Creator Awareness Campaign',
    category: 'Education & Career',
    platforms: ['Instagram', 'YouTube'],
    creatorsCount: '12 Creators',
    duration: '14-Day Execution (Planned: 25 Days)',
    objective: 'Build awareness for The Sarkari Rise among relevant education and career-focused audiences through creator-led content.',
    formatTags: [
      '12 creators',
      'Instagram + YouTube',
      'Educational & career creators',
      'Paid collaborations',
      'Completed in 14 days (Ahead of 25-day plan)',
      'High-intent student audience'
    ],
    myRole: 'I managed the campaign from creator sourcing to final content publication, coordinating between the brand and creators throughout execution.',
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
      { name: 'Rohan Sharma', handle: '@rohan_govprep', followers: '185K', views: '320K', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
      { name: 'Pooja Verma', handle: '@careerwithpooja', followers: '92K', views: '210K', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop' },
      { name: 'Amit Tyagi', handle: '@aspirant_guide', followers: '140K', views: '290K', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Simran Kaur', handle: '@studysmart_simran', followers: '210K', views: '380K', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
    ],
    liveContentUrl: 'https://instagram.com',
    qrValue: 'creatorhai.com/case-studies/the-sarkari-rise',
    accentColor: '#CCFF00'
  },
  {
    id: 'cs-02',
    number: '02',
    brandName: 'SIMPLILEARN',
    brandLogoText: 'SL',
    title: 'Large-Scale YouTube Creator Campaign',
    category: 'Education & Professional Upskilling',
    platforms: ['YouTube'],
    creatorsCount: '100+ Creators',
    duration: '1 Month Execution',
    objective: 'Promote educational courses through relevant nano and micro YouTube creators and reach audiences interested in learning, careers and professional development.',
    formatTags: [
      '100+ creators coordinated',
      'YouTube Long-form & Shorts',
      'Nano & Micro creator mix',
      'Paid collaborations',
      '1-month rapid scaling',
      'Education-focused audience'
    ],
    myRole: 'Managed creator coordination and campaign execution across a high-volume creator network, ensuring campaign communication, deliverables and execution remained on track.',
    myRoleSteps: [
      'High-Volume Discovery',
      'Mass Pipeline Screening',
      'Terms & Payout Negotiation',
      'Course Link Integration',
      'Asset Compliance',
      'Publishing Oversight'
    ],
    resultStat: '100+ CREATORS',
    resultLabel: 'Coordinated Within 1 Cycle',
    campaignHighlight: '100+ CREATORS coordinated within one single campaign cycle without slippage.',
    highlightSubtitle: 'High-Volume Network Execution',
    mediaType: 'video',
    videoThumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    videoDuration: '3:12',
    creatorThumbnails: [
      { name: 'Tech Upskill', handle: '@techupskill_yt', followers: '45K', views: '95K', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
      { name: 'Code With Dev', handle: '@codewithdev', followers: '78K', views: '140K', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop' },
      { name: 'Data Journey', handle: '@datajourney_hub', followers: '35K', views: '82K', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Cloud Career', handle: '@cloudcareer_pro', followers: '62K', views: '115K', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
    ],
    liveContentUrl: 'https://youtube.com',
    qrValue: 'creatorhai.com/case-studies/simplilearn',
    accentColor: '#38BDF8'
  },
  {
    id: 'cs-03',
    number: '03',
    brandName: 'OPPO — RENO 16 SERIES',
    brandLogoText: 'OPPO',
    title: 'Regional Creator Campaign',
    category: 'Technology & Mobile',
    platforms: ['Instagram'],
    creatorsCount: 'Rajasthan Creators Network',
    duration: '20-Day Campaign',
    objective: 'Connect the campaign with relevant Rajasthan-based creators to create regionally relevant social content around the Reno 16 series.',
    formatTags: [
      'Rajasthan-based creators',
      'Regional creator targeting',
      'Instagram Reels & Stories',
      '20-day sprint',
      'Technology & lifestyle creator ecosystem',
      'Localized language & cultural resonance'
    ],
    myRole: 'Supported creator identification and campaign coordination, ensuring creators aligned with the campaign’s regional requirements and content direction.',
    myRoleSteps: [
      'Hyper-Local Creator Discovery',
      'Device Seeding Coordination',
      'Content Angle Verification',
      'Regional Aesthetic QA',
      'Simultaneous Launch Sync'
    ],
    resultStat: 'RIGHT CREATOR + REGION',
    resultLabel: 'Geo-Targeted Resonance',
    campaignHighlight: 'Demonstrating the power of location-based creator discovery in multi-tier influencer marketing campaigns.',
    highlightSubtitle: 'Regional Authenticity',
    mediaType: 'reel',
    videoThumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    videoDuration: '0:45',
    creatorThumbnails: [
      { name: 'Jaipur Lifestyle', handle: '@jaipur_vibes', followers: '110K', views: '280K', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Kavita Rathore', handle: '@kavita_explores', followers: '85K', views: '195K', image: 'https://images.unsplash.com/photo-1534751516642-a171edd2521d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Jodhpur Tech', handle: '@jodhpur_gadgets', followers: '64K', views: '150K', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop' },
      { name: 'Aakash Solanki', handle: '@aakash_travels', followers: '145K', views: '310K', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop' },
    ],
    liveContentUrl: 'https://instagram.com',
    qrValue: 'creatorhai.com/case-studies/oppo-reno16',
    accentColor: '#34D399'
  },
  {
    id: 'cs-04',
    number: '04',
    brandName: 'THE CAMBRIDGE STORE',
    brandLogoText: 'TCS',
    title: "Fashion Creator Store-Visit Campaign",
    category: "Men's Fashion & Retail",
    platforms: ['Instagram'],
    creatorsCount: '20 Creators',
    duration: 'Multi-Outlet Rollout',
    objective: 'Drive awareness for The Cambridge Store through authentic content created by relevant Pune-based men’s fashion creators.',
    formatTags: [
      '20 creators',
      '8 retail locations across Pune',
      "Men's styling creators",
      'In-store physical visits & styling try-ons',
      'Barter collaborations',
      'Footfall drive & store tag tracking'
    ],
    myRole: 'Identified and coordinated relevant creators while managing store-visit requirements, collaboration communication and campaign execution.',
    myRoleSteps: [
      'Location-Specific Sourcing',
      'Store Shift & Slot Scheduling',
      'In-Store Try-On Guidelines',
      'Reel Production Approvals',
      'Location Geo-Tag Auditing'
    ],
    resultStat: '20 CREATORS',
    resultLabel: 'Across 8 Pune Outlets',
    campaignHighlight: '20 CREATORS seamlessly booked across 8 distinct Pune retail outlets for localized footfall conversion.',
    highlightSubtitle: 'Physical Store Activation',
    mediaType: 'reel',
    videoThumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    videoDuration: '0:58',
    creatorThumbnails: [
      { name: 'Kunal Patil', handle: '@pune_dapper', followers: '55K', views: '120K', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop' },
      { name: 'Nikhil Shinde', handle: '@menswear_nik', followers: '42K', views: '95K', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
      { name: 'Aditya Joshi', handle: '@thestyledude_pune', followers: '68K', views: '160K', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Pranav More', handle: '@pranav.fits', followers: '38K', views: '84K', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
    ],
    liveContentUrl: 'https://instagram.com',
    qrValue: 'creatorhai.com/case-studies/cambridge-store',
    accentColor: '#F59E0B'
  },
  {
    id: 'cs-05',
    number: '05',
    brandName: 'THE SEVENTH MUSE',
    brandLogoText: 'TSM',
    title: 'Scaled Fashion Creator Campaign',
    category: 'Apparel & Designer Fashion',
    platforms: ['Instagram', 'YouTube'],
    creatorsCount: '90 Creators (Scaled 3x)',
    duration: 'Long-Term Campaign Execution',
    objective: 'Build sustained creator-led visibility for the fashion brand through a combination of paid and barter collaborations.',
    formatTags: [
      'Initial sprint: 30 creators (20 barter + 10 paid)',
      'Scaled network: 90 creators',
      'Fashion creator ecosystem',
      'Lookbooks & OOTD Reels',
      'Long-term relationship building',
      'Hybrid paid + barter structure'
    ],
    myRole: 'Coordinated creator sourcing, outreach, collaboration requirements and campaign execution across both paid and barter creator partnerships.',
    myRoleSteps: [
      'Hybrid Pipeline Strategy',
      'Lookbook Product Seeding',
      'Deliverables Standardization',
      'Tier 1 & Tier 2 Creator Segregation',
      'Scale Management to 90 Creators'
    ],
    resultStat: '90 CREATORS',
    resultLabel: 'Tripled from 30 to 90 Network',
    campaignHighlight: 'Scaled from an initial 30-creator pilot to a robust 90-creator network driving continuous wardrobe virality.',
    highlightSubtitle: 'Network Expansion',
    mediaType: 'grid',
    videoThumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    videoDuration: '1:15',
    creatorThumbnails: [
      { name: 'Aanya Sen', handle: '@aanyastylebook', followers: '125K', views: '290K', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
      { name: 'Rhea Kapoor', handle: '@rhea_looks', followers: '98K', views: '220K', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop' },
      { name: 'Megha Nair', handle: '@minimalmegha', followers: '74K', views: '175K', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Zoya Khan', handle: '@zoyafashionista', followers: '160K', views: '340K', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
    ],
    liveContentUrl: 'https://instagram.com',
    qrValue: 'creatorhai.com/case-studies/the-seventh-muse',
    accentColor: '#EC4899'
  },
  {
    id: 'cs-06',
    number: '06',
    brandName: 'MR. YOG SWARN PRASHAN',
    brandLogoText: 'MY',
    title: 'Nano Creator Barter Campaign',
    category: 'Ayurveda & Health Supplements',
    platforms: ['Instagram', 'Amazon'],
    creatorsCount: '30 Nano Creators',
    duration: '1-Month Execution + Ad Rights',
    objective: 'Generate authentic creator-led product reviews and awareness through nano creators.',
    formatTags: [
      '30 nano creators',
      'Barter collaboration model',
      'Verified Amazon review content',
      '1-month paid advertising usage rights',
      'Ayurvedic wellness & parenting creators',
      'High conversion social proof'
    ],
    myRole: 'Coordinated creator identification, outreach, collaboration requirements and content execution while ensuring the required review and usage-rights requirements were communicated.',
    myRoleSteps: [
      'Parenting & Wellness Sourcing',
      'Sampling & Product Delivery Tracking',
      'Amazon Review Compliance Guidelines',
      'High-Res Raw Asset Collection',
      'Ad Rights Usage Licensing Signed'
    ],
    resultStat: '30 NANO CREATORS',
    resultLabel: 'Authentic Reviews + Ad Rights',
    campaignHighlight: '30 NANO CREATORS secured with authentic reviews and 1-month paid ad rights for multi-channel ROAS boost.',
    highlightSubtitle: 'UGC + Conversion Proof',
    mediaType: 'reel',
    videoThumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
    videoDuration: '0:50',
    creatorThumbnails: [
      { name: 'Dr. Shruti Parenting', handle: '@mommy_shruti', followers: '18K', views: '45K', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
      { name: 'AyurLiving Tanvi', handle: '@tanvi_ayur', followers: '24K', views: '58K', image: 'https://images.unsplash.com/photo-1534751516642-a171edd2521d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Healthy Roots', handle: '@healthyroots_care', followers: '12K', views: '32K', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Neha Holistic', handle: '@neha_holisticmom', followers: '29K', views: '66K', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop' },
    ],
    liveContentUrl: 'https://amazon.in',
    qrValue: 'creatorhai.com/case-studies/mr-yog',
    accentColor: '#A855F7'
  }
];

export const initialUgcCampaigns: UgcCampaign[] = [
  {
    id: 'ugc-01',
    brand: 'DIZZY DUCK',
    category: 'Athleisure & Fitness',
    format: 'UGC Video Ads (9:16 Vertical)',
    adRights: '1 Month Full Commercial Rights',
    duration: 'Sprint Turnaround',
    description: 'Created professional UGC content designed specifically for brand use with paid advertising rights across Meta and TikTok ads.',
    videoThumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    creatorHandle: '@active_sarah',
    videoTitle: 'Leggings Wear Test & Squat-Proof Review',
    keyMetric: '3.4x Meta Ad ROAS'
  },
  {
    id: 'ugc-02',
    brand: 'TOGILO',
    category: 'Dating App & Social Discovery',
    format: 'POV Storytelling UGC Video',
    adRights: 'Full Digital Ad Rights',
    duration: '6 Days Fast Execution',
    description: 'Creator-led UGC designed around the brand’s communication requirements: natural conversational hook, app screen demo, and relatable dating story.',
    videoThumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    creatorHandle: '@datingdiaries_in',
    videoTitle: 'Why I deleted my other apps for Togilo',
    keyMetric: '42% Lower Cost Per Install'
  },
  {
    id: 'ugc-03',
    brand: 'COVER TIGER',
    category: 'Gadgets & Device Accessories',
    format: 'Professional Unboxing & Durability UGC',
    adRights: 'Digital Paid Media Rights',
    duration: '7 Days Turnaround',
    description: 'Creator-led professional content developed for brand usage, showcasing drop resistance, tactile button feedback, and aesthetic design.',
    videoThumbnail: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop',
    creatorHandle: '@techunboxed_daily',
    videoTitle: 'The 10ft Concrete Drop Test',
    keyMetric: '5.2M Organic + Paid Views'
  }
];

export const initialLocalActivations: LocalActivation[] = [
  {
    id: 'loc-01',
    brand: 'The Cambridge Store',
    creators: '20 Pune Creators',
    locations: '8 Pune Locations',
    type: 'Barter In-Store Experience',
    description: 'Physical showroom walkthroughs, trial room try-on reels, and geo-targeted discount coupon giveaways driving verified footfall.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'loc-02',
    brand: 'The Sanjh Store',
    creators: '2 Delhi Creators',
    locations: 'Delhi Flagship',
    type: 'Paid Store Visit & Styling',
    description: 'Premium ethnic boutique visit highlighting seasonal festive collections and personalized styling sessions.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'loc-03',
    brand: 'Store For Me',
    creators: '2 Delhi Creators',
    locations: 'Delhi Outlets',
    type: 'Outlet Visit + Service Coverage (Paid)',
    description: 'Service coverage, customer experience walkthrough, and promotional awareness for new retail openings.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop'
  }
];

export const initialCategoryExperiences: CategoryExperience[] = [
  {
    category: 'EDUCATION',
    iconName: 'GraduationCap',
    items: [
      { brand: 'Simplilearn', details: '100+ YouTube creators', tag: 'Paid', metric: '100+ Creators' },
      { brand: 'The Sarkari Rise', details: '12 creators • Instagram + YouTube', tag: 'Paid', metric: '1M+ Views' }
    ]
  },
  {
    category: 'FASHION',
    iconName: 'Sparkles',
    items: [
      { brand: 'The Seventh Muse', details: '90 creators • Scale Campaign', tag: 'Paid + Barter', metric: '90 Creators' },
      { brand: 'The Cambridge Store', details: '20 creators • 8 Pune locations', tag: 'Barter', metric: '8 Locations' },
      { brand: 'The Sanjh Store', details: '2 creators • Store Visit', tag: 'Paid', metric: 'Delhi Flagship' }
    ]
  },
  {
    category: 'WELLNESS / SUPPLEMENTS',
    iconName: 'HeartPulse',
    items: [
      { brand: 'Mr. Yog Swarn Prashan', details: '30 creators • Amazon Reviews', tag: 'Barter', metric: '30 Nano Creators' },
      { brand: 'AcTiFibre', details: '5 Micro Creators • 15 Days', tag: 'Paid', metric: '15-Day Sprint' }
    ]
  },
  {
    category: 'LOCAL / RETAIL',
    iconName: 'MapPin',
    items: [
      { brand: 'Store For Me', details: '2 creators • Outlet & Service Coverage', tag: 'Paid', metric: 'Delhi NCR' }
    ]
  }
];

export const initialContactInfo: ContactInfo = {
  email: 'contact@creatorhai.com',
  instagram: '@creatorhai.agency',
  phone: '+91 98765 43210',
  website: 'www.creatorhai.com',
  location: 'Mumbai & Delhi, India (Global Remote)'
};
