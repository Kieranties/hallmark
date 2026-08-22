import React from 'react';

export function DataTable({ columns = [], rows = [], caption, style, ...rest }) {
  return (
    <div style={{ border: 'var(--hm-border-width) solid var(--hm-line)', borderRadius: 'var(--hm-radius-3)', overflow: 'hidden', ...style }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--hm-font-body)', fontSize: 'var(--hm-size-body-sm)' }}>
        {caption && <caption style={{ captionSide: 'bottom', padding: 'var(--hm-space-3) var(--hm-space-4)', color: 'var(--hm-text-muted)', fontSize: 'var(--hm-size-caption)', textAlign: 'left' }}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c.key || c} style={{
                textAlign: 'left', padding: '9px var(--hm-space-5)',
                background: 'var(--hm-surface-sunk)',
                borderBottom: 'var(--hm-border-width) solid var(--hm-line)',
                color: 'var(--hm-text-muted)', fontFamily: 'var(--hm-font-mono)',
                fontSize: 'var(--hm-size-label)', letterSpacing: 'var(--hm-track-label)',
                textTransform: 'uppercase', fontWeight: 'var(--hm-weight-semibold)'
              }}>{c.label || c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {columns.map(c => (
                <td key={c.key || c} style={{
                  padding: 'var(--hm-space-4) var(--hm-space-5)',
                  borderBottom: i === rows.length - 1 ? 0 : 'var(--hm-border-width) solid var(--hm-line-hairline)',
                  color: 'var(--hm-text-body)', verticalAlign: 'top'
                }}>{r[c.key || c]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
