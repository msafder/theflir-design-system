# THE FLIR collection on eyeliner.media — UI kit

Merch runs through Eyeliner Media's Shopify store, not through theflir.com.
Open `index.html`.

## Whose system is this

**The storefront chrome belongs to Eyeliner Media, not to THE FLIR.** Header,
cart, checkout and account are the label's system. The Eyeliner design system
repo (`msafder/eyeliner.media-design-system`) was **not readable** when this was
built — the GitHub API returned 409 on its tree — so the chrome here is
deliberately neutral: a hairline rule, a mono nav, no opinions of its own. It is
a placeholder, and should be replaced with the real Eyeliner chrome before this
goes anywhere near a theme.

What THE FLIR owns, and what this kit actually specifies, is the band's
**collection block and product pages** inside that chrome.

## Screens

| Route | What |
|---|---|
| `collection` | THE FLIR collection grid, with the empty slot for what does not exist yet |
| `<product id>` | Product page — art, size selector with sold-out state, spec table |
| cart | Drawer over any screen. Add, remove, subtotal, checkout. |

## Data

Three products, all real as artwork. Two are out of production:

- **Human Butterfly** (`suture8-M01`) — the tee. **Out of production and no longer
  available.** The page stays up as an archive entry: no price, no size picker,
  no add to cart. Kept rather than deleted because the art —
  `assets/source/human-butterfly-shirt.png` — is the heat map that
  `--flir-photo-filter-hot` and `--flir-heatmap-stops` were derived from.
- **Human Butterfly — Mini poster** (`suture8-M02`) — **also out of production.**
  Short run, not reprinted. No price was ever recorded, so the field is empty
  rather than guessed.

  **The two Human Butterfly tiles share one image on purpose.** The printed
  artwork is identical on the shirt and the poster, so the same file is correct —
  it is not a placeholder waiting to be replaced. The titles carry the format
  (`Human Butterfly — T-shirt` / `— Mini poster`) so the listing does not read
  as a duplicate.
- **Singles (Internet Only)** (`suture8-02-CD`) — the 2010 Bandcamp release,
  pressed through Kunaki. The only buyable item.

Discontinued items sort after buyable ones, dim their artwork, and swap the
action from View to Archive.

**Pricing is not set.** The figures are placeholders and the collection page
says so in plain type. Real inventory has never been run.

## Two system decisions this kit forced

**1. `Card` gained a `mediaFilter` prop.** Card hardcoded
`--flir-photo-filter` on its media, which greyscales everything. That is right
for photography and wrong for artwork that *is* the palette — the heat-map print
and the release cover. `mediaFilter="none"` is now how you say so.

**2. No red in a repeating grid, none behind an overlay, and none in sticky chrome.** The system allows one red per surface. A
product grid with a red status chip and a red button on every tile breaks that
immediately. In a repeating list the action is `ghost` and availability lives in
the data footer; red is reserved for the page's one primary action — Add to
cart, and Checkout in the drawer. And because `--flir-overlay` dims a saturated
red rather than removing it, Add to cart steps down to `ghost` while the drawer
is open — an overlay does not create a new surface. The cart count in the header
takes the `solid` treatment (`--flir-fg` fill) rather than red: it is sticky
chrome, so a red fill there would put a second red on every screen, including
the grid deliberately stripped of it.

## Known gaps

- No checkout, account, search or collection filtering. Those are Eyeliner's
  surfaces, and its system was not readable.
- No garment mockups and no product photography. The tee is shown as flat
  artwork because no photograph of a printed shirt exists in the archive; the
  gallery carries one real image and three visibly empty slots rather than
  filling them with unrelated archive pictures, which on a product page would
  read as views of the item.
- One breakpoint, at 720px.
