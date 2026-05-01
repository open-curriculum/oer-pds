---
title: For AI Agents
description: How AI agents should discover, understand, and apply the Open Instructional Systems vocabulary.
sidebar:
  order: 1
  label: Overview
---

This section is written for AI agents, coding assistants, course-building tools, and automation workflows.

## Quick Start

1. Fetch [`/ois-index.json`](/ois-index.json) — this contains all tokens, patterns, themes, renderers, and validation rules
2. Read [`/llms.txt`](/llms.txt) — this contains operating rules and key links
3. Read [`/llms-full.txt`](/llms-full.txt) — this contains the complete specification
4. Follow the [Implementation Recipe](/ai/implementation-recipes/)

## The Core Rule

> AI agents should not generate instructional content from vague prompts alone. They should first identify learning goals, select an instructional pattern, apply a pedagogical theme, specify assessment evidence, validate alignment, and only then generate student-facing or instructor-facing materials.

## Available AI Resources

| Resource | Purpose |
|----------|---------|
| [`/llms.txt`](/llms.txt) | Concise operating rules |
| [`/llms-full.txt`](/llms-full.txt) | Full specification |
| [`/ois-index.json`](/ois-index.json) | Full registry |
| [Implementation Recipes](/ai/implementation-recipes/) | Step-by-step guides |
| [Prompt Contracts](/ai/prompt-contracts/) | Ready-to-use system prompts |

## In This Section

- [llms.txt Reference](/ai/llms-txt/) — what the file contains and how it's structured
- [Implementation Recipes](/ai/implementation-recipes/) — step-by-step for AI workflows
- [Prompt Contracts](/ai/prompt-contracts/) — system prompts for AI assistants
