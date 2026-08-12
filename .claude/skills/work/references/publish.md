# Publish — `Verified → Completed`

`Completed` means two things, and the second is the one that gets skipped:

1. The artifact is **published** — it has left the repository and is retrievable
   by a consumer.
2. That was **proven by looking**.

*"The pipeline said it published"* and *"the package is there"* are different
facts, and the gap between them is where *"we shipped it"* quietly stops being
true. Reading a green build log is not proof. **Go and find the thing.**

## The act

The PR opened at `Built` has now been verified. Merge it, let the build publish,
then query for the artifact.

```bash
gh pr merge <n> --merge --delete-branch
```

Then find what was published. Not the workflow run — the artifact:

```bash
git fetch origin published
git log origin/published -1 --format='%H %ci %s'
git show origin/published:<expected-path> | head
```

If you cannot retrieve it, **the item is not `Completed`**, regardless of what
any pipeline reported.

## What is not possible here yet

Three things `Completed` requires do not exist in this repository:

| Missing | Consequence |
|---|---|
| **CD to the `published` branch** | Merging lands the change on `main` and nothing publishes |
| **A retrievable artifact** | Nothing to query, so nothing can be proven by looking |
| **A capability catalogue** | *"The catalogue regenerates from the specs that passed"* has nothing to regenerate |

So the honest act today is: **merge, try to find the artifact, fail, and say so.**
Raise a concession scoped to the item:

```yaml
id: "<issue>.<n>"
standard: >
  `Completed` means the artifact is published for consumption and proven
  retrievable by looking, never by report.
scope: item #<issue>
compromise: >
  The verified change is merged to `main`. No CD exists and no `published`
  branch is produced, so nothing left the repository and nothing could be
  queried. `Completed` is claimed on the merge alone.
expires-when: >
  a build publishes to the `published` branch, and this item's artifact is
  retrieved from it
```

**Do not soften this into "published to main".** A commit on `main` is not
retrievable by a consumer — it is source, not artifact. Recording it as
publication is precisely the claim that evidence does not prove, which is the
failure the whole practice exists to kill.

## Publishing can run ahead of verification, and that does not move the item

If something was published before it was verified, the item stays at `Built`
**with a published artifact**. Publishing is an act; `Completed` is a state.

The catalogue is generated from **verified** published artifacts, never from
everything on a registry. And what is published-but-unverified has to be
distinguishable by whoever consumes it — a prerelease, a separate channel, a tag —
or the verification gate has no teeth.

## Published is not delivered

`Completed` is global: the artifact exists and can be retrieved. **Whether anyone
has taken it is a separate fact**, per consumer, and it is not on this axis at
all.

That split is deliberate. A team reporting *"released"* meaning *we shipped it*,
while a client hears *I have it*, is the failure two-done reporting exists to
prevent. Nothing about delivery is in scope here — just do not let `Completed`
quietly imply it.

## What must exist when you are finished

- The PR merged and the branch deleted.
- Evidence of the published artifact, **retrieved by query**, or a concession
  recording that it could not be.
- The board at `Completed`, or left at `Built` if the merge did not happen.
- A comment saying what was published, where it was found, and what was conceded.

This is the last act on the track. If it is claimed on a report rather than a
query, everything upstream — the criteria, the failing spec, the verification —
was spent proving something that then went unchecked at the final step.
