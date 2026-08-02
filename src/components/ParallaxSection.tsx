import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  image: string;
}

export const ParallaxSection = ({ image }: ParallaxSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !backgroundRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const viewportMiddle = windowHeight / 2;
      const sectionMiddle = rect.top + (rect.height / 2);
      
      // Parallax intensity
      const parallaxValue = (sectionMiddle - viewportMiddle) * 0.15;
      
      backgroundRef.current.style.transform = `translateY(${parallaxValue}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[170vh] -mt-[85vh] -mb-[42.5vh] overflow-hidden z-[-1]">
      <div 
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
};
