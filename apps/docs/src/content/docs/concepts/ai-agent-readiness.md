---
title: AI Agent Readiness
description: How AI agents should discover, understand, and apply Open Instructional Systems to generate, adapt, and validate instructional materials.
sidebar:
  order: 4
---

AI agent readiness is a first-class design goal of OIS.

AI agents — including coding assistants, course builders, curriculum generators, and LMS automation tools — should be able to:

- Discover the OIS vocabulary
- Understand token definitions and valid values
- Select appropriate instructional patterns
- Apply pedagogical themes
- Follow implementation recipes
- Validate alignment between objectives, activities, and assessments
- Generate platform-specific outputs
- Preserve provenance, licensing, and attribution from source materials

## Machine-Readable Files

OIS publishes the following static files specifically for AI agent consumption:

| File | URL | Purpose |
|------|-----|---------|
| `llms.txt` | [`/llms.txt`](/llms.txt) | Concise discovery and operating rules |
| `llms-full.txt` | [`/llms-full.txt`](/llms-full.txt) | Complete specification |
| `ois-index.json` | [`/ois-index.json`](/ois-index.json) | Full normalized registry |
| `ois-context.jsonld` | [`/ois-context.jsonld`](/ois-context.jsonld) | JSON-LD context |
| Token schema | [`/schemas/ois-token.schema.json`](/schemas/ois-token.schema.json) | JSON Schema |
| Pattern schema | [`/schemas/ois-pattern.schema.json`](/schemas/ois-pattern.schema.json) | JSON Schema |
| Theme schema | [`/schemas/ois-theme.schema.json`](/schemas/ois-theme.schema.json) | JSON Schema |

## The AI Agent Operating Rule

> **AI agents should not generate instructional content from vague prompts alone. They should first identify learning goals, select or adapt an instructional pattern, apply a pedagogical theme, specify assessment evidence, validate alignment, and only then generate student-facing or instructor-facing materials.**

This rule exists to prevent AI from generating generic, superficially coherent but pedagogically misaligned course content.

## The AI Implementation Recipe

When an AI agent is asked to design, generate, or adapt a learning experience:

1. **Parse the instructional context** — identify learning goals, learner level, domain, and constraints
2. **Select a pedagogical theme** from the OIS theme library that fits the context
3. **Select an instructional pattern** appropriate for the activity type and learning goal
4. **Apply pedagogical tokens** — use theme defaults, override only when justified
5. **Generate or adapt the learning experience** using the pattern as a sequence guide
6. **Validate alignment** — check objectives vs. activities vs. assessment evidence
7. **Check requirements** — AI-use policy, accessibility, reflection requirements
8. **Produce the requested output format** using an appropriate renderer profile
9. **Include a transparency summary** of all pedagogical decisions made

## What AI Agents Should NOT Do

- Invent token names, values, or pattern IDs not in the OIS registry
- Apply themes without checking their required token values
- Skip validation when assembling multi-activity modules
- Generate AI-permitted activities without including disclosure and reflection requirements
- Override locally what should be set at the theme or course level
- Use OIS vocabulary in ways that contradict its defined semantics
- Generate assessment evidence types that conflict with the selected pattern

## The OIS Index for Agents

The `ois-index.json` file provides a single normalized JSON structure containing all tokens, patterns, themes, renderers, and validation rules. Agents should fetch and cache this file at the start of any instructional design task:

```json
{
  "version": "0.1.0",
  "tokens": [...],
  "patterns": [...],
  "themes": [...],
  "renderers": [...],
  "validationRules": [...]
}
```

Each object includes an `aiGuidance` field that tells the agent specifically how to use it.

## Example: AI Course Assembly Prompt Contract

```
System: You are an instructional design assistant. Before generating any 
course content, fetch the OIS registry at /ois-index.json and follow the 
OIS implementation recipe. Always show your pedagogical decisions as a 
structured summary before generating outputs.

When a user asks you to design a learning activity:
1. Identify the learning goal and learner level.
2. Select a theme from ois-index.json themes.
3. Select a pattern from ois-index.json patterns.
4. List the tokens that will apply.
5. Show the validation check results.
6. Generate the requested output.

Do not generate content that violates OIS validation rules without 
explicitly noting the violation and justifying the exception.
```

## Example: Applying OIS in a Coding Agent

```typescript
// Fetch OIS registry
const oisIndex = await fetch('/ois-index.json').then(r => r.json());

// Select theme and pattern for a studio art course
const theme = oisIndex.themes.find(t => t.id === 'constructivist-studio');
const pattern = oisIndex.patterns.find(p => p.id === 'observe-analyze-create-critique-revise');

// Get resolved tokens (theme defaults + local overrides)
const tokens = { ...theme.tokens, 'scaffolding.level': 'high' };

// Check validation rules
const violations = oisIndex.validationRules
  .filter(rule => {
    const conditionMet = tokens[rule.condition.token] !== undefined;
    const expectedMet = tokens[rule.expected.token] === rule.expected.values?.[0];
    return conditionMet && !expectedMet;
  });

// Generate content using resolved tokens + pattern sequence
```

## Further Reading

- [OIS Implementation Recipes](/ai/implementation-recipes/) — step-by-step guides for specific platforms and workflows
- [Prompt Contracts](/ai/prompt-contracts/) — ready-to-use system prompts for AI assistants
- [llms.txt Reference](/ai/llms-txt/) — about the `llms.txt` standard and OIS's implementation
