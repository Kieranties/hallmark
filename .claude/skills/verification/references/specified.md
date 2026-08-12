# Verifying `Accepted → Specified`

**This one is yours.** `Specified` is achieved only when a Verifier — someone
other than whoever wrote them — confirms the acceptance criteria are **adequate**.

It is the hardest judgement in the practice, and the most consequential. The
criteria are the first link in a chain that runs to a client:

```
acceptance criteria → failing spec → passing spec → catalogue claim
```

**Everything downstream inherits whatever you approve here.** A Worker builds to
these criteria, a Verifier at `Built` checks against these criteria, and a claim
eventually traces back to them. Approving something vague does not produce vague
work — it produces confident work aimed at the wrong thing.

This is also the first place an agent gatekeeps a human's judgement about what a
user needs. Take it seriously.

## What must hold

**Acceptance criteria exist** — steps, metrics or markers identifying that the
requirement has met its needs.

**A failing executable spec exists**, expressing them, and it was **observed to
fail**. A spec that has only ever passed proves nothing.

**Persona named · outcome stated · problem understood** — with the criteria as
*evidence* of that, not a restatement of it.

## Judging adequacy

Presence is easy to check and is not what you are for. Adequacy is not mechanically
checkable, which is exactly why this step is Verifier-enforced rather than
build-enforced.

Four tests:

**Falsifiable.** Can someone run it, or follow it, and get a yes or a no? *"The
file is valid YAML"* qualifies. *"The documentation reads well"* does not — and it
will be marked satisfied by whoever wrote it.

**Complete.** Imagine every criterion passing. Is the item done? If you can picture
all of them holding while the persona still lacks what they needed, one is
missing. This is the test that catches the most, and it is the one that requires
actually thinking about the persona rather than reading the list.

**About the outcome, not the implementation.** Criteria that pin *how* rather than
*what* pre-empt the plan and make the item unbuildable any other way. A criterion
naming a specific function or file is usually a plan step that escaped.

**The metric guard.** A metric used as a criterion must be **the thing itself, not
a stand-in for it**. *"Response under 200ms"* qualifies — the measure *is* the
goal, so redefining it is a visible catalogue revision. *"Improve throughput"* does
not: target it and you optimise the number and lose the thing. Without this guard,
`Specified` is where proxies get smuggled in as goals.

## Check the spec expresses the criteria

A failing spec is not enough on its own — it has to fail **for the right reason**.
A spec that fails because it references a function that does not exist yet tells
you nothing about whether the criteria are expressible.

Where the criteria and the spec disagree, the criteria are what a client
eventually reads, and the spec is what will actually be checked at `Built`. A
divergence between them is a defect now and an argument later.

## Where this legitimately cannot hold

**No spec runner exists** in this repository, so a failing spec often cannot be
produced. If the Worker raised a concession recording that `Specified` is claimed
on criteria alone, **that is legitimate** — check it names a real expiry condition
and continue judging the criteria themselves.

A concession covers the missing spec. **It does not cover inadequate criteria** —
adequacy is your act, and no concession reaches it.

## Ruling

| | |
|---|---|
| **Verified** | Criteria are falsifiable and complete, the persona and outcome are named, and the spec fails for the right reason or its absence is properly conceded |
| **Sent back** | Any criterion unfalsifiable, the set incomplete, criteria that pin implementation, a metric that is a proxy, or a spec that does not express the criteria |

Send-back stays at `Accepted` — the item never reached `Specified`, so there is
nothing to return from.

**Say what is missing, specifically.** *"The criteria are not adequate"* is a
failed verification with extra steps. *"Nothing here would fail if the file were
empty"* is something a Worker can act on.
