---
type: topic
status: active
projects:
  - "[[Hallmark]]"
created: 2026-08-12
tags:
  - hallmark
  - sdlc
  - delivery
  - principles
---
# Hallmark - Principles

**Four principles. Everything in this practice traces to one of them, and anything that traces to none of them does not belong.**

They are the test, not the slogan. Use them twice: when **defining** the practice — *does this decision serve a principle?* — and when **applying** it — *which principle is this choice targeting?*

---

## 1 · Provable

> **Nothing is claimed that evidence does not prove.**

A capability may be stated only if a passing executable specification proves it. The catalogue of what the system does is **generated** from what passed, never hand-authored. Before evidence can exist, a claim is **asserted** by an accountable party and marked as such; after it, the claim is derived and no one may assert it by hand.

*It exists to kill one failure: a client is sold something that was remembered wrong.*

## 2 · Derived

> **Everything computable is computed. Judgement is spent only where it must be.**

Rigour follows from what a change touches, never from someone's estimate. The word for stopping follows from how far the work travelled. Slippage is the gap between the version promised and the version delivered. Urgency follows from the nature of the change.

The pipeline does everything mechanically possible and halts at the exact point **a consequence must be accepted rather than computed** — and no earlier.

*Derived, never chosen.*

## 3 · Traceable

> **Every claim, state and decision points back to what produced it.**

One door, so nothing arrives unrecorded. Decisions are made from **recorded facts**, not from what someone remembers. A compromise is not prevented — it is **conceded**, in writing, scoped and expiring and counted.

*If you cannot say what produced it, you do not have it.*

## 4 · Invariant

> **The route does not change with the size of the work, or the kind of actor.**

A one-line change and a multi-year programme travel the identical track; the apparatus scales automatically with what the work touches, not with anybody's judgement of its importance.

And every role may be held by **a human or an agent**. The practice runs all-human, all-agent, or any mix — it never presumes which, and it never requires one. **Headcount is not a lever.**

---

## How the practice traces to them

| Mechanism | Principle |
|---|---|
| A capability is claimable only if a passing spec proves it | **Provable** |
| The catalogue is generated, never authored | **Provable · Traceable** |
| `Completed` means published *and proven* to be published — queried, not reported | **Provable** |
| Acceptance criteria written before the work exists | **Provable · Traceable** |
| Rigour derived from touch | **Derived** |
| The stopping word derived from state and commitment | **Derived** |
| Slippage computed from target version versus actual | **Derived** |
| Automate to the threshold of consequence | **Derived** |
| One door — every signal in one queue | **Traceable** |
| A Decider decides from recorded facts, never from session memory | **Traceable** |
| The **concession** — a compromise recorded, scoped, expiring, counted | **Traceable** |
| The same track for a typo and a programme | **Invariant** |
| Any role held by a human or an agent | **Invariant** |
| Headcount is not a lever | **Invariant** |
| An unheld role is recorded, not worked around silently | **Traceable · Invariant** |

---

> [!IMPORTANT] The test is falsifiable, and that is the point
> *"Is this derived, or chosen?"* has an answer. *"Is this provable, or asserted?"* has an answer. *"Would this change if the work were ten times bigger, or if an agent did it?"* has an answer.
>
> A principle you cannot fail is a slogan. These can all be failed, which is what makes them usable.

## Mentions

![[mentions.base]]
