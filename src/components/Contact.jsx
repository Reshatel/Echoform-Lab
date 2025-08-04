import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const ref = useInView('0.4s');

  return (
    <section id="contact" className="contact-block" ref={ref}>
      <div className="contact-content">
        <h2 className="section-title light">{t('contact.title')}</h2>
        <p className="section-text dark">{t('contact.paragraph')}</p>
        <a href="" className="btn glow-btn light-btn">
          {t('contact.button')}
        </a>

        <p className="small-note">{t('contact.note')}</p>

        <div className="social-icons bright">
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://t.me/yourusername" target="_blank" aria-label="Telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
