import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactUsPage = () => {
  const { t } = useLanguage();
  const location = useLocation();

  // Scroll to anchor section when navigating with a hash (e.g. /contact#say-hello)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    enquiryFor: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>('');
  const [lastSubmittedData, setLastSubmittedData] = useState<typeof formData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const refId = `SKB-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refId);
    setLastSubmittedData({ ...formData });

    const whatsappNumber = "919687229518";
    const enquirySubject = formData.enquiryFor || 'General Appointment & Inquiry';
    const text = `Inquiry / Appointment :- for ${enquirySubject}
Ref: ${refId}

Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
Enquiry For: ${enquirySubject}
Message: ${formData.message || 'Not specified'}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(url, "_blank");
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        enquiryFor: '',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="bg-[#f9f3e7] min-h-screen text-[#333333] font-sans">
      {/* 1. Hero Collection Banner */}
      <div
        className="relative bg-cover bg-center py-24 md:py-32 text-white border-b-4 border-[#C8984E]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/navchnadi.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-white mb-4 leading-tight tracking-wide">
            {t("We Love Hearing From You", "અમારો સંપર્ક કરો")}
          </h1>
          <p className="font-sans text-sm md:text-lg text-[#f9f3e7] uppercase tracking-wider max-w-2xl opacity-90">
            {t("Do you have a question or some feedback for us? Fill out the form below and we'll take this forward.", "તમને કોઈ પ્રશ્ન કે પ્રતિસાદ છે? નીચે આપેલ ફોર્મ ભરો અને અમે આપને તુરંત સંપર્ક કરીશું.")}
          </p>
        </div>
      </div>

      {/* 2. Contact Main Section ("Say Hello!") */}
      <section id="say-hello" className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#8b1538] font-normal mb-4">
            {t("Say Hello!", "જય શ્રી કૃષ્ણ!")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {t("Use this space to send us feedback, questions, or find out more about our services and rituals.", "અમારા યજ્ઞો, પૂજા વિધિઓ અને જ્યોતિષ સેવાઓ અંગેની માહિતી તથા એપોઇન્ટમેન્ટ માટે અહીં સંપર્ક કરો.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 bg-white/60 p-8 md:p-10 rounded-sm border border-[#8b2323]/10 shadow-sm space-y-8">
            <div>
              <h3 className="text-[#8b2323] font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <MapPin size={16} className="text-[#8b2323]" />
                Office Address :
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                22, Green Villa Recidency Mariyampura Press road,<br />
                Khambhat, Gujarat 388620
              </p>
            </div>

            <div>
              <h3 className="text-[#8b2323] font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Phone size={16} className="text-[#8b2323]" />
                Phone :
              </h3>
              <p>
                <a
                  href="tel:+919687229518"
                  className="text-gray-700 hover:text-[#8b2323] text-sm md:text-base font-medium transition-colors"
                >
                  +91 9687229518
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-[#8b2323] font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Mail size={16} className="text-[#8b2323]" />
                Email :
              </h3>
              <p>
                <a
                  href="mailto:pandya523@gmail.com"
                  className="text-gray-700 hover:text-[#8b2323] text-sm md:text-base font-medium transition-colors"
                >
                  pandya523@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-[#8b2323] font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Clock size={16} className="text-[#8b2323]" />
                Support Timing :
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                09:00 am to 07:00 pm IST
              </p>
            </div>

            <div>
              <h3 className="text-[#8b2323] font-bold text-xs uppercase tracking-[0.2em] mb-3">
                Follow Us :
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#8b1538] text-white flex items-center justify-center hover:bg-[#6b1028] transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-sm border border-gray-200 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-8 px-4 space-y-6">
                <div className="w-16 h-16 bg-[#8b2323] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-2xl shadow-md">
                  <CheckCircle size={36} />
                </div>
                <div className="inline-block px-4 py-1 bg-[#8b2323]/10 text-[#8b2323] text-xs uppercase font-bold tracking-widest rounded-full border border-[#8b2323]/20">
                  REQUEST REGISTERED
                </div>
                <h3 className="text-3xl font-serif text-[#8b1538] font-bold">
                  Your Request Has Been Registered Successfully! 🙏
                </h3>
                <p className="text-gray-700 text-base max-w-md mx-auto">
                  Thank you for reaching out to Shri Khambhat Jyotish & Karmakand. Our team will review your inquiry and contact you shortly.
                </p>

                {/* Summary Box */}
                {lastSubmittedData && (
                  <div className="max-w-md mx-auto bg-[#F9F3E7] p-6 border border-[#DDD0B0] text-left text-sm space-y-3 rounded-sm shadow-sm">
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="text-gray-500 uppercase text-xs font-semibold">Reference No:</span>
                      <span className="font-bold text-[#8b2323]">{bookingRef}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="text-gray-500 uppercase text-xs font-semibold">Devotee Name:</span>
                      <span className="font-semibold text-gray-800">{lastSubmittedData.firstName} {lastSubmittedData.lastName}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="text-gray-500 uppercase text-xs font-semibold">Phone:</span>
                      <span className="font-semibold text-gray-800">{lastSubmittedData.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="text-gray-500 uppercase text-xs font-semibold">Email:</span>
                      <span className="font-semibold text-gray-800">{lastSubmittedData.email}</span>
                    </div>
                    {lastSubmittedData.enquiryFor && (
                      <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="text-gray-500 uppercase text-xs font-semibold">Enquiry For:</span>
                        <span className="font-semibold text-[#8b2323]">{lastSubmittedData.enquiryFor}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="text-gray-500 uppercase text-xs font-semibold">Status:</span>
                      <span className="font-bold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full text-xs uppercase border border-green-300">
                        Registered
                      </span>
                    </div>
                    {lastSubmittedData.message && (
                      <div className="pt-1">
                        <span className="text-gray-500 uppercase text-xs font-semibold block mb-1">Message:</span>
                        <p className="text-gray-700 italic bg-white p-2.5 border border-gray-200 rounded text-xs leading-relaxed">
                          "{lastSubmittedData.message}"
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                  <a
                    href={`https://wa.me/919687229518?text=${encodeURIComponent(`Inquiry / Appointment :- Ref: ${bookingRef}\nName: ${lastSubmittedData?.firstName || ''} ${lastSubmittedData?.lastName || ''}\nPhone: ${lastSubmittedData?.phone || ''}\nSubject: ${lastSubmittedData?.enquiryFor || 'Inquiry'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#8b2323] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#6b1028] transition-colors shadow-sm"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs uppercase font-medium text-gray-600 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm text-gray-800 focus:outline-none focus:border-[#8b2323] transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs uppercase font-medium text-gray-600 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm text-gray-800 focus:outline-none focus:border-[#8b2323] transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase font-medium text-gray-600 mb-2">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm text-gray-800 focus:outline-none focus:border-[#8b2323] transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase font-medium text-gray-600 mb-2">
                    Email Id <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm text-gray-800 focus:outline-none focus:border-[#8b2323] transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="enquiryFor" className="block text-xs uppercase font-medium text-gray-600 mb-2">
                    Enquiry For <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="enquiryFor"
                    name="enquiryFor"
                    required
                    value={formData.enquiryFor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm text-gray-800 focus:outline-none focus:border-[#8b2323] transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="Pooja & Yagna Booking">Pooja & Yagna Booking</option>
                    <option value="Kundali Analysis">Kundali Analysis</option>
                    <option value="Vastu Consultation">Vastu Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase font-medium text-gray-600 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm text-gray-800 focus:outline-none focus:border-[#8b2323] transition-colors resize-y"
                    placeholder="Write your message here..."
                  />
                </div>

                <p className="text-xs text-gray-500 leading-relaxed text-center italic">
                  By submitting the above information you agree to receive communication regarding products &amp; services over SMS/WhatsApp/Email.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#8b2323] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#6b1028] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <span>SUBMIT</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Find Us / Map Section */}
      <section className="bg-[#f6ede0] py-16 px-6 border-t border-[#8b2323]/10">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-[#8b2323] font-normal mb-2">
            Find Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base opacity-80">
            Shri Khambhat Jyotish &amp; Karmakand is present to serve you, drop in anytime!
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Tab */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-[#8b2323] text-white rounded-sm shadow-md text-left">
              <h3 className="font-semibold text-lg mb-2">Khambhat Office</h3>
              <p className="text-xs opacity-90 leading-relaxed mb-3">
                22, Green Villa Recidency Mariyampura Press road, Khambhat, Gujarat 388620
              </p>
              <p className="text-xs font-medium text-[#f9f3e7]">
                Phone: +91 9687229518
              </p>
            </div>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-8 bg-white p-2 rounded-sm border-8 border-white shadow-md h-[400px]">
            <iframe
              title="Khambhat Location Map"
              className="w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.758465703571!2d72.62186587396226!3d22.324972679668814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f06ae7921bd1b%3A0x9d607a0ef008ec16!2sGreen%20Villa%20residancy!5e0!3m2!1sen!2sin!4v1785436545636!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
