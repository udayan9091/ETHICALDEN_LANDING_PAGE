import React from 'react';
import '../styles/Why.css';

const Why = () => {
  return (
    <section id="why" className="why">
      <div className="why-container">
        <h2 className="section-title">WHY INSTITUTIONS CHOOSE US</h2>
        
        <div className="why-intro">
          <p>
            At New Tab Tech Lab, we help educational and healthcare institutions build digital homes that feel warm, trustworthy, and professional — just like the care they provide in real life.
          </p>
        </div>
        
        <div className="why-grid">
          <div className="why-item">
            <div className="why-number">01</div>
            <h3 className="why-title">CALM, INTENTIONAL DESIGN</h3>
          </div>
          
          <div className="why-item">
            <div className="why-number">02</div>
            <h3 className="why-title">A DIGITAL PARTNER THAT GROWS WITH YOU</h3>
          </div>
          
          <div className="why-item">
            <div className="why-number">03</div>
            <h3 className="why-title">BUILT FOR INDIAN INSTITUTIONS, BIG AND SMALL</h3>
          </div>
          
          <div className="why-item">
            <div className="why-number">04</div>
            <h3 className="why-title">CLEAR, EASY-TO-USE SYSTEMS</h3>
          </div>
          
          <div className="why-item">
            <div className="why-number">05</div>
            <h3 className="why-title">SUPPORT THAT LISTENS, NOT JUST RESPOND</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;