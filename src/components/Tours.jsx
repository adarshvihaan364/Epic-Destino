import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import { TOURS } from '../utils/constants';
import './Tours.css';

const Tours = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tours-section">
      <div className="container">
        <div className="section-header">
          <span className="script-text">Popular Destination</span>
          <h2 className="section-title">Popular <span className="highlight-text">Destinations</span></h2>
          <p className="section-desc">
            Explore our curated list of world-class destinations. From historical landmarks to hidden natural wonders, 
            we provide experiences that last a lifetime.
          </p>
        </div>

        <div className="tours-grid">
          {TOURS.map((tour) => (
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
                <button className="btn btn-outline tour-btn" onClick={scrollToContact}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
