---
title: Agency Tokens
description: Tokens that describe learner autonomy and the nature of choices available to learners.
---

Agency tokens describe how much autonomy learners have and where choices exist in the learning experience.

## `agency.mode`

**The degree of learner autonomy in navigating the learning experience.**

| Value | Meaning |
|-------|---------|
| `fixed-path` | All learners follow the same sequence with no choices |
| `bounded-choice` | Learners choose within defined constraints (e.g., topic from a list) |
| `open-choice` | Learners define significant aspects of the activity (topic, medium, approach) |
| `self-directed` | Learners design their own learning path |

**Use when:** Designing activities where learner autonomy is a deliberate instructional decision.

**AI guidance:** Higher agency modes require more scaffolding for novice learners. If `agency.mode` is `open-choice` or `self-directed`, check that `scaffolding.level` is appropriate for the learner level, or add `scaffolding.type: coaching`.

---

## `agency.choicePoint`

**What aspect of the learning activity learners can choose.**

| Value | Meaning |
|-------|---------|
| `topic` | Learners choose their subject or focus |
| `tool` | Learners choose which tool or software to use |
| `medium` | Learners choose their output medium (video, writing, code, etc.) |
| `sequence` | Learners choose the order of activities |
| `partner` | Learners choose their collaborator |
| `deliverable` | Learners choose the form of their final submission |
| `audience` | Learners choose who their work is for |

**Use when:** `agency.mode` is `bounded-choice` or `open-choice`, to specify what kind of choice is offered.

**Multiple values are allowed** — a project may offer choice of topic *and* medium.

**Examples:**
- `topic + medium` → Students choose a social issue to analyze and whether to respond with a short video, a written essay, or a designed infographic.
- `tool + deliverable` → Students choose which 3D software to use and whether to submit a still render or an animated sequence.

**AI guidance:** Specify `agency.choicePoint` when generating project briefs so the brief clearly communicates what learners can and cannot choose. Unstated choice points often lead to confusion.
