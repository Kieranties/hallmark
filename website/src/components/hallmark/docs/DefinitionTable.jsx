import React from "react";

export function DefinitionTable({ columns, rows, ...rest }) {
  const th = { textAlign: "left", padding: "8px 12px", fontFamily: "var(--font-sans)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", borderBottom: "1px solid var(--border-default)", whiteSpace: "nowrap" };
  const td = { padding: "10px 12px", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-body)", borderBottom: "1px solid var(--border-subtle)", verticalAlign: "top" };
  return (
    <table {...rest} style={{ width: "100%", borderCollapse: "collapse", ...(rest.style || {}) }}>
      <thead><tr>{columns.map((c) => <th key={c} style={th}>{c}</th>)}</tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>{r.map((cell, j) => <td key={j} style={{ ...td, color: j === 0 ? "var(--text-heading)" : td.color, fontWeight: j === 0 ? "var(--weight-medium)" : "var(--weight-regular)" }}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
}
