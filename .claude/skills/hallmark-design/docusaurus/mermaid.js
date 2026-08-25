/**
 * Hallmark mermaid theme. Mermaid cannot read CSS custom properties, so the values
 * are the literal token values — keep them in step with tokens/colors.css.
 *
 * Usage (docusaurus.config.js):
 *   markdown: { mermaid: true },
 *   themes: ['@docusaurus/theme-mermaid'],
 *   themeConfig: { mermaid: require('./src/css/hallmark/docusaurus/mermaid.js') }
 */
const shared = {
  // Node labels are measured in this face, so it must be the face they render in.
  fontFamily: '"Fira Code","IBM Plex Mono",ui-monospace,Menlo,monospace',
  fontSize: '14px',
  primaryTextColor: '#16181C',
  lineColor: '#8A939F',
  edgeLabelBackground: '#FAF8F4',
  labelBackground: '#FAF8F4',
  tertiaryColor: '#F3F0E9',
};

const config = {
  theme: { light: 'base', dark: 'base' },
  options: {
    startOnLoad: true,
    flowchart: { curve: 'linear', htmlLabels: true, padding: 12 },
    state: { padding: 10 },
    themeVariables: {
      ...shared,
      background: '#FAF8F4',
      primaryColor: '#FFFFFF',
      primaryBorderColor: '#A8792C',
      secondaryColor: '#F6EDDC',
      secondaryBorderColor: '#D3AC66',
      noteBkgColor: '#FBF0D9',
      noteBorderColor: '#96701A',
      clusterBkg: '#F3F0E9',
      clusterBorder: '#E8E3D9',
      titleColor: '#16181C',
    },
    darkMode: false,
  },
  /** Merge into options.themeVariables when data-theme="dark". */
  darkThemeVariables: {
    ...shared,
    background: '#15181C',
    primaryColor: '#1D2126',
    primaryTextColor: '#E8E6E1',
    primaryBorderColor: '#D3AC66',
    secondaryColor: '#282D34',
    secondaryBorderColor: '#A8792C',
    lineColor: '#5E6875',
    edgeLabelBackground: '#15181C',
    labelBackground: '#15181C',
    noteBkgColor: '#282D34',
    noteBorderColor: '#E0B45C',
    clusterBkg: '#0E1013',
    clusterBorder: '#282D34',
    titleColor: '#F2F1EE',
  },
};

if (typeof module !== "undefined" && module.exports) { module.exports = config; }
else if (typeof window !== "undefined") { window.hallmarkMermaidTheme = config; }
