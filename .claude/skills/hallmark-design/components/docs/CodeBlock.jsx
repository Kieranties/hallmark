import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function CodeBlock({ code = '', language = 'bash', title, showCopy = true, style, ...rest }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => { setCopied(true); setTimeout(() => setCopied(false), 1400); };
  return (
    <div style={{
      background: 'var(--hm-surface-code)', border: 'var(--hm-border-width) solid var(--hm-line)',
      borderRadius: 'var(--hm-radius-3)', overflow: 'hidden', ...style
    }} {...rest}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '6px 10px 6px 14px', borderBottom: 'var(--hm-border-width) solid var(--hm-line)',
        background: 'var(--hm-surface-card)'
      }}>
        <span style={{
          fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-label)',
          letterSpacing: 'var(--hm-track-label)', textTransform: 'uppercase',
          color: 'var(--hm-text-muted)'
        }}>{title || language}</span>
        {showCopy && (
          <button onClick={copy} style={{
            display: 'inline-flex', alignItems: 'center', gap: 5, cursor: 'pointer',
            background: 'transparent', border: 'var(--hm-border-width) solid var(--hm-line)',
            borderRadius: 'var(--hm-radius-2)', padding: '2px 8px',
            color: copied ? 'var(--hm-state-verified)' : 'var(--hm-text-muted)',
            fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-label)',
            transition: 'var(--hm-transition-colors)'
          }}>
            <Icon name={copied ? 'check' : 'copy'} size={12} />{copied ? 'copied' : 'copy'}
          </button>
        )}
      </div>
      <pre style={{
        margin: 0, padding: 'var(--hm-space-4) var(--hm-space-5)', overflowX: 'auto',
        fontFamily: 'var(--hm-font-mono)', fontSize: 'var(--hm-size-code)',
        lineHeight: 'var(--hm-lh-code)', color: 'var(--hm-ink-800)'
      }}><code>{code}</code></pre>
    </div>
  );
}
