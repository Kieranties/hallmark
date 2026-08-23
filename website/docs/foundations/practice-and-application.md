---
title: Practice and application
description: The practice is the normative account; an application is one technology-specific instantiation of it — the same interface and implementation split the role model uses.
sidebar_position: 2
---

# Practice and application

## What it is \{#definition}

**The practice is the normative, technology-agnostic account of how the model works and
why; an application is one technology-specific instantiation of it.**

## Why it exists \{#why}

**It is the same split as [role and actor](../parties/the-four-roles.md), one level up.**
The practice is the interface and an application is an implementation, which is what makes
*can we move to a different tracker?* a question with an answer rather than a rewrite.

**Without the split, every tool decision becomes a practice decision.** A practice written
in terms of one tracker's vocabulary cannot be adopted anywhere else, and cannot survive
that tracker being replaced. Written as an interface, the practice says every item carries
exactly one type; it does not say a label carries it.

**A team with no practice does not learn a model and then comply with it.** They use
tooling that embodies it and learn by being unable to do the wrong thing easily. That
makes the practice the *specification of the machinery*, rather than onboarding material —
and it is why the split is load-bearing rather than tidy.

## Rules \{#rules}

**The practice is normative and technology-agnostic.** It says what must be true and why.
It is durable.

**An application is one technology-specific instantiation** — templates, pipelines,
agents, registries, the tracker a door is realised in. It is replaceable without touching
the practice.

**The named position is the interface; the repository is the implementation.** This holds
for components as it holds for people: the practice names what a component must hold,
never which repository holds it.

**The practice never names a tool, a tracker, a vendor or a repository.** Where a name
appears it is an illustration of one application, and it is marked as one.

**An application may add or constrain, never contradict.** A contradiction is a defect in
the application, not a variant of the practice.

**Where a mechanism cannot be stated without naming a technology, it is an application
concern** and does not belong in the practice.

**This site is the practice.** It holds the normative text, and it is what an actor reads
in order to act. It is not an application, and it describes none.

## In detail \{#detail}

### Which side something falls on

| The practice says | An application decides |
| --- | --- |
| Every item carries exactly one [type](../items/types.md) | That a label carries it, and what the labels are called |
| Every signal enters one [door](../items/the-door.md) | Which tracker is the door |
| A [marker](../items/markers-and-claiming.md) calls an item to action | Whether that is a label, a column, an assignee or a notification |
| An act's [sufficiency](../acts/sufficiency.md) set is defined and reachable | Where the set lives and how it is fetched |
| How many [environments](../loop/verification.md) exist is not normative | How many there are, and what they are called |

The test is the one the naming discipline uses: could somebody instantiating this same
practice somewhere else have made a different choice? If yes, it is an application
decision.

### Applications land later

The practice is written first, and deliberately. Technology-specific material gets a
reserved place in the tree and arrives once the practice it instantiates is settled —
writing them together would produce a practice shaped by whichever tool was to hand.

Nothing on this site describes an application today.

### The site is subject to what it describes

Because the site *is* the practice, the rules it states bind the pages stating them. A
page that defines a term another page owns is the same defect as a repository with two
copies of a standard, and the vocabulary discipline that catches it is on
[how Hallmark names things](../language/how-hallmark-names-things.md).
