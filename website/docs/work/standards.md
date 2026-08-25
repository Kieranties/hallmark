---
title: Standards
description: A statement of what must hold, expressed as a floor — which is what lets standards stack by union rather than needing arbitration.
sidebar_position: 7
---

# Standards

**A statement of what must hold, expressed as a *floor*.** A standard states **how its own
conformance is determined** — for some, conformance is decidable and the answer is the same
whoever looks; for others it requires judgement, and a [Verifier](../parties/roles.md) makes
it.

A system declares the standards it holds itself to. Because every standard is a floor, they
**stack**: wider layers first, then narrower, and an actor merges everything that applies to
arrive at its set.

| Because a standard is a floor | |
| --- | --- |
| **Merging is union** | There is no precedence to define, no ordering to get wrong, and no conflict resolution to build |
| **A layer may add or constrain, never contradict** | A narrower layer contradicting a wider one is a **defect to fix**, not a conflict to arbitrate |
| **A standard must be expressible as a floor** | One written as a ceiling — *"no more than…"*, *"exactly…"* — cannot stack, and so cannot take part |

A standard that cannot be met is not quietly dropped. It is
[conceded](../apply/concessions.md) — recorded, scoped, and counted.

## Determining conformance

**You can check a written justification for *presence*, never for *adequacy*.** That is the
line the determination falls on: where conformance is decidable, the answer is the same
whoever looks; where it needs judgement, a [Verifier](../parties/roles.md) makes it.

**A standard is not weakened by being checked by a person rather than a build.** A standard a
Verifier checks is not *remembered* — it sits in what the role must be able to
[reach](../parties/roles.md), and is supplied at the moment of acting. That is the difference
between a page and an input.

**A standard is never re-decided per component.** Whoever consumes an enforced standard made
no choice and owes no record of one; the record justifying it exists once, where the standard
is declared.

## How a standard is declared

**What form a standard takes is an [application](../practice/practice-and-application.md)
matter.** The practice requires only that it is stated as a floor and says how its own
conformance is determined.

**An architecture decision record is one such form.** It states what must hold and why, and
the standard in force is what its un-superseded records say — so superseding one changes the
standard rather than adding a second. Other systems will carry theirs as a linter
configuration, a policy document, a contract, or an enforcing dependency. The practice names
none of them.

:::warning[Nothing prunes the stack]
Layers only ever add, so the merged set only ever grows. Left unattended it becomes large
enough that roles start to be unholdable for ordinary work — and concessions flood at exactly
the moment they should be quiet. **Reviewing what each layer still requires is itself work,
and has to be scheduled as such.**
:::
