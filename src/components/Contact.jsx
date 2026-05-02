import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="script-text">Contact Us</span>
          <h2 className="section-title">Get in <span className="highlight-text">Touch With Us</span></h2>
          <p className="section-desc">
            Have questions about a destination or need help planning your trip? 
            Our travel experts are here to help you every step of the way.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-fade-in-right">
            <div className="info-card">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-text">
                <h4>Visit Us</h4>
                <p>184 Main Collins Street Victoria 8007, Australia</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-text">
                <h4>Call Us</h4>
                <p>+6108-666-0112</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon"><Mail size={24} /></div>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>info@epicdestino.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form animate-fade-in-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                required 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary ${status === 'sending' ? 'loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'} 
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
