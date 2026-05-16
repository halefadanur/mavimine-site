# Mavi Mine Anaokulu — Claude Code Bağlamı

Bu dosya her oturumda yüklenir. Kısa giriş bilgisi içerir.
Tam tarih kaydı, kararlar, geçmiş işler için → `PROJE.md`
Rakip haritası → `RAKIPLER.md` · SEO stratejisi → `SEO_STRATEJI.md`

---

## ⚠️ Her sohbette doğrula — Bu üç bilgi başka yerlerde yanlış görünebilir

- **Yaş aralığı:** 2-6 yaş (3-6 değil)
- **Konum:** Kestel/Bursa (İstanbul değil)
- **Hatice Hanım unvanı:** Eğitimci · Kurucu Müdür · Montessori Uzmanı
  ("Pedagog" eski tercih, artık kullanılmıyor. "Pedagoji" bilimi
  korunur, "Montessori Eğitmeni" mesleki etiket korunur.)

---

## Kurum

Mavi Mine Özel Anaokulu — 2-6 yaş, Kestel/Bursa.

- Kurucu: Hatice Adanur Şahin (eğitimci · kurucu müdür · Montessori uzmanı)
- Aile mirası: Üç nesil eğitimci aile
- Kardeş kurum: Eğitimci Dil Konuşma Merkezi (AYRI kurum, AYRI veri, bu projeye DAHİL DEĞİL)
- Bina: Anaokulu olarak inşa edilmiş özel yapı · 900 m² bahçe · 10 güvenlik kamerası
- Danışman kadro: 2 psikolog + 2 dil-konuşma terapisti
- Site: mavimine.com (canlı, GitHub Pages + Cloudflare DNS, HTTPS aktif)

## Slogan ve Kimlik

- **Slogan:** "Çocuğun mavisi, içindeki mine."
- **Motto:** "Eğitimci gelenek, mutlu gelecek."
- **MAMİNO öğrenci profili:** Mutlu, Açık Fikirli, Meraklı, İnsancıl, Nitelikli, Onurlu
- **MAVİ açılımı:** Merak, Açıklık, Vicdan, İlham (çocuğun ufku)
- **MİNE açılımı:** Marifet, İncelik, Nezaket, Emek (çocuğun özü)

## Sınıf yapısı

1. **Minik Afacanlar** (2 yaş, 24-36 ay) — sınıf öğretmeni + yardımcı — rose
2. **Meraklı Minikler** (3-4 yaş, 36-60 ay) — sınıf öğretmeni + yardımcı — sun
3. **Gülen Yüzler** (5-6 yaş, 60-72 ay) — sınıf öğretmeni + branş — teal

**Kural:** Sınıf mevcudu YAZILMAZ. Yardımcı öğretmen vurgusu küçük yaşlarda.

---

## Teknik yapı

- React 18 + Babel Standalone (CDN, build YOK)
- Her HTML sayfa boş `<div id="root"></div>` içerir
- Paylaşılan dosyalar:
  - `mavi-mine.css` — tüm stiller, CSS değişkenleri, ortak class'lar
  - `mm-shared.jsx` — Nav, FooterEl, LogoMark, PageHero (window'a expose)
- Her sayfanın kendi JSX'i: `hifi-*.jsx`, `page-*.jsx`
- Blog için ayrı: `mavi-mine-blog.css` + `hifi-blog-*.jsx`

## Renk paleti (mavi-mine.css'te tanımlı)

- `--teal-deep: #0E8478` (ana yeşil-turkuaz)
- `--orange: #F39233` (vurgu turuncu)
- `--paper: #FFFBF2`, `--milk: #FFF7E8` (krem arkaplanlar)
- Çocuk paleti: `--rose`, `--sun`, `--grass`, `--grape`, `--sky`, `--coral`

## Tipografi

- **Quicksand** — ana font (400-700)
- **Caveat** — el yazısı, vurgu (`<em>` içinde, `.handwritten` class'ı)

## Hazır CSS class'ları (yeniden tanımlama)

`.smile-circle` · `.section-label`(.center) · `.handwritten` · `.scribble` ·
`.ph` (kesik çizgili placeholder) · `.btn`(.orange/.ghost) · `.bubble` ·
`.nav-link.nav-{teal|orange|rose|grape|sky|grass|sun|coral}`

---

## NAV_PAGES (mm-shared.jsx)

Üst seviye nav (kebab-case URL'ler):
- Hakkımızda → `hakkimizda.html`
- Eğitim ▾ (dropdown):
  - Program → `program.html`
  - Sınıflarımız → `siniflarimiz.html`
  - Yaz Okulu → `yaz-okulu.html`
- Destek → `destek.html`
- Kadro → `kadro.html`
- Bir Gün → `bir-gun.html`
- Galeri → `galeri.html`
- Blog → `blog.html`
- SSS → `sss.html`
- İletişim → `iletisim.html`

Nav'da olmayan ama linklenen:
- Anasayfa → `index.html`
- Başvuru kavşağı → `basvuru.html` (3 kartlı seçim)
- Ön Kayıt formu → `on-kayit-formu.html` (vanilla HTML wizard)
- Randevu → `randevu.html`
- Özel Seans → `ozel-seans.html`

---

## Kritik kurallar

1. **Mevcut yapıyı bozma** — Anasayfa MaminoSection, mevcut nav, var olan sayfalar değiştirilmez. Yeni şeyler eklenir.
2. **CSS değişkenlerini kullan** — Yeni renk uydurma, mevcut paletten seç.
3. **Mevcut class'ları kullan** — `.smile-circle`, `.section-label`, `.btn`, `.handwritten` yeniden tanımlanmaz.
4. **Türkçe karakter dosya isimlerinde yok** — `hakkimizda`, `siniflarimiz`, `iletisim` (i ile).
5. **Kebab-case standardı** — yeni dosya isimleri boşluksuz, küçük harf, tireli. URL'lerde %20 yok.
6. **Eğitimci'yi karıştırma** — Mavi Mine ile Eğitimci Dil Konuşma Merkezi ayrı kurumlar.
7. **file:// ile dosya açma** — CORS hatası verir. Mutlaka `http://localhost:8000/...` kullan.

---

## Çalışma yöntemi

- **Yerel:** `cd ~/Desktop/web_code_mavimine && python3 -m http.server 8000` → http://localhost:8000/...
- **Claude Code oturumu:** `cd ~/Desktop/web_code_mavimine && claude`
- **Git push** doğrudan çalışıyor (2026-05-09'da `gh auth login` ile kuruldu, prompt yok)
- **Tasarım kararları:** Tek seçenek/öneri, en mantıklı tahminle ilerle, çoklu menü yapma
- **Kullanıcı (Halef):** Mac kullanıcısı, Türkçe konuşur, Bursa'da. Tarayıcı konsolu / hard refresh / file:// vs http:// ayrımını biliyor

## Blog yayın altyapısı (kritik — adım atlanmamalı)

Bir blog yazısını yayına alırken 4 yer değişir:
1. HTML'de `<meta name="robots">` → `index, follow`
2. `blog.html` POSTS dizisinde yorum içinden çıkar
3. `sitemap.xml`'e URL ekle (lastmod o günkü tarih)
4. Gerekiyorsa diğer yazıların RelatedPosts'larını güncelle

Kademeli yayın zorunlu — 2-3 gün arayla submit, aksi halde AI içerik şüphesi doğar.

## SEO altyapısı kısa özet

- 15 public sayfada tam meta seti (title, description, keywords, canonical, robots, OG, Twitter)
- JSON-LD Schema 4 sayfada — hepsi `@id: https://mavimine.com/#school` ile aynı entity'yi işaret eder
- `robots.txt` Disallow: `Mavi Mine Wireframes.html`, `foto-envanter.html`, `on-kayit-formu.html`
- `sitemap.xml` 16 URL
- Detay → `PROJE.md` → "SEO altyapısı" bölümü
