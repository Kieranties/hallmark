# ADR 0001 — The door declares how it carries the practice, at `door.carries`

| | |
|---|---|
| **Date** | 2026-08-13 |
| **Status** | Accepted |
| **Level** | Component — this repository |
| **Item** | [#47](https://github.com/Kieranties/hallmark/issues/47) |
| **Trigger** | Judgement ceiling — genuine alternatives existed, and reversal is expensive |

> **Immutable.** Superseded, never edited.

## Context

`.hallmark/repository.yml` declares three things about the door: its `kind`, where
items are captured, and where their state lives. Everything else about how this
repository carries the practice's vocabulary — which mechanism holds an item's type,
its state, its commitment, its markers, its claim — exists only as prose inside two
skills, and in two cases is written down nowhere at all.

That is finding **F12**: *the door's own configuration is declared nowhere, versioned
nowhere, checked by nothing. The most load-bearing piece of the instantiation is the
one piece with no record.*

The practice is deliberately silent about carriers. It says every item carries exactly
one of five types; it does not say a label carries it. The mapping between the two is
an **application** decision, and this repository is one application of the practice.
Something must hold that mapping, and where it is held determines what can read it —
three skills today, and a schema and checker (#4) that do not exist yet.

Two properties of the problem shaped the decision:

- **The available carriers are a function of the tracker.** `github-issues` has
  milestones and sub-issues; another tracker has neither and has something else
  instead.
- **The mapping must not rot.** GitHub assigns volatile identifiers — project field
  ids, single-select option ids, node ids — that are rediscovered by query in every
  session and mean nothing across repositories.

## Decision

**The mapping lives at `door.carries`, inside the `door` key, parameterised by
`door.kind`.**

Three subordinate decisions follow from it and are recorded here because they are not
separable from it:

1. **Declare the decision; query the handle.** The declaration records *which
   mechanism* carries an axis, never the platform's identifier for it. The test:
   *would someone else, instantiating this same practice on this same platform, have
   had to make this choice?* If yes it is a decision and belongs in the file; if the
   platform assigned it, it is a handle and is resolved per session and discarded.

2. **The boundary rule.** The door is the only place the practice's vocabulary meets a
   foreign one. Inside `door`, mapping — and a foreign word is required, because a
   mapping that renames the foreign thing fails to refer. Everywhere else under
   `.hallmark/`, the practice's own words as written.

3. **Both expression forms are admitted** — a generative rule for free-text carriers
   this repository shaped after the practice's own names, and an explicit per-value
   mapping for carriers with a fixed foreign vocabulary. The generative form is a
   convenience, not the general case.

## Alternatives considered

| | Shape | Why not |
|---|---|---|
| **B** | `commitment:`, `claim:` and the rest as **siblings** of `door:` | The carriers available are determined by `kind`, which lives inside `door`. Siblings would be a set of options floating free of the thing that decides which options exist. This was #9's assumed shape, and #9 is superseded by it |
| **C** | An `application:` key as the roof, with `door` nested inside it | Correct in the abstract — the mapping *is* an application concern — but it invents a level before anything needs one. Personas, disciplines and actors are application content too and sit at the top level without a roof over them. The roof can be added later if a second application concern needs somewhere to live; adding it now would be a level with one occupant |
| **D** | Leave it as skill prose, as today | The status quo, and F12. Prose cannot be read by #4's checker, drifts silently from the live door, and duplicates across every skill that needs it |

## Consequences

**`door.carries` is a discriminated union keyed on `kind`, not a flat schema.** This
binds #4: a flat schema cannot express that milestones exist for one kind and not
another. This is the consequence that makes reversal expensive, and the reason this
record exists.

**The controlled-vocabulary lint gains a scope it never had.** The practice names it as
one of three guards and never says what it ranges over. It ranges over everything under
`.hallmark/` *except* `door.carries`.

**A gap becomes declarable.** An axis a `kind` cannot carry is stated as uncarried
rather than being silently absent — which is what makes a concession's necessity
computable rather than remembered. This repository has one such gap already: no
mechanism carries the version an item landed in (#15).

**ADRs cannot live under `.hallmark/`.** The boundary rule confines tracker vocabulary
to the `door` key, and any decision record about carriers necessarily uses words like
*label*, *milestone* and *assignee*. This record therefore sits at `adr/` in the
repository root. That placement is itself free to reverse and owes no record of its
own.

**What this does not decide.** Whether `carries` holds one shape or three — value-set
mappings, mechanism declarations and record placement may not be the same kind of
thing — is a schema question and belongs to #4. Nothing here pre-empts it.

**What it does not buy.** Nothing checks the declaration against the live door until #4
exists. The value of declaring it now is that drift becomes *detectable*, not that it
is prevented.

## Superseded

None. This is the first record at this level.
