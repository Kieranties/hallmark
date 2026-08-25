import React from "react";

export function TermEntry({ term, kind, definition, seeAlso = [], id, children, ...rest }) {
  return (
    <article {...rest} id={id} style={{
      padding: "18px 0", borderTop: "1px solid var(--border-subtle)", ...(rest.style || {}),
    }}>
      <header style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--text-heading)", letterSpacing: "var(--tracking-tight)" }}>{term}</h3>
        {kind && <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)" }}>{kind}</span>}
      </header>
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: "var(--leading-body)", color: "var(--text-body)", maxWidth: "var(--measure-prose)" }}>{definition}</p>
      {children}
      {seeAlso.length > 0 && (
        <p style={{ margin: "10px 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          See also{" "}
          {seeAlso.map((s, i) => (
            <React.Fragment key={s.href || s.label}>
              {i > 0 && ", "}
              <a href={s.href} style={{ color: "var(--text-link)", textDecoration: "none", borderBottom: "1px solid var(--border-link)" }}>{s.label}</a>
            </React.Fragment>
          ))}
        </p>
      )}
    </article>
  );
}
