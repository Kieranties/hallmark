---
type: topic
status: active
projects:
  - "[[Hallmark]]"
created: 2026-08-12
tags:
  - hallmark
  - backlog
---
# Hallmark - Backlog

**Everything that must be addressed for the practice to be complete.** Open questions, known weaknesses, missing mechanisms and homeless artifacts are all the same thing — work not done — so they live here and nowhere else.

**Nothing in `Product/` states its own status.** If something is provisional, the product says what the practice currently holds and this note records that it is open.

| Column | Means |
|---|---|
| **Layer** | `practice` — what the process says · `application` — how it is instantiated. The distinction that keeps getting fudged, made a column so it cannot be |
| **Blocks** | Which tier it holds up. **Tier 1** = one repository, one or two people · **Tier 2** = a few repositories, one client · **Tier 3** = many clients and environments |

---

## Next three

> **1 · Quality and assurance have no route in through the door** · **2 · Whether `Specified` is affordable when the interface does not exist yet** · **3 · Who sets the marker**

Three named items, so the top of the list is a decision already taken rather than a list to re-read.

## A tier is complete when

> **Every state has a criterion that can be checked, no practice-level item remains open at that tier, and the loop has been walked end to end.**

**Tier 1 is four practice items from complete** — 1, 2, 3 and 4 below.

---

## Open

| # | Item | Layer | Blocks | Note |
|---|---|---|---|---|
| **1** | **Quality and assurance have no route in through the door.** The catalogue holds three entry types — capability, quality, assurance — and only `Capability` can arrive. Either the other two are sub-kinds of it, or the item-type list is short by two | practice | tier 1 | |
| **2** | **Is `Specified` affordable when the interface does not exist yet?** Writing *"export completes for 10,000 rows"* executably is easy; expressing an outcome whose interface has not been designed is not. **The most likely place tier 1 breaks in real use** | practice | tier 1 | |
| **3** | **Who sets the marker.** Natural answer is *whoever completes a step marks what is next*, which needs no scheduler. Not decided | practice | tier 1 | |
| **4** | **What sits below a capability.** Is a sub-item a checklist entry, or a real item with its own state and commitment? A plan step is the first; work handed to a second person is the second | practice | tier 1→2 | |
| **5** | **How the declarations are written and kept current** — personas, actors, the door. Format, location, and how you know you have the current version | application | tier 1 | |
| **6** | **How a concession is raised and counted.** The mechanism is settled in principle — recorded, scoped, expiring, counted — and nothing says how one is raised or where it lives | application | tier 1 | |
| **7** | **`Deprecated` and `withdrawn`.** Deferred, and the hard part is stated: **removal happens at a finer grain than a claim does.** Dropping CSV export while keeping PDF is neither withdrawal nor deprecation of *"a client can export invoices"* — it is a **revision of the claim**, and nothing can yet say *"the revision removed something someone relied on"* | practice | tier 2 | |
| **8** | **`Service request`** — a request for an *action* rather than information. Structurally symmetric with `Question`: nothing promised, nothing built | practice | tier 2 | |
| **9** | **Contract testing between repositories · compatible-version resolution · rollout across clients · client acceptance** | practice | tier 2 | The bulk of tier 2 |
| **10** | **Inherited code.** Tier 1 assumes a repository with nothing uncovered. Brownfield needs the risk map and the ratchet, and neither is written | practice | tier 2 | |
| **11** | **Support workflow.** How a client-raised issue becomes a capture, who sifts it, how it reconciles with the intake adapter | practice | tier 2 | Structurally answered by the circuit; not mechanically |
| **12** | **Security and compliance**, beyond assurances as a catalogue entry type. **Entirely unentered** | practice | tier 2 | |
| **13** | **Operations.** Probably much smaller than it looks — runbooks are documentation, severity is derived urgency, an Operator restarting a service is a Worker, and on-call is headcount. **The residue is two things:** *the running system can falsify a catalogue claim and the model cannot say so*, and *rollback reverses a delivery decision and is ungoverned* | practice | tier 2 | |
| **14** | **Estate remediation.** Clients sit at different versions *and* carry their own inconsistencies. Acknowledged, never planned | application | tier 3 | |
| **15** | **Intake adapter** — per-client state mapping and bidirectional status sync | application | tier 3 | |
| **16** | **Currency target.** *"All clients on latest within X days"* — X is SLA-derived and per client. **No SLA has been read**, so nobody can say what X is for anyone | application | tier 3 | |
| **17** | **Cost model.** Attribution shown to be possible, never designed | application | tier 3 | |

## Known weaknesses

Not bugs — properties of the design that will bite. Collected so they are a risk register rather than decoration.

| # | Weakness | Where it bites |
|---|---|---|
| **W1** | **The model is mechanically enforceable against agents and self-declared against humans.** You can supply an agent's context and check it; you cannot verify a person read the standard. So *"the process can run on agents only"* is **verifiable** and *"on humans only"* is **true but unverifiable** — the reverse of what any reader assumes | Everywhere. The sharpest open property in the model |
| **W2** | **Standards stack and nothing prunes them.** Layers only add, so both the required-inputs set and the required-outputs set grow monotonically until roles start becoming unholdable for ordinary work — and the open concession count floods at the moment it should be quiet | Tier 2 onward |
| **W3** | **Publishing ahead of verification erodes the gate.** Legal and recorded — but if it becomes routine, verification is a formality nobody blocks on. Requires published-but-unverified to be distinguishable by the consumer | Tier 1 |
| **W4** | **The markers could become a human/machine division of labour.** If interesting work is consistently `ready` and tedious work `ready-for-agent`, the actor model is dissolved in practice while intact on paper | Tier 1 |
| **W5** | **At one actor, independence is unavailable.** Recorded, not waived — but what survives is only *time*-separation, and a fresh agent still has a human with dirty context steering it | Tier 1 |
| **W6** | **Ceremony load.** A door, a sift, five types, two axes, criteria before code. If tier 1 needs a training session, cold-start-proof has failed and we will not find out without a real repository | Tier 1 |

## The application — sixteen artifacts with no home

Per the practice/application split, no instantiation has been designed, so each of these is currently a noun with no substrate. **Layer: application. Blocks: tier 2–3.**

Capability catalogue · edition registry · data registry · certification records · concession and stopping records · risk map · spec-to-code coverage map · touch sets · dependency and contract graphs · ADRs as versioned dependencies · domain model and controlled vocabulary · precondition records · rollout coverage · environment topology · delegation records · **context for actors to act on**.

> **The last one is where to start.** *Knowledge is a versioned dependency* is a principle with no substrate, which leaves two of the ten named failures addressed on paper only.

## Closed

| Item | Closed by |
|---|---|
| Escalation criteria — when a Verifier escalates | **D183** — it does not. Escalation belongs to the Decider |
| Permission scope | **D155** — a role scoped to its subject |
| The record / session boundary | **D156** |
| Unverified consumers — the notice half | **D138** |
| Telemetry as a single word | **D152** |
| Whether the four levers belong in the practice | **D161** — struck |
| What the practice is called | **D184** |

## Mentions

![[mentions.base]]
