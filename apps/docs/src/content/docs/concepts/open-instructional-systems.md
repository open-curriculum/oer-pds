---
title: What is the OER Design System?
description: Core definition of the OER Design System — a pedagogical design system that makes instructional intent portable, adaptable, automatable, and researchable.
sidebar:
  order: 1
---

The OER Design System is a **pedagogical design system for open education**.

Where a visual design system provides tokens (colors, spacing, type scale) and patterns (button, card, form) that can be applied consistently across interfaces, the OER Design System provides:

- **Pedagogical tokens** — atomic instructional choices such as scaffolding level, feedback mode, and assessment evidence
- **Instructional patterns** — reusable sequences of learning activity
- **Pedagogical themes** — coherent instructional styles composed from tokens and patterns
- **Renderer profiles** — output formats for student-facing and instructor-facing materials
- **Validation rules** — checks that ensure alignment between objectives, activities, and assessments

## The Core Insight

Content reuse is not the same as instructional reuse.

When an instructor takes an OER lesson and reuses it in their course, they can reuse the *content* — but not the *pedagogical logic*. They have to rebuild the instructional structure from scratch: what sequence does the learning follow? What kind of feedback is expected? What constitutes evidence of learning? Is revision expected? How much agency does the learner have?

The OER Design System makes that instructional logic **explicit, portable, and machine-readable**.

## What the OER Design System Is Not

The OER Design System is not:

- A new LMS or course-authoring platform
- A replacement for OERSchema
- A rigid instructional-design standard
- A universal theory of learning
- An AI course generator

It is a **shared vocabulary** and **reference profile** — a practical layer that can be implemented on any platform, in any course, for any content type.

## The Six-Layer Model

The OER Design System describes open educational resources at six levels:

### Layer 1: Content Objects
The existing learning resources: `Lesson`, `Lecture`, `Exercise`, `Project`, `Tutorial`, `Article`, `Rubric`, `Pathway`, `Specialization`.

These are what OERSchema already describes well.

### Layer 2: Pedagogical Tokens
Small, reusable instructional decisions. Instead of storing visual choices (color, spacing), they store instructional choices:

```yaml
scaffolding.level: medium
agency.mode: bounded-choice
feedback.mode: peer-plus-instructor
assessment.evidence: artifact-plus-reflection
revision.required: true
reflection.required: true
```

### Layer 3: Instructional Patterns
Reusable sequences of learning activity. For example:

- `observe → analyze → create → critique → revise`
- `demo → guided-practice → independent-production`
- `prompt → ai-experiment → evaluate → disclose`

### Layer 4: Pedagogical Themes
Bundles of tokens and preferred patterns that form coherent instructional styles:

```yaml
theme: constructivist-studio
  tokens:
    scaffolding.level: medium
    agency.mode: bounded-choice
    feedback.mode: peer-plus-instructor
    revision.required: true
  preferredPatterns:
    - observe-analyze-create-critique-revise
    - peer-review-studio-cycle
```

### Layer 5: Renderers
Profiles that define how content + tokens + patterns should produce usable outputs — a project brief, a rubric, a course map, an LMS assignment, a student checklist, or an AI-readable planning object.

### Layer 6: Validation and Automation
Rules that check whether learning objectives, activities, assessments, evidence, and policies are properly aligned — and automation affordances that let AI tools, instructors, and platforms use the system reliably.

## What Makes the OER Design System Novel

The novel contribution is a synthesis:

1. **Design-system logic applied to pedagogy** — tokens, patterns, themes, inheritance, overrides, validation, versioning
2. **Pedagogical "styling" of content** — a lesson can be pedagogically restyled without rewriting its core content
3. **Machine-readable instructional intent** — scaffolding, feedback, revision expectations, AI-use conditions, and accessibility assumptions become structured data
4. **AI-automation readiness** — AI tools use explicit instructional patterns and constraints rather than generating generic content from vague prompts
5. **Researchability** — because the instructional logic is explicit, the system can be evaluated and studied

## Strongest Positioning Statement

> **OER made educational content shareable. OERSchema made it machine-readable. OER Design System makes instructional design reusable.**
