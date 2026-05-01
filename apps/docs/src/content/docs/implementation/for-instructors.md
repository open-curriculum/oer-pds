---
title: For Instructors and Instructional Designers
description: How to use OIS vocabulary to document, communicate, and improve your instructional design choices.
---

OIS gives instructional designers a shared vocabulary to make the *how* of teaching explicit. This guide explains how to apply it in practice.

## Start with a Theme

Pick the pedagogical theme that best describes your overall course or module intent. You don't have to commit to a theme for every activity — themes are defaults, not constraints.

The 10 themes cover most common instructional orientations:

| If you teach like this... | Use this theme |
|--------------------------|---------------|
| Clear objectives, demonstration, practice | `direct-instruction` |
| Making things, critiquing, revising | `constructivist-studio` |
| Competency checkpoints, re-attempts until mastery | `mastery-learning` |
| Driving questions, student-led investigation | `inquiry-based` |
| Analysis of how media constructs meaning | `critical-media-analysis` |
| Extended real-world projects | `project-based-production` |
| UDL as the primary design constraint | `accessibility-first` |
| AI tools as the subject of study | `ai-literacy` |
| Global/offline OER delivery | `low-bandwidth-global` |
| Real community partners and deliverables | `community-engaged` |

See [Pedagogical Themes](/concepts/pedagogical-themes/) for full definitions.

## Add Tokens to Refine Intent

Themes set defaults. Tokens let you override or clarify specific decisions for a particular activity.

The most important tokens to set explicitly:

```yaml
pedagogy:
  theme: constructivist-studio
  tokens:
    aiUse.policy: collaborative-disclosed      # Required: what AI use is allowed?
    aiUse.disclosureRequired: "true"           # Required when not prohibited
    revision.required: "true"                  # Is revision built in or optional?
    feedback.timing: before-submission         # When does feedback arrive?
    assessment.evidence: artifact-plus-reflection  # What evidence is collected?
```

## Document Your Activity Sequences with Patterns

If your activity follows a recognizable structure, find the matching pattern in the [Patterns reference](/patterns/). Patterns give you:

- A validated activity sequence
- A set of recommended tokens
- Compatible themes
- AI agent guidance

You don't have to follow patterns exactly. They are starting points, not scripts.

## Run a Validation Check

Once you have a token bundle, check it against the [Validation rules](/concepts/validation-rules/).

The most common errors:
- `revision.required: "true"` + `feedback.timing: after-submission` → feedback arrives too late to enable revision
- `aiUse.policy: collaborative-disclosed` without `aiUse.disclosureRequired: "true"` → disclosure requirement missing
- `aiUse.policy: experimental` without `aiUse.reflectionRequired: "true"` → required reflection missing

## Embedding OIS in Your Content

Add a `pedagogy` block to your content frontmatter or metadata. Any format that accepts key-value metadata works:

```yaml
---
title: My Lesson
pedagogy:
  theme: direct-instruction
  tokens:
    scaffolding.level: high
    agency.mode: fixed-path
    aiUse.policy: prohibited
---
```

## Using OIS With AI Tools

When you use AI tools to generate assignment briefs or instructional content, provide your token bundle as context. The [AI Implementation Recipes](/ai/implementation-recipes/) and [Prompt Contracts](/ai/prompt-contracts/) show exactly how to do this.

Example prompt structure:
> "Generate a project brief for [subject]. Pedagogical theme: constructivist-studio. Tokens: [paste bundle]. Pattern: observe-analyze-create-critique-revise. Use the project-brief renderer profile."

## Sharing Your Work

When you share OIS-annotated content, the pedagogy block travels with it. Other educators, platforms, and AI agents can read your intent. This is what makes OER genuinely portable — not just the content, but the teaching logic.
