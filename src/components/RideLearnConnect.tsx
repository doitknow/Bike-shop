import React from 'react';
import { RIDE_LEARN_CONNECT_FEATURES, SERVICE_COLLAGE_PHOTOS } from '../data/servicesData';
import { Check, ArrowRight, ArrowUpRight, Bike } from 'lucide-react';
import { BikeImageSlot } from './BikeImageSlot';

interface RideLearnConnectProps {
  onLearnMoreClick: () => void;
  showPlaceholdersOnly: boolean;
}

export const RideLearnConnect: React.FC<RideLearnConnectProps> = ({
  onLearnMoreClick,
  showPlaceholdersOnly,
}) => {
  return (
    <section id="community" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-label="Ride Learn Connect">
      <div className="max-w-6xl mx-auto">
        {/* Large Rounded Container Card matching the mockup */}
        <div className="relative rounded-3xl bg-[#141417] border border-white/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          {/* Subtle warm glow inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6900]/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Ride. Learn.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#ffa500]">
                    Connect.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
                  At Velocity Cycles, we take pride in delivering top-tier bike services to keep your ride in peak condition.
                </p>
              </div>

              {/* 6 Features in 2 Columns with Orange Checkmark Badges */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:gap-x-8 pt-2">
                {RIDE_LEARN_CONNECT_FEATURES.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#ff6900] flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(255,105,0,0.5)]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons matching the mockup */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={onLearnMoreClick}
                  className="px-7 py-3 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_8px_20px_rgba(255,105,0,0.35)] hover:shadow-[0_10px_25px_rgba(255,105,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>see full info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#services"
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
                >
                  <span>Find out more information</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ff6900]" />
                </a>
              </div>
            </div>

            {/* Right Photo Collage (2x2 Grid) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {SERVICE_COLLAGE_PHOTOS.map((photo, i) => (
                  <div
                    key={photo.id}
                    className="group relative rounded-2xl overflow-hidden bg-[#1a1a1e] border border-white/[0.08] aspect-square transition-all duration-300 hover:border-orange-500/40 hover:shadow-xl"
                  >
                    {!showPlaceholdersOnly ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={photo.image}
                          alt={photo.alt}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <span className="text-[11px] font-semibold text-white drop-shadow">
                            {photo.title}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full p-3 flex flex-col items-center justify-center text-center gap-1.5 bg-gradient-to-br from-[#1c1c1e] to-[#121214] border-2 border-dashed border-orange-500/30">
                        <Bike className="w-5 h-5 text-[#ff6900] animate-pulse" />
                        <span className="text-[9px] font-mono uppercase text-orange-400 font-bold px-1.5 py-0.5 bg-orange-500/10 rounded">
                          Slot {i + 1}
                        </span>
                        <p className="text-[11px] font-bold text-white leading-tight">
                          {photo.title}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

