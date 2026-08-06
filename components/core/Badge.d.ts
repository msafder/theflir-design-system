import * as React from 'react';

/**
 * Square mono chip. Badges state fact, not opinion — a status, a catalogue
 * number, a format, a date. They are never links.
 *
 * @startingPoint section="Core" subtitle="Square mono status chip" viewport="700x150"
 */
export interface BadgeProps {
  /** Default 'quiet'. Use 'hot' at most once per surface. */
  tone?: 'hot' | 'outline' | 'solid' | 'quiet';
  /** 6px square lead marker. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
export default Badge;
