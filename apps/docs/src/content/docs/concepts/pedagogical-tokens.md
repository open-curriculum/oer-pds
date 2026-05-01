---
title: Pedagogical Tokens
description: Atomic instructional decisions that make the "how" of teaching explicit, portable, and machine-readable.
---

Pedagogical tokens are the smallest meaningful units of instructional intent.

They work exactly like design tokens in visual design systems: instead of describing color, spacing, or typography, pedagogical tokens describe scaffolding level, feedback mode, assessment evidence, learner agency, and AI-use policy.

## Why Tokens?

Without tokens, instructional intent is buried inside content prose. Two lessons might cover identical subject matter but have completely different instructional approaches — and there is no way for a person reading the content, or an AI agent processing it, to detect the difference.

Tokens solve this by making instructional decisions **explicit, named, and discrete**.

```yaml
# Without tokens (intent is invisible)
title: Introduction to Camera Framing

# With tokens (intent is explicit)
title: Introduction to Camera Framing
pedagogy:
  theme: constructivist-studio
  tokens:
    scaffolding.level: medium
    agency.mode: bounded-choice
    feedback.mode: peer-plus-instructor
    assessment.evidence: artifact-plus-reflection
    revision.required: true
```

## Token Structure

Each token has:

| Field | Description |
|-------|-------------|
| `id` | Dot-separated identifier: `category.name` |
| `name` | Human-readable label |
| `category` | One of the 10 token groups |
| `type` | `enum`, `boolean`, `enum-multi`, or `enum-or-free` |
| `values` | Allowed values with definitions |
| `defaultValue` | Assumed value when unset |
| `definition` | What this token means |
| `aiGuidance` | Instructions for AI agents |

## Token Groups

OIS defines 10 token groups:

| Group | What it describes |
|-------|------------------|
| `scaffolding.*` | How much instructional support is provided |
| `agency.*` | How much learner choice is built in |
| `feedback.*` | Who gives feedback and when |
| `assessment.*` | What evidence is collected and how |
| `revision.*` | Whether and how learners revise work |
| `reflection.*` | Whether and what learners reflect on |
| `collaboration.*` | How learners work together |
| `accessibility.*` | Accessibility orientations and media alternatives |
| `localization.*` | Localization depth and bandwidth assumptions |
| `aiUse.*` | AI use policy, functions, disclosure, reflection |

## Naming Convention

Token IDs always follow the pattern `category.dimension`:

- `scaffolding.level` — the `level` dimension of `scaffolding`
- `feedback.timing` — the `timing` dimension of `feedback`
- `aiUse.policy` — the `policy` dimension of `aiUse`

This makes token IDs self-documenting and easy to namespace in content frontmatter.

## How Tokens Combine

Tokens are designed to be used together. A single token tells you one thing. A token bundle tells you the whole instructional style.

The `direct-instruction` theme, for example, resolves to this token bundle:

```yaml
scaffolding.level: high
scaffolding.type: worked-example
agency.mode: fixed-path
feedback.mode: instructor
feedback.timing: after-submission
assessment.evidence: quiz
assessment.mode: formative
revision.required: false
```

The `constructivist-studio` theme resolves to a very different bundle even for identical subject matter:

```yaml
scaffolding.level: medium
agency.mode: bounded-choice
feedback.mode: peer-plus-instructor
feedback.timing: before-submission
assessment.evidence: artifact-plus-reflection
revision.required: true
revision.mode: required-once
reflection.required: true
```

See the [Tokens reference](/tokens/) for all token definitions.
