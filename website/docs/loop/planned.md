---
title: Planned
description: The state an item reaches when the actions are known, revisable, and would make the failing specification pass — and the plan is the declared touch set.
sidebar_position: 5
---

# Planned

## What it is \{#definition}

**An item is `Planned` when the sequence of actions is known, revisable, and actionable
such that the result asserts the [specification](../acts/required-outputs.md).**

## Why it exists \{#why}

**A plan that could not make the specification pass is not finished.** That is the test
this state applies, and it is answerable — unlike *is the plan good enough*, which is
not. Following the plan makes the failing thing pass, or the plan has a hole in it that
somebody would otherwise find while building.

**A plan that cannot be revised is an estimate wearing a plan's clothes.** Expecting it to
change is what keeps it useful: an unrevisable plan gets defended, and defending a plan is
how work continues in a direction somebody already knows is wrong.

**Listing what will be changed *is* declaring what the work reaches.** No separate
artifact is required, and requiring one would produce a second document that drifts from
the first.

## Rules \{#rules}

**`Planned` is achieved when all five hold.**

| | |
| --- | --- |
| **The sequence of actions is known** | Written down, not held in somebody's head |
| **It is revisable** | It is expected to change |
| **It is actionable such that the result asserts the specification** | Following it makes the failing specification pass. If it might not, the plan is not finished |
| **How each check will be driven is known** | Automated, or documented steps a person follows |
| **A decision record exists** where the plan meets the trigger for one | A choice with a genuine alternative and an expensive reversal |

**The plan is the declared [touch set](./touch.md).** Listing the actions — *modify this,
add that, alter this contract* — declares what the change reaches, and nothing separate
is written.

**Technical design attaches here.** It is the activity that produces the plan, rather
than a stage of its own — see [design](./design.md).

**Sub-items are permitted**, and are part of the sequence rather than a second
hierarchy.

**A plan is not a schedule.** It says what will be done and in what order, never when or
by whom.

## In detail \{#detail}

### Declared and derived are two different things

The plan declares what the work will reach. Deriving what it *actually* reached needs a
map from specifications to code, and comparing the two is the surprise detector rather
than the declaration. That comparison arrives when there is enough estate for surprises
to hide in; see [touch](./touch.md).

### What a plan looks like at each end of the scale

A one-line change has a plan of one line, and writing it costs nothing because there was
nothing to decide. A body of work spanning several components has a plan naming each
component, each contract it alters, and the order that keeps the thing runnable in
between.

Both are `Planned` by the same criterion. Neither is required to carry apparatus the
other needs, because rigour is derived from what is touched rather than from the state
being entered.

### Where the approach turns out to be wrong

Work that fails [verification](./verification.md) because the target was right and the
approach was not returns here, rather than to [`Built`](./built.md). That is the case
this state exists to make recoverable: the plan is the thing that was wrong, so the plan
is what gets revised.
