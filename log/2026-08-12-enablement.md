# Enablement run — 2026-08-12

Running **Enable a repository** against `Kieranties/hallmark` itself.

**This log records decisions and actions — what we did, what we chose, and what
it cost.** It does not record the state of anything. Item states, board fields,
labels and milestones are queryable, and a narrative copy of them rots within the
hour. That is not a guess: an earlier draft of this file asserted current state
and was caught being wrong twice on the same day.

The practice is what reaches `main`, and it reaches `main` only through an issue.

---

## Actions

In order. Each is something that was done to the world.

### Branches

Opened `main` with an **empty root commit**. The repository had no commits, so
`main` had to exist before anything could branch from it — and seeding it with
content would have put work on `main` that never passed the door.

Created `dogfood` from it, and later a `main` worktree under
`.claude/worktrees/` so a second session could work in parallel. Added
`.claude/.gitignore` so the nested worktree cannot be committed into its own
parent.

### The door

Created five `type-*` labels and two marker labels. Created a Projects v2 board
and linked it to the repository.

**Deleted GitHub's nine default labels — twice, for different reasons, and the
first time was wrong.**

The first deletion was proposed as a tidy-up: the defaults collide with the
practice's reserved words, so remove them. That was **the "drifting into
application" tell in a new costume** — changing the tool so the process fits,
instead of recording that the tool does not. It would have made the instantiation
look clean by erasing the evidence that it is compromised. Reverted.

They were later deleted **by decision**, on the record, by the accountable actor.
Same outcome, entirely different act.

Between those two, eleven of sixteen labels were deleted by hand **by accident**,
including both markers. Restored. That accident produced two findings analysis
would not have (F12, F13) and answered a third by being lived through:

| The world changed | The right repair |
|---|---|
| **By accident** | Restore the world. The record was right |
| **By decision** | Revise the record. The world is right |

The test is not which is easier to change — it is **which one was intended**.

### The board's fields

| Action | Outcome |
|---|---|
| Created a custom `State` field | Projects v2 ships a **built-in** `Status` field, so the board then had two positional fields and grouped by the wrong one |
| Tried to delete the built-in `Status` | Refused — *"Only custom fields can be deleted"* |
| Rewrote `Status`'s options to the ten state-track values | Worked |
| Tried to rename `Status` → `State` in the same call | **Silently ignored** — the API accepts a `name` argument, returns success, applies nothing |
| Deleted the duplicate custom `State` | Worked |
| Created `Commitment` and `Version` fields | Later deleted — see below |

Created milestone **`0.1.0`**, then **deleted `Commitment` and `Version`**. Both
were totally determined by the milestone: no milestone means uncommitted, a
milestone means committed for that version. Carrying them separately declared a
computable fact.

### Items

Captured the declarations as items, sifted them, and specified one of them.
Captured the enablement run itself retroactively once it became clear it had
never entered the door, and made it the parent of the rest.

Raised items for everything this run could not settle: the toolchain, the
concession register, the `Initiative` type's defects, and the commitment
mechanism.

### A second actor

Created a `main` worktree, split a Herdr pane, and started an independent Claude
session in it. **It found two errors in this log without being asked to look** —
an actor with clean context reading the record, which is the mechanism working.

### Two skills, and three more labels

Wrote a `verification` skill and a `work` skill into the `main` worktree, and
added `needs-worker`, `needs-verifier`, `needs-decider`.

They are deliberately mirror images, because the roles are:

| | `verification` | `work` |
|---|---|---|
| **Context** | **Denied** the working session — that is what it is for | **Accumulates** it, including false starts. The only role that does |
| **Concessions** | **Reads** them before ruling | **Raises** them rather than skipping |
| **Stops at** | never moves an item backwards | never crosses a state needing a Verifier |
| **First act** | check independence, then refuse or proceed | **claim the item** by self-assigning |

**The claim is the interesting one.** With several agent sessions able to poll one
door and nothing routing work to anyone, what stops two of them taking the same
item is that the one who takes it says so. It is also what makes the work
attributable afterwards. It looks like bookkeeping and it is the whole
concurrency model.

**And it is already known to be insufficient.** Assignment is also used to
allocate work ahead of time — humans to show workload, agents to a queue — so the
skill's claim proves the item is someone's, not that anyone is doing it (F20,
#17).

`work` covers **sift · specify · plan · build** and routes to one reference file
per act, so only the relevant act loads. Publishing is still absent, so an item can
now reach `Built` and stall there.

Adding build forced three choices worth keeping:

**The PR opens at `Built` and is not merged.** Publishing may run ahead of
verification but does not advance the state — and a Worker merging its own change
leaves the verification gate with nothing to block. Merge follows `Verified`. The
practice's rule maps onto a PR almost exactly.

**The version is conceded rather than substituted.** `Built` requires the version
the item landed in, and nothing records it (#15). Using the milestone instead was
rejected: the milestone names the version the item was *committed* for, so
conflating the two makes **slippage read as zero forever** — worse than
uncomputable, because it looks like an answer.

**Plan revision is ordinary; a wrong approach stops the build.** Plans are
explicitly revisable, so reordering is normal work. Discovering the *approach* is
wrong is what returns an item to `Planned`, so the skill stops rather than
improvising past it and letting a Verifier find it later.

**`verify` could not be used as a name.** It is a retired word — it carried both
*gathering evidence against a standard* and *a Decider judging "this is what I
wanted"*. The reserved terms are **verification** and **acceptance**, and the
standing habit is that verification names its object, which the invocation
argument supplies.

---

## Decisions

Pending migration into `decisions/` as ADRs.

| | Decision |
|---|---|
| **Source** | The repository is the sole source. All Obsidian material moves; the vault stops being an authoring surface |
| **Branches** | `main` is truth · `published` is what building `main` produces · `dogfood` is where ideas are tried. **Nothing reaches `main` except through an issue** |
| **Personas** | Four, and **actor kind is deliberately absent** — splitting a persona into *human developer* and *agent* would breach **Invariant** |
| **Actors** | `kieranties` (human) and `agent-session` — a **declared class**, not a named model, holding its roles by standing delegation. Attribution per act still records the specific session |
| **Door** | Split into `capture` (issues) and `board` (Projects v2). Things **land** as issues and capture must be free, but the state axis lives on the board — declaring only one leaves either capture gated or the state axis homeless |
| **Types** | Carried by a prefixed label, under concession `6.1` |
| **Markers** | Also labels, and **not** a concession — the practice leaves marker form to the application |
| **Delegation ceiling** | **Extends to disciplines.** An agent's disciplines must be a subset of its delegator's, exactly as its roles must be. *New — the model does not say this today (F11)* |
| **Declarations** | Structured data, not prose. **Forced by `Specified`, not chosen** (F6) |
| **Personas and disciplines** | One file each, **globbed rather than indexed** — an index is a derived fact requiring maintenance |
| **Concession identifiers** | `<issue>.<n>`. A repository-wide sequence needs a **central allocator** and collides when two actors concede concurrently; per-ticket numbering is locally allocatable |
| **Concession placement** | On the item that incurred it, as append-only comments, backdated to **when it was incurred rather than when it was noticed** |
| **Commitment** | Carried by milestones, and the mechanism must be **declarable rather than fixed** (#9) |
| **User stories for chores** | Correct. `Specified` requires *persona named · outcome stated · problem understood* for **every** item; the type changes only whether the result produces a catalogue claim |
| **Who sets the marker** | **Whoever completes a step marks what is next.** Needs no scheduler, and it is what lets a Worker and a Verifier call back to each other. *This settles backlog item 3 — by building it rather than by deciding it (#12)* |
| **Markers are two axes** | `needs-worker` / `needs-verifier` / `needs-decider` say **what act is needed**; `ready` / `ready-for-agent` say **who is invited**. Named `needs-*` rather than `ready-for-verifier` so the two axes cannot be read as one — `ready-for-agent` and `ready-for-verifier` would put an actor kind and a role in the same slot |
| **Skill naming** | `verify` is a **retired word** and could not be used. The skill is `verification`, and the invocation argument supplies the object |

### A proposed concession was rejected

*"Only the door is configured for now"* is a **scope decision**, not a
compromise. It becomes one only if actors go uncaptured, and the fix for that is
an item, not a concession.

**Concede what you cannot fix; capture what you can.** Conceding a scope choice
would inflate the ledger with things that were never wrong, and open-concession
count is only a sharp signal while everything in it is real debt.

### A decision that was nearly taken in passing, and was not

Allowing `Committed` **without** a named version. Rejected: it re-opens the split
that retired `Scheduled`, and it makes **slippage uncomputable** for exactly the
items someone cared enough to commit. Recorded so the reasoning survives if it is
raised again.

---

## Findings

Twenty. Counts re-derived, never quoted.

| # | Finding | Bites at |
|---|---|---|
| **F1** | **Step 1 assumes a repository that serves users of a running system.** A repository whose product is *a practice* still has personas, but you have to squint. A cold-start team stalls on the first step of the first page | Step 1 |
| **F2** | **Step 2 has no wording for one human plus an unbounded supply of agent sessions.** It covers "one actor, Verifier unheld" and it covers a team. This is neither | Step 2 |
| **F3** | **Most of the existing backlog cannot get through the door.** The 17 `Open` rows are items — but the 6 **known weaknesses** are a risk register with no completion criterion, and the 16 **homeless artifacts** are nouns, not work. Neither has one of the five types. Same shape as open backlog item #1: the door is short by more than two | Step 4 |
| **F4** | **Step 7 assumes a repository that already contains something.** It asks for a *trivial* item — "a typo fix, a version bump". An empty repository has none. The first item necessarily creates the first thing, touches everything, and attracts **maximum rigour** under D22 | Step 7 |
| **F5** | **GitHub ships the retired vocabulary as defaults.** `bug`, `enhancement`, `question`, `duplicate`, `wontfix`, `invalid`. `question` and `duplicate` also *collide* with reserved terms while meaning something looser. Step 4 as written leaves two vocabularies live at once | Step 4 |
| **F6** | **`Specified` requires a failing executable spec for every item, including a chore.** For a declarations artifact this **forces structured, schema-checkable data** — prose cannot reach `Specified`. A strong and useful result the practice never states. A team writing prose declarations would be stuck without knowing why | Specified |
| **F7** | **A repository whose product is documentation has no publish act.** `Completed` requires *"the artifact has left the repository and is retrievable by a consumer"*. Step 6 assumes a package, an image or a binary | Step 6 · Completed |
| **F8** | **Step 2 asks you to assert a derived fact.** *"Record that the Verifier role is unheld"* — but whether it is held is **computable** from the actor list | Step 2 |
| **F9** | **A concession's expiry is undefined as date-or-condition.** The model says *scoped, expiring, counted* and never says which. Date-only makes it expire while still true; condition-only means it may never expire | Concessions |
| **F10** | **The board's auto-add cannot be build-enforced.** `gh project` has no `workflow` command; auto-add is a manual toggle in the web UI. So an item can be captured carrying **no state at all** — one that exists but has not reached `New` | Step 3 · Step 5 |
| **F11** | **The delegation ceiling covers roles but is silent on disciplines.** The actor model has two branches converging on the actor; the ceiling rule names one | Role model |
| **F12** | **The door's own configuration is not under the practice.** Labels, fields, board settings and workflows are declared nowhere, versioned nowhere, checked by nothing. The most load-bearing piece of the instantiation is the one piece with no record. **Demonstrated, not theorised** | Step 3 · Step 4 |
| **F13** | **A concession's own lifecycle is undefined.** An ADR is *"immutable and dated, superseded never edited"*. Nothing says whether a concession may be revised when the facts move. One went stale within the hour | Concessions |
| **F14** | **The board's positional field cannot be named in the practice's vocabulary.** GitHub's built-in `Status` is undeletable and unrenamable. **Not cosmetic:** the practice retired `Done` *because* it conflated development-complete with in-the-client's-hands, replacing it with *development status* and *deployment status*. A bare `Status` re-opens the question that split closed — and the model names *a lint against the controlled vocabulary* as a guard the door itself now fails | Step 5 |
| **F15** | **The first executable spec in a repository has nothing to execute it.** If the verification tooling is a capability, it needs a failing spec before it is built — and the thing that runs specs *is the thing being built*. **Every enabled repository hits this once**, at its most vulnerable moment | Step 6 · Specified |
| **F16** | **The enablement run was work, and it never entered the door.** A branch model, seven labels, a board and two accepted compromises — no type, no state, no criteria, nothing verified it. **Findings about the practice were being raised by a process that was itself outside the practice** | One door |
| **F17** | **The standards an actor needs are not in the repository.** The first independent verification had to reach into `Z:\Obsidian\…` for the practice documents. They are *accessible* only because a mapped drive happens to exist, which is not a property of the repository | Sufficiency |
| **F20** | **`Assignment` carries two readings, and the practice treats them as one.** It says *"the actor that takes it assigns itself; that self-assignment is the claim"* — but items are also assigned **ahead of time**: humans to show workload, agents to a queue they draw from at a fixed concurrency. **Allocation** and **claim** have opposite implications for collision — an allocated item is available to be started, a claimed one is not — so conflated, the mechanism that exists to stop two actors working the same item cannot tell the cases apart (#17) | Markers · claim |
| **F19** | **The state track cannot say which role is needed at `Accepted`.** Reaching `Specified` takes two acts by two roles — a Worker drafts the criteria and failing spec, a Verifier confirms them — and both happen while the item sits at `Accepted`. The practice says *"the state says where the item is, and therefore what should be done next"*, but here it cannot. Markers were added to carry the difference, which means they compensate for the track being coarse rather than adding something the track never held (#12) | State track |
| **F18** | **Declaring a set and globbing a folder are two copies of one fact.** If `repository.yml` carries `personas:` *and* `.hallmark/personas/*.yml` exists, one is hand-maintained. Same for a persona's `id` versus its filename. Surfaced by the independent session before either item was specified | Declarations |

### The finding behind the findings

**Six of these are the same defect wearing different clothes:** the practice
keeps asking someone to *record* a fact that something else already *determines*.

| | Asserted | Already determined by |
|---|---|---|
| F8 | the Verifier is unheld | the actor list |
| #8 | an initiative's state | its children |
| — | `Commitment` and `Version` | the milestone |
| F18 | the persona set, a persona's id | the folder, the filename |
| F19 | which role an item needs next | its state, plus what the last act left behind |
| — | this log's own state sections | the board |

An independent session found a **seventh** without being told the pattern existed
— the board caching an item's title, which goes stale the moment the issue is
renamed.

The rule that keeps falling out: **if it is queryable, do not write it down.**
It has now caught the issue body listing its children, the log copying the
concession records, two board fields, the log's own state narrative, and a
cached title.

> **The rule has a limit, and F20 is where it stops.** *Intent to work on this
> now* is determined by nothing — not the state, not the assignee, not the
> history. It has to be declared, and declaring it is correct rather than a
> smell. A rule this productive is exactly the kind that gets over-applied, and
> the one field that must exist is the one it would kill.

This argues the schema work needs a **derivation pass, not just a validation
pass** — the question for each field is not *is it valid* but *should it exist at
all*.

### F15 is the deepest

F4 says an empty repository has no trivial item to walk. F15 says something
stronger: **the first item that must be built for the practice to function
cannot itself travel the practice.** `Specified` is unreachable exactly once per
repository, and *"skipping is never sanctioned"* makes that a concession on day
one — the model conceding to itself, in front of a cold-start team least able to
read it as normal.

### Three of the eighteen came from accidents

F12 and F13 from the label deletion, F14 from a built-in field that could not be
removed or renamed. None would have come out of design work. **That is the
argument for walking the loop early rather than specifying it further first.**

### Silent write failures are a pattern, not an incident

Four occurrences, all caught only by reading the value back:

| | |
|---|---|
| `updateProjectV2Field` | accepts a `name` argument on a built-in field, returns success, ignores it |
| `gh project item-edit` | setting a field straight after `item-add` no-ops silently. Once it failed **twice in one invocation** and succeeded on a separate call |
| a local renumbering script | collapsed a ` ```yaml ` fence into ` ``yaml ` |

**Exit codes are not evidence against this API.** Verifying writes by querying
them back is the practice's own *"queried, not reported"* rule arriving from a
direction nobody designed for — the same rule that makes `Completed` mean *go and
find the published thing* rather than *the pipeline said so*.

---

## Concessions incurred

**The records live on the items that incurred them**, as append-only comments.
Not reproduced here — a log holding its own copy of a concession is the drift
this practice exists to prevent.

`1.1` · `6.1` · `6.2` · `6.3`

**`6.2` is the first concession the practice cannot clear by its own effort.**
The others expire when we do something. `6.2` expires when GitHub changes, or
when the door moves. The model treats a concession as debt to be paid down and
assumes the debtor can pay — it has no shape for one whose expiry condition
belongs to a third party.
