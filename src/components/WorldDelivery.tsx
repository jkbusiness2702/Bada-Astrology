import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const WorldDelivery = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="world-delivery-section"
      className="world-delivery-section relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[#f5f5f5] mx-auto transition-all duration-300 ease-out"
    >
      <style>{`
        .world-delivery-section {
          height: 90vh;
        }
        @media (max-width: 768px) {
          .world-delivery-section {
            height: 500px !important;
          }
        }
        .world-delivery-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 1;
          background-image: radial-gradient(ellipse at 50% 42%, rgba(200, 146, 42, 0.20) 0%, rgba(200, 146, 42, 0) 58%), radial-gradient(ellipse at center, #711A16 0%, #571210 78%);
        }
        .world-delivery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background-color: #8b0000;
          opacity: 0.0;
        }
        .world-delivery-content {
          position: relative;
          max-width: 800px;
          text-align: center;
          z-index: 3;
          padding: 20px;
          color: #f6ede0;
        }
        .world-delivery-heading {
          font-family: var(--font-serif);
          font-size: 4.5rem;
          margin-bottom: 20px;
          line-height: 1.2;
          color: #F9F3E7;
        }
        .world-delivery-heading .emphasis {
          font-style: italic;
        }
        .world-delivery-subheading {
          font-family: var(--font-sans);
          font-size: 1.75rem;
          letter-spacing: 1px;
          margin-bottom: 30px;
          line-height: 1.75;
          text-transform: uppercase;
        }
        .world-delivery-button {
          display: inline-block;
          padding: 12px 25px;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.5rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border: none;
          background-color: #f6ede0;
          color: #8b0000;
          cursor: pointer;
        }
        .world-delivery-button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          background-color: #a9c5b9 !important;
        }
        .sticker-element {
          position: absolute;
          transform-origin: center;
          z-index: 4;
          transition: transform 0.5s ease-in-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @media (max-width: 768px) {
          .world-delivery-heading {
            font-size: 25px !important;
          }
          .world-delivery-subheading {
            font-size: 1rem !important;
          }
          .world-delivery-button {
            font-size: 12px !important;
          }
        }
      `}</style>
      
      <div className="world-delivery-background">&nbsp;</div>
      <div className="world-delivery-overlay">&nbsp;</div>

      {/* Floating Om Accent 1 - Desktop */}
      <div 
        className="sticker-element z-[5] md:block hidden animate-float"
        style={{ left: '0%', top: '53%', width: '440px', height: '440px', transform: 'rotate(0deg)' }}
      >
        <span aria-hidden="true" className="w-full h-full flex items-center justify-center text-[200px] leading-none text-[#C8922A]/35 select-none">ॐ</span>
      </div>

      {/* Floating Om Accent 1 - Mobile */}
      <div 
        className="sticker-element z-[5] md:hidden block animate-float"
        style={{ left: '0%', top: '68%', width: '200px', height: '200px', transform: 'rotate(-10deg)' }}
      >
        <span aria-hidden="true" className="w-full h-full flex items-center justify-center text-[90px] leading-none text-[#C8922A]/35 select-none">ॐ</span>
      </div>

      {/* Floating Om Accent 2 - Desktop */}
      <div 
        className="sticker-element z-[5] md:block hidden animate-float-delayed"
        style={{ left: '73%', top: '0%', width: '440px', height: '440px', transform: 'rotate(0deg)' }}
      >
        <span aria-hidden="true" className="w-full h-full flex items-center justify-center text-[200px] leading-none text-[#C8922A]/35 select-none">ॐ</span>
      </div>

      {/* Floating Om Accent 2 - Mobile */}
      <div 
        className="sticker-element z-[5] md:hidden block animate-float-delayed"
        style={{ left: '62%', top: '6%', width: '130px', height: '130px', transform: 'rotate(0deg)' }}
      >
        <span aria-hidden="true" className="w-full h-full flex items-center justify-center text-[60px] leading-none text-[#C8922A]/35 select-none">ॐ</span>
      </div>

      <div className="world-delivery-content">
        <h2 className="world-delivery-heading">
          {t("From You,", "આપનાથી,")} <br /> {t("to", "સમગ્ર")} <span className="emphasis">{t("Anywhere", "વિશ્વમાં")}</span> {t("in the World", "દિવ્ય કૃપા")}
        </h2>
        <div className="world-delivery-subheading">
          {t("LOVE KNOWS NO BORDERS WITH BADA'S,", "જ્ઞાન અને પવિત્રતા સીમાઓથી પર છે,")}<br /> {t("NOW DELIVERING GUIDANCE WORLDWIDE.", "હવે વિશ્વભરમાં વૈદિક સેવાઓ ઉપલબ્ધ.")}
        </div>
        <Link 
          to="/contact#say-hello" 
          className="world-delivery-button"
        >
          {t("BOOK APPOINTMENT", "એપોઇન્ટમેન્ટ બુક કરો")}
        </Link>
      </div>
    </section>
  );
};
