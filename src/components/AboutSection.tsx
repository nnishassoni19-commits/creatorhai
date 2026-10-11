import React from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import {
  Users2,
  Sparkles,
  Link2,
  Volume2,
  Megaphone,
  Video,
  Search,
  ShoppingBag,
  CheckCircle2,
  Compass
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { themeConfig } = useAgency();

  // 03 — WHAT WE DO: OUR FOCUS
  const focusPillars = [
    {
      id: 'connect',
      title: 'CONNECT',
      description: 'Bringing brands and relevant creators together.',
      icon: Users2,
    },
    {
      id: 'create',
      title: 'CREATE',
      description: 'Developing authentic, engaging, and brand-aligned content.',
      icon: Sparkles,
    },
    {
      id: 'collaborate',
      title: 'COLLABORATE',
      description: 'Building meaningful partnerships between brands and creators.',
      icon: Link2,
    },
    {
      id: 'amplify',
      title: 'AMPLIFY',
      description: 'Helping brands extend their reach through creator-led communication.',
      icon: Volume2,
    },
  ];

  // 04 — OUR CORE SERVICES
  const coreServices = [
    {
      id: 'influencer-marketing',
      number: '01',
      title: 'Influencer Marketing',
      description:
        'Strategic creator collaborations that help brands build awareness, engage audiences, and strengthen their digital presence.',
      icon: Megaphone,
      tags: ['Brand Awareness', 'Audience Engagement', 'Digital Presence', 'Platform Strategy'],
    },
    {
      id: 'ugc-creation',
      number: '02',
      title: 'UGC & Content Creation',
      description:
        'Authentic, creator-generated content designed for brand storytelling, social media, and digital advertising.',
      icon: Video,
      tags: ['Brand Storytelling', 'Social Media Creatives', 'Digital Advertising', 'High Retention'],
    },
    {
      id: 'creator-discovery',
      number: '03',
      title: 'Creator Discovery',
      description:
        'Identifying and shortlisting creators based on audience relevance, niche, location, engagement, and campaign objectives.',
      icon: Search,
      tags: ['Audience Relevance', 'Niche Authority', 'Location Targeting', 'Engagement Audit'],
    },
    {
      id: 'd2c-marketing',
      number: '04',
      title: 'D2C Brand Marketing',
      description:
        'Helping direct-to-consumer brands connect with their target audiences through creator partnerships, relatable content, and digital-first campaigns.',
      icon: ShoppingBag,
      tags: ['D2C Growth', 'Relatable Content', 'Digital-First Campaigns', 'Customer Acquisition'],
    },
    {
      id: 'campaign-management',
      number: '05',
      title: 'Campaign Management',
      description:
        'Managing the complete collaboration journey, from campaign planning and creator outreach to content approvals and publishing.',
      icon: CheckCircle2,
      tags: ['Campaign Planning', 'Creator Outreach', 'Content Approvals', 'End-to-End Publishing'],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0e0f14] border-b border-white/10 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================= */}
        {/* 02 — WHO WE ARE                                          */}
        {/* ========================================================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: themeConfig.accentBg,
                borderColor: themeConfig.accentBorder,
                color: themeConfig.accentText,
              }}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>02 — WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              We Build the Right <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-white">
                Brand–Creator Connections.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
              <p>
                <strong className="text-white font-semibold">CreatorHai</strong> is a creator marketing agency focused on helping brands connect with the right creators, create authentic content, and execute impactful influencer campaigns.
              </p>
              <p>
                We believe successful collaborations go beyond follower counts. They are built on the right audience, creative alignment, genuine storytelling, and a clear understanding of brand objectives.
              </p>
              <p>
                From creator discovery to campaign execution, we bridge the gap between brands and creators to make collaborations seamless, strategic, and meaningful.
              </p>
            </div>

            {/* Our Philosophy Callout */}
            <div
              className="mt-8 p-6 sm:p-8 rounded-3xl border transition-all relative overflow-hidden"
              style={{
                backgroundColor: '#13141b',
                borderColor: themeConfig.accentBorder,
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ backgroundColor: themeConfig.accent }}
              />
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2">
                Our Philosophy
              </span>
              <div className="text-xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Right Creators. Relevant Content. Meaningful Connections.
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 03 — WHAT WE DO                                          */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: themeConfig.secondaryBg,
                borderColor: themeConfig.secondaryBorder,
                color: themeConfig.secondaryText,
              }}
            >
              <span>03 — WHAT WE DO</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Turning Brand Objectives Into <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-white">
                Creator-Led Experiences.
              </span>
            </h3>

            <div className="mt-5 space-y-3 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
              <p>
                We help brands navigate the evolving creator economy through strategic influencer marketing, authentic UGC, and seamless campaign execution.
              </p>
              <p>
                Whether a brand wants to build awareness, create engaging content, strengthen its digital presence, or connect with a specific audience, we bring the right creators and creative direction together.
              </p>
            </div>
          </motion.div>

          {/* OUR FOCUS Header & Cards */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">
              OUR FOCUS
            </span>
            <span className="text-xs font-mono text-neutral-500">
              4 Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusPillars.map((focus, fIdx) => {
              const Icon = focus.icon;
              return (
                <motion.div
                  key={focus.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: fIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-3xl p-6 bg-[#13141a]/90 border border-white/10 hover:border-white/25 transition-all shadow-lg flex flex-col justify-between group"
                >
                  <div className="mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 mb-5"
                      style={{
                        backgroundColor: themeConfig.accentBg,
                        color: themeConfig.accentText,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-display font-black text-white tracking-wide mb-2">
                      {focus.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 04 — OUR CORE SERVICES                                    */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: themeConfig.accentBg,
                borderColor: themeConfig.accentBorder,
                color: themeConfig.accentText,
              }}
            >
              <span>04 — OUR CORE SERVICES</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Everything Your Brand Needs to <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-white">
                Build Through Creators.
              </span>
            </h3>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              We offer end-to-end creator marketing solutions designed to help brands connect, communicate, and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, sIdx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: sIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className={`about-capability-card rounded-3xl p-7 bg-[#13141a]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-lg ${
                    sIdx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: themeConfig.accentBg,
                          color: themeConfig.accentText,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-neutral-500 font-bold">
                        {service.number}
                      </span>
                    </div>

                    <h4 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                      {service.title}
                    </h4>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-neutral-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
