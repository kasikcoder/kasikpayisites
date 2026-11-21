# Kaşık Payı

Türkçe ana sayfa, üç catering hizmet sayfası, menü ve fiyat karşılaştırma sayfası, işletme tanıtımı ve 29 yazılı catering rehberi. Ana sayfa mevcut Framer animasyonlarını kullanır. Menü, teslimat, hizmet ve iletişim içeriği ilk HTML yanıtında bulunur.

```sh
npm install
npm run dev -- --port 4188
npm run build
npm run test:sites
npm run test:seo
```

Derleme çıktısı `dist/client` altında bulunur. Canonical adresler, sosyal paylaşım etiketleri, JSON-LD ve site haritası `src/seo.mjs` içindeki sayfa bilgilerinden üretilir. Ana sayfada paylaşılan HTML parçaları `src/` altında, örnek menü ve fiyatlar `public/runtime/kasik-payi-menu.mjs` dosyasındadır.

## Hedef aramalar

| Sayfa | Arama ve kullanıcı ihtiyacı |
| --- | --- |
| `/` | Kaşık Payı, Kaşıkpayı Catering, İstanbul catering ve günlük menü |
| `/taksim-beyoglu-catering/` | Taksim catering, Beyoğlu catering, toplu yemek teslimatı, adres ve servis saati |
| `/ofis-yemegi/` | Taksim ofis yemeği, Beyoğlu günlük öğle yemeği, düzenli ofis yemeği |
| `/etkinlik-catering/` | Beyoğlu toplantı catering, Taksim doğum günü ve özel davet yemeği |
| `/menu/` | Catering menüleri, kişi başı örnek fiyatlar ve menüye özel teklif |
| `/hakkimizda/` | Kaşık Payı’nın hazırlık mutfağı, iletişim bilgileri ve rehberlerin yayıncısı |
| `/blog/` | Ofis, toplantı, davet ve teslimat için örnek planlar ve teklif rehberleri |

## Canlıya aktarma ve ölçüm

Bu Vite uygulamasını yayınlamak için `dist/client` içeriğini kullanın. Canonical yayın adresi `src/seo.mjs` dosyasında tanımlanır. Rehberlerin başlık ve görsel bilgileri `src/blog.mjs` içinde, tam yazıları `blog/<yazı-adresi>/index.html` dosyalarındadır.

Herkese açık bir test ortamı için `KASIKPAYI_NOINDEX=1 npm run build` bütün HTML sayfalarını ve ana sayfanın çalıştırma verisini `noindex, follow` ile hazırlar. Canlı yayın için normal `npm run build` kullanılır. Derlemeyle üretilen `dist/client/_redirects`, Cloudflare’ın statik varlık katmanında alt sayfaların eğik çizgisiz ve `index.html` adreslerini kalıcı olarak canonical URL’lerine yönlendirir.

Sorgu araştırması, rehber haritası, Google ve OpenAI kaynakları, yayın sonrası kontroller ve performans ölçümü [SEO ve GEO araştırmasında](SEO-GEO-PLAYBOOK.md) yer alıyor.
