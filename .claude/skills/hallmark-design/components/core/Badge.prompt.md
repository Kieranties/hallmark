A small mono label for a fact about a thing: a version, a type, a count, a doc status.

```jsx
<Badge>pre-1.0</Badge>
<Badge tone="accent">type-practice</Badge>
<Badge tone="verified" outline>verified</Badge>
```

- Use `StateChip` for a practice **state** (Sifted, Specified, Verified…). `Badge` is for everything else.
- Tones map to the semantic state colours; keep `neutral` unless the label carries a verdict.
