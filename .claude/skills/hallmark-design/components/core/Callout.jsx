import React from 'react';
import { Icon } from './Icon.jsx';

const kinds = {
  note: { line: 'var(--hm-line-strong)', fg: 'var(--hm-ink-700)', bg: 'var(--hm-surface-sunk)', icon: 'pencil-line', label: 'note' },
  tip: { line: 'var(--hm-verdigris-300)', fg: 'var(--hm-state-verified)', bg: 'var(--hm-state-verified-soft)', icon: 'check', label: 'tip' },
  info: { line: 'var(--hm-aubergine-300)', fg: 'var(--hm-state-conceded)', bg: 'var(--hm-state-conceded-soft)', icon: 'info', label: 'info' },
  warning: { line: 'var(--hm-brass-300)', fg: 'var(--hm-state-open)', bg: 'var(--hm-state-open-soft)', icon: 'triangle-alert', label: 'warning' },
  danger: { line: 'var(--hm-madder-300)', fg: 'var(--hm-madder-600)', bg: 'var(--hm-action-soft)', icon: 'octagon-alert', label: 'danger' }
};

export function Callout({ children, kind = 'note', title, style, ...rest }) {
  const k = kinds[kind] || kinds.note;
  return (
    <aside style={{
      background: k.bg, borderLeft: `3px solid ${k.line}`,
      borderRadius: '0 var(--hm-radius-2) var(--hm-radius-2) 0',
      padding: 'var(--hm-space-4) var(--hm-space-5)', ...style
    }} {...rest}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--hm-space-3)', color: k.fg,
        fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-label)',
        letterSpacing: 'var(--hm-track-label)', textTransform: 'uppercase',
        fontWeight: 'var(--hm-weight-semibold)', marginBottom: 'var(--hm-space-3)'
      }}>
        <Icon name={k.icon} size={14} />
        {title || k.label}
      </div>
      <div style={{
        color: 'var(--hm-text-body)', fontFamily: 'var(--hm-font-body)',
        fontSize: 'var(--hm-size-body-sm)', lineHeight: 'var(--hm-lh-body-sm)'
      }}>{children}</div>
    </aside>
  );
}
