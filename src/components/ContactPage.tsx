import React, { useState } from 'react';
import { Home, ChevronRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { QuickContact } from './QuickContact';
import { Footer } from './Footer';

interface ContactPageProps {
  onNavigateHome: () => void;
  onSubmitSuccess: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome, onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitSuccess(`Thank you, ${name}! Your inquiry regarding "${subject}" has been received. Our team will contact you within 24 hours.`);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="flex-1 flex flex-col w-full" aria-label="Contact BMAX Bicycle">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb navigation" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
          <button type="button" onClick={onNavigateHome} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5 text-neutral-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#ff6900] font-semibold">Contact Us</span>
        </div>
      </nav>

      {/* Header with Giant Watermark */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap text-[60px] sm:text-[90px] lg:text-[140px] font-black tracking-widest text-transparent uppercase opacity-15"
          style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)' }}
          aria-hidden="true"
        >
          GET IN TOUCH
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-900 border border-neutral-800 text-orange-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Care & Showroom Inquiries</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our <span className="text-[#ff6900]">Bike Specialists</span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
            Whether you want to schedule a 48-hour test ride, inquire about a custom frame build, or need help choosing components, we are here for you.
          </p>
        </div>
      </section>

      {/* Main 2-Column Content: Form on Left + Showroom Details on Right */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-16 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#141417] border border-white/[0.08] p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="space-y-1.5 pb-4 border-b border-white/[0.06]">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-xs text-neutral-400">
                Fill in your details below and our service engineers will respond promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-neutral-300">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-neutral-300">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold text-neutral-300">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+251 9xx xxx xxx"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-topic" className="text-xs font-semibold text-neutral-300">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff6900] cursor-pointer"
                  >
                    <option value="General Question">General Question</option>
                    <option value="New Bicycle Purchase">New Bicycle Purchase</option>
                    <option value="Custom Frame Build Consultation">Custom Frame Build Consultation</option>
                    <option value="Test Ride Scheduling (48hr)">Test Ride Scheduling (48hr)</option>
                    <option value="Warranty & Service Claim">Warranty & Service Claim</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-msg" className="text-xs font-semibold text-neutral-300">
                  Message / Requirements *
                </label>
                <textarea
                  id="contact-msg"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the bike model you are interested in, your sizing preferences, or any specific mechanical requests..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_8px_25px_rgba(255,105,0,0.4)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Right: Showroom & Studio Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#141417] border border-white/[0.08] p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#ff6900]" />
                <span>Flagship Showroom & Studio</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6900] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Address</p>
                    <p className="text-neutral-400">#3342, Bole bulula / Addis Ababa, Bole Homes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6900] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Phone Support</p>
                    <p className="text-neutral-400 font-mono">+251 965 914 422 / +251 155 990 03</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6900] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Direct Email</p>
                    <p className="text-neutral-400 font-mono">help@bmaxbicycle.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6900] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Visiting & Test-Ride Hours</p>
                    <p className="text-neutral-400">Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p className="text-neutral-400">Saturday: 8:00 AM – 1:00 PM</p>
                    <p className="text-neutral-400">Sunday: Closed for team rides</p>
                  </div>
                </div>
              </div>

              {/* Showroom preview image */}
              <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 aspect-[16/9] relative">
                <img
                  src="/images/hq-service-faq-cyclist.png"
                  alt="BMAX Bicycle Showroom Lounge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[11px] font-semibold text-white drop-shadow">
                    Walk-in Test Rides Welcome Daily
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar & Footer */}
      <QuickContact />
      <Footer />
    </div>
  );
};
