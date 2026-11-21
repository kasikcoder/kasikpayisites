# Deux homepage comparison

Reference: https://deuxbakery.framer.website/  
Local preview: http://localhost:4188/

- Desktop, 1440 × 900: matched the hero typography, palette, artwork, spacing, buttons, and page height (11,054 CSS px). The rolling pin can differ between screenshots because it is continuously animated.
- Mobile, 390 × 844: matched the hero layout and copy, responsive artwork, open navigation overlay, and page height (14,365 CSS px). No horizontal overflow.
- Exercised the mobile menu, product category transitions, the FAQ expansion, and the carousel next control. The local carousel advanced to Ethan Parker, matching the reference. Scrolling to these sections triggered the original Framer motion states.
- Fixed initial missing responsive images and CMS loading by preserving complete image query strings and resolving CMS byte ranges locally. The final browser inspection found no broken loaded images or externally loaded image elements.
- The separate destination pages are outside scope. The newsletter demonstrates local feedback without transmitting email addresses. The template-control icon points to the local site icon because the original icon URL returned 404.

final result: passed
