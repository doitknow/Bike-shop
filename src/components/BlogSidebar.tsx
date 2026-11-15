import React, { useState } from 'react';
import { Search, Sparkles, Tag, ExternalLink } from 'lucide-react';
import { BLOG_TAGS } from '../data/blogData';

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  onAdClick: () => void;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  searchQuery,
  onSearchChange,
  selectedTag,
  onSelectTag,
  onAdClick,
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch.trim());
  };

  return (
    <aside className="space-y-6 lg:space-y-8" aria-label="Blog Sidebar">
      {/* Widget 1: Search in Blog... */}
      <div className="rounded-2xl bg-[#141417] border border-white/[0.08] p-5 sm:p-6 shadow-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3.5 flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-[#ff6900]" />
          <span>Search in Blog...</span>
        </h4>

        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="search..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs tracking-wide transition-all shadow-[0_4px_12px_rgba(255,105,0,0.35)] shrink-0"
          >
            search
          </button>
        </form>

        {searchQuery && (
          <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
            <span>Filtering by: &quot;{searchQuery}&quot;</span>
            <button
              type="button"
              onClick={() => {
                setLocalSearch('');
                onSearchChange('');
              }}
              className="text-orange-400 hover:text-white font-semibold underline"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Widget 2: Tags Cloud */}
      <div className="rounded-2xl bg-[#141417] border border-white/[0.08] p-5 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#ff6900]" />
            <span>Tags Cloud</span>
          </h4>
          {selectedTag && (
            <button
              type="button"
              onClick={() => onSelectTag(null)}
              className="text-[11px] text-orange-400 hover:text-white underline font-semibold"
            >
              Reset
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {BLOG_TAGS.map((tag, idx) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={`${tag}-${idx}`}
                type="button"
                onClick={() => onSelectTag(isSelected ? null : tag)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all border ${
                  isSelected
                    ? 'bg-[#ff6900] text-white border-[#ff6900] font-bold shadow-md shadow-orange-500/20'
                    : 'bg-neutral-900/90 text-neutral-400 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Widget 3: ADS / Advertisement */}
      <div className="rounded-2xl bg-[#141417] border border-white/[0.08] p-5 sm:p-6 shadow-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3.5 flex items-center justify-between">
          <span>ADS</span>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            Sponsored
          </span>
        </h4>

        <div
          onClick={onAdClick}
          className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all shadow-lg"
        >
          <img
            src="/images/hq-blog_ad.png"
            alt="BMAX Bicycle Advertisement"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex flex-col justify-end p-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-bold w-fit border border-white/20 group-hover:border-orange-500">
              <span>Explore Latest Models</span>
              <ExternalLink className="w-3 h-3 text-[#ff6900]" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
