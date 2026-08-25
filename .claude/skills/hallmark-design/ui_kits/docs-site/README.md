# UI kit — Hallmark docs site

A Docusaurus-shaped documentation surface for the Hallmark practice, built from the components in `components/`. Open `index.html`.

Four click-through views, switched from the navbar:

| Nav item | File | Shows |
|---|---|---|
| Apply (default landing) | `LandingPage.jsx` | Hero, four principles, the act table, role panel, three entry cards |
| Practice | `ArticlePage.jsx` | Doc article ("Sift") with sidebar, in-page contents, tables, callouts, pager |
| Terminology | `GlossaryPage.jsx` | Live-filtered glossary — search box plus classification tags |
| Process | `ProcessPage.jsx` | State flow, verification callouts, act table, commitment/concession panels |

`Shell.jsx` holds the navbar / sidebar / contents chrome and mounts the `Footer` component; `data.js` holds the content lifted from the source mindmap (`Untitled/Mindmap 1.md`). The Process view renders the practice's state machine through mermaid, themed by `docusaurus/mermaid.css` and the theme variables in `index.html`.

`dark.html` is the same app with dark as the starting theme, registered as its own card.

The theme toggle sets `data-theme` on `<html>`, exactly as Docusaurus does — both themes are live in the kit.

Icons are Lucide, loaded from CDN (`lucide@0.454.0`). See readme.md → Iconography.
