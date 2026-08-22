import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Breadcrumbs({ items = [], style, ...rest }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: 'var(--hm-space-2)', flexWrap: 'wrap',
      fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-code-sm)', ...style
    }} {...rest}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            {i > 0 && <Icon name="chevron-right" size={12} style={{ color: 'var(--hm-text-faint)' }} />}
            {last
              ? <span style={{ color: 'var(--hm-text-body)' }}>{item.label}</span>
              : <a href={item.href || '#'} style={{ color: 'var(--hm-text-muted)', textDecoration: 'none' }}>{item.label}</a>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
