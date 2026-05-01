---
title: Validation Rules
description: Rules that check alignment between learning objectives, activities, assessments, and pedagogical tokens.
sidebar:
  order: 1
  label: Overview
---

OIS validation rules are checks that help humans and AI agents evaluate whether a learning experience is internally consistent and pedagogically sound.

Validation rules can begin as documented heuristics and later become executable checks in platform integrations.

## Rule Severity Levels

| Level | Meaning |
|-------|---------|
| `error` | A fundamental alignment problem that should be resolved before use |
| `warning` | A potential issue that should be reviewed |
| `info` | A suggestion for improvement |

## Starter Validation Rules

### Alignment Rules

| Rule ID | Severity | Condition | Expected |
|---------|----------|-----------|----------|
| `objective-requires-evidence` | `error` | Learning objective exists | `assessment.evidence` is set |
| `revision-requires-timely-feedback` | `error` | `revision.required: true` | `feedback.timing` is not `after-submission` |
| `critique-requires-revision` | `warning` | `collaboration.structure: studio-critique` | `revision.required: true` |

### AI-Use Rules

| Rule ID | Severity | Condition | Expected |
|---------|----------|-----------|----------|
| `ai-use-requires-disclosure` | `error` | `aiUse.policy` ≠ `prohibited` | `aiUse.disclosureRequired: true` |
| `ai-use-requires-reflection` | `warning` | `aiUse.policy` ≠ `prohibited` | `reflection.required: true` |
| `ai-collaborative-requires-reflection` | `error` | `aiUse.policy: collaborative-disclosed` | `reflection.required: true` AND `reflection.focus` includes `ethical-use` |

### Accessibility Rules

| Rule ID | Severity | Condition | Expected |
|---------|----------|-----------|----------|
| `low-bandwidth-needs-alternatives` | `warning` | `bandwidth.assumption: low` | `accessibility.mediaAlternatives` includes `transcript` or `downloadable-assets` |
| `screen-reader-needs-alt-text` | `error` | `accessibility.mode: screen-reader-first` | `accessibility.mediaAlternatives` includes `alt-text` |

### Agency and Scaffolding Balance

| Rule ID | Severity | Condition | Expected |
|---------|----------|-----------|----------|
| `open-choice-novice-needs-scaffolding` | `warning` | `agency.mode: open-choice` AND learner level is beginner | `scaffolding.level` ≥ `medium` |

## Machine-Readable

JSON Schema: [`/schemas/ois-validation-rule.schema.json`](/schemas/ois-validation-rule.schema.json)

All rules available in: [`/ois-index.json`](/ois-index.json) → `validationRules`
