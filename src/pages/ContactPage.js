import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('visible'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section visible" style={{ paddingTop: '140px' }}>
      <div className="section-header">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Let's discuss how we can accelerate your growth and bring your scientific innovations to market</p>
      </div>
      
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input 
              type="text" 
              name="name"
              className="form-input" 
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              name="email"
              className="form-input" 
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea 
              name="message"
              className="form-textarea" 
              placeholder="Tell us about your project, challenges, and goals..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="neon-button primary" style={{ width: '100%' }}>
            Send Message <Mail size={20} />
          </button>
        </form>

        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <Mail size={24} color="#ffffff" />
            </div>
            <div className="info-text">
              <h3>Email Us</h3>
              <p>contact@vantagelabsolutions.com</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon" style={{ background: 'linear-gradient(135deg, #F28C28 0%, #ff9f4a 100%)' }}>
              <MapPin size={24} color="#ffffff" />
            </div>
            <div className="info-text">
              <h3>Location</h3>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <Globe size={24} color="#ffffff" />
            </div>
            <div className="info-text">
              <h3>Global Reach</h3>
              <p>Serving clients worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;