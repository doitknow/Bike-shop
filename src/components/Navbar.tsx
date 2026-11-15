import React, { useState } from 'react';
import { Bike, Heart, ShoppingBag, Menu, X, SlidersHorizontal, Wrench, ArrowUpRight } from 'lucide-react';

export type NavigationPage = 'home' | 'about' | 'services' | 'blog' | 'shop' | 'faq' | 'contact';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  showPlaceholdersOnly: boolean;
  onTogglePlaceholders: () => void;
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage, hash?: string) => void;
  onBookServiceClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  showPlaceholdersOnly,
  onTogglePlaceholders,
  currentPage,
  onNavigate,
  onBookServiceClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { name: string; page: NavigationPage; href: string }[] = [
    { name: 'Home', page: 'home', href: '#top' },
    { name: 'About', page: 'about', href: '#top' },
    { name: 'Services', page: 'services', href: '#services' },
    { name: 'Blog', page: 'blog', href: '#top' },
    { name: 'Shop', page: 'shop', href: '#top' },
    { name: 'FAQ', page: 'faq', href: '#top' },
    { name: 'Contact', page: 'contact', href: '#top' },
  ];

  const handleLinkClick = (page: NavigationPage, href?: string) => {
    onNavigate(page, href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#070708]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo with BMAX BIKE Speed Logo */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900] rounded-lg group text-left"
          aria-label="BMAX Bicycle Home"
        >
          <img
            src="/images/logo.png"
            alt="BMAX BIKE"
            className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-[0_2px_10px_rgba(255,105,0,0.25)]"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isCurrent = currentPage === link.page;

            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleLinkClick(link.page, link.href)}
                aria-current={isCurrent ? 'page' : undefined}
                className={`relative text-xs tracking-wide font-medium transition-colors hover:text-white py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900] rounded ${
                  isCurrent ? 'text-white font-semibold' : 'text-neutral-400'
                }`}
              >
                {link.name}
                {isCurrent && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff6900] shadow-[0_0_8px_#ff6900]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Toggle Placeholder View Mode */}
          <button
            type="button"
            onClick={onTogglePlaceholders}
            title={showPlaceholdersOnly ? 'Switch to Bike Images' : 'Switch to Bike Placeholders'}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
              showPlaceholdersOnly
                ? 'bg-[#ff6900]/20 border-[#ff6900] text-orange-300'
                : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#ff6900]" />
            <span className="text-[11px]">{showPlaceholdersOnly ? 'Mode: Slots' : 'Mode: Preview'}</span>
          </button>

          {/* Book Service Button matching mockup */}
          <button
            type="button"
            onClick={onBookServiceClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white text-xs font-bold transition-all shadow-[0_4px_16px_rgba(255,105,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,105,0,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Book Service</span>
          </button>

          {/* Wishlist Button */}
          <button
            type="button"
            aria-label={`Wishlist with ${wishlistCount} items`}
            className="relative w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900]"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ff6900] text-[9px] font-bold text-white flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Shopping cart with ${cartCount} items`}
            className="relative w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900]"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ff6900] text-[9px] font-bold text-white flex items-center justify-center shadow-[0_0_8px_rgba(255,105,0,0.8)]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="lg:hidden w-10 h-10 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0c0c0e]/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleLinkClick(link.page, link.href)}
                className="text-left text-sm font-semibold text-neutral-300 hover:text-white py-2.5 border-b border-white/[0.04] flex items-center justify-between"
              >
                <span>{link.name}</span>
                {currentPage === link.page && (
                  <span className="text-[10px] text-[#ff6900] font-mono font-bold uppercase">
                    Active
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="pt-2 space-y-3">
            <button
              type="button"
              onClick={() => {
                onBookServiceClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-full bg-[#ff6900] text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Bike Service</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
