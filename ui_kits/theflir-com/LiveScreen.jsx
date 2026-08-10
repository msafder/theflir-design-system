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
      <SectionHead kicker="Booking" title="Contact" right="Hollywood, CA" />
      <div className="cols-2" style={{ alignItems: 'start' }}>
        {/* Booking leads, and it owns this screen's one red per GDL-01. The
            site made the same move on 2026-08-09: red says one thing per
            surface, and on a contact surface that thing is how you reach the
            band. Everything below it steps down to ghost.

            The address is the visible label, not "Email us" — a promoter can
            read it off the screen without opening a mail client. mailto:
            rather than a form because the site's customHttp.yml sets
            form-action 'none', so no form here could submit anywhere. */}
        <Card accent index="Primary" status="Open" title="Booking"
          meta={[['Based in', 'Hollywood, CA'], ['Covers', 'Shows · festivals · sync']]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Shows, festivals and sync licensing all go to one address. Send the date, city,
            venue, capacity and what you&rsquo;re offering &mdash; that is enough for a straight answer.
          </p>
          <a href="mailto:booking@theflir.com?subject=Booking%20enquiry%20%E2%80%94%20THE%20FLIR" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">booking@theflir.com</Button>
          </a>
        </Card>

        {/* Was accent + primary until Booking took the red. Still the live
            surface; no longer the loudest thing on the screen. */}
        <Card index="Updates" status="Active" title="Instagram"
          meta={[['Handle', '@theflir'], ['Status', 'Building']]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            The live surface. Announcements, dates and archive posts go here first.
          </p>
          <a href="https://instagram.com/theflir" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="sm">Follow</Button>
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

        {/* Footer-only on the live site, and deliberately so: it is a legacy
            audience worth keeping reachable, not a surface to convert on. Kept
            here as a card because this grid documents where the band is, which
            is broader than what the contact page links. No CTA — following it
            is not an ask this band makes.

            The redirect this card used to describe is gone. theflir.com has
            served the real site since 2026-08-07 and points nowhere else. */}
        <Card index="Legacy" status="Dormant" title="Facebook"
          meta={[['Members', '~600'], ['Status', 'Migrating'], ['Placement', 'Footer only']]}>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            Dormant. Media and followers are being moved to Instagram. Carried in the footer so the
            old audience can still find the band, and kept off the conversion surfaces.
          </p>
        </Card>

        {/* A "Bookings & Licensing" card sat here and pointed at the label. It
            was deleted from the site on 2026-08-09 (ClickUp 86bbb0uv7, site PR
            #31): the name promised booking while the href went to the label's
            homepage, which offers no route back to booking this band. The
            Booking card at the top of this grid is what replaced it, and
            nothing on the site points at the label at all now. Do not
            reinstate it. */}
      </div>
    </div>
  );
}

Object.assign(window, { LiveScreen, ContactScreen });
