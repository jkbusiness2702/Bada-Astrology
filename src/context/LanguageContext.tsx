import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (enText: string, guText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dictionary of default translations for common phrases across the app
const TRANSLATIONS_MAP: Record<string, string> = {
  // Navigation
  'HOME': 'હોમ',
  'SERVICES': 'સેવાઓ',
  'PANCHANG': 'દૈનિક પંચાંગ',
  'Daily Panchang': 'દૈનિક પંચાંગ',
  'DAILY PANCHANG': 'દૈનિક પંચાંગ',
  'OUR STORY': 'અમારી વાર્તા',
  'CONTACT US': 'સંપર્ક કરો',
  'BOOK APPOINTMENT': 'એપોઇન્ટમેન્ટ બુક કરો',

  // Common UI
  'Search': 'શોધો',
  'What are you looking for?': 'તમે શું શોધી રહ્યા છો?',
  'MY ACCOUNT': 'મારું એકાઉન્ટ',
  'MENU': 'મેનૂ',
  'Quick Links': 'ઝડપી લિંક્સ',
  'Contact': 'સંપર્ક',
  'Newsletter': 'સમાચાર પત્ર',
  'Subscribe to receive updates, access to exclusive deals, and more.': 'નવીનતમ અપડેટ્સ અને પવિત્ર મંત્રો મેળવવા માટે સબ્સ્ક્રાઇબ કરો.',
  'Email address': 'ઈમેલ સરનામું',
  'Subscribe': 'સબ્સ્ક્રાઇબ કરો',
  'EXPLORE OUR SERVICES': 'અમારી સેવાઓ જુઓ',
  'EXPLORE CRAFTSMANSHIP': 'અમારી પદ્ધતિઓ જુઓ',
  'READ OUR STORY': 'અમારી વાર્તા વાંચો',

  // Hero & Story
  'A Exprience': 'એક દિવ્ય અનુભવ',
  'Perfected Over Time': 'સમય સાથે સિદ્ધ થયેલ',
  "Every mantra we chant, every yajna we perform, and every ritual we conduct carries the wisdom of ancient Vedic traditions. With unwavering faith and experienced guidance, Shree Bada Jyotish & Karmakand helps remove obstacles, restore harmony, and invite divine blessings into every stage of your life's journey.": "અમે ઉચ્ચારેલો દરેક મંત્ર, કરેલો દરેક યજ્ઞ અને કરાયેલું દરેક કર્મકાંડ પ્રાચીન વૈદિક પરંપરાઓની પવિત્ર જ્ઞાન વારસો ધરાવે છે. અચળ શ્રદ્ધા અને અનુભવી માર્ગદર્શન સાથે, શ્રી ખંભાત જ્યોતિષ અને કર્મકાંડ આપના જીવનના દરેક તબક્કે બાધાઓ દૂર કરવા, શાંતિ અને દિવ્ય આશીર્વાદ લાવવામાં મદદ કરે છે.",

  // About Page
  "It All Began With": "શરૂઆત થઈ હતી",
  "One Man's Pursuit of": "એક અસાધારણ ભક્તની શોધથી",
  "The Sacred Vedic Tradition": "પવિત્ર વૈદિક પરંપરાની",
  "The Perfect Laddu": "દિવ્ય પવિત્રતાની",
  "Perfecting Joy": "સિદ્ધ આનંદ અને ભક્તિ",
  "Perfecting Devotion": "સિદ્ધ ભક્તિ અને શ્રદ્ધા",
  "Since Generations": "પેઢીઓથી",
  "Since 1983": "૧૯૮૩ થી",
  "Years have passed,": "વર્ષો વીતી ગયા,",
  "times have changed.": "સમય બદલાયો.",
  "palates have evolved.": "વિચારો અને પદ્ધતિઓ વિસ્તરી.",
  "But the sanctity of Vedic Vidhi": "પરંતુ વૈદિક વિધિની પવિત્રતા",
  "remains constant.": "અવિચળ રહી છે.",
  "the joy of mithai kalakari": "કર્મકાંડ અને વિધિનો પવિત્ર આનંદ",
  "The Values": "અમારા મૂલ્યો",
  "That Guide Us": "જે આપણને માર્ગદર્શન આપે છે",
  "The Heart": "મુખ્ય હૃદય",
  "of Shri Khambhat Jyotish": "શ્રી ખંભાત જ્યોતિષનું",
  "of SKB's": "શ્રી ખંભાત જ્યોતિષનું",
  "Crafted With Care": "સંપૂર્ણ પવિત્રતા સાથે",
  "Crafted With Devotion": "શ્રદ્ધા અને નિષ્ઠાથી નિર્મિત",
  "at Every Step": "દરેક ચરણમાં",
  "The Legacy": "અમારો વારસો",
  "Continues": "નિરંતર ચાલુ છે",
  "Have a": "શું આપને કોઈ",
  "Question?": "પ્રશ્ન છે?",
  "We Are Here to Help.": "અમે મદદ માટે અહીં છીએ.",
  "Our Customer Support is Available": "અમારા વિદ્વાન આચાર્યો અને સહાયતા ઉપલબ્ધ છે",
  "Our Acharyas & Support Are Available": "અમારા વિદ્વાન આચાર્યો અને સહાયતા ઉપલબ્ધ છે",
  "Monday To Sunday: 8 am - 10:30 pm": "સોમવારથી રવિવાર: સવારે ૮ થી રાત્રે ૧૦:૩૦ IST",
  "Monday To Sunday: 09:00 am - 07:00 pm IST": "સોમવારથી રવિવાર: સવારે ૯ થી સાંજે ૭ IST",

  // Contact Page
  "Contact Us": "અમારો સંપર્ક કરો",
  "Get in Touch": "સંપર્કમાં રહો",
  "We are available to guide you through sacred rituals and Vedic astrological remedies.": "અમે આપને પવિત્ર કર્મકાંડ અને વૈદિક જ્યોતિષીય ઉપાયોમાં માર્ગદર્શન આપવા ઉપલબ્ધ છીએ.",
  "Your First Name": "તમારું પ્રથમ નામ",
  "Your Last Name": "તમારું અટક/છેલ્લું નામ",
  "Your Email": "તમારું ઈમેલ",
  "Your Phone Number": "તમારો ફોન નંબર",
  "Select Enquiry Topic": "પ્રશ્નનો વિષય પસંદ કરો",
  "Your Message": "તમારો સંદેશ / સંકલ્પ",
  "Submit Inquiry": "અરજી જમા કરો",
  "APPOINTMENT REGISTERED": "એપોઇન્ટમેન્ટ રજીસ્ટર થઈ ગયેલ છે",
  "REQUEST REGISTERED": "અરજી રજીસ્ટર થઈ ગયેલ છે",
  "Your Request Has Been Registered Successfully! 🙏": "આપની વિનંતી સફળતાપૂર્વક નોંધી લેવામાં આવી છે! 🙏",
  "Connect on WhatsApp": "વોટ્સએપ પર સંપર્ક કરો",
  "Send Another Request": "બીજી વિનંતી મોકલો",

  // Service Details Page
  "A SACRED VEDIC RITUAL": "એક પવિત્ર વૈદિક અનુષ્ઠાન",
  "BOOK YOUR PUJA": "આપની પૂજા બુક કરો",
  "Full Name": "પૂરું નામ",
  "Phone Number": "ફોન નંબર",
  "Preferred Date": "પસંદગીની તારીખ",
  "Special Instructions / Sankalpa": "વિશેષ સૂચનાઓ / સંકલ્પ",
  "Book Appointment Now": "હમણાં એપોઇન્ટમેન્ટ બુક કરો",
  "Book Another Appointment": "બીજી એપોઇન્ટમેન્ટ બુક કરો",

  // Collections & Categories
  "Our Sacred Services": "અમારી પવિત્ર સેવાઓ",
  "Most Sought Rituals": "સૌથી લોકપ્રિય યજ્ઞ તથા પૂજા",
  "LOVE KNOWS NO BORDERS WITH BADA'S,": "જ્ઞાન અને પવિત્રતા સીમાઓથી પર છે,",
  "NOW DELIVERING GUIDANCE WORLDWIDE.": "હવે વિશ્વભરમાં વૈદિક સેવાઓ ઉપલબ્ધ."
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved === 'gu' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'gu' : 'en';
    setLanguage(nextLang);
  };

  const t = (enText: string, guText?: string): string => {
    if (language === 'gu') {
      if (guText) return guText;
      if (TRANSLATIONS_MAP[enText]) return TRANSLATIONS_MAP[enText];
      return enText;
    }
    return enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
