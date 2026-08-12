# Build — `Planned → Built`

`Built` is not *"the code is written"*. It is achieved when **every acceptance
criterion has been driven and holds**, and the item carries the version it landed
in.

**Driven** is the load-bearing word. A criterion that is *satisfiable in
principle* has not been driven. Automated ones are **run**; documented ones are
**followed and recorded**. What you produce is evidence, not an assertion that the
work is good.

The failing spec written at `Specified` must now **pass**. That transition is the
item's core evidence and the whole reason it had to be seen failing first — a spec
that has only ever passed proves nothing.

## Work from the plan

The plan is the declared touch set. Follow it.

**Revising the steps is normal work.** Plans are explicitly revisable — *a plan
that cannot be revised is an estimate wearing a plan's clothes*. Reorder, split, add
a step you missed. Record what changed on the item so the touch set stays current.

**Stop if the approach was wrong.** There is a real difference between *"I
resequenced two steps"* and *"this design does not work"*, and only you can see it
from inside the build. A wrong approach is what sends an item back to `Planned` at
verification — discovering it yourself during the build means saying so, not
improvising past it and letting a Verifier find it later.

> **If the build reaches beyond what the plan declared, say so explicitly.** Rigour
> is derived from touch, and a mismatch between declared and actual touch is the
> trigger to summon a verifier **on surprise, rather than on schedule**. Quietly
> touching more than you declared removes the only signal that exists for it.

## Where the change goes

Branch from `main`, named for the item:

```bash
git switch -c <type>/<issue>-<slug> main      # e.g. chore/1-declare-the-door
```

Commit as you go, then push and open a pull request that links the item:

```bash
gh pr create --base main --title "<title>" --body "Closes #<issue>

<what changed, and why it satisfies the criteria>"
```

**Do not merge it.** Publishing may run ahead of verification, but it does not
advance the state — and if the Worker merges its own change, the verification gate
has nothing left to block. The PR is what a Verifier reads. Merging happens after
`Verified`.

## Drive every criterion, and record how

Go through the acceptance criteria one at a time. For each, do the thing and
record what happened.

Post this on the item — it is what a Verifier receives, and a Verifier that cannot
tell how a criterion was exercised has insufficient evidence, which is a failed
verification:

```markdown
## Built — criteria driven

| Criterion | How driven | Result |
|---|---|---|
| <criterion> | `<command run>` | ✓ passes |
| <criterion> | followed steps: <what you did> | ✓ <what you observed> |
| <criterion> | — | ✗ <why it does not hold> |

**Version landed in:** <version, or the concession covering its absence>
**Branch:** `<branch>` · **PR:** #<n>
```

**If a criterion does not hold, the state is not reached.** Do not post a verdict
on your own work — that is the Verifier's act. Fix it, or say plainly that it
cannot be met and raise a concession.

### Two guards worth knowing

**A criterion driven by reading the code is not driven.** If you find yourself
writing *"inspected and looks correct"*, that is an assertion. Run it, or follow
documented steps and record what you observed.

**Never promote a characterisation test to a specification.** Reading existing
source yields *what the code does, bugs included* — never *what it should do*.
Promotion requires a source of intent from outside the code, and it is one of the
five things never conceded. If the only evidence you have for a criterion is that
the current behaviour matches it, you have not driven it.

## Stamping the version

`Built` requires the item to carry the version it landed in. **Nothing records it
yet** — see #15 — and it is not decorative: **slippage** is computed as the
difference between the version an item was committed for and the version it was
built into.

Raise a concession scoped to the item, expiring when #15 lands:

```yaml
id: "<issue>.<n>"
standard: >
  `Built` requires the item to carry the version it landed in.
scope: item #<issue>
compromise: >
  No mechanism records the version an item landed in — see #15. The work is
  complete and every criterion driven, but the version is unrecorded, so
  slippage cannot be computed for this item.
expires-when: "#15 lands and this item is stamped retrospectively"
```

**Do not substitute the milestone.** The milestone names the version the item was
*committed* for; `Built` needs the one it *landed* in. Conflating them makes
slippage read as zero forever — which is worse than uncomputable, because it looks
like an answer.

## Hand off

`Built` is where the Worker stops. `Verified` requires an actor who did not do the
work, and that is never conceded.

```bash
gh issue edit <N> --add-label "needs-verifier" --remove-label "needs-worker"
```

Advance the board to `Built` — this act completes the state, so it is yours to
set. Then say what a Verifier will need: the PR, the criteria results, the plan,
and anything that changed while you were working.

## What must exist when you are finished

- A branch and an open, unmerged PR linked to the item.
- The previously failing spec, now passing.
- A recorded result for **every** acceptance criterion, saying how each was driven.
- The version stamped, or a concession covering its absence.
- Any plan revisions recorded on the item.
- Any touch beyond what the plan declared, stated explicitly.
- `needs-verifier` set, and the board at `Built`.

A Verifier receives exactly this and nothing else — not your session, not your
reasoning. If it is not written down, it does not exist for them.
