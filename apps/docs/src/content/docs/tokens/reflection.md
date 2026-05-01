---
title: Reflection Tokens
description: Tokens that describe whether and how reflection is expected in a learning activity.
---

Reflection tokens describe whether learners are asked to reflect on their process or learning, and what that reflection should focus on.

## `reflection.required`

**Whether a formal reflection component is required.**

| Value | Meaning |
|-------|---------|
| `true` | Reflection is a required, evaluated component |
| `false` | Reflection is not required |

**Use when:** Reflection is a deliberate instructional goal — not just a nice-to-have addendum.

**Validation:** If `aiUse.policy` is anything other than `prohibited`, `reflection.required` should be `true`. AI-supported activities need a reflection component for learners to process how AI shaped their work.

**AI guidance:** Set `reflection.required: true` for any activity where learners make creative or analytical decisions, use AI assistance, collaborate with peers, or engage in revision. Reflection is how implicit learning becomes explicit. When generating prompts, ensure reflection prompts are open-ended and tied to specific aspects of the activity, not generic ("what did you learn?").

---

## `reflection.focus`

**The aspect of experience the reflection should address.**

| Value | Meaning |
|-------|---------|
| `process` | How the learner went about the work |
| `concept-transfer` | How the learner connects the concept to other contexts |
| `creative-choice` | Why the learner made specific creative or design decisions |
| `ethical-use` | How the learner thought about ethical dimensions of the work |
| `collaboration` | How the learner experienced working with others |
| `failure-analysis` | What didn't work and what the learner would do differently |
| `metacognition` | How the learner thinks about their own learning process |

**Use when:** `reflection.required` is `true`.

**Multiple values are allowed** — a reflection may address process *and* creative choice.

**Examples:**
- `creative-choice` → "Explain three specific composition decisions you made and how each one was intended to guide the viewer's attention."
- `ethical-use` → "Describe how you used AI in this project. What did the AI contribute, and what did you decide to change or reject? How does this affect how you evaluate the final artifact?"
- `failure-analysis` → "Describe one thing that didn't work in your first draft. What did you learn from it, and how did you address it in your revision?"

**AI guidance:** Match `reflection.focus` to the learning objectives. For AI-use activities, always include `ethical-use`. For studio work, use `creative-choice`. For collaborative projects, add `collaboration`. Generate reflection prompts that are specific to the activity, not generic.
