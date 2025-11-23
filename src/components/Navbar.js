import React, { useState } from 'react';
import logo from '../images/logo.png';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Vantage Lab Solutions" className="logo-image" />
        <div className="logo">Vantage Lab Solutions</div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a className={currentPage === 'home' ? 'active' : ''} onClick={() => handleNavigate('home')}>Home</a></li>
        <li><a className={currentPage === 'about' ? 'active' : ''} onClick={() => handleNavigate('about')}>About</a></li>
        <li><a className={currentPage === 'markets' ? 'active' : ''} onClick={() => handleNavigate('markets')}>Markets</a></li>
        <li><a className={currentPage === 'clients' ? 'active' : ''} onClick={() => handleNavigate('clients')}>Clients</a></li>
        <li><a className={currentPage === 'faq' ? 'active' : ''} onClick={() => handleNavigate('faq')}>FAQ</a></li>
        <li><a className={currentPage === 'contact' ? 'active' : ''} onClick={() => handleNavigate('contact')}>Contact</a></li>
      </ul>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;