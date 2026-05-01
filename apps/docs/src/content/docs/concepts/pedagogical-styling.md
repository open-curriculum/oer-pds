---
title: Pedagogical Styling
description: How OIS applies design-system thinking to instructional design — applying themes and patterns to content without rewriting it.
sidebar:
  order: 2
---

The central metaphor of OIS is **pedagogical styling**.

In a visual design system, you can apply a theme to a component without rewriting its logic. You change the color tokens, the spacing values, the type scale — and the same button, card, or form looks and behaves differently across brands or contexts.

OIS applies the same principle to instructional design.

## The Same Content, Four Pedagogical Styles

Consider a lesson on **Camera Framing in 3D Animation**. The content object is the same: it covers composition vocabulary, explains how framing shapes viewer attention, and includes examples.

But it can be *pedagogically styled* four different ways:

### Style 1: Direct Instruction

```yaml
theme: direct-instruction
pattern: demo-guided-practice-independent-production
tokens:
  scaffolding.level: high
  agency.mode: fixed-path
  feedback.mode: instructor
  assessment.evidence: quiz
  revision.required: false
```

Output: A concise explanation with terminology, worked examples, a short comprehension check, and an individual practice exercise with instructor feedback.

### Style 2: Constructivist Studio

```yaml
theme: constructivist-studio
pattern: observe-analyze-create-critique-revise
tokens:
  scaffolding.level: medium
  agency.mode: bounded-choice
  feedback.mode: peer-plus-instructor
  assessment.evidence: artifact-plus-reflection
  revision.required: true
```

Output: Students observe professional shots, analyze framing choices using shared vocabulary, produce a rendered composition, critique peers' work, revise their shot, and reflect on their decisions.

### Style 3: Critical Media Analysis

```yaml
theme: critical-media-analysis
pattern: case-stakeholder-analysis-response-design
tokens:
  scaffolding.level: low
  agency.mode: open-choice
  feedback.mode: peer
  assessment.evidence: portfolio
  reflection.required: true
  reflection.focus: ethical-use
```

Output: Students analyze how camera framing constructs meaning, viewer attention, and representation. They write a short analysis and produce a creative response that uses framing as a deliberate rhetorical choice.

### Style 4: Mastery Pathway

```yaml
theme: mastery-learning
pattern: mastery-checkpoint-pathway
tokens:
  scaffolding.level: high
  agency.mode: fixed-path
  feedback.mode: automated
  assessment.evidence: quiz
  revision.mode: required-until-proficient
```

Output: Micro-skills are broken down into checkpoints. Each checkpoint has a formative assessment. Learners must demonstrate proficiency before moving to the next skill. Revision is built into the structure.

## What Changes, What Stays the Same

| | Same | Different |
|---|---|---|
| **Content** | ✓ Learning objectives, examples, vocabulary | — |
| **Pedagogy** | — | Sequence, feedback, agency, evidence |
| **Output** | — | Project brief vs. quiz vs. analysis prompt |

The content does not need to be rewritten. The instructional logic is applied on top of it through tokens and patterns.

## Why This Matters for OER

Open Educational Resources are often reused at the *content* level but redesigned from scratch at the *instructional* level. Every instructor who takes a lesson and adapts it for their course has to make dozens of implicit instructional decisions — most of which are never documented.

Pedagogical styling makes those decisions:

- **Explicit** — named, documented, versioned
- **Portable** — shareable with the content
- **Composable** — themes, patterns, and tokens can be mixed and matched
- **Machine-readable** — AI tools and platforms can read, apply, and validate them
- **Researchable** — instructional intent can be compared, studied, and improved over time

## The Authoring Experience

OIS is designed so that most instructors never need to set individual tokens. Instead:

1. A **course or pathway** sets a default theme (e.g., `constructivist-studio`)
2. A **lesson, project, or exercise** selects a pattern (e.g., `observe-analyze-create-critique-revise`)
3. **Local token overrides** are added only when the lesson needs to differ from the theme default

```
Course / Pathway theme
        ↓
Lesson / Project pattern
        ↓
Local token overrides (only when needed)
        ↓
Renderer output
```

This keeps the authoring simple while preserving full flexibility for those who need it.
