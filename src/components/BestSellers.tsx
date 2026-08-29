import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BEST_SELLERS } from '../constants';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const BestSellers = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const handleProductClick = (product: { href?: string; id?: string }) => {
    if (product.href) {
      navigate(product.href);
    } else if (product.id) {
      navigate(`/services/${product.id}`);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F6EDE0] py-20 px-4 overflow-hidden min-h-[85vh] flex flex-col justify-center">
      <div className="text-center mb-12 relative">
        <div className="inline-block relative">
          <h2 className="text-primary text-4xl m-0 font-serif font-medium leading-tight">
            <em className="italic">{t("Popular Demand", "લોકપ્રિય પૂજા તથા યજ્ઞ")}</em>
          </h2>
          
          {/* Stickers */}
          <div className="absolute -top-10 -right-16 w-32 hidden md:block z-10 text-6xl text-center select-none" aria-hidden="true">
            🪔
          </div>
          <div className="absolute -bottom-6 -right-14 w-10 z-10 text-3xl text-center select-none" aria-hidden="true">
            ✦
          </div>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto w-full flex items-center">
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-primary hover:scale-110 transition-transform"
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth w-full py-4"
        >
          {BEST_SELLERS.map((product, index) => (
            <div 
              key={product.id || index}
              onClick={() => handleProductClick(product)}
              className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#f8f5e9] overflow-hidden relative mb-4 animate-fadeIn">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product);
                  }}
                  className="absolute bottom-0 left-0 w-full bg-[#8b2915] text-white text-center py-2 text-[10px] uppercase tracking-[2px] font-normal translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#a1351d]"
                >
                  {t("View Details", "વિગતો જુઓ")}
                </button>
              </div>
              <h3 className="text-primary text-sm font-serif font-normal text-center mb-1 uppercase tracking-wide">
                {t(product.title)}
              </h3>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-primary hover:scale-110 transition-transform"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
