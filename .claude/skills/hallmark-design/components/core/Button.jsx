import React from "react";

const SIZES = {
  sm: { padding: "5px 10px", fontSize: "var(--text-xs)", gap: 6 },
  md: { padding: "8px 14px", fontSize: "var(--text-sm)", gap: 8 },
  lg: { padding: "11px 20px", fontSize: "var(--text-base)", gap: 10 },
};

export function Button({ variant = "primary", size = "md", disabled = false, as = "button", children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const skin = {
    primary: {
      background: hover && !disabled ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--accent-on)",
      border: "1px solid transparent",
    },
    secondary: {
      background: hover && !disabled ? "var(--bg-hover)" : "var(--bg-surface)",
      color: "var(--text-body)",
      border: "1px solid var(--border-default)",
    },
    ghost: {
      background: hover && !disabled ? "var(--bg-hover)" : "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
    },
  }[variant];
  const Tag = as;
  return (
    <Tag
      {...rest}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: s.gap,
        padding: s.padding, fontFamily: "var(--font-sans)", fontSize: s.fontSize,
        fontWeight: "var(--weight-medium)", lineHeight: 1.2, letterSpacing: "0.01em",
        borderRadius: "var(--radius-2)", cursor: disabled ? "not-allowed" : "pointer",
        textDecoration: "none", whiteSpace: "nowrap",
        opacity: disabled ? 0.45 : 1,
        boxShadow: press && !disabled ? "var(--shadow-struck)" : "none",
        transition: "var(--transition-ui)",
        ...skin, ...(rest.style || {}),
      }}
    >{children}</Tag>
  );
}
