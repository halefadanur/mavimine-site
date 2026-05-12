// Mavi Mine — Blog: Kestel'de Anaokulu Seçerken 7 Şey (ANA YAZI)

const SEVEN_QUESTIONS = [
  {
    color: 'teal',
    h: 'Bina anaokulu olarak mı inşa edilmiş, yoksa sonradan mı dönüştürülmüş?',
    intro: 'Bu soru, anaokulu seçiminin en az konuşulan ama en önemli sorusudur. Kestel\'de pek çok anaokulu, aslında apartman dairesi, eski bir evi veya dükkanı dönüştürerek hizmet veriyor. Görünüş aldatıcıdır — duvarlara renkli kelebekler yapıştırılınca her yer anaokulu gibi görünür.',
    detail: 'Ama çocuklar için bir mekan; tavan yüksekliğini, doğal ışığı, havalandırmayı, yangın merdivenini, acil çıkışı önceden hesaplanmış olmak zorundadır. Bunlar dönüşümle sağlanmaz; inşa aşamasında sağlanır.',
    questions: [
      'Bu bina anaokulu olarak mı inşa edildi?',
      'Yangın çıkışı kaç adet, nereden?',
      'Tavan yüksekliği ne kadar? (Sınıflarda en az 2.70 m olmalı)',
      'Her sınıfta pencere var mı, doğal ışık alıyor mu?'
    ],
    bizden: "Mavi Mine Anaokulu, Kestel'de anaokulu olarak özellikle inşa edilmiş bir binadır. Her sınıfımız doğal ışık alır, iki ayrı yangın çıkışımız var."
  },
  {
    color: 'grass',
    h: 'Bahçe var mı, sadece beton bir avlu mu?',
    intro: 'Çocukların gelişimi için açık alan isteğe bağlı değil, zorunludur. Ama Kestel\'de pek çok anaokulunda "bahçe" denen şey, aslında 50 m²\'lik beton bir avludan ibarettir. Bu çocuğun gelişimine fayda değil, zarar verir.',
    detail: 'Çocuğun bedenini geliştirmesi için koşacağı, tırmanacağı, toprağa dokunacağı bir alana ihtiyacı var. Aynı zamanda doğa, çocuğun bilişsel gelişiminin de en önemli besleyicisidir — kelebek izleyen bir çocuk, dikkat süresi gelişen bir çocuktur.',
    questions: [
      'Bahçe kaç metrekare?',
      'Toprak, çim ya da doğal zemin var mı, yoksa tamamen beton mu?',
      'Çocuklar günde kaç saat bahçede vakit geçiriyor?',
      'Yağmurlu havada da dışarı çıkıyorlar mı?'
    ],
    bizden: "Bizim 900 m²\'lik bahçemizde tarım atölyemiz, kum havuzumuz, gölgelik oyun alanlarımız var. Çocuklar her hava şartında dışarı çıkar."
  },
  {
    color: 'orange',
    h: 'Öğretmenler kim, kaç yıllık tecrübeli, hangi eğitimi almışlar?',
    intro: 'Bir anaokulunun kalitesi, öğretmeninin kalitesi kadardır. Diploma yeterli değil; deneyim de yeterli değil. Bunların yanına çocuk gelişimine olan inanç eklenmedikçe, hiçbir öğretmen iyi bir öğretmen olmaz.',
    detail: 'Kestel\'de anaokulu seçerken karşınızdaki kişinin öğretmen mi yoksa hizmet personeli mi olduğunu anlamak önemlidir. Pek çok kreşte sınıfta bulunan kişiler aslında eğitim diploması olmayan, çocuk bakıcılığı yapan kişilerdir. Bu yanlış değildir — ama velinin bilmesi gerekir.',
    questions: [
      'Sınıf öğretmenleri okul öncesi eğitimi mezunu mu?',
      'Yardımcı öğretmen var mı? (2-3 yaşta şart)',
      'Kadronuz ne kadar süredir burada çalışıyor?',
      'Montessori, Reggio Emilia gibi yaklaşımlar uygulanıyor mu?'
    ],
    bizden: "Mavi Mine'de altı öğretmenimiz ve yardımcı öğretmenlerimiz var. Kurucumuz Hatice Adanur Şahin Montessori eğitimi almış bir eğitimci. Kadromuz üç nesil eğitimci bir aileden geliyor."
  },
  {
    color: 'rose',
    h: 'Çocuğun bireysel gelişimi takip ediliyor mu?',
    intro: '"40 çocuğa bakıyoruz" diyen bir anaokulunda, sizin çocuğunuz sürünün bir üyesidir. Hâlbuki çocuğun bireysel takibi, sadece akademik gelişim için değil, duygusal güvenlik için de gereklidir.',
    detail: 'İyi bir anaokulunda her çocuğun gelişim dosyası vardır; periyodik olarak değerlendirilir; aileyle düzenli paylaşılır. Ayrıca psikolog ve dil-konuşma terapisti danışmanlığı olmalıdır.',
    questions: [
      'Çocuğumun periyodik gelişim raporu hazırlanacak mı?',
      'Psikolog ya da terapist danışmanlık veriyor mu?',
      'Aileyle ne sıklıkta birebir görüşme yapılıyor?',
      'Bir sorun çıktığında, ben nasıl öğrenirim?'
    ],
    bizden: "Çocuklarımızın yanında iki psikolog ve iki dil-konuşma terapisti danışman olarak görev yapar."
  },
  {
    color: 'sun',
    h: 'Beslenme nasıl sağlanıyor, mutfak nerede?',
    intro: 'Çocukların günde 2-3 öğün yediği bir yerde, yemek dışarıdan mı geliyor yoksa içeride mi pişiyor — bu fark, çocuğun sağlığı için birinci derece önemlidir.',
    detail: 'Catering yemek kötü demiyorum; iyi catering firmaları vardır. Ama içeride pişen yemek, anne yapımı kalitesindedir. Önemli soru: Menü şeffaf mı paylaşılıyor? Velinin ne yendiğini bilmesi şarttır.',
    questions: [
      'Yemek dışarıdan mı geliyor, içeride mi pişiyor?',
      'Mutfağınız var mı, görebilir miyim?',
      'Menü haftalık paylaşılıyor mu?',
      'Çocuğumun alerjisi var, nasıl takip edilir?'
    ],
    bizden: "Bizim kendi mutfağımız var. Her sabah taze yemek pişer; meyve aralarda, atıştırmalıklar evde annenin yapacağı kalitede."
  },
  {
    color: 'sky',
    h: 'Sınıf mevcudu kaç, öğretmen başına kaç çocuk düşüyor?',
    intro: 'Bu sorunun cevabı, aldığınız eğitimin kalitesini doğrudan belirler. Yirmi çocuğun olduğu bir sınıfta, çocuğunuz günde belki 2-3 kelime kuracak şekilde öğretmenle birebir konuşur.',
    detail: 'Yaşa göre uygun mevcutlar: 2-3 yaş için maksimum 10-12 çocuk (yardımcı öğretmen şart), 3-4 yaş için maksimum 12-15 çocuk, 5-6 yaş için maksimum 15-18 çocuk.',
    questions: [
      'Her sınıfta kaç çocuk var?',
      'Öğretmen başına kaç çocuk düşüyor?',
      'Yardımcı öğretmen küçük yaş sınıflarda var mı?'
    ],
    bizden: "Üç sınıfımız var — Minik Afacanlar (2 yaş), Meraklı Minikler (3-4 yaş), Gülen Yüzler (5-6 yaş). Sınıf mevcutlarımızı bilinçli olarak küçük tutuyoruz."
  },
  {
    color: 'grape',
    h: 'Güvenlik — sözde mi, gerçek mi?',
    intro: 'Hemen hemen her anaokulu "güvenliğimiz var" der. Peki bu cümlenin arkasında ne var?',
    detail: 'Gerçek güvenlik: kamera sayısı yeterli, kayıt süresi uzun, giriş-çıkış kontrollü, acil durum protokolleri belli, personel güvenlik soruşturması yapılmış.',
    questions: [
      'Kaç kamera var, kayıt ne kadar saklanıyor?',
      'Çocuğumu kim alabilir, nasıl kontrol ediliyor?',
      'Yangın tatbikatı ne sıklıkla yapılıyor?',
      'Personel güvenlik soruşturması yapılıyor mu?'
    ],
    bizden: "Mavi Mine'de 10 güvenlik kamerası var. Giriş-çıkış kontrollü, çocuğu kimin alacağı sistemde kayıtlı. Tüm personelimiz adli sicil belgeli."
  }
];

const FAQ = [
  { q: 'Kestel\'de anaokulu fiyatları ne kadar?', a: 'Kestel\'de anaokulu fiyatları, okulun yapısına ve programına göre büyük farklılık gösterir. Mavi Mine\'nin fiyat bilgisi için bizi arayabilirsiniz: 0505 323 41 35.' },
  { q: 'Anaokulu başlama yaşı kaç?', a: 'Genel olarak 2 yaşından (24 ay) itibaren başlayabilir. Mavi Mine\'de Minik Afacanlar sınıfımız 2 yaş için tasarlandı.' },
  { q: 'Kestel\'de Montessori anaokulu var mı?', a: 'Evet. Mavi Mine Anaokulu, MEB programının yanında Montessori yaklaşımını uygular.' },
  { q: 'Çocuğum daha önce kreşe gitmedi, alışma süreci nasıl?', a: 'Mavi Mine\'de kademeli alışma programı uygulanır; ilk günler kısa, ailenin de eşlik ettiği saatlerle başlar.' },
  { q: 'Tam gün ve yarım gün seçeneği var mı?', a: 'Evet, her ikisi de mevcuttur. Yarım gün 07:30-13:00, tam gün 07:30-18:30.' }
];

const RELATED = [
  { href: 'blog-anaokulu-binasi.html', title: 'Anaokulu Binası — ne kadar önemli?', eyebrow: 'Güvenlik · Fiziksel ortam', color: 'grape' },
  { href: 'blog-kayit-yasi.html', title: 'Anaokulu Kayıt Yaşı — 2 mi 3 mü?', eyebrow: 'Karar Verme · Velilere notlar', color: 'grape' },
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
        <div className="section-label center">Velilere notlar · Eğitimci gözüyle</div>
        <h1>
          Kestel'de Anaokulu Seçerken<br/>
          Dikkat Edilecek <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>7 Şey</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          iki çocuk annesi, üç kuşak eğitimci bir aileden
        </p>
        <p className="blog-hero-lede">
          Çocuğunuzu sabah uğurladığınızda kalbinizde küçük bir sızı oluyor mu? <em>"Acaba doğru yerde mi, mutlu mu, güvende mi?"</em> — bu sorular hepimizin sorularıdır. Ben de iki çocuk annesiyim; aynı zamanda üç nesil eğitimci bir ailenin kurucusu bir eğitimci. Bu yazıyı, <strong>bir velinin sormaya cesaret edemediği ama mutlaka düşünmesi gereken</strong> 7 soru için yazdım.
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
          Bursa Kestel'de bir anaokulu arıyorsanız, muhtemelen onlarca tabela görmüşsünüzdür. Hepsi gülen yüzlü çocuklar, renkli logolar, parlak vaatler. Peki <strong>iki anaokulu arasındaki gerçek farkı</strong> nereden anlayacaksınız?
        </p>
        <p>
          Bunu anlamanın tek yolu, doğru soruları sormaktır. Aşağıda Kestel'de anaokulu seçerken sormanız gereken 7 soruyu, neden bu soruların önemli olduğunu ve cevapları nasıl değerlendireceğinizi anlatıyorum.
        </p>
        <p>
          Bu yazıda kendi okulumdan da örnekler vereceğim — çünkü inandığımız şeyleri öğrenmek için en sade yol, onları yapan birinin ağzından dinlemektir. Ama amacım sizi ikna etmek değil, <strong>size doğru sorular kazandırmaktır.</strong>
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
        <h2 dangerouslySetInnerHTML={{ __html: item.h }} />
      </div>
      <div className="q-card-body">
        <p className="q-intro" dangerouslySetInnerHTML={{ __html: item.intro }} />
        <p dangerouslySetInnerHTML={{ __html: item.detail }} />
        <div className="q-questions">
          <div className="q-questions-label">Soracağınız sorular:</div>
          <ul>
            {item.questions.map((q, i) => <li key={i}>{q}</li>)}
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

function SevenQuestions() {
  return (
    <section className="blog-questions">
      <div className="blog-questions-inner">
        {SEVEN_QUESTIONS.map((item, i) => (
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
        <h2>Bonus: <em>kabul etmediğiniz okula da teşekkür edin</em></h2>
        <p>
          Kestel'de birçok anaokulu gezeceksiniz. Bazıları kalbinizi açacak, bazıları rahatsız edecek. <strong>İçinizden gelen sese güvenin</strong> — çocuk için ortam seçiminde sezgi de önemlidir.
        </p>
        <p>
          Kabul etmediğiniz okula da teşekkür edin. Hepsi çocukların eğitimi için emek harcıyor.
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
          Bu yazıyı okuduktan sonra kafanızda yüz tane soru olmuş olabilir. Hatice Hanım veya kadromuz sizi karşılar, binayı dolaşır.
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
        <h2>Kestel'de Anaokulu Hakkında <em>Merak Edilenler</em></h2>
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
    <div data-screen-label="Blog · Kestel'de Anaokulu Seçimi">
      <Nav active="Blog" />
      <BlogHero />
      <BlogIntro />
      <SevenQuestions />
      <BlogClosing />
      <BlogCTA />
      <FAQSection />
      {/* <RelatedPosts /> -- diğer yazılar yayına alındıkça açılacak */}
      <AuthorCard />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
