# Enablement run — 2026-08-12

Running **Enable a repository** against `Kieranties/hallmark` itself.

This log lives on `dogfood`. It records what was actually done, in order, and
where the practice bit. Nothing here is the practice; the practice is what
reaches `main`, and it reaches `main` only through an issue.

> **Status: incomplete.** Steps 1–4 done, step 5 partial, steps 6–7 not started.
> Seven items in the door. #1 specified pending verification; #2, #3 accepted;
> #4, #5, #7 awaiting sift; #6 is the initiative capturing this run.

---

## Branch model settled this session

| Branch | Carries |
|---|---|
| `main` | What is true. Only what has travelled the state track |
| `published` | The artifacts that building `main` produces |
| `dogfood` | This log, and ideas being tried. Never a route into `main` |

**Nothing reaches `main` except through an issue.** `dogfood` is where the
practice is exercised on itself; work discovered here is raised in the door and
acted on against `main` like any other item.

`main` was opened with an **empty root commit**. The repository had no commits,
so `main` had to exist before anything could branch from it — and seeding it
with content would have put work on `main` that never passed the door.

---

## The run

### Step 1 · Name who it serves — **done**

Four personas: `adopting-team`, `actor-under-the-practice`,
`application-implementer`, `evaluator`.

Actor kind is deliberately absent. Splitting a persona into *human developer*
and *agent* would breach **Invariant** — the route does not change with the kind
of actor.

### Step 2 · Name who may work on it — **done**

| Actor | Kind | Delegated by |
|---|---|---|
| `kieranties` | human | — |
| `agent-session` | agent | `kieranties` |

`agent-session` is a **declared class**, not a named model: any session working
this repository, holding its roles by standing delegation. Attribution per act
still records the specific model and session.

**The Verifier role is held** — a session that did not hold the work may verify
it. This is *not* recorded as a fact; it is computed from the actor list (see
F8).

### Step 3 · Name the door — **done, and split**

```yaml
door:
  kind: github-issues
  capture: https://github.com/Kieranties/hallmark/issues
  board:   https://github.com/users/Kieranties/projects/2
```

Split because they answer different questions. Things **land** as issues, and
capture must be free — routing capture through the board would charge for it.
But `State` and `Commitment` live on the board, and an issue that never reaches
it has **no state at all**, so it cannot even be `New`. Declaring only one of
the two leaves either capture gated or the state axis homeless.

### Step 4 · Add the five item types — **done, under concession `6.1`**

Issue Types are an org-level GitHub feature and this is a personal repository.
Type is carried by a prefixed label instead:

`type-capability` · `type-fix` · `type-chore` · `type-question` · `type-initiative`

Prefixed so they sit *alongside* GitHub's defaults rather than replacing them.

> **The first instinct was to delete GitHub's nine default labels, and that was
> wrong.** It would have made the instantiation look clean by erasing the
> evidence that it is compromised. The defaults stay; the compromise is recorded
> as **`6.1`**. This is the "drifting into application" tell in a new costume —
> changing the tool so the process fits, instead of recording that the tool
> does not.

The two markers are also labels — `ready`, `ready-for-agent` — and this is **not**
a concession. The practice leaves marker form to the application, and a label is
the natural fit.

### Step 5 · Add two fields — **partial, under concession `6.2`**

The board carries `Status` (the ten state-track values) and the built-in
`Milestone`.

**A `Commitment` single-select and a `Version` text field were built, then
deleted.** Milestone `0.1.0` was created as the commitment mechanism, and both
fields turned out to be **totally determined by it** — no milestone means
`Uncommitted`, a milestone means `Committed` for that version. Carrying them
separately declared a computable fact, which breaches **Derived**.

How commitment is tracked is an application concern that must be **declarable**
rather than fixed — raised as #9.

**The state axis is carried by a field named `Status`, not `State`**, and that
could not be avoided. The sequence:

| Attempt | Result |
|---|---|
| Create a custom `State` field | Worked — but Projects v2 ships a **built-in** `Status` field, so the board then had **two** positional fields, and its default view grouped by the wrong one |
| Delete the built-in `Status` | Refused — *"Only custom fields can be deleted"* |
| Rewrite `Status`'s options to the ten state values | Worked |
| Rename `Status` → `State` in the same call | **Silently ignored.** The API accepts a `name` argument on a built-in field, returns success, and does not apply it |
| Delete the now-duplicate custom `State` | Worked |

**Incomplete:** nothing forces an issue onto the board (F10).

### Step 6 · Make specs run, and make publishing work — **not started**

Publishing is designed but unbuilt: a build pushes artifacts to a distinct
`published` branch, with CD updating versions. This makes `Completed`
**queryable** — you look at the branch rather than reading the pipeline log,
which is exactly the distinction step 6 point 3 asks for.

Specs cannot run: no toolchain is chosen, and the choice is a genuine ADR
trigger rather than something to settle silently inside the first item.

### Step 7 · Prove it — **in progress, and stalled at the second state**

The first two lines of the step-7 checklist are ticked. The third cannot be.

| Line | |
|---|---|
| It arrived in **the door** and nowhere else | ✓ #1, #2, #3 |
| You **sifted** it — gave it a type, and accepted it | ✓ all three `type-chore`, `Accepted`, `Uncommitted` |
| You wrote **acceptance criteria** and a **spec that fails** | ✗ **blocked** — no toolchain, so no spec can fail |
| Someone **other than you** confirmed the criteria were adequate | ✗ not reached |
| …remaining six lines | ✗ not reached |

**The walk stops at `Accepted`.** Not because the practice is wrong, but because
`Specified` demands a failing executable spec and nothing can execute one yet.
The blocking item — choosing the toolchain — **is not in the door**.

#### The sift raised two things

**#1 overlaps #2 and #3.** Its body describes the declarations as *"the personas,
the actors, and the door"*, then scopes itself to *"the cross-cutting concerns"*.
On the first reading it subsumes the other two and one of the three should have
been ruled `Duplicate`. Harmless at `Accepted`; a real problem at `Specified`,
where three items would carry overlapping acceptance criteria. **Unresolved.**

**Backlog item #3 bit on the very first sift.** All three items are `Accepted`
and none carries a marker, so nothing calls them to action. The practice's own
open question — *who sets the marker* — has the natural answer *whoever completes
a step marks what is next*, which would make it the sifter's job. It is
undecided, so the items were left unmarked rather than settling an open practice
question by doing it. **An item can now sit `Accepted` and invisible.**

---

## Findings

Numbered here, not in conversation. Counts re-derived rather than quoted.

| # | Finding | Bites at |
|---|---|---|
| **F1** | **Step 1 assumes a repository that serves users of a running system.** A repository whose product is *a practice* still has personas, but you have to squint. A cold-start team stalls on the first step of the first page | Step 1 |
| **F2** | **Step 2 has no wording for one human plus an unbounded supply of agent sessions.** It covers "one actor, Verifier unheld" and it covers a team. This is neither | Step 2 |
| **F3** | **Most of the existing backlog cannot get through the door.** Of the Obsidian backlog, the 17 `Open` rows are items — but the 6 **known weaknesses** are a risk register with no completion criterion, and the 16 **homeless artifacts** are nouns, not work. Neither has one of the five types. Same shape as open backlog item #1: the door is short by more than two | Step 4 |
| **F4** | **Step 7 assumes a repository that already contains something.** It asks for a *trivial* item — "a typo fix, a version bump". An empty repository has none. The first item necessarily creates the first thing, touches everything, and attracts **maximum rigour** under D22. Cold-start-proof has a hole at exactly the cold start | Step 7 |
| **F5** | **GitHub ships the retired vocabulary as defaults.** `bug`, `enhancement`, `question`, `duplicate`, `wontfix`, `invalid` — precisely what the practice retires. `question` and `duplicate` also *collide* with reserved terms while meaning something looser. Step 4 as written leaves two vocabularies live at once | Step 4 |
| **F6** | **`Specified` requires a failing executable spec for every item, including a chore.** For a declarations artifact this **forces structured, schema-checkable data** — prose cannot reach `Specified`. That is a strong and useful result, and the practice never says it. A team writing prose declarations would be stuck without knowing why | Step 5 · Specified |
| **F7** | **A repository whose product is documentation has no publish act.** `Completed` requires *"the artifact has left the repository and is retrievable by a consumer"*. Step 6 assumes a package, an image or a binary | Step 6 · Completed |
| **F8** | **Step 2 asks you to assert a derived fact.** *"Record that the Verifier role is unheld"* — but whether it is held is **computable** from the actor list. Writing it down breaches **Derived** | Step 2 |
| **F9** | **A concession's expiry is undefined as date-or-condition.** The model says *scoped, expiring, counted* and never says which. `6.1`'s natural expiry is a condition. Date-only makes it expire while still true; condition-only means it may never expire | Concessions |
| **F10** | **The board's auto-add cannot be build-enforced.** `gh project` has no `workflow` command; auto-add is a manual toggle in the web UI. So an item can be captured carrying **no State** — an item that exists but has not reached `New` | Step 3 · Step 5 |
| **F11** | **The delegation ceiling covers roles but is silent on disciplines.** The actor model has two branches converging on the actor, and the ceiling rule names only one. Resolved by decision this session — recorded because the *gap* is a property of the model, not of this repository | Role model |
| **F12** | **The door's own configuration is not under the practice.** Labels, fields, board settings and workflows are declared nowhere, versioned nowhere, and checked by nothing. The door is the single most load-bearing piece of the instantiation and it is the one piece with no record. **Demonstrated, not theorised** — see the incident below | Step 3 · Step 4 |
| **F13** | **A concession's own lifecycle is undefined.** An ADR is *"immutable and dated, superseded never edited"*. The model says a concession is *recorded, scoped, expiring, counted* — and never says whether the record may be revised when the facts move. `6.1` went stale within the hour and nothing said what to do about it | Concessions |

| **F14** | **The board's positional field cannot be named in the practice's vocabulary.** GitHub's built-in `Status` field is undeletable, and its name is immutable — `updateProjectV2Field` accepts a `name` argument, returns success, and ignores it. So the state axis is carried by a field called `Status`. **This is not cosmetic:** the practice retired `Done` *because* it conflated development-complete with in-the-client's-hands, replacing it with **development status** and **deployment status**. A bare `Status` re-opens exactly the question that split closed. The model also names *a lint against the controlled vocabulary* as one of three guards on the domain model — and the door itself now fails it | Step 5 |

| **F15** | **The first executable spec in a repository has nothing to execute it.** `Specified` requires a failing executable spec. If the verification tooling is a **capability**, it needs one before it is built — and the thing that runs specs *is the thing being built*. The practice states no route through this. **Every enabled repository hits it once**, at the moment it is most vulnerable: a cold-start team, on their first item, with nothing working yet | Step 6 · Specified |

**Sixteen findings across steps 1–5.** Steps 6 and 7 are not started, so the two
places the note itself predicts will bite are still untested.

> **F15 is the deepest one found today.** F4 said an empty repository has no
> trivial item to walk. F15 says something stronger: the first item that *must*
> be built to make the practice work cannot itself travel the practice. The
> `Specified` criterion is unreachable exactly once per repository, and the
> practice's answer to *"skipping is never sanctioned"* would make that a
> concession on day one — which reads as the model conceding to itself.

**Two of the fourteen were produced by accidents, not analysis** — F12 and F13 by
the label deletion, F14 by discovering a built-in field that could not be removed
or renamed. Neither would have come out of design work. That is an argument for
walking the loop early rather than specifying it further first.

### Incident — the door drifted and nothing noticed

Between capture and the sift, eleven of the sixteen labels were deleted by hand:
the nine GitHub defaults and **both markers**. The five `type-*` labels survived.

Three things this exposes, none of which were visible before it happened:

1. **Detection was a human remembering.** No check, no sentinel, no build. The
   drift was reported in conversation, which is precisely the *"asking a human to
   be a database"* failure the practice exists to kill — running inside the
   practice's own tooling.
2. **The markers are load-bearing and were silently removable.** With `ready` and
   `ready-for-agent` gone, no item can be called to action. The loop stops, and
   the board still looks healthy.
3. **`6.1` went factually false.** Its compromise text asserts GitHub's defaults
   *remain live alongside* the `type-` labels. For a period, they did not. A
   concession that misdescribes the compromise is worse than no concession — it
   is a record asserting something evidence does not prove.

**All sixteen labels were restored** — on the grounds that the deletion was
unintended and the recorded position was deliberate, so the world should be
returned to the record rather than the record edited to match the world.

**The nine defaults were then deleted again, by decision.** That is a different
act from the accident and from the original error: the first was a mistake, the
second was me silently making the tool fit, and this was the accountable actor
choosing, on the record. The door now carries the practice's vocabulary and
nothing else.

**So F13 got answered by being lived through, in both directions:**

| The world changed | The right repair |
|---|---|
| **By accident** | Restore the world. The record was right |
| **By decision** | Revise the record. The world is right |

The test is not *which is easier to change* — it is **which one was intended**.
`6.1` was revised accordingly, and carries a `revision-note` saying what was
removed and why, so the superseded claim is still readable. That is the ADR's
supersession discipline applied to a concession, and it is a candidate answer to
F13 rather than a settled one.

**The evidence survives the labels.** F5 records that GitHub ships the retired
vocabulary as defaults, and an adopting team following step 4 as written will
meet exactly that collision. Deleting the labels here removes the collision from
*this* repository; it does not remove the finding, because the finding lives in
the record rather than in the world. That is the distinction the whole practice
turns on.

> **This is the strongest argument yet for `.hallmark/` holding the door's
> declaration** — labels, fields, markers — with a check reconciling *declared*
> against *actual*. That is the same shape as reconciling a declared touch set
> against a derived one, and it is the mechanism the model already owns.

---

## Decisions taken

Pending migration into `decisions/` as ADRs.

| Decision |
|---|
| The repository is the sole source. All Obsidian material moves; the vault stops being an authoring surface |
| `main` is truth · `published` is build output · `dogfood` is where ideas are tried. Nothing reaches `main` except through an issue |
| The door is split into `capture` (issues) and `board` (Projects v2) |
| Item type is carried by a prefixed label — **concession `6.1`** |
| Markers are labels, and that is not a concession |
| **The delegation ceiling extends to disciplines**: an agent's disciplines must be a subset of its delegator's, exactly as its roles must be. *New — the model does not say this today (F11)* |
| Personas and disciplines are one structured file each, globbed rather than indexed. An index would be a derived fact requiring maintenance, which **Derived** forbids |
| The declarations are structured data, not prose — forced by `Specified` (F6), not chosen |
| `verifier-held` is computed from the actor list, never declared (F8) |

---

## Concessions incurred

**The records live on the items that incurred them**, as append-only comments.
They are not reproduced here — one evidence base, many renderings, and a log
holding its own copy of a concession is exactly the drift this practice exists
to prevent.

| | Against | On | Clears when |
|---|---|---|---|
| **`1.1`** | `Specified` requires a failing executable spec. No runner exists | #1 | #4 lands, and the criteria are expressed as a spec observed to fail *before* the file exists |
| **`6.1`** | Every item carries exactly one of the five types | #6 | a build check rejects any issue not carrying exactly one `type-` label |
| **`6.2`** | Reserved terms are used as written — the state axis is `State`, not `Status` | #6 | GitHub permits renaming the built-in field, **or** the door moves |
| **`6.3`** | **D178** — a repository declares personas, door and actors before any item travels | #6 | #5 closes, provided #1, #2 and #3 are already closed |

**`6.2` is the first concession the practice cannot clear by its own effort.**
`6.1` expires when we write a check. `6.2` expires when GitHub changes, or when
the door moves. The model treats a concession as debt to be paid down and assumes
the debtor can pay — it has no shape for one whose expiry condition belongs to a
third party.

**`6.3` was incurred before the work to fix it began** — at the moment the first
item was sifted, not by any later decision. The clearest case yet of the mechanism
doing its job: an invisible compromise converted into a tracked liability,
**backdated to when it happened rather than to when someone noticed**.

## State at stop

| | |
|---|---|
| **Specified, pending verification** | #1 the door — criteria written, carries `1.1` and `6.3`. **Held at `Accepted`** until an independent Verifier confirms the criteria are adequate |
| **Accepted** | #2 personas · #3 disciplines — `type-chore`, committed to `0.1.0`, unmarked |
| **Captured, awaiting sift** | #4 tooling · #5 actors · #7 concession register · #8 the Initiative type · #9 commitment mechanism — all `New`, untyped |
| **Not in the door** | The sixteen findings · a countable concession register · the D1–D186 ADR migration · moving `Product/` out of Obsidian |
| **Blocked** | #1 on independent verification. #2, #3 on #4. #4 on F15 — it cannot reach `Specified` by the practice's own rule |

> **The walk got two states in and stopped on something that was not in the door.**
> That is the finding the whole exercise was for. The one-door rule says every
> signal enters the same queue — and the thing blocking every item in that queue
> was being carried in conversation instead of written into it. **It is now
> captured as #4**, which is the rule working: the blocker became visible the
> moment it was written down, and so did the fact that it cannot move either.

## Specifying #1

#1 was narrowed from *"the declarations"* to **the door alone**, which resolved
the #1/#2/#3 scope overlap and immediately exposed that **actors had no owner** —
raised as **#5**.

**User stories are correct here even though #1 is a chore.** `Specified` requires
*persona named · outcome stated · problem understood* for **every** item. The type
does not change what `Specified` demands; it changes whether the result produces
a **catalogue claim**. A chore's story is real and never reaches the catalogue.

Two concessions were raised as comments on the item, append-only:

| | Against | Clears when |
|---|---|---|
| **`1.1`** | `Specified` requires a **failing executable spec**. No runner exists | #4 lands, and the criteria are expressed as a spec observed to fail *before* the file exists |
| **`6.3`** | **D178** — a repository declares personas, door and actors *before any item travels*. #1–#3 reached `Accepted` with none declared | #5 closes, **provided #1, #2 and #3 are already closed** |

**`6.3` was incurred before the work to fix it began** — at the moment the first item
was sifted, not by any later decision. It is the clearest case yet of the
mechanism doing its job: an invisible compromise converted into a tracked
liability, backdated honestly rather than to when someone noticed.

> **A proposed third concession was rejected.** *"Only the door is configured for
> now"* is a **scope decision**, not a compromise — it becomes one only if actors
> go uncaptured, and the fix for that is an item, not a concession. **Concede what
> you cannot fix; capture what you can.** Conceding a scope choice would inflate
> the ledger with things that were never wrong, and the open-concession count is
> only sharp while everything in it is a real debt.

### #1 is held at `Accepted`, deliberately

`Specified` also requires **a Verifier to confirm the criteria are adequate**, and
`worker ≠ verifier` is never conceded. The criteria were materially authored in
the working session — the story reworded, two criteria added, the concession
framing supplied — so **that session is the Worker and cannot verify its own
output.**

Confirmation goes to a **fresh session** holding the item, the criteria and the
standards, and explicitly **not** this conversation. That is the actor declaration
being used as intended, and the first genuine exercise of independence in this
repository.

### Application note — a silent write failure, twice

Setting `Commitment` immediately after `gh project item-add` **silently no-opped**
on both #4 and #5: the command returned without error and the field stayed empty.
It succeeded on retry. Same shape as `updateProjectV2Field` accepting a `name`
argument and ignoring it (F14). **Both were caught only by reading the value
back.** Verifying writes rather than trusting exit codes is not optional against
this API — which is the practice's own *"queried, not reported"* rule, arriving
from an unexpected direction.

## Concessions are numbered per ticket

A repository-wide sequence — `C1`, `C2`, `C3` — was abandoned. It needs a
**central allocator**: two actors conceding concurrently on different items
collide, and nothing in the practice says who issues the next number.

**Identifier is `<issue>.<n>`.** `1.1` reads as *concession 1 on ticket 1*.
Per-ticket numbering is locally allocatable — the item is the scope, so `n` is
just a count of what is already on it.

Renumbering exposed the next finding immediately.

| Was | Incurred by | Now |
|---|---|---|
| `C3` no failing spec runner | specifying #1 | **`1.1`** |
| `C1` type carried by an unenforced label | door setup, step 4 | **`6.1`** |
| `C2` state axis named `Status` | board setup, step 5 | **`6.2`** |
| `C4` D178 breached | the enablement run itself | **`6.3`** |

### F16 · The enablement run was work, and it never entered the door

Three of the four concessions had **no ticket to attach to**. A branch model,
seven labels, a board with three fields and two accepted compromises — none of it
was ever an item. No type, no state, no acceptance criteria, nothing verified it.

**Fifteen findings were raised about the practice by a process that was itself
outside the practice.** The one-door rule says every signal enters the same queue
and there is no second queue for internal work; this session ran an afternoon of
untracked work without noticing.

It is not a flaw in the numbering scheme. **It is the scheme correctly refusing
to host work that never entered the door** — which is how the gap was found at
all.

Captured retroactively as **#6 · Enable this repository**.

### A proposed third concession was rejected

*"Only the door is configured for now"* is a **scope decision**, not a compromise.
It becomes one only if actors go uncaptured, and the fix for that is an item —
**#5** — not a concession. **Concede what you cannot fix; capture what you can.**
Conceding a scope choice would inflate the ledger with things that were never
wrong, and open-concession count is only a sharp signal while everything in it is
real debt.

## #6 became an initiative, and the type does not fit

#1 through #5 are now children of #6 — the whole enablement run under one parent.

Three properties of `Initiative` are contradicted by the item carrying it, and
they are **raised as #8** rather than recorded here, because each is a defect in
the model and the model is what gets fixed.

| | |
|---|---|
| **No state of its own** | *"Its position is the aggregate of its children."* #6's `Accepted` was set by hand. **Nothing computes it**, and the model never says what *adding up* means — minimum? mode? |
| **Spans several capabilities** | Every child is a `type-chore`. The type cannot describe a body of work spanning several **chores**, which is exactly what an enablement run is |
| **No work of its own — but it has some** | `6.1` and `6.2` were incurred by steps 4 and 5, which **no child covers** |

The third is the sharpest. **An initiative that carries concessions is, by the
model's own definition, impossible** — a concession is incurred by doing
something, and an initiative does nothing.

> **`Initiative` is the practice's only grouping construct.** If it cannot group
> chores, cannot carry the compromises made while grouping them, and has no
> stated aggregation rule, then **any body of non-capability work is
> ungroupable** — which is most of what enabling a repository consists of.

### Body text that duplicated metadata was removed

#6 initially listed its children, and listed the items that *ought* to be
children, as prose in the issue body. Both were deleted: `subIssues`, `parent`
and `subIssuesSummary` are all queryable, so the list was **a hand-maintained
copy of a fact the tracker already holds** — the same class of drift as the log
keeping its own copy of the concession records.

*The general rule this session keeps rediscovering: if it is queryable, do not
write it down.*

## The conventions are unrecorded, so they were captured

Five conventions emerged in use today and existed nowhere but this log — the
`<issue>.<n>` identifier, concessions attaching to the item that incurred them,
the `concession` label marking carriers, comments rather than body text, and
backdating to when the compromise was incurred rather than noticed.

Raised as **#7**, together with the three ways the model underspecifies the
concession mechanism (F9 expiry form · F13 record lifecycle · a concession whose
expiry belongs to a third party).

**The `concession` label marks carriers, not concessions.** It does not make them
countable, and open-concession count remains uncomputable.

### Silent write failures — now a pattern, not an incident

Four occurrences today, all caught only by reading the value back:

| | |
|---|---|
| `updateProjectV2Field` | accepts a `name` argument on a built-in field, returns success, ignores it |
| `gh project item-edit` | setting `Commitment` straight after `item-add` no-ops silently — on #4, #5 and #8. On #8 it failed **twice in one invocation** and succeeded on a separate call |
| a local renumbering script | collapsed ```` ```yaml ```` into ```` ``yaml ````, breaking a code fence |

**Exit codes are not evidence against this API.** Verifying writes by querying
them back is the practice's own *"queried, not reported"* rule, arriving from a
direction nobody designed for — and it is the same rule that makes `Completed`
mean *go and find the published thing* rather than *the pipeline said so*.

### The log went stale, and an independent session caught it

A second Claude session working the `main` worktree reported two divergences
between this log and the board, both correct:

| Log said | Board said |
|---|---|
| #1 is **held at `Accepted`** pending verification | #1 is **`Specified`** |
| `Commitment` set to `Uncommitted` on three items | the `Commitment` field **no longer exists** |

Neither was a lie when written. The board moved, the fields were deleted, and
**nothing propagated either fact into the log.**

> **This is the log failing in exactly the way the practice predicts.** It is a
> hand-maintained narrative of state that is queryable elsewhere — the same
> defect as #6 listing its own children, and the same rule that has now caught
> four things: **if it is queryable, do not write it down.** The log's job is
> what *happened* and what it *cost*; every sentence in it asserting current
> state is a copy waiting to rot.
>
> **It was found by an actor with clean context reading the record**, which is
> the mechanism working — and it needed no instruction to look.

**Next act:** an independent session verifies #1's criteria. Then sift #4, #5, #7
and #8.
