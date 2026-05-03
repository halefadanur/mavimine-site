// Mavi Mine — Başvuru Kavşağı (Önce tanışalım)
// 3 kart: Randevu (öne çıkan) → Ön Kayıt → Özel Seans

const PATHS = [
  {
    key: 'randevu',
    color: 'teal',
    emoji: '🤝',
    title: 'Randevu Al',
    handwritten: 'önce tanışalım',
    body: 'Bahçeyi, sınıfları, atölyeleri birlikte gezelim. Öğretmenlerimizle tanışın, sorularınızı sorun. Çocuğunuz için doğru yer mi, hep birlikte hissedelim.',
    bullets: [
      'Yaklaşık 30–45 dakika',
      'Çocuğunuzla birlikte gelebilirsiniz',
      'Hafta içi randevu ile',
    ],
    cta: 'Randevu formuna git',
    href: 'randevu.html',
  },
  {
    key: 'on-kayit',
    color: 'orange',
    emoji: '📝',
    title: 'Ön Kayıt',
    handwritten: 'karar verdiniz',
    body: 'Okulumuzu gördünüz, kararınızı verdiniz. Resmi başvuru sürecini üç kısa adımda birlikte tamamlayalım. Çocuğunuz için yeri ayıralım.',
    bullets: [
      '3 adımlı kısa form',
      'Çocuk + veli bilgileri',
      'Onay sonrası kontak',
    ],
    cta: 'Ön kayıt formuna git',
    href: 'on-kayit-formu.html',
  },
  {
    key: 'ozel-seans',
    color: 'rose',
    emoji: '💡',
    title: 'Özel Seans',
    handwritten: 'birebir destek',
    body: 'Çocuğunuzun dil, konuşma, dikkat ya da sosyal-duygusal alanlarda özel desteğe ihtiyacı olduğunu düşünüyorsanız, bir değerlendirme seansı planlayalım.',
    bullets: [
      'Uzman psikolog ya da terapist',
      'Bireysel değerlendirme',
      'Aileye yönlendirme',
    ],
    cta: 'Özel seans için yazın',
    href: 'ozel-seans.html',
  },
];

function CrossroadHero() {
  return (
    <section className="cr-hero">
      <svg className="blob" style={{ top: 60, left: '12%', width: 80, height: 80 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="20" fill="var(--sun)" opacity="0.45"/>
      </svg>
      <svg className="blob" style={{ top: 100, right: '14%', width: 70, height: 70 }} viewBox="0 0 60 60">
        <circle cx="22" cy="30" r="14" fill="var(--rose)" opacity="0.45"/>
        <circle cx="42" cy="22" r="10" fill="var(--teal)" opacity="0.4"/>
      </svg>
      <svg className="blob" style={{ bottom: 40, left: '18%', width: 60, height: 60 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="16" fill="var(--grape)" opacity="0.35"/>
      </svg>

      <div className="cr-hero-inner">
        <div className="section-label center">Başvuru</div>
        <h1>
          <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '0.55em', display: 'block', marginBottom: 8 }}>iyi ki yazdınız —</span>
          Önce <em>tanışalım</em>.
        </h1>
        <p className="cr-hero-lede">
          Aşağıdaki üç yoldan size en uygun olanı seçin.
          Hangisini seçerseniz seçin, bir sonraki adımı birlikte planlarız.
        </p>
      </div>
    </section>
  );
}

function PathCard({ path }) {
  return (
    <a href={path.href} className={`cr-card cr-${path.color}`}>
      <div className="cr-card-emoji">{path.emoji}</div>
      <div className="cr-card-handwritten handwritten">{path.handwritten}</div>
      <h3>{path.title}</h3>
      <p className="cr-card-body">{path.body}</p>
      <ul className="cr-card-bullets">
        {path.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="cr-card-cta">
        {path.cta}
        <span className="cr-arrow">→</span>
      </div>
    </a>
  );
}

function CrossroadCards() {
  return (
    <section className="cr-cards-section">
      <div className="cr-cards-inner">
        <div className="cr-cards-grid">
          {PATHS.map((p) => <PathCard key={p.key} path={p} />)}
        </div>
      </div>
    </section>
  );
}

function CrossroadHelp() {
  return (
    <section className="cr-help">
      <div className="cr-help-inner">
        <div className="cr-help-text">
          <div className="section-label">Hangisini seçeceğinize emin değil misiniz?</div>
          <h2>Bizi <em>arayın</em>, beraber bakalım.</h2>
          <p>
            Çocuğunuza ve size en uygun başlangıç hangisi, bir telefon konuşmasında
            netleşir. Soru sormak, birinci adımdır.
          </p>
        </div>
        <div className="cr-help-card">
          <div className="cr-help-row">
            <div className="smile-circle teal" style={{ width: 48, height: 48, fontSize: 20 }}>☎</div>
            <div>
              <div className="cr-help-label">Telefon</div>
              <a href="tel:+905053234135" className="cr-help-value">0505 323 41 35</a>
            </div>
          </div>
          <div className="cr-help-row">
            <div className="smile-circle orange" style={{ width: 48, height: 48, fontSize: 20 }}>✉</div>
            <div>
              <div className="cr-help-label">E-posta</div>
              <a href="mailto:merhaba@mavimine.com" className="cr-help-value">merhaba@mavimine.com</a>
            </div>
          </div>
          <div className="cr-help-row">
            <div className="smile-circle sun" style={{ width: 48, height: 48, fontSize: 20 }}>⏱</div>
            <div>
              <div className="cr-help-label">Görüşme saatleri</div>
              <div className="cr-help-value">Pzt–Cuma · 07.30–18.30</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Başvuru Kavşağı">
      <Nav active="" />
      <CrossroadHero />
      <CrossroadCards />
      <CrossroadHelp />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
