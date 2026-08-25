# Hallmark Design System

Hallmark is a **delivery practice** — a principled process through which work of any size is delivered, standards are met, and what is claimed of the result is proven. The name is literal: a hallmark is the punch a metalsmith strikes into finished work to certify it met an assay. Everything in this design system serves that metaphor — a quiet, document-first surface where the *marks* are the loud part.

This system exists to dress **Hallmark's documentation site**, which will be built on **Docusaurus**. It is a documentation brand, not a product brand: a landing page exposing the principles, a terminology glossary, and nested article pages.

## Sources

| Source | Path / link | What was taken from it |
|---|---|---|
| Hallmark practice mindmap | `Untitled/Mindmap 1.md` (mounted local folder, 598 lines) | All content: principles, terminology, parties, standards, work types, process, states. Voice and copy conventions. |
| Brand assets | *none provided* | No logo, colours, fonts, icons or screens existed. Everything visual here is **new and authored for review** — see "Authored, not inherited". |

There was no codebase, Figma file or existing site. The reader is not assumed to have access to the mindmap; the extracted IA lives in `content/ia.md` and the content used by the UI kit in `ui_kits/docs-site/data.js`.

### Authored, not inherited — needs your sign-off

- **The mark — decided.** A struck oval stamp: 1.6px outer ring, 0.7px inner ring, lowercase italic serif `h` (`assets/mark.svg`). Drawn here, from scratch, because no source mark existed. It reads as a maker's punch rather than a glyph in a warning sign. Alternative directions were reviewed and rejected; this is the mark.
- **The palette.** Assay gold as the accent, antimony blue for links, verdigris / punch red / amber for status. Chosen to read as metalwork rather than SaaS.
- **The type — decided.** Newsreader (display), IBM Plex Sans (body), Fira Code (mono) — all open-licence Google Fonts, permanently. No licensed faces are involved.
- **The icons — decided.** Lucide (ISC licence) via CDN.

## Fonts

All three faces are free, open-licence Google Fonts, loaded by `@import` in `tokens/fonts.css`. This is the permanent stack, not a placeholder:

| Role | Face | Why |
|---|---|---|
| Display | **Newsreader** | A modern text serif with real editorial authority at large sizes and a genuine italic — carries the "document of record" tone without period costume. |
| Body / UI | **IBM Plex Sans** | Slightly technical, low-contrast, excellent at 14–16px; its mono sibling keeps identifiers and prose visually related. |
| Mono | **Fira Code** | Wide, unambiguous glyphs for state names and identifiers. **Ligatures are disabled everywhere** (`font-variant-ligatures: none`). |

All three are under open licences (OFL / SIL), so they can be self-hosted freely: put the woff2 files in `static/fonts/`, swap the `@import` for `@font-face` rules, and leave the `--font-*` variables untouched. Self-hosting is worth doing for the site — it removes the CDN round-trip and the font-metric race that clips mermaid labels.

## Content fundamentals

The source document has an unusually strong voice, and it is the brand's voice. Copy the following, exactly.

**Definitional, not promotional.** Every paragraph either defines something or tests it. There is no persuasion, no benefit language, no "empower your team". The strongest sentence in the source is a definition: *"A concession is therefore not an exception to the practice — it is the practice working."*

**Lead clause bold, then the elaboration.** Nearly every paragraph opens with a bolded assertion, then one or two sentences of consequence. Example: **"Attribution is not accountability."** followed by the distinction. Use this rhythm; it is what makes the docs scannable without headings every 80 words.

**Third person, present tense, no addressee.** The practice does not speak to "you" and never says "we". It says *"the practice states"*, *"a role is scoped to a subject"*. Second person appears only inside a rule of thumb — *"You cannot grant what you do not have."*

**Sentence case everywhere.** Headings, buttons, nav items, table headers. Title Case is never used. The only uppercase is the letterspaced micro-label (`ON THIS PAGE`, `IMPORTANT`, `VERIFIED`) at 11px.

**Defined words are capitalised only as vocabulary.** Role names (Worker, Verifier, Sentinel, Decider) and state names (`Accepted`, `Retracted`) are capitalised because they are literal values. Ordinary defined terms — actor, persona, discipline, concession — stay lowercase in prose and are marked, not capitalised.

**Tests, not guidance.** Where a decision has to be made, the copy gives a decidable test: *"Test: after this, can anyone do something they could not do before?"*, *"does the running system serve them?"*. Never "consider whether…".

**Em dashes and italics carry the argument.** The source leans on both: an em dash to append the consequence, italics for the word under contrast (*object*, *why*, *silently*). Keep them; they are voice, not decoration.

**No emoji. Ever.** Not in docs, not in UI, not in commit-message examples. The source contains none, and the practice's whole posture — evidence, attribution, floors — is incompatible with them.

**Failure modes are named and boxed.** Callouts titled like sentences: *"Friction at the door is paid invisibly"*, *"Nothing prunes the stack"*, *"A state is not a work queue"*. A callout without a title is a smell.

**Examples are ✓ / ✗ pairs with a reason.** *"An operator can drain a node without dropping traffic" — named persona, achievable outcome.* Keep the trailing reason clause.

**Vocabulary discipline.** The practice never uses tool words (epic, story, bug, spike) in its own voice — it maps them and moves on. Never write "ticket", "backlog grooming", "sprint" in Hallmark's voice.

## Visual foundations

**Overall vibe.** A specification, well set. Warm paper in light mode, cool graphite in dark, long measures of quiet prose, and gold used like a struck mark: rarely, deliberately, always meaning "this is defined vocabulary" or "this is the state".

**Colour.** One hue does the work. *Assay gold* (`--gold-400` `#A8792C`) is the brand accent — marks, keywords, the active nav rail, the 3px rule under section headings, hovered links, the primary button. There is no second UI hue: *antimony blue* (`--blue-400`) survives only as the code-syntax keyword colour, where it sits inside a code plate and never competes with prose. Status uses verdigris (`#1F7A6B`, pass/proof), punch red (`#B03A2E`, fail/returned) and amber (`#96701A`, conceded). Neutrals are split by theme: light neutrals are *warm* (paper `#FAF8F4`), dark neutrals are *cool* (ink `#15181C`) — the warmth is what stops the light theme reading as a generic docs template. Maximum two background tones per page: `--bg-page` and `--bg-surface`, with `--bg-sunken` reserved for code and footer.

**Links and marks.** The one distinction to get right, because both live in prose. A **link** is ink text on a solid hairline underline (`--text-link` + `--border-link`) and turns gold on hover — it means *go there*. A **term** is gold text on a dotted gold rule (`Mark`, `.hm-mark`) and does not change on hover — it means *this word is defined*. A **keyword** is gold on a soft gold plate. Nav, header and footer links carry no underline; only links in prose do. Never give a link the dotted rule, and never make a term look clickable when it is not.

**Type.** Serif display / sans body, deliberately. Headings are Newsreader 500–600 with `-0.015em` tracking; body is IBM Plex Sans 16px at 1.65 line-height over a 68ch measure; secondary prose is 14px in `--text-muted`. Italic is always the serif italic. The eleven-step scale runs 11 → 68px.

**Spacing.** A 2/4/8-derived scale with a 6px step retained for chip padding (`--space-1…12`, 2 → 128px). Docs layout is fixed-rail: 284px sidebar, 768px content column, 224px contents rail, 24px gutter, 60px navbar.

**Backgrounds.** Flat colour. No images, no gradients, no textures, no patterns, no full-bleed photography — none was provided and none is wanted. There is no ornament and no eyebrow: the mark appears once, in the header, and a page opens on its title. Brand marks are inlined as SVG markup wherever they must take a theme colour (`currentColor` inherits); the standalone files in `assets/` carry literal hex fills instead, so they also work as `<img>` and as Docusaurus `static/img` assets — `mark.svg` (ink), `mark-gold.svg` (light theme), `mark-light.svg` (dark theme). Neither `currentColor` nor `var()` resolves inside an image document, so neither appears in those files. If photography ever enters, it should be cool, high-contrast, close-up metal — and it should sit behind a solid plate, never behind text.

**Borders.** 1px hairlines carry almost all structure: `--border-subtle` (dividers, cards, table rows), `--border-default` (inputs, buttons), `--border-mark` (gold: focus, active nav, hovered card). Two thicker marks exist: the 2px active-nav underline and the 3px 44px-wide gold rule under section headings. No coloured left borders — not on cards, not on callouts.

**Corner radii.** Small and consistent: 2px (chips, badges, code inline), 4px (buttons, inputs), 6px (cards, callouts, code blocks), 10px (only for large panels), pill (tags only). Punched, not pillowy. The struck oval (`--cartouche`, an `ellipse()` clip) is the one expressive shape, used for the mark and for numbered principles.

**Cards.** `--bg-surface`, 1px `--border-subtle`, 6px radius, `--shadow-1`, 20px padding. On hover (interactive cards only) the border turns gold and the shadow steps to `--shadow-2`. No coloured header strip, no left accent bar, no nested cards.

**Shadows.** Four levels, all restrained: `--shadow-1` resting, `--shadow-2` hover, `--shadow-3` overlays and dropdowns only, and `--shadow-struck` — an inset "incised" edge used for pressed buttons and stamped surfaces. Dark theme shadows go blacker and slightly larger rather than being removed.

**Hover states.** Text: colour shifts toward `--text-heading` or gold. Surfaces: a 4% ink wash (`--bg-hover`), never opacity changes and never a lightened brand colour. Buttons: primary darkens to `--gold-500`; secondary/ghost take the wash. Cards: gold hairline plus one shadow step.

**Press states.** No scale transforms, no translate. A pressed control takes `--shadow-struck` — it looks stamped into the surface. This is the brand's one signature interaction.

**Focus.** `--ring-focus`: a 2px page-coloured gap then a 2px gold ring. Inputs additionally turn their border gold. Never remove it; never use a soft glow.

**Animation.** One easing (`--ease-standard`, `cubic-bezier(.2,0,.2,1)`), two durations that matter — 140ms for hover/focus/colour, 220ms for disclosure and theme swap. No bounce, no overshoot, no spring, no scroll-triggered entrance animation on documentation content. Prose does not fade in; it is already there.

**Transparency and blur.** Exactly two uses: the navbar (`color-mix` of the page colour at 88% + 8px blur, so text scrolls under it legibly) and the modal scrim (`--bg-scrim`). Nothing else is translucent — no frosted cards, no glass panels.

**Protection.** Where text must sit over anything non-flat, use a solid plate (a `--bg-surface` card), not a gradient scrim. The system has no protection gradients.

**Layout rules.** Navbar is sticky; sidebar and contents rail are sticky within the viewport and independently scrollable; content is a single column capped at 768px and never justified. Footer is full-width `--bg-sunken`. Nothing else is fixed — no floating action buttons, no sticky CTAs.

**Dark theme.** A genuine parity theme, not an inversion: gold lifts to `--gold-300`, link underlines to `--grey-4`, status colours to their 300 steps, surfaces step *up* from the page rather than down. Both themes are exercised in `guidelines/colors-dark-parity.html` and live in the UI kit.

## Code and diagrams

**Code.** `tokens/syntax.css` adds a `--code-*` set for both themes: keyword (antimony), string (verdigris), number and attribute (gold), function (deep gold), tag (punch red), comment (italic grey), plus diff and line-highlight values. The palette is deliberately quieter than the inline marks around it — **a mark should always out-shout a keyword.** `CodeBlock` renders a filename/language bar, an optional line-number gutter, and highlighted lines marked with a 2px gold rail rather than a coloured background alone. For the real site, `docusaurus/prism-hallmark.css` repaints Docusaurus' Prism output with the same tokens, including `codeBlockTitle`, copy button, line numbers and highlighted lines. Cards: Code group (4).

**Diagrams.** The source's mermaid diagrams are kept as mermaid, not redrawn. `docusaurus/mermaid.js` is a ready `themeConfig.mermaid` export with both light and dark `themeVariables` (mermaid cannot read CSS custom properties, so the literal token values live there — keep them in step with `tokens/colors.css`). `docusaurus/mermaid.css` squares the node corners, thins strokes to 1.1px, sets state labels in the mono face and edge labels in lowercase letterspaced sans. The state machine is rendered live in `guidelines/diagram-state.html` (and a dark twin) and inside the UI kit's Process view.

## Iconography

**No icon set was provided, so Lucide is the substitution** — outline, 1.5–2px stroke, 24px grid, which matches the hairline-heavy surface better than a filled set would. Flagged for your review: swapping it for a licensed set later is a one-line change.

- **Delivery:** CDN, pinned — `https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js`, then `lucide.createIcons()`. In markup, `<i data-lucide="search">`. Nothing is copied into `assets/` because there was nothing local to copy.
- **Size and colour:** 14px inside dense UI (nav, callout labels, inputs), 16px in body flow, 20px maximum. Always `currentColor`, never a fill colour of their own.
- **Where icons are and are not used.** They are used in navigation chrome, callout labels, search, theme toggle and card affordances. They are **not** used in prose, not in headings, and not as bullets — prose calls things out with the `Mark` component instead.
- **The frequently used set:** `search`, `moon`, `sun`, `github`, `arrow-right`, `chevron-right`, `stamp`, `triangle-alert`, `check`, `undo-2`, `copy`, `link`, `book-open`.
- **No emoji, ever.** No decorative unicode either — the one exception is the monospace arrow `→` used between state chips, which is content, not ornament.
- **The brand SVGs in `assets/` are not icons.** `mark.svg`, `mark-gold.svg`, `wordmark.svg`, `punch-row.svg` and `favicon.svg` are brand marks; do not recolour them per-context beyond the tones the `Logo` component exposes.

## Index

Root files:

| File | What it is |
|---|---|
| `INSTALL.md` | **Step-by-step guide to applying this to the Docusaurus site** — file copy list, config snippets, MDX authoring, sidebar icons, fonts |
| `styles.css` | The one stylesheet consumers link — `@import` lines only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `motion.css`, `syntax.css`, `semantic.css` |
| `assets/` | `mark.svg` (ink), `mark-gold.svg`, `mark-light.svg` (dark theme), `wordmark.svg`, `favicon.svg` |
| `guidelines/` | Specimen cards — Colors (8), Type (6), Spacing (5), Brand (3), Code (4), Diagrams (2) |
| `docusaurus/` | `custom.css` Infima bridge, `prism-hallmark.css` code theme, `mermaid.js` + `mermaid.css` diagram theme, `README.md` install steps |
| `content/ia.md` | The documentation IA extracted from the source mindmap |
| `ui_kits/docs-site/` | Click-through recreation of the docs site (4 views) |
| `templates/` | Page templates: `docs-article`, `docs-landing`, `terminology` — each with a light/dark tweak |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

### Components

Grouped by concern; each has a `.jsx`, a `.d.ts` props contract, a `.prompt.md` usage note, and one `@dsCard` per directory.

**`components/core/`** — `Logo`, `Button`, `Badge`, `Tag`, `Card`

**`components/docs/`** — `Mark`, `Callout`, `TermEntry`, `CodeBlock`, `StateChip`, `PrincipleCard`, `DefinitionTable`

**`components/navigation/`** — `Navbar`, `SidebarNav`, `TableOfContents`, `Breadcrumbs`, `PagerNav`, `SearchField`, `ThemeToggle`, `Footer`

Twenty components in total: `Logo`, `Button`, `Badge`, `Tag`, `Card`, `Mark`, `Callout`, `TermEntry`, `CodeBlock`, `StateChip`, `PrincipleCard`, `DefinitionTable`, `Navbar`, `SidebarNav`, `TableOfContents`, `Breadcrumbs`, `PagerNav`, `SearchField`, `ThemeToggle`, `Footer`.

`Footer` mirrors Docusaurus' `themeConfig.footer` shape (`links: [{ title, items }]`), so the same content object drives the kit and the real site; `.footer*` rules in `docusaurus/custom.css` style the Infima markup to match.

#### Intentional additions

No source defined a component inventory, so this set was authored from the needs of a Docusaurus documentation site. Four are Hallmark-specific rather than generic:

- **`Mark`** — the system's signature: inline call-out of a defined term, keyword or identifier. This is what "able to call out key information" resolves to.
- **`StateChip`** — the practice's own state vocabulary (`New` … `Complete`, `Retracted`), monospace because a state is a literal value.
- **`PrincipleCard`** — the four principles, numbered inside the octagonal punch.
- **`TermEntry`** — one glossary definition with its classifier and cross-references.

### UI kit

`ui_kits/docs-site/` — landing page, doc article ("Sift"), filterable terminology page, and process page (with the live mermaid state machine), plus the site footer. Working navigation, live search filter and a light/dark toggle in the navbar; `dark.html` opens the same surface with dark as the starting theme. See its `README.md`.
