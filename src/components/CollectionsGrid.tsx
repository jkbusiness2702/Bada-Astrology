import React from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const GUJ_TO_ENG_COLLECTIONS: Record<string, string> = {
  "નવચંડી યજ્ઞ": "Navchandi Yagna",
  "શતચંડી મહાયજ્ઞ": "Shatchandi Mahayagna",
  "રુદ્રાભિષેક તથા મહામૃત્યુંજય યજ્ઞ": "Rudrabhishek & Mahamrityunjaya Yagna",
  "મહામૃત્યુંજય યજ્ઞ": "Mahamrityunjaya Yagna",
  "લક્ષ્મી કુબેર યજ્ઞ": "Laxmi Kuber Yagna",
  "ગણપતિ યજ્ઞ": "Ganapati Yagna",
  "વાસ્તુ શાંતિ યજ્ઞ": "Vastu Shanti Yagna",
  "ગૃહ પ્રવેશ હવન": "Gruh Pravesh Havan",
  "વિવાહ યજ્ઞ": "Vivah Yagna",
  "સત્યનારાયણ કથા તથા હવન": "Satyanarayan Katha & Havan",
  "પિતૃ દોષ નિવારણ યજ્ઞ": "Pitru Dosh Nivarana Yagna",
  "નવગ્રહ શાંતિ યજ્ઞ": "Navgrah Shanti Yagna",
  "સંતાન પ્રાપ્તિ યજ્ઞ": "Santan Prapti Yagna",
  "વ્યવસાય તથા ધન વૃદ્ધિ યજ્ઞ": "Vyavasay & Dhan Vriddhi Yagna",
  "સર્વ બાધા નિવારણ યજ્ઞ": "Sarva Badha Nivarana Yagna",
  "ગૃહ શાંતિ તથા માંગલિક દોષ નિવારણ": "Gruh Shanti & Manglik Dosh Nivarana",
  "કુંડળી વિશ્લેષણ": "Kundali Analysis"
};

export const CollectionsGrid = () => {
  const { language, t } = useLanguage();

  return (
    <section 
      id="minimizeout" 
      className="collections-grid bg-[#a9c5b9] py-[60px] pb-[100px] h-auto flex flex-col box-border transition-all duration-300 ease-out mx-auto w-full"
    >
      <div className="page-width w-full max-w-[140rem] mx-auto px-4 flex flex-col flex-1 max-h-full">
        <div className="collections-grid__header text-center mb-[30px] flex justify-center items-center gap-[10px] shrink-0">
          <span
            aria-hidden="true"
            className="collections-grid__sticker w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center text-[#8b2915] text-4xl md:text-5xl leading-none select-none"
          >
            ॐ
          </span>
          <h1 className="collections-grid__title font-serif text-[#8b2915] text-[1.8rem] md:text-[3.5rem] leading-tight my-4 px-[10px]">
            <div className="collections-grid__title-content">
              {language === 'gu' ? (
                <span>અમારી <em className="italic">સેવાઓ</em></span>
              ) : (
                <span>Our <em className="italic">Services</em></span>
              )}
            </div>
          </h1>
          <span
            aria-hidden="true"
            className="collections-grid__sticker w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center text-[#8b2915] text-4xl md:text-5xl leading-none select-none"
          >
            ॐ
          </span>
        </div>

        <div className="collections-grid__mobile-container overflow-x-auto md:overflow-visible scrollbar-hide flex-1">
          <div 
            className="collections-grid__grid flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] md:gap-x-12 md:gap-y-16 px-5 md:px-[6%] transition-all"
          >
            {COLLECTIONS.map((item, idx) => {
              const displayTitle = language === 'gu' 
                ? item.title 
                : (GUJ_TO_ENG_COLLECTIONS[item.title] || item.title);

              return (
                <div 
                  key={`${item.title}-${idx}`} 
                  className="collections-grid__item shrink-0 w-[calc((100vw-70px)/2.4)] md:w-auto text-center flex flex-col group"
                >
                  <Link to={item.href} className="collections-grid__link no-underline h-full flex flex-col">
                    <div className="collections-grid__image-container mb-2 md:mb-4 relative aspect-square p-[5%] overflow-visible flex items-center justify-center min-h-0">
                      <img 
                        src={item.image} 
                        alt={displayTitle} 
                        className="collections-grid__image w-full h-full object-cover transition-all duration-300 [clip-path:inset(0_round_0)] group-hover:scale-110 group-hover:[clip-path:circle(45%_at_center)]"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="collections-grid__name font-sans font-medium uppercase text-[#8b2915] tracking-[1px] text-[1.1rem] md:text-[1.2rem] mt-3 md:mt-5 px-2 leading-snug block">
                      {displayTitle}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

