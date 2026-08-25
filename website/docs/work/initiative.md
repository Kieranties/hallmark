---
title: Initiative
description: A body of intent spanning capabilities and time — the only type that contains other work, and the only one never worked directly.
sidebar_position: 6
---

# Initiative

**A body of intent spanning capabilities and time.** The only [type](./types.md) that
**contains** other work, and the only one never worked directly.

**A work item sits under at most one initiative.** Containment is exclusive: work may stand
alone, but it is never shared between two initiatives. That is what keeps an initiative
unambiguous — everything beneath it is beneath it alone.

**An initiative may itself sit inside another.** Containment is exclusive at every level, so
however deep it runs the result is a tree — and nothing about how the work at the bottom
travels is altered by how many initiatives sit above it.

What it contains is ordinary work, each item travelling the track in the usual way. The
initiative carries a state of its own, and may resolve quickly or persist indefinitely;
neither changes how it is handled.

- *"Support multi-tenant deployments"*
- *"Meet the audit obligations of the new contract"*
- *"Move ingestion to an event-driven model"*

**Test: would doing this mean doing several other things first?** If so, it is an initiative,
and those other things are the work.
