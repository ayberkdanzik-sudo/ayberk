# Oyun Radarı

Donanıma göre oyun keşfi için Türkçe, mobil uyumlu ve sunucu hesabı gerektirmeyen çalışan bir prototip.

## Çalıştırma

Node.js 18+ ve Python 3 gerekir. Harici JavaScript bağımlılığı veya paket kurulumu yoktur.

```sh
cd /workspace/ayberk
npm run dev
```

Geliştirme sunucusu 3000 portunda dinler. Bu bir geliştirme sunucusudur; internete açık üretim sunucusu olarak kullanılmamalıdır. Ortam zaten izoledir; mevcut checkout kullanılır, ayrıca Git worktree oluşturulmaz.

```sh
npm test
```

7 karşılaştırma testi: önerilen donanım, RAM/VRAM yetersizliği, minimum sınırı, orta düzey, entegre grafik ve bilinmeyen donanım.

## Denenebilen özellikler

- İşlemci, ekran kartı, RAM ve VRAM seçimi; 1080p için 0–3 uyumluluk puanı.
- 16 oyunluk sabit demo kataloğu; 15 tür filtresi, arama ve sıralama.
- Minimumu karşılamayan oyunları varsayılan gizleme; “Filtrele” ile gösterme ve tek oyun karşılaştırması.
- Oyun açıklamaları, Steam bağlantıları ve favori kütüphanesi.
- İsim, soyad, e-posta, telefon, nickname ve demo parolasıyla kayıt.
- Yanlış kod kontrolü ve 10 dakika süreli doğrulama kodu önizlemesi; **gerçek e-posta gönderilmez**, kod ekranda gösterilir.
- Giriş/çıkış, nickname ile oyun yorumları, forum konusu ve yanıt oluşturma.
- Footer içindeki reklam yönetiminden sponsor başlığı, https bağlantısı ve buton metni ekleme/kaldırma.
- Gizlilik penceresinden tüm yerel demo verilerini temizleme.

Hesaplar, yorumlar, konular, favoriler, donanım ve reklamlar yalnızca bu tarayıcıdaki `radar-*` localStorage anahtarlarında tutulur. Kullanıcılar arasında paylaşılmaz. Demo yönetimi herkese açıktır. Parolalar rastgele tuzla PBKDF2-SHA256 (100.000 iterasyon) özeti olarak saklanır; bu yapı üretim kimlik doğrulaması değildir. Gerçek kişisel bilgi, telefon veya tekrar kullanılan parola girilmemelidir. Web Crypto için localhost veya HTTPS gerekir.

## Performans tahmininin sınırları

`engine.js` içindeki veriler **elle hazırlanmış, sadeleştirilmiş demo verileridir**. CPU/GPU puanları doğrulanmış bir benchmark veri tabanından gelmez. En zayıf CPU, GPU, RAM veya VRAM oranı sonucu belirler. Minimumu karşılamayan sistem 0; minimum sınırına %20’den yakın sistem 1; minimum üzerinde ve önerilen altında 2; tüm önerilen değerleri karşılayan sistem 3 puan alır. FPS hesaplanmaz.

İşletim sistemi, DirectX, işlemci talimat seti, SSD gereksinimi, termal durum, oyun sürümü ve sürücüler bu demoda doğrulanmaz. Oyunların yanındaki sayılar demo seçki puanıdır; canlı inceleme puanı değildir. GTA V verileri Legacy sürümü içindir. Liste güncel Steam kataloğu değildir.

## Görseller ve fontlar

Steam’in herkese açık CDN görselleri denenir. Ortam ağ politikası bunları engellerse yerelde üretilmiş, **“TEMSİLİ KAPAK”** etiketli SVG manzaralar gösterilir. Bunlar oyuna ait ekran görüntüleri değildir. Gerçek görseller oyun sahiplerine aittir; yayından önce kullanım koşulları kontrol edilmelidir.

Gerekli görsel alan adları: `cdn.akamai.steamstatic.com`, `shared.akamai.steamstatic.com`. Mevcut makinede bu alan adlarından HTTP 403 alındı. Ağ izni taslağı kaydetmek çalışan makinenin politikasını değiştirmez; kullanıcı ortam ayarlarında kaydedip yayınlamalıdır. SVG yedekler sayesinde demo bu erişime bağlı değildir.

Manrope ve DM Sans değişken fontları Fontsource 5.3.0 paketlerinden alınarak yerelde tutulur. Lisansları `assets/fonts/` içindedir. Font yüklemek için Google bağlantısı veya ilave ağ izni gerekmez.

## Yayına geçiş

Domain ve ücretli hosting bu prototipi denemek için gerekli değil. İlk paylaşılabilir sürüm ücretsiz statik barındırmada çalışabilir; bu depoda henüz dağıtım yapılmadı.

Gerçek ürün için gereken ayrı çalışmalar:

1. Sunucu API’si ve kalıcı veritabanı; güvenli oturumlar, sunucuda yetki kontrolü, parola sıfırlama, hız sınırları ve gerçek e-posta doğrulaması.
2. Kullanım koşulları uygun bir katalog kaynağı; Steam/metaveri servislerinden zamanlanmış senkronizasyon, önbellekleme, kopya/eksik kayıt kontrolü. İnsan tarafından yazılmış sistem gereksinimleri doğrudan güvenilir bir performans puanına dönüşmez; normalize ve doğrulanmış donanım verisi gerekir.
3. Oyun görsellerinin izinleri, güvenilir minimum/önerilen gereksinimler ve platform/oyun sürümü ayrımı.
4. Forum/yorum şikayeti, spam önleme, moderasyon, engelleme ve sunucuda yönetici rolleri.
5. KVKK aydınlatması, hesap/veri silme, veri minimizasyonu ve gerekli çerez onayı. Telefonu zorunlu toplamanın gerekçesi değerlendirilmelidir.
6. Yöneticiye özel reklam paneli; reklam onayı, zamanlama, ölçüm ve güvenli hedef bağlantıları.
7. Erişilebilirlik, SEO için oyun bazlı kalıcı URL’ler, yedekleme ve üretim izleme.

## Gelir modeli

Ziyaretçiler doğrudan ödeme yaratmaz. Gelir; reklam ağına kabul edilip reklam gösterim/tıklamalarından, doğrudan sponsorluktan veya koşulları uygun satış ortaklığından gelebilir. Kazanç; trafik kalitesi, ülke, reklam yerleşimi, reklam engelleyiciler ve sözleşmelere bağlıdır. Trafik veya gelir garantisi yoktur. İçerik, veri doğruluğu ve topluluk moderasyonu düzenli bakım gerektirir; tamamen pasif bir işletme değildir.

## Doğrulama

Chromium/Playwright ile masaüstünde 1440×1050 ve mobilde 390×844 boyutları denendi: filtreleme, arama, favoriler, düşük donanım, desteklenmeyen oyunu arama, yanlış/doğru kayıt kodu, giriş/yanlış parola, oyun yorumu, forum konusu/yanıtı, reklam ekleme/kaldırma, sayfa yenileme sonrası kalıcılık ve Escape ile pencere kapatma geçti. JavaScript çalışma hatası gözlenmedi. Bu testler gerçek e-posta, çok kullanıcılı sunucu, otomatik senkronizasyon veya canlı reklam gelirini doğrulamaz.
