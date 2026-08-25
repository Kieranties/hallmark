/**
 * Types for the design system's mermaid theme export, which ships as plain
 * CommonJS so the same file works in the UI kit and in this config.
 */
declare const mermaidTheme: {
  theme: {light: string; dark: string};
  options: Record<string, unknown>;
  /** Not read by Docusaurus — it applies one set of themeVariables for both
   *  modes. Dark parity is painted in src/css/site.css instead. */
  darkThemeVariables: Record<string, unknown>;
};
export default mermaidTheme;
