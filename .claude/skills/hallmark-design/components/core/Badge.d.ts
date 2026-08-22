import * as React from 'react';

/** A small mono-set label for versions, types and counts. Squared corners — a struck tag, not a pill. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'accent' | 'verified' | 'open' | 'conceded';
  /** Transparent fill, hairline kept. @default false */
  outline?: boolean;
  /** Set in IBM Plex Mono. @default true */
  mono?: boolean;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
