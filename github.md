repo: msafder/theflir-design-system
branch: main
local clone: /Users/msafder/Projects/theflir-design-system

## Last sync
date: 2026-08-06T04:15:00Z

### Updated in this project
- Imported tokens, components, guidelines, social/web/print surfaces and the full asset set from `main`.
- Added the root `styles.css` entry point so the system compiles as a live design system.
- Added GDL-07 Lens & Grain, two UI kits (theflir.com, Eyeliner Media shop) and two copyable templates.
- Release, show and product data replaced with real values from theflir.bandcamp.com and the local archive.
- Catalogue cross-checked against Bandcamp, Apple Music, Spotify, AllMusic and Discogs: full track times, personnel and six compilation appearances.
- Catalogue series changed to `suture8-` (the number the 2002 CD shipped with); the invented `TF-` prefix is retired across all surfaces.

## Screen map
| Screen / card | Built from |
|---|---|
| `foundations/color-*.html` | `tokens/color.css` |
| `foundations/type-*.html` | `tokens/type.css` |
| `foundations/space-scale.html`, `borders-rules.html`, `radii.html`, `motion.html` | `tokens/layout.css` |
| `foundations/brand-*.html` | `assets/logo/`, `assets/source/`, `tokens/color.css` |
| `components/core/*.card.html` | `components/core/Button.jsx`, `Card.jsx`, `Badge.jsx` |
| `guidelines/*.card.html` | repo `guidelines/` (imported as-is) |
| `social/`, `web/`, `print/` | repo `social/`, `web/`, `print/` (imported as-is) |
| `thumbnail.html` | `assets/logo/THEFLIR_LOGO_BLACK.png`, `tokens/color.css` |
| `guidelines/lens-grain.card.html` (GDL-07) | authored here — not in the repo |
| `ui_kits/theflir-com/` | authored here; content from theflir.bandcamp.com and `THE_FLIR/Art Work/Flyers` |
| `ui_kits/eyeliner-shop/` | authored here; art from `assets/source/`. Chrome is a placeholder — `msafder/eyeliner.media-design-system` returned 409. |
| `templates/gig-poster/`, `templates/instagram-post/` | authored here — not in the repo |

## Sync history

### 2026-08-06T01:43:49Z
- Initial import of `main` at v0.5.0: tokens, three components, six guideline cards, social/web/print masters, asset set.
- Added `.d.ts` props contracts for Button, Card and Badge; rewired their preview cards onto the compiled bundle.
- Added 21 foundation specimen cards under `foundations/` and a project thumbnail.
