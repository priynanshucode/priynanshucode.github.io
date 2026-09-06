# Priyanshu Gupta — Portfolio

A responsive, static portfolio built with React, TypeScript and Vinext. Features an optimized user-supplied portrait, an interactive data-quality lab, accessible tabs and accordion, active section navigation, clipboard feedback, and reduced-motion support.

## Run locally

Requires Node.js 24 and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verify and export

```sh
node --test tests/demo-data.test.ts
pnpm build
```

Output is `dist/client`. No backend or runtime secrets are required. A Windows-only preload delays successful CLI exit briefly so native build workers can close cleanly.

## GitHub Pages

The included workflow installs, tests, builds and deploys on pushes to `main`. In repository Settings → Pages, choose **GitHub Actions** as the source. The workflow uses the Pages-provided base path, so root sites and repository sites both work. For a manual export, set `NEXT_PUBLIC_BASE_PATH` to the repository subpath (e.g. `/portfolio`) or leave it empty for a root domain.

## Content and privacy

The portrait is used with the owner's permission. Optimized WebP derivatives omit source metadata; the original is preserved outside the repository. Professional statements come from user-supplied profile material. The data lab is a fictional demonstration, not a client engagement or employer dataset. Calculations execute in the visitor's browser. No analytics, credentials or private datasets are included.

Edit `app/page.tsx` for content, `app/globals.css` for styling, and `lib/demo-data.ts` for demo logic.
