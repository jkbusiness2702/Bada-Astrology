import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVICES_DATA, ServiceDetail } from "../data/servicesData";
import { SERVICES_GUJARATI } from "../data/servicesGujarati";
import { useLanguage } from "../context/LanguageContext";

interface ServiceDetailsPageProps {
  forcedSlug?: string;
}

export const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ forcedSlug }) => {
  const { slug } = useParams<{ slug?: string }>();
  const { language, t } = useLanguage();
  const isGu = language === "gu";

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Determine active service slug
  const currentSlug = (forcedSlug || slug || "navchandi-yagna").toLowerCase();

  // Find exact or closest match in SERVICES_DATA
  let serviceKey = currentSlug;
  let service: ServiceDetail = SERVICES_DATA[currentSlug];

  if (!service) {
    const foundKey = Object.keys(SERVICES_DATA).find(
      (k) => currentSlug.includes(k) || k.includes(currentSlug)
    );
    if (foundKey) {
      serviceKey = foundKey;
      service = SERVICES_DATA[foundKey];
    } else {
      serviceKey = "navchandi-yagna";
      service = SERVICES_DATA["navchandi-yagna"];
    }
  }

  const guTrans = SERVICES_GUJARATI[serviceKey] || SERVICES_GUJARATI["navchandi-yagna"];

  // Active language values
  const activeTitle = isGu ? service.titleGu : service.titleEn;
  const activeSubtitle = isGu ? (guTrans?.subtitle || service.subtitle) : service.subtitle;
  const activeEyebrow = isGu
    ? (guTrans?.eyebrow || "પવિત્ર વૈદિક અનુષ્ઠાન")
    : (service.eyebrow || "A SACRED VEDIC RITUAL");
  const activeStats = isGu && guTrans?.stats ? guTrans.stats : service.stats;
  const activeMarquee = isGu && guTrans?.marquee ? guTrans.marquee : service.marquee;
  const activeAboutContent = isGu && guTrans?.aboutContent ? guTrans.aboutContent : service.aboutContent;
  const activeBenefits = isGu && guTrans?.benefits ? guTrans.benefits : service.benefits;
  const activeRituals = isGu && guTrans?.rituals ? guTrans.rituals : service.rituals;
  const activeFormsTitle = isGu
    ? (guTrans?.formsTitle || "આવાહન કરાતી દિવ્ય શક્તિઓ")
    : (service.formsTitle || "Divine Energies Invoked");
  const activeForms = isGu && guTrans?.forms ? guTrans.forms : service.forms;
  const activeFaqs = isGu && guTrans?.faqs ? guTrans.faqs : service.faqs;

  const [bookingRef, setBookingRef] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `SKB-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refId);
    setSubmitted(true);

    const whatsappNumber = "919687229518";
    const text = isGu
      ? `એપોઇન્ટમેન્ટ / વિગતવાર જાણકારી :- ${service.titleGu} (${service.titleEn})
બુકિંગ રેફરન્સ: ${refId}

યજમાનનું નામ: ${formData.name}
મોબાઇલ નંબર: ${formData.phone}
ઇમેઇલ સરનામું: ${formData.email}
ઇચ્છિત તારીખ: ${formData.date || "જણાવેલ નથી"}
સંકલ્પ / હેતુ: ${formData.message || "જણાવેલ નથી"}`
      : `Inquiry / Appointment :- for ${service.titleEn} (${service.titleGu})
Booking Ref: ${refId}

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Date: ${formData.date || "Not specified"}
Sankalpa / Intention: ${formData.message || "Not specified"}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#F7F0E2] text-[#1A1208] font-serif"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* ── BREADCRUMB ── */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-xs font-sans text-[#7A5C2E] uppercase tracking-wider flex items-center gap-2">
        <Link to="/" className="hover:text-[#8b2323] transition-colors">
          {t("Home", "મુખ્ય પૃષ્ઠ")}
        </Link>
        <span>/</span>
        <span className="text-[#8b2323] font-semibold">{activeTitle}</span>
      </div>

      {/* ── HERO ── */}
      <section id="about" className="relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Full bleed background image */}
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.titleEn}
            className="w-full h-full object-cover opacity-25"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/navchandi.jpeg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F0E2]/40 via-[#F7F0E2]/85 to-[#F7F0E2]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-16">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#C8922A]" />
            <p className="text-xs tracking-[0.3em] font-sans text-[#7A5C2E] uppercase">
              {activeEyebrow}
            </p>
            <div className="h-px w-16 bg-[#C8922A]" />
          </div>

          {/* Sanskrit Sloka */}
          <p className="text-lg md:text-xl mb-4 italic opacity-90 text-[#7A5C2E] font-medium leading-relaxed max-w-3xl mx-auto">
            {service.sanskritSloka}
          </p>

          {/* Main heading */}
          <h1 className="mb-4 leading-[1.1] font-serif font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1A1208]">
            {isGu ? (
              <>
                {service.titleGu} <br />
                <em className="text-[#8b2323] not-italic text-2xl md:text-4xl font-normal block mt-2">{service.titleEn}</em>
              </>
            ) : (
              <>
                {service.titleEn} <br />
                <em className="text-[#8b2323] not-italic text-2xl md:text-4xl font-normal block mt-2">{service.titleGu}</em>
              </>
            )}
          </h1>

          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-[#7A5C2E] italic leading-relaxed">
            {activeSubtitle}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-[#C8922A]" />
            <span className="text-[#C8922A] text-lg">✦</span>
            <span className="text-[#C8922A] text-2xl">ॐ</span>
            <span className="text-[#C8922A] text-lg">✦</span>
            <div className="h-px w-12 bg-[#C8922A]" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="px-10 py-4 text-sm font-semibold tracking-widest bg-[#8b2323] text-[#F7F0E2] font-sans transition-all duration-200 hover:bg-[#a12c2c] shadow-md uppercase"
            >
              🕉️ &nbsp;{t("BOOK", "બુક કરો")} {activeTitle.toUpperCase()}
            </a>
            <a
              href="#benefits"
              className="px-10 py-4 text-sm font-semibold tracking-widest border border-[#8b2323] text-[#8b2323] font-sans transition-all duration-200 hover:bg-[#FDF5E8] uppercase"
            >
              {t("EXPLORE DETAILS", "વિગતો જુઓ")}
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 gap-6 w-full max-w-xl mx-auto pt-8 border-t border-[#DDD0B0]">
            {activeStats.map((s, idx) => (
              <div key={idx} className="text-center">
                <p className="font-bold text-3xl font-serif text-[#8b2323]">{s.num}</p>
                <p className="text-xs tracking-widest mt-1 opacity-70 font-sans text-[#1A1208]">{s.label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="overflow-hidden py-4 bg-[#8b2323]">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array(6).fill(activeMarquee).flat().map((tItem, i) => (
            <span key={i} className="text-xs tracking-widest font-sans text-[#EDE4CC] uppercase">{tItem}</span>
          ))}
        </div>
      </div>

      {/* ── ABOUT SECTION ── */}
      <section className="py-20 bg-[#F7F0E2]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden border border-[#DDD0B0] rounded-sm shadow-sm">
              <img
                src={service.aboutImage}
                alt={activeTitle}
                className="w-full h-[450px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/owner11.png";
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 py-3 px-4 text-center bg-[#F7F0E2]/95 border border-[#DDD0B0]">
                <p className="text-xs tracking-widest font-sans text-[#7A5C2E] uppercase">
                  {t("SACRED VEDIC VIDHI & SANCTIFIED RITUAL", "પવિત્ર વૈદિક વિધિ અને શાસ્ત્રોક્ત અનુષ્ઠાન")}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 -z-10 bg-[#EDE4CC] border border-[#DDD0B0]" />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-[#C8922A]" />
              <p className="text-xs tracking-[0.25em] font-sans text-[#7A5C2E] uppercase">
                {t("ABOUT THE RITUAL", "વિધિ વિશે")}
              </p>
            </div>
            <h2 className="mb-6 leading-tight font-serif text-3xl md:text-5xl text-[#1A1208]">
              {isGu ? (
                <em className="text-[#8b2323] not-italic font-serif">{activeAboutContent.heading}</em>
              ) : (
                <>
                  What is <br />
                  <em className="text-[#8b2323] not-italic font-serif">{service.titleEn}?</em>
                </>
              )}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-[#3D2B0E]/90">
              {activeAboutContent.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#DDD0B0]">
              <a
                href="#register"
                className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-semibold tracking-widest bg-[#8b2323] text-[#F7F0E2] font-sans hover:bg-[#a12c2c] transition-colors uppercase"
              >
                {t("REGISTER YOUR SANKALPA →", "તમારો સંકલ્પ નોંધાવો →")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-20 bg-[#EDE4CC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C8922A]" />
              <p className="text-xs tracking-[0.25em] font-sans text-[#7A5C2E]">
                {t("DIVINE BLESSINGS", "દિવ્ય આશીર્વાદ")}
              </p>
              <div className="h-px w-12 bg-[#C8922A]" />
            </div>
            <h2 className="mb-4 font-serif text-3xl md:text-5xl text-[#1A1208]">
              {isGu ? (
                <em className="text-[#8b2323] not-italic">{service.titleGu}ના કલ્યાણકારી લાભો</em>
              ) : (
                <>
                  Benefits of <em className="text-[#8b2323] not-italic">{service.titleEn}</em>
                </>
              )}
            </h2>
            <p className="text-lg max-w-xl mx-auto text-[#7A5C2E]">
              {t(
                "As prescribed in ancient Vedic texts, performing this sacred ceremony bestows peace, prosperity, and spiritual grace.",
                "પ્રાચીન વૈદિક શાસ્ત્રોમાં જણાવ્યા મુજબ, આ પવિત્ર અનુષ્ઠાનથી શાંતિ, સમૃદ્ધિ અને આધ્યાત્મિક કૃપા પ્રાપ્ત થાય છે."
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeBenefits.map((b, i) => (
              <div
                key={i}
                className="p-8 bg-[#F7F0E2] border border-[#DDD0B0] transition-all duration-300 hover:-translate-y-1 hover:border-[#8b2323]"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-semibold text-xl mb-2 font-serif text-[#1A1208]">
                  {b.title}
                </h3>
                <p className="text-base leading-relaxed text-[#7A5C2E]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHLOKA BANNER ── */}
      <section className="py-16 relative overflow-hidden bg-[#8b2323] text-[#EDE4CC]">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl sm:text-3xl leading-relaxed mb-4 text-[#EDE4CC]">
            {service.sanskritSloka}
          </p>
          <div className="h-px w-24 mx-auto mb-4 bg-[#C8922A]" />
          <p className="text-base italic text-[#C8922A]">
            {t(
              '"Sacred Vedic Vibrations that grant protection, spiritual awakening, and peace."',
              '"પવિત્ર વૈદિક મંત્રોચ્ચાર જે રક્ષણ, આધ્યાત્મિક જાગૃતિ અને શાંતિ પ્રદાન કરે છે."'
            )}
          </p>
          <p className="mt-2 text-xs tracking-widest opacity-60 font-sans text-[#EDE4CC]">
            {t("— Bada Jyotisha & Karmakand", "— શ્રી બડા જ્યોતિષ અને કર્મકાંડ")}
          </p>
        </div>
      </section>

      {/* ── RITUAL STEPS ── */}
      <section id="rituals" className="py-20 bg-[#F7F0E2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C8922A]" />
              <p className="text-xs tracking-[0.25em] font-sans text-[#7A5C2E]">
                {t("THE SACRED PROCESS", "પવિત્ર વિધિ પ્રક્રિયા")}
              </p>
              <div className="h-px w-12 bg-[#C8922A]" />
            </div>
            <h2 className="mb-4 font-serif text-3xl md:text-5xl text-[#1A1208]">
              {isGu ? (
                <em className="text-[#8b2323] not-italic">{service.titleGu} - પૂજા અને હવનના તબક્કા</em>
              ) : (
                <>
                  {service.titleEn} <em className="text-[#8b2323] not-italic">Ritual Steps</em>
                </>
              )}
            </h2>
            <p className="text-lg max-w-xl mx-auto text-[#7A5C2E]">
              {t(
                "Conducted strictly according to authentic Vedic Vidhi by seasoned learned pandits.",
                "અનુભવી અને વિદ્વાન વેદપાઠી બ્રાહ્મણો દ્વારા સંપૂર્ણ શાસ્ત્રોક્ત વિધિથી સંપન્ન."
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeRituals.map((r, i) => (
              <div
                key={i}
                className="p-8 bg-[#EDE4CC] border border-[#DDD0B0] transition-all duration-300"
              >
                <p className="font-bold text-4xl mb-3 font-serif text-[#C8922A]/60">{r.step}</p>
                <div className="h-px w-8 mb-4 bg-[#8b2323]" />
                <h3 className="font-semibold text-xl mb-2 font-serif text-[#1A1208]">{r.title}</h3>
                <p className="text-base leading-relaxed text-[#7A5C2E]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMS / DEITIES SECTION (IF APPLICABLE) ── */}
      {activeForms && activeForms.length > 0 && (
        <section id="forms" className="py-20 bg-[#EDE4CC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#C8922A]" />
                <p className="text-xs tracking-[0.25em] font-sans text-[#7A5C2E]">
                  {t("DIVINE ENERGIES", "દિવ્ય શક્તિઓ")}
                </p>
                <div className="h-px w-12 bg-[#C8922A]" />
              </div>
              <h2 className="mb-4 font-serif text-3xl md:text-5xl text-[#1A1208]">
                {activeFormsTitle}
              </h2>
              <p className="text-lg max-w-xl mx-auto text-[#7A5C2E]">
                {t(
                  "Invoking divine cosmic forms to grant specific strength and spiritual wisdom.",
                  "વિશેષ બળ અને આધ્યાત્મિક જ્ઞાન માટે દિવ્ય શક્તિઓનું અર્ચન."
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
              {activeForms.map((form, i) => (
                <div
                  key={i}
                  className="text-center p-3 bg-[#F7F0E2] border border-[#DDD0B0] transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="text-2xl mb-2">{form.emoji}</div>
                  <p className="font-bold text-[12px] leading-tight mb-0.5 font-serif text-[#1A1208]">{form.name}</p>
                  <p className="text-[10px] leading-tight font-sans text-[#7A5C2E]">{form.trait}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-[#F7F0E2]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C8922A]" />
              <p className="text-xs tracking-[0.25em] font-sans text-[#7A5C2E]">
                {t("COMMON QUESTIONS", "સામાન્ય પ્રશ્નો")}
              </p>
              <div className="h-px w-12 bg-[#C8922A]" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1208]">
              {isGu ? (
                <em className="text-[#8b2323] not-italic">વારંવાર પૂછાતા પ્રશ્નો</em>
              ) : (
                <>
                  Frequently Asked <em className="text-[#8b2323] not-italic">Questions</em>
                </>
              )}
            </h2>
          </div>

          <div className="space-y-3">
            {activeFaqs.map((faq, i) => (
              <div key={i} className="bg-[#EDE4CC] border border-[#DDD0B0]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-semibold font-serif text-[#1A1208]">{faq.q}</span>
                  <span
                    className="text-xl transition-transform duration-300 font-light text-[#8b2323]"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-[#DDD0B0]/60 pt-3">
                    <p className="text-base leading-relaxed text-[#7A5C2E]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET YOUR ACHARYA ── */}
      <section className="py-20 bg-[#F7F0E2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#C8922A]" />
            <p className="text-xs tracking-[0.3em] font-sans text-[#7A5C2E] uppercase">
              {t("YOUR GUIDE", "આપના માર્ગદર્શક")}
            </p>
            <div className="h-px w-12 bg-[#C8922A]" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 bg-[#EDE4CC] border border-[#DDD0B0] shadow-sm p-8 md:p-12">
            {/* Owner photo */}
            <div className="flex-shrink-0 relative">
              <div className="w-52 h-52 md:w-64 md:h-64 overflow-hidden border-4 border-[#C8922A] rounded-full shadow-lg">
                <img
                  src="/owner.png"
                  alt="Acharya - Shree Bada Jyotish"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Gold ring decoration */}
              <div className="absolute -inset-2 rounded-full border border-[#C8922A]/30 pointer-events-none" />
            </div>

            {/* Text content */}
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.25em] font-sans text-[#C8922A] uppercase mb-2">
                {t("LEAD ACHARYA & KARMAKANDI", "મુખ્ય આચાર્ય અને કર્મકાંડી")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1208] mb-1">
                {t("Shree Bada Jyotish", "શ્રી બડા જ્યોતિષ")}
              </h2>
              <p className="text-base italic text-[#8b2323] font-serif mb-4">
                {t("& Karmakand Pandit", "અને કર્મકાંડ પંડિત")}
              </p>
              <div className="h-px w-16 bg-[#C8922A] mb-4 mx-auto md:mx-0" />
              <p className="text-base leading-relaxed text-[#7A5C2E] max-w-xl">
                {t(
                  "With deep roots in Vedic tradition and decades of sacred practice, our lead Acharya personally oversees every ritual — ensuring authentic Vedic Vidhi, precise mantra recitation, and divine blessings reach every devotee.",
                  "વૈદિક પરંપરામાં ઊંડી શ્રદ્ધા અને દાયકાઓના પવિત્ર અભ્યાસ સાથે, અમારા મુખ્ય આચાર્ય દરેક અનુષ્ઠાનનું સ્વયં નિર્દેશન કરે છે — જેથી દરેક ભક્ત સુધી અસ્સલ વૈદિક વિધિ, ચોક્કસ મંત્રોચ્ચાર અને દૈવી આશીર્વાદ પહોંચે."
                )}
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                <span className="px-3 py-1.5 text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#F7F0E2] border border-[#DDD0B0] text-[#7A5C2E]">
                  🕉️ {t("Vedic Karmakand", "વૈદિક કર્મકાંડ")}
                </span>
                <span className="px-3 py-1.5 text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#F7F0E2] border border-[#DDD0B0] text-[#7A5C2E]">
                  🪐 {t("Jyotish Shastra", "જ્યોતિષ શાસ્ત્ર")}
                </span>
                <span className="px-3 py-1.5 text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#F7F0E2] border border-[#DDD0B0] text-[#7A5C2E]">
                  🔥 {t("Yagna & Havan", "યજ્ઞ અને હવન")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTER FORM ── */}
      <section id="register" className="py-20 bg-[#EDE4CC]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C8922A]" />
              <p className="text-xs tracking-[0.25em] font-sans text-[#7A5C2E]">
                {t("BOOK YOUR PUJA", "આપની પૂજા બુક કરો")}
              </p>
              <div className="h-px w-12 bg-[#C8922A]" />
            </div>
            <h2 className="mb-3 font-serif text-3xl md:text-5xl text-[#1A1208]">
              {isGu ? (
                <em className="text-[#8b2323] not-italic">તમારો પવિત્ર સંકલ્પ નોંધાવો</em>
              ) : (
                <>
                  Register Your <em className="text-[#8b2323] not-italic">Sankalpa</em>
                </>
              )}
            </h2>
            <p className="text-lg text-[#7A5C2E]">
              {isGu
                ? `${service.titleGu} માટે દિવ્ય આશીર્વાદ સાથે આપની આધ્યાત્મિક યાત્રા શરૂ કરો. અમારા આચાર્યશ્રી આપને માર્ગદર્શન આપશે.`
                : `Begin your sacred journey with divine blessings for ${service.titleEn}. Our pandits will assist and confirm details with you.`}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 md:p-12 bg-[#F7F0E2] border-2 border-[#8b2323] shadow-xl text-center rounded-sm">
              <div className="w-16 h-16 bg-[#8b2323] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-md">
                ✓
              </div>
              <div className="inline-block px-4 py-1 bg-[#8b2323]/10 text-[#8b2323] text-xs font-sans uppercase font-bold tracking-widest mb-3 rounded-full border border-[#8b2323]/20">
                {t("APPOINTMENT REGISTERED", "એપોઇન્ટમેન્ટ નોંધાયેલ છે")}
              </div>
              <h3 className="text-3xl font-bold mb-2 font-serif text-[#8b2323]">
                {t("Har Har Mahadev! 🙏", "હર હર મહાદેવ! 🙏")}
              </h3>
              <p className="text-xl font-medium text-[#1A1208] mb-6">
                {isGu
                  ? `${service.titleGu} માટે આપની એપોઇન્ટમેન્ટ સફળતાપૂર્વક નોંધી લેવામાં આવી છે.`
                  : `Your appointment request for ${service.titleEn} (${service.titleGu}) has been registered successfully.`}
              </p>

              {/* Registration Summary Details */}
              <div className="max-w-md mx-auto bg-white/80 p-6 border border-[#DDD0B0] text-left text-sm font-sans space-y-3 mb-8 shadow-sm rounded-sm">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 uppercase text-xs font-semibold">
                    {t("Booking Ref:", "બુકિંગ રેફરન્સ:")}
                  </span>
                  <span className="font-bold text-[#8b2323] tracking-wide">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 uppercase text-xs font-semibold">
                    {t("Puja / Service:", "પૂજા / સેવા:")}
                  </span>
                  <span className="font-bold text-[#1A1208]">{activeTitle}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 uppercase text-xs font-semibold">
                    {t("Devotee Name:", "યજમાનનું નામ:")}
                  </span>
                  <span className="font-semibold text-[#1A1208]">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 uppercase text-xs font-semibold">
                    {t("Phone:", "મોબાઇલ નંબર:")}
                  </span>
                  <span className="font-semibold text-[#1A1208]">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 uppercase text-xs font-semibold">
                    {t("Email:", "ઇમેઇલ સરનામું:")}
                  </span>
                  <span className="font-semibold text-[#1A1208]">{formData.email}</span>
                </div>
                {formData.date && (
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 uppercase text-xs font-semibold">
                      {t("Preferred Date:", "ઇચ્છિત તારીખ:")}
                    </span>
                    <span className="font-semibold text-[#1A1208]">{formData.date}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 uppercase text-xs font-semibold">
                    {t("Status:", "સ્થિતિ:")}
                  </span>
                  <span className="font-bold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full text-xs uppercase border border-green-300">
                    {t("Registered", "સફળતાપૂર્વક નોંધાયેલ")}
                  </span>
                </div>
                {formData.message && (
                  <div className="pt-1">
                    <span className="text-gray-500 uppercase text-xs font-semibold block mb-1">
                      {t("Sankalpa / Notes:", "સંકલ્પ / વિગતો:")}
                    </span>
                    <p className="text-gray-700 italic bg-amber-50/80 p-2.5 border border-amber-200 rounded text-xs leading-relaxed">
                      "{formData.message}"
                    </p>
                  </div>
                )}
              </div>

              <p className="text-sm text-[#7A5C2E] max-w-lg mx-auto mb-6 leading-relaxed font-sans">
                {t(
                  "Our Acharyas & Pandits will review your request and get in touch with you shortly to confirm the auspicious time and ritual guidelines.",
                  "અમારા આચાર્યશ્રી અને ભૂદેવો આપની અરજીની સમીક્ષા કરી શુભ મુહૂર્ત અને વિધિ અંગે તુરંત સંપર્ક કરશે."
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`https://wa.me/919687229518?text=${encodeURIComponent(
                    isGu
                      ? `એપોઇન્ટમેન્ટ :- ${service.titleGu} (${service.titleEn})\nબુકિંગ રેફ: ${bookingRef}\nનામ: ${formData.name}\nફોન: ${formData.phone}\nતારીખ: ${formData.date || "જણાવેલ નથી"}`
                      : `Inquiry :- for ${service.titleEn} (${service.titleGu})\nRef: ${bookingRef}\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date || "Not specified"}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white text-xs uppercase font-sans font-bold tracking-widest hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <span>{t("Connect on WhatsApp", "વોટ્સએપ પર સંપર્ક કરો")}</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#8b2323] text-white text-xs uppercase font-sans font-bold tracking-widest hover:bg-[#a12c2c] transition-all shadow-sm hover:shadow-md"
                >
                  {t("Book Another Appointment", "અન્ય એપોઇન્ટમેન્ટ બુક કરો")}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 bg-[#F7F0E2] border border-[#DDD0B0] space-y-5 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest mb-2 font-semibold font-sans text-[#7A5C2E]">
                    {t("FULL NAME *", "પૂરું નામ *")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("Enter your full name", "આપનું પૂરું નામ લખો")}
                    className="w-full px-4 py-3 text-base bg-[#F7F0E2] border border-[#DDD0B0] text-[#1A1208] outline-none focus:border-[#8b2323] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest mb-2 font-semibold font-sans text-[#7A5C2E]">
                    {t("PHONE NUMBER *", "મોબાઇલ નંબર *")}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 text-base bg-[#F7F0E2] border border-[#DDD0B0] text-[#1A1208] outline-none focus:border-[#8b2323] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 font-semibold font-sans text-[#7A5C2E]">
                  {t("EMAIL ADDRESS *", "ઇમેઇલ સરનામું *")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 text-base bg-[#F7F0E2] border border-[#DDD0B0] text-[#1A1208] outline-none focus:border-[#8b2323] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 font-semibold font-sans text-[#7A5C2E]">
                  {t("PREFERRED DATE FOR RITUAL", "પૂજા / યજ્ઞ માટેની અનુકૂળ તારીખ")}
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 text-base bg-[#F7F0E2] border border-[#DDD0B0] text-[#1A1208] outline-none focus:border-[#8b2323] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 font-semibold font-sans text-[#7A5C2E]">
                  {t("YOUR INTENTION / SANKALPA", "આપનો સંકલ્પ / હેતુ")}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t(
                    "Tell us about your Sankalpa (Health, Prosperity, Obstacle Removal, Family Harmony, etc.)",
                    "આપનો સંકલ્પ જણાવો (જેમ કે સ્વાસ્થ્ય, સમૃદ્ધિ, મનોકામના, ગ્રહ શાંતિ, વગેરે)"
                  )}
                  className="w-full px-4 py-3 text-base bg-[#F7F0E2] border border-[#DDD0B0] text-[#1A1208] outline-none focus:border-[#8b2323] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm font-semibold tracking-widest bg-[#8b2323] text-[#F7F0E2] font-sans hover:bg-[#a12c2c] transition-colors shadow-sm uppercase"
              >
                🕉️ &nbsp;{t("SUBMIT REGISTRATION — ", "બુકિંગ મોકલો — ")}{activeTitle}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
