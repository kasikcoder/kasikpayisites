export const blogPath = '/blog/';

export const blogTopics = [
  { id: 'ofis', title: 'Ofis yemeği', service: '/ofis-yemegi/' },
  { id: 'etkinlik', title: 'Toplantı ve davet', service: '/etkinlik-catering/' },
  { id: 'siparis', title: 'Sipariş ve teslimat', service: '/taksim-beyoglu-catering/' },
];

const photos = {
  menu: { file: 'kp-rehber-menu.webp', width: 760, height: 760, alt: 'Izgara tavuk ve bulgur pilavından oluşan Kaşık Payı menüsü' },
  davet: { file: 'kp-rehber-davet.webp', width: 760, height: 760, alt: 'Izgara tavuk, bulgur pilavı ve mezelerle hazırlanmış davet sofrası' },
  sofra: { file: 'kp-hikaye-sofra-1024.webp', width: 1024, height: 1024, alt: 'Kaşık Payı sofrasında tavuk, pilav, çorba ve mezeler' },
  mutfak: { file: 'kp-neden-mutfak-1024.webp', width: 1024, height: 1024, alt: 'Kaşık Payı mutfağında tavuk, pilav ve ezme hazırlanıyor' },
  corba: { file: 'kp-rehber-corba.webp', width: 760, height: 760, alt: 'Kaşık Payı menüsünden bir kâse çorba' },
};

export const blogOverview = {
  label: 'Catering rehberleri',
  title: 'Ofis Yemeği ve Catering Rehberleri',
  description: 'Ofis yemeği, toplantı ve davet planları; 2026 yemek istisnası, KDV, gıda güvenliği ve Beyoğlu, Şişhane, Karaköy, Şişli teslimat rehberleri.',
  photo: photos.sofra,
};

const post = (slug, topic, label, description, photo, introduction, meta = {}) => ({
  path: blogPath + slug + '/',
  topic,
  label,
  description,
  photo: photos[photo],
  introduction,
  ...meta,
});

export const blogPosts = [
  post('kucuk-ofis-yemegi', 'ofis', '3–10 kişilik ofis yemeği nasıl planlanır?', 'Küçük ekibiniz için ilk ofis yemeğini planlayın. On kişilik örnek sipariş, paket seçimi ve teslimatta kontrol edilecekler.', 'menu'),
  post('hibrit-ofis-yemek-plani', 'ofis', 'Hibrit ofiste haftalık yemek siparişi planı', 'Ofisteki kişi sayısı her gün değişiyorsa haftalık sipariş tablosu, sayım saati ve değişiklik notlarıyla fazla siparişi azaltın.', 'mutfak'),
  post('haftalik-ofis-yemegi-menusu', 'ofis', 'Bir haftalık ofis yemeği menüsü nasıl hazırlanır?', 'Beş iş günü için örnek öğle menüsü, yemekleri dönüşümlü sunma yöntemi ve farklı menü taleplerini toplama planı.', 'corba'),
  post('tabldot-mu-kisilik-paket-mi', 'ofis', 'Tabldot mu, kişiye özel yemek paketi mi?', 'Ortak menü ile kişiye özel paketleri ekip büyüklüğü, servis süresi, farklı menü ihtiyaçları ve toplam maliyet açısından karşılaştırın.', 'menu'),
  post('20-kisilik-toplanti-catering', 'etkinlik', '20 kişilik toplantıda öğle yemeği planı', '20 kişilik bir toplantıda sıcak yemeğin teslimatını, dağıtım süresini ve özel menüleri dakikasıyla planlamak için örnek akış.', 'davet'),
  post('30-kisilik-davet-porsiyon-hesabi', 'etkinlik', '30 kişilik davet için porsiyon hesabı', 'Kesin ve bekleyen davetlileri ayırın. 30 kişilik davet için ana yemek, özel menü ve yedek porsiyon hesabını örnekle görün.', 'sofra'),
  post('evde-dogum-gunu-catering', 'etkinlik', 'Evde doğum günü için yemek ve ikram planı', 'Evde doğum günü için sıcak yemek veya ikramı, pasta saatini ve servis alanını 12 kişilik örnekle planlayın.', 'davet'),
  post('catering-teslimat-kurulum-servis', 'etkinlik', 'Catering’de teslimat, kurulum ve servis farkı', 'Yemeği kimin teslim alacağını, masayı kimin kuracağını ve ekipmanı kimin toplayacağını tekliften önce netleştirin.', 'sofra'),
  post('catering-fiyatlari-teklif-karsilastirma', 'siparis', 'Catering fiyatları nasıl karşılaştırılır?', 'Kişi başı menü fiyatı, teslimat, ekipman ve servis bedellerini aynı kapsamda karşılaştırın. Örnek bütçe hesabını ve teklif şablonunu kullanın.', 'sofra'),
  post('taksim-beyoglu-yemek-teslimat-plani', 'siparis', 'Taksim ve Beyoğlu’nda yemek teslimatı planı', 'Taksim, İstiklal, Talimhane ve Cihangir’de ofis veya etkinlik teslimatını giriş noktası, kat ve teslim saatiyle planlayın.', 'mutfak'),
  post('catering-siparisinde-alerjen-bilgisi', 'siparis', 'Catering siparişinde alerjen bilgisi nasıl sorulur?', 'Menü içeriklerini, çapraz temas ihtimalini ve porsiyon etiketlerini siparişten önce yazılı olarak sormak için örnek mesaj.', 'corba'),
  post('farkli-yemek-menuleri-toplu-siparis', 'siparis', 'Aynı toplu siparişte farklı yemek menüleri', 'Tavuklu, etli ve vejetaryen menü adetlerini tek siparişte toplayın. 18 kişilik örnek sayım, etiketleme ve teslim alma planı.', 'menu'),
  post('ofis-yemegi-deneme-siparisi', 'ofis', 'Ofis yemeği için deneme siparişi nasıl verilir?', 'Düzenli ofis yemeği planından önce tek günlük deneme yapın. Menü, teslimat ve ekip geri bildirimini değerlendirmek için örnek kontrol listesi.', 'menu', 'Deneme siparişini normal bir iş gününde, ekibin sonra da kullanacağı menü biçimi ve teslimat saatiyle verin. Teslimatı, yemeği ve dağıtımı ayrı değerlendirin. Kaşık Payı’ndan 3–50 kişilik tek günlük yemek için teklif isteyebilirsiniz.'),
  post('ofis-yemegi-aylik-butce', 'ofis', 'Aylık ofis yemeği bütçesi nasıl hesaplanır?', 'Değişen ekip sayısıyla aylık ofis yemeği bütçesi çıkarın. Teslimat, ek porsiyon ve fatura kontrolünü dört haftalık örnekle planlayın.', 'mutfak', 'Aylık yemek bütçesi için önce her hizmet günündeki porsiyonları toplayın. Menü bedeline sipariş günlerine göre teslimat ve varsa ek hizmeti ekleyin. Tahmini bütçeyi ay sonunda onaylanan porsiyonlarla karşılaştırın.'),
  post('vardiyali-ekip-yemek-teslimati', 'ofis', 'Vardiyalı ekipler için iki ayrı yemek molası', 'Aynı iş yerinde iki farklı yemek molası için sipariş adedini, teslimat saatlerini ve paketleri nasıl ayıracağınızı planlayın.', 'mutfak', 'Ekip aynı adreste farklı saatlerde yemek yiyorsa her vardiyanın porsiyonunu, mola saatini ve teslim alacak kişiyi ayrı yazın. Mutfağa iki teslimatın mümkün olup olmadığını ve her teslimatın ücretini sorun.'),
  post('egitim-atolye-yemek-plani', 'etkinlik', 'Tam günlük eğitim ve atölye için yemek planı', 'Katılımcılar ve eğitmenler için tam günlük atölye programına öğle yemeği ve ikram molaları ekleyin. 24 kişilik örnek akışı kullanın.', 'davet', 'Tam günlük eğitimde öğle yemeğini oturum süresinden ayrı planlayın. Katılımcıların yanı sıra eğitmen ve görevli ekibi de sayın. Mekândan yemek alanını ve dışarıdan teslimat koşullarını yazılı olarak öğrenin.'),
  post('acilis-etkinligi-ikram-mi-sicak-yemek-mi', 'etkinlik', 'Açılışta ikram mı, sıcak yemek mi?', 'Sergi veya mağaza açılışında menüyü misafirlerin kalış süresi, oturma düzeni ve etkinlik saatine göre seçin.', 'sofra', 'Misafirler farklı saatlerde uğrayıp kısa süre kalacaksa ayakta yenebilen ikramları değerlendirin. Etkinlik öğün saatine denk geliyor ve grup birlikte oturuyorsa sıcak yemek daha uygun olabilir. Açılış ekibinin öğününü de ayrıca sayın.'),
  post('acik-bufe-mi-paket-yemek-mi', 'etkinlik', 'Davet için açık büfe mi, kişilik paket mi?', 'Açık büfe ve kişilik paketleri mekân alanı, misafir akışı, özel menüler ve toparlama süresiyle karşılaştırın.', 'davet', 'Açık büfe için servis masası, sıra alanı ve servis gereçleri gerekir. Kişilik paketle dağıtım daha küçük bir alana sığabilir. Misafirlerin geliş saatini, özel menü adedini ve mekândaki görev dağılımını birlikte değerlendirin.'),
  post('beyoglu-mekan-disaridan-catering', 'siparis', 'Beyoğlu’nda etkinlik mekânına dışarıdan catering', 'Mekânı tutmadan önce dışarıdan yemek iznini, yükleme girişini, servis alanını ve toplama saatini kontrol edin.', 'sofra', 'Beyoğlu’nda bir mekâna dışarıdan catering söylemeden önce işletmeciden yazılı onay alın. Yemeğin nerede teslim edileceğini, hangi alanda servis edilebileceğini ve etkinlik sonunda ekipmanın nasıl çıkarılacağını birlikte belirleyin.'),
  post('ayni-gun-toplu-yemek-siparisi', 'siparis', 'Beyoğlu’nda aynı gün toplu yemek siparişi', 'Beklenmedik ofis veya toplantı siparişinde mutfağa hangi bilgileri tek mesajda yazmanız gerektiğini örnekle görün.', 'corba', 'Aynı gün 3–50 kişilik yemek istiyorsanız kişi sayısını, açık adresi ve yemeğin masada olması gereken saati ilk mesajda paylaşın. Kaşık Payı, menü ve teslimat uygunluğunu siparişten önce kontrol eder.'),
  post('uc-servisli-davet-menusu', 'etkinlik', 'Üç servisli davet menüsü nasıl planlanır?', 'Başlangıç, ana yemek ve tatlıyı misafir sayısı ve oturma düzeniyle birlikte planlayın. 10 kişilik örnek servis akışını inceleyin.', 'davet', 'Üç servisli bir davette başlangıç, ana yemek ve tatlının ne zaman çıkacağını ve tabakları kimin toplayacağını belirleyin. Kaşık Payı’nın üç servisli özel davet paketi en az 8 kişiliktir. Menü içeriği ve servis kapsamı teklifte teyit edilir.'),
  post('iki-gunluk-toplanti-yemek-plani', 'etkinlik', 'İki günlük toplantıda yemek siparişi planı', 'İki günlük programda menüleri, günlük katılımcı sayısını, kısa molaları ve her günün teslimat sorumlusunu ayrı planlayın.', 'sofra', 'İki günlük toplantı için her günün yemek ve ikram adedini ayrı sayın. Tek teklif isteyebilirsiniz. Ancak her gün için menüyü, teslimat saatini, adresi ve adedi ayrı satırda teyit edin.'),
  post('iki-ofise-yemek-teslimati', 'ofis', 'Aynı gün iki ofise yemek teslimatı nasıl planlanır?', 'İki farklı ofis için menü adetlerini, teslimat saatlerini ve adres başına sorumluları ayırın. 21 kişilik örnek dağılımı inceleyin.', 'mutfak', 'İki ofisin toplam kişi sayısını yazın ve siparişi adres başına porsiyon, menü ve teslimat saatine ayırın. Her adres için teslimat uygunluğunu ve varsa ek bedeli teyit edin.'),
  post('catering-kisi-sayisi-degisikligi', 'siparis', 'Catering siparişinde kişi sayısı değişirse ne yapılır?', 'Kesin davetli sayısı açıklanınca mutfağa adet farkını, özel menüleri ve yeni toplamı tek mesajda iletin.', 'menu', 'Kişi sayısı değiştiğinde mutfağa son onaylanan adedi ve yeni toplamı birlikte yazın. Özel menülerin yeni dağılımını ekleyin ve tutar, teslimat saati ve değişiklik koşullarını yeniden teyit edin.'),
  post('reklam-cekim-ekibi-yemek-plani', 'etkinlik', 'Reklam çekimi ekibi için set yemeği planı', 'Oyuncu, teknik ekip ve ajans için porsiyon sayın. Beyoğlu’nda tek günlük çekim için örnek mola akışı ve teslimat notu hazırlayın.', 'mutfak', 'Reklam çekiminde yemek adedini sete uğrayan herkes üzerinden hesaplamak yerine, mola saatinde sahada kalacak kişileri bölüm bölüm sayın. İlk ve son yemek molasını, teslim noktası ile olası lokasyon değişikliğini prodüksiyon planına ekleyin.'),
  post('fuar-stand-ekibi-yemek-plani', 'etkinlik', 'Fuar standı ekibine öğle yemeği nasıl planlanır?', 'Standı boş bırakmadan iki mola planlayın. Hol, stand numarası ve dışarıdan teslimat koşulları için örnek sipariş akışını inceleyin.', 'menu', 'Fuar ekibi için ilk adım, organizatörden dışarıdan yemek tesliminin mümkün olup olmadığını öğrenmektir. Teslimat uygunsa standda kalacak kişileri ve mola gruplarını belirleyip hol, stand ve teslim kapısını tek notta toplayın.'),
  post('musteri-toplantisi-ogle-yemegi', 'ofis', 'Ofiste müşteri toplantısı için öğle yemeği planı', 'Misafir ve ev sahibi ekip için menü, oturma düzeni ve mola saati belirleyin. 12 kişilik toplantı planı ve teklif örneği.', 'sofra', 'Müşteri toplantısında öğle yemeğini, yemek yiyecek misafir ve ev sahibi ekip sayısına göre planlayın. Mola süresi kısa olduğunda menü tercihini önceden toplamak ve paketleri toplantı masasından ayrı bir noktada dağıtmak zaman kazandırır.'),
  post('mutfaksiz-mekanda-sicak-yemek', 'etkinlik', 'Mutfağı olmayan mekânda sıcak yemek nasıl planlanır?', 'Yemeğin nerede teslim alınacağını, kimin dağıtacağını ve mekânda hangi ekipmanın bulunduğunu 18 kişilik örnek üzerinden planlayın.', 'davet', 'Mutfaksız bir mekânda sıcak yemek için menüyü seçmeden önce teslimat ile servis arasındaki süreyi, dağıtım alanını ve eldeki ekipmanı mutfakla paylaşın. Yemek planını mekânın sağladığı koşullara ve mutfağın teyit ettiği servis düzenine göre yapın.'),
  post('kurumsal-catering-siparis-onayi', 'siparis', 'Kurumsal catering siparişi nasıl onaylanır?', 'İlk catering teklifini ekip, satın alma ve teslim alan kişiyle aynı bilgiler üzerinden onaylayın. Kopyalanabilir sipariş özeti.', 'corba', 'Kurumsal bir yemek siparişini onaylarken tarih, servis saati, menü dağılımı ve toplam tutarı tek yazılı özette birleştirin. Onayı kimin vereceğini, teslimatı kimin alacağını ve değişikliklerin nasıl teyit edileceğini siparişten önce belirleyin.'),
  post(
    'yemek-karti-mi-ofis-yemegi-mi',
    'ofis',
    '2026’da yemek kartı mı, ofis yemeği (catering) mi?',
    '2026’daki 300 TL yemek bedeli istisnası ile işyerinde sıcak ofis yemeği arasındaki vergi, SGK, bütçe ve öğle molası farklarını karşılaştırın.',
    'menu',
    '2026 yılında yemek kartı ve nakit ödemede gelir vergisi ile SGK prim istisnası günlük 300 TL (KDV hariç) ile sınırlıdır. İşyerinde catering hizmeti alarak yemek verildiğinde ise tutar sınırı olmaksızın tam istisna uygulanır. Küçük ve orta ölçekli ofisler bu farkı aylık porsiyon hesabıyla kıyaslayarak karar verebilir.',
    {
      publishedAt: '2026-11-28',
      keywords: ['2026 yemek bedeli istisnası', 'yemek kartı mı ofis yemeği mi', 'işyerinde yemek verme vergi avantajı', '300 TL yemek istisnası 2026', 'ofis yemeği catering'],
      faqs: [
        {
          q: '2026 yılında günlük yemek bedeli istisnası kaç TL?',
          a: '332 Seri No.lu Gelir Vergisi Genel Tebliği ile 2026 yılı günlük gelir vergisi yemek istisnası KDV hariç 300 TL (KDV dahil 330 TL) olarak belirlenmiştir. 17 Nisan 2026 tarihli 7577 sayılı Kanun ile SGK prime esas kazanç istisnası da günlük 300 TL’ye eşitlenmiştir.',
        },
        {
          q: 'İşyerinde catering ile yemek vermede 300 TL sınırı geçerli mi?',
          a: 'Hayır. Gelir Vergisi Kanunu madde 23/8 ve 5510 sayılı Kanun madde 80 kapsamında işverenin dışarıdan catering hizmeti satın alıp işyerinde veya müştemilatında yemek vermesi hâlinde tutar sınırı aranmaksızın tamamı gelir vergisi ve SGK priminden istisnadır. Şirketinize özel uygulama için mali müşavirinizden teyit alın.',
        },
        {
          q: 'Küçük ofisler için yemek kartı yerine catering ne zaman daha avantajlı olur?',
          a: 'Ekip haftanın belirli günlerinde birlikte ofiste çalışıyorsa, dışarıda öğle yemeği 330 TL sınırını aşıyorsa ve öğle arasında zaman kaybı yaşanıyorsa 3–50 kişilik ofis yemeği daha öngörülebilir bütçe ve sıcak dört kap öğün sunar.',
        },
      ],
    },
  ),
  post(
    'ofis-yemegi-kdv-ve-fatura-giderlestirme',
    'ofis',
    'Ofis yemeği faturası, KDV oranı ve giderleştirme rehberi',
    'Catering ve toplu yemek hizmetinde %10 KDV, 5/10 KDV tevkifatı kapsamı, personel yemeği ile misafir ağırlama gider ayrımı ve aylık fatura düzeni.',
    'corba',
    'Malzemeli catering ve toplu yemek hizmetleri 2007/13033 sayılı karar eki II sayılı liste 24. sıra kapsamında %10 KDV oranına tabidir. Düzenli ofis yemeklerinde aylık toplu fatura planı kurarak personel yemeği ile müşteri toplantı giderlerini muhasebe kaydında baştan ayırabilirsiniz.',
    {
      publishedAt: '2026-11-28',
      keywords: ['catering KDV oranı 2026', 'ofis yemeği faturası gider yazma', 'toplu yemek KDV tevkifatı', 'kurumsal yemek faturası'],
      faqs: [
        {
          q: 'Catering ve ofis yemeği hizmetinde KDV oranı kaçtır?',
          a: 'Malzemenin, pişirmenin ve teslimatın yemek firması tarafından üstlenildiği standart catering ve tabldot yemek hizmetlerinde KDV oranı %10 olarak uygulanır.',
        },
        {
          q: 'Toplu yemek faturasında KDV tevkifatı her şirket için geçerli mi?',
          a: 'Hayır. 5/10 oranında KDV tevkifatı, KDV Genel Uygulama Tebliği’nde belirlenen kamu kurumları ve belirlenmiş alıcılar kapsamındaki kuruluşlara verilen yemek servislerinde uygulanır. Standart özel şirketlerde alıcının statüsüne göre mali müşavirle teyit edilmelidir.',
        },
        {
          q: 'Düzenli ofis yemeğinde her gün ayrı fatura mı kesilir?',
          a: 'Kaşık Payı tüm siparişler için fatura düzenler ve düzenli ofis yemeği planlarında aylık faturalandırma seçeneği sunar. Ay sonunda teslim edilen porsiyon listesi üzerinden mutabakat yapılır.',
        },
      ],
    },
  ),
  post(
    'dengeli-ve-vejetaryen-ofis-ogle-menusu',
    'ofis',
    'Dengeli ve vejetaryen ofis öğle yemeği menüsü nasıl planlanır?',
    'Sağlık Bakanlığı TÜBER Sağlıklı Yemek Tabağı ilkeleriyle masa başı ekipler için dengeli, vejetaryen uyumlu ve öğleden sonra ağırlık yapmayan ofis menüsü planı.',
    'menu',
    'Masa başı çalışan ekipler için dengeli bir öğle yemeği, Sağlık Bakanlığı Türkiye Beslenme Rehberi (TÜBER) tabak modelinde olduğu gibi protein, sebze, tam tahıl ve su dengesini bir araya getirir. Etli, tavuklu ve vejetaryen seçenekleri aynı haftalık planda eşleştirerek herkesin öğleden sonraya dinç dönmesini sağlayabilirsiniz.',
    {
      publishedAt: '2026-11-28',
      keywords: ['dengeli ofis öğle yemeği', 'vejetaryen ofis yemeği menüsü', 'sağlıklı catering menüsü', 'TÜBER sağlıklı yemek tabağı'],
      faqs: [
        {
          q: 'Ofis öğle yemeğinde öğleden sonra ağırlık yapmayan menü nasıl kurulur?',
          a: 'Ağır kızartma ve rafine karbonhidrat yoğunluğu yerine mercimek çorbası, ızgara tavuk veya sebzeli ana yemek, bulgur pilavı ve taze ezme veya salata dengesi kurulması kan şekerini daha dengeli tutar.',
        },
        {
          q: 'Aynı ofis siparişinde hem etli/tavuklu hem vejetaryen menü istenebilir mi?',
          a: 'Evet. Kişiye özel paket düzeninde etli, tavuklu ve vejetaryen porsiyon adetlerini siparişten önce ayırarak aynı teslimatta alabilirsiniz.',
        },
        {
          q: 'Vejetaryen veya özel beslenme sayısı her hafta değişiyorsa ne yapılmalı?',
          a: 'Haftalık sayım formuna menü tercihi sütunu ekleyin ve mutfağa toplam kişi sayısını menü kırılımıyla birlikte bildirin. Teslimatta etiket kontrolü yaparak karışıklığı önleyin.',
        },
      ],
    },
  ),
  post(
    'ofiste-sabah-toplantisi-kahvalti-ve-brunch-ikrami',
    'ofis',
    'Ofiste sabah toplantısı için kahvaltı ve brunch planı',
    '09.00–11.30 arası yönetim, eğitim veya müşteri toplantıları için ofiste kahvaltı ve brunch ikramlarını teslimat saati, porsiyon ve masa düzeniyle planlayın.',
    'sofra',
    'Sabah toplantılarında kahvaltı veya brunch ikramını oturumun başlamasından 20–30 dakika önce teslim alıp masaya yerleştirmek sunum akışını bölmez. Katılımcı sayısını, sıcak içecek ekipmanını ve alerjen tercihlerini bir gün önceden netleştirerek dakik bir karşılama hazırlayabilirsiniz.',
    {
      publishedAt: '2026-11-28',
      keywords: ['ofiste kahvaltı catering', 'sabah toplantısı ikramları', 'kurumsal brunch catering', 'toplantı kahvaltı planı'],
      faqs: [
        {
          q: '09.30’da başlayan bir toplantı için kahvaltı teslimatı saat kaçta olmalı?',
          a: 'Resepsiyondan teslim alma, kat taşıma ve toplantı odasına yerleştirme için teslimat aralığını 08.45–09.00 bandında planlamak 09.15 itibarıyla ikramı hazır hâle getirir.',
        },
        {
          q: 'Sabah toplantısında kişilik kahvaltı kutusu mu, ortak masa mı daha pratik?',
          a: 'Toplantı masasında bilgisayar ve evrak kullanılıyorsa kişilik kapalı paketler daha temiz ve hızlıdır. Karşılama ve tanışma odaklı etkinliklerde yan masada paylaşım düzeni tercih edilebilir.',
        },
        {
          q: 'Sabah toplantısı öğleye sarkarsa öğle yemeği aynı teklife eklenebilir mi?',
          a: 'Evet. Sabah ikramı ve öğle yemeğini iki ayrı teslimat saati ve kişi sayısıyla tek teklif talebinde birleştirerek planlayabilirsiniz.',
        },
      ],
    },
  ),
  post(
    'evde-nisan-soz-ve-aile-daveti-catering',
    'etkinlik',
    'Evde nişan, söz ve aile daveti için catering planı',
    'Evde 15–40 kişilik nişan, söz ve aile yemeklerinde ikram ve sıcak yemek seçimi, salon yerleşimi, teslimat saati ve örnek porsiyon planı.',
    'davet',
    'Evde söz, nişan veya aile davetinde mutfakta saatlerce zaman kaybetmemek için misafir sayısını, oturma kapasitesini ve yemek saatini önceden belirleyip sıcak ana yemek veya ikram düzenini tek planda kurabilirsiniz. Kaşık Payı’nda 3–50 kişilik davetler ve en az 8 kişilik üç servisli sofralar için teklif alabilirsiniz.',
    {
      publishedAt: '2026-11-28',
      keywords: ['evde nişan catering', 'evde söz yemeği catering', 'aile daveti toplu yemek istanbul', 'evde davet menüsü'],
      faqs: [
        {
          q: 'Evde 25 kişilik söz veya nişan için kaç saat önce teslimat alınmalı?',
          a: 'Sıcak ana yemek servisi yapılacaksa teslimatı yemeğin masaya çıkacağı saatten 25–35 dakika önce planlamak, kapların açılması ve servis düzeni için ideal süre bırakır.',
        },
        {
          q: 'Evde yeterli masa ve sandalye yoksa nasıl bir menü seçilmeli?',
          a: 'Tüm misafirler aynı anda masaya oturamıyorsa bistro düzenine uygun ikramlar veya elde rahat taşınabilen porsiyon tabakları tercih edin. Oturmalı yemek için salon kapasitesini önceden sayın.',
        },
        {
          q: 'Aile büyükleri ve çocuklar için ayrı menü seçeneği eklenebilir mi?',
          a: 'Evet. Çocuklar veya özel beslenme tercihi olan misafirler için porsiyon adetlerini sipariş mesajında ayrı satırda belirterek tek teslimatta planlayabilirsiniz.',
        },
      ],
    },
  ),
  post(
    'kurumsal-iftar-ve-ramazan-yemegi-plani',
    'etkinlik',
    'Kurumsal iftar ve Ramazan toplu yemek planı',
    'Ofiste veya davet mekânında 10–50 kişilik kurumsal iftar yemeği için ezan saatine göre teslimat, sıcak tutma, menü akışı ve teklif şablonu.',
    'sofra',
    'Kurumsal veya aile iftarında en kritik detay, tüm misafirlerin aynı anda oruç açabilmesi için sıcak yemeğin iftar vaktinden 25–35 dakika önce teslim edilmesidir. İftariyelik, çorba, ana yemek, pilav ve tatlı akışını kişi sayısı ve servis düzeniyle birlikte en az birkaç gün önceden netleştirin.',
    {
      publishedAt: '2026-11-28',
      keywords: ['kurumsal iftar catering istanbul', 'ofiste iftar yemeği', 'toplu iftar yemeği beyoğlu', 'ramazan catering menüsü'],
      faqs: [
        {
          q: 'İftar yemeği teslimatı ezan saatinden kaç dakika önce gelmeli?',
          a: 'Trafik yoğunluğu ve dağıtım süresi dikkate alındığında teslimatın iftar saatinden 25–35 dakika önce adreste olması, çorba ve ana yemeğin sıcak biçimde masaya ulaşmasını sağlar.',
        },
        {
          q: 'Ofis iftarında oruç tutmayan veya vejetaryen çalışanlar için nasıl plan yapılır?',
          a: 'Toplam kişi sayısını alırken özel menü tercihlerini ayrı işaretleyin. Ana yemekte etli, tavuklu ve vejetaryen seçenekleri aynı iftar sofrasında birleştirebilirsiniz.',
        },
        {
          q: 'Ramazan döneminde kurumsal iftar siparişi ne kadar önceden verilmeli?',
          a: 'Ramazan akşamlarında teslimat saatleri aynı dakikalarda yoğunlaştığı için tarih, kişi sayısı ve açık adresi en az 3–5 iş günü önceden teyit etmeniz önerilir.',
        },
      ],
    },
  ),
  post(
    'mevlut-ve-taziye-yemegi-toplu-siparis',
    'etkinlik',
    'Mevlüt ve taziye yemeği toplu sipariş planı',
    'Evde veya iş yerinde 15–50 kişilik mevlüt ve taziye yemeği için sade menü seçimi, hijyenik porsiyon paketleme, hızlı teslimat ve sipariş mesajı.',
    'corba',
    'Mevlüt ve taziye günlerinde ev sahibinin yükünü azaltmanın en pratik yolu, tek mesajla netleşen sade ve sıcak bir toplu yemek planıdır. 15–50 kişilik gruplar için etli veya tavuklu ana yemek, pilav, ezme ve irmik helvası gibi geleneksel menüleri kapalı porsiyonlarla hijyenik biçimde dağıtabilirsiniz.',
    {
      publishedAt: '2026-11-28',
      keywords: ['mevlüt yemeği siparişi istanbul', 'taziye yemeği toplu sipariş', 'beyoğlu mevlüt yemeği', 'paket mevlüt yemeği'],
      faqs: [
        {
          q: 'Mevlüt ve taziye yemeğinde kapalı porsiyon paket mi, ortak servis mi daha uygundur?',
          a: 'Misafirler gün içinde farklı saatlerde gelip gidiyorsa kapalı kişilik sıcak paketler hem hijyen hem de dağıtım kolaylığı açısından daha pratiktir. Aynı anda oturulan sofralarda toplu servis düzeni de planlanabilir.',
        },
        {
          q: 'Taziye yemeği için aynı gün toplu sipariş verilebilir mi?',
          a: 'Acil durumlarda tarih, kişi sayısı, açık adres ve yemek saatini ilk WhatsApp mesajında paylaştığınızda Kaşık Payı aynı gün için mutfak ve teslimat uygunluğunu hızlıca kontrol eder.',
        },
        {
          q: 'Geleneksel mevlüt menüsünde hangi yemekler öne çıkar?',
          a: 'Mercimek çorbası, ızgara tavuk veya kıymalı ana yemek, pilav, meze ve irmik helvası gibi herkesin rahatça tüketebileceği sade ve doyurucu eşleşmeler en çok tercih edilen menülerdir.',
        },
      ],
    },
  ),
  post(
    'yilbasi-ve-sirket-kutlamasi-ofis-catering',
    'etkinlik',
    'Yılbaşı ve şirket kutlaması için ofis catering planı',
    'Ofiste yılbaşı, yıl sonu, terfi veya kuruluş yıldönümü kutlaması için 15–50 kişilik sıcak yemek, meze ve tatlı akışı ile erken rezervasyon rehberi.',
    'davet',
    'Yılbaşı, terfi veya şirket yıldönümü kutlamasını ofis içinde düzenlerken menüyü mesai bitiş saatine (örneğin 17.30–19.30) ve oturma düzenine göre seçmek akışı rahatlatır. Aralık ayı gibi yoğun dönemlerde kişi sayısını ve teslimat saatini en az 1–2 hafta önceden teyit ederek menü ve lojistiği güvenceye alın.',
    {
      publishedAt: '2026-11-28',
      keywords: ['ofiste yılbaşı catering', 'şirket kutlaması catering istanbul', 'ofis partisi yemek menüsü', 'ekip kutlama yemeği'],
      faqs: [
        {
          q: 'Ofiste yılbaşı veya yıl sonu kutlaması için ne zaman teklif alınmalı?',
          a: 'Aralık ayının ikinci yarısında kurumsal etkinlik yoğunluğu arttığı için tarih ve yaklaşık kişi sayısı netleşir netleşmez 1–2 hafta önceden teklif almanız önerilir.',
        },
        {
          q: 'Akşamüstü başlayan ofis kutlamasında sıcak yemek mi, meze ve ikram mı seçilmeli?',
          a: 'Etkinlik 18.00 sonrasına uzuyorsa ana yemek + pilav + meze + tatlıdan oluşan doyurucu bir düzen ekibin akşam öğününü de karşılar. Daha kısa kutlamalarda paylaşım tabakları ve tatlı seçilebilir.',
        },
        {
          q: 'Katılım listesi son gün değişirse ne yapılmalı?',
          a: 'Teklif aşamasında kişi sayısı değişikliği için son bildirim saatini yazılı olarak teyit edin ve kesin listeyi tek bir sorumlu üzerinden mutfağa iletin.',
        },
      ],
    },
  ),
  post(
    'sishane-karakoy-galata-ofis-yemegi-teslimati',
    'siparis',
    'Şişhane, Karaköy ve Galata’da ofis yemeği ve catering teslimatı',
    'Şişhane, Galata, Karaköy, Asmalımescit ve Tünel’deki ajans ve ofisler için yaya bölgesi kuralları, dar sokak lojistiği ve sıcak teslimat planı.',
    'mutfak',
    'Şişhane, Galata, Karaköy ve Asmalımescit hattındaki ajanslar ve ofisler için yemek teslimatında zamanlamayı belirleyen ana unsur; İstiklal Caddesi yaya bölgesi kuralları, dik yokuşlar ve tarihi iş hanlarının giriş düzenidir. Beyoğlu’ndaki hazırlık mutfağından sıcak teslimat için araç yaklaşım noktasını ve teslim alacak kişiyi ilk mesajda netleştirin.',
    {
      publishedAt: '2026-11-28',
      keywords: ['şişhane ofis yemeği', 'şişhane catering', 'karaköy ofis yemeği', 'galata catering', 'beyoğlu ajans yemek teslimatı'],
      faqs: [
        {
          q: 'İstiklal Caddesi ve Asmalımescit’teki araç giriş kısıtlamaları yemek teslimatını etkiler mi?',
          a: 'İstiklal Caddesi gün içinde yaya önceliklidir ve araç girişi sınırlıdır. Bu nedenle siparişte yalnızca cadde adını değil, en yakın araç yaklaşım sokağını, han adını ve kapıda teslim alacak kişiyi yazmak teslimatı hızlandırır.',
        },
        {
          q: 'Şişhane, Galata ve Karaköy’deki küçük ajanslar kaç kişilik sipariş verebilir?',
          a: 'Kaşık Payı Beyoğlu’ndaki mutfağından 3–50 kişilik ofis yemeği ve toplantı catering’i hazırlar. Tek günlük deneme veya haftanın seçili günlerinde düzenli teslimat planlanabilir.',
        },
        {
          q: 'Tarihi handa asansör yoksa veya güvenlik kartı gerekiyorsa teslimat nasıl yapılır?',
          a: 'Bina girişinde güvenlik kaydı gerekiyorsa teslimat saatinden 5 dakika önce lobide karşılayacak bir ofis görevlisi belirleyin ve telefonunu sipariş notuna ekleyin.',
        },
      ],
    },
  ),
  post(
    'sisli-nisantasi-besiktas-ofis-yemegi-catering',
    'siparis',
    'Şişli, Nişantaşı ve Beşiktaş için ofis yemeği ve catering planı',
    'Harbiye, Osmanbey, Nişantaşı, Şişli ve Beşiktaş’taki ofis ve toplantılar için Beyoğlu mutfağından teslimat uygunluğu, plaza girişi ve saat planı.',
    'mutfak',
    'Harbiye, Pangaltı, Osmanbey, Nişantaşı, Şişli ve Beşiktaş hattındaki ofis ve toplantılar için teslimat uygunluğu açık adrese, kişi sayısına ve yemek saatine göre değerlendirilir. Özellikle plaza girişleri, yük asansörü saatleri ve öğle trafiği hesaba katılarak teslimat aralığı teklif aşamasında yazılı netleştirilir.',
    {
      publishedAt: '2026-11-28',
      keywords: ['şişli ofis yemeği', 'nişantaşı catering', 'beşiktaş ofis yemeği', 'osmanbey toplu yemek', 'avrupa yakası ofis catering'],
      faqs: [
        {
          q: 'Kaşık Payı Beyoğlu dışına, Şişli, Nişantaşı veya Beşiktaş’a teslimat yapıyor mu?',
          a: 'Kaşık Payı’nın hazırlık mutfağı Beyoğlu Şehit Muhtar Mahallesi’ndedir. İstanbul’un diğer ilçelerinde teslimat uygunluğu, saat aralığı ve varsa teslimat ücreti açık adres ve yemek saatine göre teklif sırasında değerlendirilir.',
        },
        {
          q: 'Plaza ve iş merkezlerine yemek teslimatında nelere dikkat edilmeli?',
          a: 'Birçok plazada kurye veya yemek teslimatı resepsiyon, mal kabul kapısı veya güvenlik kaydı üzerinden yapılır. Kat teslimi mümkün değilse teslim alacak kişinin adı ve telefonu ilk mesajda paylaşılmalıdır.',
        },
        {
          q: 'Öğle trafiğinde yemeğin soğumaması için teslimat saati nasıl seçilmeli?',
          a: 'Yemeğin başlama saatinden 15–30 dakika öncesini hedefleyen bir teslimat aralığı belirlemek ve mutfakla trafik yoğunluğuna göre saat teyidi yapmak öğle arasını korur.',
        },
      ],
    },
  ),
  post(
    'catering-gida-guvenligi-sicaklik-ve-hijyen-kontrolu',
    'siparis',
    'Catering siparişinde gıda güvenliği, sıcaklık ve hijyen kontrol listesi',
    '5996 sayılı Kanun, Gıda Hijyeni Yönetmeliği, işletme kayıt belgesi, 63 °C sıcak tutma sınırı ve 72 saat şahit numune esaslarıyla catering hijyen kontrol listesi.',
    'corba',
    'Kurumsal bir catering tedarikçisini değerlendirirken ilk bakılacak resmi belge, 5996 sayılı Kanun kapsamındaki Tarım ve Orman Bakanlığı İşletme Kayıt Belgesidir. Teslimatta sıcak yemeklerin 63 °C ve üzerinde, soğuk mezelerin +4 °C bandında sevk edilmesi ve alerjen şeffaflığı gıda güvenliğinin temelini oluşturur.',
    {
      publishedAt: '2026-11-28',
      keywords: ['catering gıda güvenliği', 'taşıma yemek sıcaklık 63 derece', 'şahit numune 72 saat', 'işletme kayıt belgesi toplu yemek', 'Gıda Hijyeni Yönetmeliği'],
      faqs: [
        {
          q: 'Catering ve toplu tüketim işletmelerinde hangi resmi belge zorunludur?',
          a: '5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu ile Gıda İşletmelerinin Kayıt ve Onay İşlemlerine Dair Yönetmelik uyarınca toplu tüketim işletmelerinin Tarım ve Orman Bakanlığından İşletme Kayıt Belgesi alması ve resmi denetime tabi olması gerekir.',
        },
        {
          q: 'Taşıma yemekte sıcak yemekler kaç derecede tutulmalıdır?',
          a: 'Gıda güvenliği uygulamalarında mikroorganizma üremesinin hızlandığı +4 °C ile +60 °C arasındaki tehlikeli aralıktan kaçınmak için sıcak yemeklerin pişirmede merkez 75 °C’ye ulaşması, sevk ve sıcak tutmada ise en az 63–65 °C bandında muhafaza edilmesi esas alınır.',
        },
        {
          q: '72 saat şahit numune uygulaması yasal zorunluluk mudur?',
          a: 'Gıda Hijyeni Yönetmeliği işletmelere izlenebilirlik ve hijyen sorumluluğu yükler; her yemekten 250 gramlık şahit numunenin +4 °C’de 72 saat saklanması ise özellikle bakanlık rehberleri ve kurumsal/kamu teknik şartnamelerinde yerleşik standart uygulama olarak istenir.',
        },
      ],
    },
  ),
  post(
    'kurumsal-catering-sozlesmesi-ve-tedarikci-secimi',
    'siparis',
    'Kurumsal ofis yemeği tedarikçisi nasıl seçilir? (Kontrol listesi)',
    '3–50 kişilik ofisler için catering firması seçerken hijyen, menü şeffaflığı, alt sınır, kişi değişikliği, deneme siparişi ve fatura kriterlerini puanlayın.',
    'sofra',
    'Doğru ofis yemeği tedarikçisini yalnızca en düşük porsiyon fiyatına bakarak seçmek, sonradan teslimat gecikmesi ve menü tekrarlarına yol açabilir. Gıda güvenliği belgeleri, 3–50 kişilik ölçek uyumu, şeffaf fiyat kalemleri, tek günlük deneme performansı ve esnek kişi güncelleme kurallarıyla tedarikçileri nesnel biçimde kıyaslayabilirsiniz.',
    {
      publishedAt: '2026-11-28',
      keywords: ['catering firması nasıl seçilir', 'kurumsal yemek şirketi seçimi', 'ofis yemek tedarikçisi kontrol listesi', 'istanbul butik catering'],
      faqs: [
        {
          q: '3–50 kişilik bir ofis için büyük tabldot fabrikası mı, butik hazırlık mutfağı mı daha uygundur?',
          a: 'Büyük ölçekli tabldot firmaları genellikle 15–50 kişi altı siparişlerde yüksek alt sınır uygular veya rota esnekliği sunmaz. 3–50 kişilik ölçekte çalışan yerel bir hazırlık mutfağı hibrit katılım ve farklı menü taleplerine daha hızlı uyum sağlar.',
        },
        {
          q: 'Düzenli anlaşmadan önce tek günlük deneme siparişi istemek doğru mu?',
          a: 'Evet. Normal bir iş gününde vereceğiniz tek günlük deneme siparişi; teslimat dakikliğini, yemek sıcaklığını, porsiyon dengesini ve ekip memnuniyetini sözleşme öncesi gerçek koşullarda görmenizi sağlar.',
        },
        {
          q: 'Kurumsal catering teklifinde mutlaka yazılı netleştirilmesi gereken maddeler nelerdir?',
          a: 'Kişi başı menü tutarı, KDV ve varsa teslimat ücreti, teslimat saat aralığı, kişi sayısı değişikliği için son bildirim zamanı, alerjen/özel menü kuralları ve faturalandırma periyodu yazılı olarak teyit edilmelidir.',
        },
      ],
    },
  ),
];
