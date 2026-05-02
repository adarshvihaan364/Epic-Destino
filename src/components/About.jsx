import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-images">
          <div className="about-img-main">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" alt="Adventure" />
            <div className="experience-badge">
              <span className="years">13+</span>
              <span className="text">Years of Experience</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="script-text">About company</span>
          <h2 className="section-title">Great Opportunity for <span className="highlight-text">Adventure & Travels</span></h2>
          <p className="section-desc">
            Epic Destino is a premier travel agency dedicated to crafting unique and unforgettable journeys. 
            With over 13 years of experience, we specialize in high-end tours that blend adventure with luxury.
          </p>

          <ul className="about-features">
            <li><CheckCircle2 size={18} /> Safety First Always</li>
            <li><CheckCircle2 size={18} /> Low Price & Best Quality</li>
            <li><CheckCircle2 size={18} /> 24/7 Customer Support</li>
          </ul>

          <div className="about-footer">
            <button className="btn btn-primary">Discover More <ChevronRight size={18} /></button>
            <div className="founder-info">
              <img src="https://i.pravatar.cc/150?u=founder" alt="Founder" />
              <div className="founder-text">
                <h4>David Joe</h4>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
