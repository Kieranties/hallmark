---
type: topic
status: active
projects:
  - "[[Hallmark]]"
created: 2026-08-10
tags:
  - concept-to-cloud
  - glossary
  - vocabulary
  - sdlc
---
# Hallmark - Glossary

The controlled vocabulary for [[Hallmark]]. Every term here is **reserved** — it means this and only this within the model.

**Standing rule:** any word caught carrying two readings is retired on the spot and replaced with two unambiguous ones. Retired words are recorded at the bottom so the ambiguity isn't reintroduced later by someone who wasn't in the room.

Living document — terms are added and adjusted as the model develops.

> [!NOTE] Research-stage
> **Gathering and research, not the final documentation.** The normative practice documentation is a downstream deliverable derived from this material.

## Practice and application

The two halves of what this project produces. **Practice = interface, application = implementation** — the same shape as *role = interface, holder = implementation*.

| Term | Definition |
|---|---|
| **Practice** | The documentation. **Normative and technology-agnostic** — how and *why* the model works. The source from which any implementation is derived: *"do we use GitHub, and if so how?"*, *"can we move to Jira?"*, *"we're switching to Go — what does a template repo look like now?"* **Durable.** |
| **Application** | The machinery — template repos, pipelines, agents, registries. **One technology-specific instantiation** of the practice. **Replaceable** without touching the practice. |
| **The model must be executable** | A practice-less team does not learn the model and then comply with it. They use tooling that embodies it and learn by being unable to do the wrong thing easily. The decisions are the *specification of the machinery*, not onboarding material. |

Consequence: **Hallmark is an engineering project, not a process-design project.** The output is code, templates and pipelines, with the practice as its normative source.

## Structural terms

The three nouns that describe what we ship. They sit on **two different axes**, and conflating them is what made "platform" ambiguous in the first place.

| Term | Definition | Axis |
|---|---|---|
| **Platform** | The **foundation** — the base, the principles, and the consistent tooling. New capabilities are added to it to extend what it offers. **Products are built on it** for a stable base. | Deployment |
| **Product** | A thing built on the platform. What a client actually uses. | Deployment |
| **Suite** | A **collection of features delivering an overarching cross-product outcome** — *buying and purchasing*, for instance. **Many-to-many with products**: one product may belong to several suites, and products may enable cross-suite communication. | Capability |

**Platform and product are deployment concepts** — versioned, certified, deployed. **Suite is a capability concept** — a way of grouping what the catalogue claims into a coherent commercial story. A suite is never deployed; it is *described*.

> Consequence: the [[#Capability catalogue terms\|Capability catalogue]] gains the grouping axis it lacked. Personas group capabilities by **who**; suites group them by **what coherent outcome they add up to**. *"Do you do X?"* stops being answered from a flat list and becomes *"yes — that's in the Purchasing suite, these capabilities across these products."*

## Capability catalogue terms

| Term | Definition |
|---|---|
| **Capability** | An outcome a named [[#Capability catalogue terms\|Persona]] can achieve. Claimable **only** if a passing executable [[#Evidence about the product\|Specification]] proves it. The unit of client-facing truth. |
| **Quality** | A constraint on the *manner* of an existing capability — latency, throughput, availability. **Qualifies** a capability; never stands alone. A quality can be broken, and a regression is a client-affecting change. |
| **Assurance** | A property true of the platform regardless of whether anyone uses it — "no PII reaches logs", "data at rest is AES-256". No persona, no outcome, but client-relevant (procurement, audit). |
| **Sorting test** | Does it introduce a new outcome for a named persona? → capability. No, but constrains an existing outcome? → quality. Neither? → assurance. |
| **Capability catalogue** | The generated set of capabilities, qualities and assurances at a given [[#Release terms\|Platform edition]]. **Never authored** — always rendered from evidence. *Never called "the catalogue" bare — that word is retired (see [[#Retired words]]); the sibling is the [[#Certification environment\|Edition registry]].* |
| **Persona** | **A party the running *system* serves.** That is the whole test — and the counterpart, [[#Parties, actors, permissions and delegation\|Discipline]], is a party that acts on the **change**. Defined **once suite-wide**, never per client. Includes internal parties — Operator, Support, Auditor, Integrator, Administrator — as first-class alongside end users. Not a job title; one human may be several. **A party that *builds* the platform is a [[#Parties, actors, permissions and delegation\|Discipline]], never a persona** — admit builders here and this table's sorting test starts asking whether a change gives designers a new outcome, which the product has no opinion about. **The list is open**; personas may vary by where the model is deployed. |

### Measurement — two kinds, and only one may be a target

**Goodhart's law bites on *proxies*, not on measurement.** A measure with no **distance** between it and the goal is safe to target — *"make page loads faster"* is not a proxy for anything, it is the thing. A measure standing in for something unmeasured is not.

| | Is | May it be a target? |
|---|---|---|
| **[[#Capability catalogue terms\|Quality]]** | A constraint on the manner of a capability, **backed by a passing executable [[#Evidence about the product\|Specification]]**, client-facing | **Yes.** No distance exists — the spec *is* the definition, so re-defining it is a visible catalogue revision, not a quiet re-baseline |
| **Health metric** | A **proxy** for how the *practice* is doing — open concessions · risk map remaining · unconverged hotfixes · cost attribution · single-holder counts · throughput *(when it is designed — no throughput model exists)* | **No.** It may **summon attention**; it may never be the target |

**Sorting test: is there an executable spec proving the outcome, or is the number standing in for something unmeasured?**

> **Open concession count is the sharpest exposure in the model.** Target it and concessions stop being *raised*, not *needed* — which restores precisely the invisibility the [[#Control terms\|Concession]] exists to destroy. The metric would eat the mechanism it measures.

**A targeted quality carries a paired counter-metric**, because the failure mode is always *optimise the measure, lose the thing*: speed paired with correctness, coverage paired with assertion strength, throughput paired with defect escape. **The fastest possible page is a blank one.**

Even a genuine goal-metric leaks through its **operational definition** — measuring DOM-ready instead of time-to-usable, or the median while p99 rots, reopens the proxy distance one level down.

## Hierarchy and roadmap terms

Three levels, deliberately. Named in our own terms, **not** in Jira's — epic/story/task are client-varying vocabulary that belongs outside the boundary.

| Term | Definition |
|---|---|
| **Item** | Anything that enters the door and travels the [[#The state track\|state track]]. Always one of five [[#Item types\|types]]. *Replaces `change`, which was carrying both "a unit of work" and "anything that alters the system".* |
| **Initiative** | A body of intent spanning multiple capabilities and time. The roadmap unit. Does **not** nest — nesting is where estimation theatre breeds. Also an **item type**: it has no work of its own, and its position is the aggregate of its children. |
| **Capability** | The unit of client-visible outcome. See [[#Capability catalogue terms]]. Also an **item type**. |
| **Phasing** | Expressed as **capabilities committed for named versions**, never as an extra hierarchy level. A multi-year programme is one initiative whose capabilities are committed across many versions. |
| **The roadmap is a design input** | Not merely a commercial artifact. If a capability under construction will later be subsumed by a committed one, that changes how it is built *today*. The roadmap must therefore be visible at [[#The state track\|Specified]], not only to sales. |

> **OPEN — what sits below a capability.** When one capability is too large for one item. The unresolved part: **is a sub-item a checklist entry, or a real item with its own state and commitment?** A plan step is the first; work handed to a second person is the second.

### Commitment

**What we have said, and how strongly.** An axis in its own right, moving independently of [[#The state track\|state]].

```
UNCOMMITTED ─────► COMMITTED  (for a named version)
                   └─ ASSERTED by a Decider ─┘
```

| Term | Definition |
|---|---|
| **Uncommitted** | No promise has been made. The default, and not a deficiency — most work is uncommitted for most of its life. |
| **Committed** | **The work is to be completed for a named version.** Speakable to a client. An **assertion** by an accountable [[#The four roles\|Decider]] — no evidence exists yet, so someone is answerable for it. |
| **The assertion/evidence boundary** | Before an item is [[#The state track\|Completed]], no evidence can exist, so claims are **asserted** by an accountable Decider at a stated confidence tier. After it, claims are **derived** from passing specs and **no actor may assert them** — of either kind. This is how the model commits to a future it cannot prove without reopening the anchor failure. |

**Independent of state.** Something can be `Built` and `Uncommitted` — a spike nobody promised. Something can be `Committed` for `v1.4` and still sitting at `New`.

> **`Explored` and `Scheduled` are [[#Retired words\|retired]].** `Explored` duplicated the state track's `Specified`; `Scheduled` duplicated `Committed`, which already names a version. Collapsing them is what made commitment two values instead of a second lifecycle.

**Neither commitment nor state:**

| Term | Definition |
|---|---|
| **Delivered** | A *specific client* is running a version containing it. **Coverage** — per client, non-monotonic (a rollback lowers it), and a **third axis** rather than a value on either of the other two. |
| **Deprecated · Withdrawn** | Notice, then removal, of something already published. **Deferred and unresolved.** The hard part: **removal happens at a finer grain than a claim does** — dropping CSV export while keeping PDF is neither a withdrawal nor a deprecation of *"a client can export invoices"*, it is a **revision of the claim**, and the model has no way yet to say *"the revision removed something someone relied on"*. |

### Promotion voices

Who must speak before an item advances. **[[#Parties, actors, permissions and delegation\|Disciplines]] exist to guarantee the questions get asked, not to guarantee different people ask them** — one holder may cover several, but each voice must be genuinely consulted.

| Transition | Required voices |
|---|---|
| capture → `New` | **Anyone** captures. No ceremony, no quality bar |
| `New` → `Accepted` | **Delivery** sifts — assigns or verifies the type, then rules |
| `Accepted` → `Specified` | **Product** owns the outcome; **Technical** must be heard. Feasibility is mandatory, never merely consulted — committing without a technical voice is how failure #1 happens upstream |
| `Uncommitted` → `Committed` | **Delivery + Technical + Product** — sequencing, architectural fit, decomposition |

### Stopping

**The cost of stopping is a function of how far the thing travelled** — and **which word applies is derived, never chosen**, from the two axes read together.

| Stopped | Commitment | Word | Costs |
|---|---|---|---|
| Before `Accepted` | Uncommitted | **Rejected** | Nothing — nobody was told |
| After `Accepted` | Uncommitted | **Rejected** | Nothing — still nobody was told |
| After `Accepted`, before `Completed` | **Committed** | **Retracted** | A conversation — *we said we would, and we won't* |
| After `Completed` | — | **Deprecated → Withdrawn** | Trust. **Deferred — see [[#Commitment]]** |

| Term | Definition |
|---|---|
| **Rejected** | Never crossed into commitment and never told to a client. **Free to stop.** Requires only a recorded *reason*, which then feeds duplicate detection at the sift — *"we rejected this in 2025 because X; has that changed?"* |
| **Retracted** | Was `Committed`; a client was told, and now **it will not be built**. **Costs a conversation.** A recorded retreat. *The forward face is **asserted** by a [[#The four roles\|Decider]], and an assertion is not withdrawn — it is **retracted**.* |
| **Duplicate** | **Orthogonal to the rest** — *this is the same as that*, reachable at any point, regardless of commitment. Linked to the original and closed. |
| **Withdrawal** | Was published — it existed and was provable. **Costs trust.** A recorded retreat. **Deferred, see [[#Commitment]]** |

### Preconditions

Phasing is normally *target editions on capabilities* — date-shaped. But some commitments are gated on a **maturity condition** rather than a date, and those can never reach `scheduled`. Without a mechanism they park at `committed` with the condition living in someone's head, which is how *"we said we'd revisit that"* becomes the most common form of organisational amnesia.

**A commitment may carry a precondition**: recorded on the capability, watched by a [[#The four roles\|Sentinel]], raising a signal at the one door when it fires — at which point the capability becomes schedulable.

| Kind | The Sentinel | Example |
|---|---|---|
| **Threshold precondition** | **Evaluates and grants.** The condition is a fact; there is nothing to decide | *"Four editions since E12"* · *"zero contract-closure concessions for two consecutive quarters"* |
| **Prompt precondition** | **Raises, never grants.** Measurable signals are attached to a judgement; movement summons the [[#The four roles\|Decider]], who answers | *"Is it time for a plugin model?"* |

**The measurable thing is the trigger to ask, not the answer.** That separation is what stops the signal being gamed — hitting a number buys a conversation, never a commitment. The split turns on **whether there is anything to decide**: a threshold is a fact, a prompt is a judgement — and a judgement requires the [[#The four roles\|Decider]] role, which a Sentinel *qua* Sentinel does not hold. *(Originally justified as "a machine cannot be accountable"; that reason no longer holds — see [[#Role terms]].)*

> **Floor: you must be able to name at least one signal that would change the answer.** If you cannot, there is no precondition — there is a [[#Stopping\|rejection]] with better manners.

This is the model's **only forward-looking Sentinel.** Every other watches degradation — drift, staleness, cost, vulnerability. This one watches for a condition becoming favourable.

### Recorded retreat

Any retreat from a stated position is one control with four applications. A cold-start team learns the pattern once.

**Attributable · recorded as an artifact · scoped · expiring where applicable · client-visible · debt-generating.**

| Instance | Retreating from |
|---|---|
| [[#Stopping\|Withdrawal]] | A capability we said exists |
| [[#Control terms\|Concession]] | A standard we said we meet |
| **Retraction** | A promise we made about the future — moving backwards from `committed`/`scheduled`. If it was ever told to a client, the retreat must be too. |
| [[#Release terms\|Hotfix]] | The single line we said everyone runs on |

`Rejected` is deliberately **not** a recorded retreat — nothing was ever asserted outside, so there is nothing to retreat from.

## Variation terms

**The core product is never forked for a client.** Governance rule, not a preference.

**The plugin model does not exist today.** Until it does, variation has exactly **two** sanctioned forms.

| Term | Status | Definition |
|---|---|---|
| **Core product** | — | One codebase, one line. Never forked, never client-branched. |
| **Configuration** | **Preferred** | Variation of core behaviour without code. Client difference becomes **data**, not divergence. |
| **Separate product** | **Permitted** | A wholly distinct product for one client — e.g. a mobile app calling the core backend. Architecturally it is simply **another contract consumer**, already a node in the contract graph. No new mechanism required. |
| **Extension point** | **Deferred** | A named, contracted seam where client code plugs into the core. Requires a plugin model that **does not exist**. If ever built it must be **uniform across all repos** — N plugin mechanisms is N truths. |
| **Convergence over duplication** | — | When a second client wants an existing customisation, it does **not** get copied — it graduates into the core as configuration. Copying is how N truths are created. |
| **Undeclared bespoke** | — | The actual failure mode. Bespoke work that is named, contracted and enumerable is survivable; variation that emerged organically and nobody can list is what destroys the single catalogue. |

### Configuration is always behaviour

Configuration can change runtime or deploy-time features, semantics and access. It is **never** operational trivia and always requires checking and verification. What differs between the two kinds is the **route**, not whether one exists.

**Sorting test: does the value change what a persona can do or perceive?**

| Term | Route |
|---|---|
| **Environment configuration** | Binds the product to its surroundings — secrets, API keys, gateway whitelisting, cross-account linking, cloud access. Ops-owned, environment-specific per client. **Does not travel the spine**; verified as deployment verification. |
| **Feature configuration** | Selects or shapes behaviour the client experiences — default colours, currency defaults. Changes what the catalogue claims for that client. **Travels the spine**, and travels the stages — **verification** then **acceptance**, before live use — with [[#Customer sign-off\|customer acceptance]]. |

### White-label baseline

**The referent of the capability catalogue.** The core at its recommended out-of-the-box configuration — as close to zero custom configuration as possible, barring environment specifics like cloud access.

Without it, *"what does v2026.08 do?"* is quietly ambiguous: do what, configured how? With it:

```
CAPABILITY CATALOGUE  =  capabilities of the WHITE-LABEL BASELINE at edition E
CLIENT                =  baseline at their edition + their feature-config delta
```

Every client profile is a **delta from baseline**. This is what makes "what does this client have" generated rather than remembered.

**The baseline is a configuration, not a running environment.** It is realised on demand — see below.

### Certification environment

Provisioned **on request**, never always-on.

```
REQUEST  provision edition E with known data set D
   ↓
DEPLOY   deterministic, from nothing
   ↓
UPGRADE  exercise the real upgrade path, not a fresh install
   ↓
VERIFY   specs · contracts · config profile · qualities
   ↓
RECORD   on success, emit a CERTIFICATION RECORD
   ↓
DESTROY  the environment was a means, never an asset
```

**Always-on is not merely unnecessary — it is harmful.** A shared, mutable, user-accessible environment destroys determinism: bad data accumulates, users collide, and the system is reported broken when it is not. Verification against mutable shared state is not verification.

| Term | Definition |
|---|---|
| **Certification record** | The durable evidence that edition E passed against data set D. **The catalogue is generated from records, not from a live environment.** |
| **Edition registry** | Which editions exist and can be provisioned, each with its certification record. *(Distinct from the capability catalogue — see Retired words.)* |
| **Known data set** | A versioned, deterministic seed. Load-bearing rather than convenient: without it, none of the above is reproducible. |
| **Data registry** | The registry of datasets available for provisioning, alongside the edition registry. Each entry carries **provenance** (synthetic · anonymised · curated), a **currency strategy**, and a **classification**. |
| **Dataset classification** | Governs which environments a dataset may be deployed to. **Anonymised ≠ unrestricted** — re-identification risk never fully disappears, and a demo shown to one client must never run on data carved from another. |
| **Currency strategy** | How a dataset stays valid. Synthetic and anonymised favour **regeneration**; curated favours **migration**, because the scenario's meaning lives in the data. Migrating the curated set is itself a test of the migrations — a dataset that fails to migrate should block certification, because a migration that can't handle reference data can't handle production. |

**A certification record must name `(edition, dataset@version)`.** "Edition E certified" alone is not reproducible.

Dataset *creation* is a separate domain problem, planned as work. The touch set surfaces it early — *"this capability needs a dataset that doesn't exist"* becomes visible at Shape rather than discovered at certification.

**On-request provisioning also serves PoCs and demos** — and a demo running on a provisioned certified edition **is** the product, closing a route by which clients are shown something that doesn't quite exist. It makes cost attributable, too: who provisioned what, and why.

### Customer sign-off

An **external Decider** — the first accountable party in the model who is not ours. Required for feature-configuration changes reaching a client.

**Customer sign-off is an *acceptance*, not a verification** (D146). That is what makes its two awkward properties coherent rather than anomalous: an acceptance is a Decider judging *this is what I asked for*, and a judgement can be **refused** or go **unanswered** — which no verification can.

Unlike internal Deciders, an external one **can refuse and can be unavailable**, so anything depending on their signature needs a defined path for both.

### Pre-window verification

A client's configuration profile is tested and verified **before** their [[#Release terms\|Change window]] opens, so the window is used for actioning a verified change rather than discovering an unverified one.

### Configuration state space

Moving variation into configuration trades a code-divergence problem for a **state-space problem**: a change can be provably safe under one client's settings and broken under another's, with an identical contract in both cases.

> **Certify against the fleet's *real* profiles, not the theoretical space.** Every possible combination is effectively infinite; every *live* one is countable — one per client. Each client's actual configuration is a named, versioned test profile, and the certified set is verified across all of them. Cost is linear in clients, not exponential in flags.

**Unverified consumer** — a client- or third-party-built product calling the API. The contract graph only closes over repos that participate, so these need a published-contract-plus-deprecation-policy answer rather than a build-time one.

### Two-layer catalogue

"What does this client have?" becomes computable rather than remembered:

```
PLATFORM CATALOGUE   capabilities of the core at their edition   (universal)
      +
CLIENT PROFILE       their configuration values                  (per client)
      +
CUSTOMISATION        their bespoke capabilities, specs and all   (per client)
──────────────────────────────────────────────────────────────
      =              precisely what that client has
```

The model is **fractal** — client repos run the same spine, the same evidence rule and the same controls as the core.

### Contract graph extends into client repos

A customisation declares which extension points it consumes, at which version. **A core change that would break a client customisation must fail at build**, exactly like a service contract breach. Without this, "certified" means only "the core is fine" and failure #4 returns through the plugin door.

## Knowledge substrate terms

**Knowledge is a versioned dependency, not a wiki.** The failure it prevents is a document describing a version that no longer exists — the anchor failure in prose form.

| Term | Definition |
|---|---|
| **Component documentation** | ADRs, KBs and repo-specific documentation, living in the repo and **versioned with the build**. May reference the documentation of its dependencies, resolved by version — the same graph as code. |
| **Documentation edition** | Built by **composing** component documentation at edition build into a single accessible surface. Necessary because **documentation visibility is distinct from code visibility** — a client may read what they may not see. |
| **Cross-cutting documentation** | Authored at edition level. Describes emergent interactions no single repo can know — *"enabling feature X causes feature Y to light up"*. |
| **Descriptive model** | Machine-readable documentation: OpenAPI, schemas, contracts, domain models. Documentation is not only prose. |
| **Emergent capability** | A capability that exists **only in composition**, owned by the **edition** rather than any component. No single repo can prove it; its specs run across components, which edition-level certification already does. |
| **Client documentation** | Client-specific documentation living in the **client repo**, versioned with it, overlaying the documentation edition. May **add or constrain, never contradict** — a contradiction with the platform catalogue is a defect, and the generated portions can be checked for it automatically. |
| **Compound version** | What a client is actually running — **three parts**, since editions are fractal: `platform edition + product versions + client version`. Their documentation surface is the composition of all layers. |
| **Target platform edition** | The platform edition a product — or a client customisation — declares it is built against. **The compatibility key**: co-deployability is decided by this single value rather than by comparing products pairwise. Client-facing identity stays the *product version*; the platform edition is **derived** from it, and the distance from it to current is what tells a client what they must move to. |
| **Audience classification** | Internal · client-facing · public. Applied to the composed documentation surface, for the same reason datasets carry one. |

```
CLIENT DOCUMENTATION     client repo, client version
      ↑ overlays
DOCUMENTATION EDITION    platform edition, cross-cutting
      ↑ composed from
COMPONENT DOCUMENTATION  per repo, versioned with build
```

The layering mirrors the [[#Two-layer catalogue]] — the same shape recurring rather than a new mechanism per problem.

Of a documentation edition's four parts, **three are generated and one is authored**:

```
generated ← capability catalogue      from specs
generated ← API / contract reference  from descriptive models
generated ← composed component docs   from repos at their versions
AUTHORED  ← cross-cutting narrative   the emergent interactions
```

## Evidence terms

### The state of a claim about our own model

**"Gap" is retired** — it read two ways with opposite remedies. A decision being *closed* says nothing about whether the assumption beneath it is true.

| Term | Definition |
|---|---|
| **Undesigned** | No decision exists. Remedy: **decide**. Costs a conversation between people already in the room; carries no external dependency and cannot come back false. |
| **To enable** | Decided as an aim; the mechanism does not exist yet. Remedy: **build it**. Per D1 the model is idealistic, so this is the *normal* state of most of it — an enablement target belongs on the implementation backlog, never on a risk register. |
| **Unproven** | A decision resting on something **outside our control** — what a client's contract says, whether a client will accept a behaviour, whether an external party responds. Remedy: **find out**. This is the only one of the three that can come back **false** and invalidate decisions downstream. |
| **Finding out** | Four distinct activities with four different costs: **read** (a document we possess but have never opened — near-free), **investigate** (look at what already exists), **scan** (competitor or prior art — bounded), **prove** (build something to see whether it works — most expensive). |

### Evidence about the product

| Term | Definition |
|---|---|
| **Specification** | An executable statement of what the system **should** do. A promise. **Intent is not present in source code**, so a specification can never be derived from code — it must be confirmed against **a source of intent from outside the code**: the original request, the shaped outcome, the client conversation. *A human reading source recovers intent no better than an agent does; they recover it from elsewhere.* Where **no** intent source exists anywhere, promotion is impossible for any actor and the [[#Evidence about the product\|Characterisation test]] stays one. |
| **Characterisation test** | An executable statement of what the code **currently** does, bugs included. A refactoring safety net. **Not** a promise, and never a catalogue entry. |
| **Promotion** | The act of turning a characterisation test into a specification, by confirming that current behaviour is **intended** behaviour. A [[#The four roles\|Decider]] act and **never conceded** — you may not skip it. *Not* restricted to human actors: a Decider may be an agent acting under [[#Parties, actors, permissions and delegation\|Delegation]], and the delegating human is accountable for the scoping. |
| **Contract** | The interface a service **provides** or **consumes**, declared explicitly and versioned. |
| **Contract graph closure** | The condition where every consumer's expectation in a set is satisfied by a provider in the same set. Makes certification a solvable constraint problem rather than a full-environment integration exercise. |

## Release terms

| Term | Definition |
|---|---|
| **Platform edition** | A named, versioned **certified set** of service versions verified to work together and promotable as a unit. Not a descriptive label — a label cannot carry a promise. |
| **Certified set** | A combination of service versions whose contract graph closes and whose specs pass. The only thing permitted to reach a client environment. |
| **Fix forward** | Urgent fixes land in the **current platform line** and the client moves forward to the edition containing them. There are no maintenance branches and no back-porting. A client receiving a fix therefore receives everything else that landed since their edition — the fix is an *upgrade*, not a patch. |
| **Hotfix** | An **out-of-band** release, outside a client's agreed [[#Release terms\|Change window]]. A last resort. Structurally a [[#Control terms\|Concession]]: attributable, recorded, and carrying a [[#Release terms\|Convergence obligation]] — the client must be brought fully current no later than their next change window. Time-boxed, recorded divergence, never open-ended. |
| **Change window** | The period a client has agreed updates may be applied in. Per client. Bounds *when* an edition lands, never *whether* it lands. |
| **Convergence obligation** | The mandatory return to the current line following a hotfix. Deadline is the client's next change window. Tracked and debt-generating, exactly like a concession. |
| **Currency target** | All clients on the latest edition within X days. **X is SLA-derived and per client** (D100) — it is read out of the contract, not chosen. *Values unknown: no SLA has been read, so nobody can state X for any client today.* May flex per client according to their change window, but the target is a standing obligation, not a preference. |
| **Urgency class** | The rollout obligation implied by the *nature* of a change. **Derived, not negotiated** — in the same way rigour is derived from touch — so urgency stops being set by whoever is loudest. `CRITICAL`: known vulnerability, data loss, outage, **and equally business, monetary or customer loss** — impact is not only technical. `HIGH`: a defect affecting a capability or quality the client holds. `NORMAL`: everything else. |
| **The mandate is earned** | Core principle. Currency is driven by us, not elected by the client — but that standing is only legitimate to the degree upgrading is provably safe and near-frictionless. The right to insist is bought with automated verification on client environments and the [[#Release terms\|Rollout readiness report]]. |
| **Edition cadence** | How frequently editions are cut. Coupled to [[#Release terms\|Fix forward]]: the further behind a client sits, the more change a forward fix drags with it. Long cadence makes fix-forward unacceptable under incident pressure, so cadence must be short. |
| **Config contract** | The configuration an edition *requires* of a client environment, declared by the edition. Makes "can client X take edition E?" computable rather than discovered during a failed deploy. Same graph as service contracts, different edge type. |
| **Rollout readiness report** | The per-client, per-edition computation of everything mechanically knowable before deployment: contract closure, config gaps, data migrations, quality regressions, open concessions, freeze windows. Presented to a [[#The four roles\|Decider]] as a single go/hold call. |
| **Automate to the threshold of consequence** | Core principle. The pipeline performs everything mechanically possible and halts at the exact point **a consequence must be accepted rather than computed**. A Decider's job is reduced to *a decision*, never to work. Whether a human or a delegated agent stands there is a deployment choice. The primary structural answer to headcount not being a lever. |
| **Development status** | Where work sits on the change track: `Captured → Available`. Global, client-independent. |
| **Deployment status** | Whether a *specific client environment* has the edition containing the work, and which version. Per client. |
| **Two-done rule** | Clients are shown **both** statuses, with the release version stated explicitly. Reporting only development status manufactures the anchor failure; reporting only deployment status makes throughput hostage to client upgrade appetite. |

## Work and sizing terms

| Term | Definition |
|---|---|
| **Touch set** | The set of capabilities, qualities, assurances and contracts a change affects. May be empty, may be large. **Derived** from the spec-to-code coverage map; **declared** by the author as intent. |
| **Touch mismatch** | Derived touch set exceeds declared. Means the change reached further than intended — the trigger for summoning a verifier. Surprise, not schedule. |
| **Rigour** | The apparatus a piece of work must carry. Derived from the union of its touch set's demands. **Never** from effort, story points, t-shirt size, or the work's label. |
| **Uncomputable touch** | No coverage exists, so the touch set cannot be derived. Attracts **maximum** rigour, never minimum — otherwise the least-verified code attracts the least care. |
| **Risk map** | A hand-authored classification of high-blast-radius areas in a brownfield estate, standing in for a real coverage map. **Scaffolding, not architecture** — its defined end state is empty. |
| **Ratchet** | The rule that any file touched must acquire spec coverage before the change lands. Converts the estate along the paths people actually walk. Consumes the risk map. |

## Design terms

**"Design" is retired as a bare word.** It carried three readings with different owners, artifacts, triggers and spine positions. Left undivided, a practice-less team performs exactly one of them — always the technical one — and believes it has performed all three.

| Term | Settles | Natural artifact |
|---|---|---|
| **Product design** | What a [[#Capability catalogue terms\|Persona]] sees and does — the shape of the outcome itself | Interaction and flow; acceptance criteria stated in persona terms |
| **Domain design** | The model of the business — entities, invariants, boundaries, and the words used for them | Domain model; the controlled vocabulary for that domain (D36) |
| **Technical design** | The structure that realises it — services, data flow, contracts, technology choice | **ADR** |

**Domain design is the load-bearing one.** It is required by three decisions and owned by none: [[#Capability catalogue terms\|Capability]] claims (D15) and [[#Work and sizing terms\|Touch set]] derivation (D21) both depend on capabilities and code sharing a vocabulary, and D36 already makes a controlled vocabulary per domain a cross-cutting deliverable. Doing only technical design is failure #1's β mode — *we built exactly what was asked and it wasn't what they needed* — relocated from sales into engineering.

### Where design attaches

**No new spine state.** A `Designed` state would be a stage-gate (D9) that most work legitimately skips — and a state most work skips is a checklist item people learn to tick. It would also break scale-invariance outright: a colour change would have to pass through it.

| | Attaches to | Because |
|---|---|---|
| **Product design** | **Specified** | It is *how* you reach "outcome stated". `Specified` already houses discovery, research, competitor scans and PoCs |
| **Technical design** | **Planned** | It is **the activity that produces the plan** — and the plan, by listing what will be changed, **is the declared [[#Work and sizing terms\|Touch set]]** |
| **Domain design** | **No state** | A standing versioned artifact that changes *revise*. It behaves like a [[#Evidence about the product\|Contract]], not like a deliverable |

**Depth of all three is derived from touch, never fixed** — the same rule as [[#Work and sizing terms\|Rigour]], and scale-invariant for the same reason.

### Conditioning the domain model

Expressed as prose, a domain model is a wiki page people are asked to remember — failure #10. Expressed as OpenAPI, schemas and contracts it is a [[#Knowledge substrate terms\|Descriptive model]]: generated, versioned with the build, resolvable as a dependency, and impossible to contradict without the build noticing. **A domain model must be a dependency, not a document.**

| Guards | Mechanism |
|---|---|
| **Shape** | Contracts and descriptive models generated from the domain model |
| **Meaning** | Executable [[#Evidence about the product\|Specification]]s — a spec asserting the old semantics fails when the meaning shifts |
| **Names** | Descriptive models **linted against the controlled vocabulary** at build |

The third exists because the first two leave one residual. Two components using different words for one concept — `matchId` and `fixtureId` — are both contract-valid and both spec-passing; the graph closes and nothing is *wrong*. There are simply two words for one thing, which is precisely the ubiquitous-language failure D36 exists to prevent.

### ADR vs standard — two artifacts, opposite lifecycles

| | Is | Lifecycle | Example |
|---|---|---|---|
| **ADR** | The **record of a choice** — alternatives weighed, one taken, consequences expensive to reverse | **Immutable and dated.** Superseded, never edited | *"We chose OpenTelemetry with this envelope over vendor SDKs and bespoke logging, because…"* |
| **Standard** | The **rule now in force** — no alternatives, only conformance. **A *minimum viable requirement*: a floor you may exceed** | **Current.** No history worth reading, only a present state | *"Every HTTP request carries these attributes"* |

> **A standard is a floor, not a ceiling** — a minimum viable requirement you may exceed. *"You can improve on a standard; you cannot improve on a guideline"* — which is why `guideline` is a [[#Retired words|retired word]] here: it reads as optional.

**A standard has two enforcement routes, and which applies is *derived*, not chosen.**

| Route | When | Preferred |
|---|---|---|
| **Build-enforced** — the standard's home is an **enforcing dependency** | Conformance is **mechanically checkable** | **Yes** |
| **Verifier-enforced** — a [[#The four roles\|Verifier]] checks evidence against the stated standard | Conformance is **not** mechanically checkable — you can lint a PR description for *presence*, never for *adequacy* | Only where the first is impossible |

Deriving the route rather than choosing it is what stops *"a Verifier will check it"* becoming the lazy default. Same shape as [[#Release terms\|Automate to the threshold of consequence]]: the machine does everything it can, and something else picks up exactly where it cannot.

> **Why the second route is not a return to failure #10.** A principle in a *document* is something people are asked to remember. A Verifier-enforced standard is not remembered — it sits in that role's **[[#What a role carries|sufficiency]]** set and is **supplied at the moment of acting**. That is the difference between a wiki page and an input, and it is why D112's original absolute — *"a standard's home is an enforcing dependency, not a document"* — could be softened without losing what it was protecting.

### What triggers an ADR

**One artifact, two detection paths.** The split is in how the obligation is *noticed*, never in what gets written.

| | Who notices | If you don't write it |
|---|---|---|
| **Derived floor** | **The machine** — the [[#Work and sizing terms\|Touch set]] includes a [[#Evidence about the product\|Contract]] | **Build fails.** A contract is binding on others and expensive to reverse by definition, so no judgement is required |
| **Judgement ceiling** | **A human** — a genuine alternative existed *and* reversal is expensive, with no contract touched | **Nothing.** It is simply lost |

The floor is what survives 6pm on a Friday; the ceiling catches technology decisions the touch set cannot see. **Floor for the unmeasurable half: if you cannot name what you would have to undo, reversal is not expensive.**

| Change | ADR? | |
|---|---|---|
| Alter a published message contract | **Yes** | Derived — machine-caught, unskippable |
| Read model in Mongo rather than Postgres | **Yes** | Judgement — real alternative, expensive reversal |
| Rename a private method | **No** | Alternatives existed; reversal is free. The code is the record |
| Use the enforcing dependency's outbox helper | **No** | **No genuine alternative — the standard mandates it** |

> **A standard is never re-decided per component.** A consumer of an enforcing dependency made no choice and owes no ADR; the ADR justifying the standard exists once, in the component that enforces it. Without this rule every repo carries an ADR restating a decision made elsewhere — N truths in documentation form.

### Where ADRs live

ADRs inherit the documentation altitudes. **The domain model is a component, not a level.**

| Level | Lives in | Scope |
|---|---|---|
| **Component** | The repo, versioned with the build (D83) | That component alone. *[[#Design terms\|The domain model]] and a product service are both instances* |
| **Edition** | Authored at edition level (D85) | Emergent, cross-component |
| **Client** | The client repo (D90), part of the [[#Knowledge substrate terms\|Compound version]] | One client |

> **Placement rule: an ADR lives at the narrowest level that includes everyone who must not contradict it** — where *includes* means **reachable along declared dependency edges**, not *lives in the same repo*.

Citation along a dependency edge is legitimate — that is D83 working. Citation **across** the graph, between siblings with no edge between them, is the misplacement signal, and it is computable off the dependency graph exactly as [[#Evidence about the product\|Contract graph closure]] is.

This matters because placement determines **visibility**, and visibility determines whether the agent doing the work ever loads it. An ADR at the wrong level is not misfiled — it is *structurally invisible* to everyone who needs it. **The default drift is downward**: left to choose, an author picks their own repo every time, because it is the only option requiring no coordination.

### Specified and Planned — the full criteria

**`Specified` settles *what*. `Planned` settles *how, and in what order*.** Splitting them is what stopped one state carrying both the outcome and the approach.

| `Specified` — achieved when |
|---|
| **Acceptance criteria exist** — steps, metrics or markers that identify the requirement has met its needs. See [[#Acceptance criteria]] |
| **A failing executable spec exists**, expressing those criteria. It fails because nothing has been built |
| **A [[#The four roles\|Verifier]] has confirmed the criteria are adequate.** Presence is build-enforced; adequacy is not mechanically checkable, so it is Verifier-enforced — and `worker ≠ verifier` binds, so whoever wrote them may not confirm them |
| Persona named · outcome stated · problem understood — of which the criteria are the **evidence**, not a restatement |

| `Planned` — achieved when |
|---|
| **The sequence of actions is known** — written down, not held in someone's head |
| **Revisable** — it is expected to change. A plan that cannot be revised is an estimate wearing a plan's clothes |
| **Actionable such that the result asserts the spec** — following it makes the failing spec pass. If it might not, the plan is not finished |
| **How each check will be driven is known** — automated, or documented steps a person follows |
| **An [[#What triggers an ADR\|ADR]] is recorded** where the plan meets the ADR trigger |

> **The plan is the declared touch set.** Listing the actions — *modify X · add Y · alter contract Z* — declares what the change reaches. No separate artifact is required.
>
> **The *derived* touch set, and reconciling declared against derived, is a separate thing** — it needs a spec-to-code coverage map, and it is the surprise detector rather than the declaration. It arrives when there is enough estate for surprises to hide in.

## Role terms

Role is an **interface**; the actor is an **implementation**. A role may be held by one person, several, or an agent. One person may hold every role.

### The structure — two symmetric branches

```
PERSONA  ──┐                        a party the running SYSTEM serves
           ├──►  ACTOR  ──►  ROLE   ── human or agent
DISCIPLINE ┘                        a party that acts on the CHANGE
```

**Distinguished by their *object*, not by a verb.** *(The earlier wording — "serves" versus "builds" — never fitted its own list: product and delivery build nothing.)*

**A party acts as itself, or delegates to an agent, to perform a role.** Both branches are real and both are needed: without the discipline branch, most of the change track holds roles with no party above them; without the persona branch, the [[#Capability catalogue terms\|Capability catalogue]] has no axis.

> **Consequence: the four roles describe *any* action on or with the system**, not only delivery actions. An Operator restarting a service is a **Worker**. An Auditor reviewing logs is a **Verifier**. If the roles were only delivery positions, the persona branch would have nothing to attach to.

### Where the two branches hand over

The change track is a **circuit between two persona moments**, with a blurred zone at each end.

```
     ── running system ──┐                                    ┌── running system ──
   a PERSONA experiences │                                    │  a PERSONA uses it
   it and CAPTURES       │                                    │
                         ▼                                    ▲
     capture ▸ NEW → ACCEPTED → SPECIFIED → PLANNED → BUILT → VERIFIED → COMPLETED ▸ delivered
        (blurred entry)   └──────── DISCIPLINES act on the change ────────┘   (blurred exit)
```

**Capture is not *acting on the change*.** It is the blurred **entry**, before the change exists — which is why it is free and open to anyone (D27, D48). **Delivery is the blurred exit**, after the change is available and before anyone uses it.

So a persona raising a runtime bug report does **not** thereby become a discipline. The test is **holding a role in the flow** versus **supplying a signal to it**. Disciplines may also capture, mid-pipeline; that changes nothing.

### Parties, actors, permissions and delegation

| Term | Definition |
|---|---|
| **Discipline** | **A party that acts on the *change*.** The counterpart to [[#Capability catalogue terms\|Persona]], which is a party the running **system** *serves* — the two are distinguished by their **object**, not by a verb. Members: designer, developer, product, technical, delivery. A **type**, not an individual — **never a business title**. *(Widened from "a party that **builds** the platform", which never fitted two of its own five members: product and delivery do not build. The narrow reading also forced a client's rollout decider to be classified as a persona, putting a persona inside a flow that is otherwise discipline-driven.)* **Who supplies the actor — ours or a client's — is a deployment detail**, the same interface/implementation split as role and actor, one level up. So the rollout decider is **Delivery → actor → [[#The four roles\|Decider]], scoped to that client's rollout**, whoever holds it. **D49–D51's promotion voices are disciplines**; `voice` survives alongside as the *act of speaking* — *a voice from the Technical discipline must be heard at `explored → committed`*. |
| **Actor** | **A human or an agent.** The thing that actually holds a role. Every actor must be **distinctly identifiable** — a human by email or username, an agent by model version, skill and unique id. Identity is not bureaucracy: it is what makes [[#Parties, actors, permissions and delegation\|Accountability]] traceable. |
| **Accountability** | **Consequence landing on a human.** An actor is identifiable, which gives **attribution**; a human is accountable, which gives **consequence**. Where an agent holds a role, accountability is **derivative** — it attaches to the human who **delegated** that checkpoint to that actor. Chain length may be zero when a human acts directly. *A model version can be named in a log; it cannot be fired, sued, or sign a contractual assurance.* |
| **Permission** | **The entitlement to do something to the system** — merge to mainline, cut an edition, promote a [[#Evidence about the product\|Characterisation test]], alter a [[#Evidence about the product\|Contract]], approve a release to a client, concede a standard. **A permission attaches to the [[#Role terms\|role]], never to the actor** — holding the role grants the powers, which is what keeps a role a *complete* interface and two actors in the same role interchangeable. [[#Parties, actors, permissions and delegation\|Delegation]]'s ceiling therefore reads: **you may only delegate a role you yourself hold.** **Still undesigned:** the set of permissions has never been enumerated, and **scope** is unresolved — a Worker on component A must not thereby alter component B's contracts, so the likely shape is *role scoped to a subject*. *(`Authority` was considered and rejected — it read as both a party that acts and an entitlement that is held.)* |
| **Delegation** | The act of authorising a given actor to hold a given role at a given checkpoint. **Recorded**, because it is where accountability lands. Bounded by two rules: **ceiling** — nobody may delegate a **role** they do not themselves hold, so the never-conceded absolutes cannot be routed *around* via delegation; and **least privilege** — an agent receives the permissions its role needs **and the resources it is given at the time of delegation**, and no more. **Nothing is undelegable**: in principle the whole process may run on agent actors. When it goes wrong, **the delegating human is at fault for failure to scope correctly** — fault does not vanish, it relocates to the scoping act, which is recorded and reviewable. |

> **Role eligibility turns on access, not on actor kind.** An actor may hold a role if — and only if — it has the details that role requires. **There is no presumption that a human is the best actor, or the default one.** *Corollary: the knowledge substrate is not a later concern — role eligibility is a function of retrievability.*

**Any role may in principle be held by either kind of actor — including [[#The four roles\|Decider]].** *(Revises the earlier rule that a Decider must be human; the substance is preserved by delegation, see above.)* **All four roles are defined by their relationship to context**: the Worker accumulates it, the other three are denied it.

### The four roles

| Term | Definition | Context |
|---|---|---|
| **Worker** | Performs the required action on the work at that time — researching, coding, drafting. | **Accumulates.** The only role that does |
| **Verifier** | Verifies the Worker's work against a standard. Distinct **so that a fresh view is always used**. **Two outcomes only — it verifies, or it sends the work back.** A Verifier that cannot settle the question from the evidence has found that **the evidence is insufficient**, which is a failed verification and the Worker's to close. **A Verifier does not escalate.** | **Denied** — never saw the doing |
| **Sentinel** | An **always-on** actor watching for drift, staleness, cost, vulnerability, broken assumptions, and preconditions becoming favourable. A human running a weekly grounding session or an agent on a shorter loop — so **loop period is a declared property**, because what a sentinel can promise depends on it. | **Outside** any work session by construction |
| **Decider** | Commits money, risk, or a client promise. A **distinct context** deciding from **recorded facts** — never from shared session context, so decisions rest on what is known and written rather than on what someone happened to remember. **Escalates** — see [[#Escalation]]. | **Denied** — decides from the record |

> **The four roles, one verb each: Worker advances · Verifier confirms · Sentinel watches · Decider commits.** Names are settled. The criterion applied throughout: **the name must not imply which kind of actor holds it.**

### Escalation

**Escalation belongs to the [[#The four roles\|Decider]], and to no other role.**

| Role | When it cannot discharge its role |
|---|---|
| **Verifier** | **Sends the work back.** If the evidence does not settle the question, the evidence is insufficient — and producing sufficient evidence is the Worker's job, not a reason to summon anyone. *If nothing proves the claim, the claim is not proved* |
| **Decider** | **Escalates to another Decider** — who may be a person or an agent, depending on who holds the role there |

**Escalation is a handoff within the same role**, never a change of role and never a severity ladder. The question does not get easier; it gets someone else.

> **With one actor there is nobody to hand it to.** Two moves and no third: **the work stops** — usually correct, since a decision the facts do not support is not improved by being made sooner — or **the Decider decides anyway**, which is a [[#Control terms\|Concession]]. *At one actor, "escalate" and "concede" are the same move seen from either side.*

### What a role carries

A role is always **scoped to a subject** — `Worker on component X`, `Decider for client Y's rollout`. Scoped, it carries three things.

| | Is | Governed by |
|---|---|---|
| **Sufficiency** | What an actor must be able to **access** to perform this role on this subject — current release states, the [[#Certification environment\|edition registry]], decision records, test metrics. **This is the half [[#Process telemetry]] exists to serve** | **Enough.** Never *least* |
| **Permissions** | What the actor may **do** — merge to mainline, cut an edition, promote a characterisation test, approve a release. A Verifier may not write code | **Least privilege** |
| **Independence** | One narrow rule: the **Verifier is not the Worker**, and does not hold the session's reasoning | The never-conceded `worker ≠ verifier` |

> **This is a sufficiency model, not an access-control model.** The question it answers is *"can this actor see what it needs?"* — not *"is it prevented from seeing too much?"* A Worker and a Verifier both need the request, the requirements and the spec; **the read side is largely shared, and what differs is what they may do.**

**All three sit on the role, not on the actor, and that is forced rather than chosen.** Delegation grants a role; [[#Parties, actors, permissions and delegation\|nothing is undelegable]]; and eligibility turns on access. If sufficiency were carried by the *actor*, delegating a role would grant permissions without access, the delegate would be ineligible, and *"nothing is undelegable"* would be false in practice — every delegation needing a second grant that nothing governs.

> [!IMPORTANT] The price of a Decider that decides only from the record
> It makes **recording mandatory before every decision**. A human in the room today decides partly on things they know and never wrote down; this Decider cannot. That moves the model's homeless artifacts from *a later pass* to *a precondition of the role model working at all*.

## Verification terms

| Term | Definition |
|---|---|
| **Clean context** | The verifier never saw the doing — a fresh agent context or a different human. Absolute: nobody verifies their own work, ever. |
| **Shared references** | The verifier is pointed at the same standards, ADRs, domain model and prior decisions as the worker. Independence without shared context produces noise; shared context without independence produces a rubber stamp. |
| **Conformance** | Did the work match what was asked, to standard? |
| **Currency** | Is what was asked *still right*, given what changed while the work was in flight? The check almost nobody does, and the one that catches expensive failures. |

## Control terms

| Term | Definition |
|---|---|
| **Withdrawal** | The only permitted route for a capability to leave the catalogue. Requires an explicit record naming the edition it left in. A spec deleted without one **fails the build**. |
| **Concession** | The only permitted route to ship a known compromise. Attributable to a **named actor**, with a human accountable through [[#Parties, actors, permissions and delegation\|Delegation]], recorded as an artifact, scoped to one capability/edition/client, expiring, **client-visible**, and automatically debt-generating. Converts an invisible compromise into a tracked liability. |
| **Never conceded** | Contract graph closure · legal and contractual assurances · the withdrawal record · worker ≠ verifier · promotion of a characterisation test to a specification. |

## The state track

One door. Every signal enters the same queue, regardless of source or kind. **The state says where an item is, and therefore what should be done next. It does not say when, or by whom** — see [[#Markers]].

```
NEW ──[sift]──► ACCEPTED ──► SPECIFIED ──► PLANNED ──► BUILT ──► VERIFIED ──► COMPLETED
 │                  │
 ├─► DUPLICATE      ├─► DUPLICATE
 └─► REJECTED       ├─► REJECTED
                    └─► RETRACTED
```

**A state is achieved when its criterion is met.** An item's position is the **highest state it has achieved** — states are achievements, not queues you wait in.

| State | Achieved when |
|---|---|
| **New** | It is in the door. Nothing else has happened. **The count sitting here is the unsifted pile**, visible by construction and impossible to hide in a state that looks like progress |
| **Accepted** | Sifted: it is real, its **type** is assigned or verified, and **we agree it is to be done**. *Accepting is not committing* |
| **Specified** | Acceptance criteria and a **failing executable spec**, confirmed adequate by a Verifier. See [[#Specified and Planned — the full criteria]] |
| **Planned** | The sequence of actions is **known, revisable, and actionable such that the result asserts the spec**. See [[#Specified and Planned — the full criteria]] |
| **Built** | **Every acceptance criterion has been driven and holds** — automated ones executed, documented ones followed **and their result recorded** — and the work **carries the version it landed in** |
| **Verified** | A Verifier confirms **conformance** and **currency**, from clean context. **About *this item*** |
| **Completed** | The build artifacts are **published for consumption**, and the catalogue is **proven to contain them** — queried and found, never reported. **About *the set***: the whole spec suite passes together at the published version |

**Off-ramps:** `Duplicate` · `Rejected` · `Retracted` — reachable at any point once an item exists. Which one applies is [[#Stopping\|derived]] from state and commitment together.

**Not a waterfall.** `Verified` returns work to `Built` (or `Planned`, if the approach was wrong) on a conformance failure, to `Specified` on a currency failure, and to whichever produced the missing evidence when the evidence does not settle it.

> **`Completed` ≝ published for consumption, provably. Development-done, global.** Who actually *has* it is [[#The rollout view — coverage, not states\|coverage]], a separate axis.
>
> **Publishing may run ahead of verification, and that does not advance the state.** Publishing is an act; `Completed` is a state. An artifact published before verification leaves the item at `Built` **with a published artifact**. The catalogue is generated from **verified** published artifacts, never from everything on a registry.
>
> **"GA" is a defined gloss, never a primary name.** In SaaS, GA means *customers have it*; here `Completed` means only that it is published and any consumer **may take it**. Read with SaaS instincts it reproduces the anchor failure. The closer industry analogue is **RTM**.

## Item types

**The sift assigns a type, or verifies the one an item arrived with.** Nothing downstream has to guess.

| Type | Is | Notes |
|---|---|---|
| **Capability** | Something a user can now do, that we may promise, and that a passing spec proves | Stated as an **outcome a persona achieves** — *"a client can export invoices"* — never as the thing built. The catalogue is generated from these, so the wording decides whether it holds outcomes or implementation nouns |
| **Fix** | Correcting something previously completed | **Attaches** to an existing capability; does not create one |
| **Chore** | **Upkeep of the repository and its application that changes no capability** — documentation, build scripts, tooling, dependency updates | **It may well affect the release.** That is not a contradiction: the **type says why the work exists**, and **touch says how much rigour it carries** |
| **Question** | A request for information | The only type outside [[#Commitment\|commitment]]. Runs `New → Accepted → Answered → Closed`. See [[#Questions]] |
| **Initiative** | A body of intent spanning capabilities and time | **No spec of its own**, so no state of its own — its position is the aggregate of its children |

**Deliberately excluded:** *bug*, *feature*, *epic*, *user story*, *task*. Tracker vocabulary that varies per team and per client, and belongs outside the boundary.

> **OPEN — the list may be short by two.** The [[#Capability catalogue terms\|capability catalogue]] holds three entry types: **capability**, **quality** and **assurance**. Only `Capability` has a route in through the door. Either the other two are sub-kinds of it, or the type list is incomplete.

> **OPEN — `Service request`.** A request for an *action* rather than information — run a report, restore a record. Structurally symmetric with `Question`: nothing promised, nothing built.

### Questions

A question is a **probe of the knowledge substrate**, and how it resolves is diagnostic.

| Resolution | What it means |
|---|---|
| The answer existed and was findable | It should not have reached the door. **Retrieval is failing** |
| The answer existed only in someone's head | Resolution is to write it down — **which raises a chore or a capability** |
| The answer did not exist | The question has found something **undesigned**. That is a decision to take, not work to do |

**`Answered`** is the act; **`Closed`** is accepting the answer was sufficient. **The rate of questions arriving is a signal about the substrate, not about the people asking.**

## Markers

**State is not a work queue.** Finding work is separate from knowing where work is.

| Term | Definition |
|---|---|
| **Marker** | A signal on an item that **calls it to action**. Its form belongs to whatever system is in use — an assignee, a label, a column, a notification |
| **`ready`** | A human is invited to pick this up |
| **`ready-for-agent`** | An agent is invited to pick this up |
| **Claim** | **The actor that takes an item assigns itself.** That self-assignment is what stops two actors working the same item, and what makes the work attributable afterwards |

**Markers are invitations, not permissions.** They do not change who *may* hold a role — that turns on having what the role requires, never on actor kind. They exist because **agents poll and humans browse**, and an agent polling needs a query returning only work somebody wanted an agent on. **An item may carry both**, and for ordinary work usually should.

> **Watch this.** If interesting work is consistently marked `ready` and tedious work `ready-for-agent`, the two labels quietly become a human/machine division of labour — the exact thing the actor model exists to prevent.

> **OPEN — who sets the marker.** The natural answer is *whoever completes a step marks what is next*, which needs no scheduler. Not yet decided.

## The rollout view — coverage, not states

Rollout is **not a state sequence.** A change is either in a client's hands or it isn't; there is no progression to travel. What varies is *how much of the fleet holds it*.

| Recorded per change | |
|---|---|
| **Which clients hold it** | The per-client half of two-done |
| **Fleet coverage** | How much of the estate has landed it |
| **Progressive-rollout percentage** | Where a rollout is staged within one client's production |

**Non-monotonic by design** — a rollback lowers coverage. That is a fact to record, not an anomaly.

### Landed vs verified — two objects, not two attributes

| Term | Object | Question it answers |
|---|---|---|
| **Landed** | An **edition**, in an **environment** | *Is this version deployed here?* Binary, per environment |
| **Verified** | The **feature work** | *Is it right?* |

Keeping them apart is what stops *"we deployed"* and *"it works"* being reported as one claim.

### Stages — named for the act, not the environment

```
VERIFICATION  → a Verifier confirms the change against the client's REAL
                configuration, data and upstream integrations
       ↓
ACCEPTANCE    → the CLIENT accepts: "this is what I asked for"
       ↓        an external Decider — may refuse, may not answer
LIVE          → in use
```

> **The invariant: live use *actions* a verified and accepted change — it never *discovers* one.** Same instinct as [[#Pre-window verification]], one level down.

**How many environments exist, and what they are called, is an [[#Practice and application|application]] concern.** Today three boxes carry these stages — dev is alpha and breakable, staging is beta/UAT, production is live — but **a small team may have exactly one.** Naming the practice after a box count would push an application concern into the practice and break scale-invariance outright. `Environment` remains a reserved word; its *topology* is not normative.

*SaaS stage names are deliberately avoided:* **beta** in SaaS means customers are using it, which is not UAT — the same trap [[#The state track|GA]] carries.

**Verification here is not redundant against certification:** a certification run uses a [[#Certification environment\|Known data set]] and a declared configuration profile, whereas this stage runs against **their** data and **their** upstream integrations. It catches integration reality a synthetic profile cannot reproduce. This is also where D31's automated verification against client environments lives — **before live, never in it**, which is the less contentious contractual position as well as the more useful one.

> **With three environments the stages separate in *space*. With fewer, in *time*. With exactly one — which is also live — in neither**, because the change sits in the box the client is using before it is accepted. Separation must then come from **exposure control: dark shipping behind flags** — the same mechanism parked as the answer to the matchday freeze.

Modelling this as states was the error: a single linear spine mixed two scales, so a team would report *"Released"* meaning *we shipped it* and a client would hear *I have it* — the anchor failure, reproduced by the diagram meant to prevent it.

## Telemetry terms

**"Telemetry" is retired as a bare word.** It named two different things with different audiences, different homes and different mechanisms.

### Product telemetry

Instrumentation of the **running system**. Serves the **[[#Capability catalogue terms\|Persona]]s** the platform already names — Operator, Support, Auditor.

It is an ordinary **[[#Capability catalogue terms\|Capability]]**: an outcome a named persona achieves, claimable only if a passing spec proves it, entered in the [[#Capability catalogue terms\|Capability catalogue]], and — under D18 — able to **block a platform edition** when an internal persona's capability is missing. That path already works and needs no new mechanism.

*"An Operator can determine which service caused a failed request"* is a capability. *"Every HTTP request carries these attributes"* is a **standard**, whose home is an enforcing dependency, not a document. *"No PII reaches logs"* is an **[[#Capability catalogue terms\|Assurance]]**. *"p99 log ingestion under 30s"* is a **[[#Capability catalogue terms\|Quality]]**. All four shapes occur; each goes to its existing home.

### Process telemetry

Visibility over the **delivery of change** — what has been deployed and where, where each change sits, when it will be actioned.

Serves the **[[#Parties, actors, permissions and delegation\|Discipline]]s** and the **[[#Role terms|roles]]** they take. **It has no home today, and building one is the substantive work.**

> **Three of the four roles cannot function without it.** A **[[#The four roles\|Decider]]** is defined as deciding from **recorded facts** — unrecorded, there is no Decider, only a person guessing. A **[[#The four roles\|Sentinel]]** watches recorded facts by definition. A **[[#The four roles\|Verifier]]** requires *"what changed while the work was in flight"*, which is a process-telemetry query. Only the **Worker** is independent, being the one role that accumulates its own context.
>
> Process telemetry is therefore **not an addition to the model. It is the substrate the role model already assumed and never named.**

**Process telemetry is one source of an actor's sufficiency, not all of it.** It measures **where we are in the delivery process**. Equally inputs, and not obtainable from it: the **code and pull request** · **tickets and discussion** · **previous review cycles**.

### Recorded fact

> **A recorded fact is an artifact deliberately authored or computed for durable use by others. The incidental exhaust of producing it is session context.**

Authored-for-others versus by-product. This is the line a **[[#The four roles\|Decider]]** decides across — recorded facts in, working session out.

| Fact | Session context |
|---|---|
| Spec · touch set · test results · certification record · readiness report · commit message · PR description | Agent reasoning traces · session logs · the thread where two people argued about approaches |
| **ADR** — *even though it contains reasoning*, because it is deliberately authored as a durable artifact for others | |

**Reasoning is not categorically barred; *incidental* reasoning is.** Any test strict enough to exclude a reasoning trace but loose enough to admit an ADR has to turn on **who the artifact was written for**.

**Facts are *as-at*.** They are recorded facts *at the time they are read*. That is the Verifier's [[#Verification terms\|Currency]] check generalised — if facts move, the moment of reading is part of the fact — and it is what makes **[[#Parties, actors, permissions and delegation\|Accountability]] assessable at all**: fault attaches to *failure to scope correctly*, which cannot be judged without reconstructing **what was visible to that actor when it acted**.

**Telemetry is facts; [[#Measurement — two kinds, and only one may be a target|health metrics]] are proxies computed over them.** Throughput is a health metric; *"this change is at `Verified`"* is a fact. Keeping them apart is what stops a dashboard of facts quietly becoming a set of targets.

**Client-facing face:** the [[#Release terms\|Two-done rule]] is process telemetry pointed outward — a client is shown both development status and deployment status, with the release version stated.

**Scope:** the practice owes the split, the audiences, and what must exist. The store, the query surface and the dashboard are an [[#Practice and application|application]] concern.

## Acceptance criteria

**Steps, metrics or markers that identify the requirement has met its needs.** Written at [[#The state track\|Specified]], before any code exists.

*"Problem understood"* is not checkable on its own. **Acceptance criteria are what turn it from a declaration into evidence** — and they are the first link in a chain that runs to the client:

```
acceptance criteria  →  failing spec  →  passing spec  →  catalogue claim
     (Specified)         (Specified)        (Built)        (Completed)
```

**The claim a client eventually reads traces back to what someone wrote down that "right" meant, before any code existed.** There is no point in that chain where the definition lives only in somebody's memory.

**They serve the [[#Verification terms\|acceptance]] act.** Acceptance is a Decider act — *this is what I wanted* — and the one act that can be refused or go unanswered. Acceptance criteria are the criteria **for** that act, stated at the start rather than recalled at the end. **Every item has them**, including a chore nobody outside will ever see.

**A metric used as an acceptance criterion must be a [[#Measurement — two kinds, and only one may be a target\|quality]], never a health metric** — the measure must *be* the goal. *"Response under 200ms"* qualifies; *"improve throughput"* does not. Without this guard, `Specified` becomes where proxies are smuggled in as goals.

## Sufficiency in practice — what an act requires and produces

**Every act requires access to a defined set of information, and leaves behind a defined set of artifacts.** What is in each set is decided by **what is being done** and **what it is being done to** — never by who is doing it.

| Both must hold | |
|---|---|
| **Defined** | The set is stated in advance, not improvised each time |
| **Accessible** | The actor can actually reach every item in it, at the moment of acting |

**Where any of it lives is not the practice's concern.** Today it might be documents alongside the code and an item in a tracker; tomorrow it might also be test reports, telemetry, a client's environment. The practice requires only that the set is **defined and reachable** — how many places it comes from, and how it is fetched, is an [[#Practice and application\|application]] matter.

**If something in the set cannot be reached, the act cannot be performed.** That is not a rule being broken — it is a role that cannot be held, and the fix is to make the thing reachable. Doing it anyway is a [[#Control terms\|concession]].

### Standards stack

**The practice defines a floor.** Wider standards, then narrower ones; an actor **merges them** to get its set.

| Because a standard is a **floor** | |
|---|---|
| **Merging is union** | No precedence to define, no ordering to get wrong, no conflict resolution to build |
| **A layer may add or constrain, never contradict** | A narrower layer contradicting a wider one is a **defect to fix**, not a conflict to resolve |
| **A standard must be expressible as a floor** | One written as a ceiling — *"no more than…"*, *"exactly…"* — cannot stack, and cannot take part |

> **Watch this.** Layers only ever add, so the merged set only ever grows and **nothing prunes it**. Left long enough, the required set becomes large enough that roles start becoming unholdable for ordinary work — and the open concession count floods at exactly the moment it should be quiet. **Reviewing what a layer still needs is real work that nothing currently forces.**

### What an act must produce

**Same shape, same rules** — defined, layered, a floor, merged by union. A layer may require a note recorded on the item, a document produced, a proof-of-concept built on a branch.

**One act's required outputs are the next act's required inputs.** Define both and the chain is guaranteed to run: there is no handover to negotiate and nothing to check where two acts meet. Define only the inputs and you can have a role requiring something nobody was ever obliged to produce.

**What counts as an output** is [[#Recorded fact\|the recorded-fact test]]: an artifact deliberately authored or computed for durable use by others. An agent's reasoning trace never qualifies; an ADR always does.

## Version terms

| Term | Definition |
|---|---|
| **Version** | **The thing you commit work to** — a named release line, `v1.4`. Nameable **before** the work exists, which is what lets it be a target |
| **Build identity** | A commit hash, a build number. **Not a version.** How a pipeline names artifacts, and an [[#Practice and application\|application]] concern the practice does not name |
| **Slippage** | The difference between the version an item was **committed** for and the version it was **built** into. **Computed, never reported** |
| **Published** | The artifact has left the repository and is **retrievable by a consumer** — a package on a registry, an image in a registry, a binary on a release. *Who the consumer is changes with scale; the act does not* |

## Retired words

Words banned from the model because they carry more than one reading. Recorded so the ambiguity is not reintroduced.

| Retired | Ambiguity | Replaced by |
|---|---|---|
| **Modifies** | Grammatical qualification vs. alteration over time | **Qualifies** (a quality qualifies a capability) · **Revises** (a lifecycle change to an existing entry) |
| **Triage** | Sift for validity vs. diagnose and shape | **Sift** (real / duplicate / rejected) · **Shape** (persona, outcome, problem) |
| **Done** | Development-complete vs. in the client's hands | **Development status** · **Deployment status** |
| **Catalogue** *(bare)* | What the platform does vs. which editions are deployable | **Capability catalogue** · **Edition registry** |
| **Explored** *(as an activity)* | An activity under way vs. an achievement reached — every other lifecycle state is an achievement | **Discovery · research · competitor scan · PoC** — the activities, which live at [[#The state track\|Specified]]. *The state it named is retired too; see the `Explored (as a commitment state)` row below* |
| **Gap** | A missing decision vs. a decision resting on an untested assumption — opposite remedies | **Undesigned** (remedy: decide) · **To enable** (remedy: build) · **Unproven** (remedy: find out) |
| **Design** *(bare)* | The shape of the outcome vs. the model of the business vs. the structure that realises it | **Product design** · **Domain design** · **Technical design** |
| **Certified** *(as a state name)* | The act and evidence of certifying vs. the state that results | **Certification** (act, record, environment, certified set) · **Available** (the state) |
| **Verify** *(bare)* | Gathering **evidence against a stated standard** vs a Decider judging *this is what I wanted* — the second can be refused or go unanswered, which no verification can | **Verification** (a Verifier act) · **Acceptance** (a Decider act). *Standing habit: verification always names its object — the change, the deployment, the feature. Those are one act with different objects, not separate meanings.* |
| **Operated** | Was three unrelated things in one box | **Coverage** (live) · nothing (sentinels are standing loops, never a state) · **Available** (in the catalogue) |
| **Authority** | A **party that acts** (as in *"the licensing authority"*) vs an **entitlement that is held** (*"authority to approve this"*). Caught mid-adoption, retired before use | **[[#Parties, actors, permissions and delegation\|Permission]]** (the entitlement) · **[[#Parties, actors, permissions and delegation\|Discipline]]** (the party that builds — named by D142) |
| **Guideline** | *Not ambiguous — **too weak**.* It reads as optional, when the thing it names is obligatory. Recorded here so it is not reintroduced as a softer-sounding synonym | **Standard** — *"you can improve on a standard; you cannot improve on a guideline"* |
| **Telemetry** *(bare)* | Instrumentation of the **running system** vs visibility over the **delivery of change** — different audiences, different homes, different mechanisms. Left as one word, the model recorded failure #6 as half-answered by a persona that does not serve the party the failure is about | **[[#Product telemetry]]** (the running system, an Operator capability) · **[[#Process telemetry]]** (the delivery of change, serving disciplines and the roles they take) |
| **Withdrawn** *(overloaded)* | A capability **removed** after it existed vs a commitment **abandoned** before it was ever built — one costs trust, the other costs a conversation | **Withdrawn** (removal) · **[[#Stopping\|Retracted]]** (the commitment). *`De-commitment` is retired with it — not ambiguous, just opaque jargon nobody says aloud.* |
| **Change** *(as a hierarchy level)* | A unit of work vs anything that alters the system. It named the bottom of the hierarchy *and* the thing the spine carried, and the two are not the same | **[[#Hierarchy and roadmap terms\|Item]]** — anything that enters the door — always carrying one of five **[[#Item types\|types]]** |
| **Shaped** | Named an **activity**, where every other state names an **achievement** — and it did not say what you had at the end of it | **[[#The state track\|Specified]]** (what must be true) · **[[#The state track\|Planned]]** (how, and in what order) |
| **Explored** *(as a commitment state)* | Duplicated the state track's `Specified` — the same act recorded on two axes | **[[#The state track\|Specified]]** on the state axis. *Retired a second time: first as an activity, now as a commitment value* |
| **Scheduled** | Duplicated `Committed`, which already names a version. Two values where one carried the meaning | **[[#Commitment\|Committed]]** — *for a named version* |
| **Available** *(as a state name)* | Described the **artifact**, not the **item**. It read naturally for a capability and barely parsed for a fix or a chore, and every item type travels the same track | **[[#The state track\|Completed]]** (the state) · **published** (what the artifact is) |

## Mentions

![[mentions.base]]
