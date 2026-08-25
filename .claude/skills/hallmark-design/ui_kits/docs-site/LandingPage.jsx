const { Button, Card, PrincipleCard, Mark, Badge, DefinitionTable } = window.HallmarkDesignSystem_ad5c38;

function SectionHead({ label, title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {label && <div style={{ fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 8 }}>{label}</div>}
      <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 600, letterSpacing: "var(--tracking-tight)", color: "var(--text-heading)" }}>{title}</h2>
      <div style={{ width: 44, height: "var(--rule-mark)", background: "var(--accent)", margin: "12px 0 14px" }} />
      {children && <p style={{ margin: 0, maxWidth: "var(--measure-prose)", fontSize: "var(--text-md)", lineHeight: "var(--leading-body)", color: "var(--text-muted)" }}>{children}</p>}
    </div>
  );
}

function LandingPage({ setPage, setActiveDoc }) {
  const D = window.HALLMARK_DATA;
  return (
    <div>
      <section style={{ padding: "96px 40px 72px", borderBottom: "1px solid var(--border-subtle)", maxWidth: "var(--page-max)", margin: "0 auto" }}>
                <h1 style={{ margin: 0, maxWidth: "22ch", fontFamily: "var(--font-display)", fontSize: "var(--text-4xl)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", fontWeight: 500, color: "var(--text-heading)" }}>
          A delivery practice, stamped and provable
        </h1>
        <p style={{ margin: "20px 0 0", maxWidth: "58ch", fontSize: "var(--text-lg)", lineHeight: "var(--leading-body)", color: "var(--text-muted)" }}>
          Hallmark defines a <Mark variant="keyword">principled</Mark> process through which work of any size is delivered, <Mark variant="keyword">standards</Mark> are met, and what is claimed of the result is <Mark variant="keyword">proven</Mark>.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
          <Button onClick={() => { setPage("process"); setActiveDoc("sift"); }}>Read the practice</Button>
          <Button variant="secondary" onClick={() => setPage("terminology")}>Terminology</Button>
        </div>
      </section>

      <section style={{ padding: "64px 40px", maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <SectionHead label="Principles" title="Four principles, each a test that can be failed">
          The practice is the interface; an application is an implementation of it. It states what must hold, who may act, and how work travels — and it never names a tool.
        </SectionHead>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {D.principles.map((p, i) => (
            <PrincipleCard key={p.name} index={i + 1} name={p.name} test={p.test}>{p.body}</PrincipleCard>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 40px 64px", maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <SectionHead label="The track" title="Work advances by acts, and every act leaves something behind" />
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 32, alignItems: "start" }}>
          <DefinitionTable columns={["Act", "Held by", "Leaves behind"]} rows={D.acts} />
          <Card padding={22}>
            <div style={{ fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-mark)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 12 }}>Roles</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {D.roles.map(([r, does, ctx]) => (
                <div key={r}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", color: "var(--text-heading)" }}>{r}</div>
                  <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.5 }}>{does}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-faint)", marginTop: 2 }}>{ctx}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section style={{ padding: "0 40px 96px", maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <SectionHead label="Start here" title="Three ways in" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[["Terminology", "Every defined word, with the test that sorts it.", "terminology"], ["Process", "Capture through publish, act by act.", "process"], ["Apply", "Declare personas, disciplines, standards and subtypes.", "apply"]].map(([t, d, id]) => (
            <Card key={t} as="a" href="#" interactive onClick={(e) => { e.preventDefault(); setPage(id); }} padding={22}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-md)", color: "var(--text-heading)" }}>{t}</span>
                <Icon name="arrow-right" />
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--text-muted)" }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { LandingPage, SectionHead });
