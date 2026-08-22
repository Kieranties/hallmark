import * as React from 'react';

/** A keyboard key or command-palette hint. The 2px bottom border is the key's edge — keep it. */
export interface KbdProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Kbd(props: KbdProps): JSX.Element;
