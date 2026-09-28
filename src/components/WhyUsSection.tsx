import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { Users2, Clapperboard, Target, MapPin, Activity, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const { themeConfig } = useAgency();

  const formulaItems = [
    { id: 'aud', title: 'Audience', desc: 'Target demographics, age split, buying intent', icon: Users2, defaultVal: 95 },
    { id: 'con', title: 'Content', desc: 'Production craft, authentic storytelling hook', icon: Clapperboard, defaultVal: 92 },
    { id: 'nic', title: 'Niche', desc: 'Category authority and credibility in vertical', icon: Target, defaultVal: 96 },
    { id: 'loc', title: 'Location', desc: 'Hyperlocal relevance and regional language', icon: MapPin, defaultVal: 90 },
    { id: 'eng', title: 'Engagement', desc: 'True comment sentiment and active community', icon: Activity, defaultVal: 94 },
  ];

  // Interactive weights for the simulator
  const [weights, setWeights] = useState<Record<string, number>>({
    aud: 95,
    con: 92,
    nic: 96,
    loc: 90,
    eng: 94,
  });

  const handleSliderChange = (id: string, val: number) => {
    setWeights((prev) => ({ ...prev, [id]: val }));
  };

  // Calculate composite match index and projected ROAS
  const values: number[] = Object.values(weights);
  const avgScore = Math.round(values.reduce((a, b) => a + b, 0) / (values.length || 1));
  const projectedRoas = (2.2 + (avgScore / 100) * 3.1).toFixed(1);

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-[#090a0e] border-b border-white/10 relative overflow-hidden">
      {/* Background radial accents with peaceful breathing */}
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[350px] rounded-full blur-[150px] pointer-events-none opacity-20 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.accent }}
      />
      <div
        className="absolute top-0 left-0 w-[450px] h-[300px] rounded-full blur-[150px] pointer-events-none opacity-15 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.secondaryAccent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{
              backgroundColor: themeConfig.accentBg,
              borderColor: themeConfig.accentBorder,
              color: themeConfig.accentText,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE BEST INFLUENCER MARKETING AGENCY PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            WHY <span className="font-serif italic font-normal text-white">CREATOR HAI?</span>
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-3 font-display font-bold text-xl sm:text-2xl tracking-tight text-white">
            <span style={{ color: themeConfig.accent }}>RIGHT CREATOR.</span>
            <span className="text-neutral-500">•</span>
            <span style={{ color: themeConfig.secondaryAccent }}>100% WORKING ROI.</span>
            <span className="text-neutral-500">•</span>
            <span style={{ color: themeConfig.accent }}>RIGHT COLLABORATION.</span>
          </div>

          <p className="mt-6 text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl font-normal">
            As the best influencer agency, we combine deep creator research, campaign strategy, and precision calibration so every partnership is <strong className="text-white font-bold underline decoration-white/30">100% working</strong>. We know follower counts lie—our proprietary 5-variable match formula guarantees real sales, footfall, and engagement.
          </p>
        </motion.div>

        {/* The 5-Variable Formula Architecture */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#12131b]/95 border border-white/15 shadow-2xl backdrop-blur-xl mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
              The Proprietary Match Formula
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mt-1">
              How We Evaluate Every Single Creator
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              A creator only gets shortlisted if all five pillars mathematically align with your campaign goals:
            </p>
          </div>

          {/* Formula Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch mb-8">
            {formulaItems.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="formula-pill-step rounded-2xl p-5 bg-black/50 border border-white/10 flex flex-col justify-between group hover:border-white/30 transition-all shadow-lg"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-md"
                      style={{
                        backgroundColor: isEven ? themeConfig.accentBg : themeConfig.secondaryBg,
                        color: isEven ? themeConfig.accentText : themeConfig.secondaryText,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="font-display font-bold text-lg text-white tracking-tight mb-1">
                      {item.title}
                    </h4>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="font-bold">Pillar 0{idx + 1}</span>
                    {idx < 4 && <span className="font-bold text-neutral-300 hidden lg:inline text-xs">+</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result of formula */}
          <div
            className="p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border shadow-xl"
            style={{
              backgroundColor: themeConfig.accentBg,
              borderColor: themeConfig.accentBorder,
            }}
          >
            <div className="flex items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-extrabold text-xl shadow-md shrink-0"
                style={{
                  backgroundColor: themeConfig.accent,
                  color: themeConfig.accentBtnText,
                }}
              >
                =
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono font-bold uppercase text-neutral-200">
                  Result of the equation
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                  Guaranteed Alignment With Brand Campaign Objective
                </div>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs font-mono text-white font-bold whitespace-nowrap shadow-inner">
              100% Brand Safety & High ROAS
            </div>
          </div>
        </div>

        {/* INTERACTIVE LIVE MATCH & ROAS SIMULATOR */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#141520]/95 border border-white/15 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                LIVE INTERACTIVE CALCULATOR
              </span>
              <h3 className="text-xl sm:text-3xl font-display font-bold text-white mt-1">
                Creator Compatibility & ROAS Simulator
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                Tweak the live criteria weights to simulate how our vetting thresholds protect your media spend:
              </p>
            </div>

            <div className="flex items-center gap-4 bg-black/50 p-3 rounded-2xl border border-white/10 self-start md:self-auto">
              <div className="text-right">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Composite Match</div>
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  {avgScore}%
                </div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-left">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Projected ROAS</div>
                <div
                  className="text-xl sm:text-2xl font-display font-extrabold"
                  style={{ color: themeConfig.accent }}
                >
                  {projectedRoas}x
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {formulaItems.map((item) => {
              const currentVal = weights[item.id];
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-black/40 border border-white/10 text-left space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase">{item.title}</span>
                    <span className="text-xs font-mono font-bold text-neutral-200">
                      {currentVal}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="60"
                    max="100"
                    value={currentVal}
                    onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                    className="w-full accent-white cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
                  />

                  <div className="text-[10px] text-neutral-400 leading-tight">
                    {currentVal >= 90 ? '✓ Exceeds Agency Threshold' : '⚠️ Requires Tier-2 Audit'}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero Bot Followers: All Creators Are Scanned Across 12 Fraud Detection Metrics</span>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
            >
              Simulate Your Brand's Campaign →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
