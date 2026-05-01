---
title: Feedback Tokens
description: Tokens that describe the source and timing of feedback in a learning activity.
---

Feedback tokens describe who gives feedback and when.

## `feedback.mode`

**The source of feedback in the learning experience.**

| Value | Meaning |
|-------|---------|
| `none` | No explicit feedback mechanism |
| `self` | Learners evaluate their own work against criteria |
| `peer` | Feedback from peers only |
| `instructor` | Feedback from the instructor only |
| `automated` | Automated system feedback (e.g., quiz scores, code linter, rubric tool) |
| `community` | Feedback from a community beyond the course |
| `peer-plus-instructor` | Both peer and instructor feedback |
| `mixed` | Multiple sources; details specified in pattern or renderer |

**Use when:** The feedback source is a deliberate design decision, not an afterthought.

**AI guidance:** `peer-plus-instructor` is the most effective for studio and project-based work. Use `instructor` when critique requires expert judgment. Use `automated` only for skill-check exercises where correct/incorrect feedback is meaningful. Never use `none` for assessed work.

---

## `feedback.timing`

**When feedback is provided in relation to the learner's work cycle.**

| Value | Meaning |
|-------|---------|
| `before-submission` | Feedback during drafting, before a final submission |
| `during-process` | Ongoing feedback as the learner works |
| `after-submission` | Feedback returned after the final submission |
| `iterative` | Multiple feedback rounds across the learning activity |
| `on-demand` | Feedback available when learners request it |

**Use when:** The timing of feedback is meaningful to the instructional design — e.g., if revision is expected, feedback must come before the revision deadline.

**Related tokens:** `revision.required`, `revision.mode`

**Validation:** If `revision.required` is `true`, `feedback.timing` should not be `after-submission` (feedback after submission makes revision impossible in the same cycle).

**AI guidance:** Match feedback timing to the revision expectation. If `revision.mode` is `required-once` or `iterative-cycle`, set `feedback.timing` to `before-submission`, `during-process`, or `iterative`.
