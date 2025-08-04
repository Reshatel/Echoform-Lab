import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-col brand">
          <h3>Echoform Lab</h3>
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.navigation')}</h4>
          <ul>
            <li><a href="#hero">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#info">{t('nav.details')}</a></li>
            <li><a href="#stats">{t('nav.stats')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
            <li><a href="#testimonials">{t('nav.testimonials')}</a></li>
            <li><a href="#footer">{t('nav.footer')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.contact')}</h4>
          <ul>
            <li><a href="mailto:hello@monochrome.dev">{t('footer.email')}</a></li>
            <li><a href="tel:+38012345678" target="_blank" rel="noopener noreferrer">{t('footer.phone')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.follow')}</h4>
          <div className="footer-social-icons">
            <a href="https://github.com" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://t.me/yourusername" target="_blank" aria-label="Telegram" rel="noopener noreferrer">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
        <p className="credit">{t('footer.credit')}</p>
      </div>
    </footer>
  );
}

export default Footer;
