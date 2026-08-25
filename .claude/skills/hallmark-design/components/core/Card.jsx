import React from "react";

export function Card({ as = "div", interactive = false, padding = 20, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block", background: "var(--bg-surface)",
        border: "1px solid " + (interactive && hover ? "var(--border-mark)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-3)", padding,
        boxShadow: interactive && hover ? "var(--shadow-2)" : "var(--shadow-1)",
        color: "var(--text-body)", textDecoration: "none",
        transition: "var(--transition-ui)", ...(rest.style || {}),
      }}
    >{children}</Tag>
  );
}
