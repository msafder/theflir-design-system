/**
 * THE FLIR — Button
 * tokens: tokens/color.css, tokens/type.css, tokens/layout.css
 *
 * Square, rule-bound, mono-labelled. There is no rounded button
 * in this system. Exactly one 'primary' button per view — it is
 * the red element on that surface.
 *
 * Props
 *   variant  'primary' | 'ghost' | 'quiet'
 *   size     'sm' | 'md' | 'lg'
 *   meta     optional right-aligned mono string (duration, date)
 */
import React from 'react';

const SIZES = {
  sm: { pad: 'var(--flir-space-2) var(--flir-space-3)', font: 'var(--flir-text-nano)' },
  md: { pad: 'var(--flir-space-3) var(--flir-space-5)', font: 'var(--flir-text-micro)' },
  lg: { pad: 'var(--flir-space-4) var(--flir-space-6)', font: 'var(--flir-text-small)' },
};

const VARIANTS = {
  primary: {
    background: 'var(--flir-accent)',
    color: 'var(--flir-accent-fg)',
    border: 'var(--flir-border-mark) solid var(--flir-accent)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--flir-fg)',
    border: 'var(--flir-border-mark) solid var(--flir-line-strong)',
  },
  quiet: {
    background: 'transparent',
    color: 'var(--flir-fg-muted)',
    border: 'var(--flir-border-mark) solid transparent',
  },
};

export function Button({ variant = 'primary', size = 'md', meta, children, ...rest }) {
  const s = SIZES[size];
  return (
    <button
      {...rest}
      data-flir-variant={variant}
      style={{
        ...VARIANTS[variant],
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--flir-space-3)',
        padding: s.pad,
        fontFamily: 'var(--flir-font-data)',
        fontWeight: 'var(--flir-fw-medium)',
        fontSize: s.font,
        letterSpacing: 'var(--flir-ls-wider)',
        textTransform: 'uppercase',
        lineHeight: 'var(--flir-lh-snug)',
        borderRadius: 'var(--flir-radius-none)',
        boxShadow: 'var(--flir-shadow-none)',
        cursor: 'pointer',
        transition: 'background var(--flir-transition), color var(--flir-transition), border-color var(--flir-transition)',
        ...rest.style,
      }}
    >
      <span>{children}</span>
      {meta && (
        <span style={{ color: 'currentColor', opacity: 0.7, letterSpacing: 'var(--flir-ls-wide)' }}>
          {meta}
        </span>
      )}
    </button>
  );
}

export default Button;
