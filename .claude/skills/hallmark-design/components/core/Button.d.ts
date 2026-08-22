import * as React from 'react';

/**
 * Hallmark's action control. Madder primary for the single next step on a page,
 * outlined secondary for alternatives, ghost for inline/toolbar actions.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual weight. One primary per view. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an anchor instead of a button. */
  href?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
