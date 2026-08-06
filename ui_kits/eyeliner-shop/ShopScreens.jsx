/* THE FLIR collection on eyeliner.media.

   IMPORTANT — whose system is this?
   The store belongs to Eyeliner Media, so the storefront chrome (header, cart,
   checkout, account) is Eyeliner's design system, not THE FLIR's. That repo was
   not readable when this was built, so the chrome here is deliberately neutral
   and marked as such: a thin rule, a mono nav, no styling opinions of its own.
   What THE FLIR owns, and what this kit actually specifies, is the band's
   collection block and product pages inside that chrome. */

function ShopHeader({ route, go, cartCount, openCart }) {
  return (
    <header className="shop-head" style={{
      position: 'sticky', top: 0, zIndex: 20,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 'var(--flir-space-5)', background: 'var(--flir-bg)', borderBottom: 'var(--flir-rule)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--flir-space-4)' }}>
        <span style={{
          fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-micro)',
          fontWeight: 'var(--flir-fw-medium)', letterSpacing: 'var(--flir-ls-widest)',
          textTransform: 'uppercase', color: 'var(--flir-fg-muted)',
        }}>{SHOP.store}</span>
        <span style={{ color: 'var(--flir-fg-faint)' }}>·</span>
        <a onClick={() => go('collection')} className="flir-wordmark" style={{ fontSize: 24, cursor: 'pointer' }}>
          <span className="the">The</span><span className="flir">Flir</span>
        </a>
      </div>
      <button onClick={openCart} style={{
        background: 'transparent', border: 'var(--flir-border-mark) solid var(--flir-line-strong)',
        color: 'var(--flir-fg)', padding: 'var(--flir-space-2) var(--flir-space-4)',
        fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)',
        letterSpacing: 'var(--flir-ls-wider)', textTransform: 'uppercase', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 'var(--flir-space-2)',
      }}>
        Cart
        {/* The count is sticky chrome — a red fill here would put a second red
            on every screen, including the grid deliberately stripped of it.
            Solid treatment instead: the page's primary action stays the one
            red fill. */}
        <span style={{
          background: cartCount ? 'var(--flir-fg)' : 'transparent',
          color: cartCount ? 'var(--flir-fg-inverse)' : 'var(--flir-fg-faint)',
          padding: '1px 6px', minWidth: 8, textAlign: 'center',
        }}>{cartCount}</span>
      </button>
    </header>
  );
}

function CollectionScreen({ go }) {
  const { Card, Badge, Button } = window.THEFLIRDesignSystem_21318e;
  return (
    <div className="pg">
      <SectionHead kicker={`${SHOP.store} · Collection`} title={SHOP.collection} right={`${SHOP.products.length} items`} />

      <div className="grid-products">
        {[...SHOP.products].sort((a, b) => (a.discontinued === b.discontinued ? 0 : a.discontinued ? 1 : -1)).map(p => (
          /* No status and no primary button in the grid: a repeating list
             would put one red on every tile, and the system allows one red
             per surface. Availability moves into the data footer. */
          <Card key={p.id} index={p.sku} title={p.title} mediaFilter="none"
            media={<img src={p.art} alt={p.title} style={{ width: '100%', display: 'block', aspectRatio: '1', objectFit: 'cover', background: 'var(--flir-black)', opacity: p.discontinued ? 0.55 : 1 }} />}
            meta={p.discontinued
              ? [['Type', p.type], ['Stock', p.status]]
              : [['Type', p.type], ['Stock', p.status], ['Price', `$${p.price}`]]}>
            <Button variant={p.discontinued ? 'quiet' : 'ghost'} size="sm" onClick={() => go(p.id)}>
              {p.discontinued ? 'Archive' : 'View'}
            </Button>
          </Card>
        ))}
        <div style={{ border: 'var(--flir-rule)', borderStyle: 'dashed', padding: 'var(--flir-space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)', minHeight: 280, justifyContent: 'center' }}>
          <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>Not yet</span>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Posters, the second shirt and anything tied to new material go here when they exist.
          </p>
        </div>
      </div>

      {SHOP.pricingIsPlaceholder && (
        <p style={{
          marginTop: 'var(--flir-space-6)', paddingTop: 'var(--flir-space-4)',
          borderTop: 'var(--flir-rule)',
          fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)',
          letterSpacing: 'var(--flir-ls-wider)', textTransform: 'uppercase',
          color: 'var(--flir-fg-faint)',
        }}>
          Pricing not set · figures shown are placeholders
        </p>
      )}
    </div>
  );
}

/* superseded: an overlay does not create a new surface. While the cart drawer
   is open the page behind it is still visible, so its primary action steps
   down to ghost and the drawer's Checkout is the one red on screen. */
function ProductScreen({ id, go, addToCart, superseded }) {
  const { Badge, Button } = window.THEFLIRDesignSystem_21318e;
  const p = SHOP.products.find(x => x.id === id);
  const [size, setSize] = React.useState(p.sizes.find(s => !p.soldOut.includes(s)) || null);
  const [added, setAdded] = React.useState(false);

  const add = () => { addToCart({ ...p, size }); setAdded(true); setTimeout(() => setAdded(false), 1600); };

  return (
    <div className="pg">
      <button onClick={() => go('collection')} style={{
        background: 'none', border: 0, padding: 0, marginBottom: 'var(--flir-space-5)',
        fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)',
        letterSpacing: 'var(--flir-ls-wider)', textTransform: 'uppercase',
        color: 'var(--flir-fg-muted)', cursor: 'pointer',
      }}>← {SHOP.collection}</button>

      <div className="product-detail">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-2)' }}>
          <div style={{ border: 'var(--flir-rule)', background: 'var(--flir-black)', aspectRatio: '1', overflow: 'hidden' }}>
            <img src={p.art} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
          {/* One image, because one image exists. The empty slots are the
              layout for product photography that has not been shot — they are
              deliberately blank rather than filled with unrelated archive
              images, which on a product page would read as views of the item. */}
          <div className="thumbs">
            <div style={{ border: 'var(--flir-border-mark) solid var(--flir-accent)', aspectRatio: '1', overflow: 'hidden', background: 'var(--flir-black)' }}>
              <img src={p.art} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ border: 'var(--flir-rule)', borderStyle: 'dashed', aspectRatio: '1', background: 'var(--flir-bg-sunken)' }} />
            ))}
          </div>
          <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>
            Artwork only · product photography not shot
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-5)', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)' }}>
            <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>{p.sku} · {p.type}</span>
            <h1 className="flir-type-display" style={{ margin: 0, fontSize: 'var(--flir-text-h1)' }}>{p.title}</h1>
            {p.discontinued
              ? <span className="flir-type-label" style={{ color: 'var(--flir-accent-text)' }}>{p.status}</span>
              : <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-h3)', color: 'var(--flir-fg)', fontVariantNumeric: 'tabular-nums' }}>${p.price}</span>}
          </div>

          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)', maxWidth: '52ch' }}>{p.note}</p>

          {p.sizes.length > 0 && !p.discontinued && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)' }}>
              <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>Size</span>
              <div style={{ display: 'flex', gap: 'var(--flir-space-2)' }}>
                {p.sizes.map(s => {
                  const out = p.soldOut.includes(s);
                  const on = size === s;
                  return (
                    <button key={s} disabled={out} onClick={() => setSize(s)} style={{
                      minWidth: 48, padding: 'var(--flir-space-3) 0',
                      background: on ? 'var(--flir-fg)' : 'transparent',
                      color: out ? 'var(--flir-fg-faint)' : on ? 'var(--flir-fg-inverse)' : 'var(--flir-fg)',
                      border: `var(--flir-border-mark) solid ${on ? 'var(--flir-fg)' : 'var(--flir-line-strong)'}`,
                      fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-micro)',
                      letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase',
                      cursor: out ? 'not-allowed' : 'pointer',
                      textDecoration: out ? 'line-through' : 'none',
                      transition: 'background var(--flir-transition), color var(--flir-transition), border-color var(--flir-transition)',
                    }}>{s}</button>
                  );
                })}
              </div>
              {p.soldOut.length > 0 && (
                <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>
                  {p.soldOut.join(', ')} sold out
                </span>
              )}
            </div>
          )}

          {p.discontinued ? (
            <div style={{ border: 'var(--flir-rule)', padding: 'var(--flir-space-4) var(--flir-space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-2)' }}>
              <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>Out of production</span>
              <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)', maxWidth: '46ch' }}>
                This run is finished and will not be reprinted. The page stays up because the artwork is part of the record.
              </p>
            </div>
          ) : (
            <Button variant={superseded ? 'ghost' : 'primary'} size="lg" onClick={add}>{added ? 'Added' : 'Add to cart'}</Button>
          )}

          <div className="spec-grid" style={{ width: '100%', borderTop: 'var(--flir-rule)', paddingTop: 'var(--flir-space-4)' }}>
            {[['Make', p.garment], ['Print', p.print], ['Ships', 'From Los Angeles'], ['Label', SHOP.store]].map(([k, v]) => (
              /* Stacked, not right-aligned: values here are phrases, and a
                 2-up label/value row tears them into ragged lines. */
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-1)', borderBottom: 'var(--flir-rule)', padding: 'var(--flir-space-3) 0', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-small)' }}>
                <span style={{ color: 'var(--flir-fg-faint)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)', fontSize: 'var(--flir-text-nano)' }}>{k}</span>
                <span style={{ color: 'var(--flir-fg-muted)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ items, close, remove }) {
  const { Button, Badge } = window.THEFLIRDesignSystem_21318e;
  const total = items.reduce((a, i) => a + parseFloat(i.price), 0).toFixed(2);
  return (
    <div onClick={close} style={{ position: 'fixed', inset: 0, background: 'var(--flir-overlay)', zIndex: 30, display: 'flex', justifyContent: 'flex-end' }}>
      <aside className="cart" onClick={e => e.stopPropagation()} style={{
        background: 'var(--flir-surface)', borderLeft: 'var(--flir-rule)',
        display: 'flex', flexDirection: 'column', height: '100%',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--flir-space-5)', borderBottom: 'var(--flir-rule)' }}>
          <span className="flir-type-label">Cart · {items.length}</span>
          <button onClick={close} style={{ background: 'none', border: 0, color: 'var(--flir-fg-muted)', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-micro)', letterSpacing: 'var(--flir-ls-wider)', textTransform: 'uppercase', cursor: 'pointer' }}>Close</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {items.length === 0 ? (
            <p className="flir-type-body" style={{ padding: 'var(--flir-space-6)', margin: 0, color: 'var(--flir-fg-faint)' }}>Nothing in the cart.</p>
          ) : items.map((i, n) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 'var(--flir-space-4)', padding: 'var(--flir-space-4) var(--flir-space-5)', borderBottom: 'var(--flir-rule)', alignItems: 'start' }}>
              <img src={i.art} alt="" style={{ width: 72, height: 72, objectFit: 'cover', background: 'var(--flir-black)', border: 'var(--flir-rule)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-2)' }}>
                <span className="flir-type-title" style={{ fontSize: 'var(--flir-text-body)' }}>{i.title}</span>
                <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>
                  {i.sku}{i.size ? ` · ${i.size}` : ''}
                </span>
                <button onClick={() => remove(n)} style={{ background: 'none', border: 0, padding: 0, textAlign: 'left', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-accent-text)', cursor: 'pointer' }}>Remove</button>
              </div>
              <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-small)', fontVariantNumeric: 'tabular-nums' }}>${i.price}</span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: 'var(--flir-rule)', padding: 'var(--flir-space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-small)' }}>
            <span style={{ color: 'var(--flir-fg-faint)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)' }}>Subtotal</span>
            <span style={{ fontVariantNumeric: 'tabular-nums' }}>${total}</span>
          </div>
          <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>
            Shipping calculated at checkout
          </span>
          <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }} disabled={items.length === 0}>Checkout</Button>
        </div>
      </aside>
    </div>
  );
}

Object.assign(window, { ShopHeader, CollectionScreen, ProductScreen, CartDrawer });
