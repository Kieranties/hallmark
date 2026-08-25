---
title: Capability
description: An outcome a named persona can achieve — the only type that adds to what the system can be said to do, and never written by hand.
sidebar_position: 2
---

# Capability

**An outcome a named [persona](../parties/personas.md) can achieve.** The only
[type](./types.md) that adds to what the system can be said to do.

**A capability is stated only once a passing [specification](../process/specify.md) proves
it**, and the entry is *generated* from that specification rather than authored. One
capability is usually proven by several specifications, each covering a case.

Stated as the outcome, never as the thing built. The wording carries further than it looks:
because the entry is generated, a capability written as an implementation noun puts an
implementation noun in front of whoever reads it.

| | Example |
| --- | --- |
| ✓ | *"An operator can drain a node without dropping traffic"* — named persona, achievable outcome |
| ✗ | *"Add node draining to the cluster API"* — the thing built, not the outcome |
| ✗ | *"Improve deployment safety"* — no persona, and nothing anyone can do |

*Where the capability is generated is written on [publish](../process/publish.md).*
