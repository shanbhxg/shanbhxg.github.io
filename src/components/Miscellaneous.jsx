
import React from 'react';

const groups = [
  {
    title: 'Certifications',
    items: [
      {
        title: 'Machine Learning with Python',
        organisation: 'IBM · Sep 2026',
        tags: ['Python', 'Machine Learning'],
        link: 'https://www.coursera.org/account/accomplishments/records/FUMCJVHZ6RP3',
      },
      {
        title: 'AI For Everyone',
        organisation: 'DeepLearning.AI · Aug 2026',
        tags: ['Artificial Intelligence'],
        link: 'https://www.coursera.org/account/accomplishments/records/3YVUBQAUIGYQ',
      },
      {
        title: 'AWS Certified Cloud Practitioner',
        organisation: 'Amazon Web Services · Nov 2025',
        tags: ['AWS', 'Cloud Computing'],
        note: 'Expires Nov 2028',
        link: 'https://www.credly.com/badges/66ab9f76-2971-4dab-b078-58efc250758d/public_url',
      },
      {
        title: 'Advanced Recommender Systems',
        organisation: 'Coursera · Sep 2023',
        tags: ['Recommender Systems', 'Machine Learning'],
      },
    ],
  },
  {
    title: 'Recognition',
    items: [
      {
        title: 'RTX RStars · Accountability',
        organisation: 'Pratt & Whitney',
        link: 'YOUR_ACCOUNTABILITY_CERTIFICATE_URL',
        linkText: 'view details',
      },
      {
        title: 'RTX RStars · Collaboration',
        organisation: 'Pratt & Whitney',
        link: 'YOUR_COLLABORATION_CERTIFICATE_URL',
        linkText: 'view details',
      },
      {
        title: 'MRD Scholarship',
        organisation: 'PES University',
      },
      {
        title: 'DAC Scholarship',
        organisation: 'PES University',
      },
    ],
  },
  {
    title: 'Initiative',
    items: [
      {
        title: 'Photography Event Lead',
        organisation: "Maaya'23 · PES University Fest",
        note: 'Led contest coordination and execution.',
        tags: ['Leadership', 'Event Coordination']
      },
      {
        title: 'Internal Branding Committee',
        organisation: 'Pratt & Whitney',
        note: 'SharePoint page for news, internal communication mails, posters and flyers.',
        tags: ['SharePoint', 'Design', 'Figma'],
      },
    ],
  },
];

const totalItems = groups.reduce(
  (total, group) => total + group.items.length,
  0
);

const Miscellaneous = () => (
  <section id="miscellaneous" className="section">
    <div className="container">
      <div className="file-heading">
        <div>
          <div className="file-path">
            src <span>/</span> components <span>/</span> miscellaneous.jsx
          </div>
          <h2 className="file-title">
            Miscellaneous <span className="file-count">({totalItems})</span>
          </h2>
        </div>
      </div>

      <div className="terminal-output-label">
        <span className="terminal-prompt">›</span>
        ls ./recognition ./certifications ./contributions --details
      </div>

      {groups.map((group, index) => (
        <section className="misc-group" key={group.title}>
          <div className="misc-group-heading">
            <h3>{group.title}</h3>
            <span>{String(group.items.length).padStart(2, '0')}</span>
          </div>

          <div className="projects-grid">
            {group.items.map((item) => (
              <article className="project-card" key={item.title}>
                <div className="project-content">
                  <div className="project-file-meta">
                    <span className="project-file-dot" />
                    <span>{index === 0 ? 'CERTIFICATE' : index === 1 ? 'RECOGNITION' : 'CONTRIBUTION'}</span>
                  </div>

                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-description">
                    {item.organisation}
                    {item.note && ` · ${item.note}`}
                  </p>

                  {item.tags?.length > 0 && (
                    <div className="project-tags">
                      {item.tags.map((tag) => (
                        <span className="project-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}

                  {item.link && (
                    <div className="project-links">
                      <a
                          className="project-link"
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="keyword">↗ {item.linkText || 'view credential'}</span>
                        </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  </section>
);

export default Miscellaneous;
