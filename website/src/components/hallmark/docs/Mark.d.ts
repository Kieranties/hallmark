/**
 * Inline emphasis for glossary terms, keywords and identifiers inside prose.
 */
export interface MarkProps {
  /** term = dotted gold underline (links to the glossary); keyword = soft gold plate; identifier = mono chip. @default "term" */
  variant?: "term" | "keyword" | "identifier";
  /** Glossary target. Omit for a non-linking mark. */
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Mark(props: MarkProps): JSX.Element;
