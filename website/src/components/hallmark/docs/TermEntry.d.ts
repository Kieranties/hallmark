/**
 * One glossary definition: term, optional classification, definition, cross-references.
 */
export interface TermEntryProps {
  term: string;
  /** Small uppercase classifier, e.g. "Party", "Act", "Work type". */
  kind?: string;
  definition: React.ReactNode;
  /** Cross-references rendered as a "See also" line. */
  seeAlso?: { label: string; href: string }[];
  /** Anchor id for deep links. */
  id?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function TermEntry(props: TermEntryProps): JSX.Element;
