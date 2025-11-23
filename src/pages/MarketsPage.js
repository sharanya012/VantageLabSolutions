import React, { useState, useEffect } from 'react';
import { FlaskConical, Microscope, Shield, Leaf, Target, Zap, Plus, Minus } from 'lucide-react';

const MarketsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('visible'));
  }, []);

  const markets = [
    {
      icon: <FlaskConical size={32} color="#005b96" />,
      title: "Pharmaceutical & Biotech Companies",
      subtitle: "Drug Discovery to Manufacturing Excellence",
      description: "The pharmaceutical and biotechnology sector demands precision, compliance, and innovation at every stage. We support companies throughout the drug development lifecycle with marketing strategies that communicate technical sophistication while building trust with regulatory bodies, investors, and clinical partners.",
      features: [
        "Analytical instrumentation for drug characterization and quality control",
        "LIMS and ELN systems for GMP/GLP-compliant data management",
        "Process automation solutions for biomanufacturing scale-up",
        "Quality management systems ensuring regulatory compliance",
        "Cold chain logistics and sample management technologies"
      ],
      applications: "From early-stage discovery research to large-scale commercial manufacturing, we help you position solutions that accelerate timelines, ensure quality, and meet stringent regulatory requirements."
    },
    {
      icon: <Microscope size={32} color="#F28C28" />,
      title: "Academic Research Institutions",
      subtitle: "Advancing Scientific Discovery",
      description: "Universities and research institutions are the engines of scientific advancement, pushing the boundaries of knowledge across disciplines. We understand the unique challenges of marketing to academic audiences—limited budgets, grant-driven purchasing, and the importance of peer validation and published research.",
      features: [
        "Multi-omics platforms for genomics, proteomics, and metabolomics research",
        "High-resolution microscopy and imaging systems",
        "Spectroscopy and chromatography instrumentation",
        "Collaborative research management software",
        "Data analysis and visualization tools for publication-ready results"
      ],
      applications: "We help vendors engage with principal investigators, core facility managers, and procurement offices through scientific credibility, educational content, and demonstration of research impact."
    },
    {
      icon: <Shield size={32} color="#005b96" />,
      title: "Clinical & Diagnostic Laboratories",
      subtitle: "Precision Medicine & Patient Care",
      description: "Clinical and diagnostic labs operate at the intersection of healthcare and technology, where accuracy, speed, and reliability are paramount. These environments require solutions that integrate seamlessly into existing workflows while meeting CLIA, CAP, and other accreditation standards.",
      features: [
        "Automated diagnostic platforms for high-throughput testing",
        "Molecular diagnostics and next-generation sequencing systems",
        "Laboratory information systems with EMR/EHR integration",
        "Quality control and proficiency testing solutions",
        "Point-of-care testing devices for rapid diagnostics"
      ],
      applications: "Our marketing strategies emphasize clinical validation, regulatory compliance, operational efficiency, and ultimately, improved patient outcomes that resonate with lab directors and hospital administrators."
    },
    {
      icon: <Leaf size={32} color="#F28C28" />,
      title: "Environmental & Food Testing Labs",
      subtitle: "Safety, Sustainability & Compliance",
      description: "Environmental and food testing laboratories play a critical role in protecting public health and ensuring sustainability. These labs require robust, reliable instrumentation capable of detecting contaminants at trace levels while maintaining compliance with EPA, FDA, and international standards.",
      features: [
        "Mass spectrometry and chromatography for contaminant detection",
        "Water quality monitoring and analysis systems",
        "Soil and air quality testing instrumentation",
        "Food safety pathogen detection and allergen testing",
        "Environmental data management and regulatory reporting tools"
      ],
      applications: "We position solutions that address regulatory pressure, public health concerns, and the growing demand for transparency in food supply chains and environmental monitoring."
    },
    {
      icon: <Target size={32} color="#005b96" />,
      title: "Industrial & Quality Control Labs",
      subtitle: "Manufacturing Excellence & Product Integrity",
      description: "Industrial QC labs ensure product consistency, safety, and compliance across manufacturing operations. Whether in chemicals, materials, consumer goods, or electronics, these labs require reliable instrumentation and efficient workflows to maintain production schedules while meeting quality standards.",
      features: [
        "Material characterization and testing equipment",
        "Process analytical technology (PAT) for real-time monitoring",
        "Quality management systems integrated with manufacturing execution",
        "Calibration and validation services ensuring measurement accuracy",
        "Failure analysis and root cause investigation tools"
      ],
      applications: "Our marketing approach emphasizes ROI, operational efficiency, reduced downtime, and the business case for quality—speaking the language of plant managers and quality directors."
    },
    {
      icon: <Zap size={32} color="#F28C28" />,
      title: "Agri-Biotech & Sustainable Sciences",
      subtitle: "Feeding the Future Sustainably",
      description: "Agricultural biotechnology and sustainable science companies are addressing global challenges—food security, climate change, and resource scarcity. These organizations require marketing strategies that communicate scientific innovation while navigating public perception, regulatory complexity, and diverse stakeholder interests.",
      features: [
        "Genomics and gene editing technologies for crop improvement",
        "Precision agriculture sensors and data analytics platforms",
        "Biomanufacturing systems for sustainable materials and biofuels",
        "Soil microbiome analysis and biologicals for sustainable farming",
        "Carbon capture and environmental remediation technologies"
      ],
      applications: "We help position breakthrough technologies by building narratives around sustainability, global impact, and the science-backed solutions needed to address 21st-century agricultural and environmental challenges."
    }
  ];

  const toggleMarket = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section visible" style={{ paddingTop: '140px' }}>
      <div className="section-header">
        <span className="section-label">Markets</span>
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">Specialized expertise across the entire scientific and laboratory ecosystem</p>
      </div>
      
      <div className="market-list">
        {markets.map((market, index) => (
          <div key={index} className={`market-item ${expandedIndex === index ? 'expanded' : ''}`}>
            <div className="market-header" onClick={() => toggleMarket(index)}>
              <div className="market-number">0{index + 1}</div>
              <div className="market-icon-container">
                {market.icon}
              </div>
              <div className="market-title-section">
                <h3 className="market-title">{market.title}</h3>
                <p className="market-subtitle">{market.subtitle}</p>
              </div>
              <div className="market-toggle">
                {expandedIndex === index ? <Minus size={20} color="#005b96" /> : <Plus size={20} color="#005b96" />}
              </div>
            </div>
            <div className="market-content">
              <div className="market-details">
                <p className="market-description">{market.description}</p>
                <div className="market-features">
                  {market.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-bullet"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="market-applications">
                  <h4 className="applications-title">Market Applications</h4>
                  <p className="applications-text">{market.applications}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketsPage;