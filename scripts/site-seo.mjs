import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { brand, origin, pages, structuredData, whatsapp } from '../src/seo.mjs';
import { blogMarkup, serviceGuides } from './blog-markup.mjs';
import { menuMarkup, menus } from '../public/runtime/kasik-payi-menu.mjs';

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function heroImage(path, page) {
  const src = new URL(page.image.url).pathname;
  const small = src.replace(/(?:-1024)?\.webp$/, '-512.webp');
  const sizes = path === '/'
    ? '(max-width: 809.98px) calc(100vw - 40px), min(39vw, 530px)'
    : page.type === 'article'
      ? '(max-width: 700px) 92vw, 73ch'
      : '(max-width: 700px) 84vw, (max-width: 1250px) 36vw, 480px';
  const medium = path === '/' ? ', /media/kasik-payi-hero-768.webp 768w' : '';
  return { src, sizes, srcset: `${small} 512w${medium}, ${src} ${page.image.width}w` };
}

function menuComparison() {
  return menus.map(({ price, dishes }, index) => {
    const label = `Menü ${index + 1}`;
    const message = encodeURIComponent(
      `Merhaba Kaşık Payı, ${label} (${dishes.join(', ')}) için teklif almak istiyorum.\nTarih ve yemek saati: \nKişi sayısı: \nTeslimat adresi: `,
    );
    return `<tr>
      <th scope="row">${label}</th>
      <td>${dishes.map(escapeHtml).join(', ')}</td>
      <td>${price} TL</td>
      <td><a href="${whatsapp}?text=${message}" aria-label="${label} için WhatsApp’tan teklif al">Teklif al</a></td>
    </tr>`;
  }).join('\n');
}

function pageHead(path, page, robots) {
  const url = origin + path;
  const tag = (kind, name, content) => `<meta ${kind}="${name}" content="${escapeHtml(content)}">`;
  const openGraph = {
    type: page.type === 'article' ? 'article' : 'website',
    locale: 'tr_TR',
    site_name: brand,
    title: page.title,
    description: page.description,
    url,
    image: page.image.url,
    'image:width': page.image.width,
    'image:height': page.image.height,
    'image:alt': page.image.alt,
  };
  const twitter = {
    card: 'summary_large_image',
    title: page.title,
    description: page.description,
    image: page.image.url,
    'image:alt': page.image.alt,
  };
  const json = JSON.stringify(structuredData(path, page)).replaceAll('<', '\\u003c');
  const hero = heroImage(path, page);

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    tag('name', 'description', page.description),
    tag('name', 'robots', robots),
    `<link rel="canonical" href="${escapeHtml(url)}">`,
    `<link rel="preload" as="image" imagesrcset="${hero.srcset}" imagesizes="${hero.sizes}" fetchpriority="high">`,
    '<link rel="icon" type="image/png" sizes="64x64" href="/media/kasik-payi-favicon.png">',
    ...Object.entries(openGraph).map(([name, content]) => tag('property', `og:${name}`, content)),
    ...Object.entries(twitter).map(([name, content]) => tag('name', `twitter:${name}`, content)),
    `<script type="application/ld+json">${json}</script>`,
  ].join('\n    ');
}

const crawlFiles = {
  '/robots.txt': {
    type: 'text/plain; charset=utf-8',
    body: `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  },
  '/sitemap.xml': {
    type: 'application/xml; charset=utf-8',
    body: [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
      ...Object.entries(pages).map(([path, { image }]) =>
        `  <url>\n    <loc>${escapeHtml(origin + path)}</loc>\n    <image:image><image:loc>${escapeHtml(image.url)}</image:loc></image:image>\n  </url>`),
      '</urlset>',
      '',
    ].join('\n'),
  },
};

// Cloudflare static assets can serve HTML before the Sites Worker is invoked.
const permanentRedirects = [
  '/index.html / 301',
  '/sitemap_index.xml /sitemap.xml 301',
  '/page-sitemap.xml /sitemap.xml 301',
  ...Object.keys(pages).filter(path => path !== '/').flatMap(path => [
    `${path.slice(0, -1)} ${path} 301`,
    `${path}index.html ${path} 301`,
  ]),
].join('\n') + '\n';

const homeFragments = ['catering', 'service-areas', 'ordering-guide', 'order', 'footer'];
const fragmentFiles = [...homeFragments, 'service-nav'];
const fragments = fragmentFiles.map(name => [name, new URL(`../src/${name}.html`, import.meta.url)]);

const homeAssets = {
  '/runtime/kasik-payi-fragments.mjs': () =>
    'export default ' + JSON.stringify(Object.fromEntries(
      fragments.filter(([name]) => homeFragments.includes(name))
        .map(([name, file]) => [name, readFileSync(file, 'utf8').trim()]),
    )) + ';\n',
  '/runtime/kasik-payi-meta.mjs': (robots) =>
    'export default ' + JSON.stringify({
      title: pages['/'].title,
      description: pages['/'].description,
      favicon: '/media/kasik-payi-favicon.png',
      robots,
      socialImage: pages['/'].image.url,
      hero: heroImage('/', pages['/']),
    }) + ';\n',
};

export const htmlInputs = Object.fromEntries(Object.keys(pages).map(path => [
  path === '/' ? 'home' : path.slice(1, -1),
  fileURLToPath(new URL(`..${path}index.html`, import.meta.url)),
]));

export function siteSeo() {
  let robots = 'index, follow, max-image-preview:large';

  return {
    name: 'kasikpayi-seo',
    configResolved(config) {
      if (config.command === 'serve' || process.env.KASIKPAYI_NOINDEX === '1') {
        robots = 'noindex, follow';
      }
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html, { filename }) {
        const path = Object.keys(pages).find(path =>
          filename === htmlInputs[path === '/' ? 'home' : path.slice(1, -1)]);
        if (!path) return html;

        html = html.replace('</head>', '<link rel="stylesheet" href="/src/mobile-whatsapp.css"></head>');
        html = html.replace('</body>', () => `
          <a class="kp-mobile-whatsapp" href="${whatsapp}" aria-label="WhatsApp’tan yaz">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.13-1.35A10 10 0 1 0 12 2Zm0 18.25a8.23 8.23 0 0 1-4.2-1.15l-.31-.19-2.98.78.8-2.9-.21-.33a8.25 8.25 0 1 1 6.9 3.79Zm4.53-6.17c-.25-.13-1.49-.74-1.72-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.13-.15.17-.26.25-.43.09-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.88-.2-.5-.41-.43-.57-.44h-.48c-.17 0-.44.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.74 4.33 3.84.61.26 1.08.42 1.45.53.61.2 1.16.17 1.6.1.49-.07 1.5-.61 1.71-1.21.21-.59.21-1.1.15-1.21-.06-.1-.23-.17-.49-.29Z"/>
            </svg>
          </a>
        </body>`);

        const page = pages[path];
        const hero = heroImage(path, page);
        const photo = `<img src="${hero.src}" srcset="${hero.srcset}" sizes="${hero.sizes}" width="${page.image.width}" height="${page.image.height}" alt="${escapeHtml(page.image.alt)}" fetchpriority="high">`;
        html = html.replace('<!-- page-head -->', () => pageHead(path, page, robots));
        if (page.type === 'article' || page.type === 'collection') {
          const { start, end } = blogMarkup(path, page, photo, html);
          html = html.replace('<!-- blog-start -->', () => start);
          html = html.replace('<!-- blog-end -->', () => end);
        }
        if (page.serviceType) {
          html = html.replace('<!-- service-guides -->', () => serviceGuides(path));
        }
        if (page.type === 'menu') {
          const total = 8 * menus[0].price + 4 * menus[2].price;
          const prices = menus.map(menu => menu.price);
          const low = Math.min(...prices).toLocaleString('tr-TR');
          const high = Math.max(...prices).toLocaleString('tr-TR');
          html = html.replace('<!-- menu-comparison -->', () => menuComparison());
          html = html.replace('<!-- menu-example-total -->', () => total.toLocaleString('tr-TR'));
          html = html.replace('<!-- menu-price-range -->', () => low === high ? low : `${low}–${high}`);
        }
        html = html.replace('<!-- service-hero-image -->', () => photo);
        if (path === '/') {
          html = html.replace('<!-- daily-menu -->', () => menuMarkup);
          // Framer marks several presentational images with a valueless `alt`.
          // Give decorative images an explicit empty alt and describe the real food photos.
          html = html.replaceAll(' alt style=', ' alt="" style=');
          const imageAlts = new Map([
            ['/media/kasik-payi-hero.webp', 'Kaşık Payı mutfağında sıcak yemek hazırlayan aşçı'],
            ['/media/kp-hikaye-tabak.webp', 'Izgara tavuk, bulgur pilavı ve Antep ezmesiyle hazırlanmış menü tabağı'],
            ['/media/kp-neden-mutfak-1740.webp', 'Mutfağımızda ızgara tavuk, pilav ve Antep ezmesi servise hazırlanıyor'],
            ['/media/kp-serit-corba-1536.webp', 'Bir kâse mercimek çorbası'],
            ['/media/kp-siparis-mutfak-2624.webp', 'Kaşık Payı mutfağında sıcak yemekler servis tezgâhında hazırlanıyor'],
            ['/media/kp-hizmet-sofra-1292.webp', 'Davet sofrasında ızgara tavuk, bulgur pilavı, salata ve mezeler'],
          ]);
          for (const [src, alt] of imageAlts) {
            const emptyAlt = `src="${src}" alt="" style=`;
            const describedAlt = `src="${src}" alt="${escapeHtml(alt)}" style=`;
            html = html.replaceAll(emptyAlt, describedAlt);
          }
          html = html.replaceAll(
            /sizes="[^"]+" src="\/media\/kasik-payi-hero\.webp"/g,
            `sizes="${hero.sizes}" srcset="${hero.srcset}" src="${hero.src}" fetchpriority="high"`,
          );
        }
        for (const [name, file] of fragments) {
          const marker = `<!-- fragment:${name} -->`;
          if (!html.includes(marker)) continue;
          const content = readFileSync(file, 'utf8').trim();
          const markup = path === '/' ? `<div class="kp-static-fragment">${content}</div>` : content;
          html = html.replace(marker, () => markup);
        }
        return html;
      },
    },
    configureServer(server) {
      server.watcher.add(fragments.map(([, file]) => fileURLToPath(file)));
      server.watcher.on('change', (file) => {
        if (fragments.some(([, fragment]) => file === fileURLToPath(fragment))) {
          server.ws.send({ type: 'full-reload' });
        }
      });

      server.middlewares.use((request, response, next) => {
        const { pathname } = new URL(request.url, origin);
        const runtimeAsset = Object.hasOwn(homeAssets, pathname) && homeAssets[pathname];
        const asset = Object.hasOwn(crawlFiles, pathname) && crawlFiles[pathname];
        if ((!asset && !runtimeAsset) || !['GET', 'HEAD'].includes(request.method)) return next();
        response.setHeader('Content-Type', runtimeAsset ? 'text/javascript; charset=utf-8' : asset.type);
        response.end(request.method === 'HEAD' ? undefined : runtimeAsset ? runtimeAsset(robots) : asset.body);
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: '_redirects', source: permanentRedirects });
      for (const [path, source] of Object.entries(homeAssets)) {
        this.emitFile({ type: 'asset', fileName: path.slice(1), source: source(robots) });
      }
      for (const [path, { body }] of Object.entries(crawlFiles)) {
        this.emitFile({ type: 'asset', fileName: path.slice(1), source: body });
      }
    },
  };
}
