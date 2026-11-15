import React from 'react';
import { Home, ChevronRight, Award, ShieldCheck, Zap, HeartHandshake, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { QuickContact } from './QuickContact';
import { Footer } from './Footer';

interface AboutPageProps {
  onNavigateHome: () => void;
  onExploreShop: () => void;
  onBookService: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onExploreShop,
  onBookService,
}) => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Aircraft-Grade Metallurgy',
      description:
        'Hydroformed 6061-T6 aluminum and high-modulus unidirectional carbon composites engineered for optimal strength-to-weight ratio.',
    },
    {
      icon: Award,
      title: 'Biomechanical Ergonomics',
      description:
        'Every geometry is precision-tuned around pelvic angle, reach tolerance, and spinal alignment to eliminate fatigue on epic centuries.',
    },
    {
      icon: Zap,
      title: 'Next-Gen E-Mobility',
      description:
        'High-density lithium cells, intelligent torque sensors, and ultra-quiet hub motors that amplify human pedal power seamlessly.',
    },
    {
      icon: CheckCircle2,
      title: 'Lifetime Frame Guarantee',
      description:
        'We stand behind every weld, joint, and dropout with a comprehensive lifetime warranty and certified mechanic support.',
    },
  ];

  const milestones = [
    { year: '2018', title: 'The Garage Workshop', desc: 'Started as a boutique bespoke frame shop fabricating custom steel gravel and touring rigs.' },
    { year: '2021', title: 'Hydroformed Alloy Series', desc: 'Introduced the iconic Ghost Mountain series with internal cable routing and dual disc brakes.' },
    { year: '2024', title: 'Electric Assist Breakthrough', desc: 'Launched the Cyber Tracer 750W smart e-bike with regenerative braking and companion telemetry.' },
    { year: '2026', title: 'National Hub & Showroom', desc: 'Expanding nationwide service centers, custom test-ride lounges, and mobile mechanic support.' },
  ];

  const team = [
    {
      name: 'Marcus Vance',
      role: 'Founder & Chief Frame Engineer',
      bio: 'Former Olympic cross-country mechanic with 18 years of carbon fiber structural engineering experience.',
      image: '/images/hq-service-faq-cyclist.png',
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Biomechanics & Bike Fitting',
      bio: 'Kinesiologist specializing in custom saddle pressure mapping and aerodynamic rider posture calibration.',
      image: '/images/hq-service-collage-2.png',
    },
    {
      name: 'David Chen',
      role: 'E-Mobility & Powertrain Director',
      bio: 'Robotics engineer passionate about high-torque micro-mobility motors and smart regenerative braking.',
      image: '/images/hq-service-collage-4.png',
    },
  ];

  return (
    <div className="flex-1 flex flex-col w-full" aria-label="About BMAX Bicycle">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb navigation" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
          <button type="button" onClick={onNavigateHome} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5 text-neutral-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#ff6900] font-semibold">About Us</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Giant Watermark */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap text-[60px] sm:text-[90px] lg:text-[140px] font-black tracking-widest text-transparent uppercase opacity-15"
          style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)' }}
          aria-hidden="true"
        >
          OUR HERITAGE
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-900 border border-neutral-800 text-orange-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900] animate-pulse" />
            <span>Since 2018 • Engineered for Champions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            We Engineer the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] via-[#ff7e14] to-[#ffa500]">
              Two-Wheel Performance
            </span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At BMAX Bicycle and Velocity Cycles, we believe a bicycle is more than steel and rubber. It is an instrument of freedom, athletic expression, and clean human mobility. Every curve, weld, and bearing in our lineup is built to outlast the roughest gravel roads and steepest mountain switchbacks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onExploreShop}
              className="px-8 py-3.5 rounded-full bg-[#ff6900] hover:bg-[#ff7a18] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_8px_25px_rgba(255,105,0,0.35)] hover:shadow-[0_12px_32px_rgba(255,105,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Explore Our Bicycles</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onBookService}
              className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-[#ff6900]" />
              <span>Book Custom Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl p-6 sm:p-7 bg-[#141417] border border-white/[0.08] hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#ff6900] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Milestones Timeline */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="rounded-3xl bg-[#141417] border border-white/[0.08] p-8 sm:p-12 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our Journey of <span className="text-[#ff6900]">Innovation</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              From hand-drawn sketches to international championships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 border-t border-white/[0.08]">
            {milestones.map((m, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#ff6900]">
                  {m.year}
                </span>
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Master Craftsmen */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Meet the <span className="text-[#ff6900]">Master Builders</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Passionate cyclists, former competition mechanics, and certified biomechanists dedicated to your ride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden bg-[#141417] border border-white/[0.08] hover:border-orange-500/40 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#ff6900]">{member.role}</p>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Bar & Footer */}
      <QuickContact />
      <Footer />
    </div>
  );
};
