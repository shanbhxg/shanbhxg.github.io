import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

    
  
const handleSubmit = (event) => {
  event.preventDefault();

  const { name, email, subject, message } = formData;

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:shanbhxg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  let pageHidden = false;

  const handleVisibilityChange = () => {
    if (document.hidden) pageHidden = true;
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  window.location.href = mailto;

  setTimeout(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);

    if (!pageHidden) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Could not open your email app. Please email shanbhxg@gmail.com directly.',
      });
    }
  }, 1500);
};



  const directLinks = [
    { label: 'email', value: 'shanbhxg@gmail.com', href: 'mailto:shanbhxg@gmail.com' },
    { label: 'linkedin', value: 'linkedin/deeptishanbhag', href: 'https://in.linkedin.com/in/deeptishanbhag' },
    { label: 'github', value: 'github.com/shanbhxg', href: 'https://github.com/shanbhxg/' },
    { label: 'medium', value: 'medium.com/@shanbhxg', href: 'https://medium.com/@shanbhxg' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="file-heading">
          <div>
            <div className="file-path">src <span>/</span> config <span>/</span> contact.json</div>
            <h2 className="file-title">Contact</h2>
          </div>
        </div>

        <p className="section-intro">Have a project, opportunity, or question? Send a message or use one of the links below.</p>
        <div className="contact-layout">
          <div className="contact-form-panel">
            <div className="panel-titlebar"><span className="panel-led" /><span>new-message.txt</span><span className="panel-titlebar-meta">PLAIN TEXT</span></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.submitted && <div className={`message ${formStatus.success ? 'success' : 'error'}`} role="status">{formStatus.message}</div>}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" name="subject" className="form-control" value={formData.subject} onChange={handleChange} required placeholder="What is this about?" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange} required placeholder="Write your message..." />
              </div>
              <button type="submit" className="btn btn-primary">Send message <span aria-hidden="true">↗</span></button>
            </form>
          </div>

          <aside className="direct-contact-panel">
            <div className="panel-titlebar"><span className="panel-led panel-led-green" /><span>contact-links.json</span><span className="panel-titlebar-meta">JSON</span></div>
            <div className="contact-link-list">
              {directLinks.map((link, index) => (
                <a key={link.label} href={link.href} className="contact-link-row" target={link.label === 'email' ? undefined : '_blank'} rel={link.label === 'email' ? undefined : 'noopener noreferrer'}>
                  <span className="contact-link-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="contact-link-key">"{link.label}"</span>
                  <span className="contact-link-value">{link.value}</span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <p className="contact-aside-note"><span className="comment">// most reliably reachable via email!</span></p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
