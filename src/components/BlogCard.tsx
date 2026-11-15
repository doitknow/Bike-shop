import React from 'react';
import { BlogPost } from '../types';
import { ChevronRight, Calendar, User, Clock } from 'lucide-react';
import { BikeImageSlot } from './BikeImageSlot';

interface BlogCardProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
  showPlaceholdersOnly: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  onReadMore,
  showPlaceholdersOnly,
}) => {
  return (
    <article className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start py-6 border-b border-white/[0.08] last:border-b-0 transition-colors">
      {/* Article Thumbnail Image */}
      <div className="w-full sm:w-48 lg:w-56 shrink-0 rounded-2xl overflow-hidden bg-[#161619] border border-white/[0.08] group-hover:border-orange-500/30 transition-all shadow-md">
        {!showPlaceholdersOnly ? (
          <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <BikeImageSlot
            placeName={post.placeName}
            bikeName={post.title}
            imageSrc={post.image}
            altText={post.title}
            aspectRatio="aspect-square sm:aspect-[4/3]"
            forcePlaceholder={true}
          />
        )}
      </div>

      {/* Article Content */}
      <div className="flex-1 space-y-3.5">
        {/* Title */}
        <h3
          onClick={() => onReadMore(post)}
          className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-orange-400 transition-colors cursor-pointer"
        >
          {post.title}
        </h3>

        {/* Author Metadata Row matching mockup */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-neutral-800 shrink-0 shadow-sm">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
              {post.author.name}
            </span>
            <span className="text-[11px] text-neutral-400 font-mono">
              {post.date}
            </span>
          </div>
        </div>

        {/* Excerpt Paragraph */}
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
          {post.excerpt}
        </p>

        {/* Read More Button matching mockup */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => onReadMore(post)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white text-xs font-bold transition-all shadow-[0_4px_14px_rgba(255,105,0,0.35)] hover:shadow-[0_6px_20px_rgba(255,105,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Read More</span>
          </button>
        </div>
      </div>
    </article>
  );
};
