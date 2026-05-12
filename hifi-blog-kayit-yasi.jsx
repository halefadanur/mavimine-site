// Mavi Mine — Blog: Anaokulu Kayıt Yaşı

const SECTIONS = [
  {
    color: 'teal',
    title: '2 yaşta anaokulu: avantajları ve riskleri',
    intro: '2 yaş (24-36 ay) erken çocukluk eğitiminde özel bir dönem. Çocuğun beyni en hızlı bu yaşta gelişir. Doğru ortamda muazzam bir kazanım sağlar.',
    detail: '<strong>Avantajlar:</strong> Sosyal etkileşim erken başlar, dil gelişimi hızlanır (akran etkisi), bağımsızlık duygusu kazanır, anneden ayrılma kolaylaşır. <strong>Riskler:</strong> Bağışıklık sistemi henüz tam gelişmemiştir (sürekli hastalıklar), duygusal hazırlık eksik olabilir, kalabalık ortam aşırı uyaran üretebilir. <em>2 yaşta anaokulunun en kritik konusu öğretmen-çocuk oranıdır</em> — bu yaşta 1 öğretmen 5-6 çocuğa bakmalı, daha fazlasına değil.',
    bullets: [
      'Çocuğum tuvalet eğitimini başlatmış mı (tamamlanmamış olsa bile)?',
      'Anneden 2-3 saat ayrı kalabiliyor mu?',
      'Basit talimatları anlıyor mu?',
      'Yaşıtlarıyla etkileşime giriyor mu?',
      'Seçeceğim anaokulunda 2 yaş için ayrı sınıf ve yardımcı öğretmen var mı?'
    ],
    bizden: "Mavi Mine'de 2 yaş için ayrı bir sınıf var: \"Minik Afacanlar\". Sınıf öğretmeni + yardımcı öğretmen birlikte çalışır. Bez kullanan çocukları kabul ediyoruz, anneden ayrılma sürecini sevgiyle yönetiyoruz."
  },
  {
    color: 'rose',
    title: '3 yaşta anaokulu: çoğu çocuk için ideal yaş',
    intro: '3 yaş, pek çok ailenin tercih ettiği başlama yaşı. Çocuk genelde daha bağımsız, daha hazır, daha az hasta olur.',
    detail: '<strong>Avantajları:</strong> Dil gelişimi daha ileri (öğretmenle iletişim kolay), tuvalet eğitimi genelde tamamlanmış (ya da bitmek üzere), anneden ayrılma daha az travmatik, hastalıklara karşı bağışıklık daha güçlü. <strong>Az ama gerçek bir risk:</strong> 3 yaşa kadar evde geçirilen süre, sosyal beceri gelişimini geciktirebilir. Tek çocuk olarak büyüyen çocuklarda bu daha belirgin. Bu durumda <em>3 yaş bekleyişi avantaja dönüşmek yerine dezavantaja</em> dönüşür.',
    bullets: [
      'Çocuğum yaşıtlarıyla zaman geçirme fırsatı buluyor mu evde?',
      'Tek başına oyun oynayabiliyor mu, ya da sürekli benim ilgi gösterilmeli mi?',
      'Yabancı bir yetişkinle bir saat geçirebilir mi rahatlıkla?',
      'Anaokuluna gitmeden önce sosyal grup deneyimi yaşadı mı?'
    ],
    bizden: "3 yaş için Mavi Mine'de \"Meraklı Minikler\" sınıfımız var. 3-4 yaş aralığı, sınıf öğretmeni + yardımcı öğretmen. Bu yaşta çocuklar bizimle hızla bağ kurar."
  },
  {
    color: 'orange',
    title: 'Çocuğunuzun hazır olduğunu gösteren 5 işaret',
    intro: 'Yaş değil, hazırlık önemli. <strong>Aşağıdaki 5 işaretten 3-4\'ü varsa, çocuğunuz anaokuluna hazır</strong> demektir.',
    detail: '<strong>İşaret 1:</strong> Anneden 2-3 saat ayrı kalabiliyor (büyükanne, baba, başka biriyle). <strong>İşaret 2:</strong> Yabancı yetişkinlere kısa sürede ısınıyor. <strong>İşaret 3:</strong> Basit kuralları anlıyor ve genelde uyguluyor ("sıramı bekleyeyim", "el yıkayalım"). <strong>İşaret 4:</strong> Temel ihtiyaçlarını ifade ediyor ("susadım", "tuvalete gideyim"). <strong>İşaret 5:</strong> Yaşıtlarıyla yan yana ya da birlikte oynayabiliyor (kavga olsa bile).',
    bullets: [
      'Bu 5 işaretten kaçı çocuğumda var?',
      'Eksik olanlar üzerinde son birkaç ay çalışabilir miyim?',
      'Eğer çocuğum henüz hazır değilse, kayıt için birkaç ay erteleyebilir miyim?',
      'Çocuğumun hazır olmaması, benim kayıt baskımdan mı kaynaklanıyor?'
    ],
    bizden: "Mavi Mine'de kayıt görüşmemizde aileyle birlikte bu işaretleri konuşuyoruz. Çocuk hazır değilse açıkça söylüyoruz — birkaç ay erteleme önerisi de veriyoruz. Çünkü hazır olmayan çocuğu kabul etmek, ne çocuğa ne aileye ne bize yarar sağlar."
  },
  {
    color: 'sky',
    title: '"Geç kaldım" hissetmeyin: 4-5 yaşta başlamak da geç değil',
    intro: 'Bazı veliler 3-4 yaşa kadar çocuğu evde tuttuktan sonra <em>panikleyerek</em> bana geliyor: <strong>"Geç kaldım mı?"</strong> Cevabım net: <em>"Hayır, geç kalmadınız."</em>',
    detail: 'Çocuk gelişiminde "ideal yaş" diye bir şey yok ama "çok geç yaş" da yok. 4 yaşında ilk kez anaokuluna giden çocuk, alışma sürecinde biraz daha zorlanabilir ama uzun vadede aynı yere ulaşır. Önemli olan başladıktan sonra <strong>devam etmesi, kesintisiz olması</strong>. "Bir hafta gönderdim, hastalandı, hiç göndermiyorum" — bu en zarar verici yaklaşımdır.',
    bullets: [
      'Çocuğum 4 yaşına yaklaşıyor, hala anaokuluna başlamadı — yıkıcı mı?',
      'Şimdi başlasak alışma süreci ne kadar sürer?',
      'Hangi tip anaokulu 4 yaş ilk-defa-başlayan için daha uygun?',
      'Çocuğum okul öncesinde sosyal grup deneyimi yaşamadıysa, nereden başlamalı?'
    ],
    bizden: "4-5 yaşta ilk kez gelen çocuklarımız da var. Sınıf öğretmenimiz alışma sürecini titizlikle yönetir; aile ile öğretmen arasında günlük iletişim olur. 2-3 hafta sonra çocuk genelde rutine girer."
  }
];

const FAQ = [
  { q: 'Anaokuluna kayıt için en küçük yaş kaç?', a: 'Mavi Mine olarak biz 24 aydan (2 yaş) itibaren kayıt alıyoruz. Bazı anaokulları 36 aydan başlar. Tercih kuruma göre değişir.' },
  { q: 'Çocuğum 2 yaşında ama tuvalet eğitimi yapmadık, kabul edilir mi?', a: 'Evet, Mavi Mine\'de tuvalet eğitimi tamamlanmamış 2 yaş çocuklarını kabul ediyoruz. Süreçte aileye destek oluyoruz.' },
  { q: '4 yaşında anaokuluna ilk kez başlamak geç mi?', a: 'Hayır. 4 yaşta başlamak da geç değildir. Alışma süreci biraz daha bilinçli yönetilmeli ama uzun vadede çocuk aynı yere ulaşır.' },
  { q: 'Kestel\'de 2 yaş çocuğu kabul eden anaokulu var mı?', a: 'Mavi Mine Anaokulu Kestel\'de, 2 yaş için ayrı bir sınıf (Minik Afacanlar) ve özel bir kadro var. Yardımcı öğretmen desteği ile yumuşak bir alışma süreci sağlıyoruz.' }
];

const RELATED = [
  { href: 'blog-kestel-anaokulu-secimi.html', title: "Kestel'de Anaokulu Seçerken 7 Şey", eyebrow: 'Velilere notlar', color: 'orange' },
  { href: 'blog-tuvalet-egitimi.html', title: 'Çocuğum Tuvaletini Tutamıyor — alışır mı?', eyebrow: 'Gelişim · Velilere notlar', color: 'sky' },
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
        <div className="section-label center">Karar Verme · Velilere notlar</div>
        <h1>
          Anaokulu Kayıt Yaşı<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>2 mi 3 mü?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          doğru yaş yok, doğru çocuk var
        </p>
        <p className="blog-hero-lede">
          Bu yıl <em>en çok aldığım sorulardan biri:</em> <strong>"Hatice Hanım, çocuğum 2 yaşında, anaokuluna versem erken mi olur?"</strong> Hemen ardından gelen: "3 yaşında versem geç kalır mı?" İki kaygı, tek bir sorunun arkasında: <em>çocuğum için doğru zaman ne?</em>
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
          Önce eğitimci olarak <strong>net bir cevap vereyim: "doğru yaş" diye bir şey yok</strong>. Çocukların gelişimi takvimle değil, kendi içsel ritmiyle ilerler. Komşunun çocuğunun 2 yaşında başarılı olduğu okula sizin çocuğunuz 3 yaşında bile hazır olmayabilir. Tersi de doğru.
        </p>
        <p>
          Bu yazıda <strong>çocuğunuzun anaokuluna hazır olup olmadığını nasıl anlayacağınızı</strong> ve <strong>2 yaş ile 3 yaş kayıt arasındaki farkların</strong> ne olduğunu anlatacağım. Karar verirken bakacağınız 5 işareti vereceğim. Sonunda da kendinize bu kararı vermek için bir çerçeve oluşturacaksınız.
        </p>
        <p>
          Bir uyarı: <em>aile ekonomisinin baskısı</em>, <em>annenin işe dönmesi</em> gibi pratik nedenler de var. Bu nedenler tamamen meşru — "çocuğum erken kaydolmalı" diye suçluluk hissetmeyin. Doğru anaokulu seçildiğinde, 2 yaşında bile çocuk için iyi olur.
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
        <h2>Sonuç: <em>çocuğunuzun ritmine kulak verin</em></h2>
        <p>
          Yaş bir rakamdır. <strong>Çocuğunuzun anaokuluna hazırlığı bir yaşam koşuludur.</strong> İkisi her zaman örtüşmez. Komşunun çocuğunun yaşına değil, sizin çocuğunuzun işaretlerine bakın.
        </p>
        <p>
          Karar veremiyorsanız: <em>okulu gezin, öğretmeniyle tanışın, çocuğunuzu götürün</em>. Karar zaten kendiliğinden gelir. Çünkü doğru okulda doğru zamanda olduğunda, çocuğun gözleri size söyler.
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
          Çocuğunuzun hazır olup olmadığını birlikte değerlendirelim. Görüşmemiz baskısız bir sohbet — kararınızı ona göre verin.
        </p>
        <p style={{ marginBottom: 32 }}>
          <strong>Mavi Mine Anaokulu</strong> — Kestel'in göbeğinde, 2-6 yaş, üç sınıf, üç nesil eğitimci aile.
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
        <h2>Kayıt Yaşı Hakkında <em>Merak Edilenler</em></h2>
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
    <div data-screen-label="Blog · Anaokulu Kayıt Yaşı">
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
