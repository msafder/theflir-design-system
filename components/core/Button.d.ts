import * as React from 'react';

/**
 * Square, rule-bound, mono-labelled action. Exactly one `primary` per view —
 * it is the single red element on that surface.
 *
 * @startingPoint section="Core" subtitle="Square mono action, one red per view" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = the one red element on the surface. Default 'primary'. */
  variant?: 'primary' | 'ghost' | 'quiet';
  /** Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Right-aligned mono string — duration, date, catalogue number. */
  meta?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
export default Button;
