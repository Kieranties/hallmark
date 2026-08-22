# Documents

**Where this repository keeps its durable documents.** Declared here so the next one does
not have to invent a location, which is what happened to the first ADR.

Nothing in this directory is the practice. The practice is published from `website/`.

## The two locations

| Location | Holds | Lifecycle |
|---|---|---|
| **`adr/`** | Architecture decision records — a choice made, its context, and what it rules out | **Immutable.** Superseded, never edited |
| **`kb/`** | Knowledge base articles — how something works, for whoever needs it next | **Living.** Edited as the thing it describes changes |

**ADR or KB** is the split that gets confused. They have opposite lifecycles.

An **ADR** records that a choice was made, so nobody re-argues it and nobody reverses it
silently. It is true forever, because it describes a moment. A **KB article** describes how
something works now. It is true today, and is edited when that stops being so.

If editing it later would destroy the point of it, it is an ADR. If never editing it later
would make it wrong, it is a KB article.

## What does not live here

**Acceptance criteria and plans belong to the item, not to the tree.** They are facts about
one item — what would make it right, and what will be done — so they live on the door with
the item they describe, and travel with it.

**An executable specification belongs beside the code it proves.** It has to run, so an
issue body cannot hold it. *Specification* is the executable artifact; *acceptance criteria*
is the prose statement of what would make the work right. They are two outputs of
`Specified`, not two names for one thing.

| Output | Home |
|---|---|
| Acceptance criteria | The item, on the door |
| The failing specification | The repository, with the code it proves |
| The plan, and what it touches | The item, on the door |

## Where a specification goes

A specification is carried by the item it describes, on the door.

`door.carries` declares no carrier for acceptance criteria and none for a plan, so the body
of an issue carries them today by convention rather than by declaration. That is a gap in the
door, recorded here so it is not mistaken for a decision.
