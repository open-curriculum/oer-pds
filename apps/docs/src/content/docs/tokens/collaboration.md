---
title: Collaboration Tokens
description: Tokens that describe how learners work together and how roles are structured.
---

## `collaboration.structure`

**The social arrangement of the learning activity.**

| Value | Meaning |
|-------|---------|
| `individual` | Each learner works alone |
| `pair` | Two learners work together |
| `small-group` | Groups of 3–6 learners |
| `peer-review` | Individual work, with structured peer feedback |
| `studio-critique` | Work is shared publicly in a critique format |
| `community-partner` | Work is done with or for a community organization |

---

## `collaboration.roleClarity`

**Whether and how roles within collaborative groups are defined.**

| Value | Meaning |
|-------|---------|
| `none` | No role structure |
| `informal` | Roles emerge organically |
| `assigned-roles` | The instructor assigns specific roles |
| `rotating-roles` | Roles change across sessions or activities |

**AI guidance:** When generating group project instructions, specify `collaboration.roleClarity`. Unstructured groups often default to unequal workload distribution. Use `assigned-roles` or `rotating-roles` for novice learners or complex group projects.
