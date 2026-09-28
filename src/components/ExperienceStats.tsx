import React from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { Layers, Sparkles, MapPin, Eye, Instagram, Youtube, CheckCircle } from 'lucide-react';

export const ExperienceStats: React.FC = () => {
  const { themeConfig } = useAgency();

  const industries = [
    'Education & EdTech',
    'Fashion & Apparel',
    'Lifestyle & Beauty',
    'Ayurveda & Wellness',
    'D2C & Tech Gadgets',
    'Local Retail & Store Chains',
  ];

  const statBlocks = [
    {
      stat: '100+',
      title: 'Creators in a Single Campaign',
      desc: 'Seamless coordination, mass briefing and publication tracking with zero drops.',
      highlight: 'Simplilearn YouTube Campaign',
      icon: Layers,
    },
    {
      stat: '90',
      title: 'Creators in a Fashion Campaign',
      desc: 'Scaled from a 30-creator pilot to 90 creators across hybrid paid + barter models.',
      highlight: 'The Seventh Muse',
      icon: Sparkles,
    },
    {
      stat: '20',
      title: 'Creators Across 8 Locations',
      desc: 'Hyperlocal retail store activations driving footfall and localized social proof.',
      highlight: 'The Cambridge Store Pune',
      icon: MapPin,
    },
    {
      stat: '1M+',
      title: 'Views on a Featured Campaign',
      desc: 'Rapid 14-day turnaround delivering viral audience reach ahead of schedule.',
      highlight: 'The Sarkari Rise Awareness',
      icon: Eye,
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#0c0d12] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: themeConfig.accentBg,
                borderColor: themeConfig.accentBorder,
                color: themeConfig.accentText,
              }}
            >
              100% WORKING CREATOR PERFORMANCE
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.06]">
              100+ Campaigns <br />
              <span className="font-serif italic font-normal text-white">
                by the Best Influencer Agency.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Discover why fast-growing brands recognize CREATOR HAI as the best influencer marketing agency. With hands-on mastery across education, fashion, lifestyle, supplements, D2C, and local retail, our roster delivers 100% working campaigns across Instagram and YouTube.
            </p>
          </motion.div>

          {/* Platform Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-3xl bg-[#14151b]/90 border border-white/10 flex flex-col gap-3 min-w-[280px] shadow-lg"
          >
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
              Multi-Platform Native
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold">
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </div>
              <span className="text-neutral-500 font-bold">+</span>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube</span>
              </div>
            </div>
            <div className="text-[11px] text-neutral-400">
              Reels, Shorts, Dedicated Long-form & Story sets
            </div>
          </motion.div>
        </div>

        {/* 4 Big Stat Highlight Blocks with On-Scroll Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statBlocks.map((blk, idx) => {
            const Icon = blk.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="experience-stat-card p-8 rounded-3xl bg-[#13141b]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform inline-block"
                      style={{ color: idx === 0 ? themeConfig.accent : '#ffffff' }}
                    >
                      {blk.stat}
                    </span>
                    <div
                      className="p-2.5 rounded-2xl bg-white/5 border border-white/5"
                      style={{ color: themeConfig.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {blk.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {blk.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-neutral-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{blk.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industry Domains Covered Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-6 sm:p-7 bg-[#121319]/90 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-center lg:text-left">
            <div className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
              Niche & Category Diversity
            </div>
            <div className="text-sm font-bold text-white mt-0.5">
              Verified Creator Rosters Across Every Consumer Vertical
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
