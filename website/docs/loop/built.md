---
title: Built
description: The state an item reaches when every acceptance criterion has been driven and holds, and the work carries the version it landed in.
sidebar_position: 6
---

# Built

## What it is \{#definition}

**An item is `Built` when every
[acceptance criterion](../acts/required-outputs.md) has been driven and holds, and the
work carries the version it landed in.**

## Why it exists \{#why}

**Driven is a stronger word than passing, and the difference is the point.** An automated
criterion is driven by being executed. A criterion nobody automated is driven by somebody
following it and **recording what happened**. Left at *passing*, the manual half quietly
becomes *nobody objected*, which is not evidence of anything.

**The version has to be stamped here, because here is where it becomes knowable.** What
an item was promised for is a target; what it landed in is a fact, and only the work
itself can supply it. Recorded at the moment it lands, [slippage](../items/commitment.md)
computes itself and nobody is ever asked to report it.

**`Built` is about the work, not about the world.** It says the thing was made and every
criterion holds. Whether anybody else can get it, and whether it was the right thing to
make, are the two states after this one.

## Rules \{#rules}

**`Built` is achieved when all three hold.**

| | |
| --- | --- |
| **Every acceptance criterion has been driven, and holds** | Not sampled, and not assumed from a green build that ran something else |
| **Automated criteria have been executed; documented criteria have been followed and their result recorded** | A documented check with no recorded result has not been driven |
| **The work carries the version it landed in** | The actual version, not the one it was promised for |

**A criterion that cannot be driven is not a criterion.** It goes back to
[`Specified`](./specified.md) rather than being carried forward as an intention.

**`Built` does not require anything to be published.** Publishing is an act that may
happen before or after this state and moves nothing on its own — see
[`Completed`](./completed.md).

**`Built` is not self-confirmation of the work being right.** What was asked may have
stopped being the right thing while the work was in flight, and that check belongs to
[`Verified`](./verified.md).

## In detail \{#detail}

### Re-driving at `Built` is deliberate repetition

Criteria are written at `Specified` and driven here. The gap between the two is where
work happens, and work changes what the author believes the criteria said. Driving them
again, deliberately, against the thing that now exists, is what closes that gap — and it
is the one part of the practice that does not get cheaper with a second actor, because
it has to be done either way.

The point is sharpest with one actor, where the criteria written in advance are the only
independent thing in the room — see [working alone](./working-alone.md).

### What this state leaves behind

The results of every criterion, and the version. Both are recorded facts: authored or
computed for durable use by somebody else, rather than the exhaust of producing them.
What counts as an output, and why the distinction matters, is on
[required outputs](../acts/required-outputs.md).

### Returning here

Work that fails on conformance comes back to `Built` — the target was right, and the work
missed it. Work that fails because a criterion was never actually driven comes back here
too, and that is a different finding: nothing was proving what was being claimed.
