/**
 * Emits the sidebar icon set into static/img/icons/ from lucide-react.
 *
 * The design system names a Lucide icon for every page in the IA
 * (ui_kits/docs-site/data.js), and INSTALL.md paints them with a CSS mask, which
 * needs one file per icon. Self-hosting them keeps the navbar free of a CDN
 * round-trip, the same reason the design guide gives for self-hosting the fonts.
 *
 * Run inside the dev container, from website/:
 *   node scripts/generate-sidebar-icons.mjs
 *
 * It is a build-time authoring tool, not part of the site build — the SVGs it
 * writes are committed. Re-run it only when the icon set changes.
 */
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, '../static/img/icons');

/** page slug -> lucide icon name. Names from the design system's data.js where
 *  it supplies one; the rest are chosen to match the page they mark. */
const ICONS = {
  // named by the design system
  'book-open': 'book-open',
  stamp: 'stamp',
  'git-compare': 'git-compare',
  users: 'users',
  user: 'user',
  'key-round': 'key-round',
  'user-check': 'user-check',
  palette: 'palette',
  scale: 'scale',
  layers: 'layers',
  ruler: 'ruler',
  'calendar-clock': 'calendar-clock',
  route: 'route',
  'circle-dot': 'circle-dot',
  inbox: 'inbox',
  filter: 'filter',
  'file-check': 'file-check',
  'list-ordered': 'list-ordered',
  hammer: 'hammer',
  'badge-check': 'badge-check',
  send: 'send',
  // chosen here — the design system names no icon for these pages
  target: 'target',
  wrench: 'wrench',
  'circle-help': 'circle-help',
  'folder-tree': 'folder-tree',
  'book-marked': 'book-marked',
  'settings-2': 'settings-2',
  'triangle-alert': 'triangle-alert',
  'git-fork': 'git-fork',
  house: 'house',
};

const attrs = (o) =>
  Object.entries(o)
    .filter(([k]) => k !== 'key')
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');

const missing = [];
await mkdir(OUT, {recursive: true});

const ICON_DIR = resolve(HERE, '../node_modules/lucide-react/dist/esm/icons');

/** Some names are aliases that only re-export `default` (filter -> funnel), so
 *  __iconNode is undefined on them. Follow the chain to the module that has it. */
async function iconNode(name, seen = new Set()) {
  if (seen.has(name)) return undefined;
  seen.add(name);
  const mod = await import(`lucide-react/dist/esm/icons/${name}.mjs`);
  if (mod.__iconNode) return mod.__iconNode;
  const src = await readFile(resolve(ICON_DIR, `${name}.mjs`), 'utf8');
  const alias = src.match(/from '\.\/([a-z0-9-]+)\.mjs'/i);
  return alias ? iconNode(alias[1], seen) : undefined;
}

for (const [file, icon] of Object.entries(ICONS)) {
  let nodes;
  try {
    nodes = await iconNode(icon);
  } catch {
    nodes = undefined;
  }
  if (!nodes) {
    missing.push(icon);
    continue;
  }
  const body = nodes.map(([tag, props]) => `<${tag} ${attrs(props)}/>`).join('');
  // currentColor is irrelevant here: these are painted with a CSS mask, so only
  // the alpha channel is read. A literal stroke keeps them viewable standalone.
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ` +
    `stroke="#000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
  await writeFile(resolve(OUT, `${file}.svg`), svg + '\n', 'utf8');
}

const written = Object.keys(ICONS).length - missing.length;
console.log(`wrote ${written} icons to static/img/icons/`);
if (missing.length) {
  console.error(`UNRESOLVED (${missing.length}): ${missing.join(', ')}`);
  process.exit(1);
}
