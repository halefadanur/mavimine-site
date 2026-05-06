// Mavi Mine — Sınıflarımız (alternatif hizalı 3 sınıf + rehber + kapanış)

const CLASSES = [
  {
    key: 'minik-afacanlar',
    src: 'images/galeri/bahce_etkinlikk18.jpg',
    alt: 'Minik Afacanlar bahçede oyun',
    color: 'rose',
    align: 'left',
    name: 'Minik Afacanlar',
    age: '2 yaş',
    range: '24 — 36 ay',
    motto: 'Sevgiyle alışmak',
    handwritten: 'ilk yuvası',
    intro: 'Anneden ayrılığın hassas yaşı. Bu sınıfta acelemiz yok — her çocuğun kendi ritmiyle güvenli bir yere geldiğini hissetmesi en önemli iş. Sevgi, sabır ve tutarlılık... Burada büyüklerin sesi alçaktır, kucaklar her zaman açıktır.',
    staff: {
      label: 'Sınıf kadrosu',
      lines: [
        'Bir sınıf öğretmeni',
        'Bir yardımcı öğretmen',
      ],
      note: 'İki yetişkin her zaman sınıfta — kimse beklemede kalmaz.',
    },
    schedule: [
      'Sıcak karşılama ve sarılma',
      'Birlikte güne başlama şarkısı',
      'Sabah kahvaltısı (kendi başına yemeye alıştırma)',
      'Duyusal oyun ve serbest keşif',
      'Bahçe vakti (kısa)',
      'Öğle yemeği',
      'Uzun öğle uykusu',
      'Sakin uyanma + ikindi atıştırması',
      'Şarkı, kitap, kucak vakti',
      'Veliyi bekleme oyunu',
    ],
    goals: [
      'Anneden / babadan kısa ayrılığa güvenle dayanma',
      'Tuvalet alışkanlığının başlaması',
      'Kendi başına yemeye, su içmeye geçiş',
      'Basit talimatları anlama, kelime dağarcığı',
      'Akranıyla yan yana oynama becerisi',
    ],
  },
  {
    key: 'merakli-minikler',
    src: 'images/galeri/bahce_etkinlikk22.jpg',
    alt: 'Meraklı Minikler sınıfı',
    color: 'sun',
    align: 'right',
    name: 'Meraklı Minikler',
    age: '3 — 4 yaş',
    range: '36 — 60 ay',
    motto: 'Birlikte oynamayı keşfetmek',
    handwritten: 'sorular yağmuru',
    intro: '"Niçin?" sorusunun yaşı. Bu sınıfta her soruya değer veririz, çünkü merak çocuğun en büyük öğretmenidir. "Yan yana oyun"dan "birlikte oyun"a geçiş başlar — paylaşmak, sıra beklemek, arkadaşının üzüldüğünü fark etmek burada filizlenir.',
    staff: {
      label: 'Sınıf kadrosu',
      lines: [
        'Bir sınıf öğretmeni',
        'Bir yardımcı öğretmen',
      ],
      note: 'Yardımcı öğretmen çocuk başına özen verme oranımızı korur.',
    },
    schedule: [
      'Karşılama ve günün planı',
      'Sabah halkası — gün, hava, sayım',
      'Kahvaltı (sofra adabı)',
      'Atölye saati — sanat / drama / fen',
      'Bahçe ve hareket oyunları',
      'Öğle yemeği',
      'Öğle uykusu / dinlenme',
      'İkindi atıştırması',
      'İngilizce, müzik, oyun çemberi',
      'Günü değerlendirme + veda',
    ],
    goals: [
      'Akranıyla iş birliği yaparak oyun kurma',
      'Duygularını sözle ifade etme',
      'Renk, şekil, sayı kavramlarının pekişmesi',
      'Makas, fırça, kalem gibi araçlarda incelik',
      'Basit kuralları anlama ve uygulama',
    ],
  },
  {
    key: 'gulen-yuzler',
    src: 'images/galeri/satranc.jpg',
    alt: 'Gülen Yüzler sınıfı',
    color: 'teal',
    align: 'left',
    name: 'Gülen Yüzler',
    age: '5 — 6 yaş',
    range: '60 — 72 ay',
    motto: 'İlkokula gülerek hazırlanmak',
    handwritten: 'okul öncesi son yıl',
    intro: 'Çocuğun "büyük çocuk" olduğunu hissettiği yıl. İlkokula geçişi telaşa çevirmeden, oyunun içinden hazırlanmak ana hedef. Okuma-yazmaya ve sayı kavramına farkındalık başlar — ama hep çocuğun ilgisi takip edilerek, baskı ile değil.',
    staff: {
      label: 'Sınıf kadrosu',
      lines: [
        'Bir sınıf öğretmeni',
        'Branş öğretmenleri (İngilizce, müzik, beden eğitimi)',
      ],
      note: 'Bu yaşta çocuk farklı uzmanlarla çalışmaya hazır.',
    },
    schedule: [
      'Karşılama ve sabah halkası',
      'Türkçe dil etkinlikleri / okumaya hazırlık',
      'Kahvaltı',
      'Matematik sezgisi atölyesi',
      'STEAM / kodlama / bilim atölyesi',
      'Bahçe ve takım oyunları',
      'Öğle yemeği',
      'Sessiz okuma / dinlenme',
      'İngilizce, beden, müzik (gün rotasyonlu)',
      'Günü değerlendirme + veda',
    ],
    goals: [
      'Sesleri tanıma, kalem tutma, yazıya hazırlık',
      'Sayı kavramı, basit toplama-çıkarma sezgisi',
      'Sırasını bekleme, dikkat süresinin uzaması',
      'Kendi başına problem çözme cesareti',
      'İlkokula sosyal-duygusal hazır oluş',
    ],
  },
];

function ClassesHero() {
  return (
    <section className="cls-hero">
      <svg className="blob" style={{ top: 60, left: '12%', width: 80, height: 80 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="20" fill="var(--rose)" opacity="0.4"/>
      </svg>
      <svg className="blob" style={{ top: 100, right: '14%', width: 70, height: 70 }} viewBox="0 0 60 60">
        <circle cx="22" cy="30" r="14" fill="var(--sun)" opacity="0.5"/>
        <circle cx="42" cy="22" r="10" fill="var(--teal)" opacity="0.4"/>
      </svg>
      <svg className="blob" style={{ bottom: 40, left: '18%', width: 60, height: 60 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="16" fill="var(--grape)" opacity="0.35"/>
      </svg>

      <div className="cls-hero-inner">
        <div className="section-label center">Sınıflarımız</div>
        <h1>
          <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '0.55em', display: 'block', marginBottom: 8 }}>üç yaş, üç yuva —</span>
          Her çocuğun <em>kendi sınıfı.</em>
        </h1>
        <p className="cls-hero-lede">
          Mavi Mine'de üç yaş grubu, üç ayrı sınıf. Her sınıf,
          o yaşın ihtiyaçlarına göre tasarlandı — eşyası,
          ritmi, öğretmen-çocuk dengesi farklı.
        </p>
      </div>
    </section>
  );
}

function ClassRow({ cls, index }) {
  const isLeft = cls.align === 'left';
  return (
    <article className={`cls-row cls-${cls.color} ${isLeft ? 'cls-left' : 'cls-right'}`}>
      <div className="cls-visual">
        <div className="cls-photo">
          <Img color={cls.color} src={cls.src} alt={cls.alt}
               label={`[${cls.name.toLowerCase()} sınıfı]`}
               style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="cls-handwritten handwritten">{cls.handwritten}</div>
        <div className="cls-age-badge">
          <div className="cls-age-num">{cls.age}</div>
          <div className="cls-age-range">{cls.range}</div>
        </div>
      </div>

      <div className="cls-content">
        <div className="cls-number">{String(index + 1).padStart(2, '0')}</div>
        <h2>{cls.name}</h2>
        <div className="cls-motto">{cls.motto}</div>
        <p className="cls-intro">{cls.intro}</p>

        <div className="cls-blocks">
          <div className="cls-block">
            <div className="cls-block-head">
              <div className={`smile-circle ${cls.color}`} style={{ width: 36, height: 36, fontSize: 16 }}>
                <PeopleIcon />
              </div>
              <h3>{cls.staff.label}</h3>
            </div>
            <ul className="cls-list">
              {cls.staff.lines.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
            <p className="cls-block-note">{cls.staff.note}</p>
          </div>

          <div className="cls-block">
            <div className="cls-block-head">
              <div className={`smile-circle ${cls.color}`} style={{ width: 36, height: 36, fontSize: 16 }}>
                <ClockIcon />
              </div>
              <h3>Bir gün böyle akar</h3>
            </div>
            <ul className="cls-schedule">
              {cls.schedule.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <div className="cls-block">
            <div className="cls-block-head">
              <div className={`smile-circle ${cls.color}`} style={{ width: 36, height: 36, fontSize: 16 }}>
                <SeedIcon />
              </div>
              <h3>Bu yıl odaklandığımız gelişim</h3>
            </div>
            <ul className="cls-list">
              {cls.goals.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" fill="currentColor"/>
      <circle cx="17" cy="9" r="2.4" fill="currentColor" opacity="0.7"/>
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M14 19c0-2.4 1.6-4.5 3.6-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function SeedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 11C9 9 6 8 5 11c0 2 3 3 7 0Z" fill="currentColor"/>
      <path d="M12 11C15 9 18 8 19 11c0 2-3 3-7 0Z" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}

function ClassesSection() {
  return (
    <section className="cls-section">
      <div className="cls-section-inner">
        {CLASSES.map((cls, i) => <ClassRow key={cls.key} cls={cls} index={i} />)}
      </div>
    </section>
  );
}

function GuideSection() {
  return (
    <section className="cls-guide">
      <div className="cls-guide-inner">
        <div className="cls-guide-head">
          <div className="section-label center">Karar yardımcısı</div>
          <h2>Çocuğunuza <em>hangi sınıf</em> uygun?</h2>
          <p className="cls-guide-lede">
            Yaşı bir referans, ama tek başına yetmez. Her çocuğun
            kendi olgunluğu, kardeş düzeni, daha önce kreşe gidip gitmediği
            farklı. Aşağıdaki ipuçları yön verir, son söz tanışma günü konuşulur.
          </p>
        </div>

        <div className="cls-guide-grid">
          <div className="cls-guide-card cls-rose">
            <div className="cls-guide-age handwritten">2 yaşında ise</div>
            <h3>Minik Afacanlar</h3>
            <p>İlk kez evden ayrılıyorsa, yumuşak bir başlangıçla. Sevgi ve sabır esas; günlük ritim çocuğun ihtiyacına göre esnek tutulur.</p>
          </div>
          <div className="cls-guide-card cls-sun">
            <div className="cls-guide-age handwritten">3 — 4 yaşında ise</div>
            <h3>Meraklı Minikler</h3>
            <p>Akranıyla oynamaya hazırsa, "neden?" sorularıyla geliyorsa. Atölye ve grup çalışması bu yaşta en verimli halini alır.</p>
          </div>
          <div className="cls-guide-card cls-teal">
            <div className="cls-guide-age handwritten">5 — 6 yaşında ise</div>
            <h3>Gülen Yüzler</h3>
            <p>Önümüzdeki yıl ilkokula geçecekse, dikkat süresi uzamaya başladıysa. Telaşsız ama hazırlıklı bir geçiş için.</p>
          </div>
        </div>

        <div className="cls-guide-cta">
          <p>Yine de emin değil misiniz? Tanışma günümüzde birlikte konuşalım.</p>
          <div className="cls-guide-actions">
            <a href="basvuru.html" className="btn orange">Randevu al →</a>
            <a href="iletisim.html" className="btn ghost">Bize ulaşın</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingNote() {
  return (
    <section className="cls-closing">
      <div className="cls-closing-inner">
        <svg style={{ position: 'absolute', top: 30, left: '12%', width: 50, height: 50, opacity: 0.6 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--sun)" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 40, right: '14%', width: 44, height: 44, opacity: 0.6 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--rose)" />
        </svg>

        <blockquote>
          Sınıflarımız üç,<br/>
          ama her çocuğun yeri <em>biriciktir.</em>
        </blockquote>
        <p>
          Çocuğunuzu sınıfa göre değil, sınıfı çocuğunuza göre düşünürüz.
          Mavi Mine'de "norm" diye bir şey yoktur — her çocuk
          kendi hızında, kendi haliyle büyür.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Sınıflarımız">
      <Nav active="Eğitim" />
      <ClassesHero />
      <ClassesSection />
      <GuideSection />
      <ClosingNote />
      <FooterEl />
      <WhatsAppFloat />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
