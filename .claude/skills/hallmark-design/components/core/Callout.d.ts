import * as React from 'react';

/**
 * An admonition. Maps 1:1 onto Docusaurus `:::note` / `:::tip` / `:::info` / `:::warning` / `:::danger`,
 * so a page authored in MDX and a page mocked in this kit look identical.
 */
export interface CalloutProps {
  children?: React.ReactNode;
  /** @default "note" */
  kind?: 'note' | 'tip' | 'info' | 'warning' | 'danger';
  /** Overrides the default uppercase mono label. */
  title?: string;
  style?: React.CSSProperties;
}

export declare function Callout(props: CalloutProps): JSX.Element;
