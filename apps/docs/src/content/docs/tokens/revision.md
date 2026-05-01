---
title: Revision Tokens
description: Tokens that describe whether and how revision is expected in a learning activity.
---

Revision tokens describe whether learners are expected to improve their work after feedback, and how that revision cycle works.

## `revision.required`

**Whether revision is required before or as part of the final evaluation.**

| Value | Meaning |
|-------|---------|
| `true` | Revision is a required part of the activity |
| `false` | Revision is optional or not expected |

**Use when:** Designing any project, exercise, or assignment where feedback is given. If feedback is provided but revision is not expected, the feedback signal is incomplete.

**Related tokens:** `feedback.mode`, `feedback.timing`, `revision.mode`

**Validation:** If `revision.required` is `true`, `feedback.timing` should not be `after-submission`.

**AI guidance:** Set `revision.required: true` for all studio-based and project-based activities. Revision is a core mechanism of learning in constructivist and mastery approaches. When generating rubrics, include a criterion for revision quality (responsiveness to feedback, not just effort).

---

## `revision.mode`

**The structure and expectation of the revision cycle.**

| Value | Meaning |
|-------|---------|
| `optional` | Revision is encouraged but not graded |
| `required-once` | One round of revision is required |
| `required-until-proficient` | Learners revise until a proficiency threshold is met (mastery model) |
| `iterative-cycle` | Multiple rounds of feedback and revision are built into the activity |

**Use when:** `revision.required` is `true`.

**Examples:**
- `required-once` → A student submits a draft, receives peer and instructor critique, revises once, and submits the final version.
- `required-until-proficient` → A coding assignment must pass all tests before it is accepted. Learners submit as many times as needed.
- `iterative-cycle` → A studio project involves three critique sessions over six weeks, each followed by revision.

**AI guidance:** Use `required-until-proficient` only with clear rubric criteria and accessible support (scaffolding or coaching). Use `iterative-cycle` when the timeline allows for multiple rounds. Clearly communicate revision expectations in student-facing materials to reduce anxiety about "not getting it right the first time."
