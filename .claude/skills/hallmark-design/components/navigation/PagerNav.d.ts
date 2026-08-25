/**
 * Previous / next document pager at the foot of an article.
 */
export interface PagerNavProps {
  prev?: { label: string; href?: string };
  next?: { label: string; href?: string };
  style?: React.CSSProperties;
}
export function PagerNav(props: PagerNavProps): JSX.Element;
