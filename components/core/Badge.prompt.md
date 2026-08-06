# Badge — THE FLIR

**Path** `components/core/Badge.jsx`
**Preview** `components/core/Badge.card.html`

## What it is
A square mono chip carrying one fact. Badges state **status, catalogue number,
format or date**. They are never interactive and never carry prose.

## Tones
| tone | Use |
|---|---|
| `hot` | Live/urgent status — `OUT NOW`, `ON SALE`, `SOLD OUT` |
| `outline` | Secondary red status — `PRE-SAVE`, `LIMITED` |
| `solid` | Inverted, for use over photography |
| `quiet` | Neutral facts — `CD`, `LP`, `TF-001`, `41:22` |

## Rules
- Maximum **two words**, always uppercase, always mono at `--flir-text-nano`.
- `dot` renders a 6px **square** marker, not a circle — nothing in this system is round.
- One `hot` badge per surface. Multiple `quiet` badges may sit in a row.
- Radius `--flir-radius-none`, no shadow, 1px rule.
- Never wrap. Long strings get shortened, not wrapped.

## Tokens used
`--flir-accent`, `--flir-accent-text`, `--flir-accent-fg`, `--flir-fg`, `--flir-fg-inverse`,
`--flir-fg-muted`, `--flir-line-strong`, `--flir-font-data`, `--flir-fw-medium`,
`--flir-text-nano`, `--flir-ls-wider`, `--flir-lh-snug`, `--flir-space-1|2`,
`--flir-border-hair`, `--flir-radius-none`, `--flir-shadow-none`

## Deviations
The dot marker is a 6px square with no token of its own — it is derived from
`--flir-space-1` × 1.5. Flagged as the one raw value in the component.
