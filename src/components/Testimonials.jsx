import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h3 className="section-subtitle">CUSTOMERS</h3>
          <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "New Tab didn't just make us a website. They made it easier for parents to reach us. Everything feels calmer now."
            </p>
            <div className="testimonial-author">
              <span className="author-name">– HEADMISTRESS, PINEWOODS ACADEMY</span>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The design, the forms, the way patients connect – it's made my practice more peaceful and organised."
            </p>
            <div className="testimonial-author">
              <span className="author-name">– DR. A. MEENAKSHI, GENERAL PRACTITIONER</span>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The design, the forms, the way patients connect – it's made my practice more peaceful and organised."
            </p>
            <div className="testimonial-author">
              <span className="author-name">– DR. A. MEENAKSHI, GENERAL PRACTITIONER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;