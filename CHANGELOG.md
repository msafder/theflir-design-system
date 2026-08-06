# CHANGELOG — THE FLIR Design System

All notable changes to this system. Newest first.

## [0.5.0] — 2026-08-05

### Added
- **Third tonal state: white-hot.** `Human Butterfly` turns out to be a literal
  heat map — the lit core blown to white, falling through #C00000, dying to
  black at the edge. Documented on GDL-06 alongside monochrome silver and
  red-mapped.
- `--flir-photo-filter-hot` (screen approximation) and `--flir-heatmap-stops`
  (the Photoshop gradient map that actually produces it:
  #000000 · #7A0000 · #C00000 · #F2B3B3 · #FFFFFF at 0/28/52/78/100%).
- `assets/source/human-butterfly-shirt.png` and `assets/source/moCover03.png`
  placed on GDL-06 and in the index assets grid. `moCover03` is now the
  monochrome-silver exemplar.

### Changed
- Merch guidance on GDL-06: the white-hot state is what makes the treatment
  printable — blown highlights and crushed blacks survive a single screen pass
  on a dark garment where a full tonal figure would not.

## [0.4.0] — 2026-08-05

### Added
- `guidelines/figure-photography.card.html` (GDL-06). Documents the band's
  longest-running visual thread as a system treatment: the **low-key chiaroscuro
  figure study** — body folded or contorted until it reads as a shape, one hard
  raking source, face concealed, everything else falling to true black.
  Covers ground, light, pose, face, dress, frame and grain; the two tonal states
  (monochrome silver, red-mapped); type placement in the black field; a do/don't
  pair; and a usage matrix by surface.
- `--flir-photo-filter-figure` — grayscale, contrast 1.28, brightness 0.82.
  Crushes shadows to true black so the form emerges with no visible edge.
- `assets/source/facebook.jpg` and `assets/source/ref-face-oculta.jpg` added to
  the reference set and the index assets grid.

### Notes
- Model releases and photographer credits are required on file before any figure
  image ships on a release, a Shopify listing or a printed run.
- Instagram removes female nudity including artistic work; every figure image
  needs an alternate crop held for @theflir.
- `Human Butterfly shirt.psd` and `moCover03.png` still need flattened exports
  before they can be placed.

## [0.3.0] — 2026-08-05

### Changed
- **Wordmark corrected to the real construction.** It is typed as one word,
  THEFLIR, in two faces at a locked 1:2 ratio — THE in Placard Condensed at 1×,
  FLIR in **Frankfurter Heavy** at 2×, shared baseline, no word space, no
  tracking adjustment. Previously implemented as a single Placard Condensed
  setting at 0.62×, which was wrong.
- `--flir-font-wordmark` split into `--flir-font-wordmark-the` and
  `--flir-font-wordmark-flir`; added `--flir-wordmark-ratio: 0.5`. The parent
  `font-size` on `.flir-wordmark` is now the FLIR size and THE derives from it.
- Frankfurter Heavy promoted from "reference only" to a system face, restricted
  to FLIR in the wordmark. Not available for headlines, body or UI.
- `guidelines/logo-usage.card.html` — construction table, supplied master
  artwork, misuse cases rewritten against the 1:2 ratio.

### Open
- Outlined SVG of the wordmark still worth producing for print and merch, where
  the fonts cannot travel with the file.

## [0.2.0] — 2026-08-05

The band's existing assets arrived. The system now sits on top of them rather
than proposing replacements.

### Changed
- **Wordmark.** The boxed mono mark from direction 1c is **withdrawn**. The
  existing lockup is now the mark: THE FLIR in Placard Condensed, THE at 62%
  of FLIR's cap height, baseline-aligned, no word space. Implemented as
  `.flir-wordmark` in `tokens/type.css`.
- **Typefaces.** `Placcond.ttf` (Placard Condensed) and `Frnkfh.ttf`
  (Frankfurter) copied from the artwork folder. Placard Condensed becomes
  `--flir-font-display` — wordmark and all headlines 48px and up. Archivo moves
  to the new `--flir-font-headline` role for UI-scale titles, where Placard
  closes up and stops reading. Frankfurter is loaded for reference only and is
  not part of the system.
- **Photography.** Texture placeholders replaced with real archive photography
  across social, web, print and the Card/Badge component cards.
- `guidelines/logo-usage.card.html` rebuilt around the real wordmark:
  construction, clear space, minimum sizes, six misuse cases.
- `guidelines/typography.card.html` updated for the three-face split.

### Added
- `assets/source/` — working set of 13 files from `THE_FLIR/Art Work` and
  `THE_FLIR/Business Card`.
- `assets/fonts/` — Placard Condensed and Frankfurter.
- Assets section on `index.html`.
- `--flir-photo-filter-native` for shots already lit red, which keep their colour.

### Open
- Placard Condensed web-embedding rights to be confirmed before theflir.com ships.
- Eight photos pulled from roughly ninety; hero selects still to be confirmed.

## [0.1.0] — 2026-08-05

Initial system. Direction **Thermal Register** (option 1c), selected from three
core-identity explorations.

### Added
- `tokens/color.css` — 13-step grey ramp, heat set (#C00000 / #E11414 / #7A0000),
  themes `ink` (default) and `chalk` (exception), grime layers (`--flir-grain`,
  `--flir-grime`, `--flir-crush`, `--flir-scanline`, `--flir-photo-filter`).
- `tokens/type.css` — Archivo variable (width + weight axes) and IBM Plex Mono,
  10→120px scale, tracking set, five type roles.
- `tokens/layout.css` — 4px space scale, rule weights, radii, motion, and the
  fixed output sizes for social and print.
- `guidelines/` — colour, typography, radii-borders, voice-tone, logo-usage cards.
- `components/core/` — Button, Card, Badge as .jsx + .prompt.md + .card.html triplets.
- `social/` — Instagram feed post (1080×1080), story (1080×1920), reel cover.
- `web/` — hero section and link-in-bio block for theflir.com.
- `print/` — Kunaki CD jacket (front + tray) and 18×24in gig poster master.
- `index.html` — preview page rendering the whole system.
- `CLAUDE.md` — project rules, including the naming rule.

### Naming
- The band is always **THE FLIR**, never "FLIR" alone. The mark is the boxed
  two-word lockup; catalogue prefix is `TF-`.

### Documented deviations
| Where | Deviation | Reason |
|---|---|---|
| `tokens/color.css` | Red text under 16px on ink uses `--flir-red-hot`, not `--flir-red` | #C00000 on #0A0A0A is ~2.4:1 and dissolves at label size |
| `tokens/layout.css` | `--flir-radius-pill` exists | Sanctioned only for the NOW PLAYING chip on web |
| `components/core/Badge` | 6px dot marker has no token | Derived from `--flir-space-1` × 1.5; deliberately square |
| `social/reel-cover` | Condensed width axis (wdth 78) | Only way to fill the 1080×1440 grid crop above 140px |
| `print/gig-poster` | Condensed axis + descriptor dropped + 6px mark rule | Read at three metres; descriptor is illegible there |
| `print/cd-jacket` | Tray card runs `chalk` against the ink default | 7pt reversed type fills in on Kunaki's stock |

### Open
- Release data (track titles, dates, prices) is placeholder.
- Kunaki trim/bleed values to be confirmed against their current template PDF.
