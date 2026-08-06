# theflir.com — UI kit

A clickable recreation of the site the band does not have yet. `theflir.com` is
owned but currently redirects to the Facebook page, which is dormant and being
migrated away from. This kit is what the domain should point at instead.

Open `index.html` for desktop, `mobile.html` for phone. Both render the same
screens; `site.css` carries the layout and has one breakpoint, at 720px.

## Screens

| Route | File | What |
|---|---|---|
| `home` | `HomeScreen.jsx` | Wide-angle photographic hero, wordmark, current release, live status, archive grid |
| `music` | `MusicScreen.jsx` | Discography index and the Bandcamp block |
| `release` | `MusicScreen.jsx` | Release detail — cover, tracklist, credits, Bandcamp CTA |
| `live` | `LiveScreen.jsx` | Empty state for upcoming dates; flyer archive underneath |
| `contact` | `LiveScreen.jsx` | Instagram, Bandcamp, Facebook (dormant), Eyeliner Media |

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

- No merch or Shopify screen; merch runs through eyeliner.media, not this domain.
- No audio player. Bandcamp's embed is the intended mechanism and is not mocked.
- Tablet-specific layout is not designed. There is one breakpoint, at 720px.
- No search, no newsletter capture, no cart. None of those exist yet.
