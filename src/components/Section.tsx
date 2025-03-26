
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  animateDirection?: 'bottom' | 'left' | 'right' | 'fade';
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  animate = true,
  animateDirection = 'bottom'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate]);

  const getAnimationClass = () => {
    if (!animate) return '';
    
    switch (animateDirection) {
      case 'bottom':
        return 'reveal-bottom';
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'fade':
      default:
        return 'reveal-animation';
    }
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 px-6',
        getAnimationClass(),
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
