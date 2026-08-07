# CHANGELOG — THE FLIR Design System

All notable changes to this system. Newest first.

## [0.15.0] — 2026-08-06

### Added
- **`web/signup.html` — WEB-03, mailing list signup.** The email-capture block
  the system was missing. `theflir.com` shipped a working Klaviyo form ahead of
  it, so the site and the system had drifted; this brings the block in-system
  and documented, and the site now follows it rather than the reverse.
  Registered in `_ds_manifest.json`.
- Bounded by rules rather than drawn as a card, so it sits in the page's row
  structure. The submit control is the **one red fill** on the surface, and the
  card states what to do when the page has already spent its red elsewhere:
  drop the button to an `--flir-accent` outline and leave the red where it was.
- Square throughout. `--flir-radius-hair` on the input is the radius GDL-03
  grants to inputs; the button and the block are `--flir-radius-none`. Recorded
  explicitly because a pill submit button is the obvious wrong instinct here,
  and GDL-03 permits the pill only on the NOW PLAYING chip.
- The field label is visible, mono and uppercase — not a placeholder. The status
  line holds its line while empty so a response never reflows the rows beneath
  it. Its four strings are enumerated on the card.
- Copy is GDL-04 flat: what arrives and how often, no incentive and no emoji.
  The double opt-in is stated *before* the visitor submits, not after.

- **`social/og-card.html` — SOC-04, the link preview**, with
  `social/og-card.export.html` as its 1200×630 export surface. The card embeds
  the export page rather than redrawing it, so the documented preview and the
  shipped PNG cannot drift. Filed under `theflir.com`, not Instagram: it is the
  site's link preview and is never posted to a feed.
- Wordmark, one orientation line, credit line — deliberately no release title or
  date. A card naming a record has to be re-cut the day that record stops being
  current, and it never is.
- The field is `flirbackground.jpg`, already lit red, so it takes
  `--flir-photo-filter-native` rather than the grayscale pass. That field is the
  surface's one red; the type is white and grey.
- Two render deviations recorded on the card, both silent failures if missed:
  the export page must be served over **http**, because from `file://` the local
  `@font-face` TTFs are blocked and the wordmark falls back to Impact at the
  largest size it is ever seen; and `--force-device-scale-factor=1` is required
  on a Retina Mac, or Chrome writes 2400×1260 and the file stops matching the
  declared og:image dimensions.
- First **bare export surface** in the system. Every other master is a preview
  card scaled by `.shrink`; this one is authored at true output size with no
  chrome so a headless screenshot is itself the deliverable.

### Closed
- `ui_kits/theflir-com/README.md` listed "no newsletter capture" under Known
  gaps. That gap is closed and the line is gone.
- `theflir.com` had `og:image` marked TODO, pending "social/ masters". SOC-04 is
  that master; the site now ships `public/images/og.png` rendered from it.

### Notes
- The block binds to Klaviyo list `STGBxc` "THE FLIR", account `Snb8Wc`, kept
  deliberately separate from the eyeliner.media store lists. Carried on the card
  as a deviation note: the client subscription endpoint accepts the `email`
  property only — adding a `subscriptions` block to the profile payload returns
  400. That was found by live testing, not from the documentation.

## [0.14.0] — 2026-08-06

### Added
- **The suture8-01 cover artwork**, supplied at 2501×2225.
  `assets/source/suture8-01-cover.png` (square crop for listings) and
  `-cover-full.png` (full artwork). The remote Bandcamp CDN reference and its
  "not yet in the archive" caption are gone — that Open item is closed.
- **Archival colours, sampled from the cover:** `--flir-red-oxide` #9E373C
  (ground), `--flir-red-oxide-deep` #703130 (torn edge frame), `--flir-bone`
  #C9977A (the strip behind the title). Scoped deliberately: these are a
  **record of what the band already printed, not additions to the palette.**
  Use them only when reproducing or extending that artwork. The 2002 ground is a
  warmer, duller red than #C00000 and the two fight if they share a surface.
- `foundations/brand-suture8-01.html` — the cover with those colours beside the
  brand red, so the difference is visible rather than described.

### Flagged — two conflicts with the documented system
- **There is a butterfly-orchid emblem, and it is not in the system.** The cover
  carries a mark built from an orchid flower with moth or butterfly wings, set
  above the wordmark. It also appears as the badge overlay burned into several
  of the Facebook photographs — which means it was in use as a standing mark, not
  a one-off cover element. This is almost certainly the origin of the **Human
  Butterfly** title on the merch, tying the tee and poster art back to 2002.
  GDL-05 documents the wordmark as the only mark and readme.md states the system
  has no icon set; **both are now incomplete.** The emblem needs a decision:
  retire it, or bring it in as a second mark with its own clear-space and
  minimum-size rules. Do not reconstruct it — the artwork exists and should be
  extracted from the master.
- **The wordmark question is settled: `THEFLIR_LOGO_BLACK.png` is canonical for
  2026.** Confirmed by the band. GDL-05 stands as written — one word, shared
  baseline, locked 1:2 ratio. The **stacked** construction on the suture8-01 cover
  (THE small and centred above FLIR, in a box) is recorded as **historical**:
  correct for 2002, correct to reproduce on a reissue of that record, wrong for
  new work. GDL-05 now carries that distinction so nobody reads the cover as
  precedent.
- **The title is set in a script italic** that is not one of the four system
  faces, on a torn paper strip. Neither the face nor the torn-edge treatment is
  documented. If reissue or anniversary work is planned, both need identifying.

## [0.13.0] — 2026-08-06

### Added
- **The fourth track on suture8-02 is *Amethyst*.** Bandcamp's album page lists
  four tracks and names three; the band confirms *Amethyst* as the fourth and it
  has its own track page. The "track not named" placeholder is gone — the
  catalogue is now complete with no unnamed entries anywhere.
- **Per-track vocal credits**, because the catalogue was recorded by three
  different singers: *Again* — Jessica Isaac; *You Fade Away* and *Amethyst* —
  Louise Fraser. A single band-level credit would have been wrong.

### Fixed
- **The release-data block fabricated a label.** `['Label', r.labelCredit ||
  'EYELINER MEDIA']` — suture8-01 carried `labelCredit` from Discogs, so
  suture8-02 fell through to a hardcoded string, and the same site read
  "Self-released" on one record and "Eyeliner Media" on the other. Nothing
  supports that: both are self-published on Bandcamp, and Eyeliner Media handles
  merch, not these releases. Both now carry `labelCredit: 'Self-released'`, and
  `Recorded` moved into the release record too. **The fallbacks are now `—`.** A
  hardcoded name is worse than a dash because it looks like data.

### Changed
- **Personnel split into two headed sections — Members and Collaborators — and
  the per-card status labels removed.** "Former member" and "hired for" read
  harshly next to someone's photograph, and the grouping already carries the
  distinction. Each card now states what the person played on and stops:
  "Vocals from the beginning through suture8-01", "Vocals on Amethyst and You
  Fade Away", "Vocals on Again", "Live support after suture8-01, then a member
  since". `credited` still shows, because a sleeve credit is a fact worth
  keeping. Members sort current first without saying so.
- Members: Mo Safder, Sal Giuliano, Joe Ibarra, Caraleigh Baum, Louise Fraser.
  Collaborators: Jessica Isaac, Jacqui Lay, Luis Hermosillo.

### Note on tone
- The voice guidance in GDL-04 is about announcements — flat, specific, no hype.
  It is not a licence to be cold about people. Where copy describes a person
  rather than a record, state the contribution and leave the status to the
  structure around it.

## [0.12.0] — 2026-08-06

### Added
- **Five more personnel, from the band's own Facebook albums.** The Collaborators
  album labels each photograph with the person's instrument, which is the source:
  **Jacqui Lay**, **Jessica Isaac**, **Louise Fraser** (vocals), **Joe Ibarra**
  (bass, guitar), **Luis Hermosillo** (bass). The album's sixth file is Caraleigh
  Baum, who was already a sleeve credit — so the total is **eight people**, not
  nine. Which release each collaborator played on is not documented
  anywhere, so the block marks them "Collaborator" rather than inventing a
  credit; the three on the suture8-01 sleeve read "Credited · suture8-01".
- `assets/people/` (6 portraits) and `assets/live/` (22 live and studio frames)
  copied from `THE_FLIR/Art Work/facebook/photo_albums/`.
- Portraits take an optional per-person `filter`. Two are lit red — Jessica Isaac
  under a red wash, Luis Hermosillo under a stage rig — and the grayscale pass
  crushes both to solid black, so they use `--flir-photo-filter-native`. This is
  the documented exception working as written: shots already lit red *are* the
  palette.

### Changed
- **Membership and credit are now two separate facts.** Joe Ibarra is a
  long-standing main member who is not on the 2002 sleeve because he arrived
  after it: live support first, then an official member, and one ever since.
  Merging the two would either erase him from the band or invent a credit. `member` is a standing role;
  `credited` is a fact about one record. The personnel block sorts members first
  and labels them "Member" or "Member · credited suture8-01"; everyone else reads
  "Collaborator".

### Notes
- **The Facebook photographs top out at 604px** and are display-size only. Not
  usable for print or a full-bleed hero; an 18×24in poster at 150dpi needs
  2700×3600. The hero stays on the larger archive scans until camera originals
  arrive.
- **Several carry a burned-in THE FLIR wordmark**, and a few a butterfly badge
  overlay. Both conflict with the rule that the type layer sits above the image
  and never duplicates the mark. Un-watermarked frames were chosen for the
  portraits.
- Louise Fraser's portrait is a figure study — arms crossed over the chest, high
  contrast, mid-torso crop. It sits squarely with GDL-06 and is not explicit.
  Worth holding an alternate crop for `@theflir` anyway, since Instagram's
  automated review is unreliable on figure work of this kind.

## [0.11.0] — 2026-08-06

### Changed
- **The catalogue adopts the `suture8` series.** This resolves the flag raised
  in 0.10.0: the 2002 CD physically shipped as `suture8-01`, and that is now the
  scheme. The `TF-` prefix was a system invention and is **retired** — it is
  gone from `CLAUDE.md`, both UI kits, the Card and Badge component docs and
  cards, the Instagram feed-post master, the CD jacket master, the Instagram
  template, `web/hero.html`, `guidelines/logo-usage.card.html` and
  `foundations/type-data.html`. Entries above this line in this file keep their
  original `TF-` wording: they are a record of what was true when written.
  - `suture8-01` — *Please, Please, Please*, 2002
  - `suture8-02` — *Singles (Internet Only)*, 2010
  - `suture8-M01` / `suture8-M02` — merch
  - `suture8-02-CD` — the disc
- The release page drops its separate "Pressing" row. Catalogue and pressing
  number are now the same thing, which was the point of adopting the series.

### Fixed
- **The cart count was an unexamined third red fill.** Sticky chrome, so once
  anything was in the cart it put a second red on every screen — including the
  collection grid deliberately stripped of red to satisfy the repeating-list
  reading. Now takes the `solid` treatment. Rule 3 gains a fourth reading:
  sticky chrome never carries a red fill.
- `assets/source/tf-001-cover.png` renamed `suture8-02-cover.png` — the filename
  encoded the retired prefix *and* the wrong number.
- The two Human Butterfly entries are titled by format
  (`— T-shirt` / `— Mini poster`). **They share one image on purpose:** the
  printed artwork is identical on both, confirmed by the band. The shared file is
  correct, not a placeholder.

### Added
- **Human Butterfly mini poster** (`suture8-M02`) — same heat-map artwork as the
  shirt, short run, **also out of production.** No price was ever recorded, so
  the field is left empty rather than guessed. The shop now carries one buyable
  item and two archive entries.

## [0.10.0] — 2026-08-06

### Added
- **AllMusic.** Two 2002 compilation credits the streaming pages miss —
  *Test Tones, Vol. 2* and *12 Tales*. Neither page names the track, so that
  field renders "track not named" rather than a guess. Also confirms the band
  active from 2000, filed under Electronic, self-released.

### Added (Discogs)
- ***12 Tales*** fully documented from Discogs release 509352: Instinct Records
  INS594-2, CD digibook, US, 12 February 2002. THE FLIR is **track 3** with
  **"Lick"**, 4:20, produced and written by Mo Safder. The compilation rows now
  carry label, track position and runtime where they are known.
- The company on that record is worth recording: Rasputina, Cranes, The
  Creatures, The Legendary Pink Dots, Miranda Sex Garden, Devics, and Violet
  Indiana — Robin Guthrie of Cocteau Twins, who is already named as a sound
  reference in `CLAUDE.md`. The ethereal/goth placement is documented, not
  aspirational.

- ***Test Tones Volume 02*** documented from Discogs release 1088461:
  Clairecords `fern 036`, CD sampler, US, **2003**, limited to 1000 copies.
  THE FLIR is **track 10** with **"Golden"**, 3:48. Styles listed as lo-fi,
  post-rock, indie rock and **shoegaze** — the second reference in `CLAUDE.md`
  confirmed by a pressing.
- **The catalogue now has no unnamed tracks.** Every appearance carries a title,
  a position and a runtime.

- ***Please, Please, Please* documented in full** from Discogs release 2095405.
  CD, EP, US, 2002, self-released. Track times: *Golden* 3:48, *Phere* 4:48,
  *Ugli* 3:52, *Lick* 4:14, *Naked* 2:49 — 19:31 total. Discogs files the styles
  as **trip hop** and **ethereal**, which is `CLAUDE.md`'s sound description
  verbatim.
- **Personnel, for the first time.** Caraleigh Baum — vocals. Mo Safder —
  guitar, keyboards, mixing. Sal Giuliano — bass, keyboards. Loops and
  programming by both. Produced by THE FLIR. The release page now carries a
  Personnel block; `mo.gif` and `sal.gif` in the archive are these two.

- **Personnel block on the home page**, built from the TF-001 Discogs credits
  and the AllMusic writing credits. Roles only — no biography exists in any
  source, so none is written. Mo Safder is credited producer and composer on
  *12 Tales* and composer on *Static Waves 3*; Discogs describes him as
  guitarist for the band.

- `assets/source/mo-safder-live.jpg` — supplied live photograph, placed on the
  personnel block under `--flir-photo-filter-corbijn` and `--flir-grain-hard`.
  The original is lit green and magenta by the venue rig, which is the exact
  case `--flir-photo-filter` was written for: desaturating to the grey ramp is
  what makes a folder of unrelated shots read as one body of work. The other two
  members show a blank field rather than a stand-in face.

### Flagged
- **The pressed catalogue number is `suture8-01`, not `TF-001`.** `CLAUDE.md`
  sets `TF-` as the catalogue prefix, and that stands as the going-forward
  scheme, but the 2002 CD physically shipped as `suture8-01`. The release page
  now shows both — Catalogue `TF-001`, Pressing `suture8-01` — rather than
  overwriting the historical fact or silently contradicting the project rule.
  **This needs a decision:** keep TF- for new work, or adopt the suture8 series.

### Corrected
- *Test Tones* dated **2003**, not 2002. AllMusic says 2002; Discogs carries the
  catalogue number, pressing and run size, so Discogs wins. Where two sources
  disagree on a fact, the one holding the physical detail is preferred.

### Settled
- ***Please, Please, Please* is an EP.** Bandcamp lists it as an album; Spotify,
  Apple Music and AllMusic all file it under Singles & EPs. Three sources to
  one — the system says EP, and `format` reads `EP · Digital`.
- **Spotify.** Artist page read into the Music screen and Contact: 205 monthly
  listeners, 325 followers, and the play counts — *Again* 18,850, *Phere*
  12,387, *Lick* 10,814, *Golden* 9,335, *Ugli* 4,963. Stamped with the date
  they were read, because they drift. Spotify files *Please, Please, Please* as
  an EP.
- **Apple Music.** Four compilation appearances read from the artist page —
  *Blind Dumb Deaf* (Static Waves 5, 2016), *Golden (Electro Mix)* (Static
  Waves 3, 2014), *It Didn't Happen* (Static Waves 2, 2013), *Again* (Static
  Waves, 2012). Three of those tracks exist nowhere else in the catalogue.
  Listed on the Music screen and linked from Contact.

### Changed
- **The one-red rule now states that it counts fills.** Red text
  (`--flir-accent-text`) is exempt: it exists because `#C00000` dissolves at
  label size on ink, and a link set in it is not competing for the eye the way a
  fill is. Third reading added: a `hot` Badge and a `primary` Button cannot
  share a surface — where a page has a primary action, the status chip is
  `outline`.
- Release detail page: status chip moved from `hot` to `outline` so the
  Bandcamp CTA is the surface's one red fill.

## [0.9.1] — 2026-08-06

### Changed
- **Human Butterfly tee is out of production and no longer available.** The
  product page becomes an archive entry — no price, no size picker, no add to
  cart, and a plain statement that the run is finished and will not be
  reprinted. It is not deleted: the artwork is the exemplar
  `--flir-photo-filter-hot` and `--flir-heatmap-stops` were derived from, and
  it is part of the record.
- Discontinued items now sort after buyable ones in the collection, dim their
  artwork, drop the price row, and swap the action from View to Archive. This is
  the pattern for anything that goes out of print.

## [0.9.0] — 2026-08-06

### Added
- **TF-001 · *Please, Please, Please*** — 01 September 2002, five tracks
  (*Golden*, *Phere*, *Ugli*, *Lick*, *Naked*), from theflir.bandcamp.com.

### Changed
- **Catalogue renumbered chronologically.** *Singles (Internet Only)* moves from
  TF-001 to **TF-002**; its CD SKU becomes `TF-002-CD`. TF-001 is now the 2002
  record.
- The site kit routes on release id rather than a single `release` page, so the
  discography scales past one record. Home shows the latest release by date.
- Discography grid follows the repeating-list reading of the one-red rule:
  `ghost` action, no status chip, `mediaFilter="none"` so covers keep colour.

### Open
- TF-001's cover art is not in the local archive. It is served from Bandcamp's
  CDN and the release page says so in plain type. It needs downloading into
  `assets/source/` — a remote image does not survive an offline export and does
  not render in preview captures.
- Whether TF-001/TF-002 should follow recording date or Bandcamp upload order is
  worth confirming; chronological was assumed.

## [0.8.0] — 2026-08-06

### Added
- `ui_kits/eyeliner-shop/` — THE FLIR collection inside the Eyeliner Media
  store: collection grid, product page with size and sold-out state, and a cart
  drawer. Two products, both real as artwork: the Human Butterfly tee (the heat
  map `--flir-photo-filter-hot` was derived from) and the Kunaki CD.
- `Card` gained a `mediaFilter` prop. Card hardcoded `--flir-photo-filter` on
  its media, which is right for photography and wrong for artwork that *is* the
  palette. `mediaFilter="none"` is now how a release cover or a heat-map print
  keeps its colour.

### Notes
- **The storefront chrome is a placeholder.** It belongs to Eyeliner Media's
  system, and `msafder/eyeliner.media-design-system` was not readable (409 on
  its tree). The chrome here is deliberately opinion-free and must be replaced
  with the real one before this reaches a theme.
- **One red per surface, applied to a grid.** A product list with a red status
  chip and a red button on every tile breaks the rule immediately. Resolution:
  in a repeating list the action is `ghost` and availability moves into the data
  footer; red is reserved for the page's single primary action. This is now the
  documented reading of the rule for repeating content.
- **An overlay does not create a new surface.** Opening the cart drawer put two
  `#C00000` fills on screen — Add to cart behind the overlay, Checkout in front
  of it. `--flir-overlay` at 0.86 dims a saturated red, it does not remove it.
  Resolution: while a drawer or modal carrying a primary action is open, the
  underlying primary steps down to `ghost`. This applies to any modal surface,
  not just the cart.
- Merch pricing is not set. Figures are placeholders and the collection page
  says so in plain type.

## [0.7.0] — 2026-08-06

### Added
- **GDL-07 Lens & Grain.** The band named Anton Corbijn's high-contrast grain
  and wide-angle distortion as the reference. The card separates them: grain is
  a render decision and now a token; distortion is a shooting decision with a
  written specification (24–35mm, subject close, verticals converging, horizon
  high, limbs stretched at the frame edge) and deliberately no token.
- `--flir-photo-filter-corbijn` — grayscale, contrast 1.42, brightness 0.90.
- `--flir-grain-hard` — 2px, roughly 3× the density of `--flir-grain`.
- `ui_kits/theflir-com/` — a clickable five-screen recreation: home, music,
  release detail, live, contact. Composes Button, Card and Badge from the
  bundle; re-implements nothing.
- `assets/source/tf-001-cover.png` — square crop of the band's banner artwork,
  standing in for release art the archive does not contain.
- `foundations/brand-lens-grain.html`.

### Changed
- Release and show data across the site kit is now **real**, read from
  theflir.bandcamp.com and from the flyer scans in the archive. Where data does
  not exist — upcoming dates, venue names on some flyers — the screen shows an
  empty state or a blank field rather than a placeholder row.
- `readme.md` records that `theflir.com` currently redirects to the dormant
  Facebook page, and that Bandcamp is the canonical catalogue source.

- `ui_kits/theflir-com/mobile.html` and `site.css` — the site kit is now
  responsive off one layout sheet with a single breakpoint at 720px. Layout only
  lives there; colour, rule weight and family still come from tokens. The
  breakpoint is driven by a `.narrow` class rather than a bare media query so
  the phone view renders correctly inside a preview frame of any width.

### Fixed
- Band formation year corrected to 2000 — `Est. MM`, and the archive caption
  now reads 2000–2006. It previously read MMV, inferred from the earliest flyer.

### Notes
- Wide-angle distortion cannot be added in CSS honestly. The archive photographs
  are what they are; GDL-07 is written for the next shoot, not this one.
- On phone the Bandcamp link leaves the header. It is already the primary action
  in the footer and on every release, and the header cannot carry five items at
  430px without the nav collapsing.

## [0.6.0] — 2026-08-06

Ported into a live, compiling design system. No visual decisions were changed —
this release is about making the system consumable.

### Added
- `styles.css` at the project root — the single global entry point consumers
  link. Import lines only; reaches all three token files and both `@font-face`
  declarations.
- `.d.ts` props contracts for `Button`, `Card` and `Badge`. A component without
  one has no public API; these are now the contract.
- `foundations/` — 21 small specimen cards across Colors, Type, Spacing and
  Brand. Split at the sub-concept level (grey ramp separate from heat, display
  type separate from body) so each reads at a glance.
- `templates/gig-poster/` and `templates/instagram-post/` — copyable starting
  folders, editable per release without touching the system.
- `thumbnail.html`, `SKILL.md`, `github.md`.
- `assets/logo/THEFLIR_LOGO_BLACK.png` — the supplied master, promoted out of
  `uploads/` into the asset tree.

### Changed
- Component preview cards rebuilt against the compiled bundle rather than
  loading the `.jsx` directly, and reduced to dense state grids.
- All guideline, social, web and print files tagged for the system index.
- Unclassifiable tokens (gradients, filters, easings, axis values) annotated
  `/* @kind other */`. No values changed.
- `readme.md` rewritten with Content Fundamentals, Visual Foundations,
  Iconography and a full index.

### Fixed
- `Card` content column was `align-items: stretch` by inheritance, which blew
  any `Button` dropped into a card to full width and contradicted Button's
  documented inline sizing. Now `flex-start`.

### Notes
- **Iconography: there is no icon set in the source material and none was
  invented.** Typographic marks, the 6px square dot and rule weight carry the
  job. Lucide at 1.5px stroke is nominated as the substitution if icons ever
  become necessary — documented as a substitution, not an inheritance.
- Font embedding rights confirmed by the band; Placard Condensed and
  Frankfurter now ship for web use.

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
