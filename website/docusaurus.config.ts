import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import mermaidTheme from './src/css/hallmark/docusaurus/mermaid';

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
          // The practice is the whole site, so it serves from the root rather
          // than from /docs. docs/index.mdx is the landing page.
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Kieranties/hallmark/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: [
            './src/css/hallmark/styles.css', // tokens first
            './src/css/hallmark/docusaurus/custom.css', // Infima bridge
            './src/css/hallmark/docusaurus/prism-hallmark.css',
            './src/css/hallmark/docusaurus/mermaid.css',
            './src/css/site.css', // site-only additions
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    // Only `theme` and `options` are Docusaurus fields. The design system's
    // export also carries `darkThemeVariables`, which Docusaurus has nowhere to
    // put — it applies one themeVariables set to both colour modes — so dark
    // parity is painted in src/css/site.css and the key is dropped here.
    mermaid: {theme: mermaidTheme.theme, options: mermaidTheme.options},
    navbar: {
      title: 'Hallmark',
      logo: {
        alt: '',
        src: 'img/mark-gold.svg',
        srcDark: 'img/mark-light.svg',
        width: 26,
        height: 26,
      },
      items: [
        {to: '/practice/overview', label: 'Practice', position: 'left'},
        {to: '/parties/', label: 'Parties', position: 'left'},
        {to: '/work/types', label: 'Work', position: 'left'},
        {to: '/process/', label: 'Process', position: 'left'},
        {to: '/apply/declaring-an-application', label: 'Apply', position: 'left'},
        {to: '/terminology', label: 'Terminology', position: 'right'},
        {
          href: 'https://github.com/Kieranties/hallmark',
          position: 'right',
          // Required: site.css swaps this for a masked Lucide glyph so it
          // matches the colour-mode toggle. A `label` would render as text.
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Practice',
          items: [
            {label: 'Overview', to: '/practice/overview'},
            {label: 'Principles', to: '/practice/principles'},
            {label: 'Practice and application', to: '/practice/practice-and-application'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Terminology', to: '/terminology'},
            {label: 'The states', to: '/process/states'},
            {label: 'Standards', to: '/work/standards'},
          ],
        },
        {
          title: 'Apply',
          items: [
            {label: 'Declaring an application', to: '/apply/declaring-an-application'},
            {label: 'Concessions', to: '/apply/concessions'},
            {label: 'Subtypes', to: '/apply/subtypes'},
          ],
        },
        {
          title: 'Repository',
          items: [
            {label: 'GitHub', href: 'https://github.com/Kieranties/hallmark'},
            {label: 'Issues', href: 'https://github.com/Kieranties/hallmark/issues'},
          ],
        },
      ],
      copyright: 'Hallmark — pre-1.0. Built on the practice it describes.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
