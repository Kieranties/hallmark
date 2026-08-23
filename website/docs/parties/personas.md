---
title: Personas
description: A persona is a party the running system serves — defined once, never per client, and including the internal parties as first-class.
sidebar_position: 2
---

# Personas

## What it is \{#definition}

**A persona is a party the running system serves.**

## Why it exists \{#why}

**Everything a repository claims is written as *a `<persona>` can `<do something>`*.**
With no personas named, not one claim can be written down — which is why naming them is
the first thing an adopting repository does, and why the list cannot be empty.

**Internal parties are where the failure actually bites.** Operator, Support, Auditor,
Integrator, Administrator are parties the running system serves as genuinely as any end
user. Left off the list, everything they need — traceability, an audit trail, a way in
for an integrator — becomes work that competes with features and loses, permanently. On
the list, it is an outcome somebody is owed.

**Admit builders here and the sorting test breaks.** The test asks whether something
gives a named persona a new outcome. Let designers or developers be personas and it
starts asking whether a change gives *designers* a new outcome — a question the running
system has no opinion about, and one that would let internal convenience be claimed as
client-facing capability.

## Rules \{#rules}

**A persona is a party the running system serves.** That is the whole test, and its
counterpart is the [discipline](./disciplines.md) — a party that acts on the change. The
two are told apart by their object, never by a verb.

**A party that builds the platform is a discipline, never a persona.**

**Personas are defined once across the suite, never per client.** A client is not a
persona, and neither is a contract.

**Internal parties are personas, and are first-class** — not a second tier below end
users.

**A persona is not a job title.** One human may be several, and one persona may be held
by many humans, by another system, or by nobody yet.

**The list is open and cannot be empty.** It grows as the system serves more parties,
and it may vary with where the practice is deployed.

## In detail \{#detail}

### A new repository still has personas

A project with no users has the parties it is being built *for*. Naming them before
anyone arrives is what makes the first claim writable, and it is a cheaper conversation
than the one that happens after the first release goes to somebody nobody described.

### Where the persona sits in the structure

A persona supplies an [actor](./actors.md), and the actor holds a
[role](./the-four-roles.md) — the same route a discipline takes. That is what makes an
Operator restarting a service a Worker rather than a category the role model has no
place for. See [the structure](./the-structure.md).

:::note[The catalogue is downstream of this list]
What the system claims is organised by who it serves, and that account belongs to
*Claims and evidence*, which is not written yet. The persona list is its axis, which is
why the list is defined suite-wide rather than assembled per client.
:::
