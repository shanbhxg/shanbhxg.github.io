
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
            </div>
            
            <div className="footer-links">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
