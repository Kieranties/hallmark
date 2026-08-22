import * as React from 'react';

/** A link card for a doc, section or declaration. The Docusaurus generated-index card, branded. */
export interface DocCardProps {
  title: string;
  description?: string;
  href?: string;
  /** Badges or chips shown along the card's foot. */
  meta?: React.ReactNode;
  /** Lucide icon name. @default "file-text" */
  icon?: string;
  style?: React.CSSProperties;
}

export declare function DocCard(props: DocCardProps): JSX.Element;
