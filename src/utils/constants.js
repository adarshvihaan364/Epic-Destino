import destItaly from '../assets/dest_italy.png';
import destSwiss from '../assets/dest_swiss.png';
import destJapan from '../assets/dest_japan.png';
import destParis from '../assets/hero_paris.png';

export const SITE_NAME = "Epic Destino";

export const TOUR_TYPES = [
  "All Type",
  "Adventure",
  "Luxury",
  "Budget",
  "Culture",
  "Nature"
];

export const DESTINATIONS = [
  "Where are you going?",
  "Italy",
  "Switzerland",
  "Japan",
  "France",
  "Maldives",
  "Thailand"
];

export const TOURS = [
  {
    id: 1,
    title: 'The Great Italy Tour',
    location: 'Rome, Italy',
    price: '$1200',
    duration: '7 Days',
    people: '25+',
    rating: 4.8,
    image: destItaly,
    badge: 'Best Seller',
    type: 'Culture'
  },
  {
    id: 2,
    title: 'Swiss Alps Adventure',
    location: 'Zermatt, Switzerland',
    price: '$1800',
    duration: '5 Days',
    people: '15+',
    rating: 4.9,
    image: destSwiss,
    badge: 'Luxury',
    type: 'Adventure'
  },
  {
    id: 3,
    title: 'Kyoto Cultural Heritage',
    location: 'Kyoto, Japan',
    price: '$1500',
    duration: '6 Days',
    people: '20+',
    rating: 4.7,
    image: destJapan,
    badge: 'Popular',
    type: 'Culture'
  },
  {
    id: 4,
    title: 'Paris City of Lights',
    location: 'Paris, France',
    price: '$900',
    duration: '4 Days',
    people: '30+',
    rating: 4.6,
    image: destParis,
    badge: 'Budget',
    type: 'Luxury'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    text: "Epic Destino made our honeymoon absolutely magical. Every detail was handled with care, from the private tours in Rome to the cozy stays in the Alps.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Adventure Seeker",
    text: "The Swiss Alps trip was life-changing. The guides were professional and the itinerary was perfect for someone looking for a real challenge.",
    avatar: "https://i.pravatar.cc/150?u=mark"
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    role: "Solo Traveler",
    text: "I felt safe and supported throughout my solo trip to Paris. The cultural insights provided by the local guides were invaluable.",
    avatar: "https://i.pravatar.cc/150?u=yuki"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Italy",
    author: "Elena Rossi",
    date: "May 15, 2024",
    excerpt: "Beyond Rome and Florence, Italy hides spectacular villages that will steal your heart...",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Packing Essentials for your Swiss Adventure",
    author: "Peter Weber",
    date: "June 2, 2024",
    excerpt: "Preparing for the Alps requires more than just a warm jacket. Here is our ultimate guide...",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Understanding Kyoto's Ancient Traditions",
    author: "Kenji Sato",
    date: "June 10, 2024",
    excerpt: "Kyoto is the heart of Japanese culture. Learn how to respect and enjoy its local customs...",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600"
  }
];
