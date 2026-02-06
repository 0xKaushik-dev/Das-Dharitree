import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  className?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  featured?: boolean;
}

export interface PricingItem {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LinkItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}