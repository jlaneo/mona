
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  threshold = 0.1,
  triggerOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            if (triggerOnce && currentRef) { // Check currentRef again before unobserving
              observer.unobserve(currentRef);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) { // Check currentRef before unobserving in cleanup
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, triggerOnce]);

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 sm:translate-y-0' : 'opacity-0 translate-y-8 sm:translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
