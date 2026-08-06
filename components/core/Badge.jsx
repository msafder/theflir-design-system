/**
 * THE FLIR — Badge
 * tokens: tokens/color.css, tokens/type.css, tokens/layout.css
 *
 * A square mono chip. Badges state fact, not opinion: a status,
 * a catalogue number, a format, a date. They are never links.
 *
 * Props
 *   tone   'hot' | 'outline' | 'solid' | 'quiet'
 *   dot    boolean — 6px square lead marker
 */
import React from 'react';

const TONES = {
  hot:     { background: 'var(--flir-accent)',    color: 'var(--flir-accent-fg)', border: 'var(--flir-border-hair) solid var(--flir-accent)' },
  outline: { background: 'transparent',           color: 'var(--flir-accent-text)', border: 'var(--flir-border-hair) solid var(--flir-accent)' },
  solid:   { background: 'var(--flir-fg)',        color: 'var(--flir-fg-inverse)', border: 'var(--flir-border-hair) solid var(--flir-fg)' },
  quiet:   { background: 'transparent',           color: 'var(--flir-fg-muted)',  border: 'var(--flir-border-hair) solid var(--flir-line-strong)' },
};

export function Badge({ tone = 'quiet', dot = false, children }) {
  return (
    <span
      data-flir-tone={tone}
      style={{
        ...TONES[tone],
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--flir-space-2)',
        padding: 'var(--flir-space-1) var(--flir-space-2)',
        fontFamily: 'var(--flir-font-data)',
        fontWeight: 'var(--flir-fw-medium)',
        fontSize: 'var(--flir-text-nano)',
        letterSpacing: 'var(--flir-ls-wider)',
        textTransform: 'uppercase',
        lineHeight: 'var(--flir-lh-snug)',
        borderRadius: 'var(--flir-radius-none)',
        boxShadow: 'var(--flir-shadow-none)',
        whiteSpace: 'nowrap',
      }}
    >
      {dot && <span style={{ width: 6, height: 6, background: 'currentColor', flex: 'none' }} />}
      {children}
    </span>
  );
}

export default Badge;
