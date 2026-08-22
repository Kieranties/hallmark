import React from 'react';

const tones = {
  neutral: ['var(--hm-state-void-soft)', 'var(--hm-ink-700)', 'var(--hm-line)'],
  accent: ['var(--hm-action-soft)', 'var(--hm-madder-600)', 'var(--hm-madder-200)'],
  verified: ['var(--hm-state-verified-soft)', 'var(--hm-state-verified)', 'var(--hm-verdigris-300)'],
  open: ['var(--hm-state-open-soft)', 'var(--hm-state-open)', 'var(--hm-brass-300)'],
  conceded: ['var(--hm-state-conceded-soft)', 'var(--hm-state-conceded)', 'var(--hm-aubergine-300)']
};

export function Badge({ children, tone = 'neutral', outline = false, mono = true, style, ...rest }) {
  const [bg, fg, line] = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--hm-space-2)',
      padding: '2px 8px', borderRadius: 'var(--hm-radius-1)',
      background: outline ? 'transparent' : bg, color: fg,
      border: `var(--hm-border-width) solid ${line}`,
      fontFamily: mono ? 'var(--hm-font-mono)' : 'var(--hm-font-body)',
      fontSize: 'var(--hm-size-code-sm)', fontWeight: 'var(--hm-weight-medium)',
      lineHeight: 1.5, whiteSpace: 'nowrap', ...style
    }} {...rest}>{children}</span>
  );
}
