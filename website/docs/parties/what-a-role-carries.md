---
title: What a role carries
description: A role is scoped to a subject, and scoped it carries three things — sufficiency, permissions and independence.
sidebar_position: 6
---

# What a role carries

## What it is \{#definition}

**A [role](./the-four-roles.md) is always scoped to a subject, and scoped it carries
three things: [sufficiency](../acts/sufficiency.md), permissions and independence.**

## Why it exists \{#why}

**This is a sufficiency model, not an access-control model.** The question it answers is
*can this actor reach what it needs?* — never *is it prevented from seeing too much?* A
Worker and a Verifier both need the request, the criteria, the specification and the
standards. The read side is largely shared; what differs is what each may **do**.

**All three sit on the role rather than on the actor, and that is forced rather than
chosen.** Delegation grants a role, nothing is undelegable, and eligibility turns on
access. Were sufficiency carried by the *actor*, delegating a role would grant
permissions without access — the delegate would be ineligible, and *nothing is
undelegable* would be false in practice, with every delegation needing a second grant
that nothing governs.

**A role that is not scoped cannot be held or checked.** *Worker* is not a position;
*Worker on this component* is. The scope is what makes both the access set and the
permission set finite.

## Rules \{#rules}

**A role is scoped to a subject** — *Worker on component X*, *Decider for client Y's
rollout*.

| | Is | Governed by |
| --- | --- | --- |
| **Sufficiency** | What an [actor](./actors.md) must be able to **access** to hold this role on this subject | **Enough.** Never *least* |
| **Permissions** | What the actor may **do** — merge to mainline, cut an edition, approve a release, concede a standard | **Least privilege** |
| **Independence** | The Verifier is not the Worker, and does not hold the session's reasoning | The never-conceded `worker ≠ verifier` |

**All three sit on the role, not on the actor.**

**A declared sufficiency item that cannot be reached makes the role unholdable.** That
is not a rule being broken. It is a role nobody can hold, and the fix is to make the
thing reachable.

**Acting anyway is a concession**, scoped to the role and subject rather than to the
act, and expiring like any other. See
[skipping and concessions](../loop/skipping-and-concessions.md).

**A Verifier may not write code**, and the same shape holds generally: a permission that
would let a role do the thing it exists to check is a permission that role does not get.

## In detail \{#detail}

### Sufficiency and least privilege govern different questions

They are frequently collapsed into one instinct — *give it as little as possible* — and
that instinct is right about one of them and wrong about the other.

| | Question | Answer |
| --- | --- | --- |
| **Sufficiency** | What may it **see**? | **Enough.** Withholding an input does not make an act safer; it makes the act impossible |
| **Permissions** | What may it **do**? | **Least.** Every power granted is a power that can be used by mistake |

### This is what gives a discipline's needs teeth

A [persona](./personas.md) whose capability is missing can block a release, because what
the system claims is organised around personas. A [discipline](./disciplines.md) never
had an equivalent — *the tooling makes this hard* had no mechanism behind it. An
unreachable sufficiency item is that mechanism: the role is unholdable, the absence is a
target somebody owes, and proceeding regardless is counted.

### Where the three come from

Sufficiency is defined by the act, not by the role holder, and it stacks like any other
[standard](../acts/the-standards-stack.md). This page says a role carries it; what it
contains and how the layers merge is written where the act is.
