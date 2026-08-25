import React from "react";

const STATES = {
  New: "neutral", Accepted: "accent", Specified: "accent", Planned: "accent",
  Actioned: "accent", Validated: "pass", Complete: "pass", Closed: "neutral", Retracted: "fail",
  Committed: "accent", Uncommitted: "neutral",
};
const TONES = {
  neutral: ["var(--status-neutral-soft)", "var(--text-muted)", "var(--border-default)"],
  accent: ["var(--accent-soft)", "var(--text-mark)", "var(--border-mark)"],
  pass: ["var(--status-pass-soft)", "var(--status-pass)", "var(--status-pass)"],
  fail: ["var(--status-fail-soft)", "var(--status-fail)", "var(--status-fail)"],
};

export function StateChip({ state, tone, ...rest }) {
  const [bg, fg, bd] = TONES[tone || STATES[state] || "neutral"];
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center", padding: "2px 8px",
      background: bg, color: fg, border: "1px solid " + bd, borderRadius: "var(--radius-1)",
      fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", lineHeight: 1.5,
      whiteSpace: "nowrap", fontVariantLigatures: "none", ...(rest.style || {}),
    }}>{state}</span>
  );
}
