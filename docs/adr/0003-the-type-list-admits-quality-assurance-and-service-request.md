# ADR 0003 — The type list admits Quality, Assurance and Service request

| | |
|---|---|
| **Date** | 2026-08-23 |
| **Status** | Accepted |
| **Level** | Practice — item types |
| **Item** | [#90](https://github.com/Kieranties/hallmark/issues/90) |
| **Trigger** | Judgement ceiling — genuine alternatives existed, and reversal is expensive |

> **Immutable.** Superseded, never edited.

## Context

Two open notes sat under the type table. They are independent of each other and are
ruled on independently here.

**The catalogue holds three entry kinds; the door admitted one.** A capability catalogue
holds **capability**, **quality** and **assurance**, and sorts between them with a
stated test: does it introduce a new outcome for a named persona? → capability. No, but
it constrains an existing outcome? → quality. Neither? → assurance. Only `Capability`
had a route in through the door. Either the other two are sub-kinds of it, or the type
list is incomplete.

*Enable a repository* already records the consequence as a gap: *"'Response under
200ms' and 'no PII reaches logs' are both things a repository claims, and neither has a
way in through the door yet."*

**`Service request`.** A request for an *action* rather than information — run a report,
restore a record. Structurally symmetric with `Question`: nothing promised, nothing
built.

Admitting a type is cheap on the page and expensive downstream. The sift, every state
page and the catalogue all key off the list, so the bar is that the type answers a
**different question about why the work exists** — which is what a type is for. Touch,
not type, decides how much rigour the work carries.

## Decision

**Both rulings are *admit as a type*.** The list is eight: **Capability · Quality ·
Assurance · Fix · Chore · Question · Service request · Initiative**.

**Quality and Assurance are admitted** because each is a distinct claim, proven by its
own passing executable specification, and entered in the catalogue in its own right.
The catalogue's sorting test is a *sift* test: it asks what kind of claim the work will
produce, which is exactly what the sift decides and nothing downstream should have to
guess.

**Service request is admitted, off the track**, and runs `New → Accepted → Actioned →
Closed` — symmetric with `Question`, where `Actioned` is the act and `Closed` is
accepting the action was sufficient. It is never committed to a version.

The deliberate exclusions are unchanged and stay stated: *bug*, *feature*, *epic*,
*user story*, *task* are tracker vocabulary that varies per team and per client, and
stay outside the boundary.

## Alternatives considered

| | Shape | Why not |
|---|---|---|
| **B** | **Quality and assurance are sub-kinds of `Capability`** | It keeps the list at five, and it makes `Capability` mean two incompatible things. A capability is *stated as an outcome a persona achieves*; an assurance has no persona and no outcome, and forcing one into that wording is how the catalogue starts holding implementation nouns. It also moves the catalogue's sorting test downstream of the sift, so the type stops saying why the work exists |
| **C** | **Quality and assurance are `Chore`s** | A chore is *upkeep that changes no capability*, and both of these change what is claimed. A chore is also not client-facing, and a quality regression is a client-affecting change by definition. This buries the two most audit-visible claims in the one type nobody reads |
| **D** | **`Service request` outside the boundary** | Defensible — nothing is built and nothing is promised. But the request still arrives, and the door admits **every signal, regardless of source or kind**. Ruling it outside means it enters the door untypeable, or it gets a second queue. The practice is unambiguous that a second queue starves, and it says so about internal work specifically |
| **E** | **`Service request` as a `Question`** | A question is a probe of the knowledge substrate and its resolution diagnoses the substrate. *Restore a record* diagnoses nothing about what is written down. Collapsing them would make the question-rate signal — which the practice leans on — read as noise |

## Consequences

**Every catalogue entry kind now has a route through the door**, which closes the gap
*Enable a repository* records. That is the substance of the first ruling: the door and
the catalogue stop disagreeing about what may be claimed.

**`Fix` attaches to an existing catalogue entry, not only to a capability.** A quality
regression and a broken assurance are both corrections to something previously
completed. This is a widening of `Fix`, forced by the first ruling.

**Three labels are added to any door already declaring five.** This repository declares
`type-capability`, `type-fix`, `type-chore`, `type-question` and `type-initiative`; it
now owes `type-quality`, `type-assurance` and `type-service-request`. That is a change
to one application of the practice, and it is captured as its own item rather than made
here.

**A repeated service request is a missing capability, and that is the diagnostic worth
having.** If the same action is requested every month, a persona cannot perform it and
nobody has noticed. The resolution is to raise a capability — which is the same shape
as a question whose answer existed only in someone's head.

**The sift carries more weight than it did.** Three of the eight types are decided by a
test the sifter must actually apply, rather than by the wording an item arrived with.

**What this does not decide.** Whether an off-track type may carry a marker, and what
`Actioned` requires as evidence, are not settled here. Neither is what sits below a
capability, which remains open and is a hierarchy question rather than a type one.

## Superseded

None.
