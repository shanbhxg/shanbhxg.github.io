
import React, { useState } from 'react';

const education = [
  {
    year: '2017–2018',
    label: 'Secondary School',
    institution: 'Sindhi High School',
    qualification: 'CBSE · Class X',
    score: '97%',
    highlights: [
      {
        id: 'school-awards',
        title: 'Academic achievements',
        content: '99% in English and Social Science, 98% in Hindi and Science, and 93% in Mathematics.',
      },
      {
        id: 'school-activities',
        title: 'Extracurricular activities',
        content: 'Participated in Model UN, Bharatanatyam arangetram, and was part of the school acappella team.',
      },
    ],
  },
  {
    year: '2018–2020',
    label: 'Pre-University',
    institution: 'Chethana PU College',
    qualification: 'Karnataka State · PCMB',
    score: '92%',
    highlights: [
      {
        id: 'puc-academics',
        title: 'Academic achievements',
        content: 'Scored 551/600 and secured KCET rank 3276.',
      },
    ],
  },
  {
    year: '2020–2024',
    label: 'Undergraduate',
    institution: 'PES University',
    qualification: (
        <>
          B.Tech. · Computer Science Engineering
          <span className="education-specialization">
            Specialization in Machine Intelligence and Data Science
          </span>
        </>
      ),
    score: '8.7 / 10',
    highlights: [
      {
        id: 'university-teaching',
        title: 'Teaching Assistant · Machine Learning',
        content: 'Taught machine learning concepts and algorithms to undergraduate students, assisted with lab sessions, and graded assignments and exams under the guidance of Prof. Kokila M.',
      },
      {
        id: 'university-awards',
        title: 'Scholarships & awards',
        content: 'Received DAC and MRD scholarships.',
      },
      {
        id: 'university-activities',
        title: 'Clubs & university activities',
        content: 'Participated in the acappella and literature clubs, took part in hackathons, managed branding and social media for the IEEE Photonics chapter, and led an event at Maaya 2023 (PESU cultural fest).',
      },
      {
        id: 'university-publication',
        title: 'Research publication',
        content: 'Developed a content-based job recommendation system using NLP keyword extraction, BERT, and modified Artificial Bee Colony algorithm to generate the top 10 recommendations.',
        link: 'https://doi.org/10.1007/978-981-96-0201-8_57',
      },
    ],
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [openHighlight, setOpenHighlight] = useState('university-publication');

  const selectEducation = (index) => {
    setActiveIndex(index);
    setOpenHighlight(index === 2 ? 'university-publication' : null);
  };

  const toggleHighlight = (id) => {
    setOpenHighlight((current) => current === id ? null : id);
  };

  const active = education[activeIndex];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="file-heading">
          <div>
            <div className="file-path">
              src <span>/</span> components <span>/</span> education.jsx
            </div>
            <h2 className="file-title">
              Education{' '}
              <span className="file-count">
                ({education.length} institutions)
              </span>
            </h2>
          </div>
        </div>

        <div className="terminal-output-label">
          <span className="terminal-prompt">›</span> cat education.json
        </div>

        <div className="education-layout">
          <nav className="education-sidebar" aria-label="Education history">
            <div className="education-sidebar-heading">ACADEMIC HISTORY</div>

            <div className="education-timeline">
              {education.map((entry, index) => (
                <button
                  key={entry.year}
                  type="button"
                  className={`education-timeline-entry ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  onClick={() => selectEducation(index)}
                  aria-pressed={activeIndex === index}
                >
                  <span className="education-timeline-marker" />

                  <span className="education-timeline-text">
                    <span className="education-timeline-year">
                      {entry.year}
                    </span>
                    <span className="education-timeline-label">
                      {entry.label}
                    </span>
                    <span className="education-timeline-institution">
                      {entry.institution}
                    </span>
                  </span>

                  <span className="education-timeline-arrow">›</span>
                </button>
              ))}
            </div>
          </nav>

          <article className="education-content" key={active.institution}>
            <header className="education-content-header">
              <span className="education-content-path">
                <span className="terminal-prompt">›</span>
                {' '}education / {activeIndex + 1}
              </span>
              <span className="education-content-year">{active.year}</span>
            </header>

            <div className="education-content-body">
              <div className="education-overline">
                {active.qualification}
              </div>

              <h3 className="education-institution">
                {active.institution}
              </h3>

              <div className="education-score">
                <span className="education-score-value">{active.score}</span>
                <span className="education-score-label">FINAL RESULT</span>
              </div>

              <div className="education-highlights">
                {active.highlights.map((highlight) => {
                  const isOpen = openHighlight === highlight.id;

                  return (
                    <div
                      className={`education-highlight ${isOpen ? 'is-open' : ''}`}
                      key={highlight.id}
                    >
                      <button
                        type="button"
                        className="education-highlight-trigger"
                        onClick={() => toggleHighlight(highlight.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{highlight.title}</span>
                        <span className="education-highlight-icon" aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="education-highlight-content">
                          <p>{highlight.content}</p>

                          {highlight.link && (
                           <a
                           className="education-highlight-link"
                           href={highlight.link}
                           target="_blank"
                           rel="noreferrer"
                         >
                           <span className="education-highlight-link-title">
                             <em>AI-Based Personalised Job Recommender System</em>
                             <span className="education-highlight-link-arrow">↗</span>
                           </span>
                           <span className="education-highlight-link-doi">
                             doi.org/10.1007/978-981-96-0201-8_57
                           </span>
                         </a>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <footer className="education-content-footer">
              <span>{active.institution}</span>
              <span>{active.year}</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
