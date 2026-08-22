import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** The practice's item states, in the order an item travels them. */
export const STATES = {
  sifted: { label: 'Sifted', tone: 'void', icon: 'filter' },
  specified: { label: 'Specified', tone: 'open', icon: 'file-text' },
  planned: { label: 'Planned', tone: 'open', icon: 'list-checks' },
  built: { label: 'Built', tone: 'open', icon: 'hammer' },
  verified: { label: 'Verified', tone: 'verified', icon: 'check' },
  decided: { label: 'Decided', tone: 'verified', icon: 'stamp' },
  conceded: { label: 'Conceded', tone: 'conceded', icon: 'circle-slash' }
};

const toneVars = {
  void: ['var(--hm-state-void-soft)', 'var(--hm-state-void)', 'var(--hm-line-strong)'],
  open: ['var(--hm-state-open-soft)', 'var(--hm-state-open)', 'var(--hm-brass-300)'],
  verified: ['var(--hm-state-verified-soft)', 'var(--hm-state-verified)', 'var(--hm-verdigris-300)'],
  conceded: ['var(--hm-state-conceded-soft)', 'var(--hm-state-conceded)', 'var(--hm-aubergine-300)']
};

export function StateChip({ state = 'sifted', showIcon = true, size = 'md', style, ...rest }) {
  const s = STATES[state] || STATES.sifted;
  const [bg, fg, line] = toneVars[s.tone];
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: sm ? 4 : 6,
      padding: sm ? '2px 7px' : '3px 10px',
      background: bg, color: fg, border: `var(--hm-border-width) solid ${line}`,
      borderRadius: 'var(--hm-radius-1)',
      fontFamily: 'var(--hm-font-mono)', fontWeight: 'var(--hm-weight-medium)',
      fontSize: sm ? 'var(--hm-size-label)' : 'var(--hm-size-code-sm)',
      letterSpacing: '0.02em', lineHeight: 1.5, whiteSpace: 'nowrap', ...style
    }} {...rest}>
      {showIcon && <Icon name={s.icon} size={sm ? 11 : 13} />}
      {s.label}
    </span>
  );
}
