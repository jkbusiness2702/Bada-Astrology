import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Instagram, Facebook, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ANNOUNCEMENT, NAV_LINKS } from '../constants';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<number | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[101]">
        {/* Announcement Bar */}
        <div className="bg-[#8b2323] text-[#F9F3E7] h-10 flex items-center overflow-hidden w-full print:hidden select-none border-b border-[#C8984E]/30">
          <div className="animate-marquee whitespace-nowrap flex items-center text-sm sm:text-base font-semibold tracking-wider">
            <span className="px-6 flex items-center gap-10">
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः।ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः।ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
            </span>
            <span className="px-6 flex items-center gap-10">
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
              <span>ૐ सर्वबाधा विनिर्मुक्तो, धन धान्यः सुतान्वितः।
                मनुष्यः मत्प्रसादेन भविष्यति न संशयः। ૐ</span>
              <span>•</span>
            </span>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`absolute left-0 w-full z-[100] transition-all duration-300 border-b-[3px] border-[#C8984E] flex items-center bg-[#f9f3e7] ${isScrolled ? 'top-10 h-16 shadow-md' : 'top-10 h-[95px]'
            }`}
        >
          <div className="max-w-[1600px] mx-auto h-full w-full px-4 lg:px-12 flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-800 p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Left Menu (Desktop) */}
            <nav className="hidden lg:flex flex-1 justify-end items-center pr-12">
              <ul className="flex gap-10 items-center">
                {NAV_LINKS.slice(0, Math.ceil(NAV_LINKS.length / 2)).map((link, idx) => (
                  <li
                    key={`${link.title}-${idx}`}
                    className="relative group"
                    onMouseEnter={() => link.megaMenu && setActiveMegaMenu(idx)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <Link
                      to={link.href || '#'}
                      className="text-[#1a1a1a] uppercase text-[15px] font-medium font-playfair tracking-[0.1em] py-2 hover:text-[#8b2915] transition-all flex items-center gap-1.5 whitespace-nowrap"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      {t(link.title)}
                      {link.megaMenu && <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center items-center px-4">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src="/LOGO.png"
                  alt="SKB's"
                  className={`transition-all duration-300 object-contain ${isScrolled ? 'h-12 w-auto' : 'h-14 lg:h-[80px] w-auto'}`}
                />
              </Link>
            </div>

            {/* Right Menu (Desktop) */}
            <nav className="hidden lg:flex flex-1 justify-start items-center pl-12">
              <ul className="flex gap-8 items-center w-full">
                {NAV_LINKS.slice(Math.ceil(NAV_LINKS.length / 2)).map((link, idx) => {
                  const actualIdx = idx + Math.ceil(NAV_LINKS.length / 2);
                  return (
                    <li
                      key={`${link.title}-${actualIdx}`}
                      className="relative group"
                      onMouseEnter={() => link.megaMenu && setActiveMegaMenu(actualIdx)}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <Link
                        to={link.href || '#'}
                        className="text-[#1a1a1a] uppercase text-[15px] font-medium font-playfair tracking-[0.1em] py-2 hover:text-[#8b2915] transition-all flex items-center gap-1.5 whitespace-nowrap"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        {t(link.title)}
                        {link.megaMenu && <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform" />}
                      </Link>
                    </li>
                  );
                })}

                {/* Language Translation Icon Button after Contact Us */}
                <li className="relative flex items-center ml-2">
                  <button
                    onClick={toggleLanguage}
                    title={language === 'en' ? 'Turn language to Gujarati (ગુજરાતી)' : 'Turn language to English'}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b2323] text-[#F9F3E7] hover:bg-[#a12c2c] active:scale-95 transition-all duration-300 shadow-sm border border-[#C8984E]/60 group cursor-pointer"
                  >
                    <Languages size={17} className="text-[#C8984E] group-hover:rotate-12 transition-transform" />
                    <span className="text-xs font-bold tracking-wider font-sans uppercase">
                      {language === 'en' ? 'ગુજરાતી' : 'English'}
                    </span>
                  </button>
                </li>
              </ul>
            </nav>

            {/* Mobile Right Container: Language Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8b2323] text-[#F9F3E7] text-xs font-bold font-sans border border-[#C8984E]/50 active:scale-95 transition-all"
              >
                <Languages size={15} className="text-[#C8984E]" />
                <span>{language === 'en' ? 'ગુજરાતી' : 'ENG'}</span>
              </button>
            </div>
          </div>

          {/* Global Search Modal */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1000] flex items-start justify-center pt-20 px-4"
              >
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setIsSearchOpen(false)}
                />
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="relative bg-secondary w-full max-w-2xl p-8 rounded shadow-2xl"
                >
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-primary"
                  >
                    <X size={24} />
                  </button>
                  <h2 className="text-2xl font-serif mb-6 text-center text-gray-800">Search</h2>
                  <div className="relative">
                    <input
                      autoFocus
                      type="search"
                      placeholder="What are you looking for?"
                      className="w-full border-2 border-accent p-4 pl-12 bg-white outline-none focus:border-primary transition-colors text-lg"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={20} />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Mega Menu Overlay */}
          <AnimatePresence>
            {activeMegaMenu !== null && NAV_LINKS[activeMegaMenu]?.megaMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-screen bg-[#FDF8F1] border-t-3 border-accent shadow-2xl z-[99]"
                onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <div className="grid grid-cols-[450px_1fr] min-h-[500px]">
                  {/* Left: Featured Image Section */}
                  <div className="relative overflow-hidden bg-[#8b2915]/5 flex items-center justify-center group">
                    <img
                      src={NAV_LINKS[activeMegaMenu].megaMenu?.image}
                      alt="Featured"
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-14 text-white">
                      <h2 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight whitespace-pre-line italic">
                        {NAV_LINKS[activeMegaMenu].megaMenu?.imageTitle}
                      </h2>
                      <Link
                        to={NAV_LINKS[activeMegaMenu].megaMenu?.imageHref || '/'}
                        className="inline-block self-start border-2 border-white px-10 py-3.5 text-[13px] font-bold tracking-[0.2em] hover:bg-white hover:text-[#8b2915] transition-all uppercase"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        {NAV_LINKS[activeMegaMenu].megaMenu?.imageCta}
                      </Link>
                    </div>
                  </div>

                  {/* Right: Columns */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-10 p-12 px-16">
                    {NAV_LINKS[activeMegaMenu].megaMenu?.sections?.map((section, sIdx) => (
                      <div key={`${section.title}-${sIdx}`} className="flex flex-col">
                        <h3 className="text-[#8b2915] font-bold uppercase tracking-[0.15em] text-[13px] mb-6 border-b border-[#8b2915]/10 pb-2">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-3">
                          {section.links.map((link, lIdx) => (
                            <Link
                              key={`${link.title}-${lIdx}`}
                              to={link.href}
                              className="text-gray-600 hover:text-[#8b2915] hover:italic transition-all duration-300 text-[14px] leading-snug"
                              onClick={() => setActiveMegaMenu(null)}
                            >
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[1000]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[85%] max-w-sm h-full bg-secondary z-[1001] shadow-2xl overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-secondary z-10">
                <span className="font-bold tracking-widest text-gray-800">{t("MENU")}</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800">
                  <X size={28} />
                </button>
              </div>

              <nav className="p-0">
                {NAV_LINKS.map((link, idx) => (
                  <div key={`${link.title}-${idx}`} className="border-b border-gray-100">
                    <div className="flex items-center justify-between p-5">
                      <Link
                        to={link.href || '#'}
                        className="text-gray-800 font-semibold uppercase tracking-wide flex-1 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t(link.title)}
                      </Link>
                      {link.megaMenu && (
                        <button className="p-2 text-gray-500">
                          <ChevronDown size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {/* Mobile Language Switcher Button */}
                <div className="p-5 border-b border-gray-100 bg-[#8b2323]/5">
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-md bg-[#8b2323] text-[#F9F3E7] font-semibold text-sm shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Languages size={18} className="text-[#C8984E]" />
                      <span>{language === 'en' ? 'ગુજરાતી ભાષા પસંદ કરો' : 'Switch to English'}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#C8984E] text-[#8b2323] rounded text-xs font-bold uppercase">
                      {language === 'en' ? 'ગુજરાતી' : 'ENG'}
                    </span>
                  </button>
                </div>
              </nav>

              <div className="p-6 mt-6 bg-gray-50/50">
                <div className="flex flex-col gap-5">
                  <button onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
                    <Search size={18} /> SEARCH
                  </button>
                  <Link to="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
                    <User size={18} /> MY ACCOUNT
                  </Link>
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary"><Instagram size={20} /></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary"><Facebook size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
