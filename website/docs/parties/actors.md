---
title: Actors
description: An actor is a human or an agent — always identifiable, holding roles by delegation, with accountability landing on a human either way.
sidebar_position: 4
---

# Actors

## What it is \{#definition}

**An actor is a human or an agent — the thing that actually holds a
[role](./the-four-roles.md).**

## Why it exists \{#why}

**Identifiability and accountability are two things, and conflating them is the trap.**
An actor is identifiable, which buys attribution: you can always say who acted. A human
is accountable, which buys consequence. A model version can be named in a log; it cannot
be fired, sued, or sign a contractual assurance.

**Read as one thing, that pair forces a false choice** — either agents may not hold
serious positions, or nobody is answerable when one does. Splitting them removes the
choice. **The delegation is the accountable act**, so a human is always answerable
without a human having to press every button.

**This is what lets one person cover a ten-person role map**, which was the point. It is
also what keeps an all-agent run from being an unaccountable one: a human stands at every
delegation.

## Rules \{#rules}

### Identity

**Every actor is distinctly identifiable** — a human by email or username, an agent by
model version, skill and unique id.

**Identity is not bureaucracy.** It is what makes accountability traceable, and an
unidentifiable actor cannot hold a role.

### Accountability

**Accountability is consequence landing on a human.**

**Where an agent holds a role, accountability is derivative** — it attaches to the human
who delegated that checkpoint to that actor. Chain length is zero when a human acts
directly.

**When it goes wrong, the delegating human is at fault for failing to scope correctly.**
Fault does not vanish because an agent acted; it relocates to the scoping act, which is
recorded and reviewable in a way a judgement in someone's head never was.

### Permission and delegation

**A permission attaches to the role, never to the actor.** Holding the role grants the
powers, which is what keeps a role a complete interface and two actors in the same role
interchangeable.

**Delegation is the act of authorising a given actor to hold a given role at a given
checkpoint, and it is recorded.** Because permissions sit on the role, delegation
reduces to granting a role — one mechanism, not two.

**Ceiling: you may only delegate a role you yourself hold.** This is what stops the
[never-conceded](../foundations/never-conceded.md) absolutes being routed *around* by
delegation.

**Least privilege: an agent receives the permissions its role needs, and the resources
it is given at the time of delegation, and no more.** Least privilege governs what may
be *done*. What may be *accessed* is [sufficiency](../acts/sufficiency.md) — enough,
never least — and the two must not be confused.

**Nothing is undelegable.** In principle the whole practice may run on agent actors.

### Eligibility

**Role eligibility turns on access, not on actor kind.** An actor may hold a role if —
and only if — it has what that role requires. See [what a role
carries](./what-a-role-carries.md).

**There is no presumption that a human is the best actor, or the default one.**

## In detail \{#detail}

### The four properties the actor model is for

1. The whole practice can be run by **humans only**.
2. The whole practice can be run by **agents only**.
3. It can run on **any mix**.
4. **Every agent actor holds its role by permission delegated from a human.**

The fourth is what stops the second being a human-free practice.

:::warning[The four properties are not symmetric, and nobody expects that]
The model is **mechanically enforceable against agent actors and self-declared against
human ones.** You can withhold the working session from an agent; you cannot un-show it
to a human. You can supply an agent's references and check what it was given; you cannot
verify that a human read the decision record.

So the all-agent property is **verifiable** and the all-human property is **true but
unverifiable** — the reverse of what most readers assume.
:::

### The second actor in a team of one

Where one human is the only actor, an agent holding the Verifier role is not an
optimisation. It is the only thing keeping the practice's core invariant alive, because
one actor cannot both do the work and hold a fresh view of it. What still holds, and
what honestly does not, is on [working alone](../loop/working-alone.md).

### What is not designed yet

**The set of permissions has never been enumerated**, and their scope is unresolved — a
Worker on one component must not thereby alter another component's contracts, so the
likely shape is a role scoped to a subject. That gap is stated rather than papered over:
until it is closed, least privilege is a rule with no list behind it.
