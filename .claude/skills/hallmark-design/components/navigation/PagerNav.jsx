import React from "react";

function Side({ item, dir }) {
  const [hover, setHover] = React.useState(false);
  if (!item) return <span />;
  return (
    <a href={item.href || "#"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "block", flex: 1, padding: "12px 16px", textAlign: dir === "prev" ? "left" : "right",
        border: "1px solid " + (hover ? "var(--border-mark)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-3)", textDecoration: "none",
        background: "var(--bg-surface)", transition: "var(--transition-ui)",
      }}>
      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 4 }}>{dir === "prev" ? "Previous" : "Next"}</span>
      <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "var(--text-base)", color: hover ? "var(--text-mark)" : "var(--text-heading)" }}>{item.label}</span>
    </a>
  );
}

export function PagerNav({ prev, next, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", gap: 12, ...(rest.style || {}) }}>
      <Side item={prev} dir="prev" />
      <Side item={next} dir="next" />
    </div>
  );
}
