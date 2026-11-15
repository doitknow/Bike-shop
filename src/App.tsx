import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BlogPage } from './components/BlogPage';
import { ServicesPage } from './components/ServicesPage';
import { Hero } from './components/Hero';
import { Revolution } from './components/Revolution';
import { PromoBanner } from './components/PromoBanner';
import { Bestsellers } from './components/Bestsellers';
import { CategoryShowcase } from './components/CategoryShowcase';
import { Newsletter } from './components/Newsletter';
import { QuickContact } from './components/QuickContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ServiceBookingModal } from './components/ServiceBookingModal';
import { CartItem, BikeProduct, BookingRequest, ServicePackage } from './types';
import { BESTSELLER_BIKES } from './data/bikes';
import { CheckCircle2, Wrench, Bike, SlidersHorizontal, BookOpen } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'blog' | 'services' | 'home'>('blog');
  const [cart, setCart] = useState<CartItem[]>([
    { product: BESTSELLER_BIKES[0], quantity: 1, selectedColor: '#3b4e39' },
  ]);
  const [wishlist, setWishlist] = useState<string[]>([BESTSELLER_BIKES[1].id]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<BikeProduct | null>(null);
  const [showPlaceholdersOnly, setShowPlaceholdersOnly] = useState(false);
  const [isGlobalBookingOpen, setIsGlobalBookingOpen] = useState(false);
  const [bookingPreselectedService, setBookingPreselectedService] = useState<ServicePackage | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3500);
  };

  const handleAddToCart = (product: BikeProduct, color?: string) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1, selectedColor: color || product.colors?.[0] }];
    });
    showToast(`Added "${product.name}" to your cart!`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart.');
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(exists ? 'Removed from wishlist' : 'Added to wishlist');
      return updated;
    });
  };

  const handleCheckout = () => {
    alert('Thank you for exploring BMAX Bicycle! Checkout simulation completed.');
    setCart([]);
    setIsCartOpen(false);
  };

  const handleNavigate = (page: 'home' | 'services' | 'blog', hash?: string) => {
    setCurrentPage(page);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookingSuccess = (booking: BookingRequest) => {
    showToast(
      `Appointment scheduled! "${booking.serviceTitle}" booked for ${booking.customerName}. Confirmation sent.`
    );
  };

  return (
    <div className="min-h-screen bg-[#060607] text-[#f5f5f7] flex flex-col font-['DM_Sans'] antialiased selection:bg-[#ff6900] selection:text-white">
      {/* Top Bar Switcher: Easily navigate across the 3 views */}
      <aside
        className="w-full bg-gradient-to-r from-[#111114] via-[#1a1410] to-[#111114] border-b border-orange-500/20 py-2 px-4 text-center text-xs text-neutral-300 flex items-center justify-between gap-3 flex-wrap"
        aria-label="Page navigation bar"
      >
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-neutral-400 hidden sm:inline">
            Active Page:
          </span>
          <div className="inline-flex p-0.5 rounded-full bg-neutral-900 border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => handleNavigate('blog')}
              className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1.5 ${
                currentPage === 'blog'
                  ? 'bg-[#ff6900] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blog Page (New)</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('services')}
              className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1.5 ${
                currentPage === 'services'
                  ? 'bg-[#ff6900] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Services Page</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1.5 ${
                currentPage === 'home'
                  ? 'bg-[#ff6900] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>Bike Catalog</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPlaceholdersOnly(!showPlaceholdersOnly)}
            className="px-2.5 py-1 rounded-full bg-orange-500/15 hover:bg-orange-500/25 text-orange-300 border border-orange-500/30 font-mono text-[11px] font-bold transition-all flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-3 h-3 text-[#ff6900]" />
            <span>{showPlaceholdersOnly ? 'Mode: Wireframe Slots' : 'Mode: Live Previews'}</span>
          </button>
        </div>
      </aside>

      {/* Main Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        showPlaceholdersOnly={showPlaceholdersOnly}
        onTogglePlaceholders={() => setShowPlaceholdersOnly(!showPlaceholdersOnly)}
        onBookServiceClick={() => {
          setBookingPreselectedService(null);
          setIsGlobalBookingOpen(true);
        }}
      />

      {/* Main Page Content */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'blog' ? (
          /* ======================================================== */
          /* 1. THE EXACT BLOG PAGE FROM THE USER'S MOCKUP IMAGE      */
          /* ======================================================== */
          <BlogPage
            onNavigateHome={() => handleNavigate('home')}
            onExploreProducts={() => handleNavigate('home', '#bestsellers')}
            showPlaceholdersOnly={showPlaceholdersOnly}
          />
        ) : currentPage === 'services' ? (
          /* ======================================================== */
          /* 2. THE SERVICES PAGE FROM THE PREVIOUS MOCKUP            */
          /* ======================================================== */
          <ServicesPage
            onNavigateToCatalog={() => handleNavigate('home', '#bestsellers')}
            showPlaceholdersOnly={showPlaceholdersOnly}
            onBookingSuccess={handleBookingSuccess}
          />
        ) : (
          /* ======================================================== */
          /* 3. BIKE CATALOG SHOWROOM HOME PAGE                       */
          /* ======================================================== */
          <>
            <Hero
              onAddToCart={handleAddToCart}
              onQuickView={setQuickViewProduct}
              showPlaceholdersOnly={showPlaceholdersOnly}
            />

            <Revolution
              onQuickView={setQuickViewProduct}
              showPlaceholdersOnly={showPlaceholdersOnly}
            />

            <PromoBanner onExploreClick={() => handleNavigate('home', '#bestsellers')} />

            <Bestsellers
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlist}
              onQuickView={setQuickViewProduct}
              showPlaceholdersOnly={showPlaceholdersOnly}
            />

            <CategoryShowcase
              onSelectCategory={() => handleNavigate('home', '#bestsellers')}
              showPlaceholdersOnly={showPlaceholdersOnly}
            />

            <Newsletter />

            <QuickContact />

            <Footer />
          </>
        )}
      </main>

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        showPlaceholdersOnly={showPlaceholdersOnly}
      />

      {/* Global Booking Modal */}
      <ServiceBookingModal
        isOpen={isGlobalBookingOpen}
        onClose={() => setIsGlobalBookingOpen(false)}
        initialService={bookingPreselectedService}
        onBookingSubmit={handleBookingSuccess}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-neutral-900 border border-orange-500/40 text-white text-xs font-semibold shadow-2xl shadow-black/80 animate-in slide-in-from-bottom-5 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-[#ff6900]" />
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
}

export default App;
