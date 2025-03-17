import React from 'react';

const Skills = () => {
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
        { name: 'C', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' }
      ]
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
        { name: 'Figma', url: 'https://en.wikipedia.org/wiki/Figma' }
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'English', url: 'https://en.wikipedia.org/wiki/English_language' },
        { name: 'Hindi', url: 'https://en.wikipedia.org/wiki/Hindi' },
        { name: 'Kannada', url: 'https://en.wikipedia.org/wiki/Kannada_language' },
        { name: 'Konkani', url: 'https://en.wikipedia.org/wiki/Konkani_language' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Teamwork', url: 'https://en.wikipedia.org/wiki/Teamwork' },
        { name: 'Attention to Detail', url: 'https://en.wikipedia.org/wiki/Attention_to_detail' },
        { name: 'Leadership', url: 'https://en.wikipedia.org/wiki/Leadership' },
        { name: 'Adaptability', url: 'https://en.wikipedia.org/wiki/Adaptability' },
        { name: 'Problem-solving', url: 'https://en.wikipedia.org/wiki/Problem_solving' }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title"><span className="keyword">const</span> <span className="variable">skills</span> <span className="operator">=</span> <span className="function">()</span> <span className="operator">=&gt;</span> {'{'}</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                      }}
                    >
                      {skill.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
