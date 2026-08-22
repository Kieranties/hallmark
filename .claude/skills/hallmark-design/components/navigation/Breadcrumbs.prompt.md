Sits above the page title on every docs page.

```jsx
<Breadcrumbs items={[{ label: 'Docs', href: '/docs' }, { label: 'The door' }]} />
```

Set in mono because a breadcrumb names a path, not a sentence. Last item is the current page and is never a link.
