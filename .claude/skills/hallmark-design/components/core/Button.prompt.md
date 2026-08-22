The action control — use for the one next step a reader should take, and for alternatives beside it.

```jsx
<Button href="/docs">Read the practice</Button>
<Button variant="secondary" href="https://github.com/Kieranties/hallmark">GitHub</Button>
<Button variant="ghost" size="sm">Copy</Button>
```

- `variant`: `primary` (madder fill — one per view), `secondary` (paper with a strong hairline), `ghost` (text only, soft madder wash on hover).
- `size`: `sm` / `md` / `lg`. Docs pages use `md`; the landing hero uses `lg`.
- Press state translates 1px down. No scale, no bounce.
- Pass `iconLeft` / `iconRight` a 16px Lucide SVG; never an emoji.
