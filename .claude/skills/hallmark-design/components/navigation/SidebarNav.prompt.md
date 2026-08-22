The docs sidebar. One per docs layout, 270px wide (`--hm-sidebar-width`).

```jsx
<SidebarNav activeId="door" onSelect={setPage} sections={[
  { label: 'Practice', items: [{ id: 'door', label: 'The door' }, { id: 'states', label: 'States' }] }
]} />
```

Section labels are mono uppercase and are never links. Active item: sunk fill, madder text, 2px madder left edge.
