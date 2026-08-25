/**
 * Admonition block. Maps 1:1 onto Docusaurus `:::note` / `:::warning` containers.
 */
export interface CalloutProps {
  /** @default "note" */
  kind?: "note" | "important" | "warning" | "proof" | "failure";
  /** Overrides the default uppercase label. */
  title?: string;
  /** Optional 14px icon node placed before the label. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Callout(props: CalloutProps): JSX.Element;
