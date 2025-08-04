import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

function About() {
  const ref = useInView('0.2s');
  const { t } = useTranslation();

  return (
    <section id="about" ref={ref} className="about-section container fade-in">
      <h2 className="section-title">{t('about.title')}</h2>
      <div className="about-grid">
        <div className="about-text">
          <p className="section-text reveal">{t('about.paragraph1')}</p>
          <p className="section-text reveal">{t('about.paragraph2')}</p>
          <button className="btn glow-btn">{t('about.button')}</button>
        </div>
        <div className="about-media">
          <img
            className="media-gif"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGgxdjJhdzVvdThheTl3MDI3dmh3ejg5bnhkanpheWRzZm9ocmYxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YshQ4aB4QaHlnZtnN7/giphy.gif"
            alt="Creative motion"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
