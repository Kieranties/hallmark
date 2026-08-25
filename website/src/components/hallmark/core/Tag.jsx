import React from "react";

export function Tag({ interactive = false, selected = false, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center",
        padding: "3px 9px", borderRadius: "var(--radius-pill)",
        border: "1px solid " + (selected ? "var(--border-mark)" : "var(--border-subtle)"),
        background: selected ? "var(--accent-soft)" : hover && interactive ? "var(--bg-hover)" : "transparent",
        color: selected ? "var(--text-mark)" : "var(--text-muted)",
        fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", lineHeight: 1.5,
        cursor: interactive ? "pointer" : "default", transition: "var(--transition-ui)",
        ...(rest.style || {}),
      }}
    >{children}</span>
  );
}
