import React from 'react';
import { REVOLUTION_BIKE, REVOLUTION_FEATURES } from '../data/bikes';
import { BikeImageSlot } from './BikeImageSlot';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { BikeProduct } from '../types';

interface RevolutionProps {
  onQuickView: (product: BikeProduct) => void;
  showPlaceholdersOnly: boolean;
}

export const Revolution: React.FC<RevolutionProps> = ({ onQuickView, showPlaceholdersOnly }) => {
  return (
    <section id="revolution" className="relative py-20 lg:py-28 bg-[#0a0a0c] border-y border-white/5" aria-label="About BMAX Revolution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Revolution Bike Slot */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl bg-neutral-900/40 border border-white/10 p-4 sm:p-6 shadow-2xl overflow-hidden group">
              <BikeImageSlot
                placeName={REVOLUTION_BIKE.placeName}
                bikeName={REVOLUTION_BIKE.name}
                imageSrc={REVOLUTION_BIKE.image}
                altText="BMAX Revolution XR-1 All-Terrain MTB"
                aspectRatio="aspect-[4/3]"
                badge="Revolution XR-1"
                forcePlaceholder={showPlaceholdersOnly}
                className="rounded-2xl"
              />

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/5">
                <div>
                  <span className="text-xs font-mono text-neutral-400">Carbon Composite Alloy</span>
                  <p className="text-sm font-bold text-white">{REVOLUTION_BIKE.model}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onQuickView(REVOLUTION_BIKE)}
                  className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-[#ff6900] text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Build</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Revolution Content */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ff6900] font-bold">
                ENGINEERED FOR SUPREMACY
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                BMAX Bicycle - It's Not Just a Bike, It's a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#ffa500]">
                  Revolution
                </span>
              </h2>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Often referred to as a bike, cycle, or pedal cycle, a bicycle is a single-track,
                pedal-driven vehicle. It features a frame equipped with two wheels aligned one behind the
                other. Whether it relies entirely on human effort or utilizes motor assistance, the
                individual operating the vehicle is known as a cyclist or bicyclist.
              </p>
            </div>

            {/* 6 Feature Badges in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {REVOLUTION_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-orange-500/30 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#ff6900] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

