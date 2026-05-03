// Four homepage wireframe variants for Mavi Mine

// ─────────────────────────────────────────────────────────────
// V1 — EDITORIAL MAGAZINE
// Big vertical video reel on the left, manifesto + nav on right.
// Reads like a Reggio atelier journal.
// ─────────────────────────────────────────────────────────────
function HomeV1_Editorial() {
  return (
    <div className="wf" style={{ display: 'flex', flexDirection: 'column' }}>
      <TopNav active="" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', flex: 1, minHeight: 0 }}>
        {/* Left: vertical video reel */}
        <div style={{ padding: 24, borderRight: '1.5px solid #1A1A1A', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="mono">01 / atölyeden</div>
          <div className="ph tall" style={{ flex: 1, minHeight: 0 }}>
            <PlayBadge size={56} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
              [vertical video reel · 9:16]<br />döngüsel, sessiz oynar
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, fontSize: 11 }}>
            <span className="chip">⟵ önceki</span>
            <span className="chip">sonraki ⟶</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#6b6b6b' }}>03 / 12</span>
          </div>
        </div>
        {/* Right: manifesto */}
        <div style={{ padding: '36px 36px 24px', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'hidden' }}>
          <div className="mono">mavi mine · 3-6 yaş</div>
          <h1 className="hand" style={{ margin: 0, fontFamily: 'Caveat, cursive', fontSize: 56, lineHeight: 1, fontWeight: 600 }}>
            Çocuğun yüz dili<br />vardır.
          </h1>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: '#3a3a3a', maxWidth: 380 }}>
            Reggio Emilia ilhamlı atölyemizde çocuk; gözlemleyen, soru soran ve yaratan bir araştırmacıdır. Biz onların yüz dilini dinleriz.
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <button className="btn solid">Felsefemiz →</button>
            <button className="btn">Bir gün izleyin</button>
          </div>
          <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, paddingTop: 12, borderTop: '1px dashed #1A1A1A' }}>
            {[
              { k: 'kuruluş', v: '20XX' },
              { k: 'çocuk : öğrt.', v: '6 : 1' },
              { k: 'kampüs', v: 'istanbul' },
            ].map(s => (
              <div key={s.k}>
                <div className="mono" style={{ fontSize: 9 }}>{s.k}</div>
                <div className="hand" style={{ fontSize: 22, fontWeight: 600 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom strip — quick nav into deeper pages */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1.5px solid #1A1A1A' }}>
        {['Felsefe', 'Program', 'Kadro', 'Kayıt'].map((s,i) => (
          <div key={s} style={{ padding: 16, borderRight: i < 3 ? '1.5px solid #1A1A1A' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div className="mono" style={{ fontSize: 9 }}>0{i+1}</div>
              <div className="hand" style={{ fontSize: 20, fontWeight: 600 }}>{s}</div>
            </div>
            <span style={{ fontFamily: 'Caveat, cursive', fontSize: 26 }}>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V2 — GALLERY MOSAIC
// Asymmetric image-first grid; the photos lead, copy follows.
// ─────────────────────────────────────────────────────────────
function HomeV2_Mosaic() {
  return (
    <div className="wf" style={{ display: 'flex', flexDirection: 'column' }}>
      <TopNav active="" />
      <div style={{ flex: 1, padding: 20, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(6, 1fr)', gap: 12, minHeight: 0 }}>
        {/* Big hero video */}
        <div className="ph" style={{ gridColumn: '1 / 5', gridRow: '1 / 4' }}>
          <PlayBadge size={56} />
          <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
            [hero video · atölye genel görünüm]
          </div>
        </div>
        {/* Manifesto block */}
        <div className="sk" style={{ gridColumn: '5 / 7', gridRow: '1 / 3', padding: 16, background: '#FAF7F2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="mono">manifesto</div>
          <h1 className="hand" style={{ margin: 0, fontSize: 32, lineHeight: 1.05, fontWeight: 600 }}>
            Yavaş büyüyün.<br />Derin bakın.
          </h1>
          <button className="btn">oku →</button>
        </div>
        {/* Square portrait */}
        <div className="ph ochre" style={{ gridColumn: '5 / 7', gridRow: '3 / 5' }}>
          [çocuk portresi · 1:1]
        </div>
        {/* Wide atelier */}
        <div className="ph" style={{ gridColumn: '1 / 3', gridRow: '4 / 7' }}>
          [atölye · doğal ışık]
        </div>
        {/* Quote card */}
        <div className="sk-d" style={{ gridColumn: '3 / 5', gridRow: '4 / 6', padding: 14, background: '#F2EDE4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="hand" style={{ fontSize: 20, lineHeight: 1.25, fontStyle: 'italic' }}>
            "Buradaki sessizlik bile öğretiyor."
          </div>
          <div className="mono" style={{ marginTop: 8 }}>— bir veli</div>
        </div>
        {/* Mini cards */}
        <div className="sk" style={{ gridColumn: '3 / 4', gridRow: '6 / 7', padding: 8, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="hand" style={{ fontSize: 16 }}>Kadromuz</span>
          <span>→</span>
        </div>
        <div className="sk" style={{ gridColumn: '4 / 5', gridRow: '6 / 7', padding: 8, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="hand" style={{ fontSize: 16 }}>SSS</span>
          <span>→</span>
        </div>
        <div className="ph" style={{ gridColumn: '5 / 7', gridRow: '5 / 7' }}>
          [bahçe · oyun]
        </div>
      </div>
      {/* Bottom CTA strip */}
      <div style={{ borderTop: '1.5px solid #1A1A1A', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F2EDE4' }}>
        <div className="hand" style={{ fontSize: 22 }}>Bir okul gezisi planlayalım</div>
        <button className="btn ochre">randevu al ↗</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V3 — MANIFESTO FIRST
// Typography-led: a giant statement greets you, video lives below.
// ─────────────────────────────────────────────────────────────
function HomeV3_Manifesto() {
  return (
    <div className="wf" style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      <TopNav active="" />
      {/* Hero — pure typography */}
      <div style={{ padding: '60px 56px 36px', position: 'relative' }}>
        <div className="mono">mavi mine atölyesi · est. 20XX</div>
        <h1 className="hand" style={{
          margin: '20px 0 0',
          fontFamily: 'Caveat, cursive',
          fontSize: 110,
          lineHeight: 0.95,
          fontWeight: 600,
        }}>
          Çocuk,<br />
          <span style={{ color: '#C89B5C' }}>yüz dile</span> sahip<br />
          bir araştırmacıdır.
        </h1>
        <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
          <button className="btn solid">felsefemizi okuyun →</button>
          <button className="btn">başvuru</button>
        </div>
        <Annotation style={{ position: 'absolute', top: 80, right: 60, transform: 'rotate(4deg)' }}>
          ↘ büyük tipografi,<br />sayfanın havasını kuruyor
        </Annotation>
      </div>
      {/* Video reel band */}
      <div style={{ padding: '24px 56px 36px', borderTop: '1.5px solid #1A1A1A' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <h3 className="hand" style={{ margin: 0, fontSize: 28 }}>atölyeden anlar</h3>
          <span className="mono">tümü →</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {[1,2,3,4].map(i => (
            <div key={i} className="ph tall" style={{ aspectRatio: '9/14' }}>
              <PlayBadge size={40} />
              <div style={{ position: 'absolute', bottom: 8, left: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 9 }}>
                [reel {String(i).padStart(2,'0')}]
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Three pillars */}
      <div style={{ padding: '36px 56px', borderTop: '1.5px solid #1A1A1A', background: '#F2EDE4' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {[
            { n: '01', t: 'Atölye', d: 'Çocuğun düşüncesini görünür kılan stüdyo.' },
            { n: '02', t: 'Doğa', d: 'Toprak, su, taş — ilk öğretmenler.' },
            { n: '03', t: 'Topluluk', d: 'Aile, mahalle, sanatçılar — birlikte büyürüz.' },
          ].map(p => (
            <div key={p.n}>
              <div className="mono" style={{ marginBottom: 6 }}>{p.n}</div>
              <h4 className="hand" style={{ margin: '0 0 6px', fontSize: 28 }}>{p.t}</h4>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: '#3a3a3a' }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V4 — ATELIER CARDS
// Reggio "atelier" metaphor: each section is a card / room.
// ─────────────────────────────────────────────────────────────
function HomeV4_Atelier() {
  const rooms = [
    { n: '01', t: 'Felsefe', sub: 'yüz dil', big: true },
    { n: '02', t: 'Bir Gün', sub: '07:30 → 18:00', media: true },
    { n: '03', t: 'Kadro', sub: '12 öğretmen + atölyeci' },
    { n: '04', t: 'Kayıt', sub: '2026—27 dönemi', cta: true },
  ];
  return (
    <div className="wf" style={{ display: 'flex', flexDirection: 'column' }}>
      <TopNav active="" />
      <div style={{ padding: '20px 24px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div className="mono">3-6 yaş atölyesi</div>
          <h1 className="hand" style={{ margin: '4px 0 0', fontSize: 40, fontWeight: 600 }}>
            <span className="u-wave">aralanan kapılar</span>
          </h1>
        </div>
        <div className="hand" style={{ fontSize: 16, color: '#6b6b6b', maxWidth: 240, textAlign: 'right' }}>
          her kart bir oda. dolaşın, açın, içeri bakın.
        </div>
      </div>
      <div style={{ flex: 1, padding: 20, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '1fr 1fr', gap: 14, minHeight: 0 }}>
        {/* Big card */}
        <div className="sk" style={{ gridColumn: '1 / 3', gridRow: '1 / 3', padding: 18, background: '#FAF7F2', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div className="mono">01 / felsefe</div>
          <h2 className="hand" style={{ fontSize: 44, lineHeight: 1, margin: '8px 0 12px' }}>
            yüz dil<br />yüz fikir
          </h2>
          <div style={{ fontSize: 13, color: '#3a3a3a', maxWidth: 280, lineHeight: 1.5 }}>
            Loris Malaguzzi'nin şiirinden ilham alıyoruz. Çocuk ne çiziyorsa, onu duyuyoruz.
          </div>
          <div className="ph" style={{ flex: 1, marginTop: 14, minHeight: 80 }}>
            [atölye kolajı]
          </div>
          <span className="mono" style={{ position: 'absolute', bottom: 14, right: 16 }}>aç →</span>
        </div>
        {/* Bir Gün — media */}
        <div className="ph" style={{ gridColumn: '3 / 5', gridRow: '1 / 2' }}>
          <PlayBadge size={48} />
          <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
            [02 / bir gün · video]
          </div>
          <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'Caveat, cursive', fontSize: 22, fontWeight: 600 }}>
            07:30 → 18:00
          </div>
        </div>
        {/* Kadro */}
        <div className="sk" style={{ gridColumn: '3 / 4', gridRow: '2 / 3', padding: 14, background: '#F2EDE4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="mono">03 / kadro</div>
            <h3 className="hand" style={{ fontSize: 28, margin: '4px 0 0' }}>12 öğretmen<br />+ 1 atölyeci</h3>
          </div>
          <div style={{ display: 'flex', gap: -4 }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', border: '1.5px solid #1A1A1A', background: i%2 ? '#e8d4b3' : '#FAF7F2', marginLeft: i === 1 ? 0 : -8, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat, cursive' }}>{['A','M','E','T'][i-1]}</div>
            ))}
            <span style={{ fontSize: 11, alignSelf: 'center', marginLeft: 8 }}>tanış →</span>
          </div>
        </div>
        {/* Kayıt CTA */}
        <div className="sk" style={{ gridColumn: '4 / 5', gridRow: '2 / 3', padding: 14, background: '#C89B5C', color: '#FAF7F2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="mono" style={{ color: '#FAF7F2' }}>04 / kayıt</div>
            <h3 className="hand" style={{ fontSize: 26, margin: '4px 0 0', color: '#FAF7F2' }}>2026—27<br />ön kayıt açık</h3>
          </div>
          <button className="btn" style={{ background: '#FAF7F2', alignSelf: 'flex-start' }}>başvur →</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeV1_Editorial, HomeV2_Mosaic, HomeV3_Manifesto, HomeV4_Atelier });
