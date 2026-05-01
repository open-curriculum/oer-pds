---
title: Scaffolding Tokens
description: Tokens that control the degree and form of instructional support provided to learners.
---

Scaffolding tokens describe how much support a learner receives before performing independently.

## `scaffolding.level`

**Degree of instructional support provided before independent learner performance.**

| Value | Meaning |
|-------|---------|
| `none` | No support provided; learners work without guidance |
| `low` | Minimal cues or hints; learners are expected to problem-solve |
| `medium` | Structured examples and some guided steps; learners have significant independence |
| `high` | Detailed worked examples, templates, or step-by-step guides before independent work |
| `adaptive` | Support adjusts based on demonstrated learner performance |

**Use when:** The level of support meaningfully affects learner autonomy and the challenge level of the activity.

**Do not use when:** The resource is purely informational and does not require learner action.

**Examples:**
- `high` → First-year students learning a complex 3D animation workflow. Receive worked examples, a labeled template, and step-by-step guides before attempting independently.
- `medium` → Intermediate students completing a studio project. Receive examples and a project brief, but make their own design decisions.
- `none` → Advanced practicum students expected to work fully independently.

**Related tokens:** `scaffolding.type`, `feedback.mode`, `agency.mode`

**OERSchema mapping:** `educationalLevel`, `learningResourceType`

**AI guidance:** Use this token to decide how much support to include before asking the learner to perform independently. Higher scaffolding reduces cognitive load but may reduce learner agency. If `agency.mode` is `open-choice` or `self-directed`, prefer lower scaffolding values or `adaptive`.

---

## `scaffolding.type`

**The form that instructional support takes.**

| Value | Meaning |
|-------|---------|
| `worked-example` | A complete example showing the process and outcome |
| `checklist` | A list of steps or criteria the learner can check off |
| `template` | A pre-structured format the learner fills in |
| `guided-steps` | A step-by-step walkthrough the learner follows |
| `exemplar` | A model of strong student work with annotations |
| `coaching` | One-on-one or small-group instructional support |
| `none` | No specific scaffolding format |

**Use when:** `scaffolding.level` is set to `low`, `medium`, `high`, or `adaptive`.

**Examples:**
- `template` → A writing assignment with a provided document structure reduces structural ambiguity and lets learners focus on content.
- `exemplar` → An annotated example of strong peer work helps learners calibrate quality expectations.
- `worked-example` → A screen recording showing the animation process before learners attempt it independently.

**Related tokens:** `scaffolding.level`

**AI guidance:** Choose the scaffolding type based on where learners are most likely to struggle. If the challenge is conceptual, use `worked-example` or `exemplar`. If organizational, use `template` or `checklist`. If skill-based, use `guided-steps` or `coaching`.
