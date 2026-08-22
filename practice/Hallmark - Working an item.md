---
type: topic
status: active
projects:
  - "[[Hallmark]]"
created: 2026-08-11
tags:
  - concept-to-cloud
  - sdlc
  - delivery
---
# Hallmark - Working an item

**The loop. This is the page to keep open.**

Setting the repository up is a one-off — see [[Hallmark - Enable a repository]].

```
NEW ──[sift]──► ACCEPTED ──► SPECIFIED ──► PLANNED ──► BUILT ──► VERIFIED ──► COMPLETED
 │                  │
 ├─► DUPLICATE      ├─► DUPLICATE
 └─► REJECTED       ├─► REJECTED
                    └─► RETRACTED
```

## The loop

| State | You do | You produce | Done when |
|---|---|---|---|
| **New** | Write it into the door. Anything, from anywhere, no ceremony — but **write it down** | An item | It is in the door |
| **Accepted** | **Sift it.** Give it a type, or check the type it arrived with. Then rule: duplicate, rejected, or accepted | A typed item you have agreed to do | You have agreed it is to be done |
| **Specified** | Write **what would make this right** — steps, metrics or markers. Then write it **as a spec that fails**. Get someone else to say the criteria are adequate | Acceptance criteria · a failing spec | Somebody other than you agrees the criteria are good enough |
| **Planned** | Write **the actions**, in order. Sub-items are fine | A plan — and, because it lists what you will change, a declaration of what this touches | Following the plan would make the spec pass |
| **Built** | Do the work. **Drive every acceptance criterion** — run the automated ones, follow and record the documented ones. Stamp the version it landed in | Working code · results for every criterion · a version | Every criterion has been driven and holds |
| **Verified** | Hand it to someone **who did not do the work**. They check it matches, and that it is **still the right thing to have built** | A verification | They confirm both |
| **Completed** | Publish. Then **go and check it is there.** The catalogue regenerates from the specs that passed | A published artifact · an updated catalogue | You found the published thing, by looking |

**A state is reached when its line is true.** You are at the furthest one you have reached — you do not queue at them.

## Two things every item carries

| | |
|---|---|
| **State** | Where it actually is — the table above |
| **Commitment** | `Uncommitted`, or `Committed` **for a named version** |

**They move independently.** Something can be `Built` and never promised — that is a spike. Something can be `Committed` for v1.4 and still sitting at `New` — that is a promise you have not started.

**Slippage is free information:** committed for `v1.4`, landed in `v1.6`, slipped two. Nobody has to report it.

## State is not a work queue

**The state says where the item is, and therefore what should be done next. It does not say when, or by whom.**

Finding work is a separate thing: **a marker on the item calls it to action.** What that marker is depends on the system you are using — an assignee, a label, a column, a notification. The practice only requires that one exists and that it means *act on this*.

Keeping them apart matters. If you find work by scanning states, the state field quietly becomes a priority queue, and *"where is this?"* and *"what should I do next?"* stop being answerable separately.

**Two markers, and actors pull.**

| Marker | Means |
|---|---|
| **`ready`** | A human is invited to pick this up |
| **`ready-for-agent`** | An agent is invited to pick this up |

**The actor that takes it assigns itself.** That self-assignment is the claim — it is what stops two actors working the same item, and it is what makes the work attributable afterwards.

**The markers are invitations, not permissions.** They do not change who *may* hold a role — that turns on having what the role requires, never on whether the actor is a person or a program. They exist because **agents poll and humans browse**, and an agent polling needs a query that returns only work somebody wanted an agent on. **An item may carry both markers**, and for ordinary work it usually should.

> **Watch this one.** If interesting work is consistently marked `ready` and tedious work `ready-for-agent`, the two labels quietly become a human/machine division of labour — which is the exact thing the actor model exists to prevent. The markers are about **whose attention is being called**, not about what either kind of actor is capable of.

> **OPEN — who sets the marker.** The natural answer is *whoever completes a step marks what is next*, which needs no scheduler. Not yet decided.

## Stopping

You do not choose the word. **The word is decided by how far it got and whether you promised it.**

| It stops | And it was | So it is | Which costs |
|---|---|---|---|
| Before you accepted it | Uncommitted | **Rejected** | Nothing. Nobody was told |
| After you accepted it | Uncommitted | **Rejected** | Nothing. Still nobody was told |
| After you accepted it | **Committed** | **Retracted** | A conversation — *we said we would, and we won't* |

**Duplicate** is separate — it means *this is the same as that*, at any point.

## Questions are different

A question runs `New → Accepted → Answered → Closed` and is **never committed to a version.** Nothing is promised and nothing is built.

**How it resolves tells you something:**

| You find | What it means |
|---|---|
| The answer existed and was easy to find | It should not have reached the door. **Your docs are not being found** |
| The answer existed only in someone's head | **Write it down.** That is a chore or a capability, raised from the question |
| The answer did not exist | You have found something **nobody has decided.** That is a decision, not work |

**A lot of questions arriving is a signal about the system, not about the people asking.**

## Skipping a step

You will skip steps. Three different things hide behind that, and only one is a problem.

| | What happened | What it costs |
|---|---|---|
| **Nothing to do** | The step was **trivially true** — a one-line chore has nothing to plan and touches almost nothing | **Nothing.** You did not skip anything |
| **You went anyway** | It **was not** true and you moved on — no spec, no plan, nobody checked it | **A concession.** Recorded, scoped, expiring, and it counts against you until it is cleared |
| **You just moved it** | Nothing was recorded at all | Visible — an item that reaches `Completed` with no trail is obviously one |

**The difference between the first two is how much it touches**, not what type it is. A chore that touches everything is not trivial just because it is a chore.

> **Skipping is never *allowed*.** A step you are permitted to skip is a step nobody does. A concession lets you get on with it while keeping the step real — and keeps the count of times you did honest.

## When you are the only person

You cannot verify your own work, and with one actor there is nobody else. **That is recorded once when the repository is enabled, not argued about per item.**

What you still do:

- Write the acceptance criteria **before** you build. That is the whole defence — you are checking against a target you fixed in advance, not against what you remember wanting.
- Re-drive every criterion deliberately at `Built`.
- Check conformance **and** currency at `Verified`, even though it is you doing it.

**A fresh agent session is the cheapest second actor there is** — give it the item, the criteria, the spec, the plan, the change, and the standards. **Do not give it the conversation in which you built the thing.**

> Even then: it has clean context and **you do not.** You know which bit you rushed. You will steer it without meaning to. That is the honest limit of working alone, and it is why a second person is worth more than any tooling.

## What an actor needs in order to act

**Every act requires access to a defined set of information.** What is in the set is decided by **what is being done** and **what it is being done to** — never by who is doing it.

| Both must hold | |
|---|---|
| **Defined** | The set is stated in advance, not improvised each time |
| **Accessible** | The actor can actually reach every item in it, at the moment of acting |

**Where any of it lives is not this process's concern.** Today it might be documents alongside the code and an item in a tracker. Tomorrow it might also be test reports, telemetry, a client's environment. **The process requires only that the set is defined and reachable** — how many places it comes from, and how it is fetched, is a matter for whatever you have built.

**If something in the set cannot be reached, the act cannot be performed.** That is not a rule being broken; it is a role that cannot be held, and the fix is to make the thing reachable. Doing it anyway is a concession.

### The set is a standard, and standards stack

**The process defines a floor.** Every enabled repository has at least that set, which is what lets an actor arrive anywhere and know what to fetch without first learning local rules.

**Layers may add to it.** A wider standard, then narrower ones — and an actor **merges them** to get its set. At one repository there are two layers; more arrive as the estate grows.

| Because a standard is a floor | |
|---|---|
| **Merging is union** | No precedence to define, no ordering to get wrong, no conflict resolution to build |
| **A layer may add or constrain, never contradict** | A narrower layer that contradicts a wider one is a **defect to fix**, not a conflict to resolve |
| **A standard must be expressible as a floor** | One written as a ceiling — *"no more than…"*, *"exactly…"* — cannot stack, and cannot take part |

> **Watch this one too.** Layers only ever add, so the merged set only ever grows. Nothing prunes it. Left alone for long enough, the required set becomes large enough that roles start becoming unholdable for ordinary work — and the concession count floods at exactly the moment it should be quiet. **Reviewing what a layer still needs is real work that nothing currently forces.**

### What an act must produce is a standard too

The same shape and the same rules: **defined**, **layered**, a **floor**, merged by union.

A layer may require a note recorded on the item, a document produced, a proof-of-concept built on a branch — whatever that layer needs to exist afterwards.

**One act's required outputs are the next act's required inputs.** Define both and the chain is guaranteed to run: there is no handover to negotiate, and nothing to check where two acts meet. Define only the inputs and you can have a role requiring something nobody was ever obliged to produce.

**What counts as an output:** an artifact **deliberately authored or computed for durable use by others.** The incidental exhaust of producing it is not — an agent's reasoning trace, a session log, the conversation where two people argued about approaches. *Reasoning is not barred; **incidental** reasoning is.* A decision record is full of reasoning and is an output, because it was written for someone else to read.

**Outputs stack too**, so the same growth warning applies: every layer that adds a required output adds work to every act, permanently, and nothing prunes it.

## What a Verifier gets

| Must have | Must not have |
|---|---|
| The item · the acceptance criteria · the spec · the plan and what it touches · the change itself · the standards · any decision records · **what else changed while you were working** | **The session in which the work was done** |

**One thing is withheld, for one reason:** whoever sat through the work knows which parts were rushed and which arguments were already had, and cannot un-know it. **Everything else is shared on purpose** — independence without shared references produces noise, and shared references without independence produce a rubber stamp.

## When verification sends it back

| It failed on | Goes back to | Because |
|---|---|---|
| **Conformance** — it does not match what was asked | `Built`, or `Planned` if the approach was wrong | The target was right; the work missed it |
| **Currency** — what was asked is no longer right | `Specified` | The target moved |
| **The evidence does not settle it** | `Specified` if the criteria do not cover it · `Built` if they do and were not driven | Nothing is proving what is being claimed |

## Escalation belongs to the Decider

**A Verifier does not escalate.** It has two outcomes: it verifies, or it sends the work back.

If a Verifier cannot settle the question from the evidence, **the evidence is insufficient** — and producing sufficient evidence is the Worker's job. That is a verification that fails, not a reason to summon somebody. It is also the model working as intended: if nothing proves the claim, the claim is not proved.

**A Decider escalates.** When a Decider cannot make the decision from recorded facts, it hands it to **another Decider** — who may be a person or an agent, depending on who holds the role here.

**Escalation is a handoff within the same role**, not a change of role and not a severity ladder. The question does not get easier; it gets someone else.

**With one actor there is nobody to hand it to.** There are exactly two moves, and no third:

| | |
|---|---|
| **The work stops** | Usually the right one. A decision the facts do not support is not improved by being made sooner |
| **You decide anyway** | That is a **concession** — recorded, scoped, expiring, and counted. You have knowingly decided on less than the decision required |

*At one actor, "escalate" and "concede" are the same move seen from either side. Do not read "hand it to another Decider" and go looking for one.*

## Two things worth knowing

**Publishing can happen before verification, and that is fine** — it just does not move the item. Publishing is an act; `Completed` is a state. An artifact published before it is verified leaves the item at `Built` **with a published artifact**. The catalogue is generated from **verified** published artifacts, not from everything on the registry.

*But:* if publishing routinely runs ahead of verification, verification becomes a formality nobody blocks on. **What is published-but-unverified has to be distinguishable by whoever consumes it** — a prerelease, a separate channel, a tag.

**A metric in your acceptance criteria has to be the thing itself, not a stand-in for it.** *"Response under 200ms"* is fine — the measure is the goal. *"Improve throughput"* is not — target it and you will optimise the number and lose the thing.

## Mentions

![[mentions.base]]
