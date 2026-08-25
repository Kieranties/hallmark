/**
 * Numbered principle panel — the octagonal punch carries the number.
 */
export interface PrincipleCardProps {
  /** Number shown inside the punch cartouche. */
  index?: number | string;
  name: string;
  /** The italic one-line test, e.g. "If something is claimed, there must be evidence to prove it." */
  test?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PrincipleCard(props: PrincipleCardProps): JSX.Element;
