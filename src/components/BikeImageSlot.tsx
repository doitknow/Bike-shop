import React, { useState } from 'react';
import { Bike, Image as ImageIcon, Sparkles } from 'lucide-react';

interface BikeImageSlotProps {
  placeName: string;
  bikeName: string;
  imageSrc?: string;
  altText: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  badge?: string;
  forcePlaceholder?: boolean;
  overflowHidden?: boolean;
}

export const BikeImageSlot: React.FC<BikeImageSlotProps> = ({
  placeName,
  bikeName,
  imageSrc,
  altText,
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[4/3]',
  badge,
  forcePlaceholder = false,
  overflowHidden = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const showPlaceholder = forcePlaceholder || imageError || !imageSrc;

  return (
    <div
      className={`relative group w-full ${
        overflowHidden ? 'overflow-hidden' : 'overflow-visible'
      } ${aspectRatio} ${className}`}
    >
      {!showPlaceholder ? (
        <img
          src={imageSrc}
          alt={altText}
          onError={() => setImageError(true)}
          className={`w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] ${imgClassName}`}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#121214] border-2 border-dashed border-orange-500/40 p-4 flex flex-col items-center justify-center text-center gap-2 group-hover:border-[#ff6900] transition-colors">
          <div className="w-12 h-12 rounded-full bg-[#ff6900]/10 border border-[#ff6900]/30 flex items-center justify-center text-[#ff6900] shadow-[0_0_20px_rgba(255,105,0,0.2)]">
            <Bike className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1 max-w-[90%]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400/90 font-semibold px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 inline-block">
              Image Placeholder
            </span>
            <p className="text-sm font-bold text-white leading-tight truncate">{bikeName}</p>
            <p className="text-[11px] text-neutral-400 font-mono tracking-tight">{placeName}</p>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mt-1">
            <ImageIcon className="w-3 h-3 text-[#ff6900]" />
            <span>Replace with your bike image</span>
          </div>
        </div>
      )}

      {/* Floating Place Identifier Badge (Always visible or on hover so the user immediately knows the slot) */}
      <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900]" />
          <span className="font-semibold text-white/90 truncate max-w-[170px]">{placeName}</span>
        </div>
      </div>

      {badge && (
        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#ff6900] to-[#ff8c00] text-white text-[10px] font-bold shadow-[0_2px_10px_rgba(255,105,0,0.4)] flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};

