import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Vantage Lab Solutions</h3>
          <p>Accelerating innovation in scientific and biotech markets through strategic marketing and business development.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a onClick={() => onNavigate('home')}>Home</a></li>
            <li><a onClick={() => onNavigate('about')}>About Us</a></li>
            <li><a onClick={() => onNavigate('markets')}>Markets</a></li>
            <li><a onClick={() => onNavigate('clients')}>Clients</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a>Branding Strategy</a></li>
            <li><a>Sales Enablement</a></li>
            <li><a>Event Curation</a></li>
            <li><a>Market Research</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="footer-links">
            <li><a>contact@vantagelabsolutions.com</a></li>
            <li><a onClick={() => onNavigate('contact')}>Get in Touch</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Vantage Lab Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;