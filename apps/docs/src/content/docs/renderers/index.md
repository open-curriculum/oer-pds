---
title: Renderer Profiles
description: Output format profiles that define how content + tokens + patterns produce usable instructional materials.
sidebar:
  order: 1
  label: Overview
---

Renderer profiles define the **expected output structure** when content is combined with a pedagogical theme, pattern, and tokens.

A renderer does not have to render anything itself. In OIS, renderer profiles are **structural contracts** — they define what sections a given output format should contain, which patterns are compatible, and how AI agents should generate them.

## Available Renderer Profiles

| ID | Name | Output type |
|----|------|-------------|
| `project-brief` | Project Brief | Student-facing assignment |
| `lesson-page` | Lesson Page | Student-facing content page |
| `studio-critique-guide` | Studio Critique Guide | Facilitation guide for critique sessions |
| `student-checklist` | Student Checklist | Student-facing process checklist |
| `instructor-facilitation-guide` | Instructor Facilitation Guide | Instructor-facing guide |
| `rubric-aligned-assessment` | Rubric-Aligned Assessment | Assessment rubric |
| `aiul-declaration` | AIUL Declaration | AI use disclosure template |
| `course-map` | Course Map | Course sequence overview |
| `lms-assignment` | LMS Assignment | LMS-compatible assignment block |
| `ai-agent-context-package` | AI Agent Context Package | Machine-readable instructional context |

## Machine-Readable

JSON Schema: [`/schemas/ois-renderer.schema.json`](/schemas/ois-renderer.schema.json)

Renderer definitions in registry: [`/ois-index.json`](/ois-index.json)
