import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SidebarNav({ sections = [], activeId, onSelect, style, ...rest }) {
  return (
    <nav style={{ fontFamily: 'var(--hm-font-body)', fontSize: 'var(--hm-size-body-sm)', ...style }} {...rest}>
      {sections.map(section => (
        <div key={section.label} style={{ marginBottom: 'var(--hm-space-6)' }}>
          <div style={{
            padding: '0 var(--hm-space-4) var(--hm-space-3)',
            fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-label)',
            letterSpacing: 'var(--hm-track-label)', textTransform: 'uppercase',
            color: 'var(--hm-text-faint)', fontWeight: 'var(--hm-weight-semibold)'
          }}>{section.label}</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
            {section.items.map(item => {
              const active = item.id === activeId;
              return (
                <li key={item.id}>
                  <a href={item.href || '#'} onClick={e => { if (onSelect) { e.preventDefault(); onSelect(item.id); } }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 'var(--hm-space-3)',
                      padding: '6px var(--hm-space-4)', textDecoration: 'none',
                      borderRadius: 'var(--hm-radius-2)',
                      borderLeft: `2px solid ${active ? 'var(--hm-line-accent)' : 'transparent'}`,
                      background: active ? 'var(--hm-surface-sunk)' : 'transparent',
                      color: active ? 'var(--hm-action)' : 'var(--hm-ink-600)',
                      fontWeight: active ? 'var(--hm-weight-medium)' : 'var(--hm-weight-regular)',
                      transition: 'var(--hm-transition-colors)'
                    }}>
                    {item.icon && <Icon name={item.icon} size={14} />}
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                    {item.trailing}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
