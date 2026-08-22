import * as React from 'react';

/** A fenced code block with a mono header strip and copy affordance — the branded Docusaurus code block. */
export interface CodeBlockProps {
  /** The literal code, newlines included. */
  code?: string;
  /** Shown in the header when `title` is absent. @default "bash" */
  language?: string;
  /** Replaces the language label — use for file paths, e.g. ".hallmark/repository.yml". */
  title?: string;
  /** @default true */
  showCopy?: boolean;
  style?: React.CSSProperties;
}

export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
