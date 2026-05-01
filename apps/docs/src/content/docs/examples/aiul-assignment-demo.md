---
title: AIUL Assignment Demo
description: A demonstration of an AI Use Disclosure (AIUL) declaration embedded in a real assignment brief.
---

The **AI Use Disclosure (AIUL)** is a structured way for learners to document how they used AI tools in completing an assignment.

OIS defines AIUL as a renderer profile and as a token bundle anchor. This page demonstrates how to embed an AIUL requirement in an assignment, and what a complete AIUL submission looks like.

## Assignment Brief with Embedded AIUL Requirement

**Assignment:** Visual Identity Design for a Community Organization

```yaml
pedagogy:
  theme: project-based-production
  tokens:
    aiUse.policy: collaborative-disclosed
    aiUse.allowedFunctions: [brainstorming, image-generation, reference-generation]
    aiUse.disclosureRequired: "true"
    aiUse.reflectionRequired: "true"
    reflection.focus: ethical-use
```

### Student-facing instructions (excerpt)

> This assignment permits AI tool use for brainstorming, image generation, and reference gathering only. AI tools may not be used to produce the final logo, brand system, or rationale document.
>
> You must submit an AI Use Disclosure (AIUL) with your final package. See the AIUL template below.

---

## AIUL Template

```markdown
## AI Use Disclosure (AIUL)

**Student:** [Name]
**Assignment:** [Title]
**Date submitted:** [Date]

### AI tools used

| Tool | Function | How I used it |
|------|----------|---------------|
| [Tool name] | [brainstorming / image-generation / reference-generation] | [Specific description] |

### What AI contributed

[Describe specifically what the AI tool generated or suggested, and how it was used in your process.]

### What I contributed

[Describe what decisions, judgments, and work you made or produced that AI did not.]

### How my work changed because of AI use

[Describe how using AI shaped your process or outcome — including both what it helped with and where it fell short or needed correction.]

### Critical reflection

[Reflect on your AI use: What did it do well? What did it do poorly? What decisions did you have to override? What ethical considerations came up for you in this use?]
```

---

## Completed AIUL Example

```markdown
## AI Use Disclosure (AIUL)

**Student:** Jordan Lee
**Assignment:** Visual Identity Design — Riverside Community Garden
**Date submitted:** 2024-11-15

### AI tools used

| Tool | Function | How I used it |
|------|----------|---------------|
| ChatGPT | brainstorming | Generated 20 possible visual metaphors for community, growth, and collaboration |
| Adobe Firefly | image-generation | Generated 8 rough visual directions for logo exploration |
| Perplexity | reference-generation | Located examples of community garden organizations in similar regions |

### What AI contributed

ChatGPT gave me a list of 20 metaphors. Most were generic (leaves, hands, seeds) but two (root systems as community networks, seasonal change as shared time) were ones I hadn't considered and shaped my direction.

Adobe Firefly generated 8 visual directions. I did not use any of them directly — they were too generic and lacked specificity to this community. But they helped me understand what I didn't want, which clarified what I did want.

Perplexity found 12 community garden organizations. I reviewed their visual identities and identified that most use green-dominant palettes and organic forms. I chose to diverge deliberately.

### What I contributed

Every final design decision: the mark, the color system, the typeface selection, the brand voice, and the rationale document are my own. The AI contributed raw material that I evaluated, revised, and largely rejected in favor of my own developed direction.

### How my work changed because of AI use

Using Firefly early helped me move through the generic directions quickly rather than pursuing them manually. This saved time. However, I found that AI-generated imagery leaned heavily toward stock-illustration aesthetics, which I had to consciously resist in my own work.

### Critical reflection

The brainstorming tool was genuinely useful as a divergent thinking prompt. The image generation was less useful — it produced technically competent but contextually empty results. I had to stay actively critical about when AI output was genuinely useful versus when it was leading me toward generic solutions. The hardest ethical question was whether my "inspiration" from AI outputs constituted undisclosed creative debt — I decided that using ideas as contrast cases (what I'm deliberately not doing) does not, but I wanted to name the uncertainty.
```

---

## How AIUL Connects to Token Validation

If a pedagogy block has `aiUse.policy: collaborative-disclosed` without `aiUse.disclosureRequired: "true"`, the validation rule `ai-use-requires-disclosure` will flag an error. AIUL declarations are the concrete output that satisfies that disclosure requirement.

See [Validation Rules](/concepts/validation-rules/) and [AI Prompt Contracts](/ai/prompt-contracts/) for how platforms can enforce AIUL requirements programmatically.
