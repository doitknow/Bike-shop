import React, { useState } from 'react';
import { HERO_BIKE } from '../data/bikes';
import { BikeImageSlot } from './BikeImageSlot';
import { ArrowRight, ShoppingBag, Check, ShieldCheck, Zap } from 'lucide-react';
import { BikeProduct } from '../types';

interface HeroProps {
  onAddToCart: (product: BikeProduct, color?: string) => void;
  onQuickView: (product: BikeProduct) => void;
  showPlaceholdersOnly: boolean;
}

export type RoadStyle = 'asphalt' | 'scenic' | 'sunset';

export const Hero: React.FC<HeroProps> = ({ onAddToCart, onQuickView, showPlaceholdersOnly }) => {
  const [selectedColor, setSelectedColor] = useState(
    HERO_BIKE.colorVariants?.[0]?.hex || HERO_BIKE.colors[0]
  );
  const [roadStyle, setRoadStyle] = useState<RoadStyle>('asphalt');

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
                        className={`group relative w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === variant.hex
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
                        className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === color
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

            {/* Quick Guarantees */}
            <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ff6900]" />
                <span>Lifetime Frame Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#ff6900]" />
                <span>Free Test Rides</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ff6900]" />
                <span>Fully Assembled Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column - Bike Placed on the Road with Seamless Smooth Background Transition */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center overflow-visible">
            {/* Soft ambient reactive backlight that smoothly breathes into #060607 */}
            <div
              className="absolute w-[110%] h-[110%] -top-10 left-1/2 -translate-x-1/2 rounded-[100%] blur-[130px] pointer-events-none transition-colors duration-700 opacity-20"
              style={{ backgroundColor: selectedColor }}
            />

            {/* Road Mode Controls & Indicator */}
            <div className="relative z-20 flex items-center justify-between w-full max-w-2xl px-2 sm:px-4 mb-2">
              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#ff6900] animate-pulse" />
                <span className="text-white/80 font-medium">
                  {roadStyle === 'asphalt' && 'Bike-Roads / Highway Route 01 (Track)'}
                  {roadStyle === 'scenic' && 'Bike-Roads / Road 1 (Scenic Sky)'}
                  {roadStyle === 'sunset' && 'Bike-Roads / Road 2 (Sunset)'}
                </span>
              </div>

              {/* Minimal floating switcher */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setRoadStyle('asphalt')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    roadStyle === 'asphalt'
                      ? 'bg-[#ff6900] text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Road 1 Track
                </button>
                <button
                  type="button"
                  onClick={() => setRoadStyle('scenic')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    roadStyle === 'scenic'
                      ? 'bg-[#ff6900] text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Road 1 Scenic
                </button>
                <button
                  type="button"
                  onClick={() => setRoadStyle('sunset')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all hidden sm:inline-block ${
                    roadStyle === 'sunset'
                      ? 'bg-[#ff6900] text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Road 2 Sunset
                </button>
              </div>
            </div>

            {/* Seamless Stage Area with No Solid Frame */}
            <div className="relative w-full max-w-2xl py-4 sm:py-6 overflow-visible flex items-center justify-center">
              {/* Background Environment with Smooth Feathered Radial Transition into #060607 */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-visible flex items-end justify-center">
                {roadStyle === 'asphalt' ? (
                  /* Smooth Asphalt Road Surface fading seamlessly in all directions */
                  <div
                    className="w-[115%] max-w-3xl h-[65%] absolute bottom-[-4%] left-1/2 -translate-x-1/2"
                    style={{
                      maskImage:
                        'radial-gradient(ellipse 65% 55% at 50% 60%, black 35%, transparent 95%)',
                      WebkitMaskImage:
                        'radial-gradient(ellipse 65% 55% at 50% 60%, black 35%, transparent 95%)',
                    }}
                  >
                    <img
                      src="/images/roads/road-strip-hq.png"
                      alt="Asphalt road from Bike-Roads road 1"
                      className="w-full h-full object-contain filter contrast-[1.08] brightness-[0.98]"
                    />
                  </div>
                ) : roadStyle === 'scenic' ? (
                  /* Scenic Road 1 with Smooth Feathered Vignette (no solid box) */
                  <div
                    className="w-[110%] max-w-2xl h-[95%] absolute inset-0 m-auto"
                    style={{
                      maskImage:
                        'radial-gradient(ellipse 65% 60% at 50% 50%, black 40%, transparent 95%)',
                      WebkitMaskImage:
                        'radial-gradient(ellipse 65% 60% at 50% 50%, black 40%, transparent 95%)',
                    }}
                  >
                    <img
                      src="/images/roads/road-1-hq.jpg"
                      alt="Scenic Highway Road 1 from Bike-Roads"
                      className="w-full h-full object-cover object-bottom filter contrast-[1.03] brightness-90"
                    />
                  </div>
                ) : (
                  /* Sunset Road 2 with Smooth Feathered Vignette */
                  <div
                    className="w-[110%] max-w-2xl h-[95%] absolute inset-0 m-auto"
                    style={{
                      maskImage:
                        'radial-gradient(ellipse 65% 60% at 50% 50%, black 40%, transparent 95%)',
                      WebkitMaskImage:
                        'radial-gradient(ellipse 65% 60% at 50% 50%, black 40%, transparent 95%)',
                    }}
                  >
                    <img
                      src="/images/roads/road-2-hq.jpg"
                      alt="Sunset Road 2 from Bike-Roads"
                      className="w-full h-full object-cover object-bottom filter contrast-[1.03] brightness-90"
                    />
                  </div>
                )}
              </div>

              {/* Bike Container Placed Directly on the Road */}
              <div key={currentVariant.hex} className="relative z-10 w-full max-w-[660px] overflow-visible">
                {/* Wind / speed streaks trailing the bike upon riding in */}
                <div
                  aria-hidden="true"
                  className="animate-wind-streaks pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 w-48 h-28 flex flex-col justify-around z-0"
                >
                  <span className="h-[2px] w-36 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[0.5px] -translate-x-6" />
                  <span className="h-[2px] w-48 rounded-full bg-gradient-to-r from-transparent via-[#ff6900]/70 to-transparent blur-[0.5px] translate-x-2" />
                  <span className="h-[1.5px] w-28 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.5px] -translate-x-3" />
                </div>

                {/* Bike Image with riding transition */}
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

                  {/* Realistic Tire Contact Shadows Grounding Wheels Firmly on the Asphalt */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[2.5%] left-[15%] w-24 sm:w-34 h-3.5 sm:h-4 rounded-[100%] bg-black/95 blur-[3px]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[2.5%] right-[15%] w-24 sm:w-34 h-3.5 sm:h-4 rounded-[100%] bg-black/95 blur-[3px]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[3%] left-[24%] right-[24%] h-3.5 rounded-[100%] bg-black/75 blur-[5px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


