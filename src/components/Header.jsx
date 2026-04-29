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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <img src="https://epic.vihaandigitals.com/wp-content/uploads/elementor/thumbs/Epic-Destino-Logo-Final-1-rl2jate12eakuom3eylni0p29ljcr8ae7h0izhgirk.png" alt="Epic Destino" className="logo-img" />
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Destination</a></li>
            <li><a href="#">Tour List</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact Us</a></li>
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
