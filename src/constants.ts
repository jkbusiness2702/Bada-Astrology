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
    image: "/navchnadi.jpeg",
    href: "/services/navchandi-yagna"
  },
  {
    id: "2",
    title: "Satyanarayan Katha",
    price: "From ₹ 230",
    image: "/satyanarayan.jpeg",
    href: "/services/satyanarayan-katha"
  },
  {
    id: "3",
    title: "Ganapati Yagna",
    image: "/ganapati.jpg",
    href: "/services/ganapati-yagna"
  },
  {
    id: "4",
    title: "Kundali Analysis",
    image: "/kundalii.png",
    href: "/services/kundali-analysis"
  }
];

export const COLLECTIONS = [
  { title: "નવચંડી યજ્ઞ", image: "/navchnadi.jpeg", href: "/services/navchandi-yagna" },
  { title: "શતચંડી મહાયજ્ઞ", image: "/sat.jpeg", href: "/services/shatchandi-mahayagna" },
  { title: "રુદ્રાભિષેક તથા મહામૃત્યુંજય યજ્ઞ", image: "/OIP (1).webp", href: "/services/rudrabhishek-mahamrityunjaya" },
  { title: "મહામૃત્યુંજય યજ્ઞ", image: "/s3.jpeg", href: "/services/mahamrityunjaya-yagna" },
  { title: "લક્ષ્મી કુબેર યજ્ઞ", image: "/lak.jpg", href: "/services/laxmi-kuber-yagna" },
  { title: "ગણપતિ યજ્ઞ", image: "/ganapati.jpg", href: "/services/ganapati-yagna" },
  { title: "વાસ્તુ શાંતિ યજ્ઞ", image: "/vastu.jpeg", href: "/services/vastu-shanti-yagna" },
  { title: "ગૃહ પ્રવેશ હવન", image: "/ghruvastu.jpeg", href: "/services/gruh-pravesh-havan" },
  { title: "વિવાહ યજ્ઞ", image: "/s4.jpeg", href: "/services/vivah-yagna" },
  { title: "સત્યનારાયણ કથા તથા હવન", image: "/satyanarayan.jpeg", href: "/services/satyanarayan-katha" },
  { title: "પિતૃ દોષ નિવારણ યજ્ઞ", image: "/s5.jpeg", href: "/services/pitru-dosh-nivarana" },
  { title: "નવગ્રહ શાંતિ યજ્ઞ", image: "/Navgrah.jpg", href: "/services/navgrah-shanti-yagna" },
  { title: "સંતાન પ્રાપ્તિ યજ્ઞ", image: "/s1.jpeg", href: "/services/santan-prapti-yagna" },
  { title: "વ્યવસાય તથા ધન વૃદ્ધિ યજ્ઞ", image: "/lak.jpg", href: "/services/vyavasay-dhan-vriddhi" },
  { title: "સર્વ બાધા નિવારણ યજ્ઞ", image: "/s2.jpeg", href: "/services/vyavasay-dhan-vriddhi" },
  { title: "ગૃહ શાંતિ તથા માંગલિક દોષ નિવારણ", image: "/s3.jpeg", href: "/services/gruh-shanti-manglik" }
];

export const BLOG_POSTS = [
  {
    title: "SKB's Sutarfeni – A Sweet Whirlwind of Flavour and Tradition",
    image: "/s1.jpeg",
    date: "29 Jun, 2026",
    excerpt: "Discover the magic of Sutarfeni, our finely shredded sweet classic. Handcrafted layers that melt away in pure golden sweetness..."
  },
  {
    title: "SKB’s Halwasan – Born in Khambhat, Loved Worldwide",
    image: "/s2.jpeg",
    date: "22 May, 2026",
    excerpt: "Halwasan is Khambhat’s pride. Made with nutritious sprouted wheat, rich milk solid caramelization, and pure ghee..."
  },
  {
    title: "SKB’s Kaju Katli – Pure Royal Taste in Every Bite",
    image: "/s3.jpeg",
    date: "20 Jun, 2024",
    excerpt: "Elegant, diamond-shaped, silver-gilded perfection. Our Kaju Katli uses premium grade cashews with zero compromises..."
  },
  {
    title: "SKB’s Rainbow Shrikhand – Where Colors Turn into Creamy Luxury",
    image: "/s4.jpeg",
    date: "17 Jun, 2024",
    excerpt: "Creamy hung curd blended with natural fruit pulps and saffron. A colorful festive masterpiece to elevate your dessert table..."
  }
];

export const SOCIAL_IMAGES = [
  "/s11.jpeg",
  "/owner2.png",
  "/s33.jpeg",
  "/mataji.png",
  "/s55.jpeg"
];
