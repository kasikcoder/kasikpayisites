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
  post(
    'kucuk-ofis-yemegi',
    'ofis',
    '3–10 kişilik ofis yemeği nasıl planlanır?',
    'Küçük ekibiniz için ilk ofis yemeğini planlayın. On kişilik örnek sipariş, paket seçimi ve teslimatta kontrol edilecekler.',
    'menu',
    '3–10 kişilik bir ofis için ilk sıcak öğle yemeğini haftalık taahhüde girmeden tek bir iş günü üzerinden planlayabilirsiniz. Ortak öğle saatini, kesin kişi sayısını ve etli/tavuklu/vejetaryen menü kırılımını belirleyip teslimat adresini netleştirmek yeterlidir.',
    {
      updatedAt: '2026-11-28',
      keywords: ['küçük ofis yemeği', '3 kişilik ofis yemeği', '10 kişilik ofis yemeği', 'beyoğlu ofis yemeği'],
      faqs: [
        { q: 'Kaşık Payı’nda en az kaç kişilik ofis yemeği sipariş edilebilir?', a: 'Kaşık Payı ofis yemeklerinde 3 kişiden başlayan tek günlük veya düzenli siparişler hazırlar.' },
        { q: 'Küçük ofis siparişinde herkes aynı menüyü mü seçmek zorunda?', a: 'Hayır. Kişiye özel paket düzeninde aynı siparişte etli, tavuklu ve vejetaryen porsiyon adetlerini ayırabilirsiniz.' },
      ],
    },
  ),
  post(
    'hibrit-ofis-yemek-plani',
    'ofis',
    'Hibrit ofiste haftalık yemek siparişi planı',
    'Ofisteki kişi sayısı her gün değişiyorsa haftalık sipariş tablosu, sayım saati ve değişiklik notlarıyla fazla siparişi azaltın.',
    'mutfak',
    'Hibrit çalışan ofislerde her gün farklı kişi ofiste oluyorsa haftalık yemek planını sabit sayı yerine gün bazlı sayım saatiyle yönetin. Bir gün önceden kesinleşen adetleri tek tabloda toplamak fazla porsiyon israfını ve bütçe sapmasını önler.',
    {
      updatedAt: '2026-11-28',
      keywords: ['hibrit ofis yemek planı', 'değişken kişi sayısı ofis yemeği', 'haftalık ofis yemek siparişi'],
      faqs: [
        { q: 'Haftanın sadece Salı, Çarşamba ve Perşembe günleri yemek alabilir miyiz?', a: 'Evet. Ekibinizin ofiste olduğu seçili iş günleri için düzenli öğle yemeği planı oluşturabilirsiniz.' },
        { q: 'Hibrit ofiste günlük kişi sayısı değişirse ne zaman bildirilmeli?', a: 'Teklif aşamasında mutfakla son bildirim saatini teyit edip her günün kesin kişi sayısını tek sorumlu üzerinden iletin.' },
      ],
    },
  ),
  post(
    'haftalik-ofis-yemegi-menusu',
    'ofis',
    'Bir haftalık ofis yemeği menüsü nasıl hazırlanır?',
    'Beş iş günü için örnek öğle menüsü, yemekleri dönüşümlü sunma yöntemi ve farklı menü taleplerini toplama planı.',
    'corba',
    'Beş iş günlük ofis yemeği menüsünde ekip memnuniyetini korumanın anahtarı, çorba, ana yemek, yardımcı yemek ve meze eşleşmelerini hafta içine dönüşümlü yaymaktır. Tavuk, et ve vejetaryen dengesini önceden paylaşarak tekrar hissini önleyebilirsiniz.',
    {
      updatedAt: '2026-11-28',
      keywords: ['haftalık ofis yemeği menüsü', '5 günlük ofis öğle menüsü', 'ofis menü planlama'],
      faqs: [
        { q: 'Haftalık ofis menüsü siparişten önce paylaşılıyor mu?', a: 'Evet. Düzenli ofis yemeği planlarında haftalık menü seçenekleri önceden paylaşılır ve ekibinizin tercihlerine göre netleştirilir.' },
        { q: 'Aynı haftada hem çorbalı hem tatlılı menü seçilebilir mi?', a: 'Evet. Kaşık Payı’nın örnek menülerinde çorba-ana yemek-pilav-ezme ve tatlılı alternatifler gün bazında dönüşümlü seçilebilir.' },
      ],
    },
  ),
  post(
    'tabldot-mu-kisilik-paket-mi',
    'ofis',
    'Tabldot mu, kişiye özel yemek paketi mi?',
    'Ortak menü ile kişiye özel paketleri ekip büyüklüğü, servis süresi, farklı menü ihtiyaçları ve toplam maliyet açısından karşılaştırın.',
    'menu',
    'Ortak tabldot düzeni tek menü yiyen ve yemek alanı olan ekiplerde pratiktir; kişiye özel yemek paketleri ise 3–50 kişilik ofislerde farklı menü tercihlerini, hijyeni ve hızlı dağıtımı kolaylaştırır. Kararı ekip büyüklüğü, mutfak alanı ve mola süresine göre verin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['tabldot mu paket yemek mi', 'kişiye özel ofis yemek paketi', 'ofis tabldot karşılaştırma'],
      faqs: [
        { q: 'Mutfaksız küçük bir ofis için tabldot mu kişilik paket mi daha uygundur?', a: 'Yemekhane ve bulaşık alanı olmayan küçük ofislerde kişiye özel sıcak paketler servis ve toparlama süresini belirgin biçimde kısaltır.' },
        { q: 'Kişiye özel paketlerde farklı menüler nasıl ayırt edilir?', a: 'Etli, tavuklu ve vejetaryen paket adetleri sipariş öncesinde ayrılır ve teslimatta etiket kontrolüyle doğru kişilere ulaştırılır.' },
      ],
    },
  ),
  post(
    '20-kisilik-toplanti-catering',
    'etkinlik',
    '20 kişilik toplantıda öğle yemeği planı',
    '20 kişilik bir toplantıda sıcak yemeğin teslimatını, dağıtım süresini ve özel menüleri dakikasıyla planlamak için örnek akış.',
    'davet',
    '20 kişilik bir toplantıda 45 dakikalık öğle arasına sıcak yemeği sığdırmak için teslimatı moladan 15–20 dakika önce alıp dağıtımı toplantı odasından ayrı bir noktada yapın. Menü tercihlerini ve özel beslenme adetlerini bir gün önceden netleştirin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['20 kişilik toplantı catering', 'toplantı öğle yemeği planı', 'beyoğlu toplantı yemeği'],
      faqs: [
        { q: '20 kişilik toplantıda yemek teslimatı saat kaçta alınmalı?', a: 'Öğle arası 12.30’da başlıyorsa teslimat aralığını 12.00–12.15 olarak belirlemek dağıtım ve kontrol için güvenli zaman bırakır.' },
        { q: 'Toplantı yemeğinde vejetaryen misafirler için ayrı menü eklenebilir mi?', a: 'Evet. Toplam 20 porsiyon içindeki etli, tavuklu ve vejetaryen kırılımını teklif mesajında belirtmeniz yeterlidir.' },
      ],
    },
  ),
  post(
    '30-kisilik-davet-porsiyon-hesabi',
    'etkinlik',
    '30 kişilik davet için porsiyon hesabı',
    'Kesin ve bekleyen davetlileri ayırın. 30 kişilik davet için ana yemek, özel menü ve yedek porsiyon hesabını örnekle görün.',
    'sofra',
    '30 kişilik bir davette doğru porsiyon hesabı için kesin gelenleri, teyit bekleyenleri, çocukları ve özel beslenme tercihlerini ayrı satırlarda sayın. Gereksiz israfı önlerken son dakika sürprizlerine karşı 2–3 yedek porsiyon planlamak güvenli bir dengedir.',
    {
      updatedAt: '2026-11-28',
      keywords: ['30 kişilik davet porsiyon hesabı', 'catering porsiyon hesaplama', 'davet yemek adedi'],
      faqs: [
        { q: '30 kişilik davette kaç yedek porsiyon hesaplanmalı?', a: 'Kesinleşen davetli sayısına ek olarak teyit bekleyen misafir oranına göre genellikle %5–10 (2–3 porsiyon) yedek payı bırakılır.' },
        { q: 'Özel menü (vejetaryen vb.) toplam porsiyonun içinde mi sayılır?', a: 'Evet. 30 kişilik davette 4 misafir vejetaryen ise mutfağa 26 standart + 4 vejetaryen şeklinde toplam 30 porsiyon bildirilir.' },
      ],
    },
  ),
  post(
    'evde-dogum-gunu-catering',
    'etkinlik',
    'Evde doğum günü için yemek ve ikram planı',
    'Evde doğum günü için sıcak yemek veya ikramı, pasta saatini ve servis alanını 12 kişilik örnekle planlayın.',
    'davet',
    'Evde 10–30 kişilik doğum günü kutlamasında mutfağa kapanmadan misafirlerle ilgilenmek için sıcak yemek veya ikram teslimatını pasta saatinden en az 1,5 saat önceye yerleştirin. Salon düzenine göre kişilik paket ya da ortak sofra seçin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['evde doğum günü catering', 'doğum günü yemek siparişi istanbul', 'evde davet catering'],
      faqs: [
        { q: 'Evde 12 kişilik doğum günü için catering siparişi verilebilir mi?', a: 'Evet. Kaşık Payı 3–50 kişilik ev davetleri ve en az 8 kişilik üç servisli sofralar için teklif hazırlar.' },
        { q: 'Doğum gününde sıcak yemek ile pasta servisi arasında ne kadar süre bırakılmalı?', a: 'Yemek servisinin tamamlanması ve masanın toparlanması için ana yemekten pasta kesimine 60–90 dakika aralık bırakmak akışı rahatlatır.' },
      ],
    },
  ),
  post(
    'catering-teslimat-kurulum-servis',
    'etkinlik',
    'Catering’de teslimat, kurulum ve servis farkı',
    'Yemeği kimin teslim alacağını, masayı kimin kuracağını ve ekipmanı kimin toplayacağını tekliften önce netleştirin.',
    'sofra',
    'Catering tekliflerinde teslimat, masa kurulumu ve servis personeli üç ayrı hizmet katmanıdır. Sadece kapıda sıcak teslimat mı yoksa kurulum ve toplama desteği mi istediğinizi teklif aşamasında ayırmak hem bütçeyi hem etkinlik günü görev paylaşımını netleştirir.',
    {
      updatedAt: '2026-11-28',
      keywords: ['catering teslimat kurulum servis farkı', 'catering hizmet kapsamı', 'etkinlik servis planı'],
      faqs: [
        { q: 'Standart catering teslimatına masa kurulumu ve garson dahil midir?', a: 'Hayır. Standart teslimat yemeğin belirlenen adrese sıcak ulaştırılmasıdır; kurulum, ekipman veya servis personeli ihtiyacı teklifte ayrıca değerlendirilir.' },
        { q: 'Teklifte kapsam karmaşasını önlemek için ne sorulmalı?', a: 'Yemeğin kapıda mı teslim edileceğini, servis ekipmanlarının kimden sağlanacağını ve etkinlik sonrası toplamanın kime ait olduğunu yazılı teyit edin.' },
      ],
    },
  ),
  post(
    'catering-fiyatlari-teklif-karsilastirma',
    'siparis',
    'Catering fiyatları nasıl karşılaştırılır?',
    'Kişi başı menü fiyatı, teslimat, ekipman ve servis bedellerini aynı kapsamda karşılaştırın. Örnek bütçe hesabını ve teklif şablonunu kullanın.',
    'sofra',
    'Catering fiyatlarını doğru karşılaştırmak için yalnızca kişi başı menü tutarına değil; teslimat, %10 KDV, servis ekipmanı ve kurulum dahil toplam maliyete bakın. Tüm tedarikçilere aynı kişi sayısı, menü ve adres bilgisini göndermek adil kıyaslama sağlar.',
    {
      updatedAt: '2026-11-28',
      keywords: ['catering fiyatları 2026', 'kişi başı catering fiyatı', 'catering teklif karşılaştırma'],
      faqs: [
        { q: 'Kaşık Payı’nda örnek catering menü fiyatları ne kadar?', a: 'Örnek günlük menüler kişi başı 260 TL ile 330 TL arasında yer alır; sipariş gününe özel menü, teslimat ve toplam fiyat teklifte netleşir.' },
        { q: 'Düşük kişi başı fiyat neden bazen daha pahalıya gelir?', a: 'Teslimat, ekipman veya KDV ayrı satırda eklendiğinde çıplak menü fiyatı düşük görünen bir teklifin toplam tutarı daha yüksek çıkabilir.' },
      ],
    },
  ),
  post(
    'taksim-beyoglu-yemek-teslimat-plani',
    'siparis',
    'Taksim ve Beyoğlu’nda yemek teslimatı planı',
    'Taksim, İstiklal, Talimhane ve Cihangir’de ofis veya etkinlik teslimatını giriş noktası, kat ve teslim saatiyle planlayın.',
    'mutfak',
    'Taksim, İstiklal Caddesi, Talimhane ve Cihangir’de yemek teslimatının dakik ilerlemesi için harita konumuyla birlikte gerçek bina girişini, kat bilgisini ve teslim alacak kişinin telefonunu paylaşın. Yemek saati ile teslimat aralığını her zaman ayrı yazın.',
    {
      updatedAt: '2026-11-28',
      keywords: ['taksim yemek teslimatı', 'beyoğlu catering teslimat', 'cihangir talimhane ofis yemeği'],
      faqs: [
        { q: 'Kaşık Payı mutfağı Beyoğlu’nda nerede bulunuyor?', a: 'Hazırlık mutfağımız Şehit Muhtar Mahallesi, Zambak Sokak No: 8, Beyoğlu / İstanbul adresindedir.' },
        { q: 'Teslimat saati ile yemek saati aynı mı yazılmalı?', a: 'Hayır. Kapıdan kata çıkma ve dağıtım süresi için teslimat aralığını yemek saatinden 15–30 dakika önceye planlamak gerekir.' },
      ],
    },
  ),
  post(
    'catering-siparisinde-alerjen-bilgisi',
    'siparis',
    'Catering siparişinde alerjen bilgisi nasıl sorulur?',
    'Menü içeriklerini, çapraz temas ihtimalini ve porsiyon etiketlerini siparişten önce yazılı olarak sormak için örnek mesaj.',
    'corba',
    'Catering siparişinde gluten, süt, yumurta, susam veya kuruyemiş gibi alerjenler söz konusuysa yemek adıyla yetinmeyin; tüm menünün güncel içeriğini ve çapraz temas ihtimalini sipariş kesinleşmeden önce yazılı olarak teyit edin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['catering alerjen bilgisi', 'toplu yemek alerjen bildirimi', 'çapraz temas catering'],
      faqs: [
        { q: 'Alerjen bilgisinde içerik sorusu ile çapraz temas sorusu neden ayrıdır?', a: 'İçerik sorusu alerjenin tarifte bulunup bulunmadığını; çapraz temas sorusu ise aynı mutfak tezgâhı veya ekipmandan geçiş ihtimalini netleştirir.' },
        { q: 'Sipariş sonrası menüde değişiklik olursa ne yapılmalı?', a: 'Ana yemek, çorba veya sos değiştiğinde alerjen teyidi mutlaka yenilenmeli ve özel porsiyonlar teslimatta etiketle kontrol edilmelidir.' },
      ],
    },
  ),
  post(
    'farkli-yemek-menuleri-toplu-siparis',
    'siparis',
    'Aynı toplu siparişte farklı yemek menüleri',
    'Tavuklu, etli ve vejetaryen menü adetlerini tek siparişte toplayın. 18 kişilik örnek sayım, etiketleme ve teslim alma planı.',
    'menu',
    'Aynı toplu siparişte etli, tavuklu ve vejetaryen menüleri sorunsuz yönetmek için önce toplam kişi sayısını, ardından menü bazlı adet kırılımını yazın. Paketlerin dışarıdan ayırt edilmesi için etiketleme ve teslim alma sorumlusu belirleyin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['aynı siparişte farklı menüler', 'karma toplu yemek siparişi', 'vejetaryen ve etli catering'],
      faqs: [
        { q: 'Tek toplu siparişte kaç farklı menü birleştirilebilir?', a: 'Seçilen günün uygun seçenekleri doğrultusunda etli, tavuklu ve vejetaryen porsiyon adetlerini tek teklifte birleştirebilirsiniz.' },
        { q: 'Karma siparişte paketlerin karışmaması için ne yapılmalı?', a: 'Her menünün adet kırılımını yazılı onaylayın, paket üstü etiketleme isteyin ve teslim anında listeye göre kontrol edin.' },
      ],
    },
  ),
  post(
    'ofis-yemegi-deneme-siparisi',
    'ofis',
    'Ofis yemeği için deneme siparişi nasıl verilir?',
    'Düzenli ofis yemeği planından önce tek günlük deneme yapın. Menü, teslimat ve ekip geri bildirimini değerlendirmek için örnek kontrol listesi.',
    'menu',
    'Deneme siparişini normal bir iş gününde, ekibin sonra da kullanacağı menü biçimi ve teslimat saatiyle verin. Teslimatı, yemeği ve dağıtımı ayrı değerlendirin. Kaşık Payı’ndan 3–50 kişilik tek günlük yemek için teklif isteyebilirsiniz.',
    {
      updatedAt: '2026-11-28',
      keywords: ['ofis yemeği deneme siparişi', 'tek günlük ofis yemeği', 'catering tadım siparişi'],
      faqs: [
        { q: 'Düzenli ofis yemeğine geçmeden tek günlük deneme siparişi verilebilir mi?', a: 'Evet. 3–50 kişilik tek iş günü siparişiyle teslimat dakikliğini, sıcaklığı ve menüyü gerçek ofis gününde test edebilirsiniz.' },
        { q: 'Deneme gününde ekip geri bildirimi nasıl toplanmalı?', a: 'Yemek sonrası porsiyon doyuruculuğu, sıcaklık, lezzet ve paketleme için 4 kısa soruluk bir form doldurmak karar sürecini netleştirir.' },
      ],
    },
  ),
  post(
    'ofis-yemegi-aylik-butce',
    'ofis',
    'Aylık ofis yemeği bütçesi nasıl hesaplanır?',
    'Değişen ekip sayısıyla aylık ofis yemeği bütçesi çıkarın. Teslimat, ek porsiyon ve fatura kontrolünü dört haftalık örnekle planlayın.',
    'mutfak',
    'Aylık yemek bütçesi için önce her hizmet günündeki porsiyonları toplayın. Menü bedeline sipariş günlerine göre teslimat ve varsa ek hizmeti ekleyin. Tahmini bütçeyi ay sonunda onaylanan porsiyonlarla karşılaştırın.',
    {
      updatedAt: '2026-11-28',
      keywords: ['aylık ofis yemeği bütçesi', 'ofis yemek maliyeti hesaplama', 'kurumsal yemek bütçesi'],
      faqs: [
        { q: 'Aylık ofis yemeği bütçesinde hangi kalemler ayrı satırda tutulmalı?', a: 'Günlük porsiyon toplamı, %10 KDV, varsa teslimat bedeli ve misafir/toplantı günleri için ek porsiyonlar ayrı satırda izlenmelidir.' },
        { q: 'Düzenli ofis yemeklerinde aylık toplu fatura kesiliyor mu?', a: 'Evet. Kaşık Payı düzenli ofis yemeği planlarında ay sonu onaylanan porsiyonlar üzerinden aylık faturalandırma seçeneği sunar.' },
      ],
    },
  ),
  post(
    'vardiyali-ekip-yemek-teslimati',
    'ofis',
    'Vardiyalı ekipler için iki ayrı yemek molası',
    'Aynı iş yerinde iki farklı yemek molası için sipariş adedini, teslimat saatlerini ve paketleri nasıl ayıracağınızı planlayın.',
    'mutfak',
    'Ekip aynı adreste farklı saatlerde yemek yiyorsa her vardiyanın porsiyonunu, mola saatini ve teslim alacak kişiyi ayrı yazın. Mutfağa iki teslimatın mümkün olup olmadığını ve her teslimatın ücretini sorun.',
    {
      updatedAt: '2026-11-28',
      keywords: ['vardiyalı ekip yemek teslimatı', 'iki mola ofis yemeği', 'işyeri vardiya yemeği'],
      faqs: [
        { q: 'İki farklı mola saati için tek teslimat mı iki teslimat mı seçilmeli?', a: 'Molalar arasında 30–45 dakikadan uzun süre varsa yemeğin sıcaklığını korumak için iki ayrı teslimat seçeneğini ve ücretini mutfakla değerlendirin.' },
        { q: 'Vardiya paketlerinin karışmaması için ne yapılmalı?', a: 'Her vardiyanın porsiyon adetini ve teslim alacak sorumluyu ayrı satırda yazın ve kolilerin vardiya saatine göre ayrılmasını isteyin.' },
      ],
    },
  ),
  post(
    'egitim-atolye-yemek-plani',
    'etkinlik',
    'Tam günlük eğitim ve atölye için yemek planı',
    'Katılımcılar ve eğitmenler için tam günlük atölye programına öğle yemeği ve ikram molaları ekleyin. 24 kişilik örnek akışı kullanın.',
    'davet',
    'Tam günlük eğitimde öğle yemeğini oturum süresinden ayrı planlayın. Katılımcıların yanı sıra eğitmen ve görevli ekibi de sayın. Mekândan yemek alanını ve dışarıdan teslimat koşullarını yazılı olarak öğrenin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['eğitim atölye yemek planı', 'seminer öğle yemeği catering', 'tam günlük eğitim ikramı'],
      faqs: [
        { q: 'Tam günlük eğitimde kişi sayısına kimler dahil edilmeli?', a: 'Katılımcılara ek olarak eğitmenler, moderatörler ve mekânda görevli organizasyon ekibi de porsiyon sayısına eklenmelidir.' },
        { q: 'Eğitim salonunda öğle yemeği ne kadar süreye planlanmalı?', a: 'Sıcak öğle yemeği dağıtımı ve kısa dinlenme için oturumlar arasında en az 45–60 dakikalık öğle arası bırakmak idealdir.' },
      ],
    },
  ),
  post(
    'acilis-etkinligi-ikram-mi-sicak-yemek-mi',
    'etkinlik',
    'Açılışta ikram mı, sıcak yemek mi?',
    'Sergi veya mağaza açılışında menüyü misafirlerin kalış süresi, oturma düzeni ve etkinlik saatine göre seçin.',
    'sofra',
    'Misafirler farklı saatlerde uğrayıp kısa süre kalacaksa ayakta yenebilen ikramları değerlendirin. Etkinlik öğün saatine denk geliyor ve grup birlikte oturuyorsa sıcak yemek daha uygun olabilir. Açılış ekibinin öğününü de ayrıca sayın.',
    {
      updatedAt: '2026-11-28',
      keywords: ['açılış etkinliği catering', 'sergi açılışı ikram', 'mağaza açılışı yemek planı'],
      faqs: [
        { q: 'Sergi veya mağaza açılışında sıcak yemek ne zaman doğru olur?', a: 'Açılış öğle veya akşam yemeği saatine denk geliyorsa ve misafirler 1,5 saatten uzun kalıyorsa sıcak menü daha tatmin edicidir.' },
        { q: 'Açılış ekibinin yemeği misafir ikramından neden ayrı sayılmalı?', a: 'Kurulum ve karşılama ekibi misafirler gelmeden önce veya etkinlik sonrasında doyurucu bir ana öğüne ihtiyaç duyar.' },
      ],
    },
  ),
  post(
    'acik-bufe-mi-paket-yemek-mi',
    'etkinlik',
    'Davet için açık büfe mi, kişilik paket mi?',
    'Açık büfe ve kişilik paketleri mekân alanı, misafir akışı, özel menüler ve toparlama süresiyle karşılaştırın.',
    'davet',
    'Açık büfe için servis masası, sıra alanı ve servis gereçleri gerekir. Kişilik paketle dağıtım daha küçük bir alana sığabilir. Misafirlerin geliş saatini, özel menü adedini ve mekândaki görev dağılımını birlikte değerlendirin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['açık büfe mi paket yemek mi', 'davet servis düzeni', 'kişilik catering paketi'],
      faqs: [
        { q: 'Dar bir salonda 30 kişilik davet için hangi düzen daha rahattır?', a: 'Sıra ve büfe masası alanı sınırlıysa kişilik kapalı paketler sıkışıklığı önler ve servis süresini kısaltır.' },
        { q: 'Açık büfe seçilirse mekânda neler hazır olmalı?', a: 'Yeterli uzunlukta servis masası, iki yönlü geçiş alanı, servis gereçleri ve tabak/çatal düzeni önceden planlanmalıdır.' },
      ],
    },
  ),
  post(
    'beyoglu-mekan-disaridan-catering',
    'siparis',
    'Beyoğlu’nda etkinlik mekânına dışarıdan catering',
    'Mekânı tutmadan önce dışarıdan yemek iznini, yükleme girişini, servis alanını ve toplama saatini kontrol edin.',
    'sofra',
    'Beyoğlu’nda bir mekâna dışarıdan catering söylemeden önce işletmeciden yazılı onay alın. Yemeğin nerede teslim edileceğini, hangi alanda servis edilebileceğini ve etkinlik sonunda ekipmanın nasıl çıkarılacağını birlikte belirleyin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['beyoğlu mekan dışarıdan catering', 'etkinlik mekanı catering izni', 'beyoğlu davet mekanı yemek'],
      faqs: [
        { q: 'Beyoğlu’ndaki her etkinlik mekânı dışarıdan catering kabul eder mi?', a: 'Hayır. Bazı müze, otel ve kültür mekânları yalnızca anlaşmalı tedarikçilerle çalışır; bu nedenle sözleşme öncesi yazılı onay alınmalıdır.' },
        { q: 'Mekân onayından sonra mutfağa hangi bilgiler iletilmeli?', a: 'Yükleme/teslim kapısı, kat veya asansör bilgisi, izin verilen giriş saatleri ve mekân yetkilisinin telefonu paylaşılmalıdır.' },
      ],
    },
  ),
  post(
    'ayni-gun-toplu-yemek-siparisi',
    'siparis',
    'Beyoğlu’nda aynı gün toplu yemek siparişi',
    'Beklenmedik ofis veya toplantı siparişinde mutfağa hangi bilgileri tek mesajda yazmanız gerektiğini örnekle görün.',
    'corba',
    'Aynı gün 3–50 kişilik yemek istiyorsanız kişi sayısını, açık adresi ve yemeğin masada olması gereken saati ilk mesajda paylaşın. Kaşık Payı, menü ve teslimat uygunluğunu siparişten önce kontrol eder.',
    {
      updatedAt: '2026-11-28',
      keywords: ['aynı gün toplu yemek siparişi', 'acil catering beyoğlu', 'taksim aynı gün ofis yemeği'],
      faqs: [
        { q: 'Beyoğlu’nda aynı gün toplu yemek siparişi mümkün mü?', a: 'Mutfak yoğunluğu ve teslimat saatine göre uygunluk kontrol edilir; kişi sayısı, açık adres ve yemek saatini ilk WhatsApp mesajında paylaşmanız süreci hızlandırır.' },
        { q: 'Aynı gün siparişte menü seçimi nasıl ilerler?', a: 'Günün hazır ve hızlı çıkabilen sıcak yemek seçenekleri üzerinden mutfakla anında menü ve teslimat saati teyidi yapılır.' },
      ],
    },
  ),
  post(
    'uc-servisli-davet-menusu',
    'etkinlik',
    'Üç servisli davet menüsü nasıl planlanır?',
    'Başlangıç, ana yemek ve tatlıyı misafir sayısı ve oturma düzeniyle birlikte planlayın. 10 kişilik örnek servis akışını inceleyin.',
    'davet',
    'Üç servisli bir davette başlangıç, ana yemek ve tatlının ne zaman çıkacağını ve tabakları kimin toplayacağını belirleyin. Kaşık Payı’nın üç servisli özel davet paketi en az 8 kişiliktir. Menü içeriği ve servis kapsamı teklifte teyit edilir.',
    {
      updatedAt: '2026-11-28',
      keywords: ['üç servisli davet menüsü', 'oturmalı davet catering', 'özel davet yemeği beyoğlu'],
      faqs: [
        { q: 'Kaşık Payı üç servisli özel davet paketi en az kaç kişiliktir?', a: 'Üç servisli özel davet paketi en az 8 kişiliktir; menü içeriği ve servis akışı teklifte birlikte netleştirilir.' },
        { q: 'Üç servisli davette servisler arası süre nasıl ayarlanır?', a: 'Başlangıçtan ana yemeğe 25–30 dakika, ana yemekten tatlıya 35–45 dakika aralık bırakmak masadaki akışı konforlu tutar.' },
      ],
    },
  ),
  post(
    'iki-gunluk-toplanti-yemek-plani',
    'etkinlik',
    'İki günlük toplantıda yemek siparişi planı',
    'İki günlük programda menüleri, günlük katılımcı sayısını, kısa molaları ve her günün teslimat sorumlusunu ayrı planlayın.',
    'sofra',
    'İki günlük toplantı için her günün yemek ve ikram adedini ayrı sayın. Tek teklif isteyebilirsiniz. Ancak her gün için menüyü, teslimat saatini, adresi ve adedi ayrı satırda teyit edin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['iki günlük toplantı yemek planı', 'çok günlük seminer catering', 'toplantı catering menüsü'],
      faqs: [
        { q: 'İki günlük toplantıda iki gün farklı menü seçilebilir mi?', a: 'Evet. Birinci gün tavuk ağırlıklı, ikinci gün et veya sebze ağırlıklı dönüşümlü menü planlayarak katılımcılara çeşitlilik sunabilirsiniz.' },
        { q: 'İki günün katılımcı sayısı farklıysa tek teklif alınabilir mi?', a: 'Evet. Tek teklif içinde 1. gün ve 2. gün porsiyon adetleri, saatleri ve menüleri ayrı satırlarda onaylanır.' },
      ],
    },
  ),
  post(
    'iki-ofise-yemek-teslimati',
    'ofis',
    'Aynı gün iki ofise yemek teslimatı nasıl planlanır?',
    'İki farklı ofis için menü adetlerini, teslimat saatlerini ve adres başına sorumluları ayırın. 21 kişilik örnek dağılımı inceleyin.',
    'mutfak',
    'İki ofisin toplam kişi sayısını yazın ve siparişi adres başına porsiyon, menü ve teslimat saatine ayırın. Her adres için teslimat uygunluğunu ve varsa ek bedeli teyit edin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['iki ofise yemek teslimatı', 'çok şubeli ofis yemeği', 'iki adrese catering'],
      faqs: [
        { q: 'İki ayrı ofis için tek fatura kesilebilir mi?', a: 'Evet. Aynı şirket adına iki şubeye yapılan teslimatlar tek sipariş özeti ve kurumsal fatura altında planlanabilir.' },
        { q: 'İki ofise teslimatta hangi bilgi karışıklığı önler?', a: 'Her adres için ayrı teslim alacak kişi, cep telefonu, porsiyon adedi ve saat aralığı belirtmek şarttır.' },
      ],
    },
  ),
  post(
    'catering-kisi-sayisi-degisikligi',
    'siparis',
    'Catering siparişinde kişi sayısı değişirse ne yapılır?',
    'Kesin davetli sayısı açıklanınca mutfağa adet farkını, özel menüleri ve yeni toplamı tek mesajda iletin.',
    'menu',
    'Kişi sayısı değiştiğinde mutfağa son onaylanan adedi ve yeni toplamı birlikte yazın. Özel menülerin yeni dağılımını ekleyin ve tutar, teslimat saati ve değişiklik koşullarını yeniden teyit edin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['catering kişi sayısı değişikliği', 'toplu yemek adet güncelleme', 'catering sipariş revizyonu'],
      faqs: [
        { q: 'Kişi sayısı değişikliğini bildirirken neden hem farkı hem yeni toplamı yazmalıyız?', a: '“+3 kişi” ifadesi tek başına önceki sayıyla karışabilir; “eski 20, yeni toplam 23” şeklinde yazmak yanlış porsiyon üretimini önler.' },
        { q: 'Son değişiklik saati ne zaman öğrenilmeli?', a: 'Siparişi ilk onaylarken mutfaktan kişi sayısı güncellemesi için son bildirim gün ve saatini yazılı olarak istemeniz gerekir.' },
      ],
    },
  ),
  post(
    'reklam-cekim-ekibi-yemek-plani',
    'etkinlik',
    'Reklam çekimi ekibi için set yemeği planı',
    'Oyuncu, teknik ekip ve ajans için porsiyon sayın. Beyoğlu’nda tek günlük çekim için örnek mola akışı ve teslimat notu hazırlayın.',
    'mutfak',
    'Reklam çekiminde yemek adedini sete uğrayan herkes üzerinden hesaplamak yerine, mola saatinde sahada kalacak kişileri bölüm bölüm sayın. İlk ve son yemek molasını, teslim noktası ile olası lokasyon değişikliğini prodüksiyon planına ekleyin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['reklam çekimi set yemeği', 'beyoğlu set catering', 'prodüksiyon yemek planı'],
      faqs: [
        { q: 'Çekim setinde yemek adedi nasıl doğru sayılır?', a: 'Çağrı listesindeki kamera, ışık, ses, oyuncu, prodüksiyon ve ajans ekiplerinden mola saatinde sahada kalacak kişiler tek tek toplanmalıdır.' },
        { q: 'Çekim saati uzarsa teslimat değişikliği nasıl yönetilmeli?', a: 'Saat değişikliğini mutfağa yalnızca belirlenen prodüksiyon sorumlusu, önceden teyit edilen son bildirim saatine kadar iletmelidir.' },
      ],
    },
  ),
  post(
    'fuar-stand-ekibi-yemek-plani',
    'etkinlik',
    'Fuar standı ekibine öğle yemeği nasıl planlanır?',
    'Standı boş bırakmadan iki mola planlayın. Hol, stand numarası ve dışarıdan teslimat koşulları için örnek sipariş akışını inceleyin.',
    'menu',
    'Fuar ekibi için ilk adım, organizatörden dışarıdan yemek tesliminin mümkün olup olmadığını öğrenmektir. Teslimat uygunsa standda kalacak kişileri ve mola gruplarını belirleyip hol, stand ve teslim kapısını tek notta toplayın.',
    {
      updatedAt: '2026-11-28',
      keywords: ['fuar stand ekibi yemeği', 'istanbul fuar personel öğle yemeği', 'fuar catering planı'],
      faqs: [
        { q: 'Fuar alanına dışarıdan öğle yemeği siparişi her zaman serbest midir?', a: 'Hayır. Bazı fuar yönetimleri personel yemeğinde yalnızca anlaşmalı tedarikçiye izin verir; önce katılımcı el kitabını kontrol edin.' },
        { q: 'Stand boş kalmadan ekip öğle molası nasıl bölünür?', a: 'Ekibi yarı yarıya iki gruba bölüp 30 dakika arayla mola vermek her vardiyada ziyaretçi karşılayacak yetkili kalmasını sağlar.' },
      ],
    },
  ),
  post(
    'musteri-toplantisi-ogle-yemegi',
    'ofis',
    'Ofiste müşteri toplantısı için öğle yemeği planı',
    'Misafir ve ev sahibi ekip için menü, oturma düzeni ve mola saati belirleyin. 12 kişilik toplantı planı ve teklif örneği.',
    'sofra',
    'Müşteri toplantısında öğle yemeğini, yemek yiyecek misafir ve ev sahibi ekip sayısına göre planlayın. Mola süresi kısa olduğunda menü tercihini önceden toplamak ve paketleri toplantı masasından ayrı bir noktada dağıtmak zaman kazandırır.',
    {
      updatedAt: '2026-11-28',
      keywords: ['müşteri toplantısı öğle yemeği', 'ofiste misafir ağırlama yemek', 'kurumsal toplantı yemeği'],
      faqs: [
        { q: 'Müşteri toplantısında yemek hangi odada servis edilmeli?', a: 'Sunum evrakları ve bilgisayarlar toplantı masasında kalacağından yan salon veya ayrı bir ortak alan kullanmak çok daha konforludur.' },
        { q: 'Misafirlerin özel beslenme tercihleri ne zaman sorulmalı?', a: 'Toplantı daveti teyit edilirken kısa bir notla vejetaryen veya alerjen bilgisi almak sipariş günü sürprizleri önler.' },
      ],
    },
  ),
  post(
    'mutfaksiz-mekanda-sicak-yemek',
    'etkinlik',
    'Mutfağı olmayan mekânda sıcak yemek nasıl planlanır?',
    'Yemeğin nerede teslim alınacağını, kimin dağıtacağını ve mekânda hangi ekipmanın bulunduğunu 18 kişilik örnek üzerinden planlayın.',
    'davet',
    'Mutfaksız bir mekânda sıcak yemek için menüyü seçmeden önce teslimat ile servis arasındaki süreyi, dağıtım alanını ve eldeki ekipmanı mutfakla paylaşın. Yemek planını mekânın sağladığı koşullara ve mutfağın teyit ettiği servis düzenine göre yapın.',
    {
      updatedAt: '2026-11-28',
      keywords: ['mutfaksız mekanda sıcak yemek', 'mutfaksız ofis catering', 'etkinlik alanı sıcak yemek'],
      faqs: [
        { q: 'Mutfağı olmayan bir atölye veya galeride sıcak yemek servisi yapılabilir mi?', a: 'Evet. Sıcak taşıma ve kişilik kapalı paket düzeniyle ocak veya mutfak tezgâhı olmadan da hijyenik sıcak yemek servisi yapılabilir.' },
        { q: 'Mutfaksız mekânda teslimat saati neden kritik?', a: 'Isıtma imkânı olmadığı için teslimat aralığının yemek başlangıcından 15–25 dakika önceye ayarlanması sıcaklığı korur.' },
      ],
    },
  ),
  post(
    'kurumsal-catering-siparis-onayi',
    'siparis',
    'Kurumsal catering siparişi nasıl onaylanır?',
    'İlk catering teklifini ekip, satın alma ve teslim alan kişiyle aynı bilgiler üzerinden onaylayın. Kopyalanabilir sipariş özeti.',
    'corba',
    'Kurumsal bir yemek siparişini onaylarken tarih, servis saati, menü dağılımı ve toplam tutarı tek yazılı özette birleştirin. Onayı kimin vereceğini, teslimatı kimin alacağını ve değişikliklerin nasıl teyit edileceğini siparişten önce belirleyin.',
    {
      updatedAt: '2026-11-28',
      keywords: ['kurumsal catering sipariş onayı', 'catering satın alma özeti', 'toplu yemek yazılı teyit'],
      faqs: [
        { q: 'Kurumsal sipariş onay metninde hangi bilgiler mutlaka yer almalı?', a: 'Tarih, teslimat aralığı, açık adres, menü bazlı porsiyon adetleri, KDV ve teslimat dahil toplam tutar ile fatura bilgileri tek mesajda toplanmalıdır.' },
        { q: 'Teklifi alan kişi ile teslimatı karşılayacak kişi farklıysa ne yapılmalı?', a: 'Onay özetinde her iki kişinin adı ve telefonu açıkça yazılarak teslimat anında iletişim kopukluğu önlenir.' },
      ],
    },
  ),
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
  post(
    'coffee-break-ve-kokteyl-ikram-plani',
    'etkinlik',
    'Kurumsal coffee break ve kokteyl ikram planı',
    'Toplantı arası coffee break, ayakta kokteyl ve sıcak yemek formatlarını süre, kişi sayısı, ekipman ve bütçe kalemleriyle karşılaştırın.',
    'davet',
    'Kurumsal toplantı ve davetlerde 15–30 dakikalık kısa aralar için coffee break, ayakta ağırlanan lansmanlar için kokteyl, öğün saatine denk gelen buluşmalar içinse sıcak yemek seçilmelidir. Katılımcı sayısını, servis ekipmanını ve mekân iznini tekliften önce netleştirin.',
    {
      publishedAt: '2026-11-28',
      keywords: ['coffee break catering istanbul', 'toplantı arası ikram', 'kurumsal kokteyl catering', 'kokteyl ikram planı'],
      faqs: [
        { q: 'Coffee break ile kokteyl ikramı arasındaki temel fark nedir?', a: 'Coffee break eğitim ve toplantı aralarındaki 15–30 dakikalık molalara yönelik çay, kahve ve hafif ikramları; kokteyl ise 1–2 saatlik açılış veya lansmanlarda ayakta sunulan daha çeşitli ikramları kapsar.' },
        { q: 'Öğle saatini kapsayan seminerde sadece coffee break yeterli olur mu?', a: 'Hayır. Program öğle yemeği saatine giriyorsa sabah/öğleden sonra hafif ikrama ek olarak sıcak öğle yemeği planlamak katılımcı memnuniyetini korur.' },
        { q: 'Coffee break veya kokteyl teklifini etkileyen ana kalemler nelerdir?', a: 'Kişi sayısı, menü çeşitliliği, kullan-at veya cam/porselen ekipman tercihi, servis personeli ihtiyacı ve teslimat lokasyonu toplam bütçeyi belirler.' },
      ],
    },
  ),
];
