import React from 'react';
import {Check, CircleSlash, FileText, Filter, Hammer, ListChecks, Stamp} from 'lucide-react';

const STATES = {
  sifted: {label: 'Sifted', tone: 'void', Icon: Filter},
  specified: {label: 'Specified', tone: 'open', Icon: FileText},
  planned: {label: 'Planned', tone: 'open', Icon: ListChecks},
  built: {label: 'Built', tone: 'open', Icon: Hammer},
  verified: {label: 'Verified', tone: 'verified', Icon: Check},
  decided: {label: 'Decided', tone: 'verified', Icon: Stamp},
  conceded: {label: 'Conceded', tone: 'conceded', Icon: CircleSlash},
} as const;

const toneVars: Record<string, [string, string, string]> = {
  void: ['var(--hm-state-void-soft)', 'var(--hm-state-void)', 'var(--hm-line-strong)'],
  open: ['var(--hm-state-open-soft)', 'var(--hm-state-open)', 'var(--hm-brass-300)'],
  verified: ['var(--hm-state-verified-soft)', 'var(--hm-state-verified)', 'var(--hm-verdigris-300)'],
  conceded: ['var(--hm-state-conceded-soft)', 'var(--hm-state-conceded)', 'var(--hm-aubergine-300)'],
};

export type ItemState = keyof typeof STATES;

export interface StateChipProps {
  state?: ItemState;
  showIcon?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export default function StateChip({state = 'sifted', showIcon = true, size = 'md', style}: StateChipProps) {
  const s = STATES[state] ?? STATES.sifted;
  const [bg, fg, line] = toneVars[s.tone];
  const sm = size === 'sm';
  const {Icon} = s;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: sm ? 4 : 6,
      padding: sm ? '2px 7px' : '3px 10px',
      background: bg, color: fg, border: `var(--hm-border-width) solid ${line}`,
      borderRadius: 'var(--hm-radius-1)',
      fontFamily: 'var(--hm-font-mono)', fontWeight: 500,
      fontSize: sm ? 'var(--hm-size-label)' : 'var(--hm-size-code-sm)',
      letterSpacing: '0.02em', lineHeight: 1.5, whiteSpace: 'nowrap', ...style,
    }}>
      {showIcon && <Icon size={sm ? 12 : 14} strokeWidth={1.75} />}
      {s.label}
    </span>
  );
}
