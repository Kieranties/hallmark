Sidebar tree — maps to a Docusaurus `sidebars.js` category/doc structure.

```jsx
<SidebarNav sections={[{label:"Practice",items:[{id:"overview",label:"Overview"}]}]} active="overview" />
```

Give top-level items a 14px Lucide `icon`; leave nested items unadorned so the rail stays the depth cue. Depth 2 gets a hairline rail; depth 3 does not exist — restructure instead.
