# MAVİ MİNE ANAOKULU — PROJE GEÇMİŞİ VE BAĞLAM

> Bu dosya, Mavi Mine Anaokulu web sitesi projesindeki çalışmaların özetini içerir. Yeni sohbet başlatıldığında Claude bu dosyaya bakarak geçmişteki kararları, üretilmiş içerikleri ve çalışma yöntemini öğrenir.

---

## 🏫 KURUM BİLGİSİ

**Mavi Mine Özel Anaokulu**, 3-6 yaş, Kestel/Bursa.

- **Kurucu:** Hatice Adanur Şahin (pedagog, Montessori eğitimi almış)
- **Aile mirası:** Üç nesil eğitimci ailesi
- **Kardeş kurum:** Eğitimci Dil Konuşma Merkezi (ayrı kurum, AYRI veri, bu projeye DAHİL DEĞİL)
- **Bahçe:** 900 m²
- **Bina:** Anaokulu olarak inşa edilmiş özel yapı
- **Güvenlik:** 10 kamera
- **Danışman kadro:** 2 psikolog + 2 dil-konuşma terapisti
- **Adres:** Vanimehmet Mah. Şht. Mustafa Kurt Cd. No:48, 16450 Kestel/Bursa
- **Telefon:** 0505 323 41 35
- **E-posta:** mavimineanaokulu@gmail.com (mavimine.com domain alındı, mail kurulumu ileride)
- **Instagram:** @mavi_mine__anaokulu
- **TikTok:** @mavimineanaokulu
- **Eğitim saatleri:** Pazartesi-Cuma 07.30 — 18.30
- **Görüşme/ziyaret:** Randevu ile

---

## 🎨 ANA MESAJ VE KİMLİK

### Slogan
**"Çocuğun mavisi, içindeki mine."**

- **Mavi:** gökyüzü, deniz, sınırsız hayal — çocuğun ufku
- **Mine:** değerli taş, sabırla parlatılan — çocuğun içindeki biricik değer

### Motto
**"Eğitimci gelenek, mutlu gelecek."**

### MAMİNO öğrenci profili (anasayfada)
**M-A-M-İ-N-O:** Mutlu, Açık Fikirli, Meraklı, İnsancıl, Nitelikli, Onurlu

### MAVİ + MİNE açılımı
- **MAVİ:** Merak, Açıklık, Vicdan, İlham (çocuğun ufku)
- **MİNE:** Marifet, İncelik, Nezaket, Emek (çocuğun özü)

---

## 🏛️ SINIF YAPISI

**3 sınıf:**

1. **Minik Afacanlar** (2 yaş, 24-36 ay) — sınıf öğretmeni + yardımcı öğretmen — rose/pembe — "Sevgiyle alışmak"
2. **Meraklı Minikler** (3-4 yaş, 36-60 ay) — sınıf öğretmeni + yardımcı öğretmen — sun/sarı — "Birlikte oynamayı keşfetmek"
3. **Gülen Yüzler** (5-6 yaş, 60-72 ay) — sınıf öğretmeni + branş öğretmenleri — teal/turkuaz — "İlkokula gülerek hazırlanmak"

**Notlar:** Sınıf mevcudu yazılmaz. Yardımcı öğretmen vurgusu küçük yaşlarda yapılır.

---

## 💻 TEKNİK YAPI

- **Geliştirme:** Mac'te yerel (~/Desktop/web_code_mavimine)
- **Claude Code kuruldu** ve aktif olarak kullanılıyor — dosyaları doğrudan düzenleyebiliyor
- **Yerel test:** `python3 -m http.server 8000` → http://localhost:8000/...
- **Domain:** mavimine.com alındı, GitHub Pages'e yüklenecek (henüz canlıda değil)
- **Framework:** React 18 + Babel Standalone (CDN'den, BUILD YOK)
- **HTML çatısı:** Her sayfa boş `<div id="root"></div>` içerir
- **Paylaşılan dosyalar:**
  - `mavi-mine.css` — Tüm stiller, CSS değişkenleri
  - `mm-shared.jsx` — Nav, FooterEl, LogoMark, PageHero (window'a expose edilir)
- **Sayfa başına JSX:** `hifi-home.jsx`, `hifi-hakkimizda.jsx`, `hifi-destek.jsx`, `hifi-iletisim.jsx`, `page-*.jsx`
- **Türkçe karakter dosya isimlerinde KULLANILMAZ:** Hakkimizda, Siniflarimiz, Iletisim

### Renk paleti (mavi-mine.css'te tanımlı)

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

```js
const NAV_PAGES = [
  ['Hakkımızda', 'hakkimizda.html'],
  ['Program',    'program.html'],
  ['Destek',     'destek.html'],
  ['Kadro',      'kadro.html'],
  ['Bir Gün',    'bir-gun.html'],
  ['Galeri',     'galeri.html'],
  ['SSS',        'sss.html'],
  ['İletişim',   'iletisim.html'],
];
```

Ayrıca: Anasayfa, Kayıt (basvuru.html), Randevu (randevu.html), Özel Seans (ozel-seans.html)

---

## 📋 BAŞVURU FORM YAPISI (önemli)

Sitede 3 ayrı form sayfası var, her biri vanilla HTML wizard:

| Form | URL | Amaç |
|---|---|---|
| **Randevu** | randevu.html | Okul ziyareti |
| **Ön Kayıt** | basvuru.html | Resmi başvuru (3 adımlı) |
| **Özel Seans** | ozel-seans.html | Özel destek değerlendirmesi |

**Mimari notlar:**
- Hiçbiri JSX değil, hepsi vanilla HTML/CSS/JS
- Deep-link/anchor/query param mekanizması yok (her sayfa kendi başına)
- Form gönderim altyapısı: Formspree iskeleti var ama henüz canlı değil

---

## 🛠️ ÇALIŞMA YÖNTEMİ

### İki kanallı çalışma
- **Anthropic Projects sohbeti (claude.ai)** → büyük resim, planlama, içerik üretimi
- **Claude Code (Mac terminal)** → dosya değişiklikleri, yerel düzenlemeler

### Claude Code workflow
1. Yerel sunucu açık olmalı: `cd ~/Desktop/web_code_mavimine && python3 -m http.server 8000`
2. Claude Code oturumu: `cd ~/Desktop/web_code_mavimine && claude`
3. CLAUDE.md otomatik okunur (proje bağlamı)
4. Değişiklikler tarayıcıda http://localhost:8000/... ile test edilir

### Karar verme tarzı
- Tek seçenek/öneri ile gidilir, çoklu menü yapılmaz
- Tasarım kararlarında en mantıklı tahminle ilerlenir
- Diff'ler tek tek gözden geçirilir, "all edits" sadece aynı türden ardışık değişikliklerde

### Kullanıcı bağlamı (Halef)
- **Mac kullanıcısı**, Türkçe konuşur, Bursa'da
- Terminal ve Claude Code öğreniyor — sabırlı, soran, açık talimat seven
- Tarayıcı konsolunu, hard refresh'i, file:// vs http:// ayrımını biliyor

---

## ✅ TAMAMLANMIŞ İŞLER

### Sayfalar (canlı/JSX hazır)
- Anasayfa (hifi-home.jsx)
- Hakkımızda (hifi-hakkimizda.jsx) — MAVİ + MİNE harf açılımı + 6 öğrenci profili (🌱-🌷)
- Destek (hifi-destek.jsx) — 8 alan + "Bir Seans Nasıl İşler?" 5 adımlı timeline
- İletişim (hifi-iletisim.jsx) — adres, telefon, e-posta, sosyal medya, harita, saatler
- Kadro (page-kadro.jsx)
- Program (page-program.jsx)
- Bir Gün (page-birgun.jsx)
- Galeri (page-galeri.jsx)
- SSS (page-sss.jsx)
- Form sayfaları: On Kayit, Randevu, Ozel Seans

### Son sohbette yapılan iş (2026-05-03)

**Claude Code kurulumu (TAMAMLANDI)**
- Native installer ile yüklendi
- PATH ayarlandı (~/.zshrc'ye export eklendi)
- Pro hesapla giriş yapıldı
- CLAUDE.md oluşturuldu (~/.Desktop/web_code_mavimine/CLAUDE.md)

**Klasör temizliği (TAMAMLANDI)**
Şu 7 dosya Trash'e gönderildi:
- Mavi Mine Kayit.html (eski, ölü)
- page-kayit.jsx
- hifi-home - eski.jsx
- page-hakkimizda - eski.jsx
- Mavi Mine Hakkimizda - eski.html
- Mavi Mine Anasayfa - Taslak.html
- hifi-home.jsx?v=3

**Link güncellemeleri (TAMAMLANDI)**
3 dosyada "Mavi Mine Kayit.html" → "basvuru.html":
- hifi-home.jsx:403 (anasayfa CTA)
- page-hakkimizda.jsx:197 (hakkımızda CTA)
- page-iletisim.jsx:82 (iletişim "Randevu al" butonu)

**İletişim saatleri tutarlılığı (TAMAMLANDI)**
hifi-iletisim.jsx'te eğitim saatleri 07.30 — 18.30 olarak güncellendi (telefon altyazısı + HoursSection).

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

## 🎯 SIRADAKİ İŞ — BAŞVURU KAVŞAĞI (BEKLEMEDE)

**Karar (2026-05-03):** "basvuru.html" sayfası bir **kavşak sayfasına** dönüştürülecek.

### Vizyon
Tüm sitede "Başvur" / "Randevu" / "Kayıt" linkleri tek bir kavşak sayfasına gidecek. Kullanıcı oraya geldiğinde 3 büyük kart görecek:
- 🤝 **Randevu Al** — "Önce gelin, tanışalım, gezin" → randevu.html
- 📝 **Ön Kayıt** — "Karar verdiniz, başvuruyu yapalım" → (yeni form sayfası)
- 💡 **Özel Seans** — "Özel destek değerlendirelim" → ozel-seans.html

### Yapılacaklar
1. Mevcut "basvuru.html"in form içeriği başka bir dosyaya taşınacak (yeni isim önerisi: `on-kayit-formu.html` ya da benzeri)
2. "basvuru.html" yeniden tasarlanacak — kavşak rolü
3. Hero metni: "Önce tanışalım. Süreç üç adımda..." mevcut metin korunacak ama 3 kart altında olacak
4. Tüm sitede "Başvur" linkleri bu kavşağa yönlendirilecek (Nav, anasayfa, hakkımızda, footer)

### Tasarım kararları (yeni sohbette netleşecek)
- 3 kart hangi sırada?
- Hangi kart "öne çıkan" (Randevu mu, Ön Kayıt mı)?
- Kart başlıkları, açıklamaları, ikonları
- Mobil görünüm (3 kart alt alta)

---

## 🔮 SIRADAKİLER

1. ~~Başvuru kavşağı~~ ✅
2. ~~Sınıflarımız sayfası~~ ✅
3. **YAZ OKULU SAYFASI YENİDEN — taze kafayla, eski broşür elimizde, çalınmış kavramlardan kaçınarak (ACİL)**
4. Anasayfa Reasons'a "Eğitimci Gelenek" eklendi mi doğrula (yarın ilk iş)
5. GitHub Pages'e yükleme — site canlıya çıkacak (mavimine.com)
6. mavimine.com mail kurulumu — Cloudflare email routing
7. Yaz okulu için ayrı kayıt formu (şimdilik On Kayit kavşağına bağlı)
8. Hatice Hanım fotoğraf çekimleri (çekim listesi gönderildi)
9. Anasayfa MaminoSection refactor (teknik borç, düşük öncelik)
10. Kadro sayfasına bakılmadı, yarın incelenebilir
11. Instagram entegrasyonu (6 ay sonra yeniden değerlendir, şimdi yapma kararı verildi)

---

## ⚠️ KRİTİK UYARILAR

1. **Mevcut yapıyı bozma:** Anasayfa MaminoSection, mevcut nav yapısı, var olan sayfalar değiştirilmez. Yeni şeyler eklenir.
2. **CSS değişkenlerini kullan:** Yeni renk uydurma, mevcut paletten seç (`--teal-deep`, `--orange` vb.)
3. **Class'ları kullan:** `.smile-circle`, `.section-label`, `.btn`, `.handwritten` gibi mevcut class'lar kullanılır, yeniden tanımlanmaz.
4. **Türkçe karakterler dosya isimlerinde yok:** Hakkimizda, Siniflarimiz, Iletisim (i ile)
5. **Eğitimci'yi karıştırma:** Mavi Mine ile Eğitimci Dil Konuşma Merkezi ayrı kurumlar.
6. **CLAUDE.md ve PROJE_GECMISi.md ikiz tutulmalı:** Mac'teki CLAUDE.md ile project knowledge'daki PROJE_GECMISi.md aynı kararları taşır. Her büyük sohbet sonu güncellenir.
7. **file:// ile dosya açma:** CORS hatası verir. Mutlaka http://localhost:8000/... kullan.

---

## 🔄 SON GÜNCELLEMELER

### 2026-05-03 — Dosya isimleri sadeleştirildi (GitHub Pages hazırlığı)

Tüm sayfalar yeni adlandırma şemasına geçti:
- "Mavi Mine Anasayfa.html" → "index.html"
- "Mavi Mine Hakkimizda.html" → "hakkimizda.html"
- "Mavi Mine Bir Gun.html" → "bir-gun.html"
- "Mavi Mine On Kayit.html" → "basvuru.html"
- (ve diğerleri aynı şemada: küçük harf, tireli, Türkçe karaktersiz)

Sebep: GitHub Pages'te URL'lerde %20 (boşluk) görünmesin, temiz linkler olsun. Site yakında mavimine.com'a bağlanacak.

mm-shared.jsx'teki NAV_PAGES ve footer linkleri de yeni isimlere güncellendi.

### 📌 Bekleyen lokal patch dosyaları (repo'ya dahil değil)

Aşağıdaki dosyalar lokalde duruyor, .gitignore ile repo'dan çıkarıldı. Henüz uygulanmamış, gelecekte değerlendirilecek bekleyen işler:

- `PATCH-hifi-iletisim-ContactCrossroad.jsx` — İletişim sayfasının üstüne 3 kartlı "iletişim kavşağı" bileşeni eklemek için hazırlanmış
- `mavi-mine-CSS-EKLEME-iletisim-kavsak.css` — Yukarıdaki bileşenin CSS'i

Karar verildiğinde: ya patch uygulanır (ContactCrossroad → hifi-iletisim.jsx, CSS → mavi-mine.css), ya da iki dosya silinir.
