# Oyun Radarı — Topluluk demosu v3

## Kurulumsuz aç

ZIP’i klasöre çıkar ve **DEMOYU-AC.html** dosyasına çift tıkla. Güncel Chrome, Edge veya Firefox kullan. Terminal, domain veya hosting gerekmiyor. **GELISTIRME-RAPORU.html** dosyasını da çift tıklayarak rakip/gelir/gizlilik planını okuyabilirsin. Kaynak dosyalar da ZIP’in içindedir.

Forum > **Demo hesaplarını dene** > **admin** ile yönetim panelini açabilirsin.

- Admin e-posta: `admin@oyunradari.test`
- Demo parola: `RadarDemo!2026`
- Diğer örnek hesaplar: PixelGezgin, KareHizi. Hesap seçicisinden tek tıkla geçiş yapılır.

Bunlar yalnızca bu prototip için oluşturulmuş, herkese açık demo kimlikleridir. Gerçek kişisel bilgi veya başka yerde kullandığın bir parolayı girme. Birden fazla cihaz/kullanıcı arasında veri paylaşılmaz; her şey tarayıcıda saklanır.

## v3 eklemeleri

9 reklam panosu, gece/gündüz modu, reklam/şikâyet/öneri başvuruları, yönetici gelen kutusu, üye yönetimi, yerel grafik raporları, alıntılı yanıt, konu takibi, mesaj alıcısı araması ve açıkça işaretli medya sınıflandırma senaryoları. Ayrıntılı durum ve maliyet raporu: [V3-DURUM-VE-YAYIN-PLANI.md](docs/V3-DURUM-VE-YAYIN-PLANI.md) veya kurulumsuz GELISTIRME-RAPORU.html.

Telefon yalnızca reklam iletişim başvurusunda bulunur; üyelikte kaldırılmıştır. Ziyaret raporu bu tarayıcıyı ölçer; örnek trafik ayrı seçenektir. Gerçek servis entegrasyonları yapılmış değildir.

## Korunan özellikler

- Üyelikten telefon kaldırıldı; erişilebilen eski demo hesaplarının telefon alanı temizlenir. İsim/soyad isteğe bağlı.
- 94 işlemci, 105 ekran kartı, model arama; laptop ve VRAM varyantları.
- 8 etiketli örnek forum konusu ve 16 örnek yanıt; kategori, arama, sıralama ve sayfalama.
- Admin: konu sabitleme, kilitleme, silme; medya ve bildirim incelemesi.
- Gönderi/yanıtta en fazla 5 görsel (8 MB/adet), 1 video (100 MB ve en fazla 180 saniye).
- Dosya imzası, gerçek görüntü açılabilirliği ve video süresi kontrolleri. Görsel yeniden kodlama; medya IndexedDB’de tutulur. Yeni medya onay bekler, onaylanmadan görünmez.
- Özel mesaj, engelleme ve bildirme; aynı tarayıcıdaki demo hesapları arasında denenebilir.
- Reklam görseli, https bağlantısı, yerleşim, tarih aralığı; düzenleme, duraklatma ve silme.
- Oyun yorumlarında 5’li sayfalama, tarih sıralaması, açılır yazma alanı ve isteğe bağlı donanım bilgisi. Elden Ring’de 12 etiketli örnek yorum var.
- Hesap verilerini dışa aktarma/silme. Gizlilik ekranından bütün yerel verileri temizleme.

## Demo sınırları

**Yeni oyunlar otomatik eklenmez:** 16 kayıtlık katalog sabittir. Admin > Oyun kataloğu üretim planını gösterir. İşleyen bir API/zamanlayıcı bağlantısı yoktur.

**Performans ölçülmez:** CPU/GPU güç indeksleri ve oyun gereksinimleri sadeleştirilmiş demo değerleridir. FPS veya uyumluluk garantisi yoktur. Laptop TGP’si, entegre GPU paylaşımlı belleği, SSD, OS, DirectX, talimat seti, sürücü ve oyun sürümü ayrıca doğrulanmalı. GTA V verisi Legacy sürümünü temsil eder.

**Kimlik ve mesajlar yereldir:** localStorage/IndexedDB gerçek sunucu güvenliği sağlamaz. Admin rolü istemcide değiştirilebilir. E-posta doğrulaması yalnızca ekranda gösterilen kodla simüle edilir; gerçek e-posta gönderilmez. Mesajlar internet üzerinden iletilmez veya uçtan uca şifrelenmez. Parolalar tuzlanmış PBKDF2 özetidir; üretim hesap hizmeti değildir.

**Medya sınıflandırması bağlı değildir:** otomatik dosya/limit kontrolleri, yetişkin içerik veya yasa dışı içerik tespiti değildir. Tüm medya yönetici incelemesine gider. Gerçek yayında sunucuda karantina, tarama, sınıflandırma ve insan incelemesi gerekir. Video ham dosyası bu demoda saklanır; üretimde yeniden kodlama ve metadata temizleme gerekir.

**Reklamlar yereldir:** gerçek reklam ağı, gelir veya canlı trafik ölçümü yoktur. Aynı konumda birden fazla uygun kampanya varsa ilk kaydedilen görünür.

## Araştırma ve ürün planı

[Ürün, rakipler, gizlilik ve gelir planını oku](docs/URUN-VE-GELIR-PLANI.md). Kullanıcının 10 sorusuna karşılık gelen kararları, aday kaynakları ve sonraki adımları içerir. Canlı rakip/official sitelerine bu ortamdan erişim 403 ile engellendi; belgede bilinen ürün konumlandırmaları ile doğrulanmamış güncel ayrıntılar ayrılır.

## Geliştirici komutları

Node.js 18+ ve Python 3 gerekir. Uygulamanın harici JavaScript çalışma bağımlılığı yoktur. Mevcut checkout’u kullan; ayrıca Git worktree gerekmez.

```sh
cd /workspace/ayberk
npm run dev
npm test
npm run bundle
```

Geliştirme sunucusu 3000 portunda çalışır. Üretim sunucusu değildir. `npm run bundle`, kaynakları/fontları/SVG yedekleri tekrar **DEMOYU-AC.html** içine gömer. Kaynakları değiştirince bu komutla taşınabilir dosyayı güncelle.

16 birim testi: karşılaştırma sonuçları, model çeşitleri, görsel/video sayı/boyut/süre sınırları ve dosya imzaları.

İsteğe bağlı tarayıcı testi için Playwright ve Chromium gerekir. Ortamda bu araçlar önceden mevcut. Başka bir geliştirme makinesinde ayrıca kurulmalıdır. `CHROMIUM_PATH` sistem Chromium yolunu, `DEMO_URL` test adresini değiştirebilir. Testten önce iki sentetik video oluşturulur:

```sh
ffmpeg -v error -f lavfi -i color=c=blue:s=32x32:r=1 -t 181 -c:v libvpx-vp9 -y /tmp/radar-long.webm
ffmpeg -v error -f lavfi -i color=c=green:s=32x32:r=2 -t 2 -c:v libvpx-vp9 -y /tmp/radar-short.webm
node tests/browser.cjs
```

Tarayıcı testi: telefon göçü, kayıt formu, donanım araması, 100 yorumun 20 sayfaya ayrılması, forum arama/sayfalama, admin girişi, kilit, metin kaçışlama, özel mesaj/engelleme, üye/admin ekran ayrımı, reklam oluşturma/duraklatma, altıncı görsel reddi, gerçek 181 saniyelik videonun reddi, sahte dosya imzası reddi, 5 görsel + kısa videonun kaydı, denetim kuyruğu ve onaylanınca gösterimi, 390 px mobil görünümler.

## Dosyalar ve haklar

- `app.js`, `style.css`: keşif ve ortak arayüz.
- `community.js`: demo hesaplar, forum, yorumlar, mesajlar, reklam ve yönetim ekranları.
- `hardware.js`, `engine.js`: elle hazırlanmış donanım ve oyun uyumluluk demo verisi.
- `media.js`: istemci medya kontrolleri ve IndexedDB.
- `scripts/bundle.cjs`: tek dosyalık demoyu üretir.
- `assets/`: yerel fontlar ve etiketli temsili SVG kapaklar.

Steam CDN’ye erişim olduğunda oyun kapağı yüklenir. Erişim yoksa **TEMSİLİ KAPAK** etiketli yerel çizim gösterilir; bunlar gerçek oyun ekran görüntüsü değildir. Gerçek oyun görsellerinin kullanım koşulları yayın öncesinde kontrol edilmelidir. Steam görsellerinin yüklenmesi dış sunucuya IP adresi iletir.

Manrope ve DM Sans fontları Fontsource 5.3.0’dan gelir; lisansları `assets/fonts/` içindedir. Fontlar için dış ağ gerekmez. Medya seçimi tarayıcı depolama iznine bağlıdır. Tek dosyayı yeni bir klasöre taşıdığında tarayıcı yerel depolamayı farklı değerlendirebilir; demo verilerini başka klasöre taşıma garantisi verilmez.


V3 doğrulama: `npm test`, `npm run test:browser`, `npm run test:studio`. Tek dosyalık çıktıyı da sınamak için `DEMO_URL=http://127.0.0.1:3000/DEMOYU-AC.html npm run test:studio`. Raporu üretmek için `npm run report`, demoyu üretmek için `npm run bundle`.
