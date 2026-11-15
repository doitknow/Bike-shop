import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const QuickContact: React.FC = () => {
  return (
    <section id="contact-info" className="py-8 px-4 sm:px-6 lg:px-8" aria-label="Quick Contact Information">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-[#141416] border border-white/[0.08] p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {/* Presale Questions */}
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6900] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#ff6900] uppercase tracking-wider">
                  Presale Questions
                </p>
                <a
                  href="mailto:help@bmaxbicycle.com"
                  className="text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors block mt-0.5"
                >
                  help@bmaxbicycle.com
                </a>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6900] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#ff6900] uppercase tracking-wider">
                  Call us
                </p>
                <a
                  href="tel:+251900000000"
                  className="text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors block mt-0.5 font-mono"
                >
                  +2519xxxxxxxx
                </a>
              </div>
            </div>

            {/* Our Location */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6900] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#ff6900] uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5 font-mono">
                  #334/2,Bala hulula
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

