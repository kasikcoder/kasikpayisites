import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import { blogPath, blogPosts, blogTopics } from '../src/blog.mjs';
import { aboutPath, menuPath, origin, pages } from '../src/seo.mjs';
import { menus } from '../public/runtime/kasik-payi-menu.mjs';

const build = new URL('../dist/client/', import.meta.url);
const read = name => readFile(new URL(name, build), 'utf8');

test('built pages expose matching canonical URLs, titles and structured data in HTML', async () => {
  const servicePaths = Object.keys(pages).filter(path => pages[path].serviceType);
  const titles = new Set();
  const descriptions = new Set();

  for (const [path, page] of Object.entries(pages)) {
    const html = await read(path.slice(1) + 'index.html');
    const canonical = origin + path;

    assert.ok(!titles.has(page.title), path + ' has a unique title');
    assert.ok(!descriptions.has(page.description), path + ' has a unique description');
    titles.add(page.title);
    descriptions.add(page.description);

    assert.match(html, /<html lang="tr"/);
    assert.equal(html.match(/<title>(.*?)<\/title>/)?.[1], page.title);
    assert.deepEqual(
      [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(([, href]) => href),
      [canonical],
    );
    assert.ok(html.includes(`<link rel="alternate" hreflang="tr" href="${canonical}">`), path + ' exposes hreflang tr');
    assert.ok(html.includes(`<link rel="alternate" hreflang="x-default" href="${canonical}">`), path + ' exposes hreflang x-default');
    assert.ok(html.includes(`<link rel="alternate" type="application/rss+xml"`), path + ' links RSS feed');
    assert.equal(html.match(/<meta property="og:url" content="([^"]+)"/)?.[1], canonical);
    assert.match(html, /<meta name="robots" content="index, follow, max-image-preview:large">/);
    assert.equal(html.match(/<h1(?=[\s>])/g)?.length, 1);
    assert.match(html, /href="tel:\+905355053500"/);
    assert.doesNotMatch(html, /<!-- (?:page-head|daily-menu|fragment:|blog-start|blog-end|service-guides|service-hero-image|menu-comparison|menu-example-total|menu-price-range)|deuxbakery\.framer\.website/);

    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    const byType = Object.fromEntries(schema['@graph'].map(entity => [entity['@type'], entity]));
    assert.equal(byType.FoodEstablishment['@id'], origin + '/#isletme');
    assert.equal(byType.FoodEstablishment.address.postalCode, '34435');
    assert.ok(byType.FoodEstablishment.priceRange);
    const webpage = byType.WebPage ?? byType.CollectionPage ?? byType.AboutPage;
    assert.equal(webpage.url, canonical);
    assert.equal(webpage.description, page.description);
    assert.ok(byType.FoodEstablishment.areaServed.some(area => area.name === 'Taksim'));
    assert.equal(webpage.primaryImageOfPage.contentUrl, page.image.url);
    const [, srcset, sizes] = html.match(/rel="preload" as="image" imagesrcset="([^"]+)" imagesizes="([^"]+)"/);
    const candidates = srcset.split(', ').map(candidate => candidate.split(' ')[0]);
    assert.equal(candidates.at(-1), new URL(page.image.url).pathname);
    const hero = [...html.matchAll(/<img\s[^>]*>/g)].map(([tag]) => tag)
      .find(tag => tag.includes(`src="${candidates.at(-1)}"`) && tag.includes('fetchpriority="high"'));
    assert.ok(hero?.includes(`srcset="${srcset}"`), path + ' uses its preloaded image candidates');
    assert.ok(hero?.includes(`sizes="${sizes}"`), path + ' uses its preloaded image sizes');
    for (const candidate of candidates) await access(new URL(candidate.slice(1), build));
    const catalog = byType.FoodEstablishment.hasOfferCatalog.itemListElement;
    assert.deepEqual(catalog.map(offer => offer.itemOffered['@id']), [
      origin + '/ofis-yemegi/#hizmet',
      origin + '/etkinlik-catering/#hizmet',
    ]);
    for (const { itemOffered } of catalog) {
      const service = schema['@graph'].find(entity => entity['@id'] === itemOffered['@id']);
      assert.equal(service?.['@type'], 'Service');
      assert.equal(service.provider['@id'], byType.FoodEstablishment['@id']);
      assert.ok(html.includes(`href="${new URL(service.url).pathname}"`));
    }
    await access(new URL(new URL(page.image.url).pathname.slice(1), build));

    if (path === '/') {
      assert.match(html, /id="gunluk-menu"[\s\S]*Izgara Tavuk/);
      assert.match(html, /id="teslimat-bolgeleri"/);
      assert.match(html, /id="sik-sorulan-sorular"/);
      assert.ok(byType.FAQPage?.mainEntity.length >= 5, 'home page exposes FAQPage schema');
      assert.match(html, /href="\/#menu-olustur"/);
      assert.match(html, /id="menu-olustur"/);
      assert.doesNotMatch(html, /href="https:\/\/kasikpayi\.com\/#menu-olustur"/);
      assert.doesNotMatch(html, /SHOP NOW|Get this template|FREQUENTLY ASKED QUESTIONS/);
    } else if (path === aboutPath) {
      assert.equal(webpage.mainEntity['@id'], byType.FoodEstablishment['@id']);
      assert.equal(byType.BreadcrumbList.itemListElement.at(-1).item, canonical);
      assert.match(html, /Hazırlık mutfağımız Şehit Muhtar Mahallesi/);
    } else if (page.serviceType) {
      const service = schema['@graph'].find(entity => entity['@id'] === webpage.mainEntity['@id']);
      assert.equal(service?.['@type'], 'Service');
      assert.equal(service.url, canonical);
      assert.equal(service.provider['@id'], byType.FoodEstablishment['@id']);
      assert.equal(byType.BreadcrumbList.itemListElement.at(-1).item, canonical);
      assert.ok(byType.FAQPage?.mainEntity.length >= 3, path + ' exposes FAQPage schema');
    }

    for (const internalPath of [...servicePaths, blogPath, menuPath, aboutPath]) {
      assert.ok(html.includes(`href="${internalPath}"`), path + ' links to ' + internalPath);
    }
  }
});

test('menu comparison and quote messages reflect the same menu data as the home page', async () => {
  const html = await read('menu/index.html');
  const home = await read('index.html');
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'];
  const menu = schema.find(entity => entity['@type'] === 'Menu');
  assert.equal(schema.find(entity => entity['@type'] === 'WebPage').mainEntity['@id'], menu['@id']);
  assert.equal(schema.find(entity => entity['@type'] === 'FoodEstablishment').hasMenu, menu.url);
  assert.deepEqual(menu.hasMenuSection.map(section => section.hasMenuItem.map(item => item.name)),
    menus.map(({ dishes }) => dishes));
  assert.deepEqual(menu.hasMenuSection.map(section => section.offers?.price), menus.map(({ price }) => price));
  assert.ok(menu.hasMenuSection.every(section => section.offers?.priceCurrency === 'TRY'));
  const faq = schema.find(entity => entity['@type'] === 'FAQPage');
  assert.ok(faq?.mainEntity.length >= 3, '/menu/ exposes FAQPage schema');
  const rows = [...html.matchAll(/<tr>\s*<th scope="row">Menü \d+<\/th>([\s\S]*?)<\/tr>/g)];
  assert.equal(rows.length, menus.length);
  const homeMenu = home.split('id="gunluk-menu"')[1].split('</section>')[0];

  for (const [index, { price, dishes }] of menus.entries()) {
    const row = rows[index][1];
    const quote = new URL(row.match(/href="([^"]+)"/)[1]);
    assert.ok(row.includes(`${price} TL`));
    assert.ok(homeMenu.includes(`${price} TL`));
    for (const dish of dishes) {
      assert.ok(row.includes(dish));
      assert.ok(homeMenu.includes(dish));
      assert.ok(quote.searchParams.get('text').includes(dish));
    }
  }
  const exampleTotal = 8 * menus[0].price + 4 * menus[2].price;
  assert.ok(html.includes(`${exampleTotal.toLocaleString('tr-TR')} TL olur`));
  const prices = menus.map(menu => menu.price);
  const low = Math.min(...prices).toLocaleString('tr-TR');
  const high = Math.max(...prices).toLocaleString('tr-TR');
  const range = low === high ? low : `${low}–${high}`;
  assert.ok(html.includes(`kişi başı ${range} TL`));
});

test('canonical pages and in-page sections resolve from internal HTML links', async () => {
  const documents = new Map(await Promise.all(Object.keys(pages).map(async path => [
    path, await read(path.slice(1) + 'index.html'),
  ])));

  for (const [path, html] of documents) {
    for (const [, href] of html.matchAll(/<a\b[^>]*\shref="([/#][^"]*)"/g)) {
      const { pathname, hash } = new URL(href, origin + path);
      assert.ok(documents.has(pathname), path + ' links to missing page ' + href);
      if (hash) {
        assert.ok(documents.get(pathname).includes(`id="${decodeURIComponent(hash.slice(1))}"`),
          path + ' links to missing section ' + href);
      }
    }
  }
});

test('sitemap lists all canonical pages, robots allows AI search bots, llms.txt and RSS feed stay in sync', async () => {
  assert.equal(origin, 'https://www.kasikpayi.com');
  const [sitemap, robots, llms, feed] = await Promise.all([
    read('sitemap.xml'),
    read('robots.txt'),
    read('llms.txt'),
    read('feed.xml'),
  ]);
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
  assert.deepEqual(urls, Object.keys(pages).map(path => origin + path));
  for (const bot of ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-SearchBot', 'Google-Extended']) {
    assert.match(robots, new RegExp(`User-agent: ${bot}\\nAllow: /`));
  }
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.ok(llms.includes('# Kaşık Payı'));
  assert.ok(llms.includes('Şehit Muhtar Mah. Zambak Sk. No: 8, Beyoğlu / İstanbul'));
  assert.match(feed, /<rss version="2\.0"/);
  for (const post of blogPosts) {
    assert.ok(llms.includes(origin + post.path), 'llms.txt lists ' + post.path);
    assert.ok(feed.includes(`<link>${origin + post.path}</link>`), 'feed.xml lists ' + post.path);
  }
});

test('static host permanently redirects HTML aliases to the corresponding sitemap URLs', async () => {
  const rules = (await read('_redirects')).trim().split('\n');
  const aliases = new Map(rules.map(rule => {
    const [alias, destination, status] = rule.split(' ');
    assert.equal(status, '301');
    assert.ok(Object.hasOwn(pages, destination) || destination === '/sitemap.xml');
    assert.ok(!Object.hasOwn(pages, alias));
    return [alias, destination];
  }));
  assert.equal(aliases.size, rules.length);
  assert.equal(aliases.get('/index.html'), '/');
  assert.equal(aliases.get('/sitemap_index.xml'), '/sitemap.xml');
  assert.equal(aliases.get('/page-sitemap.xml'), '/sitemap.xml');
  await access(new URL('sitemap.xml', build));
  for (const path of Object.keys(pages)) {
    if (path === '/') continue;
    assert.equal(aliases.get(path + 'index.html'), path);
    assert.equal(aliases.get(path.slice(0, -1)), path);
  }
});


test('blog guides are linked from their service and hub and have crawlable article content', async () => {
  const hub = await read('blog/index.html');
  const list = JSON.parse(hub.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])
    ['@graph'].find(entity => entity['@type'] === 'ItemList');
  const visiblePostUrls = Array.from(hub.matchAll(/<h3><a href="(\/blog\/[^"]+)"/g), ([, path]) => origin + path);
  assert.deepEqual(list.itemListElement.map(item => item.url), visiblePostUrls);

  const serviceHtml = Object.fromEntries(await Promise.all(blogTopics.map(async topic => [
    topic.id, await read(topic.service.slice(1) + 'index.html'),
  ])));

  for (const post of blogPosts) {
    const html = await read(post.path.slice(1) + 'index.html');
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'];
    const article = graph.find(entity => entity['@type'] === 'BlogPosting');
    const page = graph.find(entity => entity['@type'] === 'WebPage');
    const breadcrumb = graph.find(entity => entity['@type'] === 'BreadcrumbList');
    assert.equal(article.headline, post.label);
    assert.equal(article['@id'], page.mainEntity['@id']);
    assert.equal(article.image['@id'], page.primaryImageOfPage['@id']);
    assert.equal(article.author['@id'], origin + '/#isletme');
    assert.equal(article.author.url, origin + aboutPath);
    assert.ok(html.includes(`href="${aboutPath}" rel="author"`));
    assert.deepEqual(breadcrumb.itemListElement.map(item => item.item), [
      origin + '/', origin + blogPath, origin + post.path,
    ]);
    assert.match(html, /<meta property="og:type" content="article">/);
    assert.match(html, /<meta property="article:section"/);
    assert.match(html, /<article class="kp-blog-article"[^>]*>[\s\S]*<h2\b[^>]*>[\s\S]*<\/article>/);
    assert.doesNotMatch(html, /<script[^>]+src="(?!https:\/\/www\.googletagmanager\.com\/gtag\/js\?)/);
    assert.ok(article.wordCount > 100, post.path + ' exposes BlogPosting.wordCount');
    assert.ok(html.includes('<nav class="kp-toc"'), post.path + ' renders Table of Contents');
    if (html.includes('<table')) {
      assert.ok(html.includes('class="kp-table-wrap"'), post.path + ' wraps tables for responsive scrolling');
    }
    assert.ok(hub.includes(`href="${post.path}"`));
    assert.ok(serviceHtml[post.topic].includes(`href="${post.path}"`));
    const quoteLink = new URL(html.match(/href="(https:\/\/wa\.me\/\d+\?text=[^"]+)"/)[1]);
    assert.ok(quoteLink.searchParams.get('text').includes(post.label));
    if (post.introduction) assert.ok(html.includes(`<p>${post.introduction}</p>`));
    const expectedDate = post.updatedAt ?? post.publishedAt;
    if (expectedDate) {
      assert.equal(article.dateModified, expectedDate);
      if (post.publishedAt) assert.equal(article.datePublished, post.publishedAt);
      assert.ok(html.includes(`<time datetime="${expectedDate}">`), post.path + ' shows matching visible date');
    }
    if (post.faqs?.length) {
      const faqSchema = graph.find(entity => entity['@type'] === 'FAQPage');
      assert.equal(faqSchema?.mainEntity.length, post.faqs.length);
      for (const { q, a } of post.faqs) {
        assert.ok(html.includes(`<summary>${q}</summary>`), post.path + ' renders FAQ question');
        assert.ok(html.includes(`<p>${a}</p>`), post.path + ' renders FAQ answer');
      }
    }

    for (const [, href] of html.matchAll(/href="(\/blog\/[^"#]*)/g)) {
      assert.ok(Object.hasOwn(pages, href), post.path + ' links to a known guide: ' + href);
    }
  }
});
