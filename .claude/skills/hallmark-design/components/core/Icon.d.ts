import * as React from 'react';

/**
 * Lucide glyph wrapper. Intentional addition: the source repository ships no icon set,
 * so this system standardises on Lucide, loaded from CDN and masked to currentColor.
 */
export interface IconProps {
  /** Lucide icon name, kebab-case — e.g. "check", "circle-dot", "arrow-right". */
  name: string;
  /** Pixel box. 16 inline with text, 18 in UI, 20–24 for feature marks. @default 18 */
  size?: number;
  /** Accessible label. Omit for decorative glyphs. */
  label?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
export declare const LUCIDE_BASE: string;
