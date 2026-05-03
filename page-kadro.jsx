// Kadro — Mavi Mine ekibi (broşürdeki gerçek yapı)

const TEACHERS = [
  { name: 'Hatice Adanur Şahin', role: 'Kurucu · Pedagog', tag: 'Montessori uzmanı', color: 'teal',   img: 'images/team/team-04.jpeg' },
  { name: '—',                   role: 'Sınıf Öğretmeni',  tag: '3 yaş grubu',       color: 'orange', img: 'images/team/team-01.jpeg' },
  { name: '—',                   role: 'Sınıf Öğretmeni',  tag: '4 yaş grubu',       color: 'rose',   img: 'images/team/team-02.jpeg' },
  { name: '—',                   role: 'Sınıf Öğretmeni',  tag: '5—6 yaş grubu',     color: 'grass',  img: 'images/team/team-03.jpeg' },
  { name: '—',                   role: 'Branş Öğretmeni',  tag: 'İngilizce',         color: 'sky',    img: 'images/team/team-05.jpeg' },
  { name: '—',                   role: 'Branş Öğretmeni',  tag: 'Drama & Müzik',     color: 'sun',    img: null },
];

const CONSULTANTS = [
  { color: 'grape', title: 'İki Psikolog',         note: 'Çocuk gelişimi ve aile danışmanlığı; periyodik gözlem ve geri bildirim.' },
  { color: 'coral', title: 'İki Dil-Konuşma Terapisti', note: 'Erken dil gelişimi takibi, gerektiğinde bireyselleştirilmiş destek.' },
];

function KadroHero() {
  return (
    <section style={{ padding: '80px 48px 60px', background: 'var(--milk)', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 60, right: '8%', width: 90, height: 90, opacity: 0.5 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="32" fill="var(--orange)"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ marginBottom: 18, color: 'var(--teal-deep)' }}>03 · kadromuz</div>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 1.0, maxWidth: 1100 }}>
          Üç nesil, <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.05em' }}>altı öğretmen</span>,<br/>
          <span style={{ color: 'var(--teal-deep)' }}>bir aile.</span>
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 700, fontWeight: 500 }}>
          Alanında mezun, deneyimli öğretmenler. Yanlarında <strong>iki psikolog</strong> ve
          <strong> iki dil-konuşma terapisti</strong> danışmanlık eder. Her çocuğun
          gelişimi ayrı ayrı izlenir.
        </p>
      </div>
    </section>
  );
}

function TeacherGrid() {
  return (
    <section style={{ padding: '60px 48px 100px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="section-label">Eğitim Kadromuz</div>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: 40 }}>
          Aynı çatı altında <span className="handwritten" style={{ color: 'var(--rose)', fontSize: '1.1em' }}>aynı dili</span> konuşanlar.
        </h2>
        <div className="kadro-team-grid">
          {TEACHERS.map((t, i) => (
            <div key={i}>
              {t.img ? (
                <div style={{
                  aspectRatio: '3/4', marginBottom: 16, overflow: 'hidden',
                  borderRadius: 20, background: 'var(--cream-deep)', position: 'relative',
                  border: `4px solid var(--${t.color}-soft)`,
                }}>
                  <img src={t.img} alt={t.name} style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  }} />
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    background: `var(--${t.color})`, color: 'white',
                    padding: '6px 12px', borderRadius: 999,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  }}>{t.tag}</div>
                </div>
              ) : (
                <div className={`ph ${t.color}`} style={{ aspectRatio: '3/4', marginBottom: 16, borderRadius: 20 }}>
                  [öğretmen portresi {String(i+1).padStart(2,'0')}]
                </div>
              )}
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{t.name}</h3>
              <div style={{ fontSize: 14, color: 'var(--ink-soft)', fontWeight: 600 }}>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Consultants() {
  return (
    <section style={{ padding: '110px 48px', background: 'var(--sand)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
          <div className="section-label center">Danışmanlarımız</div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.1 }}>
            Her çocuk ayrı ayrı <span className="handwritten" style={{ color: 'var(--grape)', fontSize: '1.1em' }}>izlenir.</span>
          </h2>
          <p style={{ marginTop: 14, fontSize: 16, color: 'var(--ink-soft)', fontWeight: 500 }}>
            Çocuklarımız sadece öğretmenlerine değil, alanında uzman bir danışman ekibine de emanet.
          </p>
        </div>
        <div className="kadro-consult-grid">
          {CONSULTANTS.map((c, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 24, padding: 40,
              border: `2px solid var(--${c.color}-soft)`, textAlign: 'center',
            }}>
              <div className={`smile-circle ${c.color}`} style={{ width: 80, height: 80, margin: '0 auto 20px' }}>
                <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                  <circle cx="11" cy="13" r="1.6" fill="currentColor"/>
                  <circle cx="21" cy="13" r="1.6" fill="currentColor"/>
                  <path d="M 9 19 Q 16 25 23 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>{c.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ padding: '110px 48px', background: 'var(--paper)' }}>
      <div style={{
        maxWidth: 880, margin: '0 auto', textAlign: 'center',
        background: 'white', border: '2px dashed var(--teal)', borderRadius: 28, padding: '50px 40px',
      }}>
        <div className="section-label center">Bize katılmak ister misiniz?</div>
        <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 44px)', marginBottom: 16 }}>
          Açık çağrımız <span className="handwritten" style={{ color: 'var(--orange)' }}>her zaman</span> var.
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 24, maxWidth: 580, margin: '0 auto 24px', fontWeight: 500 }}>
          Çocuk gelişimi alanında deneyimli, sevgi dolu öğretmenler arıyoruz. CV'nizi gönderin, görüşelim.
        </p>
        <a href="iletisim.html" className="btn">İletişime geçin →</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Kadro">
      <Nav active="Kadro" />
      <KadroHero />
      <TeacherGrid />
      <Consultants />
      <CTA />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
