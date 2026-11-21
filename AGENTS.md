# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

On mobile, keep the hero headline, offer and main action together before the photo. Use the photography to support the offer without splitting the reading flow.

Kaşık Payı’nın catering kartlarında referanstaki dalgalı krem paneli, malzeme dokulu çerçeveyi, ortadaki yemek görselini ve yuvarlak düğmeyi koru. Kenar dokuları için menüdeki malzemeleri gösteren net, yüksek çözünürlüklü makro görseller kullan; küçük tabak kırpmalarını büyütüp tekrar etme. Tabakları mevcut Kaşık Payı menülerinden seç; fırın ürünlerini ve örnek şablon kampanyalarını taşıma.
