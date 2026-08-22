---
type: topic
status: active
projects:
  - "[[Hallmark]]"
created: 2026-08-10
tags:
  - concept-to-cloud
  - sdlc
  - delivery
  - process
---
# Hallmark - Delivery model

The model itself — what it is, how the parts interlock, and **why each piece exists**. Terms used here are reserved; see [[Hallmark - Glossary]]. The failures it is built to prevent are in [[Hallmark - Failure inventory]].

Distilled from the design sessions. The structural diagrams are in [[Hallmark - Diagrams]]; the reasoning behind every decision is in [[Hallmark - Decisions]].

> [!WARNING] First pass — structure and language only
> This is **gathering and research**, not the final documentation, and it is **pass one of three**: (1) draw out structure, aims and controlled language *(in progress)* · (2) revisit each pillar in depth · (3) **specify the application — the systems that underpin all of it, which is barely started.**
>
> Sixteen load-bearing artifacts are named across this model — catalogue, registries, records, maps, graphs — and **the storage, retrieval and lifecycle of none of them has been designed.** Nothing here is specified to build. See [[Hallmark - Backlog]] for what remains.

## Design constraints

These were established before any mechanism, and every mechanism must satisfy them.

1. **Idealistic route, not a description of today.** We design what should exist.
2. **Scale-invariant.** A colour change and a multi-year programme travel the same model.
3. **Cold-start-proof.** A team with no practice can pick it up and ship. If they can't, it's incomplete.
4. **Greenfield and brownfield both**, and they will diverge.
5. **Headcount is not a lever.** No mechanism may resolve to "hire someone". But **roles and owners are named precisely** — who fills them is a deployment detail.
6. **Shape unknown at the outset.** Research, competitor scans and PoCs are legitimate outputs.

## The foundation is the system, not the org chart

Today's teams equate to "whoever last touched the thing". The fix is not a better team structure, because that can't be bought. The foundation has to be **the artifacts, contracts, conventions and automation that persist when people rotate, change hats, or leave.** Structure lives in the repo and the pipeline, not the reporting line.

## Roles

**Role is an interface; the actor is an implementation.** An **actor** is a **human or an agent**, and **any role may in principle be held by either kind — including Decider.** One person may hold every role; so, in principle, may one agent.

```
PERSONA  ──┐                        a party the running SYSTEM serves
           ├──►  ACTOR  ──►  ROLE   ── human or agent
DISCIPLINE ┘                        a party that acts on the CHANGE
```

**Distinguished by their *object*, not by a verb.** The earlier wording — *serves* versus *builds* — never fitted its own list, because product and delivery build nothing. It also forced a client's rollout decider to be classified as a persona, putting a persona inside a flow that is otherwise discipline-driven.

**A party acts as itself, or delegates to an agent, to perform a role.** Personas are the axis the capability catalogue is built on; disciplines — designer, developer, product, technical, delivery — are the parties that act on the **change**. Keeping them apart is what stops the catalogue's sorting test degrading into *"does this give designers a new outcome?"*, which the product has no opinion about.

**The four roles therefore describe *any* action on or with the system, not only delivery actions.** An Operator restarting a service is a Worker; an Auditor reviewing logs is a Verifier. Otherwise the persona branch has nothing to attach to.

> **Role eligibility turns on access, not on actor kind.** An actor may hold a role if — and only if — it has the details that role requires. **No presumption that a human is best, or the default.** This is why the knowledge substrate cannot be a later pass: it decides who is *eligible* to act at all.

**All four roles are defined by their relationship to context.** The Worker accumulates it; the other three are denied it. That is not four separate rules — it is the clean-context principle, which used to apply only to verification, turning out to organise the whole role model.

| Role | Does | Context |
|---|---|---|
| **Worker** | Performs the required action on the work at that time | **Accumulates.** The only role that does |
| **Verifier** | Verifies the Worker's work against a standard, so a fresh view is always used. **Two outcomes only — it verifies, or it sends the work back.** A Verifier that cannot settle the question from the evidence has found the evidence insufficient, which is a failed verification and the Worker's to close. **It does not escalate** | **Denied** — never saw the doing |
| **Sentinel** | Always on. Watches for drift, staleness, cost, vulnerability, and preconditions becoming favourable. A human weekly grounding session or an agent on a shorter loop — **loop period is a declared property** | **Outside** any work session |
| **Decider** | Commits money, risk, or a client promise, from **recorded facts** in a **distinct context** | **Denied** — decides from the record |

> **The four roles, one verb each: Worker advances · Verifier confirms · Sentinel watches · Decider commits.** Names are settled. The criterion applied throughout: a role name must not imply which kind of actor holds it.

### What a role carries

A role is always **scoped to a subject** — *Worker on component X*, *Decider for client Y's rollout*. Scoped, it carries three things.

| | Is | Governed by |
|---|---|---|
| **Sufficiency** | What an actor must be able to **access** to perform this role on this subject — current release states, the edition registry, decision records, test metrics | **Enough.** Never *least* |
| **Permissions** | What the actor may **do** — merge to mainline, cut an edition, promote a characterisation test, approve a release, concede a standard. A Verifier may not write code | **Least privilege** |
| **Independence** | The **Verifier is not the Worker**, and does not hold the session's reasoning | The never-conceded `worker ≠ verifier` |

> **This is a sufficiency model, not an access-control model.** It asks *"can this actor see what it needs?"* — never *"is it prevented from seeing too much?"* A Worker and a Verifier both need the request, the requirements and the spec: **the read side is largely shared, and what differs is what they may do.**

**All three sit on the role, not the actor, and that is forced rather than chosen.** Delegation grants a role, nothing is undelegable, and eligibility turns on access. Were sufficiency carried by the *actor*, delegating a role would grant permissions without access, the delegate would be ineligible, and *"nothing is undelegable"* would be false in practice.

**A declared-but-unavailable sufficiency item makes the role unholdable.** The absence itself is an **enablement target** on the implementation backlog — not a risk. **Acting anyway is a concession**, scoped to the role-and-subject rather than to the act, and expiring. This is what gives a *discipline's* needs teeth: personas can block an edition through the catalogue, disciplines never could, and this is the mechanism that closes it without inventing a control.

### Delegation — the two rules that bound it

**A permission attaches to the role, never to the actor.** Holding the role grants the powers, which is what keeps a role a *complete* interface and two actors in the same role interchangeable. Delegation therefore reduces to **granting a role** — one mechanism, not two.

| | |
|---|---|
| **Ceiling** | **You may only delegate a role you yourself hold.** So the never-conceded absolutes cannot be routed *around* via delegation |
| **Least privilege** | An agent receives **the permissions its role needs, and no more**. *Least privilege governs what may be **done**. What may be **accessed** is sufficiency — **enough, never least**, and the two must not be confused* |

**Nothing is undelegable.** In principle the whole process may run on agent actors. When it goes wrong, **the delegating human is at fault for failing to scope correctly** — fault does not vanish, it relocates to the scoping act, which is recorded, attributable and reviewable in a way a judgement call in someone's head never was.

### What the actor model is *for* — four properties

1. The entire process can be completed by **humans only**.
2. The entire process can be completed by **agents only**.
3. It can run on **any mix**.
4. **Every agent actor holds its role by permission delegated from a human.**

Property 4 is what stops property 2 being a human-free process: an all-agent run is not unaccountable, because a human stands at every delegation. Together these are what make the model scale-invariant on the **staffing** axis as well as the work axis.

> [!WARNING] The four properties are not symmetric, and nobody expects that
> The model is **mechanically enforceable against agent actors and self-declared against human ones.** You can withhold the working session from an agent; you cannot un-show it to a human. You can supply an agent's context and check it; you cannot verify that a human read the ADR.
>
> So property 2 is **verifiable** and property 1 is **true but unverifiable** — the reverse of what any reader assumes. *Raised in round 13; owed its own decision.*

### Accountability survives an agent holding the role

Identifiability and accountability are two things, and conflating them is the trap:

- **Every actor is distinctly identifiable** — a human by email or username, an agent by model version, skill and unique id. This buys **attribution**: you can always say who decided.
- **Accountability is consequence landing on a human.** Where an agent holds the role it is **derivative** — consequence attaches to the human who **delegated** that checkpoint to that actor. Chain length is zero when a human acts directly.

A model version can be named in a log. It cannot be fired, sued, or sign a contractual assurance — and legal and contractual assurances are never conceded. **Making the delegation the accountable act** keeps the substance (a human is always answerable) without the overreach (a human must always press the button). It is also what lets one person cover a ten-person role map, which was the point.

**In a team of one, the agent Verifier is not an optimisation — it is the only thing keeping the model's core invariant alive.** One human cannot both do and verify.

## The truth spine

Built to kill the anchor failure: *a client is sold a feature that was remembered wrong.*

```
EXECUTABLE SPECS ── the only evidence
        │
        ├─ contract graph closes ──► CERTIFIED SET ──► PLATFORM EDITION
        │
        └─ capability set @ edition
                 │
     ┌───────────┼───────────────┬──────────────────┐
 CATALOGUE   CHANGELOG      CLIENT RELEASE      "WHEN DO I
 what v_n    diff between   NOTES — diff of      GET Y?"
 does        editions       THEIR two editions   target edition
                 │
        END-OF-SPRINT DOC — same diff, time-windowed
```

Three load-bearing rules:

- **A platform edition is a certified set, not a descriptive label.** A label relabels the guess; only a verified set can carry a promise. Validity is contract-graph closure — a solvable constraint problem, not a full-environment integration marathon.
- **Capability is claimable only if a passing executable spec proves it.** No spec, no claim. A hand-authored catalogue is "remembered wrong" with better formatting and a longer half-life.
- **One evidence base, many renderings.** Catalogue, changelog, client release notes, sprint doc and the sales answer are one query with different filters. They cannot contradict each other, and nobody maintains four documents.

Catalogue entries are **capability** (a persona achieves an outcome), **quality** (constrains the manner of an existing outcome), or **assurance** (true regardless of use). Personas are defined **once suite-wide** and include internal **parties** — Operator, Support, Auditor, Integrator, Administrator — which is what makes observability structurally undeferrable rather than perpetually deprioritised. *(A persona is a party, not an [[Hallmark - Glossary#Role terms\|actor]] — the two sit on different branches of the structure below.)*

## The internal spine

One door. Every signal — client request, bug, chore, security finding, sentinel alert, concession debt — enters the same queue. Separate queues guarantee internal work starves.

```
NEW ──[sift]──► ACCEPTED ──► SPECIFIED ──► PLANNED ──► BUILT ──► VERIFIED ──► COMPLETED
 │                  │
 ├─► DUPLICATE      ├─► DUPLICATE
 └─► REJECTED       ├─► REJECTED
                    └─► RETRACTED
```

**A state is achieved when its criterion is met**, and an item's position is the highest state it has reached. **States are achievements, not queues you wait in.**

**The state says where an item is, and therefore what should be done next. It never says when, or by whom.** Finding work is a separate signal — a **marker** on the item that calls it to action. Whether that is an assignee, a label or a column belongs to the application. Conflate the two and the state field quietly becomes a priority queue.

Not a waterfall. **Verified** returns work to **Built** — or **Planned**, if the approach was wrong — on a conformance failure, and to **Specified** on a currency failure. It also returns work when **the evidence does not settle the question**, because that means nothing is proving what is being claimed.

### Two axes, not one status

| Axis | Records | Values |
|---|---|---|
| **State** | Where the item is, and what is next | `New → Accepted → Specified → Planned → Built → Verified → Completed` |
| **Commitment** | What we have said, and how strongly | `Uncommitted` · `Committed` **for a named version** |

**They are independent in the middle.** An item can be `Built` and `Uncommitted` — a spike nobody promised. An item can be `Committed` for `v1.4` and still sitting at `New`. They couple only at the ends.

**Coverage is a third axis** — which clients hold it, fleet coverage, rollout percentage. Non-monotonic by design: a rollback lowers it.

Two things then compute rather than being reported:

- **Stopping.** Uncommitted ⇒ `rejected` · committed ⇒ `retracted` · published ⇒ deprecation, then withdrawal. **Nobody chooses the word**; the two axes decide it, which is *the cost of stopping is a function of how far it travelled* finally mechanised.
- **Slippage.** `Committed` names a **target** version, `Built` stamps the **actual** one, and the difference is computed.

**The track ends at `Completed` and rollout is not a sequence.** An item is either in a consumer's hands or it isn't — there is no progression to travel, only a proportion of the fleet to measure. Drawing it as states mixed two scales in one line and manufactured the very failure two-done reporting exists to prevent: a team reports *"Released"* meaning *we shipped it*, and the client hears *I have it*.

**`Completed` means the artifacts are published for consumption and the catalogue is proven to contain them** — queried and found, never reported. *"The pipeline said it published"* and *"the package is there"* are different facts, and the gap between them is where *"we shipped it"* stops being true unnoticed.

**Publishing may run ahead of verification, and that does not advance the state.** Publishing is an act; `Completed` is a state. An artifact published before verification leaves the item at `Built` **with a published artifact** — and the catalogue is generated from **verified** published artifacts, never from everything on a registry. *What is published-but-unverified must be distinguishable by whoever consumes it, or the verification gate has no teeth.*

Words retired along the way. **`Certified` survives as the act and the evidence** — certified set, certification record, certification environment — but it is not a state name. **`Operated` is gone entirely**: "live" was coverage, "in the catalogue" belongs at `Completed`, and "sentinels watching" was never a state at all. **`Shaped`** named an activity where every other state names an achievement, and **`Available`** described the artifact rather than the item — it read naturally for a capability and barely parsed for a chore.

### The track is a circuit between two persona moments

```
   ── running system ──┐                                              ┌── running system ──
  a PERSONA experiences│                                              │  a PERSONA uses it
  it and CAPTURES      ▼                                              ▲
 capture ▸ NEW → ACCEPTED → SPECIFIED → PLANNED → BUILT → VERIFIED → COMPLETED ▸ delivered
 (blurred entry)      └──────── DISCIPLINES act on the change ────────┘        (blurred exit)
```

**Capture is not *acting on the change*** — it is the blurred **entry**, before the item exists, which is why it is free and open to anyone. **Delivery is the blurred exit**, after the work is published and before anyone uses it.

A persona raising a runtime bug report does **not** thereby become a discipline. The test is **holding a role in the flow** versus **supplying a signal to it**. Disciplines may also capture, mid-pipeline; that changes nothing.

This is why the one door sits where it does, and why two-done reporting exists at all: **the exit is blurred**, so *published* and *in their hands* have to be reported separately. It is also the loop a client-raised issue travels to re-enter at `New`.

- **Capture is free — meaning no ceremony.** No quality bar, no minimum detail, no approval, no penalty for raising something that turns out to be nothing. *It does not mean no fields*: a tracker asking for a title is not ceremony. Charge for capture and ideas go back into people's heads.
- **The sift is what achieves `Accepted`** — it assigns the type, or verifies the one the item arrived with, then rules duplicate, rejected or accepted. **Accepting is not committing.**
- **`Specified` is the only open-ended state**, and the only gate that catches *"we built exactly what was asked and it wasn't what they needed"*. Discovery, research, competitor scans and PoCs live there and nowhere else. It is also the highest-leverage place for agents, being the most human-expensive state with no machine verification behind it.

## Design — three activities, no new state

"Design" is retired as a bare word. It carried three readings, and a team told to "do design" performs exactly one of them — always the technical one — while believing it performed all three. That is the anchor failure's β mode (*we built what was asked and it wasn't what they needed*) relocated from sales into engineering.

| | Settles | Attaches to |
|---|---|---|
| **Product design** | What a persona sees and does | **Specified** — it is how you reach "outcome stated" |
| **Domain design** | Entities, invariants, boundaries, and the words for them | **No state** — a standing versioned artifact that changes *revise* |
| **Technical design** | Structure, services, data flow, technology | **Planned** — it is *the activity that produces the plan*, and the plan **is** the declared touch set |

**No `Designed` state exists, deliberately.** It would be a stage-gate — the first thing a stretched team skips — and one that most work legitimately skips anyway, which makes it a box to tick rather than a state. It would also break scale-invariance: a colour change would have to pass through it. Instead, **the depth of all three is derived from touch**, exactly as rigour is.

**Domain design is the load-bearing one**, and until now it was an orphan — required by the capability-claim rule, by touch derivation and by the controlled-vocabulary deliverable, owned by none of them.

> **A domain model must be a dependency, not a document.** As prose it is a wiki page people are asked to remember. As OpenAPI, schemas and contracts it is a descriptive model, versioned with the build and impossible to contradict without the build noticing.

Three guards, because the first two leave a residual: **contracts guard shape · executable specs guard meaning · a lint against the controlled vocabulary guards names.** The third catches the case where two components call one concept `matchId` and `fixtureId` — both contract-valid, both spec-passing, graph closes, nothing *wrong*, and the ubiquitous language quietly gone.

### Two named components

The practice names two **components**; it does not name repos. *(No collective noun — `role` is reserved for what an actor takes.)*

| Component | Holds |
|---|---|
| **Domain model** | Meaning — entities, invariants, contracts, schemas. A component like any other; its artifact is descriptive models rather than executable code |
| **Standards-enforcing dependency** | Rules in force. Not documentation of a standard — the *implementation* of it, such that not conforming fails the build |

> **A standard is a minimum viable requirement — a floor you may exceed.** *"You can improve on a standard; you cannot improve on a guideline."* `Guideline` is a retired word here, not because it is ambiguous but because it is **too weak**: it reads as optional when the thing it names is obligatory.

**A standard has two enforcement routes, and which applies is *derived*, not chosen.**

| Route | When |
|---|---|
| **Build-enforced** — its home is the enforcing dependency | Conformance is **mechanically checkable**. Preferred |
| **Verifier-enforced** — a Verifier checks evidence against the stated standard | Conformance is **not** mechanically checkable. You can lint a PR description for *presence*, never for *adequacy* |

Deriving the route rather than choosing it is what stops *"a Verifier will check it"* becoming the lazy default. **The second route is not a return to failure #10**: a Verifier-enforced standard is not remembered, it sits in that role's **sufficiency** set and is *supplied at the moment of acting*. That is the difference between a wiki page and an input.

> [!NOTE] Today's holders — an example, not the model
> These two components are realised today by [[Platform]] and [[Framework]]. Named as **illustration of where we do this today**; per *practice vs application*, the components are durable and the repos are one replaceable instantiation. **The named position is the interface, the repo is the implementation** — the same rule that governs people, applied to components. *(`Role` is reserved for what an actor takes.)*

## Sizing — rigour is derived, never estimated

> **Rigour is determined by what the work touches, not by how big it is.**

The **touch set** is derived from the spec-to-code coverage map and declared as intent by the author; a mismatch between them is the trigger to summon a verifier — on surprise, not on schedule.

This is scale-invariant by construction. A change touching nothing carries no apparatus *by rule*, not by someone's judgement. A multi-year programme accretes apparatus proportionally and automatically.

**Two corollaries:**

- **The label on the work has zero authority.** A "chore" bumping a shared library outranks a "feature" adding a tooltip. Feature/bug/chore describes *why* work exists; it must never determine *how much rigour applies*. Labels lie under pressure; touch doesn't.
- **Uncomputable touch attracts maximum rigour.** Untested code is covered by no specs, so a naive derivation returns an empty touch set — pointing the incentive exactly the wrong way. If we can't compute it, we assume the worst.

### Brownfield path

The maximum-rigour rule is correct in greenfield and paralysing in brownfield. Agreed route: **risk map first, then ratchet.**

1. **Risk map** — one-off classification of high-blast-radius areas, standing in for real coverage. **Scaffolding, not architecture: its defined end state is empty.**
2. **Ratchet** — any file touched must acquire spec coverage before the change lands. The estate converts along the paths people actually walk, which is where the risk is. Cost is proportional to activity, not codebase size.
3. The ratchet consumes the risk map. **Risk map remaining** is a real health metric.

AI drafting the missing coverage is what makes the ratchet's tax survivable — without it this approach probably fails. **But:** reading source yields *characterisation tests* (what the code does, bugs included), never *specifications* (what it should do). **Intent is not in the source**, so promotion requires **a source of intent from outside the code** — the original request, the shaped outcome, the client conversation. That is a rule about *access*, not about actor kind: an actor holding only the source may not promote, human or agent alike. Skip it and you will sell your bugs as features, with evidence backing them.

## Coordination — the forward face

Rigour scales with touch automatically; **coordination does not.** A multi-year programme needs sequencing and forward commitment that a single change does not, and the evidence model is silent about the future by design.

### Levels, and item types

```
INITIATIVE        a body of intent spanning capabilities and time — the roadmap unit
  └─ CAPABILITY       the unit of client-visible outcome
```

Initiatives **do not nest**. Phasing is expressed as **capabilities committed for named versions**, not as extra hierarchy. A three-year programme is one initiative whose capabilities are committed across many versions — which needs no new construct, and denies estimation theatre the depth it feeds on.

**Everything entering the door is an *item*, and every item carries a type.**

| Type | Is |
|---|---|
| **Capability** | Something a user can now do, that we may promise, and that a passing spec proves. Stated as an **outcome a persona achieves**, never as the thing built |
| **Fix** | Correcting something previously completed. **Attaches** to an existing capability rather than creating one |
| **Chore** | **Upkeep that changes no capability** — documentation, build scripts, tooling, dependency updates. It may still affect the release: **the type says why the work exists, and touch says how much rigour it carries** |
| **Question** | A request for information. The only type outside commitment — it is answered and closed |
| **Initiative** | Has **no spec of its own**, so no state of its own; its position is the aggregate of its children |

The **sift** assigns the type, or verifies the one the item arrived with, so nothing downstream has to guess.

**`Change` is retired** as a level: it was naming both *a unit of work* and *anything that alters the system*, and the two are not the same thing. Named in our own terms rather than Jira's — epic / story / task are client-varying vocabulary and belong outside the boundary, mapped by the intake adapter.

> **Open — what sits below a capability.** When one capability is too large for one item. The unresolved part: **is a sub-item a checklist entry, or a real item with its own state and commitment?** A plan step is the first; work handed to a second person is the second.

### The assertion/evidence boundary

```
UNCOMMITTED ──► COMMITTED (for a version) │ COMPLETED ──► deprecated ──► withdrawn
└──── ASSERTED by an accountable Decider ──┘  └───── DERIVED from evidence ─────┘
```

**`Deprecated` is the notice that withdrawal will happen** — the capability keeps working for a defined period, then stops. Without it, *"capabilities leave only by withdrawal"* is satisfied by an **internal** record while the client discovers the removal by its not working. The window's *length* is an application concern; that a deprecation exists at all is not.

> **Both are deferred and unresolved.** The hard part is that **removal happens at a finer grain than a claim does** — dropping CSV export while keeping PDF is neither a withdrawal nor a deprecation of *"a client can export invoices"*. It is a **revision of the claim**, and the model has no way yet to say *"the revision removed something someone relied on"*.

This is how the model commits to a future it cannot prove without reopening the anchor failure:

- **Before the line**, no evidence can exist. Claims are **asserted** by an accountable **Decider** at a stated confidence tier, and the tier governs the licence to speak outside the building.
- **After the line**, claims are **derived** from passing specs and **no actor may assert them** — of either kind.
- `delivered` is per client, not global — the same two-done split as everywhere else. Something may be `Completed` platform-wide and undelivered to most of the fleet.

**Stopping has three names because it is three different conversations**: `rejected` (never told anyone — free) · **`retracted`** (*we said we would and we won't* — costs a conversation) · `withdrawn` (*you had it and it's gone* — costs trust). **Which one applies is derived** from state and commitment together, never chosen. *You do not withdraw an assertion — you retract it.*

### The roadmap is a design input, not just a sales artifact

If a capability under construction will later be subsumed by a committed one, that changes how it is built **today**. The roadmap must therefore be readable at Shape and Specified, not only in commercial conversations — and the shaping agent's contradiction check runs against *committed future* capabilities as well as existing ones.

### One control, four applications

Every retreat from a stated position has the same shape — attributable, recorded, scoped, expiring where applicable, client-visible, debt-generating:

| Instance | Retreating from |
|---|---|
| **Withdrawal** | A capability we said exists |
| **Concession** | A standard we said we meet |
| **Retraction** | A promise we made about the future |
| **Hotfix** | The single line we said everyone runs on |

A cold-start team learns one control, not four.

## Structure — platform, product, suite

Three nouns on **two axes**. Conflating them is what made "platform" ambiguous enough to need splitting.

| | | Axis |
|---|---|---|
| **Platform** | The foundation — base, principles, consistent tooling. Extended by new capabilities. Products are built on it | Deployment |
| **Product** | A thing built on the platform. What a client actually uses | Deployment |
| **Suite** | A collection of features delivering an overarching cross-product outcome — *buying and purchasing*. **Many-to-many with products** | Capability |

Platform and product are **versioned, certified, deployed**. A suite is **never deployed — only described.** That's why suite↔product can be many-to-many without anything breaking, and it hands the catalogue the grouping axis it lacked: personas group capabilities by *who*, suites group them by *what coherent outcome they add up to*.

### Editions are fractal

The platform certifies its own contract-graph closure. Each product certifies **against a named platform edition**. A client's customisation does the same. Closure holds at every level rather than at one — the same shape as client repos running the same spine, and ADRs inheriting the same altitudes.

```
COMPOUND VERSION  =  platform edition + product versions + client version
```

> **The platform edition is the compatibility key.** Without it, *"can product A v3 ship with product B v7?"* is a pairwise question — N² across the product set, growing with every product added. With it, one check on one value.

**Client-facing identity stays the product version.** The platform edition is *derived* from it, and the distance from there to current is what tells a client what they must move to — the same instinct as two-done reporting, where clients are shown what they hold and internal truth is looked up rather than recited.

### Target is a floor

A product or customisation declares *"requires edition E or later"*. A deployment resolves to `max(floors)`.

- A **pin** would force every product to re-release on every edition — self-defeating when cadence must be short.
- A **range** needs ceilings nobody maintains accurately, and a stale ceiling blocks deployments that would have worked.
- The **floor is safe by evidence, not by discipline**: contract-graph closure already computes whether an older consumer is satisfied by a newer provider, so backward compatibility is a checked property rather than a promise a team makes.

It also makes a breaking change **precise instead of blanket** — the graph names exactly which floors must rise, rather than forcing a fleet-wide refresh. **Irreconcilable floors are a concession**, not a new control.

## Release and rollout

- **Fix forward.** Fixes land on the current line and clients move forward. No maintenance branches, no back-porting — the single most effective structural defence against the estate forking. Price: a fix is never just a fix, it's an upgrade.
- **Cadence and fix-forward are one decision.** The further behind a client sits, the more change a forward fix drags. Long cadence makes fix-forward unacceptable under incident pressure.
- **Currency is driven by us, not elected by the client** — but **the mandate is earned**: only legitimate to the degree upgrading is provably safe and near-frictionless. Automated verification on client environments is the price of the authority.
- **Change windows bound *when* an edition lands, never *whether*.**
- **Hotfixes are out-of-band and structurally concessions** — recorded, attributable, time-boxed, carrying a convergence obligation to the next change window.
- **Configuration is a contract.** An edition declares the config it requires, so "can client X take v2026.08?" is computable rather than discovered during a failed deploy.

### Landed vs verified — two objects, not two attributes

**Landed** = an **edition** has been deployed into an **environment**. A deployment fact, binary, per environment. **Verified** = the **feature work** has been confirmed. Keeping them apart is what stops *"we deployed"* and *"it works"* being reported as one claim.

### Stages — named for the act, not the environment

```
VERIFICATION  → a Verifier confirms the change against the client's REAL
                configuration, data and upstream integrations
       ↓
ACCEPTANCE    → the CLIENT accepts: "this is what I asked for"
       ↓        an external Decider — may refuse, may not answer
LIVE          → in use
```

> **The invariant: live use *actions* a verified and accepted change — it never *discovers* one.**

**How many environments exist, and what they are called, is an application concern.** Today three boxes carry these stages — dev is alpha and breakable, staging is beta/UAT, production is live — but **a small team may have exactly one.** Naming the practice after a box count would push an application concern into the practice and break scale-invariance outright.

**This verification is not redundant against certification.** A certification run uses a known dataset and a declared configuration profile; this stage runs against **their** data and **their** upstream integrations, catching integration reality a synthetic profile cannot reproduce. It is also where automated verification on client environments lives — **before live, never in it**, which is the less contentious contractual position as well as the more useful one.

> **With three environments the stages separate in *space*. With fewer, in *time*. With exactly one — which is also live — in neither**, because the change sits in the box the client is using before it is accepted. Separation must then come from **exposure control: dark shipping behind flags** — the same mechanism parked as the answer to the matchday freeze.

### Automate to the threshold of consequence

The pipeline performs everything mechanically possible and halts at the exact point **a consequence must be accepted rather than computed**. Whether a human stands there, or an agent under a valid scoped delegation, is a deployment choice — not part of the process. The Decider's job is reduced to *a decision*, never to work. This is the primary structural answer to headcount not being a lever.

Its artifact is the **rollout readiness report**, computed per client per edition:

```
CLIENT: <client>              TARGET EDITION: v2026.08
  contract closure ............ ✓ guaranteed by certification
  config requirements ......... ✗ 2 gaps: OAUTH_SCOPE, TAX_REGION
  data migrations ............. ✓ 1 required, reversible
  quality regressions ......... ✓ none affecting held capabilities
  open concessions ................ ⚠ 1 expires in 4 days
  freeze window ............... ✗ matchday 2026-08-15
→ everything computable, computed. The Decider makes one call.
```

## Controls

- **Withdrawal** is the only route a capability may leave the catalogue. A spec deleted without a withdrawal record **fails the build** — silent disappearance is the anchor failure running in reverse.
- **Concession** is the only route to ship a known compromise: attributable to a **named actor** with a human accountable through delegation, recorded artifact, scoped, expiring, **client-visible**, automatically debt-generating. It doesn't prevent the Friday-6pm compromise; it converts an invisible compromise into a tracked liability. **Open concession count is the first real health metric.**

### Never conceded

```
· contract graph closure — conceding it breaks a client who never consented
· legal and contractual assurances
· the withdrawal record
· worker ≠ verifier
· promotion of a characterisation test to a specification
```

A short absolute list is learnable by a practice-less team. A long list of "shoulds" is ignored wholesale.

## Verification and acceptance — two acts, not two degrees

**`Verify` is retired as a bare word.** It was carrying two different acts.

| | Is | Whose act | Can it be refused? |
|---|---|---|---|
| **Verification** | Evidence against a **stated standard** | A **Verifier** | No |
| **Acceptance** | *This is what I wanted* | A **Decider** | **Yes — and it can go unanswered** |

Nobody gathers evidence when a client says *yes, that's what I asked for*. **Client sign-off is therefore an acceptance, not a verification** — which is what makes its two awkward properties coherent rather than anomalous, since only a judgement can be refused or ignored.

**Standing habit instead of new vocabulary: verification always names its object** — the change, the deployment, the feature. Those are one act pointed at different things, not three meanings.

**Consequence for the never-conceded `worker ≠ verifier`:** it binds wherever the act is *verification*, so **the actor verifying a change must never be the one who built it.** The model was silently breaching this wherever *"developers verify"* was read as *the developer who wrote it*.

### What verification requires

- **Clean context** — the verifier never saw the doing. Absolute.
- **Shared references** — pointed at the same standards, ADRs and prior decisions as the worker. *Independence without shared context produces noise; shared context without independence produces a rubber stamp.*
- **Conformance** — did it match what was asked?
- **Currency** — *is what was asked still right*, given what changed while the work was in flight? The check almost nobody does, and the one that catches expensive failures.

### Recorded fact vs session context

A Decider decides from **recorded facts** and is denied the **working session**. The line:

> **A recorded fact is an artifact deliberately authored or computed for durable use by others. The incidental exhaust of producing it is session context.**

Spec, touch set, test results, certification record, readiness report, commit message, PR description — **facts**. An **ADR** is a fact too, *even though it contains reasoning*, because it is deliberately authored as a durable artifact for others. Agent reasoning traces, session logs, and the thread where two people argued about approaches — **session context**. *Reasoning is not categorically barred; **incidental** reasoning is.*

**Facts are *as-at*** — recorded facts *at the time they are read*. That is the currency check generalised, and it is what makes accountability assessable at all: fault attaches to failing to scope a delegation correctly, which cannot be judged without reconstructing what was visible to that actor when it acted.

## Measurement — two kinds, and only one may be a target

**Goodhart's law bites on *proxies*, not on measurement.** A measure with no **distance** between it and the goal is safe to target — *"make page loads faster"* is not a proxy for anything, it is the thing.

| | Is | May it be a target? |
|---|---|---|
| **Quality** | A constraint on the manner of a capability, **backed by a passing executable spec**, client-facing | **Yes.** No distance exists — the spec *is* the definition, so re-defining it is a visible catalogue revision, not a quiet re-baseline |
| **Health metric** | A **proxy** for how the *practice* is doing — open concessions · risk map remaining · unconverged hotfixes · cost attribution · single-holder counts · throughput when it is designed | **No.** It may **summon attention**; it may never be the target |

> **Open concession count is the sharpest exposure in the model.** Target it and concessions stop being *raised*, not *needed* — restoring exactly the invisibility the concession exists to destroy. The metric would eat the mechanism it measures.

**A targeted quality carries a paired counter-metric**, because the failure mode is always *optimise the measure, lose the thing*: speed paired with correctness, coverage paired with assertion strength, throughput paired with defect escape. **The fastest possible page is a blank one.**

## Telemetry — two kinds, different audiences

**`Telemetry` is retired as a bare word.** It was naming two things with different audiences, different homes and different mechanisms.

| | Observes | Serves | Home |
|---|---|---|---|
| **Product telemetry** | The running system | **Operator**, Support, Auditor — personas | The **capability catalogue**. An ordinary capability that ships as a feature, and can block an edition |
| **Process telemetry** | The delivery of change — what is deployed where, where each change sits, when it will be actioned | **Disciplines**, and the roles they take | **None yet. Building one is the substantive work** |

**Three of the four roles cannot function without process telemetry.** A **Decider** is defined as deciding from recorded facts — unrecorded, there is no Decider, only a person guessing. A **Sentinel** watches recorded facts by definition. A **Verifier** requires *what changed while the work was in flight*. Only the **Worker** is independent, being the one role that accumulates its own context.

> **Process telemetry is not an addition to the model. It is the substrate the role model already assumed and never named.**

**It is one source of sufficiency, not all of it.** Equally inputs, and not obtainable from telemetry: the **code and pull request**, **tickets and discussion**, **previous review cycles**.

**Telemetry is facts; health metrics are proxies computed over them.** The **two-done rule** is process telemetry pointed outward at a client.

> [!NOTE] The split corrected a mis-credit
> Failure #6 — *telemetry and visibility are poor; hard to trace and replicate issues locally* — was credited to the **Operator persona**. But that pain is a **developer's**, and a developer is a **discipline**, not a persona. The mechanism on the books did not serve the party the failure was about. The inventory's original ten are **primarily developer-focused**, which only became visible once personas and disciplines were separated.

## Where AI fits

| Point | Agent role |
|---|---|
| **Specified** — drafting | **Worker.** Duplicate detection, prior art, contradiction checks against existing capabilities, competitor scans, drafting the persona, outcome and **acceptance criteria**, and **predicting what the work will touch so cost is visible before commitment** |
| **Specified** — confirming | **Verifier**, confirming the acceptance criteria are adequate. `worker ≠ verifier` binds, so whoever drafted them may not confirm them. *The first place an agent gatekeeps a human's judgement about what a user needs* |
| **Planned / Built** | **Worker**; drafting characterisation tests for the ratchet |
| **Verified** | **Verifier** — clean context, same references, may overrule on currency. **Two outcomes only: it verifies, or it sends the work back. It does not escalate** |
| **Any point** | **Decider** — commits work to a version, accepts. **Escalates to another Decider** when the recorded facts do not settle the question. *With one actor there is nobody to hand it to: the work stops, or the decision is a concession* |
| *(no state — always)* | **Sentinel** — standing loops on drift, staleness, cost, vulnerability, and on **preconditions becoming favourable**. Not attached to a state; runs over everything, continuously |

An agent reviewing its own output is **not** independence. Separation must be real: different context, different model, or a deterministic gate. Otherwise you've automated self-certification, which is worse than no check because it produces a green tick.

## Mentions

![[mentions.base]]
