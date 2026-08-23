# ADR 0001 — A concession is registered as an item on the door

| | |
|---|---|
| **Date** | 2026-08-23 |
| **Status** | Accepted |
| **Level** | Practice — the concession control itself |
| **Item** | [#88](https://github.com/Kieranties/hallmark/issues/88) |
| **Trigger** | Judgement ceiling — genuine alternatives existed, and reversal is expensive |

> **Immutable.** Superseded, never edited.

## Context

A concession is the only permitted route to ship a known compromise. The practice
requires it to be attributable to a named actor, recorded as an artifact, scoped to one
capability, edition or client, expiring, client-visible, and automatically
debt-generating. It then says **open concession count is the first real health metric.**

Nothing says where that artifact lives, or what counts it. A metric nothing computes is
a metric in name only, and the properties above are not free-standing — *expiring*
needs something to hold a date, *counted* needs something to query, *attributable*
needs something with an author.

The practice is also explicit that the count is the model's sharpest exposure: target
it and concessions stop being *raised*, not *needed*, which restores exactly the
invisibility the control exists to destroy. So the record has to be cheap to raise. A
compromise made at six on a Friday is conceded only if conceding is easier than not.

One line in the delivery model already leans on an answer without stating it: *"One
door. Every signal — client request, bug, chore, security finding, sentinel alert,
**concession debt** — enters the same queue."* Concession debt is named as something
that arrives at the door, and the door admits items.

## Decision

**A concession is registered as an item on the door**, carrying the actor who conceded,
what was conceded, its scope, and its expiry.

Three things follow and are not separable from it:

1. **The count is a query, not a report.** Open concessions are the items on the door
   that are concessions and are not yet closed. Nothing computes the number on a
   schedule and nothing publishes it — it is asked for.

2. **The item that took the concession names the concession item.** The compromise and
   the record of it are two facts about two different things: one item shipped short of
   a standard, and one debt is outstanding. Registering the second on the first would
   end the debt when the first item closed, which is precisely when it starts.

3. **Expiry is a date on the item, and expiry is not closure.** A concession that
   expires unclosed is an overdue debt, still open and still counted. Nothing may
   silently clear it.

## Alternatives considered

| | Shape | Why not |
|---|---|---|
| **B** | **A file in the repository**, beside the code it compromises | It travels with the thing conceded, which is its one real advantage. But counting means scanning a tree, expiry means a date nothing reads, and a concession scoped to a client or an edition has no code to sit beside. It also puts the record where only the people already in the code will see it, and *client-visible* is one of the six properties |
| **C** | **A field on the item that carries the concession** | Cheapest to raise, and wrong at the two moments that matter. A concession cannot outlive its item — but expiry usually does, since the point of an expiry is that the compromise is cleared *later*. And a closed item takes its fields out of the open queue, so the debt disappears at the exact moment it becomes debt |
| **D** | **A register — one document listing all open concessions** | A second queue with a different lifecycle, maintained by hand, and nothing forces an entry. This is the shape the practice rejects everywhere else: a document people are asked to remember |

## Consequences

**Concessions compete for attention with everything else, and that is intended.** An
open concession is an item in the same queue as a client request and a security
finding. The practice's objection to separate queues — internal work starves — applies
to debt more than to anything else.

**The door must be able to carry an item that is not work.** A concession item is a
recorded liability; clearing it is work, and that work may be a separate item. This
does not need a new construct, but it does mean the sift rules on concessions like
anything else.

**This repository's declaration is now divergent.** `.hallmark/repository.yml` declares
`concession` carried by a comment on the item, marked by a label — which is
alternative **C** above. The declaration has to move to match this record. That is a
change to one application of the practice, not to the practice, and it is captured as
its own item rather than made here.

**What this does not decide.** Whether a concession item carries a type of its own, and
what an expired-but-open concession obliges anyone to do, are both open. Nothing here
pre-empts them. The practice also still owes *how* a concession is raised — the wording,
the required fields — and that belongs with the application, not with this record.

**What it does not buy.** Nothing counts concessions until something queries the door
for them. Registering them as items makes the count *computable*; it does not compute it.

## Superseded

None. This is the first record in `docs/adr/`.
