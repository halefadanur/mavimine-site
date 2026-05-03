// Subpage wireframes — About, Program, Staff, Day, Gallery, Apply, Contact, FAQ

function PageShell({ active, children }) {
  return (
    <div className="wf" style={{ display: 'flex', flexDirection: 'column' }}>
      <TopNav active={active} compact />
      <div style={{ flex: 1, overflowY: 'auto' }}>{children}</div>
      <Footer compact />
    </div>
  );
}

// HAKKIMIZDA / FELSEFEMİZ
function PageAbout() {
  return (
    <PageShell active="Hakkımızda">
      <div style={{ padding: '40px 48px 24px' }}>
        <div className="mono">01 · hakkımızda</div>
        <h1 className="hand" style={{ fontSize: 64, margin: '8px 0 16px', lineHeight: 1, fontWeight: 600 }}>
          <span className="u-wave">çocuk araştırmacıdır</span>
        </h1>
        <div style={{ fontSize: 15, lineHeight: 1.65, maxWidth: 620, color: '#3a3a3a' }}>
          Mavi Mine; Reggio Emilia ilhamlı, 3-6 yaş çocukların kendi sorularıyla büyüdüğü bir atölyedir. Çocuğun yüz dilini ciddiye alır, gözlem ve dokümantasyonla onu görünür kılarız.
        </div>
      </div>
      <div style={{ padding: '0 48px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div className="ph" style={{ aspectRatio: '4/3' }}>[kurucu portresi]</div>
          <div className="ph ochre" style={{ aspectRatio: '4/3' }}>[atölye anı]</div>
        </div>
      </div>
      <div style={{ padding: '0 48px 40px' }}>
        <SectionHead kicker="ilkelerimiz · 04" title="nasıl bakıyoruz" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {[
            ['Yavaş zaman', 'Acele etmeden gözlemek; her keşfin kendi temposu vardır.'],
            ['Yüz dil', 'Çizgi, kil, hareket, müzik — düşüncenin yüz farklı yolu.'],
            ['Dokümantasyon', 'Çocuğun düşüncesini fotoğraf, ses ve nota ile takip ederiz.'],
            ['Topluluk', 'Aileler, sanatçılar ve mahalle birlikte bir öğrenme dokur.'],
          ].map(([t,d]) => (
            <div key={t} className="sk" style={{ padding: 16, background: '#FAF7F2' }}>
              <div className="hand" style={{ fontSize: 26, marginBottom: 4 }}>{t}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: '#3a3a3a' }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// EĞİTİM PROGRAMI
function PageProgram() {
  return (
    <PageShell active="Program">
      <div style={{ padding: '40px 48px 16px' }}>
        <div className="mono">02 · eğitim programı</div>
        <h1 className="hand" style={{ fontSize: 56, margin: '8px 0 12px', lineHeight: 1 }}>program nasıl akar</h1>
      </div>
      <div style={{ padding: '0 48px 20px' }}>
        {/* Age tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
          {['3 yaş · uçurtmalar', '4 yaş · denizatları', '5-6 yaş · pusulalar'].map((t,i) => (
            <span key={t} className="chip" style={{ fontSize: 12, padding: '6px 14px', background: i === 1 ? '#1A1A1A' : 'transparent', color: i === 1 ? '#FAF7F2' : '#1A1A1A' }}>{t}</span>
          ))}
        </div>
        {/* Curriculum strands */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {[
            ['Atölye', ['kil', 'ışık & gölge', 'doğa boyaları']],
            ['Doğa', ['orman gezisi', 'bahçe işi', 'mevsim takvimi']],
            ['Sözcükler', ['hikâye saati', 'iki dilli oyun', 'şiir kutusu']],
          ].map(([head, items]) => (
            <div key={head} className="sk" style={{ padding: 14, background: '#FAF7F2' }}>
              <div className="hand" style={{ fontSize: 26, marginBottom: 8 }}>{head}</div>
              <div style={{ fontSize: 13, lineHeight: 1.7 }}>
                {items.map(it => <div key={it}>· {it}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '20px 48px 36px' }}>
        <div style={{ borderTop: '1.5px solid #1A1A1A', paddingTop: 20 }}>
          <SectionHead kicker="dönem ritmi" title="bir yıl" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
            {['Eylül · tanışma', 'Ocak · derinleşme', 'Nisan · proje', 'Haziran · sergi'].map(t => (
              <div key={t} className="sk-d" style={{ padding: 12, fontSize: 12, background: '#F2EDE4' }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// KADROMUZ
function PageStaff() {
  return (
    <PageShell active="Kadro">
      <div style={{ padding: '40px 48px 8px' }}>
        <div className="mono">03 · kadromuz</div>
        <h1 className="hand" style={{ fontSize: 56, margin: '8px 0 12px' }}>aynı odada büyüyenler</h1>
        <div style={{ fontSize: 14, color: '#3a3a3a', maxWidth: 540 }}>
          12 öğretmen, 1 atölyeci, 1 pedagog. Hepsi en az 5 yıl çocuk gözleminde.
        </div>
      </div>
      <div style={{ padding: '24px 48px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {Array.from({length: 8}).map((_,i) => (
            <div key={i}>
              <div className="ph sq" style={{ marginBottom: 8 }}>[portre {String(i+1).padStart(2,'0')}]</div>
              <div className="hand" style={{ fontSize: 20, fontWeight: 600 }}>[ad soyad]</div>
              <div className="mono" style={{ fontSize: 9 }}>{i === 0 ? 'pedagog · kurucu' : i === 1 ? 'atölyeci' : 'öğretmen'}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// BİR GÜN
function PageDay() {
  const blocks = [
    ['07:30', 'Karşılama', 'sakin müzik, sabah çayı'],
    ['09:00', 'Daire zamanı', 'günün sorusu'],
    ['10:00', 'Atölye', 'kil · boya · ışık'],
    ['12:00', 'Yemek', 'birlikte hazırlanan masa'],
    ['13:30', 'Dinlenme', 'hikâye + sessizlik'],
    ['15:00', 'Bahçe', 'doğanın kendi temposu'],
    ['17:00', 'Aileyle buluşma', 'günün notları'],
  ];
  return (
    <PageShell active="Bir Gün">
      <div style={{ padding: '40px 48px 8px' }}>
        <div className="mono">04 · bir gün</div>
        <h1 className="hand" style={{ fontSize: 56, margin: '8px 0 0' }}>
          <span className="u-wave">07:30 → 18:00</span>
        </h1>
      </div>
      <div style={{ padding: '24px 48px 36px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 28 }}>
        <div className="ph tall" style={{ aspectRatio: 'auto', minHeight: 480 }}>
          <PlayBadge size={56} />
          <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
            [bir gün · 90 sn video]
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {blocks.map(([t,h,d], i) => (
            <div key={t} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 14, padding: '14px 0', borderTop: i === 0 ? 'none' : '1px dashed #1A1A1A', alignItems: 'baseline' }}>
              <div className="hand" style={{ fontSize: 22, color: '#C89B5C', fontWeight: 600 }}>{t}</div>
              <div>
                <div className="hand" style={{ fontSize: 22, fontWeight: 600 }}>{h}</div>
                <div style={{ fontSize: 13, color: '#6b6b6b' }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// GALERİ
function PageGallery() {
  const tiles = [
    { c: '1 / 4', r: '1 / 3', l: '[hero · atölye]', video: true },
    { c: '4 / 6', r: '1 / 2', l: '[bahçe]' },
    { c: '6 / 7', r: '1 / 2', l: '[portre]', ochre: true },
    { c: '4 / 5', r: '2 / 3', l: '[el]' },
    { c: '5 / 7', r: '2 / 3', l: '[grup]' },
    { c: '1 / 3', r: '3 / 4', l: '[doğa]' },
    { c: '3 / 5', r: '3 / 4', l: '[reel]', video: true, ochre: true },
    { c: '5 / 7', r: '3 / 4', l: '[sergi]' },
  ];
  return (
    <PageShell active="Galeri">
      <div style={{ padding: '32px 48px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div className="mono">05 · galeri</div>
          <h1 className="hand" style={{ fontSize: 48, margin: '6px 0 0' }}>günden günler</h1>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['hepsi', 'atölye', 'doğa', 'sergi'].map((t,i) => (
            <span key={t} className="chip" style={{ background: i === 0 ? '#1A1A1A' : 'transparent', color: i === 0 ? '#FAF7F2' : '#1A1A1A' }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 48px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gridAutoRows: '160px', gap: 10 }}>
          {tiles.map((t,i) => (
            <div key={i} className={`ph${t.ochre ? ' ochre' : ''}`} style={{ gridColumn: t.c, gridRow: t.r }}>
              {t.video && <PlayBadge size={36} />}
              <div style={{ position: 'absolute', bottom: 6, left: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 9 }}>{t.l}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// KAYIT / BAŞVURU
function PageApply() {
  return (
    <PageShell active="">
      <div style={{ padding: '40px 48px 8px' }}>
        <div className="mono">06 · kayıt / başvuru</div>
        <h1 className="hand" style={{ fontSize: 56, margin: '8px 0 12px' }}>tanışalım</h1>
        <div style={{ fontSize: 14, color: '#3a3a3a', maxWidth: 540 }}>
          Süreç üç adımda: ön başvuru, okul ziyareti, yerleşme görüşmesi. Aceleyle değil, dikkatle ilerliyoruz.
        </div>
      </div>
      <div style={{ padding: '20px 48px 36px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 28 }}>
        {/* Steps */}
        <div>
          {[
            ['01', 'Ön başvuru', 'Aşağıdaki formu doldurun.'],
            ['02', 'Okul ziyareti', 'Sizinle bir saat birlikte vakit geçirelim.'],
            ['03', 'Yerleşme görüşmesi', 'Çocuğunuzla bir atölye günü.'],
          ].map(([n,h,d],i) => (
            <div key={n} className="sk" style={{ padding: 14, marginBottom: 10, background: i === 0 ? '#F2EDE4' : '#FAF7F2', display: 'flex', gap: 14 }}>
              <div className="hand" style={{ fontSize: 36, color: '#C89B5C', minWidth: 50 }}>{n}</div>
              <div>
                <div className="hand" style={{ fontSize: 22, fontWeight: 600 }}>{h}</div>
                <div style={{ fontSize: 13, color: '#3a3a3a' }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Form */}
        <div className="sk" style={{ padding: 18, background: '#FAF7F2' }}>
          <div className="hand" style={{ fontSize: 24, marginBottom: 10 }}>ön başvuru formu</div>
          {[
            'çocuğun adı',
            'doğum tarihi',
            'veli adı',
            'iletişim (e-posta · telefon)',
            'kısaca anlatır mısınız?',
          ].map((l,i) => (
            <div key={l} style={{ marginBottom: 10 }}>
              <div className="mono" style={{ fontSize: 9, marginBottom: 3 }}>{l}</div>
              <div className="sk-thin" style={{ height: i === 4 ? 60 : 28, background: '#fff' }} />
            </div>
          ))}
          <button className="btn ochre" style={{ marginTop: 6 }}>gönder ↗</button>
        </div>
      </div>
    </PageShell>
  );
}

// İLETİŞİM
function PageContact() {
  return (
    <PageShell active="İletişim">
      <div style={{ padding: '40px 48px 16px' }}>
        <div className="mono">08 · iletişim</div>
        <h1 className="hand" style={{ fontSize: 56, margin: '8px 0 0' }}>kapımızı çalın</h1>
      </div>
      <div style={{ padding: '20px 48px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div className="ph wide" style={{ aspectRatio: 'auto', minHeight: 320 }}>
          [harita · kampüs konumu]
        </div>
        <div>
          {[
            ['ADRES', '[mahalle, sokak]\n[ilçe, istanbul]'],
            ['TELEFON', '[+90 ___ ___ __ __]'],
            ['E-POSTA', 'merhaba@mavimine.org'],
            ['SAATLER', 'Pzt—Cum · 07:30—18:00'],
            ['SOSYAL', '@mavimine · instagram · vimeo'],
          ].map(([k,v]) => (
            <div key={k} style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '1px dashed #1A1A1A' }}>
              <div className="mono" style={{ marginBottom: 4 }}>{k}</div>
              <div className="hand" style={{ fontSize: 20, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// SSS
function PageFaq() {
  const items = [
    ['Yaş aralığınız nedir?', '3-6 yaş arası çocukları kabul ediyoruz; üç ayrı küme: uçurtmalar, denizatları, pusulalar.'],
    ['Pedagojik yaklaşımınız?', 'Reggio Emilia ilhamlı; gözlem, dokümantasyon ve atölye merkezde.'],
    ['Beslenme nasıl?', 'Mevsiminde, yerel ve mümkün olduğunca organik. Çocuklarla birlikte hazırlıyoruz.'],
    ['Sınıf büyüklükleri?', 'Bir öğretmene 6 çocuk düşer. Atölyeci ve pedagog ek olarak gün boyu hazır.'],
    ['Yarım gün seçeneği?', 'Var. 07:30—13:00 yarım, 07:30—18:00 tam gün.'],
    ['Adaptasyon süresi?', 'Tipik olarak 2-3 hafta; ama her çocuğun temposuna göre uzayabilir.'],
  ];
  return (
    <PageShell active="SSS">
      <div style={{ padding: '40px 48px 16px' }}>
        <div className="mono">07 · sıkça sorulanlar</div>
        <h1 className="hand" style={{ fontSize: 56, margin: '8px 0 0' }}>merak ettiğiniz</h1>
      </div>
      <div style={{ padding: '12px 48px 36px', maxWidth: 760 }}>
        {items.map(([q,a], i) => (
          <div key={q} style={{ borderTop: '1.5px solid #1A1A1A', borderBottom: i === items.length-1 ? '1.5px solid #1A1A1A' : 'none', padding: '14px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', cursor: 'pointer' }}>
              <div className="hand" style={{ fontSize: 22, fontWeight: 600 }}>{q}</div>
              <span style={{ fontFamily: 'Caveat, cursive', fontSize: 28, color: '#C89B5C' }}>{i === 0 ? '−' : '+'}</span>
            </div>
            {i === 0 && (
              <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, color: '#3a3a3a', maxWidth: 580 }}>{a}</div>
            )}
          </div>
        ))}
      </div>
    </PageShell>
  );
}

Object.assign(window, { PageAbout, PageProgram, PageStaff, PageDay, PageGallery, PageApply, PageContact, PageFaq });
