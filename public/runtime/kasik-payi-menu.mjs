export const menus = [
  { price: 260, dishes: ['Mercimek Çorbası', 'Izgara Tavuk', 'Buhara Bulgur Pilavı', 'Antep Ezme'] },
  { price: 260, dishes: ['Mercimek Çorbası', 'Tavuk Pirzola', 'Şehriyeli Pirinç Pilavı', 'Antep Ezme'] },
  { price: 330, dishes: ['Mercimek Çorbası', 'Kıymalı Barut Tava', 'Buhara Bulgur Pilavı', 'Antep Ezme'] },
  { price: 260, dishes: ['Izgara Tavuk', 'Şehriyeli Pirinç Pilavı', 'Antep Ezme', 'İrmik Helvası'] },
];

export const menuMarkup = `<h2 id="gunluk-menu-baslik">GÜNLÜK MENÜ</h2>
<p class="kp-menu-intro">Örnek menüler ve kişi başı fiyatlar. Sipariş günündeki seçenekleri ve fiyatı teklif sırasında teyit edebilirsiniz.</p>
<div class="kp-menu-grid">${menus.map(({price, dishes}, index) => `
  <article class="kp-menu-card">
    <div class="kp-menu-art" aria-hidden="true"><span><img src="/media/kasik-payi-menu-photos.webp" alt="" width="1254" height="1254" loading="lazy" decoding="async"></span></div>
    <header><h3>Menü ${index + 1}</h3><span>${price} TL</span></header>
    <ul>${dishes.map(dish => `<li>${dish}</li>`).join('')}</ul>
  </article>`).join('')}
</div>`;
