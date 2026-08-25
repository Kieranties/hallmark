---
title: Specify
description: Writing what would make the work right, before anything is built — specifications that fail, and criteria that can be driven.
sidebar_position: 4
---

# Specify

**Write what would make this right — before anything is built.** Two questions settle here:
*what will be actioned*, and *what will be provable*.

The output is a set of **specifications**, and they are written so that they **fail**. A
specification that has never failed has never demonstrated that it tests anything; writing it
first is what stops the evidence being shaped around whatever happened to get built.

## Criteria

**A criterion is one statement of what would make the work right**, written here before
anything is built. A step, a measure or a marker — whatever can be driven and shown to hold.

**Criteria are what turn understanding into evidence.** *"The problem is understood"* cannot be
checked by anyone; a criterion can. Most are encoded as specifications and run; the rest are
followed, and their result recorded.

**Every item has criteria**, including a [chore](../work/chore.md) nobody outside will ever
see.

**Where a criterion is a measure, the measure must *be* the goal.** *"Responses under 200ms"*
qualifies. *"Improve throughput"* does not — it is a proxy, and specifying a proxy is how a
target quietly replaces the thing it stood for.

## Specifications

**An executable statement of what the system *should* do.** The only thing that can prove a
[capability](../work/capability.md) — and a capability usually needs several, each proving one
case.

**A specification cannot be recovered from the implementation.** The implementation says what a
system *does*, never what it *should* do — so intent has to come from outside it: the original
request, the conversation that produced it, the outcome that was shaped. A record of current behaviour is a
safety net, not a specification; it becomes one only when someone accountable confirms that
the behaviour was intended. Where no source of intent exists anywhere, nothing can be
specified, and that absence is itself a finding.

**Every type is specified; only a capability becomes a stated one.** A chore still has to say
what would make it right — it simply produces no outcome anyone can be told about afterwards.

> **Done when:** every criterion is written, and each one can be driven.
>
> **Verified when:** someone who did not write them confirms they are adequate — that meeting
> all of them would genuinely mean the work was right.
