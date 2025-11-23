import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('visible'));
  }, []);

  const faqs = [
    {
      question: "What does Vantage Lab Solutions do?",
      answer: "We are a specialized marketing and business development firm focused on the scientific, biotech, and laboratory industries. We help innovative companies build their brands, reach their target markets, and accelerate growth through strategic marketing, sales enablement, event curation, and tailored outreach strategies. Think of us as your outsourced marketing department with deep scientific expertise."
    },
    {
      question: "Are you a distributor or manufacturer?",
      answer: "Neither. We are a marketing agency that acts as the strategic marketing arm for scientific companies. We don't sell products directly or manufacture equipment. Instead, we help our clients market their innovations effectively, connect with the right audiences, build strong market presence, and ultimately drive demand for their products and services."
    },
    {
      question: "How do you select partners?",
      answer: "We partner with companies that demonstrate genuine innovation in the scientific space. We look for organizations with strong technical foundations, commitment to quality, and products or services that address real market needs. Our partnerships are built on shared values, mutual growth objectives, and a commitment to advancing scientific progress. We conduct thorough due diligence to ensure alignment with our expertise and the value we can deliver."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We have extensive experience helping early-stage biotech and lab-tech companies establish their market presence. From brand development to go-to-market strategy, investor presentation support to customer acquisition programs, we provide the marketing infrastructure that startups need to compete with established players. We understand the unique challenges of limited budgets, tight timelines, and the need to prove market traction quickly."
    },
    {
      question: "How do I contact you?",
      answer: "You can reach us via email at contact@vantagelabsolutions.com or through our contact form on this website. We typically respond within 24 hours and are always excited to discuss new opportunities and partnerships. Whether you're looking for a comprehensive marketing partnership or have questions about specific services, we're here to help you succeed."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section visible" style={{ paddingTop: '140px' }}>
      <div className="section-header">
        <span className="section-label">FAQ</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about working with us and how we can accelerate your growth</p>
      </div>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <ChevronDown size={24} style={{ 
                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease'
              }} />
            </div>
            <div className="faq-answer">
              <div className="faq-answer-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;