// Mavi Mine — Blog: Tuvalet Eğitimi

const SECTIONS = [
  {
    color: 'teal',
    title: 'Tuvalet eğitimi: kaç yaşta başlamalı? (Cevap şaşırtıcı)',
    intro: 'Eski kitaplar 18 ay derdi. Yeni kitaplar 24-36 ay arası diyor. Ama en doğru cevap <strong>çocuğa bağlı</strong>. Bazı çocuklar 20 aylıkken hazır, bazıları 40 aylıkken.',
    detail: 'Çocuğun hazır olduğunu nasıl anlarsınız? Birkaç işaret var: <strong>(1)</strong> Bezi 2-3 saat kuru kalıyor, <strong>(2)</strong> Tuvalet yaptığını fark ediyor (kaç dakika önce de olsa), <strong>(3)</strong> Tuvaletinizi merak ediyor, <strong>(4)</strong> Tuvalete giderim diyebiliyor (kelimeyle veya işaretle), <strong>(5)</strong> Pantolonunu indirip kaldırabiliyor. Bu beş işaretten dördü varsa, çocuk hazır demektir. Yoksa zorla başlamak <em>geri adım attırır</em>.',
    bullets: [
      'Çocuğunuz bezini 2-3 saat kuru tutabiliyor mu?',
      'Tuvalet yaptığını fark edip size söylüyor mu?',
      'Sizin tuvaletinize gelip merakla bakıyor mu?',
      'Pantolonunu kendi indirip giyebiliyor mu?'
    ],
    bizden: "Mavi Mine'de tuvalet eğitimi tamamlanmamış olarak gelen çocuklarımız var. Onları utandırmadan, panik yapmadan, sınıf öğretmeniyle anne arasında bir köprü kurarak süreci tamamlarız."
  },
  {
    color: 'rose',
    title: 'Panik veliyi ele veren 3 işaret',
    intro: 'Anaokulu kayıt randevularımda bazı veliler içeri girer girmez <em>"Çocuğum bezini bırakmadı, kabul ediyor musunuz?"</em> diye sorar. Konuşma açılmadan, çocuk tanıtılmadan, ilk soru bu. Bu cümleyi söyleten kaygı, çocuğa zaten geri yansımıştır.',
    detail: 'Panik veliyi şuradan anlarız: <strong>(1)</strong> Çocuğun her başarısızlığında daha çok asabileşir, <strong>(2)</strong> Kıyas yapar — "komşunun çocuğu, kardeşi, akrabası", <strong>(3)</strong> Eğitime başladığında geri dönmez, dayatır. Bunların hepsi çocuğa <em>"sen yetersizsin"</em> mesajı verir. Ve çocuk bu mesajı bedeniyle tepki olarak gösterir: bezini ödetmeye başlar, kabız olur, daha çok altına yapar.',
    bullets: [
      'Çocuğum altına yaptığında ben gerçekten sakin kalabiliyor muyum?',
      'Onu başkalarıyla kıyaslıyor muyum (eşim, anneler, akrabalar dahil)?',
      'Tuvalet eğitimi konusunda baskı altında hissediyor muyum?',
      'Çocuğumun bezini bırakmama nedeni gerçekten gelişimsel mi, yoksa benim aceleme tepki mi?'
    ],
    bizden: "Mavi Mine'de \"acele etmeyin\" demeyi sevgiyle yapıyoruz. Çünkü acelenin sonucunda en çok zarar gören çocuk olur. Sabırla, çocuğun ritmiyle yürüyen yol, en hızlı yoldur."
  },
  {
    color: 'orange',
    title: '"3 Günde Tuvalet Eğitimi" yöntemi: ne yazık ki çok riskli',
    intro: 'Sosyal medyada "3 günde tuvalet eğitimi" yöntemi yıllardır dolaşıyor. <strong>Eğitimci olarak söylüyorum: çocukların büyük bölümü için bu yöntem zarar verir.</strong>',
    detail: 'Yöntemin özü şöyle: "3 gün boyunca çocuğun bezini çıkar, evden çıkmayın, sürekli yanında olun, her 15 dakikada tuvalete götürün." Bu, bir kısım hazır çocukta işe yarar gibi görünür — çünkü çocuk zaten hazırdı, sadece <em>fırsat verildi</em>. Ama hazır olmayan çocukta yarattığı baskı, ileride <strong>tuvalete gitme korkusu, kabızlık, idrar kaçırma sorunu</strong> olarak döner.',
    bullets: [
      'Hızlı bir başarı için çocuğunuzu yorucu bir 3 gün yaşatmaya değer mi?',
      'Eğer 3 günde başarılı olmazsa çocuğa ne mesajı vermiş olursunuz?',
      'Çocuğunuz baskı altında öğrenmeye iyi tepki veren bir çocuk mu?',
      'Sabırla, bir-iki aylık doğal süreç yerine, 3 günlük yoğun bir süreci neden tercih ediyorsunuz?'
    ],
    bizden: "Bizim önerimiz hep aynı: <em>çocuğun ritminde gidin</em>. 1-2 ayda yumuşak bir geçiş, 3 günlük travmatik bir 'eğitim'den daha kalıcı, daha sağlıklıdır."
  },
  {
    color: 'grass',
    title: 'Anaokulu tuvalet eğitimine nasıl destek olur?',
    intro: 'İyi bir anaokulu, tuvalet eğitimi tamamlanmamış çocuğu kabul etmekten korkmaz. Çünkü <strong>sınıf ortamı, evden daha iyi bir tuvalet eğitimi ortamıdır</strong>. Akran etkisi büyük güçtür.',
    detail: 'Çocuk, diğer çocukların tuvalete gittiğini görür. "Onlar gibi ben de" der. Bu içsel motivasyon, evdeki tüm baskıdan daha güçlüdür. İyi bir anaokulunda öğretmen <em>kazaya hazır</em>, <em>utandırmadan temizler</em>, <em>düzenli aralıklarla tuvalete gitmeyi nazikçe hatırlatır</em>, <em>başarıyı kutlar, başarısızlığı dramatize etmez</em>.',
    bullets: [
      'Bezli çocuğu kabul ediyor musunuz?',
      'Tuvalet eğitiminde nasıl yardımcı oluyorsunuz?',
      'Kaza olduğunda nasıl yaklaşılıyor?',
      'Veli ile öğretmen arasında ne sıklıkta iletişim olur?',
      'Çocuk başına ayrı bir bez ünitesi var mı, yoksa toplu mu?'
    ],
    bizden: "Mavi Mine'de tuvalet eğitimi olmayan çocuk için \"bez köşesi\" vardır — özel, mahremiyet korunmuş bir yer. Kaza olunca utandırmadan giydirilir, kıyafetler poşetlenip eve gönderilir. Asla \"yine mi yaptın\" denmez."
  }
];

const FAQ = [
  { q: 'Tuvalet eğitimi en geç ne zaman tamamlanmalı?', a: 'Genel kabul: 4 yaşına kadar gündüzleri, 5 yaşına kadar gecesi bekleyebilir. Bu yaşlardan sonra hala tam bezsiz değilse, pediatrik bir değerlendirme önerilir. Ama 3-3.5 yaşta hala bezli olmak normaldir.' },
  { q: 'Çocuğum tuvalete oturmaktan korkuyor, ne yapayım?', a: 'Tuvalete korku çoğu zaman baskıyla gelişir. Geri çekilin. Çocuğunuzu tuvalete oturtmaya zorlamayın 2-3 hafta. Sonra oyunla, taklitle yeniden tanışın.' },
  { q: 'Anaokulu bezli çocuğu kabul eder mi?', a: 'İyi anaokulları kabul eder. Mavi Mine olarak biz, tuvalet eğitimi tamamlanmamış çocukları kabul ediyoruz ve süreçte aileye destek oluyoruz.' },
  { q: 'Kestel\'de bezli çocuğu kabul eden anaokulu var mı?', a: 'Mavi Mine Anaokulu Kestel\'de, tuvalet eğitimi olmayan çocuklarımız için özel bir yaklaşımımız var. Sınıf öğretmenimiz ve siz, çocuğun ritminde beraber yürürüz.' }
];

const RELATED = [
  { href: 'blog-saldirgan-cocuk.html', title: 'Çocuğum Saldırgan — ne yapmalıyım?', eyebrow: 'Davranış · Velilere notlar', color: 'coral' },
  { href: 'blog-kayit-yasi.html', title: 'Anaokulu Kayıt Yaşı — 2 mi 3 mü?', eyebrow: 'Karar Verme · Velilere notlar', color: 'grape' },
  { href: 'Mavi Mine Blog Anaokulunda Sevgi Egitimi.html', title: 'Sevgi Eğitimi — ne kazandırır?', eyebrow: 'Değerler · Duygusal gelişim', color: 'sun' }
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
        <div className="section-label center">Gelişim · Velilere notlar</div>
        <h1>
          Çocuğum Tuvaletini Tutamıyor<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>anaokulda alışır mı?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          panik yapmadan, çocuğun hızına saygıyla
        </p>
        <p className="blog-hero-lede">
          Telefonum bu soruyla en az haftada üç kez çalıyor: <strong>"Hatice Hanım, çocuğum üç buçuk yaşında ama hala beziyle uyuyor. Anaokulu kabul eder mi? Orada alışır mı?"</strong> Sesin ardındaki <em>kaygıyı, suçluluk duygusunu, biraz da utancı</em> duyabiliyorum. Bu yazı, o sese cevap için.
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
          Önce rahat bir nefes alın: <strong>3-4 yaş arası bezini bırakmamış olmak normaldir</strong>. Tıbbi bir sorun yoksa, her çocuğun kendi gelişim takvimi vardır. "Komşunun çocuğu 2 yaşında bıraktı" söylemleri kıyas üretir, kıyas baskı üretir, baskı geri adım atırır.
        </p>
        <p>
          Bu yazıda <strong>tuvalet eğitiminde gerçek olanı</strong> anlatacağım. Sosyal medyada "3 günde tuvalet eğitimi" diye gezen yöntemler hakkında da konuşacağım — çünkü çoğu, çocuğa zarar veriyor. 25 yıllık eğitimci tecrübemden, hem de iki çocuk annesi olarak bildiğim kadarıyla.
        </p>
        <p>
          <em>Bir uyarı:</em> Bu yazı genel pedagojik bilgi içerir; çocuğunuzun durumu özelse mutlaka pediatrik bir uzmanla görüşün. Burada size <strong>doğru soruları sormak</strong> ve gereksiz kaygıdan kurtulmak için bir çerçeve sunuyorum, kişisel tıbbi tavsiye değil.
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
        <h2>Sonuç: <em>çocuğun hızı, sizin hızınızdan değerlidir</em></h2>
        <p>
          Tuvalet eğitimi, ebeveynliğin en yıpratıcı süreçlerinden biri. Ama bu yıpranmanın çoğu, <strong>aslında çocuğun değil, sizin kaygınızdan kaynaklanır</strong>. Çocuğunuza güvenin — kendi vücudunu hissetmeyi, kontrolünü kurmayı, hazır olduğunda yapacaktır.
        </p>
        <p>
          <em>Bezini 4 yaşında bırakan çocuk ile 2 yaşında bırakan çocuk arasında, 5 yaşında hiçbir fark yoktur</em>. Bu cümleyi her panik veliye söylüyorum. Tıbbi bir sorun yoksa, sabır kazanır.
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
    <div data-screen-label="Blog · Tuvalet Eğitimi">
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
