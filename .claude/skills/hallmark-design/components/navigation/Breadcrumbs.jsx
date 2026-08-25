import React from "react";

export function Breadcrumbs({ items = [], separator = "/", ...rest }) {
  return (
    <nav {...rest} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", ...(rest.style || {}) }}>
      {items.map((it, i) => (
        <React.Fragment key={it.label}>
          {i > 0 && <span style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>{separator}</span>}
          {it.href && i < items.length - 1
            ? <a href={it.href} style={{ color: "var(--text-muted)", textDecoration: "none" }}>{it.label}</a>
            : <span style={{ color: i === items.length - 1 ? "var(--text-body)" : "var(--text-muted)" }}>{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
