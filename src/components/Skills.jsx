import React from 'react';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'Python', url: 'https://en.wikipedia.org/wiki/Python_(programming_language)' },
      { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
      { name: 'HTML', url: 'https://en.wikipedia.org/wiki/HTML' },
      { name: 'CSS', url: 'https://en.wikipedia.org/wiki/CSS' },
      { name: 'Java', url: 'https://en.wikipedia.org/wiki/Java_(programming_language)' },
      { name: 'C', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', url: 'https://en.wikipedia.org/wiki/Git' },
      { name: 'AWS', url: 'https://en.wikipedia.org/wiki/Amazon_Web_Services' },
      { name: 'Linux', url: 'https://en.wikipedia.org/wiki/Linux' },
      { name: 'ReactJS', url: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)' },
      { name: 'NodeJS', url: 'https://en.wikipedia.org/wiki/Node.js' },
      { name: 'NextJS', url: 'https://en.wikipedia.org/wiki/Next.js' },
      { name: 'VueJS', url: 'https://en.wikipedia.org/wiki/Vue.js' },
      { name: 'Electron', url: 'https://en.wikipedia.org/wiki/Electron_(software_framework)' },
      { name: 'Express', url: 'https://en.wikipedia.org/wiki/Express.js' },
      { name: 'MongoDB', url: 'https://en.wikipedia.org/wiki/MongoDB' },
      { name: 'MySQL', url: 'https://en.wikipedia.org/wiki/MySQL' },
      { name: 'NumPy', url: 'https://en.wikipedia.org/wiki/NumPy' },
      { name: 'Pandas', url: 'https://en.wikipedia.org/wiki/Pandas_(software)' },
      { name: 'PyTorch', url: 'https://en.wikipedia.org/wiki/PyTorch' },
      { name: 'Flask', url: 'https://en.wikipedia.org/wiki/Flask_(web_framework)' },
      { name: 'Figma', url: 'https://en.wikipedia.org/wiki/Figma' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'English', url: 'https://en.wikipedia.org/wiki/English_language' },
      { name: 'Hindi', url: 'https://en.wikipedia.org/wiki/Hindi' },
      { name: 'Kannada', url: 'https://en.wikipedia.org/wiki/Kannada_language' },
      { name: 'Konkani', url: 'https://en.wikipedia.org/wiki/Konkani_language' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Teamwork', url: 'https://en.wikipedia.org/wiki/Teamwork' },
      { name: 'Attention to Detail', url: 'https://en.wikipedia.org/wiki/Attention_to_detail' },
      { name: 'Leadership', url: 'https://en.wikipedia.org/wiki/Leadership' },
      { name: 'Adaptability', url: 'https://en.wikipedia.org/wiki/Adaptability' },
      { name: 'Problem-solving', url: 'https://en.wikipedia.org/wiki/Problem_solving' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <div className="file-heading">
        <div>
          <div className="file-path">src <span>/</span> config <span>/</span> skills.json</div>
          <h2 className="file-title">Skills <span className="file-count">({skillCategories.reduce((count, category) => count + category.skills.length, 0)} items)</span></h2>
        </div>
      </div>

      <div className="terminal-output-label"><span className="terminal-prompt">›</span> cat skills.json</div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <section key={category.title} className="skills-category">
            <div className="skills-category-header">
              <span className="skills-category-index">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="skills-category-title">{category.title}</h3>
              <span className="skills-category-count">{category.skills.length}</span>
            </div>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <a key={skill.name} className="skill-item" href={skill.url} target="_blank" rel="noopener noreferrer">
                  <span className="skill-chevron">›</span>{skill.name}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
