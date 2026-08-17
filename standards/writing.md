# The writing standard

**Every authored artifact in this repository meets this standard.** Declarations, skills,
ADRs, item bodies and the documentation site. It is what makes the corpus read as one voice
rather than as the sediment of the sessions that produced it.

> **Placement note.** This file sits at `standards/` because it uses foreign vocabulary and
> the boundary rule in [ADR 0001](../adr/0001-the-door-declares-how-it-carries-the-practice.md)
> keeps that out of `.hallmark/`. The placement is undeclared and free to reverse. It repeats
> the gap [#52](https://github.com/Kieranties/hallmark/issues/52) names.

---

## 1 · What this standard is for

The practice states that a principle you cannot fail is a slogan. The same is true of a style
guide. **Every rule below can be failed, and each names how.**

This standard traces to the four principles. A rule that traces to none of them does not
belong here, and should be removed rather than kept for taste.

| Rule group | Principle it serves |
|---|---|
| §3 The three registers | **Provable** — nothing is claimed that evidence does not prove |
| §4 One word for one concept | **Derived** — the Glossary is the source, not the author's memory |
| §5 Every page names its reader | **Invariant** — the route does not change with the size of the work |
| §6 Sentence and structure rules | **Provable** — a sentence with two claims lets one pass unexamined |
| §7 The check | **Traceable** — the standard is driven, not asserted |

---

## 2 · The reader is named before the page is written

**No page is written without naming which declared persona it serves.** A page that serves
everybody serves nobody, and it is the commonest way documentation goes wrong here.

The four personas are declared in `.hallmark/personas/`. Each takes a different **page type**,
and the type decides the page's shape:

| Persona | Needs | Page type | Shape |
|---|---|---|---|
| **adopting-team** | To be carried from an unenabled repository to one that runs the practice | **Tutorial** and **how-to** | Numbered steps. Every step has a verifiable outcome. No rationale in the step — link it |
| **practice-actor** | To be told which act the item's state requires | **How-to** and **reference** | Entry condition, act, what it leaves behind. Reachable at the moment of acting |
| **application-implementer** | A normative practice precise enough to build against | **Reference** | Exhaustive, alphabetical or structural, no narrative. Normative words used precisely |
| **evaluator** | To see what is claimed and what is conceded, from the record | **Explanation** and generated record | Prose that argues. Generated tables that evidence |

**The four types do not mix on one page.** A tutorial that stops to explain *why* has become
an explanation with steps in it, and it fails the reader who was following the steps. Link
instead. This is the single structural rule that does most of the work.

### The failure this prevents

The existing corpus was written while the practice was being discovered, so almost every
document is all four types at once — the Delivery model explains, specifies, instructs and
records in the same section. **That is correct for a working document and wrong for a
published one.** Splitting by type is the substance of the rewrite, not a formatting pass.

---

## 3 · The three registers, and never blurring them

**Provable is the first principle, and documentation is where it is easiest to breach.** A
docs site is a claim surface. Writing *"the build rejects an issue with two type labels"* when
no build exists is a false claim, whatever the roadmap says.

Every statement about this system sits in exactly one register, and the register is visible to
the reader:

| Register | Means | Written as |
|---|---|---|
| **Built** | It exists, and it can be driven now | Plain present tense. *"The capture skill writes the item into the door."* |
| **Designed** | The practice specifies it; nothing implements it | Named as such. *"The practice specifies a controlled-vocabulary lint. Nothing runs it yet."* |
| **Proposed** | Under consideration, not settled | Named, with the item. *"#15 proposes a landed-version carrier."* |

**Present tense is reserved for the built register.** This is the rule most likely to be
broken, because the practice documents are written in the present tense throughout and are
describing a design.

**A page states its register once, at the top, when the whole page shares one.** Per-sentence
hedging is worse than a single honest banner, and it makes prose unreadable.

**Concessions are documentation, not embarrassment.** Where something is conceded, the page
says so and links the concession. The `evaluator` persona exists to read exactly this, and
hiding it defeats the only reason that persona is served at all.

---

## 4 · One word for one concept

**The Glossary is the controlled vocabulary and it is authoritative.** Its terms are
*reserved* — each means that and only that. The practice names a lint against the controlled
vocabulary as one of its three guards, so this rule is intended to be mechanical even though
nothing checks it yet ([#54](https://github.com/Kieranties/hallmark/issues/54)).

**Rules:**

- **Use the Glossary's word, spelled the Glossary's way.** *item*, *door*, *state*, *sift*,
  *type*, *capture*, *marker*, *claim*, *actor*, *concession*, *persona*, *discipline*,
  *role*, *edition*.
- **Never introduce a synonym for a reserved term.** *Ticket*, *issue*, *card* and *story*
  are not *item*. Where the foreign word is required — inside `door`, or when naming a
  platform's own mechanism — use the foreign word exactly, and only there.
- **Never reuse a reserved term for an unreserved meaning.** *Technical* is a discipline here.
  It is not an adjective for difficulty.
- **A word the Glossary retired is not reintroduced.** *Design* as a bare word is retired; it
  carried three readings.
- **A new concept gets a Glossary entry before it gets a page.** Writing around a missing
  term is how a second vocabulary starts.

---

## 5 · Structure

**Lead with the claim.** The first sentence of a section says what is true. The rationale
follows it. A reader who stops after one sentence should not have been misled.

**A heading is a noun phrase or a claim, never a teaser.** *"The three registers"* or
*"Registers must not blur"*. Never *"A note on registers"*.

**Tables carry comparison; prose carries argument.** Anything with more than two parallel
cases is a table. Anything with a *because* in it is prose. The existing corpus does this
well and it should be preserved.

**Bold marks the load-bearing clause, not emphasis.** One bolded span per paragraph at most.
Bold everywhere is bold nowhere.

**Every diagram is Mermaid, and every diagram earns its place.** A diagram that restates the
list above it is deleted. A diagram carries a relationship prose handles badly — a state
track, a flow, a dependency. Give every node a label a reader can search for.

**Link, do not restate.** A declaration in `.hallmark/` is the source. A page that retypes it
creates a second source that will drift. Link it, or generate the page from it.

---

## 6 · Sentences

The subset below is ASD-STE100, Simplified Technical English, as already applied by the
`capture` skill. It binds every sentence an author writes, headings and table cells included.

| | Rule |
|---|---|
| **1** | **One topic in each sentence.** One main clause |
| **2** | An instruction is **twenty words or fewer**. A description is **twenty-five or fewer** |
| **3** | A paragraph is **six sentences or fewer** |
| **4** | **Active voice** |
| **5** | **One word for one concept**, per §4 |

**Rule 1 is the one that fails.** `, and` is its common shape. The `capture` skill records
three real breaches from its own runs, and the pattern is always the same: a second subject
with its own verb, joined by *and*, *but*, *so*, *then*, *while*, or a dash.

**The test is whether the second part can stand alone and mean the same thing.** Two shapes
pass and stay as one sentence:

| Shape | Example | Why it stays |
|---|---|---|
| A clause that cannot stand alone | *The declaration records which mechanism carries an axis* | *"Mechanism carries an axis"* is the object of `records`, not a second topic |
| A comma with a list after it | *…names the instruction, the source and what it returned* | One clause, three objects |

**Two things are exempt.** Quoted evidence, and any preserved request. A quote that has been
rewritten is no longer evidence.

---

## 7 · The check

**Do not skip this because the rules are stated above.** The `capture` skill states its rules
and a run still broke them three times. The rules are what the text must meet. This is what
makes it meet them.

Run it on the draft, before it becomes an artifact. Skip quoted material.

| Pass | Question | If yes |
|---|---|---|
| **1 · Reader** | Does the page name its persona and hold to one page type? | Split it, or move the material to the page whose type it fits |
| **2 · Register** | Does any present-tense sentence describe something not built? | Move it to the designed or proposed register, and name the item |
| **3 · One clause** | At each *and*, *but*, *so*, *then*, *while* or dash — can what follows stand alone and mean the same? | Split. Drop the joining word |
| **4 · Length** | Sentence over twenty words instructing, or twenty-five describing? | Split, or cut the words carrying no claim |
| **5 · Voice** | Is the subject having the verb done to it? | Rewrite so the subject does the verb |
| **6 · Vocabulary** | Any concept named by two words? Any reserved term used loosely? | Take the Glossary's word. Use it throughout |
| **7 · Restatement** | Does this restate a declaration rather than link or generate from it? | Link it |

**Report what the check found**, not that it ran. A check reported without findings and
without evidence is the assertion this practice exists to prevent.

---

## 8 · What this standard does not cover

- **Which pages exist.** The information architecture is a separate decision, and it belongs to the docs site's own item.
- **Generated pages.** Anything generated from `.hallmark/` is bound by its generator and by the Glossary, not by §5 or §6.
- **Existing artifacts.** Nothing here is retrospective. `practice/` and the item bodies already written are not rewritten to conform. The standard binds what is authored from now.
- **The item body's shape.** Still unsettled, and the `capture` skill records that it does not invent one.
