import { ServicePackage, ServiceFAQ } from '../types';

export const POPULAR_SERVICES: ServicePackage[] = [
  {
    id: 'tune-up',
    title: 'Tune-Up Packages',
    subtitle: 'Comprehensive multi-point mechanical inspection and precision tuning.',
    description:
      'Want a bicycle that fits your style and performance goals? We offer custom builds using high-quality components.',
    iconType: 'helmet',
    featured: false,
    price: 85,
    features: [
      'Brake pad alignment & hydraulic bleed check',
      'Front & rear derailleur indexing',
      'Spoke tensioning & wheel truing',
      'Full safety bolt torque inspection',
    ],
  },
  {
    id: 'ready-to-ride',
    title: 'Ready-to-Ride Setup',
    subtitle: 'Turnkey out-of-box professional assembly, ergonomic fit, and calibration.',
    description:
      'Want a bicycle that fits your style and performance goals? We offer custom builds using high-quality components.',
    iconType: 'bike',
    featured: true,
    price: 130,
    badge: 'Most Popular',
    features: [
      'Complete unboxing and frame geometry alignment',
      'Custom rider cockpit ergonomics & saddle sizing',
      'Electronic or mechanical drivetrain calibration',
      'Tubeless conversion or tire seal inspection',
      '48-hour post-assembly complimentary follow-up check',
    ],
  },
  {
    id: 'chain-cleaning',
    title: 'Chain Cleaning',
    subtitle: 'Ultrasonic degreasing, friction-reducing immersion waxing & lube.',
    description:
      'Want a bicycle that fits your style and performance goals? We offer custom builds using high-quality components.',
    iconType: 'gear',
    featured: false,
    price: 45,
    features: [
      'Ultrasonic solvent deep bath clean',
      'Drivetrain cassette & chainring degreasing',
      'Chain wear measurement (stretch tolerance)',
      'High-grade ceramic wet/dry lube application',
    ],
  },
];

export const RIDE_LEARN_CONNECT_FEATURES = [
  { id: 'custom-build', title: 'Custom build' },
  { id: 'gear-upgrade', title: 'Gear upgrade' },
  { id: 'free-shipping-1', title: 'Free Shipping' },
  { id: 'free-test-rides', title: 'Free test rides' },
  { id: 'electric-bikes', title: 'Electric bikes' },
  { id: 'expert-repairs', title: 'Free Shipping' }, // Exactly as in the mockup, or can be 'Expert repairs'
];

export const SERVICE_COLLAGE_PHOTOS = [
  {
    id: 'collage-1',
    placeName: 'Community Ride Slot 1: Open Road Cyclists',
    image: '/images/hq-service-collage-1.png',
    alt: 'Road cyclists riding in peloton on open scenic highway',
    title: 'Road Cycling Training',
  },
  {
    id: 'collage-2',
    placeName: 'Community Ride Slot 2: Forest Trail Rider',
    image: '/images/hq-service-collage-2.png',
    alt: 'Mountain biker navigating winding forest singletrack trail',
    title: 'Forest Trail Exploration',
  },
  {
    id: 'collage-3',
    placeName: 'Community Ride Slot 3: Mountain Cliff Summit',
    image: '/images/hq-service-collage-3.png',
    alt: 'Enduro cyclist resting on cliff peak above majestic mountain clouds',
    title: 'High Altitude Summit Climbs',
  },
  {
    id: 'collage-4',
    placeName: 'Community Ride Slot 4: Urban Fixie Cyclist',
    image: '/images/hq-service-collage-4.png',
    alt: 'Urban commuter with yellow-rimmed track bike in the city',
    title: 'Urban Commute & Track Riding',
  },
];

export const PRE_SERVICES_FAQS: ServiceFAQ[] = [
  {
    id: 'faq-1',
    question: 'What type of bike should I choose?',
    answer:
      'Your ideal bicycle depends on your riding style and terrain. Road bikes excel on smooth pavement and speed; Mountain bikes provide suspension and traction for rough dirt trails; Hybrid and Touring bikes offer upright comfort with rack mounts for everyday commuting and long-distance touring; and E-Bikes provide intelligent motor assist to tackle hills and headwinds effortlessly.',
  },
  {
    id: 'faq-2',
    question: 'How often should I service my bicycle?',
    answer:
      'We recommend a comprehensive mechanical tune-up every 6 months or every 800–1,200 kilometers (500–750 miles). Drivetrain cleaning and chain lubrication should be performed every 200–300 km or immediately after heavy rain or muddy trail rides to prevent premature cassette and chainring wear.',
  },
  {
    id: 'faq-3',
    question: 'Do you provide customized bike builds?',
    answer:
      'Yes, absolutely. We specialize in custom frame builds tailored to your exact height, inseam, reach, and performance targets. You can select your frame alloy or carbon layup, groupset (Shimano, SRAM), wheelset, handlebar width, saddle type, and custom powder-coat or anodized color accents.',
  },
  {
    id: 'faq-4',
    question: 'Can I test ride a bike before purchasing?',
    answer:
      'Yes! We offer 48-hour risk-free test rides on all catalog and custom demo models. Our certified fit technicians adjust saddle height, reach, and tire pressure before your ride so you experience the bike under realistic riding conditions before making your final decision.',
  },
];

