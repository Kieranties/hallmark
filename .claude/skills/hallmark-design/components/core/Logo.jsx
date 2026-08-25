import React from "react";

/** The struck oval stamp: double hairline ring, italic serif initial. */
function StampMark({ size, glyph = "H" }) {
  return (
    <svg width={size} height={size * 0.86} viewBox="0 0 32 28" aria-hidden="true" style={{ display: "block", flex: "none", overflow: "visible" }}>
      <ellipse cx="16" cy="14" rx="15" ry="11.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="16" cy="14" rx="12.4" ry="9" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <text x="16" y="14" textAnchor="middle" dominantBaseline="central" fill="currentColor"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, fontSize: 17 }}>{glyph}</text>
    </svg>
  );
}

export function Logo({ size = 28, wordmark = true, tone = "accent", label = "Hallmark", ...rest }) {
  const color = tone === "accent" ? "var(--accent)" : tone === "inverse" ? "var(--text-inverse)" : "var(--text-heading)";
  return (
    <span {...rest} style={{ display: "inline-flex", alignItems: "center", gap: Math.round(size * 0.42), color, ...(rest.style || {}) }}>
      <StampMark size={size} glyph={label.slice(0, 1).toLowerCase()} />
      {wordmark && (
        <span style={{ fontFamily: "var(--font-display)", fontSize: Math.round(size * 0.72), fontWeight: 500, letterSpacing: "0.15em", lineHeight: 1, textTransform: "uppercase", color: tone === "accent" ? "var(--text-heading)" : color }}>{label}</span>
      )}
    </span>
  );
}
