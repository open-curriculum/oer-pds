---
title: Glossary
description: Definitions for all key terms in the Open Instructional Systems vocabulary.
---

## A

**Agency** — The degree of choice and self-direction available to the learner. In OIS, governed by the `agency.*` token group.

**Assessment evidence** — The type of observable output collected to evaluate learning. Governed by `assessment.evidence`. Examples: `quiz`, `artifact`, `reflection`, `portfolio`, `artifact-plus-reflection`.

**Assessment mode** — Whether an activity is formative (practice, feedback-generating) or summative (graded, final). Governed by `assessment.mode`.

---

## B

**Bandwidth assumption** — The assumed internet access condition of the learner. Governed by `bandwidth.assumption`. Used to make accessibility and localization decisions.

---

## C

**Collaboration structure** — The type of peer interaction designed into an activity. Governed by `collaboration.structure`. Examples: `none`, `peer-review`, `small-group`, `studio-critique`.

---

## D

**Default value** — The token value assumed when no value is explicitly set. Default values are defined per token and documented in the [Tokens reference](/tokens/).

---

## F

**Feedback mode** — Who provides feedback to the learner. Governed by `feedback.mode`. Examples: `instructor`, `peer`, `peer-plus-instructor`, `ai-assisted`, `self`.

**Feedback timing** — When feedback is given relative to submission. Governed by `feedback.timing`. Examples: `before-submission`, `after-submission`, `ongoing`, `on-demand`.

---

## I

**Instructional pattern** — A reusable sequence of learner and instructor actions that defines the shape of a learning experience. See [Instructional Patterns](/concepts/instructional-patterns/).

---

## J

**JSON-LD context** — A machine-readable file that defines the OIS vocabulary as Linked Data, enabling semantic interoperability with OERSchema and schema.org. Available at [`/ois-context.jsonld`](/ois-context.jsonld).

---

## L

**Localization level** — The depth of adaptation for different cultural and linguistic contexts. Governed by `localization.level`. Examples: `none`, `translated`, `culturally-adapted`, `co-created`.

**LLMs.txt** — A plain-text file at `/llms.txt` summarizing the OIS vocabulary in a format optimized for large language models. See [AI Agent Readiness](/concepts/ai-agent-readiness/).

---

## O

**OIS** — Open Instructional Systems. A pedagogical design system and reference vocabulary for educational content creators, platform developers, and AI agents.

**OIS index** — A machine-readable JSON registry of all tokens, patterns, themes, renderer profiles, and validation rules. Available at [`/ois-index.json`](/ois-index.json).

**OERSchema** — A vocabulary extension of schema.org for open educational resources. OIS adds the `pedagogy` block to OERSchema-compliant content. See [Relationship to OERSchema](/concepts/oerschema/).

---

## P

**Pattern** — See *Instructional pattern*.

**Pedagogy block** — A YAML (or JSON) structure added to content metadata that describes the instructional intent of a learning experience using OIS vocabulary.

**Pedagogical theme** — A named bundle of token defaults representing a coherent instructional style. See [Pedagogical Themes](/concepts/pedagogical-themes/).

**Pedagogical token** — An atomic instructional decision, expressed as a key-value pair. See [Pedagogical Tokens](/concepts/pedagogical-tokens/).

---

## R

**Reflection focus** — What a learner is asked to reflect on. Governed by `reflection.focus`. Examples: `process`, `outcome`, `ethical-use`, `design-decisions`.

**Renderer profile** — A structural contract defining what sections a given instructional output format should contain. See [Renderer Profiles](/concepts/renderer-profiles/).

**Revision mode** — How revision is structured. Governed by `revision.mode`. Examples: `required-once`, `multiple-drafts`, `until-mastery`, `optional`.

---

## S

**Scaffolding level** — The amount of instructional support built into an activity. Governed by `scaffolding.level`. Values: `high`, `medium`, `low`, `adaptive`.

**Scaffolding type** — The form of instructional support. Governed by `scaffolding.type`. Examples: `worked-example`, `template`, `guided-questions`, `rubric`, `checklist`.

---

## T

**Theme** — See *Pedagogical theme*.

**Token** — See *Pedagogical token*.

**Token bundle** — A collection of token key-value pairs that together describe the instructional intent of a learning experience.

**Token category** — A group of related tokens sharing a common prefix. The 10 categories are: `scaffolding`, `agency`, `feedback`, `assessment`, `revision`, `reflection`, `collaboration`, `accessibility`, `localization`, `aiUse`.

---

## V

**Validation rule** — A logic check that verifies a token bundle is internally consistent and pedagogically sound. See [Validation Rules](/concepts/validation-rules/).

---

## Z

**Zod validators** — TypeScript validation schemas for OIS data objects, available in the `@ois/spec` package. Used by platforms and AI agents to validate pedagogy blocks programmatically.
