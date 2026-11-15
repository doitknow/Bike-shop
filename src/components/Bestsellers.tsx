import React, { useState } from 'react';
import { BESTSELLER_BIKES } from '../data/bikes';
import { BikeImageSlot } from './BikeImageSlot';
import { ShoppingCart, Heart, Eye, Bike, Zap, Star } from 'lucide-react';
import { BikeProduct } from '../types';

interface BestsellersProps {
  onAddToCart: (product: BikeProduct) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
  onQuickView: (product: BikeProduct) => void;
  showPlaceholdersOnly: boolean;
}

const filterCategories = ['All', 'Touring', 'Electric', 'BMX', 'Kids', 'Road'];

export const Bestsellers: React.FC<BestsellersProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
  showPlaceholdersOnly,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allProductsVisible, setAllProductsVisible] = useState(false);

  const filteredBikes = BESTSELLER_BIKES.filter((bike) => {
    if (selectedCategory === 'All') return true;
    return bike.category === selectedCategory;
  });

  return (
    <section id="bestsellers" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="BMAX Bestsellers">
      {/* Background Giant Watermark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap text-[60px] sm:text-[90px] lg:text-[140px] font-black tracking-widest text-transparent uppercase opacity-20"
        style={{
          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.15)',
        }}
        aria-hidden="true"
      >
        MEET OUR BEST SELLERS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#ffa500]">
              Bestsellers
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Engineered precision, unmatched comfort, and cutting-edge performance. Choose your ride.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#ff6900] text-white shadow-[0_4px_14px_rgba(255,105,0,0.35)]'
                    : 'bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredBikes.map((bike) => {
            const isWishlisted = wishlistIds.includes(bike.id);

            return (
              <div
                key={bike.id}
                className="group relative flex flex-col justify-between rounded-tl-3xl rounded-tr-[100px] rounded-b-2xl bg-[#141416] border border-white/[0.08] hover:border-orange-500/40 p-4 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Bike Image Slot with Arch Top */}
                  <div className="relative overflow-hidden rounded-tl-2xl rounded-tr-[90px] rounded-b-xl bg-gradient-to-b from-[#1b1b1e] to-[#121214]">
                    <BikeImageSlot
                      placeName={bike.placeName}
                      bikeName={bike.name}
                      imageSrc={bike.image}
                      altText={`${bike.name} - ${bike.model}`}
                      aspectRatio="aspect-square"
                      forcePlaceholder={showPlaceholdersOnly}
                    />

                    {/* Sale Badge if present */}
                    {bike.discountBadge && (
                      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1">
                        <span className="px-3 py-1 rounded-full bg-[#ff6900] text-white text-[11px] font-extrabold uppercase shadow-lg">
                          sale!
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-bold text-center">
                          30%
                        </span>
                      </div>
                    )}

                    {/* Wishlist and Quickview Floating Buttons */}
                    <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => onToggleWishlist(bike.id)}
                        aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all ${
                          isWishlisted
                            ? 'bg-[#ff6900] border-[#ff6900] text-white shadow-[0_0_12px_rgba(255,105,0,0.8)]'
                            : 'bg-black/60 border-white/10 text-neutral-300 hover:text-white hover:bg-black/90'
                        }`}
                      >
                        <Heart className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} />
                      </button>

                      <button
                        type="button"
                        onClick={() => onQuickView(bike)}
                        aria-label={`Quick view ${bike.name}`}
                        className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300 hover:text-white hover:bg-black/90 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Hot Sale Banner if present */}
                  {bike.promoBanner && (
                    <div className="my-3 py-1.5 px-3 rounded-lg bg-gradient-to-r from-transparent via-[#ff6900]/25 to-transparent border-y border-[#ff6900]/40 text-center text-xs font-bold text-orange-300 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,105,0,0.25)]">
                      <Zap className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                      <span>{bike.promoBanner}</span>
                    </div>
                  )}

                  {/* Bike Title & Subtitle */}
                  <div className="px-2 pt-4 pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        onClick={() => onQuickView(bike)}
                        className="text-xl font-bold text-white group-hover:text-[#ff6900] transition-colors cursor-pointer"
                      >
                        {bike.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{bike.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">{bike.subtitle}</p>
                    <p className="text-[11px] font-mono text-neutral-500 mt-0.5">{bike.model}</p>
                  </div>
                </div>

                {/* Price & Add to Cart Action */}
                <div className="px-2 pt-4 pb-1 border-t border-white/5 flex items-center justify-between gap-3 mt-4">
                  <div className="flex items-baseline gap-2">
                    {bike.originalPrice && (
                      <span className="text-xs line-through text-neutral-500 font-medium">
                        ${bike.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-extrabold text-[#ff6900] tracking-tight">
                      ${bike.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onAddToCart(bike)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-800/90 hover:bg-[#ff6900] text-neutral-300 hover:text-white transition-all text-xs font-semibold shadow-sm hover:shadow-[0_4px_14px_rgba(255,105,0,0.35)]"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Products Button */}
        <div className="text-center pt-6">
          <button
            type="button"
            onClick={() => setAllProductsVisible(!allProductsVisible)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-orange-500/40 hover:border-orange-500 text-xs font-bold tracking-wider text-white uppercase transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,105,0,0.25)]"
          >
            <div className="w-5 h-5 rounded-full bg-[#ff6900] flex items-center justify-center text-white">
              <Bike className="w-3 h-3" />
            </div>
            <span>{allProductsVisible ? 'SHOWING ALL BIKES' : 'VIEW ALL PRODUCTS'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

