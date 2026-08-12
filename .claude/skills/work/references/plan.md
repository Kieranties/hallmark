# Plan — `Specified → Planned`

`Specified` settled **what**. `Planned` settles **how, and in what order**.

Splitting them is what stopped one state carrying both the outcome and the
approach — and it is why there is no `Designed` state. A stage gate is the first
thing a stretched team skips, most work legitimately skips it anyway, and a colour
change would have to pass through it. **The depth of design is derived from touch**,
exactly as rigour is.

`Planned` is achieved when all five are true.

## 1 · The sequence of actions is known

Written down, in order, not held in someone's head. *Modify X · add Y · alter
contract Z.*

## 2 · It is revisable

It is expected to change. **A plan that cannot be revised is an estimate wearing a
plan's clothes.** If you find yourself hedging every step so it cannot be wrong,
you are writing an estimate.

## 3 · Following it would make the failing spec pass

**Actionable such that the result asserts the spec.** If it might not, the plan is
not finished. This is the test that stops a plan being a list of activities: every
step should be traceable to a criterion it helps satisfy, and every criterion
should have steps that reach it.

## 4 · How each check will be driven is known

For every acceptance criterion, say how it gets exercised — automated and run by
the build, or documented steps a person follows and records.

This matters because `Built` requires every criterion to have been **driven**, not
merely to be satisfiable in principle. Leaving it undecided here means discovering
at `Built` that half the criteria have no way to be checked.

## 5 · An ADR is recorded where the plan meets the trigger

**One artifact, two ways the obligation gets noticed.**

| | Who notices | If you do not write it |
|---|---|---|
| **Derived floor** | The machine — the plan **touches a contract** | The build fails. A contract binds others and is expensive to reverse by definition, so no judgement is required |
| **Judgement ceiling** | You — a **genuine alternative existed** *and* reversal is expensive, with no contract touched | Nothing. It is simply lost |

**Test for the second:** *if you cannot name what you would have to undo, reversal
is not expensive* — and no ADR is owed.

| Change | ADR? | |
|---|---|---|
| Alter a published contract | **Yes** | Derived — machine-caught, unskippable |
| Choose one datastore over another | **Yes** | Judgement — real alternative, expensive reversal |
| Rename a private method | **No** | Alternatives existed; reversal is free. The code is the record |
| Use the mandated helper from an enforcing dependency | **No** | No genuine alternative — the standard mandates it |

**A standard is never re-decided per component.** A consumer of an enforcing
dependency made no choice and owes no ADR; the ADR justifying the standard exists
once, where it is enforced. Without this rule every repository carries an ADR
restating a decision made elsewhere.

An ADR is **immutable and dated** — superseded, never edited. Place it at the
narrowest level that includes everyone who must not contradict it.

## The plan is the declared touch set

Listing the actions — *modify X · add Y · alter contract Z* — **declares what the
change reaches. No separate artifact is required.**

This is what makes rigour derivable rather than estimated: what the work touches
determines how much apparatus it carries, and the plan is where that gets stated.

Two things follow:

- **Be specific about what you will touch.** A vague plan understates the touch
  set, and understated touch is how a change that reaches everything travels as
  though it reached nothing.
- **If you genuinely cannot say what it touches, say that.** Uncomputable touch
  attracts **maximum** rigour by rule — the incentive points that way deliberately,
  because the alternative is that unknown blast radius looks cheap.

## Sub-items

Sub-items are fine where one item is too large for one plan step. Whether a
sub-item is a checklist entry or a real item with its own state is **an open
question in the practice** — a plan step is the first, work handed to another
actor is the second. If you need to split, prefer the checklist unless it is going
to somebody else.

## What must exist when you are finished

- An ordered sequence of actions, written on the item.
- A stated way of driving every acceptance criterion.
- An ADR where the trigger is met, or a sentence saying why it is not.
- Any concessions raised, numbered `<issue>.<n>`.
- The board advanced to `Planned` — this act completes the state, so it is yours
  to set.
- The marker for the next act set.

The next act is **build**, which is not yet in this skill's scope. Mark
`needs-worker` and say so.
