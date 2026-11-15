import { useState } from 'react';
import { Navbar, NavigationPage } from './components/Navbar';
import { Hero } from './components/Hero';
import { Revolution } from './components/Revolution';
import { PromoBanner } from './components/PromoBanner';
import { Bestsellers } from './components/Bestsellers';
import { CategoryShowcase } from './components/CategoryShowcase';
import { Newsletter } from './components/Newsletter';
import { QuickContact } from './components/QuickContact';
import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';
import { ShopPage } from './components/ShopPage';
import { FAQPage } from './components/FAQPage';
import { ContactPage } from './components/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ServiceBookingModal } from './components/ServiceBookingModal';
import { CartItem, BikeProduct, BookingRequest, ServicePackage } from './types';
import { BESTSELLER_BIKES } from './data/bikes';
import { CheckCircle2 } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
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

  const handleNavigate = (page: NavigationPage, hash?: string) => {
    setCurrentPage(page);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
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

      {/* Main Page Content Router */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'home' && (
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

            <PromoBanner onExploreClick={() => handleNavigate('shop')} />

            <Bestsellers
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlist}
              onQuickView={setQuickViewProduct}
              showPlaceholdersOnly={showPlaceholdersOnly}
            />

            <CategoryShowcase
              onSelectCategory={() => handleNavigate('shop')}
              showPlaceholdersOnly={showPlaceholdersOnly}
            />

            <Newsletter />
            <QuickContact />
            <Footer />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onExploreShop={() => handleNavigate('shop')}
            onBookService={() => setIsGlobalBookingOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigateToCatalog={() => handleNavigate('shop')}
            showPlaceholdersOnly={showPlaceholdersOnly}
            onBookingSuccess={handleBookingSuccess}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigateHome={() => handleNavigate('home')}
            onExploreProducts={() => handleNavigate('shop')}
            showPlaceholdersOnly={showPlaceholdersOnly}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            onQuickView={setQuickViewProduct}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlist}
            showPlaceholdersOnly={showPlaceholdersOnly}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigateHome={() => handleNavigate('home')}
            onBookService={() => setIsGlobalBookingOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
            onSubmitSuccess={(msg) => showToast(msg)}
          />
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
