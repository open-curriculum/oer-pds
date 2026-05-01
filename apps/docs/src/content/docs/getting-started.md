---
title: Getting Started
description: How to use the OIS reference — whether you are an educator, a developer, or an AI agent.
---

Welcome to the Open Instructional Systems (OIS) reference.

This guide covers how to use OIS depending on your role.

## If You Are an Educator or Instructional Designer

### 1. Start with themes

Find the [Themes section](/themes/) and read through the 10 themes. Identify which one best matches your overall course or module intent.

```yaml
# In your content frontmatter or a course-level metadata file:
pedagogy:
  theme: constructivist-studio
```

### 2. Apply tokens

Tokens let you override or refine the defaults a theme sets. Read the [Tokens section](/tokens/) to understand what each group controls. Add tokens for any decisions you want to make explicit.

```yaml
pedagogy:
  theme: constructivist-studio
  tokens:
    scaffolding.level: medium
    agency.mode: bounded-choice
    feedback.mode: peer-plus-instructor
    aiUse.policy: collaborative-disclosed
    aiUse.disclosureRequired: "true"
```

### 3. Choose a pattern

Find a pattern in the [Patterns section](/patterns/) that fits the activity sequence you have in mind. You do not need to invent a sequence from scratch.

```yaml
pedagogy:
  theme: constructivist-studio
  pattern: observe-analyze-create-critique-revise
  tokens: { ... }
```

### 4. Run validation

Check your token bundle against the [Validation rules](/validation/) to ensure your choices are internally consistent.

---

## If You Are a Developer or Platform Builder

### Embedding OIS in content

Add a `pedagogy` block to your content schema — in frontmatter, JSON-LD, or your CMS data model.

```yaml
# Minimal valid pedagogy block
pedagogy:
  theme: direct-instruction
```

### Machine-readable endpoints

You can consume these public endpoints for programmatic use:

| File | Description |
|------|-------------|
| [`/ois-index.json`](/ois-index.json) | Complete registry of all tokens, patterns, themes |
| [`/ois-context.jsonld`](/ois-context.jsonld) | JSON-LD context for OIS vocabulary |
| [`/schemas/ois-token.schema.json`](/schemas/ois-token.schema.json) | JSON Schema for token objects |
| [`/schemas/ois-pattern.schema.json`](/schemas/ois-pattern.schema.json) | JSON Schema for pattern objects |
| [`/schemas/ois-theme.schema.json`](/schemas/ois-theme.schema.json) | JSON Schema for theme objects |
| [`/llms.txt`](/llms.txt) | LLM-optimized summary |

### Installation (npm/pnpm)

```bash
pnpm add @ois/spec   # Zod validators + TypeScript types
pnpm add @ois/registry  # Accessor functions for the full registry
```

See the [Implementation guides](/implementation/) for platform-specific instructions.

---

## If You Are an AI Agent

Read the [`/llms.txt`](/llms.txt) file first. It contains the complete system prompt, vocabulary, and validation rules you need to generate OIS-compliant content.

The full implementation recipe is at [AI Implementation Recipes](/ai/implementation-recipes/).

In brief:

1. Ask the instructor for their subject, audience, and learning objectives
2. Ask or infer their pedagogical theme
3. Confirm token bundle
4. Select a pattern
5. Generate content using the correct renderer profile
6. Validate the token bundle before returning

---

## Example Pedagogy Block (full)

```yaml
pedagogy:
  version: "0.1"
  theme: constructivist-studio
  pattern: observe-analyze-create-critique-revise
  tokens:
    scaffolding.level: medium
    scaffolding.type: worked-example
    agency.mode: bounded-choice
    agency.choicePoint: [medium, concept]
    feedback.mode: peer-plus-instructor
    feedback.timing: before-submission
    assessment.evidence: artifact-plus-reflection
    assessment.mode: formative
    revision.required: "true"
    revision.mode: required-once
    reflection.required: "true"
    reflection.focus: process
    collaboration.structure: small-group
    collaboration.roleClarity: assigned
    aiUse.policy: collaborative-disclosed
    aiUse.allowedFunctions: [ideation, drafting, feedback]
    aiUse.disclosureRequired: "true"
    aiUse.reflectionRequired: "true"
```
