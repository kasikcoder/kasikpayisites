import { blogPath, blogPosts, blogTopics } from '../src/blog.mjs';
import { aboutPath, brand, pages, whatsapp } from '../src/seo.mjs';

const trDateFormat = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const featuredSlugs = [
  '/blog/yemek-karti-mi-ofis-yemegi-mi/',
  '/blog/catering-fiyatlari-teklif-karsilastirma/',
  '/blog/sishane-karakoy-galata-ofis-yemegi-teslimati/',
  '/blog/catering-gida-guvenligi-sicaklik-ve-hijyen-kontrolu/',
  '/blog/kucuk-ofis-yemegi/',
  '/blog/evde-nisan-soz-ve-aile-daveti-catering/',
];

function formatTrDate(isoDate) {
  return trDateFormat.format(new Date(`${isoDate}T00:00:00Z`));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function slugifyHeading(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .toLocaleLowerCase('tr-TR')
    .replaceAll('ç', 'c')
    .replaceAll('ğ', 'g')
    .replaceAll('ı', 'i')
    .replaceAll('ö', 'o')
    .replaceAll('ş', 's')
    .replaceAll('ü', 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    || 'bolum';
}

export function enhanceArticleBody(html, faqs) {
  const usedIds = new Set();
  const headings = [];
  let tableIndex = 0;

  let transformed = html.replace(/<h2(?:\s+id="([^"]+)")?>([\s\S]*?)<\/h2>/g, (match, existingId, inner) => {
    const plain = inner.replace(/<[^>]+>/g, '').trim();
    let id = existingId || slugifyHeading(plain);
    let suffix = 2;
    while (usedIds.has(id)) {
      id = `${existingId || slugifyHeading(plain)}-${suffix++}`;
    }
    usedIds.add(id);
    headings.push({ id, label: plain });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  // Wrap any bare <table> elements not already inside .kp-table-wrap for keyboard and mobile scrolling.
  transformed = transformed.replace(
    /(<div class="kp-table-wrap"[\s\S]*?<\/table>\s*<\/div>)|(<table\b[\s\S]*?<\/table>)/g,
    (match, alreadyWrapped, bareTable) => {
      if (alreadyWrapped) return alreadyWrapped;
      tableIndex += 1;
      const captionMatch = bareTable.match(/<caption(?:\s+id="([^"]+)")?>([\s\S]*?)<\/caption>/);
      let tableHtml = bareTable;
      let labelAttr = `aria-label="Tablo ${tableIndex}"`;
      if (captionMatch) {
        const capId = captionMatch[1] || `tablo-${tableIndex}`;
        if (!captionMatch[1]) {
          tableHtml = bareTable.replace('<caption>', `<caption id="${capId}">`);
        }
        labelAttr = `aria-labelledby="${capId}"`;
      }
      return `<div class="kp-table-wrap" tabindex="0" role="region" ${labelAttr}>${tableHtml}</div>`;
    },
  );

  if (faqs?.length) {
    headings.push({ id: 'sss-baslik', label: 'Sık sorulan sorular' });
  }

  const toc = headings.length >= 3
    ? `<nav class="kp-toc" aria-label="İçindekiler">
      <strong>İçindekiler</strong>
      <ol>${headings.map(({ id, label }) => `<li><a href="#${id}">${escapeHtml(label)}</a></li>`).join('')}</ol>
    </nav>`
    : '';

  const textForCount = [
    transformed.replace(/<[^>]+>/g, ' '),
    ...(faqs ?? []).flatMap(({ q, a }) => [q, a]),
  ].join(' ');
  const wordCount = textForCount.trim().split(/\s+/).filter(Boolean).length;

  return { body: transformed, toc, wordCount };
}

function faqSection(faqs) {
  if (!faqs?.length) return '';
  return `<section class="kp-blog-faq" aria-labelledby="sss-baslik">
    <h2 id="sss-baslik">Sık sorulan sorular</h2>
    ${faqs.map(({ q, a }) => `<details>
      <summary>${escapeHtml(q)}</summary>
      <p>${escapeHtml(a)}</p>
    </details>`).join('\n')}
  </section>`;
}

function breadcrumbs(path, page) {
  const blogLink = page.type === 'article'
    ? `<li><a href="${blogPath}">${pages[blogPath].label}</a></li>`
    : '';
  return `<nav class="kp-breadcrumb" aria-label="Sayfa yolu">
    <ol><li><a href="/">Ana sayfa</a></li>${blogLink}<li aria-current="page">${page.label}</li></ol>
  </nav>`;
}

function guideLinks(posts) {
  return `<ul class="kp-blog-links">
    ${posts.map(post => `<li><a href="${post.path}">${post.label}</a></li>`).join('\n')}
  </ul>`;
}

export function serviceGuides(path) {
  const topic = blogTopics.find(topic => topic.service === path);
  const posts = blogPosts.filter(post => post.topic === topic.id);
  return `<section aria-labelledby="rehber-baslik">
    <h2 id="rehber-baslik">Planlama rehberleri</h2>
    ${guideLinks(posts)}
  </section>`;
}

export function blogMarkup(path, page, image, articleHtml, extras = {}) {
  const crumb = breadcrumbs(path, page);

  if (path === blogPath) {
    const topicLinks = blogTopics.map(topic => {
      const count = blogPosts.filter(post => post.topic === topic.id).length;
      return `<a href="#${topic.id}">${topic.title} (${count})</a>`;
    }).join('');
    const featuredPosts = featuredSlugs
      .map(slug => blogPosts.find(post => post.path === slug))
      .filter(Boolean);
    const featured = `<section class="kp-blog-featured" aria-labelledby="one-cikan-baslik">
      <h2 id="one-cikan-baslik">En çok aranan rehberler</h2>
      <ul>
        ${featuredPosts.map(post => `<li>
          <a href="${post.path}"><strong>${post.label}</strong><span>${post.description}</span></a>
        </li>`).join('\n')}
      </ul>
    </section>`;
    const sections = blogTopics.map(topic => `<section id="${topic.id}" class="kp-blog-topic" aria-labelledby="${topic.id}-baslik">
      <header><h2 id="${topic.id}-baslik">${topic.title}</h2>
      <a href="${topic.service}">${pages[topic.service].label} <span aria-hidden="true">→</span></a></header>
      <ul>
        ${blogPosts.filter(post => post.topic === topic.id).map(post => `<li>
          <h3><a href="${post.path}">${post.label}</a></h3>
          <p>${post.description}</p>
        </li>`).join('\n')}
      </ul>
    </section>`).join('\n');
    return {
      start: `<main id="icerik" class="kp-service-shell">
        ${crumb}
        <section class="kp-service-hero kp-blog-hero" aria-labelledby="sayfa-baslik">
          <div>
            <h1 id="sayfa-baslik">${page.label}</h1>
            <p>İlk ofis siparişinden davet sofrasına, 2026 yemek istisnasından Beyoğlu teslimatına ${blogPosts.length} uygulamalı rehberle menünüzü planlayın.</p>
            <nav class="kp-blog-topics" aria-label="Rehber konuları">${topicLinks}</nav>
          </div>
          ${image}
        </section>
        ${featured}
        <div class="kp-blog-index" id="rehberler">${sections}</div>`,
      end: '</main>',
    };
  }

  const topic = blogTopics.find(topic => topic.id === page.topic);
  const service = pages[topic.service];
  const editorialPaths = new Set(Array.from(
    articleHtml.matchAll(/href="(\/blog\/[^"#]+\/)"/g),
    ([, href]) => href,
  ));
  const editorial = blogPosts.filter(post => post.path !== path && editorialPaths.has(post.path));
  const related = [...editorial, ...blogPosts.filter(post =>
    post.topic === topic.id && post.path !== path && !editorialPaths.has(post.path),
  )].slice(0, 4);
  const quoteMessage = encodeURIComponent(
    `Merhaba Kaşık Payı, “${page.label}” rehberinizi okudum. Yemek teklifi almak istiyorum.\nTarih ve yemek saati: \nKişi sayısı: \nTeslimat adresi: `,
  );
  const visibleDate = page.updatedAt ?? page.publishedAt;
  const dateLabel = page.publishedAt ? formatTrDate(page.publishedAt) : visibleDate ? `Güncelleme: ${formatTrDate(visibleDate)}` : '';
  const dateTag = visibleDate
    ? `<time datetime="${visibleDate}">${dateLabel}</time>`
    : '';
  const readMinutes = extras.wordCount ? Math.max(2, Math.round(extras.wordCount / 190)) : 0;
  const readTag = readMinutes ? `<span class="kp-blog-reading">~${readMinutes} dk okuma</span>` : '';

  return {
    start: `<main id="icerik" class="kp-service-shell">
      ${crumb}
      <article class="kp-blog-article" id="makale" aria-labelledby="sayfa-baslik">
        <header class="kp-blog-heading">
          <a class="kp-blog-topic-link" href="${blogPath}#${topic.id}">${topic.title}</a>
          <h1 id="sayfa-baslik">${page.label}</h1>
          <p>${page.introduction ?? page.description}</p>
          <div class="kp-blog-meta">
            <a class="kp-blog-author" href="${aboutPath}" rel="author">${brand}</a>${dateTag}${readTag}
          </div>
        </header>
        ${image}
        ${extras.toc ?? ''}
        <div class="kp-service-flow">`,
    end: `${faqSection(page.faqs)}
        </div>
      </article>
      <aside class="kp-blog-article kp-blog-next" aria-labelledby="sonraki-baslik">
        <h2 id="sonraki-baslik">Siparişinizi planlayın</h2>
        <div class="kp-service-actions">
          <a class="kp-guide-button" href="${whatsapp}?text=${quoteMessage}">WhatsApp’tan teklif al <span aria-hidden="true">→</span></a>
          <a href="/menu/">Menüleri ve örnek fiyatları gör</a>
          <a href="${topic.service}">${service.label}</a>
        </div>
        <h2>İlgili rehberler</h2>
        ${guideLinks(related)}
        <p><a href="${blogPath}#${topic.id}">Tüm ${topic.title.toLocaleLowerCase('tr-TR')} rehberleri</a></p>
      </aside>
    </main>`,
  };
}
