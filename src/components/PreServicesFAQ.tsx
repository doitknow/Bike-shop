import React from 'react';
import { PRE_SERVICES_FAQS } from '../data/servicesData';
import { ChevronDown, HelpCircle, Bike, Camera } from 'lucide-react';

interface PreServicesFAQProps {
  showPlaceholdersOnly: boolean;
}

export const PreServicesFAQ: React.FC<PreServicesFAQProps> = ({ showPlaceholdersOnly }) => {
  return (
    <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="faq-heading">
      {/* Background Giant Watermark matching the mockup */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap text-[50px] sm:text-[80px] lg:text-[130px] font-black tracking-widest text-transparent uppercase opacity-15"
        style={{
          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)',
        }}
        aria-hidden="true"
      >
        MEET OUR BEST SELLERS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pre Services{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#ffa500]">
              Common Questions
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto">
            At Velocity Cycles, we take pride in delivering top-tier bike services to keep your ride in peak condition.
          </p>
        </div>

        {/* 2-Column Content Grid: Left Photo + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Cyclist Photo Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="group relative w-full h-full min-h-[360px] sm:min-h-[440px] rounded-3xl overflow-hidden bg-[#161619] border border-white/[0.08] shadow-2xl flex flex-col justify-end">
              {!showPlaceholdersOnly ? (
                <>
                  <img
                    src="/images/hq-service-faq-cyclist.png"
                    alt="Outdoor cyclist resting with bicycle in the mountains"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle bottom vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="relative z-10 p-6 space-y-1 text-white">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#ff6900]/90 text-white backdrop-blur shadow-md">
                      <Bike className="w-3 h-3" />
                      Certified Mechanics On-Site
                    </span>
                    <p className="text-sm font-bold text-white drop-shadow">
                      Precision Tune-Ups for All Terrains
                    </p>
                    <p className="text-xs text-neutral-300 drop-shadow">
                      From alpine singletracks to daily city commuting.
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center gap-3 bg-gradient-to-br from-[#1c1c1e] to-[#121214] border-2 border-dashed border-orange-500/30">
                  <Camera className="w-10 h-10 text-[#ff6900] animate-pulse" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-orange-400 font-bold px-2 py-0.5 bg-orange-500/10 rounded">
                      Image Slot
                    </span>
                    <p className="text-sm font-bold text-white">Outdoor Cyclist Portrait</p>
                    <p className="text-xs text-neutral-400">Replace with your service lifestyle photo</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: FAQ Accordion Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="rounded-3xl bg-[#141417] border border-white/[0.08] p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="space-y-3" role="region" aria-label="Frequently Asked Questions List">
                {PRE_SERVICES_FAQS.map((faq, index) => (
                  <details
                    key={faq.id}
                    name="service-faq-item"
                    className="group border border-white/[0.08] rounded-2xl bg-[#18181c] transition-all duration-200 open:border-[#ff6900]/40 open:bg-[#1a1a1f]"
                    open={index === 0}
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900] rounded-2xl">
                      <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white group-open:text-orange-400 transition-colors">
                        {faq.question}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 shrink-0 group-hover:text-white group-open:text-orange-400 group-open:rotate-180 transition-transform duration-200">
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </summary>

                    <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] text-neutral-400 leading-relaxed border-t border-white/[0.04]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>

              {/* Bottom Support Callout inside Card */}
              <div className="pt-2 flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#ff6900]" />
                  <span>Have more specific questions?</span>
                </span>
                <a
                  href="#contact-info"
                  className="font-semibold text-orange-400 hover:text-orange-300 transition-colors underline-offset-4 hover:underline"
                >
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

