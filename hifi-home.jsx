// Mavi Mine — Anasayfa (canlı palet, broşür DNA'sı, MAMİNO öğrenci profili)

const PILLARS = [
  { key: 'M', word: 'Mutlu',        color: 'sun',    note: 'Kendi yeteneklerini fark eden, başardıklarının tadını çıkaran, kendisiyle barışık.' },
  { key: 'A', word: 'Açık Fikirli', color: 'orange', note: 'Yapılagelenle yetinmeyen, “nasıl daha iyisini yaparım?” diyen, yaratıcı ve yenilikçi.' },
  { key: 'M', word: 'Meraklı',      color: 'rose',   note: 'Her sorusu bir başka sorunun kapısını aralayan, hevesle keşfeden.' },
  { key: 'İ', word: 'İnsancıl',     color: 'grass',  note: 'Milli ve evrensel değerlerle donanmış, farklılıklara saygı duyan.' },
  { key: 'N', word: 'Nitelikli',    color: 'sky',    note: 'Eleştirel, analitik düşünen; bilgiyi süzen, medya okuryazarı.' },
  { key: 'O', word: 'Onurlu',       color: 'grape',  note: 'Özdenetim sahibi, değerleri özümsemiş, hak ederek yetişen.' },
];

const REASONS = [
  { color: 'teal',   title: 'Eğitimci Gelenek',  body: 'Üç nesildir aynı işi yapan bir aile. Çocuğa nasıl bakılır, biz büyürken öğrendik.' },
  { color: 'orange', title: 'Çağdaş Eğitim',     body: 'MEB programı + Montessori. Bilimsel pedagoji, çağdaş yaklaşımlar.' },
  { color: 'grass',  title: 'Uzman Kadro',       body: 'Alanında mezun, deneyimli öğretmenler. Üç nesil eğitimci aile.' },
  { color: 'sky',    title: 'Etkin Rehberlik',   body: 'Sürekli takip, periyodik gelişim testleri, veli paylaşımı.' },
  { color: 'sun',    title: 'Bireye Özel',       body: 'Psikolog ve dil-konuşma terapisti danışmanlığı, kişiselleştirilmiş plan.' },
  { color: 'rose',   title: 'Sağlıklı Beslenme', body: 'Kendi mutfağımızdan, ev ortamı sıcaklığında seçilmiş ürünler.' },
  { color: 'grape',  title: 'Güvenli Ortam',     body: 'Anaokulu olarak inşa edilmiş bina, 10 kamera, 900 m² bahçe.' },
  { color: 'coral',  title: 'Sevgi Dersi',       body: 'Değerler eğitimi tüm yaşlarda. Rol model olan eğitimciler.' },
];

const PROGRAMS = [
  { color: 'orange', title: 'Drama',         note: 'Hayal gücü, ifade, özgüven' },
  { color: 'teal',   title: 'STEAM & Kodlama', note: 'Bilim, sanat, problem çözme' },
  { color: 'grass',  title: 'Tarım Etkinlikleri', note: 'Bahçemizde topraktan sofraya' },
  { color: 'sky',    title: 'Yüzme',         note: 'Kardeş kurumumuzda haftalık' },
  { color: 'rose',   title: 'İngilizce',     note: 'Oyunla, şarkıyla, doğal akışta' },
  { color: 'sun',    title: 'Kum Havuzu',    note: 'Duyusal gelişim, doku, denge' },
];

function Hero() {
  return (
    <section className="home-hero">
      {/* Boya lekesi süslemeler */}
      <svg className="blob" style={{ top: 60, right: '46%', width: 110, height: 110 }} viewBox="0 0 100 100">
        <path d="M50 8 Q66 22 82 30 Q72 50 80 70 Q60 76 50 92 Q40 76 20 70 Q28 50 18 30 Q34 22 50 8" fill="var(--sun)" opacity="0.45"/>
      </svg>
      <svg className="blob" style={{ bottom: 80, left: 30, width: 70, height: 70 }} viewBox="0 0 60 60">
        <circle cx="22" cy="30" r="16" fill="var(--rose)" opacity="0.45"/>
        <circle cx="44" cy="22" r="10" fill="var(--teal)" opacity="0.4"/>
      </svg>
      <svg className="blob" style={{ top: 200, right: 30, width: 80, height: 80 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="18" fill="var(--grape)" opacity="0.35"/>
      </svg>

      <div className="home-hero-content">
        <div className="hero-eyebrow">2—6 yaş · Mavi Mine Anaokulu · Bursa</div>
        <h1>
          Çocuğun <em>mavisi,</em><br/>
          içindeki <span className="accent">mine.</span>
        </h1>
        <p className="hero-sub">
          Mavi Mine; çocuğun sınırsız hayalini ve içindeki değeri merkeze alan,
          sevgi verip sevgi alabilen,
          <span className="scribble" style={{ color: 'var(--orange)', fontSize: '1.5em', marginLeft: 8 }}>
            mutlu çocuklar
          </span> yetiştiren bir anaokuludur.
        </p>
        <div className="hero-actions">
          <a href="iletisim.html" className="btn orange">
            Okulumuzu ziyaret edin
            <span className="arrow">→</span>
          </a>
          <a href="hakkimizda.html" className="btn ghost">Hikâyemiz</a>
        </div>
      </div>

      <div className="home-hero-visual">
        <div className="hero-badge">
          <div className="hero-badge-eyebrow">Kayıtlarımız Sürüyor</div>
          <div className="hero-badge-call">Mavi Mine'miz Olun</div>
        </div>
        <div className="hero-img-main">
          <img src="images/team/team-04.jpeg" alt="Hatice Adanur Şahin" onError={(e) => { e.target.style.display='none'; }}/>
          <div className="hero-img-caption">
            <div className="cap-mono">kurucu · pedagog</div>
            <div className="cap-name">Hatice Adanur Şahin</div>
          </div>
        </div>
        <div className="hero-img-accent ph teal">[bahçede oyun]</div>
      </div>
    </section>
  );
}

function MaminoSection() {
  return (
    <section className="mamino-block">
      <div className="mamino-inner">
        <div className="mamino-head">
          <div className="section-label center">İsmimizin Hikâyesi</div>
          <h2 style={{ letterSpacing: 0 }}>
            <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '0.55em', display: 'block', marginBottom: 8 }}>iki kelime, iki söz:</span>
            <span style={{ color: 'var(--teal-deep)' }}>Mavi</span>
            <span style={{ color: 'var(--ink-light)', margin: '0 14px', fontWeight: 400 }}>·</span>
            <span style={{ color: 'var(--orange)' }}>Mine</span>
          </h2>
          <p className="mamino-story">
            Bir okulun adı, bir okulun ruhudur. <strong>"Mavi Mine"</strong> iki kelimeden çok, <em>iki vaat:</em>
            çocuğun sınırsız ufku ve içindeki biricik değer.
          </p>
        </div>

        <div className="mamino-cards">
          <div className="mamino-side mavi-side">
            <div className="smile-circle teal" style={{ width: 72, height: 72, fontSize: 34 }}>M</div>
            <div className="handwritten mamino-side-label" style={{ color: 'var(--teal-deep)' }}>mavi</div>
            <p>
              <strong style={{ color: 'var(--teal-deep)' }}>Mavi</strong>; gökyüzünün ve denizin rengi.
              Sonsuzluğun, sınırsız hayalin rengi. Çocuğa <em>"sen büyüyebilirsin, sen hayal kurabilirsin"</em> demenin rengi.
            </p>
            <div className="mamino-mini-grid">
              {[
                { l: 'M', w: 'Merak',   color: 'sky' },
                { l: 'A', w: 'Açıklık', color: 'teal' },
                { l: 'V', w: 'Vicdan',  color: 'grape' },
                { l: 'İ', w: 'İlham',   color: 'sun' },
              ].map((it, i) => (
                <div key={i} className="mamino-mini">
                  <div className={`smile-circle ${it.color}`} style={{ width: 44, height: 44, fontSize: 20 }}>{it.l}</div>
                  <div className="mamino-mini-w">{it.w}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mamino-side mine-side">
            <div className="smile-circle orange" style={{ width: 72, height: 72, fontSize: 34 }}>M</div>
            <div className="handwritten mamino-side-label" style={{ color: 'var(--orange)' }}>mine</div>
            <p>
              <strong style={{ color: 'var(--orange)' }}>Mine</strong>; sabırla işlenen, ışıkla parlayan en değerli taşlardan biri.
              Her çocuğun içinde böyle bir mine vardır — kendine özgü, biricik, <em>parlatılmayı bekleyen.</em>
            </p>
            <div className="mamino-mini-grid">
              {[
                { l: 'M', w: 'Marifet', color: 'orange' },
                { l: 'İ', w: 'İncelik', color: 'rose' },
                { l: 'N', w: 'Nezaket', color: 'grass' },
                { l: 'E', w: 'Emek',    color: 'coral' },
              ].map((it, i) => (
                <div key={i} className="mamino-mini">
                  <div className={`smile-circle ${it.color}`} style={{ width: 44, height: 44, fontSize: 20 }}>{it.l}</div>
                  <div className="mamino-mini-w">{it.w}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mamino-footer">
          <blockquote>
            Çocuğun <em style={{ color: 'var(--teal-deep)' }}>mavisini</em> kısıtlamayan;<br/>
            içindeki <em style={{ color: 'var(--orange)' }}>mineyi</em> sevgiyle parlatan bir okul.
          </blockquote>
          <a href="hakkimizda.html" className="btn ghost">İsmimizin tüm hikâyesi →</a>
        </div>
      </div>
    </section>
  );
}

function ProfilePreview() {
  const PROFILE = [
    { color: 'grass',  emoji: '🌱', title: 'Meraklıdır',          desc: 'Soru sormaktan korkmaz, çünkü burada her soruya kıymet verilir.' },
    { color: 'teal',   emoji: '🌿', title: 'Cesurdur',             desc: 'Denemekten, hata yapmaktan, yeniden başlamaktan çekinmez.' },
    { color: 'rose',   emoji: '🌼', title: 'Naziktir',             desc: 'Birbirine, kendine, doğaya saygıyı yaşarken öğrenir.' },
    { color: 'sun',    emoji: '🌳', title: 'Sorumluluk Sahibidir', desc: 'Kendi işini yapmayı, yardım etmeyi içselleştirir.' },
    { color: 'orange', emoji: '🌻', title: 'Yaratıcıdır',          desc: 'Hayal kurmaktan, üretmekten zevk alır.' },
    { color: 'grape',  emoji: '🌷', title: 'Mutludur',             desc: 'Sevildiğini, görüldüğünü, değerli olduğunu bilir.' },
  ];
  return (
    <section className="profile-preview">
      <div className="profile-preview-inner">
        <div className="profile-preview-head">
          <div className="section-label center">Mavi Mine'nin Çocukları</div>
          <h2>Bu çocuklar <em>nasıl çocuklar?</em></h2>
          <p className="profile-preview-lede">
            Mavi Mine bir kalıp değil, bir <strong>ortamdır.</strong> Her çocuk farklıdır —
            kimi sessizdir, kimi koşar; biz hiçbir çocuğu şablona sığdırmaya çalışmayız.
            Burada büyüyen çocuklar, zamanla şu sıfatlarda buluşur:
          </p>
        </div>
        <div className="profile-preview-grid">
          {PROFILE.map((it, i) => (
            <div key={i} className="profile-preview-card">
              <div className="profile-preview-emoji">{it.emoji}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="hakkimizda.html" className="btn orange">Çocuk profilimizin tamamı →</a>
        </div>
      </div>
    </section>
  );
}

function HeritageSection() {
  return (
    <section className="heritage">
      <div className="heritage-inner">
        <div className="heritage-text">
          <div className="section-label">Aile Mirasımız</div>
          <h2>Üç nesil, <em>altı öğretmen.</em></h2>
          <p>
            Mavi Mine, bir ailenin <strong>üç kuşaktır eğitimci</strong> olduğu bir mirastan doğdu.
            Bugün altı öğretmen aynı çatı altında, aynı sevgi dilini konuşuyor.
            Kurucumuz <strong>Hatice Adanur Şahin</strong> Montessori eğitimi almış bir pedagog;
            okulumuz, anaokulu olarak <strong>özellikle inşa edilmiş</strong> bir bina ile
            <strong> 900 m² bahçe</strong> üzerinde kuruldu.
          </p>
          <p>
            Çocuklarımızın yanında <strong>iki psikolog</strong> ve
            <strong> iki dil-konuşma terapisti</strong> danışman olarak görev yapar.
            Her çocuğun gelişimi ayrı ayrı izlenir, takip edilir.
          </p>
          <a href="hakkimizda.html" className="btn ghost" style={{ marginTop: 8 }}>
            Hikâyemizi okuyun →
          </a>
        </div>
        <div className="heritage-stats">
          <div className="stat-card stat-teal">
            <div className="stat-num">3</div>
            <div className="stat-label">nesil eğitimci</div>
          </div>
          <div className="stat-card stat-orange">
            <div className="stat-num">6</div>
            <div className="stat-label">öğretmen kadro</div>
          </div>
          <div className="stat-card stat-grass">
            <div className="stat-num">900<span>m²</span></div>
            <div className="stat-label">özel bahçe</div>
          </div>
          <div className="stat-card stat-rose">
            <div className="stat-num">10</div>
            <div className="stat-label">güvenlik kamerası</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonsSection() {
  return (
    <section className="reasons">
      <div className="reasons-inner">
        <div className="reasons-head">
          <div className="section-label center">Neden Mavi Mine?</div>
          <h2>Sekiz sebep, <span className="handwritten" style={{ color: 'var(--rose)', fontSize: '1.1em' }}>bir okul</span></h2>
        </div>
        <div className="reasons-grid">
          {REASONS.map((r, i) => (
            <div key={i} className="reason">
              <div className={`smile-circle ${r.color}`}>
                <SmileIcon />
              </div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmileIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="11" cy="13" r="1.6" fill="currentColor"/>
      <circle cx="21" cy="13" r="1.6" fill="currentColor"/>
      <path d="M 9 19 Q 16 25 23 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function ProgramsSection() {
  return (
    <section className="programs">
      <div className="programs-inner">
        <div className="programs-head">
          <div className="section-label">Programlarımız</div>
          <h2>Çocuklar her gün <em>yeni bir kapı</em> aralar.</h2>
          <p className="lede">
            MEB programının yanında zenginleştirilmiş atölyeler — her biri
            farklı bir gelişim alanını besler.
          </p>
        </div>
        <div className="programs-grid">
          {PROGRAMS.map((p, i) => (
            <div key={i} className={`prog-card prog-${p.color}`}>
              <div className="prog-ic">
                <ProgIcon name={p.title} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgIcon({ name }) {
  const map = {
    'Drama':         <path d="M8 28 Q16 8 24 28 M12 22 H20" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round"/>,
    'STEAM & Kodlama': <g><circle cx="16" cy="16" r="3" fill="currentColor"/><circle cx="6" cy="10" r="2" fill="currentColor"/><circle cx="26" cy="10" r="2" fill="currentColor"/><circle cx="6" cy="22" r="2" fill="currentColor"/><circle cx="26" cy="22" r="2" fill="currentColor"/><path d="M16 16 L6 10 M16 16 L26 10 M16 16 L6 22 M16 16 L26 22" stroke="currentColor" strokeWidth="1.6"/></g>,
    'Tarım Etkinlikleri': <g><path d="M16 28 V14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M16 14 Q9 8 8 14 Q14 14 16 14 Z" fill="currentColor"/><path d="M16 14 Q23 8 24 14 Q18 14 16 14 Z" fill="currentColor" opacity="0.7"/></g>,
    'Yüzme':         <g><path d="M3 22 Q8 18 13 22 T23 22 T29 22" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"/><circle cx="11" cy="11" r="3" fill="currentColor"/><path d="M14 14 L20 16 L24 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></g>,
    'İngilizce':     <g><rect x="6" y="9" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M11 14 H21 M11 18 H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></g>,
    'Kum Havuzu':    <g><path d="M4 24 Q16 18 28 24" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round"/><circle cx="10" cy="13" r="2" fill="currentColor"/><circle cx="22" cy="13" r="2" fill="currentColor"/><circle cx="16" cy="9" r="2" fill="currentColor"/></g>,
  };
  return <svg width="32" height="32" viewBox="0 0 32 32">{map[name]}</svg>;
}

function GardenStrip() {
  return (
    <section className="garden-strip">
      <div className="garden-grid">
        <div className="ph teal" style={{ aspectRatio: '4/5' }}>[bahçede oyun]</div>
        <div className="garden-text">
          <div className="section-label">Bahçemiz</div>
          <h2>Dokuz yüz metrekare <em>açık hava sınıfı.</em></h2>
          <p>
            Anaokulu olarak inşa edilmiş binamızın etrafında 900 m²'lik bir bahçe var.
            Çocuklar her hava şartında dışarıda — koşar, tırmanır, toprağı eker, kelebek izler.
          </p>
          <p className="bubble">Çünkü en iyi sınıf, gökyüzünün altındadır 🌿</p>
        </div>
        <div className="ph grass" style={{ aspectRatio: '1' }}>[tarım atölyesi]</div>
        <div className="ph sun" style={{ aspectRatio: '3/4' }}>[kum havuzu]</div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="home-quote">
      <svg style={{ position: 'absolute', top: 40, left: '15%', width: 60, height: 60 }} viewBox="0 0 60 60">
        <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--sun)" opacity="0.7"/>
      </svg>
      <svg style={{ position: 'absolute', bottom: 60, right: '12%', width: 50, height: 50 }} viewBox="0 0 60 60">
        <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--rose)" opacity="0.7"/>
      </svg>
      <blockquote>
        "Mutlu birey, mutlu bir aile,<br/>
        sonuçta <em>mutlu bir toplum</em> demektir."
      </blockquote>
      <div className="cite">— Mavi Mine eğitim felsefesi</div>
    </section>
  );
}

function GalleryStrip() {
  return (
    <section className="gallery-strip">
      <div className="gallery-head">
        <div>
          <div className="section-label">Bizden kareler</div>
          <h2>Bir gün <span className="handwritten" style={{ color: 'var(--teal)', fontSize: '1.1em' }}>Mavi Mine'de</span></h2>
        </div>
        <a href="galeri.html" className="btn ghost">Tüm galeri →</a>
      </div>
      <div className="gallery-grid">
        <div className="ph rose"   style={{ gridColumn: 'span 5', aspectRatio: '4/5' }}>[atölye 01]</div>
        <div className="ph teal"   style={{ gridColumn: 'span 4', aspectRatio: '1' }}>[bahçe 02]</div>
        <div className="ph sun"    style={{ gridColumn: 'span 3', aspectRatio: '3/4' }}>[öğle 03]</div>
        <div className="ph grass"  style={{ gridColumn: 'span 4', aspectRatio: '4/5' }}>[oyun 04]</div>
        <div className="ph orange" style={{ gridColumn: 'span 5', aspectRatio: '5/4' }}>[sanat 05]</div>
        <div className="ph grape"  style={{ gridColumn: 'span 3', aspectRatio: '1' }}>[veda 06]</div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="home-cta">
      <div className="cta-inner">
        <div className="section-label center" style={{ color: 'var(--sun)' }}>Sıcak bir davet</div>
        <h2>Çocuğunuzla birlikte<br/><em>okulumuzu görmeye</em> gelin.</h2>
        <p>
          Bahçeyi, sınıfları, atölyeleri gezin. Öğretmenlerimizle tanışın.
          Çocuğunuzun nasıl bir yerde büyüyeceğini birlikte hissedelim.
        </p>
        <div className="cta-actions">
          <a href="randevu.html" className="btn orange">Randevu Al →</a>
          <a href="on-kayit-formu.html" className="btn ghost" style={{ borderColor: 'rgba(255,251,242,0.6)', color: 'var(--paper)' }}>
            Ön Kayıt Formu
          </a>
          <a href="ozel-seans.html" className="btn ghost" style={{ borderColor: 'rgba(255,251,242,0.6)', color: 'var(--paper)' }}>
            Özel Seans
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Anasayfa">
      <Nav active="" />
      <Hero />
      <Marquee />
      <MaminoSection />
      <HeritageSection />
      <ProfilePreview />
      <ReasonsSection />
      <ProgramsSection />
      <Quote />
      <GardenStrip />
      <GalleryStrip />
      <CTA />
      <FooterEl />
    </div>
  );
}

function Marquee() {
  const words = ['Mutlu', 'Açık Fikirli', 'Meraklı', 'İnsancıl', 'Nitelikli', 'Onurlu', 'Sevgi', 'Oyun', 'Doğa', 'Merak'];
  const doubled = [...words, ...words, ...words];
  return (
    <div className="home-marquee" aria-hidden="true">
      <div className="home-marquee-track">
        {doubled.map((w, i) => <span key={i}>{w}</span>)}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
