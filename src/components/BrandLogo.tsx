import React from 'react';
import { useAgency } from '../context/AgencyContext';

interface BrandLogoProps {
  /**
   * Display variant:
   * - 'navbar': Clean wordmark with glowing HAI accent and agency tag
   * - 'full': Wordmark + full tagline
   * - 'mark': Compact text wordmark
   * - 'hero': Large impactful typography wordmark
   */
  variant?: 'navbar' | 'full' | 'mark' | 'hero';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'navbar',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const { themeConfig } = useAgency();

  // Pure typography brand name with zero logo graphic, strictly meeting user requirement
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col text-left ${className}`}>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            CREATOR
          </span>
          <span
            className="font-display font-black text-3xl sm:text-5xl tracking-tight transition-all"
            style={{
              color: themeConfig.accent,
              textShadow: `0 0 24px ${themeConfig.accent}70`,
            }}
          >
            HAI
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold tracking-widest bg-white/10 border border-white/15 text-neutral-200 uppercase">
            AGENCY
          </span>
        </div>
        {showTagline && (
          <span className="text-sm sm:text-base text-neutral-300 font-medium mt-1">
            Connecting Brands with the Right Creators.
          </span>
        )}
      </div>
    );
  }

  const textSizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`flex flex-col justify-center text-left ${className}`}>
      <div className="flex items-center gap-1.5 leading-none">
        <span
          className={`font-display font-black tracking-tight text-white transition-colors ${textSizeClasses[size]}`}
        >
          CREATOR
        </span>
        <span
          className={`font-display font-black tracking-tight transition-all ${textSizeClasses[size]}`}
          style={{
            color: themeConfig.accent,
            textShadow: `0 0 16px ${themeConfig.accent}60`,
          }}
        >
          HAI
        </span>

        {/* Agency micro badge */}
        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-white/10 text-neutral-300 border border-white/10 ml-1">
          AGENCY
        </span>
      </div>

      {showTagline && variant !== 'mark' && (
        <span className="hidden sm:flex text-[10px] sm:text-[11px] tracking-wide text-neutral-400 font-medium truncate mt-1 items-center gap-1.5 max-w-[240px]">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: themeConfig.accent }}
          />
          <span className="truncate">Connecting Brands with the Right Creators</span>
        </span>
      )}
    </div>
  );
};
