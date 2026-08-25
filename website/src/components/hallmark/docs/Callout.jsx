import React from "react";

const KINDS = {
  note: { fg: "var(--text-muted)", bg: "var(--bg-sunken)", label: "Note" },
  important: { fg: "var(--text-mark)", bg: "var(--accent-soft)", label: "Important" },
  warning: { fg: "var(--status-concession)", bg: "var(--status-concession-soft)", label: "Warning" },
  proof: { fg: "var(--status-pass)", bg: "var(--status-pass-soft)", label: "Proof" },
  failure: { fg: "var(--status-fail)", bg: "var(--status-fail-soft)", label: "Failure" },
};

export function Callout({ kind = "note", title, icon, children, ...rest }) {
  const k = KINDS[kind] || KINDS.note;
  return (
    <div {...rest} style={{
      background: k.bg, border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-3)", padding: "14px 16px",
      fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-body)", color: "var(--text-body)", ...(rest.style || {}),
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, color: k.fg }}>
        {icon}
        <span style={{ fontSize: "var(--text-2xs)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase" }}>{title || k.label}</span>
      </div>
      <div style={{ color: "var(--text-body)" }}>{children}</div>
    </div>
  );
}
