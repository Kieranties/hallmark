/**
 * Light/dark switch. Sets `data-theme` on the document root in real use.
 */
export interface ThemeToggleProps {
  /** @default "light" */
  theme?: "light" | "dark";
  onChange?: (next: "light" | "dark") => void;
  /** Icon nodes keyed by the theme they switch TO, e.g. { dark: <MoonIcon/>, light: <SunIcon/> }. */
  icons?: { light?: React.ReactNode; dark?: React.ReactNode };
  style?: React.CSSProperties;
}
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;
