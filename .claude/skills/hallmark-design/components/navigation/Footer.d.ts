/**
 * Site footer: lockup and blurb, link columns, and a hairline-separated legal row.
 * Matches the Docusaurus `themeConfig.footer` shape (style: 'light', links: [{ title, items }]).
 */
export interface FooterProps {
  /** Link columns — `label` maps to Docusaurus' `title`. */
  columns?: { label: string; items?: { label: string; href?: string }[] }[];
  /** One-line description under the lockup. */
  blurb?: React.ReactNode;
  /** Monospace legal line, e.g. "© 2026 Hallmark. Built on the practice it describes." */
  copyright?: React.ReactNode;
  /** Optional uppercase micro-note on the right of the legal row, e.g. a version. */
  note?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Footer(props: FooterProps): JSX.Element;
