import React from 'react';
import About from './About';
import Contact from './Contact';
import './AboutContactSection.css';

function AboutContactSection() {
  return (
    <section className="about-contact-wrapper">
      <div className="about-contact-inner">
        <About />
        <div className="divider" />
        <Contact />
      </div>
    </section>
  );
}

export default AboutContactSection;
