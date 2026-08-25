/**
 * Work-state chip using the practice's own state vocabulary.
 */
export interface StateChipProps {
  /** New | Accepted | Specified | Planned | Actioned | Validated | Complete | Closed | Retracted | Committed | Uncommitted */
  state: string;
  /** Override the tone derived from the state name. */
  tone?: "neutral" | "accent" | "pass" | "fail";
  style?: React.CSSProperties;
}
export function StateChip(props: StateChipProps): JSX.Element;
