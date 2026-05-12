// Mavi Mine — Blog: Anaokulunda STEAM

const SECTIONS = [
  {
    color: 'teal',
    title: 'STEAM aslında nedir, neden bu kadar konuşuluyor?',
    intro: 'STEAM kelimesi beş kelimenin baş harflerinden oluşur: Science (Bilim), Technology (Teknoloji), Engineering (Mühendislik), Arts (Sanat), Mathematics (Matematik). Ama bu beş kelimeyi ayrı ayrı görmek yanlıştır.',
    detail: 'STEAM\'in özü şu: <strong>Çocuk bir problemi çözerken bilim, sanat ve matematiği aynı anda kullanır.</strong> Bir kuleyi yapmak için planlar (mühendislik), şekilleri seçer (matematik), renkleri uyumlar (sanat), düşürmeden nasıl daha yüksek yapacağını dener (bilim). Bizim bunu beş ayrı ders gibi sunma çabamız, çocuğun beynine ters bir şeydir.',
    bullets: [
      'Sınıfta çocuk problem çözerken birden fazla beceri kullanıyor mu?',
      'Atölyelerde "deneme-yanılma" özgürlüğü var mı?',
      '"Yanlış cevap" diye bir şey var mı, yoksa keşif mi var?',
      'Çocuk sadece dinler mi, yoksa elleriyle yapar mı?'
    ],
    bizden: "Mavi Mine'de STEAM atölyelerimizde çocuk; bir köprü kurar, dökülünce neden olduğunu anlamaya çalışır, daha güçlüsünü inşa eder. Bunu yaparken \"şimdi bilim öğreniyorsun\" demeyiz — sadece eşlik ederiz."
  },
  {
    color: 'orange',
    title: '3 yaşındaki çocuk gerçekten kodlama öğrenebilir mi?',
    intro: 'Cevabım: <em>Hem evet, hem hayır.</em> Üç yaşında bir çocuk ekranda Python yazmayacak — ama "önce bunu, sonra bunu, sonra bunu" şeklinde sıralı düşünmeyi öğrenebilir. Buna <strong>algoritmik düşünce</strong> denir ve kodlamanın özüdür.',
    detail: 'Anaokulunda kodlama; ekransız, oyun temelli, mantık egzersizleri ile yapılır. Renkli oklarla bir kurbağayı havuza yönlendirmek, bir robotu adım adım hareket ettirmek, bir desenin tekrarını tahmin etmek. Bunlar kod yazmaktan önce gelen şeylerdir ve çocuğun matematiksel zekası için temeldir.',
    bullets: [
      'Çocuğun ekran süresi günde 30 dakikayı geçiyor mu?',
      'Kodlama "ekransız" mı yapılıyor, yoksa tablette mi?',
      'Algoritma kavramı oyunla mı, ezberle mi veriliyor?',
      'Çocuk "yaptığını" gösteriyor mu, yoksa "öğrendiğini" mi tekrarlıyor?'
    ],
    bizden: "Bizim STEAM atölyelerimizde tablet yok. Çocuklar oyuncak robotları yönlendirir, kartlarla algoritma kurar, kendi vücutlarıyla \"kodlanır\". Ekran, anaokulu yaşında çocuğun gelişimine zarar verir — buna inanıyoruz."
  },
  {
    color: 'grass',
    title: 'Sanat neden STEAM\'in S harfinden M\'sine kadar her yerde?',
    intro: 'STEAM aslında STEM olarak başladı (Bilim, Teknoloji, Mühendislik, Matematik). Sonra "A" eklendi — Sanat. Bunu eklemek tesadüf değildi.',
    detail: 'Çünkü <strong>yaratıcılık olmayan bir mühendis, sadece formül uygulayıcısıdır</strong>. Çocuğun bir problemi yeni bir yolla çözebilmesi için, önce <em>yaratıcı düşünme</em> alışkanlığı kazanması gerekir. Sanat budur — boyamak değil, bir şeyi farklı görme egzersizidir. STEAM\'siz sanat, sanat değildir. Sanat\'sız STEAM, ezbercidir.',
    bullets: [
      'Sanat dersi haftada kaç saat?',
      'Çocuğa "şunu boyacak şekilde" mi, yoksa "hayalindeki neyi yapacaksın?" mı soruluyor?',
      'Bilim atölyesi ile sanat atölyesi birbiriyle konuşuyor mu?',
      'Çocuğun kendi yaptığı eserler sınıfta sergileniyor mu, yoksa raflarda mı bekliyor?'
    ],
    bizden: "Mavi Mine'de her çocuğun kendi yaptığı eserler haftada bir kez sergilenir. \"Doğru çiçek\" yoktur; çocuğun çiçeği vardır. Sanat bizde bir hak değil, bir günlük rutindir."
  },
  {
    color: 'rose',
    title: 'Reklam STEAM\'i ile gerçek STEAM\'i nasıl ayırt edersiniz?',
    intro: 'Bir okul "STEAM programımız var" diyebilir ama uygulamada hiçbir şey yapmıyor olabilir. Bu yazıdaki en kritik bölüm bu.',
    detail: 'Gerçek STEAM\'in işaretleri: <strong>düzenli atölye saatleri</strong>, <strong>haftalık konu programı</strong>, <strong>eğitmenin alandan mezun olması</strong>, <strong>çocukların elleriyle ürettiği fiziksel şeyler</strong>, <strong>periyodik veliye gösterim</strong>. Reklam STEAM\'inin işaretleri: tabelada "STEAM" yazar ama atölye fotoğraflarında çocukların elleri görünmez, sadece masada duran hazır oyuncaklar görünür.',
    bullets: [
      'STEAM atölyesini görebilir miyim?',
      'Çocuğumun ürettiği bir şey eve geliyor mu, sınıfta sergileniyor mu?',
      'Programınız yazılı bir müfredata dayanıyor mu?',
      'STEAM eğitmeniniz hangi alandan mezun?'
    ],
    bizden: "Bizim STEAM atölyemiz okulu gezdiğimiz turun bir parçasıdır. Görmek istiyorsunuz, gösteriyoruz. Çocukların ürettiği fiziksel projeler her hafta velilerin görebileceği panoda."
  }
];

const FAQ = [
  { q: 'Anaokulunda STEAM kaç yaşında başlamalı?', a: 'STEAM aslında çocuğun doğuştan yaptığı bir şeyin organize hali olduğu için, 2 yaşından itibaren basit oyunlarla başlayabilir. 3-4 yaşta yapılandırılmış atölyelere geçilir.' },
  { q: 'Anaokulunda tablet/ekran kullanılmalı mı?', a: 'Mavi Mine olarak hayır diyoruz. 6 yaş altı çocukların STEAM eğitiminin ekransız yapılması, hem Amerikan Pediatri Akademisi\'nin hem de Türk pediatri kuruluşlarının önerisidir.' },
  { q: 'Çocuğum sanat dersini sevmiyor, STEAM yapmasın mı?', a: 'Çocuk sanatı sevmiyorsa, muhtemelen "yanlış yapma" baskısı yaşıyor. STEAM\'in özü hata yapma özgürlüğüdür — bu güveni kazandığında sanatı sever.' },
  { q: 'Kestel\'de STEAM eğitimi veren anaokulu var mı?', a: 'Evet, birkaç anaokulu STEAM programı sunuyor. Mavi Mine Anaokulu olarak biz, MEB programının yanında STEAM atölyelerini haftalık rutinin bir parçası olarak uygularız. Detaylı bilgi için Kestel\'deki binamıza gelin.' }
];

const RELATED = [
  { href: 'blog-21-yuzyil-becerileri.html', title: '21. Yüzyıl Becerileri — anaokulda kazanılır mı?', eyebrow: 'Pedagoji · Eğitim felsefesi', color: 'rose' },
  { href: 'blog-kestel-anaokulu-secimi.html', title: "Kestel'de Anaokulu Seçerken 7 Şey", eyebrow: 'Velilere notlar', color: 'orange' },
  { href: 'blog-yaz-okulu-2026.html', title: "Kestel'de Yaz Okulu 2026", eyebrow: 'Yaz Okulu · Sezonsal', color: 'sun' }
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
        <div className="section-label center">Velilere notlar · Pedagog gözüyle</div>
        <h1>
          Anaokulunda STEAM<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>ne işe yarar?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          bir velinin sorması gereken ama soramadığı sorular
        </p>
        <p className="blog-hero-lede">
          STEAM... Son yıllarda anaokullarının tabelalarında, broşürlerinde bu kelimeyi sık görmeye başladık. Bilim, teknoloji, mühendislik, sanat, matematik. Peki <strong>3 yaşındaki bir çocuğa mühendislik nasıl öğretilir?</strong> Daha kötüsü — gerçekten öğretilmesi <em>gerekir mi?</em>
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
          Kestel'de anaokulu arayan velilerden en çok aldığım sorulardan biri bu: <strong>"STEAM programınız var mı?"</strong> Var diyenler bile çoğunlukla ne yaptığını tam bilmiyor. Verdiğim cevap genelde velileri şaşırtıyor: <em>STEAM, çocuğa "bir şey öğretmek" değildir. STEAM, çocuğun zaten doğuştan yaptığı şeye saygı duymaktır.</em>
        </p>
        <p>
          Bu yazıda STEAM'in gerçekten ne olduğunu, anaokulunda nasıl uygulandığını ve velinin nelere dikkat etmesi gerektiğini anlatacağım. Yapay zekanın yazdığı dergi yazılarındaki şişirilmiş cümlelerden değil, 25 yıllık tecrübeden konuşacağım.
        </p>
        <p>
          Bir uyarı: STEAM "moda" oldu, herkes broşürüne bunu yazıyor. Ama uygulamasını yapan az. Bu yazıyı okuyunca, <strong>gerçek STEAM ile reklam STEAM'i</strong> arasındaki farkı ayırt edebileceksiniz.
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
        <h2>Sonuç: <em>STEAM bir reklam değil, bir alışkanlık</em></h2>
        <p>
          Çocuğunuza "21. yüzyıl becerileri" kazandırmak isterken, asıl yaptığınız şey onun <strong>doğal merakını korumaktır</strong>. Çocuk zaten doğuştan bilim insanıdır — soru sorar, dener, başaramaz, tekrar dener. Anaokulunun işi bu doğal süreci bozmamak; broşürdeki STEAM kelimesini ne yazık ki çoğu kez bu süreci bozmak için kullanır.
        </p>
        <p>
          Doğru anaokulunu bulduğunuzda anlayacaksınız: çocuğunuz akşam eve gelir, <em>"Bugün ne yaptın?"</em> dediğinizde size bir hikaye anlatır. Ezbere değil, gerçek bir hikaye. İşte STEAM'in işe yaradığı an, bu andır.
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
          STEAM atölyemizi yerinde görmek için sizi bekliyoruz. Sorularınıza Hatice Hanım ya da kadromuz cevap verir.
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
        <h2>STEAM Hakkında <em>Merak Edilenler</em></h2>
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
    <div data-screen-label="Blog · Anaokulunda STEAM">
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
