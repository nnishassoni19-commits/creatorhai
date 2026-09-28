import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { Play, ShieldCheck } from 'lucide-react';
import { UgcCampaign } from '../types';

export const UgcPortfolio: React.FC = () => {
  const { ugcCampaigns, themeConfig } = useAgency();
  const [activeUgc, setActiveUgc] = useState<UgcCampaign | null>(null);

  return (
    <section id="ugc" className="py-20 lg:py-28 bg-[#0c0d12] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{
              backgroundColor: themeConfig.accentBg,
              borderColor: themeConfig.accentBorder,
              color: themeConfig.accentText,
            }}
          >
            100% WORKING UGC VIDEO CREATIVES
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            CONTENT THAT <br />
            <span className="font-serif italic font-normal text-white">
              CONVERTS PAID ADS.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            As the best influencer marketing agency, CREATOR HAI produces high-retention UGC video ads engineered for Meta, YouTube Shorts, and TikTok. Get 100% working creative assets with full commercial ad usage rights that slash customer acquisition costs.
          </p>
        </motion.div>

        {/* Selected UGC Campaigns Grid with On-Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ugcCampaigns.map((ugc, idx) => (
            <motion.div
              key={ugc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`rounded-3xl bg-[#13141b]/90 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all shadow-xl group ${
                idx % 2 === 0 ? 'ugc-parallax-odd' : 'ugc-parallax-even'
              }`}
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <img
                  src={ugc.videoThumbnail}
                  alt={`${ugc.brand} UGC Ad Creative - ${ugc.format}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13141b] via-black/20 to-black/40" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono font-medium text-white uppercase">
                    {ugc.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Ad Rights</span>
                  </div>
                </div>

                {/* Play Trigger */}
                <button
                  onClick={() => setActiveUgc(ugc)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-black shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    style={{ backgroundColor: themeConfig.accent }}
                  >
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </button>

                {/* Bottom Metric Chip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-mono text-[11px] font-medium border border-white/10">
                    {ugc.creatorHandle}
                  </span>
                  <span
                    className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-black/80 border border-white/10"
                    style={{ color: themeConfig.accent }}
                  >
                    {ugc.keyMetric}
                  </span>
                </div>
              </div>

              {/* UGC Campaign Details */}
              <div className="p-6 text-left space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      {ugc.brand}
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">
                      {ugc.duration}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-neutral-400 mb-3">
                    {ugc.videoTitle}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {ugc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Usage Licensing:</span>
                    <span className="font-semibold text-white">{ugc.adRights}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Content Format:</span>
                    <span className="font-semibold text-neutral-200">{ugc.format}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* UGC Video Lightbox */}
      <AnimatePresence>
        {activeUgc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveUgc(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-md w-full rounded-3xl bg-[#161720] border border-white/20 p-6 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                    UGC Ad Video Asset
                  </span>
                  <div className="text-base font-bold text-white">{activeUgc.brand}</div>
                </div>
                <button
                  onClick={() => setActiveUgc(null)}
                  className="text-neutral-400 hover:text-white p-1 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-[9/16] max-h-[500px] mx-auto rounded-2xl overflow-hidden relative bg-black border border-white/10">
                <img
                  src={activeUgc.videoThumbnail}
                  alt={activeUgc.brand}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/20 text-white">
                    {activeUgc.category}
                  </span>
                  <p className="text-xs text-white leading-relaxed">
                    {activeUgc.description}
                  </p>
                  <div className="text-xs font-mono font-semibold" style={{ color: themeConfig.accent }}>
                    {activeUgc.adRights} • {activeUgc.keyMetric}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                <span>Ready for Meta / TikTok / YouTube</span>
                <button
                  onClick={() => setActiveUgc(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-black shadow-md"
                  style={{ backgroundColor: themeConfig.accent }}
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
