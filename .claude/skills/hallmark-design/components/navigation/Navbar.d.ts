/**
 * Docs site top bar: lockup, primary sections, and a right slot for search and theme.
 */
export interface NavbarProps {
  items?: { id: string; label: string; href?: string }[];
  /** id of the current section. */
  active?: string;
  onNavigate?: (item: { id: string; label: string; href?: string }) => void;
  /** Right-aligned slot — SearchField, ThemeToggle, GitHub link. */
  right?: React.ReactNode;
  /** @default true */
  sticky?: boolean;
  style?: React.CSSProperties;
}
export function Navbar(props: NavbarProps): JSX.Element;
