import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generatePanchangData, PANCHANG_CITIES, PanchangCity, PanchangData } from '../utils/panchangData';
import {
  Sun, Moon, Sunrise, Sunset, MapPin, Search, Share2, Printer,
  Download, Copy, Check, Star, Clock, Calendar, Sparkles, ChevronDown,
  AlertTriangle, CheckCircle, XCircle, Navigation, X, Palette, Hash,
  Compass, ThumbsUp, ThumbsDown, PartyPopper, BookOpen
} from 'lucide-react';

/* ============ City Selector ============ */
const CitySelector: React.FC<{
  cities: PanchangCity[];
  selected: PanchangCity;
  onSelect: (c: PanchangCity) => void;
  onDetectLocation: () => void;
  detecting: boolean;
}> = ({ cities, selected, onSelect, onDetectLocation, detecting }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = cities.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.state.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={ref} className="panchang-city-selector">
      <button className="panchang-city-btn" onClick={() => setOpen(!open)}>
        <MapPin size={16} />
        <span>{selected.name}, {selected.state}</span>
        <ChevronDown size={14} className={`panchang-chevron ${open ? 'open' : ''}`} />
      </button>
      {open && (
        <div className="panchang-city-dropdown">
          <div className="panchang-city-search">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search city..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <button className="panchang-detect-btn" onClick={() => { onDetectLocation(); setOpen(false); }} disabled={detecting}>
            <Navigation size={14} />
            {detecting ? 'Detecting...' : 'Use My Location'}
          </button>
          <div className="panchang-city-list">
            {filtered.map(c => (
              <button
                key={c.name}
                className={`panchang-city-option ${c.name === selected.name ? 'active' : ''}`}
                onClick={() => { onSelect(c); setOpen(false); setQuery(''); }}
              >
                <span className="city-name">{c.name}</span>
                <span className="city-state">{c.state}</span>
              </button>
            ))}
            {filtered.length === 0 && <div className="panchang-no-results">No cities found</div>}
          </div>
        </div>
      )}
    </div>
  );
};

/* ============ Info Card ============ */
const InfoCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}> = ({ icon, label, value, sub, accent }) => (
  <div className={`panchang-info-card ${accent ? 'accent' : ''}`}>
    <div className="panchang-info-icon">{icon}</div>
    <div className="panchang-info-body">
      <span className="panchang-info-label">{label}</span>
      <span className="panchang-info-value">{value}</span>
      {sub && <span className="panchang-info-sub">{sub}</span>}
    </div>
  </div>
);

/* ============ Section Header ============ */
const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; subtitle?: string }> = ({ icon, title, subtitle }) => (
  <div className="panchang-section-header">
    <div className="panchang-section-icon">{icon}</div>
    <div>
      <h2 className="panchang-section-title">{title}</h2>
      {subtitle && <p className="panchang-section-subtitle">{subtitle}</p>}
    </div>
  </div>
);

/* ============ Share Modal ============ */
const ShareModal: React.FC<{ url: string; title: string; onClose: () => void }> = ({ url, title, onClose }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="panchang-modal-overlay" onClick={onClose}>
      <div className="panchang-modal" onClick={e => e.stopPropagation()}>
        <button className="panchang-modal-close" onClick={onClose}><X size={20} /></button>
        <h3>Share Today's Panchang</h3>
        <div className="panchang-share-grid">
          <a href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="share-btn whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/></svg>
            WhatsApp
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="share-btn facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="share-btn twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            X (Twitter)
          </a>
          <button className="share-btn copy-link" onClick={copyLink}>
            {copied ? <Check size={20} /> : <Copy size={20} />}
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============ Main Page ============ */
export const DailyPanchangPage: React.FC = () => {
  const [city, setCity] = useState<PanchangCity>(PANCHANG_CITIES[0]);
  const [data, setData] = useState<PanchangData | null>(null);
  const [detecting, setDetecting] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const loadPanchang = useCallback(() => {
    const today = new Date();
    const pd = generatePanchangData(today, city);
    setData(pd);
    document.title = `Today's Panchang - ${city.name} | ${today.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  }, [city]);

  useEffect(() => { loadPanchang(); }, [loadPanchang]);

  // Auto-refresh at midnight
  useEffect(() => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const msToMidnight = midnight.getTime() - now.getTime();
    const timer = setTimeout(() => { loadPanchang(); }, msToMidnight);
    return () => clearTimeout(timer);
  }, [loadPanchang]);

  const detectLocation = () => {
    if (!navigator.geolocation) return;
    setDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let nearest = PANCHANG_CITIES[0];
        let minDist = Infinity;
        for (const c of PANCHANG_CITIES) {
          const dist = Math.sqrt((c.lat - latitude) ** 2 + (c.lng - longitude) ** 2);
          if (dist < minDist) { minDist = dist; nearest = c; }
        }
        setCity(nearest);
        setDetecting(false);
      },
      () => { setDetecting(false); }
    );
  };

  const handlePrint = () => window.print();

  const handlePDF = () => {
    window.print(); // browsers allow saving as PDF from print dialog
  };

  if (!data) return (
    <div className="panchang-loading">
      <div className="panchang-loading-spinner" />
      <p>Loading Panchang...</p>
    </div>
  );

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pageTitle = `Today's Panchang - ${city.name}`;

  return (
    <>
      {/* SEO Meta */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageTitle,
        "description": `Daily Panchang for ${city.name} - Tithi, Nakshatra, Yoga, Rahu Kaal and more`,
        "dateModified": new Date().toISOString(),
      })}} />

      <div className="panchang-page" ref={printRef}>
        {/* Hero Header */}
        <section className="panchang-hero">
          <div className="panchang-hero-bg" />
          <div className="panchang-hero-content">
            <div className="panchang-hero-om">ॐ</div>
            <h1 className="panchang-hero-title">Daily Panchang</h1>
            <p className="panchang-hero-date">{data.gregorianDate}</p>
            <p className="panchang-hero-hindu">{data.hinduDate}</p>
            <p className="panchang-hero-samvat">{data.samvat}</p>
            <CitySelector
              cities={PANCHANG_CITIES}
              selected={city}
              onSelect={setCity}
              onDetectLocation={detectLocation}
              detecting={detecting}
            />
          </div>
        </section>

        <div className="panchang-container">
          {/* Quick Actions */}
          <div className="panchang-actions print:hidden">
            <button onClick={() => setShowShare(true)} className="panchang-action-btn">
              <Share2 size={16} /> Share
            </button>
            <button onClick={handlePrint} className="panchang-action-btn">
              <Printer size={16} /> Print
            </button>
            <button onClick={handlePDF} className="panchang-action-btn">
              <Download size={16} /> Save PDF
            </button>
          </div>

          {/* ───── Core Panchang Details ───── */}
          <section className="panchang-section">
            <SectionHeader icon={<Calendar size={22} />} title="Panchang Details" subtitle="Essential Hindu calendar information" />
            <div className="panchang-grid-3">
              <InfoCard icon={<Calendar size={18} />} label="Tithi" value={data.tithi} sub={`Ends: ${data.tithiEndTime}`} accent />
              <InfoCard icon={<Star size={18} />} label="Nakshatra" value={data.nakshatra} sub={`Ends: ${data.nakshatraEndTime}`} />
              <InfoCard icon={<Sparkles size={18} />} label="Yoga" value={data.yoga} sub={`Ends: ${data.yogaEndTime}`} />
              <InfoCard icon={<Moon size={18} />} label="Karana" value={data.karana} />
              <InfoCard icon={<Calendar size={18} />} label="Paksha" value={data.paksha} />
              <InfoCard icon={<BookOpen size={18} />} label="Maas" value={data.maas} />
              <InfoCard icon={<Calendar size={18} />} label="Vaar" value={data.vaar} />
              <InfoCard icon={<Moon size={18} />} label="Moon Sign" value={data.moonSign} />
              <InfoCard icon={<Sun size={18} />} label="Sun Sign" value={data.sunSign} />
            </div>
          </section>

          {/* ───── Sun & Moon Timings ───── */}
          <section className="panchang-section">
            <SectionHeader icon={<Sunrise size={22} />} title="Sun & Moon Timings" subtitle="Celestial rise and set times" />
            <div className="panchang-grid-4">
              <div className="panchang-time-card sun-rise">
                <Sunrise size={28} />
                <span className="tc-label">Sunrise</span>
                <span className="tc-value">{data.sunrise}</span>
              </div>
              <div className="panchang-time-card sun-set">
                <Sunset size={28} />
                <span className="tc-label">Sunset</span>
                <span className="tc-value">{data.sunset}</span>
              </div>
              <div className="panchang-time-card moon-rise">
                <Moon size={28} />
                <span className="tc-label">Moonrise</span>
                <span className="tc-value">{data.moonrise}</span>
              </div>
              <div className="panchang-time-card moon-set">
                <Moon size={28} className="opacity-50" />
                <span className="tc-label">Moonset</span>
                <span className="tc-value">{data.moonset}</span>
              </div>
            </div>
          </section>

          {/* ───── Auspicious & Inauspicious ───── */}
          <section className="panchang-section">
            <SectionHeader icon={<Clock size={22} />} title="Today's Auspicious & Inauspicious Timings" />
            <div className="panchang-grid-2">
              <div className="panchang-timing-card good">
                <div className="timing-header good">
                  <CheckCircle size={20} />
                  <h3>Auspicious Timings</h3>
                </div>
                {data.auspicious.map((t, i) => (
                  <div key={i} className="timing-row">
                    <span className="timing-label">{t.label}</span>
                    <span className="timing-value">{t.time}</span>
                  </div>
                ))}
              </div>
              <div className="panchang-timing-card bad">
                <div className="timing-header bad">
                  <XCircle size={20} />
                  <h3>Inauspicious Timings</h3>
                </div>
                {data.inauspicious.map((t, i) => (
                  <div key={i} className="timing-row">
                    <span className="timing-label">{t.label}</span>
                    <span className="timing-value">{t.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───── Key Muhurats ───── */}
          <section className="panchang-section">
            <SectionHeader icon={<Clock size={22} />} title="Key Muhurat Timings" />
            <div className="panchang-grid-3">
              <InfoCard icon={<Sun size={18} />} label="Abhijit Muhurat" value={data.abhijitMuhurat} accent />
              <InfoCard icon={<Sunrise size={18} />} label="Brahma Muhurat" value={data.brahmaMuhurat} />
              <InfoCard icon={<Sparkles size={18} />} label="Amrit Kaal" value={data.amritKaal} />
              <InfoCard icon={<AlertTriangle size={18} />} label="Rahu Kaal" value={data.rahuKaal} />
              <InfoCard icon={<AlertTriangle size={18} />} label="Yamaganda" value={data.yamaganda} />
              <InfoCard icon={<AlertTriangle size={18} />} label="Gulika Kaal" value={data.gulikaKaal} />
              <InfoCard icon={<XCircle size={18} />} label="Dur Muhurat" value={data.durMuhurat} />
              <InfoCard icon={<XCircle size={18} />} label="Varjyam" value={data.varjyam} />
            </div>
          </section>

          {/* ───── Festival & Vrat ───── */}
          {data.festivals.length > 0 && (
            <section className="panchang-section">
              <SectionHeader icon={<PartyPopper size={22} />} title="Festival & Vrat" subtitle="Today's observances" />
              <div className="panchang-festival-list">
                {data.festivals.map((f, i) => (
                  <div key={i} className="panchang-festival-chip">
                    <span className="festival-dot" />
                    {f}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ───── Astrology Summary ───── */}
          <section className="panchang-section">
            <SectionHeader icon={<Sparkles size={22} />} title="Today's Astrology Summary" />
            <div className="panchang-summary-card">
              <div className="panchang-lucky-grid">
                <div className="lucky-item">
                  <Palette size={20} />
                  <span className="lucky-label">Lucky Color</span>
                  <span className="lucky-value">{data.luckyColor}</span>
                </div>
                <div className="lucky-item">
                  <Hash size={20} />
                  <span className="lucky-label">Lucky Number</span>
                  <span className="lucky-value">{data.luckyNumber}</span>
                </div>
                <div className="lucky-item">
                  <Compass size={20} />
                  <span className="lucky-label">Lucky Direction</span>
                  <span className="lucky-value">{data.luckyDirection}</span>
                </div>
              </div>
              <div className="panchang-grid-2" style={{ marginTop: '1.5rem' }}>
                <div className="panchang-rec-card good">
                  <div className="rec-header"><ThumbsUp size={18} /> Recommended Activities</div>
                  <ul>{data.recommended.map((r, i) => <li key={i}>{r}</li>)}</ul>
                </div>
                <div className="panchang-rec-card bad">
                  <div className="rec-header"><ThumbsDown size={18} /> Activities to Avoid</div>
                  <ul>{data.toAvoid.map((a, i) => <li key={i}>{a}</li>)}</ul>
                </div>
              </div>
            </div>
          </section>

          {/* ───── Disclaimer ───── */}
          <div className="panchang-disclaimer">
            <AlertTriangle size={16} />
            <p>Panchang timings are calculated based on your selected location and may vary slightly depending on the calculation method.</p>
          </div>

          {/* ───── Last Updated ───── */}
          <div className="panchang-updated">
            <Clock size={14} />
            <span>Last updated: {data.lastUpdated}</span>
          </div>
        </div>
      </div>

      {showShare && <ShareModal url={pageUrl} title={pageTitle} onClose={() => setShowShare(false)} />}
    </>
  );
};
