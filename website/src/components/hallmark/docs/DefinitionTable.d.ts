/**
 * Two- or three-column reference table — roles, mappings, work-type tests.
 */
export interface DefinitionTableProps {
  columns: string[];
  /** Row cells; the first column is emphasised. */
  rows: React.ReactNode[][];
  style?: React.CSSProperties;
}
export function DefinitionTable(props: DefinitionTableProps): JSX.Element;
