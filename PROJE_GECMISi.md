# MAVİ MİNE ANAOKULU — PROJE GEÇMİŞİ VE BAĞLAM

> Bu dosya, Mavi Mine Anaokulu web sitesi projesindeki çalışmaların özetini içerir. Yeni sohbet başlatıldığında Claude bu dosyaya bakarak geçmişteki kararları, üretilmiş içerikleri ve çalışma yöntemini öğrenir.

---

## 🏫 KURUM BİLGİSİ

**Mavi Mine Özel Anaokulu**, 3-6 yaş, Kestel/Bursa.

- **Kurucu:** Hatice Adanur Şahin (eğitimci · kurucu müdür · Montessori uzmanı)
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

Üst seviye nav (kebab-case, Türkçe karaktersiz dosya adları):

- Hakkımızda → `hakkimizda.html`
- **Eğitim ▾** (dropdown grubu, 2026-05-03'te eklendi)
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
- Başvuru kavşağı → `basvuru.html` (3 kartlı seçim sayfası: Randevu / Ön Kayıt / Özel Seans)
- Ön Kayıt formu → `on-kayit-formu.html` (vanilla HTML wizard)
- Randevu → `randevu.html`
- Özel Seans → `ozel-seans.html`

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
5. Git push doğrudan çalışıyor — 2026-05-09'da `gh auth login` ile GitHub kimliği kuruldu, `git push` artık prompt sormuyor

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
- Sınıflarımız (hifi-siniflarimiz.jsx) — 3 sınıf alternatif hizalı (zikzak)
- Yaz Okulu (hifi-yaz-okulu.jsx) — KISMEN HAZIR, yeniden ele alınacak (Bilge Çocuk afiş kavramlarından kaçınarak)
- Destek (hifi-destek.jsx) — 8 alan + "Bir Seans Nasıl İşler?" 5 adımlı timeline
- İletişim (hifi-iletisim.jsx) — adres, telefon, e-posta, sosyal medya, harita, saatler
- Kadro (page-kadro.jsx) — 5 öğretmen + Halef (danışman) + 2 anonim danışman grubu (psikolog × 2, dil-konuşma terapisti × 2)
- Program (page-program.jsx)
- Bir Gün (page-birgun.jsx)
- Galeri (page-galeri.jsx) — 12 fotoğraf, 6 kategori filtresi
- SSS (page-sss.jsx) — 11 soru-cevap
- Başvuru kavşağı (hifi-on-kayit.jsx → basvuru.html) — 3 kartlı seçim
- Form sayfaları (vanilla HTML): on-kayit-formu.html, randevu.html, ozel-seans.html

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
- page-iletisim.jsx:82 (iletişim "Randevu al" butonu — 2026-05-03'te ölü dosya olarak silindi)

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
  - 🤝 **Randevu Al** (öne çıkan, turkuaz, "Önerilen ilk adım" turuncu rozet) → randevu.html
  - 📝 **Ön Kayıt** (turuncu) → on-kayit-formu.html
  - 💡 **Özel Seans** (rose) → ozel-seans.html
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
12. **2026-05-10 (yarın):** GSC'de 7 sayfa için "Dizine eklenmesini iste" tıkla — kalan 4 + tekrar gönderilecek 3
13. ⭐⭐⭐ **Fotoğraf optimizasyonu (öncelik YÜKSEK)**
    - Sorun: `images/okul_*.jpg` dosyaları 8-10 MB civarı; tek anasayfa açılışında 30+ MB yüklenebilir → mobilde yavaş, GitHub Pages bandwidth aşılabilir, Lighthouse düşer
    - Hedef: 1920×1080 (yatay) / 1200×1600 (dikey) max, JPG quality 80-85, **200-500 KB** her dosya
    - Kural: Yeni gelen tüm fotolar (yaz okulu, etkinlikler, sınıflar, kadro) optimize edilmeden repo'ya eklenmez
    - Sonraki rafine adımlar: WebP geçişi, `<img loading="lazy">`, `<img srcset>` (responsive)
    - Öncelik sırası: ⭐⭐⭐ mevcut 4 okul_*.jpg yarın → ⭐⭐ yaz okulu fotoları → ⭐ WebP/lazy/srcset
    - Araçlar: ImageOptim (macOS, drag-drop ücretsiz), squoosh.app (Google online aracı)

---

## 🔍 SEO ALTYAPISI

> Bu bölüm, sonraki Claude sohbetlerinde SEO bağlamı için kanonik kaynaktır. SEO ile ilgili kararlar/iş paketleri burada toplanır.

### Sayfa-bazlı meta etiketleri

15 public sayfada tam set: `title`, `description`, `keywords`, `canonical` (her sayfaya özel), `robots`, Open Graph (5 etiket), Twitter Card (4 etiket). 17 HTML'den 2'si dışarıda: `Mavi Mine Wireframes.html` ve `foto-envanter.html` (her ikisi de noindex işaretli, aşağıya bakın).

**Eksik (yapılacak):** Favicon ekosistemi — `favicon.ico`, `apple-touch-icon.png`, `manifest.webmanifest` kökte yok, hiçbir HTML link de etmiyor.

### JSON-LD Schema (Schema.org)

4 sayfada yapılandırılmış veri. Hepsi `@id: https://mavimine.com/#school` ile aynı entity'yi işaret eder — Google için tek kurum sinyali:

| Sayfa | Schema | İçerik |
|---|---|---|
| `index.html` | Preschool | Ad, adres, telefon, saatler, alanlar (`@id` 2026-05-09'da eklendi) |
| `iletisim.html` | Preschool | + geo (40.1956333, 29.213412) + contactPoint + areaServed (Bursa/Kestel/Gürsu/Cumalıkızık) + audience |
| `sss.html` | FAQPage | 11 soru-cevap (mainEntity dizisi) |
| `kadro.html` | Preschool + employee | 6 isimli Person (Hatice, Reyhan, Gülben, Şule, Zümra, Halef), hepsi `worksFor: #school` |

### İndekslemeden çıkarılan sayfalar (2026-05-09)

- **`Mavi Mine Wireframes.html`** — `<meta name="robots" content="noindex,nofollow,noarchive,nosnippet">` + `robots.txt` Disallow
- **`foto-envanter.html`** — aynı meta + `robots.txt` Disallow (dosya `.gitignore`'da, repo'ya gitmez ama defansif sigorta)
- **`on-kayit-formu.html`** — sadece `robots.txt` Disallow (form sayfası, kavşaktan gelinmesi tercih edilir)

### Robots / Sitemap

- `robots.txt` — User-agent `*`, Allow `/`, Disallow 3 sayfa, Sitemap referansı
- `sitemap.xml` — 14 URL, priority/changefreq belirlenmiş (Wireframes ve foto-envanter dahil değil)

### Google Search Console

- Sahiplik doğrulandı (mavimine.com, 2026-05-03)
- Sitemap gönderildi, 14 sayfa keşfedildi
- 2026-05-09'da JSON-LD genişletmesi sonrası 9 sayfa "Dizine eklenmesini iste" tıklandı
- **2026-05-10'da yapılacak:** 7 sayfa GSC re-submit (kalan 4 sayfa + retry 3)

### Rich Results Test (2026-05-09)

| URL | Sonuç |
|---|---|
| `iletisim.html` | ✅ 2 geçerli rich result (LocalBusiness + Organization) |
| `sss.html` | ✅ FAQ rich result geçerli |
| `kadro.html` | ℹ️ Person için rich result UI yok ama Validator 0 hata |
| `index.html` | (henüz test edilmedi, koşulabilir) |

### Google Business Profile

- Profil aktif: 5.0 yıldız, 18 yorum (2026-05-03 itibarıyla)
- Kategori: Anaokulu (ek: Kreş, Eğitim Kurumu)
- 11 özel hizmet listelenmiş (Anaokulu, Yaz okulu, Oyun grubu, Oyun terapisi, Aile danışmanlığı, Eğitim koçluğu, vb.)
- Açıklama metni Mavi Mine kimliğiyle güncel
- Aylık post (sezonluk) opsiyonel

### Bekleyen SEO işleri

- **2026-05-10:** GSC'de 7 sayfa "Dizine eklenmesini iste"
- Favicon ekosistemi (favicon.ico + apple-touch-icon + manifest.webmanifest)
- Sayfa-bazlı `og:image` (şu an hepsi logo; yaz-okulu/sınıflar/galeri için ayrı görsel)
- Anasayfa Rich Results Test
- 1-2 hafta sonra GSC verileri gelince anahtar kelime stratejisi rafine edilir

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

### 2026-05-09 — SEO denetimi ve JSON-LD schema genişletmesi

**Bağlam:** Anthropic Projects sohbetinde Halef ile SEO oturumu. Site canlıydı, temel meta'lar 2026-05-03'te kurulmuştu; bu oturumda yapılandırılmış veri (JSON-LD) 4 sayfaya yayıldı ve indekslemeden çıkarılması gereken sayfalar işaretlendi.

**Yapılanlar:**
- 17 HTML dosyasında SEO denetimi (title/desc/keywords/canonical/robots/OG/Twitter/JSON-LD/favicon)
- JSON-LD genişletmesi: `index.html` Preschool bloğuna `@id` eklendi; `iletisim.html` (Preschool + geo + contactPoint + areaServed), `sss.html` (FAQPage, 11 soru), `kadro.html` (Preschool + employee, 6 Person) sayfalarına tam blok eklendi (toplam +208 satır)
- Üç schema da `@id: https://mavimine.com/#school` ile bağlandı — Google için tek entity sinyali
- `foto-envanter.html`'e noindex meta + `robots.txt` Disallow
- `Mavi Mine Wireframes.html`'e noindex meta (zaten Disallow listesindeydi)
- Rich Results Test: iletisim ✅, sss ✅, kadro ℹ️ (Person rich UI yok ama 0 hata)
- GSC'de 9 sayfa "Dizine eklenmesini iste" tıklandı

**Git ve altyapı:**
- 2026-05-09'da `gh auth login` ile GitHub CLI kimliği kuruldu — `git push` artık kimlik prompt'u sormadan çalışıyor
- 2 ayrı commit + push yapıldı: `044d658` (Wireframes/robots), `a84576c` (JSON-LD 4 sayfa)

**2026-05-10 (yarın) yapılacak:**
- GSC'de 7 sayfa için "Dizine eklenmesini iste" (kalan 4 + retry 3)

### 6 Mayıs 2026 — Fotoğraf yerleştirme oturumu

**Tamamlanan:**
- 68 fotoğraf optimize edilip `images/galeri/` klasörüne yerleştirildi (sips ile, 1600px max, %82 kalite, dosya adları küçük harfli + alt çizgili)
- 5 öğretmen portresi `images/team/` klasörüne eklendi (hatice, reyhan, gulben, sule, zumra)
- `<Img>` component'i `mm-shared.jsx`'e eklendi — fotoğraf yoksa otomatik `.ph` placeholder'a düşer (graceful fallback)
- mavi-mine.css'te galeri grid'lerinin mobil kuralı `> div` yerine `> *` yapıldı (Img component'i img tag'i ürettiği için)

**Sayfalardaki fotoğraf yerleşimleri:**
- index.html (anasayfa): hero accent + 3 garden strip + 6 galeri strip = 10 fotoğraf
- galeri.html: 12 fotoğraf, 6 kategori (hepsi/bahçemiz/atölye/mekan/gezi/mutfak), filtre butonları çalışır
- program.html: Montessori bölümü için 1 fotoğraf
- bir-gun.html: timeline sticky görseli için 1 fotoğraf
- siniflarimiz.html: 3 sınıf için 3 farklı fotoğraf (Minik Afacanlar/Meraklı Minikler/Gülen Yüzler)
- kadro.html: 5 öğretmen kartı (Hatice + Reyhan + Gülben + Şule + Zümra), her kartta isim + rol + bio + "Devamını oku ↓" özelliği. Hatice hariç hepsinin rolü "Anaokulu Öğretmeni" olarak standartlaştırıldı.
- hifi-home.jsx ve hifi-hakkimizda.jsx'teki Hatice Hanım foto referansları team-04.jpeg → hatice.jpeg olarak güncellendi

**Öğretmen bilgileri:**
- Hatice Adanur Şahin: kurucu/müdür, "Eğitimci · Kurucu Müdür" rolü, "Montessori uzmanı" rozeti. PROJE_GECMISi.md'deki "pedagog" tanımı yanlış — Hatice Hanım pedagog DEĞİL, eğitimci ve müdür. Düzeltilmeli.
- Reyhan Karaağaç (2 yaş — Minik Afacanlar)
- Gülben Topçuoğlu (3-4 yaş — Meraklı Minikler)  
- Şule Kaya (5-6 yaş — Gülen Yüzler)
- Zümra Adanur (Akıl Oyunları & Kodlama branş öğretmeni)
- Branş öğretmenleri için 3 boş kart yapılmadı (İngilizce/Halk oyunları/Sevgi dersi) — sadece 5 dolu kart var, branş öğretmenleri ileride eklenecek.

**Bir sonraki oturum için bekleyen işler:**
1. Yeni fotoğraflar gelecek — Hatice Hanım daha güzel kareler topluyor. Aynı `optimize-fotograflar.sh` script'iyle işlenecek.
2. Yaz okulu için ayrı bir galeri açılacak — `yaz-okulu.html` sayfasının içine bir galeri bölümü eklenecek. Tema: doğa, etkinlik, kamp ruhu (anaokulu galerisinden farklı bir tonda).
3. Eski `images/team/team-01.jpeg` ... `team-05.jpeg` dosyaları artık hiçbir yerde kullanılmıyor, silinebilir (kontrol et önce).
4. `images/galeri/whatsapp_image_2026-05-03_at_23.35.48_(1).jpg` gibi parantezli çirkin dosya adları temizlenebilir (örn. `bina_disi_2.jpg`).

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
