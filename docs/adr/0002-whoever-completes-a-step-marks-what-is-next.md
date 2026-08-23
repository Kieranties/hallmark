# ADR 0002 — Whoever completes a step marks what is next

| | |
|---|---|
| **Date** | 2026-08-23 |
| **Status** | Accepted |
| **Level** | Practice — markers and claiming |
| **Item** | [#89](https://github.com/Kieranties/hallmark/issues/89) |
| **Trigger** | Judgement ceiling — genuine alternatives existed, and reversal is expensive |

> **Immutable.** Superseded, never edited.

## Context

State says where an item is and therefore what should be done next. It does not say
when, or by whom. Finding work is a separate signal — a **marker** on the item that
calls it to action, `ready` for a human and `ready-for-agent` for an agent.

The practice records who sets one as open: *"the natural answer is whoever completes a
step marks what is next, which needs no scheduler. Not yet decided."*

Two constraints bound anything decided here.

**A marker is an invitation, never a permission.** Whoever may set one must not thereby
gain a say in who may hold a role — that turns on having what the role requires, and on
nothing else. Any answer that makes marking an act of authorisation has quietly built a
second, weaker permission system beside the real one.

**Markers exist because agents poll and humans browse.** An agent polling needs a query
that returns only work somebody wanted an agent on. Whatever sets the marker must be
able to express that intent, or the two markers collapse into one.

## Decision

**Whoever completes a step marks what is next.**

Three things follow and are not separable from it:

1. **Marking is part of completing, not a separate act.** An actor that has just
   achieved a state has the item in front of it and knows what the next act needs.
   Nothing is scheduled, nobody is summoned, and no role is invented to do it.

2. **Any actor with access to the item may add or remove a marker at any time.** The
   rule above places an *obligation* on whoever completed a step; it does not make
   marking exclusive to them. A Sentinel that notices unmarked work marks it. A marker
   set wrongly is corrected by whoever notices.

3. **An unmarked item is not an error, and nothing chases it.** It is an item nobody
   has been invited to. That is visible by construction — it sits at a state with no
   marker — and the remedy is to mark it, not to raise anything.

## Alternatives considered

| | Shape | Why not |
|---|---|---|
| **B** | **The Decider marks** | Centralises prioritisation in the one role the practice works hardest to reduce to *a decision, never work*. It also makes the marker read as a permission — the role that commits money and risk is now also the role that says who may pick something up — which is the thing this decision must not do. And it is a bottleneck at exactly the moment throughput matters |
| **C** | **Nobody sets it; markers are derived from state** | Attractive, because *derived, never chosen* is a principle. But the derivation has nothing to derive from: `ready` and `ready-for-agent` differ by **whose attention is wanted**, which is not a fact about the item's state. Deriving would collapse the two markers into one, and the reason markers exist at all is that agents poll and humans browse |
| **D** | **The actor that wants the work marks it for itself** | Not a marker at all — that is a claim. It also inverts the point: a marker calls attention *to* work from outside, and an actor already looking at the item does not need calling |

## Consequences

**The standing warning becomes load-bearing rather than incidental.** If whoever
completes a step chooses the marker, the choice is made thirty times a week by whoever
happens to be there. If interesting work is consistently marked `ready` and tedious
work `ready-for-agent`, the two labels have become a human/machine division of labour —
the exact thing the actor model exists to prevent. The warning is carried on the page.

**An item usually carries both markers.** Nothing about ordinary work restricts it to
one kind of actor, and the practice says so already. Marking both is the default;
marking one is a statement, and the statement is the thing to watch.

**Marking is not evidence of anything.** A marker is not a required output of any act
and produces no record worth reading later. It calls attention and is then spent.

**What this does not decide.** What form a marker takes belongs to the application —
a label, an assignee, a column, a notification. Whether an item may carry a marker
before it is `Accepted` is not settled here, and nothing above turns on it.

## Superseded

None.
