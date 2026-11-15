import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="Newsletter Subscription">
      {/* Background Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap text-[55px] sm:text-[85px] lg:text-[130px] font-black tracking-widest text-transparent uppercase opacity-20"
        style={{
          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)',
        }}
        aria-hidden="true"
      >
        MEET OUR SPECIAL BIKES
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-orange-400">
            <Sparkles className="w-3.5 h-3.5" />
            Special Member Club
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#ffa500]">
              special Bike
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
            Subscribe to our newsletter to get new Bike Offers, exclusive drops, and member-only riding
            events.
          </p>
        </div>

        {/* Pill Form */}
        <div className="max-w-xl mx-auto pt-2">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-full bg-[#18181b] border border-white/10 focus-within:border-[#ff6900] shadow-2xl transition-all">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your email..."
                required
                className="w-full px-6 py-3.5 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
                aria-label="Email address for bike offers"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(255,105,0,0.4)] flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>JOIN NOW</span>
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Thank you! Check your inbox for your 15% discount code on your next ride.</span>
            </div>
          )}

          {error && <p className="text-xs text-rose-400 text-left px-4 mt-2">{error}</p>}
        </div>
      </div>
    </section>
  );
};

