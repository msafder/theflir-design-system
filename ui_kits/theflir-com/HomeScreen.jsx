/* THE FLIR — theflir.com: Home.
   Wide-angle photographic field, the wordmark, the current release,
   and one red element (the Listen button). */

function HomeScreen({ go }) {
  const { Button, Badge, Card } = window.THEFLIRDesignSystem_21318e;
  const release = RELEASES[0];

  return (
    <div>
      <PhotoField src={PHOTOS[0]} className="hero" height={null}>
        <div className="hero-pad" style={{ height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span className="flir-type-label" style={{ color: 'var(--flir-fg-muted)' }}>Los Angeles · Est. MM</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-5)', alignItems: 'flex-start' }}>
            <span className="flir-wordmark wm-hero"><span className="the">The</span><span className="flir">Flir</span></span>
            <div className="hero-rule" style={{ height: 'var(--flir-border-heavy)', background: 'var(--flir-accent)' }} />
            <p className="flir-type-body hero-lede" style={{ margin: 0, color: 'var(--flir-grey-80)' }}>
              Trip hop, shoegaze and everything that falls between them. Recorded in Los Angeles.
            </p>
            <div style={{ display: 'flex', gap: 'var(--flir-space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => go(release.id)}>Listen</Button>
              <Button variant="ghost" size="lg" onClick={() => go('live')}>Live dates</Button>
            </div>
          </div>
        </div>
      </PhotoField>

      <div className="pg-tight split">
        <div>
          <SectionHead kicker="Latest release" title={release.title} right={`${release.catalogue} · ${release.year}`} />
          <div className="release-brief">
            <img src={release.cover} alt={release.title} style={{ width: '100%', display: 'block', border: 'var(--flir-rule)', background: 'var(--flir-black)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-4)', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: 'var(--flir-space-2)' }}>
                <Badge tone="outline">{release.format}</Badge>
                <Badge tone="quiet">{release.trackCount} tracks</Badge>
                <Badge tone="quiet">{release.date}</Badge>
              </div>
              <div className="flir-type-data" style={{ color: 'var(--flir-fg-muted)', width: '100%' }}>
                {release.tracks.map(t => (
                  <div key={t.n} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--flir-space-4)', borderBottom: 'var(--flir-rule)', whiteSpace: 'nowrap' }}>
                    <span>{t.n} · {t.title}</span>
                    {t.note && <span style={{ color: 'var(--flir-fg-faint)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.note}</span>}
                  </div>
                ))}
              </div>
              <Button variant="ghost" onClick={() => go(release.id)} meta={release.year}>Full release</Button>
            </div>
          </div>
        </div>

        <div>
          <SectionHead kicker="Next" title="Live" />
          <Card index="Live" status="No dates announced" title="Nothing scheduled">
            <p className="flir-type-body" style={{ margin: 0, color: 'var(--flir-fg-muted)' }}>
              New material is in progress. Dates will be posted here and on Instagram first.
            </p>
            <Button variant="quiet" size="sm" onClick={() => go('live')}>Past shows</Button>
          </Card>
        </div>
      </div>

      <div className="pg-tight">
        {/* Two headings rather than a status label on every card. The grouping
            carries the distinction, so nobody has to be tagged "former" or
            "hired" next to their own photograph. */}
        <SectionHead kicker="Personnel" title="Members" right="Present and past" />
        <div className="cols-4">
          {BAND.filter(b => b.member).sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0)).map(b => (
            <div key={b.name} style={{ borderTop: 'var(--flir-rule-strong)', paddingTop: 'var(--flir-space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)' }}>
              {/* Only one member has a supplied photograph. The others get a
                  blank field rather than a stand-in face. */}
              <div style={{ aspectRatio: '1', overflow: 'hidden', border: 'var(--flir-rule)', background: 'var(--flir-bg-sunken)', position: 'relative' }}>
                {b.photo
                  ? <img src={b.photo} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: b.filter || 'var(--flir-photo-filter-corbijn)' }} />
                  : <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 'var(--flir-space-3)', fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>No photograph</span>}
                {b.photo && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--flir-grain-hard)' }} />}
              </div>
              <span className="flir-type-title" style={{ fontSize: 'var(--flir-text-lead)' }}>{b.name}</span>
              <span className="flir-type-label" style={{ color: 'var(--flir-fg-muted)' }}>{b.role}</span>
              {(b.also || b.tenure) && <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', lineHeight: 'var(--flir-lh-body)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>{b.also || b.tenure}</span>}
              {b.credited && <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>Credited · suture8-01</span>}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--flir-space-8)' }}>
          <SectionHead kicker="Personnel" title="Collaborators" />
          <div className="cols-4">
            {BAND.filter(b => !b.member).map(b => (
              <div key={b.name} style={{ borderTop: 'var(--flir-rule)', paddingTop: 'var(--flir-space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)' }}>
                <div style={{ aspectRatio: '1', overflow: 'hidden', border: 'var(--flir-rule)', background: 'var(--flir-bg-sunken)', position: 'relative' }}>
                  <img src={b.photo} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: b.filter || 'var(--flir-photo-filter-corbijn)' }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--flir-grain-hard)' }} />
                </div>
                <span className="flir-type-title" style={{ fontSize: 'var(--flir-text-lead)' }}>{b.name}</span>
                <span className="flir-type-label" style={{ color: 'var(--flir-fg-muted)' }}>{b.role}</span>
                {b.tenure && <span style={{ fontFamily: 'var(--flir-font-data)', fontSize: 'var(--flir-text-nano)', lineHeight: 'var(--flir-lh-body)', letterSpacing: 'var(--flir-ls-wide)', textTransform: 'uppercase', color: 'var(--flir-fg-faint)' }}>{b.tenure}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pg" style={{ paddingTop: 'var(--flir-space-8)' }}>
        <SectionHead kicker="Archive" title="Photographs" right="2000 — 2006" />
        <div className="photo-grid">
          {PHOTOS.slice(1, 7).map(p => (
            <div key={p} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', border: 'var(--flir-rule)' }}>
              <img src={p} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'var(--flir-photo-filter-corbijn)' }} />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--flir-grain-hard)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen });
