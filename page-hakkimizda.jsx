// Hakkımızda — gerçek Mavi Mine kimliği

function Hero() {
  return (
    <section style={{ padding: '80px 48px 60px', background: 'var(--milk)', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 80, right: '8%', width: 90, height: 90, opacity: 0.5 }} viewBox="0 0 100 100">
        <path d="M50 8 Q66 22 82 30 Q72 50 80 70 Q60 76 50 92 Q40 76 20 70 Q28 50 18 30 Q34 22 50 8" fill="var(--sun)"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ marginBottom: 18, color: 'var(--teal-deep)' }}>01 · hakkımızda</div>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 1.0, maxWidth: 1100 }}>
          Çocuğun <span className="handwritten" style={{ color: 'var(--teal-deep)', fontSize: '1.05em' }}>mavisi</span> kadar geniş,<br/>
          <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.05em' }}>minesi</span> kadar değerli.
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 680, fontWeight: 500 }}>
          Mavi Mine Anaokulu; çocuğun sınırsız hayalini ve içindeki değeri merkeze alan
          bir okuldur. Alanında uzman bir aile, üç nesil eğitimci geleneğiyle çocuğunuzu
          sevgiyle, bilimle ve sabırla büyütmeyi vaat eder.
        </p>
      </div>
    </section>
  );
}

function FoundersImage() {
  return (
    <section style={{ padding: '0 48px 60px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24 }}>
        <div className="ph teal" style={{ aspectRatio: '4/3', borderRadius: 24 }}>[Hatice Adanur Şahin · kurucu portresi]</div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 24 }}>
          <div className="ph orange" style={{ borderRadius: 24 }}>[atölye · keşif]</div>
          <div className="ph rose" style={{ borderRadius: 24 }}>[bahçede oyun]</div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>
        <div>
          <div className="ph teal" style={{ aspectRatio: '3/4', borderRadius: 20 }}>[kurucu portresi]</div>
          <div style={{ marginTop: 16, fontFamily: "'Caveat', cursive", fontSize: 24, color: 'var(--teal-deep)', textAlign: 'center' }}>
            "Çocuk, sevgiyle büyür."
          </div>
        </div>
        <div>
          <div className="section-label">Kurucumuz</div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: 16 }}>
            Hatice Adanur <span style={{ color: 'var(--orange)' }}>Şahin</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 500, margin: '0 0 16px' }}>
            Yıllarca anaokullarında <strong>öğretmen ve idareci olarak çalışmış</strong>,
            <strong> Montessori uzmanı</strong> bir pedagog. Mavi Mine'in temellerini
            attığı pedagojik vizyon, çocuğun bireysel gelişim hızına saygı duyan
            ve sevgiyi merkeze koyan bir yaklaşımdır.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 500, margin: 0 }}>
            Yanında <strong>alan mezunu, deneyimli öğretmenler</strong>,
            danışman olarak <strong>iki psikolog</strong> ve
            <strong> iki dil ve konuşma terapisti</strong> ile birlikte hizmet veriyor.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionValues() {
  const items = [
    { color: 'teal',   title: 'Sevgi',         note: 'Eğitimin merkezi sevgi. Her çocuk kucaklanır, dinlenir, görülür.' },
    { color: 'orange', title: 'Bireysel Hız',  note: 'Her çocuk kendi temposuyla açar. Standart yok, kişisel rota var.' },
    { color: 'rose',   title: 'Doğa',          note: '900 m² bahçe, tarım, kum, yüzme — büyümek dışarıda da olur.' },
    { color: 'grass',  title: 'Bilim',         note: '21. Yüzyıl Becerileri: STEAM, kodlama, eleştirel düşünme.' },
    { color: 'sun',    title: 'Değerler',      note: 'Sevgi Dersi adı altında değerler eğitimi her yaş düzeyinde.' },
    { color: 'grape',  title: 'Aile',          note: 'Üç nesil eğitimci aile geleneği. Veli birinci paydaş.' },
  ];
  return (
    <section style={{ padding: '120px 48px', background: 'var(--sand)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <div className="section-label center">Değerlerimiz</div>
          <h2 style={{ fontSize: 'clamp(40px, 4.4vw, 60px)', lineHeight: 1.05 }}>
            Altı kelime, <span className="handwritten" style={{ color: 'var(--rose)', fontSize: '1.1em' }}>bir pusula.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {items.map((it, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 20, padding: 28, border: `2px solid var(--${it.color}-soft)`, transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
              <div className={`smile-circle ${it.color}`} style={{ width: 48, height: 48, marginBottom: 18 }}>
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <circle cx="11" cy="13" r="1.6" fill="currentColor"/>
                  <circle cx="21" cy="13" r="1.6" fill="currentColor"/>
                  <path d="M 9 19 Q 16 25 23 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{it.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0, fontWeight: 500 }}>{it.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NameStory() {
  const blueWords = [
    { l: 'M', w: 'Merak',     color: 'sky' },
    { l: 'A', w: 'Açıklık',   color: 'teal' },
    { l: 'V', w: 'Vicdan',    color: 'grape' },
    { l: 'İ', w: 'İlham',     color: 'sun' },
  ];
  const mineWords = [
    { l: 'M', w: 'Marifet',   color: 'orange' },
    { l: 'İ', w: 'İncelik',   color: 'rose' },
    { l: 'N', w: 'Nezaket',   color: 'grass' },
    { l: 'E', w: 'Emek',      color: 'coral' },
  ];
  return (
    <section style={{ padding: '120px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label center">İsmimiz</div>
        <h2 style={{ fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.05, marginBottom: 28 }}>
          <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '0.55em', display: 'block', marginBottom: 6 }}>iki kelime, iki söz:</span>
          <span style={{ color: 'var(--teal-deep)' }}>Mavi</span>
          <span style={{ color: 'var(--ink-light)', margin: '0 14px', fontWeight: 400 }}>·</span>
          <span style={{ color: 'var(--orange)' }}>Mine</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: 760, margin: '0 auto 56px', fontWeight: 500 }}>
          <strong style={{ color: 'var(--teal-deep)' }}>Mavi</strong>; gökyüzü ve denizdir,
          sınırsız hayalin rengi. Çocuğun bakışındaki sonsuzluk.
          <br/>
          <strong style={{ color: 'var(--orange)' }}>Mine</strong>; en değerli mineral,
          sabırla parlatılan taş. Her çocuğun içinde bir mine.
          <br/><br/>
          Biz, <em>çocuğun mavisini</em> kısıtlamayan; <em>içindeki mineyi</em>
          sevgiyle parlatan bir okul olmak için kurulduk.
        </p>

        {/* MAVİ */}
        <div style={{ marginBottom: 40 }}>
          <div className="handwritten" style={{ fontSize: 30, color: 'var(--teal-deep)', marginBottom: 14 }}>
            mavi'de neyimiz var?
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, maxWidth: 560, margin: '0 auto' }}>
            {blueWords.map((it, i) => (
              <div key={i}>
                <div className={`smile-circle ${it.color}`} style={{
                  width: '100%', aspectRatio: '1', height: 'auto',
                  fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, borderRadius: '50%',
                }}>{it.l}</div>
                <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{it.w}</div>
              </div>
            ))}
          </div>
        </div>

        {/* MİNE */}
        <div>
          <div className="handwritten" style={{ fontSize: 30, color: 'var(--orange)', marginBottom: 14 }}>
            mine'de neyimiz var?
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, maxWidth: 560, margin: '0 auto' }}>
            {mineWords.map((it, i) => (
              <div key={i}>
                <div className={`smile-circle ${it.color}`} style={{
                  width: '100%', aspectRatio: '1', height: 'auto',
                  fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, borderRadius: '50%',
                }}>{it.l}</div>
                <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{it.w}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ padding: '110px 48px', background: 'var(--teal-deep)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'var(--orange)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'var(--rose)', opacity: 0.3 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.1, marginBottom: 16, color: 'white' }}>
          Bizi <span style={{ color: 'var(--sun)', fontFamily: "'Caveat', cursive", fontSize: '1.2em' }}>tanımak</span> ister misiniz?
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,251,242,0.85)', marginBottom: 28, fontWeight: 500 }}>
          Çocuğunuzla birlikte gelin, bahçeyi gezin, öğretmenlerimizle tanışın.
        </p>
        <div style={{ display: 'inline-flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="iletisim.html" className="btn orange">Randevu alın →</a>
          <a href="basvuru.html" className="btn ghost" style={{ borderColor: 'rgba(255,251,242,0.6)', color: 'var(--paper)' }}>Başvuru</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Hakkımızda">
      <Nav active="Hakkımızda" />
      <Hero />
      <FoundersImage />
      <Founder />
      <MissionValues />
      <NameStory />
      <CTA />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
