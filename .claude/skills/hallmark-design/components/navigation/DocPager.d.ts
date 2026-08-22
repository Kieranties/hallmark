import * as React from 'react';

/** Prev/next pair at the foot of a docs page. Mirrors Docusaurus's pagination, branded. */
export interface DocPagerProps {
  previous?: { label: string; href?: string };
  next?: { label: string; href?: string };
  style?: React.CSSProperties;
}

export declare function DocPager(props: DocPagerProps): JSX.Element;
