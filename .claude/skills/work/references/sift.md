# Sift — `New → Accepted`

The sift is what achieves `Accepted`. Two moves: **give it a type**, then **rule**.

Capture is free — no quality bar, no minimum detail, no approval. So things arrive
in whatever shape someone had time for. The sift is where that becomes workable,
and it is the last cheap moment: every downstream act assumes the type is right.

## 1 · Give it a type, or check the one it arrived with

Every item is exactly one of five.

| Type | Use it for |
|---|---|
| **Capability** | Something a user can now do. *"A client can export invoices."* Stated as the **outcome a persona achieves**, never as the thing you build |
| **Fix** | Correcting something previously completed. It **attaches** to an existing capability rather than creating one |
| **Chore** | Upkeep that changes no capability — documentation, build scripts, tooling, dependency updates |
| **Question** | A request for information. Never committed to a version; it is answered and closed |
| **Initiative** | A body of work spanning several capabilities. **No work of its own** — its position is the aggregate of its children |

**Deliberately not on the list:** *bug*, *feature*, *epic*, *user story*, *task*.
Those mean something different in every team, which is why they were excluded
rather than overlooked. If an item arrived wearing one, translate it.

**The type says why the work exists. It never says how much rigour applies** —
that is derived from what the work touches. A chore bumping a shared library
outranks a capability adding a tooltip. Labels lie under pressure; touch does not.

### Two known gaps you may hit

**Quality and assurance have no route in.** The catalogue holds three entry kinds
— capability, quality, assurance — and only `Capability` can arrive through the
door. If the item is *"response under 200ms"* or *"no PII reaches logs"*, none of
the five types fits. Say so rather than forcing it into `Capability`; that is an
open question in the practice, not a decision for you.

**Findings, weaknesses and homeless artifacts are not obviously items.** A
recorded weakness has no completion criterion; an artifact with no home is a noun,
not work. Where it plainly needs doing, `Chore` is usually honest. Where it does
not, say what you think it is and leave it untyped rather than mistyping it.

## 2 · Rule

Three outcomes, and only three.

| Ruling | When |
|---|---|
| **Accepted** | You agree it is to be done |
| **Duplicate** | It is the same as another item — at any point, regardless of commitment |
| **Rejected** | It will not be done, and nobody was promised it |

**Accepting is not committing.** Agreeing something should be done says nothing
about when, or for which version. Commitment is a separate axis and a Decider's
act — if the item plainly needs a promise, mark `needs-decider` and leave it.

If you cannot rule from what is recorded, the item is under-specified rather than
undecidable. Ask, in a comment, and leave it at `New`.

## What must exist when you are finished

- The item carries exactly one `type-*` label.
- It was ruled — accepted, duplicate or rejected — and the board reflects that.
- If duplicate, the item it duplicates is named.
- The marker for the next act is set, and yours is cleared.

An item reaching `Accepted` with no type is the failure this act exists to
prevent: everything downstream assumes it, and nothing checks it.
