const { Button, Badge, Callout, Icon, DocCard, StateChip } = window.HallmarkDesignSystem_b394b6;

function LandingPage({ onNavigate }) {
  return (
    <main>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--hm-surface-sunk)', borderBottom: 'var(--hm-border)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/punch-grid.svg)', backgroundSize: '48px 48px', opacity: 0.06 }} />
        <div style={{ position: 'relative', maxWidth: 'var(--hm-page-max)', margin: '0 auto', padding: 'var(--hm-space-10) var(--hm-gutter)' }}>
          <img src="../../assets/logo-mark.svg" width="52" height="52" alt="" />
          <h1 style={{
            fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-display-1)', lineHeight: 'var(--hm-lh-display-1)',
            letterSpacing: 'var(--hm-track-display)', fontWeight: 600, color: 'var(--hm-text-strong)', margin: 'var(--hm-space-5) 0 var(--hm-space-4)'
          }}>Hallmark</h1>
          <p style={{
            maxWidth: '56ch', margin: 0, fontSize: 'var(--hm-size-body-lg)', lineHeight: 'var(--hm-lh-body-lg)', color: 'var(--hm-text-body)'
          }}>A delivery practice: declarations, states, and criteria that a repository adopts so that claims about work are <strong style={{ color: 'var(--hm-text-strong)' }}>checked rather than asserted</strong>.</p>
          <div style={{ display: 'flex', gap: 'var(--hm-space-4)', marginTop: 'var(--hm-space-6)' }}>
            <Button size="lg" onClick={() => onNavigate('docs')} iconRight={<Icon name="arrow-right" size={16} />}>Read the documentation</Button>
            <Button size="lg" variant="secondary" href="https://github.com/Kieranties/hallmark" iconLeft={<Icon name="git-branch" size={16} />}>The repository</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--hm-space-3)', marginTop: 'var(--hm-space-6)', alignItems: 'center' }}>
            <Badge tone="accent">pre-1.0</Badge>
            <Badge>dogfooding itself</Badge>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--hm-page-max)', margin: '0 auto', padding: 'var(--hm-space-8) var(--hm-gutter) 0' }}>
        <Callout kind="warning" title="This site is a scaffold" style={{ maxWidth: '80ch' }}>
          The practice is still held as working documents in the repository and is being rewritten for publication. Nothing here describes it yet.
        </Callout>

        <h2 style={{ fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-display-3)', fontWeight: 600, color: 'var(--hm-text-strong)', margin: 'var(--hm-space-8) 0 var(--hm-space-5)' }}>Where to go</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--hm-space-5)', maxWidth: 980 }}>
          <DocCard title="Documentation" icon="book-open" description="Everything published so far." href="#" onClick={e => { e.preventDefault(); onNavigate('docs'); }} />
          <DocCard title="The repository" icon="git-branch" description="The practice as it currently stands, and the issues tracking the rewrite." href="https://github.com/Kieranties/hallmark" />
        </div>

        <h2 style={{ fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-display-3)', fontWeight: 600, color: 'var(--hm-text-strong)', margin: 'var(--hm-space-8) 0 var(--hm-space-4)' }}>Status</h2>
        <p style={{ margin: '0 0 var(--hm-space-5)', maxWidth: 'var(--hm-measure-prose)', fontSize: 'var(--hm-size-body)', lineHeight: 'var(--hm-lh-body)', color: 'var(--hm-text-body)' }}>
          Pre-1.0, and dogfooding itself. The site publishes automatically, but its content does not yet carry the practice.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--hm-space-3)', flexWrap: 'wrap' }}>
          {['sifted', 'specified', 'planned', 'built', 'verified', 'decided'].map((s, i) => (
            <React.Fragment key={s}>
              {i > 0 && <Icon name="chevron-right" size={13} style={{ color: 'var(--hm-text-faint)' }} />}
              <StateChip state={s} size="sm" />
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { LandingPage });
