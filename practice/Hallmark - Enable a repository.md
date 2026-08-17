---
type: topic
status: active
projects:
  - "[[Hallmark]]"
created: 2026-08-11
tags:
  - concept-to-cloud
  - sdlc
  - delivery
  - onboarding
---
# Hallmark - Enable a repository

**You have a repository. This makes it run the [[Hallmark]] process.**

**Seven steps.** None of them takes long. When step 7 passes, you are enabled — and you will have proved it rather than assumed it.

Once you are enabled, the day-to-day is in **[[Hallmark - Working an item]]**.

> [!NOTE] Who this is for
> **One repository, one or two people.** Larger set-ups — several repositories, a client, many environments — **add** to this. They do not change it. What is missing for them is listed at the foot of this note.

> [!WARNING] This has not been tested on a real repository yet
> Every step below is derived from the model rather than learned from use. Expect step 5 and step 7 to be where it bites.

## Before you start

You need three things. If you have a repository and a CI pipeline you almost certainly have all of them.

- Somewhere to **track items** — an issue tracker.
- A build that can **run your tests**.
- A build that can **publish** whatever this repository produces — a package, an image, a binary.

---

## 1 · Name who it serves

**Write down, by name, who this repository is for.** These are its **personas**.

- A persona is someone the system **serves** — a customer, an operator, a support agent, an auditor, or another developer consuming your package.
- **Not** who builds it. That is step 2.
- A brand-new project with no users yet still has personas. They are who you are building it **for**.
- The list can grow later. **It cannot be empty.**

*Why:* everything this repository claims to do gets written as *"a `<persona>` can `<do something>`"*. With no personas, you cannot write a single claim.

> **Done when:** the list exists, and someone else would recognise the names on it.

## 2 · Name who may work on it

**Write down who may act on this repository.** These are its **actors**. A human or an agent both count.

**If that is just you, write that down too — and record that the Verifier role is unheld.**

- Nobody verifies their own work. With one person, that cannot hold.
- **You are not breaking a rule.** It is a fact about your set-up, recorded once so it stays visible.
- **Get a second actor when you can** — a colleague, or an agent. It is the single largest quality gain available to you, and it is what closes this out.

*Why:* in eighteen months, when someone asks why the specs never catch anything, this line is the answer.

> **Done when:** the list exists — and if there is one name on it, the unheld Verifier is written down.

## 3 · Name the door

**Pick one place where everything lands.** At this size, that is your repository's issue tracker.

- **Everything.** Bug reports, ideas, questions, chores, client requests, your own thoughts at 2am.
- Things will **arrive** anywhere — email, Slack, an error reporter, a conversation. Whoever receives one **writes it into the door.**
- **Do not make a second queue for internal work.** It will starve, every time.

*Why:* one queue is the only way internal work competes fairly with whatever is loudest.

> **Done when:** you can point at one place and say *"that is the door."*

## 4 · Add the five item types

Set the door up so every item is one of these.

| Type | Use it for |
|---|---|
| **Capability** | Something a user can now do. *"A client can export invoices."* Never *"add the export endpoint"* — say the outcome, not the thing you build |
| **Fix** | Correcting something you already completed. It attaches to an existing capability rather than creating one |
| **Chore** | Upkeep of the repository and its application that changes no capability — docs, build scripts, tooling, dependency updates |
| **Question** | A request for information. It never gets committed to a version; it gets answered and closed |
| **Initiative** | A body of work spanning several capabilities. It has no work of its own — its progress is whatever its children add up to |

**Deliberately not on the list:** *bug*, *feature*, *epic*, *user story*, *task*. Those mean different things in every team you will ever work with.

> **Done when:** you can create an item of each type.

## 5 · Add two fields

Every item carries a position on **two independent things**. They are not one status field.

| Field | Values |
|---|---|
| **State** | `New` · `Accepted` · `Specified` · `Planned` · `Built` · `Verified` · `Completed` — plus `Duplicate` · `Rejected` · `Retracted` |
| **Commitment** | `Uncommitted`, or `Committed` **for a named version** |

**They really are independent.** You can have something `Built` that you never promised to anyone. You can have something `Committed` for v1.4 that is still sitting at `New`.

**A version is the thing you commit work to** — `v1.4`. A commit hash is not a version; you cannot promise work for a hash that does not exist yet.

> **Done when:** you can set both fields on an item, and the version field holds a release name rather than a build number.

## 6 · Make specs run, and make publishing work

Three things must be true of your build:

1. **Your specs run on every change**, and a failure stops it.
2. **A build can publish** what this repository produces.
3. **You can go and check the published thing is actually there** — query the registry, not the pipeline log.

*Why point 3:* *"the pipeline said it published"* and *"the package is there"* are different facts, and the gap between them is where *"we shipped it"* quietly stops being true.

> **Done when:** a green build publishes something, and you can go and find it.

## 7 · Prove it

**Push one trivial item all the way through.** Pick something genuinely small — a typo fix, a version bump.

Work it from `New` to `Completed` and check that each of these actually exists when you get there:

- [ ] It arrived in **the door** and nowhere else
- [ ] You **sifted** it — gave it a type, and accepted it
- [ ] You wrote **acceptance criteria** and a **spec that fails**
- [ ] Someone or something **other than you** confirmed the criteria were adequate
- [ ] You wrote a **plan** — the actions you will take, in order
- [ ] You did the work; every acceptance criterion was **driven and holds**; the item **carries its version**
- [ ] Someone **who did not do the work** confirmed it matches, and that it is still the right thing to have built
- [ ] It **published**, and you **went and found it**
- [ ] The **catalogue** now lists what this repository does, generated from the specs that passed

**If you cannot tick a line, that is the finding.** Write down which one and why — that is worth more than a clean run.

> **Done when:** every line is ticked, or the ones that are not are written down.

---

## You are now enabled

You have a repository where:

- Everything that arrives lands in **one place** and gets **sifted**.
- Nothing is built without someone first writing down **what would make it right**.
- Nothing is claimed that a **passing spec** does not prove.
- What you have published is **provably published**, not reported as published.
- Where you are **falling short is written down**, not carried in someone's head.

**The day-to-day is [[Hallmark - Working an item]].**

---

## What this does not cover yet

Honest list. These are known and deliberately absent, not overlooked.

| Not covered | Why |
|---|---|
| **Several repositories, or a client** | Contract testing between repositories, compatible-version resolution, rollout across clients, client acceptance. All of it needs a second repository or a client to exist before it means anything |
| **Inherited code** | If your repository already has code that no spec covers, this note assumes away the hardest part. That needs a risk map and a ratchet, and neither is written |
| **Removing something you already published** | Deprecation and withdrawal. Not reachable here — you have not published to anyone yet. **The hard part when it arrives:** removal happens at a finer grain than a claim does. Dropping CSV export while keeping PDF is neither a withdrawal nor a deprecation of *"a client can export invoices"* |
| **Qualities and assurances** | *"Response under 200ms"* and *"no PII reaches logs"* are both things a repository claims, and neither has a way in through the door yet. Only `Capability` does |
| **Service requests** | *"Run me a report"* — a request for an action rather than information. Nothing gets built, nothing gets promised |
| **What sits below a capability** | When one capability is too big for one item. **The open part:** is a sub-item a checklist entry, or a real item with its own state? A plan step is the first. Work handed to a second person is the second |
| **How the declarations are written down** | Steps 1–3 say *write down* the personas, the actors and the door. **Nothing says in what format, where they live, where they are sourced from, or how you know you are looking at the current version.** A file in the repository is the obvious answer and nothing has said so |
| **How a concession is raised and counted** | The mechanism exists in principle — recorded, scoped, expiring, debt-generating, and the count is the practice's sharpest signal. **Nothing says how one is raised, where it lives, or how it is counted against anyone** |
| **The tooling this actually runs on** | Every gap above resolves into concrete tooling. **GitHub is the likely first target.** Deliberately not designed here — tracked for a future targeted pass |

## Mentions

![[mentions.base]]
