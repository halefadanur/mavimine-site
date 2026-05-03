// Mavi Mine — Hakkımızda (ismimizin hikâyesi + öğrenci profili)

const MAVI_DEEP = [
  { l: 'M', w: 'Merak',   color: 'sky',   desc: 'Her "neden?" sorusu, bir keşfin başlangıcıdır. Mavi Mine\'de merak susturulmaz, beslenir. Çocuğun sorduğu her soruya, sorduğu kadar değer veririz.' },
  { l: 'A', w: 'Açıklık', color: 'teal',  desc: 'Farklılıklara, yeniye, duyguya açık olmak... Çocuklarımız farklı düşüncelerle, farklı bakış açılarıyla buluşur. Açık bir zihin, hayatın tüm renklerine yer açar.' },
  { l: 'V', w: 'Vicdan',  color: 'grape', desc: 'Empati, bir çocuğa öğretilebilecek en kıymetli beceridir. Bir arkadaşının üzüldüğünü fark etmek, paylaşmayı bilmek — küçük yaşta filizlenen büyük bir ahlaktır.' },
  { l: 'İ', w: 'İlham',   color: 'sun',   desc: 'Çocuk; hayal kurmaya, denemeye, yaratmaya cesaret edebildiği yerde gerçekten kendisi olur. Mavi Mine\'de her gün yeni bir ilhamın peşinde koşarız.' },
];

const MINE_DEEP = [
  { l: 'M', w: 'Marifet', color: 'orange', desc: 'Her çocuğun bir marifeti vardır. Bizim işimiz, çocuğun kendi marifetini keşfetmesine alan açmak. Çünkü kendine özgü olduğunu bilen bir çocuk, kendisi olmaktan utanmaz.' },
  { l: 'İ', w: 'İncelik', color: 'rose',   desc: 'Söz incelir, dokunuş incelir, bakış incelir. İncelik; hem kendine hem başkasına saygıdır. Çocuklar nazik bir dilin değerini yaşayarak öğrenir.' },
  { l: 'N', w: 'Nezaket', color: 'grass',  desc: '"Lütfen", "teşekkür ederim", "özür dilerim"... Nezaket; çocuğa "sen değerlisin, karşındaki de değerli" demenin en sade halidir. Burada öğrenilen nezaket, ömür boyu sürer.' },
  { l: 'E', w: 'Emek',    color: 'coral',  desc: 'Bir şey öğrenmek emek ister, bir dostluk kurmak emek ister. Çocuklarımız sabretmeyi, denemeyi, vazgeçmemeyi yaşayarak öğrenir. Emeğin değerini bilen bir çocuk, başkalarının da kıymetini bilir.' },
];

const PROFILE = [
  { color: 'grass',  emoji: '🌱', title: 'Meraklıdır',          desc: 'Soru sormaktan korkmaz, çünkü burada her soruya kıymet verilir. Her cevap, yeni bir sorunun kapısını aralar.' },
  { color: 'teal',   emoji: '🌿', title: 'Cesurdur',             desc: 'Denemekten, hata yapmaktan, yeniden başlamaktan çekinmez. Hata, öğrenmenin en doğal parçasıdır.' },
  { color: 'rose',   emoji: '🌼', title: 'Naziktir',             desc: 'Birbirine, kendine, doğaya saygı duymayı yaşarken öğrenir. Nazik bir söz, nazik bir dokunuş — burada öğrenilir.' },
  { color: 'sun',    emoji: '🌳', title: 'Sorumluluk Sahibidir', desc: 'Yaşına göre kendi işini yapmayı, başkasına yardım etmeyi içselleştirir. Sorumluluk yük değil, gururdur.' },
  { color: 'orange', emoji: '🌻', title: 'Yaratıcıdır',          desc: 'Hayal kurmaktan, yeni bir şeyler üretmekten zevk alır. Çocuk, doğası gereği yaratıcıdır — biz bu doğayı koruruz.' },
  { color: 'grape',  emoji: '🌷', title: 'Mutludur',             desc: 'Çünkü sevildiğini, görüldüğünü, değerli olduğunu bilir. Mutlu çocuk; güvenli çocuktur.' },
];

function StoryHero() {
  return (
    <section className="story-hero">
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

      <div className="story-hero-inner story-hero-grid">
        <div className="story-hero-text">
          <div className="section-label">İsmimizin Hikâyesi</div>
          <h1>
            <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '0.55em', display: 'block', marginBottom: 12 }}>iki kelime, iki söz:</span>
            Bir okulun adı,<br/>
            <em>bir okulun ruhudur.</em>
          </h1>
          <p className="story-hero-lede">
            "Mavi Mine" iki kelimeden çok, <strong>iki vaat.</strong> Çocuğun sınırsız ufku ve içindeki biricik değer.
          </p>
        </div>
        <div className="story-hero-portrait">
          <div className="portrait-frame">
            <img src="images/team/team-04.jpeg" alt="Hatice Adanur Şahin" onError={(e) => { e.target.style.display='none'; }}/>
            <div className="portrait-caption">
              <div className="cap-mono">kurucu · pedagog</div>
              <div className="cap-name">Hatice Adanur Şahin</div>
            </div>
          </div>
          <div className="portrait-quote handwritten">"Çocuk, sevgiyle büyür."</div>
        </div>
      </div>
    </section>
  );
}

function StoryIntro() {
  return (
    <section className="story-intro">
      <div className="story-intro-inner">
        <div className="story-card mavi-card">
          <div className="smile-circle teal" style={{ width: 80, height: 80, fontSize: 38, marginBottom: 18 }}>M</div>
          <div className="story-card-label handwritten" style={{ color: 'var(--teal-deep)' }}>mavi</div>
          <p>
            <strong style={{ color: 'var(--teal-deep)' }}>Mavi</strong>; gökyüzünün ve denizin rengidir.
            Sonsuzluğun, huzurun, sınırsız hayalin rengi.
          </p>
          <p>
            Çocuğun bakışındaki o ilk merak, ufka uzanan o ilk soru — hep mavidir.
            Çocuğa <em>"sen büyüyebilirsin, sen düşünebilirsin, sen hayal kurabilirsin"</em> demenin rengi.
          </p>
        </div>

        <div className="story-card mine-card">
          <div className="smile-circle orange" style={{ width: 80, height: 80, fontSize: 38, marginBottom: 18 }}>M</div>
          <div className="story-card-label handwritten" style={{ color: 'var(--orange)' }}>mine</div>
          <p>
            <strong style={{ color: 'var(--orange)' }}>Mine</strong>; sabırla işlenen, ışıkla parlayan en değerli taşlardan biri.
          </p>
          <p>
            Her çocuğun içinde böyle bir mine vardır: kendine özgü, biricik, parlatılmayı bekleyen.
            Bizim işimiz, o mineyi <em>görebilmek ve sevgiyle parlatabilmek.</em>
          </p>
        </div>
      </div>

      <blockquote className="story-quote">
        <svg style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', width: 56, height: 56 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--sun)" opacity="0.85"/>
        </svg>
        Çocuğun <em style={{ color: 'var(--teal-deep)' }}>mavisini</em> kısıtlamayan;<br/>
        içindeki <em style={{ color: 'var(--orange)' }}>mineyi</em> sevgiyle parlatan bir okul.
      </blockquote>
    </section>
  );
}

function MaviDeepSection() {
  return (
    <section className="deep-section deep-mavi">
      <div className="deep-inner">
        <div className="deep-head">
          <div className="section-label center" style={{ color: 'var(--teal-deep)' }}>Mavi'de neyimiz var?</div>
          <h2>Çocuğun <em style={{ color: 'var(--teal-deep)' }}>ufku.</em></h2>
          <p className="deep-lede">
            Mavi; bir çocuğun zihninde açtığımız geniş alandır. Dört söz, dört kapı.
          </p>
        </div>
        <div className="deep-grid">
          {MAVI_DEEP.map((it, i) => (
            <div key={i} className="deep-card">
              <div className={`smile-circle ${it.color}`} style={{ width: 72, height: 72, fontSize: 32 }}>{it.l}</div>
              <h3>{it.w}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MineDeepSection() {
  return (
    <section className="deep-section deep-mine">
      <div className="deep-inner">
        <div className="deep-head">
          <div className="section-label center" style={{ color: 'var(--orange)' }}>Mine'de neyimiz var?</div>
          <h2>Çocuğun <em style={{ color: 'var(--orange)' }}>özü.</em></h2>
          <p className="deep-lede">
            Mine; bir çocuğun içindeki değerdir. Sabırla, sevgiyle, ince ince işlenir.
          </p>
        </div>
        <div className="deep-grid">
          {MINE_DEEP.map((it, i) => (
            <div key={i} className="deep-card">
              <div className={`smile-circle ${it.color}`} style={{ width: 72, height: 72, fontSize: 32 }}>{it.l}</div>
              <h3>{it.w}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="profile-section">
      <svg style={{ position: 'absolute', top: 60, right: '10%', width: 70, height: 70, zIndex: 0, opacity: 0.4 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="20" fill="var(--rose)" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 80, left: '8%', width: 60, height: 60, zIndex: 0, opacity: 0.4 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="18" fill="var(--sun)" />
      </svg>

      <div className="profile-inner">
        <div className="profile-head">
          <div className="section-label center">Peki bu çocuklar kimler?</div>
          <h2>Mavi Mine'nin <em>çocukları.</em></h2>
          <p className="profile-lede">
            Mavi Mine bir kalıp değildir; bir <strong>ortamdır.</strong> Buraya gelen her çocuk farklıdır —
            kimi sessizdir, gözlemler; kimi koşar, keşfeder; kimi şarkı söyler, kimi kitabıyla bir köşeye çekilir.
            Biz hiçbir çocuğu "olması gereken" bir şablona sığdırmaya çalışmayız.
            Tam tersine; her çocuğu <em>kendi haliyle</em> karşılar, <em>kendi hızıyla</em> büyütürüz.
          </p>
        </div>
        <div className="profile-grid">
          {PROFILE.map((it, i) => (
            <div key={i} className="profile-card">
              <div className="profile-emoji">{it.emoji}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="story-closing">
      <div className="story-closing-inner">
        <svg style={{ position: 'absolute', top: 30, left: '12%', width: 50, height: 50, opacity: 0.6 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--rose)" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 40, right: '15%', width: 44, height: 44, opacity: 0.6 }} viewBox="0 0 60 60">
          <path d="M30 6 L34 22 L50 24 L38 34 L42 50 L30 42 L18 50 L22 34 L10 24 L26 22 Z" fill="var(--sun)" />
        </svg>

        <blockquote>
          Çocuğunuzu bize emanet ettiğinizde,<br/>
          biz sadece bir öğrenciyi değil;<br/>
          bir <em>mineyi</em> kabul ederiz.
        </blockquote>
        <p className="closing-text">
          Onu bizim gibi yapmak için değil, <strong>kendisi gibi olmasına alan açmak</strong> için yanına otururuz.
          Mavi Mine; çocuğun kendisi olmaya cesaret ettiği, sevildiğini bildiği,
          içindeki değerin sabırla parlatıldığı bir yuvadır.
        </p>
        <div className="closing-actions">
          <a href="iletisim.html" className="btn orange">Okulumuzu ziyaret edin →</a>
          <a href="program.html" className="btn ghost">Programımızı tanıyın</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="Hakkımızda">
      <Nav active="Hakkımızda" />
      <StoryHero />
      <StoryIntro />
      <MaviDeepSection />
      <MineDeepSection />
      <ProfileSection />
      <ClosingSection />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
