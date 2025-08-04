import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
      });
    });
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'uk' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <header className="header-light">
      <nav className="nav-container">
        <div className="logo">Echoform Lab</div>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hero">{t('nav.home')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#info">{t('nav.details')}</a>
          <a href="#stats">{t('nav.stats')}</a>
          <a href="#contact">{t('nav.contact')}</a>
          <a href="#testimonials">{t('nav.testimonials')}</a>
          <a href="#footer">{t('nav.footer')}</a>
          <div className="lang-switcher">
            <button onClick={toggleLanguage}>
              {currentLang === 'en' ? 'EN' : 'UA'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
