---
title: Pedagogical Tokens
description: Overview of all pedagogical token groups in the OIS system.
sidebar:
  order: 1
  label: Overview
---

Pedagogical tokens are the smallest units of instructional decision in OIS.

They are analogous to design tokens in a visual design system — but instead of storing color, spacing, or type scale values, they store instructional choices: how much support a learner receives, what kind of feedback is expected, what constitutes evidence of learning, and under what conditions AI assistance is permitted.

## How Tokens Work

Tokens are applied in three layers:

1. **Theme defaults** — a pedagogical theme (e.g., `constructivist-studio`) sets a bundle of tokens as defaults
2. **Pattern requirements** — some patterns require or recommend specific token values
3. **Local overrides** — individual lessons, exercises, or projects can override specific tokens when needed

This means most content authors only need to choose a theme. Token overrides are available for edge cases.

## Token Naming Convention

Token IDs use dot notation: `group.property`

For example:
- `scaffolding.level` — the scaffolding group, level property
- `feedback.mode` — the feedback group, mode property
- `aiUse.policy` — the AI use group, policy property

## Token Groups

| Group | Tokens | What it governs |
|-------|--------|-----------------|
| [`scaffolding`](/tokens/scaffolding/) | 2 tokens | Degree and form of instructional support |
| [`agency`](/tokens/agency/) | 2 tokens | Learner autonomy and choice |
| [`feedback`](/tokens/feedback/) | 2 tokens | Feedback source and timing |
| [`assessment`](/tokens/assessment/) | 2 tokens | Evidence of learning and assessment mode |
| [`revision`](/tokens/revision/) | 2 tokens | Revision expectations and mode |
| [`reflection`](/tokens/reflection/) | 2 tokens | Reflection requirements and focus |
| [`collaboration`](/tokens/collaboration/) | 2 tokens | Collaboration structure and role clarity |
| [`accessibility`](/tokens/accessibility/) | 2 tokens | Accessibility design intent and alternatives |
| [`localization`](/tokens/localization/) | 2 tokens | Localization level and bandwidth assumption |
| [`aiUse`](/tokens/ai-use/) | 4 tokens | AI use policy, permitted functions, and disclosure |

## All Token IDs

```
scaffolding.level      scaffolding.type
agency.mode            agency.choicePoint
feedback.mode          feedback.timing
assessment.evidence    assessment.mode
revision.required      revision.mode
reflection.required    reflection.focus
collaboration.structure  collaboration.roleClarity
accessibility.mode     accessibility.mediaAlternatives
localization.level     bandwidth.assumption
aiUse.policy           aiUse.allowedFunctions
aiUse.disclosureRequired  aiUse.reflectionRequired
```

## Machine-Readable

All token definitions are available in `ois-index.json`:

```json
GET /ois-index.json → { tokens: [...] }
```

JSON Schema for a token object: [`/schemas/ois-token.schema.json`](/schemas/ois-token.schema.json)
