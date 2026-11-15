import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PromoBannerProps {
  onExploreClick: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onExploreClick }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" aria-label="Special Ride Promotion">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#ff5500] via-[#ff6900] to-[#ff7e00] p-8 sm:p-12 lg:p-14 text-center shadow-[0_20px_50px_rgba(255,105,0,0.3)]">
          {/* Subtle geometric circles in background */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-black/10 blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-white/95 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Weekend Special Season
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
              It's a great day for a ride
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              Often referred to as a bike, cycle, or pedal cycle, a bicycle is a single-track,
              pedal-driven vehicle.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-white font-bold text-sm tracking-wide transition-all shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-[#ff6900]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

