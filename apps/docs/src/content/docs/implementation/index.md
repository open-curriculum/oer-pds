---
title: Implementation Guide
description: How to implement OIS on your platform, in your course, or in your AI workflow.
sidebar:
  order: 1
  label: Overview
---

OIS is designed to be implemented anywhere. It is a vocabulary, not a platform.

## Implementation Paths

### For Instructors
Apply OIS to your own course materials by:
1. Choosing a pedagogical theme for your course
2. Selecting a pattern for each major assignment or module
3. Adding a `pedagogy:` block to your lesson or assignment frontmatter
4. Using the token vocabulary to describe your instructional intent

### For Platforms
Integrate OIS into your LMS, CMS, or course builder by:
1. Adding `pedagogy.*` fields to your content schema
2. Consuming the OIS registry via `ois-index.json`
3. Generating OIS-enhanced JSON-LD output
4. Running validation checks against the published rules

### For AI Agents
See the [AI Agent Guide](/ai/) and [Prompt Contracts](/ai/prompt-contracts/).

### For Developers
Install the `@ois/spec` and `@ois/registry` npm packages:
```bash
pnpm add @ois/spec @ois/registry
```

## Platform-Specific Recipes

*Platform implementation recipes are being added in Phase 4 of the roadmap.*

- How to apply OIS to a Nuxt/Nuxt Content platform
- How to apply OIS to a Next.js / MDX platform
- How to generate OIS-aware Canvas assignments
- How to use OIS with HAX editor
- How to use OIS with Pressbooks

## Minimum Viable Implementation

The smallest useful OIS implementation adds three fields to content frontmatter:

```yaml
pedagogy:
  theme: constructivist-studio
  pattern: observe-analyze-create-critique-revise
  tokens:
    aiUse.policy: assisted-disclosed
```

This is enough to:
- Drive a consistent instructional experience
- Generate alignment validation warnings
- Produce AI-readable context
- Be included in OIS-aware search and filtering
