---
title: Pattern Object
description: Formal specification for the InstructionalPattern object in OIS.
---

## Overview

An `InstructionalPattern` is a reusable sequence of learner and instructor actions. It defines the structural shape of a learning activity.

## JSON Schema

Full schema: [`/schemas/ois-pattern.schema.json`](/schemas/ois-pattern.schema.json)

## TypeScript Type

```typescript
interface PatternPhase {
  phase: number;
  label: string;
  learnerAction: string;
  instructorAction: string;
  evidence: string;
}

interface InstructionalPattern {
  id: string;
  name: string;
  summary: string;
  problem: string;
  context: string[];
  sequence: PatternPhase[];
  recommendedTokens: Record<string, string | string[]>;
  assessmentEvidence: string[];
  compatibleThemes: string[];
  aiGuidance?: string;
}
```

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Kebab-case identifier |
| `name` | `string` | yes | Human-readable title |
| `summary` | `string` | yes | One-sentence description |
| `problem` | `string` | yes | The teaching challenge this pattern solves |
| `context` | `string[]` | yes | Contexts where this pattern works well |
| `sequence` | `PatternPhase[]` | yes | Ordered list of phases |
| `recommendedTokens` | `Record<string, string \| string[]>` | yes | Token defaults for this pattern |
| `assessmentEvidence` | `string[]` | yes | Types of evidence collected across phases |
| `compatibleThemes` | `string[]` | yes | Theme IDs this pattern works with |
| `aiGuidance` | `string` | no | Instructions for AI agents |

## Pattern Phase Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phase` | `number` | yes | Phase number (1-indexed) |
| `label` | `string` | yes | Phase name |
| `learnerAction` | `string` | yes | What the learner does |
| `instructorAction` | `string` | yes | What the instructor does |
| `evidence` | `string` | yes | Evidence produced in this phase |

## Example Pattern Object (YAML)

```yaml
id: peer-review-studio-cycle
name: Peer Review Studio Cycle
summary: Learners produce a draft, give and receive structured peer critique, then revise.
problem: How do you build a culture of critical feedback and iterative improvement?
context:
  - Writing and composition courses
  - Studio arts and design
sequence:
  - phase: 1
    label: Draft Production
    learnerAction: Produce a complete first draft.
    instructorAction: Set draft submission requirements.
    evidence: submitted draft
  - phase: 2
    label: Peer Critique
    learnerAction: Review an assigned peer's draft using a critique guide.
    instructorAction: Provide critique guide with explicit criteria.
    evidence: written critique
recommendedTokens:
  feedback.mode: peer-plus-instructor
  feedback.timing: before-submission
  revision.required: "true"
assessmentEvidence: [draft, peer-critique, revised-artifact]
compatibleThemes: [constructivist-studio, project-based-production]
```

## In the Registry

Patterns are accessible via:
- `GET /ois-index.json` → `patterns` array
- `getPatternById(id)` — `@ois/registry`
