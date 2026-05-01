---
title: Renderer Profiles
description: Structural contracts that define what sections a given instructional output format should contain.
---

Renderer profiles define **what a given instructional output format should contain**.

In version 0.1, renderer profiles do not render anything themselves. They are structural contracts — definitions of expected sections, compatible patterns, and guidance for AI agents generating content in that format.

## The Problem They Solve

Once you have a pedagogical theme, a pattern, and a set of tokens, you still need to produce something: a project brief, an instructor guide, a checklist, an LMS assignment, a critique worksheet.

Different output formats require different sections. A project brief needs deliverables and assessment criteria. An instructor facilitation guide needs facilitation notes and timing. An LMS assignment needs submission instructions.

Renderer profiles codify these structural expectations so platforms and AI agents can produce consistent, complete outputs.

## Renderer Profile Structure

```yaml
id: project-brief
name: Project Brief
summary: A student-facing assignment format for project-based learning.
outputType: student-facing-assignment
requiredSections:
  - overview
  - learning-objectives
  - materials
  - process
  - deliverables
  - assessment-criteria
  - revision-expectations
  - reflection
optionalSections:
  - ai-use
  - peer-critique
  - accessibility-options
  - examples
compatiblePatterns:
  - observe-analyze-create-critique-revise
  - constraint-based-project-sprint
aiGuidance: Generate clear student-facing language. State revision expectations explicitly. Include assessment criteria in learner-readable form.
```

## Available Renderer Profiles

| Profile | Output type |
|---------|-------------|
| `project-brief` | Student-facing assignment |
| `lesson-page` | Student-facing content page |
| `studio-critique-guide` | Facilitation guide for critique |
| `student-checklist` | Student-facing process checklist |
| `instructor-facilitation-guide` | Instructor-facing facilitation notes |
| `rubric-aligned-assessment` | Assessment rubric |
| `aiul-declaration` | AI use disclosure template |
| `course-map` | Course sequence overview |
| `lms-assignment` | LMS-compatible assignment block |
| `ai-agent-context-package` | Machine-readable instructional context |

See the [Renderers reference](/renderers/) for full documentation.

## Output Types

OIS defines these output types:

| Type | Description |
|------|-------------|
| `student-facing-assignment` | A document students receive and act on |
| `student-facing-content` | A document students read or watch |
| `facilitation-guide` | A document instructors use during teaching |
| `student-checklist` | A document students use to self-monitor |
| `instructor-guide` | A document instructors use to plan |
| `assessment-rubric` | A document used to evaluate work |
| `ai-disclosure` | A document disclosing AI use |
| `course-map` | A document showing course structure |
| `lms-assignment` | An assignment block for an LMS |
| `ai-context-package` | A machine-readable package for AI agents |

## Renderer Profiles and Themes

Each theme recommends renderer profiles. The `constructivist-studio` theme recommends `project-brief`, `studio-critique-guide`, and `instructor-facilitation-guide`. The `mastery-learning` theme recommends `student-checklist`, `rubric-aligned-assessment`, and `lms-assignment`.

This pairing is a recommendation, not a restriction. Any renderer profile can be used with any theme.
