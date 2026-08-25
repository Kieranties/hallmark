Code surface — sunken plate, hairline border, ligatures off, line numbers optional.

```jsx
<CodeBlock filename="hallmark.yml" language="yaml" lineNumbers highlight={[3]}>{src}</CodeBlock>
```

Pass a plain string to get per-line rendering (numbers, highlights). Pass nodes to render pre-highlighted markup from Prism — colour it with the `--code-*` tokens, never Prism's defaults.
