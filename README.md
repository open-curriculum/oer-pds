# Open Instructional Systems

Open Instructional Systems (OIS) is a pedagogical design system for open education. It defines tokens, patterns, themes, renderer profiles, and validation rules that make instructional intent portable, adaptable, automatable, and researchable.

The repository contains the TypeScript specification for the vocabulary, the source registry data, and the public documentation site.

## Repository Layout

### Packages

- `packages/ois-spec` - TypeScript types and validators for OIS objects
- `packages/ois-registry` - YAML source data plus build scripts that generate the machine-readable registry and LLM-facing files
- `tsconfig` - shared TypeScript base configs used across the workspace

### App

- `apps/docs` - Astro + Starlight documentation site for the public OIS reference

## What Gets Built

The build is intentionally split into three stages:

1. `@ois/spec` compiles the shared types and validators.
2. `@ois/registry` compiles its package and generates derived artifacts such as `ois-index.json`, `llms.txt`, and `llms-full.txt`.
3. `apps/docs` builds the static docs site and consumes the generated registry artifacts from `apps/docs/public`.

## Development

Install dependencies from the repo root:

```sh
pnpm install
```

Run the docs development server:

```sh
pnpm dev
```

That command targets `apps/docs` through Turborepo.

## Scripts

Run all commands from the repository root unless noted otherwise.

Build the full project:

```sh
pnpm build
```

Build only the specification package:

```sh
pnpm build:spec
```

Build only the registry package and regenerate derived registry assets:

```sh
pnpm build:registry
```

Build only the docs site:

```sh
pnpm build:docs
```

Regenerate registry artifacts without rebuilding the whole workspace:

```sh
pnpm generate
```

Run lint checks:

```sh
pnpm lint
```

Check formatting:

```sh
pnpm format
```

Apply formatting fixes:

```sh
pnpm format:fix
```

Create a changeset:

```sh
pnpm change:gen
```

Apply version updates from pending changesets:

```sh
pnpm change:version
```

Publish packages:

```sh
pnpm release
```

## Docs and Publishing

The public docs site is built from `apps/docs` and deployed through GitHub Actions. The GitHub Pages deployment workflow lives at `.github/workflows/deploy-docs.yml`.

Registry generation also copies the latest machine-readable artifacts into `apps/docs/public` so the docs site can publish them directly.

## Tooling

- `pnpm` for workspace management
- `turbo` for task orchestration
- `typescript` for package builds
- `astro` and `@astrojs/starlight` for the docs site
- `biome` for linting and formatting

## License

This project is licensed under the [MIT License](./LICENSE).
