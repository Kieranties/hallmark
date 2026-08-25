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

A role is always **scoped to a subject** — Worker on this component, Decider for that rollout
— and carries the permissions the scope requires.

## Permissions

**A permission is the entitlement to do something to the system** — to merge, to release, to
alter a contract, to accept a [concession](../apply/concessions.md).

**A permission attaches to the role, never to the actor.** Holding the role grants the powers
that role needs. That is what makes a role a *complete* interface, and what makes two actors
in the same role interchangeable.
