/**
 * The Hallmark lockup: struck oval assay stamp (double ring, italic serif initial) plus letterspaced wordmark.
 */
export interface LogoProps {
  /** Mark size in px; wordmark and gap scale from it. @default 28 */
  size?: number;
  /** Show the HALLMARK wordmark beside the mark. @default true */
  wordmark?: boolean;
  /** accent = gold mark + ink wordmark; ink = monochrome; inverse = on dark/photographic ground. @default "accent" */
  tone?: "accent" | "ink" | "inverse";
  /** Wordmark text. @default "Hallmark" */
  label?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
