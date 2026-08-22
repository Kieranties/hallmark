import * as React from 'react';

/**
 * The docs table. Hallmark's prose leans on two-column "X | holds Y" tables heavily,
 * so this is a first-class component rather than raw markup.
 */
export interface DataTableProps {
  /** Either plain strings (used as both key and label) or `{ key, label }`. */
  columns?: Array<string | { key: string; label: string }>;
  /** One object per row, keyed by column key. Values may be nodes. */
  rows?: Array<Record<string, React.ReactNode>>;
  /** Footnote below the table. */
  caption?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function DataTable(props: DataTableProps): JSX.Element;
