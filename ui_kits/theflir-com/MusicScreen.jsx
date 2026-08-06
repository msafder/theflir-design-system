/* THE FLIR — theflir.com: Music index and release detail. */

function MusicScreen({ go }) {
  const { Card, Badge, Button } = window.THEFLIRDesignSystem_21318e;
  return (
    <div className="pg">
      <SectionHead kicker="Discography" title="Music" right={`${RELEASES.length} releases`} />
      <div className="cols-3" style={{ alignItems: 'start' }}>
        {/* A repeating list carries no red: ghost action, status in the footer. */}
        {RELEASES.map(r => (
          <Card key={r.id} index={r.catalogue} title={r.title} mediaFilter="none"
            media={<img src={r.cover} alt={r.title} style={{ width: '100%', display: 'block', aspectRatio: '1', objectFit: 'cover' }} />}
            meta={[['Format', r.format], ['Tracks', String(r.trackCount)], ['Released', r.date]]}>
            <Button variant="ghost" size="sm" onClick={() => go(r.id)}>Open</Button>
          </Card>
        ))}
        <div style={{ border: 'var(--flir-rule)', borderStyle: 'dashed', padding: 'var(--flir-space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)', minHeight: 260, justifyContent: 'center' }}>
          <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>In progress</span>
          <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
            New material is being recorded. Nothing is scheduled for release yet.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 'var(--flir-space-9)' }}>
        <SectionHead kicker="Spotify" title="Most played" right={`Read ${STREAMING.readOn}`} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STREAMING.topTracks.map(t => (
            <div key={t.title} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--flir-space-5)', padding: 'var(--flir-space-3) 0', borderBottom: 'var(--flir-rule)', fontFamily: 'var(--flir-font-data)' }}>
              <span style={{ fontSize: 'var(--flir-text-body)', color: 'var(--flir-fg)' }}>{t.title}</span>
              <span style={{ fontSize: 'var(--flir-text-small)', color: 'var(--flir-fg-muted)', fontVariantNumeric: 'tabular-nums' }}>{t.plays}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 'var(--flir-space-6)', marginTop: 'var(--flir-space-4)' }}>
          <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>{STREAMING.monthlyListeners} monthly listeners</span>
          <span className="flir-type-label" style={{ color: 'var(--flir-fg-faint)' }}>{STREAMING.followers} followers</span>
        </div>
      </div>

      <div style={{ marginTop: 'var(--flir-space-9)' }}>
        <SectionHead kicker="Also on" title="Compilations" right={`${APPEARANCES.length} appearances`} />
        <div>
          {/* Sorted at render, not in the array: a date has already been
              corrected once, and a hand-ordered list drifts silently. */}
          {[...APPEARANCES].sort((a, b) => b.year.localeCompare(a.year)).map(a => (
            <div key={a.album} className="show-row" style={{ padding: 'var(--flir-space-4) 0', borderBottom: 'var(--flir-rule)', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-small)' }}>
              <span style={{ color: 'var(--flir-fg-faint)', fontVariantNumeric: 'tabular-nums' }}>{a.year}</span>
              <span style={{ color: a.track ? 'var(--flir-fg)' : 'var(--flir-fg-faint)', fontSize: a.track ? 'var(--flir-text-body)' : 'var(--flir-text-nano)', letterSpacing: a.track ? 'var(--flir-ls-none)' : 'var(--flir-ls-wide)', textTransform: a.track ? 'none' : 'uppercase' }}>
                {a.track || 'Track not named'}
              </span>
              <span style={{ color: 'var(--flir-fg-muted)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)', fontSize: 'var(--flir-text-nano)' }}>
                {a.album}{a.position ? ` · Track ${a.position}` : ''}
              </span>
              <span style={{ justifySelf: 'end', color: 'var(--flir-fg-faint)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)', fontSize: 'var(--flir-text-nano)', whiteSpace: 'nowrap' }}>
                {a.runtime || ''}
              </span>
            </div>
          ))}
        </div>
        <p className="flir-type-body" style={{ marginTop: 'var(--flir-space-4)', color: 'var(--flir-fg-faint)', fontSize: 'var(--flir-text-small)', maxWidth: '64ch' }}>
          Listed on Apple Music, AllMusic and Discogs. Three carry tracks that exist nowhere else in the catalogue. Track 3 on <em>12 Tales</em> (Instinct Records, 2002); track 10 on <em>Test Tones Volume 02</em> (Clairecords, 2003, limited to 1000).
        </p>
      </div>

      <div style={{ marginTop: 'var(--flir-space-9)' }}>
        <SectionHead kicker="Where to listen" title="Bandcamp" />
        <div className="bandcamp-block" style={{ border: 'var(--flir-rule)', borderTop: 'var(--flir-border-heavy) solid var(--flir-accent)', padding: 'var(--flir-space-6)' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)', alignItems: 'flex-start' }}>
            <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)', maxWidth: '58ch' }}>
              Bandcamp is where releases go first and where the back catalogue lives. Everything else follows from it.
            </p>
            <span className="flir-type-data" style={{ color: 'var(--flir-fg-faint)' }}>theflir.bandcamp.com</span>
          </div>
          <a href="https://theflir.bandcamp.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="lg">Open Bandcamp</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function ReleaseScreen({ id, go }) {
  const { Badge, Button } = window.THEFLIRDesignSystem_21318e;
  const r = RELEASES.find(x => x.id === id) || RELEASES[0];
  return (
    <div>
      <PhotoField src={PHOTOS[2]} height={340}>
        <div className="hero-pad" style={{ height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 'var(--flir-space-4)' }}>
          <span className="flir-type-label" style={{ color: 'var(--flir-fg-muted)' }}>{r.catalogue} · {r.year}</span>
          <h1 className="flir-type-display release-head" style={{ margin: 0 }}>{r.title}</h1>
        </div>
      </PhotoField>

      <div className="pg release-detail">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-4)', alignItems: 'flex-start' }}>
          <img src={r.cover} alt={r.title} style={{ width: '100%', display: 'block', border: 'var(--flir-rule)', background: 'var(--flir-black)' }} />
          <div style={{ display: 'flex', gap: 'var(--flir-space-2)', flexWrap: 'wrap' }}>
            {/* outline, not hot: the Bandcamp CTA below is this surface's one
                red fill. tone="hot" is for surfaces with no primary button. */}
            <Badge tone="outline" dot>{r.status}</Badge>
            <Badge tone="outline">{r.format}</Badge>
          </div>
          <a href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="lg">Listen on Bandcamp</Button>
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-7)' }}>
          <div>
            <SectionHead kicker="Tracklist" title={`${r.trackCount} tracks`} right={r.date} />
            <div className="flir-type-data" style={{ color: 'var(--flir-fg)' }}>
              {r.tracks.map(t => (
                <div key={t.n} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--flir-space-4)', padding: 'var(--flir-space-3) 0', borderBottom: 'var(--flir-rule)' }}>
                  <span style={{ display: 'flex', gap: 'var(--flir-space-5)' }}>
                    <span style={{ color: 'var(--flir-fg-faint)' }}>{t.n}</span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: 'var(--flir-text-body)' }}>{t.title}</span>
                      {t.vocals && <span style={{ fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>Vocals · {t.vocals}</span>}
                    </span>
                  </span>
                  <span style={{ color: 'var(--flir-fg-faint)', fontSize: t.time ? 'var(--flir-text-small)' : 'var(--flir-text-nano)', letterSpacing: t.time ? 'var(--flir-ls-none)' : 'var(--flir-ls-wider)', textTransform: t.time ? 'none' : 'uppercase', fontVariantNumeric: 'tabular-nums' }}>
                    {t.time || t.note || ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHead kicker="Credits" title="Release data" />
            <div className="credits">
              {[
                ['Catalogue', r.catalogue],
                ['Released', r.dateLong],
                ['Format', r.format],
                ['Runtime', r.runtime || '—'],
                ['Style', r.styles || '—'],
                /* No hardcoded fallbacks. A dash is honest; an invented label
                   name looks like data. */
                ['Label', r.labelCredit || '—'],
                ['Recorded', r.recordedIn || '—'],
              ].map(([k, v]) => (
                /* Stacked, not right-aligned: these values are phrases and a
                   2-up row tears them into ragged lines. */
                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-1)', borderBottom: 'var(--flir-rule)', padding: 'var(--flir-space-3) 0', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-small)' }}>
                  <span style={{ color: 'var(--flir-fg-faint)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)', fontSize: 'var(--flir-text-nano)' }}>{k}</span>
                  <span style={{ color: 'var(--flir-fg-muted)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {r.credits && (
            <div>
              <SectionHead kicker="Personnel" title="Who played" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {r.credits.map(([role, who]) => (
                  <div key={role} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--flir-space-5)', padding: 'var(--flir-space-3) 0', borderBottom: 'var(--flir-rule)', fontFamily: 'var(--flir-font-data)' }}>
                    <span style={{ color: 'var(--flir-fg-faint)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)', fontSize: 'var(--flir-text-nano)' }}>{role}</span>
                    <span style={{ color: 'var(--flir-fg)', fontSize: 'var(--flir-text-body)', textAlign: 'right' }}>{who}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button variant="quiet" onClick={() => go('music')}>← All releases</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MusicScreen, ReleaseScreen });
