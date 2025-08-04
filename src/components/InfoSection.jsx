import './InfoSection.css';
import { useTranslation } from 'react-i18next';

function InfoSection() {
  const { t } = useTranslation();

  return (
    <section className="info-section" id="info">
      <div className="info-background"></div>
      <div className="container">
        <h2 className="section-title-det">{t('info.title')}</h2>
        <p className="section-text">{t('info.paragraph')}</p>

        <div className="horizontal-accordion">
          <div className="accordion-panel" style={{ backgroundImage: "url('img1.jpg')" }}>
            <div className="panel-label">{t('info.accordion.idea.label')}</div>
            <div className="panel-content">
              <p>{t('info.accordion.idea.text')}</p>
            </div>
          </div>
          <div className="accordion-panel" style={{ backgroundImage: "url('img2.jpg')" }}>
            <div className="panel-label">{t('info.accordion.motion.label')}</div>
            <div className="panel-content">
              <p>{t('info.accordion.motion.text')}</p>
            </div>
          </div>
          <div className="accordion-panel" style={{ backgroundImage: "url('img3.jpg')" }}>
            <div className="panel-label">{t('info.accordion.contrast.label')}</div>
            <div className="panel-content">
              <p>{t('info.accordion.contrast.text')}</p>
            </div>
          </div>
          <div className="accordion-panel" style={{ backgroundImage: "url('img4.jpg')" }}>
            <div className="panel-label">{t('info.accordion.responsive.label')}</div>
            <div className="panel-content">
              <p>{t('info.accordion.responsive.text')}</p>
            </div>
          </div>
          <div className="accordion-panel" style={{ backgroundImage: "url('img5.jpg')" }}>
            <div className="panel-label">{t('info.accordion.speed.label')}</div>
            <div className="panel-content">
              <p>{t('info.accordion.speed.text')}</p>
            </div>
          </div>
          <div className="accordion-panel" style={{ backgroundImage: "url('img6.jpg')" }}>
            <div className="panel-label">{t('info.accordion.future.label')}</div>
            <div className="panel-content">
              <p>{t('info.accordion.future.text')}</p>
            </div>
          </div>
        </div>

        <div className="cta-block">
          <h3 className="cta-title">{t('info.cta.title')}</h3>
          <p className="cta-text">{t('info.cta.text')}</p>
          <a href="#contact" className="cta-button">{t('info.cta.button')}</a>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
