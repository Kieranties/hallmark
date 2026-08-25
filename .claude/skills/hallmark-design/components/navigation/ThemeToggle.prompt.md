Theme switch — a quiet square icon button, never a labelled toggle track.

```jsx
<ThemeToggle theme={theme} onChange={setTheme} icons={{dark:<i data-lucide="moon"/>,light:<i data-lucide="sun"/>}} />
```

Pass Lucide `moon`/`sun` icons; the letter fallback exists only so the component never renders empty.
