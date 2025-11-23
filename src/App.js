import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MarketsPage from './pages/MarketsPage';
import ClientsPage from './pages/ClientsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'markets': return <MarketsPage />;
      case 'clients': return <ClientsPage />;
      case 'faq': return <FAQPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;