import React from 'react';
import './Offers.css';

const Offers = () => {
  return (
    <section className="offers-section">
      <div className="container offers-container">
        <div className="offer-card banner-1 animate-fade-in-up">
          <div className="offer-content">
            <span className="offer-badge">15% Off</span>
            <h3>Explore All Tour Of The <span className="highlight-text">World With Us</span></h3>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
        
        <div className="offer-card banner-2 animate-fade-in-up">
          <div className="offer-content">
            <span className="offer-badge">Special Deal</span>
            <h3>Tours and Trip <span className="highlight-text">Packages Globally</span></h3>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
