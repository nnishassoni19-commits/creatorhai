import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import {
  FileText,
  Search,
  Filter,
  MessageSquare,
  Send,
  Clapperboard,
  CheckCircle,
  Radio,
  BarChart3,
  ChevronRight
} from 'lucide-react';

export const ApproachPipeline: React.FC = () => {
  const { themeConfig } = useAgency();
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'BRAND BRIEF',
      subtitle: 'Understanding Goals & Target Audience',
      desc: 'Deep-dive into brand objectives, KPIs, campaign tone, product USP, target demographics, and preferred platform formats.',
      deliverable: 'Audited Campaign Brief & Target Creator Persona',
      icon: FileText,
    },
    {
      step: '02',
      title: 'CREATOR RESEARCH',
      subtitle: 'Data & Vibe Screening',
      desc: 'Comprehensive scanning across Instagram & YouTube analyzing engagement rates, follower legitimacy, audience demographics, and past brand work.',
      deliverable: 'Longlist of 50-200+ Qualified Creators',
      icon: Search,
    },
    {
      step: '03',
      title: 'SHORTLISTING',
      subtitle: 'Precision Alignment Filter',
      desc: 'Filtering candidates down to the ideal fit based on content aesthetic, niche authority, geographic relevance, and budget efficiency.',
      deliverable: 'Curated Roster with Detailed Metrics Deck',
      icon: Filter,
    },
    {
      step: '04',
      title: 'OUTREACH & NEGOTIATION',
      subtitle: 'Securing Highest Value Terms',
      desc: 'Handling direct creator communication, closing commercial rates, barter perks, turnaround commitments, and usage/ad-rights agreements.',
      deliverable: 'Signed Creator Contracts & Commercial Rate Lock',
      icon: MessageSquare,
    },
    {
      step: '05',
      title: 'CAMPAIGN BRIEFING',
      subtitle: 'Creative Direction & Do’s/Don’ts',
      desc: 'Issuing bespoke creative briefs with clear hooks, key talking points, mandatory brand tags, discount codes, and compliance rules.',
      deliverable: 'Standardized Creator Action Guides',
      icon: Send,
    },
    {
      step: '06',
      title: 'CONTENT CREATION',
      subtitle: 'Production & Authentic Filming',
      desc: 'Creators film drafts, test scripts, try on products, or conduct store visits while maintaining their organic personal voice.',
      deliverable: 'First-Cut Video Drafts & Script Checks',
      icon: Clapperboard,
    },
    {
      step: '07',
      title: 'BRAND APPROVAL',
      subtitle: 'Quality Assurance & Edits',
      desc: 'Strict review cycle coordinating revisions, audio adjustments, and visual compliance before any asset goes public.',
      deliverable: '100% Brand-Approved Ready-to-Post Media',
      icon: CheckCircle,
    },
    {
      step: '08',
      title: 'CONTENT GOES LIVE',
      subtitle: 'Synchronized Launch Scheduling',
      desc: 'Time-coordinated rollout across Instagram Reels and YouTube to maximize algorithmic momentum and audience reach.',
      deliverable: 'Live Posts, Collab Tags & Link Stickers Active',
      icon: Radio,
    },
    {
      step: '09',
      title: 'TRACKING & REPORTING',
      subtitle: 'Performance & Post-Campaign ROI',
      desc: 'Monitoring view counts, engagement, comment sentiment, link clicks, store visits, and compiling the comprehensive wrap-up report.',
      deliverable: 'Final Analytics Dashboard & Post-Mortem',
      icon: BarChart3,
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#0b0c0e] border-b border-white/10 relative overflow-hidden">
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
            END-TO-END EXECUTION • 9-STEP FRAMEWORK
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            From Discovery to Live Execution: <br />
            <span className="font-serif italic font-normal text-white">
              Making Collaborations Seamless & Strategic.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            We bridge the gap between brands and creators with an end-to-end management pipeline that covers campaign planning, creator outreach, creative direction, draft approvals, and performance tracking.
          </p>
        </motion.div>

        {/* Pipeline Horizontal Flow (Clean 3x3 on mobile, 9 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-2 sm:gap-2.5 mb-10"
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                aria-label={`Select step ${item.step}: ${item.title}`}
                className={`pipeline-step-card p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-[#181920] border-white/40 shadow-xl'
                    : 'bg-[#101116] border-white/10 hover:border-white/20 hover:bg-[#14151b]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono text-xs font-bold transition-colors"
                      style={{ color: isSelected ? themeConfig.accent : '#9ca3af' }}
                    >
                      {item.step}
                    </span>
                    <Icon
                      className="w-3.5 h-3.5"
                      style={{ color: isSelected ? themeConfig.accent : '#6b7280' }}
                    />
                  </div>
                  <div className="text-[11px] sm:text-xs font-display font-bold text-white uppercase tracking-tight leading-tight line-clamp-2">
                    {item.title}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-400 font-mono">
                    Step {idx + 1}/9
                  </span>
                  {idx < 8 && (
                    <ChevronRight className="w-3 h-3 text-neutral-400 hidden lg:block" />
                  )}
                </div>

                {isSelected && (
                  <div
                    className="absolute -top-0.5 left-3 right-3 h-1 rounded-full"
                    style={{ backgroundColor: themeConfig.accent }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Active Step Deep-Dive Showcase Box with gentle animated transition */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#14151c]/95 border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-white/10 text-white">
                    PHASE {steps[activeStep].step}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                    {steps[activeStep].subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  {steps[activeStep].title}
                </h3>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  {steps[activeStep].desc}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2 text-xs font-medium text-neutral-200">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: themeConfig.secondaryAccent }}
                    />
                    <span className="text-neutral-400">Key Deliverable:</span>
                    <strong className="text-white">{steps[activeStep].deliverable}</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/50 border border-white/10 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-xl"
                  style={{
                    backgroundColor: themeConfig.accent,
                    color: themeConfig.accentBtnText,
                  }}
                >
                  {React.createElement(steps[activeStep].icon, { className: 'w-8 h-8' })}
                </div>

                <div className="text-sm font-bold text-white mb-1">
                  Step {activeStep + 1} of 9
                </div>
                <div className="text-xs text-neutral-400 mb-4">
                  Zero Friction Brand Execution
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 8))}
                    aria-label="Go to previous framework step"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < 8 ? prev + 1 : 0))}
                    aria-label="Go to next framework step"
                    className="px-4 py-1.5 rounded-lg text-xs font-bold transition-colors"
                    style={{
                      backgroundColor: themeConfig.accent,
                      color: themeConfig.accentBtnText,
                    }}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
