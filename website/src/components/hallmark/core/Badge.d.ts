/**
 * Small status label — verification outcomes, concessions, states.
 */
export interface BadgeProps {
  /** @default "neutral" */
  tone?: "neutral" | "accent" | "pass" | "fail" | "concession";
  /** Monospace, mixed-case form for identifiers rather than statuses. @default false */
  mono?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
