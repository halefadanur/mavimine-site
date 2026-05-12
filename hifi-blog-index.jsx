// Mavi Mine — Blog Index

const POSTS = [
  {
    color: 'orange',
    href: 'blog-kestel-anaokulu-secimi.html',
    eyebrow: 'Velilere notlar · Pedagog gözüyle',
    titleMain: "Kestel'de Anaokulu Seçerken",
    titleEm: 'dikkat edilecek 7 şey',
    excerpt: "Bir pedagog ve veliden, Kestel'de anaokulu arayan velilere — sormaya cesaret edemediğiniz ama mutlaka düşünmeniz gereken 7 soru.",
    date: '12 Mayıs 2026',
    readMin: 8,
  },
  {
    color: 'sky',
    href: 'blog-tuvalet-egitimi.html',
    eyebrow: 'Gelişim · Velilere notlar',
    titleMain: 'Çocuğum Tuvaletini Tutamıyor',
    titleEm: 'anaokulda alışır mı?',
    excerpt: 'Bezini bırakmamış çocuk için panik yapmadan ne yapmalı? "3 günde tuvalet eğitimi" yöntemi neden riskli? Pedagogtan ihtiyatlı rehber.',
    date: '14 Mayıs 2026',
    readMin: 8,
  },
  {
    color: 'teal',
    href: 'blog-anaokulunda-steam.html',
    eyebrow: 'Velilere notlar · Pedagog gözüyle',
    titleMain: 'Anaokulunda STEAM',
    titleEm: 'ne işe yarar?',
    excerpt: "Bilim, teknoloji, mühendislik, sanat, matematik... Peki 3 yaşındaki çocuğa mühendislik nasıl öğretilir? Reklam STEAM'i ile gerçek STEAM arasındaki fark.",
    date: '16 Mayıs 2026',
    readMin: 7,
  },
  {
    color: 'coral',
    href: 'blog-saldirgan-cocuk.html',
    eyebrow: 'Davranış · Velilere notlar',
    titleMain: 'Çocuğum Saldırgan Davranıyor',
    titleEm: 'ne yapmalıyım?',
    excerpt: 'Anaokulu yaşında vurma, ısırma, çığlık atma çoğunlukla normal — ama yönetmek gerekir. Etiketlemeden, cezalandırmadan, çocuğu anlayarak.',
    date: '19 Mayıs 2026',
    readMin: 9,
  },
  {
    color: 'rose',
    href: 'blog-21-yuzyil-becerileri.html',
    eyebrow: 'Pedagoji · Eğitim felsefesi',
    titleMain: '21. Yüzyıl Becerileri',
    titleEm: 'anaokulda kazanılır mı?',
    excerpt: 'Eleştirel düşünme, yaratıcılık, iletişim, işbirliği. Bu dört beceri sadece anaokulu çağında kazanılır. Neden? Hangileri öncelikli?',
    date: '22 Mayıs 2026',
    readMin: 8,
  },
  {
    color: 'sun',
    href: 'blog-yaz-okulu-2026.html',
    eyebrow: 'Yaz Okulu · Sezonsal',
    titleMain: "Kestel'de Yaz Okulu 2026",
    titleEm: 'en iyisi hangisi?',
    excerpt: 'Yaz okulu çocuğa ne kazandırır? İyi yaz okulunun 5 özelliği, seçim hataları, ve Mavi Mine Yaz Okulu 2026 programı.',
    date: '25 Mayıs 2026',
    readMin: 7,
  },
  {
    color: 'sun',
    href: 'blog-sevgi-egitimi.html',
    eyebrow: 'Değerler · Duygusal gelişim',
    titleMain: 'Sevgi Eğitimi',
    titleEm: 'ne kazandırır?',
    excerpt: 'Bir çocuğa sevmek nasıl öğretilir? Empati, sınır koyma, duygu tanıma. Anaokulundaki sevgi eğitimi, çocuğun yetişkinliğine kadar uzanır.',
    date: '28 Mayıs 2026',
    readMin: 7,
  },
  {
    color: 'grape',
    href: 'blog-kayit-yasi.html',
    eyebrow: 'Karar Verme · Velilere notlar',
    titleMain: 'Anaokulu Kayıt Yaşı',
    titleEm: '2 mi 3 mü?',
    excerpt: 'Çocuğumu kaç yaşında anaokuluna versem? 2 yaşında erken mi, 3 yaşında geç mi? Doğru yaş yok — doğru çocuk var. 5 hazırlık işareti.',
    date: '31 Mayıs 2026',
    readMin: 7,
  },
  {
    color: 'grape',
    href: 'blog-anaokulu-binasi.html',
    eyebrow: 'Güvenlik · Fiziksel ortam',
    titleMain: 'Anaokulu Binası',
    titleEm: 'ne kadar önemli?',
    excerpt: 'Apartman dairesinden bozma anaokulları neden tehlikelidir? Yangın çıkışı, tavan yüksekliği, doğal ışık, havalandırma, akustik — 7 somut neden.',
    date: '3 Haziran 2026',
    readMin: 9,
  },
];

function BlogIndexHero() {
  return (
    <section className="blog-index-hero">
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

      <div className="blog-index-hero-inner">
        <div className="section-label center">Mavi Mine'den yazılar</div>
        <h1>
          Velilere<br/>
          <em>notlar</em>
        </h1>
        <p>
          Bir pedagog, üç nesil eğitimci aileden bir kurucu, iki çocuk annesi olarak
          velilere açtığım not defteri. Anaokulu seçimi, çocuk gelişimi, davranış desteği,
          21. yüzyıl becerileri, sevgi eğitimi... <strong>Soruları yanıtlamak değil; doğru
          soruları kazandırmak</strong> niyetiyle yazıyorum.
        </p>
      </div>
    </section>
  );
}

function BlogIndexList() {
  return (
    <section className="blog-index-list">
      <div className="blog-index-list-inner">
        {POSTS.map((p, i) => (
          <a key={i} href={p.href} className={`index-card index-${p.color}`}>
            <div className="index-card-eyebrow">{p.eyebrow}</div>
            <h2>
              {p.titleMain}<br/>
              <em>{p.titleEm}</em>
            </h2>
            <p>{p.excerpt}</p>
            <div className="index-card-meta">
              <span>Hatice Adanur Şahin</span>
              <span className="meta-dot">·</span>
              <span>{p.date}</span>
              <span className="meta-read">{p.readMin} dk →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Blog">
      <Nav active="Blog" />
      <BlogIndexHero />
      <BlogIndexList />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
