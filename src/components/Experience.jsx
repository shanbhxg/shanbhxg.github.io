import React from 'react';

const calculateMonths = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  return Math.max(0, (endDate.getFullYear() - start.getFullYear()) * 12 + endDate.getMonth() - start.getMonth());
};

const experiences = [
  {
    title: 'Engineer 2 – Software Engineering',
    company: 'Pratt & Whitney',
    date: 'Oct 2026 - Present',
    duration: `${calculateMonths('2026-10-01')} months`,
    description: [
      'Build and maintain dashboards used by repair engineers across React, Vue, Django, FastAPI, and SQL.',
      'Integrated Ping SSO authentication and customised open-source software for secure enterprise deployment.',
      'Diagnose production issues, deliver features, and maintain live applications.',
    ],
    technologies: ['React', 'Vue.js', 'Python', 'Django', 'FastAPI', 'SQL', 'Ping SSO'],
  },
  {
    title: 'Graduate Engineer Trainee',
    company: 'Pratt & Whitney',
    date: 'Jul 2024 - Sep 2026',
    duration: '2 years 3 months',
    description: [
      'Delivered 4+ full-stack applications with data science and aftermarket engineering teams across three regions, from requirements through testing and deployment.',
      'Built serverless backend services with AWS SAM, Lambda, and API Gateway.',
      'Implemented features across Python, Django, FastAPI, React, Vue, and SQL codebases.',
      'Mentored interns in codebase onboarding, feature development, and debugging.',
      'Designed internal communications materials and maintained the company SharePoint news and events page.',
    ],
    technologies: ['Python', 'React', 'Vue.js', 'SQL', 'AWS SAM', 'Lambda', 'API Gateway', 'SharePoint'],
  },
  {
    title: 'Intern',
    company: 'Pratt & Whitney',
    date: 'Jan 2024 - Jun 2024',
    duration: '6 months',
    description: [
      'Built an Electron desktop application used globally by 280+ managers to replace legacy management software.',
      'Implemented LDAP authentication and automated application updates through GitHub Releases.',
      'Created Figma wireframes and a Python executable proof of concept.',
    ],
    technologies: ['React', 'Vue.js', 'Electron', 'Node.js', 'SQL', 'LDAP', 'Python', 'Figma'],
  },
  {
    title: 'Teaching Assistant',
    company: 'PES University',
    date: 'Aug 2023 - Dec 2023',
    duration: '5 months',
    description: [
      'Developed, taught, and assessed machine learning, deep learning, and statistics assignments for 40 third-year Computer Science students.',
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'Statistics'],
  },
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <div className="file-heading">
        <div>
          <div className="file-path">src <span>/</span> components <span>/</span> experience.tsx</div>
          <h2 className="file-title">Experience <span className="file-count">({experiences.length})</span></h2>
        </div>
      </div>

      <div className="terminal-output-label"><span className="terminal-prompt">›</span> work-history --verbose</div>
      <div className="terminal-experience">
        {experiences.map((exp, index) => (
          <article className="terminal-experience-entry" key={exp.title}>
            <div className="terminal-experience-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="terminal-experience-content">
              <div className="terminal-experience-header">
                <h3>{exp.title}</h3>
                <span className="terminal-experience-duration">{exp.duration}</span>
              </div>
              <div className="terminal-experience-meta">
                <span>{exp.company}</span>
                <span>{exp.date}</span>
              </div>
              <ul className="terminal-experience-description">
                {exp.description.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="terminal-experience-tech">
                <span className="keyword">stack</span><span className="operator">:</span>
                {exp.technologies.map((tech, techIndex) => (
                  <React.Fragment key={tech}>
                    <span className="terminal-tech-name">{tech}</span>
                    {techIndex < exp.technologies.length - 1 && <span className="operator"> / </span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
