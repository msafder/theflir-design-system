# THE FLIR — Design System 2026

The visual identity system for **THE FLIR**, an independent band based in Los Angeles.
Direction: **Thermal Register**.

> The band is always written **THE FLIR**. Never "FLIR" alone — that is an unrelated
> business (thermal imaging hardware). Catalogue prefix is `suture8-`.

The system exists so that everything the band ships — an Instagram post, a CD
jacket, a gig poster, the landing page — reads as one body of work made by one
hand, without anyone having to redecide the palette each time.

---

## Sources

Everything here is derived from material the band supplied. Nothing was invented
where a source existed.

| Source | What it gave |
|---|---|
| `https://github.com/msafder/theflir-design-system` (branch `main`) | The v0.5.0 first pass: tokens, three components, six guideline cards, social/web/print masters. Local clone at `/Users/msafder/Projects/theflir-design-system`. |
| `THE_FLIR/` local archive | ~90 photographs, flyers 2005–2006, DB Nelson figure series, MARK II cover artwork, business card PSDs, band photo, Human Butterfly shirt art. |
| `THE_FLIR/Business Card/Fonts/` | `Placcond.ttf` (Placard Condensed), `Frnkfh.ttf` (Frankfurter Heavy) — the band's actual faces. |
| `THE_FLIR/Art Work/LOGO/THEFLIR_LOGO_BLACK.png` | The supplied wordmark master. |
| `https://github.com/msafder/eyeliner.media-design-system` | Structural convention this repo mirrors (tokens / guidelines / components / index). **Not readable** — the API returned 409 on its tree. The storefront chrome in `ui_kits/eyeliner-shop/` is a placeholder because of this. |
| `https://theflir.bandcamp.com/` | The catalogue — suture8-01 and suture8-02. |
| `https://music.apple.com/us/artist/the-flir/53854855` | Genre (Electronic), the *Static Waves* appearances. |
| `https://open.spotify.com/artist/31VcyCiOGkU3WhtshNYZmq` | Listener counts and play counts, read 06.08.26. |
| `https://www.allmusic.com/artist/the-flir-mn0000066502` | The catalogue of record. Active 2000s, self-released, and the two 2002 compilations the streaming pages miss. |
| `https://www.discogs.com/release/509352-Various-12-Tales` | *12 Tales* in full — label, catalogue number, track position, runtime, credits. |
| `https://www.discogs.com/release/1088461-Various-Test-Tones-Volume-02` | *Test Tones Volume 02* in full, and the corrected 2003 date. |
| `https://www.discogs.com/release/2095405-The-Flir-Please-Please-Please` | suture8-01 in full — catalogue number, track times, styles, and the personnel. |
| `assets/source/mo-safder-live.jpg` | Supplied live photograph. Green/magenta venue lighting — the native example of why the grey ramp exists. |
| `THE_FLIR/Art Work/facebook/photo_albums/` | 28 photographs across three albums — Mo Safder, Sal Giuliano, Collaborators. The Collaborators filenames are the source for six personnel names and their instruments. Copied into `assets/people/` and `assets/live/`. |
| `https://www.discogs.com/artist/354081-Mo-Safder` · `https://www.allmusic.com/artist/mo-safder-mn0001434354` | Writing and production credits; guitarist for the band. |

The reader is not assumed to have access to any of these. Read `github.md` for
the sync record, and explore the repositories above directly if you can — they
carry more context than any summary of them will.

**Reference points the band named:** Anton Corbijn is the primary visual
reference, and specifically two things — the **high-contrast grain** and the
**wide-angle distortion**. Those are two different decisions made at two
different moments, and the system treats them separately: grain is a token,
distortion is a shooting specification. See GDL-07. The Official Recoil site
("Shunt") supplies the layering logic — clean type over a dirty image. Sound:
trip hop, shoegaze, goth, ethereal — Cocteau Twins, Depeche Mode, Massive
Attack, The Smiths.

**Where it gets used.** Instagram `@theflir` is the live surface and the one
being actively built — the Facebook page (~600 members) is dormant and its media
is being migrated. `theflir.com` is owned but currently **redirects to that
Facebook page**; replacing that redirect is the point of the `ui_kits/theflir-com/`
kit. Releases go out through **theflir.bandcamp.com**, which is the canonical
source for the catalogue. Then merch through eyeliner.media on Shopify, Kunaki CD
jackets, and gig posters. New music is in progress; the system is being put in
place ahead of it.

**Personnel.** Eight people appear in the record, and the system tracks two
different facts about them separately.

**Members** — a standing role in the band: **Mo Safder** (guitar, keyboards,
loops, programming, mixing), **Sal Giuliano** (bass, keyboards, loops,
programming), **Caraleigh Baum** (vocals) and **Joe Ibarra** (bass, guitar).

**Credited on suture8-01** — a fact about one 2002 record: Mo Safder, Sal
Giuliano, Caraleigh Baum.

Joe Ibarra is a long-standing main member who does not appear on the 2002 sleeve
because he arrived after it — he supported the band live first, then joined as an
official member, and has been one since. Membership and credit are not the same
thing and the site does not merge them: the sleeve is a snapshot of 2002, not a
description of the band. The remaining
four — **Jacqui Lay**, **Jessica Isaac**, **Louise Fraser** (vocals) and **Luis
Hermosillo** (bass) — are documented as collaborators by the band's own Facebook
album, which labels each photograph with the instrument. Which release each
played on is not recorded anywhere, so the system says collaborator and stops
there rather than inventing a credit.

**Catalogue as it stands.** Two releases, both on Bandcamp. Catalogue numbers
run in chronological order:

- **suture8-01 · *Please, Please, Please*** — an **EP**, CD, US, 2002,
  self-released. Five tracks, 19:31: *Golden* (3:48),
  *Phere* (4:48), *Ugli* (3:52), *Lick* (4:14), *Naked* (2:49). Discogs files
  the styles as **trip hop** and **ethereal**. Personnel: **Caraleigh Baum**
  vocals; **Mo Safder** guitar, keyboards, mixing; **Sal Giuliano** bass,
  keyboards; loops and programming by both; produced by THE FLIR.

  > **Settled.** The catalogue runs on the **suture8 series** — the number the
  > 2002 CD actually shipped with. The earlier `TF-` prefix was a system
  > invention and is retired. Merch runs `suture8-M01`, `suture8-M02`; the disc
  > is `suture8-02-CD`.
- **suture8-02 · *Singles (Internet Only)*** — 14 February 2010, four tracks:
  *Again* (vocals Jessica Isaac), *Marea*, *You Fade Away* and *Amethyst* (both
  vocals Louise Fraser). Bandcamp's album page names only three of the four;
  *Amethyst* has its own track page and the band confirms it as the fourth.

Plus six compilation appearances: the *Static Waves* series (2012, 2013, 2014,
2016), three of which carry tracks that exist nowhere else — *Blind Dumb Deaf*,
*It Didn't Happen*, *Golden (Electro Mix)* — and two 2002 compilations. ***12 Tales*** is
documented in full: Instinct Records INS594-2, CD digibook, 12 February 2002,
THE FLIR at **track 3** with **"Lick"** (4:20), produced and written by Mo
Safder. ***Test Tones Volume 02*** is equally documented: Clairecords `fern 036`, CD
sampler, 2003, limited to 1000 copies, THE FLIR at **track 10** with
**"Golden"** (3:48). AllMusic dates it 2002; Discogs carries the catalogue
number and run size, so 2003 stands — where sources disagree, the one holding
the physical detail wins.

**The company is worth recording.** *12 Tales* places THE FLIR alongside
Rasputina, Cranes, The Creatures, The Legendary Pink Dots, Miranda Sex Garden,
Devics and Violet Indiana — the last being Robin Guthrie of Cocteau Twins, who
`CLAUDE.md` already names as a sound reference. *Test Tones Volume 02* is a
Clairecords shoegaze sampler, filed under lo-fi, post-rock, indie rock and
shoegaze. Both halves of the stated direction — ethereal/goth and shoegaze —
are documented by pressings, not aspirational.

Both Apple Music and AllMusic file the band under **Electronic**, active from
2000. Spotify reports 205 monthly listeners and 325 followers, with *Again* the
most-played track at 18,850 — it appears on both TF-002 and the 2012 *Static
Waves*, making it the band's widest-travelling piece of music.

Nothing else is scheduled. Anywhere the system shows release or date data it
uses these values, or an empty state; it does not invent rows.

---

## CONTENT FUNDAMENTALS

**The band writes like an instrument logging a reading.** Flat, specific,
unembellished. An announcement states what and when, and stops.

- **Person.** Neither "I" nor "we" appears in announcements. The band is the
  subject of the sentence, not the speaker — `NEW SINGLE · 14 MARCH`, not
  "we're releasing a new single". First person is permitted only in a reply to
  someone, never in a post.
- **Case.** ALL CAPS for labels, dates, track lists, badges, credits. Sentence
  case for prose. **Title case is never used.**
- **No hype.** No "biggest, boldest", no "finally", no "can't wait", no
  exclamation marks. If a sentence would survive being read aloud in a monotone,
  it passes.
- **Emoji: never.** Not in captions, not in the bio, not in merch descriptions.
- **Dates.** `14 MARCH` in prose; `22.05.26` in data rows. Never "Fri Mar 14th".
- **Durations.** Always zero-padded, always mono: `04:12` for a track, `41:22`
  for a record.
- **Separator.** Middle dot with spaces — `LP 01 · 2026 · EYELINER MEDIA`. Not a
  slash, not a pipe, not an en dash.
- **Credit line.** `THE FLIR · EYELINER MEDIA · MMXXVI` appears once per
  artefact, as the smallest type on the surface.
- **Numbers.** Roman for years on artefacts (`MMXXVI`), Arabic everywhere data
  is scanned.

Examples that pass:

```
NEW SINGLE · 14 MARCH

DEAD AIR BETWEEN TWO SIGNALS
LP 01 · 09 TRACKS · 41:22

LONDON · MOTH CLUB · 22 MAY
DOORS 20:00
```

Full detail and the do/don't pair: `guidelines/voice-tone.card.html`.

---

## VISUAL FOUNDATIONS

**The governing idea.** The palette is a temperature scale. Grey is the
instrument; red is heat. Red never decorates — it marks the single hottest
element on a surface, and there is only ever one per view. Two reds in one view
is a bug.

**Colour.** A measured 13-step grey ramp, deliberately uneven at the ends so
near-black and near-white both stay usable. Three reds: `#C00000` (brand, locked),
`#E11414` (hover, press, and small text on black — `#C00000` on `#0A0A0A` is
~2.4:1 and dissolves), `#7A0000` (large flat fills behind white text). Two themes:
**ink** (dark) is the default and what ships; **chalk** (light) is the exception,
for print inserts, jacket interiors, light garments and anything that must
survive photocopying.

> **The wordmark is settled.** `assets/logo/THEFLIR_LOGO_BLACK.png` is the
> canonical reference for 2026 — one word on a shared baseline at a locked 1:2
> ratio, as documented in GDL-05. The **stacked** construction on the suture8-01
> cover (THE small and centred above FLIR, in a box) is **historical**: correct
> for 2002, correct to reproduce on a reissue of that record, and not to be used
> for new work. Two constructions exist; only one is current.
>
> Still open: the cover title is set in a **script italic on a torn paper strip**,
> and neither the face nor the treatment is in the system. Both would need
> identifying before reissue or anniversary work.

**Type.** Four faces, each with one job. The wordmark is typed as one word,
THEFLIR, in two faces at a locked 1:2 ratio — THE in Placard Condensed at 1×,
FLIR in Frankfurter Heavy at 2×, shared baseline, no word space, no tracking
adjustment. Placard Condensed carries display at 48px and up; below that it
closes up and stops reading, so Archivo Wide 700 takes UI-scale titles. Archivo
Normal 400 carries all body copy. IBM Plex Mono carries anything that reads as
instrument output — track lists, timestamps, catalogue numbers, credits, micro
labels. Everything uppercase is tracked; nothing lowercase is.

**Spacing.** 4px base, ten steps, 12-column grid, 1200px page max.

**Corners.** Nothing is rounded. A thermal instrument has no soft corners and
neither does this brand. `--flir-radius-pill` exists for exactly one case — the
NOW PLAYING chip on web, where a pill is the established platform signal for
live state — and is documented as a deviation.

**Cards.** A square framed block: 1px rule in `--flir-line`, `--flir-surface`
background, a mono index line in the header, a display title, an optional
tabular data footer. No shadow, no radius, no gradient. An accented card swaps
its top border for a 4px red rule; one per view.

**Shadows and elevation.** There are none. `--flir-shadow-none` is a real token
so components can state the intent. Depth is expressed by surface value and rule
weight only. Borders do the work shadows normally would: hair 1px, mark 2px,
heavy 4px.

**Backgrounds.** Never a flat brand gradient. Backgrounds are either flat ink,
or a photographic field with the grime stack over it: `--flir-grain` (3px conic
noise), `--flir-grime` (two soft radial washes, one white, one red),
`--flir-crush` (top-and-bottom black gradient for type protection),
`--flir-scanline` (1-in-4px white line at 2.8% — the monitor-feed read), and
`--flir-vignette`. The texture **always lives under the type layer, never over
it, and never touches the mark.** Clean type, dirty image.

**Imagery.** Cool, desaturated, high contrast, grainy. Five documented passes:
`--flir-photo-filter` (grayscale, the default — the band's live photography was
shot under whatever colour the venue's rig happened to be, and desaturating to
the grey ramp is what makes a folder of unrelated shots read as one body of
work); `--flir-photo-filter-native` (shots already lit red keep their colour —
they *are* the palette); `--flir-photo-filter-figure` (crushes shadows to true
black so the form emerges with no visible edge); `--flir-photo-filter-hot` (the
white-hot heat map, as on Human Butterfly); and `--flir-photo-filter-corbijn`
(the reference pass — blacks crushed, midtones pulled apart, highlights held
just short of blowing) which pairs with `--flir-grain-hard`, a 2px grain about
three times the density of the default. At that weight grain is a visible
material, not a texture hint. Full-bleed is the norm on social and print; on
web, photography sits in the hero field with type over it.

**The lens.** 24–35mm, subject close enough that the wide angle actually
distorts, verticals left to converge, horizon high or absent, limbs stretched at
the frame edge, framing off-centre and loose. This is a decision made at the
camera — there is no token for it and no CSS that fakes it honestly. GDL-07
carries the full specification for commissioning and selecting photography.

**The figure study.** The band's longest-running visual thread, documented as a
system treatment in GDL-06: body folded or contorted until it reads as a shape,
one hard raking source, face concealed, everything else falling to true black.

**Transparency and blur.** Used sparingly and only for legibility — the crush
gradient behind type on a photo, and `--flir-overlay` at 86% behind modals.
Frosted-glass blur is not part of the system.

**Motion.** Linear or ease-out only — `cubic-bezier(0.2, 0, 0, 1)` at 120 / 200
/ 400ms. No bounce, no spring, no overshoot; the instrument does not overshoot.
Fades and hard cuts, not slides.

**Hover.** Colour shift, never movement and never scale: red goes to
`--flir-red-hot`, muted grey goes to `--flir-fg`, a hairline rule goes to
`--flir-line-strong`. **Press.** The fill inverts — no shrink, no depression.
**Focus.** A 2px `--flir-focus` outline, square.

**Layout rules.** Type sits on a strict left margin and stays there; centred
type appears only on the poster and jacket masters. Fixed elements are avoided
on web except the header rule.

---

## ICONOGRAPHY

**There is no icon set in the source material, and none has been invented.**
The band's archive contains photographs, flyers, cover artwork and one wordmark
PNG — no icon font, no SVG sprite, no PNG icon directory. Nothing in this system
draws a glyph that the band does not already own.

> **One mark is unaccounted for.** The suture8-01 cover carries a
> **butterfly-orchid emblem** — an orchid flower with moth wings — set above the
> wordmark, and the same badge is burned into several of the band's Facebook
> photographs. It was in use as a standing mark, not a one-off cover element, and
> it is very likely where the *Human Butterfly* merch title comes from. It is
> **not yet part of this system**, and it has not been reconstructed: the artwork
> exists in `assets/source/suture8-01-cover-full.png` and should be extracted
> from the master. It needs a decision — retire it, or adopt it as a second mark
> with its own clear-space and minimum-size rules.

What stands in for iconography:

- **Typographic marks.** The middle dot `·` as separator, and the mono label as
  the unit of interface furniture. A tracked all-caps Plex Mono string does the
  job an icon would do elsewhere.
- **The square dot.** Badge's optional 6px filled square lead marker — the one
  geometric mark in the system. Deliberately square, derived from
  `--flir-space-1 × 1.5`; documented as a deviation because it has no token.
- **Rules.** A 4px red rule marks the hot element; a 1px hairline separates.
  Weight, not symbol, carries the hierarchy.
- **Emoji and unicode pictographs are never used** — see Content Fundamentals.

**If icons become necessary** (a play control on theflir.com, a cart on Shopify),
use **Lucide** from CDN at 1.5px stroke, square caps, 20px — it is the closest
match to the hairline rule weight already in the system. Flag it here when it
first ships; it is a substitution, not an inheritance.

---

## Index

**Root**

| File | What |
|---|---|
| `styles.css` | Global entry point. Import lines only — link this one file. |
| `readme.md` | This file. |
| `CHANGELOG.md` | Version history and every documented deviation. |
| `CLAUDE.md` | Project rules, including the naming rule. |
| `SKILL.md` | Agent Skills front matter for use outside this project. |
| `github.md` | Source-repo association and sync record. |
| `index.html` | Preview page rendering the whole system. |
| `thumbnail.html` | Homepage tile. |

**Tokens** — `tokens/color.css`, `tokens/type.css`, `tokens/layout.css`. The only
place raw values live.

**Components** — `components/core/`, each a `.jsx` + `.d.ts` + `.prompt.md` +
`.card.html` set:

- **Button** — square, rule-bound, mono-labelled. `primary` / `ghost` / `quiet`, three sizes, optional mono `meta`.
- **Card** — framed listing block. Mono index, display title, optional tabular data footer, optional media and red accent rule.
- **Badge** — square mono chip stating fact. `hot` / `outline` / `solid` / `quiet`, optional square dot.

**Foundations** — `foundations/`, 21 specimen cards across Colors, Type, Spacing
and Brand.

**Guidelines** — `guidelines/`: `color`, `typography`, `radii-borders`,
`voice-tone`, `logo-usage`, `figure-photography`, `lens-grain` (GDL-01 to GDL-07).

**UI kits**

- `ui_kits/theflir-com/` — a clickable five-screen recreation of the site the
  domain should point at: home, music, release detail, live, contact. Desktop
  (`index.html`) and phone (`mobile.html`) off one layout sheet with a single
  breakpoint at 720px.
- `ui_kits/eyeliner-shop/` — THE FLIR collection inside the Eyeliner Media
  store: collection grid, product page, cart drawer. The storefront chrome is
  Eyeliner's, not this system's, and is a marked placeholder — that repo was
  not readable.

Both carry their own `README.md`. All content real.

**Surfaces** — `social/` (feed post, story, reel cover, og:image link preview,
profile avatar),
`web/` (hero, link-in-bio, mailing list signup), `print/` (Kunaki CD jacket,
18×24in gig poster).

**Templates** — `templates/`: starting folders to copy per release.

**Assets** — `assets/logo/` (supplied wordmark master), `assets/fonts/` (Placard
Condensed, Frankfurter), `assets/source/` (working image set, 16 files drawn
from the archive).

---

## Rules

1. **Tokens only.** No component contains a raw colour, size or radius. Any
   deliberate exception is documented in the component's `.prompt.md`, on its
   preview card, and in `CHANGELOG.md`.
2. **Ink is the default.** Chalk is the exception.
3. **One red per surface — one red *fill*.** The rule counts filled red
   elements: a `primary` Button, a `hot` Badge, a heavy red rule. Red *text*
   (`--flir-accent-text`) is exempt — it exists because `#C00000` dissolves at
   label size on ink, and a link or a micro-label set in it is not competing for
   the eye the way a fill is.

   Three readings the surfaces forced:
   - In a **repeating list**, the action is `ghost` and status moves into the
     data footer — a grid would otherwise put a red on every tile.
   - An **overlay does not create a new surface**. While a drawer or modal
     carrying a primary action is open, the primary behind it steps down to
     `ghost`.
   - A **`hot` Badge and a `primary` Button cannot share a surface.** Where a
     page has a primary action, the status chip is `outline` — red border, red
     text, no fill. `tone="hot"` is for surfaces that carry no button.
   - **Sticky chrome never carries a red fill.** A header badge or counter is
     present on every screen, so a red fill there is a second red everywhere.
     Use the `solid` treatment — `--flir-fg` fill, `--flir-fg-inverse` text.
4. **Nothing is rounded**, with the one sanctioned exception in `tokens/layout.css`.
5. **Never "FLIR" alone.**
6. **Catalogue numbers run `suture8-`.** Not `TF-`, not `FLIR-`. Two digits,
   chronological: `suture8-01` is 2002. Merch takes an `M`: `suture8-M01`.

## Intentional additions

None. Every component here (Button, Card, Badge) existed in the source repo. No
primitive was added that the band's own surfaces do not already use.

## Open

- The catalogue is one release from 2010. Everything the system shows is either
  that release or an honest empty state — but the system has not yet been tested
  against a real release cycle, which is what it exists for.
- **The Facebook photographs top out at 604px.** They came off Facebook, which
  re-compresses on upload, and they are usable at portrait size on screen only.
  They are **not** usable for print or for a full-bleed hero — an 18×24in poster
  at 150dpi needs 2700×3600. Camera originals or pre-upload exports would let
  these carry the hero and print surfaces; until then the hero stays on the
  larger archive scans.
- **Several Facebook photographs carry a burned-in THE FLIR wordmark** and a few
  carry a butterfly badge overlay. Those conflict with the rule that the type
  layer sits above the image and never duplicates the mark. Avoid them where the
  system's own wordmark appears in the same view; un-watermarked frames are
  preferred for portraits and heroes.
- Both covers are now in the archive at source. suture8-01 at full resolution;
  suture8-02 at `assets/source/suture8-02-cover.jpg`, the real Bandcamp release
  art at 700×700, pulled in on 2026-08-06. The banner crop that stood in for it
  is kept as `assets/source/suture8-02-banner-crop.png` — it is archive material,
  not a cover, and nothing should reference it as one.
- The butterfly-orchid emblem needs extracting from the cover master and a
  decision on whether it joins the system. See ICONOGRAPHY.
- Venue names for the 2005–2006 shows are not printed legibly on every flyer;
  those fields are left blank rather than guessed.
- theflir.com has one breakpoint, at 720px. Tablet-specific layout is not designed
  and does not appear to be worth designing for this site.
- Kunaki trim/bleed values to be confirmed against their current template PDF.
- An outlined SVG of the wordmark is still worth producing for print and merch,
  where the fonts cannot travel with the file. The supplied PNG is the master
  until then; the wordmark is never redrawn here.
- Model releases and photographer credits required on file before any figure
  image ships on a release, a Shopify listing or a printed run.
- Instagram removes female nudity including artistic work; every figure image
  needs an alternate crop held for `@theflir`.

---

THE FLIR · EYELINER MEDIA · MMXXVI
