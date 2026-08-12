# Verifying `New → Accepted`

**The sift is not your act.** Assigning a type and ruling on an item is a Worker
or Decider act. You are confirming it happened and produced what it should — if
you find yourself deciding what type the item *ought* to be, you have taken over
the work and made yourself ineligible to verify it.

## What must hold

**One type, and it is one of five.** `Capability` · `Fix` · `Chore` ·
`Question` · `Initiative`. Not zero, not two.

Nothing enforces this where types are carried by labels, which is why it is worth
checking rather than assuming. An item carrying both `type-chore` and
`type-capability` has not been sifted; it has been guessed at twice.

**A ruling was made.** Accepted, duplicate or rejected. If duplicate, the item it
duplicates is named — *"this is the same as that"* is not a ruling without the
*that*.

**The type is defensible, not merely present.** You are not re-doing the sift, but
a type that is plainly wrong makes everything downstream wrong:

- A **capability** must state an outcome a **named persona** achieves, not the
  thing being built. *"Add the export endpoint"* is not a capability, whatever
  label it carries.
- A **fix** attaches to something previously completed. If nothing was completed,
  it is not a fix.
- A **chore** changes no capability. If it does, the type is understating what
  the item is.
- An **initiative** has no work of its own. If it has acceptance criteria, it is
  not an initiative.

**The type says why the work exists — never how much rigour it carries.** Rigour
is derived from touch. Do not send an item back because a chore looks too big;
size is not what the type records.

## Where this legitimately cannot hold

Two known gaps in the practice will produce items that fit no type:

- **Quality and assurance have no route in through the door.** *"Response under
  200ms"* and *"no PII reaches logs"* are catalogue entries but not item types.
- **Findings, weaknesses and homeless artifacts** are not obviously work.

If the Worker said so and left the item untyped rather than forcing it into
`Capability`, **that is the right answer** and you should record it as such. An
item mistyped to satisfy a checklist is worse than one honestly untyped.

## Ruling

| | |
|---|---|
| **Verified** | Exactly one type, defensible, and a ruling was made |
| **Sent back** | No type, several types, a type that contradicts the item's own description, or a duplicate ruling with nothing named |

Send-back returns the item to `New` — the sift did not happen, so there is nothing
to return to but the door.
