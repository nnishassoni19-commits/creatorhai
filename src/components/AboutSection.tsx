import React from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import { Search, Megaphone, Video, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { themeConfig } = useAgency();

  const services = [
    {
      id: 'discovery',
      number: '01',
      title: 'Creator Discovery',
      description: 'Finding creators based on niche, audience, location, content quality and campaign goals.',
      icon: Search,
      tags: ['Niche Alignment', 'Audience Demographics', 'Geo-Targeting', 'Content Quality Audit'],
    },
    {
      id: 'collaborations',
      number: '02',
      title: 'Influencer Collaborations',
      description: 'Paid, barter and product-seeding campaigns across Instagram and YouTube.',
      icon: Megaphone,
      tags: ['Paid Partnerships', 'Barter Campaigns', 'Product Seeding', 'Multi-Platform (IG + YT)'],
    },
    {
      id: 'ugc',
      number: '03',
      title: 'UGC Campaigns',
      description: 'Creator-generated content designed specifically for brand communication and paid media.',
      icon: Video,
      tags: ['Raw Ad Formats', 'High-Converting Hooks', 'Full Ad Usage Rights', 'Organic Storytelling'],
    },
    {
      id: 'management',
      number: '04',
      title: 'Campaign Management',
      description: 'From outreach and negotiation to briefing, approvals, publishing and reporting.',
      icon: CheckCircle2,
      tags: ['End-to-End Coordination', 'Contract Negotiation', 'Creative Direction QA', 'Performance Analytics'],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0e0f14] border-b border-white/10 relative">
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
            ABOUT CREATOR HAI — BEST INFLUENCER MARKETING AGENCY
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Why High-Growth Brands Choose the <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-white">
              Best Influencer Agency.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed">
            CREATOR HAI is built to make creator marketing predictable, measurable, and 100% working. Recognized as the best influencer marketing agency and top-performing best influencer agency, we connect brands with creators who strictly match their target demographics, niche authority, location, and sales objectives. From discovery to live tracking, we ensure 100% working campaign execution without delays or drops.
          </p>
        </motion.div>

        {/* What We Do Grid Header */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            What We Do
          </h3>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            4 Core Capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, sIdx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: sIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="about-capability-card rounded-3xl p-7 bg-[#13141a]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-lg"
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
                      {item.number}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
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
    </section>
  );
};
