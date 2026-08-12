# Verifying `Built → Verified`

**The canonical verification.** Two checks, and the second is the one almost
nobody does.

| | Asks |
|---|---|
| **Conformance** | Does it match what was asked? |
| **Currency** | **Is what was asked still right**, given what changed while the work was in flight? |

Currency is the check that catches the expensive failures — work that was built
exactly to spec while the spec quietly stopped being the right target.

## What you get, and what you must not have

| Must have | Must not have |
|---|---|
| The item · the acceptance criteria · the spec · the plan and what it touches · the change itself · the standards · any decision records · **what else changed while the work was in flight** | **The session in which the work was done** |

One thing is withheld for one reason: whoever sat through the work knows which
parts were rushed and cannot un-know it. Everything else is shared **on purpose** —
independence without shared references produces noise.

## Conformance

Read the PR, not a description of it.

```bash
gh pr view <n> --json title,body,files,commits,state,mergeable
gh pr diff <n>
```

**Every acceptance criterion must have been driven, and the record must say how.**
This is the distinction that matters most here: a criterion *satisfied* and a
criterion *driven* are different claims. Automated ones should name the command
that ran; documented ones should say what was done and what was observed.

Three things that look like evidence and are not:

- **"Inspected and looks correct."** An assertion, not a driving. Send it back.
- **A passing spec that was never seen to fail.** It proves the spec runs, not
  that it discriminates.
- **A criterion satisfied because current behaviour matches it.** That is a
  characterisation test — *what the code does, bugs included* — and promoting one
  to a specification is never conceded.

**The previously failing spec must now pass.** That transition is the item's core
evidence. If the spec was changed as well as the code, look closely: a spec edited
to match the implementation has stopped being a specification.

**Check what the change actually touched against what the plan declared.** A
mismatch is the trigger to summon a verifier *on surprise rather than on
schedule* — you are already here, so what it means for you is that undeclared
touch was not covered by the rigour the item carried.

## Currency

Nothing in this repository produces process telemetry, so assemble it:

```bash
# what landed on main since the work was specified
git log --oneline --since='<date the item reached Specified>' origin/main

# items that moved in the same window
gh issue list --state all --search 'updated:>=<date>' --json number,title,labels,state
```

Then ask the question that matters: **would this item have been specified
differently if it were written today?**

Three things commonly invalidate a target while work is in flight:

- **A decision was taken elsewhere** that contradicts the approach or the outcome.
- **Another item shipped** something that subsumes, duplicates or conflicts with
  this one.
- **The persona's need moved** — recorded on the item, in a linked item, or in a
  decision record.

**Currency failure returns the item to `Specified`**, not `Built`. The work was
right; the target moved. Sending it back to `Built` would ask a Worker to fix
something that is not broken.

> **This evidence is thin and you should say so.** Commits and item updates catch
> what was recorded. They do not catch what was decided in conversation, which
> today is most of it. If your currency check rests only on *"nothing obviously
> contradicts it"*, record that as the limit of what you checked rather than as a
> pass.

## Ruling

| | |
|---|---|
| **Verified** | Every criterion driven with stated evidence, the spec passes having previously failed, and nothing that changed in the window invalidates the target |
| **Sent back — conformance** | → `Built`. A criterion not driven, driven by assertion, or not holding |
| **Sent back — approach** | → `Planned`. It conforms to the plan and the plan was wrong |
| **Sent back — currency** | → `Specified`. The target moved |
| **Sent back — evidence** | → `Specified` if the criteria do not cover it · `Built` if they do and were not driven |

**Do not verify a merged PR.** If the change was already merged, the gate had
nothing to block and you are recording an opinion after the fact. Say so.
