---
title: Roles
description: Worker, Verifier, Sentinel and Decider — four interfaces of which the actor is the implementation, each defined by its relationship to context.
sidebar_position: 2
---

# Roles

A role is an **interface**, of which the [actor](./actors.md) is the implementation. Four
exist, and each has exactly one verb.

| Role | Does | Context |
| --- | --- | --- |
| **Worker** | Advances the work | **Accumulates** — the only role that does |
| **Verifier** | Confirms it against a standard. Two outcomes only: it verifies, or it returns the work | **Denied** — never saw the doing |
| **Sentinel** | Watches, always on, for drift, staleness, cost and preconditions turning favourable | **Outside** any work session |
| **Decider** | Commits — money, risk, or a promise — from recorded facts | **Denied** — decides from the record |

**All four are defined by their relationship to context.** The Worker accumulates it; the
other three are kept from it. That is one rule rather than four, and it is what makes a fresh
view structural instead of a matter of good intentions.

**A Sentinel's loop period is a declared property.** What a standing watch can promise depends
on how often it runs, so an undeclared period is a watch nobody can rely on.

## What a role carries

A role is always **scoped to a subject** — Worker on this component, Decider for that rollout.
Scoped, it carries two things.

| | Is | Governed by |
| --- | --- | --- |
| **Sufficiency** | What the [actor](./actors.md) must be able to **reach** to hold this role on this subject | **Enough.** Never *least* |
| **Permissions** | What the actor may **do** — merge, release, alter a contract, accept a [concession](../apply/concessions.md) | **Least privilege** |

**Both halves of sufficiency must hold.** The set is stated in advance, and the actor can
actually reach every item in it at the moment of acting. Defined without reachable is a set
nobody can use; reachable without defined is improvisation.

**Where something in the set cannot be reached, the role cannot be held.** That is not a rule
being broken — it is a role nobody can hold, and the fix is to make the thing reachable. It is
also what gives a [discipline's](./disciplines.md) needs teeth: *the tooling makes this hard*
has no mechanism behind it, and an unholdable role does.

**A permission attaches to the role, never to the actor.** Holding the role grants the powers
that role needs. That is what makes a role a *complete* interface, and what makes two actors
in the same role interchangeable.

## The roles are not delivery positions

Because the [structure](./index.md) has two branches, the four roles have to describe any
action on or with the system. An Operator restarting a service is a **Worker**. An Auditor
reviewing logs is a **Verifier**. Reading them as stations on the track is the common mistake,
and it is what makes the [persona](./personas.md) branch look decorative.

## A role name never implies who holds it

Each name was chosen against one criterion: it must not imply which kind of actor holds it.
*Reviewer* implies a person reading; *approver* implies a signature; *owner* implies a job.
Worker, Verifier, Sentinel and Decider each name what is done, and leave who does it to
eligibility.

:::important[The price of a Decider that decides only from the record]
It makes **recording mandatory before every decision.** A human in the room today decides
partly on things they know and never wrote down; this Decider cannot. That moves the artifacts
nobody has a home for from *a later pass* to *a precondition of the role model working at all*.
:::
