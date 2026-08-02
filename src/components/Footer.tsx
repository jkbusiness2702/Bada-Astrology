import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-secondary relative overflow-hidden pt-20 pb-10">
      {/* Decorative Border Pattern */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden h-20 -translate-y-1/2 text-white">
        <img 
          src="https://dadus.co.in/cdn/shop/files/Group_799_5c8eb5e5-80a5-4833-8728-ea450030bf20.png?v=1744602816" 
          alt="" 
          className="w-full h-auto object-cover opacity-30"
        />
      </div>

      {/* Decorative Stickers */}
      <img src="https://dadus.co.in/cdn/shop/files/image_97.png?v=1744602487" alt="" className="absolute left-0 bottom-0 max-h-40 opacity-50 hidden lg:block" />
      <img src="https://dadus.co.in/cdn/shop/files/image_98.png?v=1744602518" alt="" className="absolute right-0 bottom-0 max-h-40 opacity-50 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Quick Links */}
          <div>
            <h2 className="font-serif italic text-2xl mb-8 border-b border-secondary/20 pb-2">{t("Quick Links", "ઝડપી લિંક્સ")}</h2>
            <ul className="space-y-4 opacity-80 text-base">
              <li><Link to="/collections/wedding" className="hover:underline">{t("Services", "સેવાઓ")}</Link></li>
              <li><Link to="/pages/about-us" className="hover:underline">{t("About Us", "અમારા વિશે")}</Link></li>
              <li><Link to="/pages/contact-us" className="hover:underline">{t("Contact Us", "સંપર્ક કરો")}</Link></li>
              <li><Link to="/admin" className="hover:underline">{t("Admin Dashboard", "એડમિન ડેશબોર્ડ")}</Link></li>
            </ul>
          </div>

         

          {/* Contact */}
          <div>
            <h2 className="font-serif italic text-2xl mb-8 border-b border-secondary/20 pb-2">{t("Contact", "સંપર્ક સરનામું")}</h2>
            <div className="space-y-4 opacity-80 text-base">
              <p><a href="tel:+919687229518" className="hover:underline">+91 9687229518</a></p>
             <p><a href="tel:+918140148955" className="hover:underline">+91 8140148955</a></p>

              <p><a href="mailto:pandya523@gmail.com" className="hover:underline">pandya523@gmail.com</a></p>
              <p className="leading-relaxed">{t("22, Green Villa Recidency Mariyampura Press road, Khambhat, Gujarat 388620", "૨૨, ગ્રીન વિલા રેસીડેન્સી, મરિયમપુરા પ્રેસ રોડ, ખંભાત, ગુજરાત ૩૮૮૬૨૦")}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-serif italic text-2xl mb-8 border-b border-secondary/20 pb-2">{t("Newsletter", "સમાચાર પત્રિકા")}</h2>
            <p className="mb-6 opacity-80 text-base">{t("Subscribe to receive updates, access to exclusive deals, and more.", "નવીનતમ વૈદિક અપડેટ્સ અને શુભ મુહૂર્ત માટે સબ્સ્ક્રાઇબ કરો.")}</p>
            <form className="flex border-b border-secondary/40 pb-2 group focus-within:border-secondary transition-colors">
              <input 
                type="email" 
                placeholder={t("Email address", "ઇમેઇલ સરનામું")} 
                className="bg-transparent border-none outline-none flex-1 py-2 text-secondary placeholder:text-secondary/50 placeholder:italic"
                required
              />
              <button type="submit" className="p-2 opacity-60 hover:opacity-100 transition-opacity">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Brand Section */}
        <div className="flex flex-col items-center gap-10">
          <div className="w-full max-w-[70px] pt-8 pb-16">
            <img 
              src="/LOGO.png" 
              alt="SKB's" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
          <p className="text-sm opacity-60 font-serif translate-x-1 absolute bottom-4">
            &copy; {t("Copyright 2026, Shree Bada Jyotish & Karmakand", "કૉપિરાઇટ ૨૦૨૬, શ્રી બડા જ્યોતિષ અને કર્મકાંડ")}
          </p>
        </div>
      </div>
    </footer>
  );
};
