import React, { useState } from 'react';

const links = [
  { id: 'about', label: 'about.jsx', icon: 'JS' },
  { id: 'skills', label: 'skills.json', icon: '{}' },
  { id: 'experience', label: 'experience.tsx', icon: 'TS' },
  { id: 'projects', label: 'projects.jsx', icon: 'JS' },
  { id: 'miscellaneous', label: 'miscellaneous.jsx', icon: 'JS' },
  { id: 'contact', label: 'contact.json', icon: '{}' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar vscode-navbar" aria-label="Portfolio navigation">
      <div className="navbar-container">
        <a href="#about" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          <span className="navbar-logo-mark" aria-hidden="true">⌘</span>
          <span>deepti-portfolio</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label="Toggle navigation">
          {isMenuOpen ? '×' : '☰'}
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              <span className={`navbar-file-icon ${link.icon === 'TS' ? 'ts' : link.icon === '{}' ? 'json' : 'js'}`} aria-hidden="true">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
