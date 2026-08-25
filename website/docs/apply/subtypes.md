---
title: Subtypes
description: An application type is always a subtype of a practice type, never a peer of one — which is what keeps the practice's guarantees intact.
sidebar_position: 3
---

# Subtypes

**An application may name and extend the [work types](../work/types.md) as it needs.** Exactly
as it declares its own [personas](../parties/personas.md) and
[disciplines](../parties/disciplines.md), a system carries whatever work types its tooling and
its people actually use, and may add more where something genuinely does not fit — **provided
every one maps onto a type defined by the practice.**

The mapping is what keeps the practice's guarantees intact whatever the tracker happens to
call things, and it is what keeps the request type decidable on arrival.

**An application type is always a *subtype* of a practice type, never a peer of one.** A
system may define as many as it needs — *security fix*, *compliance capability*, *performance
chore* — and each inherits everything the practice says about its parent. **Nothing sits
outside the five.**

| An application calling it | Maps to |
| --- | --- |
| Bug · defect · regression | **[Fix](../work/fix.md)** |
| Feature · story · requirement | **[Capability](../work/capability.md)** |
| Epic · programme · theme | **[Initiative](../work/initiative.md)** |
| Spike · investigation · RFI | **[Question](../work/question.md)** |
| Task · maintenance · technical debt | **[Chore](../work/chore.md)** |

**The practice never uses those words itself.** They vary by team, by client and by tool, so
nothing downstream is made to know which tracker is in use.
