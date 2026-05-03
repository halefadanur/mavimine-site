// Main app — wires variants into the design canvas

const { DesignCanvas, DCSection, DCArtboard, DCPostIt } = window;

function App() {
  return (
    <DesignCanvas>
      <DCSection id="home" title="Anasayfa · 4 yön" subtitle="Aynı içerik, dört farklı düzen. Her artboard'a tıklayarak büyütebilirsiniz.">
        <DCArtboard id="v1" label="V1 · Editorial Magazine" width={900} height={620}>
          <HomeV1_Editorial />
        </DCArtboard>
        <DCArtboard id="v2" label="V2 · Galeri Mosaic" width={900} height={620}>
          <HomeV2_Mosaic />
        </DCArtboard>
        <DCArtboard id="v3" label="V3 · Manifesto First" width={900} height={620}>
          <HomeV3_Manifesto />
        </DCArtboard>
        <DCArtboard id="v4" label="V4 · Atelier Cards" width={900} height={620}>
          <HomeV4_Atelier />
        </DCArtboard>
      </DCSection>

      <DCSection id="subpages" title="Alt sayfalar" subtitle="Tüm varyasyonlarda paylaşılan iç sayfa wireframe'leri">
        <DCArtboard id="about" label="Hakkımızda / Felsefemiz" width={900} height={720}>
          <PageAbout />
        </DCArtboard>
        <DCArtboard id="program" label="Eğitim Programı" width={900} height={720}>
          <PageProgram />
        </DCArtboard>
        <DCArtboard id="staff" label="Kadromuz" width={900} height={720}>
          <PageStaff />
        </DCArtboard>
        <DCArtboard id="day" label="Bir Gün" width={900} height={720}>
          <PageDay />
        </DCArtboard>
        <DCArtboard id="gallery" label="Galeri" width={900} height={720}>
          <PageGallery />
        </DCArtboard>
        <DCArtboard id="apply" label="Kayıt / Başvuru" width={900} height={720}>
          <PageApply />
        </DCArtboard>
        <DCArtboard id="contact" label="İletişim" width={900} height={720}>
          <PageContact />
        </DCArtboard>
        <DCArtboard id="faq" label="SSS" width={900} height={720}>
          <PageFaq />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
