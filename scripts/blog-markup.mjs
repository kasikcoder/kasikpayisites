import { blogPath, blogPosts, blogTopics } from '../src/blog.mjs';
import { aboutPath, brand, pages, whatsapp } from '../src/seo.mjs';

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

export function blogMarkup(path, page, image, articleHtml) {
  const crumb = breadcrumbs(path, page);

  if (path === blogPath) {
    const topicLinks = blogTopics.map(topic =>
      `<a href="#${topic.id}">${topic.title}</a>`).join('');
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
            <p>İlk ofis siparişinden davet sofrasına, menüyü ve teslimatı örnek planlarla hazırlayın.</p>
            <nav class="kp-blog-topics" aria-label="Rehber konuları">${topicLinks}</nav>
          </div>
          ${image}
        </section>
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
  )].slice(0, 3);
  const quoteMessage = encodeURIComponent(
    `Merhaba Kaşık Payı, “${page.label}” rehberinizi okudum. Yemek teklifi almak istiyorum.\nTarih ve yemek saati: \nKişi sayısı: \nTeslimat adresi: `,
  );

  return {
    start: `<main id="icerik" class="kp-service-shell">
      ${crumb}
      <article class="kp-blog-article" id="makale" aria-labelledby="sayfa-baslik">
        <header class="kp-blog-heading">
          <a class="kp-blog-topic-link" href="${blogPath}#${topic.id}">${topic.title}</a>
          <h1 id="sayfa-baslik">${page.label}</h1>
          <p>${page.introduction ?? page.description}</p>
          <a class="kp-blog-author" href="${aboutPath}" rel="author">${brand}</a>
        </header>
        ${image}
        <div class="kp-service-flow">`,
    end: `</div>
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
