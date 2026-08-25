import React from "react";
import { Logo } from "../core/Logo.jsx";

export function Navbar({ items = [], active, onNavigate, right, sticky = true, ...rest }) {
  return (
    <header {...rest} style={{
      position: sticky ? "sticky" : "static", top: 0, zIndex: 30,
      height: "var(--navbar-height)", display: "flex", alignItems: "center", gap: 28,
      padding: "0 24px", background: "color-mix(in srgb, var(--bg-page) 88%, transparent)",
      backdropFilter: "saturate(140%) blur(8px)",
      borderBottom: "1px solid var(--border-subtle)", ...(rest.style || {}),
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(items[0]); }} style={{ textDecoration: "none", flex: "none" }}>
        <Logo size={22} />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 22 }}>
        {items.map((it) => {
          const on = it.id === active;
          return (
            <a key={it.id} href={it.href || "#"} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(it); } }}
              style={{
                fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
                fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
                color: on ? "var(--text-heading)" : "var(--text-muted)",
                textDecoration: "none", paddingBottom: 2,
                borderBottom: "2px solid " + (on ? "var(--border-mark)" : "transparent"),
                transition: "var(--transition-ui)",
              }}>{it.label}</a>
          );
        })}
      </nav>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>{right}</div>
    </header>
  );
}
