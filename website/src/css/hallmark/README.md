# The Hallmark design system, as installed

**Everything in this directory is copied verbatim from `.claude/skills/hallmark-design`.
Do not hand-edit it.** Change the design system, then re-copy:

```bash
cp -r .claude/skills/hallmark-design/styles.css \
      .claude/skills/hallmark-design/tokens \
      .claude/skills/hallmark-design/docusaurus \
      website/src/css/hallmark/
```

The design system's `INSTALL.md` scatters these files across `src/css/` and `src/theme/`.
This site keeps the folder shape instead, for two reasons:

- **Re-syncing is one copy with no renames.** A scattered layout drifts, because nobody
  remembers which four files moved where.
- **`src/theme/` is Docusaurus' swizzle namespace.** A file at `src/theme/mermaid.js`
  resolves against `@docusaurus/theme-mermaid`'s own `Mermaid` component on a
  case-insensitive filesystem, which silently replaces the renderer.

Two files are deliberately *not* copied here: `docusaurus/README.md` (install prose, not
site source) and anything under `assets/`, which belongs in `static/img/`.

## What sits outside this directory

| File | Why it is not here |
| --- | --- |
| `../site.css` | Site-only additions that are not part of the design system — the navbar GitHub glyph, and dark-mode mermaid parity |
| `../../components/hallmark/` | The MDX component set, which has to sit under `src/components/` to be importable as `@site/src/components/…` |
