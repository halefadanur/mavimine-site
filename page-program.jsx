// Program — gerçek Mavi Mine programı (broşür içeriğiyle)

const { useState } = React;

const PROGRAMS = [
  {
    color: 'orange',
    title: 'Drama',
    tagline: 'Hayal gücü, ifade, özgüven',
    body: 'Oyun ve canlandırma teknikleriyle çocukların hayal gücünü harekete geçiriyor, duygusal ve sosyal becerilerini güçlendiriyoruz. Rol yapma, hikâye anlatımı ve doğaçlama etkinlikleriyle empati, özgüven ve iletişim becerileri gelişir.',
    bullets: ['Rol yapma', 'Hikâye anlatımı', 'Doğaçlama'],
  },
  {
    color: 'teal',
    title: 'STEAM & Kodlama',
    tagline: 'Üreten çocuklar yetiştiriyoruz',
    body: 'Erken yaşta bilim, teknoloji, mühendislik, sanat ve matematik gelişimi için keşfetmeye dayalı etkinlikler. Basit algoritmalar, görsel kodlama araçları ve robotik ile teknolojiyi sadece tüketen değil, üreten bireyler yetiştiriyoruz.',
    bullets: ['Görsel kodlama', 'Robotik', 'Bilimsel deneyler'],
  },
  {
    color: 'sun',
    title: 'Kum Havuzu',
    tagline: 'Duyusal keşif, ince motor',
    body: 'Kumla oynamak ince motor becerilerini geliştirir; dokunsal duyuları harekete geçirir. Çocuklar iş birliği yapmayı, paylaşmayı ve problem çözmeyi öğrenir; el-göz koordinasyonu güçlenir.',
    bullets: ['İnce motor', 'Yaratıcı oyun', 'İş birliği'],
  },
  {
    color: 'rose',
    title: 'Montessori',
    tagline: 'Bireysel hıza saygı',
    body: 'Yaş gruplarına göre seçilmiş materyallerle bağımsızlık, özgüven ve sorumluluk gelişir. Küçük yaşlarda duyusal keşif ve günlük yaşam becerileri; büyük yaşlarda problem çözme, dil ve matematiksel düşünme.',
    bullets: ['Hazırlanmış ortam', 'Kendi seçtiği etkinlik', 'Yaş bazlı materyal'],
  },
  {
    color: 'grass',
    title: 'Tarım Etkinlikleri',
    tagline: 'Topraktan sofraya',
    body: 'Minik bahçemizde tohum ekme, sulama ve sebze-meyve yetiştirme. Sorumluluk bilinci, sabır ve sağlıklı beslenme farkındalığı gelişir. Doğaya karşı sevgi ve saygı, ellerle birlikte filizlenir.',
    bullets: ['Tohumdan hasada', 'Mevsimsel takip', 'Sağlıklı beslenme'],
  },
  {
    color: 'sky',
    title: 'Yüzme',
    tagline: 'Su ile dost olmak',
    body: 'Kardeş kurumumuz Eğitimci Dil Konuşma Merkezi ile iş birliği protokolü çerçevesinde yüzme havuzu kullanımı. Fiziksel gelişim, koordinasyon, denge ve özgüven kazanımı; su korkusunun aşılması.',
    bullets: ['Haftalık seans', 'Profesyonel eşlik', 'Güvenli ortam'],
  },
  {
    color: 'grape',
    title: 'Sevgi Dersi',
    tagline: 'Değerler eğitimi',
    body: 'Sevgi, saygı, sorumluluk, dürüstlük, yardımlaşma ve empati. Oyunlar, hikâyeler, drama ve günlük yaşam deneyimleriyle pekiştirilir. Yaparak-yaşayarak evrensel değerler özümsenir, milli değer bilinci gelişir.',
    bullets: ['Yaş bazlı program', 'Veli odaklı plan', 'Günlük pekiştirme'],
  },
  {
    color: 'coral',
    title: 'İngilizce',
    tagline: 'Doğal akışta dil',
    body: 'Şarkılar, oyunlar, hikâyeler ve görsel materyallerle çocukların İngilizceye doğal şekilde maruz kalması. Kelime dağarcığı genişlerken dile karşı olumlu tutum oluşur; ileri eğitim hayatı için sağlam bir temel atılır.',
    bullets: ['Şarkı & oyun', 'Hikâye saati', 'Günlük rutin'],
  },
];

function ProgramHero() {
  return (
    <section style={{ padding: '80px 48px 60px', background: 'var(--milk)', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 60, right: '6%', width: 100, height: 100, opacity: 0.5 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" fill="var(--rose)"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ marginBottom: 18, color: 'var(--teal-deep)' }}>02 · eğitim programı</div>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 1.0, maxWidth: 1100 }}>
          21. yüzyıl <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.05em' }}>becerileriyle</span><br/>
          büyüyen <span style={{ color: 'var(--teal-deep)' }}>çocuklar.</span>
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 700, fontWeight: 500 }}>
          MEB programı temel alınarak Montessori yaklaşımı, drama, STEAM, tarım, kum havuzu, yüzme ve İngilizce
          ile zenginleştirilen bir program. Her etkinlik bir gelişim alanını besler.
        </p>
      </div>
    </section>
  );
}

function ProgramGrid() {
  return (
    <section style={{ padding: '80px 48px 110px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="prog-cards-grid">
          {PROGRAMS.map((p, i) => (
            <article key={i} className="prog-card-row" style={{
              background: 'white', borderRadius: 24, padding: 36,
              border: `2px solid var(--${p.color}-soft)`,
            }}>
              <div className={`smile-circle ${p.color}`} style={{ width: 72, height: 72 }}>
                <ProgIcon name={p.title} />
              </div>
              <div>
                <div className="mono" style={{ color: `var(--${p.color})`, marginBottom: 6 }}>0{i+1}</div>
                <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
                <div className="handwritten" style={{ fontSize: 20, color: `var(--${p.color === 'sun' ? 'orange' : p.color})`, marginBottom: 14 }}>
                  {p.tagline}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 16px', fontWeight: 500 }}>{p.body}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.bullets.map((b, j) => (
                    <span key={j} style={{
                      background: `var(--${p.color}-soft)`,
                      color: 'var(--ink)',
                      padding: '6px 14px', borderRadius: 999,
                      fontSize: 12, fontWeight: 600,
                    }}>{b}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgIcon({ name }) {
  const map = {
    'Drama':            <path d="M8 28 Q16 8 24 28 M12 22 H20" stroke="white" strokeWidth="2.4" fill="none" strokeLinecap="round"/>,
    'STEAM & Kodlama':  <g stroke="white" strokeWidth="1.8" fill="white"><circle cx="16" cy="16" r="3"/><circle cx="6" cy="10" r="2"/><circle cx="26" cy="10" r="2"/><circle cx="6" cy="22" r="2"/><circle cx="26" cy="22" r="2"/><path d="M16 16 L6 10 M16 16 L26 10 M16 16 L6 22 M16 16 L26 22" fill="none"/></g>,
    'Kum Havuzu':       <g><path d="M4 24 Q16 18 28 24" stroke="var(--ink)" strokeWidth="2.4" fill="none" strokeLinecap="round"/><circle cx="10" cy="13" r="2" fill="var(--ink)"/><circle cx="22" cy="13" r="2" fill="var(--ink)"/><circle cx="16" cy="9" r="2" fill="var(--ink)"/></g>,
    'Montessori':       <g fill="white"><rect x="6" y="14" width="6" height="10" rx="1"/><rect x="14" y="10" width="6" height="14" rx="1"/><rect x="22" y="6" width="6" height="18" rx="1"/></g>,
    'Tarım Etkinlikleri': <g><path d="M16 28 V14" stroke="white" strokeWidth="2.4" strokeLinecap="round"/><path d="M16 14 Q9 8 8 14 Q14 14 16 14 Z" fill="white"/><path d="M16 14 Q23 8 24 14 Q18 14 16 14 Z" fill="white" opacity="0.7"/></g>,
    'Yüzme':            <g><path d="M3 22 Q8 18 13 22 T23 22 T29 22" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round"/><circle cx="11" cy="11" r="3" fill="white"/><path d="M14 14 L20 16 L24 14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></g>,
    'Sevgi Dersi':      <path d="M16 26 L7 17 Q4 14 7 11 Q10 8 13 11 L16 14 L19 11 Q22 8 25 11 Q28 14 25 17 Z" fill="white"/>,
    'İngilizce':        <g stroke="white" fill="white"><rect x="6" y="9" width="20" height="14" rx="2" fill="none" strokeWidth="2"/><path d="M11 14 H21 M11 18 H17" strokeWidth="1.8" strokeLinecap="round"/></g>,
  };
  return <svg width="36" height="36" viewBox="0 0 32 32">{map[name]}</svg>;
}

function MEBStrip() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--sand)' }}>
      <div className="prog-meb-grid">
        <div>
          <div className="section-label">Eğitim Yaklaşımımız</div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.1, marginBottom: 18 }}>
            MEB programı, <span className="handwritten" style={{ color: 'var(--teal-deep)', fontSize: '1.1em' }}>Montessori ile</span><br/> harmanlanır.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', margin: '0 0 16px', fontWeight: 500 }}>
            Milli Eğitim Bakanlığı'nın belirlediği <strong>Okul Öncesi Eğitim Programı</strong>'nın
            yanında, bilimsel pedagojinin temel taşı olan <strong>Montessori yaklaşımını</strong>
            yaş düzeylerine göre kullanıyoruz.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0, fontWeight: 500 }}>
            Çocuğun bireysel gelişim hızına saygı duyan; bağımsızlık, özgüven ve sorumluluk
            duygusunu besleyen, <strong>21. Yüzyıl Becerileri</strong>ne odaklı bir program.
          </p>
        </div>
        <Img color="teal" src="images/galeri/bahce_etkinlikk3.jpg" alt="Montessori sınıf atmosferi" label="[Montessori sınıfı]" style={{ aspectRatio: '4/3', borderRadius: 24 }} />
      </div>
    </section>
  );
}

function YearRhythm() {
  const seasons = [
    { color: 'sun',    m: 'Eylül',   p: 'Tanışma', d: 'Yeni arkadaşlar, yeni odalar. Güvenli bağ kurmak.' },
    { color: 'orange', m: 'Aralık',  p: 'Kış Atölyesi', d: 'İçeri çekilme zamanı. Sıcak çay, uzun hikâye.' },
    { color: 'grass',  m: 'Mart',    p: 'Tarım', d: 'Tohumlar fidana, fidanlar bahçeye. Bahar geliyor.' },
    { color: 'rose',   m: 'Haziran', p: 'Veda Şenliği', d: 'Ailelerle yıl sonu. Şarkılar, sergiler, sarılmalar.' },
  ];
  return (
    <section style={{ padding: '120px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="section-label">Yıl Ritmi</div>
        <h2 style={{ fontSize: 'clamp(40px, 4.4vw, 60px)', marginBottom: 50 }}>
          Bir <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.1em' }}>eğitim yılı.</span>
        </h2>
        <div className="prog-4-grid">
          {seasons.map((s, i) => (
            <div key={s.m} style={{
              background: `var(--${s.color}-soft)`, borderRadius: 20, padding: 28,
              transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
            }}>
              <div className="mono" style={{ color: `var(--${s.color === 'sun' ? 'orange' : s.color})`, marginBottom: 10 }}>0{i+1} · {s.m}</div>
              <h3 style={{ fontSize: 26, marginBottom: 10 }}>{s.p}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55, fontWeight: 500 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Program">
      <Nav active="Eğitim" />
      <ProgramHero />
      <MEBStrip />
      <ProgramGrid />
      <YearRhythm />
      <FooterEl />
      <WhatsAppFloat />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
