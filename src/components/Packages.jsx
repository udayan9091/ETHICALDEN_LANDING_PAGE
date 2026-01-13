import React from 'react';
import '../styles/Packages.css';

const Packages = () => {
  return (
    <section id="packages" className="packages">
      <div className="packages-container">
        <h2 className="section-title">WEBSITE PACKAGES</h2>
        
        <div className="packages-intro">
          <p>
            At New Tab Tech Lab, we help educational and healthcare institutions build digital homes that feel warm, trustworthy, and professional — just like the care they provide in real life.
          </p>
        </div>
        
        <div className="package-category">
          <h3 className="category-title">EDUCATION WEBSITE PACKAGES</h3>
          <div className="package-grid">
            <div className="package-card">
              <h4 className="package-name">EDUSTART PRESENCE</h4>
              <p className="package-subtitle">For schools beginning their digital journey</p>
              <div className="package-price">₹28,000 + GST</div>
              <ul className="package-features">
                <li>Clean, mobile-friendly 5-page website</li>
                <li>Inquiry form + Google Maps</li>
                <li>Notecard & WhatsApp contact</li>
                <li>Social media links</li>
                <li>1-month generic tech support</li>
              </ul>
              <button className="package-cta">LET'S START OUR PROJECT →</button>
            </div>
            
            <div className="package-card featured">
              <h4 className="package-name">EDUSTART PRESENCE</h4>
              <p className="package-subtitle">For schools beginning their digital journey</p>
              <div className="package-price">₹65,000 + GST</div>
              <ul className="package-features">
                <li>10+ pages with a branded layout</li>
                <li>Online admission form & fee gateway</li>
                <li>Blog for updates and articles</li>
                <li>Admin portal for easy edits</li>
                <li>Hosting & domain for 1 year</li>
                <li>Friendly onboarding + 3-month support</li>
              </ul>
              <button className="package-cta">LET'S START OUR PROJECT →</button>
            </div>
          </div>
        </div>
        
        <div className="package-category">
          <h3 className="category-title">HEALTHCARE WEBSITE PACKAGES</h3>
          <div className="package-grid">
            <div className="package-card">
              <h4 className="package-name">MEDILITE PRESENCE</h4>
              <p className="package-subtitle">For solo doctors, clinics, and diagnostic centers</p>
              <div className="package-price">₹30,000 + GST</div>
              <ul className="package-features">
                <li>5 pages with service details, timings & contact</li>
                <li>Inquiry form with WhatsApp connection</li>
                <li>Google Business integration</li>
                <li>Mobile-first design with warm layout</li>
                <li>Post-hearing guidance for 1 month</li>
              </ul>
              <button className="package-cta">LET'S START OUR PROJECT →</button>
            </div>
            
            <div className="package-card featured">
              <h4 className="package-name">MEDIPRO ADVANTAGE</h4>
              <p className="package-subtitle">For schools beginning their digital journey</p>
              <div className="package-price">₹70,000 + GST</div>
              <ul className="package-features">
                <li>101 pages including doctor profiles & departments</li>
                <li>Appointment booking form + emergency quick connect</li>
                <li>Payment gateway for OPDs/ labs services</li>
                <li>Blog & wellness articles</li>
                <li>1-year hosting + 3-month support</li>
                <li>Built-in analytics & SEO</li>
              </ul>
              <button className="package-cta">LET'S START OUR PROJECT →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;