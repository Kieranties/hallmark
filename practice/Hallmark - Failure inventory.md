---
type: topic
status: active
projects:
  - "[[Hallmark]]"
created: 2026-08-10
tags:
  - concept-to-cloud
  - failure-modes
  - sdlc
---
# Hallmark - Failure inventory

The requirements source for [[Hallmark]]. Every mechanism in [[Hallmark - Delivery model]] must be paid for by a failure it prevents — anything else is ceremony, and **ceremony is the first thing a stretched team drops.**

All ten are real and recurring, not hypothetical.

> [!IMPORTANT] The ten are primarily developer-focused, and that was invisible until round 13
> Confirmed by the user when D152 split `telemetry`. The inventory was written before the model had **[[Hallmark - Glossary#Capability catalogue terms|personas]]** and **[[Hallmark - Glossary#Parties, actors, permissions and delegation|disciplines]]** as distinct concepts, so the party each failure hurts was never stated. Several are pain felt by parties that **build** the platform, not parties it **serves** — which matters, because the model's mechanisms for the two are different and the catalogue only covers one. **#6 was mis-credited for exactly this reason.** Worth a pass over the other nine.

## The ten

| # | Failure |
|---|---|
| **1** | **New clients have expectations that cannot be met from day one** — sold a feature that doesn't do what they need, often because the implementation was *remembered wrong* |
| 2 | Feature changes are difficult to test — poor unit/integration coverage, missing contract and API testing, poor data generation, weak repeatable developer environments |
| 3 | AI context is a free-for-all — different extensions per developer, inconsistent agent approaches (e.g. code review), wildly varying sourcing of ADRs/docs, no conformity on writing or persisting documentation |
| 4 | Client environments vary massively — different microservice versions per client, so a change in one may be breaking in another |
| 5 | Virtually no automated testing on client environments (dev, staging, prod). Load testing is a minimum |
| 6 | Telemetry and visibility during runtime and deployment are poor — hard to trace and replicate issues locally |
| 7 | Ingestion of ideas, features and tasks varies per client — Jira quality and stages differ per project |
| 8 | Documentation at code, project, client and product level is severely lacking. Agents need the right docs, the right version, at the right time. Runbooks, KBs, "where are we with this change?" — all hard to answer |
| 9 | No velocity or throughput measurement — no way to say what is working and what isn't |
| 10 | Too much reliance on people holding knowledge; too little encouragement to *discover* and learn from documentation |

## Clusters

| Cluster | Members | Character |
|---|---|---|
| **A · Truth isn't retrievable** | 1, 3, 8, 10 | The same failure at three altitudes — a client gets a wrong promise, an engineer can't answer "where are we", an agent reads whatever docs it trips over. No authoritative, versioned, addressable account of what the system does. |
| **B · No verification substrate** | 2, 5 | Can't cheaply prove a change is safe. |
| **C · It's a fleet, not a system** | 4 | N clients at N versions. Compatibility across the fleet is unmanaged, so "done" is per-client, not global. |
| **D · No feedback loop** | 6, 9 | Neither the running system nor the delivery process is instrumented. |
| **E · Intake is unmanaged** | 7 | Work arrives in whatever shape the client's Jira happens to be in. |

**A gates B and C.** You can't verify against a spec you don't have, and you can't reason about fleet compatibility without knowing what each version does. **A is also the cluster AI makes worse rather than better** — inconsistent context produces inconsistent output constantly, at speed, with confidence.

## The anchor

**#1 is the most expensive** — confirmed. It is the only failure on the list a **client can actually see**; the other nine are internal bleeding. It converts into lost revenue and damaged trust rather than lost time, and being a symptom of cluster A, attacking it drags the biggest root cause along behind it.

### Anatomy of #1

Two failure modes hide in one sentence, with opposite fixes:

- **α — we misrepresented ourselves.** The claim was wrong. Root: nobody can retrieve what the system actually does. Fix: an authoritative, versioned, queryable account of capability.
- **β — we misread the client.** The claim was accurate; they needed something else and nobody found out in time. Root: no discovery step between "they want X" and "we promise X". Fix: a needs-validation gate at the front of the funnel.

**Confirmed as α.** And α is not a discipline problem: with clients on different versions, *"does the platform do X?"* has **no single answer**. "Remembered wrong" is the inevitable output of asking a human to be a database. There is no noun to attach the truth to — which is why the versioning strategy precedes the capability catalogue rather than following it.

β is not ignored — it is caught at the **Shaped** state, the only open-ended gate in the internal spine.

## Traceability — failure → mechanism

Statuses below track [[Hallmark - Backlog]]. **Designed** means designed enough to build from — not built.

| # | Mechanism | Status |
|---|---|---|
| **1** | Certified platform editions; capability catalogue generated from executable specs; reproducible demos on provisioned editions | **Designed** — D13–D17, D72–D75 |
| 2 | Executable specs as source of truth; risk map → ratchet for brownfield; contract testing; data registry with provenance and currency | **Partial** — data generation designed (D77–D82); **repeatable developer environments still undesigned** |
| 3 | Knowledge as a versioned dependency; shared references for worker and verifier; standard **actor-agnostic roles** (Worker / Verifier / Sentinel / Decider) | **Designed** — D83–D92. Enforcement is application-layer work, not **undesigned** |
| 4 | Never fork the core; contract graph closure at build time; fix-forward with no maintenance branches; variation as configuration or a separate product | **Designed** — D29, D55–D63. Configuration state space contained by certifying against the fleet's *real* profiles (D64). Residual: **unverified consumers** — the deprecation half is answered by D138; the published-contract half is still unspecified |
| 5 | Automated verification as **the price of the currency mandate**; on-request certification environments give it somewhere to run; **client-environment progression through the verification and acceptance stages** | **Designed** — D31, D72, and **D126/D148** place verification on client environments as **stages named for the act** — verification · acceptance · live — with environment topology left to the application. Residual by design: **live is deliberately excluded** |
| 6 | **Two mechanisms, because D152 split the word.** **Product telemetry**: Operator as a first-class persona → traceability becomes a capability that can block an edition. **Process telemetry**: visibility over the delivery of change, serving disciplines and the roles they take | **Partial** — and **the split corrected a mis-credit.** D17/D18 guarantee *product* telemetry gets built, but #6's stated pain — *"hard to trace and replicate issues locally"* — is a **developer's** pain, and a developer is a **discipline**, not a persona (D140). The mechanism credited here did not serve the party the failure is about. **Process telemetry (D152) is the one that does, and it has no home yet** |
| 7 | One door; invariant internal spine; adapter at the client boundary; two-done reporting | **Partial** — D25–D28 designed; **per-client mapping and status sync open** |
| 8 | One evidence base, many renderings — catalogue, changelog, release notes, sprint doc are one query; documentation edition composed at build | **Designed** — D15, D83–D88 |
| 9 | Open concessions · risk-map remaining · unconverged hotfixes · cost attribution · single-holder decisions | **Partial** — five health metrics exist; **no throughput model** |
| 10 | Generated documentation removes the incentive to hold knowledge; versioned shared references make discovery the default path | **Designed** — D83, D10 |

## Mentions

![[mentions.base]]
