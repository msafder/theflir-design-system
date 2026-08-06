/* THE FLIR — theflir.com: Live and Contact.
   Live has no upcoming dates, so it leads with an honest empty state and
   the flyer archive underneath. Contact carries the Instagram migration. */

function LiveScreen({ go }) {
  const { Card, Badge, Button } = window.THEFLIRDesignSystem_21318e;
  return (
    <div className="pg">
      <SectionHead kicker="Shows" title="Live" right="No dates announced" />

      <div className="empty-state" style={{ border: 'var(--flir-rule)', borderTop: 'var(--flir-border-heavy) solid var(--flir-accent)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-4)', alignItems: 'flex-start' }}>
        <span className="flir-type-label" style={{ color: 'var(--flir-accent-text)' }}>Nothing scheduled</span>
        <h2 className="flir-type-display empty-head" style={{ margin: 0 }}>No dates announced</h2>
        <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)', maxWidth: '54ch' }}>
          New material is in progress. Dates are posted on Instagram first and appear here the same day.
        </p>
        <a href="https://instagram.com/theflir" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="primary">Follow @theflir</Button>
        </a>
      </div>

      <div style={{ marginTop: 'var(--flir-space-9)' }}>
        <SectionHead kicker="Archive" title="Past shows" right="2005 — 2006" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PAST_SHOWS.map(s => (
            <div key={s.date} className="show-row" style={{ padding: 'var(--flir-space-4) 0', borderBottom: 'var(--flir-rule)', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-small)' }}>
              <span style={{ color: 'var(--flir-fg)', fontVariantNumeric: 'tabular-nums' }}>{s.date}</span>
              <span style={{ color: s.venue ? 'var(--flir-fg-muted)' : 'var(--flir-fg-faint)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)', fontSize: 'var(--flir-text-nano)' }}>
                {s.venue || 'Venue not recorded'}
              </span>
              <span style={{ color: 'var(--flir-fg-muted)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)', fontSize: 'var(--flir-text-nano)' }}>{s.city}</span>
              <span style={{ justifySelf: 'end' }}>
                {s.flyer ? <Badge tone="quiet">Flyer</Badge> : null}
              </span>
            </div>
          ))}
        </div>
        <p className="flir-type-body" style={{ marginTop: 'var(--flir-space-5)', color: 'var(--flir-fg-faint)', fontSize: 'var(--flir-text-small)', maxWidth: '64ch' }}>
          Dates read off the flyer scans in the archive. Venues are only listed where the flyer prints one.
        </p>
      </div>

      <div className="cols-4" style={{ marginTop: 'var(--flir-space-8)' }}>
        {PAST_SHOWS.filter(s => s.flyer).map((s, i) => (
          <div key={i} style={{ border: 'var(--flir-rule)', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--flir-bg-sunken)' }}>
            <img src={s.flyer} alt={`Flyer ${s.date}`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'var(--flir-photo-filter)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactScreen({ go }) {
  const { Card, Button, Badge } = window.THEFLIRDesignSystem_21318e;
  return (
    <div className="pg">
      <SectionHead kicker="Elsewhere" title="Contact" />
      <div className="cols-2" style={{ alignItems: 'start' }}>
        <Card accent index="Primary" status="Active" title="Instagram"
          meta={[['Handle', '@theflir'], ['Status', 'Building']]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            The live surface. Announcements, dates and archive posts go here first.
          </p>
          <a href="https://instagram.com/theflir" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">Follow</Button>
          </a>
        </Card>

        <Card index="Releases" status="Active" title="Bandcamp"
          meta={[['URL', 'theflir.bandcamp.com'], ['Releases', String(RELEASES.length)]]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Where releases go first and where the back catalogue lives.
          </p>
          <a href="https://theflir.bandcamp.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="sm">Open</Button>
          </a>
        </Card>

        <Card index="Streaming" status="Active" title="Spotify"
          meta={[['Monthly listeners', STREAMING.monthlyListeners], ['Followers', STREAMING.followers], ['Read', STREAMING.readOn]]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Please, Please, Please, listed as an EP, plus the Static Waves tracks.
          </p>
          <a href={LINKS.spotify} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="sm">Open</Button>
          </a>
        </Card>

        <Card index="Streaming" status="Active" title="Apple Music"
          meta={[['Filed under', 'Electronic'], ['Releases', '1'], ['Appearances', String(APPEARANCES.length)]]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Carries Please, Please, Please and the Static Waves compilation tracks.
          </p>
          <a href={LINKS.appleMusic} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="sm">Open</Button>
          </a>
        </Card>

        <Card index="Reference" title="AllMusic"
          meta={[['Genre', 'Electronic'], ['Active', '2000s'], ['Label', 'THE FLIR']]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            The catalogue of record. Files suture8-01 under Singles &amp; EPs and credits two 2002 compilations the streaming pages miss.
          </p>
          <a href={LINKS.allMusic} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="sm">Open</Button>
          </a>
        </Card>

        <Card index="Legacy" status="Dormant" title="Facebook"
          meta={[['Members', '~600'], ['Status', 'Migrating']]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Dormant. Media and followers are being moved to Instagram. theflir.com currently redirects here — this site replaces that redirect.
          </p>
        </Card>

        <Card index="Label" title="Eyeliner Media"
          meta={[['Role', 'Label · Management'], ['Merch', 'Shopify']]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Bookings, licensing and merch.
          </p>
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, { LiveScreen, ContactScreen });
