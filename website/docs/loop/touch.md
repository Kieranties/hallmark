---
title: Touch
description: What a change reaches decides how much apparatus it carries — derived, never estimated, and the same rule at every scale.
sidebar_position: 9
---

# Touch

## What it is \{#definition}

**Touch is what a change reaches, and the apparatus it must carry is derived from that
and from nothing else.**

## Why it exists \{#why}

**Rigour derived from touch is scale-invariant by construction.** A change reaching
nothing carries almost nothing — by rule, not by anybody's permission. A body of work
reaching half the estate accretes apparatus proportionally and automatically. Neither
end needs a special case, and neither end can argue.

**Labels lie under pressure; touch does not.** A chore bumping a shared library reaches
further than a feature adding a tooltip, and any scheme that reads the label gets that
backwards exactly when it matters. The [type](../items/types.md) says why the work
exists. Touch says how much rigour it carries.

**Estimates measure effort, and effort is not the risk.** A change that is quick and
reaches a contract is dangerous; a change that takes a week inside one file is not. Sizing
by how long something takes attaches the apparatus to the wrong quantity.

**It is also what tells a skipped step from a concession.** A step with nothing to do was
not skipped. A step that had something to do and was passed over is a
[concession](./skipping-and-concessions.md), and the difference between the two is how
much the work reaches.

## Rules \{#rules}

**Rigour is derived from touch. Never from effort, story points, t-shirt size, or the
work's label.**

**The touch set is the set of things a change affects** — the claims it alters and the
contracts it crosses. It may be empty, and it may be large.

**The touch set is declared by the author as intent**, and the declaration is the
[plan](./planned.md). No separate artifact is written.

**Where a touch set can also be derived, a mismatch between derived and declared is the
trigger to summon a Verifier.** The change reached further than intended, which is a
surprise rather than a schedule.

**Uncomputable touch attracts maximum rigour, never minimum.** Where nothing covers the
code, a naive derivation returns an empty set — which would point the incentive exactly
the wrong way and give the least-verified work the least care.

**The depth of design is derived from touch too**, by the same rule — see
[design](./design.md).

### Where nothing is covered yet

Maximum rigour is right in a new repository and paralysing in an existing estate. Two
mechanisms bridge it, in this order.

| | |
| --- | --- |
| **Risk map** | A hand-authored classification of the areas with the widest blast radius, standing in for coverage that does not exist. **Scaffolding, not architecture: its defined end state is empty** |
| **Ratchet** | Any file touched must acquire coverage before the change lands. The estate converts along the paths people actually walk, and the cost is proportional to activity rather than to the size of the codebase |

**The ratchet consumes the risk map**, and how much of the map remains is a real signal
about the practice.

## In detail \{#detail}

### Why the label has no authority at all

It is worth stating as an absolute rather than a preference, because the failure is
seductive: *it is only a chore* is true about why the work exists and says nothing about
what it reaches. The two facts are recorded separately so that neither can quietly adjust
the other. A chore that reaches everything carries what reaching everything requires.

### Deriving intent from code does not work

Reading source yields what the code currently does, bugs included. It never yields what
the code *should* do, because intent is not present in source. Turning the first into the
second requires a source of intent from outside the code — the original request, the
stated outcome, the client conversation — and that is a rule about **access**, not about
actor kind. An actor holding only the source may not make that promotion, human or agent
alike, and it is
[never conceded](../foundations/never-conceded.md).

### The same rule, said three ways

Rigour is derived from touch. Design depth is derived from touch. Whether a skipped step
was free or a concession is derived from touch. One quantity, three consequences — which
is why touch sits inside the loop rather than beside it.
