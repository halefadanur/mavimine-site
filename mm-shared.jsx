// Shared nav + footer + logo for Mavi Mine pages

const { useState, useEffect } = React;

function LogoMark({ size = 56 }) {
  // Gerçek Mavi Mine logosu — anne+çocuk ile renk yelpazesi
  return (
    <img src="images/logo.jpg" alt="Mavi Mine Anaokulu" style={{ height: size, width: 'auto', display: 'block' }} />
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
              ['Vanimehmet Mah. Şht. Mustafa Kurt Cd. No:48, Kestel/Bursa', '#'],
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
          <span className="mono">mavi · mine · İstanbul</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LogoMark, Nav, PageHero, FooterEl });
