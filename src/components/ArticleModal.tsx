import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, User, Clock, Share2, Tag, Bookmark } from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#141417] border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Article"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Article Header */}
        <div className="space-y-4 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono uppercase font-bold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/25"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h2>

          <div className="flex items-center gap-3 pt-1 border-b border-white/[0.08] pb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-neutral-800 shrink-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-none">{post.author.name}</p>
              <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 aspect-[16/9] w-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Full Article Content */}
        <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold border border-white/10"
          >
            Close Article
          </button>
          <span className="text-xs text-neutral-500 font-mono">
            Published in BMAX Cycling Digest
          </span>
        </div>
      </div>
    </div>
  );
};
