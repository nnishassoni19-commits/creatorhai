import React from 'react';

// Exact brand logos matching the uploaded visual poster
export const UpGradLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center font-bold tracking-tight text-[#e3232c] ${className}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
    <span className="text-[1.15em] font-black lowercase tracking-tighter">up</span>
    <span className="text-[1.15em] font-extrabold uppercase tracking-tight">Grad</span>
  </span>
);

export const SimplilearnLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center font-extrabold tracking-tight ${className}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
    <span className="text-[#f37023]">simpli</span>
    <span className="text-[#005088]">learn</span>
  </span>
);

export const ColgateLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center px-3 py-1 bg-[#d31a2a] text-white rounded-full font-bold text-xs tracking-wider shadow-sm select-none ${className}`}>
    <span className="font-serif italic text-sm tracking-normal">Colgate</span>
  </div>
);

export const EverestLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center px-2.5 py-0.5 bg-[#cb1d24] text-white font-black text-xs uppercase tracking-widest border border-red-700 shadow-sm select-none ${className}`}>
    <span>EVEREST</span>
  </div>
);

export const LibasLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <span className={`inline-flex items-center font-serif text-neutral-900 font-bold text-lg tracking-wide ${className}`}>
    Libas
  </span>
);

export const BibaLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center gap-1.5 font-serif text-neutral-900 font-bold text-base tracking-widest ${className}`}>
    <span className="text-amber-700 text-sm">❖</span>
    <span>BIBA</span>
  </div>
);

export const VivoLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <span className={`inline-flex items-center font-black lowercase tracking-wider text-[#0066ff] text-lg ${className}`}>
    vivo
  </span>
);

export const RealmeLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center px-2 py-0.5 bg-[#ffc915] text-black font-extrabold text-xs lowercase tracking-tight rounded shadow-sm select-none ${className}`}>
    <span>realme</span>
  </div>
);

export const VicksLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center gap-1 px-2.5 py-1 bg-[#008752] text-white font-black text-[11px] uppercase tracking-wider rounded-lg shadow-sm select-none ${className}`}>
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
    </svg>
    <span>VICKS</span>
  </div>
);

export const PlantBasedSugarControlLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center gap-1.5 text-emerald-800 font-bold text-xs select-none ${className}`}>
    <svg className="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 24 24">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5c0 2 1 3 3 3 2 0 4-1 6-2s5-3 6-6.5z" />
    </svg>
    <div className="flex flex-col text-left leading-tight">
      <span className="font-bold text-[11px] text-emerald-950">Plant-Based</span>
      <span className="font-semibold text-[10px] text-emerald-800">Sugar Control</span>
    </div>
  </div>
);
