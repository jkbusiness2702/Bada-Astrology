import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const AnimatedSection = ({ children, type, id, className = "" }: { children: React.ReactNode, type: 'in' | 'out', id: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const outWidth = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "80%"]);
  const inWidth = useTransform(scrollYProgress, [0, 0.3], ["80%", "100%"]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ width: type === 'out' ? outWidth : inWidth }}
      className={`mx-auto transition-all duration-300 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const ParallaxBackground = ({ imageUrl }: { imageUrl: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative h-[170vh] -mt-[85vh] -mb-[42.5vh] overflow-hidden z-[-1]">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})`, y }}
      />
      <div className="absolute inset-0 bg-transparent" />
    </div>
  );
};

export const AboutUsPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const { t } = useLanguage();

  const values = [
    {
      title: t("Innovation", "પરંપરા અને જ્ઞાન"),
      content: t("We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.", "વૈદિક પરંપરા અને પ્રાચીન શાસ્ત્રોના અખંડ જ્ઞાન સાથે અમે સેવાઓ અર્પણ કરીએ છીએ.")
    },
    {
      title: t("Authenticity", "શાસ્ત્રોક્ત વિધિ"),
      content: t("We believe in being genuine and true to our values in everything we do.", "પ્રત્યેક મંત્ર અને અનુષ્ઠાન સંપૂર્ણ શાસ્ત્રોક્ત મર્યાદા સાથે મંત્રચિંતન પૂર્વક કરાવીએ છીએ.")
    },
    {
      title: t("Celebration", "આધ્યાત્મિક ઉત્સવ"),
      content: t("We celebrate achievements, milestones, and the journey that brings us together.", "દરેક મંગળ પ્રસંગે ભગવાનની ભક્તિ અને આનંદ ઉત્સવ સાથે પૂજા કરીએ છીએ.")
    },
    {
      title: t("Experience", "વર્ષોનો અનુભવ"),
      content: t("Every interaction is crafted to create meaningful and memorable experiences.", "વર્ષોના અનુભવી બ્રાહ્મણો અને ભૂદેવો દ્વારા કલ્યાણકારી યજ્ઞનું આયોજન કરીએ છીએ.")
    }
  ];

  return (
    <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex={-1}>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://dadus.co.in/cdn/shop/files/image_42_d9d50462-9798-4fef-bf09-5c9310efd18b_1920x1080.webp?v=1755855468')" }}>
        <div className="absolute inset-0 bg-black/40 z-1" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] leading-tight font-normal">
            {t("Shree Bada Jyotish & Karmakand", "શ્રી બડા જ્યોતિષ અને કર્મકાંડ")}<br />{t("Ancient Vedic Wisdom & Divine Blessing", "પ્રાચીન વૈદિક જ્ઞાન અને દિવ્ય આશીર્વાદ")}<br /><em className="italic">{t("For Your Spiritual Journey", "આપના શ્રેય અને મંગળ માટે")}</em>
          </h1>
        </div>
      </section>

      {/* Perfecting Joy Section */}
      <section className="bg-[#831312] py-20 relative overflow-hidden">
        <img
          src="https://dadus.co.in/cdn/shop/files/bird_stick_400x400.png?v=1751364259"
          alt="Decorative sticker"
          className="absolute left-[30%] top-[29%] -translate-x-1/2 -translate-y-1/2 max-w-[100px] md:max-w-[150px] z-10 hidden md:block"
        />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-16 text-[#f9f3e7]">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] leading-tight mb-8">
              <em className="italic">Guiding Spiritual Journey</em><br />Since 2000
            </h2>
            <div className="space-y-6 text-lg md:text-2xl opacity-90 leading-relaxed max-w-[500px] mx-auto md:mx-0">
              <p>Through countless trials, Krunal Sukhadia crafted a motichoor so soft and rich, it redefined mithai.</p>
              <p className="text-white">Three decades ago, SKB's was born inside a humble 800 sq. ft. room.<br /><br />
                Today, it thrives across Gujarat, with a menu featuring over 200 plus items.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/owner.png"
              alt="Ritesh Pandya"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://dadus.co.in/cdn/shop/files/image_45_be011ec8-9ba7-4fcd-9f79-28c06b8445f2_1920x1080.webp?v=1755855562')" }}>
        <div className="absolute inset-0 bg-black/40 z-1" />
        <div className="relative z-10 text-center text-white px-4 max-w-[800px]">
          <div className="font-serif text-xl md:text-3xl lg:text-[50px] leading-tight font-normal">
            <p>Years have passed, </p>
            <p>palates have evolved. </p>
            <p>But <em className="italic">the joy of mithai kalakari</em> </p>
            <p>remains constant.</p>
          </div>
        </div>
      </section>

      {/* Values Accordion Section (Animated Out) */}
      <AnimatedSection type="out" id="about_accordion_VFggjW" className="bg-[#831312] py-24 text-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full">

            <img
              src="https://dadus.co.in/cdn/shop/files/values1_600x600.png?v=1755954761"
              alt="Values"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex-1 w-full">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[4rem] leading-none mb-12">
              <span className="italic">The Values</span><br />That Guide Us
            </h2>
            <div className="space-y-0">
              {values.map((val, idx) => (
                <div key={idx} className="border-b border-white/30">
                  <header className="flex justify-between items-center py-6 cursor-pointer group" onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}>
                    <span className="text-xl md:text-2xl uppercase tracking-widest font-sans transition-opacity group-hover:opacity-70">{val.title}</span>
                    <Plus className={`transition-transform duration-300 ${activeAccordion === idx ? 'rotate-45' : ''}`} size={24} />
                  </header>
                  <motion.div
                    initial={false}
                    animate={{ height: activeAccordion === idx ? 'auto' : 0, opacity: activeAccordion === idx ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-lg md:text-xl font-sans leading-relaxed text-white/80">
                      {val.content}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Parallax 1 */}
      <ParallaxBackground imageUrl="https://dadus.co.in/cdn/shop/files/image_46_1.webp?v=1755855660" />

      {/* Heart of Dadu's Gallery (Animated In) */}
      <AnimatedSection type="in" id="horizontal_scroll_6Lz3he" className="bg-[#f9f3e7] py-24 px-6">
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <img src="https://dadus.co.in/cdn/shop/files/Lotus_1_2.png?v=1751947307" alt="" className="absolute left-[-70px] top-1/2 -translate-y-1/2 w-[70px] hidden md:block" />
            <h2 className="text-[#831312] font-serif text-4xl md:text-[40px] leading-tight font-normal">
              <em className="italic">The Heart</em> of SKB's
            </h2>
            <img src="https://dadus.co.in/cdn/shop/files/Lotus_1_3.png?v=1751947331" alt="" className="absolute right-[-70px] top-1/2 -translate-y-1/2 w-[70px] hidden md:block" />
          </div>
          <p className="mt-8 text-[#1e1e1e] text-lg max-w-[600px] mx-auto leading-relaxed">
            In the hands of our ustaads, generations of wisdom comes alive. Every mithai they craft holds a memory, a tradition, and the magic of true craftsmanship.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {[
            { name: "Jayesh", img: "https://dadus.co.in/cdn/shop/files/Neelkant_Ghosh.webp?v=1755609803" },
            { name: "Hamraj", img: "https://dadus.co.in/cdn/shop/files/Valmiki.webp?v=1755609803" },
            { name: "Dinesh", img: "https://dadus.co.in/cdn/shop/files/Rakesh.webp?v=1755609804" },
            { name: "Arjun", img: "https://dadus.co.in/cdn/shop/files/Jeevas_46356434-719b-4475-9cd4-068692aac2ab.webp?v=1755609803" }
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg bg-black hover:shadow-2xl transition-all duration-300">
              <img src={item.img} alt={item.name} className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-6 transition-opacity opacity-70 group-hover:opacity-100">
                <h3 className="text-white text-lg md:text-xl font-semibold tracking-wider">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Crafted with Care video section */}
      <section className="bg-[#f6ede0] py-24 min-h-[600px] flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://dadus.co.in/cdn/shop/files/video_image_1_1200x800.webp?v=1755855698"
            >
              {/* Fallback placeholder source */}
              <source src="https://cdn.shopify.com/videos/c/o/v/6df10be539f140688de782dce20b98eb.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-1 relative text-center md:text-left">
            <img src="https://dadus.co.in/cdn/shop/files/bird_3_300x300.png?v=1751949836" alt="" className="absolute -top-20- left-20 w-[120px] -translate-x-1/2 hidden md:block" />
            <h2 className="text-[#831312] font-serif text-3xl md:text-[38px] leading-tight mb-8">
              <em className="italic">Crafted With Care</em>,<br />at Every Step
            </h2>
            <p className="text-[#444444] text-lg leading-relaxed mb-10 max-w-[500px] mx-auto md:mx-0">
              For us craftsmanship is everything.
              <br /><br />
              Every mithai is born from discipline and recipes nurtured over time.
            </p>
            <Link to="/pages/craftsmanship" className="inline-block bg-[#831312] text-white px-12 py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#a9c5b9] transition-all transform hover:-translate-y-1">
              EXPLORE CRAFTSMANSHIP
            </Link>
          </div>
        </div>
      </section>

      {/* Legacy section (Animated Out) */}
      <AnimatedSection type="out" id="founder_section_3j7Qyk" className="bg-[#a9c5b9] py-24 relative overflow-hidden text-[#8b2323]">
        <img
          src="https://dadus.co.in/cdn/shop/files/flying_bird1_1_400x400.png?v=1751948612"
          className="absolute left-[39%] top-[27%] -translate-x-1/2 -translate-y-1/2 w-[290px] z-10 hidden md:block"
          alt=""
        />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] leading-tight mb-10">
              <em className="italic">The Legacy</em> Continues
            </h2>
            <div className="text-xl md:text-2xl lg:text-[1.7rem] leading-relaxed space-y-8 max-w-[600px] mx-auto md:mx-0 font-sans">
              <p>Krunal Sukhadia transformed a personal fascination for mithai into a beloved legacy.</p>
              <p>Now, the next generation leads with the same passion and purpose, while upholding trust, taste, and timeless celebration.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://dadus.co.in/cdn/shop/files/IMG_1312_2_1_800x800.webp?v=1755609804" alt="Legacy" className="max-w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </AnimatedSection>

      {/* Parallax 2 */}
      <ParallaxBackground imageUrl="https://dadus.co.in/cdn/shop/files/image_47_8c148f51-2c59-4a2e-8d24-b47761f126b1.webp?v=1755855929" />

      {/* Contact Support section (Animated In) */}
      <AnimatedSection type="in" id="customer_support_LTczbT" className="bg-[#f6ede0] py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-[#8b0000] font-serif text-3xl md:text-[38px] leading-tight">
            Have a <em className="italic">Question?</em> We Are Here to Help.
          </h2>
          <div className="space-y-2 text-xl text-[#121212] font-sans font-normal opacity-90">
            <h3 className="uppercase tracking-widest text-lg font-bold">Our Customer Support is Available</h3>
            <p>Monday To Sunday: 8 am - 10:30 pm</p>
          </div>
          <Link
            to="/pages/contact-us"
            className="inline-block bg-[#8b0000] text-[#f6ede0] px-16 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#a9c5b9] transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            CONTACT US
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
};
