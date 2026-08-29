import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const BlogSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="bg-[#f9f3e7] py-16 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center select-none">
      {/* Spotlight Header */}
      <div className="flex justify-center items-center gap-5 mb-10">
        <span aria-hidden="true" className="w-12 h-12 flex items-center justify-center text-[#C8922A] text-4xl leading-none select-none">
          ✦
        </span>
        <h2 className="text-[#8b2323] text-3xl md:text-5xl font-serif font-normal text-center leading-tight">
          {t("Shree Bada Jyotish in the", "શ્રી બડા જ્યોતિષ")} <em className="italic font-normal">{t("Spotlight", "વિશેષ જ્ઞાન")}</em>
        </h2>
        <span aria-hidden="true" className="w-12 h-12 flex items-center justify-center text-[#C8922A] text-4xl leading-none select-none">
          ✦
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto w-full group">
        {/* Left Arrow Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 lg:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_5px_rgba(0,0,0,0.2)] text-[#8b2323] hover:text-[#621919] transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed md:opacity-0 md:group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="stroke-[3]" />
        </button>

        {/* Carousel Tracks */}
        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto lg:overflow-x-hidden scroll-smooth w-full px-4 py-2 scrollbar-none"
        >
          {BLOG_POSTS.map((post, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] flex flex-col bg-transparent group/item"
            >
              <div className="relative w-full h-[280px] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105" 
                />
                {/* Read More Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <a 
                    href="/pages/about-us" 
                    className="bg-[#8b2323] hover:bg-[#621919] text-white py-3 px-6 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer"
                  >
                    {t("READ MORE", "વધુ વાંચો")}
                  </a>
                </div>
              </div>
              
              <div className="pt-5 flex flex-col bg-transparent flex-grow">
                <h3 className="text-[#333333] text-lg font-serif font-light mb-2.5 leading-snug group-hover/item:text-[#8b2323] transition-colors duration-300">
                  {t(post.title)}
                </h3>
                {('date' in post) && (
                  <div className="text-[#8B4513] text-sm font-sans text-left mb-2.5">
                    {t(post.date)}
                  </div>
                )}
                {('excerpt' in post) && (
                  <p className="text-[#666666] text-sm font-sans leading-relaxed flex-grow">
                    {t(post.excerpt)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 lg:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_5px_rgba(0,0,0,0.2)] text-[#8b2323] hover:text-[#621919] transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed md:opacity-0 md:group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="stroke-[3]" />
        </button>
      </div>
    </section>
  );
};
