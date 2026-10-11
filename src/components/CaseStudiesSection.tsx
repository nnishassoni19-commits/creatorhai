import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import {
  Compass,
  PenTool,
  Megaphone,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Presentation,
  CheckCircle2,
  Info,
  Maximize2,
  Sparkles
} from 'lucide-react';
import {
  UpGradLogo,
  SimplilearnLogo,
  ColgateLogo,
  EverestLogo,
  LibasLogo,
  BibaLogo,
  VivoLogo,
  RealmeLogo,
  VicksLogo,
  PlantBasedSugarControlLogo
} from './IndustryLogos';
import {
  brandsIndustriesHeroBanner,
  edtechStudentHeadphones,
  simplilearnLaptopDesk,
  colgateSmileToothbrush,
  spicesIndianEverest,
  fashionIndianEthnic,
  bibaEthnicYellow,
  techSmartphoneFlagship,
  realmeYellowSmartphone,
  vicksWellnessJar,
  sugarControlSeeds,
  mistyDawnMountains,
} from '../assets/images';

export const CaseStudiesSection: React.FC = () => {
  const { themeConfig, openInquiryModal, setIsDeckMode, openRepresentationalModal } = useAgency();
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section
      id="case-studies"
      className="py-12 sm:py-16 bg-[#08090d] border-b border-white/10 relative scroll-mt-20 overflow-hidden"
    >
      {/* Anchor for backward compatibility */}
      <span id="experience" className="absolute -top-24 pointer-events-none" />

      {/* Main Container - Crisp, High-Definition Pixel-Accurate Poster Container */}
      <div className="max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Poster Wrapper with subtle drop shadow and border */}
        <div className="rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 bg-white shadow-2xl">
          
          {/* ======================================================== */}
          {/* 1. TOP HERO BANNER (DARK THEME COMPOSITE)                */}
          {/* ======================================================== */}
          <div className="relative bg-[#090b10] border-b border-neutral-800 text-white overflow-hidden p-6 sm:p-10 lg:p-14">
            
            {/* Background Image / Ambient Gradient */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
              <img
                src={brandsIndustriesHeroBanner}
                alt="Industries Composite Banner"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#090b10] via-[#090b10]/95 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left">
              <div className="max-w-2xl">
                {/* Top tracking label */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
                    BRANDS WE'VE WORKED WITH
                  </span>
                  <span className="h-1 w-1 rounded-full bg-neutral-600" />
                  <button
                    onClick={openRepresentationalModal}
                    className="text-[10px] font-mono text-amber-400/90 hover:text-amber-300 underline cursor-pointer"
                  >
                    Representational Portfolio
                  </button>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-white tracking-tight leading-[1.08]">
                  Creating Impactful Stories<br />Across Industries
                </h2>

                {/* Subtitle Paragraph */}
                <p className="mt-4 text-xs sm:text-sm lg:text-[15px] text-neutral-300 leading-relaxed font-normal max-w-xl">
                  Every industry has a unique story, and every brand deserves a distinct voice. From technology and fashion to education, FMCG and wellness, we've collaborated with brands across diverse sectors to create engaging content, meaningful connections and impactful digital experiences.
                </p>
              </div>

              {/* Action Buttons & Deck Opener */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openInquiryModal('brand')}
                  className="px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 shadow-xl cursor-pointer"
                  style={{
                    backgroundColor: themeConfig.accent,
                    color: themeConfig.accentBtnText,
                  }}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Start Campaign</span>
                </button>

                <button
                  onClick={() => setIsDeckMode(true)}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Presentation className="w-4 h-4" />
                  <span>Full Pitch Deck</span>
                </button>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. THE 5 CATEGORY ROWS (01 - 05) - EXACT POSTER LAYOUT   */}
          {/* ======================================================== */}
          <div className="divide-y divide-neutral-200 bg-[#fafbfe]">

            {/* ------------------------------------------------------ */}
            {/* ROW 01: EdTech & Education                             */}
            {/* ------------------------------------------------------ */}
            <div className="p-6 sm:p-10 lg:p-12 hover:bg-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-5 text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 tracking-wider">
                    <span>01</span>
                    <span className="w-6 h-[1.5px] bg-neutral-400" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
                    EdTech & Education
                  </h3>

                  <h4 className="text-sm sm:text-base font-bold text-neutral-800 leading-snug">
                    Empowering Learning Through Creative Storytelling
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    Education is evolving, and so are the ways people learn. We work with EdTech brands to transform learning experiences into engaging digital stories that inspire curiosity, build trust and connect with aspiring learners.
                  </p>

                  {/* Brand Logos Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-6">
                    <UpGradLogo />
                    <UpGradLogo className="opacity-90 scale-95" />
                    <SimplilearnLogo />
                  </div>
                </div>

                {/* Right Visual Cards (2 Columns) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: upGrad Learn Build Grow */}
                  <div className="rounded-2xl overflow-hidden bg-[#0c1527] text-white flex flex-col justify-between shadow-md border border-neutral-800 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-base sm:text-lg font-black tracking-tight leading-tight">
                          <div>Learn</div>
                          <div>Build</div>
                          <div>Grow</div>
                        </div>
                        <div className="pt-2">
                          <UpGradLogo className="text-red-500 scale-95 origin-left" />
                        </div>
                        <p className="text-[10px] text-neutral-300 font-normal leading-tight pt-1 max-w-[140px]">
                          Career-focused learning for a better tomorrow
                        </p>
                      </div>

                      <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10">
                        <img
                          src={edtechStudentHeadphones}
                          alt="Student wearing headphones learning online"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Simplilearn Laptop Desk */}
                  <div className="rounded-2xl overflow-hidden bg-white text-neutral-900 flex flex-col justify-between shadow-md border border-neutral-200 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="h-32 sm:h-36 overflow-hidden relative bg-neutral-100">
                      <img
                        src={simplilearnLaptopDesk}
                        alt="Simplilearn digital masterclass on laptop"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-3.5 bg-white flex flex-col items-center justify-center text-center border-t border-neutral-100">
                      <SimplilearnLogo />
                      <span className="text-[10px] text-neutral-500 font-medium mt-0.5">
                        Skills for a better tomorrow
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* ROW 02: FMCG & Consumer Goods                          */}
            {/* ------------------------------------------------------ */}
            <div className="p-6 sm:p-10 lg:p-12 hover:bg-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-5 text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 tracking-wider">
                    <span>02</span>
                    <span className="w-6 h-[1.5px] bg-neutral-400" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
                    FMCG & Consumer Goods
                  </h3>

                  <h4 className="text-sm sm:text-base font-bold text-neutral-800 leading-snug">
                    Making Everyday Brands More Memorable
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    Everyday products deserve extraordinary storytelling. We help FMCG brands create meaningful connections with consumers through relatable content, compelling visuals and engaging brand communication.
                  </p>

                  {/* Brand Logos Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-6">
                    <ColgateLogo />
                    <EverestLogo />
                  </div>
                </div>

                {/* Right Visual Cards (2 Columns) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: Colgate Red Card */}
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#c81a28] to-[#960f1b] text-white flex flex-col justify-between shadow-md border border-red-900 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div className="space-y-1.5">
                        <div className="inline-block px-2 py-0.5 bg-white text-[#c81a28] rounded font-serif italic text-xs font-bold shadow-sm">
                          Colgate
                        </div>
                        <div className="text-sm sm:text-base font-extrabold leading-tight text-white pt-2 max-w-[130px]">
                          For a Healthier Brighter Smile
                        </div>
                      </div>

                      <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/20">
                        <img
                          src={colgateSmileToothbrush}
                          alt="Smiling woman holding toothbrush"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Everest Masala Card */}
                  <div className="rounded-2xl overflow-hidden bg-[#241109] text-white flex flex-col justify-between shadow-md border border-amber-950 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-4 flex items-center justify-between border-b border-amber-900/40 bg-black/20">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-red-600 font-black text-[10px] text-white tracking-widest uppercase">
                           EVEREST
                        </span>
                        <span className="text-xs font-serif font-bold text-amber-200">Masala</span>
                      </div>
                      <span className="text-[11px] font-medium text-amber-300/90 italic">
                        Har Din Kuch Naya
                      </span>
                    </div>

                    <div className="h-32 sm:h-36 overflow-hidden relative">
                      <img
                        src={spicesIndianEverest}
                        alt="Indian culinary spices bowls"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* ROW 03: Fashion & Lifestyle                            */}
            {/* ------------------------------------------------------ */}
            <div className="p-6 sm:p-10 lg:p-12 hover:bg-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-5 text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 tracking-wider">
                    <span>03</span>
                    <span className="w-6 h-[1.5px] bg-neutral-400" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
                    Fashion & Lifestyle
                  </h3>

                  <h4 className="text-sm sm:text-base font-bold text-neutral-800 leading-snug">
                    Turning Style Into Stories
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    Fashion is more than clothing; it's an expression of identity, culture and individuality. We collaborate with fashion and lifestyle brands to create visually captivating stories that reflect their unique aesthetics and connect with today's style-conscious consumers.
                  </p>

                  {/* Brand Logos Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-6">
                    <LibasLogo />
                    <BibaLogo />
                  </div>
                </div>

                {/* Right Visual Cards (2 Columns) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: Libas Mulberry Card */}
                  <div className="rounded-2xl overflow-hidden bg-[#2b0c1e] text-white flex flex-col justify-between shadow-md border border-purple-950 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="font-serif text-lg font-bold text-white tracking-wide block">
                          Libas
                        </span>
                        <div className="text-xs sm:text-sm font-medium text-pink-200/90 pt-1 leading-snug">
                          Celebrate<br />Your Story
                        </div>
                      </div>

                      <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border border-purple-400/20">
                        <img
                          src={fashionIndianEthnic}
                          alt="Indian festive purple embroidered silk fashion"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: BIBA Gold Ethnic Card */}
                  <div className="rounded-2xl overflow-hidden bg-[#381f09] text-white flex flex-col justify-between shadow-md border border-amber-950 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 font-serif text-base font-bold text-amber-200 tracking-widest">
                          <span className="text-amber-400">❖</span>
                          <span>BIBA</span>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-amber-100/90 pt-1 leading-snug">
                          Timeless<br />Elegance
                        </div>
                      </div>

                      <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border border-amber-400/20">
                        <img
                          src={bibaEthnicYellow}
                          alt="Indian yellow ethnic festive kurti"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* ROW 04: Technology & Electronics                       */}
            {/* ------------------------------------------------------ */}
            <div className="p-6 sm:p-10 lg:p-12 hover:bg-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-5 text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 tracking-wider">
                    <span>04</span>
                    <span className="w-6 h-[1.5px] bg-neutral-400" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
                    Technology & Electronics
                  </h3>

                  <h4 className="text-sm sm:text-base font-bold text-neutral-800 leading-snug">
                    Bringing Innovation Closer Through Creativity
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    In a technology-driven world, innovation needs communication that resonates. We help technology brands showcase their products, highlight their innovations and build stronger connections with digitally connected audiences.
                  </p>

                  {/* Brand Logos Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-6">
                    <VivoLogo />
                    <RealmeLogo />
                  </div>
                </div>

                {/* Right Visual Cards (2 Columns) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: vivo Card */}
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c1a3b] to-[#172554] text-white flex flex-col justify-between shadow-md border border-blue-900 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="font-black lowercase tracking-widest text-lg text-[#38bdf8] block">
                          vivo
                        </span>
                        <div className="text-xs font-mono font-bold tracking-widest text-white uppercase pt-1">
                          V SERIES
                        </div>
                        <p className="text-[10px] text-blue-200/80 font-normal leading-tight pt-0.5">
                          Delight Every Moment
                        </p>
                      </div>

                      <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border border-blue-400/20 bg-black">
                        <img
                          src={techSmartphoneFlagship}
                          alt="vivo flagship smartphone"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: realme DARE TO LEAP Card */}
                  <div className="rounded-2xl overflow-hidden bg-[#0d0e12] text-white flex flex-col justify-between shadow-md border border-neutral-800 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-4 flex items-center justify-between border-b border-white/10 bg-black/40">
                      <span className="font-extrabold text-sm text-[#ffc915] lowercase tracking-tight">
                        realme
                      </span>
                      <span className="text-[10px] font-mono font-black tracking-widest text-white uppercase">
                        DARE TO LEAP
                      </span>
                    </div>

                    <div className="h-32 sm:h-36 overflow-hidden relative bg-black">
                      <img
                        src={realmeYellowSmartphone}
                        alt="realme yellow smartphone spotlight"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* ROW 05: Health, Wellness & Nutrition                   */}
            {/* ------------------------------------------------------ */}
            <div className="p-6 sm:p-10 lg:p-12 hover:bg-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-5 text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 tracking-wider">
                    <span>05</span>
                    <span className="w-6 h-[1.5px] bg-neutral-400" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
                    Health, Wellness & Nutrition
                  </h3>

                  <h4 className="text-sm sm:text-base font-bold text-neutral-800 leading-snug">
                    Inspiring Healthier Choices Through Meaningful Stories
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    Wellness is becoming an essential part of everyday living. We work with health and wellness brands to communicate their purpose through relatable storytelling, engaging content and consumer-focused digital experiences.
                  </p>

                  {/* Brand Logos Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-6">
                    <VicksLogo />
                    <PlantBasedSugarControlLogo />
                  </div>
                </div>

                {/* Right Visual Cards (2 Columns) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: Vicks Teal Card */}
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c2f35] to-[#134e56] text-white flex flex-col justify-between shadow-md border border-teal-800 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div className="space-y-1.5">
                        <VicksLogo />
                        <div className="text-xs sm:text-sm font-semibold text-teal-100 pt-2 leading-snug">
                          Feel Better<br />Breathe Easier
                        </div>
                      </div>

                      <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border border-teal-400/20 bg-black">
                        <img
                          src={vicksWellnessJar}
                          alt="Vicks herbal balm and eucalyptus"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Plant-Based Sugar Control Card */}
                  <div className="rounded-2xl overflow-hidden bg-[#f4eee4] text-neutral-900 flex flex-col justify-between shadow-md border border-amber-200/60 group hover:shadow-xl transition-shadow min-h-[220px]">
                    <div className="p-3 bg-white/80 border-b border-amber-200/50 flex flex-col items-center justify-center text-center">
                      <PlantBasedSugarControlLogo />
                      <span className="text-[10px] text-emerald-800 font-medium mt-0.5">
                        Goodness of Nature. For a Healthier You.
                      </span>
                    </div>

                    <div className="h-32 sm:h-36 overflow-hidden relative">
                      <img
                        src={sugarControlSeeds}
                        alt="Plant seeds and holistic nutrition"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* 3. BOTTOM EXPERIENCE BANNER (MISTY DAWN MOUNTAINS)       */}
          {/* ======================================================== */}
          <div className="relative bg-[#11131a] text-white overflow-hidden p-6 sm:p-10 lg:p-12 border-t border-neutral-300">
            
            {/* Background Panorama */}
            <div className="absolute inset-0 pointer-events-none opacity-45">
              <img
                src={mistyDawnMountains}
                alt="Serene mountain landscape at sunrise"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f17]/95 via-[#0d0f17]/85 to-[#0d0f17]/90 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              
              {/* Column 1: Left Headline */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-amber-300 uppercase block">
                  OUR INDUSTRY EXPERIENCE
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                  Different Industries.<br />One Creative Vision.
                </h3>
              </div>

              {/* Column 2: Center Philosophy (with vertical border on md) */}
              <div className="md:col-span-5 md:border-l md:border-white/20 md:pl-8 space-y-2">
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Our experience across industries allows us to understand diverse audiences, adapt to changing trends and create brand communication that makes an impact.
                </p>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Because every brand has a story worth telling.
                </div>
              </div>

              {/* Column 3: 4 Pillars with Icons */}
              <div className="md:col-span-3 md:border-l md:border-white/20 md:pl-8 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-200">
                  <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold">Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-200">
                  <PenTool className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold">Content</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-200">
                  <Megaphone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold">Campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-200">
                  <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold">Growth</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Floating Representational Notice Card & Pitch Deck trigger below the poster */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#111219]/90 border border-white/10 text-xs text-neutral-400 text-left">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              All brand names, trademarks, and category showcases above represent CreatorHai's multi-industry creative frameworks and campaign models.
            </span>
          </div>
          <button
            onClick={openRepresentationalModal}
            className="text-amber-300 hover:text-white font-semibold underline shrink-0 cursor-pointer transition-colors"
          >
            Representational Standards →
          </button>
        </div>

      </div>
    </section>
  );
};
