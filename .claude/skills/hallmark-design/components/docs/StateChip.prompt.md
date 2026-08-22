The state an item holds. Use wherever the practice's flow is shown — tables, boards, prose, the state diagram.

```jsx
<StateChip state="verified" />
<StateChip state="conceded" size="sm" />
```

States, in travel order: `sifted`, `specified`, `planned`, `built`, `verified`, `decided`, plus `conceded` (off-path).
Brass = in flight, verdigris = checked, aubergine = a recorded compromise, grey = not yet moving.
Never invent a state label; the set mirrors the door's `Status` field.
