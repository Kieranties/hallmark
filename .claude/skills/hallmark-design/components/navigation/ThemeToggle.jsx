import React from "react";

export function ThemeToggle({ theme = "light", onChange, icons, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const next = theme === "light" ? "dark" : "light";
  const glyph = icons ? icons[next] : null;
  return (
    <button {...rest} type="button" aria-label={"Switch to " + next + " theme"}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={() => onChange && onChange(next)}
      style={{
        width: 30, height: 30, display: "grid", placeItems: "center",
        background: hover ? "var(--bg-hover)" : "transparent",
        border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-2)",
        color: "var(--text-muted)", cursor: "pointer", fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)", transition: "var(--transition-ui)", ...(rest.style || {}),
      }}>{glyph || (next === "dark" ? "D" : "L")}</button>
  );
}
