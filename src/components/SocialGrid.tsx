import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { SOCIAL_IMAGES } from '../constants';

export const SocialGrid = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary text-secondary py-16 md:py-24 overflow-hidden h-auto lg:h-[85vh] flex flex-col justify-center">
      <div className="max-w-[1600px] mx-auto w-full px-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="relative flex items-center md:ml-[5%]">
            <h2 className="text-3xl md:text-4xl lg:text-[45px] font-serif leading-tight text-center md:text-left">
              Follow Us for<br className="hidden md:block" /> More Spiritual Wisdom
            </h2>
            <span
              aria-hidden="true"
              className="absolute -right-20 -top-4 h-24 hidden lg:flex items-center justify-center text-[#C8922A] text-7xl leading-none opacity-80 select-none"
            >
              ॐ
            </span>
          </div>

          <div className="flex gap-4 md:mr-[5%]">
            <a href="https://www.instagram.com/riteshnpandya/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/riteshnpandya" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Slider */}
        <div className="relative flex items-center group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center bg-primary text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={28} />
          </button>

          <div 
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scroll-smooth w-full px-[5%] snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {SOCIAL_IMAGES.map((img, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[280px] md:w-[calc(33.333%-14px)] aspect-square overflow-hidden snap-start rounded-sm border border-secondary/20 bg-secondary/10"
              >
                <img 
                  src={img} 
                  alt={`Spiritual Wisdom ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center bg-primary text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};
