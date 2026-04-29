import React from 'react';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Jacob Jones',
    role: 'Web Designer',
    image: 'https://i.pravatar.cc/150?u=jacob',
    text: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo.',
    rating: 5
  },
  {
    id: 2,
    name: 'Courtney Henry',
    role: 'Marketing Coordinator',
    image: 'https://i.pravatar.cc/150?u=courtney',
    text: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="script-text">Testimonials</span>
          <h2 className="section-title">What Our <span className="highlight-text">Travelers Say</span></h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card animate-fade-in-up">
              <div className="quote-icon">
                <Quote size={40} fill="rgba(79, 70, 229, 0.1)" color="transparent" />
              </div>
              <div className="rating">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <img src={item.image} alt={item.name} />
                <div className="author-info">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
