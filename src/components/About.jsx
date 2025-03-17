
import React from 'react';
import Terminal from './Terminal';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title"><span className="keyword">const</span> <span className="variable">about</span> <span className="operator">=</span> <span className="function">()</span> <span className="operator">=&gt;</span> {'{'}</h2>
        
        <div className="about-content">
          <div>
            <p>
              Hello! I'm <span className="variable">Deepti Shanbhag</span>, a passionate full-stack developer with a strong 
              focus on creating user-friendly web applications.
            </p>
            <br />
            <p>
              I specialize in building <span className="function">modern</span>, <span className="function">responsive</span>, 
              and <span className="function">scalable</span> web applications using JavaScript and its frameworks.
            </p>
            <br />
            <br />
            <p>
              <span className="comment">// Try using the terminal below to learn more about me!</span>
            </p>
            <br />
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
          
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default About;
