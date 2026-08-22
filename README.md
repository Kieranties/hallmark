# Hallmark

A delivery practice: declarations, states, and criteria a repository adopts so that claims about
work are checked rather than asserted.

This repository holds the practice's documentation site, and in time the tooling that enacts it.

> **Status — pre-1.0, and dogfooding itself.** Nothing here is stable, and the site currently
> carries a scaffold rather than the practice. This README is an interim placeholder; it will be
> rewritten once the site has content for its links to resolve to.

## Documentation

Published to <https://hallmark.kieranties.com> on every merge to `main`.

## Developing

Everything runs inside a dev container. You need **Docker** and **Visual Studio Code** with the
[Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
Nothing else is installed on your machine.

1. Clone the repository and open it in VS Code.
2. Run **Dev Containers: Reopen in Container**. Dependencies install on first start.
3. Start the site:

   ```bash
   task start
   ```

Port 3000 is forwarded and opens in your browser. Edits reload live.

[Task](https://taskfile.dev) is the entry point for anything routine, and the container carries
it. `task --list` shows what is defined; the VS Code Task extension lists the same tasks in the
sidebar. `Taskfile.yml` is at the repository root.

| Command | Does |
| --- | --- |
| `task start` | Dev server with live reload |
| `task restore` | Install dependencies from the lockfile — the container runs this for you on create |
| `npm run build --prefix website` | Production build into `website/build/` |
| `npm run serve --prefix website` | Serve the production build |
| `npm run clear --prefix website` | Clear the Docusaurus cache |

### Where dependencies live

`node_modules` holds around 40,000 files, and writing that many small files across a Docker bind
mount is slow — measured at 46 seconds against 7. So it lives on a Docker volume rather than in
your working copy, and is not visible from the host. If it ever needs resetting, delete the
volume and rebuild the container:

```bash
docker volume rm hallmark-website-node-modules
```

The npm cache is a volume too, so it survives rebuilds. To share your machine's existing cache
instead, set `HALLMARK_NPM_CACHE_MOUNT` before opening VS Code — the whole mount string is the
variable, so it can switch from a volume to a host directory:

```
HALLMARK_NPM_CACHE_MOUNT=source=/path/to/your/npm-cache,target=/home/node/.npm,type=bind
```

That trades a few seconds of install time for never downloading a package twice.

## Layout

| Path | Holds |
| --- | --- |
| `website/` | The Docusaurus site — configuration, and content under `website/docs/` |
| `.devcontainer/` | The development container definition |
| `.github/workflows/` | Build on pull requests; build and publish on merge to `main` |

## Troubleshooting

### The dev container fails to start: "is not a valid Windows path"

On Windows, with Docker Desktop and WSL installed, **Dev Containers: Reopen in Container** can
fail before the container starts:

```
docker: Error response from daemon:
\\wsl.localhost\Ubuntu\mnt\wslg\runtime-dir\wayland-0 is not a valid Windows path
```

VS Code finds WSLg's Wayland socket and asks Docker to mount it, so that graphical applications
inside the container can display. Docker Desktop accepts only drive-letter paths as bind sources,
and the socket is a Unix socket that Windows cannot represent in the first place — so the mount
can never succeed.

Turn it off in your **user** settings (`Ctrl+Shift+P` → *Preferences: Open User Settings (JSON)*):

```jsonc
"dev.containers.mountWaylandSocket": false
```

Then **Dev Containers: Rebuild and Reopen in Container**.

It has to be user settings. The setting is application-scoped, so VS Code ignores it in workspace
settings and in `devcontainer.json` — this repository cannot set it on your behalf. Nothing here
needs a display, so switching it off costs you nothing.
