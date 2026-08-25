# Information architecture

Extracted from `Untitled/Mindmap 1.md` (598 lines, single-file source). The mindmap has four top-level branches — Overview, Terminology, Parties, Standards, Work types, Process, Application — which map onto a four-section Docusaurus sidebar. Terminology is the hub: every other page links into it, and it links back out to the page that owns each concept.

## Sidebar

```
docs/
├─ index.md                          "Hallmark" — landing (principles, the track, ways in)
├─ practice/
│  ├─ overview.md                    Overview
│  ├─ principles.md                  Provable · Derived · Traceable · Invariant
│  └─ practice-and-application.md    Interface vs implementation; declared and portable
├─ parties/
│  ├─ index.md                       Two branches, the object test, the diagram
│  ├─ actors.md                      Human or agent; eligibility turns on access
│  ├─ roles.md                       Worker · Verifier · Sentinel · Decider; permissions
│  ├─ personas.md                    Parties the running system serves (examples table)
│  ├─ disciplines.md                 Parties that act on the change (examples table)
│  └─ accountability.md              Attribution vs accountability; delegation, ceiling, least privilege
├─ work/
│  ├─ types.md                       The five types, the ordered test, subtype mapping
│  ├─ capability.md                  Outcome wording, generated from specifications
│  ├─ fix.md                         Attaches to a capability
│  ├─ chore.md                       Residual; the "can anyone do something new?" test
│  ├─ question.md                    Resolution diagnostics
│  ├─ initiative.md                  Containment is exclusive
│  ├─ standards.md                   Floors, union merge, stack pruning warning
│  └─ commitment.md                  The second axis; slippage is computed
├─ process/
│  ├─ index.md                       The seven acts table; verification as exit
│  ├─ states.md                      State machine, returns to Accepted, retraction
│  ├─ capture.md                     One door; friction paid invisibly
│  ├─ sift.md                        Typing and ruling; keeping it cheap
│  ├─ specify.md                     Specifications that fail; measures as goals
│  ├─ plan.md                        Ordered actions; declared touch
│  ├─ action.md                      Every criterion driven
│  ├─ validate.md                    Outcome vs work; held close to the persona
│  └─ publish.md                     Confirm by looking; capability generated
├─ apply/
│  ├─ declaring-an-application.md    What a system must declare
│  ├─ concessions.md                 Recording, scoping, expiring, counting
│  └─ subtypes.md                    Application types map onto the five
└─ terminology.md                    Glossary — 24 entries, filterable
```

## Rules carried over from the source

- **Terminology entries are short.** Bold lead clause, one or two sentences, then a "See also" line to the page that owns the concept. The long treatment lives on that page, never in the glossary.
- **Every term used in prose links to the glossary on first mention only** (`Mark` component, or `.hm-mark` in MDX).
- **Tables carry the normative content.** Roles, personas, disciplines, work-type tests, act outputs and subtype mappings are all tables in the source; keep them as tables.
- **Callouts are used sparingly and always titled** — the source uses `[!IMPORTANT]` for naming rules and `[!WARNING]` for failure modes. Map to `:::warning` / `:::note` with the title preserved.
- **Mermaid diagrams** (state machine, commitment axis) come from the source verbatim; render with `@docusaurus/theme-mermaid` and the token palette.
- **"Done when / Verified when" blocks** close each process page — keep them as blockquotes, in that order.
