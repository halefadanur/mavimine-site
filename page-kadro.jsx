// Kadro — Mavi Mine ekibi (broşürdeki gerçek yapı)

const { useState } = React;

const TEACHERS = [
  {
    name: 'Hatice Adanur Şahin',
    role: 'Eğitimci · Kurucu Müdür',
    tag: 'Montessori uzmanı',
    color: 'teal',
    img: 'images/team/hatice.jpeg',
    alt: 'Hatice Adanur Şahin portresi',
    bio: [
      'Bir okul müdürü olarak, çocukların güvenli, mutlu ve destekleyici bir ortamda eğitim almasını öncelik olarak görürüm. Okul öncesi eğitim alanında 23 yıllık tecrübeye sahip, aynı zamanda ailede ikinci kuşak eğitimci olarak; mesleğimi birikim ve değerlerle sürdürürüm. Her çocuğun bireysel farklılıklarını gözeten, gelişimini çok yönlü destekleyen bir eğitim anlayışı benimserim.',
      'Montessori yaklaşımı, özel eğitim bilgisi ve çocukların gelişimini anlamaya yönelik analiz yöntemlerini bir araya getirerek, eğitim süreçlerini daha nitelikli ve etkili hale getirmeyi hedeflerim. Öğretmenlerimle iş birliği içinde, sevgi temelli ve yenilikçi bir eğitim ortamı oluşturmak için çalışırım.',
      'Velilerle güçlü iletişim kurarak, çocuklarımızın gelişim yolculuğunu birlikte takip etmeye ve her birinin potansiyelini en iyi şekilde ortaya çıkarmaya önem veririm.'
    ]
  },
  {
    name: 'Reyhan Karaağaç',
    role: 'Anaokulu Öğretmeni',
    tag: '2 yaş — Minik Afacanlar',
    color: 'rose',
    img: 'images/team/reyhan.jpeg',
    alt: 'Reyhan Karaağaç portresi',
    bio: [
      'Ben Reyhan. Bulunduğum ortama neşe katmayı, arkadaşlarımı güldürmeyi seven biriyim. Sevdiklerimle vakit geçirmek beni en çok mutlu eden şeylerden biri. Çoğu zaman evde, sakin ve huzurlu anlar bana iyi gelir. Doğayı ve dinginliği çok severim. Kalabalıklar bana göre değil; hayatımda az ama öz insanlar olsun isterim. Sevgiye ve sevginin iyileştirici gücüne ise tüm kalbimle inanırım.'
    ]
  },
  {
    name: 'Gülben Topçuoğlu',
    role: 'Anaokulu Öğretmeni',
    tag: '3-4 yaş — Meraklı Minikler',
    color: 'sun',
    img: 'images/team/gulben.jpeg',
    alt: 'Gülben Topçuoğlu portresi',
    bio: [
      'Ben Gülben 🌸 küçük şeylerden mutlu olabilen, hayatın keyifli yanlarını görmeyi seven biriyim. Gezmek, alışveriş yapmak ve resim yapmak bana iyi gelir. Arkadaşlarımla oturup içilen samimi bir kahve bile günümü güzelleştirmeye yeter.',
      'Kıpır kıpır ve duygusal biri olsam da, insan ilişkilerinde uyuma önem veririm. Çocukla çocuk, büyükle büyük olabilmek benim için hayatın güzel yanlarından biridir. Hayvanları severim ama ilginç bir şekilde onlara karşı küçük bir korkum da vardır. Kısacası, duygularıyla yaşayan, samimiyeti seven, hayatın küçük mutluluklarından keyif alan biriyim 😊'
    ]
  },
  {
    name: 'Şule Kaya',
    role: 'Anaokulu Öğretmeni',
    tag: '5-6 yaş — Gülen Yüzler',
    color: 'orange',
    img: 'images/team/sule.jpeg',
    alt: 'Şule Kaya portresi',
    bio: [
      'Ben Şule Kaya. Küçük şeylerden mutlu olmayı seven biriyim. At binmek bana hem özgürlük hem de huzur hissettiriyor, o yüzden en sevdiğim aktivitelerden biri. Aynı zamanda alçıyla bir şeyler üretmek, ortaya yeni şeyler çıkarmak bana çok keyif veriyor.',
      'Daha çok sakin anları severim; güzel bir müzik, kahve ya da gün batımı bana iyi gelir. Ailemle vakit geçirmek benim için çok kıymetli, o anlar bana ayrı bir mutluluk verir. Hayvanlara karşı ayrı bir ilgim var, onları görmek bile modumu yükseltir. Kapalı alanlar ise pek bana göre değil, daha çok açık ve ferah yerlerde kendimi rahat hissediyorum.',
      'Genel olarak hayatın küçük anlarının tadını çıkarmaya çalışan, samimi ve sade biriyim.'
    ]
  },
  {
    name: 'Zümra Adanur',
    role: 'Anaokulu Öğretmeni',
    tag: 'Akıl Oyunları & Kodlama',
    color: 'grape',
    img: 'images/team/zumra.jpeg',
    alt: 'Zümra Adanur portresi',
    bio: [
      'Ben Zümra Adanur. Müzik dinlemek ve resim yapmak hayatımın vazgeçilmez parçaları. Saçlarla uğraşmak ise benim için ayrı bir keyif; öğrencilerim de bunun farkında ve bana saçlarını yaptırmak için bazen çeşitli bahaneler uyduruyorlar 😊',
      'Kapalı ortamlardansa açık alanlarda vakit geçirmek bana daha iyi geliyor. Temiz hava, özgürlük hissi ve doğayla iç içe olmak beni mutlu ediyor.',
      'Ailemle vakit geçirmek ise her şeyden daha değerli. Onlarla geçirdiğim zaman bana huzur veriyor. Çay yerine kahveyi tercih ederim ama öyle acı kahveler değil; daha çok tatlı, yumuşak içimli kahveleri severim ☕',
      'Kısacası; enerjik, yaratıcı ve hayatın keyfini çıkarmayı seven biriyim.'
    ]
  }
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
          Üç nesil, <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.05em' }}>beş öğretmen,</span><br/>
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
  const [expanded, setExpanded] = useState({});
  return (
    <section style={{ padding: '60px 48px 100px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="section-label">Eğitim Kadromuz</div>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: 40 }}>
          Aynı çatı altında <span className="handwritten" style={{ color: 'var(--rose)', fontSize: '1.1em' }}>aynı dili</span> konuşanlar.
        </h2>
        <div className="kadro-team-grid">
          {TEACHERS.map((t, i) => {
            const isOpen = expanded[i];
            const toggle = () => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
            const hasBio = t.bio.length > 0;
            const hasMore = t.bio.length > 1;
            const visibleBio = hasMore && !isOpen ? t.bio.slice(0, 1) : t.bio;
            return (
              <div key={i}>
                <div style={{
                  aspectRatio: '3/4', marginBottom: 16, overflow: 'hidden',
                  borderRadius: 20, position: 'relative',
                  border: `4px solid var(--${t.color}-soft)`,
                }}>
                  <Img src={t.img} alt={t.alt} color={t.color}
                       label={`[${t.name}]`}
                       style={{ width: '100%', height: '100%' }} />
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    background: `var(--${t.color})`, color: 'white',
                    padding: '6px 12px', borderRadius: 999,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  }}>{t.tag}</div>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{t.name}</h3>
                <div style={{ fontSize: 14, color: 'var(--ink-soft)', fontWeight: 600 }}>{t.role}</div>
                {hasBio && (
                  <div style={{ marginTop: 12 }}>
                    {visibleBio.map((p, j) => (
                      <p key={j} style={{
                        fontSize: 14, lineHeight: 1.55,
                        color: 'var(--ink-soft)', fontWeight: 500,
                        margin: j > 0 ? '12px 0 0' : 0,
                      }}>{p}</p>
                    ))}
                    {hasMore && (
                      <button onClick={toggle}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--teal-deep)'}
                        style={{
                          background: 'none', border: 'none',
                          padding: '12px 0 0', cursor: 'pointer',
                          fontSize: 13, fontWeight: 600,
                          color: 'var(--teal-deep)',
                          fontFamily: 'inherit',
                          transition: 'color .2s',
                        }}>
                        {isOpen ? 'Daha az ↑' : 'Devamını oku ↓'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
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
      <WhatsAppFloat />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
