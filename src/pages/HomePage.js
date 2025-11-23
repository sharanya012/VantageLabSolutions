import React, { useEffect } from 'react';
import { FlaskConical, Database, Leaf, TrendingUp, Sparkles, Target, Users, Globe, Rocket, ChevronRight } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Accelerating Innovation in Scientific & Biotech Markets</h1>
            <p>We bridge the gap between scientific innovation and market visibility through strategic marketing, branding, and business development tailored for the laboratory and life sciences ecosystem.</p>
            <div className="hero-buttons">
              <button className="neon-button primary" onClick={() => onNavigate('about')}>
                Explore Services <Rocket size={20} />
              </button>
              <button className="neon-button secondary" onClick={() => onNavigate('contact')}>
                Contact Us <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-icon">
                <FlaskConical size={24} color="#ffffff" />
              </div>
              <div className="card-title">Lab Innovation</div>
              <div className="card-text">Cutting-edge laboratory instrumentation solutions</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">
                <Database size={24} color="#ffffff" />
              </div>
              <div className="card-title">Data-Driven</div>
              <div className="card-text">Analytics and research intelligence platforms</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">
                <Leaf size={24} color="#ffffff" />
              </div>
              <div className="card-title">Sustainability</div>
              <div className="card-text">Eco-friendly biotech and green solutions</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">
                <TrendingUp size={24} color="#ffffff" />
              </div>
              <div className="card-title">Market Growth</div>
              <div className="card-text">Strategic expansion and visibility</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Strategic Marketing Excellence</h2>
          <p className="section-subtitle">Comprehensive solutions designed specifically for scientific companies navigating complex B2B markets</p>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-icon">
              <Sparkles size={36} color="#005b96" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Brand Development & Positioning</h3>
              <p className="timeline-text">
                We craft compelling brand identities that resonate with scientific audiences, from naming and visual identity to messaging frameworks that establish your authority in the market. Our approach combines technical credibility with emotional resonance, ensuring your brand speaks authentically to researchers, lab managers, and procurement decision-makers.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <Target size={36} color="#F28C28" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Sales Enablement & Training</h3>
              <p className="timeline-text">
                Empower your sales teams with sophisticated tools, training programs, and strategies designed for complex B2B scientific sales cycles. We develop product collateral, competitive battlecards, demo frameworks, and objection handling guides that help your team navigate technical conversations and close deals with confidence.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <Users size={36} color="#005b96" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Event Curation & Industry Presence</h3>
              <p className="timeline-text">
                From conference strategy to booth design, speaker programs to networking events, we help you make meaningful connections in the scientific community. Our event expertise spans trade shows, symposiums, webinars, and virtual conferences, ensuring your brand is visible where it matters most.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <Globe size={36} color="#F28C28" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Market Research & Competitive Intelligence</h3>
              <p className="timeline-text">
                Make informed strategic decisions backed by deep market analysis, customer insights, and competitive intelligence. We conduct primary research with target audiences, analyze market trends, map competitive landscapes, and identify whitespace opportunities to guide your go-to-market strategy and product roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
    </>
  );
};

export default HomePage;