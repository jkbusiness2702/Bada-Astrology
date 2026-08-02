export interface ServiceDetail {
  slug: string;
  titleGu: string;
  titleEn: string;
  eyebrow?: string;
  sanskritSloka: string;
  subtitle: string;
  heroImage: string;
  aboutImage: string;
  stats: { num: string; label: string }[];
  marquee: string[];
  aboutContent: {
    heading: string;
    paragraphs: string[];
  };
  formsTitle?: string;
  forms?: { name: string; trait: string; emoji: string; color: string }[];
  benefits: { icon: string; title: string; desc: string }[];
  rituals: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "navchandi-yagna": {
    slug: "navchandi-yagna",
    titleGu: "નવચંડી યજ્ઞ",
    titleEn: "Navchandi Yagna",
    eyebrow: "A SACRED VEDIC RITUAL",
    sanskritSloka: "या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता । नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥",
    subtitle: "Nine days of sacred fire, ancient mantras & divine grace of Goddess Chandi",
    heroImage: "/navchandi.jpeg",
    aboutImage: "/n1.jpeg",
    stats: [
      { num: "9", label: "Sacred Days" },
      { num: "700", label: "Vedic Verses" },
      { num: "9", label: "Forms of Durga" }
    ],
    marquee: ["🔥 CHANDI HOMAM", "🪷 NAV DURGA PUJA", "🕉️ DURGA SAPTASHATI", "✦ DIVINE BLESSINGS", "🙏 MAHA POORNAHUTI"],
    aboutContent: {
      heading: "Navchandi Yagna?",
      paragraphs: [
        "Navchandi Yagna is one of the most celebrated and potent Vedic rituals described in the Markandeya Purana, dedicated to Goddess Chandi — an all-powerful, compassionate incarnation of Maa Durga.",
        "\"Nav\" signifies nine — honoring all nine divine forms of Goddess Durga. The sacred verses of the Durga Saptashati (700 verses spread across 13 chapters) are recited in holy unison while offerings of pure ghee, dried fruits, samagri, and fresh flowers are surrendered into the Agni.",
        "Vedic shastras declare that Goddess Chandi and Lord Ganesha respond swiftly to true devotion. Performing this Yagna removes deep-seated karmic obstacles, protects from negative energy, and brings divine harmony to home and workplace."
      ]
    },
    formsTitle: "Nine Divine Forms of Maa Durga",
    forms: [
      { name: "Shailputri", trait: "Strength", emoji: "⛰️", color: "#E8EDE5" },
      { name: "Brahmacharini", trait: "Devotion", emoji: "📿", color: "#FDF5E8" },
      { name: "Chandraghanta", trait: "Courage", emoji: "🌙", color: "#E8EDE5" },
      { name: "Kushmanda", trait: "Creation", emoji: "☀️", color: "#FDF5E8" },
      { name: "Skandamata", trait: "Nurturing", emoji: "🌸", color: "#E8EDE5" },
      { name: "Katyayani", trait: "Victory", emoji: "⚔️", color: "#FDF5E8" },
      { name: "Kalaratri", trait: "Liberation", emoji: "🌑", color: "#E8EDE5" },
      { name: "Mahagauri", trait: "Purity", emoji: "🤍", color: "#FDF5E8" },
      { name: "Siddhidatri", trait: "Blessings", emoji: "🪷", color: "#E8EDE5" }
    ],
    benefits: [
      { icon: "🛡️", title: "Divine Protection", desc: "Shields devotees from evil energies, malefic planetary effects, and all negative forces in life." },
      { icon: "💰", title: "Wealth & Prosperity", desc: "Invokes Maa Lakshmi's blessings for abundance, financial growth, and lasting prosperity." },
      { icon: "🌿", title: "Health & Longevity", desc: "Bestows good health, vitality, and long life upon the devotee and their entire family." },
      { icon: "🏆", title: "Success & Fame", desc: "Grants recognition, fame, and victory over obstacles in personal and professional life." },
      { icon: "☮️", title: "Inner Peace & Moksha", desc: "Purifies mind, body, and soul — leading devotees on the path of spiritual liberation." },
      { icon: "🪐", title: "Planetary Harmony", desc: "Pacifies the malefic effects of all nine planets (Nav Grahas) in one's astrological chart." }
    ],
    rituals: [
      { step: "01", title: "Punyahavachanam", desc: "Lord Varuna is invoked to purify the sacred Yagna space and all ritual materials." },
      { step: "02", title: "Maha Ganapati Puja", desc: "Prayers to Lord Ganesha to remove all obstacles and ensure the Yagna proceeds flawlessly." },
      { step: "03", title: "Maha Sankalpam", desc: "The devotee takes a sacred vow (Sankalpa) stating the intention and purpose of the Yagna." },
      { step: "04", title: "Chandika Avahanam", desc: "Goddess Chandika is invoked with Ashta Bhairavas, Nav Grahas, and the nine Planets." },
      { step: "05", title: "Chandi Homam", desc: "All 700 verses of Durga Saptashati are chanted with ghee and sacred offerings into the holy fire." },
      { step: "06", title: "Maha Poornahuti", desc: "Final sacred offerings conclude the Yagna. Kanya Puja and Maha Naivedya are offered to the Goddess." }
    ],
    faqs: [
      { q: "What is Navchandi Yagna?", a: "Navchandi Yagna is a powerful Vedic ritual dedicated to Goddess Chandi — a fierce, all-powerful incarnation of Goddess Durga. It involves chanting of the 700-verse Durga Saptashati across nine sessions, with sacred fire offerings honoring all nine forms of Maa Durga." },
      { q: "When is the best time to perform Navchandi Yagna?", a: "It is most auspicious during Navratri. It can also be performed on dates and times specifically prescribed by a Pandit or Vedic astrologer based on the devotee's birth chart and intentions." },
      { q: "Who can participate in Navchandi Yagna?", a: "Any devout seeker — regardless of background — who wishes for divine blessings, removal of obstacles, health, wealth, or spiritual growth can participate. Experienced Vedic pandits conduct the rituals on the devotee's behalf." },
      { q: "What offerings are made during the Yagna?", a: "Sacred offerings (Ahutis) include ghee, sesame seeds, fruits, flowers, pongal, milk pudding, and Panchamrutam — offered into the holy fire with each verse of the Durga Saptashati." },
      { q: "What are the primary benefits of this Yagna?", a: "Benefits include protection from negative energies, wealth and prosperity, good health, fame, success, removal of planetary doshas, and spiritual progress toward Moksha (liberation)." }
    ]
  },

  "shatchandi-mahayagna": {
    slug: "shatchandi-mahayagna",
    titleGu: "શતચંડી મહાયજ્ઞ",
    titleEn: "Shatchandi Mahayagna",
    eyebrow: "SUPREME MAHA YAGNA",
    sanskritSloka: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥",
    subtitle: "Recitation of Durga Saptashati 100 times with 10,000 sacred fire offerings for ultimate victory and planetary peace",
    heroImage: "/satchadii.jpeg",
    aboutImage: "/mataji.png",
    stats: [
      { num: "100", label: "Saptashati Paath" },
      { num: "10K", label: "Sacred Ahutis" },
      { num: "10", label: "Learned Pandits" }
    ],
    marquee: ["🔥 100 SAPTASHATI PAATH", "🪷 SHATCHANDI HOMAM", "🕉️ MAHA POORNAHUTI", "✦ SUPREME BLESSINGS", "🙏 KANYA PUJAN"],
    aboutContent: {
      heading: "Shatchandi Mahayagna?",
      paragraphs: [
        "Shatchandi Mahayagna is the king of cosmic rituals performed to invoke Maa Chandi. In this Yagna, 10 learned Vedic Pandits recite the 700 verses of the Durga Saptashati 100 times collectively, completing 70,000 sacred mantras.",
        "A tenth part of these recitations — 7,000 to 10,000 ahutis — are surrendered into the holy fire along with pure guggul, dried fruits, lotus seeds, and cow ghee.",
        "It is recommended for kings, leaders, business families, and seekers facing insurmountable life trials or seeking global and family protection."
      ]
    },
    formsTitle: "Ten Mahavidya Energies Invoked",
    forms: [
      { name: "Kali", trait: "Transformation", emoji: "🌺", color: "#E8EDE5" },
      { name: "Tara", trait: "Guidance", emoji: "✨", color: "#FDF5E8" },
      { name: "Tripura Sundari", trait: "Beauty & Grace", emoji: "👑", color: "#E8EDE5" },
      { name: "Bhuvaneshwari", trait: "Cosmic Realm", emoji: "🌏", color: "#FDF5E8" },
      { name: "Bhairavi", trait: "Courage", emoji: "🔥", color: "#E8EDE5" },
      { name: "Chhinnamasta", trait: "Selfless Power", emoji: "⚡", color: "#FDF5E8" },
      { name: "Dhumavati", trait: "Detachment", emoji: "💨", color: "#E8EDE5" },
      { name: "Bagalamukhi", trait: "Triumph", emoji: "💛", color: "#FDF5E8" },
      { name: "Matangi", trait: "Arts & Wisdom", emoji: "🎶", color: "#E8EDE5" },
      { name: "Kamala", trait: "Abundance", emoji: "🪷", color: "#FDF5E8" }
    ],
    benefits: [
      { icon: "👑", title: "Royal Triumph", desc: "Overcomes massive business, legal, or personal hurdles with divine intervention." },
      { icon: "🛡️", title: "Impervious Shield", desc: "Protects entire generations from dark energies, planetary afflictions, and misfortune." },
      { icon: "💰", title: "Unbounded Wealth", desc: "Attracts massive commercial success, wealth preservation, and divine prosperity." },
      { icon: "🕊️", title: "Family Harmony", desc: "Purifies family lineage and instills eternal peace and joy." }
    ],
    rituals: [
      { step: "01", title: "Ganapati & Navgrah Sthapana", desc: "Initial invocation of deities for cosmic alignment." },
      { step: "02", title: "100 Saptashati Parayan", desc: "Continuous chanting of Durga Saptashati 100 times by senior acharyas." },
      { step: "03", title: "Homam & Ahuti", desc: "10,000 sacred fire offerings into the main Kund." },
      { step: "04", title: "Maha Poornahuti & Kanya Pujan", desc: "Offering silk saree, ornaments, fruits, and feeding 9 Kanyas." }
    ],
    faqs: [
      { q: "What makes Shatchandi Mahayagna unique?", a: "It is 10 times larger than a Navchandi Yagna. Reciting 700 mantras 100 times creates immense spiritual energy that neutralizes severe karmic obstacles." },
      { q: "How long does Shatchandi Mahayagna take?", a: "It typically spans 3 to 5 days, conducted meticulously by 10 or more Vedic Pandits." }
    ]
  },

  "rudrabhishek-mahamrityunjaya": {
    slug: "rudrabhishek-mahamrityunjaya",
    titleGu: "રુદ્રાભિષેક તથા મહામૃત્યુંજય યજ્ઞ",
    titleEn: "Rudrabhishek & Mahamrityunjaya Yagna",
    eyebrow: "DIVINE SHIVA RITUAL",
    sanskritSloka: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्यॉर्मुक्षीय माऽमृतात् ॥",
    subtitle: "Sacred liquid abhishekam of Shiva Lingam & 125,000 Mahamrityunjaya japa for health, longevity, and liberation",
    heroImage: "/s3.jpeg",
    aboutImage: "/s33.jpeg",
    stats: [
      { num: "1.25L", label: "Mantra Japa" },
      { num: "11", label: "Sacred Liquid Offerings" },
      { num: "108", label: "Rudra Namavali" }
    ],
    marquee: ["🔱 MAHAMRITYUNJAYA MANTRA", "💧 SHIVA LINGA ABHISHEKAM", "🔥 RUDRA HOMAM", "✦ HEALTH & LONGEVITY", "🙏 HAR HAR MAHADEV"],
    aboutContent: {
      heading: "Rudrabhishek & Mahamrityunjaya Yagna?",
      paragraphs: [
        "Rudrabhishek is an ancient Vedic ritual of bathing the Shiva Lingam with 11 sacred dravyas (Cow Milk, Curd, Ghee, Honey, Sugarcane Juice, Tender Coconut Water, Panchamrit, Rose Water, Bilva Patra water, Ganga Jal, and Chandan).",
        "Combined with the Mahamrityunjaya Mantra Japa (1,25,000 recitations), this ritual neutralizes severe ailments, overcomes untimely accident threats, and grants inner peace and spiritual strength.",
        "It pleases Lord Shiva, the conqueror of death, and brings profound renewal to mind, body, and spirit."
      ]
    },
    formsTitle: "11 Sacred Forms of Rudra Invoked",
    forms: [
      { name: "Kapali", trait: "Protection", emoji: "🔱", color: "#E8EDE5" },
      { name: "Pingala", trait: "Vitality", emoji: "🔥", color: "#FDF5E8" },
      { name: "Bheema", trait: "Strength", emoji: "⛰️", color: "#E8EDE5" },
      { name: "Virupaksha", trait: "Vision", emoji: "👁️", color: "#FDF5E8" },
      { name: "Vilohita", trait: "Purity", emoji: "❄️", color: "#E8EDE5" },
      { name: "Shasta", trait: "Order", emoji: "📜", color: "#FDF5E8" },
      { name: "Ajapa", trait: "Life Breath", emoji: "🌬️", color: "#E8EDE5" },
      { name: "Ahirbudhnya", trait: "Cosmic Energy", emoji: "🐍", color: "#FDF5E8" },
      { name: "Sambhu", trait: "Auspiciousness", emoji: "🌙", color: "#E8EDE5" },
      { name: "Chanda", trait: "Fearlessness", emoji: "⚡", color: "#FDF5E8" },
      { name: "Bhava", trait: "Harmony", emoji: "🪷", color: "#E8EDE5" }
    ],
    benefits: [
      { icon: "🌿", title: "Curing Critical Ailments", desc: "Invokes Lord Shiva's divine healing powers for health recovery." },
      { icon: "🛡️", title: "Conquering Fear of Death", desc: "Protects from accidental risks and chronic pain." },
      { icon: "🪐", title: "Rahu/Ketu/Saturn Peace", desc: "Neutralizes malefic planetary transits (Sade Sati, Dhaiya)." },
      { icon: "☮️", title: "Profound Peace", desc: "Bestows calm, clarity, and spiritual enlightenment." }
    ],
    rituals: [
      { step: "01", title: "Sankalpa & Ganapati Puja", desc: "Sanctifying intention and removing obstacles." },
      { step: "02", title: "Rudra Kalash Sthapana", desc: "Invocation of Shiva and 11 Rudras." },
      { step: "03", title: "11 Dravya Abhishekam", desc: "Continuous bathing with milk, honey, coconut water, bilva patra." },
      { step: "04", title: "Mahamrityunjaya Havan", desc: "Surrendering medicinal herbs and ghee into holy fire." }
    ],
    faqs: [
      { q: "What are the items used in Rudrabhishek?", a: "Pure Cow Milk, Curd, Ghee, Honey, Sugarcane Juice, Tender Coconut Water, Panchamrut, Ganga Jal, Rose Water, Bhasma, and Bilva Leaves." },
      { q: "Who should perform this Puja?", a: "Anyone seeking health, relief from chronic suffering, planetary peace, or spiritual growth." }
    ]
  },

  "mahamrityunjaya-yagna": {
    slug: "mahamrityunjaya-yagna",
    titleGu: "મહામૃત્યુંજય યજ્ઞ",
    titleEn: "Mahamrityunjaya Yagna",
    eyebrow: "RITUAL FOR HEALTH & LONGEVITY",
    sanskritSloka: "ॐ हौं जूं सः ॐ भूर्भुवः स्वः ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ॥",
    subtitle: "Conquer severe illness, accident threats, and mental distress through Mahamrityunjaya Lord Shiva Jaap & Fire Havan",
    heroImage: "/s33.jpeg",
    aboutImage: "/s3.jpeg",
    stats: [
      { num: "125K", label: "Mantra Chants" },
      { num: "108", label: "Fire Ahutis" },
      { num: "100%", label: "Vedic Vidhi" }
    ],
    marquee: ["🔱 MAHAMRITYUNJAYA JAAP", "🛡️ HEALTH PROTECTION", "🔥 SHIVA FIRE HAVAN", "✦ AMRUTA BLESSINGS", "🙏 LONGEVITY"],
    aboutContent: {
      heading: "Mahamrityunjaya Yagna?",
      paragraphs: [
        "The Mahamrityunjaya Yagna is a life-restoring Vedic fire ritual dedicated to Lord Shiva as Tryambaka (the Three-Eyed Lord).",
        "It is performed with 1,25,000 chants of the sacred Mrityunjaya Mantra along with fire offerings of Amruta herbs, sesame, Durva, and pure ghee.",
        "This Yagna generates protective vibrations that shield the devotee and family from physical pain, anxiety, depression, and sudden crises."
      ]
    },
    benefits: [
      { icon: "🛡️", title: "Accident & Illness Shield", desc: "Protects against sudden life risks and chronic health problems." },
      { icon: "✨", title: "Mental Renewal", desc: "Clears mental stress, fear, and emotional burdens." },
      { icon: "🌾", title: "Longevity & Vitality", desc: "Enhances life energy and rejuvenation." }
    ],
    rituals: [
      { step: "01", title: "Avahan & Sankalpa", desc: "Establishing ritual vow for health." },
      { step: "02", title: "Mantra Jaap", desc: "1,25,000 chants by qualified Pandits." },
      { step: "03", title: "Medicinal Havan", desc: "Sacred fire offering with herbal samagri." },
      { step: "04", title: "Rudra Abhishekam & Aarti", desc: "Concluding prayers and distribution of holy Bhasma." }
    ],
    faqs: [
      { q: "Can this Yagna be performed for a sick family member?", a: "Yes, Pandits can take Sankalpa on behalf of the family member." }
    ]
  },

  "laxmi-kuber-yagna": {
    slug: "laxmi-kuber-yagna",
    titleGu: "લક્ષ્મી કુબેર યજ્ઞ",
    titleEn: "Laxmi Kuber Yagna",
    eyebrow: "RITUAL FOR WEALTH & PROSPERITY",
    sanskritSloka: "ॐ श्रीं ह्रीं क्लीं श्रीं सिद्ध लक्ष्म्यै नमः ॥ ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये नमः ॥",
    subtitle: "Unlock financial growth, business success, and perpetual wealth with Goddess Mahalakshmi & Lord Kuber",
    heroImage: "/lak.jpg",
    aboutImage: "/s2.jpeg",
    stats: [
      { num: "108", label: "Lotus Offerings" },
      { num: "16", label: "Shree Suktam Verses" },
      { num: "1", label: "Kuber Yantra" }
    ],
    marquee: ["💰 SHREE SUKTAM", "👑 KUBERA HOMAM", "🪷 LOTUS FLOWER AHUTI", "✦ FINANCIAL ABUNDANCE", "🙏 MAHALAKSHMI BLESSINGS"],
    aboutContent: {
      heading: "Laxmi Kuber Yagna?",
      paragraphs: [
        "Laxmi Kuber Yagna is the most effective Vedic ceremony for invoking Maa Lakshmi (the Goddess of Wealth) and Lord Kuber (the Treasurer of the Heavens).",
        "Chanting the 16 verses of Shree Suktam and Kanakdhara Stotram alongside 108 pink lotus flowers dipped in pure cow ghee offered to the Agni removes financial stagnation.",
        "It opens new avenues of revenue, clears loans, and secures business expansion."
      ]
    },
    formsTitle: "Ashta Lakshmi Forms Invoked",
    forms: [
      { name: "Aadi Lakshmi", trait: "Primeval Source", emoji: "🪷", color: "#E8EDE5" },
      { name: "Dhana Lakshmi", trait: "Wealth & Gold", emoji: "💰", color: "#FDF5E8" },
      { name: "Dhaanya Lakshmi", trait: "Nourishment", emoji: "🌾", color: "#E8EDE5" },
      { name: "Gaja Lakshmi", trait: "Royal Power", emoji: "🐘", color: "#FDF5E8" },
      { name: "Santan Lakshmi", trait: "Family Lineage", emoji: "👶", color: "#E8EDE5" },
      { name: "Veera Lakshmi", trait: "Courage", emoji: "🛡️", color: "#FDF5E8" },
      { name: "Vijaya Lakshmi", trait: "Victory", emoji: "🏆", color: "#E8EDE5" },
      { name: "Vidya Lakshmi", trait: "Wisdom", emoji: "📚", color: "#FDF5E8" }
    ],
    benefits: [
      { icon: "💰", title: "Loan & Debt Relief", desc: "Assists in resolving liabilities and building capital." },
      { icon: "📈", title: "Business Growth", desc: "Attracts loyal clients and lucrative contracts." },
      { icon: "🪷", title: "Domestic Comforts", desc: "Fills the home with peace, luxury, and abundance." }
    ],
    rituals: [
      { step: "01", title: "Shree Yantra & Kuber Puja", desc: "Consecration of sacred symbols." },
      { step: "02", title: "Shree Suktam Havan", desc: "108 Lotus flower offerings with ghee into fire." },
      { step: "03", title: "Kanakdhara Recitation", desc: "Invocation of rain of prosperity." },
      { step: "04", title: "Maha Naivedya & Aarti", desc: "Offering dry fruits, sweets, and coin distribution." }
    ],
    faqs: [
      { q: "Is this Yagna beneficial for new business setups?", a: "Extremely beneficial. It ensures a stable financial foundation and smooth operations." }
    ]
  },

  "ganapati-yagna": {
    slug: "ganapati-yagna",
    titleGu: "ગણપતિ યજ્ઞ",
    titleEn: "Ganapati Yagna",
    eyebrow: "OBSTACLE REMOVAL & NEW BEGINNINGS",
    sanskritSloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    subtitle: "Invoke Lord Ganesha's supreme wisdom, remove all hurdles from career, business, and new ventures",
    heroImage: "/ganapatiyagna.jpg",
    aboutImage: "/ganapati.jpg",
    stats: [
      { num: "1008", label: "Durva Grass Ahutis" },
      { num: "21", label: "Modak Offerings" },
      { num: "100%", label: "Obstacle Removal" }
    ],
    marquee: ["🐘 GANAPATHI ATHARVASHIRSHA", "🌾 DURVA HOMAM", "✨ OBSTACLE REMOVAL", "✦ NEW BEGINNINGS", "🙏 JAI GANESH"],
    aboutContent: {
      heading: "Ganapati Yagna?",
      paragraphs: [
        "Ganapati Yagna is the fundamental Vedic ritual performed prior to launching any venture or seeking success in life.",
        "Lord Ganesha is the Vignaharta (Remover of Obstacles) and Buddhidata (Giver of Wisdom). By offering 1008 pairs of fresh Durva grass and modaks into the sacred fire while reciting Ganapati Atharvashirsha, all hurdles evaporate.",
        "It bestows sharp intelligence, harmony, and unhindered success."
      ]
    },
    benefits: [
      { icon: "✨", title: "Hurdle Clearance", desc: "Dissolves roadblock in examinations, job promotions, and deals." },
      { icon: "🐘", title: "Wisdom & Focus", desc: "Enhances decision-making skills and clarity." },
      { icon: "🏡", title: "Family Harmony", desc: "Brings joy and removes interpersonal friction." }
    ],
    rituals: [
      { step: "01", title: "Maha Sankalpa", desc: "Setting the focus of the Yagna." },
      { step: "02", title: "Atharvashirsha Avartan", desc: "Rhythmic recitation of Ganesha Upanishad." },
      { step: "03", title: "Durva & Modak Havan", desc: "1008 Durva grass fire offerings." },
      { step: "04", title: "Poornahuti & Prasad", desc: "Final blessings and modak prasad distribution." }
    ],
    faqs: [
      { q: "When should Ganapati Yagna be performed?", a: "Before purchasing property, starting a company, marriage, or on Sankashti Chaturthi." }
    ]
  },

  "vastu-shanti-yagna": {
    slug: "vastu-shanti-yagna",
    titleGu: "વાસ્તુ શાંતિ યજ્ઞ",
    titleEn: "Vastu Shanti Yagna",
    eyebrow: "HOME & PROPERTY HARMONY",
    sanskritSloka: "वास्तोष्पते प्रति जानीह्यस्मान् स्वावेशो अमीवो भवा नः ॥",
    subtitle: "Purify architectural directional flaws (Vastu Doshas), bring peace, health, and prosperity to home or office",
    heroImage: "/Vastusanti.jpeg",
    aboutImage: "/vastu.jpeg",
    stats: [
      { num: "10", label: "Directional Deities" },
      { num: "1", label: "Vastu Purusha Sthapana" },
      { num: "100%", label: "Energy Balance" }
    ],
    marquee: ["🏡 VASTU PURUSHA PUJA", "🧭 10 DIRECTIONAL HOMAM", "🕊️ DOMESTIC PEACE", "✦ ENERGY PURIFICATION", "🙏 SHANTI MANTRA"],
    aboutContent: {
      heading: "Vastu Shanti Yagna?",
      paragraphs: [
        "Vastu Shanti Yagna pacifies Vastu Purusha (the deity of premises) and the 10 Digpalas (guardians of directions).",
        "Every plot or building contains energetic currents. Flaws in construction or layout can create unnecessary health, financial, or domestic trouble.",
        "This Yagna neutralizes these subtle negative energies without requiring physical structural demolition."
      ]
    },
    benefits: [
      { icon: "🏡", title: "Home Energy Purification", desc: "Fills rooms with positive vibrations." },
      { icon: "🕊️", title: "Domestic Peace", desc: "Reduces unexplained arguments among residents." },
      { icon: "💰", title: "Financial Stability", desc: "Prevents cash flow leakages in business and home." }
    ],
    rituals: [
      { step: "01", title: "Vastu Purusha Avahanam", desc: "Invoking the guardian deity of earth." },
      { step: "02", title: "Digpal & Navgrah Havan", desc: "Offerings for 10 directions and 9 planets." },
      { step: "03", title: "Ratna Daan & Sthapana", desc: "Burying copper Vastu pyramid or coins." },
      { step: "04", title: "Shanti Paath & Water Sprinkling", desc: "Distributing holy water throughout premises." }
    ],
    faqs: [
      { q: "Do I need Vastu Shanti for a rented house or apartment?", a: "Yes, it purifies the living space regardless of ownership." }
    ]
  },

  "gruh-pravesh-havan": {
    slug: "gruh-pravesh-havan",
    titleGu: "ગૃહ પ્રવેશ હવન",
    titleEn: "Gruh Pravesh Havan",
    eyebrow: "HOUSEWARMING VEDIC CEREMONY",
    sanskritSloka: "शं नो भवन्तु वाजिनो हवेषु देवासो अप्सु श्रिया संमिश्रः ॥",
    subtitle: "Auspicious housewarming ritual invoking Goddess Lakshmi, Lord Ganesha, and Vastu Deva for joy in your new home",
    heroImage: "/Ghruvastu.jpeg",
    aboutImage: "/vastu.jpeg",
    stats: [
      { num: "1", label: "Kalash Sthapana" },
      { num: "5", label: "Vedic Elements Blessed" },
      { num: "100%", label: "Auspicious Start" }
    ],
    marquee: ["🔑 NEW HOME BLESSINGS", "🪷 LAKSHMI VASTU POOJA", "🔥 KALASH STHAPANA", "✦ JOY & HARMONY", "🙏 HOUSEWARMING"],
    aboutContent: {
      heading: "Gruh Pravesh Havan?",
      paragraphs: [
        "Gruh Pravesh is the sacred ceremony performed when stepping into a new house for the first time.",
        "It cleanses lingering construction residue, purifies elemental space, and invokes Lord Ganesha, Goddess Lakshmi, and Navgrahas.",
        "The auspicious boiling of fresh milk and entering with cow & calf / Kalash ensures abundance for decades."
      ]
    },
    benefits: [
      { icon: "🔑", title: "Auspicious Beginning", desc: "Ensures the family thrives in health and prosperity." },
      { icon: "🛡️", title: "Protection from Evil Eye", desc: "Shields new residence from negative intentions." },
      { icon: "🪷", title: "Goddess Lakshmi Residence", desc: "Invites lasting fortune into the household." }
    ],
    rituals: [
      { step: "01", title: "Dwar Puja & Threshold Sanctification", desc: "Welcoming prosperity at the front door." },
      { step: "02", title: "Milk Boiling Ceremony", desc: "Symbolizing overflow of joy and sweet fortune." },
      { step: "03", title: "Kalash & Vastu Havan", desc: "Fire offerings for environment purification." },
      { step: "04", title: "Satyanarayan Katha & Bhojan", desc: "Concluding narrative and feast." }
    ],
    faqs: [
      { q: "What is the best time for Gruh Pravesh?", a: "Pandits calculate an auspicious Muhurat based on Panchang and the house owner's birth star." }
    ]
  },

  "vivah-yagna": {
    slug: "vivah-yagna",
    titleGu: "વિવાહ યજ્ઞ",
    titleEn: "Vivah Yagna (Marriage Rituals)",
    eyebrow: "SACRED WEDDING RITUAL",
    sanskritSloka: "गृह्णामि ते सौभगत्वाय हस्तं मया पत्या जरदष्टिः यथासः ॥",
    subtitle: "Unite two souls under the eternal blessing of Agni Deva, Goddess Parvati, and Lord Shiva",
    heroImage: "/sk.jpeg",
    aboutImage: "/s4.jpeg",
    stats: [
      { num: "7", label: "Saptapadi Steps" },
      { num: "3", label: "Vows to Agni" },
      { num: "1", label: "Lifelong Union" }
    ],
    marquee: ["💍 SAPTAPADI", "🔥 AGNI SAKSHI", "🌸 SHIVA PARVATI BLESSINGS", "✦ ETERNAL MARITAL BLISS", "🙏 VIVAH SAMSARA"],
    aboutContent: {
      heading: "Vivah Yagna?",
      paragraphs: [
        "Vivah Samskara is one of the 16 primary sacraments (Shodasha Samskara) in Hinduism, uniting bride and groom spiritually, mentally, and physically.",
        "With Sacred Fire (Agni) as witness, the couple completes Saptapadi (7 steps), taking solemn vows for love, righteousness, health, mutual support, and progeny.",
        "Conducted strictly with authentic Vedic mantras for lifelong happiness."
      ]
    },
    benefits: [
      { icon: "💑", title: "Harmonious Marital Bond", desc: "Establishes mutual trust and affection." },
      { icon: "🌸", title: "Divine Shiva-Parvati Blessing", desc: "Ensures longevity of togetherness." },
      { icon: "🛡️", title: "Removal of Marital Hurdles", desc: "Pacifies horoscope conflicts." }
    ],
    rituals: [
      { step: "01", title: "Kanyadaan & Pani-Grahana", desc: "Giving of hands in sacred union." },
      { step: "02", title: "Agni Pradakshina", desc: "Circumambulating holy fire." },
      { step: "03", title: "Saptapadi (7 Steps)", desc: "Taking 7 sacred vows of marriage." },
      { step: "04", title: "Mangalsutra & Ashirvad", desc: "Sacred necklace tying and elder blessings." }
    ],
    faqs: [
      { q: "Can Vivah Yagna be performed at home or a hall?", a: "Yes, Pandits set up a traditional Yagna Mandap at your chosen location." }
    ]
  },

  "satyanarayan-katha": {
    slug: "satyanarayan-katha",
    titleGu: "સત્યનારાયણ કથા તથા હવન",
    titleEn: "Satyanarayan Katha & Havan",
    eyebrow: "LORD VISHNU GRACE CEREMONY",
    sanskritSloka: "सत्यव्रतं सत्यपरं त्रिसत्यं सत्यस्य योनिं निहितं च सत्ये ॥",
    subtitle: "Fulfill desires, express gratitude, and bring family togetherness with Lord Satyanarayan's 5-chapter divine narrative and fire offering",
    heroImage: "/satyanarayan.jpg",
    aboutImage: "/satya.jpeg",
    stats: [
      { num: "5", label: "Sacred Chapters" },
      { num: "1", label: "Panchamrit Offering" },
      { num: "100%", label: "Gratitude & Joy" }
    ],
    marquee: ["📖 5 KATHA CHAPTERS", "🍌 PANCHAMRIT PRASAD", "🔥 VISHNU HAVAN", "✦ GRATITUDE & SUCCESS", "🙏 JAI SHREE HARI"],
    aboutContent: {
      heading: "Satyanarayan Katha & Havan?",
      paragraphs: [
        "The Shree Satyanarayan Puja is a beloved Vishnu worship ritual detailed in the Skanda Purana.",
        "It includes reading 5 inspiring stories emphasizing truth, faith, and divine grace, followed by a Vishnu Havan with Panchamrit and Sheera (Rava Prasad).",
        "It can be performed on Purnima (full moon), birthdays, housewarmings, or whenever a family wishes to offer gratitude to God."
      ]
    },
    benefits: [
      { icon: "📖", title: "Fulfillment of Vows", desc: "Brings completion to long-held wishes." },
      { icon: "☮️", title: "Family Joy & Unity", desc: "Gathers loved ones in spiritual harmony." },
      { icon: "🌸", title: "Lord Vishnu's Protection", desc: "Removes grief and instills peace." }
    ],
    rituals: [
      { step: "01", title: "Ganapati & Navgrah Sthapana", desc: "Altar sanctification." },
      { step: "02", title: "5 Katha Recitations", desc: "Chanting stories of Lord Satyanarayan." },
      { step: "03", title: "Vishnu Havan", desc: "Fire offering with ghee and samagri." },
      { step: "04", title: "Aarti & Sheera Prasad", desc: "Sharing blessed sweet offering." }
    ],
    faqs: [
      { q: "Is Purnima necessary for Satyanarayan Katha?", a: "Purnima is ideal, but any auspicious day or Ekadashi is equally blessed." }
    ]
  },

  "pitru-dosh-nivarana": {
    slug: "pitru-dosh-nivarana",
    titleGu: "પિતૃ દોષ નિવારણ યજ્ઞ",
    titleEn: "Pitru Dosh Nivarana Yagna",
    eyebrow: "ANCESTRAL PEACE RITUAL",
    sanskritSloka: "ओम् पितृभ्यो नमः । ओम् तर्पणं समर्पयामि ॥",
    subtitle: "Appease departed ancestors, remove generation-long lineage blockages, and restore peace and prosperity",
    heroImage: "/s5.jpeg",
    aboutImage: "/s55.jpeg",
    stats: [
      { num: "3", label: "Generations Blessed" },
      { num: "100%", label: "Lineage Cleansing" },
      { num: "1", label: "Pinda Daan" }
    ],
    marquee: ["🕊️ PITRU TARPANAM", "🌾 PINDA DAAN", "🔥 LINEAGE HEALING", "✦ ANCESTRAL BLESSINGS", "🙏 SHANTI PAATH"],
    aboutContent: {
      heading: "Pitru Dosh Nivarana Yagna?",
      paragraphs: [
        "Pitru Dosh occurs when departed ancestors (Pitrus) remain unpacified due to unfulfilled rites or afflictions in the 9th house of the horoscope.",
        "This Yagna includes Tarpanam (water & black sesame offering), Pinda Daan, and Pitru Gayatri Havan.",
        "Appeasing ancestors unlocks stalled child prospects, marriage delays, and chronic financial leaks in the family line."
      ]
    },
    benefits: [
      { icon: "🕊️", title: "Ancestral Liberation", desc: "Grants peace to departed souls." },
      { icon: "👶", title: "Resolving Family Obstacles", desc: "Clears delays in childbirth and marriage." },
      { icon: "💰", title: "Wealth Retention", desc: "Stops unexpected losses." }
    ],
    rituals: [
      { step: "01", title: "Pitru Tarpanam", desc: "Water & black sesame offerings." },
      { step: "02", title: "Pinda Daan", desc: "Rice ball offerings to ancestors." },
      { step: "03", title: "Pitru Havan", desc: "Fire rituals invoking ancestral peace." },
      { step: "04", title: "Brahmin Bhojan & Daan", desc: "Feeding learned pandits and clothes donation." }
    ],
    faqs: [
      { q: "When should Pitru Dosh Nivarana be performed?", a: "During Pitru Paksha, Amavasya, or any day suggested by an astrologer." }
    ]
  },

  "navgrah-shanti-yagna": {
    slug: "navgrah-shanti-yagna",
    titleGu: "નવગ્રહ શાંતિ યજ્ઞ",
    titleEn: "Navgrah Shanti Yagna",
    eyebrow: "PLANETARY HARMONY RITUAL",
    sanskritSloka: "ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च । गुरुश्च शुक्रः शनिराहुकेतवः कुर्वन्तु सर्वे मम सुप्रभातम् ॥",
    subtitle: "Balance all nine planetary energies in your horoscope to turn obstacles into favorable cosmic alignment",
    heroImage: "/Navgrah.jpg",
    aboutImage: "/s22.jpeg",
    stats: [
      { num: "9", label: "Planets Pacified" },
      { num: "9", label: "Grains & Wood Offered" },
      { num: "108", label: "Chants per Planet" }
    ],
    marquee: ["🪐 9 PLANETS PACIFIED", "🔥 NAVGRAH AHUTI", "✨ HOROSCOPE HARMONY", "✦ DESTINY BALANCING", "🙏 SHANTI HOMAM"],
    aboutContent: {
      heading: "Navgrah Shanti Yagna?",
      paragraphs: [
        "Human destiny is deeply influenced by the 9 planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu).",
        "Navgrah Shanti Yagna pacifies afflicted planets while empowering favorable ones using specific samidhwood (Ark, Palash, Khadir, Apamarga, Peepal, Gular, Shami, Durva, Kusha).",
        "It turns negative planetary transits (Dasa / Sade Sati) into positive growth."
      ]
    },
    formsTitle: "Nine Planetary Deities Invoked",
    forms: [
      { name: "Surya (Sun)", trait: "Health & Vitality", emoji: "☀️", color: "#E8EDE5" },
      { name: "Chandra (Moon)", trait: "Mental Peace", emoji: "🌙", color: "#FDF5E8" },
      { name: "Mangal (Mars)", trait: "Courage", emoji: "🔥", color: "#E8EDE5" },
      { name: "Budh (Mercury)", trait: "Intellect", emoji: "🧠", color: "#FDF5E8" },
      { name: "Guru (Jupiter)", trait: "Wisdom", emoji: "👑", color: "#E8EDE5" },
      { name: "Shukra (Venus)", trait: "Luxury", emoji: "💎", color: "#FDF5E8" },
      { name: "Shani (Saturn)", trait: "Justice", emoji: "⚖️", color: "#E8EDE5" },
      { name: "Rahu", trait: "Ambition", emoji: "🌌", color: "#FDF5E8" },
      { name: "Ketu", trait: "Spiritual Awakening", emoji: "🔱", color: "#E8EDE5" }
    ],
    benefits: [
      { icon: "🪐", title: "Horoscope Balance", desc: "Softens malefic Dasa/Antardasa impacts." },
      { icon: "🛡️", title: "Sade Sati Relief", desc: "Shields against Saturn's severe trials." },
      { icon: "🏆", title: "Career Boost", desc: "Aligns cosmic forces for promotion and luck." }
    ],
    rituals: [
      { step: "01", title: "Navgrah Mandala Sthapana", desc: "Drawing 9 planetary squares with colored grains." },
      { step: "02", title: "Individual Planet Jaap", desc: "Reciting seed mantras for each deity." },
      { step: "03", title: "Specific Samidha Havan", desc: "Offering specific woods into sacred fire." },
      { step: "04", title: "Navgrah Daan & Aarti", desc: "Donating 9 grains (Navadhanya) and blessing." }
    ],
    faqs: [
      { q: "How often should Navgrah Shanti be performed?", a: "Once a year or whenever entering a major planetary Dasa change." }
    ]
  },

  "santan-prapti-yagna": {
    slug: "santan-prapti-yagna",
    titleGu: "સંતાન પ્રાપ્તિ યજ્ઞ",
    titleEn: "Santan Prapti Yagna",
    eyebrow: "BLESSING FOR PROGENY",
    sanskritSloka: "देवकीसुत गोविन्द वासुदेव जगत्पते । देहि मे तनयं कृष्ण त्वामहं शरणं गतः ॥",
    subtitle: "Invoke Lord Santan Gopal & Bal Krishna to bestow healthy progeny, overcome conception hurdles, and protect unborn child",
    heroImage: "/s1.jpeg",
    aboutImage: "/s11.jpeg",
    stats: [
      { num: "100%", label: "Vedic Blessing" },
      { num: "108", label: "Santan Gopal Japa" },
      { num: "1", label: "Butter & Milk Offering" }
    ],
    marquee: ["👶 SANTAN GOPAL MANTRA", "🪷 BAL KRISHNA BLESSINGS", "🔥 PROGENY HOMAM", "✦ FAMILY LINEAGE", "🙏 JOYFUL PARENTHOOD"],
    aboutContent: {
      heading: "Santan Prapti Yagna?",
      paragraphs: [
        "Santan Prapti Yagna (Santan Gopal Havan) is performed for couples desiring healthy progeny or facing delays in conceiving.",
        "By worshipping Bal Krishna with butter, sugar, kheer, and reciting Santan Gopal Mantra, planetary flaws affecting the 5th house are removed.",
        "It also grants divine protection to pregnant mothers and their unborn child."
      ]
    },
    benefits: [
      { icon: "👶", title: "Blessing of Progeny", desc: "Removes astrological hurdles in childbirth." },
      { icon: "🛡️", title: "Pregnancy Protection", desc: "Shields mother and baby." },
      { icon: "🪷", title: "Wise & Virtuous Children", desc: "Invokes Bal Krishna's traits." }
    ],
    rituals: [
      { step: "01", title: "Santan Gopal Yantra Sthapana", desc: "Consecration of sacred diagram." },
      { step: "02", title: "Devaki Nandan Stotram", desc: "Chanting for offspring." },
      { step: "03", title: "Makhan & Kheer Havan", desc: "Fire offerings of sweet milk and butter." },
      { step: "04", title: "Kalash Abhishekam", desc: "Holy water blessing for couple." }
    ],
    faqs: [
      { q: "Can both husband and wife take part?", a: "Yes, both sit together for Sankalpa and fire rituals." }
    ]
  },

  "vyavasay-dhan-vriddhi": {
    slug: "vyavasay-dhan-vriddhi",
    titleGu: "વ્યવસાય તથા ધન વૃદ્ધિ યજ્ઞ",
    titleEn: "Vyavasay & Dhan Vriddhi Yagna",
    eyebrow: "BUSINESS & FINANCIAL EXPANSION",
    sanskritSloka: "ओम् श्रीं ह्रीं क्लीं वित्तेश्वराय नमः ॥",
    subtitle: "Multiply commercial growth, eliminate business stagnation, attract wealthy clients, and secure investments",
    heroImage: "/lak.jpg",
    aboutImage: "/s2.jpeg",
    stats: [
      { num: "10X", label: "Business Energy" },
      { num: "1", label: "Vyapar Vriddhi Yantra" },
      { num: "108", label: "Lotus & Ghee Offerings" }
    ],
    marquee: ["📈 COMMERCIAL GROWTH", "💼 BUSINESS EXPANSION", "🔥 MAHALAKSHMI HOMAM", "✦ WEALTH ACCUMULATION", "🙏 TRADE PROSPERITY"],
    aboutContent: {
      heading: "Vyavasay & Dhan Vriddhi Yagna?",
      paragraphs: [
        "This special Yagna combines Mahalakshmi, Kuber, and Ganesha mantras designed for business owners, traders, and entrepreneurs.",
        "It cleanses financial blocks, protects from jealous business rivals, and creates magnetic attraction for revenue and expansion.",
        "Includes consecration of Vyapar Vriddhi Yantra to be kept at office/shop."
      ]
    },
    benefits: [
      { icon: "💼", title: "Business Expansion", desc: "Unlocks stuck payments and new markets." },
      { icon: "🛡️", title: "Competitor Shield", desc: "Protects business against negative eye and rumors." },
      { icon: "📈", title: "Consistent Profitability", desc: "Ensures financial stability." }
    ],
    rituals: [
      { step: "01", title: "Vyapar Yantra Pujan", desc: "Energizing trade yantra." },
      { step: "02", title: "Laxmi Kuber Ahuti", desc: "Offering dry fruits & ghee into fire." },
      { step: "03", title: "Kanakdhara Recitation", desc: "Chanting for gold-like prosperity." },
      { step: "04", title: "Premises Sanctification", desc: "Sprinkling holy water across office/shop." }
    ],
    faqs: [
      { q: "Can this be performed directly inside our shop or office?", a: "Yes, Pandits can conduct it right at your place of business." }
    ]
  },

  "sarva-badha-nivarana": {
    slug: "sarva-badha-nivarana",
    titleGu: "સર્વ બાધા નિવારણ યજ્ઞ",
    titleEn: "Sarva Badha Nivarana Yagna",
    eyebrow: "UNIVERSAL OBSTACLE ERADICATION",
    sanskritSloka: "सर्वाबाधाप्रशमनं त्रैलोक्यस्याखिलेश्वरि । एवमेव त्वया कार्यमस्मद्वैरिविनाशनम् ॥",
    subtitle: "Dissolve complex, unknown, and multi-layered life obstacles preventing health, marriage, wealth, and legal victory",
    heroImage: "/s44.jpeg",
    aboutImage: "/mataji.png",
    stats: [
      { num: "100%", label: "Obstacle Eradication" },
      { num: "3", label: "Supreme Energies Invoked" },
      { num: "108", label: "Protective Verses" }
    ],
    marquee: ["🛡️ DISSOLVE ALL OBSTACLES", "⚡ MAHA KALI & DURGA AHUTI", "🔥 SUPREME PROTECTION", "✦ VICTORY OVER CRISIS", "🙏 SARVA BADA SHANTI"],
    aboutContent: {
      heading: "Sarva Badha Nivarana Yagna?",
      paragraphs: [
        "When a person faces continuous unexplainable failures across health, wealth, family, and legal matters despite hard work, Sarva Badha Nivarana Yagna is prescribed.",
        "Invoking Maa Kali, Maa Durga, and Lord Sudarshan Chakra, this fierce ritual destroys unknown blockages, enemy plots, and negative psychic energies.",
        "It acts as a ultimate divine armor for the devotee."
      ]
    },
    benefits: [
      { icon: "🛡️", title: "Eradication of All Hurdles", desc: "Destroys complex multi-level problems." },
      { icon: "⚖️", title: "Legal & Court Victory", desc: "Protects against false accusations and disputes." },
      { icon: "⚡", title: "Negative Energy Defense", desc: "Clears evil eye and heavy energies." }
    ],
    rituals: [
      { step: "01", title: "Mahakali & Sudarshan Avahan", desc: "Invoking protective warrior deities." },
      { step: "02", title: "Raksha Havan", desc: "Offering black mustard, neem, guggul into fire." },
      { step: "03", title: "Trishul & Chakra Pujan", desc: "Consecrating weapons of divine protection." },
      { step: "04", title: "Raksha Sutra Bandhan", desc: "Tying protective thread on devotee wrist." }
    ],
    faqs: [
      { q: "Who should perform Sarva Badha Nivarana Yagna?", a: "Anyone undergoing prolonged hardship, court cases, or unexplained bad luck." }
    ]
  },

  "gruh-shanti-manglik": {
    slug: "gruh-shanti-manglik",
    titleGu: "ગૃહ શાંતિ તથા માંગલિક દોષ નિવારણ",
    titleEn: "Gruh Shanti & Manglik Dosh Nivarana",
    eyebrow: "MARRIAGE HARMONY & MANGLIK SHANTI",
    sanskritSloka: "ओम् क्रां क्रीं क्रौं सः भौमाय नमः ॥",
    subtitle: "Neutralize Mars (Mangal) affliction in chart, prevent delays in marriage, and establish deep understanding between couples",
    heroImage: "/sk.jpeg",
    aboutImage: "/s4.jpeg",
    stats: [
      { num: "100%", label: "Manglik Dosh Pacification" },
      { num: "1", label: "Mangal Yantra Sthapana" },
      { num: "108", label: "Red Coral & Flower Offerings" }
    ],
    marquee: ["🌺 MANGLIK DOSH SHANTI", "💑 MARITAL HARMONY", "🔥 RED FLOWER HAVAN", "✦ TIMELY MARRIAGE", "🙏 PEACE AT HOME"],
    aboutContent: {
      heading: "Gruh Shanti & Manglik Dosh Nivarana?",
      paragraphs: [
        "Manglik Dosh occurs when Planet Mars (Mangal) sits in the 1st, 4th, 7th, 8th, or 12th house of a horoscope.",
        "This affliction can cause severe delay in finding a marriage partner or lead to arguments and incompatibility after wedding.",
        "Performing Mangal Shanti Havan with red flowers, red lentils (masoor dal), and Mangal Gayatri Mantra neutralizes aggressive planetary heat and brings harmony."
      ]
    },
    benefits: [
      { icon: "🌺", title: "Neutralizing Manglik Dosh", desc: "Smoothes path for early marriage." },
      { icon: "💑", title: "Marital Compatibility", desc: "Prevents heated arguments between spouses." },
      { icon: "🕊️", title: "Peaceful Environment", desc: "Restores warmth in household." }
    ],
    rituals: [
      { step: "01", title: "Mangal Devta Avahan", desc: "Invocation of Planet Mars." },
      { step: "02", title: "Red Flower & Lentil Havan", desc: "Offering red masoor and oleander flowers." },
      { step: "03", title: "Kumbh Vivah (if required)", desc: "Ritual pacification before main marriage." },
      { step: "04", title: "Mangal Daan & Shanti Paath", desc: "Donating red clothes and coral blessing." }
    ],
    faqs: [
      { q: "Can this be done before marriage?", a: "Yes, performing this before marriage ensures a smooth and happy married life." }
    ]
  },

  "kundali-analysis": {
    slug: "kundali-analysis",
    titleGu: "કુંડળી વિશ્લેષણ",
    titleEn: "Kundali Analysis & Astro Consultation",
    eyebrow: "VEDIC ASTROLOGY CONSULTATION",
    sanskritSloka: "ज्योतिषं नेत्रमुच्यते — Astrology is the divine eye of Vedas",
    subtitle: "In-depth birth chart examination by expert astrologers for career, marriage, health, wealth, and effective Vedic remedies",
    heroImage: "/kundali.png",
    aboutImage: "/kundalii.png",
    stats: [
      { num: "12", label: "Horoscope Houses" },
      { num: "9", label: "Planets Analyzed" },
      { num: "100%", label: "Personalized Remedies" }
    ],
    marquee: ["📜 BIRTH CHART READINGS", "🪐 PLANETARY DASHA ANALYSIS", "💎 GEMSTONE & POOJA REMEDIES", "✦ CAREER & MARRIAGE GUIDE", "🙏 VEDIC ASTROLOGY"],
    aboutContent: {
      heading: "Kundali Analysis?",
      paragraphs: [
        "Your Kundali (Birth Chart) is a cosmic blueprint generated at the exact minute and location of your birth.",
        "Our seasoned Vedic Astrologers carefully analyze your Lagna, Rashi, Navamsha (D9), planetary Dashas, and transit influences.",
        "Get crystal-clear answers regarding career milestones, marriage timing, business decisions, health precautions, and practical Vedic remedies (Pooja, Yagna, Mantras, Gemstones)."
      ]
    },
    benefits: [
      { icon: "📜", title: "Clear Life Roadmap", desc: "Understand high-probability periods for growth." },
      { icon: "💑", title: "Matrimonial Compatibility", desc: "Detailed Gun Milan and Manglik check." },
      { icon: "💎", title: "Authentic Remedies", desc: "Prescribing exact Pooja, Yagna, or Gemstone remedies." }
    ],
    rituals: [
      { step: "01", title: "Birth Details Verification", desc: "Date, Time & Place of birth calculation." },
      { step: "02", title: "Chart Generation & Dasha Analysis", desc: "Mapping 12 houses and planetary transits." },
      { step: "03", title: "Dosha & Remedy Identification", desc: "Screening Kaal Sarp, Manglik, Pitru doshas." },
      { step: "04", title: "Consultation & Report", desc: "Detailed discussion and step-by-step guidance." }
    ],
    faqs: [
      { q: "What details do I need for Kundali Analysis?", a: "Exact Date of Birth, Time of Birth, and Place of Birth." },
      { q: "How will the consultation be delivered?", a: "You can choose a direct phone call, WhatsApp consultation, or detailed written report." }
    ]
  }
};
