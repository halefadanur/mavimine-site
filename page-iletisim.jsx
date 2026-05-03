// İletişim — Mavi Mine

function IletisimHero() {
  return (
    <section style={{ padding: '80px 48px 40px', background: 'var(--milk)', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 60, right: '8%', width: 90, height: 90, opacity: 0.5 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="32" fill="var(--rose)"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ marginBottom: 18, color: 'var(--teal-deep)' }}>07 · iletişim</div>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 1.0, maxWidth: 1100 }}>
          Kapımızı <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.05em' }}>çalın.</span>
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 660, fontWeight: 500 }}>
          Bir okul gezisi planlamak, soru sormak ya da sadece selam vermek için.
          En sevdiğimiz cümle: "gelmek istiyorum."
        </p>
      </div>
    </section>
  );
}

const CONTACT = [
  { color: 'orange', k: 'Adres',     v: '[mahalle, sokak]\n[ilçe, istanbul]', icon: '◉' },
  { color: 'teal',   k: 'Telefon',   v: '+90 ___ ___ __ __',                  icon: '☎' },
  { color: 'rose',   k: 'E-posta',   v: 'merhaba@mavimine.org',               icon: '✉' },
  { color: 'sun',    k: 'Saatler',   v: 'Pzt — Cum · 07:30 — 18:00',          icon: '☀' },
  { color: 'grape',  k: 'Sosyal',    v: '@mavimine',                          icon: '♥' },
];

function App() {
  return (
    <div data-screen-label="Iletisim">
      <Nav active="İletişim" />
      <IletisimHero />
      <section style={{ padding: '40px 48px 100px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }}>
          <div className="ph teal" style={{
            aspectRatio: '4/3', minHeight: 420, borderRadius: 24, position: 'relative',
          }}>
            [harita · kampüs konumu]
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', background: 'var(--orange)',
                boxShadow: '0 0 0 12px rgba(243,140,73,0.3), 0 0 0 24px rgba(243,140,73,0.15)',
              }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CONTACT.map(c => (
              <div key={c.k} style={{
                background: 'white', border: `2px solid var(--${c.color}-soft)`,
                borderRadius: 16, padding: '20px 24px',
                display: 'grid', gridTemplateColumns: '52px 1fr', gap: 18, alignItems: 'center',
              }}>
                <div className={`smile-circle ${c.color}`} style={{ width: 48, height: 48, fontSize: 20 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-light)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
                    {c.k}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 600, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '110px 48px', background: 'var(--teal-deep)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'var(--orange)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'var(--rose)', opacity: 0.3 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
          <div className="section-label center" style={{ color: 'rgba(255,251,242,0.7)' }}>Okul gezisi</div>
          <h2 style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', color: 'white', marginBottom: 16, lineHeight: 1.1 }}>
            <span className="handwritten" style={{ color: 'var(--sun)', fontSize: '1.1em' }}>Salı</span> ve
            <span className="handwritten" style={{ color: 'var(--sun)', fontSize: '1.1em' }}> Perşembe</span> sabahları açığız.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,251,242,0.85)', marginBottom: 28, fontWeight: 500 }}>
            Bir saat. Bahçemizi gezin, çocuklarla tanışın, sorularınızı sorun.
          </p>
          <a href="on-kayit-formu.html" className="btn orange">Randevu al →</a>
        </div>
      </section>
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
