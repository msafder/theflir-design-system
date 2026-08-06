# THE FLIR — Design System

The visual identity system for **THE FLIR**, an independent band.
Direction: **Thermal Register**.

> The band is always written **THE FLIR**. Never "FLIR" alone — that is an
> unrelated business. Catalogue prefix is `TF-`.

Open `index.html` in a browser to see the whole system rendered.

## Structure

| Path | What |
|---|---|
| `tokens/` | `color.css`, `type.css`, `layout.css` — the only place raw values live |
| `guidelines/` | One `.card.html` per topic: colour, typography, radii/borders, voice, logo, figure photography |
| `components/core/` | Button, Card, Badge — each a `.jsx` + `.prompt.md` + `.card.html` triplet |
| `social/` | Instagram masters — feed post, story, reel cover |
| `web/` | Hero section and link-in-bio block for theflir.com |
| `print/` | Kunaki CD jacket and 18×24in gig poster |
| `assets/` | Fonts and the working image set |
| `index.html` | Preview page rendering everything |
| `CHANGELOG.md` | Version history and every documented deviation |

## Rules

1. **Tokens only.** No component contains a raw colour, size or radius. Any
   deliberate exception is documented in the component's `.prompt.md` and shown
   on its preview card.
2. **Ink is the default.** Light ("chalk") is the exception, used for print
   inserts and anything that has to survive photocopying.
3. **One red per surface.** `#C00000` marks the single hottest element. Two reds
   in one view is a bug.
4. **Nothing is rounded**, with one sanctioned exception documented in
   `tokens/layout.css`.

## Typography

| Role | Face |
|---|---|
| Wordmark — THE | Placard Condensed, 1× |
| Wordmark — FLIR | Frankfurter Heavy, 2× |
| Display, 48px+ | Placard Condensed |
| UI titles, body | Archivo |
| Data, labels | IBM Plex Mono |

The wordmark is typed as one word at a locked 1:2 ratio, shared baseline, no
word space. See `guidelines/logo-usage.card.html`.

## Assets

The master archive lives outside this repo at
`/Volumes/eyeliner-media-video/2026/THE_FLIR`. Only the derivatives the system
actually loads are committed here. Do not add the full archive to git.

## Licensing

Placard Condensed and Frankfurter Heavy are licensed binaries. **This repo must
stay private** until their embedding and redistribution rights are confirmed.

## Versioning

Tag each release against `CHANGELOG.md` — `git tag v0.5.0`.

---

THE FLIR · Eyeliner Media · MMXXVI
