/**
 * Fenced code surface with an optional filename / language bar, line numbers and highlighted lines.
 */
export interface CodeBlockProps {
  filename?: string;
  language?: string;
  /** Show a line-number gutter (string children only). @default false */
  lineNumbers?: boolean;
  /** 1-based line numbers to highlight with a gold rail and soft plate. */
  highlight?: number[];
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function CodeBlock(props: CodeBlockProps): JSX.Element;
