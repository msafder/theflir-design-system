/* THE FLIR — theflir.com UI kit: site chrome.
   Header rule, nav, footer. The header rule is the one fixed element
   the system allows on web. */

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'music', label: 'Music' },
  { id: 'live', label: 'Live' },
  { id: 'contact', label: 'Contact' },
];

function Wordmark({ size = 40 }) {
  return (
    <span className="flir-wordmark" style={{ fontSize: size, cursor: 'pointer' }}>
      <span className="the">The</span><span className="flir">Flir</span>
    </span>
  );
}

function SiteHeader({ route, go }) {
  return (
    <header className="site-head" style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 'var(--flir-space-5)',
      background: 'var(--flir-bg)',
      borderBottom: 'var(--flir-rule)',
    }}>
      <div onClick={() => go('home')}><Wordmark size={34} /></div>
      <nav className="site-nav">
        {NAV.map(n => {
          const on = route === n.id || (n.id === 'music' && !NAV.some(x => x.id === route));
          return (
            <a key={n.id} onClick={() => go(n.id)} style={{
              fontFamily: 'var(--flir-font-data)',
              fontSize: 'var(--flir-text-micro)',
              fontWeight: 'var(--flir-fw-medium)',
              letterSpacing: 'var(--flir-ls-wider)',
              textTransform: 'uppercase',
              color: on ? 'var(--flir-fg)' : 'var(--flir-fg-muted)',
              borderBottom: on ? 'var(--flir-border-mark) solid var(--flir-accent)' : 'var(--flir-border-mark) solid transparent',
              paddingBottom: 'var(--flir-space-1)',
              textDecoration: 'none', cursor: 'pointer',
              transition: 'color var(--flir-transition), border-color var(--flir-transition)',
            }}>{n.label}</a>
          );
        })}
      </nav>
      <a className="head-cta" href="https://theflir.bandcamp.com/" target="_blank" rel="noreferrer" style={{
        fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-micro)',
        fontWeight: 'var(--flir-fw-medium)', letterSpacing: 'var(--flir-ls-wider)',
        textTransform: 'uppercase', color: 'var(--flir-accent-text)',
        textDecoration: 'none', borderBottom: 'var(--flir-border-hair) solid var(--flir-accent-text)',
      }}>Bandcamp</a>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-foot" style={{
      borderTop: 'var(--flir-rule)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      gap: 'var(--flir-space-5)', flexWrap: 'wrap',
    }}>
      <Wordmark size={28} />
      <div style={{ display: 'flex', gap: 'var(--flir-space-5)', flexWrap: 'wrap' }}>
        {[['Bandcamp', 'https://theflir.bandcamp.com/'], ['Instagram', 'https://instagram.com/theflir'], ['Eyeliner Media', '#']].map(([l, h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-micro)',
            letterSpacing: 'var(--flir-ls-wider)', textTransform: 'uppercase',
            color: 'var(--flir-fg-muted)', textDecoration: 'none',
          }}>{l}</a>
        ))}
      </div>
      <span style={{
        fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)',
        letterSpacing: 'var(--flir-ls-wider)', textTransform: 'uppercase',
        color: 'var(--flir-fg-faint)',
      }}>THE FLIR · EYELINER MEDIA · MMXXVI</span>
    </footer>
  );
}

/* Section heading — mono kicker over a hairline, used on every inner page. */
function SectionHead({ kicker, title, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--flir-space-5)', borderBottom: 'var(--flir-rule)', paddingBottom: 'var(--flir-space-3)', marginBottom: 'var(--flir-space-6)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-2)' }}>
        {kicker && <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>{kicker}</span>}
        <h1 className="flir-type-title" style={{ margin: 0, fontSize: 'var(--flir-text-h2)' }}>{title}</h1>
      </div>
      {right && <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)', whiteSpace: 'nowrap' }}>{right}</span>}
    </div>
  );
}

/* Photographic field — the GDL-07 stack, in order:
   image (corbijn filter) → crush → hard grain → scanline → content. */
function PhotoField({ src, height, className, children, filter = 'var(--flir-photo-filter-corbijn)' }) {
  return (
    <div className={className} style={{ position: 'relative', height, overflow: 'hidden', background: 'var(--flir-bg-sunken)' }}>
      <img src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--flir-crush)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--flir-grain-hard)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--flir-scanline)' }} />
      <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
    </div>
  );
}

Object.assign(window, { NAV, Wordmark, SiteHeader, SiteFooter, SectionHead, PhotoField });
