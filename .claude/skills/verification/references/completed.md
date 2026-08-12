# Verifying `Verified → Completed`

`Completed` means the artifact is **published** — it has left the repository and
is retrievable by a consumer — **and that was proven by looking.**

Your job here is narrow and unusually mechanical: **go and find the artifact
yourself.** Do not accept a report that it exists.

## The distinction this stage exists to enforce

*"The pipeline said it published"* and *"the package is there"* are different
facts, and the gap between them is where *"we shipped it"* quietly stops being
true.

So a green workflow run is **not** evidence. Neither is a merge commit, a release
note, or a Worker's comment saying it published. The only evidence is retrieving
the thing.

```bash
git fetch origin published
git log origin/published -1 --format='%H %ci %s'
git show origin/published:<expected-path> | head
```

If you cannot retrieve it, **the item is not `Completed`** — regardless of what
any pipeline reported, and regardless of how obviously the merge succeeded.

## Two claims that are not publication

**A commit on `main` is not published.** It is source, not artifact. It is not
retrievable by a consumer, and recording it as publication is precisely the claim
that evidence does not prove.

**A published artifact that was never verified does not count.** The catalogue is
generated from **verified** published artifacts, not from everything on a
registry. If publishing ran ahead of verification, the item sits at `Built` with a
published artifact — publishing is an act, `Completed` is a state.

## Where this legitimately cannot hold

This repository has **no CD and no `published` branch**, so nothing can be
retrieved and this stage cannot pass on its own terms.

If the Worker merged and raised a concession recording that `Completed` is claimed
on the merge alone, **check the concession says exactly that**. What it must not
do is describe merging to `main` as publication — that is not a concession, it is
a misdescription, and a concession that misstates its own compromise is worse than
none.

The concession needs a real expiry: *a build publishes to `published`, and this
item's artifact is retrieved from it.*

## Published is not delivered

`Completed` is global — the artifact exists and can be retrieved. **Whether any
consumer has taken it is a separate fact**, per consumer, and not on this axis.

Do not verify delivery here, and do not let a verdict imply it. A team reporting
*"released"* meaning *we shipped it* while a client hears *I have it* is the
failure two-done reporting exists to prevent.

## Ruling

| | |
|---|---|
| **Verified** | The artifact was retrieved by query, or its absence is covered by a concession that describes the compromise accurately |
| **Sent back** | Publication claimed from a pipeline log, a merge described as publication, or an artifact that cannot be retrieved with nothing conceded |

Send-back returns the item to `Verified` — the work is fine, the publication is
not.
