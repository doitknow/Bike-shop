import React from 'react';
import { POPULAR_SERVICES } from '../data/servicesData';
import { ServicePackage } from '../types';
import { Bike, ArrowRight, ShieldCheck, Settings, Sparkles } from 'lucide-react';

interface PopularServicesProps {
  onSelectService: (service: ServicePackage) => void;
  onBookNowClick: () => void;
}

export const PopularServices: React.FC<PopularServicesProps> = ({
  onSelectService,
  onBookNowClick,
}) => {
  return (
    <section id="services" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8" aria-label="Our Popular Bike Services">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff6900]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Tag badge matching the mockup */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-900 border border-neutral-800 text-orange-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900] animate-pulse" />
            <span>Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Popular{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] via-[#ff7e14] to-[#ffa500]">
              Bike Services
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto">
            At Velocity Cycles, we&apos;re dedicated to keeping your bike in peak condition with high-quality service.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {POPULAR_SERVICES.map((service) => {
            const isFeatured = service.featured;

            return (
              <div
                key={service.id}
                className={`relative group rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#18181c] border-2 border-[#ff6900]/40 shadow-[0_12px_40px_rgba(255,105,0,0.18)] md:-translate-y-3 hover:border-[#ff6900]'
                    : 'bg-[#121215] border border-white/[0.08] hover:border-white/20 hover:bg-[#161619]'
                }`}
              >
                {/* Floating Top Icon Badge */}
                <div className="flex justify-center -mt-12 sm:-mt-14 mb-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      isFeatured
                        ? 'bg-gradient-to-tr from-[#ff6900] to-[#ff8c00] text-white shadow-[0_8px_25px_rgba(255,105,0,0.5)] ring-4 ring-[#18181c]'
                        : 'bg-gradient-to-tr from-[#ff6900] to-[#ff8512] text-white shadow-[0_6px_20px_rgba(255,105,0,0.35)] ring-4 ring-[#121215]'
                    }`}
                  >
                    {service.iconType === 'helmet' && <ShieldCheck className="w-7 h-7" strokeWidth={2.2} />}
                    {service.iconType === 'bike' && <Bike className="w-7 h-7" strokeWidth={2.2} />}
                    {service.iconType === 'gear' && <Settings className="w-7 h-7" strokeWidth={2.2} />}
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-3 text-center flex-1 flex flex-col justify-center">
                  {service.badge && (
                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-300">
                        <Sparkles className="w-3 h-3 text-[#ff6900]" />
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-neutral-300 hover:text-white group-hover:text-orange-400 flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900] rounded"
                  >
                    <span>View package details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA Button matching the mockup */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={onBookNowClick}
            className="px-8 py-3.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_8px_25px_rgba(255,105,0,0.4)] hover:shadow-[0_12px_32px_rgba(255,105,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Book your service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

