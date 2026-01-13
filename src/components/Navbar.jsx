import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="navbar-logo">NEW TAB TECH LAB</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <a href="#packages" className="nav-link">PACKAGES</a>
          <a href="#why" className="nav-link">WHY US</a>
          <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
          <a href="#addons" className="nav-link">ADD-ONS</a>
          <button className="nav-button">LET'S START OUR PROJECT →</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className="menu-icon">☰</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-items">
          <a href="#packages" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            PACKAGES
          </a>
          <a href="#why" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            WHY US
          </a>
          <a href="#testimonials" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            TESTIMONIALS
          </a>
          <a href="#addons" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            ADD-ONS
          </a>
          <button className="mobile-nav-button" onClick={() => setIsMenuOpen(false)}>
            LET'S START OUR PROJECT →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;