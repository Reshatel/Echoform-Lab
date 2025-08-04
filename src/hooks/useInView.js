import { useEffect, useRef } from 'react';

export function useInView(delay = '0s') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty('--delay', delay);
    const obs = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-in');
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, [delay]);

  return ref;
}
