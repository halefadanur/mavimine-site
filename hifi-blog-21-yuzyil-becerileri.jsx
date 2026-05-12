// Mavi Mine — Blog: 21. Yüzyıl Becerileri

const SECTIONS = [
  {
    color: 'teal',
    title: 'Eleştirel Düşünme: "Neden?" diye sormaktan korkmayan çocuk',
    intro: 'Eleştirel düşünme, çocuğun <strong>karşılaştığı bilgiyi sorgulayabilmesidir</strong>. "Öğretmen söyledi" diyerek kabul etmek değil, "neden böyle?" diyebilmek. Bu beceri, anaokulunda yaşanan en küçük olaylarda inşa edilir.',
    detail: 'Örnek: Bir çocuk "gökyüzü neden mavi?" diye sorar. Üç tip öğretmen vardır. Birincisi: <em>"Çünkü öyle."</em> İkincisi: <em>"Çünkü ışık dalgaları havada kırılır."</em> Üçüncüsü: <em>"Sence neden olabilir? Hadi düşünelim."</em> Eleştirel düşünme, üçüncü öğretmenin sınıfında doğar.',
    bullets: [
      'Çocuğun "neden?" sorusuna ne sıklıkla karşılık alıyor?',
      'Öğretmen her sorunun cevabını veriyor mu, yoksa beraber mi arıyorsunuz?',
      '"Yanlış cevap" kavramı sınıfta var mı?',
      'Çocuğa farklı görüşleri tartma fırsatı veriliyor mu?'
    ],
    bizden: "Mavi Mine'de her sınıfta haftalık \"Neden Saati\" var. Çocuklar serbestçe soru sorar, hep beraber tahmin yürütürüz. Cevap her zaman doğru olmaz ama soru her zaman değerli olur."
  },
  {
    color: 'orange',
    title: 'Yaratıcılık: "Doğru cevap" diktatörlüğünden kurtulan çocuk',
    intro: 'Yaratıcılık, bir problemi <strong>daha önce kimsenin düşünmediği bir yolla çözebilmektir</strong>. Bu beceri çocukların hepsinde doğuştan vardır. Sorunumuz onu kazandırmak değil — kaybetmesine izin vermemek.',
    detail: 'Araştırmalar şunu söylüyor: 5 yaşındaki çocukların %98\'i yaratıcılık testinde "yaratıcı" çıkar. 25 yaşında bu oran %2\'ye düşer. Aradaki süreçte ne oldu? Okul. Çünkü pek çok okul "tek doğru cevap" üzerinden işler. Anaokulu, bu kaybı engellemenin son şansıdır.',
    bullets: [
      'Sınıfta "tek doğru cevap" mı, yoksa "farklı doğru yollar" mı var?',
      'Çocuğun yaptığı eser "yanlış" diye düzeltiliyor mu?',
      'Hayal kurma için zaman var mı, yoksa her dakika programlı mı?',
      'Açık uçlu malzemeler (bloklar, kil, kumaş parçaları) bol mu?'
    ],
    bizden: "Bizim sınıflarımızda \"yanlış renkte boyamış\" diye bir cümle kurulmaz. Mor güneş çizen çocuk, takdir edilir — çünkü o çocuk dünyayı kendi gözüyle görüyor."
  },
  {
    color: 'rose',
    title: 'İletişim: Duygusunu kelime ile söyleyebilen çocuk',
    intro: 'İletişim becerisi sadece "konuşmak" değildir. Çocuğun <strong>duygusunu, ihtiyacını, fikrini ifade edebilmesidir</strong>. "Sinirim" diyebilmek; "yardım istiyorum" diyebilmek; "katılmıyorum" diyebilmek.',
    detail: 'Konuşamayan çocuk vurur. İletişim becerisi gelişmemiş çocuk, agresyona başvurur. Çünkü duygusunu söyleyemiyorsa, gösteriyor demektir. Anaokulundaki en kritik iş bu: çocuğa <em>duygusunun adını öğretmek</em>. Bu olmadan hiçbir 21. yüzyıl becerisi var olmaz.',
    bullets: [
      'Çocuk "üzgünüm" / "kızgınım" / "korkuyorum" diyebiliyor mu?',
      'Öğretmen duyguları adlandırmaya yardımcı oluyor mu?',
      'Çatışma çıktığında çocuklar konuşarak mı çözüyor, öğretmen mi araya giriyor?',
      'Çocuk büyüklerle göz teması kurabiliyor mu?'
    ],
    bizden: "Mavi Mine'de \"duygu kartları\" sınıfların her duvarında asılı. Çocuk hangi duygudaysa o kartı gösterir. Konuşamayan çocuk, kartı gösterebilir. Bu küçük araç, iletişim becerisinin temelidir."
  },
  {
    color: 'grass',
    title: 'İşbirliği: "Ben" yerine "biz" diyebilen çocuk',
    intro: 'İşbirliği, çocuğun <strong>bir hedefe ulaşmak için başkalarıyla koordineli çalışabilmesidir</strong>. Bu sadece sosyal bir beceri değil — kariyerinin tamamını şekillendirir.',
    detail: 'Anaokulunda işbirliği şu küçük anlarda öğrenilir: iki çocuğun aynı blokla kule yapması, üç çocuğun bir hikayeyi birlikte oynaması, beş çocuğun sıra olup el yıkaması. Bunlar görünüşte sıradan ama altında <em>iş paylaşımı, sabretme, sıraya girme, yardımlaşma</em> var.',
    bullets: [
      'Sınıfta grup çalışması var mı, yoksa hep bireysel mi?',
      '"Sıra bekleme" konusunda çocuğa nasıl rehberlik ediliyor?',
      'Yardımlaşma yapan çocuk takdir ediliyor mu?',
      'Yaş karışık etkinlikler yapılıyor mu (büyük çocuk küçüğe öğretir)?'
    ],
    bizden: "Mavi Mine'de \"büyük kardeş\" sistemi var. 5-6 yaş Gülen Yüzler sınıfından çocuklar, 2 yaş Minik Afacanlara haftada bir kez gider, onlara öyküler okur, oyun oynar. Hem büyük öğrenir, hem küçük gelişir."
  }
];

const FAQ = [
  { q: '21. yüzyıl becerileri nelerdir?', a: 'Temel 4 beceri: Eleştirel Düşünme, Yaratıcılık, İletişim, İşbirliği (4C). Bunlara dijital okuryazarlık, problem çözme, esneklik gibi beceriler de eklenir.' },
  { q: 'Bu beceriler kaç yaşta kazanılmaya başlar?', a: 'Doğumdan itibaren. Ama en kritik dönem 2-7 yaş arasıdır. Beyin nöronları en hızlı bu yaşta bağlandığı için, anaokulu eğitimi belirleyicidir.' },
  { q: 'Akademik bilgiden mi, beceriden mi başlamalı?', a: 'Anaokulunda kesinlikle beceriden. Akademik bilgi (okuma, yazma) sonraki yıllarda eklenir. Beceri temeli sağlam olmayan çocuk akademiği de zor öğrenir.' },
  { q: 'Kestel\'de 21. yüzyıl becerilerine odaklı anaokulu var mı?', a: 'Mavi Mine Anaokulu Kestel\'de, MEB programının yanında bu 4 temel beceriyi günlük rutinin parçası yapar. Detaylı bilgi için Kestel\'deki binamıza gelin.' }
];

const RELATED = [
  { href: 'blog-anaokulunda-steam.html', title: 'Anaokulunda STEAM — ne işe yarar?', eyebrow: 'Velilere notlar', color: 'teal' },
  { href: 'blog-sevgi-egitimi.html', title: 'Sevgi Eğitimi — ne kazandırır?', eyebrow: 'Değerler · Duygusal gelişim', color: 'sun' },
  { href: 'blog-saldirgan-cocuk.html', title: 'Çocuğum Saldırgan — ne yapmalıyım?', eyebrow: 'Davranış · Velilere notlar', color: 'coral' }
];

function BlogHero() {
  return (
    <section className="blog-hero">
      <svg className="blob" style={{ top: 60, left: '8%', width: 90, height: 90 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="22" fill="var(--sun)" opacity="0.45"/>
      </svg>
      <svg className="blob" style={{ top: 120, right: '10%', width: 70, height: 70 }} viewBox="0 0 60 60">
        <circle cx="22" cy="30" r="14" fill="var(--rose)" opacity="0.45"/>
        <circle cx="42" cy="22" r="10" fill="var(--teal)" opacity="0.4"/>
      </svg>
      <svg className="blob" style={{ bottom: 40, left: '15%', width: 60, height: 60 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="16" fill="var(--grape)" opacity="0.35"/>
      </svg>

      <div className="blog-hero-inner">
        <div className="section-label center">Pedagoji · Eğitim felsefesi</div>
        <h1>
          21. Yüzyıl Becerileri<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>anaokulda kazanılır mı?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          ya kazanılırsa, hangileri öncelikli?
        </p>
        <p className="blog-hero-lede">
          Veliler son 5 yılda yeni bir kelime öğrendi: <strong>21. yüzyıl becerileri</strong>. Eğitim raporlarında, anaokulu broşürlerinde, hatta WhatsApp gruplarında bu lafa rastlıyoruz. Peki bu beceriler tam olarak nedir? Ve 3-6 yaş çocuğu için bunların hangisi <em>gerçekten</em> öncelikli?
        </p>
        <div className="blog-hero-meta">
          <span className="blog-author">Hatice Adanur Şahin</span>
          <span className="blog-dot">·</span>
          <span>Eğitimci, Mavi Mine Anaokulu Kurucusu</span>
          <span className="blog-dot">·</span>
          <span>8 dakika okuma</span>
        </div>
      </div>
    </section>
  );
}

function BlogIntro() {
  return (
    <section className="blog-intro">
      <div className="blog-intro-inner">
        <p>
          Önce gerçeği söyleyeyim: "21. yüzyıl becerileri" terimi <strong>Türkiye'de çok çarpıtılmış bir kavramdır</strong>. Pek çok kurum bu terimi pazarlama amaçlı kullanıyor; gerçek anlamını ya bilmiyor ya umursamıyor. Bu yazı, kavramı yerli yerine oturtmak için.
        </p>
        <p>
          Dünya Ekonomik Forumu, OECD ve UNESCO gibi kuruluşlar 21. yüzyıl becerilerini somut bir liste olarak tanımladı: Eleştirel Düşünme, Yaratıcılık, İletişim, İşbirliği (kısaca <strong>4C</strong>). Bunların yanına eklenenler de var ama özü bu dört beceridir.
        </p>
        <p>
          Şimdi asıl soru: <em>Anaokulu çağında bu dört beceri kazanılır mı?</em> Cevabım net: <strong>Sadece anaokulu çağında kazanılır.</strong> Üniversitede değil, lisede değil, ortaokulda değil. <u>Anaokulunda.</u> Çünkü beynin nöronları en hızlı bu yaşta bağlanır.
        </p>
      </div>
    </section>
  );
}

function QuestionCard({ item, idx }) {
  return (
    <article className={`q-card q-${item.color}`}>
      <div className="q-card-head">
        <div className={`smile-circle ${item.color}`} style={{ width: 64, height: 64, fontSize: 28 }}>
          {idx + 1}
        </div>
        <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
      </div>
      <div className="q-card-body">
        <p className="q-intro" dangerouslySetInnerHTML={{ __html: item.intro }} />
        <p dangerouslySetInnerHTML={{ __html: item.detail }} />
        <div className="q-questions">
          <div className="q-questions-label">Velilere sorular:</div>
          <ul>
            {item.bullets.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </div>
        <div className="q-bizden">
          <div className="q-bizden-label">Bizden örnek:</div>
          <p><em dangerouslySetInnerHTML={{ __html: item.bizden }}/></p>
        </div>
      </div>
    </article>
  );
}

function SectionsBlock() {
  return (
    <section className="blog-questions">
      <div className="blog-questions-inner">
        {SECTIONS.map((item, i) => (
          <QuestionCard key={i} item={item} idx={i} />
        ))}
      </div>
    </section>
  );
}

function BlogClosing() {
  return (
    <section className="blog-closing">
      <div className="blog-closing-inner">
        <h2>Sonuç: <em>21. yüzyıl becerileri anaokuluna bağımlıdır</em></h2>
        <p>
          Çocuğunuzun beyni, sünger gibi her şeyi içine alıyor. <strong>Bu yaşta kazandırılmayan bir beceri, sonradan çok daha zor kazanılır.</strong> İletişim becerisi gelişmemiş yetişkin tanıyor musunuz? Yaratıcılığını kaybetmiş bir mühendis? Eleştirel düşünemeyen bir lider? Bunlar hep anaokulunda atılan tohumların hasadıdır.
        </p>
        <p>
          Anaokulu seçerken ders ve etkinlik listesine değil, <em>çocuğun nasıl davranması bekleniyor</em>'a bakın. Çünkü oradaki davranış kalıbı, çocuğunuzu yetişkinliğe götürür.
        </p>
      </div>
    </section>
  );
}

function BlogCTA() {
  return (
    <section className="blog-cta">
      <svg style={{ position: 'absolute', top: 40, left: '15%', width: 60, height: 60, opacity: 0.6 }} viewBox="0 0 60 60">
        <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--sun)"/>
      </svg>
      <svg style={{ position: 'absolute', bottom: 60, right: '12%', width: 50, height: 50, opacity: 0.6 }} viewBox="0 0 60 60">
        <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--rose)"/>
      </svg>
      <div className="blog-cta-inner">
        <div className="section-label center" style={{ color: 'var(--sun)' }}>Mavi Mine'ye davet</div>
        <h2>Çocuğunuzla birlikte <em>bahçemizi gezin</em>.</h2>
        <p>
          Bu yazıda anlattığım 4 beceriyi günlük rutinde nasıl uyguladığımızı yerinde görmek için sizi bekliyoruz.
        </p>
        <p style={{ marginBottom: 32 }}>
          <strong>Mavi Mine Anaokulu</strong> — Kestel'in göbeğinde, üç nesil eğitimci bir aileden bir okul. 2-6 yaş, MEB + Montessori, 900 m² bahçe.
        </p>
        <div className="blog-cta-actions">
          <a href="iletisim.html" className="btn orange">Randevu alın →</a>
          <a href="hakkimizda.html" className="btn ghost" style={{ borderColor: 'rgba(255,251,242,0.6)', color: 'var(--paper)' }}>
            Bizi tanıyın
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="blog-faq">
      <div className="blog-faq-inner">
        <div className="section-label center">Sık Sorulan Sorular</div>
        <h2>21. Yüzyıl Becerileri Hakkında <em>Merak Edilenler</em></h2>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedPosts() {
  return (
    <section className="blog-related">
      <div className="blog-related-inner">
        <div className="section-label center">İlgili Yazılar</div>
        <h2>Bu yazıyı sevdiyseniz, <em>bunları da okuyun</em></h2>
        <div className="related-grid">
          {RELATED.map((r, i) => (
            <a key={i} href={r.href} className={`related-card related-${r.color}`}>
              <div className="related-eyebrow">{r.eyebrow}</div>
              <h3>{r.title}</h3>
              <div className="related-arrow">Oku →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorCard() {
  return (
    <section className="blog-author-card">
      <div className="blog-author-inner">
        <div className="author-portrait">
          <img src="images/team/team-04.jpeg" alt="Hatice Adanur Şahin" onError={(e) => { e.target.style.display='none'; }}/>
        </div>
        <div className="author-text">
          <div className="section-label">Yazar</div>
          <h3>Hatice Adanur Şahin</h3>
          <p className="author-role">Eğitimci · Montessori Eğitmeni · Mavi Mine Anaokulu Kurucusu</p>
          <p>
            Üç nesil eğitimci bir ailenin kurucusu, iki çocuk annesi. Kestel'de eğitime hayatını adamış bir eğitimci.
          </p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Blog · 21. Yüzyıl Becerileri">
      <Nav active="Blog" />
      <BlogHero />
      <BlogIntro />
      <SectionsBlock />
      <BlogClosing />
      <BlogCTA />
      <FAQSection />
      <RelatedPosts />
      <AuthorCard />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
