import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';

/** The subset of themeConfig.footer this component reads. */
type LinkItem = {label?: string; to?: string; href?: string};
type LinkColumn = {title?: string; items?: LinkItem[]};

/**
 * The design's footer leads with a brand column — the wordmark over a one-line
 * statement of what the practice is — and then sets the link columns beside it,
 * with the copyright alone on a hairline below.
 *
 * Docusaurus' own footer can express none of that: it renders the logo and the
 * copyright centred underneath the links, and has no field for the statement at
 * all. So this replaces it. Everything else still comes from
 * `themeConfig.footer`, and the Infima class names are kept so the design
 * system's `.footer__*` rules go on applying.
 */

/** The struck oval stamp, inlined so it can take a theme colour. */
function Mark({size = 22}: {size?: number}) {
  return (
    <svg
      width={size}
      height={size * 0.86}
      viewBox="0 0 32 28"
      aria-hidden="true"
      style={{display: 'block', flex: 'none', overflow: 'visible'}}>
      <ellipse cx="16" cy="14" rx="15" ry="11.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="16" cy="14" rx="12.4" ry="9" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <text
        x="16"
        y="14"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        style={{fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 17}}>
        h
      </text>
    </svg>
  );
}

function FooterLink({item}: {item: LinkItem}) {
  const {to, href, label} = item;
  return (
    <Link className="footer__link-item" {...(href ? {href} : {to: to ?? '/'})}>
      {label}
    </Link>
  );
}

export default function Footer(): React.JSX.Element | null {
  const {footer} = useThemeConfig();
  const {siteConfig} = useDocusaurusContext();
  const blurb = siteConfig.customFields?.footerBlurb as string | undefined;

  if (!footer) {
    return null;
  }
  const {copyright, links} = footer;
  // Only the multi-column shape is used here; the flat `links` array would need
  // a different layout and this site does not use it.
  const columns: LinkColumn[] =
    Array.isArray(links) && links.length > 0 && 'items' in links[0] ? (links as LinkColumn[]) : [];

  return (
    <footer className="footer hm-footer">
      <div className="hm-footer__inner">
        <div className="hm-footer__brand">
          <span className="hm-footer__logo">
            <Mark />
            <span className="hm-footer__wordmark">Hallmark</span>
          </span>
          {blurb && <p className="hm-footer__blurb">{blurb}</p>}
        </div>

        <div className="hm-footer__columns">
          {columns.map((column) => (
            <div key={column.title ?? ''} className="hm-footer__column">
              <div className="footer__title">{column.title}</div>
              <div className="hm-footer__links">
                {(column.items ?? []).map((item, i) => (
                  <FooterLink key={item.to ?? item.href ?? i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {copyright && (
        <div className="hm-footer__bottom">
          {/* Plain text by configuration — this site's copyright carries no markup. */}
          <span className="footer__copyright">{copyright}</span>
        </div>
      )}
    </footer>
  );
}
