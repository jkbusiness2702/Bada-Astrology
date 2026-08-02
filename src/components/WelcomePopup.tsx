import React, { useState, useEffect } from 'react';

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popup-shown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    sessionStorage.setItem('popup-shown', 'true');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center z-[9999] opacity-100 transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="bg-[#8b2323] rounded-xl max-w-[800px] w-[90%] max-h-[90%] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex relative scale-100 transition-transform duration-300 max-md:flex-col max-md:w-[95%] max-md:max-h-[85%] max-md:max-w-[400px] max-sm:w-[90%] max-sm:m-5">
        <button 
          className="absolute top-[15px] right-[15px] bg-none border-none text-[24px] cursor-pointer text-white z-10 w-[30px] h-[30px] flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/10 max-md:top-[10px] max-md:right-[10px] max-md:text-[20px] max-md:w-[28px] max-md:h-[28px]"
          onClick={closePopup}
        >
          &times;
        </button>

        <div className="flex-1 min-h-[300px] max-md:min-h-[180px] max-md:max-h-[200px] max-md:order-1 max-[768px]:min-h-[200px] max-[768px]:max-h-[250px]">
          <img 
            src="/WEL.jpeg" 
            alt="Welcome" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://dadus.co.in/cdn/shop/files/Bakery_2_1_800x600.webp?v=1755853108";
            }}
          />
        </div>

        <div className="flex-1 p-[40px] flex flex-col justify-center text-white max-md:p-[20px_24px_24px_24px] max-md:order-2 max-md:text-center max-sm:p-[16px_20px_20px_20px] max-[768px]:p-[30px_20px]">
          <div className="text-[36px] font-serif font-normal mb-[20px] leading-[1.2] max-md:text-[26px] max-md:mb-[12px] max-md:leading-[1.1] max-sm:text-[24px] max-sm:mb-[10px] max-[768px]:text-[28px]">
            <p className="m-0">From <em className="italic">Khambhat</em>,<br/>With <em className="italic">Love</em>.</p>
          </div>

          <div className="text-[16px] font-sans mb-[30px] leading-[1.4] opacity-80 max-md:text-[15px] max-md:mb-[20px] max-md:leading-[1.3] max-sm:text-[14px] max-sm:mb-[16px] max-[768px]:text-[14px]">
            ENJOY FREE CAREER READING ACROSS THE GLOBE.
          </div>

          <div className="flex flex-col gap-[15px] max-md:flex-col max-md:gap-[12px] max-md:w-full">
            <button 
              className="px-[24px] py-[12px] border-2 border-[#8b2323] bg-[#f9f3e7] text-[#8b2323] no-underline rounded font-sans font-medium text-[14px] transition-all duration-300 inline-block text-center w-[300px] cursor-pointer h-[48px] flex items-center justify-center hover:bg-[#991b1b] hover:text-white hover:border-[#991b1b] hover:-translate-y-[2px] max-md:w-full max-md:p-[14px_24px] max-md:font-semibold max-md:min-w-0"
              onClick={closePopup}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
