import React from 'react';
import { ShieldCheck, Map, Calendar, Plane } from 'lucide-react';
import './Features.css';

// Re-using images for variety
import featImg1 from '../assets/hero_paris.png';
import featImg2 from '../assets/dest_italy.png';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container features-container">
        <div className="features-images">
          <div className="circle-image-stack">
            <div className="circle-img img-1">
              <img src={featImg1} alt="Feature 1" />
            </div>
            <div className="circle-img img-2">
              <img src={featImg2} alt="Feature 2" />
            </div>
            <div className="decor-icon">
              <Plane size={30} fill="white" color="white" />
            </div>
          </div>
        </div>

        <div className="features-content">
          <span className="script-text">Why Choose Us</span>
          <h2 className="section-title">Get The <span className="highlight-text">Best Travel</span> Experience With Epic Destino</h2>
          <p className="section-desc">
            We prioritize your comfort and safety above all else. Our team of travel experts 
            hand-picks every destination and accommodation to ensure a premium experience.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <ShieldCheck size={24} />
              </div>
              <div className="feature-text">
                <h3>Trusted Travel Guide</h3>
                <p>Our certified guides are experienced, friendly, and committed to giving you the best experience.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Calendar size={24} />
              </div>
              <div className="feature-text">
                <h3>Instant Booking</h3>
                <p>Book your favorite destinations instantly with our secure and easy-to-use platform.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Map size={24} />
              </div>
              <div className="feature-text">
                <h3>Flexible Itinerary</h3>
                <p>Customize your travel plans according to your preferences and schedule with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
