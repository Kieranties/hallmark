---
name: hallmark-design
description: Use this skill to generate well-branded interfaces and assets for Hallmark, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Notes specific to Hallmark:
- `readme.md` is the design guide (content fundamentals, visual foundations, iconography, index).
- `styles.css` links every token file; link that one file and use the semantic aliases (`--text-body`, `--bg-surface`, `--accent`), not the base palette.
- Dark theme is scoped to `[data-theme="dark"]`, matching Docusaurus. Support both.
- `docusaurus/` holds the Infima bridge for the real documentation site.
- Type is Newsreader / IBM Plex Sans / Fira Code from Google Fonts; icons are Lucide from CDN. Both are flagged substitutions.
