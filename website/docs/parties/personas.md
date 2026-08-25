---
title: Personas
description: A party the running system serves — the axis capabilities are stated against, and something every system must name for itself.
sidebar_position: 3
---

# Personas

**A party the running *system* serves.** Personas are the axis
[capabilities](../work/capability.md) are stated against — every capability takes the form *"a
`<persona>` can `<achieve something>`"* — so a system with no personas cannot state a single
one.

Defined once, system-wide. Internal parties are first-class, not an afterthought. A persona is
not a job title, and one human may be several of them in a day. A party that acts on the
*change* is a [discipline](./disciplines.md), never a persona.

| Persona | The system serves them by |
| --- | --- |
| **End user** | Doing the thing they came for |
| **Administrator** | Letting them configure it — tenants, permissions, settings |
| **Operator** | Letting them run it — deploy, scale, restart, respond when it misbehaves |
| **Support agent** | Letting them see what a user saw, and put it right |
| **Auditor** | Letting them establish what happened, after the fact |
| **Integrator** | Giving them a stable contract to connect another system to |
| **Consuming developer** | Giving them something to build on — a package, an API, a library |

**These are examples. The practice names no personas.** Specifying the actual set is a
**required act of applying the practice to a system** — until it exists, not one capability
can be stated. The practice supplies only the test: *does the running system serve them?*

**A new system still has personas.** A project with no users has the parties it is being built
*for*. Naming them before anyone arrives is what makes the first capability writable, and it
is a cheaper conversation than the one that happens after the first release goes to somebody
nobody described.

**Admit builders here and the sorting test breaks.** The test asks whether something gives a
named persona an outcome they did not have. Let designers or developers be personas and it
starts asking whether a change gives *designers* a new outcome — a question the running system
has no opinion about, and one that would let internal convenience be stated as a capability.

:::important[Name for the branch, not for the person]
The same word can land on either branch. A developer **building** the system is a
*discipline*; a developer **consuming** what it publishes is a *persona*. Nothing about the
person changed — the **object** did, and that is the only test there is.

**Where a bare name could be read as either, it is not precise enough.** Qualify it until it
can only be one — *Development* and *Consuming developer*, never *Developer* twice.
:::
