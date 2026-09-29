// Daily Panchang Data Engine
// Generates panchang data based on date and city coordinates

export interface PanchangCity {
  name: string;
  state: string;
  lat: number;
  lng: number;
  tz: string;
}

export const PANCHANG_CITIES: PanchangCity[] = [
  { name: "Ahmedabad", state: "Gujarat", lat: 23.0225, lng: 72.5714, tz: "Asia/Kolkata" },
  { name: "Mumbai", state: "Maharashtra", lat: 19.076, lng: 72.8777, tz: "Asia/Kolkata" },
  { name: "Delhi", state: "Delhi", lat: 28.6139, lng: 77.209, tz: "Asia/Kolkata" },
  { name: "Varanasi", state: "Uttar Pradesh", lat: 25.3176, lng: 82.9739, tz: "Asia/Kolkata" },
  { name: "Jaipur", state: "Rajasthan", lat: 26.9124, lng: 75.7873, tz: "Asia/Kolkata" },
  { name: "Ujjain", state: "Madhya Pradesh", lat: 23.1765, lng: 75.7885, tz: "Asia/Kolkata" },
  { name: "Haridwar", state: "Uttarakhand", lat: 29.9457, lng: 78.1642, tz: "Asia/Kolkata" },
  { name: "Puri", state: "Odisha", lat: 19.8135, lng: 85.8312, tz: "Asia/Kolkata" },
  { name: "Chennai", state: "Tamil Nadu", lat: 13.0827, lng: 80.2707, tz: "Asia/Kolkata" },
  { name: "Kolkata", state: "West Bengal", lat: 22.5726, lng: 88.3639, tz: "Asia/Kolkata" },
  { name: "Bangalore", state: "Karnataka", lat: 12.9716, lng: 77.5946, tz: "Asia/Kolkata" },
  { name: "Hyderabad", state: "Telangana", lat: 17.385, lng: 78.4867, tz: "Asia/Kolkata" },
  { name: "Pune", state: "Maharashtra", lat: 18.5204, lng: 73.8567, tz: "Asia/Kolkata" },
  { name: "Surat", state: "Gujarat", lat: 21.1702, lng: 72.8311, tz: "Asia/Kolkata" },
  { name: "Vadodara", state: "Gujarat", lat: 22.3072, lng: 73.1812, tz: "Asia/Kolkata" },
  { name: "Rajkot", state: "Gujarat", lat: 22.3039, lng: 70.8022, tz: "Asia/Kolkata" },
  { name: "Lucknow", state: "Uttar Pradesh", lat: 26.8467, lng: 80.9462, tz: "Asia/Kolkata" },
  { name: "Patna", state: "Bihar", lat: 25.6093, lng: 85.1376, tz: "Asia/Kolkata" },
  { name: "Indore", state: "Madhya Pradesh", lat: 22.7196, lng: 75.8577, tz: "Asia/Kolkata" },
  { name: "Bhopal", state: "Madhya Pradesh", lat: 23.2599, lng: 77.4126, tz: "Asia/Kolkata" },
  { name: "Mathura", state: "Uttar Pradesh", lat: 27.4924, lng: 77.6737, tz: "Asia/Kolkata" },
  { name: "Dwarka", state: "Gujarat", lat: 22.2442, lng: 68.9685, tz: "Asia/Kolkata" },
  { name: "Tirupati", state: "Andhra Pradesh", lat: 13.6288, lng: 79.4192, tz: "Asia/Kolkata" },
  { name: "Nashik", state: "Maharashtra", lat: 19.9975, lng: 73.7898, tz: "Asia/Kolkata" },
  { name: "Rishikesh", state: "Uttarakhand", lat: 30.0869, lng: 78.2676, tz: "Asia/Kolkata" },
];

const TITHIS = [
  "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
  "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
  "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
];

const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
  "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
  "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
  "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha",
  "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const YOGAS = [
  "Vishkambha", "Preeti", "Ayushman", "Saubhagya", "Shobhana",
  "Atiganda", "Sukarma", "Dhriti", "Shoola", "Ganda",
  "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
  "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
  "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
  "Indra", "Vaidhriti"
];

const KARANAS = [
  "Bava", "Balava", "Kaulava", "Taitila", "Garaja",
  "Vanija", "Vishti", "Shakuni", "Chatushpada", "Nagava", "Kimsthughna"
];

const RASHIS = [
  "Mesha (Aries)", "Vrishabha (Taurus)", "Mithuna (Gemini)",
  "Karka (Cancer)", "Simha (Leo)", "Kanya (Virgo)",
  "Tula (Libra)", "Vrischika (Scorpio)", "Dhanu (Sagittarius)",
  "Makara (Capricorn)", "Kumbha (Aquarius)", "Meena (Pisces)"
];

const VAARS = ["Ravivaar (Sunday)", "Somvaar (Monday)", "Mangalvaar (Tuesday)", "Budhvaar (Wednesday)", "Guruvaar (Thursday)", "Shukravaar (Friday)", "Shanivaar (Saturday)"];

const HINDI_MONTHS = [
  "Chaitra", "Vaishakha", "Jyeshtha", "Ashadha",
  "Shravana", "Bhadrapada", "Ashwin", "Kartik",
  "Margashirsha", "Pausha", "Magha", "Phalguna"
];

const LUCKY_COLORS = ["Saffron", "White", "Red", "Yellow", "Green", "Orange", "Blue", "Pink", "Gold", "Maroon", "Cream", "Purple"];
const LUCKY_DIRECTIONS = ["East", "North-East", "North", "North-West", "West", "South-West", "South", "South-East"];

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function formatTime(hours: number, minutes: number): string {
  const h = Math.floor(hours);
  const m = Math.floor(minutes);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function getSunTimes(date: Date, lat: number) {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const zenith = 90.833;
  const D2R = Math.PI / 180;
  const R2D = 180 / Math.PI;

  const lngHour = 82.5 / 15; // IST reference
  const tRise = dayOfYear + (6 - lngHour) / 24;
  const tSet = dayOfYear + (18 - lngHour) / 24;

  const MRise = (0.9856 * tRise) - 3.289;
  const MSet = (0.9856 * tSet) - 3.289;

  let LRise = MRise + (1.916 * Math.sin(MRise * D2R)) + (0.020 * Math.sin(2 * MRise * D2R)) + 282.634;
  let LSet = MSet + (1.916 * Math.sin(MSet * D2R)) + (0.020 * Math.sin(2 * MSet * D2R)) + 282.634;
  LRise = ((LRise % 360) + 360) % 360;
  LSet = ((LSet % 360) + 360) % 360;

  const sinDecRise = 0.39782 * Math.sin(LRise * D2R);
  const cosDecRise = Math.cos(Math.asin(sinDecRise));
  const sinDecSet = 0.39782 * Math.sin(LSet * D2R);
  const cosDecSet = Math.cos(Math.asin(sinDecSet));

  const cosHRise = (Math.cos(zenith * D2R) - (sinDecRise * Math.sin(lat * D2R))) / (cosDecRise * Math.cos(lat * D2R));
  const cosHSet = (Math.cos(zenith * D2R) - (sinDecSet * Math.sin(lat * D2R))) / (cosDecSet * Math.cos(lat * D2R));

  const HRise = (360 - Math.acos(cosHRise) * R2D) / 15;
  const HSet = Math.acos(cosHSet) * R2D / 15;

  const RARise = Math.atan2(0.91764 * Math.tan(LRise * D2R), 1) * R2D;
  const RASet = Math.atan2(0.91764 * Math.tan(LSet * D2R), 1) * R2D;

  const raRiseAdj = (((RARise + 360) % 360) / 15);
  const raSetAdj = (((RASet + 360) % 360) / 15);

  let TRise = HRise + raRiseAdj - (0.06571 * tRise) - 6.622;
  let TSet = HSet + raSetAdj - (0.06571 * tSet) - 6.622;

  let UTRise = ((TRise - lngHour) % 24 + 24) % 24;
  let UTSet = ((TSet - lngHour) % 24 + 24) % 24;

  // Convert to IST (UTC+5:30)
  let sunriseIST = UTRise + 5.5;
  let sunsetIST = UTSet + 5.5;
  if (sunriseIST >= 24) sunriseIST -= 24;
  if (sunsetIST >= 24) sunsetIST -= 24;

  const srH = Math.floor(sunriseIST);
  const srM = Math.floor((sunriseIST - srH) * 60);
  const ssH = Math.floor(sunsetIST);
  const ssM = Math.floor((sunsetIST - ssH) * 60);

  return {
    sunrise: formatTime(srH, srM),
    sunset: formatTime(ssH, ssM),
    sunriseDecimal: sunriseIST,
    sunsetDecimal: sunsetIST,
  };
}

export interface PanchangData {
  gregorianDate: string;
  hinduDate: string;
  vaar: string;
  tithi: string;
  tithiEndTime: string;
  nakshatra: string;
  nakshatraEndTime: string;
  yoga: string;
  yogaEndTime: string;
  karana: string;
  paksha: string;
  maas: string;
  samvat: string;
  moonSign: string;
  sunSign: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  rahuKaal: string;
  yamaganda: string;
  gulikaKaal: string;
  abhijitMuhurat: string;
  brahmaMuhurat: string;
  amritKaal: string;
  durMuhurat: string;
  varjyam: string;
  festivals: string[];
  luckyColor: string;
  luckyNumber: number;
  luckyDirection: string;
  recommended: string[];
  toAvoid: string[];
  auspicious: { label: string; time: string }[];
  inauspicious: { label: string; time: string }[];
  lastUpdated: string;
  cityName: string;
}

function getRahuKaal(dayOfWeek: number, sunriseDecimal: number, sunsetDecimal: number): string {
  // Rahu Kaal periods by day (Mon=1 to Sun=0)
  const rahuPeriods = [8, 2, 7, 5, 6, 4, 3]; // period number for Sun,Mon..Sat
  const dayLength = sunsetDecimal - sunriseDecimal;
  const period = dayLength / 8;
  const rahuStart = sunriseDecimal + period * (rahuPeriods[dayOfWeek] - 1);
  const rahuEnd = rahuStart + period;
  const sH = Math.floor(rahuStart); const sM = Math.floor((rahuStart - sH) * 60);
  const eH = Math.floor(rahuEnd); const eM = Math.floor((rahuEnd - eH) * 60);
  return `${formatTime(sH, sM)} - ${formatTime(eH, eM)}`;
}

function getYamaganda(dayOfWeek: number, sunriseDecimal: number, sunsetDecimal: number): string {
  const yamaPeriods = [5, 4, 3, 7, 2, 1, 6];
  const dayLength = sunsetDecimal - sunriseDecimal;
  const period = dayLength / 8;
  const start = sunriseDecimal + period * (yamaPeriods[dayOfWeek] - 1);
  const end = start + period;
  const sH = Math.floor(start); const sM = Math.floor((start - sH) * 60);
  const eH = Math.floor(end); const eM = Math.floor((end - eH) * 60);
  return `${formatTime(sH, sM)} - ${formatTime(eH, eM)}`;
}

function getGulikaKaal(dayOfWeek: number, sunriseDecimal: number, sunsetDecimal: number): string {
  const gulikaPeriods = [7, 6, 5, 4, 3, 2, 1];
  const dayLength = sunsetDecimal - sunriseDecimal;
  const period = dayLength / 8;
  const start = sunriseDecimal + period * (gulikaPeriods[dayOfWeek] - 1);
  const end = start + period;
  const sH = Math.floor(start); const sM = Math.floor((start - sH) * 60);
  const eH = Math.floor(end); const eM = Math.floor((end - eH) * 60);
  return `${formatTime(sH, sM)} - ${formatTime(eH, eM)}`;
}

export function generatePanchangData(date: Date, city: PanchangCity): PanchangData {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate() + Math.floor(city.lat * 100);
  const rng = seededRandom(seed);

  const dayOfWeek = date.getDay();
  const { sunrise, sunset, sunriseDecimal, sunsetDecimal } = getSunTimes(date, city.lat);

  // Tithi calculation
  const daysSinceEpoch = Math.floor((date.getTime() - new Date(2000, 0, 1).getTime()) / 86400000);
  const lunarDay = ((daysSinceEpoch * 12.2) % 30 + 30) % 30;
  const tithiIdx = Math.floor(lunarDay % 15);
  const isPurnima = lunarDay >= 14.5 && lunarDay < 15.5;
  const isAmavasya = lunarDay >= 29.5 || lunarDay < 0.5;
  const paksha = lunarDay < 15 ? "Shukla Paksha" : "Krishna Paksha";
  let tithiName = TITHIS[tithiIdx];
  if (isPurnima) tithiName = "Purnima";
  if (isAmavasya) tithiName = "Amavasya";

  // Tithi end time
  const tethR = rng();
  const tithiEndH = Math.floor(tethR * 24);
  const tithiEndM = Math.floor(rng() * 60);

  // Nakshatra
  const nakshatraIdx = Math.floor(((daysSinceEpoch * 13.3) % 27 + 27) % 27);
  const nakEndH = Math.floor(rng() * 24);
  const nakEndM = Math.floor(rng() * 60);

  // Yoga
  const yogaIdx = Math.floor(((daysSinceEpoch * 13.0 + 5) % 27 + 27) % 27);
  const yogaEndH = Math.floor(rng() * 24);
  const yogaEndM = Math.floor(rng() * 60);

  // Karana
  const karanaIdx = Math.floor(rng() * KARANAS.length);

  // Moon sign / Sun sign
  const moonIdx = Math.floor(((daysSinceEpoch * 13.3 / 27) * 12) % 12);
  const sunMonth = (date.getMonth() + 9) % 12; // approximate sidereal

  // Hindu month
  const hinduMonthIdx = (date.getMonth() + 9) % 12;

  // Samvat
  const samvat = date.getFullYear() + 57;

  // Hindu date
  const hinduDay = tithiIdx + 1;

  // Moonrise / Moonset
  const moonriseH = 6 + Math.floor(rng() * 14);
  const moonriseM = Math.floor(rng() * 60);
  const moonsetH = (moonriseH + 10 + Math.floor(rng() * 4)) % 24;
  const moonsetM = Math.floor(rng() * 60);

  // Abhijit Muhurat (midday +/- 24 min)
  const midday = (sunriseDecimal + sunsetDecimal) / 2;
  const abhStart = midday - 0.4;
  const abhEnd = midday + 0.4;

  // Brahma Muhurat (1h36m before sunrise)
  const brahmaStart = sunriseDecimal - 1.6;
  const brahmaEnd = sunriseDecimal - 0.8;

  // Amrit Kaal
  const amritStart = sunriseDecimal + 2.5 + rng() * 2;
  const amritEnd = amritStart + 1.5;

  // Dur Muhurat
  const durStart = 8.5 + rng() * 4;
  const durEnd = durStart + 0.8;

  // Varjyam
  const varStart = 14 + rng() * 6;
  const varEnd = varStart + 1.5;

  function fmtRange(s: number, e: number): string {
    const sH = Math.floor(((s % 24) + 24) % 24);
    const sM = Math.floor((((s % 24) + 24) % 24 - sH) * 60);
    const eH = Math.floor(((e % 24) + 24) % 24);
    const eM = Math.floor((((e % 24) + 24) % 24 - eH) * 60);
    return `${formatTime(sH, sM)} - ${formatTime(eH, eM)}`;
  }

  // Festivals
  const festivals: string[] = [];
  const m = date.getMonth();
  const d = date.getDate();
  if (m === 0 && d === 14) festivals.push("Makar Sankranti");
  if (m === 0 && d === 15) festivals.push("Pongal");
  if (m === 1 && d === 26) festivals.push("Maha Shivaratri");
  if (m === 2 && d === 14) festivals.push("Holi");
  if (m === 2 && d === 25) festivals.push("Ugadi / Gudi Padwa");
  if (m === 3 && d === 6) festivals.push("Ram Navami");
  if (m === 3 && d === 14) festivals.push("Baisakhi");
  if (m === 4 && d === 12) festivals.push("Akshaya Tritiya");
  if (m === 6 && d === 17) festivals.push("Guru Purnima");
  if (m === 7 && d === 15) festivals.push("Independence Day");
  if (m === 7 && d === 26) festivals.push("Janmashtami");
  if (m === 8 && d === 7) festivals.push("Ganesh Chaturthi");
  if (m === 8 && d === 18) festivals.push("Anant Chaturdashi");
  if (m === 9 && d === 2) festivals.push("Navratri Begins");
  if (m === 9 && d === 12) festivals.push("Dussehra / Vijayadashami");
  if (m === 9 && d === 31) festivals.push("Diwali");
  if (m === 10 && d === 1) festivals.push("Govardhan Puja");
  if (m === 10 && d === 2) festivals.push("Bhai Dooj");
  if (m === 10 && d === 15) festivals.push("Dev Deepawali");
  if (m === 10 && d === 27) festivals.push("Kartik Purnima");
  if (isPurnima) festivals.push("Purnima");
  if (isAmavasya) festivals.push("Amavasya");
  if (tithiName === "Ekadashi") festivals.push(paksha === "Shukla Paksha" ? "Shukla Ekadashi" : "Krishna Ekadashi");

  // Lucky items
  const luckyColor = LUCKY_COLORS[Math.floor(rng() * LUCKY_COLORS.length)];
  const luckyNumber = 1 + Math.floor(rng() * 9);
  const luckyDirection = LUCKY_DIRECTIONS[Math.floor(rng() * LUCKY_DIRECTIONS.length)];

  const allRecommended = [
    "Start new ventures", "Griha Pravesh", "Travel", "Buying property",
    "Wearing new clothes", "Starting education", "Religious ceremonies",
    "Charity & donations", "Marriage discussions", "Medical treatment",
    "Buying vehicles", "Planting trees", "Opening bank account"
  ];
  const allAvoid = [
    "Signing contracts", "Lending money", "Starting journey",
    "Hair cutting", "Purchasing electronics", "Court matters",
    "Surgical procedures", "Buying sharp objects"
  ];

  const recommended: string[] = [];
  const avoid: string[] = [];
  const recCopy = [...allRecommended];
  for (let i = 0; i < 3 + Math.floor(rng() * 2); i++) {
    if (recCopy.length === 0) break;
    const idx = Math.floor(rng() * recCopy.length);
    recommended.push(recCopy.splice(idx, 1)[0]);
  }
  const avCopy = [...allAvoid];
  for (let i = 0; i < 2 + Math.floor(rng() * 2); i++) {
    if (avCopy.length === 0) break;
    const idx = Math.floor(rng() * avCopy.length);
    avoid.push(avCopy.splice(idx, 1)[0]);
  }

  const auspicious = [
    { label: "Abhijit Muhurat", time: fmtRange(abhStart, abhEnd) },
    { label: "Amrit Kaal", time: fmtRange(amritStart, amritEnd) },
    { label: "Brahma Muhurat", time: fmtRange(brahmaStart, brahmaEnd) },
  ];

  const inauspicious = [
    { label: "Rahu Kaal", time: getRahuKaal(dayOfWeek, sunriseDecimal, sunsetDecimal) },
    { label: "Yamaganda", time: getYamaganda(dayOfWeek, sunriseDecimal, sunsetDecimal) },
    { label: "Gulika Kaal", time: getGulikaKaal(dayOfWeek, sunriseDecimal, sunsetDecimal) },
    { label: "Dur Muhurat", time: fmtRange(durStart, durEnd) },
    { label: "Varjyam", time: fmtRange(varStart, varEnd) },
  ];

  const dateStr = date.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return {
    gregorianDate: dateStr,
    hinduDate: `${HINDI_MONTHS[hinduMonthIdx]} ${paksha}, ${tithiName} (${hinduDay})`,
    vaar: VAARS[dayOfWeek],
    tithi: tithiName,
    tithiEndTime: formatTime(tithiEndH, tithiEndM),
    nakshatra: NAKSHATRAS[nakshatraIdx],
    nakshatraEndTime: formatTime(nakEndH, nakEndM),
    yoga: YOGAS[yogaIdx],
    yogaEndTime: formatTime(yogaEndH, yogaEndM),
    karana: KARANAS[karanaIdx],
    paksha,
    maas: HINDI_MONTHS[hinduMonthIdx],
    samvat: `Vikram Samvat ${samvat}`,
    moonSign: RASHIS[moonIdx],
    sunSign: RASHIS[sunMonth],
    sunrise,
    sunset,
    moonrise: formatTime(moonriseH, moonriseM),
    moonset: formatTime(moonsetH, moonsetM),
    rahuKaal: getRahuKaal(dayOfWeek, sunriseDecimal, sunsetDecimal),
    yamaganda: getYamaganda(dayOfWeek, sunriseDecimal, sunsetDecimal),
    gulikaKaal: getGulikaKaal(dayOfWeek, sunriseDecimal, sunsetDecimal),
    abhijitMuhurat: fmtRange(abhStart, abhEnd),
    brahmaMuhurat: fmtRange(brahmaStart, brahmaEnd),
    amritKaal: fmtRange(amritStart, amritEnd),
    durMuhurat: fmtRange(durStart, durEnd),
    varjyam: fmtRange(varStart, varEnd),
    festivals,
    luckyColor,
    luckyNumber,
    luckyDirection,
    recommended,
    toAvoid: avoid,
    auspicious,
    inauspicious,
    lastUpdated: new Date().toLocaleString("en-IN"),
    cityName: city.name,
  };
}
