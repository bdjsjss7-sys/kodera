# KODERA — large-scale content expansion

## Scope delivered
- 56 new full commercial route pages grouped under `/website-types` (12), `/industries` (20), `/technologies` (12), and `/seo` (12).
- 4 new catalog hub pages.
- 24 new expert articles appended to 21 existing for 45 total.
- Existing 44 solutions and 6 core services remain intact, for **100 commercial directions** in the main and extended catalogs.
- 151 new **local, page-specific SVG illustrations**: 56 for commercial landings, 24 for new journal stories, 44 for old solutions, 21 for old articles, and 6 for original services.
- Four catalog links integrated into the home page, /solutions, and mobile navigation.
- New routes and expanded journal added to sitemap when NEXT_PUBLIC_SITE_URL is configured.
- All new articles contain ten complete core chapters and an additional individual practical case section, with automatic reading time based on displayed word count.
- Build audits verify file completeness, count, image paths, duplicate slugs, and minimum editorial depth.

## Route map
| Route | Description |
|---|---|
| /website-types | website formats (12) |
| /industries | specific business sectors (20) |
| /technologies | development technologies (12) |
| /seo | SEO and search-growth disciplines (12) |
| /blog | 45 practical articles |
| /solutions | 44 original solution pages |
| /services/[slug] | 6 core services |

## Visual assets
Original vector artwork is stored under:
- `public/art/new/<group>/<slug>.svg`
- `public/art/blog/<slug>.svg`
- `public/art/legacy/solutions/<slug>.svg`
- `public/art/legacy/blog/<slug>.svg`
- `public/art/legacy/services/<slug>.svg`

The artwork is concept illustration, **not real client portfolio photography or photorealistic product render**. Existing curated photos are retained where they were previously used. These illustrations should not be presented as completed customer projects.

## Verification
1. `git pull origin main`
2. `npm run check` (content audit plus production build)
3. `npm run dev`
4. Visit one route from each of the four new catalogs, the /blog archive, and multiple old services and solutions.
5. Verify no horizontal scroll at 375px, 768px and 1280px widths. Check keyboard navigation and errors in the browser console.

GitHub Actions CI: `.github/workflows/kodera-quality.yml`

## Before public launch
- Confirm legal company details, privacy notices, genuine price lists for RU/BY, and live CRM/email delivery.
- Set `NEXT_PUBLIC_SITE_URL` to the actual canonical production origin and re-check sitemap/canonical metadata.
- Manually edit and fact-check all public editorial copy against real service offers and capabilities; static compilation does not verify claims or marketing effectiveness.
- Review the authored vector images against a real device rendering. SVG assets are original but don't replace actual project photography.
- Run performance, accessibility and live-form checks from the published domain.

No verified client portfolio, testimonial, or fixed commercial tariff is implied by the new material.
