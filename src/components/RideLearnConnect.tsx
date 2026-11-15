import React from 'react';
import { RIDE_LEARN_CONNECT_FEATURES } from '../data/servicesData';
import { Check, ArrowRight, ArrowUpRight, Bike, Sparkles } from 'lucide-react';

interface RideLearnConnectProps {
  onLearnMoreClick: () => void;
  showPlaceholdersOnly: boolean;
}

const MARQUEE_COL_1 = [
  {
    id: 'col1-1',
    image: '/images/hq-service-collage-1.png',
    alt: 'Road cyclists riding in peloton on open scenic highway',
    title: 'Road Cycling Training',
    tag: 'Group Ride',
    badge: 'Road',
  },
  {
    id: 'col1-2',
    image: '/images/hq-service-collage-3.png',
    alt: 'Enduro cyclist resting on cliff peak above majestic mountain clouds',
    title: 'Mountain Cliff Summit',
    tag: 'High Altitude',
    badge: 'Climbing',
  },
  {
    id: 'col1-3',
    image: '/images/hq-blog_art_1.png',
    alt: 'Cyclist riding along scenic sunny coastline route',
    title: 'Coastal Highway Ride',
    tag: 'Touring & Speed',
    badge: 'Scenic',
  },
];

const MARQUEE_COL_2 = [
  {
    id: 'col2-1',
    image: '/images/hq-service-collage-2.png',
    alt: 'Mountain biker navigating winding forest singletrack trail',
    title: 'Forest Singletrack',
    tag: 'Trail Exploration',
    badge: 'MTB Trail',
  },
  {
    id: 'col2-2',
    image: '/images/hq-service-collage-4.png',
    alt: 'Urban commuter with track bike in the city',
    title: 'Urban Commute & Track',
    tag: 'City Speed',
    badge: 'Urban',
  },
  {
    id: 'col2-3',
    image: '/images/hq-service-faq-cyclist.png',
    alt: 'Pro rider cycling on alpine gravel mountain ascent',
    title: 'Alpine Gravel Escape',
    tag: 'All-Terrain',
    badge: 'Adventure',
  },
];

export const RideLearnConnect: React.FC<RideLearnConnectProps> = ({
  onLearnMoreClick,
  showPlaceholdersOnly,
}) => {
  // Seamless infinite loop arrays (duplicated once for mathematical continuity)
  const col1Loop = [...MARQUEE_COL_1, ...MARQUEE_COL_1];
  const col2Loop = [...MARQUEE_COL_2, ...MARQUEE_COL_2];

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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff6900] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>BMAX Cycling Community</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Ride. Learn.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#ffa500]">
                    Connect.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
                  At Velocity Cycles, we take pride in delivering top-tier bike services to keep your ride in peak condition. Join our weekend rides, technical masterclasses, and vibrant rider network.
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

            {/* Right Vertical Marquee: Column 1 moves UPWARD, Column 2 moves DOWNWARD */}
            <div className="lg:col-span-6">
              <div
                className="marquee-container relative h-[440px] sm:h-[500px] overflow-hidden rounded-2xl"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                  {/* Column 1: Smooth Infinite Scrolling UPWARD */}
                  <div className="relative overflow-hidden h-full">
                    <div className="animate-marquee-up flex flex-col gap-3 sm:gap-4">
                      {col1Loop.map((photo, i) => (
                        <div
                          key={`col1-${photo.id}-${i}`}
                          className="group relative rounded-2xl overflow-hidden bg-[#1a1a1e] border border-white/[0.08] h-44 sm:h-52 shrink-0 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_10px_25px_rgba(255,105,0,0.25)] hover:scale-[1.02]"
                        >
                          {!showPlaceholdersOnly ? (
                            <div className="relative w-full h-full overflow-hidden">
                              <img
                                src={photo.image}
                                alt={photo.alt}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                              />
                              {/* Top Badge */}
                              <div className="absolute top-2.5 right-2.5 z-10">
                                <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-orange-400 shadow">
                                  {photo.badge}
                                </span>
                              </div>
                              {/* Bottom Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3">
                                <span className="text-[10px] font-mono text-orange-400 font-semibold uppercase tracking-wider">
                                  {photo.tag}
                                </span>
                                <span className="text-xs font-bold text-white leading-tight drop-shadow">
                                  {photo.title}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full p-3 flex flex-col items-center justify-center text-center gap-1.5 bg-gradient-to-br from-[#1c1c1e] to-[#121214] border-2 border-dashed border-orange-500/30">
                              <Bike className="w-5 h-5 text-[#ff6900] animate-pulse" />
                              <span className="text-[9px] font-mono uppercase text-orange-400 font-bold px-1.5 py-0.5 bg-orange-500/10 rounded">
                                Col 1 - {((i % 3) + 1)}
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

                  {/* Column 2: Smooth Infinite Scrolling DOWNWARD */}
                  <div className="relative overflow-hidden h-full">
                    <div className="animate-marquee-down flex flex-col gap-3 sm:gap-4">
                      {col2Loop.map((photo, i) => (
                        <div
                          key={`col2-${photo.id}-${i}`}
                          className="group relative rounded-2xl overflow-hidden bg-[#1a1a1e] border border-white/[0.08] h-44 sm:h-52 shrink-0 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_10px_25px_rgba(255,105,0,0.25)] hover:scale-[1.02]"
                        >
                          {!showPlaceholdersOnly ? (
                            <div className="relative w-full h-full overflow-hidden">
                              <img
                                src={photo.image}
                                alt={photo.alt}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                              />
                              {/* Top Badge */}
                              <div className="absolute top-2.5 right-2.5 z-10">
                                <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-orange-400 shadow">
                                  {photo.badge}
                                </span>
                              </div>
                              {/* Bottom Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3">
                                <span className="text-[10px] font-mono text-orange-400 font-semibold uppercase tracking-wider">
                                  {photo.tag}
                                </span>
                                <span className="text-xs font-bold text-white leading-tight drop-shadow">
                                  {photo.title}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full p-3 flex flex-col items-center justify-center text-center gap-1.5 bg-gradient-to-br from-[#1c1c1e] to-[#121214] border-2 border-dashed border-orange-500/30">
                              <Bike className="w-5 h-5 text-[#ff6900] animate-pulse" />
                              <span className="text-[9px] font-mono uppercase text-orange-400 font-bold px-1.5 py-0.5 bg-orange-500/10 rounded">
                                Col 2 - {((i % 3) + 1)}
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
          </div>
        </div>
      </div>
    </section>
  );
};

