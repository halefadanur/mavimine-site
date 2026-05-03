// Shared wireframe components — navigation, footer, sketch helpers

const NAV_ITEMS = ['Hakkımızda', 'Program', 'Kadro', 'Bir Gün', 'Galeri', 'SSS', 'İletişim'];

function Logo({ size = 22 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width={size + 4} height={size + 4} viewBox="0 0 28 28" style={{ flexShrink: 0 }}>
        <circle cx="14" cy="14" r="11" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <path d="M 7 18 Q 14 8 21 18" stroke="#C89B5C" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="14" r="2.5" fill="#1A1A1A" />
      </svg>
      <span className="logo" style={{ fontSize: size }}>mavi mine</span>
    </div>
  );
}

function TopNav({ active, compact }) {
  return (
    <div className="nav" style={compact ? { padding: '10px 20px' } : {}}>
      <Logo size={compact ? 18 : 22} />
      <div className="nav-links" style={{ fontSize: compact ? 11 : 13 }}>
        {NAV_ITEMS.map(item => (
          <span key={item} style={{
            fontWeight: active === item ? 700 : 400,
            borderBottom: active === item ? '1.5px solid #1A1A1A' : 'none',
            paddingBottom: 2,
          }}>{item}</span>
        ))}
        <span className="chip" style={{ marginLeft: 6, fontSize: compact ? 9 : 11 }}>TR · EN</span>
      </div>
      <button className="btn ochre" style={{ fontSize: compact ? 11 : 13 }}>Başvur ↗</button>
    </div>
  );
}

function Footer({ compact }) {
  const pad = compact ? 18 : 28;
  return (
    <div style={{ borderTop: '1.5px solid #1A1A1A', padding: `${pad}px ${pad}px ${pad - 4}px`, marginTop: 'auto', background: '#F2EDE4' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 24, fontSize: compact ? 10 : 12 }}>
        <div>
          <Logo size={compact ? 16 : 20} />
          <div style={{ marginTop: 8, color: '#6b6b6b', lineHeight: 1.5 }}>
            Reggio Emilia ilhamlı,<br />3-6 yaş atölyesi.
          </div>
        </div>
        <div>
          <div className="mono" style={{ marginBottom: 6 }}>KEŞFET</div>
          <div style={{ lineHeight: 1.7 }}>Felsefemiz<br />Bir Gün<br />Kadromuz</div>
        </div>
        <div>
          <div className="mono" style={{ marginBottom: 6 }}>BAĞLAN</div>
          <div style={{ lineHeight: 1.7 }}>Kayıt<br />Okul Gezisi<br />Bülten</div>
        </div>
        <div>
          <div className="mono" style={{ marginBottom: 6 }}>İLETİŞİM</div>
          <div style={{ lineHeight: 1.7, color: '#6b6b6b' }}>[adres satırı]<br />[telefon]<br />@instagram</div>
        </div>
      </div>
      <div style={{ marginTop: 18, paddingTop: 10, borderTop: '1px dashed #1A1A1A', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#6b6b6b' }}>
        <span>© 2026 Mavi Mine</span>
        <span className="mono">est. 20XX · istanbul</span>
      </div>
    </div>
  );
}

function ScribbleDivider({ width = '100%' }) {
  return <div className="scribble" style={{ width }} />;
}

function Annotation({ children, style }) {
  return <div className="arrow" style={style}>{children}</div>;
}

// Reusable section heading with hand-drawn underline
function SectionHead({ kicker, title, align = 'left' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 16 }}>
      {kicker && <div className="mono" style={{ marginBottom: 6 }}>{kicker}</div>}
      <h2 className="hand" style={{ margin: 0, fontFamily: 'Caveat, cursive', fontSize: 36, fontWeight: 600, lineHeight: 1.1 }}>
        <span className="u-wave">{title}</span>
      </h2>
    </div>
  );
}

// Sketchy "play" video badge for placeholders
function PlayBadge({ size = 44 }) {
  return (
    <div style={{
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      width: size, height: size, borderRadius: '50%',
      border: '1.5px solid #1A1A1A', background: 'rgba(250,247,242,0.9)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: 0, height: 0, borderLeft: `${size/4}px solid #1A1A1A`, borderTop: `${size/6}px solid transparent`, borderBottom: `${size/6}px solid transparent`, marginLeft: 4 }} />
    </div>
  );
}

Object.assign(window, { Logo, TopNav, Footer, ScribbleDivider, Annotation, SectionHead, PlayBadge, NAV_ITEMS });
