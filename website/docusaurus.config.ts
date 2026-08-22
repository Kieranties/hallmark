import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Hallmark',
  tagline: 'A delivery practice whose claims are checked rather than asserted',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Served from a custom domain, so the site sits at the root.
  // The domain itself is bound in the repository's Pages settings, not here.
  url: 'https://hallmark.kieranties.com',
  baseUrl: '/',
  favicon: 'img/favicon.svg',

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
  ],

  organizationName: 'Kieranties',
  projectName: 'hallmark',

  // A broken link fails the build rather than shipping a 404.
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Kieranties/hallmark/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hallmark',
      logo: {alt: '', src: 'img/logo-mark.svg', width: 26, height: 28},
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Kieranties/hallmark',
          position: 'right',
          // Required: the brand CSS swaps this for a masked Lucide glyph so it
          // matches the colour-mode toggle. A `label` would render as text.
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      // Drawn in #F6F1EC, so it reads on the near-black footer in both themes.
      logo: {alt: 'Hallmark', src: 'img/logo-dark.svg', width: 170, height: 43},
      links: [
        {
          title: 'Read',
          items: [{label: 'Documentation', to: '/docs'}],
        },
        {
          title: 'Repository',
          items: [
            {label: 'GitHub', href: 'https://github.com/Kieranties/hallmark'},
            {label: 'Issues', href: 'https://github.com/Kieranties/hallmark/issues'},
          ],
        },
      ],
      copyright: `Hallmark — pre-1.0. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
