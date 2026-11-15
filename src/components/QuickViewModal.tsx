import React, { useState } from 'react';
import { X, ShoppingCart, Heart, ShieldCheck, Zap, Bike, Star, Check } from 'lucide-react';
import { BikeProduct } from '../types';
import { BikeImageSlot } from './BikeImageSlot';

interface QuickViewModalProps {
  product: BikeProduct | null;
  onClose: () => void;
  onAddToCart: (product: BikeProduct, color?: string) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
  showPlaceholdersOnly: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  showPlaceholdersOnly,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#ff6900');
  const currentVariant = product.colorVariants?.find((v) => v.hex === selectedColor);
  const activeImage = currentVariant?.image || product.image;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-4xl rounded-3xl bg-[#131316] border border-white/10 text-white shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left: Bike Slot & Image */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 p-3">
              <BikeImageSlot
                placeName={product.placeName}
                bikeName={product.name}
                imageSrc={activeImage}
                altText={product.name}
                aspectRatio="aspect-square"
                badge={product.discountBadge || product.category}
                forcePlaceholder={showPlaceholdersOnly}
                className="rounded-xl"
              />
            </div>

            {/* Slot indicator info banner */}
            <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[11px] text-orange-300 font-mono flex items-center gap-2">
              <Bike className="w-4 h-4 text-[#ff6900] shrink-0" />
              <span>Location: {product.placeName}</span>
            </div>
          </div>

          {/* Right: Details & Specs */}
          <div className="md:col-span-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff6900] font-bold">
                  {product.category} Series
                </span>
                <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-400">{product.model}</p>
              </div>

              {/* Price & Rating */}
              <div className="flex items-center justify-between border-y border-white/5 py-3">
                <div className="flex items-baseline gap-2">
                  {product.originalPrice && (
                    <span className="text-sm line-through text-neutral-500 font-medium">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-extrabold text-[#ff6900] tracking-tight font-mono">
                    ${product.price}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-neutral-500">({product.reviewsCount})</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {product.description}
              </p>

              {/* Color selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-semibold text-neutral-300">Choose Frame Color:</span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color}`}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === color
                            ? 'border-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                            : 'border-transparent opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: color }}
                      >
                        {selectedColor === color && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2">
                <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
                  <span className="text-neutral-400 font-mono">Frame</span>
                  <p className="font-semibold text-white truncate">{product.specs.frame}</p>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
                  <span className="text-neutral-400 font-mono">Gears</span>
                  <p className="font-semibold text-white truncate">{product.specs.gears}</p>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
                  <span className="text-neutral-400 font-mono">Brakes</span>
                  <p className="font-semibold text-white truncate">{product.specs.brakes}</p>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
                  <span className="text-neutral-400 font-mono">Weight</span>
                  <p className="font-semibold text-[#ff6900] truncate">{product.specs.weight}</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product, selectedColor);
                  onClose();
                }}
                className="flex-1 py-3.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(255,105,0,0.4)] flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart (${product.price})</span>
              </button>

              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                aria-label="Wishlist toggle"
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  isWishlisted
                    ? 'bg-[#ff6900] border-[#ff6900] text-white'
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

