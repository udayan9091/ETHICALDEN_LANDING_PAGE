import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-tagline">
          <span className="tagline-text">CRAFTING CALM, CONFIDENT DIGITAL SPACES FOR INSTITUTIONS THAT CARE</span>
        </div>
        
        <h1 className="hero-heading">
          BECAUSE YOUR INSTITUTION DESERVES TO FEEL SEEN, TRUSTED & UNDERSTOOD
        </h1>
        
        <div className="hero-bullets">
          <div className="bullet-item">
            <span className="bullet-dash">—</span>
            <p>Your website isn't just a digital address — it's a quiet assurance.</p>
          </div>
          <div className="bullet-item">
            <span className="bullet-dash">—</span>
            <p>A calm welcome to a parent. A clear next step for a patient.</p>
          </div>
          <div className="bullet-item">
            <span className="bullet-dash">—</span>
            <p>A place where your values live and your story is gently told.</p>
          </div>
        </div>
        
        <div className="hero-intro">
          <p>
            At New Tab Tech Lab, we help educational and healthcare institutions build digital homes that feel warm, trustworthy, and professional — just like the care they provide in real life.
          </p>
        </div>
        
        <div className="hero-grid">
          <div className="grid-item">
            <h3 className="grid-title">FIRST IMPRESSIONS ARE OFTEN DIGITAL</h3>
            <p className="grid-text">
              Before anyone visits your school or clinic, they visit your website. A clear, thoughtful design builds confidence and belonging — even before you speak
            </p>
          </div>
          <div className="grid-item">
            <h3 className="grid-title">GOOD DESIGN REDUCES CONFUSION</h3>
            <p className="grid-text">
              In healthcare and education, clarity brings peace. We design sites that feel calm, organized, and accessible — no noise, just ease.
            </p>
          </div>
          <div className="grid-item">
            <h3 className="grid-title">IT'S ALWAYS OPEN, EVEN WHEN YOU'RE NOT</h3>
            <p className="grid-text">
              A website is your 24/7 receptionist. It guides admissions, answers questions, confirms appointments, and shows who you are — even after hours.
            </p>
          </div>
          <div className="grid-item">
            <h3 className="grid-title">YOUR STORY DESERVES A PLACE TO SHINE</h3>
            <p className="grid-text">
              Whether you've been serving for 2 years or 20, your work deserves to be represented with dignity. A good website tells your story beautifully and simply.
            </p>
          </div>
          <div className="grid-item">
            <h3 className="grid-title">PEOPLE LIVE ON THEIR PHONES</h3>
            <p className="grid-text">
              Parents searching for schools or patients finding a clinic do so on mobile. A fast, intuitive mobile site isn't a luxury — it's a necessity.
            </p>
          </div>
        </div>
        
        <button className="hero-cta">LET'S START OUR PROJECT →</button>
      </div>
    </section>
  );
};

export default Hero;