import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function DocCard({ title, description, href, meta, icon = 'file-text', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', textDecoration: 'none', padding: 'var(--hm-space-5)',
        background: 'var(--hm-surface-card)',
        border: 'var(--hm-border-width) solid ' + (hover ? 'var(--hm-line-accent)' : 'var(--hm-line)'),
        borderRadius: 'var(--hm-radius-3)',
        boxShadow: hover ? 'var(--hm-shadow-2)' : 'var(--hm-shadow-1)',
        transition: 'var(--hm-transition-colors), box-shadow var(--hm-duration-base) var(--hm-ease-standard)',
        ...style
      }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--hm-space-3)', color: hover ? 'var(--hm-action)' : 'var(--hm-text-strong)', transition: 'var(--hm-transition-colors)' }}>
        <Icon name={icon} size={16} />
        <span style={{ fontFamily: 'var(--hm-font-display)', fontSize: 'var(--hm-size-subheading)', fontWeight: 'var(--hm-weight-semibold)', lineHeight: 'var(--hm-lh-subheading)' }}>{title}</span>
      </div>
      {description && <p style={{ margin: 'var(--hm-space-3) 0 0', color: 'var(--hm-text-muted)', fontFamily: 'var(--hm-font-body)', fontSize: 'var(--hm-size-body-sm)', lineHeight: 'var(--hm-lh-body-sm)' }}>{description}</p>}
      {meta && <div style={{ marginTop: 'var(--hm-space-4)', display: 'flex', gap: 'var(--hm-space-3)', alignItems: 'center' }}>{meta}</div>}
    </a>
  );
}
