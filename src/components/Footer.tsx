import React from 'react';
import { NEWS_ARTICLES } from '../data/bikes';
import {
  MapPin,
  Phone,
  Mail,
  PhoneCall,
  Globe,
  Calendar,
  Eye,
  ChevronRight,
  Clock,
  Bike,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="services" className="bg-[#09090b] border-t border-white/[0.08] pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Column 1: Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#ff6900] pb-2 inline-block">
              office
            </h3>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff6900] shrink-0 mt-0.5" />
                <span className="text-neutral-300">Addis Ababa, Bole Homes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff6900] shrink-0" />
                <a href="tel:+251965914422" className="text-neutral-300 hover:text-white transition-colors">
                  +251965914422
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff6900] shrink-0" />
                <a href="mailto:bmaxbike@gmail.com" className="text-neutral-300 hover:text-white transition-colors">
                  bmaxbike@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#ff6900] shrink-0" />
                <a href="tel:+25115599003" className="text-neutral-300 hover:text-white transition-colors">
                  +25115599003
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#ff6900] shrink-0" />
                <a
                  href="https://www.linkedin.com/in/bmax"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  www.linkedin.com/in/bmax
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: News (3 cols) */}
          <div id="news" className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#ff6900] pb-2 inline-block">
              News
            </h3>

            <div className="space-y-4 pt-2">
              {NEWS_ARTICLES.map((article) => (
                <article key={article.id} className="flex gap-3 group cursor-pointer">
                  <div className="w-16 h-14 rounded-xl overflow-hidden bg-neutral-800 shrink-0 border border-white/5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-white group-hover:text-[#ff6900] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-3 text-[10px] text-neutral-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#ff6900]" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {article.views}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Column 3: Shortcuts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#ff6900] pb-2 inline-block">
              Shortcuts
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
              <div className="space-y-2">
                <a href="#top" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>Home</span>
                </a>
                <a href="#bestsellers" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>City Store</span>
                </a>
                <a href="#revolution" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>Clients</span>
                </a>
                <a href="#contact-info" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>Supports</span>
                </a>
                <a href="#contact-info" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>Maps</span>
                </a>
                <a href="#revolution" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>Teams</span>
                </a>
              </div>

              <div className="space-y-2">
                <a href="#contact-info" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>Consultation</span>
                </a>
                <a href="#top" className="flex items-center gap-1 text-neutral-300 hover:text-[#ff6900] transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#ff6900]" />
                  <span>Privacy</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#ff6900] pb-2 inline-block">
              Working Hours
            </h3>

            <p className="text-xs text-neutral-400 pt-2 leading-relaxed">
              Our support available to help you 24 hours a day, seven days a week.
            </p>

            <div className="space-y-2.5 font-mono text-[11px] pt-1">
              <div className="flex justify-between items-center text-neutral-300 border-b border-white/[0.04] pb-1.5">
                <span>Monday to Friday</span>
                <span className="text-[#ff6900] font-bold">8AM - 4PM</span>
              </div>
              <div className="flex justify-between items-center text-neutral-300 border-b border-white/[0.04] pb-1.5">
                <span>Saturday</span>
                <span className="text-[#ff6900] font-bold">8AM - 1PM</span>
              </div>
              <div className="flex justify-between items-center text-neutral-400">
                <span>Sunday</span>
                <span className="text-neutral-500 font-bold uppercase">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div className="flex items-center gap-2">
            <Bike className="w-4 h-4 text-[#ff6900]" />
            <p>© 2026 BMAX Bicycle Inc. All rights reserved. Ride Further, Ride Better.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#top" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#top" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

