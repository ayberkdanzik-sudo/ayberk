# Oyun Radarı — Topluluk demosu v4

## Kurulumsuz aç

ZIP’i klasöre çıkar ve **DEMOYU-AC.html** dosyasına çift tıkla. Güncel Chrome, Edge veya Firefox kullan. Terminal, domain veya hosting gerekmiyor. **GELISTIRME-RAPORU.html** dosyasını da çift tıklayarak rakip/gelir/gizlilik planını okuyabilirsin. Kaynak dosyalar da ZIP’in içindedir.

Forum > **Demo hesaplarını dene** > **admin** ile yönetim panelini açabilirsin.

- Admin e-posta: `admin@oyunradari.test`
- Demo parola: `RadarDemo!2026`
- Diğer örnek hesaplar: PixelGezgin, KareHizi. Hesap seçicisinden tek tıkla geçiş yapılır.

Bunlar yalnızca bu prototip için oluşturulmuş, herkese açık demo kimlikleridir. Gerçek kişisel bilgi veya başka yerde kullandığın bir parolayı girme. Birden fazla cihaz/kullanıcı arasında veri paylaşılmaz; her şey tarayıcıda saklanır.

## v4: metin topluluğu ve alışveriş demosu

- Üye görsel/video yüklemesi kaldırıldı; eski yerel medya temizlenir. Admin reklam görselleri korunur.
- Bildirim sayacı: mesaj ve alıntı; tıklayınca ilgili içeriğe gitme.
- Mesaj ve sohbeti yalnızca kendi görünümünden silme; karşı tarafın kopyası korunur.
- Admin yan menü, otomatik bekleyen işler ve tarihli görevler.
- Forum/mesaj tasarımı yenilendi; yorum işlemleri üç noktalı menüde.
- 15 bilinen model / 12 kategori; mağaza arama bağlantıları. Mağazada doğrulanmış ürün/fiyat değildir.
- Gerçek fiyat yokken tutar uydurulmaz. Örnek fiyat modu açıkça işaretlidir.
- İzinli JSON fiyat akışı içeri alma, geçmiş ve eskime altyapısı: canlı mağaza bağlantısı ve zamanlayıcı kurulmadı.
- Reklam görseli, başlığı ve butonu hedef HTTPS sayfasını yeni sekmede açar.

Ayrıntılar: [güncel rapor](docs/V4-DURUM-MALIYET-VE-MEMURIYET.md), [fiyat akışı kurulumu](docs/FIYAT-AKISI-KURULUMU.md).

## Geliştirme ve doğrulama

Node 24, Python 3.12. Uygulamanın çalışma zamanı paket bağımlılığı yok.

```bash
npm run dev
npm test
npm run bundle
npm run report
```

Tarayıcı testleri Playwright ve Chromium ister. Varsayılan Chromium yolu /usr/bin/chromium. Sunucu 3000 portunda çalışırken:

```bash
npm run test:browser
node tests/feed-browser.cjs
DEMO_URL=http://127.0.0.1:3000/DEMOYU-AC.html npm run test:browser
DEMO_URL=http://127.0.0.1:3000/DEMOYU-AC.html node tests/feed-browser.cjs
```

Fiyat akışı testleri sahte fixture verisidir; gerçek mağaza erişimi kanıtı değildir. Üye medya yükleme kabul testleri, özellik kaldırıldığı için metin-only ve eski medya temizleme testleriyle değiştirildi. media.js yönetici reklam görsellerini hazırlamak için tutulur; genel dosya doğrulama birim testleri devam eder.

Kaynak dosyaları değiştirince npm run bundle ile DEMOYU-AC.html yeniden üretilmeli. Rapor Markdown değişince npm run report çalıştırılmalı. Özel fiyat akışı yapılandırması/anahtarlarını public klasöre veya Git'e koyma.
