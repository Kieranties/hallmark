---
title: Completed
description: The state an item reaches when the artifacts are published for consumption and what the system claims is proven to contain them — queried and found, never reported.
sidebar_position: 8
---

# Completed

## What it is \{#definition}

**An item is `Completed` when its build artifacts are published for consumption and what
the system claims is **proven** to contain them — queried and found, never reported.**

## Why it exists \{#why}

**"The pipeline said it published" and "the package is there" are different facts.** The
gap between them is where *we shipped it* stops being true without anybody noticing, and
the only way to close it is to go and look. A state that accepts a report accepts the
first fact as evidence of the second.

**This state is about the set, not about the item.** Everything before it asks whether
this piece of work is right. This one asks whether the whole body of claims still holds
together at the published version — which is a different question, and one that only has
an answer once the thing is out.

**It is the last global fact about an item.** Who actually holds the work varies per
consumer, moves in both directions, and is measured rather than achieved. Drawing that as
more states is what made teams report *released* meaning *we shipped it* while a client
heard *I have it*.

## Rules \{#rules}

**`Completed` is achieved when both hold.**

| | |
| --- | --- |
| **The build artifacts are published for consumption** | Published means the artifact has left the repository and is retrievable by a consumer — on a registry, in a release, wherever consumers fetch from |
| **What the system claims is proven to contain them** | Queried and found. A report that the publish step succeeded is not this |

**Publishing may run ahead of verification, and that does not advance the state.**
Publishing is an act; `Completed` is a state. An artifact published before it is
[verified](./verified.md) leaves the item at [`Built`](./built.md) **with a published
artifact**.

**What the system claims is generated from verified published artifacts**, never from
everything sitting on a registry.

**"GA" is a defined gloss, never a primary name.** `Completed` means the work is
published and any consumer *may* take it. It does not mean anybody has.

**Who holds the work is not a state.** It is measured per consumer, it moves in both
directions, and it belongs with *Claims and evidence*.

## In detail \{#detail}

### Proven, and what proving costs

Proving is one query against wherever consumers fetch from. It costs a moment and it
converts a claim into a fact, which is the trade the whole practice makes everywhere
else. A repository that cannot run that query has found something worth fixing rather
than a rule worth relaxing.

### Reading `Completed` with software-as-a-service instincts

In much of the industry *generally available* means customers have it. Read that way,
this state reproduces exactly the failure the practice exists to end — a claim that
somebody has something, resting on the fact that it was released. The closer analogue is
*released to manufacturing*: it exists, it is retrievable, and taking it is somebody
else's act.

:::warning[If publishing routinely runs ahead of verification]
Verification becomes a formality nobody blocks on. **What is published-but-unverified has
to be distinguishable by whoever consumes it** — a prerelease, a separate channel, a tag.
Without that distinction, the gate has no teeth and the claim set fills with things
nothing confirmed.
:::

### What this state does not close

An item at `Completed` may still be wrong, and finding that out later raises a
[fix](../items/types.md) attached to what it claimed. Nothing is reopened: the track
runs once per item, and a correction is its own item travelling it again.
