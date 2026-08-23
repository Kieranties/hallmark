---
title: Verification
description: The act of gathering evidence against a stated standard — conformance and currency, from a fresh view, with two outcomes and no third.
sidebar_position: 12
---

# Verification

## What it is \{#definition}

**Verification is the act of gathering evidence against a stated standard, performed by
an actor who did not do the work.**

## Why it exists \{#why}

**Nobody can check their own work.** Whoever sat through the doing knows which parts were
rushed and which arguments were already had, and cannot un-know it. Left to check their
own work, they check it against what they remember wanting — which is not what was asked,
and drifted towards what they built while they were building it.

**The target moves while the work is in flight.** A change lands elsewhere, a decision
reverses, another item ships something that makes this redundant. Work can be a faithful
answer to a question nobody is asking any more, and no amount of checking it against the
original request will reveal that.

**Verification and acceptance are two acts, not two degrees of one.** Nobody gathers
evidence when somebody says *yes, that is what I asked for*. Read as one act, the
judgement borrows the authority of the evidence, and the evidence becomes negotiable.

**Independence without shared references produces noise; shared references without
independence produce a rubber stamp.** Both halves have to be arranged deliberately,
because each one alone looks like the whole thing.

## Rules \{#rules}

### What verification requires

**Clean context.** The verifier never saw the doing — a different actor, or a fresh
session. This is absolute: nobody verifies their own work, ever, and it is
[never conceded](../foundations/never-conceded.md).

**Shared references.** The verifier is pointed at the same standards, decision records,
domain model and prior decisions as the worker.

**The verifier is given everything except the session.**

| Must have | Must not have |
| --- | --- |
| The item · the acceptance criteria · the specification · the plan and what it touches · the change itself · the standards · any decision records · what else changed while the work was in flight | The session in which the work was done |

### The two checks

**Both must hold. Work that passes one is not verified.**

| Check | Asks |
| --- | --- |
| **Conformance** | Did the work match what was asked, to standard? |
| **Currency** | Is what was asked still right, given what changed while the work was in flight? |

**Currency is the one almost nobody runs**, and it is the one that catches the expensive
failures — because work that conforms perfectly to a stale target passes every other gate
on the track.

### The two outcomes

**A verification has exactly two outcomes: it verifies, or it sends the work back.**
There is no third.

**A Verifier does not [escalate](../parties/escalation.md).** If the evidence does not
settle the question, the evidence is insufficient — and producing sufficient evidence is
the Worker's job. That is a verification that fails, not a reason to summon anybody. *If
nothing proves the claim, the claim is not proved.*

**A Verifier may not do the work it is checking.** What each role may do is on
[what a role carries](../parties/what-a-role-carries.md).

### Verification is not acceptance

| | Is | Held by | Can it be refused? |
| --- | --- | --- | --- |
| **Verification** | Gathering evidence against a stated standard | A [Verifier](../parties/the-four-roles.md) | **No.** It is settled by evidence against a standard fixed in advance |
| **Acceptance** | Judging *this is what I wanted* | A [Decider](../parties/the-four-roles.md) | **Yes — and it can go unanswered** |

**`Verify` as a bare word is [retired](../language/retired-words.md#rules).**

## In detail \{#detail}

### The act names its object

Verification is not exclusive to any one state. It names what is being verified — the
change, the deployment, the feature — and those are one act pointed at different things
rather than three meanings of the word. Where the object is an item's work, achieving the
act is what achieves [`Verified`](./verified.md).

That is why the act and the state are two pages. The state page owns what must hold for
an item to reach it; this page owns the act, wherever it is pointed.

### Why one thing is withheld and everything else is shared

The session is withheld for one reason: whoever sat through the work cannot un-know what
was rushed. Everything else is shared deliberately, because a verifier working from
different references finds differences that are not defects, and a verifier without
independence finds nothing at all.

An agent reviewing its own output is not independence. The separation has to be real —
different context, a different actor, or a deterministic gate. Otherwise what has been
automated is self-certification, which is worse than no check because it produces a green
tick.

### What "against a stated standard" rules out

A verification with no standard behind it is an opinion. That is why the criteria are
written at [`Specified`](./specified.md) and confirmed adequate before any work exists:
the standard has to be fixed in advance, or the act has nothing to be settled against.
