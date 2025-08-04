import { useEffect, useState } from 'react';

export function useInView(ref, threshold = 0.2) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); 
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
}
