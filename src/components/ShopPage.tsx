import React, { useState } from 'react';
import { BESTSELLER_BIKES, HERO_BIKE, REVOLUTION_BIKE } from '../data/bikes';
import { BikeProduct } from '../types';
import { BikeImageSlot } from './BikeImageSlot';
import { PromoBanner } from './PromoBanner';
import { QuickContact } from './QuickContact';
import { Footer } from './Footer';
import { Home, ChevronRight, Search, SlidersHorizontal, ShoppingBag, Eye, Heart, Star, Sparkles, Filter } from 'lucide-react';

interface ShopPageProps {
  onAddToCart: (product: BikeProduct) => void;
  onQuickView: (product: BikeProduct) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
  showPlaceholdersOnly: boolean;
  onNavigateHome: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlistIds,
  showPlaceholdersOnly,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Combine all catalog bikes
  const allBikes: BikeProduct[] = [HERO_BIKE, ...BESTSELLER_BIKES, REVOLUTION_BIKE];

  const categories = ['All', 'Mountain', 'Touring', 'Electric', 'BMX', 'Kids', 'Road'];

  // Filter and sort
  const filteredBikes = allBikes
    .filter((bike) => {
      const matchCat = selectedCategory === 'All' || bike.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  return (
    <div className="flex-1 flex flex-col w-full" aria-label="BMAX Shop">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb navigation" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
          <button type="button" onClick={onNavigateHome} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5 text-neutral-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#ff6900] font-semibold">Shop & Catalogue</span>
        </div>
      </nav>

      {/* Header Banner */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff6900]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-900 border border-neutral-800 text-orange-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Showroom Inventory</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Discover Your Next <span className="text-[#ff6900]">Machine</span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
            Engineered precision, aerodynamic frames, and responsive drivetrains. Every bicycle includes professional unboxing and lifetime frame warranty.
          </p>
        </div>
      </section>

      {/* Controls & Filter Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-8">
        <div className="rounded-2xl bg-[#141417] border border-white/[0.08] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, model..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#ff6900] text-white shadow-md shadow-orange-500/20'
                    : 'bg-neutral-900 text-neutral-400 border border-white/5 hover:border-white/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-neutral-400 font-medium hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff6900] cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-16 flex-1">
        {filteredBikes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredBikes.map((bike) => {
              const isWishlisted = wishlistIds.includes(bike.id);

              return (
                <div
                  key={bike.id}
                  className="group relative flex flex-col justify-between rounded-3xl bg-[#141416] border border-white/[0.08] hover:border-orange-500/40 p-4 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                >
                  <div>
                    {/* Image Arch Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1b1b1e] to-[#121214] p-3">
                      <BikeImageSlot
                        placeName={bike.placeName}
                        bikeName={bike.name}
                        imageSrc={bike.image}
                        altText={`${bike.name} - ${bike.model}`}
                        aspectRatio="aspect-square"
                        forcePlaceholder={showPlaceholdersOnly}
                      />

                      {/* Sale Badge */}
                      {bike.discountBadge && (
                        <div className="absolute top-3 left-3 z-20">
                          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-[#ff6900] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                            {bike.discountBadge}
                          </span>
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        type="button"
                        onClick={() => onToggleWishlist(bike.id)}
                        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur border border-white/10 text-white flex items-center justify-center transition-all"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            isWishlisted ? 'text-red-500 fill-red-500' : 'text-white/80 hover:text-white'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span className="font-mono uppercase text-orange-400 text-[10px] font-bold">
                          {bike.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{bike.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-tight">
                        {bike.name}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-1">{bike.model}</p>

                      <div className="flex items-baseline gap-2 pt-1">
                        <span className="text-lg font-bold text-white font-mono">
                          ${bike.price}
                        </span>
                        {bike.originalPrice && (
                          <span className="text-xs line-through text-neutral-500 font-mono">
                            ${bike.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onAddToCart(bike)}
                      className="flex-1 py-2.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(255,105,0,0.3)]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onQuickView(bike)}
                      aria-label="Quick View Specs"
                      className="w-9 h-9 rounded-full bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl bg-[#141417] border border-white/[0.08] p-16 text-center space-y-3">
            <h3 className="text-xl font-bold text-white">No bicycles found</h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto">
              We couldn&apos;t find any bicycles matching your search. Try resetting the category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#ff6900] text-white text-xs font-bold shadow-md hover:bg-[#ff7a18]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Promo Banner */}
      <PromoBanner onExploreClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })} />

      {/* Quick Contact & Footer */}
      <QuickContact />
      <Footer />
    </div>
  );
};
