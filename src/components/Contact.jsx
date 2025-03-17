
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title"><span className="keyword">const</span> <span className="variable">contact</span> <span className="operator">=</span> <span className="function">()</span> <span className="operator">=&gt;</span> {'{'}</h2>
        
        <div className="contact-form">
          <p className="comment">// Fill out the form below to get in touch with me</p>
          <br />
          
          {formStatus.submitted && (
            <div className={`message ${formStatus.success ? 'success' : 'error'}`}>
              <p>{formStatus.message}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
          
          <div style={{ marginTop: '40px' }}>
            <p>
              <span className="keyword">const</span> <span className="variable">directContact</span> = {'{'}
            </p>
            <p style={{ marginLeft: '20px' }}>
              <span className="string">"email"</span>: <a href="mailto:shanbhxg@gmail.com" className="string">"shanbhxg@gmail.com"</a>,
            </p>
            <p style={{ marginLeft: '20px' }}>
              <span className="string">"linkedin"</span>: <a href="https://in.linkedin.com/in/deeptishanbhag"className="string">"linkedin/deeptishanbhag"</a>,
            </p>
            <p style={{ marginLeft: '20px' }}>
              <span className="string">"github"</span>: <a href="https://github.com/shanbhxg/"className="string">"github.com/shanbhxg"</a>,
            </p>
            <p style={{ marginLeft: '20px' }}>
              <span className="string">"medium"</span>: <a href="https://medium.com/@shanbhxg"className="string">"medium.com/@shanbhxg"</a>,
            </p>
            <p>{'}'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
