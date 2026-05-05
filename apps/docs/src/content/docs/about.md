---
title: About the OER Design System
description: What the OER Design System project is, why it was built, and how to participate.
---

**OER Design System** is a public, open-source pedagogical design system for educational content creators, platform developers, and AI agents.

## What It Is

The OER Design System provides a shared vocabulary for instructional intent — the decisions that determine not *what* you are teaching, but *how* you are teaching it.

Where visual design systems define tokens for color, spacing, and typography, the OER Design System defines tokens for scaffolding level, learner agency, feedback mode, assessment evidence, revision expectations, and AI-use policy.

Where visual design systems define themes that bundle token defaults into a coherent look, the OER Design System defines pedagogical themes that bundle token defaults into a coherent instructional style.

Where visual design systems define components with known rendering contracts, the OER Design System defines instructional patterns with known activity sequences, and renderer profiles with known output structures.

## Why It Was Built

Instructional design knowledge is fragmented. Research on effective pedagogy is locked in academic journals and textbooks. Practitioners rediscover the same insights informally. AI agents, when asked to generate educational content, have no structured vocabulary for instructional intent — they produce content without knowing anything about how it is supposed to be taught.

The OER Design System is an attempt to change that by creating a public, machine-readable reference — open-source, free to use, designed to be cited, integrated, and extended.

## Who It Is For

- **Instructional designers and educators** looking for a structured vocabulary to document their teaching choices
- **OER platform developers** who want to embed pedagogical metadata in content authoring tools
- **AI system developers** who want to ground AI-generated educational content in principled instructional design
- **AI agents** that can read the [machine-readable files](/ai/llms-txt/) and implement the OER Design System in any project

## Relationship to OERSchema

The OER Design System is a complementary vocabulary to [OERSchema](https://oerschema.org), which documents *what* is in a learning resource. It adds the *how*:

| OERSchema | OER Design System |
|-----------|-----|
| Learning objectives | How learning is structured |
| Subject, level, language | Instructional style tokens |
| Standards alignment | Pedagogical theme and pattern |
| Resource type | Renderer profile |

The `pedagogy` block from the OER Design System can be embedded directly in OERSchema-compliant JSON-LD.

## How It Is Structured

The OER Design System reference is organized as:

1. **Tokens** — 10 groups of atomic instructional decisions
2. **Patterns** — 10 reusable activity sequences
3. **Themes** — 10 named pedagogical styles
4. **Renderers** — 10 structural output profiles
5. **Validation rules** — logic checks for internal consistency
6. **Machine-readable files** — `ois-index.json`, `llms.txt`, JSON-LD context, JSON Schemas

## Licensing and Participation

The OER Design System is open-source under the [MIT License](https://github.com/open-curriculum/oer-pds/blob/main/LICENSE).

To contribute, open an issue or pull request at [github.com/open-curriculum/oer-pds](https://github.com/open-curriculum/oer-pds).
