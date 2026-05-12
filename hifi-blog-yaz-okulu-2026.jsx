// Mavi Mine — Blog: Yaz Okulu 2026

const SECTIONS = [
  {
    color: 'sun',
    title: 'Yaz okulu çocuğa ne kazandırır? (Sadece "çocuk sıkılmasın" değildir)',
    intro: 'Yaz okulu sadece bakım amaçlı değildir. <strong>İyi bir yaz okulu, eğitim yılına eklenen bir gelişim katmanıdır.</strong> Üstelik, formal eğitimin baskısı olmadan, doğal akışta.',
    detail: 'Bilimsel olarak kanıtlanmış: <em>çocuğun yaz boyunca evde tek başına geçirdiği süre, eğitim yılında kazanılan becerilerin %30\'unu kaybettirir.</em> Buna "summer slide" denir. İyi yaz okulu bu kaybı önler. Ama bunu test ve kitapla değil — <strong>aktif oyunla, atölyelerle, sosyal etkileşimle</strong> yapar. Yaz, baskısız öğrenmenin en güzel mevsimidir.',
    bullets: [
      'Yaz okulu çocuğumun sosyal yaşamına katkı sağlıyor mu?',
      'Yeni beceriler kazandıracak atölyeler var mı?',
      'Çocuğum yaz okulundan eve yorgun ama mutlu mu dönecek?',
      'Programda dengeli — oyun, dinlenme, atölye — bir akış var mı?'
    ],
    bizden: "Mavi Mine Yaz Okulu'nda eğitim yılındaki programdan farklı bir tempo var. Daha çok bahçede, daha az kitap, daha çok keşif. Çocuk eve yorgun ama mutlu döner."
  },
  {
    color: 'grass',
    title: 'İyi yaz okulunun 5 özelliği',
    intro: 'Yaz okulu seçerken broşür değil, gerçek özelliklere bakın.',
    detail: 'İyi yaz okulunun belirgin 5 özelliği: <strong>(1)</strong> <em>Açık alan ağırlıklı</em> — çocuk yaz boyunca dışarıda olmalı, klimalı sınıfa hapsedilmemeli. <strong>(2)</strong> <em>Su etkinlikleri</em> — havuz, su oyunları, hatta sadece sulu sünger oyunu. Yazın olmazsa olmazı. <strong>(3)</strong> <em>Atölye çeşitliliği</em> — sanat, müzik, bahçe, mutfak, drama. <strong>(4)</strong> <em>Küçük gruplar</em> — yaz okulunda 30 kişilik gruplar olmaz. <strong>(5)</strong> <em>Esnek program</em> — yarım gün/tam gün, haftalık/aylık seçenekleri.',
    bullets: [
      'Çocuk günün ne kadarını açık havada geçirecek?',
      'Su etkinliği var mı (havuz, sulu oyun)?',
      'Hangi atölyeler var — gerçekten çeşitli mi, yoksa hep aynı mı?',
      'Grup büyüklüğü ne, yaş aralığı ne?',
      'Esnek katılım var mı (haftalık paket gibi)?'
    ],
    bizden: "Mavi Mine Yaz Okulu 2026'da: 900 m² bahçemiz, açık hava etkinlikleri, sulu oyunlar, tarım atölyeleri, drama, sanat, mutfak atölyeleri. 2-6 yaş, küçük gruplar."
  },
  {
    color: 'coral',
    title: 'Yaz okulu seçerken yapılan 3 büyük hata',
    intro: 'Bu yıl <strong>yapılmaması gerekenleri</strong> de açık konuşalım.',
    detail: '<strong>HATA 1: Yaz okulunu okul gibi sanmak.</strong> Yaz okulunda test, ödev, sıralı oturma olmamalıdır. Olursa, çocuğa yaz tatili kalmaz. <strong>HATA 2: "Ne kadar çok ders, o kadar iyi" mantığı.</strong> Yaz, çocuğun beyninin dinlendiği ve özgür keşfettiği zamandır. 5 ders üst üste yaz okulu, çocuğu yıpratır. <strong>HATA 3: Yaz okulu yerine 3 ay tablet.</strong> Bu en yıkıcı seçenek — tatil değil, gelişimsel duraklamadır.',
    bullets: [
      'Yaz okulundaki günlük programı görebilir miyim?',
      'Akademik (kitap, test) içerik ne kadar yer kaplıyor?',
      'Tablet, ekran kullanılıyor mu?',
      'Çocuğun "hiçbir şey yapmadığı" zamanı var mı (önemli)?'
    ],
    bizden: "Bizim yaz okulumuzda kitap yok, test yok, ekran yok. Sanat var, doğa var, oyun var, sessizlik var. \"Hiçbir şey yapmama\" da bir aktivite — çocuğun beynine alan tanırız."
  },
  {
    color: 'orange',
    title: 'Mavi Mine Yaz Okulu 2026: Programa hızlı bakış',
    intro: 'Bu yıl <strong>Mavi Mine Yaz Okulu 2026</strong> programımızda neler olacak — kısa bir özet.',
    detail: 'Programımız: <strong>(1)</strong> <em>Açık hava atölyeleri</em> — tarım, bahçe, hayvan dostlarımızla zaman. <strong>(2)</strong> <em>Su etkinlikleri</em> — havuz, sulu oyunlar, küçük su parkımız. <strong>(3)</strong> <em>Sanat atölyeleri</em> — boya, kil, doğa malzemesi ile sanat. <strong>(4)</strong> <em>Drama</em> — hikayeler canlandırma, kostümle oyun. <strong>(5)</strong> <em>Mutfak atölyesi</em> — basit tarifler, çocukların kendi yaptıkları. <strong>(6)</strong> <em>Oyunla İngilizce</em> — şarkı, hikaye, oyun. Yarım gün ve tam gün seçenekler. Haftalık paket alma seçeneği var.',
    bullets: [
      'Yaz okulu kayıt için ne yapmalıyım?',
      'Ne zaman başlıyor, ne zaman bitiyor?',
      'Fiyatlar nasıl?',
      'Sadece kayıtlı öğrencilere mi açık, dışarıdan kayıt alıyor musunuz?'
    ],
    bizden: "Yaz Okulu 2026 kayıtlarımız <strong>başladı</strong>. Dışarıdan kayıt alıyoruz — Mavi Mine'ye tüm yaz boyu öğrenci olarak gelen çocuklarımız var. Detaylı bilgi için Kestel'deki binamıza gelin ya da arayın: 0505 323 41 35."
  }
];

const FAQ = [
  { q: 'Mavi Mine Yaz Okulu 2026 ne zaman başlıyor?', a: 'Yaz okulu programımız Haziran ortasında başlar, Ağustos sonuna kadar devam eder. Tarihler için lütfen iletişime geçin.' },
  { q: 'Yaz okuluna hangi yaş aralığı kabul ediliyor?', a: '2-6 yaş arası çocuklarımızı kabul ediyoruz. Üç sınıfımız var (Minik Afacanlar, Meraklı Minikler, Gülen Yüzler).' },
  { q: 'Yaz okulu fiyatları nedir?', a: 'Fiyatlar yarım gün/tam gün ve katılım süresine göre değişir. Güncel fiyat bilgisi için 0505 323 41 35\'i arayabilirsiniz.' },
  { q: 'Mavi Mine öğrencisi olmayan çocuklar da yaz okuluna katılabilir mi?', a: 'Evet. Yaz okulumuz, Mavi Mine\'ye eğitim yılında kayıtlı olmayan çocuklara da açıktır.' }
];

const RELATED = [
  { href: 'blog-kestel-anaokulu-secimi.html', title: "Kestel'de Anaokulu Seçerken 7 Şey", eyebrow: 'Velilere notlar', color: 'orange' },
  { href: 'blog-kayit-yasi.html', title: 'Anaokulu Kayıt Yaşı — 2 mi 3 mü?', eyebrow: 'Karar Verme · Velilere notlar', color: 'grape' },
  { href: 'Mavi Mine Blog Anaokulunda STEAM.html', title: 'Anaokulunda STEAM — ne işe yarar?', eyebrow: 'Velilere notlar', color: 'teal' }
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
        <div className="section-label center">Yaz Okulu · Sezonsal</div>
        <h1>
          Kestel'de Yaz Okulu 2026<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>çocuğunuz için en iyisi hangisi?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          yaz boyu çocuk büyür — büyüteceğiniz yeri iyi seçin
        </p>
        <p className="blog-hero-lede">
          Okul kapanmaya yakın. Çocuğunuz heyecanlı, siz <em>biraz endişeli</em>. <strong>3 ay tatil, evde 3 ay 8 saat. Bu sürede ne yapacak?</strong> Yaz okulu mu, dededeki tatil mi, evde tablet mi? Bu yazıda Kestel'de yaz okulu seçerken nelere dikkat etmeniz gerektiğini ve yaz okulunun çocuğa gerçekten ne kazandırdığını anlatıyorum.
        </p>
        <div className="blog-hero-meta">
          <span className="blog-author">Hatice Adanur Şahin</span>
          <span className="blog-dot">·</span>
          <span>Pedagog, Mavi Mine Anaokulu Kurucusu</span>
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
          Yaz okulu, son 10 yılda <strong>standart hale gelmiş</strong> bir kavram. Eskiden "sadece anneler çalışıyorsa" tercih edilirdi, şimdi pek çok aile çocuğun gelişimi için tercih ediyor. Bu doğru bir tercih — yeter ki <em>doğru yaz okulu</em> seçilsin.
        </p>
        <p>
          Kestel'de yaz okulu sunan onlarca kurum var. Bazıları eğlence tabanlı (oyun, gezi), bazıları akademik tabanlı (test, kitap), bazıları doğa tabanlı (bahçe, atölyeler). Hangisi sizin çocuğunuza uygun? <strong>Çocuğunuzun ne kazanmasını istediğinize göre değişir.</strong>
        </p>
        <p>
          Bu yazıda <strong>iyi bir yaz okulunun 5 özelliği</strong>, <strong>yaz okulu seçerken yapılan 3 büyük hata</strong>, ve <strong>Mavi Mine Yaz Okulu 2026 programımızda neler olacağı</strong> hakkında bilgi var. Sezonsal bir yazı — bu yıl yaz planı yapan velilere.
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
        <h2>Sonuç: <em>yaz boyu çocuk büyür</em></h2>
        <p>
          Çocuğunuz bu yaz <strong>üç ay büyüyecek</strong>. Bu büyümenin nerede ve nasıl olacağı, sizin elinizde. İyi bir yaz okulu, çocuğun bu üç ayda hem dinlenmesini hem keşfetmesini sağlar.
        </p>
        <p>
          Kestel'de Mavi Mine olarak biz, bu yaz için 900 m² bahçemizi, atölyelerimizi, kadromuzu çocuklarınıza hazırlıyoruz. <em>Çocuğunuzla birlikte gelin, gezin, görün</em>. Eylülde değil, şimdi başlasın hazırlık.
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
        <div className="section-label center" style={{ color: 'var(--sun)' }}>Yaz Okulu 2026 kayıtları açık</div>
        <h2>Çocuğunuzla birlikte <em>bahçemizi gezin</em>.</h2>
        <p>
          Yaz Okulu 2026 programımızı yerinde görmek için sizi bekliyoruz. 900 m² bahçemizi, sulu oyun alanımızı, atölyelerimizi gösterelim.
        </p>
        <p style={{ marginBottom: 32 }}>
          <strong>Mavi Mine Anaokulu</strong> — Kestel'in göbeğinde, 2-6 yaş, 11 hafta yaz programı.
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
        <h2>Yaz Okulu Hakkında <em>Merak Edilenler</em></h2>
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
    <div data-screen-label="Blog · Yaz Okulu 2026">
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
