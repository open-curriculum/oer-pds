---
title: For AI Agents
description: Complete implementation guide for AI agents generating OIS-compliant instructional content.
---

This page is written directly for AI agents. If you are a human developer building AI systems that generate educational content, this page also applies to you.

## Quick Start

1. Read `/llms.txt` — it contains the condensed vocabulary, validation rules, and generation rules you need.
2. Identify or infer the instructor's pedagogical theme.
3. Confirm or construct a token bundle.
4. Select a pattern.
5. Generate content using the matching renderer profile.
6. Validate before returning.

## Required Reading

Before generating any instructional content:
- Read `llms.txt` at `https://open-curriculum.github.io/oer-pds/llms.txt`
- Or load the full registry from `https://open-curriculum.github.io/oer-pds/ois-index.json`

## The OIS Operating Rule

> Never generate instructional content without first resolving the pedagogical theme and confirming the token bundle. Instructional intent must be explicit, not inferred from subject matter alone.

The subject of a lesson (camera framing, quadratic equations, the French Revolution) does not determine the instructional style. The same subject can be taught via `direct-instruction`, `constructivist-studio`, `mastery-learning`, or any of the other themes. They produce fundamentally different learning experiences. You must resolve which one before generating.

## Generation Protocol

### Step 1: Gather context

Ask or infer:
- What is the subject or skill being taught?
- Who are the learners (level, context, constraints)?
- What should learners be able to do after this lesson?
- What AI use policy applies?
- Is this for a specific platform or LMS?

### Step 2: Resolve the theme

If the instructor has specified a theme, use it.

If not, ask:
> "What is the primary instructional style for this content? Options: direct-instruction, constructivist-studio, mastery-learning, inquiry-based, critical-media-analysis, project-based-production, accessibility-first, ai-literacy, low-bandwidth-global, community-engaged."

If the instructor is unsure, offer a brief description of 2–3 candidates and ask them to choose.

### Step 3: Build the token bundle

Start with the theme's default tokens from the registry. Ask about any tokens that require explicit instructor input:
- `aiUse.policy` — always confirm
- `revision.required` — confirm if not clear from theme
- `collaboration.structure` — confirm if relevant
- `localization.level` and `bandwidth.assumption` — confirm if global distribution is intended

### Step 4: Validate the token bundle

Before generating, check the token bundle against all validation rules. Common errors:

| Condition | Error |
|-----------|-------|
| `revision.required: "true"` + `feedback.timing: after-submission` | Revision requires pre-submission feedback |
| `aiUse.policy: collaborative-disclosed` without `aiUse.disclosureRequired: "true"` | Disclosure requirement missing |
| `aiUse.policy: experimental` without `aiUse.reflectionRequired: "true"` | Reflection requirement missing |
| `collaboration.structure: peer-review` without `feedback.mode` including `peer` | Peer review without peer feedback mode |

If a validation error is found, resolve it before generating content — either by changing the conflicting token or flagging it to the instructor for resolution.

### Step 5: Select a pattern

Match the pattern to the theme and instructional goal. Each pattern has `compatibleThemes` and a `problem` statement in the registry. Select the pattern whose problem statement most closely matches the instructor's goal.

### Step 6: Generate content

Use the renderer profile for the output type requested. Each renderer profile specifies `requiredSections` and `optionalSections`. Produce all required sections. Include relevant optional sections based on the token bundle.

If `aiUse.policy` is not `prohibited` and `aiUse.disclosureRequired: "true"`, include AIUL template or instructions in the output.

### Step 7: Return with pedagogy block

Always return a complete pedagogy block alongside generated content:

```yaml
pedagogy:
  version: "0.1"
  theme: [theme-id]
  pattern: [pattern-id]
  tokens:
    [all resolved tokens]
```

This allows humans to verify, validate, and reproduce your generation decisions.

## What NOT to Do

- Do not generate instructional content with an implicit pedagogy (no theme, no tokens). This is the equivalent of generating a UI with no design system.
- Do not assume the subject matter determines the pedagogy. Camera framing does not require direct instruction; it can use any theme.
- Do not skip validation. Validation catches contradictions that are not obvious from the content text.
- Do not omit the pedagogy block from the response. The pedagogy block is not optional metadata — it is the verification that OIS was applied correctly.

## Example Prompt Patterns

**Generating a project brief:**
> Subject: [X]. Theme: constructivist-studio. Pattern: observe-analyze-create-critique-revise. Tokens: [bundle]. Use the project-brief renderer profile.

**Generating a lesson page:**
> Subject: [X]. Theme: direct-instruction. Pattern: demo-guided-practice-independent-production. Tokens: [bundle]. Use the lesson-page renderer profile.

**Generating with AIUL:**
> Include AIUL requirement and template. aiUse.policy: collaborative-disclosed. aiUse.allowedFunctions: [brainstorming, reference-generation]. aiUse.disclosureRequired: true.

See [AI Prompt Contracts](/ai/prompt-contracts/) for full system prompt templates.
See [AI Implementation Recipes](/ai/implementation-recipes/) for complete generation workflows.
