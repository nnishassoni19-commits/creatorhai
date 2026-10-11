import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAgency } from '../context/AgencyContext';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Info,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Layers,
  GraduationCap,
  ShoppingBag,
  HeartPulse
} from 'lucide-react';

export const RepresentationalModal: React.FC = () => {
  const {
    isRepresentationalModalOpen,
    closeRepresentationalModal,
    openInquiryModal,
    themeConfig,
  } = useAgency();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeRepresentationalModal();
      }
    };
    if (isRepresentationalModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRepresentationalModalOpen, closeRepresentationalModal]);

  return (
    <AnimatePresence>
      {isRepresentationalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeRepresentationalModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-[#10111a] border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-left shadow-2xl z-10 my-4 sm:my-8 overflow-y-auto overscroll-contain"
          >
            {/* Ambient Corner Glow */}
            <div
              className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: themeConfig.accent }}
            />

            {/* Top Close Button */}
            <button
              onClick={closeRepresentationalModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-400/15 border border-amber-400/30 text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Representational Portfolio Notice</span>
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-tight">
              About This Representational Showcase
            </h3>

            <p className="mt-2.5 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              This website is curated as a <strong>representational showcase</strong> and pitch platform to demonstrate <strong>CreatorHai's</strong> creator marketing frameworks, strategic pipelines, and cross-category execution capabilities.
            </p>

            {/* Key Clarity Points */}
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Category Frameworks & References
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    Brand names and category references (including <em>upGrad, Simplilearn, Colgate, Everest Masala, Libas, Biba, Vivo, realme, Vicks,</em> and <em>Plant-Based Sugar Control</em>) are featured to illustrate how CreatorHai structures audience alignment, creator selection, and creative tone for diverse consumer industries.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    End-to-End Execution Standard
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    Every pitch deck spread, 7-step working pipeline (Discovery → Outreach → Negotiation → Briefing → Creative Direction → Draft Approvals → Publishing), and delivery metric reflects our operational rigor and readiness to execute live campaigns.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Intellectual Property Notice
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    All third-party brand trademarks, registered trade names, logos, and creator handles remain the exclusive intellectual property of their respective owners. Mentioning these references does not imply direct corporate endorsement unless verified.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 font-mono text-center sm:text-left">
                One Creator-First Approach across all categories.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={closeRepresentationalModal}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Understood
                </button>

                <button
                  onClick={() => {
                    closeRepresentationalModal();
                    openInquiryModal('brand');
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: themeConfig.accent,
                    color: themeConfig.accentBtnText,
                  }}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Plan Live Campaign</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
