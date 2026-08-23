---
title: Required outputs
description: One act's required outputs are the next act's required inputs — which is what makes the chain run without a handover to negotiate.
sidebar_position: 3
---

# Required outputs

## What it is \{#definition}

**Required outputs are the artifacts an act must leave behind, and one act's required
outputs are the next act's required inputs.**

## Why it exists \{#why}

**Define both ends and the chain is guaranteed to run.** There is no handover to
negotiate and nothing to check where two acts meet, because what one act owes is exactly
what the next one asks for.

**Define only the inputs and you can have a role requiring something nobody was ever
obliged to produce.** That is not a hypothetical failure: it is what a
[Verifier](../parties/the-four-roles.md) needing *what else changed while the work was in
flight* runs into when no act is obliged to produce it.

**Not everything produced is an output.** An act generates a great deal of exhaust —
reasoning, sessions, the conversation where two approaches were argued about — and
treating all of it as durable makes the durable set unreadable. One test sorts them, and
it turns on who the artifact was written for.

## Rules \{#rules}

### The shape

**What an act must produce is a standard too** — defined, layered, a floor, merged by
union. See [the standards stack](./the-standards-stack.md).

**One act's required outputs are the next act's required inputs.** What an act must be
able to reach is [sufficiency](./sufficiency.md); this is the other half of the same
arrangement.

**A layer may require whatever it needs to exist afterwards** — a note recorded on the
item, a document produced, a proof of concept built on a branch.

**Outputs stack too**, so the same growth warning applies: every layer adding a required
output adds work to every act, permanently.

### What counts as an output

**An output is an artifact deliberately authored or computed for durable use by others.**
The incidental exhaust of producing it is session context.

| Recorded fact | Session context |
| --- | --- |
| The specification · what the work touches · results for every criterion · a commit message · a change description · **a decision record** | An agent's reasoning traces · session logs · the thread where two people argued about approaches |

**Reasoning is not categorically barred; *incidental* reasoning is.** A decision record is
full of reasoning and is an output, because it was deliberately authored for somebody
else to read.

**Facts are as-at.** They are recorded facts *at the time they are read*, which is what
makes it possible to reconstruct what was visible to an actor when it acted.

### The two outputs of `Specified`

**Acceptance criteria and the executable specification are two distinct outputs, not two
names for one thing.**

| Output | Is | Lives |
| --- | --- | --- |
| **Acceptance criteria** | The prose statement of what would make the work right — steps, metrics or markers | With the item, and travels with it |
| **The failing specification** | The executable statement of what the system should do | Beside the code it proves. It has to run, so an item cannot hold it |
| **The plan, and what it touches** | The actions, in order | With the item |

**A specification states what the system *should* do, and can never be derived from
code.** Intent is not present in source. Confirming that current behaviour is intended
behaviour requires a source of intent from outside the code, and that confirmation is
[never conceded](../foundations/never-conceded.md).

## In detail \{#detail}

### Why the test turns on the audience

Any test strict enough to exclude a reasoning trace and loose enough to admit a decision
record has to ask **who the artifact was written for**. Length does not sort them.
Neither does whether they contain reasoning — the decision record is mostly reasoning,
and that is the point of it.

### Where the outputs of each state go

The criteria and the plan are facts about one item, so they travel with the item. The
specification has to execute, so it lives with the code. Results for every criterion are
produced at [`Built`](../loop/built.md) and are what the next act reads. Nothing here is
about where a particular repository keeps them, which is an application matter; it is
about which artifact is which.

### The chain the criteria start

What a consumer eventually reads traces back through the specification to what somebody
wrote down that *right* meant, before any code existed. That chain, and the state that
starts it, is on [`Specified`](../loop/specified.md).
