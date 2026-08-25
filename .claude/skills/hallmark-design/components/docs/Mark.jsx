import React from "react";

/** Inline call-out of a defined term or an identifying mark. */
export function Mark({ variant = "term", href, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  if (variant === "identifier") {
    return (
      <code {...rest} style={{
        fontFamily: "var(--font-mono)", fontSize: "0.88em", padding: "1px 5px",
        background: "var(--bg-code)", color: "var(--text-code)",
        border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-1)",
        fontVariantLigatures: "none", ...(rest.style || {}),
      }}>{children}</code>
    );
  }
  const Tag = href ? "a" : "span";
  return (
    <Tag
      {...rest}
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: "var(--text-mark)", fontWeight: "var(--weight-medium)",
        textDecoration: "none",
        borderBottom: (hover && href ? "1px solid " : "1px dotted ") + "var(--border-mark)",
        cursor: href ? "pointer" : "help",
        background: variant === "keyword" ? "var(--accent-soft)" : "transparent",
        padding: variant === "keyword" ? "0 3px" : 0,
        transition: "var(--transition-ui)", ...(rest.style || {}),
      }}
    >{children}</Tag>
  );
}
