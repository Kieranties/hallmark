# ADR 0004 — Design gets a page in The loop

| | |
|---|---|
| **Date** | 2026-08-23 |
| **Status** | Accepted |
| **Level** | Component — this repository's `website/` |
| **Item** | [#91](https://github.com/Kieranties/hallmark/issues/91) |
| **Trigger** | Judgement ceiling — genuine alternatives existed, and reversal is expensive |

> **Immutable.** Superseded, never edited.

## Context

The placement of design in the practice is further along than *"not yet placed"*
suggests. Three things are already settled and are not reopened here:

| | Attaches to |
|---|---|
| **Product design** | `Specified` — it is *how* you reach "outcome stated" |
| **Technical design** | `Planned` — it is the activity that produces the plan, and the plan **is** the declared touch set |
| **Domain design** | No state. A standing versioned artifact that changes *revise* |

And **no `Designed` state exists, deliberately.** It would be a stage-gate most work
legitimately skips, which makes it a box to tick, and it would break scale-invariance
outright — a colour change would have to pass through it.

What was not settled is where that lives on the site: stated as rules on the two state
pages, or given a page of its own that both link to.

One authoring rule decides more of this than the placement argument does. **A reserved
term links to its owner page on first use.** *Product design*, *domain design* and
*technical design* are three reserved words, minted when `design` was retired as a bare
word. A term with no owner page cannot be linked, and a retired word whose replacements
have nowhere to point leaves `language/retired-words` unable to do its one job.

## Decision

**Design gets one page, `loop/design.md`, in section 5 — The loop — beside `Touch`.**

It owns product design, domain design and technical design, and where each attaches.
`loop/specified.md` and `loop/planned.md` state the attachment as a rule and link to
it; they do not restate the three-way split.

It sits beside `Touch` because **the depth of all three is derived from touch, never
fixed** — the same rule as rigour, and scale-invariant for the same reason. That is the
sentence that makes design part of how the loop moves rather than a topic beside it.

## Alternatives considered

| | Shape | Why not |
|---|---|---|
| **B** | **No design page.** The placement is a rule on each state page | Fewest pages, and read where it is acted on. But three reserved terms would have no owner page, so nothing could link them on first use — the authoring rule fails outright. It also leaves `retired-words` with a `Design (bare)` row pointing at nothing, and splits domain design, which attaches to no state, across two pages that are both states |
| **C** | **A design page in section 6, What an act requires** | Section 6 is about what makes an act sufficient and what it must leave behind. Design is an activity with a derived depth, not a requirement on an act. Its neighbours there would be sufficiency and the standards stack, and the sentence that explains it — *depth is derived from touch* — points at a page in section 5 |
| **D** | **Three pages, one per design term** | One fact, one home, three times over — and the fact worth stating is the *relationship* between them. Split into three, the reason they were separated at all (a team told to "do design" performs exactly one of them and believes it performed all three) has no page to sit on |

## Consequences

**One page is added to the site's page set.** *Prepare the site to carry the practice*
gains a stub, and *Write The loop* gains a page — fourteen rather than thirteen. The
loop's sidebar positions after `Touch` shift by one.

**`Specified` and `Planned` each carry a rule, not an explanation.** The attachment is
normative and belongs in their `#rules`; why the three activities are distinct belongs
on the design page's `#why`.

**Domain design has a home for the first time.** It attaches to no state, so under
alternative **B** it had nowhere to be written at all — which is how the practice's own
notes describe it: required by three decisions and owned by none.

**What this does not decide.** Nothing about the practice moves. This is a decision
about where the site puts text, taken because the site *is* the practice and the
placement therefore has consequences beyond navigation.

## Superseded

None.
