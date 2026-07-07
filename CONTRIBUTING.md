# Contributing

This is a small, unserious side project, so the process is kept light.

## Getting set up

```bash
npm install
npm run dev
```

See the [README](README.md) for the full local setup, including running the API.

## Before opening a pull request

```bash
npm run lint
npm run build
```

Both must pass; CI runs the same two checks on every pull request.

## Guidelines

- Keep changes focused. Small, single-purpose pull requests are easier to review than large ones.
- Match the existing code style (TypeScript, functional React components, Tailwind for styling).
- Do not commit personal photos or any other private assets; see the "Adding photos" section of the README for how those are kept out of the repo.
