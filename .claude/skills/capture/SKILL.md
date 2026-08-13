---
name: capture
description: Write a request into this repository's door as a new item, in the requester's own words, at no cost to whoever raised it. Use this whenever anyone says capture, raise, log, file, open, note down or record something — a gap, a defect, an idea, a question, a piece of work — and use it whenever you find a gap yourself in the middle of doing something else and need it to become an item instead of a sentence in a session that ends. Follow the request first, as the investigation or the research it asks for, then write exactly one item. Never send the requester a question.
---

# Capture

Capture is the entry to the door. It happens before an item exists, so it is open to
anyone and it carries no quality bar. Four words is a capture. A half-formed hunch is a
capture. **Charge for capture and ideas go back into people's heads**, which is the one
failure this skill exists to prevent.

Your job is to do the writing-down well. It is never to get more out of the person.

## The two paths in

| Path | The caller | The request is |
|---|---|---|
| **Direct** | Somebody runs `/capture <request>` | The text they wrote |
| **In-act** | You are part-way through something else and you find a gap | Your own finding, in your own words |

Both paths produce one item, by the same procedure. The in-act path then returns you to
what you were doing. The capture is an interruption, not a replacement.

## The request is an instruction

Everything supplied at invocation is **the request**. There is no second part to
separate out. The request is taken as an action to do, and you do it — as an
investigation, as research, or as literal text to write down.

| The request | You do |
|---|---|
| `we need to work on feature X` | Read it as literal text, and write it into the door |
| `we need to work on feature X. Read <doc> first` | Read the document, then write the request and what you read into the door |

The second row is one example, not a supported form. An instruction is whatever the
caller asks for, and there is no list of the ones you accept.

**Four bounds hold, and each has a reason:**

- **You send no question to the caller.** Not one, and not when the request is four
  words. A thin request is captured thin. A skill that asks four helpful questions is
  the expensive capture this skill exists to prevent.
- **You write nothing to the working tree, and you do not build what the item
  describes.** Following an instruction produces material for the item. It never
  produces a change to the repository. The work is the next actor's, after the sift.
- **Everything you gather names its source.** A fact with no source is indistinguishable
  from a fact you invented, and the item cannot be read afterwards.
- **A failed instruction never costs the capture.** If the document is missing, the
  command fails, or the source returns nothing, you still create the item, and you
  record the failure in it.

**Follow the instruction, then write.** There is one write, not two.

## The procedure

### 1 · Read the door

Read `.hallmark/repository.yml` from the tree you are in. Take these keys, and hardcode
none of them:

| Key | Supplies |
|---|---|
| `door.kind` | Which mechanism applies. `github-issues` is the procedure written below |
| `door.capture` | Where the item is created |
| `door.board` | Which board carries the state. The owner and the number parse out of the URL |
| `door.carries.item.carrier` | What an item is on this door |
| `door.carries.state` | Which carrier holds the state, and how its values are named |

If `door.kind` names a mechanism that is not written here, stop and say so. The door
declares the mechanism; a skill that guesses one writes the item somewhere nobody reads.

### 2 · Follow the instruction

Do what the request asks, inside the four bounds above. Keep two things as you go:

- The material you gathered, and the source each piece came from.
- Anything that did not complete: what you ran, the source it named, what came back.

### 3 · Look for a possible duplicate

Query the open items at `door.capture` once. If one may be the same thing, you will name
it in the body. **Name it, and do nothing else about it.** Ruling an item a duplicate is
the sift's act, and the sift has not happened yet.

### 4 · Write the title

Derive it from the request, and from nothing else. Every claim the title makes is one
the request carries.

- It asserts **no cause**, **no type** and **no fix**. *"Export is broken somehow"* is a
  title. *"Export fails because the encoder times out"* is a diagnosis the request never
  made.
- One sentence, twenty words or fewer, in the language subset below.
- Where the request is already title-length, its own words are the title.

### 5 · Write the body

Use the sections below, in this order. Omit any section that has nothing to say.

````markdown
## The request

<!-- capture:request:start -->
```text
…the request, character for character…
```
<!-- capture:request:end -->

## What the instruction produced

- <the material> — source: <where it came from>

## What did not complete

The skill ran <the instruction>. The instruction named <the source>. The source
returned <what came back>.

## Possible duplicate

This request may restate <item>. The sift rules on it.

## About this capture

The `capture` skill created this item on <date>. The actor was <actor>.
````

**The request is reproduced character for character.** Nothing is dropped, reworded or
reordered, and it is never rewritten into the practice's vocabulary. The caller's words
are evidence of what the caller meant, and rewriting evidence destroys it.

The two comment markers carry the boundary. The fence carries the rendering, so a
multi-line request does not reflow into one paragraph for a reader. Use three backticks,
unless the request itself contains a run of three or more — then use one backtick more
than the longest run in it.

**A known limit of the marked region:** a request that contains the literal end marker
breaks the boundary. Do not alter the request to prevent this. Preserving it exactly
outranks the mechanism, and the limit is recorded here rather than paid for silently.

**Every fact in the body is one of three things:** the preserved request, material you
gathered with its source named, or a statement about this run of the skill. A fact that
is none of the three does not go in.

### 6 · Check the text you authored, before it becomes the item

**Do not skip this because the rule is already stated below.** It was stated, and a run
of this skill still wrote three sentences that broke it. The rule is what the text must
meet. This step is what makes you meet it.

Take the title and the body. The preserved request and anything you quoted are exempt —
skip them. Read what remains one sentence at a time. A bullet is a sentence here, and so
is a table cell.

| Pass | The question | If the answer is yes |
|---|---|---|
| **1 · One clause** | After a joining word — `and`, `but`, `so`, `then`, `because`, `which`, `while` — is there a new subject with its own verb? | Split the sentence in two at that word. Drop the joining word |
| **2 · Length** | Is the sentence longer than twenty words? Twenty-five, where it describes rather than instructs? | Split it, or cut the words that carry no claim |
| **3 · Voice** | Is the subject having the verb done to it? | Rewrite it so the subject does the verb |
| **4 · Paragraph** | Does the paragraph run past six sentences? | Break it |
| **5 · One word** | Did you name one concept by two different words? | Choose the Glossary's word. Use it everywhere |

**Pass 1 is the one that fails.** `, and` is its common shape. Run pass 1 over every
sentence before you go on, and rewrite the text until pass 1 finds nothing.

A comma with a list after it is not a second clause. *"…names the instruction, the
source and what the source returned"* is one clause with three objects. Leave it.

Do this check while the text is still a draft. Once the item exists, it is an item like
any other, and this skill never rewrites one.

### 7 · Create the item, and set its state

Resolve every platform handle by query, at the moment you need it, and store none of
them. The door declares the decision; the platform assigns the handle. A handle written
into this file rots the first time somebody rebuilds the board.

For `door.kind: github-issues`:

```bash
# The owner and the number come out of door.board.
gh issue create --repo <from door.capture> --title "<title>" --body-file <file>
gh project list --owner <owner> --format json          # the project whose URL is door.board
gh project field-list <number> --owner <owner> --format json
#   → the field whose name equals door.carries.state.field
#   → the option whose name equals New
gh project item-add <number> --owner <owner> --url <item url>
gh project item-edit --id <item> --project-id <project> \
    --field-id <field> --single-select-option-id <option>
```

The state reads `New`, and no other value is set. `New` is achieved when the item is in
the door and nothing else has happened, which is exactly true here.

### 8 · Return

Report the item number, and stop.

On the in-act path, report the number and go back to the act you interrupted. You do not
touch the item you were working, you do not change its state, and you do not report on
it here.

## What capture never does

Each of these belongs to a later act, and doing it here removes the evidence that act
needs.

| Never | Because |
|---|---|
| Ask the caller for more detail | Capture must cost nothing. This is the whole point |
| Assign a type | The sift assigns the type. An item may arrive untyped, and often should |
| Rule the item | Duplicate, rejected and accepted are sift outcomes. Close nothing, link nothing |
| Refuse a request that fits no type | Weaknesses, findings and homeless artifacts fit none of the five types today. Capture is not where that gap bites |
| Rewrite the caller's words | They are evidence about what the caller meant |
| Write a fact with no source | It cannot be told apart from an invention |
| Build what the item describes | Following an instruction is investigation or research, never the work |
| Stop the act it interrupted | An in-act capture returns the actor to its act |

This skill is **one route into the door, not the only sanctioned one.** Somebody who
opens an issue by hand has captured just as validly.

## The language you write in

The item body uses ASD-STE100, Simplified Technical English. This subset binds every
piece of text you author, **the title included**:

- A sentence that gives an instruction is **twenty words or fewer**. A sentence that
  gives description is **twenty-five words or fewer**.
- A paragraph is **six sentences or fewer**.
- Use the **active voice**.
- **One topic in each sentence** — one main clause.
- **One word for one concept**, throughout the item.
- The practice's reserved terms are the Technical Names. Spell them as the Glossary
  spells them: *item*, *door*, *state*, *sift*, *type*, *capture*, *marker*, *claim*,
  *actor*, *concession*.

**One topic in each sentence, worked.** This is the rule that this skill has broken. Each
row below is a sentence that a run of this skill wrote into an item, and each one carries
two main clauses. Read the middle column: it is what pass 1 of step 6 looks for.

| What the skill wrote | The second clause, and where it starts | What it should have written |
|---|---|---|
| The carrier mapping lives at `door.carries`, inside the `door` key, and `door.kind` parameterises it | at `and` — `door.kind` is a new subject, `parameterises` is its verb | The carrier mapping lives at `door.carries`, inside the `door` key. `door.kind` parameterises it |
| `door.carries` is a discriminated union keyed on `kind`, and this binds item #4 | at `and` — `this` is a new subject, `binds` is its verb | `door.carries` is a discriminated union keyed on `kind`. This binds item #4 |
| The instruction failed, and the skill created the item anyway | at `and` — `the skill` is a new subject, `created` is its verb | The instruction failed. The skill created the item anyway |

Splitting costs nothing. Two short sentences say what one long sentence said. A reader
who wants only the second half can now find it.

**Two things are exempt, for one reason.** The preserved request, and anything you quote
from a source you gathered. Both are evidence of what somebody else said, and a quote
that has been rewritten is no longer evidence.

Existing items are never rewritten to conform.

## What the item is not

The shape of the item body beyond the sections above is not yours to invent. When a
shape for it lands, this skill consumes it. Adding structure now would make every item
captured today wrong in a way nobody can see.
