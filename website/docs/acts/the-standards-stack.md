---
title: The standards stack
description: A standard is a floor you may exceed, layers merge by union, and which of the two enforcement routes applies is derived rather than chosen.
sidebar_position: 2
---

# The standards stack

## What it is \{#definition}

**A standard is a minimum viable requirement — a floor you may exceed — and the standards
of every layer merge by union to give an act its set.**

## Why it exists \{#why}

**Floors stack; ceilings do not.** Because every layer is a minimum, merging is union:
there is no precedence to define, no ordering to get wrong, and no conflict resolution to
build. A requirement written as *no more than* or *exactly* cannot take part, because two
of them can genuinely contradict and something would have to arbitrate.

**A layer contradicting a wider one is a defect, not a conflict.** Read as a conflict, it
needs a mechanism to resolve it and somebody to run that mechanism. Read as a defect, it
gets fixed once and the arrangement stays simple.

**Deriving the enforcement route is what stops *a Verifier will check it* becoming the
lazy default.** Left as a choice, every standard that would be awkward to automate
becomes somebody's reading job, and the reading jobs accumulate until none of them
happen.

**A standard is not weakened by being checked by a person rather than a build.** A
Verifier-enforced standard is not remembered — it sits in the role's
[sufficiency](./sufficiency.md) set and is supplied at the moment of acting. That is the
difference between a page and an input.

## Rules \{#rules}

### The floor

**A standard is a minimum viable requirement. You may exceed it; you may not fall below
it.**

**A standard must be expressible as a floor.** One written as a ceiling cannot stack and
cannot take part.

**`Guideline` is a [retired word](../language/retired-words.md#rules)** — not because it
is ambiguous, but because it reads as optional when the thing it names is obligatory.

### The stack

**Layers merge by union.** The practice defines the widest floor; narrower layers add to
it, and an actor merges them to get its set.

**A layer may add or constrain, never contradict.** A narrower layer contradicting a
wider one is a defect to fix.

### Enforcement

**A standard has two enforcement routes, and which applies is derived, not chosen.**

| Route | Applies when | |
| --- | --- | --- |
| **Build-enforced** — the standard's home is an enforcing dependency | Conformance is **mechanically checkable** | **Preferred** |
| **Verifier-enforced** — a Verifier checks evidence against the stated standard | Conformance is **not** mechanically checkable | Only where the first is impossible |

**You can check a written justification for *presence*, never for *adequacy*.** That is
the line the derivation falls on.

**A standard is never re-decided per component.** A consumer of an enforcing dependency
made no choice and owes no record of one; the record justifying the standard exists once,
where the standard is enforced.

### Standards and decision records are opposite artifacts

**A decision record records a choice** — alternatives weighed, one taken, consequences
expensive to reverse. It is **immutable and dated**: superseded, never edited.

**A standard records the rule now in force** — no alternatives, only conformance. It is
**current**: no history worth reading, only a present state.

**A decision record is written where a genuine alternative existed and reversal would be
expensive**, and where the work alters a contract binding on others.

## In detail \{#detail}

:::warning[Nothing prunes the merged set]
Layers only ever add, so the set only ever grows. Left long enough it becomes large
enough that roles start becoming unholdable for ordinary work — and the count of open
[concessions](../loop/skipping-and-concessions.md) floods at exactly the moment it should
be quiet.

**Reviewing what a layer still needs is real work that nothing currently forces.** It is
recorded here as a standing exposure rather than solved, because the mechanism that would
force it does not exist.
:::

### The same shape as automating to the threshold of consequence

The build does everything it mechanically can, and something else picks up precisely
where it cannot. That is one instinct applied twice — once to the pipeline, once to
standards — rather than two mechanisms that happen to look alike.

### If you cannot say what you would have to undo, reversal is not expensive

That is the test for the half of the decision-record trigger no machine can see. A change
that alters a contract is caught by what the work touches and the build says so. A
technology choice with a real alternative is caught by nobody, and the floor for it is
that question.
