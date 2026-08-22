const { SidebarNav, Breadcrumbs, DocPager, DataTable, CodeBlock, Callout, TabbedPanel, Icon, Badge, StateChip } = window.HallmarkDesignSystem_b394b6;

const SECTIONS = [
  { label: 'Practice', items: [
    { id: 'index', label: 'Documentation', icon: 'book-open' },
    { id: 'documents', label: 'Documents', icon: 'folder' }
  ] },
  { label: 'Repository', items: [
    { id: 'door', label: 'The door', icon: 'door-open', trailing: <Badge tone="open" style={{ marginLeft: 'auto' }}>draft</Badge> }
  ] }
];

function Toc({ items }) {
  return (
    <aside style={{ width: 'var(--hm-toc-width)', flex: '0 0 var(--hm-toc-width)', position: 'sticky', top: 'calc(var(--hm-navbar-height) + 24px)', alignSelf: 'flex-start' }}>
      <div style={{ fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-label)', letterSpacing: 'var(--hm-track-label)', textTransform: 'uppercase', color: 'var(--hm-text-faint)', paddingBottom: 'var(--hm-space-3)' }}>On this page</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderLeft: 'var(--hm-border)', display: 'flex', flexDirection: 'column' }}>
        {items.map((t, i) => (
          <li key={t}><a href="#" style={{ display: 'block', padding: '4px 12px', marginLeft: -1, borderLeft: `2px solid ${i === 0 ? 'var(--hm-line-accent)' : 'transparent'}`, color: i === 0 ? 'var(--hm-action)' : 'var(--hm-text-muted)', textDecoration: 'none', fontSize: 'var(--hm-size-body-sm)' }}>{t}</a></li>
        ))}
      </ul>
    </aside>
  );
}

const h1 = { fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-display-2)', lineHeight: 'var(--hm-lh-display-2)', letterSpacing: 'var(--hm-track-display)', fontWeight: 600, color: 'var(--hm-text-strong)', margin: 'var(--hm-space-4) 0 var(--hm-space-5)' };
const h2 = { fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-heading)', lineHeight: 'var(--hm-lh-heading)', fontWeight: 600, color: 'var(--hm-text-strong)', margin: 'var(--hm-space-8) 0 var(--hm-space-4)' };
const p = { margin: '0 0 var(--hm-space-5)', fontSize: 'var(--hm-size-body)', lineHeight: 'var(--hm-lh-body)', color: 'var(--hm-text-body)', maxWidth: 'var(--hm-measure-prose)' };
const code = { fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-code-sm)', background: 'var(--hm-surface-code)', padding: '1px 5px', borderRadius: 'var(--hm-radius-1)' };

function FlowStrip({ steps }) {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--hm-space-3)', flexWrap: 'wrap', margin: '0 0 var(--hm-space-6)' }}>
      {steps.map((s, i) => (
        <React.Fragment key={s.title}>
          {i > 0 && <div style={{ display: 'flex', alignItems: 'center', color: 'var(--hm-text-faint)' }}><Icon name="arrow-right" size={14} /></div>}
          <div style={{ padding: 'var(--hm-space-4)', border: 'var(--hm-border)', borderRadius: 'var(--hm-radius-3)', background: i === steps.length - 1 ? 'var(--hm-state-verified-soft)' : 'var(--hm-surface-card)', minWidth: 120 }}>
            <div style={{ fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-code-sm)', color: 'var(--hm-text-strong)', fontWeight: 500 }}>{s.title}</div>
            {s.note && <div style={{ marginTop: 3, fontSize: 'var(--hm-size-caption)', color: 'var(--hm-text-muted)' }}>{s.note}</div>}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function DocIndexArticle() {
  return (
    <article>
      <Breadcrumbs items={[{ label: 'Docs' }, { label: 'Documentation' }]} />
      <h1 style={h1}>Documentation</h1>
      <p style={p}>Nothing of the practice is published here yet. This page exists to prove the site builds and deploys end to end; it will be replaced when the rewrite lands.</p>
      <h2 style={h2}>How this site is published</h2>
      <FlowStrip steps={[
        { title: 'Pull request' },
        { title: 'Docs CI', note: 'builds only' },
        { title: 'Merge to main' },
        { title: 'Docs CD', note: 'builds again' },
        { title: 'GitHub Pages', note: 'hallmark.kieranties.com' }
      ]} />
      <p style={p}>A pull request builds the site but never publishes it. A merge to <code style={code}>main</code> rebuilds from <code style={code}>main</code> rather than reusing the pull request's output — the pull request was built from a test merge that may never have existed on <code style={code}>main</code>.</p>
      <h2 style={h2}>Working on the site</h2>
      <p style={p}>The site runs entirely inside the repository's dev container; see the <a href="https://github.com/Kieranties/hallmark#developing">README</a> for the three steps.</p>
      <TabbedPanel style={{ maxWidth: 'var(--hm-measure-prose)', marginBottom: 'var(--hm-space-6)' }} tabs={[
        { label: 'task', content: <CodeBlock code={'task start'} title="Dev server with live reload" /> },
        { label: 'npm', content: <CodeBlock code={'npm run start --prefix website'} title="Dev server with live reload" /> }
      ]} />
      <DataTable style={{ maxWidth: 'var(--hm-measure-prose)' }}
        columns={[{ key: 'cmd', label: 'Command' }, { key: 'does', label: 'Does' }]}
        rows={[
          { cmd: <code style={code}>npm run start --prefix website</code>, does: 'Dev server with live reload' },
          { cmd: <code style={code}>npm run build --prefix website</code>, does: 'Production build' },
          { cmd: <code style={code}>npm run serve --prefix website</code>, does: 'Serve the production build' }
        ]} />
      <DocPager style={{ marginTop: 'var(--hm-space-8)' }} next={{ label: 'Documents' }} />
    </article>
  );
}

function DocumentsArticle() {
  return (
    <article>
      <Breadcrumbs items={[{ label: 'Docs' }, { label: 'Documents' }]} />
      <h1 style={h1}>Documents</h1>
      <p style={{ ...p, fontSize: 'var(--hm-size-body-lg)' }}><strong style={{ color: 'var(--hm-text-strong)' }}>Where this repository keeps its durable documents.</strong> Declared here so the next one does not have to invent a location, which is what happened to the first ADR.</p>
      <h2 style={h2}>The two locations</h2>
      <DataTable style={{ maxWidth: 'var(--hm-measure-prose)', marginBottom: 'var(--hm-space-6)' }}
        columns={[{ key: 'loc', label: 'Location' }, { key: 'holds', label: 'Holds' }, { key: 'life', label: 'Lifecycle' }]}
        rows={[
          { loc: <code style={code}>adr/</code>, holds: 'Architecture decision records — a choice made, its context, and what it rules out', life: <StateChip state="decided" size="sm" /> },
          { loc: <code style={code}>kb/</code>, holds: 'Knowledge base articles — how something works, for whoever needs it next', life: <StateChip state="built" size="sm" /> }
        ]} />
      <p style={p}>If editing it later would destroy the point of it, it is an ADR. If never editing it later would make it wrong, it is a KB article.</p>
      <Callout kind="note" title="What does not live here" style={{ maxWidth: 'var(--hm-measure-prose)', marginBottom: 'var(--hm-space-6)' }}>
        Acceptance criteria and plans belong to the item, not to the tree. They live on the door with the item they describe, and travel with it.
      </Callout>
      <h2 style={h2}>Where a specification goes</h2>
      <p style={p}><code style={code}>door.carries</code> declares no carrier for acceptance criteria and none for a plan, so the body of an issue carries them today by convention rather than by declaration. That is a gap in the door, recorded here so it is not mistaken for a decision.</p>
      <CodeBlock style={{ maxWidth: 'var(--hm-measure-prose)' }} title=".hallmark/repository.yml" language="yaml"
        code={'door:\n  kind: github-issues\n  carries:\n    item:\n      carrier: issue\n    state:\n      carrier: project-field\n      field: Status\n    concession:\n      carrier: comment'} />
      <DocPager style={{ marginTop: 'var(--hm-space-8)' }} previous={{ label: 'Documentation' }} next={{ label: 'The door' }} />
    </article>
  );
}

function DocsPage({ page, onSelect }) {
  const toc = page === 'documents'
    ? ['The two locations', 'What does not live here', 'Where a specification goes']
    : ['How this site is published', 'Working on the site'];
  return (
    <div style={{ maxWidth: 'var(--hm-page-max)', margin: '0 auto', display: 'flex', gap: 'var(--hm-space-8)', padding: '0 var(--hm-space-6)' }}>
      <div style={{ width: 'var(--hm-sidebar-width)', flex: '0 0 var(--hm-sidebar-width)', borderRight: 'var(--hm-border)', padding: 'var(--hm-space-6) var(--hm-space-5) var(--hm-space-8) 0', position: 'sticky', top: 'var(--hm-navbar-height)', alignSelf: 'flex-start' }}>
        <SidebarNav sections={SECTIONS} activeId={page} onSelect={onSelect} />
      </div>
      <div style={{ flex: 1, minWidth: 0, padding: 'var(--hm-space-6) 0 var(--hm-space-8)' }}>
        {page === 'documents' ? <DocumentsArticle /> : <DocIndexArticle />}
      </div>
      <div style={{ padding: 'var(--hm-space-6) 0' }}><Toc items={toc} /></div>
    </div>
  );
}

Object.assign(window, { DocsPage });
