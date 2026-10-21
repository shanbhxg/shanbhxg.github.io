import React from 'react';

const projects = [
  {
    title: 'SOMNAI',
    description: 'Full stack dream journal website that leverages AI to analyze dreams based on symbolism and psychological theories.',
    tags: ['React', 'Firebase', 'Gemini'],
    github: 'https://github.com/shanbhxg/dreams',
    demo: 'https://dre-ams.vercel.app/',
  },
  {
    title: 'TOADSTOOL',
    description: 'A personal productivity website for managing daily tasks, tracking habits, and organising goals with a customisable dashboard.',
    tags: ['Vue.js', 'Firebase', 'TypeScript'],
    github: 'https://github.com/shanbhxg/toadstool',
    demo: 'https://toadstool.vercel.app/',
  },
  {
    title: 'KADAMBARI',
    description: 'A book tracking website that lets users search for books through Open Library, log reading history with notes, organise shelves, and maintain a diary with analytics.',
    tags: ['React', 'Firebase', 'Open Library API'],
    github: 'https://github.com/shanbhxg/kadambari',
    demo: 'https://kadambari.vercel.app/',
  },
  {
    title: 'CINEMMA',
    description: 'A movie diary app where users can search films through TMDb, log what they have watched, and track thoughts over time with analytics.',
    tags: ['React', 'Firebase', 'TMDb API'],
    github: 'https://github.com/shanbhxg/cinemma',
    demo: 'https://cinemma.vercel.app/',
  },
  {
    title: 'CROSSWRD',
    description: 'VueJS website that generates crossword puzzles with clues fetched from an API.',
    tags: ['VueJS', 'Python', 'API'],
    github: 'https://github.com/shanbhxg/crossword-generator',
    demo: 'https://crosswrd.vercel.app',
  },
  {
    title: 'APIDAE',
    description: 'Personalised job recommendation system using a modified swarm optimisation algorithm (ABC).',
    tags: ['NLP', 'BERT', 'Swarm Optimization', 'Python', 'Keyword Extraction'],
    github: 'https://www.springer.com/series/15179',
    demo: 'https://apidae-jobrecsys.anvil.app/',
  },
];

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <div className="file-heading">
        <div>
          <div className="file-path">src <span>/</span> components <span>/</span> projects.jsx</div>
          <h2 className="file-title">Projects <span className="file-count">({projects.length})</span></h2>
        </div>
      </div>

      <div className="terminal-output-label"><span className="terminal-prompt">›</span> ls ./projects --details</div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-content">
              <div className="project-file-meta"><span className="project-file-dot" /> <span>PROJECT_DIR</span></div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noreferrer"><span className="keyword">↗ source</span></a>
                <a href={project.demo} className="project-link" target="_blank" rel="noreferrer"><span className="function">↗ live demo</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
