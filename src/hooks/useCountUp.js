import { useEffect, useState } from 'react';

export function useCountUp(target, isActive, duration = 2500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const increment = target / (duration / 16); 
    const step = () => {
      start += increment;
      if (start < target) {
        setValue(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    requestAnimationFrame(step);
  }, [isActive, target, duration]);

  return value;
}
