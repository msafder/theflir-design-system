/**
 * THE FLIR — Card
 * tokens: tokens/color.css, tokens/type.css, tokens/layout.css
 *
 * A square framed block with a mono index line, a wide-Archivo
 * title, and an optional data footer. Used for releases, live
 * dates, merch items and any listing on web.
 *
 * Props
 *   index    mono string top-left, e.g. 'LP 01'
 *   status   optional mono string top-right, e.g. 'OUT NOW'
 *   title    the headline
 *   meta     array of [label, value] pairs rendered as a data footer
 *   accent   boolean — draws the 4px red rule at the top
 *   media    optional node (photo). Receives --flir-photo-filter.
 */
import React from 'react';

export function Card({ index, status, title, meta = [], accent = false, media, children }) {
  return (
    <article
      style={{
        background: 'var(--flir-surface)',
        border: 'var(--flir-rule)',
        borderTop: accent
          ? 'var(--flir-border-heavy) solid var(--flir-accent)'
          : 'var(--flir-rule)',
        borderRadius: 'var(--flir-radius-none)',
        boxShadow: 'var(--flir-shadow-none)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {media && (
        <div style={{ position: 'relative', overflow: 'hidden', filter: 'var(--flir-photo-filter)' }}>
          {media}
        </div>
      )}

      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'var(--flir-space-4)',
          padding: 'var(--flir-space-4) var(--flir-space-5)',
          borderBottom: 'var(--flir-rule)',
          fontFamily: 'var(--flir-font-data)',
          fontSize: 'var(--flir-text-nano)',
          letterSpacing: 'var(--flir-ls-wider)',
          textTransform: 'uppercase',
          color: 'var(--flir-fg-faint)',
        }}
      >
        <span>{index}</span>
        {status && <span style={{ color: 'var(--flir-accent-text)' }}>{status}</span>}
      </header>

      <div style={{ padding: 'var(--flir-space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--flir-space-3)' }}>
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--flir-font-display)',
            fontVariationSettings: "'wdth' var(--flir-wdth-wide), 'wght' var(--flir-fw-bold)",
            fontSize: 'var(--flir-text-h3)',
            lineHeight: 'var(--flir-lh-tight)',
            textTransform: 'uppercase',
            color: 'var(--flir-fg)',
          }}
        >
          {title}
        </h3>
        {children}
      </div>

      {meta.length > 0 && (
        <footer
          style={{
            borderTop: 'var(--flir-rule)',
            padding: 'var(--flir-space-4) var(--flir-space-5)',
            display: 'grid',
            gap: 'var(--flir-space-2)',
            fontFamily: 'var(--flir-font-data)',
            fontSize: 'var(--flir-text-small)',
            lineHeight: 'var(--flir-lh-data)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {meta.map(([label, value]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--flir-space-4)' }}>
              <span style={{ color: 'var(--flir-fg-faint)', textTransform: 'uppercase', letterSpacing: 'var(--flir-ls-wide)' }}>{label}</span>
              <span style={{ color: 'var(--flir-fg-muted)' }}>{value}</span>
            </div>
          ))}
        </footer>
      )}
    </article>
  );
}

export default Card;
