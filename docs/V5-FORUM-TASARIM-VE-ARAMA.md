# Oyun Radarı v5 — Forum tasarımı ve gelişmiş arama

21 Ekim 2026. Bu sürüm forumun bilgi düzenini ve aramasını yeniler. Önceki üyelik, bildirim, mesajlaşma, alışveriş ve yönetim özellikleri korunur; canlı sunucu/API bağlantısı eklenmedi.

## Tasarımda neler değişti?

- Büyük tanıtım alanı daha kısa bir topluluk başlığına dönüştürüldü. Yeni konu ve Arama düğmeleri üstte bir arada.
- Kategoriler açıklama, konu sayısı ve son başlık bilgisiyle forum dizininde listeleniyor.
- Sol kategori menüsü, konu akışı ve son etkinlik sütunu ayrıldı.
- Konu satırlarında başlık, gönderen, tarih, sabit/kilitli durumu, yanıt sayısı ve son etkinlik var.
- Yazı boyutları, boşluklar, çizgiler ve arka planlar yeniden düzenlendi; mobil ve gece modu uyarlandı.
- Reklam için üç alan korunuyor, forum içindeki boş panolar daha kompakt.
- Yanıt ekranı daha okunabilir başlık ve yazar ayrımına sahip; üç noktalı işlem menüleri korunuyor.

## Arama nasıl kullanılır?

Forumun üstündeki **Arama** düğmesine bas. Açılan panelde:

- Anahtar sözcük: başlık/açılış metni ve yanıt içeriğinde arar.
- Gönderen üye adı: o üyenin açtığı başlıkları ve yazdığı yanıtları getirir. Adın bir kısmıyla da filtrelenebilir.
- Başlangıç ve bitiş tarihi: içeriğin gönderildiği tarihe uygulanır, Türkiye saati kullanılır; iki gün de dahildir.
- İçerik türü: başlıklar ve yanıtlar / yalnızca başlıklar / yalnızca yanıtlar.
- Sıralama: en yeni veya en eski.

Filtreler birlikte çalışır. Seçili kategori varsa arama o kategoridedir. Filtreleri temizle tüm kategorilere döner. Hızlı arama kutusu da yanıt metinlerini tarar. Birden fazla sözcük yazıldığında tam ifade aranır; anlamsal arama, kök bulma veya yazım hatası düzeltme yoktur.

Sonuçlar onarlı sayfalanır. Eşleşen metin vurgulanır, başlık/yanıt etiketi ve yazar gösterilir. “Yanıta git” doğru başlığı ve yanıtın bulunduğu sayfayı açar; yanıt vurgulanır. Bir yazar adına tıklamak da o üyenin forum paylaşımlarını arar. Arama özel mesajları, e-posta/kişisel verileri ve oyun detayındaki ayrı oyun yorumlarını kapsamaz.

Ziyaretçiler yayımlanmış içerikleri arayabilir. İnceleme bekleyen içerikler sadece sahibi veya admin için görünür; arama bu görünürlük kurallarını korur. Bunlar yerel demo kurallarıdır, gerçek sunucu yetkilendirmesinin yerine geçmez.

## Referans site incelemesi

İstenen adres: https://forum.strategyturk.com/

Bu adrese yapılan HTTPS isteği ortamın ağ geçidinde 403 ile reddedildi. Sayfanın tasarımı bu oturumda görülemedi; renkleri, sayfa yapısı veya özellikleri incelenmiş gibi bir iddiada bulunulmadı. Yeni tasarım, klasik forum dizini ve okunabilir konu listesi yaklaşımıyla özgün olarak hazırlandı. Referans sitenin kaynak kodu veya görselleri kopyalanmadı. Sonradan paylaşılan ekran kaydı, dosya aktarım aracının 32 MB sınırını aştığı için incelenemedi. Bu sürümün referans videoya göre düzenlendiği iddia edilmiyor.

## Doğrulama ve sınırlar

25 birim testi geçiyor. Forum tarayıcı senaryoları; kelime/üye/tarih/tür filtrelerini, aralık hatasını, gizli içeriğin ziyaretçiye sızmamasını, güvenli metin gösterimini, sayfalamayı ve başka sayfadaki yanıta doğrudan gitmeyi kontrol ediyor. Önceki bildirim, mesaj silme, reklam, alışveriş, admin ve mobil kontrolleri de korunuyor. Kaynak ve indirilebilir tek dosya ayrıca sınandı; forum araması ve önceki özelliklerin tarayıcı testleri geçti.

Arama bu tarayıcıdaki demo kayıtları üzerinde çalışır. Gerçek site yayınında veritabanı indeksleri, sunucuda görünürlük kontrolü ve büyük katalog için arama altyapısı gerekir. Bu güncelleme otomatik canlı mağaza fiyatlarını veya doğrulanmış FPS verisini bağlamaz.

## Dosyalar

DEMOYU-AC.html: kurulumsuz demo.
GELISTIRME-RAPORU.html: bu raporun çift tıkla açılan sürümü.
docs/V4-DURUM-MALIYET-VE-MEMURIYET.md: önceki ayrıntılı maliyet, 657 ve API değerlendirmesi; bu sürümde yeniden fiyat/mevzuat araştırması yapılmadı.

Admin: Forum > Demo hesaplarını dene > admin. Parolalı giriş: admin@oyunradari.test / RadarDemo!2026.
