import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SOMNAI',
      description: "Full stack dream journal website that leverages AI to analyze dreams based on symbolism and psychological theories",    
      tags: ['React', 'Firebase', 'Gemini'],
      github: 'https://github.com/shanbhxg/dreams',
      demo: 'https://dre-ams.vercel.app/'
    },
    {
      title: 'TOADSTOOL',
      description: 'A personal productivity website for managing daily tasks, tracking habits, and organising goals with a customisable dashboard.',
      tags: ['Vue.js', 'Firebase', 'TypeScript'],
      github: 'https://github.com/shanbhxg/toadstool',
      demo: 'https://toadstool.vercel.app/'
    },
    {
      title: 'KADAMBARI',
      description: 'A book tracking website that lets users search for books (open library), log their reading history with notes and "shelf" into categories, and maintain a personal diary with analytics.',
      tags: ['React', 'Firebase', 'Open Library API'],
      github: 'https://github.com/shanbhxg/kadambari',
      demo: 'https://kadambari.vercel.app/'
    },
    {
      title: 'CINEMMA',
      description: 'A movie diary app where users can search films (tmdb), log what they’ve watched and when, and keep track of their thoughts over time (with analytics).',
      tags: ['React', 'Firebase', 'TMDb API'],
      github: 'https://github.com/shanbhxg/cinemma',
      demo: 'https://cinemma.vercel.app/'
    },
    {
      title: 'CROSSWRD',
      description: 'VueJS website that generates crossword puzzles with clues fetched from an API.',
      tags: ['VueJS', 'Python', 'API'],
      github: 'https://github.com/shanbhxg/crossword-generator',
      demo: 'https://crosswrd.vercel.app'
    },
    {
      title: 'APIDAE',
      description: 'Personalised job recommendation system using modified swarm optimization algorithm (ABC).',
      tags: ['NLP', 'BERT', 'Swarm Optimization', 'Python', 'Swarm Optimization', 'Keyword Extraction'],
      github: 'https://www.springer.com/series/15179',
      demo: 'https://apidae-jobrecsys.anvil.app/'
    },
    
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title"><span className="keyword">const</span> <span className="variable">projects</span> <span className="operator">=</span> <span className="function">()</span> <span className="operator">=&gt;</span> {'{'}</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                    <span className="keyword">github</span>
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                    <span className="function">live demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
