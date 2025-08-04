import React from 'react';
import './Advantages.css';

function Advantages() {
  const benefits = [
    'Minimalist design with bold storytelling',
    'Custom-built interfaces — no templates',
    'Design-led development process',
    'Interactive experiences that spark emotion',
    'Seamless blend of tech and aesthetics',
    'Responsive layouts for every device',
    'Scroll-triggered animations that engage',
    'Layered visual effects for depth',
    'Optimized deployment and performance',
  ];


  return (
    <section className="advantages-section">
      <div className="advantages-container">
        <h2 className="advantages-title">Why Choose Us</h2>
        <div className="advantages-grid">
          <div className="advantages-media">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHYwZjR2MzBrZ3psMnkyaWRpcWQxM3MxcDNvaWpkNGE3eGFydzhybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EYqKs5HDwUNFPnIUpN/giphy.gif"
              alt="Creative motion"
              className="advantages-gif"
            />
          </div>
          <ul className="advantages-list">
            {benefits.map((item, index) => (
              <li key={index} className="advantage-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
