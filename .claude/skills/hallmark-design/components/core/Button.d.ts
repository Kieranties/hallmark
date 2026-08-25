/**
 * Action control. Primary carries the gold; everything else stays quiet.
 */
export interface ButtonProps {
  /** @default "primary" */
  variant?: "primary" | "secondary" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Render as another element, e.g. "a" for a link-button. @default "button" */
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
