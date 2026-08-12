# Specify — writing what would make this right

`Specified` is achieved when **four** things are true. You produce the first two.
The third is not yours. The fourth is what the first two evidence.

| | Yours? |
|---|---|
| Acceptance criteria exist | **Yes** |
| A failing executable spec exists, expressing them | **Yes** |
| A Verifier **other than the author** has confirmed the criteria are adequate | **No — hand off** |
| Persona named · outcome stated · problem understood | **Yes**, and the criteria are its evidence |

**So you cannot set `Specified`.** You draft, then hand off. Whoever wrote the
criteria may not confirm them, and that is never conceded.

`Specified` is the only open-ended state, and the only gate that catches *"we
built exactly what was asked and it wasn't what they needed"*. Discovery,
research, competitor scans and proofs of concept live here and nowhere else.

## Persona, outcome, problem

State it as a user story. It reads as ceremony for a chore and it is not — the
practice requires *persona named · outcome stated · problem understood* for
**every** item. The type does not change what `Specified` demands; it changes
whether the result produces a **catalogue claim**. A chore's story is real and
never reaches the catalogue.

> **As a `<persona>`, `<what must be true>`, so that `<why it matters>`.**

The persona must be one this repository actually declares. If none fits, that is
worth saying — either the persona list is short, or the item serves nobody.

## Acceptance criteria

**Steps, metrics or markers that identify the requirement has met its needs.**

Written **before the work exists**. That is the whole defence: you are fixing a
target in advance rather than checking against what you remember wanting. It is
also the first link in a chain that runs all the way to a client —

```
acceptance criteria → failing spec → passing spec → catalogue claim
```

— and there is no point in that chain where the definition may live only in
somebody's memory.

**Every item has them**, including a chore nobody outside will ever see.

### What makes a criterion good

- **Falsifiable.** Someone must be able to run it, or follow it, and get a
  yes or a no. *"The file is valid YAML"* qualifies. *"The docs read well"* does
  not.
- **About the outcome, not the implementation.** Pin what must be true, not how
  you intend to achieve it. The plan is where *how* belongs.
- **Complete enough that satisfying all of them means the item is done.** If you
  can imagine passing every criterion and the persona still not having what they
  needed, one is missing.

### The metric guard

**A metric used as an acceptance criterion must be the thing itself, not a stand-in
for it.**

*"Response under 200ms"* qualifies — the measure *is* the goal, so redefining it
is a visible change rather than a quiet re-baseline. *"Improve throughput"* does
not: target it and you optimise the number and lose the thing. Without this guard,
`Specified` becomes where proxies get smuggled in as goals.

## The failing spec

Express the criteria as something executable, and **observe it fail** before
anything is built. It fails because nothing exists yet — that is the point. A spec
that has never been seen to fail proves nothing when it later passes.

This constraint has a consequence worth knowing: **it forces the artifact to be
mechanically checkable.** Prose cannot reach `Specified`, because prose cannot
fail a spec. If the item produces a declaration, that declaration has to be
structured data with a schema. This is derived from the rule, not a style
preference.

**If no spec runner exists**, you cannot satisfy this. That is a concession —
scoped to the item, expiring when a runner exists *and* the criteria have been
observed to fail. Raise it, say plainly that `Specified` is being claimed on
criteria alone, and continue.

## Hand off

Leave the state alone. Set `needs-verifier`, clear `needs-worker`, and say in your
comment that the criteria are drafted and awaiting confirmation — not that the
item is `Specified`.

## What must exist when you are finished

- A user story naming a declared persona.
- Acceptance criteria that are falsifiable and complete.
- A failing executable spec, or a recorded concession explaining why not.
- Any concessions raised, numbered `<issue>.<n>`, with the `concession` label set.
- `needs-verifier` set.

A Verifier receives exactly this. If any of it is missing, the role cannot be
held and your act is not finished.
