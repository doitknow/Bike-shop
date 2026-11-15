import React, { useState } from 'react';
import { Home, ChevronRight, ChevronDown, Search, HelpCircle, Phone, Mail, Wrench, Sparkles } from 'lucide-react';
import { QuickContact } from './QuickContact';
import { Footer } from './Footer';

interface FAQPageProps {
  onNavigateHome: () => void;
  onBookService: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigateHome, onBookService }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Bicycle Fit & Sizing',
    'Shipping & Assembly',
    'Warranty & Service',
    'E-Bike Battery & Motors',
  ];

  const allFaqs = [
    {
      id: 'f-1',
      category: 'Bicycle Fit & Sizing',
      question: 'What type of bike should I choose for my riding style?',
      answer:
        'Your ideal bicycle depends on your riding style and terrain. Road bikes excel on smooth pavement and speed; Mountain bikes provide suspension and traction for rough dirt trails; Hybrid and Touring bikes offer upright comfort with rack mounts for everyday commuting and long-distance touring; and E-Bikes provide intelligent motor assist to tackle hills and headwinds effortlessly.',
    },
    {
      id: 'f-2',
      category: 'Bicycle Fit & Sizing',
      question: 'How do I choose the right frame size for my height?',
      answer:
        'Frame sizing is determined by your total height and your inseam length. For road and touring bikes, standover clearance should be at least 1–2 inches (2.5–5 cm). For mountain bikes, allow 2–4 inches (5–10 cm) of clearance for safe dismounts on uneven terrain. We also provide a free ergonomic fit session at our showroom with laser saddle alignment.',
    },
    {
      id: 'f-3',
      category: 'Shipping & Assembly',
      question: 'How are bicycles shipped, and how much assembly is required?',
      answer:
        'All BMAX bicycles are 95% pre-assembled and safety-tuned by factory technicians prior to dispatch. When your bike arrives in our reinforced heavy-duty bike box, you only need to attach the front wheel, insert the seatpost, install the pedals, and straighten the handlebars. High-precision hex tools and a torque key are included in the accessory pack.',
    },
    {
      id: 'f-4',
      category: 'Shipping & Assembly',
      question: 'What is your shipping timeframe and cost?',
      answer:
        'We offer Free Insured Nationwide Shipping on all full bicycle orders over $500. Standard courier delivery takes between 2 to 5 business days depending on your location. Every shipment is fully insured with real-time tracking.',
    },
    {
      id: 'f-5',
      category: 'Warranty & Service',
      question: 'What is covered under the BMAX Lifetime Frame Warranty?',
      answer:
        'Our Lifetime Frame Warranty covers all structural alloy and carbon frames against manufacturing defects, weld failures, and material fatigue for the original purchaser. Original components (drivetrain, forks, wheels) carry a 2-year manufacturer warranty. Normal wear and tear on brake pads, tires, and chains is excluded.',
    },
    {
      id: 'f-6',
      category: 'Warranty & Service',
      question: 'How often should I service my bicycle?',
      answer:
        'We recommend a comprehensive mechanical tune-up every 6 months or every 800–1,200 kilometers (500–750 miles). Drivetrain cleaning and chain lubrication should be performed every 200–300 km or immediately after heavy rain or muddy trail rides to prevent premature cassette and chainring wear.',
    },
    {
      id: 'f-7',
      category: 'Warranty & Service',
      question: 'Can I test ride a bike before purchasing?',
      answer:
        'Yes! We offer 48-hour risk-free test rides on all catalog and custom demo models. Our certified fit technicians adjust saddle height, reach, and tire pressure before your ride so you experience the bike under realistic riding conditions before making your final decision.',
    },
    {
      id: 'f-8',
      category: 'E-Bike Battery & Motors',
      question: 'How long does the battery last on the Cyber Tracer E-Bike?',
      answer:
        'Our 750W high-torque hub motor paired with the 48V Samsung cell lithium battery delivers 55 to 70 miles (90 to 110 km) of range per charge on Eco assist mode, and 30 to 45 miles on full Sport power mode. The battery charges from 0 to 80% in just 2.5 hours using the included fast smart charger.',
    },
    {
      id: 'f-9',
      category: 'E-Bike Battery & Motors',
      question: 'Is the electrical system waterproof for wet winter riding?',
      answer:
        'Yes, all BMAX electric bicycle wiring, LCD displays, motor housings, and battery compartments are rated IP65 water-resistant. You can comfortably ride through heavy rain, puddles, and snow without electrical damage.',
    },
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchSearch =
      !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="flex-1 flex flex-col w-full" aria-label="BMAX FAQ Knowledge Base">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb navigation" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
          <button type="button" onClick={onNavigateHome} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5 text-neutral-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#ff6900] font-semibold">FAQ & Knowledge Base</span>
        </div>
      </nav>

      {/* Header Section with Giant Watermark */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap text-[50px] sm:text-[80px] lg:text-[130px] font-black tracking-widest text-transparent uppercase opacity-15"
          style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)' }}
          aria-hidden="true"
        >
          FREQUENTLY ASKED
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-900 border border-neutral-800 text-orange-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledge Base & Technical Guides</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-[#ff6900]">We&apos;ve Got Answers.</span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
            Everything you need to know about bicycle sizing, warranty protection, delivery assembly, and precision tune-ups.
          </p>

          {/* Search bar inside header */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. warranty, shipping, battery, sizing)..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#141417] border border-white/10 text-white text-xs sm:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#ff6900] shadow-xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#ff6900] text-white shadow-md shadow-orange-500/25'
                  : 'bg-[#141417] text-neutral-400 border border-white/5 hover:border-white/15 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full pb-16 flex-1">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3" role="region" aria-label="FAQ List">
            {filteredFaqs.map((faq, index) => (
              <details
                key={faq.id}
                name="faq-page-item"
                className="group border border-white/[0.08] rounded-2xl bg-[#141417] transition-all duration-200 open:border-[#ff6900]/40 open:bg-[#18181d]"
                open={index === 0}
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6900] rounded-2xl">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-orange-400/90 font-bold tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 shrink-0 group-hover:text-white group-open:text-orange-400 group-open:rotate-180 transition-transform duration-200">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>

                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/[0.04]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-[#141417] border border-white/[0.08] p-12 text-center space-y-3">
            <h3 className="text-lg font-bold text-white">No matching answers found</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              We couldn&apos;t find an answer matching &quot;{searchQuery}&quot;. Feel free to contact our support team directly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 rounded-full bg-[#ff6900] text-white text-xs font-bold shadow-md hover:bg-[#ff7a18]"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Still Have Questions Box */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#18181c] via-[#1f1915] to-[#18181c] border border-orange-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Still have specific questions about your ride?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Our factory mechanics and fitting biomechanists are available for 1-on-1 consultations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onBookService}
              className="px-6 py-3 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white text-xs font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact & Footer */}
      <QuickContact />
      <Footer />
    </div>
  );
};
