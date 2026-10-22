# KODERA — 90 portfolio concepts and menu revision

## Implemented in GitHub
- Mega-menu rebuilt with a shared trigger/panel hover boundary. It stays open while the pointer is over a navigation button or its dropdown, and closes on leaving the area, choosing a link or pressing Escape.
- **90 portfolio entries**: 84 newly written project concepts + six earlier showcase projects, not falsely represented as delivered client projects.
- 12 sectors (7 new entries each), including commerce, corporate, landing, SaaS, healthcare, real estate, hospitality, education, finance, industrial, media and studios.
- Four levels: Старт, Бизнес, Премиум, Флагман.
- Each of the 84 new concepts has its own local **desktop and mobile SVG website mockups** (168 new local media files). Six earlier entries retain 12 prior SVG device images.
- Portfolio card search, category and difficulty filters, paginated 18-at-a-time disclosure, and 90 detail routes with desktop/mobile preview toggle.
- Homepage featured work previews, sitewide search index and sitemap updated to cover the whole portfolio.
- Automated audit checks each new concept entry and both device images.

## Important media boundary
The mockups are self-contained scalable vector **site interface concepts**, not photorealistic photos or exported screenshots of functional production websites. New art does not imply a real customer, real revenue, confirmed duration, or live functionality. Photographic images from the user or image-generation workflow would require an explicit asset-ingestion/upload process for production use. Avoid claiming otherwise.

## User acceptance tests
1. On the homepage, hover **Услуги**, move the mouse into each link, then leave the panel: it should remain open until pointer exits both the trigger and dropdown. Click a link, confirm navigation and closure.
2. Open `/works`: 90 items in total, filters and search working; use “Показать ещё” to paginate; check level filters.
3. Open `/works/noir-objects`, `/works/pulse-metrics`, `/works/aura-dent` and `/works/atelier-audio`. Toggle “Монитор / Телефон” for each.
4. Check image loading in browser Network/Console; new local SVG previews should return 200.
5. Inspect 375px, 768px and 1440px viewports for legibility, clipping and horizontal scrolling.
6. Run `npm run check` locally. GitHub Actions success is the authoritative CI status for the given commit, but not a visual browser QA certificate.
