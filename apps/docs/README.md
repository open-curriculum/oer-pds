# OER Design System Docs App

This app contains the public OER Design System documentation site built with Astro and Starlight.

The site publishes three kinds of content from one place:

- reference documentation for OER Design System concepts and specification details
- browsable registry content for tokens, patterns, themes, renderers, and validation rules
- machine-readable static files such as `llms.txt`, `llms-full.txt`, `ois-index.json`, and JSON Schemas

See also the root [README](../../README.md).

## Content Structure

Most authored content lives in `src/content/docs`.

- concept and guide pages are written as Markdown or MDX files
- section navigation is configured in `astro.config.js`
- generated registry assets are served from `public`

The registry package copies generated machine-readable files into this app during its build step so the docs site can publish them directly.

## Local Usage

From the repo root, start the docs development server with:

```sh
pnpm dev
```

From `apps/docs`, you can also run the app directly:

```sh
pnpm build
pnpm lint
pnpm format
```

If you run commands inside `apps/docs`, make sure generated registry assets already exist or build the workspace from the root first.

## Deployment

The documentation site is built as a static Astro app and deployed through GitHub Actions using the workflow at `.github/workflows/deploy-docs.yml`.
