
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="navbar-container container">
        <a href="#" className="navbar-logo">
          <span className="variable">deepti</span><span className="function">Shanbhag</span>
        </a>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="navbar-link" onClick={closeMenu}>
            <span className="keyword">about</span>
          </a>
          <a href="#skills" className="navbar-link" onClick={closeMenu}>
            <span className="function">skills</span>
          </a>
          <a href="#projects" className="navbar-link" onClick={closeMenu}>
            <span className="variable">projects</span>
          </a>
          <a href="#experience" className="navbar-link" onClick={closeMenu}>
            <span className="class">experience</span>
          </a>
          <a href="#contact" className="navbar-link" onClick={closeMenu}>
            <span className="string">contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
