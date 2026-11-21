import { blogPath, blogOverview, blogPosts, blogTopics } from './blog.mjs';
import { menus } from '../public/runtime/kasik-payi-menu.mjs';

export const origin = 'https://kasikpayi.com';
export const brand = 'Kaşık Payı';
export const instagram = 'https://www.instagram.com/kasikpayicatering/';
export const phone = '+905355053500';
export const whatsapp = 'https://wa.me/905355053500';
export const menuPath = '/menu/';
export const aboutPath = '/hakkimizda/';

const image = (file, width, height, alt) => ({
  url: origin + '/media/' + file,
  width,
  height,
  alt,
});

const servicePages = {
  '/': {
    label: 'Ana sayfa',
    title: 'Kaşık Payı Catering | İstanbul Ofis ve Davet Yemeği',
    description: 'Kaşık Payı, Beyoğlu mutfağından Taksim ve İstanbul’a 3–50 kişilik sıcak ofis yemeği, toplantı ve davet menüleri hazırlar. Menüyü inceleyin, WhatsApp’tan teklif alın.',
    image: image('kasik-payi-hero.webp', 1100, 733, 'Kaşık Payı mutfağında sıcak yemek hazırlanıyor'),
  },
  '/taksim-beyoglu-catering/': {
    label: 'Taksim ve Beyoğlu’nda catering',
    title: 'Taksim ve Beyoğlu Catering Teslimatı | Kaşık Payı',
    description: 'Taksim ve Beyoğlu’nda 3–50 kişilik catering. Ofis, toplantı ve davetler için menü seçeneklerini, teslimat planını ve teklif almak için gerekenleri inceleyin.',
    image: image('kp-hikaye-sofra-1024.webp', 1024, 1024, 'Izgara tavuk, pilav, çorba ve mezelerden oluşan Kaşık Payı sofrası'),
    serviceType: 'Taksim ve Beyoğlu’nda catering ve toplu yemek teslimatı',
  },
  '/ofis-yemegi/': {
    label: 'Ofis yemeği',
    title: 'Taksim ve Beyoğlu’nda Günlük Ofis Yemeği | Kaşık Payı',
    description: 'Taksim ve Beyoğlu’nda 3–50 kişilik sıcak ofis yemeği. Tek günlük veya düzenli öğle yemeği planlayın, örnek menüleri görün ve ekibiniz için teklif alın.',
    image: image('kp-rehber-menu.webp', 760, 760, 'Kaşık Payı ofis menüsünden ızgara tavuk ve bulgur pilavı'),
    serviceType: 'Günlük ve düzenli ofis yemeği teslimatı',
  },
  '/etkinlik-catering/': {
    label: 'Etkinlik catering’i',
    title: 'Beyoğlu Toplantı ve Davet Catering’i | Kaşık Payı',
    description: 'Taksim ve Beyoğlu’nda 3–50 kişilik toplantı, doğum günü ve özel davetler için catering. Menü, kişi sayısı ve teslimat planınız için WhatsApp’tan teklif alın.',
    image: image('kp-rehber-davet.webp', 760, 760, 'Kaşık Payı etkinlik sofrasında ızgara tavuk, bulgur pilavı ve mezeler'),
    serviceType: 'Toplantı, doğum günü ve özel davet catering’i',
  },
  [menuPath]: {
    label: 'Catering menüleri',
    title: 'Catering Menüleri ve Örnek Kişi Başı Fiyatlar | Kaşık Payı',
    description: 'Izgara tavuk, tavuk pirzola ve kıymalı barut tava içeren Kaşık Payı menülerini karşılaştırın. Beyoğlu ve Taksim için kişi sayınıza göre teklif alın.',
    image: image('kp-rehber-menu.webp', 760, 760, 'Izgara tavuk ve bulgur pilavından oluşan Kaşık Payı menüsü'),
    type: 'menu',
  },
  [aboutPath]: {
    label: 'Kaşık Payı hakkında',
    title: 'Kaşık Payı Hakkında | Beyoğlu Mutfağı ve İletişim',
    description: 'Kaşık Payı’nın Beyoğlu hazırlık mutfağını, 3–50 kişilik yemek hizmetini ve sipariş iletişim bilgilerini öğrenin.',
    image: image('kp-hikaye-sofra-1024.webp', 1024, 1024, 'Izgara tavuk, pilav, çorba ve mezelerden oluşan Kaşık Payı sofrası'),
    type: 'about',
  },
};

const blogPage = (entry, type) => ({
  ...entry,
  type,
  title: (entry.title ?? entry.label) + ' | ' + brand,
  image: image(entry.photo.file, entry.photo.width, entry.photo.height, entry.photo.alt),
});

export const pages = {
  ...servicePages,
  [blogPath]: blogPage(blogOverview, 'collection'),
  ...Object.fromEntries(blogPosts.map(post => [post.path, blogPage(post, 'article')])),
};

const websiteId = origin + '/#website';
const businessId = origin + '/#isletme';
const commercialServices = ['/ofis-yemegi/', '/etkinlik-catering/'];
const serviceAreas = [
  { '@type': 'Place', name: 'Taksim', containedInPlace: { '@type': 'AdministrativeArea', name: 'Beyoğlu' } },
  { '@type': 'AdministrativeArea', name: 'Beyoğlu', containedInPlace: { '@type': 'City', name: 'İstanbul' } },
  { '@type': 'City', name: 'İstanbul' },
];

export function structuredData(path, page) {
  const url = origin + path;
  const serviceId = url + '#hizmet';
  const breadcrumbId = url + '#sayfa-yolu';
  const home = path === '/';
  const article = page.type === 'article';
  const collection = page.type === 'collection';
  const menu = page.type === 'menu';
  const about = page.type === 'about';
  const menuId = origin + menuPath + '#ornek-menuler';
  const webpageId = url + '#webpage';
  const articleId = url + '#makale';
  const imageId = url + '#gorsel';
  const breadcrumbs = [
    { name: 'Ana sayfa', item: origin + '/' },
    ...(article ? [{ name: blogOverview.label, item: origin + blogPath }] : []),
    { name: page.label, item: url },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FoodEstablishment',
        '@id': businessId,
        name: brand,
        alternateName: 'Kaşıkpayı Catering',
        url: origin + '/',
        telephone: phone,
        logo: origin + '/media/kasik-payi-wordmark.webp',
        image: [pages['/'].image.url, origin + '/media/kp-hikaye-sofra.webp'],
        description: 'Beyoğlu mutfağından İstanbul’a 3–50 kişilik ofis yemekleri, toplantı ve davet menüleri hazırlayan catering işletmesi.',
        servesCuisine: ['Türk mutfağı', 'Ev yemekleri'],
        hasMenu: origin + menuPath,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Kaşık Payı yemek hizmetleri',
          itemListElement: commercialServices.map(servicePath => ({
            '@type': 'Offer',
            itemOffered: { '@id': origin + servicePath + '#hizmet' },
          })),
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Şehit Muhtar Mah. Zambak Sk. No: 8',
          addressLocality: 'Beyoğlu',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
        areaServed: serviceAreas,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: phone,
          contactType: 'sales',
          availableLanguage: 'tr',
          url: whatsapp,
        },
        sameAs: [instagram],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: origin + '/',
        name: brand,
        publisher: { '@id': businessId },
        inLanguage: 'tr',
      },
      {
        '@type': collection ? 'CollectionPage' : about ? 'AboutPage' : 'WebPage',
        '@id': webpageId,
        url,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': websiteId },
        inLanguage: 'tr',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          '@id': imageId,
          contentUrl: page.image.url,
          width: page.image.width,
          height: page.image.height,
          caption: page.image.alt,
        },
        mainEntity: { '@id': home || about ? businessId : article ? articleId : collection ? url + '#rehberler' : menu ? menuId : serviceId },
        ...(!home && { breadcrumb: { '@id': breadcrumbId } }),
      },
      ...[...new Set([...commercialServices, ...(page.serviceType ? [path] : [])])].map(servicePath => {
        const service = pages[servicePath];
        const serviceUrl = origin + servicePath;
        return {
          '@type': 'Service',
          '@id': serviceUrl + '#hizmet',
          name: service.label,
          serviceType: service.serviceType,
          description: service.description,
          url: serviceUrl,
          provider: { '@id': businessId },
          areaServed: serviceAreas,
        };
      }),
      ...(article ? [{
        '@type': 'BlogPosting',
        '@id': articleId,
        url,
        headline: page.label,
        articleSection: blogTopics.find(topic => topic.id === page.topic).title,
        description: page.description,
        inLanguage: 'tr',
        mainEntityOfPage: { '@id': webpageId },
        author: { '@type': 'Organization', '@id': businessId, name: brand, url: origin + aboutPath },
        publisher: { '@id': businessId },
        image: { '@id': imageId },
      }] : []),
      ...(menu ? [{
        '@type': 'Menu',
        '@id': menuId,
        url,
        name: 'Kaşık Payı örnek catering menüleri',
        description: page.description,
        inLanguage: 'tr',
        hasMenuSection: menus.map(({ dishes }, index) => ({
          '@type': 'MenuSection',
          name: 'Menü ' + (index + 1),
          hasMenuItem: dishes.map(name => ({ '@type': 'MenuItem', name })),
        })),
      }] : []),
      ...(collection ? [{
        '@type': 'ItemList',
        '@id': url + '#rehberler',
        itemListElement: blogTopics.flatMap(topic => blogPosts.filter(post => post.topic === topic.id)).map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: post.label,
          url: origin + post.path,
        })),
      }] : []),
      ...(!home ? [
        {
          '@type': 'BreadcrumbList',
          '@id': breadcrumbId,
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            ...crumb,
          })),
        },
      ] : []),
    ],
  };
}
