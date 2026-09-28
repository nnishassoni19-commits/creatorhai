import React, { useState } from 'react';
import { useAgency } from '../context/AgencyContext';
import { Edit3, Check, RotateCcw, Palette, Info, X } from 'lucide-react';

export const EditBar: React.FC = () => {
  const { isEditMode, setIsEditMode, resetToDefaults, colorTheme, setColorTheme, themeConfig } = useAgency();
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isEditMode) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] sm:w-auto bg-[#1a1b24]/95 border border-white/20 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl flex flex-wrap items-center justify-between gap-3 text-xs animate-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-center gap-2 text-white">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-bold">Portfolio Edit Mode Active</span>
        <span className="text-neutral-400 hidden sm:inline">• Changes saved automatically</span>
      </div>

      <div className="flex items-center gap-2">
        {showConfirmReset ? (
          <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/40 px-2 py-1 rounded-lg">
            <span className="text-[11px] text-red-200">Reset all?</span>
            <button
              onClick={() => {
                resetToDefaults();
                setShowConfirmReset(false);
              }}
              className="px-2 py-0.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold text-[10px]"
            >
              Yes
            </button>
            <button
              onClick={() => setShowConfirmReset(false)}
              className="px-1.5 text-neutral-400 hover:text-white text-[10px]"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
            title="Reset text and stats to original defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>
        )}

        <button
          onClick={() => setIsEditMode(false)}
          className="px-3.5 py-1.5 rounded-lg font-bold text-black flex items-center gap-1 shadow-md hover:opacity-90 transition-all"
          style={{ backgroundColor: themeConfig.accent }}
        >
          <Check className="w-3.5 h-3.5" />
          <span>Done Editing</span>
        </button>
      </div>
    </div>
  );
};
