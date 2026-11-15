import React, { useState } from 'react';
import { HERO_BIKE } from '../data/bikes';
import { BikeImageSlot } from './BikeImageSlot';
import { ArrowRight, ShoppingBag, Check, ShieldCheck, Zap } from 'lucide-react';
import { BikeProduct } from '../types';
import roadImage from '../Bike-Roads/Road.png';

interface HeroProps {
  onAddToCart: (product: BikeProduct, color?: string) => void;
  onQuickView: (product: BikeProduct) => void;
  showPlaceholdersOnly: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onAddToCart, onQuickView, showPlaceholdersOnly }) => {
  const [selectedColor, setSelectedColor] = useState(
    HERO_BIKE.colorVariants?.[0]?.hex || HERO_BIKE.colors[0]
  );

  const currentVariant =
    HERO_BIKE.colorVariants?.find((v) => v.hex === selectedColor) || {
      name: 'Ghost Red',
      hex: selectedColor,
      image: HERO_BIKE.image,
    };

  return (
    <section id="top" className="relative pt-10 pb-20 md:py-20 overflow-hidden" aria-label="Hero Showcase">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff6900]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                BMAX Bicycle is not just{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] via-[#ff8800] to-[#ffa500]">
                  a Regular Bicycle
                </span>
              </h1>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
                {HERO_BIKE.description}
              </p>
            </div>

            {/* Price block */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ff6900] tracking-tight">
                $ {HERO_BIKE.price}
              </span>
              {HERO_BIKE.originalPrice && (
                <span className="text-lg sm:text-xl line-through text-neutral-500 font-medium">
                  ${HERO_BIKE.originalPrice}
                </span>
              )}
              <span className="text-xs uppercase font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                In Stock
              </span>
            </div>

            {/* Action Buttons & Colors */}
            <div className="space-y-5 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onAddToCart(HERO_BIKE, selectedColor)}
                  className="px-7 py-3.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-sm tracking-wide transition-all shadow-[0_8px_25px_rgba(255,105,0,0.35)] hover:shadow-[0_12px_30px_rgba(255,105,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>see full details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onQuickView(HERO_BIKE)}
                  className="px-5 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/20 text-neutral-200 text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <span>Quick Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Color options from the mockup: "Bike have different colors" */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="text-xs text-neutral-400 font-medium">Bike have different colors:</span>
                <div className="flex items-center gap-2.5" role="radiogroup" aria-label="Available Bike Colors">
                  {HERO_BIKE.colorVariants ? (
                    HERO_BIKE.colorVariants.map((variant) => (
                      <button
                        key={variant.hex}
                        type="button"
                        onClick={() => setSelectedColor(variant.hex)}
                        title={variant.name}
                        aria-label={`Select color ${variant.name}`}
                        className={`group relative w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === variant.hex
                          ? 'border-white scale-110 shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                          : 'border-white/20 hover:scale-105 opacity-80 hover:opacity-100 hover:border-white/50'
                          }`}
                        style={{ backgroundColor: variant.hex }}
                      >
                        {selectedColor === variant.hex && (
                          <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                        )}
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 border border-white/10 text-[10px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-30 shadow-lg">
                          {variant.name}
                        </span>
                      </button>
                    ))
                  ) : (
                    HERO_BIKE.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color}`}
                        className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === color
                          ? 'border-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                          : 'border-transparent hover:scale-105 opacity-80 hover:opacity-100'
                          }`}
                        style={{ backgroundColor: color }}
                      >
                        {selectedColor === color && <Check className="w-3 h-3 text-white drop-shadow" />}
                      </button>
                    ))
                  )}
                </div>
                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/25">
                  {currentVariant.name}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Bike Placed Directly on Road.png with Seamless Smooth Edge Transitions */}
          <div className="lg:col-span-7 relative flex items-center justify-center overflow-visible">
            {/* Consistent deep black ambient shadow for all color bikes */}
            <div
              className="absolute w-[110%] h-[110%] -top-10 left-1/2 -translate-x-1/2 rounded-[100%] blur-[130px] pointer-events-none bg-black/50"
            />

            {/* Seamless Stage Area with No Solid Frame */}
            <div className="relative w-full max-w-2xl py-4 sm:py-6 overflow-visible flex items-center justify-center">
              {/* Smooth Asphalt Road Surface directly using Road.png with Left and Right Fade */}
              <div
                className="w-[115%] max-w-3xl h-[65%] absolute bottom-[-4%] left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), radial-gradient(ellipse 70% 60% at 50% 60%, black 40%, transparent 95%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), radial-gradient(ellipse 70% 60% at 50% 60%, black 40%, transparent 95%)',
                }}
              >
                {/* Base Road PNG */}
                <img
                  src={roadImage}
                  alt="Asphalt Road"
                  className="w-full h-full object-contain filter contrast-[1.08] brightness-[0.98]"
                />

                {/* Animated Asphalt Velocity Streaks: streaming backwards beneath the wheels */}
                <div
                  aria-hidden="true"
                  className="animate-road-velocity absolute inset-0 w-[200%] h-full flex pointer-events-none opacity-40 mix-blend-screen"
                >
                  <div className="w-1/2 h-full relative">
                    <span className="absolute bottom-[22%] left-[10%] w-24 h-[1.5px] bg-white/40 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[18%] left-[28%] w-32 h-[2px] bg-orange-400/50 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[24%] left-[52%] w-20 h-[1.5px] bg-white/30 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[20%] left-[72%] w-36 h-[2px] bg-white/45 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[16%] left-[88%] w-16 h-[1.5px] bg-orange-400/40 blur-[0.5px] rounded-full" />
                  </div>
                  <div className="w-1/2 h-full relative">
                    <span className="absolute bottom-[22%] left-[10%] w-24 h-[1.5px] bg-white/40 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[18%] left-[28%] w-32 h-[2px] bg-orange-400/50 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[24%] left-[52%] w-20 h-[1.5px] bg-white/30 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[20%] left-[72%] w-36 h-[2px] bg-white/45 blur-[0.5px] rounded-full" />
                    <span className="absolute bottom-[16%] left-[88%] w-16 h-[1.5px] bg-orange-400/40 blur-[0.5px] rounded-full" />
                  </div>
                </div>

                {/* Road surface ambient light sweep */}
                <div
                  aria-hidden="true"
                  className="animate-road-light-glide absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-[#ff6900]/15 to-transparent blur-md"
                />
              </div>

              {/* Bike Container Placed Directly on the Road */}
              <div key={currentVariant.hex} className="relative z-10 w-full max-w-[660px] overflow-visible">
                {/* Continuous Aerodynamic Wind Streaks (Forward Speed Vibe) */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-visible">
                  {/* Aero streak 1: off handlebars */}
                  <span className="animate-aero-stream-1 absolute top-[28%] right-[18%] h-[1.5px] w-36 rounded-full bg-gradient-to-r from-transparent via-[#ff6900]/80 to-transparent blur-[0.5px]" />
                  {/* Aero streak 2: across top tube */}
                  <span className="animate-aero-stream-2 absolute top-[44%] right-[32%] h-[2px] w-48 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[0.5px]" />
                  {/* Aero streak 3: trailing rear wheel */}
                  <span className="animate-aero-stream-3 absolute bottom-[18%] left-[8%] h-[1.5px] w-40 rounded-full bg-gradient-to-r from-transparent via-[#ff6900]/70 to-transparent blur-[0.5px]" />
                  {/* Subtle speed micro-particles */}
                  <span className="animate-aero-stream-2 absolute bottom-[28%] left-[22%] h-[1px] w-20 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.5px]" />
                </div>

                {/* Outer container: Continuous Smooth Cruising Suspension & Forward Surge */}
                <div className="animate-bike-cruise relative">
                  {/* Inner element: Swift ride-in deceleration entrance on mount/color change */}
                  <div className="animate-bike-ride-in relative">
                    <BikeImageSlot
                      placeName={`${HERO_BIKE.placeName} (${currentVariant.name})`}
                      bikeName={`${HERO_BIKE.name} - ${currentVariant.name}`}
                      imageSrc={currentVariant.image}
                      altText={`BMAX Ghost Mountain Pro in ${currentVariant.name}`}
                      aspectRatio="aspect-[16/10]"
                      badge={currentVariant.name}
                      forcePlaceholder={showPlaceholdersOnly}
                      overflowHidden={false}
                      className="w-full"
                      imgClassName="object-contain object-bottom drop-shadow-[0_22px_38px_rgba(0,0,0,0.92)] filter contrast-[1.03]"
                    />

                    {/* High-speed Wheel Spin Shimmer over rear and front wheels */}
                    {/* Rear wheel spoke spin: center at 20.6%, bottom ~39% from bottom of container (radius ~15.5%) */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[20.6%] bottom-[39%] -translate-x-1/2 translate-y-1/2 w-[31%] aspect-square rounded-full overflow-hidden opacity-35"
                    >
                      <div
                        className="animate-wheel-spin w-full h-full rounded-full"
                        style={{
                          background:
                            'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.2) 20deg, transparent 40deg, transparent 90deg, rgba(255,255,255,0.15) 110deg, transparent 130deg, transparent 180deg, rgba(255,255,255,0.2) 200deg, transparent 220deg, transparent 270deg, rgba(255,255,255,0.15) 290deg, transparent 310deg, transparent 360deg)',
                          maskImage: 'radial-gradient(circle at center, transparent 35%, black 42%, black 92%, transparent 98%)',
                          WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 42%, black 92%, transparent 98%)',
                        }}
                      />
                    </div>

                    {/* Front wheel spoke spin: center at 77.8%, bottom ~38% */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[77.8%] bottom-[38%] -translate-x-1/2 translate-y-1/2 w-[31%] aspect-square rounded-full overflow-hidden opacity-35"
                    >
                      <div
                        className="animate-wheel-spin w-full h-full rounded-full"
                        style={{
                          background:
                            'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.2) 20deg, transparent 40deg, transparent 90deg, rgba(255,255,255,0.15) 110deg, transparent 130deg, transparent 180deg, rgba(255,255,255,0.2) 200deg, transparent 220deg, transparent 270deg, rgba(255,255,255,0.15) 290deg, transparent 310deg, transparent 360deg)',
                          maskImage: 'radial-gradient(circle at center, transparent 35%, black 42%, black 92%, transparent 98%)',
                          WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 42%, black 92%, transparent 98%)',
                        }}
                      />
                    </div>

                    {/* Realistic Tire Contact Shadows Grounding Wheels Firmly on the Asphalt with Synchronized Breathing */}
                    <div
                      aria-hidden="true"
                      className="animate-tire-shadow-cruise pointer-events-none absolute bottom-[2.5%] left-[20.6%] -translate-x-1/2 w-28 sm:w-36 h-3.5 sm:h-4 rounded-[100%] bg-black/95 blur-[3px]"
                    />
                    <div
                      aria-hidden="true"
                      className="animate-tire-shadow-cruise pointer-events-none absolute bottom-[2.5%] left-[77.8%] -translate-x-1/2 w-28 sm:w-36 h-3.5 sm:h-4 rounded-[100%] bg-black/95 blur-[3px]"
                    />
                    <div
                      aria-hidden="true"
                      className="animate-tire-shadow-cruise pointer-events-none absolute bottom-[3%] left-[24%] right-[24%] h-3.5 rounded-[100%] bg-black/75 blur-[5px]"
                    />
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


