import React, {Children, isValidElement, useMemo, useState} from 'react';

/**
 * Filters the TermEntry children written in terminology.mdx.
 *
 * The terms stay in MDX rather than moving into a data file, so a definition is
 * edited where it is read. This component only narrows what is shown — it never
 * supplies content of its own.
 */
/** The one prop this component reads off a TermEntry — the rest it passes through. */
type TermProps = {term: string};
type TermElement = React.ReactElement<TermProps>;

export function Glossary({children}: {children?: React.ReactNode}): React.JSX.Element {
  const [query, setQuery] = useState('');

  const entries = useMemo(
    () =>
      Children.toArray(children).filter((child): child is TermElement => {
        if (!isValidElement(child)) {
          return false;
        }
        return typeof (child.props as TermProps).term === 'string';
      }),
    [children],
  );

  const needle = query.trim().toLowerCase();
  const shown = needle
    ? entries.filter((entry) => entry.props.term.toLowerCase().includes(needle))
    : entries;

  return (
    <div className="hm-glossary">
      <input
        type="search"
        className="hm-glossary__filter"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={`Filter ${entries.length} terms`}
        aria-label="Filter terms"
      />
      <p className="hm-glossary__count" role="status">
        {shown.length === entries.length
          ? `${entries.length} terms`
          : `${shown.length} of ${entries.length} terms`}
      </p>
      {shown.length > 0 ? (
        <div className="hm-glossary__list">{shown}</div>
      ) : (
        <p className="hm-glossary__empty">
          No term matches <strong>{query.trim()}</strong>. A word not listed here is not
          reserved, and carries its ordinary meaning.
        </p>
      )}
    </div>
  );
}

export default Glossary;
