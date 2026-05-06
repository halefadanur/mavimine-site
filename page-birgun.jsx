// Bir Gün — Mavi Mine'de günlük akış

const BLOCKS = [
  { t: '07:30', h: 'Karşılama', d: 'Sakin müzik, sıcak gülümsemeler. Her çocuk adıyla karşılanır.', color: 'sun', icon: '☀', src: 'images/galeri/dis_cephe.jpg', alt: 'Karşılama anı' },
  { t: '08:30', h: 'Kahvaltı',  d: 'Kendi mutfağımızdan, ev ortamı sıcaklığında bir başlangıç.', color: 'orange', icon: '🍞', src: 'images/galeri/yemekhane2.jpg', alt: 'Kahvaltı sofrası' },
  { t: '09:30', h: 'Daire Zamanı', d: 'Günün sorusu, paylaşımlar, hikâye. Birlikte güne yön veririz.', color: 'rose', icon: '○', src: 'images/galeri/bahcede_cocuklar.jpg', alt: 'Daire zamanı' },
  { t: '10:30', h: 'Ana Etkinlik', d: 'Drama, STEAM, Montessori atölyesi veya İngilizce — günün dokusuna göre.', color: 'teal', icon: '✿', src: 'images/galeri/sinif_etkinligi.jpg', alt: 'Ana etkinlik' },
  { t: '12:00', h: 'Öğle Yemeği', d: 'Birlikte sofra kurar, birlikte toplarız. Beslenme bir paylaşımdır.', color: 'sun', icon: '🍽', src: 'images/galeri/yemekhane.jpg', alt: 'Öğle yemeği' },
  { t: '13:00', h: 'Dinlenme',   d: 'Sessiz hikâye. Küçükler uyur, büyükler kitap karıştırır.', color: 'grape', icon: '☾', src: 'images/galeri/uyku_odasi.jpg', alt: 'Dinlenme zamanı' },
  { t: '14:30', h: 'Bahçe & Tarım', d: '900 m² bahçede serbest oyun. Tohum, su, toprak — doğa zamanı.', color: 'grass', icon: '✿', src: 'images/galeri/bahce_etkinlikk20.jpg', alt: 'Bahçede tarım' },
  { t: '16:00', h: 'Atölye 2', d: 'Kum havuzu, sanat ya da yüzme (haftalık programa göre).', color: 'sky', icon: '◇', src: 'images/galeri/bahce_etkinlikk13.jpg', alt: 'Kum havuzu atölyesi' },
  { t: '17:00', h: 'Veda',     d: 'Günün notları, bir küçük sarılma. Ailelere kısa bir günlük.', color: 'coral', icon: '♥', src: 'images/galeri/oyun_bahce.jpg', alt: 'Veda zamanı' },
];

function BirGunHero() {
  return (
    <section className="birgun-hero">
      <svg className="birgun-hero-blob" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="32" fill="var(--sun)"/>
      </svg>
      <div className="birgun-hero-inner">
        <div className="mono" style={{ marginBottom: 18, color: 'var(--teal-deep)' }}>04 · bir gün</div>
        <h1 className="birgun-hero-title">
          <span style={{ color: 'var(--orange)' }}>07:30</span>'dan
          <span className="handwritten birgun-hero-akshama" style={{ color: 'var(--teal-deep)' }}>akşama</span>
          kadar.
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 700, fontWeight: 500 }}>
          Bir gün sakin başlar, dağılır, toplanır. Çocuğun temposunu zorlamadan,
          oyun ile öğrenmeyi harmanlayarak, hep birlikte.
        </p>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section style={{ padding: '80px 48px 100px', background: 'var(--paper)' }}>
      <div className="birgun-tl-grid">
        <div className="birgun-tl-photo" style={{ aspectRatio: '3/4', borderRadius: 24, overflow: 'hidden' }}>
          <Img src="images/galeri/bahce_etkinlikk10.jpg" alt="Bir gün Mavi Mine'de" color="teal" label="[bir gün]" style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 24, top: 30, bottom: 30,
            width: 3, background: 'repeating-linear-gradient(to bottom, var(--teal) 0 8px, transparent 8px 14px)',
            borderRadius: 2,
          }} />
          {BLOCKS.map((b, i) => (
            <div key={b.t} className="birgun-tl-row">
              <div className={`smile-circle ${b.color}`} style={{
                width: 50, height: 50, fontSize: 22, zIndex: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}>{b.icon}</div>
              <div className="birgun-tl-card" style={{
                background: 'white', border: `2px solid var(--${b.color}-soft)`,
                borderRadius: 16, padding: '18px 22px',
              }}>
                <div className="birgun-tl-card-photo">
                  <Img src={b.src} alt={b.alt} color={b.color} label={`[${b.h.toLowerCase()}]`}
                       style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="birgun-tl-card-text">
                  <div className="mono" style={{ color: `var(--${b.color === 'sun' ? 'orange' : b.color})`, marginBottom: 4 }}>
                    {b.t}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{b.h}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55, fontWeight: 500 }}>{b.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedules() {
  const items = [
    { color: 'teal',   h: '07:30 → 18:00', t: 'Tam Gün',      d: 'Velinin işine göre uzayan bir gün. Kahvaltı, öğle ve ikindi öğünleri dahil.' },
    { color: 'orange', h: '07:30 → 13:00', t: 'Yarım Gün',    d: 'Küçükler için daha kısa bir tempo. Kahvaltı ve etkinlikler dahil.' },
    { color: 'grass',  h: 'Haz · Tem · Ağu', t: 'Yaz Atölyesi', d: 'Üç hafta süreli proje atölyeleri. Tarım, sanat ve doğa odaklı yaz programı.' },
  ];
  return (
    <section style={{ padding: '110px 48px', background: 'var(--sand)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="section-label">Günlük Programlar</div>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: 40 }}>
          Üç farklı <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.1em' }}>tempo.</span>
        </h2>
        <div className="birgun-3-grid">
          {items.map((it, i) => (
            <div key={it.t} style={{
              background: 'white', borderRadius: 20, padding: 32,
              border: `2px solid var(--${it.color}-soft)`,
              transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)`,
            }}>
              <div className="mono" style={{ color: `var(--${it.color})`, marginBottom: 10 }}>{it.h}</div>
              <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 10 }}>{it.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BirGunMoreShots() {
  const tiles = [
    { src: 'images/galeri/bahce_etkinlikk16.jpg', alt: 'Bahçede grup', l: 'birlikte' },
    { src: 'images/galeri/bahce_etkinlikk22.jpg', alt: 'Tatlı an',     l: 'kahkaha' },
    { src: 'images/galeri/gezi_yata.jpg',         alt: 'Doğa gezisi',  l: 'dışarıda' },
    { src: 'images/galeri/yeni7.jpg',             alt: 'Cuma klasiği', l: 'cuma klasiği' },
  ];
  return (
    <section style={{ padding: '90px 48px 110px', background: 'var(--milk)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="mono" style={{ marginBottom: 14, color: 'var(--teal-deep)' }}>· günün başka kareleri ·</div>
        <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.1, marginBottom: 36, maxWidth: 800 }}>
          Her gün biraz <span className="handwritten" style={{ color: 'var(--orange)' }}>başka</span>.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 32 }}>
          {tiles.map((t, i) => (
            <div key={i} style={{
              aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden',
              cursor: 'pointer', transition: 'transform .3s'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <Img src={t.src} alt={t.alt} color="teal" label={`[${t.l}]`}
                   style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="galeri.html" className="btn ghost" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Tüm galeri →
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Bir Gün">
      <Nav active="Bir Gün" />
      <BirGunHero />
      <Timeline />
      <Schedules />
      <BirGunMoreShots />
      <FooterEl />
      <WhatsAppFloat />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
