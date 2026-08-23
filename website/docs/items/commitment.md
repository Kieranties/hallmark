---
title: Commitment
description: What has been said about an item and how strongly — an axis in its own right, moving independently of state.
sidebar_position: 3
---

# Commitment

## What it is \{#definition}

**Commitment records what has been said about an item and how strongly: `Uncommitted`,
or `Committed` for a named version.**

## Why it exists \{#why}

**It is a second axis, not a value on the first.** Where an item *is* and what has been
*promised* about it are different facts that move at different times, and one field
holding both cannot express the ordinary cases: something built that nobody promised,
and something promised that nobody has started.

**No evidence can exist before the work does.** A promise about the future has to rest
on somebody being answerable for it rather than on proof, which is why `Committed` is an
assertion by an accountable [Decider](../parties/the-four-roles.md) and is marked as
one. After the work is finished, claims are derived from what passed and no actor may
assert them at all.

**Recorded on its own axis, two things compute rather than being reported.** The word
for [stopping](../loop/stopping.md) falls out of state and commitment read together, and
slippage falls out of the version promised against the version delivered. Neither is
anybody's status update.

## Rules \{#rules}

### The axis

**Commitment has two values.**

| | |
| --- | --- |
| **`Uncommitted`** | No promise has been made. The default, and not a deficiency — most work is uncommitted for most of its life |
| **`Committed`** | The work is to be completed for a **named version**. Speakable to a client |

**`Committed` names a version.** A commitment without one is a preference.

**`Committed` is an assertion by an accountable Decider.** No evidence exists yet, so
somebody is answerable for it.

**Commitment moves independently of [state](../loop/the-track.md).** An item may be
`Built` and `Uncommitted` — a spike nobody promised. An item may be `Committed` for a
version and still sitting at `New`.

**Accepting is not committing.** Agreeing that an item is to be done promises it to
nobody — see [`Accepted`](../loop/accepted.md).

**A [question](./questions.md) and a service request are never committed.**

### Slippage

**Slippage is the difference between the version an item was committed for and the
version it was built into.**

**Slippage is computed, never reported.** Both versions are already recorded, so the
number is free information and nobody is asked for it.

### Promotion voices

**A promotion voice is a [discipline](../parties/disciplines.md) that must be heard
before an item advances or is promised.** One holder may cover several; each must be
genuinely consulted.

| Transition | Voices required |
| --- | --- |
| capture → `New` | **Anyone.** No ceremony and no quality bar |
| `New` → `Accepted` | **Delivery** sifts — assigns or verifies the type, then rules |
| `Accepted` → `Specified` | **Product** owns the outcome; **Technical** must be heard. Feasibility is mandatory rather than merely consulted |
| `Uncommitted` → `Committed` | **Delivery, Technical and Product** — sequencing, architectural fit, decomposition |

### The assertion boundary

**Before an item is [`Completed`](../loop/completed.md), claims about it are asserted by
an accountable Decider.** After it, claims are **derived** from what passed, and no
actor may assert them — of either kind.

## In detail \{#detail}

### Independent in the middle, coupled at the ends

The two axes are genuinely independent between the ends and touch at both of them.
Nothing is committed before it exists, and once the work is finished the claim stops
being an assertion and starts being derived. In between, every combination is legitimate
and several are useful.

| | Means |
| --- | --- |
| `New` · `Committed` | A promise nobody has started. Visible as one, rather than looking like progress |
| `Built` · `Uncommitted` | A spike. It exists, and nobody was told it would |
| `Specified` · `Uncommitted` | The ordinary state of well-understood work waiting for a version |

### A version is nameable before the work exists

That is what lets a version be a target at all. A build identity — a commit hash, a build
number — names something that already happened, and cannot carry a promise about
something that has not. `Scheduled` is a [retired
word](../language/retired-words.md#rules): it duplicated `Committed`, which already names
a version.

### Where a commitment is retreated from

Moving backwards from `Committed` is a retreat from a promise, and it has its own word.
That word, and how it is derived rather than chosen, is on
[stopping](../loop/stopping.md).
