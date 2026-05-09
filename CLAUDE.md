# Mavi Mine Anaokulu — Web Sitesi Bağlamı

Bu dosya, Claude Code'un her oturum başında okuduğu proje bağlamıdır. Sayfa eklerken/değiştirirken buradaki kuralları izle.

## Kurum

- **Mavi Mine Özel Anaokulu** — 3-6 yaş, Kestel/Bursa
- **Kurucu:** Hatice Adanur Şahin (pedagog, Montessori eğitimi almış)
- **Aile mirası:** Üç nesil eğitimci aile
- **Kardeş kurum:** Eğitimci Dil Konuşma Merkezi (AYRI kurum, AYRI veri, bu projeye DAHİL DEĞİL)
- **Bina:** Anaokulu olarak inşa edilmiş özel yapı, 900 m² bahçe, 10 güvenlik kamerası
- **Danışman kadro:** 2 psikolog + 2 dil-konuşma terapisti

## Slogan ve Kimlik

- **Ana slogan:** "Çocuğun mavisi, içindeki mine."
- **Motto:** "Eğitimci gelenek, mutlu gelecek."
- **Mavi:** gökyüzü/deniz/sınırsız hayal — çocuğun ufku
- **Mine:** sabırla parlatılan değerli taş — çocuğun içindeki biricik değer

## MAMİNO Öğrenci Profili (anasayfada var)

- **M**utlu, **A**çık Fikirli, **M**eraklı, **İ**nsancıl, **N**itelikli, **O**nurlu

## MAVİ + MİNE Açılımı (anasayfada kısa, hakkımızdada uzun)

- **MAVİ:** Merak, Açıklık, Vicdan, İlham
- **MİNE:** Marifet, İncelik, Nezaket, Emek

## Sınıf Yapısı (3 sınıf)

1. **Minik Afacanlar** (2 yaş, 24-36 ay) — sınıf öğretmeni + yardımcı öğretmen — rose/pembe — "Sevgiyle alışmak"
2. **Meraklı Minikler** (3-4 yaş, 36-60 ay) — sınıf öğretmeni + yardımcı öğretmen — sun/sarı — "Birlikte oynamayı keşfetmek"
3. **Gülen Yüzler** (5-6 yaş, 60-72 ay) — sınıf öğretmeni + branş öğretmenleri — teal/turkuaz — "İlkokula gülerek hazırlanmak"

**Kural:** Sınıf mevcudu YAZILMAZ. Yardımcı öğretmen vurgusu küçük yaşlarda yapılır.

## Teknik Yapı

- React 18 + Babel Standalone (CDN'den, build YOK)
- Her HTML sayfa boş `<div id="root"></div>` içerir
- Paylaşılan dosyalar:
  - `mavi-mine.css` — Tüm stiller, CSS değişkenleri, ortak class'lar
  - `mm-shared.jsx` — Nav, FooterEl, LogoMark, PageHero (window'a expose edilir)
- Her sayfanın kendi JSX'i: `hifi-home.jsx`, `hifi-hakkimizda.jsx`, `hifi-destek.jsx`, `hifi-iletisim.jsx`, `page-*.jsx` vb.
- **Türkçe karakter dosya isimlerinde KULLANILMAZ:** Hakkimizda, Siniflarimiz, Iletisim (i ile)

## Renk Paleti (mavi-mine.css'te tanımlı)

- `--teal-deep: #0E8478` (ana yeşil-turkuaz)
- `--orange: #F39233` (vurgu turuncu)
- `--paper: #FFFBF2`, `--milk: #FFF7E8` (krem arkaplanlar)
- Çocuk paleti: `--rose`, `--sun`, `--grass`, `--grape`, `--sky`, `--coral`

## Tipografi

- **Quicksand** — ana font (400-700)
- **Caveat** — el yazısı, vurgu için (`<em>` içinde, `.handwritten` class'ı)

## Mevcut CSS Class'ları (yeniden tanımlama)

- `.smile-circle` (renkli yuvarlak harfler)
- `.section-label`, `.section-label.center`
- `.handwritten`, `.scribble`
- `.ph` (kesik çizgili placeholder kutular)
- `.btn`, `.btn.orange`, `.btn.ghost`
- `.bubble` (konuşma balonu, kesik çizgi)
- `.nav-link.nav-{teal|orange|rose|grape|sky|grass|sun|coral}`

## NAV_PAGES (mm-shared.jsx içinde)

Üst seviye nav (kebab-case URL'ler):
- Hakkımızda → `hakkimizda.html`
- **Eğitim ▾** (dropdown grubu)
  - Program → `program.html`
  - Sınıflarımız → `siniflarimiz.html`
  - Yaz Okulu → `yaz-okulu.html`
- Destek → `destek.html`
- Kadro → `kadro.html`
- Bir Gün → `bir-gun.html`
- Galeri → `galeri.html`
- SSS → `sss.html`
- İletişim → `iletisim.html`

Nav'da olmayan ama link verilen URL'ler:
- Anasayfa → `index.html`
- Başvuru kavşağı → `basvuru.html` (3 kartlı seçim: Randevu / Ön Kayıt / Özel Seans)
- Ön Kayıt formu → `on-kayit-formu.html` (vanilla HTML wizard)
- Randevu → `randevu.html`
- Özel Seans → `ozel-seans.html`

> **Eski isimler artık YOK:** "Mavi Mine Hakkimizda.html", "Mavi Mine Kayit.html" gibi boşluklu/Türkçe isimler 2026-05-03'te kebab-case'e taşındı (GitHub Pages URL temizliği için).

## Kritik Kurallar

1. **Mevcut yapıyı bozma** — anasayfa MaminoSection, mevcut nav, var olan sayfalar değiştirilmez. Yeni şeyler eklenir.
2. **CSS değişkenlerini kullan** — yeni renk uydurma, mevcut paletten seç.
3. **Mevcut class'ları kullan** — `.smile-circle`, `.section-label`, `.btn`, `.handwritten` gibi class'lar yeniden tanımlanmaz.
4. **Türkçe karakter** dosya isimlerinde yok (Hakkimizda, Siniflarimiz, Iletisim).
5. **Eğitimci'yi karıştırma** — Mavi Mine ile Eğitimci Dil Konuşma Merkezi ayrı kurumlar. Bu projede sadece Mavi Mine var.
6. **`hifi-home - eski.jsx`, `page-hakkimizda - eski.jsx`** gibi "eski" dosyalar paralel kopyalardır — referans için kalsın, ana dosyalar `hifi-*.jsx` ve `page-*.jsx`'tir.
7. **`wf-*.jsx`, `design-canvas.jsx`, `tweaks-panel.jsx`** wireframe/iterasyon dosyalarıdır — canlı sitenin parçası değil.

## Çalışma Yöntemi

- Site canlı: mavimine.com (GitHub Pages + Cloudflare DNS, HTTPS aktif)
- Statik tanıtım sitesi — backend yok, form gönderim yok (sadece görsel form sayfaları)
- Kullanıcı (Halef) Mac kullanıcısı, Türkçe konuşur, Bursa'da
- Tasarım kararlarında çoklu seçenek yerine **doğrudan en iyi tahminle** gidilir
- Yeni sayfa eklenirken: HTML çatı + JSX + (gerekirse) `mavi-mine.css` eklemesi olarak üç parça halinde verilir
- Yeni sayfa NAV_PAGES'e eklenir (`mm-shared.jsx`)
- **Git push:** `gh auth login` ile kimlik kuruldu (2026-05-09), `git push` doğrudan çalışıyor — prompt yok

## SEO Altyapısı

15 public sayfada tam meta seti (title, description, keywords, canonical, robots, Open Graph, Twitter Card).

JSON-LD Schema 4 sayfada — hepsi `@id: https://mavimine.com/#school` ile aynı entity'yi işaret eder:
- `index.html` — Preschool (temel ad/adres/saatler)
- `iletisim.html` — Preschool + geo (40.1956333, 29.213412) + contactPoint + areaServed (Bursa/Kestel/Gürsu/Cumalıkızık)
- `sss.html` — FAQPage (11 soru-cevap)
- `kadro.html` — Preschool + employee (6 isimli Person, hepsi `worksFor: #school`)

İndekslenmiyor (robots.txt Disallow):
- `Mavi Mine Wireframes.html` (+ noindex meta)
- `foto-envanter.html` (+ noindex meta, ayrıca `.gitignore`'da)
- `on-kayit-formu.html` (sadece Disallow — kavşak `basvuru.html` üzerinden gelinmesi tercih edilir)

**Bağlam dosyaları:**
- `robots.txt` (Disallow listesi + Sitemap referansı)
- `sitemap.xml` (14 URL)

**Eksik (bekliyor):** Favicon ekosistemi (favicon.ico + apple-touch-icon + manifest.webmanifest), sayfa-bazlı `og:image`, GSC re-submit (2026-05-10, 7 sayfa).

**Detaylı SEO bağlamı:** `PROJE_GECMISi.md` → `## 🔍 SEO ALTYAPISI` bölümü.

## Bu Sohbette Hazırlananlar (Geçmiş Bağlam)

- **Hakkımızda sayfası** — `hifi-hakkimizda.jsx` mevcut. Anasayfanın derin versiyonu: MAVİ + MİNE harf açılımı uzun versiyon + 6 öğrenci profili (🌱-🌷).
- **Destek sayfası** — `hifi-destek.jsx` mevcut. 8 alan (Drama çıkarıldı): Oyun Grubu, Dil ve Konuşma, Dikkat ve Kavram, Davranış Desteği, Oyun Terapisi, Psikolojik Danışmanlık, Aile Danışmanlığı, Eğitim Koçluğu. Altta "Bir Seans Nasıl İşler?" 5 adımlı timeline.
- **Sınıflarımız sayfası** — Henüz yok, NAV_PAGES'e eklenmedi. Üç sınıfı alternatif hizalı (sol-sağ-sol) gösteren bir sayfa planı vardı.

## Bu Sohbette Alınan Kararlar (2026-05-03)

### Klasör Temizliği (tamamlandı)
Şu dosyalar Trash'e gönderildi (geri çekilebilir):
- Mavi Mine Kayit.html (eski kayıt sayfası, ölü)
- page-kayit.jsx (yukarıdakinin JSX'i)
- hifi-home - eski.jsx
- page-hakkimizda - eski.jsx
- Mavi Mine Hakkimizda - eski.html
- Mavi Mine Anasayfa - Taslak.html
- hifi-home.jsx?v=3

### Link Güncellemeleri (tamamlandı)
Şu 3 dosyada "Mavi Mine Kayit.html" → "basvuru.html" güncellendi:
- hifi-home.jsx:403 (anasayfa CTA "Başvuru formu" butonu)
- page-hakkimizda.jsx:197 (hakkımızda CTA "Başvuru" butonu)
- page-iletisim.jsx:82 ("Randevu al" butonu, dosya yarı-canlı — 2026-05-03'te ölü dosya olarak silindi)

### İletişim Saatleri Tutarlılığı (tamamlandı)
hifi-iletisim.jsx'te eğitim saatleri 07.30 — 18.30 olarak güncellendi (telefon kartı altyazısı + HoursSection).

### 3 Form Yapısı (mimari karar)
Sitede 3 form var:
1. **randevu.html** — Okul ziyareti
2. **basvuru.html** — Resmi başvuru (3 adımlı wizard) — şu an tüm "Başvur" linkleri buraya gidiyor
3. **ozel-seans.html** — Özel destek değerlendirmesi

Hepsi vanilla HTML, JSX yok, deep-link/anchor mekanizması yok.

### Sıradaki İş — Başvuru Kavşağı (BEKLEMEDE)
KARAR: "basvuru.html" sayfası bir **kavşak** sayfasına dönüştürülecek. Kullanıcı buraya geldiğinde 3 büyük kart görecek:
- Randevu Al → randevu.html
- Ön Kayıt → (yeni form sayfası, On Kayit'in mevcut form içeriği başka bir yere taşınacak — yeni sohbette planlanacak)
- Özel Seans → ozel-seans.html

Bu sohbette HENÜZ YAPILMADI. Yeni sohbette ele alınacak.

### Çalışma Yöntemi Notu
Yerel sunucu: `python3 -m http.server 8000` (klasör içinde, ayrı terminal pencereesi). Tarayıcıda http://localhost:8000/... ile açılır. file:// ile açmak CORS hatası verir.

### Başvuru kavşağı kuruldu (2026-05-03 ikinci sohbet)

**Yapılan değişiklikler:**
- Eski form sayfası: `basvuru.html` → `on-kayit-formu.html` (rename)
- 4 spesifik form referansı yeni dosya adına güncellendi (footer, anasayfa CTA, iletişim CTA, eski iletişim)
- 2 generic link (Nav "Başvur" + Hakkımızda CTA) `basvuru.html`'i göstermeye devam etti — kavşak yerleşince otomatik bağlandı
- Yeni dosyalar oluşturuldu:
  - `basvuru.html` (kavşak HTML iskeleti)
  - `hifi-on-kayit.jsx` (3 kartlı kavşak React kodu)
- `mavi-mine.css` sonuna `/* ====== BAŞVURU KAVŞAĞI ====== */` bloğu eklendi (~301 satır, `.cr-*` prefix)

**Kavşak yapısı:**
- Hero: "iyi ki yazdınız — / Önce *tanışalım*."
- 3 kart (1.25fr · 1fr · 1fr):
  - 🤝 **Randevu Al** (öne çıkan, turkuaz, "Önerilen ilk adım" turuncu rozet) → Randevu.html
  - 📝 **Ön Kayıt** (turuncu) → On Kayit Formu.html
  - 💡 **Özel Seans** (rose) → Ozel Seans.html
- Yardım şeridi: "Bizi *arayın*, beraber bakalım." + telefon/e-posta/saat kartı

**Karar gerekçeleri:**
- "C seçeneği" (rename + spesifik link güncelleme, generic linkleri geçici kırık bırakma) tercih edildi → kavşak yerleşince 2 generic link otomatik doğru hedefi gösterdi, ekstra rollback işi olmadı

### Sınıflarımız sayfası kuruldu (2026-05-03 ikinci sohbet)

**Yapılan:**
- Yeni dosyalar: `siniflarimiz.html` + `hifi-siniflarimiz.jsx`
- `mavi-mine.css` sonuna `/* SINIFLARIMIZ SAYFASI */` bloğu (~421 satır, `.cls-*` prefix)
- `mm-shared.jsx` NAV_PAGES'e `['Sınıflarımız', 'siniflarimiz.html']` eklendi (Hakkımızda ile Program arasına)

**Sayfa yapısı:**
- Hero: "üç yaş, üç yuva — / Her çocuğun *kendi sınıfı*."
- 3 sınıf alternatif hizalı (zikzak): Minik Afacanlar (rose, 2 yaş), Meraklı Minikler (sun, 3-4 yaş), Gülen Yüzler (teal, 5-6 yaş)
- Her sınıf 3 kutu: Sınıf kadrosu + Bir gün böyle akar + Bu yıl odaklandığımız gelişim
- Karar yardımcısı: "Çocuğunuza hangi sınıf uygun?" 3 mini kart
- Sticky görseller (1100px+)

### Yaz Okulu sayfası kuruldu — KISMEN, yarın yeniden ele alınacak (2026-05-03 ikinci sohbet)

**Bağlam:** Halef başka bir anaokulunun (Bilge Çocuk) "DEV KAMPANYA!" tipi soyut afişini gösterip Mavi Mine için "mükemmel, cezbedici, ikna edici" yaz okulu sayfası istedi. Sayfanın felsefesi: afiş tipi gürültünün TAM ZIDDI — sıcak, samimi, hikâye odaklı.

**KRİTİK İÇ BİLGİ:** Bilge Çocuk afişindeki TÜM kavramlar ("UZMAN KADRO", "GÜVENLİ ORTAM", "EĞİTİCİ ETKİNLİKLER", "DOĞA İLE İÇ İÇE", "SOSYAL GELİŞİM", "MUTLU VE ÖZGÜVENLİ ÇOCUKLAR") aslında MAVİ MİNE'NİN ESKİ BROŞÜRÜNDEN ÇALINMIŞ. Bu kavramlar artık çalınmış mal — Mavi Mine sayfasında kullanılmamalı, çünkü:
- Çalınanın kullanılması rakibinkiyle aynı dili paylaşmamıza yol açar
- Veli "bunlar aynı şey" diye düşünür
- Bilge Çocuk'tan ayrışmamız zorlaşır

YENİ DİL YARATILMALI: Sahip olunan, çalınamayacak kadar somut, kişiye/yere özgü kavramlar. Soyut sıfatlar değil, gerçek detaylar. Slogan değil hikâye.

**Yapılan değişiklikler:**
- Yeni dosyalar: `yaz-okulu.html` + `hifi-yaz-okulu.jsx`
- `mavi-mine.css` sonuna `/* YAZ OKULU SAYFASI */` bloğu (.yaz-* prefix, v3 final, ~705 satır)
- `mm-shared.jsx` NAV_PAGES'e `['Yaz Okulu', 'yaz-okulu.html']` (SSS ile İletişim arasına)

**Yaz okulu kararları:**
- Açık: HERKESE
- Süre: Yarım gün + Tam gün
- Yaş: Sayfada yazılmadı (mevzuat netliği için, en sonunda meta pill'den komple silindi)
- Tarih: 2026 yazı (esnek, sayfada kesin tarih yok)
- Slogan (geçici): "Bu yaz çocuklar çıplak ayakla koşsun."
- Fotoğraflar: Stok kullanılmaz (Mavi Mine'nin "kendi bahçemiz, kendi mutfağımız" söylemiyle çelişir)

**Halef geri bildirimleriyle yapılan iterasyonlar (3):**
- Iter 1 → "Ucuz rakibin iddialı başlıkları karşısında fazla mütevazı" → 3 katmanlı güçlendirme: hero kanıt rozetleri + Üç Soru bloku + etkinlik kanıt etiketleri
- Iter 2 → "2-10 yaş mevzuata uygun mu?" → "2-6 yaş"a çekildi, sonra meta pill'den komple silindi
- Iter 3 → "Yazılar küçük ve okuması zor" → CSS v3: tüm metinler 14.5px → 17px, line-height açıldı, closer cümleler 28px → 34px

**KAPANIŞ DEĞERLENDİRMESİ — sayfa MÜKEMMEL DEĞİL:**
Halef sayfanın hâlâ "havada, bağlamsız, zoraki sıkıştırılmış" hissi verdiğini söyledi. Spesifik sorunlar:
- Hero'daki 4 kanıt rozeti (900 m² / Kendi mutfak / Üç nesil / Pedagog) Bilge Çocuk afişinin alt rozetlerine YAPISAL OLARAK BENZİYOR (rakibi taklit etmişiz)
- "Pedagog" rozeti yaz okulu için ALAKASIZ — anaokulu kanıtı, yaz okulu deneyimine doğrudan katkısı yok
- Sayfa "iddialı + doğal + mümkün + çarpıcı" olmalı, şu an sadece kısmen

**YARIN YAPILACAK: Yaz okulu sayfası baştan ele alınacak.**
- Hero komple yenilenmeli (4 rozet havada kalıyor, slogan tek başına yetmez)
- Eski broşür istenmeli — Bilge Çocuk'un çaldığı kavramlar netleşsin, yasaklı kelime listesi çıkarılsın
- Sahip olunan, çalınamayan yeni bir dil yaratılmalı
- Her unsur "yaz okulu deneyimine doğrudan katkısı var mı?" sorusundan geçmeli (Pedagog gibi alakasız şeyler atılacak)
- Reddedilen iyileştirmeler: nav ikonu yok ("çingene pazarı olur"), stok foto yok ("dürüstlüğe aykırı")

### Hatice Hanım için fotoğraf-video çekim listesi hazırlandı (2026-05-03 ikinci sohbet)

**Çıktı:** `Mavi Mine — Foto-Video Cekim Listesi.docx` (Word doküman, kapsamlı)

**İçerik:**
- Çekim ilkeleri (telefon kamerası yeterli, doğal ışık, çocuk izinleri uyarısı)
- 5 bölüm: Anasayfa, Hakkımızda, Sınıflarımız (3 sınıf ayrı), Yaz Okulu (en zengin), Kadro & Bir Gün & Galeri
- Her bölümde fotoğraf + video listesi, her kalemde ☐ kutu ve 💡 ipucu
- Son sayfada öncelik sırası: "Olmazsa site başlayamaz" 6 madde + "Sonra eklenecekler"

**Karar:** Çocuk yüzü olabilir ama Hatice Hanım veli izinleri toplayacak (en zengin sayfa için, zaman alacak). Çocuksuz "mekan + nesne" fotoğrafları ÖNCE çekilebilir, hemen siteye konabilir.

### Anasayfa Reasons bölümünde "Eğitimci Gelenek" kartı eklenmesi düşünüldü (2026-05-03 ikinci sohbet)

Halef "8 sebep, bir okul" formuna geçilmesini ve başa "Eğitimci Gelenek" kartı eklenmesini istedi (içerik: "Üç nesildir aynı işi yapan bir aile. Çocuğa nasıl bakılır, biz büyürken öğrendik."). Talimat verildi ancak Halef başka konuya geçti, UYGULAMA YAPILDIĞI BELİRSİZ.

**Yarın doğrulanacak:** REASONS dizisinde "Eğitimci Gelenek" kartı var mı? "Yedi sebep" mi "Sekiz sebep" mi yazıyor başlık? Yoksa Halef bu işi gözden mi kaldırdı?

## 🛠️ TEKNİK BORÇ (yeni sohbete bırakıldı)

### Anasayfa MaminoSection refactor (öncelik: orta)

**Tespit (2026-05-03):**
- `hifi-home.jsx`'te 21 yerde "MAMİNO" geçiyor: `function MaminoSection()` + 18 farklı `.mamino-*` class kullanımı
- "MAMİNO" eski okul ismi/kimliği. Yeni isim "Mavi Mine".
- Sayfada GÖRSEL olarak MAMİNO yazmıyor, sadece kod içi naming
- `.mamino-*` class'ları paylaşılan `mavi-mine.css`'te TANIMLI DEĞİL — anasayfa HTML'in inline `<style>` bloğunda gömülü (mimari uyumsuzluk)

**Yapılacak (yeni sohbette):**
1. Anasayfa `<style>` bloğundaki `.mamino-*` tanımlarını `mavi-mine.css`'e taşı
2. Class isimlerini yeniden adlandır: `.mamino-*` → `.mavimine-*` ya da `.felsefe-*`
3. JSX'te `MaminoSection` → `FelsefeSection` (içerik MAVİ+MİNE felsefesi)
4. Yorum satırlarını güncelle

**Risk:** Class değiştirirken hata yapılırsa anasayfa bozulabilir.
**Aciliyet:** Düşük — sayfa görsel olarak çalışıyor.

### Karar: Instagram entegrasyonu ŞİMDİLİK YOK (2026-05-03 ikinci sohbet)

**Bağlam:** Halef Instagram hesabını siteye entegre edip orada yayınlanan hikaye/fotoğrafları sitede göstermeyi sordu. Niyeti: "güzel, modern, profesyonel görünsün diye — başka okullarda var".

**Verilen karar: ŞİMDİ YAPMA, 6 ay sonra tekrar değerlendir.**

**Karar gerekçeleri:**
- Instagram embed'leri site kimliğinin görsel zarafetini bozar (Caveat el yazıları, krem arkaplanlar, sade renkli daireler vs Instagram'ın renk kalabalığı)
- Mavi Mine "afiş tipi, kampanya çığlıklı" yaklaşımı reddetti — Instagram embed'i bu kararla çelişir (kalabalık, dağınık)
- Asıl ihtiyaç: gerçek fotoğraflar (Hatice Hanım'a çekim listesi gönderildi). Instagram entegrasyonu bu boşluğu kapatmaz, kapatır gibi yaparken sahteleştirir.
- Apple, NYT, Anthropic gibi sade siteler Instagram embed kullanmaz — sadelik = ciddi duruş
- "Başka okullarda var" doğru bir gözlem ama Mavi Mine konumu farklı: Bilge Çocuk gibi rakipler kalabalık, Mavi Mine sade ve kanıt odaklı

**Mevcut çözüm:** Footer'daki Instagram linki yeterli (@mavi_mine__anaokulu).

**6 ay sonra değerlendirilecek:**
- Hatice Hanım'ın gerçek fotoğrafları geldi mi, site dolu mu?
- Instagram arşivi yeterince zengin mi (yaz okulu, etkinlikler...)?
- Hâlâ "modern görünmek" hedefi mi yoksa kendi sesimizi bulduk mu?

**Eğer ileride yine yapılırsa:** Behold.so (Free plan) önerildi, galeri sayfası altına, Mavi Mine renkleriyle özelleştirilmiş, 6 fotoğraflık küçük blok olarak.

---

## 🔄 SON GÜNCELLEMELER

### 2026-05-09 — SEO genişletme oturumu (Anthropic Projects)

**Yapılan:**
- 17 HTML denetimi → 15 public sayfada meta seti tam
- JSON-LD genişletildi: `index.html`'e `@id` eklendi; `iletisim.html`/`sss.html`/`kadro.html`'e tam schema bloğu (toplam +208 satır)
- Üç sayfa da `@id: https://mavimine.com/#school` ile bağlandı (Google'ın "aynı entity" pattern'i)
- `foto-envanter.html` + `Mavi Mine Wireframes.html` indekslemeden çıkarıldı (noindex meta + robots.txt Disallow)
- Rich Results Test: iletisim ✅, sss ✅ (FAQ), kadro ℹ️ (Validator 0 hata)
- GSC'de 9 sayfa "Dizine eklenmesini iste" tıklandı

**Altyapı:**
- `gh auth login` ile GitHub CLI kimliği kuruldu — `git push` doğrudan çalışıyor (prompt yok)
- 2 commit + push: `044d658` (Wireframes/robots) ve `a84576c` (JSON-LD 4 sayfa)

**2026-05-10 (yarın) yapılacak:**
- GSC'de 7 sayfa "Dizine eklenmesini iste" (kalan 4 + retry 3)

### 2026-05-03 — Dosya isimleri sadeleştirildi (GitHub Pages hazırlığı)

Tüm sayfalar yeni adlandırma şemasına geçti:
- "Mavi Mine Anasayfa.html" → "index.html"
- "Mavi Mine Hakkimizda.html" → "hakkimizda.html"
- "Mavi Mine Bir Gun.html" → "bir-gun.html"
- "Mavi Mine On Kayit.html" → "basvuru.html"
- (ve diğerleri aynı şemada: küçük harf, tireli, Türkçe karaktersiz)

Sebep: GitHub Pages'te URL'lerde %20 (boşluk) görünmesin, temiz linkler olsun. Site yakında mavimine.com'a bağlanacak.

mm-shared.jsx'teki NAV_PAGES ve footer linkleri de yeni isimlere güncellendi.

### 2026-05-03 — Site canlıya çıktı

- GitHub repo açıldı: github.com/halefadanur/mavimine-site (public)
- GitHub Pages aktifleştirildi: halefadanur.github.io/mavimine-site
- Custom domain bağlandı: mavimine.com (Cloudflare DNS, 4 A + 1 CNAME, proxy off)
- Mobil hamburger menü eklendi (mm-shared.jsx + mavi-mine.css)
- Mobil yatay scroll, kadro grid, panel sorunları düzeltildi
- HTTPS bekleniyor (GitHub Let's Encrypt sertifikası hazırlıyor)

Bekleyen işler:
- HTTPS aktivasyonu (1-24 saat)
- Mobil ek düzenlemeler (telefon ile detaylı tarama)
- Kurum içi review yorumları

### 2026-05-03 — Footer ve iletişim güncellendi, ölü dosya silindi

- Footer BAĞLAN sütununa İletişim linki eklendi
- Footer İLETİŞİM sütunu gerçek bilgilerle dolduruldu (adres, telefon, mail x2, Instagram, TikTok)
- hifi-iletisim.jsx ana email: gmail → merhaba@mavimine.com (Seçenek C: sayfa tek email, footer iki)
- page-iletisim.jsx silindi — iletisim.html artık hifi-iletisim.jsx çağırıyor, eski dosya kullanılmıyordu (git history'de saklı)

### 2026-05-03 (gece) — 🌙 Akşam milestone: HTTPS + dropdown + içerik

**HTTPS & domain:**
- HTTPS aktivasyonu tamamlandı (Let's Encrypt sertifikası)
- mavimine.com güvenli (https://, kilit ikonu)

**Nav & dropdown:**
- Sınıflarımız sayfası nav'a eklendi (Eğitim dropdown grubu içinde)
- Yaz Okulu sayfası nav'a eklendi (Eğitim dropdown grubu içinde)
- "Eğitim" dropdown menüsü eklendi: Genel Program + Sınıflarımız + Yaz Okulu
- Mobil hamburger: Eğitim collapse toggle (alt linkler tıklayınca açılıyor, default kapalı, aktif sayfa Eğitim grubundaysa açık başlar)
- Active state tüm sayfalarda doğru beslendi (program/siniflarimiz/yaz-okulu → active="Eğitim")

**İçerik düzeltmeleri:**
- Yaz Okulu içerik güncellendi: PROOF_BADGES kaldırıldı, "Yazın beş rengi" eklendi (Havuz/Kamp/Atölye/Festival/Geziler)
- ThreeQuestions korundu (yaz okulu değer önerisi)
- basvuru.html güncellendi (Gmail → merhaba@mavimine.com, görüşme saatleri 09.00-17.00 → 07.30-18.30)
- SSS sayfasına 'Eğitim ücretiniz bölge okullarından yüksek mi?' sorusu eklendi
- SSS yaş cevabı sınıf yapısıyla güncellendi (Minik Afacanlar / Meraklı Minikler / Gülen Yüzler)
- Site geneli yaş 3-6 → 2-6 (Minik Afacanlar 2 yaş sınıfı dahil edilince)
- Site geneli İstanbul → Bursa (gerçek konum)
- Vurgu kelimeleri yanındaki noktalama renk tutarlılığı tamamlandı (11 dosyada 33 düzeltme)
- basvuru.html "Yardım Şeridi" e-posta mobilde sığmama sorunu çözüldü

**Bekleyen işler:**
- Karekod (QR site URL'i için broşür/kartvizit)
- Foto placeholder'ları (gerçek fotolar Hatice Hanım'dan gelince)
- Kurum içi review yorumları

### 2026-05-03 (akşam) — 🚀 MILESTONE: Site canlıya çıktı + tüm gün özetidir

**Bugünün toplam çıktısı:**

- **mavimine.com canlıya çıktı** — Cloudflare DNS (4 A kayıt + 1 CNAME, proxy off), GitHub Pages deploy
- **E-posta routing aktif** — Cloudflare Email Routing ile `merhaba@mavimine.com` ve `bilgi@mavimine.com` gerçek adreslere yönlendiriliyor
- **Mobil hamburger menü** kuruldu (mm-shared.jsx Nav component + tam ekran panel + Esc/scroll lock + erişilebilirlik)
- **Tüm sayfa mobil düzeltmeleri:**
  - Yatay scroll engellendi (defansif `overflow-x: hidden` + box-sizing kontrolü)
  - Kadro / Galeri / Bir Gün / Program / Hakkımızda inline grid'ler class'a taşındı, mobile responsive
  - Footer 4 sütun → mobilde 1 sütun
  - Program/SSS kartları: ikon yan yana → ikon üstte, yazı altta
  - Bir Gün hero başlığı + arka SVG mobilde küçültüldü
  - Destek timeline kartları min-width:0 ile responsive
- **Footer İletişim güncellemesi** — placeholder'lar gerçek bilgilerle (adres, tel, 2 mail, Instagram, TikTok), BAĞLAN sütununa İletişim linki eklendi
- **Hamburger panel kompaktlaştırma** — gap 10→4, link padding 14→10, font 17→16 → 8 link tek ekrana sığacak şekilde
- **page-iletisim.jsx silindi** (ölü dosya, git history'de saklı)

**Bekleyen işler (yarın/sonraki turlar):**
- HTTPS aktivasyonu (Let's Encrypt sertifikasının GitHub tarafından hazırlanması — 1-24 saat)
- Karekod (QR) — site URL'i için broşür/kartvizit kullanımı
- Sınıflarımız sayfası (NAV_PAGES'e ekli, içerik henüz yapılmadı)
- Bekleyen lokal patch'ler (ContactCrossroad bileşeni — değerlendirilecek)

### 2026-05-03 (gece 3) — SEO + Google Business Profile tamamlandı

**SEO TAMAMLANANLAR:**
- Tüm 15 sayfaya meta tag'ler (title, description, keywords, robots, canonical)
- Open Graph + Twitter Card her sayfada
- robots.txt + sitemap.xml (14 URL)
- Google Search Console kayıt + sahiplik doğrulandı (mavimine.com)
- Sitemap Search Console'a gönderildi (14 sayfa keşfedildi)
- Structured Data (Schema.org Preschool LocalBusiness) anasayfada
- Anahtar kelimeler: Bursa/Kestel/Cumalıkızık/Gürsu anaokulu, Montessori, oyun grubu, oyun terapisi, aile danışmanlığı, eğitim koçluğu

**GOOGLE BUSINESS PROFILE:**
- Profil zaten kayıtlıydı (5.0 yıldız, 18 yorum)
- Kategori "Eğitim Kurumu" → "Anaokulu" güncellendi
- Ek kategoriler: Kreş, Eğitim Kurumu
- Açıklama metni güncellendi (Mavi Mine, Kestel/Bursa, 2-6 yaş, Montessori, ...)
- 11 özel hizmet eklendi (Anaokulu, Yaz okulu, Oyun grubu, Oyun terapisi, Aile danışmanlığı, Eğitim koçluğu, vb.)
- Web sitesi: mavimine.com

**DİĞER:**
- Instagram QR kodu iletişim sayfasında
- Vurgu kelime + noktalama renk tutarlılığı (Caveat font + color inherit)
- Bir Gün hero başlığı mobil düzeltildi (umarım kesin)

**Yapılacaklar (yeni sohbete):**
- Foto placeholder'ları → gerçek fotolar (birkaç güne)
- Google Business Profile'a yeni fotolar (foto geldiğinde)
- Aylık GBP yayını (sezonluk, opsiyonel)
- Search Console verileri 1-2 hafta sonra gelecek, anahtar kelime stratejisi rafine edilebilir

### ⚠️ Fotoğraf Optimizasyonu (öncelik YÜKSEK)

**Sorun:** `images/okul_*.jpg` dosyaları 8-10 MB civarı; tek anasayfa açılışında 30+ MB yüklenebilir → mobilde yavaş, GitHub Pages bandwidth aşılabilir, Lighthouse düşer.

**Hedef:** 1920×1080 (yatay) / 1200×1600 (dikey) max, JPG quality 80-85, **200-500 KB** her dosya.

**Kural:** Yeni gelen tüm fotolar (yaz okulu, etkinlikler, sınıflar, kadro) optimize edilmeden repo'ya eklenmez.

**Öncelik sırası:**
- ⭐⭐⭐ Mevcut 4 `okul_*.jpg` yarın optimize edilmeli
- ⭐⭐ Yaz okulu fotoları geldiğinde optimize edilmiş yerleştirme
- ⭐ Sonraki rafine: WebP formatı, `<img loading="lazy">`, `<img srcset>` (responsive images)

**Araçlar:** ImageOptim (macOS, drag-drop ücretsiz), squoosh.app (Google online aracı).
