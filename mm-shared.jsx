// Shared nav + footer + logo for Mavi Mine pages

const { useState, useEffect } = React;

function LogoMark({ size = 56 }) {
  // Gerçek Mavi Mine logosu — anne+çocuk ile renk yelpazesi
  return (
    <img src="images/logo.jpg" alt="Mavi Mine Anaokulu" style={{ height: size, width: 'auto', display: 'block' }} />
  );
}

const NAV_PAGES = [
  ['Hakkımızda', 'hakkimizda.html'],
  ['Program', 'program.html'],
  ['Destek', 'destek.html'],
  ['Kadro', 'kadro.html'],
  ['Bir Gün', 'bir-gun.html'],
  ['Galeri', 'galeri.html'],
  ['SSS', 'sss.html'],
  ['İletişim', 'iletisim.html'],
];

const NAV_COLORS = ['teal', 'orange', 'rose', 'grape', 'sky', 'grass', 'sun', 'coral'];

function Nav({ active }) {
  const [open, setOpen] = useState(false);

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
        {NAV_PAGES.map(([label, href], i) => (
          <a
            key={label}
            href={href}
            onClick={close}
            className={`nav-link nav-${NAV_COLORS[i % NAV_COLORS.length]} ${active === label ? 'active' : ''}`}
          >
            {label}
          </a>
        ))}
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
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,251,242,0.18)' }}>
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
            ['KEŞFET', [['Hakkımızda', 'hakkimizda.html'], ['Program', 'program.html'], ['Destek', 'destek.html'], ['Bir Gün', 'bir-gun.html'], ['Kadromuz', 'kadro.html']]],
            ['BAĞLAN', [['Başvuru', 'basvuru.html'], ['Galeri', 'galeri.html'], ['SSS', 'sss.html']]],
            ['İLETİŞİM', [['[adres satırı]', '#'], ['[+90 ___ ___ __ __]', '#'], ['merhaba@mavimine.com', '#'], ['@mavimine', '#']]],
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
