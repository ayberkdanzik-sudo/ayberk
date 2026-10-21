# İzinli fiyat akışı kurulumu — v4

Bu bir mağaza kazıyıcısı değildir. Gerçek mağaza API'si veya ürün akışı yapılandırılmamıştır. Betik, kullanım izni alınmış tam anlık görüntü JSON akışlarını ortak şemada bekler. Mağazanın API formatı farklıysa ayrıca dönüştürücü gerekir. Satıcı API anahtarı bütün kataloğu okumaya izin vermez.

## Neler hazır?

- scripts/sync-prices.cjs: sunucuda Node 24 ile çalışan, dış paket gerektirmeyen içeri alma işi.
- Kaynak başına yetki beyanı ve izinli HTTPS host kontrolü. Anahtar opsiyonel olarak sunucunun ortam değişkeninden alınır; çıktı dosyasına yazılmaz.
- Yanlış ürün kimliği, geçersiz fiyat/para birimi, yanlış mağaza bağlantısı, aynı kimlikte farklı varyant ve tekrarlanan teklif kontrolü.
- Başarılı kaynak tam görüntüsü eski teklifleri değiştirir; artık akışta olmayan teklif kaldırılır. Başarısız kaynak için önceki teklifler ve onların eski kontrol zamanı korunur.
- Değişen fiyat/stok geçmişi 90 gün / en fazla 100.000 kayıt tutulur. Basit dosya yaklaşımı büyük katalogda veritabanıyla değiştirilmelidir.
- HTTP 429/5xx için en fazla 3 deneme, 20 saniye istek zaman aşımı, 15 MB akış sınırı, kilit ve geçici dosyadan atomik güncelleme. Servis zorunlu Retry-After/kota kuralları daha karmaşıksa adaptörde uygulanmalıdır.
- data/price-feed.json uygulamaya yalnızca yayınlanabilir ürün/fiyat bilgisini verir; gizli bağlantı veya anahtar içermez.
- Web sürümü bu dosyayı açılışta okur. Fiyat takibi panelinde kayıt yenilenebilir. İndirilen dosya file:// modunda canlı akış okumaz.
- Ön yüzde 24 saatten eski ve stokta olduğu bildirilmeyen teklifler güncel fiyat olarak sunulmaz. Tarayıcı zamanı yerine sunucu zamanı/TTL kontrolü üretimde de uygulanmalıdır.

## Özel yapılandırma dosyası

Aşağıdaki örnekteki adres yer tutucudur; gerçek mağaza endpoint'i değildir. Yapılandırmayı public/web kökü dışında sakla. allowedFeedHosts yalnızca anlaşmayla belirlenmiş sağlayıcının host'larını içermeli. Yönlendirmeler otomatik takip edilmez.

```json
[
  {
    "id": "teknosa-partner",
    "store": "Teknosa",
    "authorized": true,
    "url": "https://partner-feed.example.invalid/products.json",
    "allowedFeedHosts": ["partner-feed.example.invalid"],
    "tokenEnv": "PRICE_PARTNER_TOKEN"
  }
]
```

Örnek `authorized: true`, gerçek kullanım izninin yerine geçmez. Sözleşme/erişim hakkı önce alınmalıdır. URL token içeriyorsa yapılandırma dosyasını da sır olarak koru. Hiçbir gerçek anahtarı Git'e koyma.

## Kaynağın ortak JSON şeması

```json
[
  {
    "productId": "vendor-model-16gb-512gb-tr",
    "offerId": "merchant-offer-123",
    "name": "Tam ürün modeli",
    "brand": "Marka",
    "category": "Laptop",
    "variant": "16 GB RAM / 512 GB SSD / TR klavye / tam üretici kodu",
    "price": 25000,
    "currency": "TRY",
    "stock": "in_stock",
    "url": "https://www.teknosa.com/izinli-gercek-urun-sayfasi"
  }
]
```

Örnekteki fiyat ve adres gerçek teklif değildir. productId birden fazla mağazada aynı **tam varyantı** temsil etmeli; tercihen doğrulanmış GTIN veya üretici parça kodundan türetilmeli. Benzer isimden otomatik kesin eşleştirme yapma. Kargo, satıcı, kupon koşulu, taksit ve garanti alanları bu ilk şemada henüz yok; gerçek karşılaştırmada eklenmeli. Bu şema kendiliğinden tüm mağaza formatlarını çözmez.

## Çalıştırma

Sunucu ortamında PRICE_FEED_CONFIG değişkenini özel yapılandırma dosyasına, gerekiyorsa PRICE_PARTNER_TOKEN değişkenini güvenli şekilde gerçek anahtara bağla. PRICE_FEED_OUTPUT verilmezse çalışma dizinindeki data/price-feed.json güncellenir.

```bash
cd /workspace/ayberk
npm run sync:prices
```

Yapılandırma olmadan komut hata vererek çıkar; canlı veri varmış gibi boş başarı üretmez. Örnek zamanlayıcı: izin verilen sıklık uygunsa sunucuda cron/systemd timer ile saatte bir çalıştır. Demo bu zamanlayıcıyı kurmaz. Güncelleme işi başarısız çıkış kodu verirse merkezi izleme/uyarı gerekir; bugün dış bildirim servisi bağlı değildir. Herhangi bir mağaza sözleşmesi yapılmadı.

Büyük katalog için: kuyruk + veritabanı, kaynak bazlı kota, Retry-After, artımlı sayfalama, fiyat anomali kuyruğu, GTIN eşleme, çoklu satıcı/teslimat koşulları ve gerçek sunucu erişim kontrolü tamamlanmalı. Mevcut statik demo böyle bir üretim servisi değildir.
