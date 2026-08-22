import React from 'react';

export const LUCIDE_BASE = 'https://unpkg.com/lucide-static@0.436.0/icons/';

const cache = new Map();

function load(name) {
  if (!cache.has(name)) {
    cache.set(name, fetch(LUCIDE_BASE + name + '.svg')
      .then(r => (r.ok ? r.text() : ''))
      .then(t => t.replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"'))
      .catch(() => ''));
  }
  return cache.get(name);
}

/** Inlines a Lucide glyph so it inherits currentColor. */
export function Icon({ name, size = 18, style, label, ...rest }) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => { let live = true; load(name).then(t => { if (live) setSvg(t); }); return () => { live = false; }; }, [name]);
  return (
    <span
      role={label ? 'img' : 'presentation'} aria-label={label} aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, flex: '0 0 auto', color: 'inherit', ...style
      }} {...rest}
    />
  );
}
