import './TestimonialsBlock.css';
import { useTranslation } from 'react-i18next';

function TestimonialsBlock() {
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', { returnObjects: true });

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">{t('testimonials.title')}</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsBlock;
