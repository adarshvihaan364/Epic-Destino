import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import './Tours.css';

// Using the assets
import destItaly from '../assets/dest_italy.png';
import destSwiss from '../assets/dest_swiss.png';
import destJapan from '../assets/dest_japan.png';
import destParis from '../assets/hero_paris.png';

const tours = [
  {
    id: 1,
    title: 'The Great Italy Tour',
    location: 'Rome, Italy',
    price: '$1200',
    duration: '7 Days',
    people: '25+',
    rating: 4.8,
    image: destItaly,
    badge: 'Best Seller'
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
    badge: 'Luxury'
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
    badge: 'Popular'
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
    badge: 'Budget'
  }
];

const Tours = () => {
  return (
    <section className="tours-section">
      <div className="container">
        <div className="section-header">
          <span className="script-text">Popular Destination</span>
          <h2 className="section-title">Popular <span className="highlight-text">Destinations</span></h2>
          <p className="section-desc">
            The island of Crete offers a rare mix of splendid beaches, amazing mountain landscape, 
            vibrant towns and cosy villages inhabited by warm-hearted locals.
          </p>
        </div>

        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card animate-fade-in-up">
              <div className="tour-image">
                <img src={tour.image} alt={tour.title} />
                <div className="tour-badge">{tour.badge}</div>
                <button className="wishlist-btn">❤</button>
              </div>
              <div className="tour-content">
                <div className="tour-meta">
                  <span className="tour-rating">
                    <Star size={14} fill="#f59e0b" color="#f59e0b" /> {tour.rating}
                  </span>
                  <span className="tour-price">{tour.price}</span>
                </div>
                <h3 className="tour-title">{tour.title}</h3>
                <div className="tour-location">
                  <MapPin size={14} /> {tour.location}
                </div>
                <div className="tour-features">
                  <div className="feature">
                    <Clock size={14} /> {tour.duration}
                  </div>
                  <div className="feature">
                    <Users size={14} /> {tour.people}
                  </div>
                </div>
                <button className="btn btn-outline tour-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
