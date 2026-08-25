/**
 * Right-hand in-page contents rail with an active marker.
 */
export interface TableOfContentsProps {
  items?: { id: string; label: string; depth?: 0 | 1 }[];
  active?: string;
  /** @default "On this page" */
  label?: string;
  onNavigate?: (item: { id: string; label: string }) => void;
  style?: React.CSSProperties;
}
export function TableOfContents(props: TableOfContentsProps): JSX.Element;
