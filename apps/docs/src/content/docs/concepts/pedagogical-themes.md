---
title: Pedagogical Themes
description: Named bundles of token defaults that represent a coherent instructional style — the closest equivalent to visual design-system themes.
---

Pedagogical themes are the highest-level concept in OIS.

A theme is a **named bundle of token defaults** representing a complete, coherent instructional style. Themes are to instructional design what visual themes are to design systems: they encode a set of related defaults so you don't have to set every value from scratch.

## The Design System Analogy

In a visual design system:
- A **design token** sets one value: `color.primary = #0066CC`
- A **theme** bundles many tokens: `brand-theme = {color.primary: #0066CC, color.surface: #F5F5F5, ...}`

In OIS:
- A **pedagogical token** sets one instructional decision: `feedback.mode = peer-plus-instructor`
- A **theme** bundles many tokens: `constructivist-studio = {scaffolding.level: medium, agency.mode: bounded-choice, feedback.mode: peer-plus-instructor, ...}`

## What a Theme Does

When you apply a theme to a learning experience:

1. It sets default values for all relevant tokens
2. It signals which instructional patterns are preferred
3. It tells AI agents how to generate materials consistent with the style
4. It creates a named, citable pedagogical stance

You don't have to agree with every token default a theme sets. Themes are starting points, not mandates. Any token can be overridden for a specific activity.

## Theme Structure

```yaml
id: constructivist-studio
name: Constructivist Studio
summary: A making-centered style emphasizing artifact production, critique, and revision.
tokens:
  scaffolding.level: medium
  agency.mode: bounded-choice
  feedback.mode: peer-plus-instructor
  assessment.evidence: artifact-plus-reflection
  revision.required: true
preferredPatterns:
  - observe-analyze-create-critique-revise
  - peer-review-studio-cycle
aiGuidance: When applying this theme, center the brief on making. Ensure critique and revision phases are explicit. Require creative-choice reflection.
```

## The 10 OIS Themes

| Theme | Style | Best for |
|-------|-------|---------|
| `direct-instruction` | Explicit teaching, demonstration, practice | Introductory and technical courses |
| `constructivist-studio` | Making, critique, revision | Design, media, creative fields |
| `mastery-learning` | Competency-based progression | Skills, certification, bootcamps |
| `inquiry-based` | Question-driven investigation | Research, science, social inquiry |
| `critical-media-analysis` | Representation, power, creative response | Media, communication, cultural studies |
| `project-based-production` | Extended authentic projects | Capstone, portfolio, advanced practice |
| `accessibility-first` | Universal Design for Learning as primary constraint | Any globally-distributed OER |
| `ai-literacy` | Critical AI use as the learning goal | AI tools integration, digital literacy |
| `low-bandwidth-global` | OER for under-resourced and offline contexts | Global OER distribution |
| `community-engaged` | Learning with real community partners | Service learning, participatory design |

See the [Themes reference](/themes/) for full documentation.

## Same Content, Different Themes

The power of themes becomes visible when you apply different ones to identical subject matter. The same lesson on camera framing in 3D animation becomes:

- **Direct instruction** → demonstration, practice exercise, comprehension quiz
- **Constructivist studio** → exemplar analysis, production brief, peer critique, revision
- **Critical media analysis** → spectatorship analysis, written critique, creative response
- **Mastery pathway** → skill breakdown, scaffolded exercises, checkpoint rubric, revision until proficient

Same content. Four completely different learning experiences. Each justified by its instructional style.

See the [Examples section](/examples/) for the full demonstration.
