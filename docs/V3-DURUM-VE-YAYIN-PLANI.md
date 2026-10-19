# Oyun Radarı v3 — Durum ve yayın planı

19 Ekim 2026 · Yerel demo sürümü. Gerçek site yayını yapılmadı.

## Önce ne yapıldı, ne yapılmadı?

Bu ZIP, tarayıcıda çalışan bir prototiptir. Ekranlar ve aşağıdaki yerel işlemler çalışır; farklı bilgisayarlardaki kullanıcılar arasında veri paylaşmaz. Yönetici görünürlüğü, tarayıcıda gerçek veri güvenliği sağlamaz. Gerçek isim, telefon, e-posta veya başka yerde kullanılan parola girmeyin.

| İstek | Durum | Açıklama / kalan iş ve çözüm |
| --- | --- | --- |
| Anasayfada 3 reklam | Yapıldı | Üst, orta, alt pano; mobilde de görünür. |
| Kütüphane ve forumda 3'er reklam | Yapıldı | Toplam 9 bağımsız yerleşim. Boş kütüphanede de reklam alanları var. |
| Reklam yükleme ve kaldırma | Yapıldı | Yönetim > Reklamlar: görsel, HTTPS bağlantısı, firma, sayfa, pano, tarih, düzenleme, duraklatma, silme. Aynı panoda ilk uygun kampanya gösterilir. |
| Gece / gündüz | Yapıldı | Üstte ay/güneş düğmesi; tercih aynı tarayıcıda korunur. |
| Reklam / şikâyet / öneri iletişimi | Yapıldı | Sayfa altında “Bizimle iletişime geçin”. Reklamda marka, ad, soyad, telefon, e-posta ve talep. Diğerlerinde bu kişisel alanlar yok. |
| Başvurular yalnızca adminde | Demo ekranında yapıldı | Gelen mesajlar sekmesi kategori bazlıdır. Şikâyette giriş gerekir; admin nickname görür. Öneri ve reklam misafirden de alınır. Gerçek gizlilik için sunucu yetkilendirmesi gerekli. |
| Başvuru cevaplama | Yapıldı | Admin cevap ve özel not ekler, durumu günceller. Üye kendi cevabını “Başvurularım”da görür. Misafire e-posta gönderilmez; mail sağlayıcısı gerekli. |
| Üye yönetimi | Yapıldı | Ad, soyad, nickname, e-posta, arama, paylaşım geçmişi ve özel mesaj. 7 günlük yazma/giriş engeli, süresiz engel, üyelik kapatma ve geri açma. |
| Üyelikten çıkarma | Yapıldı | Hesap devre dışı kalır; yeniden açılışta da kapalıdır. İçerikler otomatik silinmez. Bu işlem veri silme talebinin yerine geçmez. |
| Yorum / yanıt / konu kaldırma | Yapıldı | Admin oyun yorumunu ve forum yanıtını gerekçeyle silebilir; konu silme, sabitleme ve kilitleme korunur. |
| Yönetim işlem geçmişi | Kısmen | Üye işlemleri, yeni yorum/yanıt silmeleri, insan incelemesi, başvuru güncellemeleri kaydedilir. Tüm eski işlemler kapsanmaz; değiştirilemez sunucu denetim kaydı değildir. |
| Medya sınıflandırması | Demo senaryosu yapıldı | Yükleyici risk senaryosu seçer. Bu bir görsel analiz modeli değildir. Admin kategoriyi ve karar notunu kaydeder. |
| İnsan incelemesi / şikâyet | Yapıldı | Her medya önce bekler. Admin görüntüleyip onaylar/reddeder; üyeler içerik bildirir. İnceleme ekranındaki düğme 3 zararsız örnek görsel oluşturur. |
| Gerçek otomatik uygunsuz içerik filtresi | Yapılmadı | Model/servis, sunucu, video kare+ses taraması, zararlı dosya taraması ve operasyon ekibi bağlı değil. Ön tarama + insan incelemesi + itiraz/kaldırma süreci kurulmalı. |
| Ziyaretçi raporu | Yerel ölçüm yapıldı | Günlük, 7 günlük, 30 günlük ve 12 aylık grafikler. Tekil tarayıcı, sekme oturumu, sayfa geçişi. Küresel gerçek trafik değildir. |
| Reklam / firma / oyun / topluluk raporu | Yapıldı, yerel sınırlar var | Kampanya oluşturulma tarihi, firma adedi, firma başına kampanya, oyun yorumları, topluluk başlıkları; grafik ve açılır rakam tabloları. Gelir/gösterim ölçülmez. |
| Eski ve silinen reklam geçmişi | Eksik | Eski tarihsiz kampanyalar dönem hesabına katılmaz; silinenler rapordan çıkar. Yayında silmek yerine arşivleme ve değişmez olay kayıtları kullanılmalı. |
| Forum alıntılama | Yapıldı | Yanıtı alıntılayıp cevap verme. Kaynak yanıt silinince alıntıda “kaldırılmış” görünür; silinen metnin kopyası saklanmaz. |
| Forum keşif geliştirmeleri | Yapıldı | Kategori, arama, sıralama, sayfalama korunur; konu takibi ve yanıt bekleyenler eklenir. |
| Mesajda nickname arama | Yapıldı | Mesajlar ekranındaki arama; özel mesaj ve karşılıklı engelleme korunur. |
| Donanım kataloğu | Önceki sürüm korundu | 94 işlemci, 105 GPU seçeneği; skorlar yaklaşık demo verisidir. Ölçülmüş FPS değildir. |
| Oyun yorumları | Önceki sürüm korundu | Sayfada 5 yorum, tarih sıralaması, açılır yazma alanı; 100 yorumla sayfalama test edildi. |
| Gerçek üyelik / e-posta kodu | Yapılmadı | Kod ekranda gösterilen demodur. Sunucu kimliği, e-posta servisi, süre/kota ve sunucu oturumları gerekir. |
| Otomatik yeni oyun ekleme | Yapılmadı | 16 oyunluk sabit seçki. API lisansı, sunucu zamanlayıcısı, veri tabanı, eşleştirme ve hata kuyruğu gerekiyor. |
| Domain / hosting / canlı yayın | Yapılmadı | Henüz satın alınmadı, site yayınlanmadı. Bu demo için ihtiyaç yok. |

## Demoyu nasıl gezersin?

1. ZIP'i klasöre çıkar, DEMOYU-AC.html dosyasını aç.
2. Forum > Demo hesaplarını dene > admin. Alternatif: admin@oyunradari.test / RadarDemo!2026.
3. Yönetim > Reklamlar > Yeni reklam. Sayfa ve üst/orta/alt panoyu seç. Firma adını raporların anlamlı olması için doldur.
4. Sayfa altından iletişim başvuruları oluştur; Yönetim > Gelen mesajlar'da filtrele ve cevapla.
5. Yönetim > Üyeler'de PixelGezgin veya KareHizi'yi seç; geçmişini incele, mesaj at veya kısıtla. Admin hesabı kilitlenmesin diye kapatma işlemine izin verilmez.
6. İçerik denetiminde “3 güvenli örnekle…” düğmesini kullan. Örnekler gerçek şiddet/yetişkin görüntü içermez; yalnızca test kartlarıdır.
7. Forumda bir yanıtı alıntıla, cevap yaz; konu listesinden takip et.
8. Raporlar'da dönem seç. Örnek trafik grafiği ayrı düğmeyle açılır ve açıkça işaretlidir. Varsayılan gerçek yerel kayıtlardır.

## Doğrulanmış benchmark verisini nasıl buluruz?

Bir donanımın genel sentetik puanı, belirli oyundaki FPS'nin doğrulanmış karşılığı değildir. “Minimum gereksinimi karşılıyor” da “akıcı çalışır” garantisi vermez. Laptop güç sınırı, sürücü, oyun yaması, çözünürlük, ışın izleme, ölçekleme ve RAM sonucu değiştirir.

Önerilen başlangıç: en çok aranan 20–30 oyun ve Türkiye'de yaygın 10–15 GPU için ölçümlü veri seti oluşturmak. Her kombinasyonda aynı sahnede en az üç tekrar; ortalama FPS, %1 düşük FPS, çözünürlük/preset, CPU/GPU, RAM/VRAM, işletim sistemi, sürücü, oyun sürümü, tarih, test yöntemi ve kaynak saklanmalı. Ölçüm ile tahmin ayrı etiketlenmeli. Eksik veri varsa “ölçüm yok” denmeli.

Kaynak seçenekleri:

- Kendi testlerimiz veya donanım inceleme kanallarıyla lisanslı veri ortaklığı: oyun bazlı doğru yaklaşım. Yazılı yeniden kullanım izni gerekir.
- [PassMark hizmetleri](https://www.passmark.com/services/): donanım karşılaştırması/veri lisansı araştırılabilir; her oyun için FPS sağlamış sayılmaz.
- [UL Solutions benchmarks](https://benchmarks.ul.com/): sentetik test ve lisans seçenekleri; oyun FPS tablosunun yerine geçmez.
- [TechPowerUp incelemeleri](https://www.techpowerup.com/review/): yöntem ve karşılaştırma için referans; herkese açık olması toplu kopyalama hakkı vermez.
- [OpenBenchmarking](https://openbenchmarking.org/): açık test ekosistemi; iş yükü ve işletim sistemi eşleşmesi, veri lisansı ve ölçüm kaynağı ayrıca kontrol edilir.
- Üyelerin FPS bildirimleri: “kullanıcı bildirimi, doğrulanmadı” olarak ayrı tutulur. Örnek sayısı ve aykırı değer kontrolü gerekir; tek bildirimden kesin sonuç çıkarılmaz.

## API ücretsiz olabilir mi? Steam'den alınabilir mi?

Evet, Steam'den veri alınabilecek yollar var. Ancak mağaza açıklaması, sistem gereksinimi ve ölçülmüş performans üç ayrı veri türüdür. Steam sana her CPU/GPU için ölçülmüş FPS veren evrensel bir API sunmuş sayılmaz.

| Kaynak | Kullanım | Dikkat |
| --- | --- | --- |
| [Steam Web API](https://partner.steamgames.com/doc/webapi_overview) | Belgelenmiş uç noktalar ve izin verilen katalog/Steam kimlikleri | Uç noktaya göre erişim/anahtar değişir. Güncel yetkiler ve koşullar kontrol edilmeli; ücretsiz erişim sınırsız ticari kullanım garantisi değildir. |
| Steam mağaza appdetails | Örnek yol: https://store.steampowered.com/api/appdetails?appids=1245620&l=turkish | Kullanılan ama resmî, kararlı genel katalog sözleşmesi sayılmaması gereken uç nokta. CORS, hız sınırı, değişiklik ve eksik gereksinim sorunları olabilir. Ana kaynak olarak güvence varsayma. |
| [IGDB API](https://api-docs.igdb.com/) | Oyun bilgisi, tür, açıklama ve görsel metadata'sı | Ücretsiz erişim seçenekleri araştırılabilir; Twitch uygulama kimliği ve sunucu token yönetimi gerekir. Ticari kullanım, görsel hakları ve güncel koşullar doğrulanmalı. |
| [RAWG API](https://rawg.io/apidocs) | Katalog ve oyun bilgileri | Ücretsiz/ücretli plan ve atıf şartları olabilir; mevcut kotaları bu ortamda doğrulayamadım. Performans ölçümü yerine geçmez. |

Bu ortamdan bu kaynaklara yapılan canlı istekler ağ geçidinde 403 ile engellendi. Dolayısıyla bugün çalışan uç nokta, ücretsiz kota veya lisans uygunluğu teyit edilmiş değildir. Sahte canlı bağlantı eklenmedi; API anahtarı demo HTML içine konulmadı.

Yayın mimarisi: sunucuda zamanlanmış görev → yeni/değişen oyun ID'leri → kota dostu önbellek → oyun/DLC/demo ayrımı → HTML temizleme → işlemci/GPU gereksinim eşleme → kaynak/tarih kaydı → belirsizleri yönetici kuyruğu → yayın. Günlük artımlı güncelleme, tekrar deneme ve eski veriyi koruma gerekir. “Hiç bakım istemeyen otomasyon” sözü doğru olmaz.

## Medya ve kişisel bilgi güvenliği

Demo sınıflandırma menüsü yükleyicinin seçtiği senaryodur; görüntüyü inceleyen AI yoktur. Dosya biçimi/imzası, boyut, sayı, gerçek video süresi kontrol edilir; tüm medya insan kararına kadar gizlidir. En fazla 5 görsel, 1 video, 180 saniye ve 100 MB video sınırı korunur.

Yayında dosyalar özel karantina deposuna alınmalı. Sunucuda dosya doğrulama, zararlı yazılım taraması, görsel/video kare+ses sınıflandırması ve kişisel bilgi kontrolleri uygulanmalı. Yüksek riskli ve belirsiz içerik yayınlanmadan insan incelemesine gitmeli. Yanlış retler için itiraz ve telif/mahremiyet ihlallerinde kaldırma kanalı kurulmalı. Bir otomatik model hukuka uygunluk garantisi vermez.

Üyelikte telefon yok; reklam başvurusunda açık talebin doğrultusunda var. İsim/soyad üyelikte isteğe bağlı; nickname herkese açık, e-posta üye listesinde yalnızca admin görünümünde. Reklam iletişim verileri için amaç, hukuki dayanak ve saklama süresi tanımlanmalı. Reklam başvurusu vermek pazarlama e-postasına otomatik izin değildir.

Yayın öncesi: HTTPS, sunucu tarafı rol/nesne yetkisi, güvenli oturum, güçlü parola hash'i, giriş hız sınırı, admin için ikinci faktör, yedekleme/geri yükleme, silme ve dışa aktarma, veri minimizasyonu, KVKK aydınlatması ve gerekiyorsa çerez izinleri. GDPR'nin uygulanıp uygulanmadığı hedef pazar ve işleyişe bağlıdır. Bir hukuk uzmanı metinleri ve yükümlülükleri incelemeli; “yasal sorun kesin olmaz” garantisi verilemez.

Yerel raporda rastgele tarayıcı kimliği kullanılır, IP veya üyelik ile eşleştirilmez. En fazla 366 günlük / 10.000 olay tutulur. Tarayıcı verileri temizlenince kimlik değişir; bu yüzden rapor insan sayısı veya sunucu istatistiği değildir.

## Forum neden tercih edilir?

Canlı Ekşi Sözlük, memurlar.net ve Reddit taraması bu ortamda 403 nedeniyle yapılamadı. Aşağıdakiler bilinen genel ürün kalıplarından alınan fikirlerdir; güncel ekranları incelediğim iddiası değildir. Kaynaklar: [Ekşi Sözlük](https://eksisozluk.com/), [memurlar.net forum](https://forum.memurlar.net/), [Reddit](https://www.reddit.com/).

- Başlık merkezli kısa tartışma, kategori ve yanıt sıralaması: mevcut forum korunup geliştirildi.
- Takip edilen konular ve yanıt bekleyen sorular: bu sürümde eklendi.
- Alıntıyla bağlamı koruyan yanıt: bu sürümde eklendi.
- Sonraki adım: çözüm olarak işaretlenen yanıt, spoiler gizleme, oyun/donanım etiketi, topluluk kuralları ve moderatör sorumlulukları. Sonsuz tartışma dalları yerine okunabilirlik korunmalı.

Farkımız “her konuda forum” olmak değil, Türkçe donanım sorusunu ölçüme dayalı oyun keşfine bağlamak olabilir: “Bu bilgisayarla ne oynarım?”, “10 bin TL yükseltmeyle ne değişir?”, “Ücretsiz, arkadaşla oynanan ve sistemime uyan oyunlar”. Yükseltme karşılaştırması ve kaydedilmiş sistem için yeni oyun bildirimi ileride değerli olur; bugün yapılmış değildir.

## Yayın maliyeti: ne kadar bütçe gerekir?

Aşağıdakiler 19 Ekim 2026 için planlama aralıklarıdır; doğrulanmış sağlayıcı tarifesi veya fiyat teklifi değildir. Sağlayıcı fiyat sayfaları bu ortamda açılamadı. Kur, KDV, destek, trafik ve sözleşmeler ayrıca değişir. TL'ye güncel kurla çevrilmeli; geliştirme, hukuk, test donanımı/veri lisansı ve insan moderasyonu dahil değil.

| Aşama | Tahmini bütçe | Kapsam |
| --- | --- | --- |
| Bu demo | 0 hosting / domain | Bilgisayarda açılır. |
| Alan adı | 10–30 USD / yıl | Uzantı ve yenileme fiyatı değişir; premium isim hariç. |
| Küçük gerçek pilot, metin + görsel | 50–150 USD / ay | Uygulama, veri tabanı, küçük depolama, temel yedek ve e-posta için toplam hizmet bütçesi. |
| Video ve büyüyen topluluk | 150–500+ USD / ay | Altyapı, medya işleme ve otomatik tarama için başlangıç payı; yoğun trafikte belirgin aşılabilir. İnsan denetim personeli hariç. |
| Tanıtım denemesi | Örneğin 1.500–3.000 TL / 15 gün | Senin belirleyeceğin Google Ads test bütçesi; sabit servis bedeli değildir. |

Ücretsiz hizmet kotaları küçük pilotu ucuzlatabilir; uykuya alma, ticari kullanım, veri tabanı, dosya çıkışı ve kota sınırları kontrol edilmeden kalıcı işletme bütçesi sıfır sayılmaz. Düşük fiyatlı tek VPS yönetimini üstlenirsen maliyet düşebilir ama güncelleme, yedek ve izleme sorumluluğu artar.

Video örneği: 3 dakika, ortalama 4 Mbps ≈ 90 MB. Ayda 1.000 video ≈ 90 GB yeni dosya. Her biri 100 kez tam izlense ≈ 9 TB aktarım; küçük bir hosting paketi hesabını bozar. Kodlama kopyaları, eski dosyaların birikmesi ve tarama ücretleri de vardır. Başlangıçta video için üyelik yaşı/kota ve depolama politikası mantıklı olur.

Teklif karşılaştırma kaynakları: [Hetzner Cloud](https://www.hetzner.com/cloud), [Supabase](https://supabase.com/pricing), [Cloudflare R2](https://developers.cloudflare.com/r2/pricing/). Bunlar önerilmiş kesin paket veya fiyat onayı değildir.

## Google reklamları ve para kazanma

Google Ads reklam vererek ziyaretçi getirir; AdSense reklam göstererek gelir kazanmanı sağlayabilir. Bunlar ayrı ürünlerdir. Siteye sırf ziyaretçi geldiği için otomatik para ödenmez; reklam ağı kabulü, gösterim/tıklama koşulları, sponsor anlaşması veya başka gelir modeli gerekir. Kendi reklamlarına tıklama veya kullanıcıları tıklamaya teşvik etme.

Google Ads sabit “oyun sitesi tıklama ücreti” ile çalışmaz. Açık artırma, kelime, ülke, rekabet, kalite ve dönüşüm sonucu değiştirir. [Google Ads bütçe açıklaması](https://support.google.com/google-ads/answer/2375423?hl=tr) ve hesabındaki Anahtar Kelime Planlayıcı üzerinden tahmin alınmalı. Bazı kampanyalarda günlük harcama ortalama günlük bütçeyi aşabilir; geçerli aylık sınırlar ve faturalandırma koşulları hesapta kontrol edilmeli.

Tamamen varsayımsal hesap: 3.000 TL bütçe ve ortalama 2 / 5 / 10 TL tıklama maliyeti sırasıyla yaklaşık 1.500 / 600 / 300 tıklama eder. Bu rakamlar piyasa fiyatı tahmini değildir, bütçe matematiği örneğidir. Tıklama her zaman gerçek yeni kullanıcı veya üye değildir.

Ben önce 15 gün için toplam 1.500–3.000 TL sınırla, dar arama niyetlerinde test öneririm. “GTX 1650 hangi oyunları açar”, “8 GB RAM ücretsiz oyunlar” gibi ihtiyaçlara uygun sayfalar; alakasız aramaları dışlayan kelimeler. Başarı ölçüsü yalnızca tıklama değil: sistem formunu tamamlayan ziyaretçi maliyeti ve 7 gün içinde geri gelme oranı. Gerçek ölçüm ve izin süreçleri kurulmadan kampanya büyütülmemeli.

Sadece AdSense geliri için reklamla trafik satın almak başlangıçta zarar ettirebilir. Varsayımsal 50 TL / 1.000 sayfa gösterimi ve ziyaretçi başına 2 sayfa = 0,10 TL gelir/ziyaretçi. 5 TL edinme maliyetini karşılamaz. Sponsor değeri ve geri dönüşler oluşmadan büyük reklam bütçesi ayırmam.

Daha güçlü başlangıç: özgün Türkçe ölçüm rehberleri, az ama güvenilir donanım/oyun sayfaları, arama motoruna uygun sunucu üretimli sayfalar, küçük donanım içerik üreticileriyle test ortaklığı ve faydalı forum yanıtları. Otomatik binlerce benzer sayfa yerine kaynaklı içerik gerekir.

Sponsor için: anonim ve doğrulanmış ziyaret istatistiği, kitle profili, pano boyutları, örnek kampanya, süre ve fiyat içeren medya kiti hazırlanmalı. Bilgisayar mağazaları, çevre birimi markaları ve oyun geliştiricileri ilk adaylar olabilir. Satış ortaklığı bağlantıları açıkça belirtilmeli. Reklam uyumluluk puanını veya öneri sıralamasını gizlice değiştirmemeli. Başlangıçta “pasif gelir” değil; içerik, teknik bakım ve moderasyon isteyen bir işletme olacaktır.

## Test ve sınırlar

18 birim testi geçti. Kaynak ve tek dosyalık demo ayrı ayrı tarayıcıda test edildi; önceki özellikler ve v3 kabul senaryoları geçti. Mobil 390 px ekranlarda yatay sayfa taşması kontrol edildi. Engellenmiş hesabın parolayla girişi, kütüphaneye özel üst pano ve firma raporu ayrıca doğrulandı. Otomatik kontroller donanım/medya sınırları, 100 yorum sayfalaması, hesap geçişi, mesaj/engel, reklam, medya incelemesi, yeni iletişim ekranları, alıntı, üyelik kapatma, rapor dönemleri ve mobil taşmayı kapsar. Bu, üretim güvenlik denetimi veya tüm tarayıcılarda garanti değildir.

Bu sürümden sonra önerilen öncelik: sunucu + gerçek kimlik/üyelik → lisanslı katalog entegrasyonu → küçük doğrulanmış benchmark seti → özel medya deposu ve moderasyon → gerçek trafik ölçümü → sınırlı yayın ve reklam testi.
