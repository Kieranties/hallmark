import * as React from 'react';

/** The Docusaurus `<Tabs>` equivalent: alternative instructions for the same step. */
export interface TabbedPanelProps {
  tabs?: Array<{ label: string; content: React.ReactNode }>;
  /** Index shown first. @default 0 */
  initial?: number;
  style?: React.CSSProperties;
}

export declare function TabbedPanel(props: TabbedPanelProps): JSX.Element;
