export const ANNOUNCEMENT = "ૐ નમઃ શિવાય ૐ";

export interface NavLinkSection {
  title: string;
  links: { title: string; href: string }[];
}

export interface MegaMenu {
  image?: string;
  imageTitle?: string;
  imageCta?: string;
  imageHref?: string;
  sections?: NavLinkSection[];
}

export interface NavLink {
  title: string;
  href?: string;
  megaMenu?: MegaMenu;
}

export const NAV_LINKS: NavLink[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "SERVICES",
    href: "/services",
  },
  {
    title: "OUR STORY",
    href: "/pages/about-us",
  },
  {
    title: "CONTACT US",
    href: "/pages/contact-us",
  }
];

export const HERO_SLIDES = [
  {
    image: "/home.mp4",
    heading: "",
    subtext: "अहिंसा परमं सत्यं",
    cta: "BOOK APPOINTMENT",
    href: "/navchandi-yagna"
  }
];

export const BEST_SELLERS = [
  {
    id: "1",
    title: "Navchandi Yagna",
    image: "/img/services/navchandi-yagna.jpg",
    href: "/services/navchandi-yagna"
  },
  {
    id: "2",
    title: "Satyanarayan Katha",
    image: "/img/services/satyanarayan-katha.jpg",
    href: "/services/satyanarayan-katha"
  },
  {
    id: "3",
    title: "Ganapati Yagna",
    image: "/img/services/ganapati-yagna.jpg",
    href: "/services/ganapati-yagna"
  },
  {
    id: "4",
    title: "Kundali Analysis",
    image: "/kundali.png",
    href: "/services/kundali-analysis"
  }
];

export const COLLECTIONS = [
  { title: "નવચંડી યજ્ઞ", image: "/img/services/navchandi-yagna.jpg", href: "/services/navchandi-yagna" },
  { title: "શતચંડી મહાયજ્ઞ", image: "/img/services/shatchandi-mahayagna.jpg", href: "/services/shatchandi-mahayagna" },
  { title: "રુદ્રાભિષેક તથા મહામૃત્યુંજય યજ્ઞ", image: "/img/services/rudrabhishek-mahamrityunjaya.jpg", href: "/services/rudrabhishek-mahamrityunjaya" },
  { title: "મહામૃત્યુંજય યજ્ઞ", image: "/img/services/mahamrityunjaya-yagna.jpg", href: "/services/mahamrityunjaya-yagna" },
  { title: "લક્ષ્મી કુબેર યજ્ઞ", image: "/img/services/laxmi-kuber-yagna.jpg", href: "/services/laxmi-kuber-yagna" },
  { title: "ગણપતિ યજ્ઞ", image: "/img/services/ganapati-yagna.jpg", href: "/services/ganapati-yagna" },
  { title: "વાસ્તુ શાંતિ યજ્ઞ", image: "/img/services/vastu-shanti-yagna.jpg", href: "/services/vastu-shanti-yagna" },
  { title: "ગૃહ પ્રવેશ હવન", image: "/img/services/gruh-pravesh-havan.jpg", href: "/services/gruh-pravesh-havan" },
  { title: "વિવાહ યજ્ઞ", image: "/img/services/vivah-yagna.jpg", href: "/services/vivah-yagna" },
  { title: "સત્યનારાયણ કથા તથા હવન", image: "/img/services/satyanarayan-katha.jpg", href: "/services/satyanarayan-katha" },
  { title: "પિતૃ દોષ નિવારણ યજ્ઞ", image: "/img/services/pitru-dosh-nivarana.jpg", href: "/services/pitru-dosh-nivarana" },
  { title: "નવગ્રહ શાંતિ યજ્ઞ", image: "/Navgrah.jpg", href: "/services/navgrah-shanti-yagna" },
  { title: "સંતાન પ્રાપ્તિ યજ્ઞ", image: "/img/services/santan-prapti-yagna.jpg", href: "/services/santan-prapti-yagna" },
  { title: "વ્યવસાય તથા ધન વૃદ્ધિ યજ્ઞ", image: "/lak.jpg", href: "/services/vyavasay-dhan-vriddhi" },
  { title: "સર્વ બાધા નિવારણ યજ્ઞ", image: "/img/services/sarva-badha-nivarana.jpg", href: "/services/sarva-badha-nivarana" },
  { title: "ગૃહ શાંતિ તથા માંગલિક દોષ નિવારણ", image: "/img/services/gruh-shanti-manglik.jpg", href: "/services/gruh-shanti-manglik" },
  { title: "કુંડળી વિશ્લેષણ", image: "/kundali.png", href: "/services/kundali-analysis" }
];

export const BLOG_POSTS = [
  {
    title: "Navchandi Yagna – The Divine Fire Ritual That Removes All Obstacles",
    image: "/img/services/navchandi-yagna.jpg",
    date: "21 Aug, 2026",
    excerpt: "Discover the sacred power of Navchandi Yagna — nine days of holy fire, 700 verses of Durga Saptashati, and the divine grace of Maa Chandi that dissolves deep karmic obstacles..."
  },
  {
    title: "Rudrabhishek – Why Milk on the Shivling Grants Health & Longevity",
    image: "/img/services/rudrabhishek-mahamrityunjaya.jpg",
    date: "02 Aug, 2026",
    excerpt: "The ancient scriptures describe Rudrabhishek as the supreme remedy for illness and fear. Eleven sacred dravyas, 1,25,000 Mahamrityunjaya chants, and the blessings of Har Har Mahadev..."
  },
  {
    title: "Vastu Shanti – Restore Peace & Prosperity in Your Home",
    image: "/img/services/vastu-shanti-yagna.jpg",
    date: "18 Jul, 2026",
    excerpt: "Unexplained arguments, leaking finances, or restless nights? Vastu doshas can be pacified with a single Vedic yagna — no demolition or structural change required..."
  },
  {
    title: "Your Kundali Is Your Cosmic Blueprint – Learn What It Reveals",
    image: "/kundali.png",
    date: "30 Jun, 2026",
    excerpt: "Career, marriage, health, wealth — the 12 houses and 9 planets of your birth chart hold the answers. Our Vedic astrologers decode your chart and prescribe precise remedies..."
  }
];

export const SOCIAL_IMAGES = [
  "/img/services/ganapati-yagna.jpg",
  "/owner2.png",
  "/img/services/rudrabhishek-mahamrityunjaya.jpg",
  "/mataji.png",
  "/img/services/vivah-yagna.jpg"
];
