# Oyun Radarı v7 — Durum ve yayın planı

21 Ekim 2026. Bu paket çalışan bir tarayıcı demosudur. Gerçek kullanıcı verilerini koruyan sunucu henüz yoktur. Aşağıdaki maliyetler sağlayıcı teklifi değildir; planlama içindir.

## Nasıl açılır?

ZIP'i klasöre çıkar, DEMOYU-AC.html dosyasını aç. Demo hesapları > admin hesabı artık **Yönetici** rolündedir. Parola RadarDemo!2026, e-posta admin@oyunradari.test. Demo hesapları herkese açıktır; canlı siteye taşınmamalıdır.

Yönetim > Üyeler > PixelGezgin > Yetki yönetimi > Admin > Yetkiyi kaydet. Sonra demo hesaplarından PixelGezgin'e geçerek kısıtlı paneli dene. Yönetici hesabına dönüp aynı yerden rolünü tekrar Üye yapabilirsin.

## İstenen değişiklikler

| Maddeler | Durum | Açıklama |
|---|---|---|
| 9, 14, 16 | Yapıldı | Gece modunda boş durum, denetim, reklam, bildirim ve form yüzeyleri ortak tema renklerine bağlandı. Mesaj sayfası 17. madde gereği kaldırıldı. |
| 10, 19 | Yapıldı | Soluk yardımcı yazıların kontrastı, menü ve açıklamaların boyutu artırıldı. |
| 11 | Yapıldı | Anasayfadaki Tamamen ücretsiz ifadesi kaldırıldı. |
| 12 | Yapıldı | Sade bildirim listesi, kırmızı nokta, gönderen adı, olay açıklaması ve ilgili yanıta/başvuru cevabına bağlantı. E-posta açıklaması kaldırıldı. |
| 13 | Yapıldı | Yönetim gelen kutusunda anahtar sözcük, gönderen ve iki tarih ile birleşik arama. Kategori filtreleri korunur. |
| 15 | Yapıldı | Raporlarda özel tarih aralığı. Türkiye saati, başlangıç ve bitiş günleri dahil. En çok 366 gün; uzun aralıkta haftalık grafik. |
| 17 | Yapıldı | Üyeler ve yöneticiler için özel mesajlaşma kapatıldı; eski yerel mesajlar ve mesaj şikâyetleri kaldırılır. İletişim başvuruları kalır. |
| 18 | Yapıldı | Gündüz teması gri-yeşil zemin ve kırık beyaz kartlarla yumuşatıldı. |
| 20 | Demo içinde yapıldı | Yönetici / Admin / Üye hiyerarşisi, yetki verme ve geri alma, ticari bölüm ayrımı. Sunucu güvenliği henüz yok. |

## Yetki planı

| İşlem | Yönetici | Admin | Üye |
|---|---|---|---|
| Konu ve yorum paylaşma | Evet | Evet | Evet |
| İçerik inceleme, silme, konu kilitleme/sabitleme | Evet | Evet | Kendi paylaşım araçları |
| Üye engelleme, kısıtlama, üyeliği kapatma | Evet | Sadece normal üye | Hayır |
| Admin atama/geri alma | Evet | Hayır | Hayır |
| Şikâyet ve önerileri yanıtlama | Evet | Evet | Kendi başvurusunu görür |
| Reklam tekliflerini ve ticari notlarını görme | Evet | Hayır | Kendi gönderdiği başvuru |
| Reklam ekleme, düzenleme, etkinleştirme, silme | Evet | Hayır | Hayır |
| Reklam/firma raporları ve işlem geçmişi | Evet | Hayır | Hayır |
| Trafik ve topluluk raporları | Evet | Evet | Hayır |
| Katalog/fiyat senkronizasyonu ayarları | Evet | Hayır | Hayır |

Admin, yöneticiyi veya başka bir admini engelleyemez. Kendi yetkisini yükseltemez. Yönetici hesabının yanlışlıkla silinmesi engellenmiştir; sahiplik devri ayrı, doğrulanmış bir canlı sistem işlemi olmalıdır. Kişisel hatırlatıcılar hesabın kendisine aittir. Eski hatırlatıcılar demo yöneticisine bağlanır. Reklam hatırlatıcıları sadece yöneticiye görünür.

Reklamlar ziyaretçilere açık olduğundan yayımlanmış reklamı admin de ziyaretçi gibi görür. Gizlenenler ticari başvurular, anlaşma bilgileri, yönetim işlemleri ve finansal raporlardır.

**Gerçek güvenlik sınırı:** Bu demo localStorage kullanır. Tarayıcı geliştirici araçlarını kullanan kişi tüm yerel kayıtlara ulaşabilir. Menüler ve işlem kontrolleri gerçek erişim güvenliğinin yerine geçmez. Canlı sürümde sunucuda her istek için yetki doğrulaması, veri tabanında erişim kısıtlaması, yönetici için iki adımlı doğrulama, oturum iptali ve denetim kayıtları kurulmalıdır. Şifre veya gerçek ticari/kişisel veri girmeyin.

## Patent gerekiyor mu?

Hayır. Bu tür bir siteyi açmak için patent alma zorunluluğu yok; zorunlu patent bütçesi **0 TL**. Bir web sitesi fikri, iş modeli veya bilgisayar programı sırf bu niteliğiyle patentlenmez. Ayrı bir teknik buluş varsa patent vekili değerlendirebilir. Kodun özgün ifadesi telif korumasına konu olabilir; fikir tek başına korunmaz. İsim ve logo için marka tescili ayrı ve çoğu zaman daha ilgili bir seçenektir.

Güncel resmi patent/marka ücretlerini bu oturumda doğrulayamadım. Yanıltıcı bir ortalama vermiyorum: teknik buluş başvurusu düşünülecekse resmi başvuru, araştırma, inceleme, yıllık ücretler ve varsa vekil ücretini ayrı teklif almak gerekir. Marka tescili ücreti patent ücreti değildir.

## 1–3. Hosting, domain ve Steam

Hosting sitenin dosyalarını ve servislerini barındırır; VPS kiralık sanal sunucudur. Demo statik hostingde çalışır. Canlı üyelik, forum, e-posta ve otomatik güncelleme için sunucu uygulaması, veri tabanı ve zamanlanmış işler eklenmelidir. Her ucuz paylaşımlı hosting bu ihtiyaçları karşılamaz; satın almadan önce altyapıya uygun paket seçilmelidir.

Domaini hosting'e DNS ile yönlendirmek, HTTPS sertifikası kurmak olağan işlerdir. Domain/hosting alınması Steam verisi kullanma hakkı veya tüm oyunlara ait veri erişimini otomatik sağlamaz. Steam Web API ve kullanım koşulları uygun kaynaklar değerlendirilebilir; bazı erişimler anahtar/izin ister. Mağaza uç noktaları değişebilir veya istek sınırlayabilir. Uygulama kimliklerini tekilleştiren, veri eksikliklerini kontrol eden, önbellekli ve aralıklı bir sunucu işi gerekir. Steam'in minimum gereksinimleri doğrulanmış FPS ölçümü değildir.

Bu sürümde Steam otomatik oyun aktarımı aktif değildir. Fiyat akışı dönüştürme/zamanlama kodu var fakat gerçek mağaza API anlaşması, kimliği ve canlı sunucu bağlı değildir. Mağazaların herkesin kullanabileceği ücretsiz fiyat API'si olduğu varsayılamaz; iş ortaklığı/affiliate ürün akışı veya izinli veri sağlayıcısı gerekir. Satıcı paneli API'si tüm mağazanın fiyat kataloğuna erişim demek değildir.

## 4 ve 7. Annenin adına işletme ve reklam ödemesi

657 sayılı Kanun'un ticaret ve kazanç getirici faaliyet yasağı açısından domainin veya IBAN'ın kimin adına olduğu tek başına belirleyici değildir. Fiilen sen işletiyor, reklam pazarlıyor ve geliri annenin geliriymiş gibi gösteriyorsan risk ortadan kalkmaz. Görünüşte sahiplik veya gerçeğe aykırı gelir beyanı önermiyorum. Vergi ödemen de memuriyet yönünden otomatik izin sağlamaz.

Annenin gerçekten sahibi ve işletmecisi olduğu faaliyet ayrı değerlendirilir. Senin fiilî rolün, emeğin ve siteyi devretmen için kamu personel hukuku avukatından ve kurumundan yazılı değerlendirme, annenin ticari/vergi yükümlülükleri için SMMM görüşü alınmalı. Gelecekteki satış bedelinin sadece onun hesabına yatırılması işlemi kendiliğinden sorunsuz yapmaz. Annenin üstlenebileceği mükellefiyet, SGK veya varsa emeklilik etkileri ayrıca incelenir.

Gerçek işletmeci annen ise sözleşme, fatura/vergi belgesi, reklam ağı ödeme hesabı ve banka alıcısı onun gerçek işletmesiyle uyumlu olmalıdır. Doğrudan reklamda yazılı sözleşmede süre, yer, bedel/KDV, içerik onayı, iptal ve ödeme koşulları belirtilir. Reklam ağı kullanılırsa ağın sözleşmesi ve kimlik doğrulaması vardır. Yalnızca IBAN paylaşmak ticari yükümlülükleri tamamlamaz.

## 5–6. Büyüme ve aylık maliyet

Trafik artınca sunucu işlem gücü, veri tabanı bağlantıları ve ağ aktarımı; kayıtlar artınca sorgu süreleri, depolama ve yedekler büyür. Spam ve moderasyon iş yükü de artar. Çözümler: sayfalama, veri tabanı indeksleri, önbellek/CDN, arka plan kuyruğu, hız sınırları, yedekleme ve kapasite izleme. Tek başına oyun/yorum adedi maliyet hesabı için yeterli değildir; eşzamanlı ziyaret, sorgular ve dış API kotaları önemlidir.

Aşağıdaki tutarlar **aylık USD planlama aralığıdır**, güncel fiyat teklifi veya trafik kapasitesi garantisi değildir. TL karşılığı fatura günündeki kura bağlıdır. Başlangıç senaryosu küçük tek sunucuda uygulama + veri tabanını birlikte çalıştırır; ayrıca ücretli yönetilen veri tabanı satın alındığı varsayılmamıştır.

| Kalem | Küçük başlangıç | Büyüyen tek sunucu kurulumu |
|---|---|---|
| Uygulama + veri tabanı sunucusu | 10–25 USD | 30–80 USD |
| Haricî yedek/depolama | 2–5 USD | 5–20 USD |
| Doğrulama/işlem e-postası | 0–5 USD | 0–15 USD |
| Domain yıllık bedelinin aylık karşılığı | 1–2 USD | 1–2 USD |
| TOPLAM TEKNİK BÜTÇE | **13–37 USD / ay** | **36–117 USD / ay** |

Bu örnekte büyüme farkı yaklaşık **23–80 USD/ay**. Yönetilen veri tabanı ayrıca seçilirse sağlayıcıya göre örneğin 20–60 USD/ay ek bütçe gerekebilir; veri tabanını taşıyınca sunucu ihtiyacı da değişir. Trafik kotası aşımı, ücretli veri API'si, bot koruması, bakım emeği, reklam bütçesi, muhasebe, vergiler ve olası SGK bu tabloya dahil değildir. Bu yüzden tüm ticari giderlerin kesin toplamı henüz hesaplanamaz. İlk başlangıç için yaklaşık **30 USD/ay teknik pay** ayırmak bir planlama noktasıdır, garanti değildir.

Metin kayıtları tek başına genellikle görsel/video kadar büyük depolama gerektirmez. Üye görsel/video yüklemesi ve özel mesajlar kaldırılmıştır. Reklam görselleri küçük tutulmalı: örneğin 20 adet 200 KB görsel yaklaşık 4 MB yer kaplar. Bunların 1 milyon kez yüklenmesi yaklaşık 200 GB aktarım üretebilir; ziyaretçi önbelleği/CDN sonucu değiştirir. Asıl büyüyen kalem depolamadan çok aktarım olabilir. Reklam görseli/başlığı/butonu yöneticinin belirlediği HTTPS adresini açar.

## 8. Vergi

Bireysel ticari faaliyet olarak değerlendirildiğinde net kazanç genel olarak artan oranlı gelir vergisine tabi olabilir: %15, %20, %27, %35, %40. Bu oranlar bütün ciroya tek seferde uygulanmaz; yılın dilimleri ve giderler önemlidir. Güncel 2026 dilim tutarları bu oturumda doğrulanmadı. Şirket kurulursa farklı vergileme olur. KDV, stopaj, yabancı reklam ağı ödemeleri ve site satışının vergisi işlem ve mükellefiyet türüne göre ayrıca değerlendirilir. İnternet geliri istisnalarının otomatik uygulanacağını varsayma; uygunluğu mali müşavir belirlemeli. Vergi istisnası memuriyet yasağına istisna anlamına gelmez.

## Kaynaklar ve erişim durumu

Resmi sitelere bu ortamdan yapılan bağlantılar ağ geçidinde **403 Forbidden** ile reddedildi. Bu, senin bilgisayarının veya domaininin yasaklı olduğunu göstermez. Bu nedenle güncel tarife ve mevzuat değişiklikleri canlı doğrulanmış gibi sunulmadı. Başvurulacak resmi kaynaklar:

- [657 sayılı Devlet Memurları Kanunu — özellikle madde 28 ve disiplin hükümleri](https://www.mevzuat.gov.tr/mevzuatmetin/1.5.657.pdf)
- [6769 sayılı Sınai Mülkiyet Kanunu — patentlenebilirlik, madde 82](https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6769.pdf)
- [TÜRKPATENT — resmi ücret ve başvuru bilgileri](https://www.turkpatent.gov.tr/)
- [Gelir İdaresi Başkanlığı — gelir vergisi, internet gelirleri ve mükellefiyet rehberleri](https://www.gib.gov.tr/)
- [Steamworks — Web API belgeleri](https://partner.steamgames.com/doc/webapi_overview)

Çözüm: belgeleri erişebildiğin tarayıcıdan doğrulamak; canlı sistemde kaynak işletmecisinin izin verdiği API/ürün akışına sunucudan bağlanmak. Teknik erişim engelini aşmak, veri kullanım izninin yerine geçmez.

## Testler ve kalan işler

Birim testleri: donanım eşleşmesi, arama görünürlüğü, fiyat akışı ve Türkiye saatine göre kapsayıcı rapor aralıkları. Tarayıcı testleri: yönetici/admin/üye, yetki verme/geri alma, ticari başvuru engeli, arama, yanıt/alıntı bildirimi, yorum sayfalama, reklam bağlantıları, gece/gündüz ve mobil görünüm. 26 birim testi ve tarayıcı senaryoları geçti. Paketlenmiş tek HTML de yerel HTTP sunucusu üzerinden yetki/arama/bildirim testlerini geçti. Bu ortamın Chromium politikası file:// erişimini engellediğinden çift tıkla açma yolu burada doğrudan test edilemedi.

Henüz yapılmayanlar: canlı sunucu/veri tabanı, gerçek e-posta doğrulaması, gerçek kullanıcılar arasında veri paylaşımı, sunucuda yetki denetimi, gerçek Steam otomasyonu, mağaza API sözleşmesi ve canlı fiyatlar, doğrulanmış FPS veri seti, tüm siteye ait gerçek analitik, ödeme/fatura entegrasyonu. Bunlar domain satın alarak kendiliğinden tamamlanmaz. Yayın öncesi ayrı kurulum ve hukuki/vergi değerlendirmesi gerekir.
