---
title: Token Object
description: Formal specification for the PedagogicalToken object in OIS.
---

## Overview

A `PedagogicalToken` is a single atomic instructional decision. It defines one dimension of instructional style with a named set of allowed values.

## JSON Schema

Full schema: [`/schemas/ois-token.schema.json`](/schemas/ois-token.schema.json)

## TypeScript Type

```typescript
type TokenValueType = 'enum' | 'boolean' | 'enum-multi' | 'enum-or-free';

interface TokenValue {
  value: string;
  definition: string;
}

interface PedagogicalToken {
  id: string;             // e.g. "scaffolding.level"
  name: string;           // e.g. "Scaffolding Level"
  category: string;       // e.g. "scaffolding"
  type: TokenValueType;
  values: TokenValue[];
  defaultValue?: string;
  definition: string;
  aiGuidance?: string;
}
```

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Dot-separated identifier: `category.dimension` |
| `name` | `string` | yes | Human-readable label |
| `category` | `string` | yes | One of the 10 token groups |
| `type` | `TokenValueType` | yes | How values should be interpreted |
| `values` | `TokenValue[]` | yes | Allowed values with definitions |
| `defaultValue` | `string` | no | Assumed value when unset |
| `definition` | `string` | yes | What this token measures or controls |
| `aiGuidance` | `string` | no | Instructions for AI agents |

## Value Types

| Type | Description | Example |
|------|-------------|---------|
| `enum` | Exactly one value from the list | `scaffolding.level: high` |
| `boolean` | `"true"` or `"false"` (string) | `revision.required: "true"` |
| `enum-multi` | One or more values from the list | `aiUse.allowedFunctions: [brainstorming, feedback]` |
| `enum-or-free` | A value from the list or a free-form string | `reflection.focus: [process, my-custom-focus]` |

Note: boolean tokens use string values (`"true"` / `"false"`) rather than native booleans for YAML frontmatter compatibility.

## Token ID Naming Convention

Token IDs always follow `category.dimension`:
- The category is the group prefix: `scaffolding`, `agency`, `feedback`, `assessment`, `revision`, `reflection`, `collaboration`, `accessibility`, `localization`, `aiUse`
- The dimension is the specific aspect measured within that category

## Example Token Object (YAML)

```yaml
id: feedback.timing
name: Feedback Timing
category: feedback
type: enum
definition: When feedback is given relative to submission.
defaultValue: after-submission
aiGuidance: If revision.required is true, feedback.timing must not be after-submission.
values:
  - value: before-submission
    definition: Feedback is given before the final submission deadline, enabling revision.
  - value: after-submission
    definition: Feedback is given after the submission deadline.
  - value: ongoing
    definition: Feedback is given continuously throughout the activity.
  - value: on-demand
    definition: Feedback is available on request.
```

## In the Registry

Tokens are accessible via:
- `GET /ois-index.json` → `tokens` array
- `getTokenById(id)` — `@ois/registry`
- `getTokensByCategory(category)` — `@ois/registry`
