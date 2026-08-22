const { Icon, Kbd } = window.HallmarkDesignSystem_b394b6;

function Navbar({ onNavigate, theme, onToggleTheme }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, height: 'var(--hm-navbar-height)',
      display: 'flex', alignItems: 'center', gap: 'var(--hm-space-6)',
      padding: '0 var(--hm-gutter)', background: 'var(--hm-paper)',
      boxShadow: 'inset 0 -1px 0 var(--hm-line)'
    }}>
      <a href="#" onClick={e => { e.preventDefault(); onNavigate('home'); }} style={{
        display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none'
      }}>
        <img src="../../assets/logo-mark.svg" width="26" height="26" alt="" />
        <span style={{ fontFamily: 'var(--hm-font-display)', fontSize: 20, fontWeight: 600, color: 'var(--hm-text-strong)', letterSpacing: '-0.01em' }}>Hallmark</span>
      </a>
      <nav style={{ display: 'flex', gap: 'var(--hm-space-5)', fontSize: 'var(--hm-size-body-sm)' }}>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate('docs'); }} style={{ color: 'var(--hm-ink-700)', textDecoration: 'none', fontWeight: 500 }}>Documentation</a>
      </nav>
      <div style={{ flex: 1 }} />
      <button style={{
        display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
        background: 'var(--hm-surface-sunk)', border: 'var(--hm-border)', borderRadius: 'var(--hm-radius-2)',
        padding: '5px 8px 5px 10px', color: 'var(--hm-text-faint)', fontFamily: 'var(--hm-font-body)', fontSize: 'var(--hm-size-body-sm)'
      }}>
        <Icon name="search" size={14} />Search<Kbd style={{ marginLeft: 6 }}>⌘K</Kbd>
      </button>
      <a href="https://github.com/Kieranties/hallmark" style={{ color: 'var(--hm-ink-700)', display: 'flex' }} aria-label="GitHub"><Icon name="github" size={19} /></a>
      <button onClick={onToggleTheme} aria-label="Toggle theme" style={{
        cursor: 'pointer', background: 'transparent', border: 0, color: 'var(--hm-ink-700)', display: 'flex', padding: 4
      }}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} /></button>
    </header>
  );
}

function Footer() {
  const col = (title, links) => (
    <div key={title}>
      <div style={{
        fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-label)', letterSpacing: 'var(--hm-track-label)',
        textTransform: 'uppercase', color: 'var(--hm-footer-title)', marginBottom: 'var(--hm-space-4)'
      }}>{title}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {links.map(l => <li key={l}><a href="#" style={{ color: 'var(--hm-footer-link)', textDecoration: 'none', fontSize: 'var(--hm-size-body-sm)' }}>{l}</a></li>)}
      </ul>
    </div>
  );
  return (
    <footer style={{ background: 'var(--hm-footer-bg)', padding: 'var(--hm-space-8) var(--hm-gutter) var(--hm-space-6)', marginTop: 'var(--hm-space-9)' }}>
      <div style={{ maxWidth: 'var(--hm-page-max)', margin: '0 auto', display: 'flex', gap: 'var(--hm-space-10)' }}>
        <img src="../../assets/logo-dark.svg" width="170" alt="Hallmark" style={{ alignSelf: 'flex-start' }} />
        <div style={{ display: 'flex', gap: 'var(--hm-space-10)' }}>
          {col('Read', ['Documentation'])}
          {col('Repository', ['GitHub', 'Issues'])}
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--hm-page-max)', margin: 'var(--hm-space-7) auto 0', paddingTop: 'var(--hm-space-5)',
        borderTop: '1px solid var(--hm-footer-rule)', color: 'var(--hm-footer-muted)', fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-code-sm)'
      }}>Hallmark — pre-1.0. Built with Docusaurus.</div>
    </footer>
  );
}

Object.assign(window, { Navbar, Footer });
