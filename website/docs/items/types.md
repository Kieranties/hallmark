---
title: Types
description: Eight types, one per item, each saying why the work exists — and never how much rigour it carries.
sidebar_position: 2
---

# Types

## What it is \{#definition}

**An item's type says why the work exists, and every item carries exactly one.**

## Why it exists \{#why}

**The type says why the work exists; [touch](../loop/touch.md) says how much rigour it
carries.** Kept apart, both are useful. Collapsed, the label starts deciding the
apparatus — and a chore bumping a shared library outranks a feature adding a tooltip,
every time. Labels lie under pressure; touch does not.

**A type assigned at the sift is a type nothing downstream has to guess.** Every act
after it — what may be claimed, what a plan must cover, what is published at the end —
reads the type rather than re-deriving it from the wording an item happened to arrive
with.

**The excluded words are excluded because they vary.** *Bug*, *feature*, *epic*, *user
story* and *task* mean different things in every team, and each client brings their own
readings. A vocabulary that changes per client cannot be the one the practice reasons
over.

## Rules \{#rules}

**Every item carries exactly one type**, and the sift assigns it or verifies the one the
item arrived with. See [`Accepted`](../loop/accepted.md).

| Type | Is | Notes |
| --- | --- | --- |
| **Capability** | An outcome a party the system serves can now achieve, that may be promised, and that a passing specification proves | Stated as the outcome, never as the thing built |
| **Quality** | A constraint on the *manner* of an existing capability — latency, throughput, availability | Qualifies a capability; never stands alone. A regression here is client-affecting |
| **Assurance** | A property true of the system regardless of whether anyone uses it — *no personal data reaches logs* | No party, no outcome, and still client-relevant |
| **Fix** | A correction to something previously completed | **Attaches** to an existing claim rather than creating one |
| **Chore** | Upkeep of the repository and its application that changes no claim — documentation, build scripts, tooling, dependency updates | It may well affect the release. That is not a contradiction |
| **Question** | A request for information | Does not travel the track. See [Questions](./questions.md) |
| **Service request** | A request for an action rather than information — run a report, restore a record | Does not travel the track. Runs `New → Accepted → Actioned → Closed` |
| **Initiative** | A body of intent spanning claims and time | No specification of its own, so no position of its own — its position is the aggregate of its children |

**The type never determines rigour.** What a piece of work must carry is derived from
what it touches, and from nothing else.

**Two types never reach [commitment](./commitment.md)**: a question and a service
request are answered or actioned, and neither is promised for a version.

**These are not types, and are not admitted as synonyms for any of them:** *bug*,
*feature*, *epic*, *user story*, *task*.

## In detail \{#detail}

### Sorting the three that are claims

Capability, quality and assurance are the three kinds of thing a repository may claim,
and one test sorts them.

| Ask | Then it is |
| --- | --- |
| Does it introduce a **new outcome** for a party the system serves? | **Capability** |
| No, but does it **constrain an existing outcome**? | **Quality** |
| Neither? | **Assurance** |

The test is applied at the sift rather than later, which is what keeps the door and the
account of what the system claims from disagreeing about what may be claimed.

### Stating a capability as an outcome

*A client can export invoices* is a capability. *Add the export endpoint* is the thing
built, and an item worded that way produces a claim nobody outside can read. The wording
decides whether what the system claims holds outcomes or implementation nouns, and the
wording is fixed here rather than repaired at the end.

### A chore that changes no claim may still change the release

A dependency update alters nothing anybody can newly do, so it is a chore. It may also
touch every service in the estate, in which case it carries the apparatus that touch
implies. Both are true at once, and neither one adjusts the other.

### A repeated service request is a missing capability

Nothing is built for a service request, so a request that arrives every month is not
work being done — it is a party unable to do something for themselves that nobody has
noticed. The remedy is to raise a capability, which is the same shape as a question
whose answer existed only in somebody's head.
