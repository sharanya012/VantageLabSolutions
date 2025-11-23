import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const ClientsPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('visible'));
  }, []);

  return (
    <section className="section visible" style={{ paddingTop: '140px' }}>
      <div className="section-header">
        <span className="section-label">Our Partners</span>
        <h2 className="section-title">Clients & Collaborators</h2>
        <p className="section-subtitle">Strategic partnerships driving innovation across scientific markets and accelerating technology adoption</p>
      </div>
      
      <div className="client-grid">
        <div className="client-card">
          <div className="client-header">
            <div className="client-logo">LI</div>
            <h3 className="client-name">Lab Iconics</h3>
          </div>
          <p className="client-description">
            Lab Iconics is a comprehensive laboratory information management and quality systems provider, specializing in digital transformation for modern laboratories. They empower research institutions, pharmaceutical companies, and testing facilities with integrated solutions that streamline workflows, ensure compliance, and accelerate scientific discovery.
          </p>
          <div className="client-features">
            <span className="feature-tag">LIMS Solutions</span>
            <span className="feature-tag">ELN Platforms</span>
            <span className="feature-tag">QMS/DMS</span>
            <span className="feature-tag">Lab Automation</span>
            <span className="feature-tag">Data Integrity</span>
            <span className="feature-tag">Compliance</span>
          </div>
          <ul className="client-list">
            <li>Laboratory Information Management Systems (LIMS) with advanced workflow automation</li>
            <li>Electronic Lab Notebooks (ELN) for paperless research documentation</li>
            <li>Automated Data Backup Systems ensuring data security and disaster recovery</li>
            <li>Quality Management Systems (QMS) for ISO and regulatory compliance</li>
            <li>Document Management Systems (DMS) with version control and audit trails</li>
            <li>Turnkey lab setups including equipment calibration, validation, and system integration</li>
            <li>Training programs and ongoing technical support for seamless adoption</li>
          </ul>
          <a href="https://labiconics.com/" className="client-cta">
            Visit Website <ChevronRight size={18} />
          </a>
        </div>

        <div className="client-card">
          <div className="client-header">
            <div className="client-logo">GS</div>
            <h3 className="client-name">Green e-Step</h3>
          </div>
          <p className="client-description">
            Green e-Step is a next-generation business automation and AI-powered solutions provider, helping companies across industries streamline operations, enhance customer experiences, and drive sustainable growth. Their integrated platforms combine enterprise resource planning, customer relationship management, and cutting-edge artificial intelligence to transform business processes.
          </p>
          <div className="client-features">
            <span className="feature-tag">ERP/CRM/POS</span>
            <span className="feature-tag">AI Agents</span>
            <span className="feature-tag">Analytics</span>
            <span className="feature-tag">E-commerce</span>
            <span className="feature-tag">Automation</span>
            <span className="feature-tag">Integration</span>
          </div>
          <ul className="client-list">
            <li>Enterprise Resource Planning (ERP) systems for unified business management</li>
            <li>Customer Relationship Management (CRM) with AI-powered lead scoring and nurturing</li>
            <li>Point of Sale (POS) solutions integrated with inventory and accounting</li>
            <li>AI-powered business agents for customer support, sales automation, and process optimization</li>
            <li>Customer journey analytics providing actionable insights into buyer behavior</li>
            <li>E-commerce platform integrations with omnichannel fulfillment capabilities</li>
            <li>Custom workflow automation reducing manual tasks and improving efficiency</li>
          </ul>
          <a href="https://greenestep.com/" className="client-cta">
            Visit Website <ChevronRight size={18} />
          </a>
        </div>

        <div className="client-card">
          <div className="client-header">
            <div className="client-logo">MO</div>
            <h3 className="client-name">MetaOmics</h3>
          </div>
          <p className="client-description">
            MetaOmics is an advanced bioinformatics and multi-omics research platform, leveraging artificial intelligence and machine learning to unlock insights from complex biological data. They serve pharmaceutical companies, academic institutions, and precision medicine initiatives with integrated solutions that accelerate discovery, enable personalized treatments, and advance our understanding of human health.
          </p>
          <div className="client-features">
            <span className="feature-tag">Genomics</span>
            <span className="feature-tag">Proteomics</span>
            <span className="feature-tag">Metabolomics</span>
            <span className="feature-tag">AI Analytics</span>
            <span className="feature-tag">Multi-Omics</span>
            <span className="feature-tag">Precision Medicine</span>
          </div>
          <ul className="client-list">
            <li>Genomics and proteomics analysis platforms for comprehensive molecular profiling</li>
            <li>Metabolomics research tools identifying biomarkers and metabolic pathways</li>
            <li>AI-driven bioinformatics solutions for pattern recognition and predictive modeling</li>
            <li>Multi-omics data integration connecting genomic, proteomic, and metabolomic datasets</li>
            <li>Collaborative research environments enabling secure data sharing among institutions</li>
            <li>Precision medicine applications translating research insights into clinical decisions</li>
            <li>Drug discovery acceleration through target identification and validation</li>
          </ul>
          <a href="#" className="client-cta">
            Visit Website <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsPage;