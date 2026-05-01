---
title: Theme Object
description: Formal specification for the PedagogicalTheme object in OIS.
---

## Overview

A `PedagogicalTheme` is a named bundle of token defaults representing a coherent instructional style. Themes are the entry point for applying OIS to a learning experience.

## JSON Schema

Full schema: [`/schemas/ois-theme.schema.json`](/schemas/ois-theme.schema.json)

## TypeScript Type

```typescript
interface PedagogicalTheme {
  id: string;
  name: string;
  summary: string;
  tokens: Record<string, string | string[]>;
  preferredPatterns: string[];
  rendererProfiles?: string[];
  aiGuidance?: string;
}
```

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Kebab-case identifier |
| `name` | `string` | yes | Human-readable title |
| `summary` | `string` | yes | One-sentence description of the style |
| `tokens` | `Record<string, string \| string[]>` | yes | Default token values for this theme |
| `preferredPatterns` | `string[]` | yes | Pattern IDs that work well with this theme |
| `rendererProfiles` | `string[]` | no | Recommended renderer profile IDs |
| `aiGuidance` | `string` | no | Instructions for AI agents applying this theme |

## How Themes Relate to Tokens

A theme's `tokens` object sets defaults. When a content author or AI agent applies a theme, these defaults fill in any tokens not explicitly overridden.

Token override precedence (highest to lowest):
1. Activity-level explicit token value
2. Module-level explicit token value
3. Course-level explicit token value
4. Theme default
5. Token's own `defaultValue`

## Example Theme Object (YAML)

```yaml
id: mastery-learning
name: Mastery Learning
summary: A competency-based style where learners demonstrate proficiency before advancing.
tokens:
  scaffolding.level: high
  scaffolding.type: checklist
  agency.mode: fixed-path
  feedback.mode: instructor
  feedback.timing: after-submission
  assessment.evidence: quiz
  assessment.mode: summative
  revision.required: "true"
  revision.mode: until-mastery
  reflection.required: "false"
  collaboration.structure: none
  aiUse.policy: prohibited
preferredPatterns:
  - mastery-checkpoint-pathway
  - demo-guided-practice-independent-production
rendererProfiles:
  - student-checklist
  - rubric-aligned-assessment
  - lms-assignment
aiGuidance: >
  Make mastery criteria explicit and observable before the activity begins.
  Assessment is pass/not-yet — never graded on a curve.
```

## In the Registry

Themes are accessible via:
- `GET /ois-index.json` → `themes` array
- `getThemeById(id)` — `@ois/registry`
