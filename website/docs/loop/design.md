---
title: Design
description: Three activities, no state of their own — product design at Specified, technical design at Planned, and domain design attached to nothing.
sidebar_position: 10
---

# Design

## What it is \{#definition}

**Design is three distinct activities — product design, domain design and technical
design — each attaching to the loop in a different place, and none of them a state.**

## Why it exists \{#why}

**Told to *do design*, a team performs exactly one of the three and believes it performed
all of them — always the technical one.** That is not carelessness. It is what a single
word does when it names three activities with different subjects, different artifacts and
different moments. Split into three, each has to be either done or consciously skipped.

**Doing only technical design is *we built exactly what was asked and it was not what
they needed*, relocated from sales into engineering.** The thing that was skipped is the
one that asks what the outcome should be.

**Domain design is the load-bearing one, and it was the orphan.** What may be claimed, and
what a change reaches, both depend on the claims and the code sharing a vocabulary. Two
mechanisms need it, and neither one owns it.

**A `Designed` state would be a box to tick.** Most work legitimately skips design at any
depth, and a stage most work skips is a stage that gets ticked rather than done. It would
also break scale-invariance outright: a colour change would have to pass through it.

## Rules \{#rules}

**There is no `Designed` state, and design is never a gate.**

**The three activities attach as follows.**

| | Settles | Attaches to |
| --- | --- | --- |
| **Product design** | What a party the system serves sees and does — the shape of the outcome | [`Specified`](./specified.md). It is *how* you reach "outcome stated" |
| **Technical design** | The structure that realises it — services, data flow, contracts, technology | [`Planned`](./planned.md). It is the activity that produces the plan, and the plan **is** the declared touch set |
| **Domain design** | The model of the business — entities, invariants, boundaries, and the words used for them | **No state.** A standing versioned artifact that changes *revise* |

**The depth of all three is derived from [touch](./touch.md), never fixed.** The same
rule as rigour, and scale-invariant for the same reason.

**A domain model must be a dependency, not a document.** Expressed as prose it is a page
people are asked to remember. Expressed as contracts, schemas and machine-readable models
it is versioned with the build, resolvable like any other dependency, and impossible to
contradict without the build noticing.

**`Design` as a bare word is [retired](../language/retired-words.md#rules).** The three
names above are used instead, and one of them is always meant.

## In detail \{#detail}

### Three guards on the domain model, because two leave a residual

| Guards | Mechanism |
| --- | --- |
| **Shape** | Contracts and machine-readable models generated from the domain model |
| **Meaning** | Executable specifications — one asserting the old semantics fails when the meaning shifts |
| **Names** | Those models linted against the controlled vocabulary at build |

The third exists for a case the first two miss entirely. Two components using different
words for one concept — `matchId` in one and `fixtureId` in the other — are both
contract-valid and both specification-passing. Nothing is *wrong*; there are simply two
words for one thing, which is the failure a shared vocabulary exists to prevent.

### Why technical design produces no separate artifact

The plan lists what will be changed, and listing what will be changed declares what the
work reaches. A design document beside the plan would be a second statement of the same
thing, drifting from the first as soon as the plan is revised — and the plan is expected
to be revised.

Where a choice had a genuine alternative and reversing it would be expensive, that gets a
decision record. That is not a second design artifact; it is the record of one choice.

### Where design is skipped

Skipping design is skipping nothing when the work reaches nothing — the depth derived from
touch was zero, so there was no activity to perform. Skipping it when the work reaches
something is a [concession](./skipping-and-concessions.md), like any other step passed
over. The difference is the same one touch decides everywhere else.
