import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-[83vh] w-full flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://dadus.co.in/cdn/shop/files/video_image.webp?v=1755608570')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center gap-12 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-full max-w-[300px] md:max-w-2xl px-6">
          <img src="https://dadus.co.in/cdn/shop/files/sticker_e16637c5-e5e1-403c-83f1-523ae5eefa0d.png?v=1744382405" alt="" className="w-full h-auto" />
        </div>

        <h2 className="text-secondary text-4xl md:text-6xl lg:text-[4rem] font-serif text-center drop-shadow-lg leading-tight">
          Mithai That Tells A <em className="italic font-normal">Story</em>
        </h2>

        <button
          onClick={() => setIsPlaying(true)}
          className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-black/20 text-white hover:scale-110 transition-transform active:scale-95 group overflow-hidden"
        >
          <img src="https://dadus.co.in/cdn/shop/files/play_button.png?v=1747964318" alt="play" className="w-full h-full object-cover" />
        </button>

        <p className="text-secondary text-base md:text-lg text-center max-w-2xl px-6 leading-relaxed font-medium drop-shadow-md opacity-90 uppercase tracking-wide">
          Every piece is a labour of love, crafted with age-old techniques and unmatched expertise.
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
