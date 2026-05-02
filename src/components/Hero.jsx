import React from 'react';
import { Play, ChevronRight, Send } from 'lucide-react';
import BookingBar from './BookingBar';
import './Hero.css';

// Using the generated images
import heroMain from '../assets/hero_paris.png';
import heroSub from '../assets/hero_maldives.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <span className="script-text">Discover Your</span>
          <h1 className="hero-title">
            Your Ultimate <br />
            <span className="highlight-text">Travel Partner</span>
          </h1>
          <p className="hero-desc">
            Explore the world's most breathtaking destinations with Epic Destino. 
            We provide curated experiences, luxury accommodations, and memories that last a lifetime.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Explore More <ChevronRight size={18} />
            </button>
            <button className="play-btn">
              <div className="play-icon">
                <Play size={20} fill="currentColor" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>
          
          <div className="hero-decoration">
            <div className="decor-item plane-icon">
              <Send size={24} />
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="main-image-container">
            <img src={heroMain} alt="Paris" className="hero-main-img" />
            <div className="sub-image-container">
              <img src={heroSub} alt="Maldives" className="hero-sub-img" />
            </div>
            <div className="floating-badge top-right">
              <span className="badge-text">Let's Go!</span>
            </div>
          </div>
        </div>
      </div>
      <BookingBar />
    </section>
  );
};

export default Hero;
