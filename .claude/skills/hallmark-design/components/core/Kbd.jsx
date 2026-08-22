import React from 'react';

export function Kbd({ children, style, ...rest }) {
  return (
    <kbd style={{
      display: 'inline-block', padding: '1px 6px 2px',
      fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-code-sm)',
      color: 'var(--hm-ink-700)', background: 'var(--hm-surface-raised)',
      border: 'var(--hm-border-width) solid var(--hm-line-strong)',
      borderBottomWidth: 2, borderRadius: 'var(--hm-radius-2)',
      lineHeight: 1.5, ...style
    }} {...rest}>{children}</kbd>
  );
}
