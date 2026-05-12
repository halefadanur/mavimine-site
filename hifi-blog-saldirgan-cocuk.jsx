// Mavi Mine — Blog: Saldırgan Çocuk

const SECTIONS = [
  {
    color: 'rose',
    title: 'Önce nedeni anlayın: 5 büyük neden',
    intro: 'Saldırgan davranışın <strong>ardında her zaman bir sebep vardır</strong>. Sebebi anlamadan müdahale etmek, ateşin altındaki tencereyi kapatmaya çalışmaktır.',
    detail: 'Çocukta saldırganlığın en yaygın sebepleri: <strong>(1)</strong> <em>Dil gelişimi yetersiz</em> — duygusunu söyleyemiyor, gösteriyor. <strong>(2)</strong> <em>Uyku düzeni bozuk</em> — yorgun çocuk öfkelidir. <strong>(3)</strong> <em>Aşırı uyaran</em> — günde 8 saat ekran, kalabalık, plansız programlar. <strong>(4)</strong> <em>Aile içinde tutarsızlık</em> — anne hayır der, baba evet der; bugün izin verilen yarın yasaklanır. <strong>(5)</strong> <em>Karşılanmayan ihtiyaç</em> — açlık, sıkıntı, ilgi ihtiyacı.',
    bullets: [
      'Çocuğunuzun dil gelişimi yaşıtlarıyla aynı düzeyde mi?',
      'Uyku saati düzenli mi, yeterli mi?',
      'Günde toplam ekran süresi 30 dakikadan fazla mı?',
      'Aile içinde kurallarda tutarlılık var mı?',
      'Çocuğunuza günde kaliteli 30 dakika birebir vakit ayırabiliyor musunuz?'
    ],
    bizden: "Mavi Mine'de saldırgan davranış gösteren çocuk için önce <strong>davranış günlüğü</strong> tutarız. Hangi saatte, hangi durumda, hangi tetikleyici ile davranış çıktığını yazılı izleriz. Sebep bulunmadan çözüm yoktur."
  },
  {
    color: 'orange',
    title: 'Yapılacak şey: cezalandırmak değil, duyguya isim koymak',
    intro: 'Çocuk vurdu. İlk reaksiyonunuz ne olur? <em>"Vurma! Yaramazlık etme! Otur şuraya!"</em> Bu yaklaşım son 30 yılda "klasik" sayıldı, sonra <strong>terk edildi</strong>. Çünkü işe yaramıyor — hatta tersine, davranışı pekiştiriyor.',
    detail: 'Doğru yaklaşım: <strong>(1)</strong> Önce çocuğu fiziksel olarak durdurun (eli tutun, ama incitmeden). <strong>(2)</strong> Diz çöküp göz hizasına gelin. <strong>(3)</strong> <em>"Çok kızdın değil mi?"</em> diye duyguya isim koyun. <strong>(4)</strong> Kuralı söyleyin: <em>"Vurmak yok. Kızgınken söyle."</em> <strong>(5)</strong> Kızgınlığı ifade edecek alternatif öğretin: <em>"Yastığı yumruklayabilirsin. Bana gelebilirsin."</em> Bu 5 adım, ortalama 6-8 hafta sürekli uygulandığında davranışta belirgin azalma olur.',
    bullets: [
      'Çocuğa kızdığında ben diz çöküyor muyum, yoksa yukarıdan azarlıyor muyum?',
      'Çocuğun duygusunu adlandırıyor muyum ("kızgınsın", "üzgünsün")?',
      'Kuralı kısa ve net mi söylüyorum?',
      'Alternatif veriyor muyum, sadece yasaklıyor muyum?',
      'Tutarlılık var mı — her seferinde aynı tepkiyi mi veriyorum?'
    ],
    bizden: "Bizim öğretmenlerimiz \"duygu kartları\" kullanır. Çocuk kızdığında kartı gösterir, kelimesi olmasa bile. Bu küçük araç, saldırganlığı %70 oranında azaltır — sınıflarımızda yıllar içinde doğrulandı."
  },
  {
    color: 'grass',
    title: 'Isıran çocuk: özel ve hassas bir durum',
    intro: 'Isırma, vurmadan farklı bir kategoridir. <strong>1.5-3 yaş arası çok yaygındır</strong>, sonra azalır. Ama yaşandığında veliyi en çok sarsan davranıştır — hem ısıran çocuğun ailesinin, hem ısırılan çocuğun ailesinin.',
    detail: 'Isırma çoğunlukla <em>dil gelişimi olmadığı için</em> başlar. Çocuk "benim oyuncağım" diyemediği için ısırır. Ya da yoğun duyguyu (sevgi, heyecan, kızgınlık) ifade etmenin başka yolu yoktur. Çözüm: <strong>(1)</strong> Net kural — <em>"Isırmak insanı incitir, ısırmak yok."</em> <strong>(2)</strong> Alternatif — <em>"Diş kaşıyıcı verebilirim, bir şey çiğnemen gerekiyorsa."</em> <strong>(3)</strong> Ortamı izleyin — hangi durumlar tetikliyor? Açlık, yorgunluk, yoğun oyun? <strong>(4)</strong> Asla geri ısırmayın — "sen de tat" yöntemi pedagojide kabul edilen bir yöntem değildir, çocukta korku yaratır.',
    bullets: [
      'Çocuğunuzun ısırma davranışı sıklığı haftada birden fazla mı?',
      'Belirli durumlarda mı (yorgunluk, açlık, kalabalık) ortaya çıkıyor?',
      'Dil gelişimi yaşıtlarıyla aynı düzeyde mi?',
      'Aile içinde ısırma davranışına nasıl tepki veriliyor (geri ısırma var mı?)'
    ],
    bizden: "Mavi Mine'de ısıran çocuk için <em>'koruyucu plan'</em> uygularız. Sınıf öğretmeni çocuğu yakından takip eder, tetikleyici durumlar belirlenir, alternatif sunulur. Aileler bilgilendirilir ama isim verilmez — çocuk damgalanmaz."
  },
  {
    color: 'sky',
    title: 'Ne zaman uzman desteği almalı?',
    intro: 'Bazı saldırgan davranışlar normalin sınırını aşar. Bu durumlarda <strong>çocuk psikoloğu veya çocuk gelişim uzmanı</strong> ile görüşmek gerekir.',
    detail: 'Uzman desteği gerekçeleri: <strong>(1)</strong> Davranış 6 aydan uzun süredir devam ediyor ve yoğunluğu azalmıyor. <strong>(2)</strong> Çocuk kendisine zarar veriyor (kendi başını duvara vurma, kendini ısırma). <strong>(3)</strong> Hayvanlara veya kendinden küçük çocuklara sürekli, planlı saldırı. <strong>(4)</strong> Çocuk yoğun korku içinde, sürekli uyku problemi var. <strong>(5)</strong> Davranış sonrası çocuk pişmanlık göstermiyor, sevgisiz davranıyor.',
    bullets: [
      'Çocuğum davranış sonrası üzülüyor mu?',
      'Saldırganlık 6 aydan uzun süredir devam ediyor mu?',
      'Yoğunluğu artıyor mu, azalıyor mu?',
      'Kendine zarar veriyor mu?',
      'Bir uzmanla görüşmek için ne bekliyorum?'
    ],
    bizden: "Mavi Mine'de iki psikolog ve iki dil-konuşma terapisti danışman olarak görev yapar. Ciddi davranış kaygımız varsa aileyi yönlendiririz; ama önce her zaman <em>'bu davranışın altında dil gelişimi var mı?'</em> sorusuyla başlarız."
  }
];

const FAQ = [
  { q: 'Çocuğum sürekli vuruyor, anaokulu kabul eder mi?', a: 'İyi anaokulları davranış sorunlu çocukları reddetmek yerine destek planı sunar. Mavi Mine olarak biz, çocuğu ve aileyi süreçte yalnız bırakmıyoruz. Önce çocuğu anlamaya çalışıyoruz, sonra plan yapıyoruz.' },
  { q: 'Çocuğumun davranışı için ceza verirsem işe yarar mı?', a: 'Kısa vadede belki, ama uzun vadede zarar verir. Ceza saldırganlığı bastırır ama altta yatan duyguyu çözmez. Daha kötüsü: çocuk korku öğrenir, güven kaybeder.' },
  { q: 'Saldırgan davranış hangi yaşa kadar normaldir?', a: 'Yaygın olarak 2-4 yaş arasında görülür. 5 yaşından sonra hala yoğunsa, mutlaka uzman desteği önerilir. Ama her çocuğun durumu farklıdır.' },
  { q: 'Kestel\'de davranış desteği veren anaokulu var mı?', a: 'Mavi Mine Anaokulu Kestel\'de, davranış desteği için özel bir yaklaşımımız var. İki psikolog ve iki dil-konuşma terapisti danışmanlığı, davranış sorunlarında bireysel plan.' }
];

const RELATED = [
  { href: 'Mavi Mine Blog Anaokulunda Sevgi Egitimi.html', title: 'Sevgi Eğitimi — ne kazandırır?', eyebrow: 'Değerler · Duygusal gelişim', color: 'sun' },
  { href: 'blog-tuvalet-egitimi.html', title: 'Çocuğum Tuvaletini Tutamıyor — alışır mı?', eyebrow: 'Gelişim · Velilere notlar', color: 'sky' },
  { href: 'Mavi Mine Blog 21 Yuzyil Becerileri.html', title: '21. Yüzyıl Becerileri — anaokulda kazanılır mı?', eyebrow: 'Pedagoji · Eğitim felsefesi', color: 'rose' }
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
        <div className="section-label center">Davranış · Velilere notlar</div>
        <h1>
          Çocuğum Saldırgan Davranıyor<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>ne yapmalıyım?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          panik yapmadan, etiketlemeden, çocuğu anlayarak
        </p>
        <p className="blog-hero-lede">
          Çocuğunuz vurdu. Belki ısırdı. Belki bir arkadaşına saldırdı. Şimdi siz buradasınız, telefonunuzdan <em>"çocuğum saldırgan davranıyor ne yapmalıyım"</em> yazdınız. Önce <strong>derin bir nefes</strong>. Anaokulu yaşında bu davranış sandığınızdan çok daha yaygın. Ama bu, hiçbir şey yapılmasın anlamına gelmiyor.
        </p>
        <div className="blog-hero-meta">
          <span className="blog-author">Hatice Adanur Şahin</span>
          <span className="blog-dot">·</span>
          <span>Pedagog, Mavi Mine Anaokulu Kurucusu</span>
          <span className="blog-dot">·</span>
          <span>9 dakika okuma</span>
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
          Şunu açıkça söyleyeyim: <strong>anaokulu yaşında saldırgan davranış (vurma, itme, ısırma, çığlık) gelişimsel olarak normaldir</strong>. 2-4 yaş arası çocukların yaklaşık %50'si bir dönem bu davranışları gösterir. Yani çocuğunuz <em>'kötü' değil</em>, çocuğunuz <em>henüz konuşamıyor</em>.
        </p>
        <p>
          Saldırgan davranışın altında neredeyse her zaman <strong>iletişimsizlik</strong> yatar. Çocuk duygusunun adını bilmiyor, ifade edemiyor, dolayısıyla gösteriyor. Bizim işimiz çocuğa <em>'kötü çocuk'</em> demek değil — duygusunu adlandırmasına yardım etmek.
        </p>
        <p>
          Bu yazıda <strong>çocuğunuzun davranışını nasıl anlayacağınızı, evde ne yapabileceğinizi, anaokulundan nasıl destek alacağınızı</strong> anlatacağım. Bir uyarı: davranış uzun süredir devam ediyorsa veya çocuğunuz kendisine zarar veriyorsa, mutlaka bir çocuk psikoloğuyla görüşün. Bu yazı genel rehberdir, tanı değildir.
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
        <h2>Sonuç: <em>çocuğun davranışı, sözünün karşılığıdır</em></h2>
        <p>
          Saldırgan çocuk "kötü çocuk" değildir. <strong>İhtiyacını söyleyemeyen çocuktur</strong>. Bizim işimiz onu susturmak değil, ona kelimelerini kazandırmaktır. Bu uzun bir süreçtir — günler değil, haftalar ve aylar.
        </p>
        <p>
          <em>Sabırlı olun, ama pes etmeyin</em>. Çocuğunuzun saldırgan davranışları, doğru destekle, neredeyse her zaman çözülür. Yeter ki etiketleme ve cezalandırma tuzağına düşmeyin.
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
          Bu yazıda anlattığım yaklaşımı uyguladığımız okulumuza sizi bekliyoruz. Sorularınıza Hatice Hanım ya da kadromuz cevap verir.
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
        <h2>Bu Konuda <em>Merak Edilenler</em></h2>
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
          <p className="author-role">Pedagog · Montessori Eğitmeni · Mavi Mine Anaokulu Kurucusu</p>
          <p>
            Üç nesil eğitimci bir ailenin kurucusu, iki çocuk annesi. Kestel'de eğitime hayatını adamış bir pedagog.
          </p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Blog · Saldırgan Çocuk">
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
