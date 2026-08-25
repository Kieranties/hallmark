const { SearchField, Tag, TermEntry, Badge } = window.HallmarkDesignSystem_ad5c38;

function GlossaryPage() {
  const D = window.HALLMARK_DATA;
  const kinds = ["All", ...Array.from(new Set(D.terms.map((t) => t.kind)))];
  const [q, setQ] = React.useState("");
  const [kind, setKind] = React.useState("All");
  const shown = D.terms.filter((t) =>
    (kind === "All" || t.kind === kind) &&
    (t.term.toLowerCase().includes(q.toLowerCase()) || String(t.definition).toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div>
      <h1 style={{ margin: "0 0 8px", fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 500, letterSpacing: "var(--tracking-tight)", color: "var(--text-heading)" }}>Terminology</h1>
      <p style={{ margin: 0, maxWidth: "var(--measure-prose)", fontSize: "var(--text-md)", lineHeight: "var(--leading-body)", color: "var(--text-muted)" }}>
        Every word the practice defines, with the branch or act it belongs to. Where a bare name could be read two ways, it is qualified until it can only be one.
      </p>
      <div style={{ width: 44, height: "var(--rule-mark)", background: "var(--accent)", margin: "18px 0 22px" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
        <SearchField width={280} placeholder="Filter terms" shortcut={null} value={q} onChange={(e) => setQ(e.target.value)} icon={<Icon name="search" />} />
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {kinds.map((k) => <Tag key={k} interactive selected={k === kind} onClick={() => setKind(k)}>{k}</Tag>)}
        </div>
        <Badge>{shown.length} of {D.terms.length}</Badge>
      </div>
      <div>
        {shown.map((t) => <TermEntry key={t.id} {...t} />)}
        {shown.length === 0 && <p style={{ padding: "24px 0", color: "var(--text-faint)", fontSize: "var(--text-sm)" }}>No term matches. The absence is itself a finding.</p>}
      </div>
    </div>
  );
}

Object.assign(window, { GlossaryPage });
