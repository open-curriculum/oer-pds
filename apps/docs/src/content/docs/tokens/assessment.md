---
title: Assessment Tokens
description: Tokens that describe what counts as evidence of learning and the mode of assessment.
---

Assessment tokens describe what learners produce as evidence of learning and how that evidence is evaluated.

## `assessment.evidence`

**The type of output that demonstrates learning.**

| Value | Meaning |
|-------|---------|
| `quiz` | A scored test of knowledge or comprehension |
| `artifact` | A produced object: a design, animation, essay, code project, etc. |
| `performance` | A live demonstration, presentation, or performance |
| `portfolio` | A curated collection of work over time |
| `reflection` | A written or recorded reflection on process and learning |
| `critique-notes` | Written critique of own or peers' work |
| `process-documentation` | Documentation of the making process (logs, drafts, screenshots) |
| `presentation` | A structured presentation to an audience |
| `artifact-plus-reflection` | Both an artifact and a written reflection |

**Multiple values are allowed** — a project may require an `artifact` plus `critique-notes` plus `reflection`.

**Use when:** Designing any assessed activity. If there is no evidence type specified, the assessment expectations are ambiguous.

**OERSchema mapping:** `assesses`, `teaches`, `educationalAlignment`

**AI guidance:** Match evidence type to the learning objective. If the objective uses action verbs like "create," "design," or "produce," use `artifact`. If "analyze" or "evaluate," consider `critique-notes` or `reflection`. If "demonstrate proficiency," use `performance` or `artifact`. Avoid `quiz` for objectives that require application or synthesis.

---

## `assessment.mode`

**The purpose and structure of the assessment.**

| Value | Meaning |
|-------|---------|
| `formative` | Assessment during learning, to inform improvement |
| `summative` | Assessment at the end of a unit, to evaluate achievement |
| `diagnostic` | Assessment before learning, to identify starting point |
| `ipsative` | Assessment of learner improvement relative to their own prior work |
| `mastery` | Assessment of whether a specific level of proficiency has been met |
| `critique-based` | Assessment through structured critique of artifacts |

**Use when:** The assessment structure matters — e.g., mastery-learning pathways require `mastery` mode; studio courses often use `critique-based`.

**Related tokens:** `assessment.evidence`, `revision.mode`

**AI guidance:** Use `formative` for mid-process check-ins and `summative` for final evaluations. Use `mastery` when learners must reach a threshold before progressing. Use `critique-based` when the assessment happens in a peer or instructor critique session, not through a rubric score alone.
