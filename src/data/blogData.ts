import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'How to communicate safely with bikes..',
    author: {
      name: 'Interview',
      avatar: '/images/hq-blog_avatar_1.png',
      role: 'Road Safety Expert',
    },
    date: '22 July 2026',
    readTime: '5 min read',
    image: '/images/hq-blog_art_1.png',
    placeName: 'Blog Article 1: Safe Road Cycling Communication',
    excerpt:
      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...',
    content: [
      'Effective communication between cyclists and motorists is one of the most vital safety skills for any rider. Whether you are navigating dense urban intersections or descending high-speed country roads, predictable non-verbal signaling prevents collisions.',
      'Always utilize standard hand signals for left turns, right turns, and sudden stops. Establishing eye contact with drivers waiting at cross-streets confirms mutual awareness before you enter their right-of-way.',
      'Audible cues, such as a crisp bicycle bell or a loud, clear verbal callout ("Passing on your left!"), give pedestrians and fellow riders ample time to hold their line without panic reactions.',
    ],
    tags: ['interview', 'photography', 'tutorial', 'safety', 'learn'],
  },
  {
    id: 'post-2',
    title: 'How to choose the perfect bike in your..',
    author: {
      name: 'Interview',
      avatar: '/images/hq-blog_avatar_2.png',
      role: 'Certified Bike Fit Technician',
    },
    date: '22 July 2026',
    readTime: '7 min read',
    image: '/images/hq-blog_art_2.png',
    placeName: 'Blog Article 2: Bike Geometry and Sizing Guide',
    excerpt:
      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...',
    content: [
      'Selecting the correct bicycle is not merely a question of frame size; it is a synthesis of geometry, riding posture, intended terrain, and anatomical flexibility.',
      'Begin by clarifying your primary riding surface: if 80% of your miles are paved city roads with occasional weekend gravel, an endurance gravel bike offers significantly lower rolling resistance than a heavy full-suspension mountain bike.',
      'Ensure proper standover clearance, saddle-to-pedal knee extension (approximately 25–30 degrees of bend at bottom dead center), and comfortable reach to the handlebars without excessive spine curvature.',
    ],
    tags: ['interview', 'learn', 'article', 'post', 'computer'],
  },
  {
    id: 'post-3',
    title: 'Electric bikes : Are they worth it?',
    author: {
      name: 'Interview',
      avatar: '/images/hq-blog_avatar_3.png',
      role: 'E-Mobility Systems Specialist',
    },
    date: '22 July 2026',
    readTime: '6 min read',
    image: '/images/hq-blog_art_3.png',
    placeName: 'Blog Article 3: E-Bike Investment & Efficiency Analysis',
    excerpt:
      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...',
    content: [
      'Electric assist bicycles have evolved from heavy, clunky novelties into sophisticated transportation machines that blend torque sensors, integrated downtube batteries, and lightweight motors.',
      'When evaluating whether an e-bike is worth the upfront investment, consider your weekly commute costs: fuel, parking, and transit fares frequently exceed the electrical charging cost ($0.10–$0.25 per full 60-mile charge).',
      'Beyond economics, e-bikes flatten steep hills, equalize fitness gaps among riding partners, and allow riders to arrive at their destinations without arriving drenched in sweat.',
    ],
    tags: ['interview', 'money', 'electric', 'it', 'post'],
  },
  {
    id: 'post-4',
    title: 'Top 7 must-have accessories for long tours',
    author: {
      name: 'Interview',
      avatar: '/images/hq-blog_avatar_1.png',
      role: 'Expedition Touring Specialist',
    },
    date: '24 July 2026',
    readTime: '8 min read',
    image: '/images/hq-blog_art_1.png',
    placeName: 'Blog Article 4: Tour Packing Checklist',
    excerpt:
      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...',
    content: [
      'Long-distance bikepacking and self-supported touring demand reliability over flashy gadgets. The right accessories keep you rolling safely through rain, headwinds, and remote stretches.',
      'Essential items include a dual-valve micro pump with integrated pressure gauge, tubeless repair bacon strips, multi-tool with integrated chain breaker, and high-lumen dynamo-powered front lights.',
    ],
    tags: ['article', 'tutorial', 'learn', 'photography'],
  },
];

export const BLOG_TAGS = [
  'photography',
  'photography',
  'computer',
  'interview',
  'learn',
  'money',
  'tutorial',
  'it',
  'article',
  'money',
  'it',
  'post',
  'money',
  'it',
  'post',
  'money',
];
