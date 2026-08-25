/**
 * Docs sidebar: uppercase section labels, two levels of items, gold-marked current page.
 */
export interface SidebarNavItem {
  id: string;
  label: string;
  href?: string;
  /** 14px leading icon node (Lucide). Top-level items only — children stay unadorned. */
  icon?: React.ReactNode;
  items?: SidebarNavItem[];
}
export interface SidebarNavProps {
  sections?: { label: string; items?: SidebarNavItem[] }[];
  active?: string;
  onNavigate?: (item: SidebarNavItem) => void;
  style?: React.CSSProperties;
}
export function SidebarNav(props: SidebarNavProps): JSX.Element;
