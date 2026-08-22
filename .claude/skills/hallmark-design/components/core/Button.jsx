import React from 'react';

const sizes = {
  sm: { padding: '5px 11px', fontSize: 'var(--hm-size-body-sm)' },
  md: { padding: '8px 16px', fontSize: 'var(--hm-size-body-sm)' },
  lg: { padding: '11px 22px', fontSize: 'var(--hm-size-body)' }
};

const variants = {
  primary: { background: 'var(--hm-action)', color: 'var(--hm-text-inverse)', borderColor: 'var(--hm-action)' },
  secondary: { background: 'var(--hm-surface-card)', color: 'var(--hm-text-strong)', borderColor: 'var(--hm-line-strong)' },
  ghost: { background: 'transparent', color: 'var(--hm-action)', borderColor: 'transparent' }
};

const hovers = {
  primary: { background: 'var(--hm-action-hover)', borderColor: 'var(--hm-action-hover)' },
  secondary: { background: 'var(--hm-surface-sunk)', borderColor: 'var(--hm-ink-400)' },
  ghost: { background: 'var(--hm-action-soft)' }
};

export function Button({ children, variant = 'primary', size = 'md', href, disabled = false, iconLeft, iconRight, onClick, type = 'button', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--hm-space-3)',
    fontFamily: 'var(--hm-font-body)', fontWeight: 'var(--hm-weight-medium)',
    lineHeight: 1.2, textDecoration: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--hm-radius-2)', borderWidth: 'var(--hm-border-width)', borderStyle: 'solid',
    transition: 'var(--hm-transition-colors), transform var(--hm-duration-instant) var(--hm-ease-standard)',
    transform: press && !disabled ? 'var(--hm-press-translate)' : 'none',
    opacity: disabled ? 0.42 : 1,
    ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return (
    <Tag
      href={href} type={Tag === 'button' ? type : undefined} disabled={Tag === 'button' ? disabled : undefined}
      onClick={disabled ? undefined : onClick} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
