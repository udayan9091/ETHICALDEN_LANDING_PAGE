import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="addons" className="footer">
      <div className="footer-container">
        <div className="addons-section">
          <h2 className="section-title">ADD-ON SERVICES</h2>
          <div className="addons-grid">
            <div className="addon-item">
              <h4 className="addon-name">CONTENT WRITING</h4>
              <p className="addon-price">(₹3,500 FOR 5 PAGES)</p>
            </div>
            <div className="addon-item">
              <h4 className="addon-name">PHOTOGRAPHY & WALKTHROUGHS</h4>
            </div>
            <div className="addon-item">
              <h4 className="addon-name">GOOGLE REVIEWS SETUP & LOCAL LISTING</h4>
            </div>
            <div className="addon-item">
              <h4 className="addon-name">MOBILE APP FOR PARENTS/ PATIENTS</h4>
              <p className="addon-price">(QUOTE-BASED)</p>
            </div>
            <div className="addon-item">
              <h4 className="addon-name">EMAIL & NEWSLETTER AUTOMATION</h4>
            </div>
          </div>
        </div>
        
        <div className="offer-section">
          <h3 className="offer-title">LIMITED-TIME OFFER</h3>
          <p className="offer-text">
            20% OFF + 1 YEAR FREE HOSTING
            <br />
            AVAILABLE FOR THE FIRST 10 INSTITUTIONS THAT PARTNER WITH US THIS MONTH.
          </p>
        </div>
        
        <div className="faq-section">
          <h2 className="section-title">FAQ</h2>
          <p className="faq-subtitle">SOFT ANSWERS TO COMMON QUESTIONS</p>
          
          <div className="faq-item">
            <h4 className="faq-question">CAN WE EDIT THE WEBSITE OURSELVES?</h4>
            <p className="faq-answer">Yes, and we'll train your team gently.</p>
          </div>
          
          <div className="faq-item">
            <h4 className="faq-question">DO WE NEED TO PROVIDE EVERYTHING UPFRONT?</h4>
            <p className="faq-answer">—</p>
          </div>
          
          <div className="faq-item">
            <h4 className="faq-question">WILL IT LOOK GREAT ON PHONES?</h4>
            <p className="faq-answer">—</p>
          </div>
          
          <div className="faq-item">
            <h4 className="faq-question">WHAT IF WE'RE NOT VERY TECH-SAVVY?</h4>
            <p className="faq-answer">—</p>
          </div>
        </div>
        
        <div className="cta-section">
          <h2 className="cta-title">LET'S BEGIN, TOGETHER</h2>
          <p className="cta-text">
            We believe your digital presence should feel as thoughtful as your physical one.
            If you're ready to build something that reflects your care, values, and clarity — we're here
          </p>
          
          <div className="contact-info">
            <a href="mailto:hello@newtabtechlab.com" className="contact-email">hello@newtabtechlab.com</a>
            <p className="contact-location">Based in India | Serving Institutions Nationwide</p>
          </div>
          
          <div className="social-section">
            <h4 className="social-title">SOCIALS</h4>
            <a href="#" className="social-link">LINKEDIN ✖</a>
          </div>
        </div>
        
        <div className="footer-actions">
          <button className="footer-button">BOOK A FREE CONSULTATION</button>
          <button className="footer-button">DOWNLOAD BROCHURE</button>
          <button className="footer-button">CHAT WITH US</button>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2024 NEW TAB TECH LAB</p>
          <a href="#" className="footer-link">SITEMAP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;