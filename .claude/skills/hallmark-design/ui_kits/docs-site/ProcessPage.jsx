const { DefinitionTable, StateChip, Callout, Card, Mark } = window.HallmarkDesignSystem_ad5c38;

const STATE_GRAPH = `stateDiagram-v2
    [*] --> New : capture
    New --> Accepted : sift
    New --> Closed : sift · rejected
    Accepted --> Specified : specify
    Specified --> Planned : plan
    Planned --> Actioned : action
    Actioned --> Validated : validate
    Actioned --> Accepted : validate · failed
    Validated --> Accepted : issues found
    Validated --> Complete : publish
    Accepted --> Retracted : retract
    Validated --> Retracted : retract
    Closed --> [*]
    Complete --> [*]
    Retracted --> [*]`;

function StateDiagram({ theme }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let live = true;
    (async () => {
      const m = await window.hallmarkMermaid(theme);
      const { svg } = await m.render("state-" + theme + "-" + Date.now(), STATE_GRAPH);
      if (live && ref.current) ref.current.innerHTML = svg;
    })();
    return () => { live = false; };
  }, [theme]);
  return <div ref={ref} style={{ display: "flex", justifyContent: "center", padding: "22px 12px", background: "var(--bg-sunken)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-3)", marginBottom: 16, minHeight: 320 }} />;
}

function ProcessPage({ setPage, setActiveDoc, theme }) {
  const D = window.HALLMARK_DATA;
  const flow = ["New", "Accepted", "Specified", "Planned", "Actioned", "Validated", "Complete"];
  return (
    <div>
      <h1 style={{ margin: "0 0 8px", fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 500, letterSpacing: "var(--tracking-tight)", color: "var(--text-heading)" }}>Process</h1>
      <p style={{ margin: 0, maxWidth: "var(--measure-prose)", fontSize: "var(--text-md)", lineHeight: "var(--leading-body)", color: "var(--text-muted)" }}>
        Between one act and the next, the work rests. Every state after the first is the act that produced it, in the past tense.
      </p>
      <div style={{ width: 44, height: "var(--rule-mark)", background: "var(--accent)", margin: "18px 0 26px" }} />

      <StateDiagram theme={theme} />

      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", padding: "16px 18px", background: "var(--bg-sunken)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-3)", marginBottom: 14 }}>
        {flow.map((s, i) => (
          <React.Fragment key={s}>
            {i > 0 && <span style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)", fontSize: 12 }}>→</span>}
            <StateChip state={s} />
          </React.Fragment>
        ))}
        <span style={{ marginLeft: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)" }}>Exits</span>
          <StateChip state="Closed" /><StateChip state="Retracted" />
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 26 }}>
        <Callout kind="proof" title="Verified" icon={<Icon name="check" />}>Someone who did not do the work confirms it against the standard. Two outcomes only: it verifies, or it returns the work.</Callout>
        <Callout kind="failure" title="Returned" icon={<Icon name="undo-2" />}>A failed verification is not a state change. The work is returned inside the act it never left.</Callout>
      </div>

      <DefinitionTable columns={["Act", "Held by", "Leaves behind"]} rows={D.acts.map(([a, h, l]) => [
        <a key={a} href="#" onClick={(e) => { e.preventDefault(); setPage("practice"); setActiveDoc(a.toLowerCase()); }} style={{ color: "var(--text-link)", textDecoration: "none", borderBottom: "1px solid var(--border-link)" }}>{a}</a>, h, l,
      ])} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginTop: 26 }}>
        <Card padding={20}>
          <div style={{ fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 8 }}>Commitment</div>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-muted)" }}>The states say where the work has got to. Commitment says when it will arrive. Two axes, moving independently — which is why neither can be read off the other.</p>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}><StateChip state="Uncommitted" /><StateChip state="Committed" /></div>
        </Card>
        <Card padding={20}>
          <div style={{ fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 8 }}>Concession</div>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-muted)" }}>A <Mark href="#concession">concession</Mark> may be recorded at any point. It changes nothing about where the work goes; it changes what is known about it, and who is answerable for that.</p>
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, { ProcessPage, StateDiagram });
