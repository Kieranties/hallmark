/**
 * Outlined pill for classification — work types, disciplines, doc categories.
 */
export interface TagProps {
  /** Hover affordance and pointer cursor. @default false */
  interactive?: boolean;
  /** @default false */
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
