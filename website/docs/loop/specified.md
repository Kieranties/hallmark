---
title: Specified
description: The state an item reaches when what would make it right is written down, expressed as a failing specification, and confirmed adequate by somebody else.
sidebar_position: 4
---

# Specified

## What it is \{#definition}

**An item is `Specified` when
[acceptance criteria](../acts/required-outputs.md) and a failing executable
[specification](../acts/required-outputs.md) exist, and a
[Verifier](../parties/the-four-roles.md) has confirmed the criteria are adequate.**

## Why it exists \{#why}

**It is the only gate that catches *we built exactly what was asked and it was not what
they needed*.** Every other state checks the work against the target. This is the one
state whose subject is the target itself, which is why it is the only open-ended one.

**Written before any code exists, the criteria cannot drift toward what got built.** That
is the whole defence, and it is why the order matters more than the wording: a target
fixed in advance is checkable; a target recalled at the end is a description of the
result.

**Adequacy is not mechanically checkable, so somebody else has to say so.** A build can
confirm that criteria are *present*; nothing can confirm they are *enough*. That makes
this the first point in the track where one actor gatekeeps another's judgement about
what somebody needs.

**`Specified` settles *what*. [`Planned`](./planned.md) settles *how, and in what
order*.** Splitting them is what stopped one state carrying both the outcome and the
approach.

## Rules \{#rules}

**`Specified` is achieved when all four hold.**

| | |
| --- | --- |
| **Acceptance criteria exist** | Steps, metrics or markers identifying that the requirement has met its needs |
| **A failing executable specification exists**, expressing those criteria | It fails because nothing has been built |
| **A Verifier has confirmed the criteria are adequate** | Presence is checkable by a build; adequacy is not, so it is confirmed by a Verifier |
| **The party is named, the outcome is stated, and the problem is understood** | Of which the criteria are the evidence, rather than a restatement |

**Whoever wrote the criteria may not confirm them.** `worker ≠ verifier` binds here as
everywhere, and it is [never conceded](../foundations/never-conceded.md).

**A metric used as an acceptance criterion must be the goal itself, never a stand-in for
one.** *Response under 200ms* qualifies. *Improve throughput* does not — target it and
the number improves while the thing it stood for does not.

**Every item has acceptance criteria**, including a chore nobody outside will ever see.

**Product design attaches here.** It is how the outcome is reached rather than a stage of
its own — see [design](./design.md).

**Discovery, research, competitor scans and proofs of concept live here and nowhere
else.**

## In detail \{#detail}

### The only open-ended state

Every other state has a criterion you can hold an item against and get a yes or a no.
This one has a criterion — *the criteria are adequate* — that somebody has to judge. That
is deliberate: the thing being settled is what *right* means, and no mechanical test can
produce it.

The consequences are worth stating plainly.

- **It is the most human-expensive state**, and there is no machine verification standing
  behind it.
- **It is therefore the highest-leverage place for an agent** — drafting the party, the
  outcome and the criteria, checking for duplicates and prior art, checking a proposed
  outcome against what is already claimed, and predicting what the work will touch so
  cost is visible before anybody promises anything.
- **It is the first place an agent may hold the confirming role**, which is a real
  judgement about what somebody needs rather than a check on formatting.

### What the two outputs are, and why they are two

The criteria are the prose statement of what would make the work right. The specification
is the executable artifact that fails until it is. They are two outputs of one state
rather than two names for one thing, and where each lives is on
[required outputs](../acts/required-outputs.md).

### The chain the criteria start

```
acceptance criteria  →  failing specification  →  passing specification  →  the claim
     (Specified)            (Specified)               (Built)              (Completed)
```

**What a client eventually reads traces back to what somebody wrote down that *right*
meant, before any code existed.** There is no point in that chain where the definition
lives only in somebody's memory, which is the property the whole track is built to have.

### What is not settled here

How the work will be done, in what order, and what it will touch — all of that is
[`Planned`](./planned.md). An item that arrives at this state with a plan attached has
not done anything wrong; it has simply not yet had the thing this state asks for
confirmed.
