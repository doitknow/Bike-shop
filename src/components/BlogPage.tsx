import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { BlogCard } from './BlogCard';
import { BlogSidebar } from './BlogSidebar';
import { ArticleModal } from './ArticleModal';
import { QuickContact } from './QuickContact';
import { Footer } from './Footer';
import { Home, ChevronRight, SlidersHorizontal, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onNavigateHome: () => void;
  onExploreProducts: () => void;
  showPlaceholdersOnly: boolean;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigateHome,
  onExploreProducts,
  showPlaceholdersOnly,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  // Filter blog posts based on search query and selected tag
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const displayedPosts = filteredPosts.slice(
    (currentPageNum - 1) * postsPerPage,
    currentPageNum * postsPerPage
  );

  return (
    <div className="flex-1 flex flex-col w-full" aria-label="BMAX Blog Page">
      {/* Breadcrumb matching the mockup */}
      <nav
        aria-label="Breadcrumb navigation"
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2"
      >
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-neutral-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#ff6900] font-semibold">Blog</span>
        </div>
      </nav>

      {/* Main Two-Column Layout matching the mockup */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Blog Posts Feed */}
          <div className="lg:col-span-8 space-y-6">
            {displayedPosts.length > 0 ? (
              <div className="space-y-2">
                {displayedPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onReadMore={setActiveArticle}
                    showPlaceholdersOnly={showPlaceholdersOnly}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-[#141417] border border-white/[0.08] p-12 text-center space-y-3">
                <BookOpen className="w-10 h-10 text-orange-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">No articles found</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  No blog articles matched your search or tag filters. Try searching with a different term.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag(null);
                  }}
                  className="px-5 py-2 rounded-full bg-[#ff6900] text-white text-xs font-bold shadow-md hover:bg-[#ff7a18]"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Pagination matching the mockup: ( 1 ) ( 2 ) ( » ) */}
            <div className="pt-8 pb-4 flex items-center justify-center gap-2.5" role="navigation" aria-label="Blog Pagination">
              {[1, 2].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCurrentPageNum(num)}
                  aria-current={currentPageNum === num ? 'page' : undefined}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all border ${
                    currentPageNum === num
                      ? 'bg-[#ff6900] text-white border-[#ff6900] shadow-[0_0_12px_rgba(255,105,0,0.5)]'
                      : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {num}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPageNum((prev) => (prev < totalPages ? prev + 1 : 1))}
                aria-label="Next Page"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 flex items-center justify-center text-xs font-bold transition-all"
              >
                »
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar (Search + Tags Cloud + ADS) */}
          <div className="lg:col-span-4 sticky top-28">
            <BlogSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
              onAdClick={onExploreProducts}
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <QuickContact />

      {/* Footer */}
      <Footer />

      {/* Full Article Reading Modal */}
      <ArticleModal
        post={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
};
