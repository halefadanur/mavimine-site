// Mavi Mine — Blog: Anaokulu Binası (7 bölüm)

const SECTIONS = [
  {
    color: 'rose',
    title: '1. Yangın Çıkışı: Tek kapılı bina, çocuk ölümü demek',
    intro: 'Anaokulu olarak inşa edilen binalarda <strong>en az iki ayrı yangın çıkışı</strong> zorunludur. Apartman dairesi tek kapılıdır. Bu, en kritik güvenlik farkıdır.',
    detail: 'Yangın çıkması durumunda her saniye önemlidir. Tek kapılı bir mekanda 20 çocuk varsa, panik anında çıkışta sıkışma yaşanır. Türk anaokulu yönetmeliği iki çıkış istemesinin sebebi tam olarak budur. Ama denetimsiz daire-anaokullarında bu kural göz ardı edilir. Görmek istemediğiniz bir gerçek: <em>her birkaç yılda Türkiye\'de daire-anaokulu yangınlarında çocuk kaybediliyor.</em>',
    bullets: [
      'Bina kaç yangın çıkışına sahip?',
      'Yangın merdiveni dış cephede mi, içte mi?',
      'Yangın söndürme tüpleri hangi noktalarda?',
      'Yangın algılama sistemi var mı, son ne zaman test edildi?'
    ],
    bizden: "Mavi Mine binası anaokulu olarak inşa edildiği için iki ayrı yangın çıkışı, dış cephe yangın merdiveni, otomatik algılama sistemi mevcut. Yangın tatbikatını yılda iki kez yaparız — çocuklarla beraber."
  },
  {
    color: 'orange',
    title: '2. Tavan Yüksekliği: Alçak tavanlı sınıf çocuğun zihinsel gelişimini bozar',
    intro: 'Bu duyduğunuzda inanmayabilirsiniz ama bilimsel bir gerçek: <strong>tavan yüksekliği, çocuğun yaratıcı düşünme kapasitesini etkiliyor</strong>. Minnesota Üniversitesi\'nin araştırması yüksek tavanlı odalarda yaratıcılığın arttığını, alçak tavanlı odalarda azaldığını gösterdi.',
    detail: 'Apartman dairesi tavan yüksekliği genellikle 2.40-2.60 metredir. Anaokulu yönetmeliği <em>en az 2.70 metre</em> tavan yüksekliği zorunlu kılar. Ama bu kuralın da ötesinde, 3 metre+ tavan ideal. Çünkü çocuk yukarıya baktığında <em>genişlik</em> hisseder. Bu his, beynine "hayal kur, yarat" sinyali gönderir.',
    bullets: [
      'Sınıf tavan yüksekliği kaç metre?',
      'Sınıfta basıklık hissi var mı, ferahlık mı?',
      'Asma tavan var mı (asma tavan tavanı düşürür)?',
      'Aydınlatma armatürleri çocukların başının çok yakınında mı?'
    ],
    bizden: "Mavi Mine sınıflarının net tavan yüksekliği 3.20 metredir. Çocuklar başını kaldırdığında geniş bir alan görür, bu görüş hayal gücüne destek olur."
  },
  {
    color: 'sun',
    title: '3. Doğal Işık: Yapay aydınlatmada uyku düzeni bozulur',
    intro: 'Çocuk gelişiminin temel ihtiyaçlarından biri <strong>doğal güneş ışığı</strong>dır. Daire-anaokullarında pek çok sınıf, sırt sırta dönüşümle yapay aydınlatma altında geçer.',
    detail: 'Doğal ışık D vitamini sentezini sağlar (kemik gelişimi), serotonin üretimini destekler (ruh hali), melatonin döngüsünü düzenler (uyku). Yapay aydınlatma bunların hiçbirini yapmaz. Hatta floresan ışıkları çocukta huzursuzluk yaratabilir. Her sınıfın <em>en az bir büyük penceresi</em> olması, anaokulu binası tasarımının vazgeçilmezidir.',
    bullets: [
      'Her sınıfta pencere var mı?',
      'Pencereler gün boyu güneş alıyor mu?',
      'Pencerelerin önü kapalı mı, açık mı?',
      'Aydınlatma LED mi, floresan mı?'
    ],
    bizden: "Mavi Mine'nin her sınıfında en az iki büyük pencere var, hepsi gün ışığı alır. Yapay aydınlatma LED, çocuk dostu sıcak ışık. Floresan yok."
  },
  {
    color: 'grass',
    title: '4. Havalandırma: Daire-anaokullarında hava "durur"',
    intro: 'Apartman dairelerinde merkezi havalandırma yoktur. Pencere açmak tek havalandırma yöntemidir. Bu, kışın imkansız, yazın sineklikle sınırlıdır.',
    detail: 'Çocuklar yoğun nefes alır, üst solunum yolu enfeksiyonlarını birbirlerine kolayca bulaştırır. <strong>Mekanik havalandırma sistemi</strong> (HVAC) olmayan bir anaokulunda, kış aylarında "toplu hastalık" kaçınılmazdır. Hijyen sadece yüzeyi silmek değildir; havayı temizlemektir.',
    bullets: [
      'Sınıfta mekanik havalandırma var mı, sadece pencere mi?',
      'Hava filtresi düzenli değiştiriliyor mu?',
      'İçeride hijyen kontrolleri nasıl yapılıyor?',
      'Hasta çocuk için ayrı bir oda var mı?'
    ],
    bizden: "Binamızda merkezi havalandırma sistemi var, filtreler düzenli değiştirilir. Hasta olan çocuk için ayrı bir bekleme odamız mevcut — diğer çocuklara bulaşma riski en aza indirilir."
  },
  {
    color: 'sky',
    title: '5. Bahçe: Daire-anaokullarında "bahçe" diye gösterilen şey beton avludur',
    intro: 'Bir önceki yazımızda da yazdığım gibi, bahçesiz anaokulu çocuk gelişimine ters bir kavramdır. Daire-anaokullarında genellikle ya hiç bahçe yoktur, ya da 50 m²\'lik beton bir alan vardır.',
    detail: 'Çocuğun günde en az 1-2 saat dışarıda olması gerekir. Açık alan, hem fiziksel hem zihinsel gelişimi için zorunlu. Bahçesiz anaokulu, çocuğun bir hapishanede günde 8 saat geçirmesi gibidir.',
    bullets: [
      'Bahçe doğal zeminli mi (toprak, çim) yoksa beton mu?',
      'Bahçede ağaç var mı, gölge sağlıyor mu?',
      'Tarım, hayvan ile temas gibi etkinlikler mümkün mü?',
      'Bahçede tehlikeli noktalar (dik düşüş, yola yakınlık) var mı?'
    ],
    bizden: "Mavi Mine'nin 900 m² bahçesi var. Toprak, çim, tarım alanı, kum havuzu, gölgelik oyun bölümleri ile çocuk gerçekten doğa içinde."
  },
  {
    color: 'grape',
    title: '6. Akustik: Daire-anaokulları gürültü kuyusu olur',
    intro: 'Sınıfta 15 çocuk konuşur, oynar, koşar. Bu sesler bir apartman dairesinde <strong>yankı yapar</strong>. Çünkü mekan akustik için tasarlanmamıştır.',
    detail: 'Yüksek yankı çocukta konsantrasyon kaybı, baş ağrısı, hatta işitme problemine yol açabilir. Anaokulu olarak tasarlanan binalarda <em>akustik panel, halı, ses emici tavan</em> gibi unsurlar planlanır. Daire-anaokullarında bunlar sonradan eklenmeye çalışılır ama hiçbir zaman aynı sonucu vermez.',
    bullets: [
      'Sınıfta yankı duyuluyor mu?',
      'Tavan ses emici malzemeden mi?',
      'Yere halı / akustik kaplama var mı?',
      'İki sınıf arası geçiş duyuluyor mu?'
    ],
    bizden: "Sınıflarımız akustik panellerle donatılmıştır. Tavanlarda ses emici malzemeler, zeminde çocuk dostu ses-yutucu kaplama var. Çocuklar konuşurken kendi seslerini duyabilirler."
  },
  {
    color: 'teal',
    title: '7. Tahliye Planı: Daire-anaokulları planlanamaz',
    intro: 'Deprem, yangın, sel — kriz durumlarında anaokulundan tahliye, <strong>önceden planlanmış olmalı</strong>. Apartman dairesinde tahliye planı yapmak mümkün değildir çünkü yapı uygun değil.',
    detail: 'Anaokulu olarak inşa edilen binalar, kriz anında çıkış yollarını <em>geniş, açık, çift yönlü</em> olacak şekilde tasarlar. Çocuklar nasıl çıkacağını bilir, öğretmenler nasıl yönlendireceğini bilir. Bu, yıllık tatbikatlarla pekiştirilir.',
    bullets: [
      'Acil durum çıkış planı duvarda asılı mı?',
      'Çocuklara çıkış yolları öğretiliyor mu?',
      'Yılda kaç kez tatbikat yapılıyor?',
      'Çocuk listesi her gün kim alır?'
    ],
    bizden: "Tüm sınıflarımızda acil durum çıkış planı asılı. Çocuklarımız kendi sınıflarının çıkış yolunu bilirler. Yılda iki yangın tatbikatı, bir deprem tatbikatı yaparız."
  }
];

const FAQ = [
  { q: 'Daire-anaokulu yasal mı?', a: 'Bazı şartlarda evet, ama denetimden kaçırılan pek çok mekan yasal değil. Kayıt yaptırmadan önce okulun MEB onayını ve denetim sicilini sormak hakkınızdır.' },
  { q: 'Anaokulunda kaç metrekare alan olmalı?', a: 'Çocuk başına minimum 2.5 m² iç mekan, ideal 4 m². Ayrıca açık alan (bahçe) çocuk başına minimum 5 m² olmalı.' },
  { q: 'Bina eski olabilir mi?', a: 'Evet, ama anaokulu olarak inşa edilmiş veya gerçek anlamda dönüştürülmüş olması şartıyla. "Eski" değil, "yapı amacı" önemlidir.' },
  { q: 'Kestel\'de bahçeli anaokulu nasıl bulunur?', a: 'Kestel\'de pek çok anaokulu var ama bahçe imkanı sınırlı kalanlar çoğunlukta. Mavi Mine Anaokulu olarak 900 m² bahçemizle, anaokulu olarak özellikle inşa edilmiş binamızla Kestel\'de ayrıcalıklı bir konumdayız.' }
];

const RELATED = [
  { href: 'blog-kestel-anaokulu-secimi.html', title: "Kestel'de Anaokulu Seçerken 7 Şey", eyebrow: 'Velilere notlar', color: 'orange' },
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
        <div className="section-label center">Güvenlik · Fiziksel ortam</div>
        <h1>
          Anaokulu Binası<br/>
          <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}>ne kadar önemli?</em>
        </h1>
        <p className="blog-hero-sub handwritten" style={{ fontSize: 28, color: 'var(--teal-deep)', marginTop: 8 }}>
          neden apartman dairesi olmamalı: 7 gerçek neden
        </p>
        <p className="blog-hero-lede">
          Çocuğunuzu bir anaokuluna emanet ettiğinizde, <strong>onu hangi binaya bıraktığınız</strong> belki en az düşündüğünüz şeydir. Halbuki bu, en kritik kararlardan biri. Çünkü <em>anaokulu olarak inşa edilmemiş bir binada</em>, çocuğunuzun maruz kalacağı riskler, en titiz programın bile çözemeyeceği türden.
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
          Bu yazı belki tüm yazılarımın en sertidir. Sert olmak zorunda — çünkü konu çocukların hayatı. Kestel'de anaokulu arayan velilere açık bir gerçek söyleyeyim: <strong>bölgede pek çok anaokulu, aslında apartman dairesinden dönüştürülmüştür</strong>. Dış cephe boyanmış, kapısına tabela asılmış, içine renkli sandalyeler konulmuş. Ama yapı, bir anaokulu yapısı değildir.
        </p>
        <p>
          Bu yapısal eksiklik, görünüşte fark edilmez. Sınıflar şirin gelebilir, öğretmenler güler yüzlü olabilir. Ama <em>yangın çıkışı yetersizse, tavan alçaksa, doğal ışık yoksa, havalandırma yapay ise</em> — çocuğunuzun hem fiziksel hem zihinsel gelişimi etkilenir.
        </p>
        <p>
          Aşağıda anaokulu binasının neden apartman dairesi olmaması gerektiğinin 7 somut nedenini sıralıyorum. Bu yazıyı okuduktan sonra, gezdiğiniz her anaokulunda yeni bir gözle bakacaksınız.
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
        <h2>Sonuç: <em>bina, eğitimden önce gelir</em></h2>
        <p>
          Bir anaokulu seçerken eğitim programını sormadan önce, <strong>binayı sorgulayın</strong>. Çünkü en iyi program bile, yanlış binada çalışmaz. Yangın çıkışı tek olan bir okulda yapılan Montessori, çocuğunuzun hayatı için yeterli güvenceyi vermez.
        </p>
        <p>
          Bu yazıyı okuyup gezdiğiniz okullara şüpheyle baktığınız için kendinizi suçlu hissetmeyin. <em>Çocuğunuz için bu sorgulamayı yapmak, sevgi göstergesidir.</em> İyi anaokulu bulduğunuzda, oradaki herkes sizin sorgulamanızdan memnun olacaktır. Çünkü iyi anaokulu, soruları sever.
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
        <h2>Çocuğunuzla birlikte <em>binayı gezin</em>.</h2>
        <p>
          Anaokulu olarak inşa edilmiş binamızı yerinde görmek için sizi bekliyoruz. Yangın çıkışlarımızı, sınıf yüksekliklerimizi, havalandırma sistemimizi, bahçemizi — her şeyi açık açık gösteririz.
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
        <h2>Anaokulu Binası Hakkında <em>Merak Edilenler</em></h2>
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
    <div data-screen-label="Blog · Anaokulu Binası">
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
