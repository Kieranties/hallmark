import React from "react";

export function PrincipleCard({ index, name, test, children, ...rest }) {
  return (
    <div {...rest} style={{
      background: "var(--bg-surface)", border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-3)", padding: 20, boxShadow: "var(--shadow-1)", ...(rest.style || {}),
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        {index != null && (
          <span style={{
            width: 22, height: 22, display: "grid", placeItems: "center", flex: "none",
            clipPath: "var(--cartouche)", background: "var(--accent)", color: "var(--accent-on)",
            fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)",
          }}>{index}</span>
        )}
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-md)", fontWeight: 600, color: "var(--text-heading)" }}>{name}</h3>
      </div>
      {test && <p style={{ margin: "0 0 8px", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-base)", color: "var(--text-mark)" }}>{test}</p>}
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-body)", color: "var(--text-muted)" }}>{children}</p>
    </div>
  );
}
