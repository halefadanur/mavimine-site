# Mavi Mine Anaokulu — Proje Geçmişi ve Bağlam

> Bu dosya, Mavi Mine Anaokulu web sitesi projesindeki tüm tarih kaydını,
> kararları ve geçmiş işleri içerir. Hızlı giriş için `CLAUDE.md`'ye bak.
> Rakip haritası → `RAKIPLER.md` · SEO stratejisi → `SEO_STRATEJI.md`

---

## İçindekiler

1. Kurum bilgisi
2. Ana mesaj ve kimlik
3. Sınıf yapısı
4. Teknik yapı
5. Form yapısı (3 form)
6. Çalışma yöntemi
7. Tamamlanmış işler (sayfa bazlı)
8. SEO altyapısı (kanonik kaynak)
9. Tarih kaydı (kronolojik)
10. Bekleyen işler
11. Teknik borç
12. Kritik uyarılar

---

## 1. Kurum Bilgisi

**Mavi Mine Özel Anaokulu**, 2-6 yaş, Kestel/Bursa.

- **Kurucu:** Hatice Adanur Şahin (eğitimci · kurucu müdür · Montessori uzmanı)
- **Aile mirası:** Üç nesil eğitimci ailesi
- **Kardeş kurum:** Eğitimci Dil Konuşma Merkezi (ayrı kurum, ayrı veri, bu projeye **dahil değil**)
- **Bahçe:** 900 m²
- **Bina:** Anaokulu olarak inşa edilmiş özel yapı
- **Güvenlik:** 10 kamera
- **Danışman kadro:** 2 psikolog + 2 dil-konuşma terapisti
- **Adres:** Vanimehmet Mah. Şht. Mustafa Kurt Cd. No:48, 16450 Kestel/Bursa
- **Telefon:** 0505 323 41 35
- **E-posta:** merhaba@mavimine.com (ana), bilgi@mavimine.com (yedek). Eski: mavimineanaokulu@gmail.com
- **Instagram:** @mavi_mine__anaokulu
- **TikTok:** @mavimineanaokulu
- **Eğitim saatleri:** Pazartesi-Cuma 07.30 — 18.30
- **Görüşme/ziyaret:** Randevu ile

---

## 2. Ana Mesaj ve Kimlik

### Slogan
**"Çocuğun mavisi, içindeki mine."**

- **Mavi:** gökyüzü, deniz, sınırsız hayal — çocuğun ufku
- **Mine:** değerli taş, sabırla parlatılan — çocuğun içindeki biricik değer

### Motto
**"Eğitimci gelenek, mutlu gelecek."**

### MAMİNO öğrenci profili (anasayfada)
**M-A-M-İ-N-O:** Mutlu, Açık Fikirli, Meraklı, İnsancıl, Nitelikli, Onurlu

### MAVİ + MİNE açılımı (anasayfada kısa, hakkımızdada uzun)
- **MAVİ:** Merak, Açıklık, Vicdan, İlham (çocuğun ufku)
- **MİNE:** Marifet, İncelik, Nezaket, Emek (çocuğun özü)

---

## 3. Sınıf Yapısı

3 sınıf:

| Sınıf | Yaş | Kadro | Renk | Tema |
|---|---|---|---|---|
| **Minik Afacanlar** | 2 yaş (24-36 ay) | sınıf öğretmeni + yardımcı | rose | "Sevgiyle alışmak" |
| **Meraklı Minikler** | 3-4 yaş (36-60 ay) | sınıf öğretmeni + yardımcı | sun | "Birlikte oynamayı keşfetmek" |
| **Gülen Yüzler** | 5-6 yaş (60-72 ay) | sınıf öğretmeni + branş | teal | "İlkokula gülerek hazırlanmak" |

**Kurallar:**
- Sınıf mevcudu yazılmaz
- Yardımcı öğretmen vurgusu küçük yaşlarda yapılır

---

## 4. Teknik Yapı

- **Geliştirme:** Mac'te yerel (`~/Desktop/web_code_mavimine`)
- **Claude Code** kuruldu ve aktif kullanılıyor — dosyaları doğrudan düzenleyebiliyor
- **Yerel test:** `python3 -m http.server 8000` → http://localhost:8000/...
- **Site canlı:** mavimine.com (GitHub Pages + Cloudflare DNS, HTTPS aktif, 2026-05-03)
- **Repo:** github.com/halefadanur/secret/mavimine-site (public)
- **Framework:** React 18 + Babel Standalone (CDN'den, **build YOK**)
- **HTML çatısı:** Her sayfa boş `<div id="root"></div>` içerir

### Paylaşılan dosyalar
- `mavi-mine.css` — tüm stiller, CSS değişkenleri
- `mavi-mine-blog.css` — blog için ayrı stiller (~700 satır, .blog-, .q-, .faq-, .related-, .index-, .author- prefix'leri)
- `mm-shared.jsx` — Nav, FooterEl, LogoMark, PageHero (window'a expose edilir)

### Sayfa dosyaları
- Her sayfanın kendi JSX'i: `hifi-home.jsx`, `hifi-hakkimizda.jsx`, `hifi-destek.jsx`, `hifi-iletisim.jsx`, `page-*.jsx`
- Blog yazıları: `hifi-blog-*.jsx` × 9
- Türkçe karakter dosya isimlerinde **kullanılmaz**: hakkimizda, siniflarimiz, iletisim (i ile)

### Renk paleti
- `--teal-deep: #0E8478` (ana yeşil-turkuaz)
- `--orange: #F39233` (vurgu turuncu)
- `--paper: #FFFBF2`, `--milk: #FFF7E8` (krem arkaplanlar)
- Çocuk paleti: `--rose`, `--sun`, `--grass`, `--grape`, `--sky`, `--coral`

### Tipografi
- **Quicksand** — ana font (400-700)
- **Caveat** — el yazısı, vurgu için (`<em>` içinde, `.handwritten` class'ı)

### Mevcut CSS class'ları (yeniden tanımlanmaz)
- `.smile-circle` (renkli yuvarlak harfler)
- `.section-label`, `.section-label.center`
- `.handwritten`, `.scribble`
- `.ph` (kesik çizgili placeholder kutular)
- `.btn`, `.btn.orange`, `.btn.ghost`
- `.bubble` (konuşma balonu, kesik çizgi)
- `.nav-link.nav-{teal|orange|rose|grape|sky|grass|sun|coral}`

### NAV_PAGES (mm-shared.jsx içinde)

Üst seviye nav (kebab-case URL'ler):
- Hakkımızda → `hakkimizda.html`
- **Eğitim ▾** (dropdown grubu, 2026-05-03'te eklendi)
  - Program → `program.html`
  - Sınıflarımız → `siniflarimiz.html`
  - Yaz Okulu → `yaz-okulu.html`
- Destek → `destek.html`
- Kadro → `kadro.html`
- Bir Gün → `bir-gun.html`
- Galeri → `galeri.html`
- Blog → `blog.html` (2026-05-12'de eklendi, grape renk)
- SSS → `sss.html`
- İletişim → `iletisim.html`

Nav'da olmayan ama link verilen URL'ler:
- Anasayfa → `index.html`
- Başvuru kavşağı → `basvuru.html` (3 kartlı seçim: Randevu / Ön Kayıt / Özel Seans)
- Ön Kayıt formu → `on-kayit-formu.html` (vanilla HTML wizard)
- Randevu → `randevu.html`
- Özel Seans → `ozel-seans.html`

---

## 5. Form Yapısı

Sitede 3 ayrı form sayfası var, her biri vanilla HTML wizard:

| Form | URL | Amaç |
|---|---|---|
| Randevu | `randevu.html` | Okul ziyareti |
| Ön Kayıt | `on-kayit-formu.html` | Resmi başvuru (3 adımlı) |
| Özel Seans | `ozel-seans.html` | Özel destek değerlendirmesi |

**Mimari notlar:**
- Hiçbiri JSX değil, hepsi vanilla HTML/CSS/JS
- Deep-link/anchor/query param mekanizması yok (her sayfa kendi başına)
- Form gönderim altyapısı: Formspree iskeleti var ama henüz canlı değil
- `basvuru.html` 3 kartlı kavşak sayfası — yukarıdaki 3 forma yönlendirir

---

## 6. Çalışma Yöntemi

### İki kanallı çalışma
- **Anthropic Projects sohbeti (claude.ai)** → büyük resim, planlama, içerik üretimi
- **Claude Code (Mac terminal)** → dosya değişiklikleri, yerel düzenlemeler

### Claude Code workflow
1. Yerel sunucu açık olmalı: `cd ~/Desktop/web_code_mavimine && python3 -m http.server 8000`
2. Claude Code oturumu: `cd ~/Desktop/web_code_mavimine && claude`
3. `CLAUDE.md` otomatik okunur (proje bağlamı)
4. Değişiklikler tarayıcıda http://localhost:8000/... ile test edilir
5. **Git push doğrudan çalışıyor** — 2026-05-09'da `gh auth login` ile GitHub kimliği kuruldu, prompt sormuyor

### Karar verme tarzı
- Tek seçenek/öneri ile gidilir, çoklu menü yapılmaz
- Tasarım kararlarında en mantıklı tahminle ilerlenir
- Diff'ler tek tek gözden geçirilir, "all edits" sadece aynı türden ardışık değişikliklerde

### Kullanıcı bağlamı (Halef)
- Mac kullanıcısı, Türkçe konuşur, Bursa'da
- Terminal ve Claude Code'u biliyor
- Tarayıcı konsolu, hard refresh, file:// vs http:// ayrımını biliyor

---

## 7. Tamamlanmış İşler (Sayfa Bazlı)

| Sayfa | JSX Dosyası | Durum |
|---|---|---|
| Anasayfa | `hifi-home.jsx` | ✅ Canlı |
| Hakkımızda | `hifi-hakkimizda.jsx` | ✅ Canlı — MAVİ + MİNE harf açılımı + 6 öğrenci profili |
| Sınıflarımız | `hifi-siniflarimiz.jsx` | ✅ Canlı — 3 sınıf alternatif hizalı (zikzak) |
| Yaz Okulu | `hifi-yaz-okulu.jsx` | ⚠️ Kısmen — yeniden ele alınmalı (bkz. Bekleyen İşler) |
| Destek | `hifi-destek.jsx` | ✅ Canlı — 8 alan + "Bir Seans Nasıl İşler?" 5 adımlı timeline |
| İletişim | `hifi-iletisim.jsx` | ✅ Canlı |
| Kadro | `page-kadro.jsx` | ✅ Canlı — 5 öğretmen + Halef (danışman) + 2 anonim danışman grubu |
| Program | `page-program.jsx` | ✅ Canlı |
| Bir Gün | `page-birgun.jsx` | ✅ Canlı |
| Galeri | `page-galeri.jsx` | ✅ Canlı — 12 fotoğraf, 6 kategori filtresi |
| SSS | `page-sss.jsx` | ✅ Canlı — 11 soru-cevap |
| Başvuru kavşağı | `hifi-on-kayit.jsx` → `basvuru.html` | ✅ Canlı — 3 kartlı seçim |
| Form sayfaları | `on-kayit-formu.html`, `randevu.html`, `ozel-seans.html` | ✅ Vanilla HTML |
| Blog index | `hifi-blog-index.jsx` → `blog.html` | ✅ Canlı |
| Blog yazıları | `hifi-blog-*.jsx` × 9 | 🟡 1 yayında, 8 noindex (kademeli yayın) |

### Öğretmen kadrosu (kadro.html)
- **Hatice Adanur Şahin** — kurucu/müdür, "Eğitimci · Kurucu Müdür" rolü, "Montessori uzmanı" rozeti
- **Reyhan Karaağaç** (2 yaş — Minik Afacanlar)
- **Gülben Topçuoğlu** (3-4 yaş — Meraklı Minikler)
- **Şule Kaya** (5-6 yaş — Gülen Yüzler)
- **Zümra Adanur** (Akıl Oyunları & Kodlama branş öğretmeni)
- Branş öğretmenleri için 3 boş kart yok — sadece 5 dolu kart var, branş öğretmenleri (İngilizce / Halk oyunları / Sevgi dersi) ileride eklenecek

### Blog projesi (2026-05-12)
9 SEO-odaklı blog yazısı, hepsi Hatice Adanur Şahin imzalı, toplam ~16.000 kelime:

| Yazı | Dosya | Tip |
|---|---|---|
| Kestel'de Anaokulu Seçerken 7 Şey | `blog-kestel-anaokulu-secimi.html` | Ana SEO yazısı (7 bölüm) |
| Tuvalet Eğitimi | `blog-tuvalet-egitimi.html` | Hassas, pedagojik |
| Anaokulunda STEAM | `blog-anaokulunda-steam.html` | Programatik |
| Çocuğum Saldırgan | `blog-saldirgan-cocuk.html` | Hassas, davranış |
| 21. Yüzyıl Becerileri | `blog-21-yuzyil-becerileri.html` | Pedagojik felsefe |
| Yaz Okulu 2026 | `blog-yaz-okulu-2026.html` | Sezonsal satış |
| Sevgi Eğitimi | `blog-sevgi-egitimi.html` | Değerler |
| Kayıt Yaşı | `blog-kayit-yasi.html` | Karar destek |
| Anaokulu Binası | `blog-anaokulu-binasi.html` | Rakip yıkma (7 bölüm) |

**Her yazının yapısı:** Hero (eyebrow + başlık + Caveat em + lede + yazar meta) → Intro (3 paragraf) → 4-7 bölüm (her biri: title + intro + detail + bullet sorular + "Bizden örnek") → Closing → CTA → FAQ (4 soru) → Related Posts (3 ilgili) → Author Card.

**SEO altyapısı her yazıda:** Schema.org Article + Open Graph + meta description + keywords + canonical.

### Yayın takvimi

| Tarih | Yazı |
|---|---|
| 12 May ✅ | Kestel'de Anaokulu Seçimi |
| 14 May | Tuvalet Eğitimi |
| 16 May | STEAM |
| 19 May | Saldırgan Çocuk |
| 22 May | 21. Yüzyıl Becerileri |
| 25 May | Yaz Okulu 2026 |
| 28 May | Sevgi Eğitimi |
| 31 May | Kayıt Yaşı |
| 3 Haz | Anaokulu Binası |

**Bir yazıyı yayına alırken 4 yer değişir** (hiçbiri unutulmamalı):
1. HTML `<meta name="robots">` → `index, follow`
2. `blog.html` POSTS dizisinde yorum içinden çıkar
3. `sitemap.xml`'e URL ekle (lastmod o günkü tarih)
4. Gerekiyorsa diğer yazıların RelatedPosts'larını güncelle

### Fotoğraf altyapısı (2026-05-06)
- 68 galeri fotoğrafı `images/galeri/` (sips ile optimize, 1600px max, %82 kalite)
- 5 öğretmen portresi `images/team/` (hatice, reyhan, gulben, sule, zumra)
- `<Img>` component'i `mm-shared.jsx`'te — fotoğraf yoksa otomatik `.ph` placeholder'a düşer
- Sayfalardaki yerleşim: anasayfa (10 foto), galeri (12), program (1), bir-gun (1), siniflarimiz (3), kadro (5)

### Çekim listesi (Hatice Hanım'a teslim edildi)
`MaviMine_Foto-Video_Cekim_Listesi.docx` — telefon kamerası, doğal ışık, çocuk izinleri uyarısı, 5 bölüm, öncelik sırası. Çocuk yüzü olabilir ama Hatice Hanım veli izinleri toplayacak. Çocuksuz "mekan + nesne" fotoğrafları **önce** çekilebilir.

### Tanıtım video brief (2026-05-12)
`MaviMine_Tanitim_Videosu_Brief.docx + .pdf` — 16:9, 90 sn, 6 sahne, kadro: Hatice + öğretmen + terapist + mutfak + toplu. KVKK: çocuk yüzü yok.

### Hatice Hanım için kontrol formu (2026-05-12)
`MaviMine_Blog_Kontrol_Formu.docx` — 36 madde, 3 öncelik:
- **YÜKSEK (15):** Somut sayılar (öğretmen, kamera, bahçe m², tavan, yangın)
- **ORTA (12):** Sınıf rutinleri (bez köşesi, duygu kartları, Neden Saati)
- **DÜŞÜK (9):** Akademik atıflar (Minnesota, NASA, Chapman)

Her madde için 3 seçenek: DOĞRU / ÇIKARILSIN / DÜZELTİLSİN.

### "Pedagog" → "Eğitimci" toptan değişiklik (2026-05-12)
Hatice Hanım kendini "pedagog" yerine "eğitimci" tanımlamayı tercih etti (üç nesil eğitimci aile mirası ile uyumlu).
- **Korunan:** "Montessori Eğitmeni" (mesleki etiket)
- **Korunan:** "pedagoji", "pedagojik" (bilim adı)
- **Değişen:** Author kartları, hero meta, Schema.org jobTitle, HTML title, meta description, içerik metinleri

> ⚠️ **Tutarsızlık:** Sitenin bazı yerlerinde hâlâ "pedagog" geçiyor olabilir. Yeni içerik yazarken "Eğitimci · Kurucu Müdür" kullan. Eski yerlerin temizliği bekleyen iş.

---

## 8. SEO Altyapısı (Kanonik Kaynak)

> Bu bölüm, SEO bağlamı için kanonik kaynaktır. SEO ile ilgili kararlar
> ve iş paketleri burada toplanır. Strateji / kronoloji / zaman tahminleri
> için → `SEO_STRATEJI.md`. Rakip durumu için → `RAKIPLER.md`.

### Sayfa-bazlı meta etiketleri
15 public sayfada tam set: title, description, keywords, canonical (her sayfaya özel), robots, Open Graph (5 etiket), Twitter Card (4 etiket).

17 HTML'den 2'si dışarıda:
- `Mavi Mine Wireframes.html` (noindex işaretli)
- `foto-envanter.html` (noindex işaretli)

### JSON-LD Schema (Schema.org)
4 sayfada yapılandırılmış veri. Hepsi `@id: https://mavimine.com/#school` ile aynı entity'yi işaret eder — Google için tek kurum sinyali:

| Sayfa | Schema | İçerik |
|---|---|---|
| `index.html` | Preschool | Ad, adres, telefon, saatler, alanlar (@id 2026-05-09'da eklendi) |
| `iletisim.html` | Preschool | + geo (40.1956333, 29.213412) + contactPoint + areaServed (Bursa/Kestel/Gürsu/Cumalıkızık) + audience |
| `sss.html` | FAQPage | 11 soru-cevap (mainEntity dizisi) |
| `kadro.html` | Preschool + employee | 6 isimli Person (Hatice, Reyhan, Gülben, Şule, Zümra, Halef), hepsi worksFor: #school |

Blog yazıları ayrıca Schema.org Article structured data taşır.

### İndekslemeden çıkarılan sayfalar (2026-05-09)
- `Mavi Mine Wireframes.html` — `<meta name="robots" content="noindex,nofollow,noarchive,nosnippet">` + robots.txt Disallow
- `foto-envanter.html` — aynı meta + robots.txt Disallow (.gitignore'da, repo'ya gitmez ama defansif sigorta)
- `on-kayit-formu.html` — sadece robots.txt Disallow (form sayfası, kavşaktan gelinmesi tercih edilir)

### Robots / Sitemap
- `robots.txt` — User-agent *, Allow /, Disallow 3 sayfa, Sitemap referansı
- `sitemap.xml` — 16 URL (14 mevcut + blog.html + Kestel blog), priority/changefreq belirlenmiş

### Google Search Console
- Sahiplik doğrulandı (mavimine.com, 2026-05-03)
- Sitemap gönderildi, 16 sayfa keşfedildi
- 2026-05-09'da JSON-LD genişletmesi sonrası 9 sayfa "Dizine eklenmesini iste" tıklandı
- 2026-05-10'da 7 sayfa daha "Dizine eklenmesini iste" tıklanacak (kalan 4 + retry 3)

### Rich Results Test (2026-05-09)

| URL | Sonuç |
|---|---|
| `iletisim.html` | ✅ 2 geçerli rich result (LocalBusiness + Organization) |
| `sss.html` | ✅ FAQ rich result geçerli |
| `kadro.html` | ℹ️ Person için rich result UI yok ama Validator 0 hata |
| `index.html` | (henüz test edilmedi, koşulabilir) |

### Google Business Profile
- Profil aktif: 5.0 yıldız, 34 yorum (2026-05-12 itibarıyla)
- Kategori: **Anaokulu** (birincil) + Kreş + Eğitim Kurumu + Montessori Anaokulu
- 20 hizmet listelenmiş: Anaokulu, Yaz okulu, Oyun grubu, Oyun terapisi, Aile danışmanlığı, Eğitim koçluğu, Drama, STEAM Eğitimi, Kodlama, Tarım Etkinlikleri, Yüzme, İngilizce, Kum Havuzu, Değerler Eğitimi, Dil-Konuşma Desteği, vb.
- Her hizmette ~300 karakter açıklama
- Açıklama metni Mavi Mine kimliğiyle güncel (740 karakter, "kreş", "Gürsu", "Cumalıkızık" anahtar kelimeleri ile)

### Kademeli blog yayın altyapısı (NOINDEX sistemi)
- Sadece `blog-kestel-anaokulu-secimi.html` yayında (index, follow)
- Diğer 8 yazı: `<meta name="robots" content="noindex, nofollow">`
- `blog.html` POSTS dizisinde sadece Kestel görünür (8 yazı yorum içinde)
- Kestel yazısının `<RelatedPosts />` JSX yorumunda (3 referans yazı gizli)

**Sebep:** 9 yazıyı bir günde submit etmek "AI içerik şüphesi" doğurur. 2-3 gün arayla submit zorunlu.

### Eksik / Bekleyen SEO İşleri
- Favicon ekosistemi (`favicon.ico` + `apple-touch-icon.png` + `manifest.webmanifest`) — kökte yok, hiçbir HTML link de etmiyor
- Sayfa-bazlı `og:image` (şu an hepsi logo; yaz-okulu/sınıflar/galeri için ayrı görsel)
- Anasayfa Rich Results Test koşulması
- 1-2 hafta sonra GSC verileri gelince anahtar kelime stratejisi rafine edilir

### Önemli: Yayın hazırlığı koşulları
Kademeli yayın takvimi (14 May - 3 Haz) **Hatice Hanım'ın 9 yazıyı okuyup onaylamasına bağlı.** Onay olmadan submit yapılmaz.

---

## 9. Tarih Kaydı (Kronolojik)

### 📌 2026-05-03 — Site canlıya çıktı (büyük gün)

#### Sabah: Dosya isimleri sadeleştirildi (GitHub Pages hazırlığı)
Tüm sayfalar yeni adlandırma şemasına geçti:
- `Mavi Mine Anasayfa.html` → `index.html`
- `Mavi Mine Hakkimizda.html` → `hakkimizda.html`
- `Mavi Mine Bir Gun.html` → `bir-gun.html`
- `Mavi Mine On Kayit.html` → `basvuru.html`
- (ve diğerleri aynı şemada: küçük harf, tireli, Türkçe karaktersiz)

**Sebep:** GitHub Pages'te URL'lerde %20 (boşluk) görünmesin, temiz linkler olsun.

`mm-shared.jsx`'teki NAV_PAGES ve footer linkleri de yeni isimlere güncellendi.

#### Öğleden sonra: Site canlıya çıktı
- GitHub repo açıldı: `github.com/halefadanur/secret/mavimine-site` (public)
- GitHub Pages aktifleştirildi: `halefadanur.github.io/mavimine-site`
- Custom domain bağlandı: mavimine.com (Cloudflare DNS, 4 A + 1 CNAME, proxy off)
- E-posta routing aktif — Cloudflare Email Routing ile `merhaba@mavimine.com` ve `bilgi@mavimine.com` gerçek adreslere yönlendiriliyor
- Mobil hamburger menü kuruldu

#### Mobil düzeltmeler
- Yatay scroll engellendi (defansif `overflow-x: hidden` + `box-sizing` kontrolü)
- Kadro / Galeri / Bir Gün / Program / Hakkımızda inline grid'ler class'a taşındı, mobile responsive
- Footer 4 sütun → mobilde 1 sütun
- Program/SSS kartları: ikon yan yana → ikon üstte, yazı altta
- Bir Gün hero başlığı + arka SVG mobilde küçültüldü
- Destek timeline kartları `min-width: 0` ile responsive

#### Footer ve iletişim güncellendi
- Footer BAĞLAN sütununa İletişim linki eklendi
- Footer İLETİŞİM sütunu gerçek bilgilerle dolduruldu
- `hifi-iletisim.jsx` ana email: gmail → merhaba@mavimine.com
- `page-iletisim.jsx` silindi — `iletisim.html` artık `hifi-iletisim.jsx` çağırıyor

#### Klasör temizliği
Şu 7 dosya Trash'e gönderildi:
- `Mavi Mine Kayit.html`, `page-kayit.jsx`, `hifi-home - eski.jsx`, `page-hakkimizda - eski.jsx`, `Mavi Mine Hakkimizda - eski.html`, `Mavi Mine Anasayfa - Taslak.html`, `hifi-home.jsx?v=3`

#### Akşam: HTTPS + dropdown + içerik
- HTTPS aktivasyonu tamamlandı (Let's Encrypt sertifikası)
- Sınıflarımız ve Yaz Okulu sayfaları nav'a eklendi (Eğitim dropdown grubu içinde)
- "Eğitim" dropdown menüsü eklendi
- Mobil hamburger: Eğitim collapse toggle
- Site geneli yaş 3-6 → 2-6, İstanbul → Bursa düzeltmesi
- Vurgu kelimeleri yanındaki noktalama renk tutarlılığı (11 dosyada 33 düzeltme)
- SSS sayfasına "Eğitim ücretiniz bölge okullarından yüksek mi?" sorusu eklendi

#### Gece: SEO + Google Business Profile (FAZ 1)
- Tüm 15 sayfaya meta tag'ler
- Open Graph + Twitter Card her sayfada
- `robots.txt` + `sitemap.xml` (14 URL)
- Google Search Console kayıt + sahiplik doğrulandı
- Structured Data anasayfada
- GBP aktif (5.0 yıldız, 18 yorum), kategori "Eğitim Kurumu" → "Anaokulu", 11 hizmet eklendi

#### Başvuru kavşağı kuruldu (gece ikinci tur)
- Eski form sayfası: `basvuru.html` → `on-kayit-formu.html` (rename)
- 4 spesifik form referansı yeni dosya adına güncellendi
- Yeni dosyalar: `basvuru.html` (kavşak) + `hifi-on-kayit.jsx`
- `mavi-mine.css` sonuna `/* BAŞVURU KAVŞAĞI */` bloğu (~301 satır, .cr-* prefix)

**Kavşak yapısı:** Hero ("iyi ki yazdınız — / Önce tanışalım.") → 3 kart (Randevu Al — öne çıkan turkuaz / Ön Kayıt — turuncu / Özel Seans — rose) → Yardım şeridi.

#### Sınıflarımız sayfası kuruldu
- Yeni dosyalar: `siniflarimiz.html` + `hifi-siniflarimiz.jsx`
- `mavi-mine.css` sonuna `/* SINIFLARIMIZ SAYFASI */` bloğu (~421 satır, .cls-* prefix)
- NAV_PAGES'e eklendi

#### Yaz Okulu sayfası kuruldu — KISMEN
**Bağlam:** Bilge Çocuk'un "DEV KAMPANYA!" tipi soyut afişine karşı, sıcak ve samimi bir yaz okulu sayfası.

**KRİTİK İÇ BİLGİ:** Bilge Çocuk afişindeki TÜM kavramlar ("UZMAN KADRO", "GÜVENLİ ORTAM", "EĞİTİCİ ETKİNLİKLER", "DOĞA İLE İÇ İÇE", "SOSYAL GELİŞİM", "MUTLU VE ÖZGÜVENLİ ÇOCUKLAR") aslında MAVİ MİNE'NİN ESKİ BROŞÜRÜNDEN ÇALINMIŞ. Bu kavramlar artık çalınmış mal — Mavi Mine sayfasında kullanılmamalı.

**YENİ DİL YARATILMALI:** Sahip olunan, çalınamayacak kadar somut, kişiye/yere özgü kavramlar.

**Yapılan:**
- Yeni dosyalar: `yaz-okulu.html` + `hifi-yaz-okulu.jsx`
- `mavi-mine.css` sonuna `/* YAZ OKULU SAYFASI */` bloğu (.yaz-* prefix, v3 final, ~705 satır)
- NAV_PAGES'e eklendi

**Yaz okulu kararları:**
- Açık: HERKESE
- Süre: Yarım gün + Tam gün
- Yaş: Sayfada yazılmadı (mevzuat netliği için)
- Slogan (geçici): "Bu yaz çocuklar çıplak ayakla koşsun."
- Fotoğraflar: Stok kullanılmaz

**KAPANIŞ DEĞERLENDİRMESİ — sayfa MÜKEMMEL DEĞİL:** Hâlâ "havada, bağlamsız, zoraki sıkıştırılmış" hissi veriyor. Hero'daki 4 kanıt rozeti yapısal olarak Bilge Çocuk afişine benziyor. **Yeniden ele alınacak — bekleyen iş.**

---

### 📌 2026-05-06 — Fotoğraf yerleştirme oturumu
- 68 fotoğraf optimize edilip `images/galeri/` (sips, 1600px max, %82 kalite)
- 5 öğretmen portresi `images/team/` (hatice, reyhan, gulben, sule, zumra)
- `<Img>` component'i `mm-shared.jsx`'e eklendi — graceful fallback
- Sayfalardaki yerleşim: anasayfa (10 foto), galeri (12), program (1), bir-gun (1), siniflarimiz (3), kadro (5)

---

### 📌 2026-05-09 — SEO genişletme oturumu
- 17 HTML denetimi → 15 public sayfada meta seti tam
- JSON-LD genişletildi: `index.html`'e @id, `iletisim.html` / `sss.html` / `kadro.html`'e tam schema bloğu (+208 satır)
- Üç sayfa da `@id: https://mavimine.com/#school` ile bağlandı
- `foto-envanter.html` + `Mavi Mine Wireframes.html` indekslemeden çıkarıldı
- Rich Results Test: iletisim ✅, sss ✅ (FAQ), kadro ℹ️
- GSC'de 9 sayfa "Dizine eklenmesini iste" tıklandı
- `gh auth login` ile GitHub CLI kimliği kuruldu — git push doğrudan çalışıyor
- 2 commit + push: 044d658, a84576c

---

### 📌 2026-05-12 — Blog projesi tamamlandı + GBP FAZ 3

#### Google Business Profile FAZ 1 + FAZ 2
- Açıklama yeniden yazıldı (740 karakter, "kreş", "Gürsu", "Cumalıkızık" anahtar kelimeleri)
- "Eğitim Kurulu" yanlış kategorisi silindi → "Eğitim Kurumu" eklendi
- "Montessori Anaokulu" eklendi
- 9 yeni hizmet eklendi (her birine 300 karakter açıklama)

#### Google Business Profile FAZ 3 (kısmi)
- 3 eski Mamino postu silindi
- Yaz okulu postu reddedildi (Google spam filtresi), silindi
- Foto silme atlandı, Q&A atlandı, ürün ekleme bloke
- Net sonuç: Profil Kestel'in en eksiksizlerinden

#### 9 SEO-odaklı blog yazısı yayınlandı
- Blog iskelet dosyaları: `blog.html`, `hifi-blog-index.jsx`, `mavi-mine-blog.css`, `hifi-blog-*.jsx` × 9
- NAV_PAGES'e Blog eklendi (Galeri ile SSS arasına, grape rengi)
- Pedagog → Eğitimci toptan değişiklik
- Kademeli yayın altyapısı (NOINDEX sistemi) kuruldu
- Sitemap re-submit ✅ (16 URL keşfedildi)

**Son push hash:** 2a97e9b

---

## 10. Bekleyen İşler

### Yüksek öncelik

- **⭐⭐⭐ Yaz Okulu sayfası yeniden ele alınmalı** — taze kafayla, eski broşür elimizde, çalınmış kavramlardan kaçınarak. Hero komple yenilenmeli, eski broşür istenmeli, sahip olunan ve çalınamayan yeni bir dil yaratılmalı. Reddedilen iyileştirmeler: nav ikonu yok ("çingene pazarı olur"), stok foto yok ("dürüstlüğe aykırı").

- **⭐⭐⭐ Fotoğraf optimizasyonu** — `images/okul_*.jpg` dosyaları 8-10 MB civarı; mobilde yavaş, Lighthouse düşer. Hedef: 1920×1080 (yatay) / 1200×1600 (dikey) max, JPG quality 80-85, 200-500 KB. **Kural:** Yeni gelen tüm fotolar optimize edilmeden repo'ya eklenmez.

- **⭐⭐ Pedagog → Eğitimci tutarsızlık temizliği** — sitede hâlâ bazı yerlerde "pedagog" geçiyor. Grep'leyip temizle.

- **⭐⭐ Anasayfa Reasons "Eğitimci Gelenek" kartı doğrulaması** — Halef "8 sebep, bir okul" formuna geçilmesini istemişti. REASONS dizisinde "Eğitimci Gelenek" kartı var mı, "Yedi sebep" mi "Sekiz sebep" mi? Kontrol et.

### Orta öncelik

- Hatice Hanım fotoğraf çekimleri (çekim listesi gönderildi, beklemede)
- GSC sayfa indeksleme — 2026-05-10 sonrası kalan sayfalar
- Kadro sayfası gözden geçirme
- Yaz okulu için ayrı kayıt formu (şimdilik On Kayit kavşağına bağlı)
- Favicon ekosistemi
- Sayfa-bazlı og:image
- Karekod (QR) — site URL'i için broşür/kartvizit

### Düşük öncelik / İleride

- Instagram entegrasyonu — 6 ay sonra yeniden değerlendir (Behold.so önerildi)
- Eski `images/team/team-01.jpeg ... team-05.jpeg` — kullanılmıyor, silinebilir
- Parantezli çirkin dosya adları — `whatsapp_image_2026-05-03_at_23.35.48_(1).jpg` gibi, temizlenebilir
- WebP geçişi + lazy loading + srcset

### Durumu bilinmiyor / Doğrulanacak

- **Bekleyen lokal patch'ler:** `PATCH-hifi-iletisim-ContactCrossroad.jsx` ve `mavi-mine-CSS-EKLEME-iletisim-kavsak.css` — `.gitignore`'da, repo'ya dahil değil. **Karar verilmeli:** ya uygulanır ya silinir.

### SEO işleri için ayrı doküman

Tüm SEO bekleyen işleri (anasayfa düzeltmesi, 5 kategori sayfası, GBP FAZ 3 kalanları, yorum stratejisi, NAP, backlink, Google Ads) → `SEO_STRATEJI.md` → "Yapılacaklar" bölümü.

---

## 11. Teknik Borç

### Anasayfa MaminoSection refactor (öncelik: orta)

**Tespit (2026-05-03):**
- `hifi-home.jsx`'te 21 yerde "MAMİNO" geçiyor: `function MaminoSection()` + 18 farklı `.mamino-*` class kullanımı
- "MAMİNO" eski okul ismi/kimliği. Yeni isim "Mavi Mine".
- Sayfada GÖRSEL olarak MAMİNO yazmıyor, sadece kod içi naming
- `.mamino-*` class'ları paylaşılan `mavi-mine.css`'te TANIMLI DEĞİL — anasayfa HTML'in inline `<style>` bloğunda gömülü (mimari uyumsuzluk)

**Yapılacak:**
1. Anasayfa `<style>` bloğundaki `.mamino-*` tanımlarını `mavi-mine.css`'e taşı
2. Class isimlerini yeniden adlandır: `.mamino-*` → `.mavimine-*` ya da `.felsefe-*`
3. JSX'te `MaminoSection` → `FelsefeSection`
4. Yorum satırlarını güncelle

**Risk:** Class değiştirirken hata yapılırsa anasayfa bozulabilir.
**Aciliyet:** Düşük — sayfa görsel olarak çalışıyor.

---

## 12. Kritik Uyarılar

1. **Mevcut yapıyı bozma** — Anasayfa MaminoSection, mevcut nav yapısı, var olan sayfalar değiştirilmez. Yeni şeyler eklenir.
2. **CSS değişkenlerini kullan** — Yeni renk uydurma, mevcut paletten seç (`--teal-deep`, `--orange` vb.)
3. **Class'ları kullan** — `.smile-circle`, `.section-label`, `.btn`, `.handwritten` yeniden tanımlanmaz.
4. **Türkçe karakter dosya isimlerinde yok** — Hakkimizda, Siniflarimiz, Iletisim (i ile)
5. **Eğitimci'yi karıştırma** — Mavi Mine ile Eğitimci Dil Konuşma Merkezi ayrı kurumlar.
6. **`file://` ile dosya açma** — CORS hatası verir. Mutlaka `http://localhost:8000/...` kullan.
7. **"Eğitimci" tercihi** — Yeni içeriklerde Hatice Hanım için "pedagog" yerine "eğitimci" kullan. "Montessori Eğitmeni" ifadesi korunur. "Pedagoji" bilimi yine kullanılır.
8. **Kebab-case standardı** — Yeni dosya isimleri boşluksuz, kebab-case. URL'lerde %20 yok.
9. **Blog yayın altyapısı** — Bir yazıyı yayına alırken 4 yer değişir. Hiçbiri unutulmamalı.
10. **Kademeli yayın zorunlu** — 9 yazıyı bir günde Search Console'a submit etmek "AI içerik şüphesi" doğurur. 2-3 gün arayla submit.
11. **Hatice onayı olmadan submit yok** — Yayın takvimi Hatice Hanım'ın 9 yazıyı okuyup onaylamasına bağlı.
12. **Reklam vs Organik** — Ayrı sistemler. Reklam organik sıralamayı YÜKSELTMEZ.

---

*Son güncelleme: 16 Mayıs 2026*
