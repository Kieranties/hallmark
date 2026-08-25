const { Breadcrumbs, Callout, DefinitionTable, PagerNav, Mark, StateChip, CodeBlock, Badge } = window.HallmarkDesignSystem_ad5c38;

const ARTICLE_TOC = [
  { id: "sift", label: "Sift" },
  { id: "what-kind", label: "What kind of thing it is", depth: 1 },
  { id: "whether", label: "Whether it will be done", depth: 1 },
  { id: "not-shape", label: "The sift does not shape the work" },
  { id: "cheap", label: "Keeping the sift cheap" },
];

function H({ id, children, level = 2 }) {
  const size = level === 2 ? "var(--text-xl)" : "var(--text-md)";
  return (
    <h2 id={id} style={{ margin: level === 2 ? "36px 0 10px" : "26px 0 8px", fontFamily: "var(--font-display)", fontSize: size, fontWeight: 600, letterSpacing: "var(--tracking-tight)", color: "var(--text-heading)", scrollMarginTop: 80 }}>{children}</h2>
  );
}
function P({ children }) {
  return <p style={{ margin: "0 0 14px", maxWidth: "var(--measure-prose)", fontSize: "var(--text-base)", lineHeight: "var(--leading-body)", color: "var(--text-body)" }}>{children}</p>;
}

function ArticlePage() {
  return (
    <article>
      <Breadcrumbs items={[{ label: "Practice", href: "#" }, { label: "Process", href: "#" }, { label: "Sift" }]} />
      <h1 style={{ margin: "14px 0 6px", fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 500, letterSpacing: "var(--tracking-tight)", lineHeight: 1.15, color: "var(--text-heading)" }}>Sift</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <Badge tone="accent">Act</Badge>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>Worker · leaves a typed item</span>
        <StateChip state="New" /><span style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)", fontSize: 12 }}>→</span><StateChip state="Accepted" />
      </div>
      <div style={{ width: 44, height: "var(--rule-mark)", background: "var(--accent)", margin: "16px 0 24px" }} />

      <P><strong>The first act on the change, and the first that requires a <Mark href="#role">role</Mark>.</strong> Capture is open to anyone; the sift is not — someone accountable rules on what arrived. Two things settle here, and only two.</P>

      <H id="what-kind" level={3}>What kind of thing it is</H>
      <P>The request is given a type, or the type it arrived carrying is verified. The ordered test always resolves — there is no request the practice cannot type.</P>
      <DefinitionTable columns={["Ask, in order", "Request type"]} rows={[
        ["Does it resolve into other work rather than being done directly?", "Initiative"],
        ["Does it ask for information rather than change anything?", "Question"],
        ["Does it correct something previously completed?", "Fix"],
        ["Does it give a named persona an outcome they did not have?", "Capability"],
        ["None of the above", "Chore"],
      ]} />

      <H id="whether" level={3}>Whether it will be done at all</H>
      <div style={{ margin: "14px 0 18px" }}>
        <DefinitionTable columns={["Outcome", "Means"]} rows={[
          ["Accepted", "Real, and not already known. It becomes work, carrying a type and an agreement that it will be done"],
          ["Duplicate", "Already known. It attaches to the existing item rather than starting a second one"],
          ["Rejected", "It will not be done — recorded with a reason, so the same request does not arrive again unanswered"],
        ]} />
      </div>

      <H id="not-shape">The sift does not shape the work</H>
      <P>It does not work out what <em>right</em> looks like, how the work will be done, or what it will cost. Nor does it decide when, or by whom, or how urgent it is. It settles three questions only: is this real, is it already known, and what kind of thing is it.</P>
      <CodeBlock filename="sift.result.yml" language="yaml" lineNumbers highlight={[2]}>{"type: capability\noutcome: accepted\nruled_by: a.hart\nduplicate_of: null\nreason: null"}</CodeBlock>

      <H id="cheap">Keeping the sift cheap</H>
      <div style={{ margin: "0 0 16px" }}>
        <Callout kind="important" title="The sift must stay cheap, or the door closes anyway" icon={<Icon name="stamp" />}>
          Capture carries no quality bar, so every bit of variance it lets through arrives here. A cheap door with an expensive sift has not removed the friction — it has moved it somewhere less visible, and the queue grows instead of the backlog.
        </Callout>
      </div>
      <Callout kind="warning" title="If answering “is this real?” needs investigation" icon={<Icon name="triangle-alert" />}>
        That investigation is itself a <Mark href="#question">question</Mark>. Raise it as work; do not perform it inside the sift.
      </Callout>

      <div style={{ marginTop: 40 }}>
        <PagerNav prev={{ label: "Capture" }} next={{ label: "Specify" }} />
      </div>
    </article>
  );
}

Object.assign(window, { ArticlePage, ARTICLE_TOC, H, P });
