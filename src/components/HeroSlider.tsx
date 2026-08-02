import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[83vh] min-h-[500px] w-full overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image or Video */}
          <div className="absolute inset-0">
            {HERO_SLIDES[current].image.match(/\.(mp4|webm|mov|ogv)$/i) ? (
              <video 
                src={HERO_SLIDES[current].image} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={HERO_SLIDES[current].image} 
                alt={HERO_SLIDES[current].heading} 
                className="w-full h-full object-cover"
              />
            )}
            {/* Subtle Overlay for better text legibility */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center px-6 md:px-15 lg:px-30">
            <div className="max-w-[900px]">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white text-4xl md:text-6xl lg:text-[70px] font-serif leading-[1.2] mb-8"
                dangerouslySetInnerHTML={{ __html: HERO_SLIDES[current].heading.replace(/Favourite Laddu|Festive|Timeless/g, '<em>$1</em>') }}
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white text-lg md:text-xl font-medium tracking-widest uppercase mb-10 max-w-2xl opacity-90"
              >
                {HERO_SLIDES[current].subtext}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link
                  to={HERO_SLIDES[current].href}
                  className="inline-block bg-secondary text-primary px-10 py-5 text-sm font-semibold tracking-widest transition-all hover:bg-[#a9c5b9]"
                >
                  {t(HERO_SLIDES[current].cta)}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 40" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 a20,20 0 0,0 40,0 L1440,0 L1440,40 L0,40 Z" fill="#F6EDE0" />
        </svg>
      </div>
    </section>
  );
};
