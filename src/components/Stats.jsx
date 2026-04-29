import React from 'react';
import './Stats.css';

const brands = [
  'Envato', 'TravelCo', 'Skyline', 'Aviator', 'Journey', 'Voyage'
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="brands-container">
          <p className="brands-title">1k+ Brands Trust Us</p>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
