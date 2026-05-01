---
title: Implementation Checklists
description: Quick-reference checklists for AI agents and developers implementing OIS in various contexts.
---

## Checklist 1: Generating a New Lesson (AI Agent)

Use before generating any instructional content:

- [ ] I have identified or confirmed the pedagogical theme
- [ ] I have built a token bundle starting from theme defaults
- [ ] I have confirmed `aiUse.policy` with the instructor or resolved it from context
- [ ] I have validated the token bundle (no errors)
- [ ] I have selected the pattern that best matches the instructional goal
- [ ] I have selected the renderer profile for the output format requested
- [ ] I will include a complete pedagogy block in my response
- [ ] If `aiUse.disclosureRequired: "true"`, I will include AIUL template or instructions

---

## Checklist 2: Reviewing AI-Generated Content (Human)

Use to review content generated with OIS:

- [ ] The content includes a pedagogy block
- [ ] The theme is explicitly named and matches the content style
- [ ] The `aiUse.policy` is appropriate for this context
- [ ] Validation rules pass (no errors)
- [ ] If revision is expected, feedback timing supports it
- [ ] Assessment evidence matches the stated activity
- [ ] The pattern chosen makes sense for the instructional goal
- [ ] If AIUL is required, the template or instructions are included

---

## Checklist 3: Platform Integration (Developer)

Use when building OIS into a platform or tool:

- [ ] `pedagogy` field added to content schema
- [ ] Zod validator from `@ois/spec` applied at save/publish
- [ ] `ois-index.json` consumed (from CDN or bundled via `@ois/registry`)
- [ ] Theme and token dropdowns populated from registry
- [ ] Validation errors surfaced to content authors
- [ ] Pedagogy block included in rendered JSON-LD
- [ ] `llms.txt` and `ois-context.jsonld` referenced in documentation

---

## Checklist 4: Publishing OIS-Annotated OER

Use before publishing a learning resource with OIS annotations:

- [ ] Pedagogy block present and complete
- [ ] Token bundle validated
- [ ] `aiUse.policy` appropriate for the distribution context
- [ ] Accessibility tokens match the accessibility features present in content
- [ ] Localization tokens match the language and cultural adaptation status
- [ ] Bandwidth assumption tokens match the intended distribution context
- [ ] JSON-LD embedded with OIS context reference
- [ ] `llms.txt` current (if self-hosting a registry)

---

## Checklist 5: AI Literacy Course Design

Use specifically when designing `ai-literacy` theme content:

- [ ] AI tools are used **in** the activity (not just mentioned)
- [ ] `aiUse.policy: experimental` set
- [ ] `aiUse.disclosureRequired: "true"` set
- [ ] `aiUse.reflectionRequired: "true"` set
- [ ] Pattern is `prompt-ai-experiment-evaluate-disclose` or `artifact-analysis-reflection`
- [ ] AIUL declaration template included in student materials
- [ ] Assessment criteria reward critical evaluation, not AI output quality
- [ ] Validation passes (especially AI-use rules)

---

## Common Error Quick Reference

| Error | Likely cause | Fix |
|-------|-------------|-----|
| `revision.required: "true"` + `feedback.timing: after-submission` | Feedback timing not updated when revision added | Change `feedback.timing` to `before-submission` or `ongoing` |
| `aiUse.policy: collaborative-disclosed` without `disclosureRequired: "true"` | Disclosure requirement forgotten | Add `aiUse.disclosureRequired: "true"` |
| `aiUse.policy: experimental` without `reflectionRequired: "true"` | Reflection requirement forgotten | Add `aiUse.reflectionRequired: "true"` |
| No `assessment.evidence` set | Theme default not overridden | Add explicit `assessment.evidence` value |
| `bandwidth.assumption: offline-capable` without downloadable assets | Low-bandwidth accessibility gap | Add `accessibility.mediaAlternatives: [downloadable-assets]` |
