import React, { useState } from 'react';
import { POPULAR_SERVICES } from '../data/servicesData';
import { ServicePackage, BookingRequest } from '../types';
import { X, Calendar, Bike, Check, ShieldCheck, Settings, Send } from 'lucide-react';

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServicePackage | null;
  onBookingSubmit: (booking: BookingRequest) => void;
}

export const ServiceBookingModal: React.FC<ServiceBookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onBookingSubmit,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || POPULAR_SERVICES[1].id
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  // Update selected service if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const currentService =
    POPULAR_SERVICES.find((s) => s.id === selectedServiceId) || POPULAR_SERVICES[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookingSubmit({
      serviceId: currentService.id,
      serviceTitle: currentService.title,
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      bikeModel: bikeModel || 'General Bicycle',
      preferredDate: preferredDate || 'Earliest Available',
      notes,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-[#141417] border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Booking Window"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pb-6 border-b border-white/[0.08]">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Service Appointment</span>
          </span>
          <h2 id="booking-title" className="text-2xl font-bold text-white tracking-tight">
            Book Your Bike Service
          </h2>
          <p className="text-xs text-neutral-400">
            Choose your service package and schedule your visit with our certified technicians.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 pt-5">
          {/* Service Package Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-300">
              Select Service Package
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {POPULAR_SERVICES.map((pkg) => {
                const isSelected = pkg.id === selectedServiceId;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedServiceId(pkg.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#ff6900] bg-orange-500/10 shadow-[0_0_15px_rgba(255,105,0,0.2)]'
                        : 'border-white/10 bg-[#18181c] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff6900]/20 flex items-center justify-center text-[#ff6900]">
                        {pkg.iconType === 'helmet' && <ShieldCheck className="w-3.5 h-3.5" />}
                        {pkg.iconType === 'bike' && <Bike className="w-3.5 h-3.5" />}
                        {pkg.iconType === 'gear' && <Settings className="w-3.5 h-3.5" />}
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#ff6900]" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">{pkg.title}</p>
                      <p className="text-[11px] text-orange-400 font-mono mt-0.5">
                        ${pkg.price}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="booking-name" className="text-xs font-semibold text-neutral-300">
                Full Name *
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="booking-phone" className="text-xs font-semibold text-neutral-300">
                Phone Number *
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+251 9xx xxx xxx"
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="booking-email" className="text-xs font-semibold text-neutral-300">
                Email Address
              </label>
              <input
                id="booking-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="booking-date" className="text-xs font-semibold text-neutral-300">
                Preferred Date
              </label>
              <input
                id="booking-date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff6900] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="booking-bike" className="text-xs font-semibold text-neutral-300">
              Bike Brand & Model
            </label>
            <input
              id="booking-bike"
              type="text"
              value={bikeModel}
              onChange={(e) => setBikeModel(e.target.value)}
              placeholder="e.g. BMAX Ghost Mountain Pro / Trek FX 3"
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="booking-notes" className="text-xs font-semibold text-neutral-300">
              Special Notes / Service Requests
            </label>
            <textarea
              id="booking-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Squeaking rear brake, chain slipping on high gear..."
              className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_8px_25px_rgba(255,105,0,0.4)] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Appointment Booking (${currentService.price})</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

