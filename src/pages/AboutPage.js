import React, { useEffect } from 'react';
import { Rocket, Award, Target, Leaf, Database, Users, Globe, Sparkles, TrendingUp, Shield } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('visible'));
  }, []);

  return (
    <section className="section visible" style={{ paddingTop: '140px' }}>
      <div className="section-header">
        <span className="section-label">About Us</span>
        <h2 className="section-title">Bridging Science & Market Success</h2>
        <p className="section-subtitle">A strategic partner for scientific innovation in laboratory, biotech, and life sciences industries</p>
      </div>
      
      <div className="about-content">
        <div className="about-row">
          <div className="about-graphic">
            <div className="about-icon-large">
              <Rocket size={56} color="#ffffff" />
            </div>
          </div>
          <div className="about-text-content">
            <h3>Our Mission & Vision</h3>
            <p>
              Vantage Lab Solutions is a forward-thinking marketing and business development firm specializing in the scientific, biotech, and laboratory industries. We act as the strategic marketing arm for companies innovating in laboratory instrumentation, life sciences, sustainability, and data-driven research.
            </p>
            <p>
              We bridge the gap between scientific innovation and market visibility through branding, sales enablement, event curation, and tailored outreach strategies. Our mission is to accelerate the adoption of breakthrough technologies by making them accessible, understandable, and compelling to the right audiences.
            </p>
          </div>
        </div>

        <div className="about-row">
          <div className="about-text-content">
            <h3>Deep Scientific Expertise</h3>
            <p>
              What sets us apart is our unique combination of scientific literacy and marketing prowess. Our team understands the technical complexity of your products, the regulatory landscape you navigate, and the challenges your customers face in their daily workflows.
            </p>
            <ul className="about-list">
              <li>
                <div className="about-list-icon">
                  <Database size={14} color="#ffffff" />
                </div>
                <span>15+ years combined experience in scientific marketing and lab technology</span>
              </li>
              <li>
                <div className="about-list-icon">
                  <Users size={14} color="#ffffff" />
                </div>
                <span>Deep relationships across pharma, biotech, academic, and industrial sectors</span>
              </li>
              <li>
                <div className="about-list-icon">
                  <Award size={14} color="#ffffff" />
                </div>
                <span>Track record of successful product launches and market expansion campaigns</span>
              </li>
              <li>
                <div className="about-list-icon">
                  <Globe size={14} color="#ffffff" />
                </div>
                <span>Global perspective with local market expertise across key scientific hubs</span>
              </li>
            </ul>
          </div>
          <div className="about-graphic">
            <div className="about-icon-large">
              <Award size={56} color="#ffffff" />
            </div>
          </div>
        </div>

        <div className="about-row">
          <div className="about-graphic">
            <div className="about-icon-large">
              <Target size={56} color="#ffffff" />
            </div>
          </div>
          <div className="about-text-content">
            <h3>Our Strategic Approach</h3>
            <p>
              We don't believe in one-size-fits-all marketing. Every scientific company has unique challenges, from niche technical audiences to long sales cycles and complex buying committees. Our approach is consultative, data-driven, and tailored to your specific market dynamics.
            </p>
            <p>
              We start by deeply understanding your technology, your competitive landscape, and your customer's pain points. Then we develop integrated strategies that combine brand positioning, content marketing, thought leadership, digital campaigns, and event activation to build awareness, credibility, and ultimately, pipeline.
            </p>
          </div>
        </div>

        <div className="about-row">
          <div className="about-text-content">
            <h3>Partnership Philosophy</h3>
            <p>
              We view ourselves as an extension of your team—your outsourced marketing department. Whether you're a startup launching your first product or an established player entering new markets, we bring the strategic thinking, creative execution, and industry connections you need to succeed.
            </p>
            <ul className="about-list">
              <li>
                <div className="about-list-icon">
                  <Sparkles size={14} color="#ffffff" />
                </div>
                <span>Collaborative partnership model with transparent communication</span>
              </li>
              <li>
                <div className="about-list-icon">
                  <TrendingUp size={14} color="#ffffff" />
                </div>
                <span>Performance-focused with clear KPIs and measurable outcomes</span>
              </li>
              <li>
                <div className="about-list-icon">
                  <Leaf size={14} color="#ffffff" />
                </div>
                <span>Long-term strategic thinking balanced with tactical execution</span>
              </li>
              <li>
                <div className="about-list-icon">
                  <Shield size={14} color="#ffffff" />
                </div>
                <span>Commitment to scientific integrity and ethical marketing practices</span>
              </li>
            </ul>
          </div>
          <div className="about-graphic">
            <div className="about-icon-large">
              <Leaf size={56} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;