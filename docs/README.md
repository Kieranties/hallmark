# Documents

**Where this repository keeps its own durable documents.** Declared here so the next one does
not have to invent a location.

Nothing in this directory is the practice. The practice is published from `website/`.

## What lives here

| Location | Holds | Lifecycle |
|---|---|---|
| **`kb/`** | Knowledge base articles — how something works, for whoever needs it next | **Living.** Edited as the thing it describes changes |

A KB article describes how something works *now*. It is true today, and is edited when that
stops being so. If never editing it later would make it wrong, it is a KB article and it
belongs here.

## What does not live here

**Criteria and plans belong to the item, not to the tree.** They are facts about one item —
what would make it right, and what will be done — so they live on the door with the item they
describe, and travel with it.

**An executable specification belongs beside the code it proves.** It has to run, so an issue
body cannot hold it.

| Output | Home |
|---|---|
| The criteria | The item, on the door |
| The failing specification | The repository, with the code it proves |
| The plan, and what it touches | The item, on the door |

Nothing declares which field of an issue carries the criteria, or the plan, so the body
carries both today by convention. That is recorded here so it is not mistaken for a decision.
