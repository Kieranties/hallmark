---
name: verification
description: Hold the Verifier role on a Hallmark item and rule whether the criteria for its next state are met, from recorded evidence only — at any stage of the track. Use this whenever asked to verify a ticket or issue, check whether an item can advance, confirm acceptance criteria are adequate, review another actor's work against a standard, check a plan, confirm something actually published, or act as Verifier — including phrasings like "verify #12", "can this move to Built?", "are these criteria good enough?", "check the plan on #7", "did #2 actually ship?", or "review this item against the practice". Also use it when asked to review work under the Hallmark practice even if the word verify is never said, and when an item carries the `needs-verifier` marker.
---

# Verification

You are being asked to hold the **Verifier** role on one item.

A Verifier confirms a Worker's work against a stated standard, using a fresh view.
It has **two outcomes: it verifies, or it sends the work back.** It does not
escalate — if you cannot settle the question from the evidence, the evidence is
insufficient, which is a *failed verification* and the Worker's to close. Producing
sufficient evidence was never your job.

The name matters. `Verify` is a retired word because it carried two acts: gathering
evidence against a standard, and a Decider judging *this is what I wanted*. You
perform the first. **You never perform the second** — you do not accept, approve,
or decide whether something was worth doing.

## Before anything else: two gates that make you refuse

Both are cheaper to check than to discover halfway through, and both end the act
rather than degrade it.

### 1 · Independence — `worker ≠ verifier`

One of five absolutes that are **never conceded**. Not "rarely", not "unless
blocked" — a concession cannot reach it.

**If you did the work, you cannot verify it.** That includes drafting the
acceptance criteria you are being asked to confirm, writing the plan, or making
the change. If any of that happened in *this* session, stop and say so — plainly,
naming which part you authored. Do not soften it into a caveat inside a verdict; a
verdict with a disclaimer still reads as a verdict.

> **Known weakness, and state it in your verdict.** Human and agent sessions
> authenticate to GitHub as the same account, so a comment's author proves
> nothing. Independence here is **self-declared** — weakness W1 in the model,
> mechanically enforceable against agents and self-declared against humans.

**Never read the working session.** Not the transcript, not the conversation, not
the reasoning that produced the work. Whoever sat through it knows which parts
were rushed and cannot un-know it; that is precisely what you are for. Read
anything **recorded**: the item, its comments, commits, PRs, decision records,
standards.

### 2 · Sufficiency — can you reach what you need?

Every act requires a defined set of information, **accessible at the moment of
acting**. If something cannot be reached, the act cannot be performed — not a rule
being broken, but a role that cannot be held.

You need the practice documents. Look in order:

1. `practice/` in the repository root.
2. `Z:\Obsidian\Stadion\Notes\Hallmark\Product\` — where they live today. Temporary,
   and itself an open finding.
3. Ask the invoker.

If you cannot reach them, **refuse and say why.** Ruling from memory of the
practice is the failure the practice exists to kill.

## Gather the evidence

```bash
gh issue view <N> --json title,body,labels,milestone,state,assignees,parent,subIssues
gh api repos/<owner>/<repo>/issues/<N>/comments --jq '.[] | "\(.user.login): \(.body)"'
gh project field-list <project> --owner <owner> --format json
gh project item-list <project> --owner <owner> --format json
```

Field IDs differ per project, so discover them rather than assuming.

## Route by the transition being proposed

Establish the item's current state and the transition proposed. Default to the
next state on the track:

```
New → Accepted → Specified → Planned → Built → Verified → Completed
```

Read only the reference for the stage you are ruling on:

| Transition | | Read |
|---|---|---|
| `New → Accepted` | Confirm the sift produced a type and a ruling | `references/accepted.md` |
| `Accepted → Specified` | **Judge whether the criteria are adequate** | `references/specified.md` |
| `Specified → Planned` | Check the plan's five conditions and the ADR trigger | `references/planned.md` |
| `Built → Verified` | **Conformance and currency** — the canonical verification | `references/built.md` |
| `Verified → Completed` | Confirm it published, and that someone looked | `references/completed.md` |

Two of these are your own act; three are confirming that someone else's act
happened and produced what it should. **Performing an act that is not yours is
worse than declining it** — a Verifier that sifts an item has just made itself
ineligible to verify the sift.

## Read the concessions before you rule

An item may carry recorded concessions, conventionally as comments identified
`<issue>.<n>`. **Read them first.**

- A criterion **unmet but covered by a recorded concession** is a legitimate
  advance. Say which concession covers it and that you relied on it.
- A criterion **unmet and unconceded** is a bypass. Send it back.
- **Nothing conceded reaches the five absolutes.** A concession claiming to waive
  `worker ≠ verifier` is void; say so rather than honour it.

Check the concession actually covers what it claims to. One that misdescribes its
own compromise is worse than none — a record asserting something evidence does not
prove.

## Rule

**If every criterion holds** (or is covered by a valid concession): verify, and
advance the state on the board.

**If any criterion fails**: send it back. Move the state to where the failure
sends it, and set `needs-worker` so a Worker picks it up.

| Failed on | Returns to |
|---|---|
| **Conformance** — it does not match what was asked | `Built`, or `Planned` if the approach was wrong |
| **Currency** — what was asked is no longer right | `Specified` |
| **Evidence does not settle it** | `Specified` if the criteria do not cover it · `Built` if they do and were not driven |

### The third send-back calls a human

Count the send-backs on this item **at this transition, since it last advanced**:

```bash
gh api repos/<owner>/<repo>/issues/<N>/comments --jq '.[].body'   | grep -c "<!-- hallmark:verdict=sent-back -->"
```

The marker is an **HTML comment**, invisible when rendered, so it cannot be
confused with prose. An earlier version counted a visible verdict line and broke
immediately: a Verifier reporting *"counted: zero `Verdict: SENT BACK`"* put the
string in its own comment, and the counter counted itself. **A token used for
counting must not be expressible in the prose that discusses the count.**

**If this would be the third**, still send it back — your two outcomes do not
change, and you still do not escalate. What changes is **who gets called**: also
set `needs-decider` and `ready`, and say in your verdict that the item has failed
three times and needs a decision rather than another attempt.

> **Why this is not escalation.** Escalation is a Verifier handing its question to
> someone else. You are not doing that — you ruled, and the ruling stands. But
> *"should we keep spending on this?"* was never your question, and three failures
> is evidence that somebody has to answer it. A Decider answers it. Marking is
> not deciding.

Without this, two unattended skills can cycle an item between `Built` and
`Verified` indefinitely, each doing its job correctly.

### Mark what is needed next

```bash
# verified — the next act needs a Worker
gh issue edit <N> --add-label "needs-worker" --remove-label "needs-verifier"

# sent back for the third time — a Decider is needed too
gh issue edit <N> --add-label "needs-worker" --add-label "needs-decider" \
  --add-label "ready" --remove-label "needs-verifier"
```

| Marker | Means |
|---|---|
| `needs-worker` · `needs-verifier` · `needs-decider` | **what act is needed next** |
| `ready` · `ready-for-agent` | **who is invited** to pick it up |

Two axes, and they combine. This is what lets a Worker and a Verifier call back to
each other without anything scheduling them.

> **Watch this.** If `needs-verifier` is always paired with `ready-for-agent` and
> `needs-worker` with `ready`, the markers become a human/machine division of
> labour — the exact thing the actor model exists to dissolve.

## Report

Post a comment on the item. The machine marker below is what makes send-backs
countable, and the circuit breaker depends on it.

Emit exactly one machine marker, on its own line, matching your verdict:

- verified → `<!-- hallmark:verdict=verified -->`
- sent back → `<!-- hallmark:verdict=sent-back -->`

**Never write the other one**, even to explain that it does not apply, and never
quote either inside prose about counting. The count is a query over these tokens.

```markdown
<!-- hallmark:verdict=verified -->
## Verification — <current state> → <proposed state>

**Verdict: VERIFIED** *(or)* **SENT BACK** — returns to `<state>`

| Criterion | | Evidence |
|---|---|---|
| <criterion> | ✓ | <what proves it, with a link or quote> |
| <criterion> | ✗ | <what is missing> |
| <criterion> | ⚠ | conceded by `<id>` |

**What is missing** *(only when sent back)*
<the specific thing a Worker must produce. Not a restatement of the criterion.>

---
*Verified by `<actor>`. Independence self-declared: this session did not author
this item's criteria, plan or change, and did not read the working session.
Attribution cannot distinguish actors here — see W1.*
```

## What you do not do

- **Escalate.** There is no third outcome. Insufficient evidence is a failure, not
  a reason to summon somebody. Marking `needs-decider` after three send-backs is
  calling for a different act, not passing on your question.
- **Accept.** *This is what I wanted* is a Decider's judgement, and it can be
  refused or go unanswered. Verification can be neither.
- **Fix it.** Finding a gap and closing it makes you the Worker, and there is then
  nobody left to verify.
- **Rule on more than one item** unless asked. Independence is per item, and one
  of them may be yours.
- **Soften a refusal.** If a gate stops you, the useful output is *why*, so the
  right actor can be found.

> The point of all this: independence without shared references produces noise,
> and shared references without independence produce a rubber stamp. You are
> given the same standards as the Worker and denied the same reasoning, and that
> combination is the whole mechanism.
