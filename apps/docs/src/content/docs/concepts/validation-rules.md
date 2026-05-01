---
title: Validation Rules
description: Checks that help humans and AI agents verify that a learning experience is internally consistent and pedagogically sound.
---

Validation rules are what make OIS useful beyond documentation.

A validation rule checks whether a learning experience is **internally consistent** — whether the tokens, patterns, and themes applied to it make pedagogical sense together.

## Why Validation?

It is easy to apply tokens carelessly. A course could mark `revision.required: true` while also setting `feedback.timing: after-submission` — which means feedback arrives too late to enable revision. That contradiction is invisible without a rule to catch it.

Validation rules make OIS a **living check**, not just a vocabulary.

## Rule Structure

```yaml
id: revision-requires-timely-feedback
name: Revision Requires Pre-Submission Feedback
severity: error
condition:
  token: revision.required
  values: ["true"]
expected:
  token: feedback.timing
  notValues: [after-submission]
message: revision.required is true but feedback arrives only after submission. Revision requires timely feedback.
rationale: If feedback arrives only after the final submission window closes, learners cannot revise in the same cycle.
```

## Severity Levels

| Level | Meaning |
|-------|---------|
| `error` | A fundamental alignment problem that should be resolved before use |
| `warning` | A potential issue worth reviewing |
| `info` | A suggestion for improvement |

## Starter Rule Groups

### Objective/Assessment Alignment
Every activity should collect observable evidence of learning. If no `assessment.evidence` is set, learner progress cannot be evaluated.

### AI-Use Transparency
If `aiUse.policy` is anything other than `prohibited`, then `aiUse.disclosureRequired` must be `true`. Any non-prohibited AI use must require disclosure for academic integrity.

### AI-Use Reflection
If `aiUse.policy` is `collaborative-disclosed`, then `reflection.required` must be `true` and `reflection.focus` must include `ethical-use`. Collaborative AI use requires the deepest critical engagement.

### Revision Logic
If `revision.required: true`, then `feedback.timing` must not be `after-submission`. Revision requires feedback that arrives in time to act on.

### Feedback Logic
If `collaboration.structure: peer-review` or `studio-critique`, then `feedback.mode` should be specified and `feedback.timing` should not be `on-demand` only.

### Accessibility Logic
If `bandwidth.assumption: low` or `offline-capable`, then `accessibility.mediaAlternatives` should include `downloadable-assets`.

If `accessibility.mode: screen-reader-first`, then `accessibility.mediaAlternatives` must include `alt-text`.

### Agency/Scaffolding Balance
If `agency.mode: open-choice` is used with novice learners, `scaffolding.level` should be at least `medium`. Open-ended tasks without sufficient scaffolding are likely to produce confusion rather than creative autonomy.

## Validation in Practice

Validation can be applied at three levels:

1. **Documentation** — the rules are published here so human designers can check their own work
2. **Machine-readable** — rules are in `ois-index.json` so tools can run checks programmatically
3. **Executable** — platforms integrating OIS can run validation checks in editors or CI pipelines

See the [Validation reference](/validation/) for the full rule set, and the [AI Implementation Recipes](/ai/implementation-recipes/) for how AI agents should apply validation.
