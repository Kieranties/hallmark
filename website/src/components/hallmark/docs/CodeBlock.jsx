import React from "react";

export function CodeBlock({ filename, language, lineNumbers = false, highlight = [], children, ...rest }) {
  const raw = typeof children === "string" ? children.replace(/\n$/, "") : null;
  const lines = raw != null ? raw.split("\n") : null;
  const gutter = { width: 30, flex: "none", textAlign: "right", paddingRight: 12, color: "var(--code-line-number)", userSelect: "none" };
  return (
    <div {...rest} style={{
      border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-3)",
      overflow: "hidden", background: "var(--bg-code)", ...(rest.style || {}),
    }}>
      {(filename || language) && (
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "6px 12px", borderBottom: "1px solid var(--border-subtle)",
          background: "var(--bg-sunken)", fontFamily: "var(--font-mono)",
          fontSize: "var(--text-2xs)", color: "var(--text-muted)",
        }}>
          <span>{filename}</span>
          <span style={{ letterSpacing: "var(--tracking-wide)", textTransform: "uppercase" }}>{language}</span>
        </div>
      )}
      <pre style={{ margin: 0, padding: "12px 0", overflowX: "auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--code-plain)", fontVariantLigatures: "none" }}>
        <code style={{ display: "block" }}>
          {lines
            ? lines.map((ln, i) => (
                <span key={i} style={{ display: "flex", padding: "0 14px", background: highlight.includes(i + 1) ? "var(--code-line-highlight)" : "transparent", boxShadow: highlight.includes(i + 1) ? "inset 2px 0 0 var(--accent)" : "none" }}>
                  {lineNumbers && <span style={gutter}>{i + 1}</span>}
                  <span style={{ whiteSpace: "pre" }}>{ln || " "}</span>
                </span>
              ))
            : <span style={{ display: "block", padding: "0 14px" }}>{children}</span>}
        </code>
      </pre>
    </div>
  );
}
