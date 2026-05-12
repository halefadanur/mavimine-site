// Mavi Mine — Blog Index

const POSTS = [
  {
    color: 'orange',
    href: 'blog-kestel-anaokulu-secimi.html',
    eyebrow: 'Velilere notlar · Eğitimci gözüyle',
    titleMain: "Kestel'de Anaokulu Seçerken",
    titleEm: 'dikkat edilecek 7 şey',
    excerpt: "Bir eğitimci ve veliden, Kestel'de anaokulu arayan velilere — sormaya cesaret edemediğiniz ama mutlaka düşünmeniz gereken 7 soru.",
    date: '12 Mayıs 2026',
    readMin: 8,
  },
  // Yayın takvimi — sıradaki yazılar tarihinde geri eklenecek:
  //   14 May: blog-tuvalet-egitimi (sky)
  //   16 May: blog-anaokulunda-steam (teal)
  //   19 May: blog-saldirgan-cocuk (coral)
  //   22 May: blog-21-yuzyil-becerileri (rose)
  //   25 May: blog-yaz-okulu-2026 (sun)
  //   28 May: blog-sevgi-egitimi (sun)
  //   31 May: blog-kayit-yasi (grape)
  //    3 Haz: blog-anaokulu-binasi (grape)
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
          Üç nesil eğitimci bir aileden bir kurucu, iki çocuk annesi olarak
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
