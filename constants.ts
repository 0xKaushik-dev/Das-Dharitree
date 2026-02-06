import { Mail, Phone, MapPin, User, Calendar, Languages } from 'lucide-react';
import { ServiceItem, TestimonialItem, PricingItem, FaqItem, LinkItem } from './types';

export const NAV_LINKS = ["Skills", "Personal Info", "Education", "Contact"];

// Placeholder image for Dharitree Das. 
// Replace this URL with the actual path to the user's image (e.g., "/profile.jpg") or a hosted URL.
export const PROFILE_IMAGE = "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?q=80&w=300&auto=format&fit=crop";

export const SERVICES: ServiceItem[] = [
  {
    title: "Leadership",
    description: "Good leadership and team building ability, fostering collaboration and achieving collective goals.",
  },
  {
    title: "Responsibility",
    description: "Strong ability to shoulder responsibility and manage tasks effectively under pressure.",
  },
  {
    title: "Teamwork",
    description: "Excellent team building ability with a focus on cooperative problem solving.",
  },
  {
    title: "Positive Attitude",
    description: "Optimistic, positive thinking approach to challenges and work environments.",
  },
];

// Reusing Testimonial structure for Personal Details & Languages
export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Fluent in reading, writing, and speaking.",
    author: "Language",
    role: "Proficiency",
    company: "Linguistic",
    avatar: "https://ui-avatars.com/api/?name=En&background=random",
    rating: 5,
    featured: true, // English
  },
  {
    quote: "Native proficiency and cultural understanding.",
    author: "Language",
    role: "Proficiency",
    company: "Linguistic",
    avatar: "https://ui-avatars.com/api/?name=Od&background=random",
    rating: 5,
  },
  {
    quote: "Professional working proficiency.",
    author: "Language",
    role: "Proficiency",
    company: "Linguistic",
    avatar: "https://ui-avatars.com/api/?name=Hi&background=random",
    rating: 5,
  },
  {
    quote: "10th Feb 2002",
    author: "Date of Birth",
    role: "Personal",
    company: "Bio-data",
    avatar: "https://ui-avatars.com/api/?name=DOB&background=random",
    rating: 5,
  },
  {
    quote: "Female",
    author: "Gender",
    role: "Personal",
    company: "Bio-data",
    avatar: "https://ui-avatars.com/api/?name=F&background=random",
    rating: 5,
    featured: true
  },
  {
    quote: "Single",
    author: "Marital Status",
    role: "Personal",
    company: "Bio-data",
    avatar: "https://ui-avatars.com/api/?name=S&background=random",
    rating: 5,
  },
];

// Reusing Pricing structure for Education
export const PRICING: PricingItem[] = [
  {
    title: "Master's Degree",
    price: "2024",
    description: "Fakir Mohan Autonomous College, Balasore",
    features: [
      "Political Science",
      "Percentage: 77%",
      "Post-Graduation",
    ],
    cta: "Completed",
    popular: true
  },
  {
    title: "Bachelor of Arts",
    price: "2022",
    description: "N.M College, Rupsa",
    features: [
      "Political Science Hons",
      "Percentage: 77.85%",
      "Graduation"
    ],
    cta: "Completed"
  },
  {
    title: "CHSE (12th)",
    price: "2019",
    description: "Nilamani H.S School, Rupsa",
    features: [
      "Percentage: 77%",
      "Higher Secondary",
      "Arts Stream"
    ],
    cta: "Completed"
  },
  {
    title: "BSE (10th)",
    price: "2017",
    description: "U.N.M.V Vidyaniketan, Barapal",
    features: [
      "Percentage: 73%",
      "Secondary Education",
      "General Studies"
    ],
    cta: "Completed"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Are you open to different work environments?",
    answer: "Yes, I am flexible and open to adapting to different professional environments, responsibilities, and organizational cultures."
  },
  {
    question: "What motivates you professionally?",
    answer: "I am motivated by opportunities that allow me to learn, grow, take responsibility, and contribute meaningfully to organizational success."
  },
  {
    question: "Are you comfortable working in a team environment?",
    answer: "Yes, I enjoy working in team-based environments and believe collaboration helps achieve better outcomes while encouraging learning and mutual support."
  },
  {
    question: "What are your key strengths?",
    answer: "My key strengths include taking responsibility, maintaining a positive and focused mindset, working effectively in a team, and communicating clearly in professional environments."
  },
  {
    question: "What type of role are you seeking?",
    answer: "I am seeking an entry-level or junior professional role where I can apply my academic knowledge, develop practical skills, and contribute positively to the organization’s objectives."
  }
];

export const SOCIALS: LinkItem[] = [
  { label: "Email", href: "mailto:dasdharitree60@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:7846841511", icon: Phone },
];