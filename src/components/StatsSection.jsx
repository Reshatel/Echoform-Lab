import './StatsSection.css';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInViewTwo';
import { useCountUp } from '../hooks/useCountUp';

function StatsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  const skills = [
    { name: t('stats.skills.uiux'), percent: 90 },
    { name: t('stats.skills.frontend'), percent: 95 },
    { name: t('stats.skills.animations'), percent: 80 },
  ];

  const stats = [
    { label: t('stats.metrics.hours'), value: 120, suffix: '+' },
    { label: t('stats.metrics.concepts'), value: 35 },
    { label: t('stats.metrics.tech'), value: 10 },
  ];

  return (
    <section className="stats-section" ref={sectionRef} id="stats">
      <div className="stats-overlay">
        <div className="stats-container">
          <div className="text-container">
            <h2 className="stats-title">{t('stats.title')}</h2>
          </div>
          <p className="stats-subtitle">{t('stats.subtitle')}</p>

          <div className="skills">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: isVisible ? `${skill.percent}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => {
              const count = useCountUp(stat.value, isVisible);
              return (
                <div className="stat-item" key={index}>
                  <span className="stat-value">
                    {count}
                    {stat.suffix || ''}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
