# theflir.com — UI kit

**The site exists. This kit is the prototype it was built from, not the thing
that ships.** `theflir.com` has served the real site since 2026-08-07 and no
longer redirects anywhere. If you are here wondering when this kit goes live:
it does not, and it was never going to. Read the next section before planning
any work that assumes otherwise.

Open `index.html` for desktop, `mobile.html` for phone. Both render the same
screens; `site.css` carries the layout and has one breakpoint, at 720px.

## This kit is not deployable

Three things make it a prototype, and all three are the live site's own
Content-Security-Policy doing its job:

| The kit needs | theflir.com policy | Result |
| --- | --- | --- |
| React, ReactDOM and Babel from `unpkg.com` | `script-src 'self'` | blocked |
| `../../_ds_bundle.js` | gitignored, not in the repo | missing |
| 147 inline `style` attributes | `style-src 'self'` | blocked |

A snapshot of this kit would be stopped by the site's own headers before it
rendered. So the live pages are hand-written against the same content, using
classes instead of inline styles and no framework at all. Each one says so in
its `<head>`.

## What actually flows from here to production

- **Tokens**, reproducibly. `tools/sync-tokens.py` in the site repo vendors the
  token layer into `public/styles/tokens.css`. Re-run it and the diff shows
  exactly what moved. Never hand-copy them; that is how the two drifted before.
- **Content**, from `data.js` — the source of truth for releases, compilation
  appearances, past shows and personnel. Change a fact there first, then mirror
  it into the site's HTML.

Nothing else does. There is no build step pointing at this directory.

## Where the site is ahead of this kit

The kit has five routes, four of which are site pages — `release` is a detail
view, not a page. The site has six: those four **plus** a dedicated `/band`,
which exists here only as part of `HomeScreen`, and a `/shop` the kit has no
screen for at all. The live archive also carries
material this kit never had: 35 past shows with venues, bills and door detail
for eleven of them, cover art and source links for every compilation, vocal
credits, and an Origins biography. Treat the site as current and this kit as
the design reference behind it.

## Screens

| Route | File | What |
|---|---|---|
| `home` | `HomeScreen.jsx` | Wide-angle photographic hero, wordmark, current release, live status, archive grid |
| `music` | `MusicScreen.jsx` | Discography index and the Bandcamp block |
| `release` | `MusicScreen.jsx` | Release detail — cover, tracklist, credits, Bandcamp CTA |
| `live` | `LiveScreen.jsx` | Empty state for upcoming dates; flyer archive underneath |
| `contact` | `LiveScreen.jsx` | Booking (leads, owns the one red), Instagram, Bandcamp, streaming, Facebook (dormant, footer-only on the site) |

`Chrome.jsx` carries the header, footer, `SectionHead` and `PhotoField`.
`data.js` carries all content.

## Data

**Everything on these screens is real.** Releases are read from
`theflir.bandcamp.com`, ordered newest first, with catalogue numbers running in
chronological order:

- **suture8-01 · *Please, Please, Please*** — 01 September 2002, five tracks:
  *Golden*, *Phere*, *Ugli*, *Lick*, *Naked*.
- **suture8-02 · *Singles (Internet Only)*** — 14 February 2010, four tracks of
  which three are titled on Bandcamp (*Again*, *Marea*, *You Fade Away*); the
  fourth is shown as untitled and labelled as not listed rather than invented.

**The 2002 cover art is not in the local archive.** It is served from Bandcamp's
CDN and the release page says so in plain type. Download it into
`assets/source/` before this ships — a remote image will not survive an offline
export and does not render in preview captures.

Past show dates are read off the flyer scans in `THE_FLIR/Art Work/Flyers`
(12.12.05, 18.02.06, 27.10.06, 18.11.06). Venue names are left blank where the
flyer does not print one.

There are no upcoming dates, so the Live screen leads with an empty state rather
than placeholder rows. Nothing here is filler.

## Also on

Four compilation appearances, from the Apple Music artist page
(`music.apple.com/us/artist/the-flir/53854855`, filed under Electronic):
*Blind Dumb Deaf* (Static Waves 5, 2016), *Golden (Electro Mix)* (Static Waves
3, 2014), *It Didn't Happen* (Static Waves 2, 2013), *Again* (Static Waves,
2012). Three of those exist nowhere else in the catalogue.

## Streaming

Read from the Spotify artist page (`31VcyCiOGkU3WhtshNYZmq`) on 06.08.26: 205
monthly listeners, 325 followers, and play counts for the five *Please, Please,
Please* tracks. **These drift.** The Music screen stamps them with the date they
were read rather than presenting them as fixed — a stale number that looks
current is worse than no number.

*Again* is the most played track at 18,850, which is worth knowing: it appears
on *Singles (Internet Only)* and on the 2012 *Static Waves* compilation, and is
the band's widest-travelling piece of music.

## Components used

`Button`, `Card` and `Badge` come from the compiled system bundle — none are
re-implemented here. Everything else is layout.

## Applying GDL-07

The hero and release header use the documented stack, in order: image with
`--flir-photo-filter-corbijn`, then `--flir-crush`, then `--flir-grain-hard`,
then `--flir-scanline`, then type. Grain never sits over type.

Wide-angle distortion is a shooting decision and cannot be added here — the
archive photographs are what they are. When new photography is commissioned,
GDL-07 carries the specification.

## Known gaps

- **No Shop screen, and the site now has one.** This gap used to read "merch
  runs through the label store, not this domain" — that is no longer true. The
  site shipped an on-domain `/shop` on 2026-08-09: the 2008 merchandise archive,
  transcribed from Wayback capture `20080915051309`, everything marked sold out,
  no cart and no payment path. Nothing on the site points at a label store any
  more. Designing that screen here is unstarted work, not a decision.
- No audio player. Bandcamp's embed is the intended mechanism and is not mocked.
- Tablet-specific layout is not designed. There is one breakpoint, at 720px.
- No search and no cart. Neither exists yet.
- Newsletter capture is **not** mocked on these screens, but it is no longer
  missing from the system: `web/signup.html` (WEB-03) is the block, and it is
  live on theflir.com. Use that rather than inventing a form here.
