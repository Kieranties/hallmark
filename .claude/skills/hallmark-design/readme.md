# Hallmark — design system

**Hallmark is a delivery practice**: declarations, states and criteria a repository adopts so that
claims about work are *checked rather than asserted*. A repository declares a **door** (where its
items live and what carries each fact about them), items travel a fixed set of **states**, and what
a state requires is written down rather than remembered. Its own repository runs the practice on
itself — pre-1.0 and dogfooding.

The product is currently one surface: **a documentation site**, built with Docusaurus 3.10 (classic
preset, Mermaid theme, TypeScript config) and published to `hallmark.kieranties.com` from GitHub
Pages on every merge to `main`.

This design system gives that site a visual identity, and gives designers and agents everything
needed to make consistent Hallmark artefacts. It is **Docusaurus-compatible by construction**:
`tokens/docusaurus.css` maps every brand token onto an Infima variable, so the whole brand drops
into `website/src/css/custom.css` with no swizzling.

## Sources

| Source | What was taken from it |
| --- | --- |
| <https://github.com/Kieranties/hallmark> | Product concept, all copy, the site's structure and config, the practice's vocabulary (`.hallmark/*.yml`) |
| `website/src/css/custom.css` (same repo) | The *only* styling upstream: the untouched Docusaurus scaffold palette (green `#2e8555` / teal `#25c2a0`). Deliberately replaced — see below |
| `.hallmark/` declarations | The state names, disciplines and personas that `StateChip` and the docs copy use |

The repository is worth exploring directly if you are extending this system — `.hallmark/*.yml`
carries the practice's real vocabulary, and `website/` carries the site this kit recreates.

**There was no design system, no logo, no imagery and no icon set upstream.** Everything visual
here is original work created for this system, at the user's explicit request. The scaffold's
default green/teal was not carried over: it is Docusaurus's own default, not a brand decision.

## The idea behind the look

A hallmark is a mark struck into silver by an assay office, beside the maker's own signature: a
small, permanent claim meaning *this was checked, and someone answers for it*. The system takes
that literally — a cursive lowercase h over its assay rule, printed-record neutrals, madder red
as the mark's colour, and metal-derived semantics (verdigris for verified,
brass for in flight, aubergine for a recorded concession). Nothing floats; depth comes from
hairlines and letterpress, not from shadows and glass.

---

# CONTENT FUNDAMENTALS

Hallmark's own writing is the strongest asset in the repository. Copy it exactly.

**Tone.** Declarative and unhedged. Sentences state what is true and what follows from it:
"A pull request builds the site but never publishes it." No enthusiasm, no persuasion, no
metaphors doing load-bearing work.

**Definitions by contrast.** The house move is a pair of opposed statements that settle a
distinction: "If editing it later would destroy the point of it, it is an ADR. If never editing it
later would make it wrong, it is a KB article." Use it where readers actually confuse two things —
not as decoration.

**Reasons are given, in the same breath.** "So that", "because", "recorded here so it is not
mistaken for a decision." Every constraint carries why it exists.

**Person.** Almost none. No "we", rarely "you" — the subject is the thing: the door, the item, the
site, the repository. Instructions address the reader briefly and only in procedures
("Clone the repository and open it in VS Code").

**Casing.** Sentence case everywhere — headings, buttons, cards, table headers. The only uppercase
is the mono micro-label (`DOCS · PRACTICE`, `PREVIOUS`, `VERIFIED`), which is tracked +0.1em.
Product vocabulary is lower-case in prose except where it names a declaration key
(`door.carries`, `type-`, `Status`).

**Bold, not italics.** Bold marks the one phrase a paragraph turns on ("**checked rather than
asserted**", "**Where this repository keeps its durable documents.**"). Italics are unused.

**Tables over prose lists.** Two- and three-column lookup tables carry anything enumerable:
paths and what they hold, commands and what they do, locations and their lifecycles.

**No emoji. Ever.** Not in copy, not in cards, not in admonition titles. Iconography is Lucide.

**Status is stated, not hidden.** The site says "pre-1.0", "this site is a scaffold", "that is a
gap in the door". Uncertainty is content: a concession is recorded, scoped, and expires.

**Admonition titles name the claim**, not the severity: `:::warning[This site is a scaffold]`.

Examples worth imitating verbatim:

> A delivery practice: declarations, states, and criteria that a repository adopts so that claims
> about work are **checked rather than asserted**.

> Nothing here is stable, and the site currently carries a scaffold rather than the practice.

Avoid: exclamation marks, "powerful"/"seamless"/"best-in-class", "let's dive in", rhetorical
questions, "simply", and any sentence that would embarrass an audit reader.

---

# VISUAL FOUNDATIONS

**Colour.** One accent: **madder** `#8A2F1C` (`--hm-madder-600`) — the struck mark, used for
links, the primary button, active edges and the hover hairline. Neutrals are a **warm ink-on-paper
ramp** (`--hm-paper` `#FFFDFB` → `--hm-ink-900` `#16110E`), never pure grey and never pure white.
Semantics are drawn from metal: verdigris `#23685B` (verified, tip), brass `#96731F` (open,
warning), aubergine `#5B2A4A` (conceded, info), ink-500 (void). **There is no separate danger
red** — madder is both brand and alarm, so a failing check is the only madder thing on the page.
Dark theme (`[data-theme='dark']`) lifts rather than inverts: paper becomes brown-black `#141110`,
madder warms to terracotta `#DB6B44`.

**Type.** Three families. **Spectral** (serif) for every heading and the hero — 56/40/30/22px,
weight 600, tracking −0.015em, leading 1.06–1.28. **IBM Plex Sans** for body and UI — 18/16/14/12.5px
at 1.7 leading. **IBM Plex Mono** for everything the system *declares*: code, paths, state names,
versions, breadcrumbs, table headers, section labels. If a string is a key, a state or a path, it
is mono; if it is a sentence, it is not. Prose is capped at 70ch (`--hm-measure-prose`).

**Spacing and layout.** Scale 2 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96. Docs frame is fixed:
60px navbar (sticky), 270px sidebar, 70ch prose column, 220px TOC (sticky), 1320px page max, 24px
gutter, 96px between landing sections. Sidebar and TOC are fixed-width; only prose flexes.

**Backgrounds.** Flat paper, almost always. Two exceptions: a **sunk fill** (`--hm-surface-sunk`)
for hero and code strips, and the **punch grid** (`assets/punch-grid.svg`, 48px tile) at 4–6%
opacity behind the landing hero and nothing else. No gradients anywhere — no hero gradient, no
button gradient, no text gradient. No photography in the system yet (there is none upstream); if
imagery arrives, expect it warm, high-contrast and desaturated rather than colour-graded.

**Borders and radii.** The hairline is the primary structural device: 1px `--hm-line` `#E0D7D0`.
Radii are small and deliberate — 2px badges, 3px buttons and inputs, 5px cards and code blocks,
8px large panels; the pill radius is reserved for avatars and is otherwise unused. The **struck
edge** is a 2–3px madder edge on the leading side of an active thing: active sidebar item, active
tab, admonition left edge, TOC marker. It is the only left-accent treatment permitted.

**Shadows.** Letterpress, not float. `--hm-shadow-1` at rest for cards, `--hm-shadow-2` on hover,
`--hm-shadow-3` only for things genuinely above the page (dialogs, dropdowns, search overlay).
Inner shadow exists only as the 1px top highlight in `--hm-shadow-press`.

**Transparency and blur.** Sparingly, and only on sticky chrome: the navbar may take
`--hm-blur-sticky` over scrolled content. Overlays use a 42% ink scrim
(`--hm-overlay-scrim`). No frosted cards, no translucent panels over prose.

**Animation.** Short, flat, no bounce. 80ms press, 120ms hover, 180ms reveal, 280ms overlay, all on
`cubic-bezier(.2,0,.2,1)`. Hover changes colour and hairline only. Press translates 1px down —
never scales. Reveals are opacity plus a 2px rise. All durations collapse to 0 under
`prefers-reduced-motion`. Nothing loops, nothing pulses, nothing floats.

**States.** Hover: hairline moves to madder, background to `--hm-surface-sunk`, text to madder.
Press: 1px down. Focus: 3px madder ring at 32% (`--hm-shadow-focus`) — visible, never removed.
Disabled: 42% opacity, no colour change.

**Cards.** Paper fill, 1px hairline, 5px radius, `--hm-shadow-1`, 16px padding. On hover the
hairline goes madder and the shadow steps to 2. No coloured header bars, no left-border-only cards
(the single left-edge exception is the admonition, which is Docusaurus's own pattern).

---

# ICONOGRAPHY

**The repository ships no icons at all** — no icon font, no sprite, no SVGs, and Docusaurus's
default theme supplies only its own chrome glyphs. Substitution flagged: this system standardises
on **Lucide 0.436.0**, loaded from CDN (`https://unpkg.com/lucide-static@0.436.0/icons/`) and
masked to `currentColor` by the `Icon` component. Lucide was chosen for its flat 1.5px stroke and
square terminals, which match the mark's geometry.

- **Sizes:** 16px inline with text, 18px in UI chrome, 20–24px as a feature mark. Never larger.
- **Colour:** inherited from surrounding text. Icons are never a second accent colour.
- **Set in use:** `stamp`, `filter`, `file-text`, `list-checks`, `hammer`, `check`, `circle-slash`,
  `triangle-alert`, `octagon-alert`, `info`, `pencil-line`, `copy`, `arrow-left`, `arrow-right`,
  `chevron-right`, `book-open`, `door-open`, `folder`, `power`, `search`, `github`, `sun`, `moon`.
- **Emoji:** never — in UI, in docs copy, or in commit messages shown as examples.
- **Unicode as icon:** only `⌘` inside a `Kbd`, and `·` as a separator in mono labels.
- **Brand marks:** `assets/logo-mark.svg`, `logo.svg`, `logo-dark.svg`, `logo-mark-outline.svg`,
  `favicon.svg`, plus the `punch-grid.svg` texture. See `assets/README.md` for clear space and
  minimum sizes.

If Hallmark later adopts an icon set of its own, replace `Icon`'s `LUCIDE_BASE` and nothing else.

---

# INDEX

**Root**

| File | Holds |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` lines only |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `borders.css`, `elevation.css`, `motion.css`, `fonts.css`, `docusaurus.css` |
| `assets/` | Logo lockups, favicon, punch-grid texture, and `assets/README.md` (usage rules) |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand) + `card.css`, and `docusaurus-setup.md` — how to apply this system to `website/` |
| `components/` | Reusable primitives, grouped `core/`, `docs/`, `navigation/` |
| `ui_kits/docs-site/` | Interactive recreation of `hallmark.kieranties.com` |
| `SKILL.md` | Agent-skill entry point |
| `patch/` | Drop-in patch for `Kieranties/hallmark` — mirrors `website/` paths; see `patch/APPLY.md` |
| `github.md` | Upstream source association and sync record |

**Components** — `window.<Namespace>.<Name>`; each has a `.d.ts` contract and a `.prompt.md`.

- `components/core/` — **Button**, **Badge**, **Callout**, **Kbd**, **Icon**
- `components/docs/` — **StateChip**, **DocCard**, **CodeBlock**, **TabbedPanel**, **DataTable**
- `components/navigation/` — **SidebarNav**, **Breadcrumbs**, **DocPager**

**Intentional additions.** No component inventory existed upstream (the site runs the unmodified
classic theme), so this set was authored to cover exactly what the theme renders — admonitions,
tabs, code blocks, doc cards, pagination, sidebar, breadcrumbs — plus two brand-specific pieces:
**Icon** (a wrapper for the substituted Lucide set) and **StateChip** (the practice's own state
vocabulary, which the docs need constantly). Nothing beyond that: no Avatar, Toast, Dialog or
Switch, because nothing upstream shows one.

**UI kits** — `ui_kits/docs-site/` (landing page, docs article layout, dark mode; see its README).

**Substitutions to confirm.** Fonts are Google Fonts stand-ins (Spectral, IBM Plex Sans, IBM Plex
Mono) because no font files exist upstream; icons are Lucide for the same reason. Both are flagged
above and swappable in one file each.
