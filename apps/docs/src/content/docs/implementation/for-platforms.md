---
title: For Platform Developers
description: How to integrate OIS into content authoring tools, LMS connectors, and OER publishing platforms.
---

OIS is designed to be embedded in platforms — not just referenced in documentation. This guide covers the integration patterns.

## Adding the `pedagogy` Block to Your Schema

The minimum integration is adding a `pedagogy` field to your content schema. In JSON Schema:

```json
{
  "properties": {
    "pedagogy": {
      "$ref": "https://open-curriculum.github.io/oer-pds/schemas/ois-token.schema.json"
    }
  }
}
```

Or use the `@ois/spec` package to get Zod validators and TypeScript types:

```bash
pnpm add @ois/spec
```

```typescript
import { PedagogyBlockSchema } from '@ois/spec';

// Validate a pedagogy block from content frontmatter
const result = PedagogyBlockSchema.safeParse(frontmatter.pedagogy);
if (!result.success) {
  console.error('Invalid pedagogy block:', result.error);
}
```

## Registry Access

The `@ois/registry` package provides accessor functions for the full OIS registry:

```bash
pnpm add @ois/registry
```

```typescript
import { getThemeById, getTokensByCategory, getPatternById } from '@ois/registry';

const theme = getThemeById('constructivist-studio');
const feedbackTokens = getTokensByCategory('feedback');
const pattern = getPatternById('observe-analyze-create-critique-revise');
```

Or consume the machine-readable endpoints directly:

| Endpoint | Description |
|----------|-------------|
| `GET /ois-index.json` | Full registry of all tokens, patterns, themes, renderers, validation rules |
| `GET /ois-context.jsonld` | JSON-LD context for OIS vocabulary |
| `GET /schemas/ois-token.schema.json` | JSON Schema for token objects |
| `GET /schemas/ois-theme.schema.json` | JSON Schema for theme objects |
| `GET /schemas/ois-pattern.schema.json` | JSON Schema for pattern objects |

All endpoints are served from `https://open-curriculum.github.io/oer-pds/`.

## CMS Integration (Frontmatter / Decap CMS)

For Decap CMS (formerly Netlify CMS), add OIS fields as a collection widget group:

```yaml
# config.yml
collections:
  - name: lessons
    fields:
      - label: Pedagogical Theme
        name: pedagogy_theme
        widget: select
        options:
          - direct-instruction
          - constructivist-studio
          - mastery-learning
          - inquiry-based
          - critical-media-analysis
          - project-based-production
          - accessibility-first
          - ai-literacy
          - low-bandwidth-global
          - community-engaged
      - label: AI Use Policy
        name: pedagogy_aiuse_policy
        widget: select
        options:
          - prohibited
          - not-specified
          - instructor-specified
          - assisted-disclosed
          - collaborative-disclosed
          - experimental
```

For a Nuxt + Decap CMS integration, see [For Nuxt + Decap CMS](/implementation/for-nuxt-decapcms/).

## Running Validation in CI

Use the validation rules in `ois-index.json` to run checks in your build pipeline:

```typescript
import { getRegistry } from '@ois/registry';
import type { PedagogyBlock } from '@ois/spec';

const registry = getRegistry();

function validatePedagogyBlock(pedagogy: PedagogyBlock): string[] {
  const errors: string[] = [];
  for (const rule of registry.validationRules) {
    const tokenValue = pedagogy.tokens?.[rule.condition.token];
    if (rule.condition.values.includes(String(tokenValue))) {
      const expectedToken = pedagogy.tokens?.[rule.expected.token];
      if (rule.expected.notValues?.includes(String(expectedToken))) {
        errors.push(rule.message);
      }
    }
  }
  return errors;
}
```

## Rendering OIS-Annotated Content

When rendering content with a pedagogy block, you can use the theme and tokens to:

- Display a visual "pedagogical style" badge
- Surface the AI use policy to learners
- Show the revision and feedback expectations
- Match renderer profiles to output templates

See the [Renderer Profiles reference](/renderers/) for output structure definitions.

## JSON-LD Embedding

To make content machine-readable by crawlers and AI agents, embed the OIS context in your JSON-LD:

```json
{
  "@context": [
    "https://schema.org/",
    "https://open-curriculum.github.io/oer-pds/ois-context.jsonld"
  ],
  "@type": "LearningResource",
  "name": "Camera Framing",
  "pedagogy": {
    "theme": "constructivist-studio",
    "tokens": {
      "scaffolding.level": "medium",
      "aiUse.policy": "collaborative-disclosed"
    }
  }
}
```
