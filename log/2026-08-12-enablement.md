# Enablement run — 2026-08-12

Running **Enable a repository** against `Kieranties/hallmark` itself.

This log lives on `dogfood`. It records what was actually done, in order, and
where the practice bit. Nothing here is the practice; the practice is what
reaches `main`, and it reaches `main` only through an issue.

> **Status: incomplete.** Steps 1–4 done, step 5 partial, steps 6–7 not started.
> Three items are captured at `New` awaiting the sift.

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

### Step 4 · Add the five item types — **done, under concession C1**

Issue Types are an org-level GitHub feature and this is a personal repository.
Type is carried by a prefixed label instead:

`type-capability` · `type-fix` · `type-chore` · `type-question` · `type-initiative`

Prefixed so they sit *alongside* GitHub's defaults rather than replacing them.

> **The first instinct was to delete GitHub's nine default labels, and that was
> wrong.** It would have made the instantiation look clean by erasing the
> evidence that it is compromised. The defaults stay; the compromise is recorded
> as **C1**. This is the "drifting into application" tell in a new costume —
> changing the tool so the process fits, instead of recording that the tool
> does not.

The two markers are also labels — `ready`, `ready-for-agent` — and this is **not**
a concession. The practice leaves marker form to the application, and a label is
the natural fit.

### Step 5 · Add two fields — **partial**

`State` and `Commitment` exist as single-select fields on the board, plus a
`Version` text field. Both axes are set on all three captured items.

**Incomplete:** nothing forces an issue onto the board (F10).

### Step 6 · Make specs run, and make publishing work — **not started**

Publishing is designed but unbuilt: a build pushes artifacts to a distinct
`published` branch, with CD updating versions. This makes `Completed`
**queryable** — you look at the branch rather than reading the pipeline log,
which is exactly the distinction step 6 point 3 asks for.

Specs cannot run: no toolchain is chosen, and the choice is a genuine ADR
trigger rather than something to settle silently inside the first item.

### Step 7 · Prove it — **not started**

Blocked on step 6.

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
| **F9** | **A concession's expiry is undefined as date-or-condition.** The model says *scoped, expiring, counted* and never says which. C1's natural expiry is a condition. Date-only makes it expire while still true; condition-only means it may never expire | Concessions |
| **F10** | **The board's auto-add cannot be build-enforced.** `gh project` has no `workflow` command; auto-add is a manual toggle in the web UI. So an item can be captured carrying **no State** — an item that exists but has not reached `New` | Step 3 · Step 5 |
| **F11** | **The delegation ceiling covers roles but is silent on disciplines.** The actor model has two branches converging on the actor, and the ceiling rule names only one. Resolved by decision this session — recorded because the *gap* is a property of the model, not of this repository | Role model |

**Eleven findings across steps 1–5.** Steps 6 and 7 are not started, so the two
places the note itself predicts will bite are still untested.

---

## Decisions taken

Pending migration into `decisions/` as ADRs.

| Decision |
|---|
| The repository is the sole source. All Obsidian material moves; the vault stops being an authoring surface |
| `main` is truth · `published` is build output · `dogfood` is where ideas are tried. Nothing reaches `main` except through an issue |
| The door is split into `capture` (issues) and `board` (Projects v2) |
| Item type is carried by a prefixed label — **concession C1** |
| Markers are labels, and that is not a concession |
| **The delegation ceiling extends to disciplines**: an agent's disciplines must be a subset of its delegator's, exactly as its roles must be. *New — the model does not say this today (F11)* |
| Personas and disciplines are one structured file each, globbed rather than indexed. An index would be a derived fact requiring maintenance, which **Derived** forbids |
| The declarations are structured data, not prose — forced by `Specified` (F6), not chosen |
| `verifier-held` is computed from the actor list, never declared (F8) |

---

## Concessions incurred

### C1 · Item type is carried by an unenforced label

```yaml
id: C1
raised: 2026-08-12
raised-by: kieranties
standard: Every item entering the door carries exactly one of the five types
scope: door · Kieranties/hallmark
compromise: >
  Issue Types are an org-level GitHub feature; this is a personal repository.
  Type is carried by a `type-<type>` label, which nothing enforces — an item
  may carry none, or several. GitHub's default labels remain live alongside
  them, including `question` and `duplicate`, which collide with reserved
  practice terms.
expires-when: >
  a build check rejects any issue not carrying exactly one type- label
```

**Not yet recorded in the repository** — concessions have no home. That is
itself work not done, and it is not in the door yet.

---

## State at stop

| | |
|---|---|
| **Captured, awaiting sift** | #1 declarations · #2 personas · #3 disciplines — all `New` / `Uncommitted`, no type |
| **Not in the door** | The eleven findings · the toolchain decision · a home for concessions · the D1–D186 ADR migration · moving `Product/` out of Obsidian |
| **Blocked** | Step 6 on the toolchain choice. Step 7 on step 6 |

**Next act is the sift** — assign a type to #1, #2 and #3, and rule each
accepted, duplicate or rejected.
