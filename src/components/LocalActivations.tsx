import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { MapPin, Store, Target, Users, Film, CheckCircle2, TrendingUp, Sparkles, Navigation } from 'lucide-react';

export const LocalActivations: React.FC = () => {
  const { localActivations, themeConfig } = useAgency();
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const cityFilters = ['All', 'Delhi NCR', 'Mumbai & Pune', 'Bengaluru'];

  const filteredActivations = localActivations.filter((loc) => {
    if (selectedCity === 'All') return true;
    return loc.locations.toLowerCase().includes(selectedCity.toLowerCase().split(' ')[0]);
  });

  const focusPillars = [
    {
      title: 'Location Radius',
      desc: 'Pinpoint geographic proximity to store outlets, regional dialects, and neighborhood creator followings.',
      icon: MapPin,
    },
    {
      title: 'Target Footfall',
      desc: 'High concentration of active local shoppers residing within a 5-8km radius of store premises.',
      icon: Users,
    },
    {
      title: 'Authentic Niche',
      desc: 'Creators in styling, grooming, food, fitness, and lifestyle who genuinely frequent physical retail stores.',
      icon: Target,
    },
    {
      title: 'POV Storytelling',
      desc: 'First-person walk-ins, try-on dressing room hauls, staff interaction, and special in-store promo codes.',
      icon: Film,
    },
    {
      title: 'Conversion Goal',
      desc: 'Weekend store rushes, flagship grand openings, seasonal inventory clearances, and neighborhood buzz.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="local" className="py-20 lg:py-32 bg-[#090a0d] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-1/3 left-0 w-[400px] h-[300px] rounded-full blur-[140px] pointer-events-none opacity-15 animate-peaceful-breathe"
        style={{ backgroundColor: themeConfig.secondaryAccent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: themeConfig.accentBg,
                borderColor: themeConfig.accentBorder,
                color: themeConfig.accentText,
              }}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>100% WORKING HYPERLOCAL RETAIL CAMPAIGNS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              LOCAL CREATOR ACTIVATIONS: <br />
              <span className="font-serif italic font-normal text-white">
                Driving Real Footfall Into Physical Outlets.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl font-normal">
              CREATOR HAI is acclaimed as the best influencer marketing agency for regional retail rollouts. We coordinate verified neighborhood creators to turn local digital attention into real-world store footfall and 100% working retail revenue.
            </p>
          </motion.div>

          {/* Quick Metrics Banner */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="p-4 rounded-2xl bg-[#141520]/90 border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">+38% Avg Lift</div>
                <div className="text-[11px] text-neutral-400">Weekend outlet visits</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141520]/90 border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">100+ Outlets</div>
                <div className="text-[11px] text-neutral-400">Activated nationwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-left">
          <div className="flex flex-wrap items-center gap-2">
            {cityFilters.map((city) => {
              const isSelected = selectedCity === city;
              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  aria-label={`Filter by ${city} retail locations`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-white text-black shadow-lg font-bold'
                      : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-neutral-400">
            Showing verified location deployments
          </span>
        </div>

        {/* Selected Campaigns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {filteredActivations.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="local-activation-card rounded-3xl bg-[#12131b]/95 border border-white/15 overflow-hidden hover:border-white/30 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-black">
                <img
                  src={loc.image}
                  alt={`${loc.brand} Local Store Activation - ${loc.locations}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131b] via-transparent to-black/40" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-white/15">
                    {loc.locations}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full font-bold text-[10px] text-black shadow-md"
                    style={{ backgroundColor: themeConfig.accent }}
                  >
                    {loc.creators}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
                      {loc.brand}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-neutral-300">
                      Live Verified
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-neutral-300 block mb-2">
                    {loc.type}
                  </span>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {loc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Store className="w-3.5 h-3.5 text-neutral-400" />
                    <span>In-Store Walkthrough</span>
                  </span>
                  <span className="font-mono text-white font-bold">
                    Turnkey Managed
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WHAT WE FOCUS ON: 5 Pillars Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#141520]/95 border border-white/15 text-left shadow-2xl backdrop-blur-xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-1">
              THE 5 LOCALIZED SELECTION CRITERIA
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              What We Vet For Every Retail Store Campaign
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              How we guarantee authentic local engagement rather than generic disconnected traffic:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {focusPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="local-criteria-pillar p-5 rounded-2xl bg-black/50 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-md"
                      style={{
                        backgroundColor: themeConfig.accentBg,
                        color: themeConfig.accentText,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-base font-display font-bold text-white mb-2">
                      {p.title}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-neutral-400 font-bold">
                    Criterion 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
