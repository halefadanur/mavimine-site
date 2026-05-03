// SSS — Mavi Mine

const { useState } = React;

const ITEMS = [
  { color: 'orange', q: 'Yaş aralığınız nedir?',
    a: '3-6 yaş arası çocukları kabul ediyoruz. Üç yaş grubumuz var: 3 yaş, 4 yaş ve 5—6 yaş. Her grup için ayrı sınıf ve özel program.' },
  { color: 'teal', q: 'Pedagojik yaklaşımınız nedir?',
    a: 'MEB Okul Öncesi Eğitim Programı temel alınır; Montessori yaklaşımı yaş düzeylerine göre kullanılır. Drama, STEAM & kodlama, tarım, yüzme ve "Sevgi Dersi" değerler eğitimiyle program zenginleşir. Çocuğun bireysel gelişim hızına saygılı bir yaklaşım benimsiyoruz.' },
  { color: 'rose', q: 'Beslenme nasıl?',
    a: 'Mevsiminde, yerel ve mümkün olduğunca organik. Tarım atölyemizde yetiştirdiğimiz ürünler de mutfağa giriyor. Diyet ihtiyaçları için ayrı menü düzenleyebiliriz.' },
  { color: 'grass', q: 'Sınıf büyüklükleri?',
    a: 'Bir öğretmene en fazla 8 çocuk düşer. Her sınıfın kendi öğretmeni vardır; branş öğretmenleri (İngilizce, drama, müzik) gün içinde ayrıca destek olur. Danışman psikolog ve dil-konuşma terapisti gerektiğinde gözlem yapar.' },
  { color: 'sun', q: 'Yarım gün seçeneği var mı?',
    a: 'Evet. 07:30—13:00 yarım gün, 07:30—18:00 tam gün seçenekleri sunuyoruz. Yarım gün özellikle 3 yaş grubu için önerilen seçenek.' },
  { color: 'sky', q: 'Adaptasyon süresi nedir?',
    a: 'Tipik olarak 2-3 hafta; ama her çocuğun temposuna göre uzayabilir. İlk gün veliyle birlikte gelinir, sonraki günlerde kademeli olarak ayrılınır.' },
  { color: 'grape', q: 'İngilizce eğitimi nasıl yürür?',
    a: 'Türkçe ana dilimiz; İngilizce branş öğretmenimiz çocuklarla şarkı, oyun ve hikâye saatinde olur. Dilin doğal yolla edinilmesini önemsiyoruz; çeviri değil, deneyim.' },
  { color: 'coral', q: 'Yüzme havuzu nasıl çalışıyor?',
    a: 'Kardeş kurumumuz Eğitimci Dil Konuşma Merkezi ile iş birliği protokolü çerçevesinde, profesyonel eşlik altında haftalık yüzme seansları yapılıyor. Güvenlik ve sıcaklık standartları takip edilir.' },
  { color: 'orange', q: 'Servis hizmeti var mı?',
    a: 'Yakın bölgeler için servis bulunuyor. Detaylar ve güzergâh için iletişime geçin.' },
  { color: 'teal', q: 'Ücretler ve indirimler?',
    a: 'Yıllık ücret bilgisi tanışma görüşmesinde paylaşılır. Kardeş ve erken kayıt indirimlerimiz vardır.' },
];

function Item({ it, open, onClick }) {
  return (
    <div style={{
      background: 'white', borderRadius: 18, marginBottom: 12,
      border: `2px solid var(--${it.color}-soft)`,
      transition: 'all .25s',
    }}>
      <button onClick={onClick} className="sss-q-row" style={{
        background: 'transparent', border: 'none', font: 'inherit', cursor: 'pointer',
        padding: '20px 24px', textAlign: 'left',
      }}>
        <div className={`smile-circle ${it.color}`} style={{ width: 44, height: 44 }}>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <circle cx="11" cy="13" r="1.4" fill="currentColor"/>
            <circle cx="21" cy="13" r="1.4" fill="currentColor"/>
            <path d="M 9 19 Q 16 25 23 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>{it.q}</span>
        <span style={{
          width: 30, height: 30, borderRadius: '50%',
          background: open ? `var(--${it.color})` : `var(--${it.color}-soft)`,
          color: open ? 'white' : `var(--${it.color === 'sun' ? 'orange' : it.color})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, fontWeight: 700, transition: 'all .25s',
        }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="sss-q-answer" style={{
          fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 500,
        }}>
          {it.a}
        </div>
      )}
    </div>
  );
}

function SssHero() {
  return (
    <section style={{ padding: '80px 48px 40px', background: 'var(--milk)', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 60, right: '8%', width: 90, height: 90, opacity: 0.5 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="32" fill="var(--grape)"/>
      </svg>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ marginBottom: 18, color: 'var(--teal-deep)' }}>08 · sıkça sorulanlar</div>
        <h1 style={{ fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 1.0, maxWidth: 1100 }}>
          Merak <span className="handwritten" style={{ color: 'var(--orange)', fontSize: '1.05em' }}>ettiğiniz.</span>
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 660, fontWeight: 500 }}>
          En çok aldığımız sorular ve dürüst cevaplarımız. Aradığınız burada yoksa,
          bize yazın — yeni bir madde ekleriz.
        </p>
      </div>
    </section>
  );
}

function App() {
  const [open, setOpen] = useState(0);
  return (
    <div data-screen-label="SSS">
      <Nav active="SSS" />
      <SssHero />
      <section style={{ padding: '40px 48px 80px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          {ITEMS.map((it, i) => (
            <Item key={it.q} it={it} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </section>
      <section style={{ padding: '100px 48px', background: 'var(--sand)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 44px)', marginBottom: 14 }}>
            Cevabını bulamadınız mı?
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 24, fontWeight: 500 }}>
            Bize yazın, hızlıca dönelim.
          </p>
          <a href="iletisim.html" className="btn">İletişime geçin →</a>
        </div>
      </section>
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
