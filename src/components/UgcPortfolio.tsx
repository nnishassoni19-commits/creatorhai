import React from 'react';
import { motion } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import {
  Video,
  PlaySquare,
  Sparkles,
  MessageSquare,
  Package,
  Layers,
  ShieldCheck,
  Film,
  ArrowRight
} from 'lucide-react';

export const UgcPortfolio: React.FC = () => {
  const { themeConfig, openInquiryModal, openRepresentationalModal } = useAgency();

  const ugcSolutions = [
    {
      title: 'UGC Video Production',
      desc: 'End-to-end production of engaging creator videos tailored for social platforms and organic virality.',
      icon: Video,
    },
    {
      title: 'Product Demonstration Videos',
      desc: 'Clear, authentic walkthroughs highlighting product features, application, and real-life utility.',
      icon: PlaySquare,
    },
    {
      title: 'Lifestyle & Product Integration',
      desc: 'Seamlessly weaving your products into creators’ daily routines, aesthetic feeds, and lifestyle contexts.',
      icon: Sparkles,
    },
    {
      title: 'Testimonial-Style Content',
      desc: 'Genuine user feedback, personal stories, and honest creator perspectives that build instant trust.',
      icon: MessageSquare,
    },
    {
      title: 'Unboxing & First-Impression Videos',
      desc: 'Capturing real excitement, premium packaging reveals, and authentic first reactions on camera.',
      icon: Package,
    },
    {
      title: 'Social Media Creatives',
      desc: 'Native 9:16 and 4:5 assets optimized for Instagram Reels, YouTube Shorts, and brand feeds.',
      icon: Layers,
    },
    {
      title: 'Ad-Ready Creator Content',
      desc: 'High-converting hooks and direct-response formats built specifically for paid Meta, Google & TikTok ads.',
      icon: Film,
    },
    {
      title: 'Content Usage Rights Coordination',
      desc: 'Full commercial licensing and digital advertising usage rights negotiated and secured seamlessly.',
      icon: ShieldCheck,
    },
  ];

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
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border"
              style={{
                backgroundColor: themeConfig.accentBg,
                borderColor: themeConfig.accentBorder,
                color: themeConfig.accentText,
              }}
            >
              07 — UGC & CREATOR CONTENT
            </div>

            <button
              onClick={openRepresentationalModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-[11px] font-mono transition-colors cursor-pointer"
              title="View Representational Portfolio Notice"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Representational Solutions</span>
            </button>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Authentic Content <br />
            <span className="font-serif italic font-normal text-white">
              That Connects.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Today's audiences connect with content that feels relatable, genuine, and engaging. We help brands create creator-generated content that brings their products and stories to life through authentic experiences and creative storytelling.
          </p>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            From social media videos to advertising-ready content, we focus on creating content that feels natural while staying aligned with the brand's communication goals.
          </p>
        </motion.div>

        {/* 8 UGC Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 text-left">
          {ugcSolutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-3xl bg-[#13141c]/90 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between shadow-xl group relative overflow-hidden"
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                    style={{
                      backgroundColor: themeConfig.accentBg,
                      color: themeConfig.accent,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>0{idx + 1}</span>
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Creator-Led <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Closing Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#171822] via-[#12131b] to-[#0c0d12] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl"
        >
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-1">
              Brand Humanization
            </span>
            <div className="text-lg sm:text-2xl font-display font-extrabold text-white tracking-tight">
              Make Your Brand Feel More Human Through Creator-Led Content.
            </div>
          </div>

          <button
            onClick={() => openInquiryModal('brand')}
            className="px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 shadow-lg shrink-0"
            style={{
              backgroundColor: themeConfig.accent,
              color: themeConfig.accentBtnText,
            }}
          >
            <span>Request UGC Content</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
