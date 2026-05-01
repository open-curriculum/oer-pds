---
title: Same Content, Four Styles
description: One subject — camera framing in 3D animation — taught four completely different ways using OIS pedagogical themes.
---

This example demonstrates the core value of OIS: **the same content can be taught in fundamentally different ways**, and those differences are invisible without an explicit vocabulary for instructional intent.

We use a single subject — camera framing principles in 3D animation — and apply four different OIS pedagogical themes to it. The subject matter, learning objectives, and technical concepts are identical in all four versions. The instructional approach is completely different.

## The Four Styles

| Theme | Instructional style | Best for |
|-------|-------------------|---------|
| [Direct Instruction](/examples/camera-framing-demo#direct-instruction) | Explicit teaching, demonstration, practice | First exposure, novice learners |
| [Constructivist Studio](/examples/camera-framing-demo#constructivist-studio) | Making, critique, revision | Creative production, intermediate learners |
| [Critical Media Analysis](/examples/camera-framing-demo#critical-media-analysis) | Analysis of representation and meaning | Critical media studies, cultural analysis |
| [Mastery Pathway](/examples/camera-framing-demo#mastery-pathway) | Competency-based skill progression | Technical certification, bootcamp-style |

See the [full four-style demonstration →](/examples/camera-framing-demo)

## What Changes Across Styles

### The assignment brief

**Direct Instruction:** "Watch the demonstration, complete the guided exercise, and submit the independent exercise."

**Constructivist Studio:** "Study three exemplar films for camera language. Produce a 30-second scene. Bring it to critique. Revise based on feedback."

**Critical Media Analysis:** "Analyze how camera framing in three selected films constructs power and spectatorship. Write a critical analysis. Produce a creative response that deliberately subverts the conventions you identified."

**Mastery Pathway:** "Complete Checkpoint 1: Identify all six shot types in a provided reel. Pass at 90% before advancing. Complete Checkpoint 2: Apply each shot type correctly in a produced exercise."

### The assessment evidence

| Theme | Assessment |
|-------|-----------|
| Direct Instruction | Quiz + exercise artifact |
| Constructivist Studio | Artifact + critique notes + revision + reflection |
| Critical Media Analysis | Written analysis + creative response with design statement |
| Mastery Pathway | Pass/not-yet at each checkpoint |

### The token bundles

```yaml
# Direct Instruction
pedagogy:
  theme: direct-instruction
  tokens:
    scaffolding.level: high
    agency.mode: fixed-path
    assessment.evidence: quiz
    aiUse.policy: prohibited

# Constructivist Studio
pedagogy:
  theme: constructivist-studio
  tokens:
    scaffolding.level: medium
    agency.mode: bounded-choice
    assessment.evidence: artifact-plus-reflection
    revision.required: "true"
    aiUse.policy: assisted-disclosed

# Critical Media Analysis
pedagogy:
  theme: critical-media-analysis
  tokens:
    scaffolding.level: medium
    agency.mode: bounded-choice
    assessment.evidence: artifact-plus-reflection
    reflection.focus: ethical-use

# Mastery Pathway
pedagogy:
  theme: mastery-learning
  tokens:
    scaffolding.level: high
    agency.mode: fixed-path
    assessment.evidence: quiz
    revision.mode: until-mastery
```

## Why This Matters for AI Agents

Without OIS, an AI agent generating a "camera framing lesson" would make arbitrary choices about scaffolding, agency, assessment, and AI use — choices invisible in the output.

With OIS, the AI agent receives a theme and token bundle, and its generation is constrained by the instructional intent. The same AI can generate four fundamentally different lessons — and label each one so humans can verify it.

This is what machine-readable instructional intent makes possible.
