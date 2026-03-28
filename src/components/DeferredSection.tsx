import { useEffect, useRef, useState, type ReactNode } from 'react';

import { useAdaptiveExperience } from '@/providers/AdaptiveExperienceProvider';

interface DeferredSectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

const DeferredSection = ({
  children,
  fallback = <div className="h-px" aria-hidden="true" />,
  rootMargin = '900px 0px',
}: DeferredSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const { deferredRootMargin } = useAdaptiveExperience();
  const effectiveRootMargin = rootMargin ?? deferredRootMargin;

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldRender) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: effectiveRootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [effectiveRootMargin, shouldRender]);

  return <div ref={ref}>{shouldRender ? children : fallback}</div>;
};

export default DeferredSection;
