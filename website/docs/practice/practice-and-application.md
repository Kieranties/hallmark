---
title: Practice and application
description: The practice is the interface; an application is an implementation of it — which is what makes the practice declared, portable, and able to survive its tooling.
sidebar_position: 3
---

# Practice and application

**The practice is the interface; an application is an implementation of it.** The practice
states what must hold, who may act, and how work travels — and it never names a tool. Adopting
one tracker over another, or replacing a pipeline, changes the application and leaves the
practice untouched.

## What follows from the split

**The practice must be declared.** A system states the standards it adopts and the way it
works, rather than inheriting them by convention or by whoever last touched it.

**The practice must be portable.** Nothing in it may depend on a capability only one tool
happens to have.

## The practice

**The interface — what must hold, who may act, and how work travels.** Normative and
technology-agnostic: it names no tool, and nothing in it may depend on a capability only one
tool happens to have.

**The practice is durable.** It is the source from which any application is derived, and the
thing that survives that application being replaced.

## An application

**One technology-specific instantiation of the practice** — the trackers, pipelines, templates
and agents through which a system actually runs it. An application declares everything the
practice deliberately leaves open: its [personas](../parties/personas.md), its
[disciplines](../parties/disciplines.md), its [standards](../work/standards.md), and whatever
[work](../work/types.md) subtypes it needs.

**An application is replaceable.** Changing tracker, language or pipeline changes the
application and leaves the practice untouched — which is the entire reason the two are kept
apart.

*What a system must declare is written on [declaring an application](../apply/declaring-an-application.md).*
