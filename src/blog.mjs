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
  description: 'Küçük ekipler için ofis yemeği, toplantı ve doğum günü menüleri ile Beyoğlu’nda catering fiyatı, sipariş ve teslimat planlama rehberleri.',
  photo: photos.sofra,
};

const post = (slug, topic, label, description, photo, introduction) => ({
  path: blogPath + slug + '/',
  topic,
  label,
  description,
  photo: photos[photo],
  introduction,
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
];
