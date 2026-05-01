---
title: Pedagogical Themes
description: Overview of all pedagogical themes — coherent instructional styles composed from tokens and patterns.
sidebar:
  order: 1
  label: Overview
---

Pedagogical themes are the OIS equivalent of a design-system theme. They bundle tokens and preferred patterns into a coherent instructional style that can be applied to any compatible content.

## How Themes Work

A theme sets **default token values** and recommends **preferred patterns**. When a theme is applied to a course or pathway:

1. All lessons, projects, and exercises inherit the theme's token defaults
2. Patterns are selected from the theme's preferred list
3. Individual lessons can override specific tokens when needed

This means most instructors only need to choose a theme — token-level detail is available but not required.

## Available Themes

| Theme | Instructional Style | Best For |
|-------|--------------------|-|
| [`direct-instruction`](/themes/direct-instruction/) | Structured lecture and practice | Technical skill intro, knowledge transfer |
| [`constructivist-studio`](/themes/constructivist-studio/) | Making, critique, revision, reflection | Studio arts, design, media production |
| [`mastery-learning`](/themes/mastery-learning/) | Competency checkpoints, revision until proficient | Technical skills, certification, self-paced |
| [`inquiry-based`](/themes/inquiry-based/) | Question-driven exploration | Research, science, social inquiry |
| [`critical-media-analysis`](/themes/critical-media-analysis/) | Meaning-making, representation, power | Media studies, communication, ethics |
| [`project-based-production`](/themes/project-based-production/) | Extended project with authentic deliverable | Capstone, portfolio, professional prep |
| [`accessibility-first`](/themes/accessibility-first/) | Universal design for learning | Any course prioritizing inclusion |
| [`ai-literacy`](/themes/ai-literacy/) | Critical AI use, experimentation, disclosure | AI tools integration, digital literacy |
| [`low-bandwidth-global`](/themes/low-bandwidth-global/) | Offline-capable, low-tech, high-equity | Global OER, under-resourced contexts |
| [`community-engaged`](/themes/community-engaged/) | Community partner, real-world context | Service learning, participatory design |

## Machine-Readable

All theme definitions are in `ois-index.json`:

```
GET /ois-index.json → { themes: [...] }
```

JSON Schema: [`/schemas/ois-theme.schema.json`](/schemas/ois-theme.schema.json)
