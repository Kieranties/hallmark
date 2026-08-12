---
name: work
description: Hold the Worker role on a Hallmark item and perform the act its current state requires — sifting it, specifying it, planning it, building it, or publishing it. Use this whenever asked to work an item, pick up a ticket, take the next step on an issue, sift or triage something in the door, write acceptance criteria, draft a spec, produce a plan, or implement a planned item — including phrasings like "work #12", "pick up the next ready-for-agent item", "what's next on #4 and do it", "triage the new issues", "write the criteria for this", "plan out #7", "build #3", "implement the plan on this ticket", or "ship #2 now it's verified". Also use it when someone asks you to advance an item under the Hallmark practice even if they never say the word work, and when an item carries the `needs-worker` marker.
---

# Work

You are being asked to hold the **Worker** role on one item.

A Worker performs the required action on the work at that time. It is **the only
role that accumulates context** — the other three are denied it deliberately. So
unlike a Verifier, you should read everything: prior sessions on this item, the
false starts, the reasoning. That is not a convenience, it is what the role is.

This skill covers all five Worker acts: **sift**, **specify**, **plan**,
**build**, **publish**.

## Claim it first

Before reading anything, assign yourself to the item.

```bash
gh issue edit <N> --add-assignee @me
```

**The self-assignment is the claim.** Many actors can poll the same door; nothing
routes work to anybody. What stops two of them working the same item is that the
one who takes it says so, and that is also what makes the work attributable
afterwards.

If it is already assigned to someone else, stop and say so. Taking work someone
else claimed is the one thing this mechanism exists to prevent.

## Check you can reach what you need

Every act requires a defined set of information, **accessible at the moment of
acting**. If something in it cannot be reached, the act cannot be performed —
that is not a rule being broken, it is a role that cannot be held, and the fix is
to make the thing reachable.

You need the practice documents. Look in order:

1. `practice/` in the repository root.
2. `Z:\Obsidian\Stadion\Notes\Hallmark\Product\` — where they live today. Temporary,
   and itself an open finding.
3. Ask the invoker.

If you cannot reach them, say so and stop.

## Work out which act is needed

Read the item, its comments, its labels and its position on the board. Field IDs
differ per project, so discover them rather than assuming:

```bash
gh issue view <N> --json title,body,labels,assignees,milestone,parent,subIssues
gh api repos/<owner>/<repo>/issues/<N>/comments --jq '.[] | "\(.user.login): \(.body)"'
gh project field-list <project> --owner <owner> --format json
gh project item-list <project> --owner <owner> --format json
```

The act follows from the state and from what the previous act left behind:

| State | What exists | Act | Read |
|---|---|---|---|
| `New` | — | **Sift** | `references/sift.md` |
| `Accepted` | no criteria | **Specify** | `references/specify.md` |
| `Accepted` | criteria drafted, unconfirmed | **none — hand off** | a Verifier confirms them |
| `Specified` | — | **Plan** | `references/plan.md` |
| `Planned` | — | **Build** | `references/build.md` |
| `Built` | — | **none — hand off** | a Verifier confirms the work |
| `Verified` | — | **Publish** | `references/publish.md` |
| `Completed` | — | **none** | the track ends here |

Read only the reference for the act you are performing. The others describe
different jobs and will not help.

## Two gates you cannot cross

`worker ≠ verifier` is one of five absolutes that are **never conceded**. It binds
you from the other side to the way it binds a Verifier:

- **You may draft acceptance criteria. You may not set `Specified`.** That state
  requires a Verifier to confirm the criteria are adequate, and whoever wrote them
  may not confirm them. Draft, then hand off.
- **You may not verify your own work at any point.** If you find yourself about to
  judge whether what you produced is good enough, that is the wrong role.

Handing off is not a failure or a delay. It is the mechanism: independence without
shared references produces noise, shared references without independence produce a
rubber stamp, and you are one half of that.

## When you cannot satisfy a criterion

You will hit criteria you cannot meet — no spec runner exists, no second actor is
available, an input is unreachable. **Skipping is never sanctioned**, and the
difference between the three things that look like skipping matters:

| | What happened | What it costs |
|---|---|---|
| **No-op** | The step was **trivially true** — a one-line chore has nothing to plan and touches almost nothing | Nothing. You did not skip anything. Record nothing |
| **Concession** | It was **not** true and you proceeded anyway | A recorded, scoped, expiring concession that counts against the repository |
| **Bypass** | You moved on and recorded nothing | The thing this skill must never produce |

**The test between the first two is touch, not type.** A chore that touches
everything is not trivial just because it is a chore.

Raise the concession as a comment on the item, then continue:

```markdown
## Concession <issue>.<n>

​```yaml
id: "<issue>.<n>"
raised: <date>
raised-by: <actor>
item: <issue>
standard: <the rule you did not meet, in the practice's own words>
scope: <this item, or wider>
compromise: <what you did instead, and why it was not possible to comply>
expires-when: <the condition that clears it — a thing someone can actually do>
​```
```

Number it per ticket — `<issue>.<n>`, where `n` counts what is already on that
item. A repository-wide sequence needs a central allocator and collides when two
actors concede at once.

Then add the `concession` label so carriers are findable.

**Nothing conceded reaches the five absolutes.** If the only way forward is to
breach `worker ≠ verifier`, the answer is not a concession — it is that the act
cannot be performed by you.

Be sparing. Open-concession count is the practice's sharpest health signal, and
it is only sharp while everything in it is real debt. A scope decision is not a
concession. **Concede what you cannot fix; capture what you can** — if the gap is
missing work rather than an accepted compromise, raise an item instead.

## Hand off

Whoever completes a step marks what is next. Nothing schedules work here, so if
you do not mark it, the item sits finished and invisible.

Set the marker for the role the next act needs, and clear yours:

```bash
gh issue edit <N> --add-label "needs-verifier" --remove-label "needs-worker"
```

| Marker | Means |
|---|---|
| `needs-worker` · `needs-verifier` · `needs-decider` | **what act is needed next** |
| `ready` · `ready-for-agent` | **who is invited** to pick it up — a human, an agent, or both |

These are two axes and they combine. An item may be `needs-verifier` and
`ready-for-agent` at once.

> **Watch this.** If `needs-verifier` is always paired with `ready-for-agent` and
> `needs-worker` with `ready`, the markers quietly become a human/machine division
> of labour — which is the exact thing the actor model exists to prevent. They are
> about whose attention is being called, never about what either kind of actor can
> do.

Then post what you did:

```markdown
## <Act> — <state reached, or "criteria drafted, awaiting confirmation">

**What I produced**
<the required outputs of this act, or links to them>

**Concessions raised**
<ids, or "none">

**Next**
<the act needed, and which role must perform it — and why it cannot be you if
that is the reason>
```

Advance the state on the board **only** where the act completes it — the sift
completes `Accepted`, a plan completes `Planned`. Drafting criteria does not
complete `Specified`, so leave the state alone and hand off.

## What you do not do

- **Verify your own work.** The gate above, restated because it is the one that
  will feel most like unnecessary friction in the moment.
- **Accept.** *This is what I wanted* is a Decider's judgement. Mark
  `needs-decider` and stop.
- **Commit an item to a version.** Also a Decider act — it is a promise someone
  will have to retract.
- **Work more than one item** unless asked. Each needs its own claim.
- **Skip the claim** because it seems like overhead. It is the only thing standing
  between two actors and the same item.
- **Merge your own work.** A PR opened at `Built` is what a Verifier reads. Merging
  it yourself leaves the verification gate with nothing to block.

> One act's required outputs are the next act's required inputs. That is why each
> reference file is explicit about what must exist when you finish: define both
> ends and the chain runs with no handover to negotiate. Produce less than the
> act requires and you leave a role that cannot be held.
