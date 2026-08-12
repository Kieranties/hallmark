# Verifying `Specified → Planned`

`Specified` settled **what**. `Planned` settles **how, and in what order**. You are
checking the plan against five conditions — and one of them does most of the work.

## The five

**1 · The sequence of actions is known**, written down rather than held in
someone's head.

**2 · It is revisable.** Expected to change. A plan hedged so thoroughly that it
cannot be wrong is an estimate wearing a plan's clothes — and it is unfalsifiable
in the same way a bad acceptance criterion is.

**3 · Following it would make the failing spec pass.** *This is the load-bearing
one.* Trace it: every criterion should have steps that reach it, and every step
should serve a criterion. A plan that is a list of activities rather than a route
to the spec passing will produce work that looks busy and satisfies nothing.

If you cannot follow the plan to the spec passing, **that is a send-back** — not
because the plan is wrong, but because nobody can tell whether it is right.

**4 · How each check will be driven is known** — automated and run by the build,
or documented steps a person follows and records. Left undecided here, it gets
discovered at `Built`, when half the criteria turn out to have no way of being
exercised.

**5 · An ADR is recorded where the plan meets the trigger.**

## The ADR trigger

Two paths, and only one is machine-caught:

| | Who notices | If it is missing |
|---|---|---|
| **Derived floor** — the plan touches a **contract** | The machine | The build fails. Nothing for you to check |
| **Judgement ceiling** — a genuine alternative existed *and* reversal is expensive | **A human. You** | Nothing. It is simply lost |

**The second is your job**, because nothing else will catch it. Read the plan and
ask: did this involve a real choice between viable options, where undoing it later
would be expensive?

The test for the second half: **if you cannot name what would have to be undone,
reversal is not expensive** and no ADR is owed.

Two things that are *not* ADR-worthy, and sending an item back for them is noise:

- **Using a mandated helper from an enforcing dependency.** No genuine alternative
  existed. A standard is never re-decided per component — the ADR justifying it
  exists once, where it is enforced.
- **Anything freely reversible.** Renaming a private method had alternatives and
  costs nothing to undo. The code is the record.

## The plan is the declared touch set

Listing the actions declares what the change reaches — no separate artifact is
required, and rigour is derived from it.

So **a vague plan understates touch**, and understated touch is how a change that
reaches everything travels as though it reached nothing. A plan that says
*"update the relevant files"* has declared nothing.

Where the Worker genuinely could not say what the work touches, that should be
stated — **uncomputable touch attracts maximum rigour by rule**, and the incentive
points that way deliberately.

## Ruling

| | |
|---|---|
| **Verified** | Five conditions hold, and any judgement-ceiling ADR is recorded or explicitly reasoned away |
| **Sent back** | The plan does not visibly reach the spec passing, checks have no stated way of being driven, touch is declared so vaguely it declares nothing, or a real technology choice was made with no ADR |

Send-back stays at `Specified`.
