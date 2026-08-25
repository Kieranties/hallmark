import React from "react";

export function SearchField({ placeholder = "Search the practice", value, onChange, shortcut = "⌘K", icon, width = 260, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", gap: 8, width,
      padding: "6px 10px", background: "var(--bg-surface)",
      border: "1px solid " + (focus ? "var(--border-mark)" : "var(--border-default)"),
      borderRadius: "var(--radius-2)", boxShadow: focus ? "var(--shadow-1)" : "none",
      transition: "var(--transition-ui)", ...(rest.style || {}),
    }}>
      <span style={{ display: "flex", color: "var(--text-faint)", flex: "none" }}>{icon}</span>
      <input value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
          fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--text-body)",
        }} />
      {shortcut && <kbd style={{
        fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-faint)",
        border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-1)", padding: "1px 4px",
      }}>{shortcut}</kbd>}
    </div>
  );
}
