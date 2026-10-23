import React from 'react';
import Terminal from './Terminal';

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="file-heading">
        <div>
          <div className="file-path">src <span>/</span> components <span>/</span> about.jsx</div>
          <h2 className="file-title">About</h2>
        </div>
      </div>

      <div className="about-content">
        <div className="about-copy">
          <p>Hello! I'm <span className="variable">Deepti Shanbhag</span>, a full-stack software engineer focused on building useful, user-friendly applications.</p>
          <p>I work across front-end interfaces, backend services, internal tools, and data-driven applications. My day-to-day stack includes JavaScript, React, Vue, Python, and SQL.</p>
          <span className="comment"> // Using command{' '} <button className="command" onClick={() => window.dispatchEvent(new Event('terminal-resume'))}> resume </button>{' '} will take you to my CV as a PDF. </span>        </div>
        <Terminal />
      </div>
    </div>
  </section>
);

export default About;
