import React from "react";

const TONES = {
  neutral: ["var(--status-neutral-soft)", "var(--text-muted)"],
  accent: ["var(--accent-soft)", "var(--text-mark)"],
  pass: ["var(--status-pass-soft)", "var(--status-pass)"],
  fail: ["var(--status-fail-soft)", "var(--status-fail)"],
  concession: ["var(--status-concession-soft)", "var(--status-concession)"],
};

export function Badge({ tone = "neutral", mono = false, children, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 5, background: bg, color: fg,
      padding: "2px 7px", borderRadius: "var(--radius-1)",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontSize: "var(--text-2xs)", fontWeight: "var(--weight-medium)",
      letterSpacing: mono ? "0" : "var(--tracking-wide)", textTransform: mono ? "none" : "uppercase",
      lineHeight: 1.5, whiteSpace: "nowrap", ...(rest.style || {}),
    }}>{children}</span>
  );
}
