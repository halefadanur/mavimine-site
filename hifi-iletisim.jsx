// Mavi Mine — İletişim sayfası

// === İLETİŞİM BİLGİLERİ ===
const ILETISIM = {
  adres: 'Vanimehmet Mah, Şht. Mustafa Kurt Cd. No:48',
  ilce: 'Kestel / Bursa',
  postaKodu: '16450',
  haritaUrl: 'https://maps.app.goo.gl/BP62o4FzdKpMaXd88',
  telefon: '0505 323 41 35',
  telefonHref: 'tel:+905053234135',
  email: 'merhaba@mavimine.com',
  instagram: {
    handle: '@mavi_mine__anaokulu',
    url: 'https://www.instagram.com/mavi_mine__anaokulu/',
  },
  tiktok: {
    handle: '@mavimineanaokulu',
    url: 'https://www.tiktok.com/@mavimineanaokulu',
  },
};

function IletisimHero() {
  return (
    <section className="iletisim-hero">
      <svg className="blob" style={{ top: 50, left: '8%', width: 90, height: 90 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="22" fill="var(--sun)" opacity="0.45"/>
      </svg>
      <svg className="blob" style={{ top: 100, right: '12%', width: 70, height: 70 }} viewBox="0 0 60 60">
        <circle cx="22" cy="30" r="14" fill="var(--rose)" opacity="0.45"/>
        <circle cx="42" cy="22" r="10" fill="var(--teal)" opacity="0.4"/>
      </svg>
      <svg className="blob" style={{ bottom: 30, left: '15%', width: 60, height: 60 }} viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="16" fill="var(--grape)" opacity="0.35"/>
      </svg>

      <div className="iletisim-hero-inner">
        <div className="section-label center">İletişim</div>
        <h1>
          Bize <em>ulaşın,</em><br/>
          gelin tanışalım.
        </h1>
        <p className="iletisim-hero-lede">
          Telefonla arayın, mesaj yazın ya da doğrudan kapımızı çalın —
          <strong> sizi sıcacık karşılarız.</strong> Çocuğunuzla birlikte gelip
          bahçemizi, sınıflarımızı görmek isterseniz, randevu alıp uygun bir gün ayarlayalım.
        </p>
      </div>
    </section>
  );
}

function ContactCards() {
  return (
    <section className="contact-cards">
      <div className="contact-cards-inner">

        <a href={ILETISIM.telefonHref} className="contact-card tel">
          <div className="icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="label">Telefon</div>
          <div className="value">{ILETISIM.telefon}</div>
          <div className="sub">Hafta içi 07.30 — 18.30</div>
          <div className="arrow-link">Hemen ara →</div>
        </a>

        <a href={`mailto:${ILETISIM.email}`} className="contact-card mail">
          <div className="icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="label">E-posta</div>
          <div className="value" style={{ fontSize: 16, wordBreak: 'break-all' }}>
            {ILETISIM.email}
          </div>
          <div className="sub">Yazın, en kısa sürede dönelim</div>
          <div className="arrow-link">Mail gönder →</div>
        </a>

        <a href={ILETISIM.haritaUrl} target="_blank" rel="noopener noreferrer" className="contact-card adres">
          <div className="icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="label">Adres</div>
          <div className="value" style={{ fontSize: 16 }}>
            {ILETISIM.ilce}
          </div>
          <div className="sub">{ILETISIM.adres}</div>
          <div className="arrow-link">Yol tarifi al →</div>
        </a>

      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="social-section">
      <div className="social-inner">
        <div className="social-head">
          <div className="section-label center">Sosyal Medya</div>
          <h2>Bizi <em>takip edin</em></h2>
          <p>
            Günlük etkinliklerimizden, atölyelerden ve çocuklarımızdan kareleri
            sosyal medya hesaplarımızdan paylaşıyoruz.
          </p>
        </div>

        <div className="social-grid">

          <a href={ILETISIM.instagram.url} target="_blank" rel="noopener noreferrer" className="social-card instagram">
            <div className="social-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
              </svg>
            </div>
            <div className="social-platform">Instagram</div>
            <div className="social-handle">{ILETISIM.instagram.handle}</div>
            <div className="social-cta">Hesabı görüntüle →</div>
          </a>

          <a href={ILETISIM.tiktok.url} target="_blank" rel="noopener noreferrer" className="social-card tiktok">
            <div className="social-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09z"/>
              </svg>
            </div>
            <div className="social-platform">TikTok</div>
            <div className="social-handle">{ILETISIM.tiktok.handle}</div>
            <div className="social-cta">Hesabı görüntüle →</div>
          </a>

        </div>

        <div className="qr-block">
          <div className="qr-text">
            <div className="section-label">QR ile hızlı takip</div>
            <h3>Instagram'da bizi <em>takip edin</em></h3>
            <p className="qr-handle">{ILETISIM.instagram.handle}</p>
            <p className="qr-hint">Telefonunuzun kamerasıyla okutun veya direkt @ ile tıklayın.</p>
            <a href={ILETISIM.instagram.url} target="_blank" rel="noopener noreferrer" className="btn ghost">
              {ILETISIM.instagram.handle} →
            </a>
          </div>
          <a href={ILETISIM.instagram.url} target="_blank" rel="noopener noreferrer" className="qr-frame" aria-label="Mavi Mine Instagram QR kodu">
            <img src="images/instagram-qr.png" alt="Mavi Mine Instagram QR kodu" />
          </a>
        </div>

      </div>
    </section>
  );
}

function MapSection() {
  // Google Maps embed URL (Kestel/Bursa, Vanimehmet, Şht. Mustafa Kurt Cd. No:48)
  const embedSrc = 'https://www.google.com/maps?q=Vanimehmet+%C5%9Eht.+Mustafa+Kurt+Cd+No:48+Kestel+Bursa&output=embed';

  return (
    <section className="map-section">
      <div className="map-inner">
        <div className="map-head">
          <div className="map-head-text">
            <div className="section-label">Konumumuz</div>
            <h2>Kestel'de, <em>tam ortasında.</em></h2>
            <p>
              Anaokulu olarak inşa edilmiş binamız, 900 m²'lik bahçesiyle Kestel'in
              merkezi bir noktasında. Ulaşım kolay, çevre sakin.
            </p>
            <div className="adres-detay">
              <strong>Mavi Mine Özel Anaokulu</strong>
              <span>{ILETISIM.adres}<br/>{ILETISIM.postaKodu} {ILETISIM.ilce}</span>
            </div>
            <div style={{ marginTop: 18 }}>
              <a href={ILETISIM.haritaUrl} target="_blank" rel="noopener noreferrer" className="btn ghost">
                Google Maps'te aç →
              </a>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mavi Mine Anaokulu konumu"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HoursSection() {
  return (
    <section className="hours-section">
      <div className="hours-inner">
        <div className="hours-head">
          <div className="section-label center">Çalışma Saatleri</div>
          <h2>Ne zaman <em>buradayız?</em></h2>
          <p>
            Eğitim saatlerimiz dışında, randevulu görüşmeler için bahçemiz ve
            kapımız sizlere açık.
          </p>
        </div>
        <div className="hours-card">
          <div className="hours-block hours-block-l">
            <div className="label">Eğitim Saatleri</div>
            <div className="time">07.30 — 18.30</div>
            <div className="desc">Pazartesi — Cuma. Çocuklarımız için tam gün ve yarım gün seçenekleri mevcuttur.</div>
          </div>
          <div className="hours-block">
            <div className="label">Görüşme & Ziyaret</div>
            <div className="time">Randevu ile</div>
            <div className="desc">Tanışma görüşmesi için telefonla aramanız ya da aşağıdaki formlardan birini doldurmanız yeterli.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IletisimCTA() {
  return (
    <section className="iletisim-cta">
      <div className="iletisim-cta-inner">
        <div className="section-label center" style={{ color: 'var(--sun)' }}>Sizi tanımak isteriz</div>
        <h2>Bize <em>nasıl ulaşmak</em><br/>istersiniz?</h2>
        <p className="iletisim-cta-lede">
          İhtiyacınıza en uygun yolu seçin. Tüm yollar aynı yere çıkar:
          çocuğunuzun mutlu olduğu bir okula.
        </p>

        <div className="cta-form-grid">

          <a href="randevu.html" className="cta-form-card">
            <div className="form-time">30 saniye</div>
            <h3>Randevu Al</h3>
            <p>Sadece okulu görmek, tanışmak istiyorsanız hızlı bir form.</p>
            <div className="arrow">Forma git →</div>
          </a>

          <a href="on-kayit-formu.html" className="cta-form-card">
            <div className="form-time">2-3 dakika</div>
            <h3>Ön Kayıt Formu</h3>
            <p>Kayıt yaptırmaya kararlıysanız çocuğunuzu önceden tanıyalım.</p>
            <div className="arrow">Forma git →</div>
          </a>

          <a href="ozel-seans.html" className="cta-form-card">
            <div className="form-time">5-8 dakika</div>
            <h3>Özel Seans Formu</h3>
            <p>Çocuğunuza özel destek arıyorsanız detaylı bir tanışma formu.</p>
            <div className="arrow">Forma git →</div>
          </a>

        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div data-screen-label="İletişim">
      <Nav active="İletişim" />
      <IletisimHero />
      <IletisimCTA />
      <ContactCards />
      <MapSection />
      <HoursSection />
      <SocialSection />
      <FooterEl />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
