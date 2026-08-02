import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const OurStory = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('our-story-container');
      if (!container) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerOffsetTop = container.offsetTop;
      const containerTotalHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = containerTotalHeight - viewportHeight;

      const scrollDistance = Math.max(0, scrollTop - containerOffsetTop);
      const scrollProgress = scrollableDistance > 0 ? Math.min(1, Math.max(0, scrollDistance / scrollableDistance)) : 0;

      // Scale from 1 to 2 based on scroll progress
      setScale(1 + scrollProgress);

      // Text opacity starting at 0 and reaches 1 around 10% scroll of the expanded container
      let textOpacity = 0;
      if (scrollProgress >= 0.1) {
        textOpacity = Math.min(1, (scrollProgress - 0.1) * 3.5);
      }
      setOpacity(textOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .our-story-container {
          position: relative;
          width: 100%;
          height: 250vh;
          clear: both;
          margin-bottom: 0px;
        }

        .our-story-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          overflow: hidden;
        }

        .our-story-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .our-story-background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .our-story-background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(0%);
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.7s ease-in-out;
        }
        
        .our-story-content:hover .our-story-background-image {
          transform: scale(1.03);
        }

        .our-story-frame-wrapper {
          position: absolute;
          z-index: 4;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
          transform-origin: center center;
          pointer-events: none;
        }

        .our-story-frame-image {
          width: 100%;
          height: 100%;
          object-fit: fill;
          max-width: none;
          max-height: none;
        }

        /* Responsive frame styles */
        @media (min-width: 1024px) {
          .our-story-frame-image {
            width: 100%;
            height: 100%;
          }
        }
        
        @media (max-width: 1023px) {
          .our-story-frame-image {
            width: 120%;
            height: 120%;
          }
        }

        .our-story-text-content {
          position: relative;
          z-index: 30;
          text-align: center;
          max-width: 600px;
          padding: 2rem;
          transition: opacity 0.3s ease;
        }

        .our-story-title {
          margin-bottom: 0;
          font-weight: 500;
          line-height: 1.2;
          font-size: 48px;
          font-family: 'Libre Baskerville', serif;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .our-story-subtitle {
          font-style: italic;
          margin-top: 0.5rem;
          margin-bottom: 2rem;
          font-weight: 400;
          line-height: 1.2;
          font-size: 40px;
          font-family: 'Libre Baskerville', serif;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .our-story-description {
          line-height: 1.6;
          margin-bottom: 2rem;
          font-size: 16px;
          font-family: 'Montserrat', sans-serif;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .our-story-button {
          display: inline-block;
          padding: 12px 30px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
          transition: all 0.3s ease;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          border-radius: 4px;
        }

        .our-story-button:hover {
          color: #831113 !important;
          background-color: #a9c5b9 !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .our-story-title {
            font-size: 32px;
          }
          
          .our-story-subtitle {
            font-size: 24px;
          }
          
          .our-story-description {
            font-size: 14px;
          }
          
          .our-story-text-content {
            max-width: 90%;
            padding: 1rem;
          }
          
          .our-story-button {
            padding: 10px 15px;
            font-size: 12px;
          }
        }
      `}</style>

      <div id="our-story-container" className="our-story-container">
        <div id="our-story-wrapper" className="our-story-wrapper">
          <div className="our-story-content">
            <div className="our-story-background-wrapper">
              <img
                src="/owner.png"
                alt="Our Story Background"
                className="our-story-background-image"
                loading="lazy"
              />
            </div>

            <div
              className="our-story-frame-wrapper"
              style={{ transform: `scale(${scale})` }}
            >
              <img
                src="//dadus.co.in/cdn/shop/files/13_frame12.png?v=1747966988"
                alt="Our Story Frame - Small Desktop"
                className="our-story-frame-image"
                loading="lazy"
              />
            </div>

            <div className="our-story-text-content" style={{ opacity, pointerEvents: opacity > 0.3 ? 'auto' : 'none' }}>
              <h2 className="our-story-title" style={{ color: "#f9f3e7" }}>
                {t("A Exprience", "એક દિવ્ય અનુભવ")}
              </h2>

              <h3 className="our-story-subtitle" style={{ color: "#f9f3e7" }}>
                {t("Perfected Over Time", "સમય સાથે સિદ્ધ થયેલ")}
              </h3>

              <p className="our-story-description" style={{ color: "#f9f3e7" }}>
                {t("Every mantra we chant, every yajna we perform, and every ritual we conduct carries the wisdom of ancient Vedic traditions. With unwavering faith and experienced guidance, Shree Bada Jyotish & Karmakand helps remove obstacles, restore harmony, and invite divine blessings into every stage of your life's journey.")}
              </p>

              <Link
                to="/pages/about-us"
                className="our-story-button"
                style={{
                  color: "#831113",
                  backgroundColor: "#f9f3e7"
                }}
              >
                {t("READ OUR STORY", "અમારી વાર્તા વાંચો")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
