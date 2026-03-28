import { useEffect, useRef, useState } from 'react';

import { useAdaptiveExperience } from '@/providers/AdaptiveExperienceProvider';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { shouldReduceMotion } = useAdaptiveExperience();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (shouldReduceMotion) {
      setIsVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shouldReduceMotion, threshold]);

  return { ref, isVisible };
}
