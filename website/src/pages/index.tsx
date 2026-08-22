import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {ArrowRight, BookOpen, ChevronRight, GitBranch, TriangleAlert} from 'lucide-react';
import StateChip, {type ItemState} from '@site/src/components/StateChip';
import Badge from '@site/src/components/Badge';

const STATES: ItemState[] = ['sifted', 'specified', 'planned', 'built', 'verified', 'decided'];

const btn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 'var(--hm-space-3)',
  padding: '11px 22px', borderRadius: 'var(--hm-radius-2)',
  border: 'var(--hm-border-width) solid var(--hm-action)',
  background: 'var(--hm-action)', color: 'var(--hm-text-inverse)',
  fontWeight: 500, fontSize: 'var(--hm-size-body)', textDecoration: 'none',
};

const btnSecondary: React.CSSProperties = {
  ...btn,
  background: 'var(--hm-surface-card)',
  color: 'var(--hm-text-strong)',
  borderColor: 'var(--hm-line-strong)',
};

const h2: React.CSSProperties = {
  fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-display-3)',
  fontWeight: 600, color: 'var(--hm-text-strong)', margin: '48px 0 16px',
};

function Card({href, title, description, icon}: {href: string; title: string; description: string; icon: React.ReactNode}) {
  return (
    <Link to={href} style={{
      display: 'block', textDecoration: 'none', padding: 'var(--hm-space-5)',
      background: 'var(--hm-surface-card)', border: 'var(--hm-border-width) solid var(--hm-line)',
      borderRadius: 'var(--hm-radius-3)', boxShadow: 'var(--hm-shadow-1)',
    }}>
      <div style={{display: 'flex', alignItems: 'center', gap: 'var(--hm-space-3)', color: 'var(--hm-text-strong)'}}>
        {icon}
        <span style={{fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-subheading)', fontWeight: 600}}>{title}</span>
      </div>
      <p style={{margin: '8px 0 0', color: 'var(--hm-text-muted)', fontSize: 'var(--hm-size-body-sm)'}}>{description}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout title="Hallmark" description="A delivery practice: declarations, states, and criteria that a repository adopts.">
      <section style={{position: 'relative', overflow: 'hidden', background: 'var(--hm-surface-sunk)', borderBottom: 'var(--hm-border-width) solid var(--hm-line)'}}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'url(/img/punch-grid.svg)', backgroundSize: '48px 48px', opacity: 0.06}} />
        <div style={{position: 'relative', maxWidth: 'var(--hm-page-max)', margin: '0 auto', padding: '96px var(--hm-gutter)'}}>
          <img src="/img/logo-mark.svg" width={52} height={55} alt="" />
          <h1 style={{fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-display-1)', lineHeight: 1.06, letterSpacing: '-0.015em', fontWeight: 600, margin: '16px 0 12px'}}>Hallmark</h1>
          <p style={{maxWidth: '56ch', margin: 0, fontSize: 'var(--hm-size-body-lg)', lineHeight: 1.7}}>
            A delivery practice: declarations, states, and criteria that a repository adopts so that claims
            about work are <strong>checked rather than asserted</strong>.
          </p>
          <div style={{display: 'flex', gap: 'var(--hm-space-4)', marginTop: 'var(--hm-space-6)'}}>
            <Link to="/docs" style={btn}>Read the documentation <ArrowRight size={16} strokeWidth={1.75} /></Link>
            <Link to="https://github.com/Kieranties/hallmark" style={btnSecondary}><GitBranch size={16} strokeWidth={1.75} /> The repository</Link>
          </div>
          <div style={{display: 'flex', gap: 'var(--hm-space-3)', marginTop: 'var(--hm-space-6)'}}>
            <Badge tone="accent">pre-1.0</Badge>
            <Badge>dogfooding itself</Badge>
          </div>
        </div>
      </section>

      <main style={{maxWidth: 'var(--hm-page-max)', margin: '0 auto', padding: '48px var(--hm-gutter) 96px'}}>
        <div className="alert alert--warning" role="alert" style={{borderLeftWidth: 3, maxWidth: '80ch'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-label)', letterSpacing: 'var(--hm-track-label)', textTransform: 'uppercase', fontWeight: 600}}>
            <TriangleAlert size={14} strokeWidth={1.75} /> This site is a scaffold
          </div>
          <p style={{margin: '8px 0 0', fontSize: 'var(--hm-size-body-sm)'}}>
            The practice is still held as working documents in the repository and is being rewritten for
            publication. Nothing here describes it yet.
          </p>
        </div>

        <h2 style={h2}>Where to go</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--hm-space-5)', maxWidth: 980}}>
          <Card href="/docs" title="Documentation" description="Everything published so far." icon={<BookOpen size={16} strokeWidth={1.75} />} />
          <Card href="https://github.com/Kieranties/hallmark" title="The repository" description="The practice as it currently stands, and the issues tracking the rewrite." icon={<GitBranch size={16} strokeWidth={1.75} />} />
        </div>

        <h2 style={h2}>Status</h2>
        <p style={{fontSize: 'var(--hm-size-body)', lineHeight: 1.7, maxWidth: '70ch'}}>
          Pre-1.0, and dogfooding itself. The site publishes automatically, but its content does not yet
          carry the practice.
        </p>
        <div style={{display: 'flex', alignItems: 'center', gap: 'var(--hm-space-3)', flexWrap: 'wrap'}}>
          {STATES.map((s, i) => (
            <React.Fragment key={s}>
              {i > 0 && <ChevronRight size={13} strokeWidth={1.75} style={{color: 'var(--hm-text-faint)'}} />}
              <StateChip state={s} size="sm" />
            </React.Fragment>
          ))}
        </div>
      </main>
    </Layout>
  );
}
