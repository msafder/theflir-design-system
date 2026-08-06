import * as React from 'react';

/**
 * Square framed block — mono index line, display title, optional data footer.
 * Releases, live dates, merch items, any listing on web.
 *
 * @startingPoint section="Core" subtitle="Framed listing block with data footer" viewport="700x360"
 */
export interface CardProps {
  /** Mono string, top-left. e.g. 'suture8-01'. */
  index?: string;
  /** Mono string, top-right. Renders in accent. e.g. 'OUT NOW'. */
  status?: string;
  title?: string;
  /** [label, value] pairs rendered as a tabular data footer. */
  meta?: Array<[string, string]>;
  /** Draws the 4px red rule across the top. One accented card per view. */
  accent?: boolean;
  /** Photo node. Receives --flir-photo-filter. */
  media?: React.ReactNode;
  /** Override the media filter. Pass 'none' for artwork that IS the palette —
   *  release covers, the heat-map merch prints. Default 'var(--flir-photo-filter)'. */
  mediaFilter?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
export default Card;
