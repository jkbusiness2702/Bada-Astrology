import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative h-[83vh] w-full flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/img/services/shatchandi-mahayagna.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center gap-12 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-full max-w-[300px] md:max-w-2xl px-6 flex justify-center">
          <span aria-hidden="true" className="text-[#E8B84B] text-7xl md:text-8xl leading-none drop-shadow-lg select-none">
            ॐ
          </span>
        </div>

        <h2 className="text-secondary text-4xl md:text-6xl lg:text-[4rem] font-serif text-center drop-shadow-lg leading-tight">
          {t("Yagnas That Tell A", "એવા યજ્ઞ જે કહે")} <em className="italic font-normal">{t("Story", "એક દિવ્ય કથા")}</em>
        </h2>

        <button
          onClick={() => setIsPlaying(true)}
          className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-black/20 text-white hover:scale-110 transition-transform active:scale-95 group overflow-hidden"
          aria-label={t("Play video", "વિડિયો ચલાવો")}
        >
          <Play size={36} className="ml-1 fill-white" />
        </button>

        <p className="text-secondary text-base md:text-lg text-center max-w-2xl px-6 leading-relaxed font-medium drop-shadow-md opacity-90 uppercase tracking-wide">
          {t(
            "Every mantra is chanted with shraddha, every ritual performed with authentic Vedic vidhi and decades of expertise.",
            "દરેક મંત્ર શ્રદ્ધાથી ઉચ્ચારાય છે, દરેક વિધિ શાસ્ત્રોક્ત વૈદિક પદ્ધતિ અને દાયકાઓના અનુભવ સાથે સંપન્ન થાય છે."
          )}
        </p>
      </div>

      {/* Video Container Overlay */}
      {isPlaying && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-8 right-8 z-[60] w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <X size={32} />
          </button>

          <video
            autoPlay
            controls
            className="w-full h-full object-contain"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/VideoW11.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </section>
  );
};
