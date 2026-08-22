import React from 'react';

export function TabbedPanel({ tabs = [], initial = 0, style, ...rest }) {
  const [active, setActive] = React.useState(initial);
  return (
    <div style={{ border: 'var(--hm-border-width) solid var(--hm-line)', borderRadius: 'var(--hm-radius-3)', overflow: 'hidden', background: 'var(--hm-surface-card)', ...style }} {...rest}>
      <div style={{ display: 'flex', gap: 0, borderBottom: 'var(--hm-border-width) solid var(--hm-line)', background: 'var(--hm-surface-sunk)' }}>
        {tabs.map((t, i) => (
          <button key={t.label} onClick={() => setActive(i)} style={{
            appearance: 'none', cursor: 'pointer', background: i === active ? 'var(--hm-surface-card)' : 'transparent',
            border: 0, borderBottom: `2px solid ${i === active ? 'var(--hm-line-accent)' : 'transparent'}`,
            padding: '9px 16px', color: i === active ? 'var(--hm-text-strong)' : 'var(--hm-text-muted)',
            fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-code-sm)',
            fontWeight: 'var(--hm-weight-medium)', transition: 'var(--hm-transition-colors)'
          }}>{t.label}</button>
        ))}
      </div>
      <div style={{ padding: 'var(--hm-space-5)', fontFamily: 'var(--hm-font-body)', fontSize: 'var(--hm-size-body-sm)', lineHeight: 'var(--hm-lh-body-sm)', color: 'var(--hm-text-body)' }}>
        {tabs[active] && tabs[active].content}
      </div>
    </div>
  );
}
