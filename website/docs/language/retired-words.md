---
title: Retired words
description: Every word Hallmark has retired, the ambiguity it carried, and the words that replaced it.
sidebar_position: 3
---

# Retired words

## What it is \{#definition}

**This page records every word Hallmark has [retired](./how-hallmark-names-things.md#rules),
the ambiguity each one carried, and the words that replaced it.**

## Why it exists \{#why}

**A word removed without a record comes back.** Whoever reintroduces it was not in the room
when it was retired, is using it in one of its ordinary English senses, and is not doing
anything wrong by their own lights. Nothing stops them except a list they can be pointed at.

**The record also has to say what the word was doing.** *"Do not say `done`"* invites someone
to find a synonym for `done`, which reproduces the ambiguity under a new spelling. *"`Done` was
carrying both development-complete and in-the-client's-hands"* tells them which distinction to
make, and the synonym stops being tempting.

## Rules \{#rules}

**None of the words below is used in the practice's own text.** One appearing in a page, an
item or a decision record is a defect to fix.

**Each is replaced by the words in its row**, which each carry one reading.

| Retired | Was carrying | Replaced by |
|---|---|---|
| **Available** *(as a state name)* | Described the artifact, not the item. It read naturally for a capability and barely parsed for a fix or a chore, and every type travels the same track | [`Completed`](../loop/completed.md) for the state · [published](../loop/completed.md#rules) for what the artifact is |
| **Authority** | A party that acts, as in *the licensing authority*, versus an entitlement that is held. Caught mid-adoption and retired before anything depended on it | [Permission](../parties/actors.md) for the entitlement · [discipline](../parties/disciplines.md) for the party |
| **Catalogue** *(bare)* | What the platform does, versus which editions are deployable | **Capability catalogue** · **edition registry**. Both belong to *Claims and evidence*, which is not written yet |
| **Certified** *(as a state name)* | The act and evidence of certifying, versus the state that results | **Certification** for the act, the record, the environment and the certified set — all in *Claims and evidence* · [`Completed`](../loop/completed.md) for the state |
| **Change** *(as a hierarchy level)* | A unit of work, versus anything that alters the system. It named the bottom of the hierarchy *and* the thing the track carried | [Item](../items/the-door.md) — anything that enters the door, always carrying one [type](../items/types.md) |
| **Design** *(bare)* | The shape of the outcome, versus the model of the business, versus the structure that realises it | [Product design · domain design · technical design](../loop/design.md) |
| **Done** | Development-complete, versus in the client's hands | **Development status** · **deployment status**. Both belong to *Claims and evidence* |
| **Explored** | An activity under way, versus an achievement reached — and, as a commitment value, a duplicate of a state | The activities it named — discovery, research, competitor scans, proofs of concept — which live at [`Specified`](../loop/specified.md) · [`Specified`](../loop/specified.md) on the state axis |
| **Gap** | A missing decision, versus a decision resting on an untested assumption. Opposite remedies | **Undesigned** — decide · **to enable** — build it · **unproven** — find out |
| **Guideline** | *Not ambiguous — too weak.* It reads as optional, and the thing it names is obligatory | [Standard](../acts/the-standards-stack.md) |
| **Modifies** | Grammatical qualification, versus alteration over time | **Qualifies** · **revises**. Both belong to *Claims and evidence* |
| **Operated** | Three unrelated things in one word — in use by a client, watched by a sentinel, and present in the catalogue | **Coverage** for the first, in *Claims and evidence* · nothing for the second, since a [Sentinel](../parties/the-four-roles.md) is a standing loop and never a state · [`Completed`](../loop/completed.md) for the third |
| **Scheduled** | Duplicated `Committed`, which already names a version. Two values where one carried the meaning | [`Committed`](../items/commitment.md) — for a named version |
| **Shaped** | Named an activity, where every other state names an achievement — and it did not say what you had at the end of it | [`Specified`](../loop/specified.md) for what must be true · [`Planned`](../loop/planned.md) for how, and in what order |
| **Telemetry** *(bare)* | Instrumentation of the running system, versus visibility over the delivery of change. Different audiences, different homes, different mechanisms | **Product telemetry** · **process telemetry**. Both belong to *Claims and evidence* |
| **Triage** | Sift for validity, versus diagnose and shape | [Sift](../loop/accepted.md) — real, duplicate or rejected · **shape** — persona, outcome, problem — which is the work of [`Specified`](../loop/specified.md) |
| **Verify** *(bare)* | Gathering evidence against a stated standard, versus a [Decider](../parties/the-four-roles.md) judging *this is what I wanted*. The second can be refused or go unanswered, which the first cannot | [Verification](../loop/verification.md) · [acceptance](../loop/verification.md#rules) |
| **Withdrawn** *(overloaded)* | A capability removed after it existed, versus a commitment abandoned before it was ever built. One costs trust, the other costs a conversation | **Withdrawn** keeps the removal, in *Claims and evidence* · [`Retracted`](../loop/stopping.md) for the commitment. *`De-commitment` is retired with it — not ambiguous, just opaque jargon nobody says aloud* |

## In detail \{#detail}

### The one retired for weakness rather than ambiguity

**`Guideline`** is the exception, and it is recorded here so the pattern is not mistaken for
the rule. It was not carrying two readings. It named the right thing and made it sound
optional, when the thing it names is obligatory — *you can improve on a standard; you cannot
improve on a guideline.* It is listed so it is not reintroduced later as a softer-sounding
synonym.

### A retired word in ordinary use is not a violation

The ban is on the practice's own text. Somebody saying *"is it done?"* in conversation is
speaking English. The rule bites when the word lands in something durable — an item, a page, a
decision record, a standard — because that is where it gets read by whoever comes next and
quietly means the other thing.
