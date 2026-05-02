import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Send } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo" onClick={(e) => scrollToSection(e, 'home')}>
          <img src="https://epic.vihaandigitals.com/wp-content/uploads/elementor/thumbs/Epic-Destino-Logo-Final-1-rl2jate12eakuom3eylni0p29ljcr8ae7h0izhgirk.png" alt="Epic Destino" className="logo-img" style={{ cursor: 'pointer' }} />
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="active">Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a></li>
            <li><a href="#tours" onClick={(e) => scrollToSection(e, 'tours')}>Destinations</a></li>
            <li><a href="#tours" onClick={(e) => scrollToSection(e, 'tours')}>Tour List</a></li>
            <li><a href="#offers" onClick={(e) => scrollToSection(e, 'offers')}>Offers</a></li>
            <li><a href="#blogs" onClick={(e) => scrollToSection(e, 'blogs')}>News</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="action-btn"><Search size={20} /></button>
          <div className="cart-btn">
            <button className="action-btn"><ShoppingBag size={20} /></button>
            <span className="cart-count">0</span>
          </div>
          <button className="btn btn-primary get-in-touch hide-mobile">
            Get In Touch <Send size={16} />
          </button>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
