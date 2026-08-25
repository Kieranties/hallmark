/**
 * Search input for the navbar, with an optional shortcut hint.
 */
export interface SearchFieldProps {
  /** @default "Search the practice" */
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Shortcut hint rendered as a kbd chip. @default "⌘K" */
  shortcut?: string;
  /** 14px leading icon node (Lucide "search"). */
  icon?: React.ReactNode;
  /** @default 260 */
  width?: number | string;
  style?: React.CSSProperties;
}
export function SearchField(props: SearchFieldProps): JSX.Element;
