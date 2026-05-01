---
title: Instructional Patterns
description: Reusable sequences of learner and instructor actions that define the shape of a learning experience.
---

Instructional patterns are reusable sequences of learning activity.

They borrow the concept of [design patterns](https://en.wikipedia.org/wiki/Design_pattern) — proven solutions to recurring design problems — and apply it to instructional design. Each pattern describes a recurring pedagogical challenge, a structured solution, and a sequence of learner and instructor actions that implement it.

## Why Patterns?

Instructional design research has identified many recurring, high-quality learning activity structures. But this knowledge is buried in textbooks, academic papers, and informal practitioner knowledge. Patterns make it explicit, portable, and actionable.

A pattern answers: **what should happen, in what order, and why?**

## Pattern Structure

```yaml
id: observe-analyze-create-critique-revise
name: Observe, Analyze, Create, Critique, Revise
summary: ...
problem: What teaching challenge does this solve?
context: [list of contexts where this works well]
sequence:
  - phase: 1
    label: Observe
    learnerAction: ...
    instructorAction: ...
    evidence: ...
  - phase: 2
    ...
recommendedTokens:
  scaffolding.level: medium
  agency.mode: bounded-choice
assessmentEvidence: [artifact, critique-notes, reflection]
compatibleThemes: [constructivist-studio, project-based-production]
aiGuidance: ...
```

## Patterns vs. Themes

| | Pattern | Theme |
|--|---------|-------|
| **What it is** | A sequence of activity phases | A bundle of token defaults |
| **What it answers** | What happens and in what order? | What is the overall instructional style? |
| **How many per lesson** | Usually one | Usually one |
| **Examples** | `observe-analyze-create-critique-revise` | `constructivist-studio` |

Themes and patterns work together. A theme sets the default tokens; a pattern sequences the activities.

## The 10 OIS Patterns

| ID | Name | Best for |
|----|------|---------|
| `observe-analyze-create-critique-revise` | Observe, Analyze, Create, Critique, Revise | Studio, design, media |
| `prompt-ai-experiment-evaluate-disclose` | Prompt, AI Experiment, Evaluate, Disclose | AI literacy |
| `demo-guided-practice-independent-production` | Demo, Guided Practice, Independent Production | Skills, technical courses |
| `case-stakeholder-analysis-response-design` | Case, Stakeholder Analysis, Response Design | Social science, policy, ethics |
| `reference-study-technical-exercise-creative-application` | Reference Study, Technical Exercise, Creative Application | Technical + creative fields |
| `constraint-based-project-sprint` | Constraint-Based Project Sprint | Advanced production, rapid iteration |
| `peer-review-studio-cycle` | Peer Review Studio Cycle | Writing, design, critique-based assessment |
| `mastery-checkpoint-pathway` | Mastery Checkpoint Pathway | Technical skills, certification, competency-based |
| `artifact-analysis-reflection` | Artifact Analysis Reflection | Humanities, media studies, retrospective learning |
| `community-contextualized-design-brief` | Community-Contextualized Design Brief | Service learning, community-engaged courses |

See the [Patterns reference](/patterns/) for full documentation.

## Reading a Pattern

Patterns are written in plain language — a sequence of phases, each with what the learner does and what the instructor does. They are designed to be readable by both educators and AI agents.

A good pattern description is specific enough to guide implementation, but general enough to apply across disciplines, technologies, and learner levels.
