import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { GraduationCap, Sparkles, HeartPulse, MapPin, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export const MoreExperienceGrid: React.FC = () => {
  const { categoryExperiences, themeConfig } = useAgency();
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterTabs = ['ALL', 'EDUCATION', 'FASHION', 'WELLNESS / SUPPLEMENTS', 'LOCAL / RETAIL'];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'EDUCATION':
        return GraduationCap;
      case 'FASHION':
        return Sparkles;
      case 'WELLNESS / SUPPLEMENTS':
        return HeartPulse;
      case 'LOCAL / RETAIL':
        return MapPin;
      default:
        return CheckCircle2;
    }
  };

  const filteredCategories = categoryExperiences.filter((cat) => {
    if (selectedFilter === 'ALL') return true;
    return cat.category === selectedFilter;
  });

  return (
    <section className="py-20 lg:py-32 bg-[#090a0e] border-b border-white/10 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 right-10 w-[500px] h-[300px] rounded-full blur-[160px] pointer-events-none opacity-15 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
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
              <Layers className="w-3.5 h-3.5" />
              <span>100% WORKING VERTICAL EXPERTISE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              MORE CAMPAIGN <br />
              <span className="font-serif italic font-normal text-white">
                EXPERIENCE.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              CREATOR HAI's verified track record proves why brands rate us as the best influencer agency. Explore our 100% working campaigns across EdTech, fashion, supplements, and retail.
            </p>
          </motion.div>

          {/* Interactive Domain Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-black/50 p-1.5 rounded-2xl border border-white/10">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-white text-black shadow-md'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab === 'ALL' ? 'All Domains' : tab.split(' / ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, cIdx) => {
              const Icon = getCategoryIcon(cat.category);
              return (
                <motion.div
                  layout
                  key={cat.category}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, delay: cIdx * 0.05 }}
                  className="category-experience-card rounded-3xl bg-[#12131b]/95 border border-white/15 p-6 flex flex-col justify-between hover:border-white/30 transition-all shadow-2xl backdrop-blur-xl group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                          style={{
                            backgroundColor: themeConfig.accentBg,
                            color: themeConfig.accentText,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-display font-extrabold text-sm text-white tracking-wide">
                          {cat.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-neutral-400 font-bold">
                        0{cIdx + 1}
                      </span>
                    </div>

                    {/* Brand Items List */}
                    <div className="space-y-3.5">
                      {cat.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-white/25 transition-all group/item shadow-sm"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-bold text-white text-base tracking-tight">
                              {item.brand}
                            </h4>
                            {item.metric && (
                              <span
                                className="font-mono text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm"
                                style={{
                                  backgroundColor: themeConfig.accentBg,
                                  color: themeConfig.accentText,
                                }}
                              >
                                {item.metric}
                              </span>
                            )}
                          </div>

                          <div className="text-xs text-neutral-300 font-medium mb-3 leading-relaxed">
                            {item.details}
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
                            <span className="px-2.5 py-0.5 rounded-full font-bold bg-white/10 text-white border border-white/10 uppercase">
                              {item.tag}
                            </span>
                            <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Delivered</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column Signoff */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                    <span>Verified Creator Roster</span>
                    <a
                      href="#contact"
                      className="font-bold text-white hover:underline flex items-center gap-1"
                    >
                      <span>Brief Us</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
