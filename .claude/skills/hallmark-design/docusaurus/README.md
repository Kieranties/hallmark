# Docusaurus integration

**Start with [`../INSTALL.md`](../INSTALL.md)** — it is the full, ordered install guide. This folder holds the files it tells you to copy:

| File | What it does |
|---|---|
| `custom.css` | Infima bridge: maps `--ifm-*` onto Hallmark tokens, restyles navbar, sidebar, prose, tables, admonitions, pagination, buttons and footer |
| `prism-hallmark.css` | Repaints Docusaurus code blocks with the `--code-*` tokens |
| `mermaid.js` | `themeConfig.mermaid` export, light and dark theme variables |
| `mermaid.css` | Squares nodes, thins strokes, colours edge labels (fonts are set in `mermaid.js`, never here) |

## Theme scope

Docusaurus writes `data-theme="dark"` on `<html>`; Hallmark's semantic tokens are scoped to exactly that selector, so no extra wiring is needed.

## MDX helpers

`custom.css` ships four authoring classes so MDX can use the brand's call-out vocabulary without React:

| Class | Use |
|---|---|
| `.hm-mark` | A defined term on first mention |
| `.hm-keyword` | A keyword on a soft gold plate |
| `.hm-state` | A literal work state, e.g. `Accepted` |
| `.hm-punch` | A number inside the octagonal cartouche |

Admonition mapping: `:::note` / `:::info` → blue, `:::tip` → verdigris (use for proof), `:::warning` → amber (use for concessions), `:::danger` → punch red (use for failed verification).
