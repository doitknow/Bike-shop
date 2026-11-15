import { BikeProduct, NewsArticle, BikeColorVariant } from '../types';

export const HERO_COLOR_VARIANTS: BikeColorVariant[] = [
  { name: 'Ghost Red', hex: '#ef4444', image: '/images/hero-red.png' },
  { name: 'Neon Green', hex: '#22c55e', image: '/images/hero-green.png' },
  { name: 'Cobalt Blue', hex: '#3b82f6', image: '/images/hero-blue.png' },
  { name: 'Glossy Black', hex: '#18181b', image: '/images/hero-black.png' },
];

export const HERO_BIKE: BikeProduct = {
  id: 'hero-bike',
  name: 'BMAX Mountain Pro',
  model: 'Ghost Edition Mountain Pro',
  placeName: 'Hero Bike: Ghost All-Terrain Edition',
  subtitle: 'Regular & Electric Assist Cross Country Mountain Bike',
  price: 1500,
  originalPrice: 1850,
  category: 'Mountain',
  rating: 4.9,
  reviewsCount: 142,
  image: '/images/hero-red.png',
  description:
    'A bicycle, also called a pedal cycle, bike or cycle, is human-powered or motor-powered assisted. Engineered with lightweight alloy frame, dual hydraulic disc brakes, and high-traction all-terrain tires.',
  specs: {
    frame: 'Hydroformed Ghost All-Terrain Alloy',
    gears: 'Shimano 21-Speed Quick-Shift',
    brakes: 'Front & Rear Mechanical Disc Brakes',
    weight: '13.0 kg (28.6 lbs)',
    wheelSize: '26" Double-wall Orange Rim Wheels',
  },
  colors: ['#ef4444', '#22c55e', '#3b82f6', '#18181b'],
  colorVariants: HERO_COLOR_VARIANTS,
};

export const REVOLUTION_BIKE: BikeProduct = {
  id: 'revolution-bike',
  name: 'BMAX Revolution XR-1',
  model: 'XR-1 Trail Master Special Edition',
  placeName: 'Revolution Bike Slot: BMAX XR-1 Trail Master',
  subtitle: "It's Not Just a Bike, It's a Revolution",
  price: 1650,
  originalPrice: 1950,
  category: 'Mountain',
  rating: 5.0,
  reviewsCount: 88,
  image: '/images/extracted/revolution-bike.png',
  description:
    'Often referred to as a bike, cycle, or pedal cycle, a bicycle is a single-track, pedal-driven vehicle. It features a frame equipped with two wheels aligned one behind the other. Whether it relies entirely on human effort or utilizes motor assistance, the individual operating the vehicle is known as a cyclist or bicyclist.',
  specs: {
    frame: 'Aircraft Grade Carbon Composite',
    gears: 'SRAM Eagle GX 12-Speed',
    brakes: 'Magura MT5 Quad-Piston Disc',
    weight: '11.4 kg (25.1 lbs)',
    wheelSize: '27.5" Tubeless Ready',
  },
  colors: ['#1c1c1e', '#e5e5ea', '#ff6900'],
};

export const BESTSELLER_BIKES: BikeProduct[] = [
  {
    id: 'bike-1',
    name: 'Touring bike',
    model: 'Genesis Tour de Fer 20',
    placeName: 'Bike Slot 1: Genesis Touring Bike (Olive Green)',
    subtitle: 'Premium offer',
    price: 840,
    originalPrice: 1200,
    discountBadge: 'sale! 30%',
    promoBanner: 'Hot sale 30% OFF ⚡',
    category: 'Touring',
    rating: 4.9,
    reviewsCount: 96,
    image: '/images/types/touring-bike.png',
    description:
      'Long-distance expedition touring bike with integrated front and rear pannier racks, full-coverage fenders, and dynamo lighting system.',
    specs: {
      frame: 'Reynolds 725 Heat-Treated Chromoly',
      gears: 'Shimano Sora 3x9 Triple Chainset',
      brakes: 'Promax Mechanical Disc Brakes',
      weight: '14.2 kg (31.3 lbs)',
      wheelSize: '700c Schwalbe Marathon',
    },
    colors: ['#3b4e39', '#222222', '#c29b38'],
  },
  {
    id: 'bike-2',
    name: 'E-Bike',
    model: 'BMAX Cyber Tracer 750W',
    placeName: 'Bike Slot 2: Cyber E-Bike (Electric Blue)',
    subtitle: 'Exclusive',
    price: 1380,
    category: 'Electric',
    rating: 5.0,
    reviewsCount: 114,
    image: '/images/types/e-bike.png',
    description:
      'Next-generation electric commuter bike featuring 750W high-torque hub motor, 65-mile lithium battery, and regenerative braking system.',
    specs: {
      frame: 'Aero TIG Welded Aluminum',
      gears: 'Shimano Nexus 7-Speed Internal',
      brakes: 'Hydraulic E-Cutoff Disc Brakes',
      weight: '19.5 kg (43 lbs)',
      wheelSize: '26" Fat Grip Street Tires',
    },
    colors: ['#007aff', '#1c1c1e', '#silver'],
  },
  {
    id: 'bike-3',
    name: 'BMX Bike',
    model: 'GTS Street Cross Pro 20',
    placeName: 'Bike Slot 3: BMX Bike (GTS Street Cross)',
    subtitle: 'Affordable',
    price: 1100,
    category: 'BMX',
    rating: 4.8,
    reviewsCount: 67,
    image: '/images/types/bmx-bike.png',
    description:
      'Street and park freestyle BMX with 4130 chromoly frame, 3-piece tubular crank, 25/9 micro-gearing, and front & rear stunt pegs.',
    specs: {
      frame: 'Full 4130 Chromoly Stunt Frame',
      gears: '25/9 Micro Gearing Single Speed',
      brakes: 'Tektro U-Brake with Gyro Detangler',
      weight: '10.5 kg (23.1 lbs)',
      wheelSize: '20" Street Tread 2.4"',
    },
    colors: ['#ff9500', '#1c1c1e', '#e5e5ea'],
  },
  {
    id: 'bike-4',
    name: 'Kids Bike',
    model: 'Spider Junior Hero 16',
    placeName: 'Bike Slot 4: Kids Bike (Spider Junior Edition)',
    subtitle: 'Comfortable',
    price: 670,
    category: 'Kids',
    rating: 4.9,
    reviewsCount: 82,
    image: '/images/types/kids-bike.png',
    description:
      'Fun, lightweight, and safe kids bicycle equipped with removable training wheels, chainguard, cushioned backrest, and easy-reach hand brakes.',
    specs: {
      frame: 'Lightweight Kid-Fit Steel',
      gears: 'Single Speed Easy-Pedal Ratio',
      brakes: 'Coaster Brake + Front Caliper',
      weight: '8.2 kg (18 lbs)',
      wheelSize: '16" Anti-puncture Kid Tires',
    },
    colors: ['#ff3b30', '#007aff', '#ffcc00'],
  },
  {
    id: 'bike-5',
    name: 'Special Roar Bike',
    model: 'Giant Propel Carbon Aero Disc',
    placeName: 'Bike Slot 5: Special Roar Bike (Time Trial & Road)',
    subtitle: 'Enjoyable',
    price: 989,
    originalPrice: 1250,
    category: 'Road',
    rating: 5.0,
    reviewsCount: 153,
    image: '/images/types/time-trial-bike.png',
    description:
      'Aero road racing and time trial machine designed in the wind tunnel for pure speed. Carbon composite frame, integrated cockpit, and deep-section wheel rims.',
    specs: {
      frame: 'Advanced-Grade Carbon Aero Frame',
      gears: 'Shimano 105 Di2 24-Speed Electronic',
      brakes: 'Shimano 105 Hydraulic Disc',
      weight: '8.4 kg (18.5 lbs)',
      wheelSize: '700x25c Giant Gavia Tubeless',
    },
    colors: ['#d70015', '#1c1c1e', '#3a3a3c'],
  },
  {
    id: 'bike-6',
    name: 'Touring bike',
    model: 'Peak Enduro Full Suspension',
    placeName: 'Bike Slot 6: Touring Bike (Peak Enduro Edition)',
    subtitle: 'Every high',
    price: 1180,
    category: 'Touring',
    rating: 4.7,
    reviewsCount: 49,
    image: '/images/types/touring-bike.png',
    description:
      'High-performance full-suspension all-mountain bike built for steep descents, alpine singletrack, and technical endurance trails.',
    specs: {
      frame: 'Monocoque Carbon with 160mm Linkage',
      gears: 'SRAM NX Eagle 12-Speed',
      brakes: 'SRAM Code R 4-Piston Hydraulic',
      weight: '13.9 kg (30.6 lbs)',
      wheelSize: '29" Boost Goodyear Peak Tires',
    },
    colors: ['#ff6900', '#2c2c2e', '#e5e5ea'],
  },
];

export const CATEGORY_SHOWCASES = [
  {
    id: 'cat-touring',
    title: 'Touring bicycles',
    placeName: 'Category Slot 1: Touring Bicycles Showcase',
    count: '+200 bicycle',
    category: 'Touring',
    image: '/images/types/touring-bike.png',
    description: 'Explore rugged adventure bikes, gravel explorers, and touring rigs built for the journey.',
  },
  {
    id: 'cat-electric',
    title: 'Electric bicycles',
    placeName: 'Category Slot 2: Electric Bicycles Showcase',
    count: '+150 bicycle',
    category: 'Electric',
    image: '/images/types/e-bike.png',
    description: 'Zip through the city with pedal assist, long-range battery, and smart torque sensors.',
  },
];

export const REVOLUTION_FEATURES = [
  { id: 'custom-builds', title: 'Custom builds', description: 'Tailored frames, gearing, and geometries.' },
  { id: 'gear-upgrade', title: 'Gear upgrade', description: 'Shimano & SRAM electronic/mechanical upgrades.' },
  { id: 'free-test-rides', title: 'Free test rides', description: 'Try any bike for 48 hours risk-free.' },
  { id: 'free-shipping', title: 'Free shipping', description: 'Insured nationwide courier delivery to your door.' },
  { id: 'electric-bikes', title: 'Electric bikes', description: 'Certified lithium battery and motor setups.' },
  { id: 'expert-repairs', title: 'Expert repairs', description: 'Lifetime tune-ups and factory-trained mechanics.' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Top 7 must have accessories for your bike ride',
    date: '22 July 2025',
    views: 122,
    readTime: '4 min read',
    image: '/images/extracted/news1_clean.png',
  },
  {
    id: 'news-2',
    title: 'How to choose perfect Bike for daily commute',
    date: '22 July 2025',
    views: 12,
    readTime: '6 min read',
    image: '/images/extracted/news2_clean.png',
  },
];

