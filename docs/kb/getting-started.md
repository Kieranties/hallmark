# Getting started

**Everything you need to work in this repository, and nothing you have to install to do it.**
The dev container carries the toolchain; your machine carries Docker and an editor. This
article is the long form — [the README](../../README.md) is the three-step version.

## What your machine needs

| Needs | Why |
| --- | --- |
| [Docker](https://www.docker.com/products/docker-desktop/) | Runs the container. Nothing is installed outside it |
| [Visual Studio Code](https://code.visualstudio.com) | The editor the container is configured for |
| [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) | Opens the repository inside the container |
| A GitHub account | The door is GitHub issues, so working an item means reaching them |

No Node, no npm, no Task, no GitHub CLI. They are in the container, pinned there, and the
same versions for everybody.

## First start

1. Clone the repository and open the folder in VS Code.
2. `Ctrl+Shift+P` → **Dev Containers: Reopen in Container**.
3. Wait. The first build pulls the image and its features, then `task restore` installs the
   site's dependencies. Later starts skip both.
4. `task start`, and port 3000 opens in your browser.

If the build fails on Windows before the container starts, see
[the Wayland socket note in the README](../../README.md#the-dev-container-fails-to-start-is-not-a-valid-windows-path).

## Task is the entry point

Anything routine is a task, so that it is written down once rather than remembered by each
person. `Taskfile.yml` is at the repository root, `task --list` prints what is defined, and
the VS Code Task extension shows the same list in the sidebar.

| Command | Does |
| --- | --- |
| `task restore` | Install the site's dependencies from the lockfile — runs for you on create |
| `task start` | Dev server with live reload on port 3000 |
| `task build` | Production build — the same build a pull request is gated on |
| `task github-login` | Sign in to GitHub, and hand git the same sign-in |

## GitHub

The container carries the [GitHub CLI](https://cli.github.com), so `gh` is on the path. It
arrives signed out — installing a CLI is not the same as authenticating one — and until you
sign in, `gh` and anything built on it can reach nothing private.

```bash
task github-login
```

That does three things, and the middle one is the part people miss:

1. Runs `gh auth login`, which walks you through a browser sign-in.
2. Runs `gh auth setup-git`, which points git's credentials for `github.com` at `gh`.
   **git and `gh` authenticate separately.** Signing in to one does not sign in to the
   other, and a push that asks for a password is that gap showing.
3. Runs `gh auth status`, so the terminal ends with who you are rather than with silence.

Choose **HTTPS** when it asks how to authenticate git operations, and grant the `workflow`
scope if you expect to touch anything under `.github/workflows/`.

### It survives a rebuild

`gh` keeps its sign-in in `~/.config/gh`, which is a Docker volume rather than container
storage, so a rebuild does not sign you out. `GH_CONFIG_DIR` names that path explicitly,
because the CLI's default location follows `XDG_CONFIG_HOME` and the volume does not.

git's half is not on a volume — it is a line in the container's gitconfig, and a rebuild
replaces the container. So the container re-runs `gh auth setup-git` for you on every create,
if and only if you are already signed in. Nothing to redo, and nothing done to git's
credentials on a first start, when there is no sign-in to point it at.

To sign out for good, delete the volume and rebuild:

```bash
docker volume rm hallmark-gh-config
```

### If you already have a token

`GH_TOKEN` is forwarded from your machine into the container. Set it on the host and `gh`
uses it as-is, `task github-login` says so and skips the sign-in, and nothing is stored in
the container. Unset, it arrives empty, which the CLI reads as absent — so the volume's
sign-in is what counts. One or the other, never both.

### Checking it

```bash
gh auth status          # who gh thinks you are
gh repo view            # reaches the API, and this repository
git ls-remote           # reaches the remote as git, which is the separate half
```

## Claude Code

The container carries [Claude Code](https://claude.com/claude-code), so `claude` is on the
path and the VS Code extension arrives with it. **Nothing in this repository requires it** —
the site builds, runs and publishes the same without it.

Run `claude` and it asks you to sign in. Like `gh`, that sign-in is on a volume and outlives
a rebuild. That takes one adjustment, which is already made: Claude Code keeps its sign-in in
`~/.claude.json` — beside the directory holding everything else rather than in it — and a
single mount cannot cover both, so `CLAUDE_CONFIG_DIR` gathers them into `~/.claude`, which is
what the volume covers.

To reset it — sign-in, history and settings alike:

```bash
docker volume rm hallmark-claude-config
```

### What the repository configures, and what you do

`.claude/` in the repository is the shared half: committed, reviewed, the same for everyone.

| Path | Holds |
| --- | --- |
| `.claude/settings.json` | Settings shared by everyone working here, including enabled plugins |
| `.claude/skills/` | Skills this project defines — `capture` for writing to the door, `hallmark-design` for the brand |
| `.claude/settings.local.json` | **Yours.** Machine-specific, git-ignored, never shared |

Put personal preference in `settings.local.json`. Anything you would want a colleague to have
belongs in `settings.json`, in a commit, where it can be reviewed like the rest of the change.

Claude Code uses `gh` for GitHub work when it is there, so signing in above is what gives it
issues, pull requests and CI — one sign-in, not two.

## Rebuilding the container

`Ctrl+Shift+P` → **Dev Containers: Rebuild Container**. Reach for it when
`.devcontainer/devcontainer.json` changes, when a feature needs picking up, or when the
toolchain has drifted somewhere you would rather not diagnose. It is cheap and it is the
supported way to get back to a known state.

**Rebuild and Reopen in Container** is the same thing from outside the container. **Rebuild
Without Cache** discards the image layers too — slow, and rarely what is wrong.

A rebuild replaces the container. It does not touch the volumes, which is the point: your
sign-ins and your dependency cache are on them, so a rebuild costs you a few minutes and
nothing else.

### The volumes, and what resetting each costs

| Volume | Holds | Deleting it costs |
| --- | --- | --- |
| `hallmark-website-node-modules` | The site's dependencies | A `task restore` |
| `hallmark-npm-cache` | The npm download cache | Downloading packages once more |
| `hallmark-claude-config` | Claude Code's sign-in, history and settings | Signing in to Claude Code again |
| `hallmark-gh-config` | The GitHub CLI's sign-in | `task github-login` again |

Delete one with `docker volume rm <name>` from your **host**, with the container stopped, then
rebuild. `docker volume ls | grep hallmark` lists them.

`node_modules` is on a volume because it holds around 40,000 files, and writing that many small
files across a bind mount was measured at 46 seconds against 7. The cost is that it is not
visible from your host — which is only ever a problem when you expect to see it there.

To share your machine's existing npm cache instead of the volume, set `HALLMARK_NPM_CACHE_MOUNT`
before opening VS Code. The whole mount string is the variable, so it can switch from a volume
to a bind:

```
HALLMARK_NPM_CACHE_MOUNT=source=/path/to/your/npm-cache,target=/home/node/.npm,type=bind
```

## Where things are

| Path | Holds |
| --- | --- |
| `website/` | The Docusaurus site — configuration, and content under `website/docs/` |
| `docs/adr/` | Architecture decision records. Immutable; superseded, never edited |
| `docs/kb/` | Knowledge base articles, this one included. Living; edited as the thing changes |
| `.hallmark/` | The repository's own declarations — its door, actors, disciplines and personas |
| `.devcontainer/` | The container definition this article describes |
| `.claude/` | Claude Code configuration shared by everyone working here |
| `.github/workflows/` | Build on pull requests; build and publish on merge to `main` |

[`docs/README.md`](../README.md) states which of `adr/` and `kb/` a new document belongs in.
The split is lifecycle, not subject: if editing it later would destroy the point of it, it is
an ADR.

## Working an item

The door is [GitHub issues](https://github.com/Kieranties/hallmark/issues), and the board is
[the project](https://github.com/users/Kieranties/projects/2). `.hallmark/repository.yml`
declares both, along with what carries an item's type, state and commitment — read it there
rather than assuming, because it is the declaration the tooling reads too.

Anything worth doing that you are not doing now goes to the door rather than into your head:
`/capture <whatever it is>` in Claude Code writes it up as an item. Four words is a valid
capture. That is deliberate — charge for capture, and ideas stop arriving.
