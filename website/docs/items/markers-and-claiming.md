---
title: Markers and claiming
description: A marker calls an item to action, a claim is the actor taking it, and neither one changes who may hold a role.
sidebar_position: 4
---

# Markers and claiming

## What it is \{#definition}

**A marker is a signal on an item that calls it to action, and a claim is the actor
taking it assigning itself.**

## Why it exists \{#why}

**State is not a work queue.** [State](../loop/the-track.md) says where an item is and
therefore what should be done next. It does not say *when*, or *by whom*. Find work by
scanning states and the state field quietly becomes a priority queue — after which
*where is this?* and *what should I do next?* stop being separately answerable.

**Agents poll and humans browse.** An agent polling needs a query returning only work
somebody wanted an agent on, and a human scanning wants the same for themselves. One
marker cannot serve both, and a marker derived from state cannot express either, because
whose attention is wanted is not a fact about where the item is.

**A claim is what stops two actors doing the same work**, and what makes the work
attributable afterwards. Both are properties of the record, not of politeness.

## Rules \{#rules}

### Markers

**A marker calls an item to action. There are two.**

| Marker | Means |
| --- | --- |
| **`ready`** | A human is invited to pick this up |
| **`ready-for-agent`** | An agent is invited to pick this up |

**Markers are invitations, not permissions.** They do not change who *may* hold a
[role](../parties/the-four-roles.md) — that turns on having what the role requires, and
on nothing else. See [what a role carries](../parties/what-a-role-carries.md).

**An item may carry both markers, and for ordinary work usually should.**

**Whoever completes a step marks what is next.** Marking is part of completing rather
than an act of its own, so nothing is scheduled and nobody is summoned.

**Any [actor](../parties/actors.md) with access to the item may add or remove a marker.**
The rule above places an obligation on whoever completed a step; it does not make marking
exclusive to them.

**An unmarked item is not an error**, and nothing chases it. It is an item nobody has
been invited to, which is visible from the item itself.

**A marker is not a required output.** It calls attention and is then spent; it produces
no record worth reading afterwards.

### Claiming

**The actor that takes an item assigns itself.** That self-assignment is the claim.

**A claim is not a marker.** A marker invites; a claim records that somebody has taken
it.

## In detail \{#detail}

:::warning[Watch the two markers]
If interesting work is consistently marked `ready` and tedious work `ready-for-agent`,
the two labels have quietly become a human/machine division of labour — the exact thing
the actor model exists to prevent.

The markers are about **whose attention is being called**, never about what either kind
of actor is capable of. The signal that this has gone wrong is a pattern across many
items rather than any one item, which is why it is worth looking for deliberately.
:::

### What form a marker takes

An assignee, a label, a column, a notification — whichever of these the repository
already has. The practice requires only that a marker exists, that it means *act on
this*, and that the two are distinguishable. Which mechanism carries it is an
application concern.

### Marking is cheap on purpose

Because whoever completes a step marks what is next, the marking is done by an actor
that has just had the item in front of it and knows what the next act needs. Nothing has
to be scheduled, no role exists to do the scheduling, and a marker set wrongly is
corrected by whoever notices.
