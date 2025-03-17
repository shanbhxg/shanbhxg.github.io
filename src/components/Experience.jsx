import React from 'react';

// Function to calculate months between two dates
const calculateMonths = (startDate) => {
  const start = new Date(startDate);
  const now = new Date(); // Get current UTC time

  const yearsDiff = now.getFullYear() - start.getFullYear();
  const monthsDiff = now.getMonth() - start.getMonth();

  return yearsDiff * 12 + monthsDiff;
};

// Experience data
const experiences = [
  {
    title: 'Graduate Engineer Trainee',
    company: 'Pratt and Whitney',
    date: `Jul 2024 - Present`,
    duration: `${calculateMonths('2024-07-01')} months`, // Dynamically calculated
    description: [
      'Collaborated with data scientists to build a VueJS website for complex data workflows, allowing users to interact meaningfully with data via drag-and-drop interfaces, various visualizations, and flowcharts.',
      'Worked with after-market maintenance engineering team to build a full-stack application using VueJS, AWS SAM, Lambda, and API Gateway, along with creating extensive documentation using Vitepress.'
    ],
    technologies: ['VueJS', 'VueFlow', 'Git', 'Electron', 'Python', 'SQL', 'Agile', 'AWS', 'Postman', 'FastAPI'],
  },
  {
    title: 'Intern',
    company: 'Pratt and Whitney',
    date: 'Jan 2024 - Jul 2024',
    duration: '6 months', // Static since it has an end date
    description: [
      'Developed a desktop application used by global managers, with interactive data visualizations and LDAP authentication, packaging them into executables, and managing global auto-updates via Github Releases to ensure seamless distribution and maintenance.',
      'Developed web and desktop applications using VueJS, Electron, SQL, and ReactJS in an Agile environment.'
    ],
    technologies: ['ReactJS', 'VueJS', 'Electron', 'NodeJS', 'SQL', 'Agile'],
  },
  {
    title: 'Teaching Assistant',
    company: 'PES University',
    date: 'Aug 2023 - Dec 2023',
    duration: '5 months',
    description: [
      'Assisted Prof. P Kokila for the course "Machine Intelligence" at PES University.',
      'Developed, instructed, and evaluated course assignments for 3rd-year B.Tech. CSE students.'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'Statistics'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="keyword">const</span> <span className="variable">experience</span>{' '}
          <span className="operator">=</span> <span className="function">()</span>{' '}
          <span className="operator">=&gt;</span> {'{'}
        </h2>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3 className="experience-title">{exp.title}</h3>
              <span className="experience-company">{exp.company}</span>
              <span className="experience-date">{exp.date} ({exp.duration})</span>
              <div className="experience-tags">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="experience-tag">{tech}</span>
                ))}
              </div>
              <br/> 
              <ul className="experience-description">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
