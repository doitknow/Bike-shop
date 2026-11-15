export interface BikeColorVariant {
  name: string;
  hex: string;
  image: string;
}

export interface BikeProduct {
  id: string;
  name: string;
  model: string;
  placeName: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  promoBanner?: string;
  category: 'Touring' | 'Electric' | 'BMX' | 'Kids' | 'Road' | 'Mountain';
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  specs: {
    frame: string;
    gears: string;
    brakes: string;
    weight: string;
    wheelSize: string;
  };
  colors: string[];
  colorVariants?: BikeColorVariant[];
}

export interface CartItem {
  product: BikeProduct;
  quantity: number;
  selectedColor?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  views: number;
  image: string;
  readTime: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: 'helmet' | 'bike' | 'gear';
  featured?: boolean;
  price?: number;
  badge?: string;
  features?: string[];
}

export interface ServiceFAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingRequest {
  serviceId: string;
  serviceTitle: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  bikeModel: string;
  preferredDate: string;
  notes?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
  placeName: string;
}



