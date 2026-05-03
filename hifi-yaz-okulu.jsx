// Mavi Mine — Yaz Okulu 2026

const THREE_QUESTIONS = [
  {
    color: 'grass',
    icon: '🏠',
    q: 'Çocuğunuz nerede vakit geçirecek?',
    bad: 'Apartman bodrumu, asfalt avlu, plastik çim, kapalı koridor.',
    good: 'Anaokulu olarak inşa edilmiş bina. 900 m² gerçek bahçe — toprak, çim, ağaç. Kendi tarım alanımız. Kendi mutfağımız.',
    closer: 'Bodrum katta yaz okulu olmaz.',
  },
  {
    color: 'orange',
    icon: '👥',
    q: 'Çocuğunuzla kim ilgilenecek?',
    bad: 'Yaz aylığı için toplanmış stajyer ekipler, "etkinlik abileri", her hafta değişen yüzler.',
    good: 'Üç nesil eğitimci ailesinin yıl boyu çalışan kadrosu. Alanında mezun öğretmenler. 2 psikolog ve 2 dil-konuşma terapisti danışman olarak.',
    closer: 'Tanıdık eller, tanıdık bahçe.',
  },
  {
    color: 'sky',
    icon: '💦',
    q: 'Etkinlikler yaşam mı, gösteri mi?',
    bad: 'Ayda bir götürülen havuz, yılda bir biniciliğe gidiş, uzaktan izlenen bir doğa programı.',
    good: 'Kendi havuzumuz, kendi bahçemiz, kendi tarım alanımız. Çocuk her gün toprağa basar, her hafta atla tanışır, her gün suyla buluşur.',
    closer: 'Etkinlik kovalanmaz, etkinlik yaşanır.',
  },
];

const SPECIALS = [
  {
    color: 'sky',
    title: 'Her hafta havuza',
    body: 'Mavi Mine yaz okulunda her hafta kardeş kurumumuzun havuzunda yüzme etkinliği var. Çocuklar suyla tanışır, güvenle yüzmeyi keşfeder, yaz sıcağında en güzel anlarını yaşar.',
    photoLabel: '[havuz · yüzme]',
  },
  {
    color: 'grass',
    title: 'Bahçede kamp',
    body: 'Çadır kuruyoruz, hikâye anlatıyoruz, sabaha karşı kuş seslerini dinliyoruz... ama hepsi gündüz! Çocuklar evlerinin sıcaklığını bırakmadan, kamp deneyiminin tüm heyecanını yaşıyor.',
    photoLabel: '[bahçede kamp · çadır]',
  },
  {
    color: 'orange',
    title: 'Yaratıcı atölyeler',
    body: 'Doğa boyaması, sanat etkinlikleri, küçük el işleri... Yaz boyunca her hafta farklı bir atölye ile çocukların hayal gücü ve yaratıcılığı besleniyor.',
    photoLabel: '[atölye · sanat]',
  },
  {
    color: 'sun',
    title: 'Bahar-Yaz Festivali',
    body: 'Yaz okulunun finalinde tüm aileleri ağırladığımız bahar-yaz festivali var. Çocukların hazırladıkları gösteriler, sanat eserleri, oyunlarla dolu sıcak bir buluşma.',
    photoLabel: '[festival · aileler]',
  },
  {
    color: 'rose',
    title: 'Geziler',
    body: 'Müze, akvaryum, akua park... Yaz boyunca düzenlediğimiz minik gezilerle çocuklar yeni yerler keşfeder, sınıfın dışında öğrenmenin keyfini yaşar. Her gezi öncesi hazırlık, sonrası paylaşım — sadece bir tur değil, bir öğrenme deneyimi.',
    photoLabel: '[gezi · keşif]',
  },
];

const SIDE_ACTIVITIES = [
  { color: 'rose',  emoji: '🎨', title: 'Açık hava sanatı',  note: 'Doğal malzemelerle, ağaç altında' },
  { color: 'grape', emoji: '🏕', title: 'Piknik & çadır',     note: 'Haftada bir gün dışarıda' },
  { color: 'teal',  emoji: '🔬', title: 'Doğa bilimi',         note: 'Böcek, yaprak, taş — keşif' },
  { color: 'coral', emoji: '🎵', title: 'Müzik ve ritim',      note: 'Doğal seslerle, perküsyonla' },
];

const DAY_FLOW = [
  { time: '07:30 – 09:00', what: 'Sıcak karşılama, oyun, kitap' },
  { time: '09:00 – 09:30', what: 'Kahvaltı (kendi bahçemizden taze)' },
  { time: '09:30 – 11:30', what: 'Günün ana etkinliği — bahçe, su, gezi, mutfak' },
  { time: '11:30 – 12:30', what: 'Açık hava oyunu / sanat / müzik' },
  { time: '12:30 – 13:30', what: 'Öğle yemeği' },
  { time: '13:30 – 15:00', what: 'Sessiz vakit, dinlenme, kitap' },
  { time: '15:00 – 16:30', what: 'İkinci atölye / serbest oyun' },
  { time: '16:30 – 17:00', what: 'İkindi atıştırması' },
  { time: '17:00 – 18:30', what: 'Bahçede serbest oyun, veliyi bekleme' },
];

function YazHero() {
  return (
    <section className="yaz-hero">
      <svg className="blob" style={{ top: 60, left: '8%', width: 90, height: 90 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="22" fill="var(--sun)" opacity="0.5"/>
      </svg>
      <svg className="blob" style={{ top: 120, right: '10%', width: 70, height: 70 }} viewBox="0 0 60 60">
        <circle cx="22" cy="30" r="14" fill="var(--grass)" opacity="0.45"/>
        <circle cx="42" cy="22" r="10" fill="var(--sky)" opacity="0.45"/>
      </svg>
      <svg className="blob" style={{ bottom: 60, left: '14%', width: 60, height: 60 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="18" fill="var(--rose)" opacity="0.4"/>
      </svg>

      <div className="yaz-hero-inner">
        <div className="section-label center">Yaz Okulu · 2026</div>
        <h1>
          <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '0.5em', display: 'block', marginBottom: 10 }}>bu yaz —</span>
          Çocuklar <em>çıplak ayakla</em><br/>koşsun.
        </h1>
        <p className="yaz-hero-sub">
          <strong>Üç nesil eğitimci ailesinin</strong> ellerinde,
          <strong> 900 m² gerçek bahçede</strong>.
          Apartman bodrumunda değil, plastik çimde değil — toprakta.
        </p>

        <div className="yaz-hero-meta">
          <div className="yaz-meta-pill"><span className="yaz-meta-key">Süre</span><span className="yaz-meta-val">Yarım gün / tam gün</span></div>
          <div className="yaz-meta-pill"><span className="yaz-meta-key">Açık</span><span className="yaz-meta-val">Herkese açık</span></div>
        </div>
      </div>
    </section>
  );
}

function ThreeQuestions() {
  return (
    <section className="yaz-three">
      <div className="yaz-three-inner">
        <div className="yaz-three-head">
          <div className="section-label center">Karar vermeden önce</div>
          <h2>Yaz okulu seçerken sormanız gereken <em>üç soru.</em></h2>
          <p className="yaz-three-lede">
            Çocuğunuzun yazını bir yerlere emanet ediyorsunuz. Cevaplar
            <strong> sayfanın güzel olmasından</strong> çok daha önemli.
          </p>
        </div>

        <div className="yaz-three-list">
          {THREE_QUESTIONS.map((it, i) => (
            <article key={i} className={`yaz-three-card yaz-${it.color}`}>
              <div className="yaz-three-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="yaz-three-icon">{it.icon}</div>
              <h3>{it.q}</h3>

              <div className="yaz-three-body">
                <div className="yaz-three-bad">
                  <div className="yaz-three-label yaz-three-label-bad">Birçok yerde:</div>
                  <p>{it.bad}</p>
                </div>
                <div className="yaz-three-good">
                  <div className="yaz-three-label yaz-three-label-good">Mavi Mine'de:</div>
                  <p>{it.good}</p>
                </div>
              </div>

              <div className="yaz-three-closer handwritten">
                {it.closer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function YazNarrative() {
  return (
    <section className="yaz-narrative">
      <div className="yaz-narrative-inner">
        <div className="yaz-narrative-text">
          <div className="section-label">Bir yaz günü Mavi Mine'de</div>
          <h2>Yaz, çocuğun <em>doğayla</em> yeniden tanıştığı zamandır.</h2>
          <p>
            Sabah erkenden bahçeye iniyoruz. Domateslere su veriyoruz —
            dün çiçek açan kabağa bakıyoruz, büyümüş mü diye. Birinin elinde
            bir solucan var, herkes bakıyor.
          </p>
          <p>
            Öğle güneşi vurunca havuz kuruluyor. Kahkahalar, su sesleri,
            ıslak saçlarla yenen karpuz. Sonra ağaç altında bir hikâye, sessizce.
            Uyuyan da var, uyumayan da.
          </p>
          <p>
            İkindi serinliğinde mutfaktan ekmek kokusu geliyor. Birileri sanat
            atölyesinde toplanmış, doğal taşlardan kolye yapıyor.
            Çadır kuruluyor — yarın piknik var çünkü.
          </p>
          <p className="yaz-narrative-coda">
            <strong>Ve daha pek çok şey</strong> — drama, müzik, hikâye saati,
            doğa keşifleri, hayvan ziyaretleri... Liste uzun, ama önemli olan
            liste değil. Önemli olan <em>çocuğun ne yaşadığı.</em>
          </p>
        </div>
        <div className="yaz-narrative-visual">
          <div className="ph grass" style={{ aspectRatio: '4/5', borderRadius: 28 }}>[bahçede kahkaha]</div>
          <div className="yaz-narrative-stamp handwritten">unutulmayacak bir yaz</div>
        </div>
      </div>
    </section>
  );
}

function YazSpecials() {
  return (
    <section className="yaz-specials">
      <div className="yaz-specials-inner">
        <div className="yaz-specials-head">
          <div className="section-label center">Bu yazın imzası</div>
          <h2>Yazın <em>beş rengi.</em></h2>
          <p className="yaz-specials-lede">
            Yaz okulunda her gün özel, ama her hafta beş özel an: havuz, kamp, atölye, festival ve gezi.
          </p>
        </div>
        <div className="yaz-specials-list">
          {SPECIALS.map((s, i) => (
            <article key={i} className={`yaz-special yaz-${s.color} ${i % 2 === 0 ? 'yaz-special-left' : 'yaz-special-right'}`}>
              <div className={`yaz-special-photo ph ${s.color}`}>{s.photoLabel}</div>
              <div className="yaz-special-text">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function YazSide() {
  return (
    <section className="yaz-side">
      <div className="yaz-side-inner">
        <div className="yaz-side-head">
          <div className="section-label center">Günün içinde dağılmış</div>
          <h2>Bunlar da var — <em>arada arada.</em></h2>
          <p className="yaz-side-lede">
            Sanat, müzik, doğa bilimi ve daha pek çok şey — programa zorla
            sıkıştırılmış değil, günün doğal akışına serpilmiş.
          </p>
        </div>
        <div className="yaz-side-grid">
          {SIDE_ACTIVITIES.map((a, i) => (
            <div key={i} className={`yaz-side-card yaz-${a.color}`}>
              <div className="yaz-side-emoji">{a.emoji}</div>
              <h4>{a.title}</h4>
              <p>{a.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function YazDayFlow() {
  return (
    <section className="yaz-day">
      <div className="yaz-day-inner">
        <div className="yaz-day-text">
          <div className="section-label">Bir günün şekli</div>
          <h2>Sabah 7:30'dan akşam 6:30'a — <em>çocuğun ritmiyle.</em></h2>
          <p>
            Tam gün ya da yarım gün — siz seçersiniz. Yarım gün öğle 12:30'a
            kadar, tam gün okul ritminde. Saatler katı değil, çocuğun
            uykusuna ve hevesine göre nefes alır.
          </p>
          <p className="yaz-day-note">
            Yarım gün seçen aileler için 12:30'da öğle yemeği sonrası teslim alma.
            Tam gün seçenler okul yemeği + öğle uykusu + ikindi etkinliği dahil.
          </p>
        </div>
        <div className="yaz-day-table">
          {DAY_FLOW.map((row, i) => (
            <div key={i} className="yaz-day-row">
              <div className="yaz-day-time">{row.time}</div>
              <div className="yaz-day-what">{row.what}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function YazCTA() {
  return (
    <section className="yaz-cta">
      <div className="yaz-cta-inner">
        <svg style={{ position: 'absolute', top: 30, left: '12%', width: 50, height: 50, opacity: 0.5 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--sun)" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 40, right: '14%', width: 44, height: 44, opacity: 0.5 }} viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="20" fill="var(--rose)" />
        </svg>

        <div className="section-label center" style={{ color: 'var(--sun)' }}>Yer ayırtın</div>
        <h2>Çocuğunuzun bu yazı <em>boşa geçmesin.</em></h2>
        <p>
          Tarihler, gruplar, kayıt detayları kişiye göre planlanır.
          Yarım gün mü tam gün mü, hangi haftalar — bir telefon yeter,
          birlikte planlarız.
        </p>
        <div className="yaz-cta-actions">
          <a href="basvuru.html" className="btn orange">Yaz okulu için yazın →</a>
          <a href="tel:+905053234135" className="btn ghost">0505 323 41 35</a>
        </div>
        <div className="yaz-cta-note">
          <span className="handwritten" style={{ fontSize: 22 }}>Mavi Mine'li değil misiniz?</span><br/>
          Sorun değil — yaz okulu, ailelerin bizi tanıması için iyi bir başlangıç.
          Belki yaz biter, çocuğunuz <em>kalmak ister.</em>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Yaz Okulu">
      <Nav active="" />
      <YazHero />
      <ThreeQuestions />
      <YazNarrative />
      <YazSpecials />
      <YazSide />
      <YazDayFlow />
      <YazCTA />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
