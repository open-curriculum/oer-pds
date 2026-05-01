---
title: "Prompt → AI Experiment → Evaluate → Disclose"
description: An AI literacy pattern for exploring AI capabilities, evaluating outputs critically, and documenting use with reflection.
---

**Pattern ID:** `prompt-ai-experiment-evaluate-disclose`

**Best for:** AI literacy courses, media/design experimentation, AIUL-aligned assignments, any course where intentional AI use is a learning goal.

## Problem

Learners need to develop the ability to use AI tools intentionally and critically — not just to generate output, but to evaluate it, make decisions about what to keep or reject, and reflect honestly on how AI shaped their work.

## Sequence

### 1. Prompt
Design and submit prompts to an AI tool.

- **Learner:** Writes multiple versions of a prompt, submits to AI tool
- **Instructor:** Provides prompt design guidance, specifies which tools are permitted
- **Evidence produced:** Prompt log

### 2. AI Experiment
Explore AI outputs through iteration and variation.

- **Learner:** Tries variations, compares outputs, documents what changes
- **Instructor:** Checks in on process, encourages critical observation
- **Evidence produced:** Generated outputs, variation log

### 3. Evaluate
Assess the quality, appropriateness, and implications of AI outputs.

- **Learner:** Applies evaluation criteria to AI outputs, decides what to use, modify, or reject
- **Instructor:** Facilitates evaluation discussion, models critical analysis
- **Evidence produced:** Evaluation notes, annotated outputs

### 4. Create / Apply
Produce a final artifact using, adapting, or responding to AI outputs.

- **Learner:** Integrates selected AI outputs, makes additional human contributions
- **Instructor:** Reviews for creative decision-making and critical judgment
- **Evidence produced:** Final artifact

### 5. Disclose and Reflect
Document AI use and write a reflection on its role in the process.

- **Learner:** Writes disclosure statement, answers reflection prompts
- **Instructor:** Grades disclosure and reflection
- **Evidence produced:** AI disclosure statement, reflection

## Assessment Evidence

- Prompt log
- Generated outputs
- Evaluation notes
- Final artifact
- AI disclosure statement
- Reflection

## Recommended Tokens

```yaml
scaffolding.level: medium
agency.mode: bounded-choice
feedback.mode: instructor
assessment.evidence: artifact-plus-reflection
revision.required: false
reflection.required: true
reflection.focus: ethical-use
aiUse.policy: collaborative-disclosed
aiUse.disclosureRequired: true
aiUse.reflectionRequired: true
```

## Compatible Themes

- `ai-literacy`
- `constructivist-studio`
- `critical-media-analysis`

## Example Implementation

**Course:** Digital Media Production — AI Image Generation Ethics

Students write and iterate prompts in an image-generation tool, document their outputs, evaluate the images against aesthetic and ethical criteria (representation, originality, bias), select and modify outputs for a final poster, write an AI disclosure statement, and reflect on what the AI contributed and what they decided to change or add.

## AI Guidance

Use this pattern when the course explicitly teaches AI literacy or when AI use is a major component of the activity. The disclosure and reflection phases are mandatory — they are the core learning outputs, not optional add-ons.

When generating assignment instructions for this pattern:
- Specify exactly which AI tools are permitted
- Provide a structured prompt log template
- Include evaluation criteria that address AI-specific considerations (bias, hallucination, originality, attribution)
- Provide a disclosure statement template with sentence starters
- Include reflection prompts that go beyond "what did the AI do" to "how did AI use affect your creative or analytical judgment"
