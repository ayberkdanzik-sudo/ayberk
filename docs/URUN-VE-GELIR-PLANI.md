> Bu dosya v2 tarihçesidir. Güncel durum ve maliyetler için V3-DURUM-VE-YAYIN-PLANI.md dosyasını okuyun.

# Oyun Radarı: ürün, rakipler ve gelir planı

Tarih: 19 Ekim 2026. Bu belge, ikinci demo güncellemesinin kararlarını ve üretim gereksinimlerini anlatır.

## Araştırmanın sınırı

Can You RUN It, PCGameBenchmark, Game-Debate, PCGamingWiki, IsThereAnyDeal, Steamworks, IGDB ve KVKK sitelerine doğrudan erişim denendi. Ortamın çıkış proxy’si her isteği `403 Forbidden` ile engelledi. Aşağıdaki karşılaştırma bu ürünlerin bilinen konumlandırmalarına dayanır; güncel sayfalarının incelendiği, bugün aynı özellik/fiyat/koşulları sundukları veya hukuki metinlerinin doğrulandığı iddia edilmez. Güncel özellikler, ticari API izinleri ve mevzuat, yayın kararı öncesinde erişilebilir bir tarayıcıdan yeniden incelenmelidir.

| Referans | Bilinen odak | Oyun Radarı için çıkarılacak fikir |
| --- | --- | --- |
| [Can You RUN It / System Requirements Lab](https://www.systemrequirementslab.com/cyri) | PC sistem gereksinimleri ve uyumluluk | Tek bir oyuna hızlı cevap; hangi bileşenin yetersiz olduğunu açık gösterme |
| [PCGameBenchmark](https://www.pcgamebenchmark.com/) | Donanımla oyun gereksinimlerini karşılaştırma | Kişiye göre oyun keşfi; donanım bazlı bulunabilir sayfalar |
| [Game-Debate](https://www.game-debate.com/) | Oyun gereksinimleri, donanım karşılaştırmaları ve topluluk | Bütçe ve hedef çözünürlükle yükseltme önerileri |
| [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home) | Oyuna özgü teknik bilgiler, düzeltmeler ve ayarlar | Türkçe ayar rehberi; problemi gerçekten çözen kısa talimatlar |
| [IsThereAnyDeal](https://isthereanydeal.com/) | Oyun fiyatları, fırsatlar ve takip | Uyumlu oyun + güvenilir mağaza + indirim takibi; izinli fiyat kaynağı ve bölge farkları gerekir |

Bunların tasarımını veya veri tabanını kopyalamak yerine ortak kullanıcı ihtiyaçlarını çözmeliyiz. Rakip siteleri izinsiz kazımak sürdürülebilir bir veri stratejisi değildir.

## En önemli ürün kararı

“Sistemine uygun oyunları bul, Türkçe ayar önerisini gör, benzer donanımdaki oyuncunun deneyimini oku.”

Salt bir sistem gereksinimi listesi çok kolay benzerleşir. Türkiye’de eski/orta seviye bilgisayarlar, bütçe hassasiyeti ve Türkçe açıklama ihtiyacı iyi bir başlangıç odağı olabilir. Bu bir pazar hipotezidir; gerçek kullanıcılarla doğrulanmalıdır.

Önerilen ilk hedefler:

1. Donanım arama sırasında kullanıcının yanlış modeli seçmesini önle. Laptop/masaüstü ve VRAM varyantlarını ayır.
2. “Kaldırır mı?” cevabına nedenini ekle. Kaynağı belirsizse “veri yetersiz” de; FPS uydurma.
3. Yorumlarda sistem, çözünürlük, ayar, oyun sürümü ve ölçüm yöntemi alanları kullan. Kullanıcı beyanını doğrulanmış benchmark olarak gösterme.
4. Düşük sistem, ücretsiz ve birlikte oynanabilen oyun koleksiyonları üret. İhtiyaca göre filtre, oyun adı bilmeyen kullanıcıyı da getirir.
5. Oyun sayfalarında kalıcı URL, arama motorlarının okuyabildiği açıklama ve kaynaklı Türkçe rehberler oluştur. Sadece modal kullanan mevcut demo SEO için yeterli değil.
6. Sonraki aşamada kullanıcı isterse uyumlu yeni oyun/indirim bildirimi gönder. Hesap e-postası ile pazarlama iznini ayır.

## 1. Otomatik yeni oyun ekleme

**Bugün çözülmüş değil.** Demo hâlâ 16 kayıt içeriyor. Admin > Oyun kataloğu bunu açıkça gösterir. Yeni oyunların otomatik geldiğini gösteren sahte bir buton eklenmedi.

Üretim akışı:

1. Ticari kullanımına izin verilen bir katalog sağlayıcısı seç. [Steamworks Web API](https://partner.steamgames.com/doc/webapi_overview), [IGDB API](https://api-docs.igdb.com/) ve gerekirse başka lisanslı sağlayıcıların güncel kapsam/şartları incelenmeli. Steam’de listelenmek, tüm metin ve görselleri istediğin şekilde yeniden yayımlama izni vermez. Belgelenmemiş mağaza uç noktaları kalıcı servis sözleşmesi sayılmamalı.
2. Örneğin 6 saatte bir çalışan sunucu işi yeni/değişen kayıtları çeksin. Kesin sıklık sağlayıcının kotasına göre ayarlanmalı. API anahtarları yalnızca sunucuda tutulmalı; indirilen HTML’e gömülmemeli.
3. Kayıtları sağlayıcı + uygulama kimliği üzerinden tekilleştir. PC oyunu, DLC, demo, uygulama, yeniden sürüm ve platform ayrımını yap.
4. Gereksinim metnini normalize et: CPU/GPU model eşleştirmesi, RAM/VRAM, disk, SSD, OS ve grafik API’si. “i5 or equivalent” gibi belirsiz değerleri otomatik olarak kesin bir puana dönüştürme.
5. Her alana kaynak, çekilme zamanı, doğrulama durumu ve sürüm kaydet. Eksik bilgiyle oyun sayfası açılabilir; uyumluluk sonucu “veri yetersiz” olmalı.
6. Veritabanına idempotent upsert yap; aynı kayıt ikinci kez oluşmasın. Checkpoint’i başarılı kayıt işleminden sonra ilerlet. Ağ hatalarında eski veriyi silme. 429 ve geçici 5xx yanıtlarında kontrollü yeniden dene.
7. Kaldırılmış/ertelenmiş oyunları ve değişen gereksinimleri izle. Şüpheli eşleşmeleri insan inceleme kuyruğuna al; istisnalar için yöneticiyi uyar.

Hedef oyunları elle tek tek eklememek olabilir; veri kaynağı değişikliği, eksik gereksinim ve hatalı model eşleştirmelerinde sıfır bakım gerçekçi değil. Veri tabanı, zamanlayıcı, sağlayıcı izni ve gerçek donanım verisi olmadan bu özelliği üretimde tamamlandı sayamayız.

## 2. Telefon, e-posta ve hukuki sorumluluk

Bu güncellemede telefon alanı ve saklama kaldırıldı. Aynı tarayıcı deposundaki eski hesapların `phone` alanı temizlenir. İsim/soyad isteğe bağlıdır. E-posta forumda veya özel mesaj başlığında görünmez. Kullanıcı kendi verilerini JSON olarak dışa aktarabilir veya hesabını silebilir.

Demo güvenlik sınırı: localStorage bir hesap sunucusu değildir. Ortak bilgisayardaki biri tarayıcı verilerine erişebilir. Demo rolü değiştirilebilir; admin yetkisi gerçek güvenlik sağlamaz. Parola özeti olması bunu değiştirmez. Özel mesajlar da uçtan uca şifreli değildir. Üretim kişisel verisi burada toplanmamalı.

Yayın öncesi tasarım:

- Yalnızca gerçekten gereken alanlar: nickname, e-posta, güvenli parola/kimlik sağlayıcısı. E-posta doğrulaması gerçek bir hizmetle yapılmalı.
- Sunucuda yetkilendirme; güvenli parola türetme veya olgun kimlik servisi; admin için MFA; HttpOnly/Secure oturum çerezleri, CSRF/XSS önlemleri ve giriş hız sınırları.
- HTTPS, kısıtlı veritabanı erişimi, şifreli yedekler, gizli anahtar yönetimi. Gereksiz e-posta ve mesajları loglara yazmama.
- Veri envanteri, işleme amacı ve hukuki dayanak; aydınlatma metni; gereken durumlarda ayrı geçerli rıza. Üyelik için pazarlama onayı zorunlu tutulmamalı.
- Saklama/silme süreleri, başvuru ve ihlal müdahale süreçleri; yedeklerden silmenin nasıl yönetileceği.
- Hizmet sağlayıcı sözleşmeleri ve yurt dışına veri aktarımı: e-posta, analitik, moderasyon ve reklam sağlayıcıları da bu değerlendirmeye dahil.
- Zorunlu olmayan reklam/analitik çerezleri için uygulanabilir onay mekanizması. KVKK, hedef pazar gerektiriyorsa GDPR ve forum/yer sağlayıcı rolüne göre diğer mevzuat yükümlülükleri için uzman incelemesi.

Referanslar: [KVKK](https://www.kvkk.gov.tr/), [GDPR resmi metni](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Bu belge güncel hukuki inceleme veya “sorun çıkmaz” garantisi değildir; yayın modeli, şirket yapısı ve hedef ülkelere göre bir hukukçu değerlendirmeli.

## 3. Reklam ve sponsor nasıl bulunur?

Ziyaretçinin gelmesi tek başına para kazandırmaz. Reklam ağı gösterim/tıklama modeli, doğrudan sponsorluk ve şartları uygun satış ortaklığı ayrı gelir modelleridir.

Önerilen sıra:

1. Önce dar hedef kitleyi ve tekrar kullanımını doğrula. Kaç kişi sistemini giriyor, önerilen oyuna bakıyor, bir hafta sonra geri dönüyor?
2. Gerçek verilerle tek sayfalık medya kiti hazırla: kitle, aylık ziyaret, gösterim, coğrafya, içerik örnekleri ve reklam konumları. Sayı uydurma veya gelir garantisi verme.
3. İlk potansiyel sponsorlar: yerel bilgisayar mağazaları, çevre birimi markaları, bağımsız oyun stüdyoları, izinli dijital mağazalar.
4. Başlangıçta anlaşılır bir paket öner: belirli süre Keşfet alanı sponsorluğu + açıkça sponsorlu etiketli bir rehber. Forum sponsorluğu başka bir paket olabilir.
5. Reklam performans sonucunu değiştirmesin. Ücretli içerik ve satış ortaklığı bağlantısı açıkça etiketlensin. Kullanıcının e-posta/mesajlarını reklam müşterisine aktarma.
6. Bir reklam ağına başvuracaksak önce özgün içerik, uygun trafik, gizlilik/onay ekranları ve ağın güncel politikaları hazır olmalı. Kabul veya kazanç garanti edilemez.

Kârlılık sadece gelir değildir: video depolama, aktarım, moderasyon, e-posta, katalog lisansı ve operasyon maliyetlerini de ölçmeliyiz. Forum ve video eklemek “tamamen pasif” gelir hedefini zorlaştırır.

## 4. İnsanlar neden gelsin, neden geri dönsün?

İlk ziyaret: “GTX 1650 ile ne oynarım?”, “8 GB RAM ile ücretsiz oyunlar”, “bu oyunda hangi ayarı kısayım?” gibi somut ihtiyaçlar.

Tekrar ziyaret: kaydedilen sistem ve kütüphane, aynı donanımdaki oyuncuların ayar paylaşımları, yeni uyumlu oyunlar, izinli indirim takibi, iyi cevaplanan teknik sorular.

Dağıtım: kaynaklı Türkçe oyun/donanım sayfaları ve rehberler, kısa ayar karşılaştırma videoları, topluluk iş birlikleri, gönüllü uzman katkısı. Başlangıçta yüzlerce boş forum kategorisi veya kopya SEO sayfası yerine 20 iyi rehber ve birkaç aktif konu daha değerlidir.

Ölçülecekler: donanım formunu tamamlama, eşleşme sonucundan oyun detayına geçiş, yararlı cevap oranı, 7/30 günlük geri dönüş ve spam oranı. Kullanıcının ihtiyacını çözen ürünü ölçmek, yalnızca sayfa gösterimini artırmaktan daha sağlıklıdır.

## 5. Reklam yönetimi nasıl çalışıyor?

Demo admin > Reklamlar > Yeni reklam. Başlık, açıklama, https hedefi, buton yazısı, Keşfet/Forum konumu, başlangıç/bitiş tarihi ve görsel girilir. Görsel JPEG/PNG/WebP ve en fazla 2 MB olabilir. Kaydetten sonra konuma giderek önizleme yapılır. Düzenle, Duraklat/Etkinleştir ve Sil düğmeleri çalışır. Aynı konumda birden çok uygun kampanya varsa ilk kaydedilen gösterilir; gerçek rotasyon/öncelik sistemi henüz yoktur.

Bu işlemler yalnızca aynı tarayıcıyı etkiler. Gerçek yayında admin rolü sunucuda kontrol edilmeli, görsel nesne depolamaya konmalı, kampanyalar veritabanında saklanmalı ve denetim izi tutulmalı. Güvenilmeyen JavaScript/HTML reklam kodu yüklemek yerine kontrollü alanlar tercih edilir. AdSense benzeri bir ağ şu an entegre değildir. Yerel demo hiçbir gerçek reklam geliri veya trafik metriği raporlamaz.

## 6–10. Topluluk ve medya

- Demo admin: `admin@oyunradari.test` / `RadarDemo!2026`. Forumdaki “Demo hesaplarını dene” butonundan tek tıkla da açılır. PixelGezgin ve KareHizi diğer örnek hesaplardır. Bunlar sahte demo kimlikleridir; gerçek hizmet hesabı değildir.
- 8 örnek konu ve her birinde 2 örnek yanıt var. Konular/yorumlar etiketlidir. Admin sabitleyebilir, kilitleyebilir ve konuyu silebilir. Arama, kategori ve sıralama eklendi.
- 94 CPU ve 105 GPU modeli var; arama yapılabilir. Laptop ve VRAM varyantları ayrıdır. Güç puanları elle hazırlanmış demo indeksleridir; bu genişleme benchmark doğruluğunu garanti etmez. Laptop TGP’si, entegre GPU paylaşımlı belleği ve sürücü/özellik farkları ayrıca ele alınmalı.
- Gönderi veya yanıtta en fazla 5 görsel, 1 video; video en fazla 180 saniye. Görsel 8 MB, video 100 MB sınırı vardır. İmza kontrolü uzantıya güvenmez; medya tarayıcı tarafından açılabilmelidir. Görseller küçültülüp yeniden kodlanır; EXIF korunmaz. Video ham dosyası bu demoda saklanır; üretimde metadata temizleme/transcode gerekir.
- Tüm yeni medya incelemeye alınır. Otomatik kontroller dosya güvenliği ve limitleri içindir; çıplaklık/şiddet/hukuki uygunluk tanıyan yapay zekâ bağlı değildir. Yalnızca admin onayından sonra görünür olur. Reddedilen dosya yerel depodan silinir.
- Gerçek otomatik içerik moderasyonu: karantina depolama, sunucuda dosya/virüs kontrolü, görsel sınıflandırma, videoda sahne/kare ve gerekirse ses/metin analizi, risk puanı, insan incelemesi ve itiraz/şikâyet süreçleri. AWS Rekognition, Google Cloud veya uygun uzman sağlayıcıların kapsamı, bölgesi, fiyatı ve veri işleme koşulları ayrıca değerlendirilmelidir. Bu servislere bu sürümde bağlantı yapılmadı. Hiçbir servis içeriğin her ülkede yasal olduğunu garanti edemez; oyun içi şiddet yanlış pozitife, örneklenen videodaki kısa sahneler yanlış negatife yol açabilir.
- Özel mesajlar, engelleme ve bildirim çalışır; yalnızca aynı tarayıcıda demo hesapları arasında. Üretimde konuşma üyeliği her API isteğinde kontrol edilmeli; spam/abuse önlemleri ve saklama politikası olmalı. Admin paneli tüm DM’leri dolaşmaz; yalnızca kullanıcının bildirdiği mesajın metni incelemeye açılır. Demo uçtan uca şifreleme sunmaz.
- Oyun yorumları 5’erli sayfalama, tarih sıralaması, açılır yazma alanı, ayrı kartlar ve isteğe bağlı sistem etiketi kullanır. 100 yorumun tek sütunda kesintisiz yığılması önlenir.

## Sonraki geliştirme sırası

**Önce güvenilir çekirdek:** gerçek üyelik/veritabanı, doğrulanmış oyun/donanım verisi, kaynak tarihleri, oyun bazlı URL, sunucuda yetki kontrolü.

**Sonra büyüme:** kaliteli Türkçe rehberler, sistemli kullanıcı deneyimi raporları, izinli yeni oyun bildirimleri ve fiyat takibi.

**Ardından ticari ölçek:** medya kiti, sponsor pilotları, kontrollü reklam ölçümü, katalog/medya maliyet optimizasyonu.

**Video için kontrollü başlangıç:** altyapı ve moderasyon bütçesi hazır olmadan gerçek kullanıcılara sınırsız açmamak; kotalı pilot ve karantina akışıyla başlamak.

## Hangi ChatGPT çalışma alanı?

Bu konuşmada kod tabanı, sürüm geçmişi ve çalışan testler bulunduğu için burada devam etmek uygun. Görsel site oluşturma/Canvas alanı tasarım denemeleri için yardımcı olabilir; tek başına güvenli hesap sistemi, otomatik katalog veya moderasyon sağlamaz. Başka bir araca geçilecekse bu depo taşınmalı; sıfırdan iki ayrı ürün geliştirerek sürümleri bölmekten kaçınılmalı.
