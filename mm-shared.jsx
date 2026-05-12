// Shared nav + footer + logo for Mavi Mine pages

const { useState, useEffect } = React;

function LogoMark({ size = 56 }) {
  // Gerçek Mavi Mine logosu — anne+çocuk ile renk yelpazesi
  return (
    <img src="images/logo.jpg" alt="Mavi Mine Anaokulu" style={{ height: size, width: 'auto', display: 'block' }} />
  );
}

function Img({ src, alt, color = 'teal', label, className = '', style }) {
  const [ok, setOk] = useState(true);
  if (!src || !ok) {
    return (
      <div className={`ph ${color} ${className}`} style={style}>
        {label || `[${alt || 'görsel'}]`}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      onError={() => setOk(false)}
    />
  );
}

const NAV_PAGES = [
  { label: 'Hakkımızda', href: 'hakkimizda.html', color: 'teal' },
  { label: 'Eğitim', color: 'orange', children: [
    { label: 'Genel Program', href: 'program.html' },
    { label: 'Sınıflarımız',  href: 'siniflarimiz.html' },
    { label: 'Yaz Okulu',     href: 'yaz-okulu.html' },
  ]},
  { label: 'Destek',   href: 'destek.html',   color: 'rose'  },
  { label: 'Kadro',    href: 'kadro.html',    color: 'grape' },
  { label: 'Bir Gün',  href: 'bir-gun.html',  color: 'sky'   },
  { label: 'Galeri',   href: 'galeri.html',   color: 'grass' },
  { label: 'Blog',     href: 'blog.html',     color: 'grape' },
  { label: 'SSS',      href: 'sss.html',      color: 'sun'   },
  { label: 'İletişim', href: 'iletisim.html', color: 'coral' },
];

function Nav({ active }) {
  const [open, setOpen] = useState(false);

  // Item active mı? (kendi label'ı veya children'dan birinin label'ı eşleşirse)
  const isItemActive = (item) => {
    if (item.label === active) return true;
    if (item.children && item.children.some(c => c.label === active)) return true;
    return false;
  };

  // Mobilde her parent için ayrı open state — aktif parent default açık
  const [openParents, setOpenParents] = useState(() => {
    const initial = {};
    NAV_PAGES.forEach(item => {
      if (item.children && isItemActive(item)) initial[item.label] = true;
    });
    return initial;
  });
  const toggleParent = (label) => setOpenParents(prev => ({ ...prev, [label]: !prev[label] }));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <a href="index.html" className="logo-block">
        <LogoMark size={56} />
        <span className="logo-motto">
          <span className="motto-line-1">Eğitimci gelenek,</span>
          <span className="motto-line-2">mutlu gelecek.</span>
        </span>
      </a>
      <div
        className={`nav-links ${open ? 'open' : ''}`}
        role={open ? 'dialog' : undefined}
        aria-modal={open ? 'true' : undefined}
        aria-label="Ana menü"
      >
        <button className="nav-close" aria-label="Menüyü kapat" onClick={close}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {NAV_PAGES.map((item) => {
          const activeCls = isItemActive(item) ? 'active' : '';
          if (item.children) {
            const isMobileOpen = !!openParents[item.label];
            return (
              <div key={item.label} className={`nav-dropdown ${activeCls ? 'is-active' : ''} ${isMobileOpen ? 'is-mobile-open' : ''}`}>
                <span
                  className={`nav-link nav-${item.color} nav-dropdown-trigger ${activeCls}`}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isMobileOpen}
                  onClick={() => toggleParent(item.label)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleParent(item.label); } }}
                >
                  {item.label}
                  <svg className="nav-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1 L5 5 L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className={`nav-dropdown-menu ${isMobileOpen ? 'is-open' : ''}`}>
                  {item.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      onClick={close}
                      className={`nav-dropdown-item ${active === c.label ? 'active' : ''}`}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={close}
              className={`nav-link nav-${item.color} ${activeCls}`}
            >
              {item.label}
            </a>
          );
        })}
        <a href="basvuru.html" className="nav-mobile-cta" onClick={close}>
          Başvur
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10 L10 2 M5 2 H10 V7" stroke="currentColor" strokeWidth="1.6" /></svg>
        </a>
      </div>
      <div className="nav-cta">
        <a href="basvuru.html" className="btn orange" style={{ padding: '10px 20px', fontSize: 13 }}>
          Başvur
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10 L10 2 M5 2 H10 V7" stroke="currentColor" strokeWidth="1.6" /></svg>
        </a>
      </div>
      <button
        className={`nav-burger ${open ? 'open' : ''}`}
        aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

function PageHero({ kicker, title, lede, accent }) {
  return (
    <header className="page-hero">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="mono crumb" style={{ color: 'var(--teal-deep)' }}>{kicker}</div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {lede && <p className="lede">{lede}</p>}
      </div>
    </header>
  );
}

function FooterEl() {
  return (
    <footer>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="footer-grid">
          <div>
            <div style={{ background: 'white', borderRadius: 12, padding: 12, display: 'inline-block', marginBottom: 18 }}>
              <img src="images/logo.jpg" alt="Mavi Mine Anaokulu" style={{ height: 64, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: 28, lineHeight: 1.2, color: 'var(--sun)', maxWidth: 300, margin: 0, fontWeight: 700 }}>
              Eğitimci gelenek,<br/>mutlu gelecek.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,251,242,0.7)', maxWidth: 300, marginTop: 14 }}>
              Çocuğun sınırsız hayalini ve içindeki değeri merkeze alan bir anaokulu.
            </p>
          </div>
          {[
            ['KEŞFET', [['Hakkımızda', 'hakkimizda.html'], ['Sınıflarımız', 'siniflarimiz.html'], ['Program', 'program.html'], ['Yaz Okulu', 'yaz-okulu.html'], ['Destek', 'destek.html'], ['Bir Gün', 'bir-gun.html'], ['Kadromuz', 'kadro.html']]],
            ['BAĞLAN', [['Başvuru', 'basvuru.html'], ['Galeri', 'galeri.html'], ['SSS', 'sss.html'], ['İletişim', 'iletisim.html']]],
            ['İLETİŞİM', [
              ['Vanimehmet Mah. Şht. Mustafa Kurt Cd. No:48, Kestel/Bursa', 'iletisim.html'],
              ['0505 323 41 35', 'tel:+905053234135'],
              ['merhaba@mavimine.com', 'mailto:merhaba@mavimine.com'],
              ['bilgi@mavimine.com', 'mailto:bilgi@mavimine.com'],
              ['@mavi_mine__anaokulu', 'https://www.instagram.com/mavi_mine__anaokulu/'],
              ['@mavimineanaokulu (TikTok)', 'https://www.tiktok.com/@mavimineanaokulu'],
            ]],
          ].map(([head, items]) => (
            <div key={head}>
              <div className="mono" style={{ color: 'rgba(255,251,242,0.55)', marginBottom: 16 }}>{head}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
                {items.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,251,242,0.55)' }}>
          <span>© 2026 Özel Mavi Mine Anaokulu</span>
          <span className="mono">mavi · mine · Kestel / Bursa</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const phone = '905053234135';
  const message = encodeURIComponent('Merhaba, Mavi Mine Anaokulu hakkında bilgi almak istiyorum.');
  const url = `https://wa.me/${phone}?text=${message}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp ile bize ulaşın">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.816 9.816 0 0012.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
      </svg>
    </a>
  );
}

Object.assign(window, { LogoMark, Img, Nav, PageHero, FooterEl, WhatsAppFloat });
