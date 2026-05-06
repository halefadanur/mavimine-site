// Galeri — Mavi Mine atölye günlüğü

const { useState } = React;

const TILES = [
  { c: 'orange', src: 'images/galeri/okul_onden_guzel.jpg',     alt: 'Mavi Mine binası',          l: 'binamız',          cat: 'mekan',    size: 'span 6', row: 'span 2' },
  { c: 'teal',   src: 'images/galeri/bahce_etkinlikk13.jpg',    alt: 'Kum havuzunda oyun',        l: 'kum havuzu',       cat: 'bahçemiz', size: 'span 3', row: 'span 1' },
  { c: 'rose',   src: 'images/galeri/sinif_ici_etkinlik3.jpg',  alt: 'Boyama atölyesi',           l: 'boyama atölyesi',  cat: 'atölye',   size: 'span 3', row: 'span 1' },
  { c: 'grass',  src: 'images/galeri/bahce_etkinlikk20.jpg',    alt: 'Toprakla oyun',             l: 'toprakla oyun',    cat: 'bahçemiz', size: 'span 3', row: 'span 1' },
  { c: 'sun',    src: 'images/galeri/at_binme3.jpg',            alt: 'At binme etkinliği',        l: 'at binme',         cat: 'gezi',     size: 'span 3', row: 'span 1' },
  { c: 'grass',  src: 'images/galeri/bahce_etkinligi.jpg',      alt: 'Bahçemizde grup etkinliği', l: 'çimde halka',      cat: 'bahçemiz', size: 'span 6', row: 'span 1' },
  { c: 'grape',  src: 'images/galeri/sinif_ici_etkinlik2.jpg',  alt: 'Boyama atölyesi',           l: 'boyama anı',       cat: 'atölye',   size: 'span 3', row: 'span 1' },
  { c: 'orange', src: 'images/galeri/cupcake_etkinlik.jpg',     alt: 'Cupcake atölyesi',          l: 'cupcake atölyesi', cat: 'mutfak',   size: 'span 3', row: 'span 1' },
  { c: 'sky',    src: 'images/galeri/mudur_odasi.jpg',          alt: 'Müdür odası',               l: 'müdür odası',      cat: 'mekan',    size: 'span 3', row: 'span 1' },
  { c: 'teal',   src: 'images/galeri/gezi_yata.jpg',            alt: 'Doğa yürüyüşü',             l: 'doğa yürüyüşü',    cat: 'gezi',     size: 'span 6', row: 'span 1' },
  { c: 'rose',   src: 'images/galeri/yemekhane.jpg',            alt: 'Yemekhanemiz',              l: 'yemekhanemiz',     cat: 'mekan',    size: 'span 3', row: 'span 1' },
  { c: 'sun',    src: 'images/galeri/bahce_etkinlikk10.jpg',    alt: 'Bahçemizde oyun',           l: 'yeşil tünel',      cat: 'bahçemiz', size: 'span 3', row: 'span 1' },
];

const FILTERS = ['hepsi', 'bahçemiz', 'atölye', 'mekan', 'gezi', 'mutfak'];

function GaleriHero() {
  return (
    <section style={{ padding: '80px 48px 40px', background: 'var(--milk)', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 60, right: '8%', width: 90, height: 90, opacity: 0.5 }} viewBox="0 0 100 100">
        <path d="M50 8 Q66 22 82 30 Q72 50 80 70 Q60 76 50 92 Q40 76 20 70 Q28 50 18 30 Q34 22 50 8" fill="var(--rose)"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ marginBottom: 18, color: 'var(--teal-deep)' }}>05 · galeri</div>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 1.0, maxWidth: 1100 }}>
          Günden <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.05em' }}>küçük</span> günler.
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 660, fontWeight: 500 }}>
          Atölyenin günlüğü. Çocukların elinden geçen, ışıkta toplanan, bahçede dağılan anlar.
        </p>
      </div>
    </section>
  );
}

function Grid() {
  const [filter, setFilter] = useState('hepsi');
  const visible = TILES.filter(t => filter === 'hepsi' || t.cat === filter);
  return (
    <section style={{ padding: '40px 48px 100px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              border: '2px solid', borderColor: filter === f ? 'var(--teal-deep)' : 'var(--teal-soft)',
              background: filter === f ? 'var(--teal-deep)' : 'white',
              color: filter === f ? 'white' : 'var(--ink)',
              padding: '10px 20px', cursor: 'pointer', font: 'inherit', fontSize: 13,
              fontWeight: 600, borderRadius: 999, transition: 'all .2s',
            }}>{f}</button>
          ))}
        </div>
        <div className="galeri-12-grid">
          {visible.map((t, i) => (
            <div key={i} style={{
                gridColumn: t.size, gridRow: t.row,
                cursor: 'pointer', transition: 'transform .3s', borderRadius: 18,
                overflow: 'hidden'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.015)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <Img src={t.src} alt={t.alt} color={t.c} label={`[${t.l}]`}
                   style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <button className="btn ghost">Daha fazlası ↓</button>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Galeri">
      <Nav active="Galeri" />
      <GaleriHero />
      <Grid />
      <FooterEl />
      <WhatsAppFloat />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
