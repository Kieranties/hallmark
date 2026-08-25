import React from "react";

function Item({ node, active, onNavigate, depth }) {
  const on = node.id === active;
  return (
    <a href={node.href || "#"} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(node); } }}
      style={{
        display: "flex", alignItems: "center", gap: 8, padding: "5px 10px", paddingLeft: 10 + depth * 12,
        marginLeft: depth ? 2 : 0,
        borderLeft: depth ? "1px solid " + (on ? "var(--border-mark)" : "var(--border-subtle)") : "none",
        fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: 1.45,
        color: on ? "var(--text-mark)" : "var(--text-muted)",
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
        background: on ? "var(--bg-selected)" : "transparent",
        borderRadius: "var(--radius-2)", textDecoration: "none",
        transition: "var(--transition-ui)",
      }}>
      {node.icon && <span style={{ display: "flex", flex: "none", width: 14, height: 14, color: on ? "var(--text-mark)" : "var(--text-faint)" }}>{node.icon}</span>}
      <span>{node.label}</span>
    </a>
  );
}

export function SidebarNav({ sections = [], active, onNavigate, ...rest }) {
  return (
    <nav {...rest} style={{ width: "var(--sidebar-width)", flex: "none", padding: "24px 12px 64px", ...(rest.style || {}) }}>
      {sections.map((sec) => (
        <div key={sec.label} style={{ marginBottom: 22 }}>
          <div style={{
            padding: "0 10px 6px", fontFamily: "var(--font-sans)", fontSize: "var(--text-2xs)",
            letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)",
          }}>{sec.label}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {(sec.items || []).map((it) => (
              <React.Fragment key={it.id}>
                <Item node={it} active={active} onNavigate={onNavigate} depth={0} />
                {(it.items || []).map((sub) => <Item key={sub.id} node={sub} active={active} onNavigate={onNavigate} depth={1} />)}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
