/**
 * Hairline surface panel. The default container for grouped content and link grids.
 */
export interface CardProps {
  /** @default "div" */
  as?: "div" | "a" | "li" | "section";
  href?: string;
  /** Gold border and lift on hover. @default false */
  interactive?: boolean;
  /** Inner padding in px. @default 20 */
  padding?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
