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
   npm run start --prefix website
   ```

Port 3000 is forwarded and opens in your browser. Edits reload live.

| Command | Does |
| --- | --- |
| `npm run start --prefix website` | Dev server with live reload |
| `npm run build --prefix website` | Production build into `website/build/` |
| `npm run serve --prefix website` | Serve the production build |
| `npm run clear --prefix website` | Clear the Docusaurus cache |

## Layout

| Path | Holds |
| --- | --- |
| `website/` | The Docusaurus site — configuration, and content under `website/docs/` |
| `.devcontainer/` | The development container definition |
| `.github/workflows/` | Build on pull requests; build and publish on merge to `main` |
