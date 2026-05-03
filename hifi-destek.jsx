// Mavi Mine — Çocuğa Özel Destek (8 alan + 5 adımlı süreç)

const SUPPORT_AREAS = [
  {
    key: 'oyun', color: 'sun', title: 'Oyun Grubu',
    teaser: 'Anaokulu yaşamına yumuşak bir geçiş için temel becerileri oyunla destekliyoruz.',
    lead: 'Çocuğunuzun anaokulu yaşamına yumuşak bir geçiş yapması için temel sosyal ve gelişimsel becerileri oyunla destekliyoruz:',
    items: ['Sosyalleşmesini desteklemek', 'Ayrılma sürecine alıştırmak', 'Dil gelişimini desteklemek', 'Duygusal gelişimini desteklemek', 'Kurallı ortamla tanıştırmak', 'Motor becerilerini geliştirmek', 'Özgüven kazandırmak', 'Yaşına göre sorumluluk kazandırmak'],
  },
  {
    key: 'dil', color: 'rose', title: 'Dil ve Konuşma Desteği',
    teaser: 'Yaşa uygun dil becerilerini eğlenceli etkinliklerle güçlendiriyoruz.',
    lead: 'Çocuğunuzun yaşına uygun dil becerilerini eğlenceli etkinliklerle destekliyoruz:',
    items: ['Kelime dağarcığını zenginleştirmek', 'Sesleri doğru çıkarmasını sağlamak (artikülasyon)', 'Cümle kurma becerisini geliştirmek', 'Anlatma ve hikâye oluşturma becerisini desteklemek', 'Yönergeleri anlama ve uygulama becerisini güçlendirmek', 'Kendini ifade etme cesareti kazandırmak', 'Akranlarıyla sözel iletişim kurmasını teşvik etmek', 'Dinleme ve sırayla konuşma alışkanlığı kazandırmak'],
  },
  {
    key: 'dikkat', color: 'sky', title: 'Dikkat ve Kavram Gelişimi',
    teaser: 'Bilişsel temelleri oyunlarla, görsel ve işitsel materyallerle pekiştiriyoruz.',
    lead: 'Çocuğunuzun bilişsel temellerini oyunlarla, görsel ve işitsel materyallerle pekiştiriyoruz:',
    items: ['Dikkat süresini uzatmak', 'Odaklanma becerisini geliştirmek', 'Renk, şekil, sayı ve büyüklük kavramlarını kazandırmak', 'Zıt kavramları (büyük-küçük, az-çok) öğretmek', 'Sıralama ve sınıflandırma becerisini geliştirmek', 'Hafıza ve hatırlama gücünü desteklemek', 'Problem çözme becerisini kazandırmak', 'Okul öncesi akademik becerilere zemin hazırlamak'],
  },
  {
    key: 'davranis', color: 'orange', title: 'Davranış Desteği',
    teaser: 'Sosyal-duygusal düzenleme becerilerini olumlu pekiştireçlerle yapılandırıyoruz.',
    lead: 'Çocuğunuzun sosyal-duygusal düzenleme becerilerini olumlu pekiştireçlerle yapılandırıyoruz:',
    items: ['Sınır ve kural kavramını içselleştirmesini sağlamak', 'Olumlu davranışları pekiştirmek', 'Öfke ve hayal kırıklığıyla baş etme becerisi kazandırmak', '"Hayır"ı kabul edebilmesini desteklemek', 'Sıra bekleme ve sabretme becerisini geliştirmek', 'Paylaşma alışkanlığı kazandırmak', 'Akranlarıyla uyumlu ilişki kurmasını sağlamak', 'Kendi kendine sakinleşme stratejileri öğretmek'],
  },
  {
    key: 'terapi', color: 'grape', title: 'Oyun Terapisi',
    teaser: 'Çocuğun en iyi konuştuğu dil oyundur; biz de bu dilin içinden destek veriyoruz.',
    lead: 'Çocuğun dilini en iyi konuştuğu yer oyundur; biz de bu dilin içinden destek veriyoruz:',
    items: ['Duygularını oyun yoluyla ifade etmesini sağlamak', 'İçsel kaygı ve gerginlikleri sağaltmak', 'Hayal gücünü ve yaratıcılığını desteklemek', 'Sembolik düşünme becerisini geliştirmek', 'Özgüven ve kendini değerli hissetme duygusu kazandırmak', 'Akran ilişkilerinde işbirliği becerisi kazandırmak', 'Yaşadığı zorluklara karşı başa çıkma becerileri geliştirmek', 'Güvenli bir ortamda kendini özgürce ifade etmesine alan açmak'],
  },
  {
    key: 'psik', color: 'teal', title: 'Psikolojik Danışmanlık',
    teaser: 'Çocuğunuzun duygusal dünyasını anlamak için bireysel destek sunuyoruz.',
    lead: 'Çocuğunuzun duygusal dünyasını anlamak ve gelişim sürecinde yanında olmak için bireysel destek sunuyoruz:',
    items: ['Duygularını tanıma ve isimlendirme becerisi kazandırmak', 'Kaygı, korku ve içe kapanıklıkla baş etme stratejileri geliştirmek', 'Kardeş kıskançlığı, ayrılık kaygısı gibi süreçlerde destek olmak', 'Tuvalet eğitimi, uyku, yeme gibi gelişimsel konularda rehberlik etmek', 'Aile içi değişimlere uyum sürecinde eşlik etmek', 'Özgüvenini ve kendini değerli hissetme duygusunu güçlendirmek', 'Sosyal ilişkilerde yaşadığı zorluklara çözüm üretmek', 'Veliye çocuğunu daha iyi anlaması için danışmanlık vermek', 'Öğretmen-veli-uzman işbirliğiyle bütüncül destek sağlamak'],
  },
  {
    key: 'aile', color: 'grass', title: 'Aile Danışmanlığı',
    teaser: 'Çocuğunuzla kurduğunuz ilişkinin niteliği, gelişiminin en güçlü zeminidir.',
    lead: 'Çocuğunuzla kurduğunuz ilişkinin niteliği, onun gelişiminin en güçlü zeminidir. Bu süreçte ailenin yanında oluyoruz:',
    items: ['Ebeveyn tutumlarını birlikte değerlendirmek', 'Anne-baba arasında tutarlı bir disiplin dili oluşturmak', 'Sınır koyma ve "hayır" diyebilme becerisi kazandırmak', 'Ekran süresi, uyku, yeme gibi günlük rutinlerde rehberlik etmek', 'Kardeş ilişkilerini sağlıklı yönetmek için stratejiler geliştirmek', 'Çocuğun gelişim dönemine özgü davranışlarını anlamlandırmak', 'Aile içi iletişimi ve duygusal bağı güçlendirmek', 'Boşanma, kayıp, taşınma gibi geçiş süreçlerinde aileye eşlik etmek', 'Velilerin kendi duygusal yüklerini fark etmelerine alan açmak', 'Okul-aile işbirliğiyle bütüncül destek sağlamak'],
  },
  {
    key: 'kocluk', color: 'coral', title: 'Eğitim Koçluğu',
    teaser: 'Bireysel öğrenme stilini keşfedip potansiyelini açığa çıkarması için rehberlik ediyoruz.',
    lead: 'Çocuğunuzun bireysel öğrenme stilini keşfedip, kendi potansiyelini açığa çıkarması için ona rehberlik ediyoruz:',
    items: ['Öğrenme stilini (görsel, işitsel, kinestetik) belirlemek', 'Güçlü ve gelişime açık yönlerini tespit etmek', 'Yaşına uygun hedef belirleme ve hedefe ulaşma becerisi kazandırmak', 'Çalışma alışkanlığı ve sorumluluk bilinci geliştirmek', 'Motivasyon ve içsel disiplini desteklemek', 'Okula ve öğrenmeye karşı olumlu tutum oluşturmak', 'Merak duygusunu ve araştırma isteğini canlı tutmak', 'Başarısızlık karşısında dirençli olmayı öğretmek', 'İlkokula geçiş sürecine zihinsel ve duygusal hazırlık yapmak', 'Veliye çocuğunun gelişim haritasını birlikte takip etme imkânı sunmak'],
  },
];

const SUPPORT_ICONS = {
  oyun:    <g><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="11" cy="14" r="1.5" fill="currentColor"/><circle cx="21" cy="14" r="1.5" fill="currentColor"/><path d="M11 20 Q16 24 21 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></g>,
  dil:     <g><path d="M5 9 Q5 5 9 5 H21 Q25 5 25 9 V17 Q25 21 21 21 H14 L9 26 V21 Q5 21 5 17 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M11 13 H19 M11 17 H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></g>,
  dikkat:  <g><circle cx="16" cy="16" r="3" fill="currentColor"/><circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M16 4 V8 M16 24 V28 M4 16 H8 M24 16 H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></g>,
  davranis:<g><path d="M16 27 L7 19 Q3 15 7 11 Q11 7 16 11 Q21 7 25 11 Q29 15 25 19 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/></g>,
  terapi:  <g><circle cx="11" cy="11" r="3" fill="currentColor"/><circle cx="22" cy="13" r="2" fill="currentColor"/><circle cx="14" cy="22" r="2.5" fill="currentColor"/><circle cx="24" cy="22" r="1.6" fill="currentColor"/><path d="M11 11 L22 13 L14 22 L24 22" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5"/></g>,
  psik:    <g><path d="M11 20 Q5 16 8 11 Q11 6 16 8 Q21 6 24 11 Q27 16 21 20 V25 H11 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/><circle cx="13" cy="14" r="1" fill="currentColor"/><circle cx="19" cy="14" r="1" fill="currentColor"/></g>,
  aile:    <g><circle cx="11" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="21" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="16" cy="20" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M5 24 Q5 18 11 18 Q14 18 14 20 M27 24 Q27 18 21 18 Q18 18 18 20 M11 26 Q11 22 16 22 Q21 22 21 26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></g>,
  kocluk:  <g><path d="M16 5 L26 11 L16 17 L6 11 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M10 14 V21 Q10 24 16 24 Q22 24 22 21 V14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M26 11 V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></g>,
};

const PROCESS_STEPS = [
  {
    title: 'Tanışma ve Değerlendirme',
    body: 'İlk görüşmede sizinle ve çocuğunuzla ayrı ayrı tanışıyoruz. Çocuğunuzun gelişim öyküsünü, mevcut ihtiyaçlarını ve hedeflerinizi birlikte konuşuyoruz. Bu görüşme, doğru destek planını oluşturmamız için temel oluşturur.',
    sub: null,
  },
  {
    title: 'Çocuğa Özel Plan',
    body: 'Değerlendirme sonrası çocuğunuza özgü bir destek planı hazırlıyoruz. Hangi alanda, ne sıklıkta ve hangi hedeflerle çalışılacağını sizinle paylaşıyoruz.',
    sub: null,
  },
  {
    title: 'Esnek Seans Yapısı',
    body: 'Çocuğunuzun o günkü duygusal durumuna ve ihtiyaçlarına göre seansı şekillendiriyoruz:',
    sub: [
      ['Bireysel seans', 'Çocuğunuz hazır olduğunda, eğitmeniyle birebir çalışılır.'],
      ['Anneyle/babayla birlikte seans', 'Ayrılma kaygısı yaşayan, yeni başlayan ya da duygusal güvene ihtiyaç duyan çocuklarda velinin de seansa katılmasını öneriyoruz.'],
      ['Kademeli geçiş', 'Başlangıçta veliyle birlikte alınan seanslar, çocuk hazır oldukça yavaş yavaş bireysel seanslara dönüştürülür.'],
    ],
  },
  {
    title: 'Seans Sonrası Veli Görüşmesi',
    body: 'Her seansın ardından sizinle kısa bir bilgilendirme görüşmesi yapıyoruz. Bu görüşmede:',
    sub: [
      ['Birlikte değerlendirme', 'Seansta neler yaptığımızı paylaşır, çocuğunuzun süreçteki gelişimini birlikte konuşuruz.'],
      ['Evde rehberlik', 'Evde nelere dikkat edebileceğiniz konusunda yol gösteririz.'],
      ['Geri bildirim döngüsü', 'Sizden gelen gözlemleri bir sonraki seansa yansıtırız.'],
    ],
  },
  {
    title: 'Sürekli İletişim',
    body: 'Seans dışında da iletişim hattımız açıktır. Çocuğunuzla ilgili önemli bir gözleminiz, sorunuz veya endişeniz olduğunda eğitmeninize ulaşabilirsiniz. Aile-uzman işbirliği, bu süreçte en güçlü destekleyicimizdir.',
    sub: null,
  },
];

function SupportHero() {
  return (
    <section className="support-hero">
      <svg className="blob" style={{ top: 60, left: '8%', width: 90, height: 90 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="22" fill="var(--sun)" opacity="0.45"/>
      </svg>
      <svg className="blob" style={{ top: 120, right: '12%', width: 70, height: 70 }} viewBox="0 0 60 60">
        <circle cx="22" cy="30" r="14" fill="var(--rose)" opacity="0.45"/>
        <circle cx="42" cy="22" r="10" fill="var(--teal)" opacity="0.4"/>
      </svg>
      <svg className="blob" style={{ bottom: 30, left: '18%', width: 60, height: 60 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="16" fill="var(--grape)" opacity="0.35"/>
      </svg>

      <div className="support-hero-inner">
        <div className="section-label center">Çocuğa Özel Destek</div>
        <h1>
          <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '0.55em', display: 'block', marginBottom: 12 }}>her çocuk biriciktir,</span>
          desteği de <em>kendine özel.</em>
        </h1>
        <p className="support-hero-lede">
          Her çocuğun gelişim ihtiyacı farklıdır. Mavi Mine'de, alanında uzman eğitmenlerimizle birlikte
          çocuğunuza <strong>kendi hızında, kendi yolunda</strong> eşlik ediyoruz.
        </p>
      </div>
    </section>
  );
}

function SupportCard({ area, open, onToggle }) {
  return (
    <div className={`support-card ${open ? 'is-open' : ''} support-${area.color}`}>
      <button type="button" className="support-card-head" onClick={onToggle} aria-expanded={open}>
        <div className={`support-icon smile-circle ${area.color}`} style={{ width: 56, height: 56 }}>
          <svg width="32" height="32" viewBox="0 0 32 32">{SUPPORT_ICONS[area.key]}</svg>
        </div>
        <div className="support-card-text">
          <h3>{area.title}</h3>
          <p>{area.teaser}</p>
        </div>
        <div className="support-toggle" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M3 6 L8 11 L13 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      {open && (
        <div className="support-card-body">
          <p className="support-lead">{area.lead}</p>
          <ul className="support-list">
            {area.items.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

function SupportGrid() {
  const [openKey, setOpenKey] = React.useState(null);
  return (
    <section className="support-grid-section">
      <div className="support-grid-inner">
        <div className="support-grid-head">
          <div className="section-label">Destek Alanlarımız</div>
          <h2>Hangi alanda <em>yanınızdayız?</em></h2>
          <p className="support-grid-lede">
            Tıkladığınız her alanda, alanında uzman eğitmenlerimizle birlikte neler yaptığımızı görebilirsiniz.
          </p>
        </div>
        <div className="support-grid">
          {SUPPORT_AREAS.map((area) => (
            <SupportCard
              key={area.key}
              area={area}
              open={openKey === area.key}
              onToggle={() => setOpenKey(openKey === area.key ? null : area.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-inner">
        <div className="process-head">
          <div className="section-label center">Nasıl Çalışıyoruz</div>
          <h2>Bir destek süreci <em>nasıl ilerler?</em></h2>
          <p className="process-lede">
            Her çocuğun mizacı, gelişim hızı ve duygusal hazırlığı farklıdır.
            Süreci katı bir şablonla değil, çocuğunuza göre <strong>uyarlayarak</strong> yürütürüz.
          </p>
        </div>
        <div className="process-timeline">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="process-step">
              <div className={`process-num smile-circle ${i % 2 === 0 ? 'teal' : 'orange'}`}>
                {i + 1}
              </div>
              <div className="process-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.sub && (
                  <ul className="process-sub">
                    {step.sub.map(([head, body], j) => (
                      <li key={j}>
                        <strong>{head}:</strong> {body}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportClosing() {
  return (
    <section className="support-closing">
      <div className="support-closing-inner">
        <svg style={{ position: 'absolute', top: 30, left: '12%', width: 50, height: 50, opacity: 0.6 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--sun)" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 40, right: '15%', width: 44, height: 44, opacity: 0.6 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--rose)" />
        </svg>

        <blockquote>
          Çocuğunuzun ihtiyacını birlikte<br/>
          dinleyelim, birlikte <em>kuralım.</em>
        </blockquote>
        <p className="closing-text">
          Hangi alandan başlayacağınızdan emin değilseniz dert etmeyin —
          <strong> tanışma görüşmesinde</strong> birlikte değerlendirelim.
        </p>
        <div className="closing-actions">
          <a href="iletisim.html" className="btn orange">Tanışma randevusu alın →</a>
          <a href="kadro.html" className="btn ghost">Uzman kadromuz</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Destek">
      <Nav active="Destek" />
      <SupportHero />
      <SupportGrid />
      <ProcessSection />
      <SupportClosing />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
