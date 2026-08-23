---
title: Accepted
description: The state an item reaches when it has been sifted — real, typed, and agreed to be done. Accepting is not committing.
sidebar_position: 3
---

# Accepted

## What it is \{#definition}

**An item is `Accepted` when it has been sifted: it is real, its
[type](../items/types.md) is assigned or verified, and it is agreed to be done.**

## Why it exists \{#why}

**Everything downstream reads the type, so something has to settle it.** Without a state
where the type is fixed, every later act re-derives it from the wording the item arrived
with — and two acts deriving it differently is how one item ends up being two kinds of
work at once.

**Agreeing to do something and promising it are different acts, and the gap between them
is where most of the honesty lives.** An accepted item is one somebody intends to do. A
[committed](../items/commitment.md) item is one somebody has told a client about. Merge
them and every acceptance becomes a promise, which makes acceptance expensive and pushes
work back out of the door.

**The sift is also where duplicates die.** It is the one act that looks at an item
against everything already raised, and it is the only cheap place to do it — the cost of
finding a duplicate rises with every state it travels.

## Rules \{#rules}

**`Accepted` is achieved when the sift has run and ruled the item in.**

**The sift does three things, in this order.**

| | |
| --- | --- |
| **Rules it real** | It describes something that exists, or something to be done |
| **Assigns or verifies the type** | Every item carries exactly one, and nothing downstream guesses |
| **Rules on it** | Accepted, duplicate, or rejected |

**A sift that rules the item out leaves a recorded reason**, which is what makes
duplicate detection possible later — see [stopping](./stopping.md).

**Accepting is not committing.** An accepted item is agreed to be done; it is promised to
nobody until a Decider commits it for a named version.

**An item may be accepted and never committed**, and most are.

**Nothing about `Accepted` requires an outcome to be stated.** What would make the work
right is settled at [`Specified`](./specified.md), and requiring it here would put a
shaping cost on every item that arrives.

## In detail \{#detail}

### The sift is a rule, not a review

It asks three questions with short answers. It does not ask how the work will be done,
how large it is, or when it might happen — those are later states, and pulling them
forward is what turns a sift into a meeting.

### Where an item goes from here

| Ruling | Result |
| --- | --- |
| **Accepted** | It is to be done. Its next state is [`Specified`](./specified.md), whenever somebody takes it |
| **Duplicate** | It is the same as something already raised. Linked to the original and closed |
| **Rejected** | It is not to be done, with the reason recorded. Free, because nobody was told |

### Returning to the sift

An item accepted on a wrong type is re-typed rather than re-sifted; the ruling stands and
the type is a fact that was got wrong. An item accepted on a misunderstanding of what it
was is stopped, not silently re-scoped — a different thing is a different item.
