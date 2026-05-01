---
title: Renderer Profile Object
description: Formal specification for the RendererProfile object in OIS.
---

## Overview

A `RendererProfile` is a structural contract defining what sections a given instructional output format should contain. Renderer profiles tell AI agents and platforms what to generate for each output type.

## JSON Schema

Full schema: [`/schemas/ois-renderer.schema.json`](/schemas/ois-renderer.schema.json)

## TypeScript Type

```typescript
type OutputType =
  | 'student-facing-assignment'
  | 'student-facing-content'
  | 'facilitation-guide'
  | 'student-checklist'
  | 'instructor-guide'
  | 'assessment-rubric'
  | 'ai-disclosure'
  | 'course-map'
  | 'lms-assignment'
  | 'ai-context-package';

interface RendererProfile {
  id: string;
  name: string;
  summary: string;
  outputType: OutputType;
  requiredSections: string[];
  optionalSections: string[];
  compatiblePatterns: string[];
  aiGuidance?: string;
}
```

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Kebab-case identifier |
| `name` | `string` | yes | Human-readable title |
| `summary` | `string` | yes | What this output format produces |
| `outputType` | `OutputType` | yes | The category of output |
| `requiredSections` | `string[]` | yes | Sections that must always be present |
| `optionalSections` | `string[]` | yes | Sections included based on token context |
| `compatiblePatterns` | `string[]` | yes | Pattern IDs commonly paired with this profile |
| `aiGuidance` | `string` | no | Instructions for AI agents generating this output |

## Output Types

| `outputType` | Description |
|-------------|-------------|
| `student-facing-assignment` | A document students receive and act on |
| `student-facing-content` | A document students read, watch, or interact with |
| `facilitation-guide` | Notes for the instructor during facilitation |
| `student-checklist` | A process checklist students use during an activity |
| `instructor-guide` | An instructor planning document |
| `assessment-rubric` | A rubric for evaluating learner work |
| `ai-disclosure` | An AI use disclosure template |
| `course-map` | A course sequence overview document |
| `lms-assignment` | An assignment block formatted for an LMS |
| `ai-context-package` | A machine-readable package for AI agents |

## Example Renderer Profile Object (YAML)

```yaml
id: project-brief
name: Project Brief
summary: A student-facing assignment format for project-based learning.
outputType: student-facing-assignment
requiredSections:
  - overview
  - learning-objectives
  - materials
  - process
  - deliverables
  - assessment-criteria
  - revision-expectations
  - reflection
optionalSections:
  - ai-use
  - peer-critique
  - accessibility-options
  - examples
compatiblePatterns:
  - observe-analyze-create-critique-revise
  - constraint-based-project-sprint
aiGuidance: >
  Generate clear student-facing language. State revision expectations explicitly.
  Include assessment criteria in learner-readable form.
  If aiUse.policy is not prohibited, add the ai-use section.
```

## In the Registry

Renderer profiles are accessible via:
- `GET /ois-index.json` → `renderers` array
- `getRendererById(id)` — `@ois/registry`
