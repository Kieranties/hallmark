import React from 'react';
import {PencilLine} from 'lucide-react';

// Every unwritten page carries this, and the wording lives here rather than in
// 33 copies of an admonition. A page stops being a stub when the tag is deleted
// along with the empty headings under it.
export default function Unwritten() {
  return (
    <aside
      role="note"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--hm-space-3)',
        margin: 'var(--hm-space-5) 0',
        padding: 'var(--hm-space-4)',
        background: 'var(--hm-state-open-soft)',
        color: 'var(--hm-state-open)',
        border: `var(--hm-border-width) solid var(--hm-brass-300)`,
        borderRadius: 'var(--hm-radius-1)',
        fontSize: 'var(--hm-size-body)',
        lineHeight: 1.6,
      }}
    >
      <PencilLine size={18} strokeWidth={1.75} style={{flex: 'none', marginTop: '0.2em'}} />
      <span>
        <strong>Not yet written.</strong> The practice is listed in full so its shape can be read,
        and each page is written in turn. This one is a placeholder — its headings are the four it
        will carry, and they are empty.
      </span>
    </aside>
  );
}
