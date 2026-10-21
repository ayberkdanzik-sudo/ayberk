# Oyun Radarı v4 — Durum, aylık maliyet ve memuriyet

21 Ekim 2026. Bu rapor yeni sürümün durumunu anlatır. Önceki raporlar tarihçe olarak korunmuştur. Domain satın alınmadı, site internete yayınlanmadı; gerçek mağaza anlaşması veya gelir elde etme işlemi yapılmadı.

## Yapılanlar ve kalanlar

| İstek | Durum | Sonuç / neden ve çözüm |
| --- | --- | --- |
| Üyelerin görsel/video yüklemesini kaldır | Yapıldı | Konu ve yanıtlarda dosya yükleme kaldırıldı. Eski yerel medya temizlenir. Oyun kapakları ve admin reklam görselleri korunur. |
| Bildirim butonu ve sayaç | Yapıldı | Sağ üstte yeni mesaj ve alıntı sayısı. Bildirim tıklanınca ilgili mesaja veya doğru sayfadaki alıntılı yanıta gider, vurgulanır. Okundu işareti korunur. |
| Üyeler ve admin mesaj silebilsin | Yapıldı | Mesajdaki üç noktadan “Benden sil”; sohbet menüsünden “Sohbeti benden sil”. Karşı tarafın kopyası silinmez, gelecekteki mesajlar görünür. Bu bir tüm veritabanından silme işlemi değildir. |
| Admin hatırlatıcıları | Yapıldı | Bekleyen reklam/öneri/şikâyet, metin incelemesi, okunmamış mesaj ve yaklaşan/süresi geçen reklam bitişleri. Ayrıca tarihli elle görev ekleme, tamamlama ve silme. |
| Admin görünümü | Yapıldı | Yan menü, özet kartları, yapılacaklar listesi, daha düzenli içerik alanı. Mobilde kaydırılabilen yönetim menüsü. |
| Forum ve mesajlaşma görünümü | Yapıldı | Daha açık aralıklar, kartlar, sohbet listesi, mesaj balonları, sayfalama ve boş durum ekranları. |
| Forumda üç noktalı işlem menüsü | Yapıldı | Alıntıla/yanıtla, yönetici için sil ve bildir aynı menüde; oyun yorumlarında da işlem menüsü var. |
| Donanım / Alışveriş sekmesi | Yapıldı | Kütüphanenin yanında. 15 bilinen model; 12 kategori, marka/model arama, kategori/marka filtresi, sıralama, örnek fiyat modunda bütçe filtresi. |
| Gerçek mağazalarda bulunmuş 10–15 ürün/fiyat | Tamamlanamadı | Mağaza sitelerine erişim ağ geçidinde 403 ile engelli. Modeller bu oturumda mağazalarda doğrulanmadı. Canlı fiyat diye sahte değer gösterilmedi. |
| Mağazaya yönlendirme | Kısmen | Örnek modellerde altı mağazanın arama bağlantıları var; bunlar doğrulanmış doğrudan ürün sayfası değildir. İzinli veri akışı bağlanırsa gerçek ürün bağlantısı desteklenir. |
| Fiyat karşılaştırmasını deneme | Yapıldı | Varsayılan “fiyat doğrulanmadı”. Açıkça işaretli örnek fiyat modunu açarak tutar filtreleme/sıralama ve mağaza karşılaştırması denenir. Bu tutarlar mağazalardan alınmadı. |
| Otomatik fiyat güncelleme altyapısı | Hazırlandı, canlı değil | İzinli standart JSON akışını alan sunucu betiği; doğrulama, fiyat geçmişi, hata koruması ve eski teklifleri gizleme var. Gerçek kaynak anlaşması, mağazaya özel dönüştürücü ve sunucuda zamanlayıcı kurulumu bekleniyor. |
| Reklam tıklaması hedef sayfayı açsın | Yapıldı | Reklam görseli, başlığı ve butonu adminin kaydettiği HTTPS adresini yeni sekmede açar. Script reklam kodu çalıştırılmaz. |
| Maliyet araştırması | Erişim sınırıyla hazırlandı | Fiyat sayfaları da engelli. Aşağıdaki hesap planlama bütçesidir; doğrulanmış güncel sağlayıcı teklifi değildir. |
| Memuriyet değerlendirmesi | Genel çerçeve hazırlandı | Kullanıcı 657’ye tabi kadrolu memur. Faaliyetin ticari niteliği ciddi risk yaratır; kişiye özel kesin hukuki uygunluk kararı verilmedi. |

Önceki özellikler korunur: 9 reklam alanı, gece/gündüz, üye yönetimi, iletişim kutusu, forum takibi, özel mesaj, metin bildirimi, raporlar ve 94 CPU / 105 GPU seçeneği. Yaklaşık donanım skorları doğrulanmış FPS değildir.

## Demoyu gezme sırası

1. ZIP'i klasöre çıkar, DEMOYU-AC.html dosyasına çift tıkla.
2. Forum > Demo hesaplarını dene > admin. Admin parolalı giriş: admin@oyunradari.test / RadarDemo!2026.
3. Admin olarak PixelGezgin'e mesaj gönder; hesap değiştirip bildirim düğmesini dene. Sohbet zaten açıksa görünen mesajlar okundu sayılır; bildirim testi için alıcının başka sayfada olması daha anlaşılırdır.
4. Forumda başka üyenin yanıtındaki üç noktadan alıntıla; o üyeye geçip bildirimden ilgili yanıta git.
5. Mesajın üç noktasından “Benden sil”; ardından diğer hesaba geçerek karşı taraftaki kopyanın korunduğunu gör.
6. Yönetim > Genel bakış / Hatırlatıcılar. Bir iletişim başvurusu oluşturduğunda bekleyen işler listesine düşer; kapatılınca çıkar.
7. Donanım / Alışveriş: kategori seç, marka/model ara. Örnek fiyat modunu özellikle açarak bütçe filtresi ve fiyat sıralaması dene.
8. Yönetim > Fiyat takibi, canlı entegrasyon durumunu ve hazır altyapının sınırlarını gösterir. “Sunucu kayıtlarını yenile” mağazayı taramaz; hazırlanmış veri dosyasını okur.
9. Reklamlar'da görsel ve hedef bağlantı ekle. Yerleşimi açıp görsele, başlığa veya butona tıklayabilirsin.

Bu demo aynı tarayıcı içinde çalışır. Gerçek kişisel bilgi/parola girmeyin. Gerçek üyelik, e-posta, güvenli sunucu oturumu ve farklı kullanıcılar arasında internet üzerinden mesajlaşma henüz yoktur.

## Benim aylık toplam maliyetim ne olur?

Önerilen küçük başlangıç için **aylık yaklaşık 30 USD altyapı bütçesi** ayırmanı öneriyorum. Bu bir sağlayıcının fiyat teklifi değildir. Üye video/görseli kaldırılmış, küçük trafik ve yönetimini üstlendiğin tek sunucu varsayımıyla hesaplanan gider planıdır. Önceki 50–150 USD aralığı daha fazla yönetilen servis için ayrılmış daha geniş bütçeydi; bu hesap daha yalın mimari içindir.

Varsayımlar: ayda yaklaşık 5.000 ziyaret, 20.000 sayfa görüntüleme, metin ağırlıklı forum/mesajlar, birkaç yüz üye, sınırlı e-posta ve küçük ürün kataloğu. Gerçek kapasite yük testiyle belirlenir. Binlerce mağaza ürünü, yoğun bot trafiği veya çok sık güncelleme bu hesaba dahil değildir.

| Kalem | Aylık ayrılan bütçe | Açıklama |
| --- | --- | --- |
| Küçük VPS: uygulama + veritabanı + zamanlanmış fiyat işi | 12 USD | Paket teklifi değil, planlama payı. Sunucu bakımı ve güncellemeler senin/teknik destekçinin sorumluluğunda. |
| Sunucudan ayrı günlük yedek | 3 USD | Geri yükleme testi de gerekli. |
| Domain payı | 2 USD | Yılda 24 USD varsayımının aylığa bölünmesi; domain genellikle yıllık peşin ödenir. |
| Doğrulama ve sistem e-postası | 3 USD | Küçük hacim varsayımı; ücretsiz kota kullanılabilirse düşebilir. |
| Küçük reklam görselleri, ek trafik ve dalgalanma payı | 5 USD | İlk küçük dosyalar sunucu diskine sığar. Bu tutar ayrı zorunlu depolama faturası değil, tampon bütçedir. |
| Ara toplam | 25 USD | Temel altyapı ve tampon. |
| Vergi/kur/ödeme farkı için örnek yüzde 20 ek pay | 5 USD | Her hizmette mutlaka bu vergi uygulanır demek değildir; gerçek fatura koşulları kontrol edilmeli. |
| **Aylık altyapı planı toplamı** | **30 USD** | Google reklamı, ücretli veri lisansı, muhasebe/hukuk ve emek hariç. |

TL karşılığı **30 × ödeme günündeki USD/TL kuru**. Yalnızca hesabı anlaşılır kılmak için, kur 40 TL olsaydı 1.200 TL; 45 TL olsaydı 1.350 TL; 50 TL olsaydı 1.500 TL olurdu. Bunlar güncel kur iddiası değildir.

Domainin yıllık peşin alınması nedeniyle ilk ay nakit çıkışı aylığa bölünmüş toplamdan yüksek olabilir. Domainin ilk yıl kampanya fiyatını değil yenilemesini de kontrol et. Ücretsiz SSL seçenekleriyle ayrıca SSL sertifikası satın almak çoğu küçük site için gerekmez.

**Tam ticari işletmenin kesin toplamı bugün hesaplanamıyor:** mağaza veri anlaşmalarının ücretleri, hukuki görüş, vergi/muhasebe düzeni ve teknik destek kapsamı belli değil. Bunlara sıfır maliyet demiyorum. Örneğin reklama ayda 1.500 TL ayırırsan toplam bütçe **30 USD karşılığı + 1.500 TL + gerekiyorsa veri lisansı/uzman desteği** olur. Başlangıçta Google reklamı zorunlu değildir.

Alternatif: sunucu yönetimini kolaylaştıran yönetilen uygulama/veritabanı hizmetleriyle yaklaşık 50–90 USD/ay bütçe düşünmek daha rahat olabilir; bu da canlı fiyatla doğrulanmış paket değildir. Bakım dışarıya verilecekse ücret ayrıca alınır. Bana veya bu demoya bakarak barındırma hizmetinin ücretsiz olacağını varsayma.

Kontrol edilmesi gereken fiyat sayfaları: [Hetzner Cloud](https://www.hetzner.com/cloud), [Supabase](https://supabase.com/pricing), [Cloudflare R2](https://developers.cloudflare.com/r2/pricing/). Bu çalışma sırasında sayfalar ağ geçidinde engellendi; bu tutarlar o sitelerden alınmış fiyatlar değildir.

## Reklam görselleri depolama ücretini artırır mı?

Bir miktar alan ve aktarım kullanır, ancak üye videosundan çok küçüktür. 9 adet 200 KB banner yaklaşık **1,8 MB** yer tutar. Yeni depolama paketi almayı tek başına gerektirmesi beklenmez; mevcut paketin kotası belirleyicidir.

Trafik hesabı farklıdır: sayfada 3 banner, her biri 200 KB ve ayda 20.000 sayfa gösterimi varsa, önbellek yok varsayımıyla yaklaşık **12 GB/ay banner aktarımı** çıkar. 100.000 sayfa gösteriminde yaklaşık 60 GB olur. Önbellek/CDN tekrar indirmeleri azaltabilir. Paketin dahil trafiği ve kota aşım bedeli kontrol edilir.

Panelin 2 MB yükleme üst sınırı var; pratik hedef 100–200 KB WebP/JPEG olmalı. 2 MB'lık üç görsel kullanırsan aynı 20.000 gösterimde yaklaşık 120 GB aktarım oluşabilir. Bu nedenle büyük dosya kabul etmek ile büyük dosya kullanmayı önermek farklıdır. Demo görselleri tarayıcı deposunda tuttuğundan şu anda sana depolama faturası çıkmaz; bu hesap yayın sürümü içindir.

## Mağazalardan ücretsiz API alabilir miyiz? Basit anlatım

API, bir mağazanın bilgisayarımıza düzenli ve anlaşılır bir ürün listesi vermesinin yoludur. Ürün akışı (feed) da benzer iş görür: ürün kodu, adı, fiyatı, stok durumu ve bağlantısı içeren bir dosyadır. Bizim site bu listeyi alır ve karşılaştırma ekranına çevirir.

**Teknosa, Vatan, MediaMarkt, Trendyol, Hepsiburada veya n11'in herkese açık, ücretsiz ve tüm kataloglarını karşılaştırma sitelerine sunan API'si olduğunu doğrulayamadım.** Satıcı API'si bulunması da tüm mağazanın fiyatlarını okumaya izin verildiği anlamına gelmez: satıcı API'si çoğu zaman yalnızca kendi mağazanın ürün/sipariş işlemleri içindir.

İzlenecek yol:

1. Mağazanın iş ortaklığı / satış ortaklığı / ürün akışı programına başvurulur. Ürün ve fiyatları sitede göstermeye, ne sıklıkla güncellemeye ve görsel kullanmaya izin verildiği yazılı netleştirilir.
2. Mağaza bir erişim anahtarı veya izinli dosya adresi verir. Ücretsiz olabilir, komisyon ortaklığına bağlı olabilir veya ücretli olabilir; her firma ayrı değerlendirilir. Anahtar yalnızca sunucuda saklanır.
3. Sunucumuz örneğin saatte bir listeyi alır. Sıklık mağazanın kotasına göre ayarlanır; her ziyaretçide mağazaya tekrar istek atılmaz.
4. Aynı ürünler model/GTIN ve tam konfigürasyonla eşleştirilir. 8 GB ve 16 GB RAM'li iki laptop aynı ürün diye karşılaştırılmaz; satıcı, kargo ve garanti farkları da gösterilmelidir.
5. Fiyat değişirse kaydedilir. Kaynak çalışmazsa önceki kayıt korunur, hata yöneticiye görünür. 24 saatten eski teklif bu demoda güncel fiyat gibi gösterilmez.
6. Ziyaretçi “Ürüne git”e tıkladığında mağazanın ürün sayfasına gider. Satış orada gerçekleşir. Komisyon varsa anlaşma ve açık satış ortaklığı bildirimi gerekir.

Kullanıcının tek tek ürün/fiyat takip etmesi gerekmez; fakat yeni varyant eşleşmeleri, kaynak hataları ve sözleşme değişiklikleri için istisna yönetimi gerekir. “Tamamen bakım gerektirmeyen” sistem sözü vermiyorum.

Bugün hazırlanan sunucu betiği standartlaştırılmış izinli JSON akışını okuyabilir. Mağazaların kendi formatları farklıysa onlara özel dönüştürücü gerekir. Hiçbir mağazanın gerçek uç noktası veya anahtarı uydurulmadı. Sunucuya zamanlayıcı kurulmadı; demo internete yayınlanmadı. Teknik kurulum ayrıntısı ZIP içindeki docs/FIYAT-AKISI-KURULUMU.md dosyasında.

İzinli API/ürün akışı sağlanamazsa seçenekler: lisanslı fiyat veri sağlayıcısı, az sayıda anlaşmalı mağazayla başlangıç veya sadece mağaza arama bağlantıları. Koruma sistemlerini aşan bot/proxy çözümleri kullanılmadı. İzinsiz yoğun kazıma hem kırılgan hem hukuki/sözleşmesel açıdan sorunlu olabilir.

## Kaynak sitelerine erişim neden engelleniyor?

Teknik hata: **Tunnel connection failed: 403 Forbidden**. İstek, sitenin sayfa içeriği gelmeden bu çalışma ortamının ağ geçidinde reddediliyor. Bu bulgu mağazanın bizi engellediğini, API'nin ücretli olduğunu veya ürünün bulunmadığını göstermez. Aynı hata mağaza, mevzuat ve hosting sitelerinde de görüldü.

Çözüm: Codex bulut ortamının ağ erişim/izin verilen alan adları ayarında bu kaynaklara ve yönlendirdikleri gerekli alan adlarına erişim açılmalı; ardından normal HTTPS isteği yeniden denenmeli. Bu ayarı bu oturumdan değiştirebildiğim bir araç yok. Alternatif olarak erişimi olan kendi geliştirme sunucunda kontrol yapılabilir. Bu, mağazanın kendi erişim kısıtını aşmak için kullanılan bir yöntem değildir.

Başlangıç alan adları: www.teknosa.com, www.vatanbilgisayar.com, www.mediamarkt.com.tr, www.hepsiburada.com, www.trendyol.com, www.n11.com, www.mevzuat.gov.tr, www.gib.gov.tr, www.hetzner.com, supabase.com, developers.cloudflare.com. Gerçek API/akış adresi alındığında onun alan adı da gerekir. Ağ açılması API lisansı veya mağaza izni sağlamaz; bunlar ayrı koşullardır.

## 657’ye tabi kadrolu memur olarak para kazanmak sorun çıkarır mı?

**Evet, düşündüğün düzenli reklam/sponsorluk ve satış ortaklığıyla site işletme modeli bakımından ciddi disiplin riski olabilir. Şu aşamada “sorunsuz yapabilirsin” demek doğru değil.** Burada kişisel hukuki görüş verilmiyor; genel mevzuat çerçevesi ve karar öncesi sorular açıklanıyor. Güncel metin/uygulama bu ortamda erişim engeli nedeniyle teyit edilemedi.

[657 sayılı Devlet Memurları Kanunu](https://www.mevzuat.gov.tr/mevzuatmetin/1.5.657.pdf) **madde 28**, memurların ticaret ve diğer kazanç getirici faaliyetlerine ilişkin sınırlamaları düzenler. **Madde 125/D-h**, ticaret yapmak veya memurlara yasaklanan diğer kazanç getirici faaliyetlerde bulunmayı kademe ilerlemesinin durdurulması yaptırımı kapsamında sayan hükümdür. Somut olay, güncel mevzuat ve uygulama uzman tarafından değerlendirilmelidir.

Her türlü gelir otomatik olarak yasak değildir. Ancak reklam satmak, sponsor sözleşmesi yapmak, mağazalardan satış komisyonu almak, sürekli bir fiyat karşılaştırma hizmeti işletmek; yalnızca kişisel hobi sitesi açmaktan farklıdır. Düzenli gelir, organizasyon ve senin aktif işletme rolün ticari nitelik değerlendirmesinde önem taşıyabilir. “Pasif gelir” diye adlandırmak faaliyeti kendiliğinden serbest yapmaz.

**Vergi ödemek memuriyet yasağını kaldırmaz.** Vergi mevzuatına uyum ile 657 bakımından faaliyetin serbest olması iki ayrı konudur. İnternet içerik üreticiliğine ilişkin Gelir Vergisi Kanunu mükerrer 20/B gibi düzenlemeler gündeme gelse bile bu sitenin/gelirin şartları taşıdığı ayrıca incelenmelidir; bir vergi istisnası 657 bakımından otomatik izin değildir. [Gelir İdaresi Başkanlığı](https://www.gib.gov.tr) üzerinden güncel şartlar ve gerekirse özelge yolu mali müşavirle değerlendirilir.

**Siteyi ileride satmak:** Bir defalık domain, yazılım veya başka hakkın devri ile süreklilik taşıyan ticari işletmenin devri aynı değerlendirme değildir. Sitenin nasıl geliştirildiği, işletildiği, gelirin niteliği ve satış sözleşmesi önemlidir. “Bir kere satacağım, kesin sorun olmaz” denemez. Satış, geçmişteki işletme faaliyetinin değerlendirilmesini de ortadan kaldırmaz. Domain/kod/marka/mağaza sözleşmeleri ve üyelerin kişisel verileri ayrı hak ve yükümlülükler doğurur; veritabanı sıradan bir dosya gibi alıcıya devredilmemelidir.

Para kazanmaya başlamadan önce önerilen somut adımlar:

1. Kurumunun personel/hukuk birimine yazılı faaliyet açıklaması sun: ücretsiz üyelik ve forum, reklam satışı, satış ortaklığı komisyonu, düzenli fiyat güncelleme, aktif yönetim ve ileride satış ihtimali. Yazılı görüş iste; bu görüşün kanuna aykırı faaliyeti serbestleştiren genel izin olmadığını da bil.
2. İdare/personel hukuku alanında çalışan avukata 657/28 ve 125 kapsamında bu modeli incelet. Kurumuna/mesleğine özel kurallar da varsa değerlendirsin.
3. Mali müşavirle gelir türünü, vergi kaydını/istisna olasılığını, belge düzenini ve site satışının vergisini ayrıca netleştir.
4. Bu çerçeve netleşene kadar demoyu geliştirmek ile reklam/komisyon sözleşmesi imzalayıp gelir elde etmeyi ayrı tut. Bu oturumda gelir elde etme veya reklam anlaşması yapılmadı.

## Testler ve kalan yayın işleri

22 birim testi geçti. Kaynak sürüm ve tek dosyalık demo için tarayıcı kabul testleri geçti. Birim testleri fiyat akışında URL, fiyat, varyant ve geçmiş kurallarını; tarayıcı testleri bildirim hedefi, mesaj silmede hesap ayrımı, hatırlatıcılar, alışveriş filtreleri, örnek fiyat uyarıları, yorum sayfalaması, reklam ve mobil görünümü kapsar. İzinli akış entegrasyonu sahte test verisiyle sınanır; bu mağazaya gerçek bağlantı yapıldığı anlamına gelmez.

Yayın için hâlâ gerçek sunucu/üyelik, e-posta, kalıcı veritabanı, sunucu yetkilendirmesi, KVKK metin ve süreçleri, yedekleme, gerçek trafik ölçümü, lisanslı oyun/veri kaynağı gerekir. Metin forumunda da spam, taciz, telif ve kişisel bilgi şikâyeti yönetimi devam eder. Medyayı kaldırmak moderasyon ihtiyacını tamamen kaldırmaz.

Önerilen sıra: önce memuriyet/hukuk uygunluğu → bir veya iki mağazadan izinli veri erişimi → küçük gerçek sunucu → doğrulanmış katalog/performans verisi → sınırlı pilot → ölçüme dayalı büyüme.
