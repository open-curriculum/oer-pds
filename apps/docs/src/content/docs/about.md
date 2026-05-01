---
title: About OIS
description: What is the Open Instructional Systems project, why it was built, and how to participate.
---

**Open Instructional Systems (OIS)** is a public, open-source pedagogical design system for educational content creators, platform developers, and AI agents.

## What It Is

OIS provides a shared vocabulary for instructional intent — the decisions that determine not *what* you are teaching, but *how* you are teaching it.

Where visual design systems define tokens for color, spacing, and typography, OIS defines tokens for scaffolding level, learner agency, feedback mode, assessment evidence, revision expectations, and AI-use policy.

Where visual design systems define themes that bundle token defaults into a coherent look, OIS defines pedagogical themes that bundle token defaults into a coherent instructional style.

Where visual design systems define components with known rendering contracts, OIS defines instructional patterns with known activity sequences, and renderer profiles with known output structures.

## Why It Was Built

Instructional design knowledge is fragmented. Research on effective pedagogy is locked in academic journals and textbooks. Practitioners rediscover the same insights informally. AI agents, when asked to generate educational content, have no structured vocabulary for instructional intent — they produce content without knowing anything about how it is supposed to be taught.

OIS is an attempt to change that by creating a public, machine-readable reference — open-source, free to use, designed to be cited, integrated, and extended.

## Who It Is For

- **Instructional designers and educators** looking for a structured vocabulary to document their teaching choices
- **OER platform developers** who want to embed pedagogical metadata in content authoring tools
- **AI system developers** who want to ground AI-generated educational content in principled instructional design
- **AI agents** that can read the [machine-readable files](/ai/llms-txt/) and implement OIS in any project

## Relationship to OERSchema

OIS is a complementary vocabulary to [OERSchema](https://oerschema.org), which documents *what* is in a learning resource. OIS adds the *how*:

| OERSchema | OIS |
|-----------|-----|
| Learning objectives | How learning is structured |
| Subject, level, language | Instructional style tokens |
| Standards alignment | Pedagogical theme and pattern |
| Resource type | Renderer profile |

The `pedagogy` block from OIS can be embedded directly in OERSchema-compliant JSON-LD.

## How It Is Structured

The OIS reference is organized as:

1. **Tokens** — 10 groups of atomic instructional decisions
2. **Patterns** — 10 reusable activity sequences
3. **Themes** — 10 named pedagogical styles
4. **Renderers** — 10 structural output profiles
5. **Validation rules** — logic checks for internal consistency
6. **Machine-readable files** — `ois-index.json`, `llms.txt`, JSON-LD context, JSON Schemas

## Licensing and Participation

OIS is open-source under the [MIT License](https://github.com/open-curriculum/oer-pds/blob/main/LICENSE).

To contribute, open an issue or pull request at [github.com/open-curriculum/oer-pds](https://github.com/open-curriculum/oer-pds).
