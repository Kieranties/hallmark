import React from "react";

export function TableOfContents({ items = [], active, label = "On this page", onNavigate, ...rest }) {
  return (
    <nav {...rest} style={{ width: "var(--toc-width)", flex: "none", padding: "24px 0 64px", ...(rest.style || {}) }}>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, borderLeft: "1px solid var(--border-subtle)" }}>
        {items.map((it) => {
          const on = it.id === active;
          return (
            <a key={it.id} href={"#" + it.id} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(it); } }}
              style={{
                paddingLeft: 12 + (it.depth || 0) * 12, paddingTop: 3, paddingBottom: 3,
                marginLeft: -1, borderLeft: "2px solid " + (on ? "var(--border-mark)" : "transparent"),
                fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", lineHeight: 1.5,
                color: on ? "var(--text-mark)" : "var(--text-muted)", textDecoration: "none",
                transition: "var(--transition-ui)",
              }}>{it.label}</a>
          );
        })}
      </div>
    </nav>
  );
}
