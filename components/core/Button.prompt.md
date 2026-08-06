# Button — THE FLIR

**Path** `components/core/Button.jsx`
**Preview** `components/core/Button.card.html`

## What it is
A square, rule-bound control with a mono uppercase label. The button is the
only interactive primitive in the system; links inside prose are underlined
text, not buttons.

## Variants
| variant | Use | Appearance |
|---|---|---|
| `primary` | The single most important action on the surface — Listen, Buy, Tickets | Solid `--flir-accent` fill, white label |
| `ghost` | Secondary actions sitting beside a primary | Transparent, 2px `--flir-line-strong` rule |
| `quiet` | Tertiary / navigation-adjacent | No rule until hover, `--flir-fg-muted` label |

## Sizes
`sm` (badge-adjacent) · `md` (default) · `lg` (hero and poster CTA)

## Rules
- **One `primary` per view.** Red marks the hottest element; two reds is a bug.
- Label is always uppercase, mono, tracked at `--flir-ls-wider`. Never sentence case.
- Labels are verbs or nouns, one or two words: `LISTEN`, `TICKETS`, `PRE-SAVE`, `CD · 12.00`.
- `radius` is `--flir-radius-none`. There is no pill button and no rounded button.
- No shadow. Hover changes background/border colour only.
- Optional `meta` slot carries a mono figure to the right of the label — duration, price, date. It never carries prose.

## States
- **hover** primary → `--flir-accent-hover`; ghost → border `--flir-fg`; quiet → border `--flir-line`
- **active** 1px downward translate is *not* used; the fill darkens to `--flir-red-dim` instead
- **focus-visible** 2px `--flir-focus` outline, 2px offset
- **disabled** `--flir-fg-faint` label, `--flir-line` rule, no fill, `cursor: not-allowed`

## Tokens used
`--flir-accent`, `--flir-accent-hover`, `--flir-accent-fg`, `--flir-fg`, `--flir-fg-muted`,
`--flir-fg-faint`, `--flir-line`, `--flir-line-strong`, `--flir-font-data`, `--flir-fw-medium`,
`--flir-text-nano|micro|small`, `--flir-ls-wider`, `--flir-lh-snug`, `--flir-space-2..6`,
`--flir-radius-none`, `--flir-border-mark`, `--flir-shadow-none`, `--flir-transition`

## Deviations
None. Every value resolves to a token.
