# Applying Hallmark to your Docusaurus site

Everything here is plain CSS custom properties and plain React — no build config, no npm packages, no Tailwind.

## 1. Copy the files in

From this design system into your Docusaurus project:

| From | To |
|---|---|
| `styles.css`, `tokens/` | `src/css/hallmark/` (keep the folder shape — `styles.css` `@import`s `tokens/*`) |
| `docusaurus/custom.css` | `src/css/custom.css` |
| `docusaurus/prism-hallmark.css` | `src/css/prism-hallmark.css` |
| `docusaurus/mermaid.css` | `src/css/mermaid.css` |
| `docusaurus/mermaid.js` | `src/theme/mermaid.js` |
| `assets/mark-gold.svg`, `assets/mark-light.svg`, `assets/favicon.svg`, `assets/wordmark.svg` | `static/img/` |
| `components/` (optional, for MDX) | `src/components/hallmark/` |

## 2. Wire the config

```js
// docusaurus.config.js
const mermaidTheme = require('./src/theme/mermaid.js');

module.exports = {
  favicon: 'img/favicon.svg',
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [['classic', {
    docs: { sidebarPath: './sidebars.js' },
    theme: { customCss: [
      './src/css/hallmark/styles.css',   // tokens first
      './src/css/custom.css',            // Infima bridge
      './src/css/prism-hallmark.css',
      './src/css/mermaid.css',
    ]},
  }]],
  themeConfig: {
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    mermaid: mermaidTheme,
    navbar: {
      title: 'Hallmark',
      logo: { alt: 'Hallmark', src: 'img/mark-gold.svg', srcDark: 'img/mark-light.svg' },
      items: [
        { to: '/practice', label: 'Practice', position: 'left' },
        { to: '/terminology', label: 'Terminology', position: 'left' },
        { to: '/process', label: 'Process', position: 'left' },
        { to: '/apply', label: 'Apply', position: 'left' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        { title: 'Practice', items: [{ label: 'Overview', to: '/practice' }, { label: 'Principles', to: '/practice/principles' }] },
        { title: 'Reference', items: [{ label: 'Terminology', to: '/terminology' }, { label: 'Standards', to: '/work/standards' }] },
        { title: 'Apply', items: [{ label: 'Concessions', to: '/apply/concessions' }, { label: 'Subtypes', to: '/apply/subtypes' }] },
      ],
      copyright: '© 2026 Hallmark. Built on the practice it describes.',
    },
  },
};
```

Docusaurus writes `data-theme="dark"` on `<html>`; every Hallmark semantic token is scoped to exactly that selector, so dark mode needs no extra wiring.

## 3. The IA

`content/ia.md` is the sidebar, page by page, extracted from `Untitled/Mindmap 1.md` — copy its tree into `sidebars.js` and split the mindmap's sections into those files. It also lists the authoring rules carried over from the source (glossary entries stay short, tables stay tables, callouts are always titled).

## 4. Authoring in MDX

Four utility classes ship in `custom.css`, so plain MDX gets the call-out vocabulary with no imports:

```mdx
Every <span class="hm-mark">actor</span> must be distinctly identifiable.
A <span class="hm-keyword">concession</span> is recorded, scoped and counted.
An item at <span class="hm-state">Accepted</span> has passed the sift.
```

For richer pages, import the React components (they only reference CSS variables, so they work as-is):

```mdx
import { Callout } from '@site/src/components/hallmark/docs/Callout';
import { DefinitionTable } from '@site/src/components/hallmark/docs/DefinitionTable';

<Callout kind="warning" title="Nothing prunes the stack">
  Layers only ever add, so the merged set only ever grows.
</Callout>
```

Admonition mapping if you'd rather stay in Markdown: `:::note`/`:::info` → antimony, `:::tip` → verdigris (use for proof), `:::warning` → amber (concessions), `:::danger` → punch red (failed verification).

## 5. Sidebar icons

Docusaurus has no icon field, so attach a class per item and paint it with a mask:

```js
// sidebars.js
{ type: 'doc', id: 'process/sift', className: 'sb-sift' }
```

```css
/* src/css/custom.css */
.menu__link{display:flex;align-items:center;gap:8px}
.menu__link[class*="sb-"]::before{content:"";width:14px;height:14px;flex:none;background:var(--text-faint);
  -webkit-mask:var(--sb-icon) no-repeat center/contain;mask:var(--sb-icon) no-repeat center/contain}
.menu__link--active[class*="sb-"]::before{background:var(--text-mark)}
.sb-sift{--sb-icon:url('/img/icons/filter.svg')}
```

Drop the Lucide SVGs you want into `static/img/icons/`. The UI kit's `data.js` lists the icon chosen for every page in the IA.

## 6. Fonts

`tokens/fonts.css` pulls Newsreader, IBM Plex Sans and Fira Code from Google Fonts — all open-licence, all permanent. **Self-hosting is recommended:** download the woff2 files into `static/fonts/`, replace the `@import` with `@font-face` rules pointing at `/fonts/…`, and leave the three `--font-*` variables unchanged. It removes the CDN round-trip and the font-metric race that clips mermaid labels.

## 7. Checks before you ship

- Toggle dark mode on a code page, a table page and a mermaid page.
- If you change a colour token, update the literal hex values in `src/theme/mermaid.js` — mermaid cannot read CSS variables.
- Keep code-syntax colour quieter than the inline marks: a mark should always out-shout a keyword.

## Using this as an agent skill

`SKILL.md` at the root makes this folder an Agent Skill. Download the project, drop the folder into `.claude/skills/hallmark-design/` in your repo (or `~/.claude/skills/` to have it everywhere), and Claude Code picks it up. Invoke it by name — "use the hallmark-design skill" — or just ask for something branded, and the agent reads `readme.md`, the tokens and the components before designing. It works for production work (writes the real CSS and components) and for throwaway artifacts (mocks, slides, static HTML previews).
