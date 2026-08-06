# Card — THE FLIR

**Path** `components/core/Card.jsx`
**Preview** `components/core/Card.card.html`

## What it is
The listing primitive: releases, live dates, merch, press. Three fixed zones —
a mono **index header**, a wide-Archivo **title body**, and an optional
**data footer** of label/value rows. Zones are separated by 1px rules, never
by whitespace alone.

## Anatomy
```
┌─ optional 4px red rule (accent) ────────┐
│ LP 01                        OUT NOW    │  header · mono nano · uppercase
├─────────────────────────────────────────┤
│ DEAD AIR BETWEEN TWO SIGNALS            │  title · Archivo wide 700 · H3
│ optional body copy                       │
├─────────────────────────────────────────┤
│ RELEASED            14.03.26            │  footer · mono small · tabular
│ TRACKS              09                  │
└─────────────────────────────────────────┘
```

## Rules
- `accent` is reserved for the one card that is the current focus — the new release, the next show. Not every card in a grid.
- `status` is the only red text in the header and is limited to two words: `OUT NOW`, `SOLD OUT`, `PRE-SAVE`.
- Footer values are right-aligned, tabular, zero-padded. Labels are uppercase and tracked.
- Photos passed as `media` receive `--flir-photo-filter` (grayscale + contrast) with no exception. Colour photography does not exist in this system.
- Radius `--flir-radius-none`, shadow `--flir-shadow-none`. Elevation is expressed by `--flir-surface` vs `--flir-bg`.

## Tokens used
`--flir-surface`, `--flir-bg`, `--flir-fg`, `--flir-fg-muted`, `--flir-fg-faint`,
`--flir-accent`, `--flir-accent-text`, `--flir-rule`, `--flir-border-heavy`,
`--flir-photo-filter`, `--flir-font-display`, `--flir-font-data`, `--flir-wdth-wide`,
`--flir-fw-bold`, `--flir-text-nano|small|h3`, `--flir-lh-tight|data`, `--flir-ls-wide|wider`,
`--flir-space-2..5`, `--flir-radius-none`, `--flir-shadow-none`

## Deviations
None.
