---
title: AI Use Tokens
description: Tokens that describe AI use policy, permitted functions, and disclosure and reflection requirements.
---

AI use tokens are the OIS representation of the AIUL (AI Use License) framework. They make AI expectations explicit, portable, and assessable at the assignment level.

## `aiUse.policy`

**The overall AI use policy for this learning activity.**

| Value | Meaning |
|-------|---------|
| `prohibited` | AI use is not permitted |
| `assisted-disclosed` | AI may assist; use must be disclosed |
| `collaborative-disclosed` | AI is a collaborative partner; use must be disclosed and reflected upon |
| `experimental` | AI use is explicitly encouraged for exploration; full disclosure required |
| `instructor-specified` | AI policy is set at the course or instructor level, not the activity level |

**Use when:** Any learning activity where AI use expectations need to be explicit — which is increasingly most activities.

**Validation:** If `aiUse.policy` is anything other than `prohibited`, `reflection.required` should be `true`.

**AI guidance:** Default to `assisted-disclosed` rather than `prohibited` for most activities unless there is a pedagogically justified reason to exclude AI. Use `collaborative-disclosed` for activities where AI is a meaningful creative partner. Never leave AI policy unspecified in AI-generated course materials.

---

## `aiUse.allowedFunctions`

**The specific AI functions permitted in this activity.**

| Value | Meaning |
|-------|---------|
| `brainstorming` | Using AI to generate ideas |
| `outlining` | Using AI to structure a plan or document |
| `debugging` | Using AI to identify and fix errors |
| `critique` | Using AI to evaluate or give feedback on work |
| `feedback` | Using AI to request feedback on drafts |
| `reference-generation` | Using AI to find or summarize sources |
| `image-generation` | Using AI to generate images |
| `code-generation` | Using AI to write or complete code |
| `final-artifact-generation` | Using AI to produce the final submitted artifact |

**Multiple values are allowed.**

**Use when:** `aiUse.policy` is not `prohibited`, to specify exactly what is and is not permitted.

**Examples:**
- A writing assignment: `brainstorming, outlining, feedback` — but NOT `final-artifact-generation`
- A coding exercise: `debugging, reference-generation` — but NOT `code-generation`
- An AI literacy experiment: `brainstorming, image-generation, final-artifact-generation` — with `reflection.focus: ethical-use`

**AI guidance:** Be specific about allowed functions when generating assignment instructions. Vague policies ("you may use AI for some things") lead to inconsistent student behavior and assessment fairness concerns. Always pair permitted functions with disclosure and reflection requirements.

---

## `aiUse.disclosureRequired`

**Whether learners must disclose their AI use.**

| Value | Meaning |
|-------|---------|
| `true` | Disclosure is required; a disclosure statement must be included in the submission |
| `false` | Disclosure is not required |

**Validation:** If `aiUse.policy` is not `prohibited`, `aiUse.disclosureRequired` should be `true`.

---

## `aiUse.reflectionRequired`

**Whether learners must reflect on how AI shaped their process or artifact.**

| Value | Meaning |
|-------|---------|
| `true` | A reflection on AI use is a required component |
| `false` | No AI use reflection required |

**Validation:** If `aiUse.policy` is `collaborative-disclosed` or `experimental`, `aiUse.reflectionRequired` should be `true`.

**AI guidance:** Generate AI reflection prompts that ask learners to describe specific AI interactions, evaluate the quality and appropriateness of AI contributions, and explain what they decided to keep, change, or reject. Generic prompts ("describe your AI use") are insufficient for learning.
