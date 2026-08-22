import * as React from 'react';

/**
 * The state an item holds on the door. Brand-specific: the label set is the practice's own
 * vocabulary, so never pass free text — pick a state.
 */
export interface StateChipProps {
  /** @default "sifted" */
  state?: 'sifted' | 'specified' | 'planned' | 'built' | 'verified' | 'decided' | 'conceded';
  /** @default true */
  showIcon?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export declare function StateChip(props: StateChipProps): JSX.Element;
export declare const STATES: Record<string, { label: string; tone: string; icon: string }>;
