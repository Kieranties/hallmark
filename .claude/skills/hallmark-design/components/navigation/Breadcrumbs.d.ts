import * as React from 'react';

/** Where the current page sits in the docs tree. Mono-set, chevron separated, last item unlinked. */
export interface BreadcrumbsProps {
  items?: Array<{ label: string; href?: string }>;
  style?: React.CSSProperties;
}

export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
