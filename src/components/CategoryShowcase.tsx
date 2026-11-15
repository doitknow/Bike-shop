import React from 'react';
import { CATEGORY_SHOWCASES } from '../data/bikes';
import { BikeImageSlot } from './BikeImageSlot';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory: (category: string) => void;
  showPlaceholdersOnly: boolean;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
  showPlaceholdersOnly,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-label="BMAX Featured Categories">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORY_SHOWCASES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.category)}
              className="group relative rounded-3xl bg-[#121214] border border-white/[0.08] hover:border-orange-500/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.7)] cursor-pointer flex flex-col justify-between"
            >
              {/* Category Bike Slot */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-[#141416]">
                <BikeImageSlot
                  placeName={cat.placeName}
                  bikeName={cat.title}
                  imageSrc={cat.image}
                  altText={cat.title}
                  aspectRatio="aspect-[16/11]"
                  badge={cat.count}
                  forcePlaceholder={showPlaceholdersOnly}
                  className="rounded-xl"
                />
              </div>

              {/* Bottom Info Banner matching the mockup */}
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#1c1c1f]/90 border border-white/5 p-4 sm:p-5 group-hover:border-orange-500/30 transition-all">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#ff6900] tracking-wide block">
                    {cat.count}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff6900] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-sm hidden sm:block">
                    {cat.description}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#ff6900] group-hover:bg-[#ff7e1a] text-white flex items-center justify-center transition-all shadow-[0_4px_16px_rgba(255,105,0,0.35)] group-hover:scale-105 shrink-0">
                  <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

