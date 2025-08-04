import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  const title = 'Echoform Lab';
  const description = t('hero.description');
  const [printedText, setPrintedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const totalDelay = title.length * 50 + 500;
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, totalDelay);

    return () => clearTimeout(timer);
  }, [title]);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setPrintedText(description.substring(0, index));

      if (index >= description.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [startTyping, description]);

  return (
    <section id="hero" className="hero">
      <img
        src="minimalist-black-and-white.jpg"
        alt="Hand touching glass"
        className="hero-hand"
      />
      <div className="hero-content">
        <h1 className="hero-title">
          {title.split('').map((char, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className="typing"
          style={{
            maxWidth: '600px',
            opacity: 0.8,
            minHeight: '3.5em',
            transition: 'min-height 0.3s ease',
          }}
        >
          {printedText}
        </p>
      </div>
    </section>
  );
}

export default Hero;
