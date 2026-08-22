An admonition inside docs prose — the mock equivalent of a Docusaurus `:::` block.

```jsx
<Callout kind="warning" title="This site is a scaffold">
  The practice is still held as working documents in the repository.
</Callout>
```

- `kind` matches Docusaurus admonition names exactly: `note`, `tip`, `info`, `warning`, `danger`.
- The 3px left edge is the struck edge; it is the only left-accent treatment in the system.
- Label is mono, uppercase, tracked. Override it with `title` when the block names a specific claim.
