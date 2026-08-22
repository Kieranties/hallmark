import React from 'react';
import { Icon } from '../core/Icon.jsx';

function Side({ item, dir }) {
  const [hover, setHover] = React.useState(false);
  const next = dir === 'next';
  return (
    <a href={item.href || '#'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        flex: 1, display: 'block', textDecoration: 'none', padding: 'var(--hm-space-4) var(--hm-space-5)',
        border: 'var(--hm-border-width) solid ' + (hover ? 'var(--hm-line-accent)' : 'var(--hm-line)'),
        borderRadius: 'var(--hm-radius-3)', textAlign: next ? 'right' : 'left',
        transition: 'var(--hm-transition-colors)'
      }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, justifyContent: next ? 'flex-end' : 'flex-start',
        color: 'var(--hm-text-faint)', fontFamily: 'var(--hm-font-mono)',
        fontSize: 'var(--hm-size-label)', letterSpacing: 'var(--hm-track-label)', textTransform: 'uppercase'
      }}>
        {!next && <Icon name="arrow-left" size={12} />}
        {next ? 'next' : 'previous'}
        {next && <Icon name="arrow-right" size={12} />}
      </div>
      <div style={{
        marginTop: 4, fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-subheading)',
        fontWeight: 'var(--hm-weight-semibold)', color: hover ? 'var(--hm-action)' : 'var(--hm-text-strong)',
        transition: 'var(--hm-transition-colors)'
      }}>{item.label}</div>
    </a>
  );
}

export function DocPager({ previous, next, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--hm-space-5)', ...style }} {...rest}>
      {previous ? <Side item={previous} dir="prev" /> : <div style={{ flex: 1 }} />}
      {next ? <Side item={next} dir="next" /> : <div style={{ flex: 1 }} />}
    </div>
  );
}
