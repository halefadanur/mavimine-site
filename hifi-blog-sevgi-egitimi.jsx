// Mavi Mine — Blog: Sevgi Eğitimi

const SECTIONS = [
  {
    color: 'rose',
    title: 'Sevgi nedir, ne değildir? Önce yanlış anlamayı temizleyelim',
    intro: 'Sevgi <strong>şımartmak değildir</strong>. Sevgi <strong>her isteği yerine getirmek değildir</strong>. Sevgi, çocuğun varlığına saygı duymaktır. "Sen kıymetlisin, ve ben senin sınırlarına da saygı duyacağım" demektir.',
    detail: 'Bir anaokulunun "sevgi dolu" olması, çocukları her istediğini almaları anlamına gelmez. Tam tersine: <em>sınırı net olan, kuralı sevgiyle koyan, çocuğun duygusunu tanıyan</em> bir ortam, en sevgi dolu ortamdır. Sevgisiz disiplin sertleştirir, disiplinsiz sevgi şımartır. İkisi birlikte olmak zorundadır.',
    bullets: [
      'Öğretmenler çocuğa sınır koyarken sertleşiyor mu, yoksa açıklıyor mu?',
      '"Hayır" denmesi gereken yerde "hayır" deniyor mu?',
      'Çocuk ağladığında nasıl karşılanıyor — susturulması mı, dinlenmesi mi?',
      'Sınıfta her çocuğun ayrı bir özelliği takdir ediliyor mu?'
    ],
    bizden: "Mavi Mine'de \"sınır sevgisi\" diye bir yaklaşımımız var. Çocuğa kural koyarken neden gerektiğini açıklarız. \"Bu masaya çıkamazsın çünkü düşersen canın acır\" — bu cümle, hem sınır hem sevgidir."
  },
  {
    color: 'sun',
    title: 'Empati: Bir çocuğa başkasının duygusunu hissetmeyi nasıl öğretirsiniz?',
    intro: 'Empati, sevgi eğitiminin en temel parçasıdır. <strong>Empatisiz sevgi, bencillik olur.</strong> Çocuğa empatiyi öğretmek için en güçlü araç, model olmaktır.',
    detail: 'Çocuk bir arkadaşının düştüğünü görür. Tepkisi öğretmenin tepkisini taklit eder. Öğretmen koşarak "canın acıdı mı?" diye sorarsa, çocuk da bir dahaki sefere koşar. Öğretmen "yavaş yürü demiştim" derse, çocuk da yargılar. Empati gösterilerek öğrenilir, ders olarak değil.',
    bullets: [
      'Bir çocuk üzüldüğünde diğerlerine ne yapması gerektiği gösteriliyor mu?',
      'Öğretmenler kendi duygularını çocuklarla paylaşıyor mu?',
      'Hayvanlara, doğaya saygı sınıfın bir parçası mı?',
      '"Sıra dışı" çocuklar — utangaç, çok hareketli — nasıl karşılanıyor?'
    ],
    bizden: "Sınıflarımızda öğretmenlerimiz duygusal model olmak için eğitildi. Bir çocuk düştüğünde diğer çocuklara \"hadi gidelim bakalım nasılmış\" derler. Empati, böyle küçük anlarla büyür."
  },
  {
    color: 'grass',
    title: 'Sevgi dilini öğrenmek: Beş ayrı sevgi dili var',
    intro: 'Gary Chapman\'ın <em>"Çocukların Beş Sevgi Dili"</em> kitabı, çocuğun anlayabileceği beş ayrı sevgi yolu olduğunu söyler: kelimelerle iltifat, fiziksel temas, kaliteli zaman, hediye, hizmet.',
    detail: 'Her çocuk farklı sevgi dilini anlar. Bazı çocuklar "seni seviyorum" duymaya muhtaçtır, bazıları kucağa, bazıları beraber oynamaya. <strong>Anaokulu öğretmeninin işi bu dillerin hepsini kullanmaktır.</strong> Çünkü hangi çocuğun hangi dili anladığı, sınıfta ortaya çıkar.',
    bullets: [
      'Öğretmenler çocuklara fiziksel temasla yaklaşıyor mu (sarılma, başını okşama)?',
      'Övgü gerçek mi, otomatik mi? ("Çok güzel!" yerine "Maviyle sarıyı karıştırdın, yeşil oldu — bunu fark ettin")',
      'Her çocuğa birebir zaman ayrılıyor mu?',
      'Çocuğun yaptığı küçük yardımlar takdir ediliyor mu?'
    ],
    bizden: "Mavi Mine'de her sabah her çocuk öğretmen tarafından göz hizasında karşılanır. \"Günaydın\" demek için öğretmen çömelir. Bu küçük an, çocuğa \"seni görüyorum\" demenin en güçlü halidir."
  },
  {
    color: 'grape',
    title: 'Aile dışında sevmek: Farklı olana uzanan sevgi',
    intro: 'Çocuk önce anne ve babasını sever — bu içgüdüseldir. Anaokulunda öğrendiği şey, <strong>aile dışındaki insanları da sevebilmektir</strong>. Farklı renkten, farklı kültürden, farklı yetilerden olan insanları.',
    detail: 'Bu, sevgi eğitiminin en zor parçasıdır. Çünkü çocuk doğal olarak "kendisine benzeyene" güvenir. Farkındalık kazanması gerekir: <em>kendisine benzemeyen de güvenilir ve sevilebilir</em>. Bu, ilerideki ırkçılığın, ayrımcılığın panzehiridir. Anaokulunda bu temel atılmazsa, sonradan zor atılır.',
    bullets: [
      'Sınıfta farklı kültürlerin kutlamaları var mı?',
      'Özel gereksinimli çocuklara karşı tutum nasıl?',
      'Hayvan, doğa sevgisi günlük yaşamın parçası mı?',
      'Çocuğa "farklı olmak" konusunda ne anlatılıyor?'
    ],
    bizden: "Bizim sınıflarımızda farklı bayramları kutlarız — Cumhuriyet Bayramı, Anneler Günü, ama aynı zamanda Yaprak Günü, Toprak Günü, Mavi Mine'nin Doğum Günü. Çocuk böylece sevginin sadece tatil için olmadığını öğrenir."
  }
];

const FAQ = [
  { q: 'Anaokulunda sevgi eğitimi neyi içerir?', a: 'Empati gelişimi, duygu tanıma ve ifade etme, sınır koyma, paylaşma, farklılığa saygı, hayvan ve doğa sevgisi. Bunlar günlük rutinin doğal parçası olmalı, ayrı bir \'sevgi dersi\' değil.' },
  { q: 'Çocuğum agresif, sevgi eğitimi işe yarar mı?', a: 'Evet, kesinlikle. Çoğu agresyon, duyguyu ifade edememekten kaynaklanır. Çocuk duygusunun adını öğrendiğinde, agresyonu azalır. Bu süreç sabır ister ama sonuç verir.' },
  { q: 'Sevgi eğitimi ile değerler eğitimi aynı şey mi?', a: 'İkisi iç içedir. Değerler eğitimi daha geniş bir kavramdır — saygı, dürüstlük, sorumluluk gibi değerleri kapsar. Sevgi eğitimi, bu değerlerin duygusal temelidir.' },
  { q: 'Kestel\'de değerler eğitimi veren anaokulu nasıl bulunur?', a: 'Önce broşüre değil, ziyaret edip gözlemleyin. Öğretmenin çocukla nasıl konuştuğuna, sınıfta nasıl bir atmosfer olduğuna bakın. Mavi Mine Anaokulu olarak Kestel\'de değerler eğitimini günlük rutinin parçası yaparız.' }
];

const RELATED = [
  { href: 'blog-saldirgan-cocuk.html', title: 'Çocuğum Saldırgan — ne yapmalıyım?', eyebrow: 'Davranış · Velilere notlar', color: 'coral' },
  { href: 'blog-21-yuzyil-becerileri.html', title: '21. Yüzyıl Becerileri — anaokulda kazanılır mı?', eyebrow: 'Pedagoji · Eğitim felsefesi', color: 'rose' },
  { href: 'blog-tuvalet-egitimi.html', title: 'Çocuğum Tuvaletini Tutamıyor — alışır mı?', eyebrow: 'Gelişim · Velilere notlar', color: 'sky' }
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
        <div className="section-label center">Değerler · Duygusal gelişim</div>
        <h1>
          Sevgi Eğitimi<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>ne kazandırır?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          bir çocuğa sevmek nasıl öğretilir
        </p>
        <p className="blog-hero-lede">
          Bir çocuğa <strong>sevmeyi nasıl öğretirsiniz?</strong> Tuhaf bir soru, biliyorum. Sevgi içgüdüseldir, öğretilmez sanıyoruz. Ama gerçek şu: <em>Sevgiyi göstermeyi, paylaşmayı, ifade etmeyi ve sevgiyi farklı türden insanlara uzatmayı</em> öğreniriz. Ve bu öğrenme, çoğunlukla anaokulunda başlar.
        </p>
        <div className="blog-hero-meta">
          <span className="blog-author">Hatice Adanur Şahin</span>
          <span className="blog-dot">·</span>
          <span>Eğitimci, Mavi Mine Anaokulu Kurucusu</span>
          <span className="blog-dot">·</span>
          <span>7 dakika okuma</span>
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
          Anaokulu broşürlerinde "değerler eğitimi" diye bir başlık görmüşsünüzdür. Çoğu okul bu bölümün altına "saygı, sevgi, paylaşım" gibi kelimeleri sıralar. Peki bu kelimeler, gerçekte ne anlama geliyor? Sınıfta nasıl uygulanıyor?
        </p>
        <p>
          Bu yazıda <strong>sevgi eğitimi denen şeyin gerçek ne olduğunu</strong> ve çocuğunuza ne kazandırdığını anlatacağım. Aşırı duygusal bir yazı bekleme — ben bir eğitimciyim, somut konuşurum. Ama sevgi öyle bir konu ki, somut konuşmak için biraz da kalbi kullanmak gerekiyor.
        </p>
        <p>
          Hatice Adanur Şahin olarak benim için sevgi eğitimi, <em>MAVİ MİNE</em>'nin <strong>İ</strong> harfidir: İncelik. Söz incelir, dokunuş incelir, bakış incelir. Bu yazıyı okuduktan sonra okul gezisinde dikkat edeceğiniz şeyler değişecek — bunu vaat ederim.
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
        <h2>Sonuç: <em>sevilen çocuk, seven yetişkin olur</em></h2>
        <p>
          Çocuğunuzun anaokulunda kazanacağı en büyük şey ne sayıdır, ne harftir, ne İngilizcedir. <strong>Kendini sevilmeye değer hissetmektir.</strong> Bunu kazanan çocuk, sonradan her şeyi öğrenir. Bunu kazanmayan çocuk, çok parlak akademiğe sahip olsa bile içinde bir boşluk taşır.
        </p>
        <p>
          Bir anaokulunu seçerken, akademik programdan önce <em>çocuğun nasıl karşılandığını</em> izleyin. Öğretmen çömeliyor mu? Çocuğun gözüne bakıyor mu? Adını biliyor mu? Bunlar küçük şeyler ama hepsi sevgi eğitimidir.
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
          Sevgi eğitimini günlük rutine nasıl gömdüğümüzü yerinde görmek için sizi bekliyoruz. Öğretmenlerimizin çocukla nasıl konuştuğunu izleyin — onlar size çok şey söyler.
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
        <h2>Sevgi Eğitimi Hakkında <em>Merak Edilenler</em></h2>
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
    <div data-screen-label="Blog · Sevgi Eğitimi">
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
