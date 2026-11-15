import React, { useState } from 'react';
import { PopularServices } from './PopularServices';
import { RideLearnConnect } from './RideLearnConnect';
import { PreServicesFAQ } from './PreServicesFAQ';
import { PromoBanner } from './PromoBanner';
import { Newsletter } from './Newsletter';
import { QuickContact } from './QuickContact';
import { Footer } from './Footer';
import { ServiceBookingModal } from './ServiceBookingModal';
import { ServicePackage, BookingRequest } from '../types';

interface ServicesPageProps {
  onNavigateToCatalog: () => void;
  showPlaceholdersOnly: boolean;
  onBookingSuccess: (booking: BookingRequest) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateToCatalog,
  showPlaceholdersOnly,
  onBookingSuccess,
}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);

  const handleSelectService = (service: ServicePackage) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleBookNow = () => {
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* 1. Our Popular Bike Services */}
      <PopularServices
        onSelectService={handleSelectService}
        onBookNowClick={handleBookNow}
      />

      {/* 2. Ride. Learn. Connect. */}
      <RideLearnConnect
        onLearnMoreClick={handleBookNow}
        showPlaceholdersOnly={showPlaceholdersOnly}
      />

      {/* 3. Pre Services Common Questions (FAQ + Outdoor Cyclist Photo) */}
      <PreServicesFAQ showPlaceholdersOnly={showPlaceholdersOnly} />

      {/* 4. Orange Promo Callout Banner */}
      <PromoBanner onExploreClick={onNavigateToCatalog} />

      {/* 5. Get your special Bike Newsletter */}
      <Newsletter />

      {/* 6. Quick Contact Card (3 Columns: Email, Phone, Location) */}
      <QuickContact />

      {/* 7. Multi-column Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        onBookingSubmit={onBookingSuccess}
      />
    </div>
  );
};

