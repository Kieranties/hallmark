/**
 * Path trail above an article title.
 */
export interface BreadcrumbsProps {
  items?: { label: string; href?: string }[];
  /** @default "/" */
  separator?: string;
  style?: React.CSSProperties;
}
export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
