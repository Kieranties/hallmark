import React from "react";
import { Logo } from "../core/Logo.jsx";

export function Footer({ columns = [], blurb, copyright, note, ...rest }) {
  return (
    <footer {...rest} style={{
      borderTop: "1px solid var(--border-subtle)", background: "var(--bg-sunken)",
      padding: "40px 40px 24px", fontFamily: "var(--font-sans)", ...(rest.style || {}),
    }}>
      <div style={{ display: "flex", gap: 56, flexWrap: "wrap", maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <div style={{ maxWidth: 300, minWidth: 220 }}>
          <Logo size={20} />
          {blurb && <p style={{ margin: "12px 0 0", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--text-muted)" }}>{blurb}</p>}
        </div>
        {columns.map((col) => (
          <div key={col.label} style={{ minWidth: 174 }}>
            <div style={{ fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 10 }}>{col.label}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {(col.items || []).map((it) => (
                <a key={it.label} href={it.href || "#"} style={{ fontSize: "var(--text-sm)", lineHeight: 1.45, color: "var(--text-muted)", textDecoration: "none" }}>{it.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap",
        maxWidth: "var(--page-max)", margin: "32px auto 0", paddingTop: 16,
        borderTop: "1px solid var(--border-subtle)",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-faint)" }}>{copyright}</span>
        {note && <span style={{ fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)" }}>{note}</span>}
      </div>
    </footer>
  );
}
