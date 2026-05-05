---
title: Validation Prompts
description: Prompt templates for using AI to validate token bundles and identify pedagogy block errors.
---

AI agents can use these prompt templates to validate OER Design System token bundles before generating content, or to check existing content for inconsistencies.

## System Prompt: Token Bundle Validator

Include this in your AI system prompt when building tools that check pedagogy blocks:

```
You are an OER Design System validation assistant.

Given a pedagogy block (YAML or JSON), check it against the following validation rules and report any errors, warnings, or suggestions.

VALIDATION RULES:

1. REVISION_REQUIRES_TIMELY_FEEDBACK (severity: error)
   If revision.required is "true", then feedback.timing must NOT be "after-submission".
   Error: "revision.required is true but feedback arrives only after submission. Revision requires timely feedback."

2. AI_USE_REQUIRES_DISCLOSURE (severity: error)
   If aiUse.policy is anything other than "prohibited" or "not-specified", then aiUse.disclosureRequired must be "true".
   Error: "AI use is permitted but disclosure is not required. Any non-prohibited AI use must require disclosure."

3. AI_COLLABORATIVE_REQUIRES_REFLECTION (severity: error)
   If aiUse.policy is "collaborative-disclosed" or "experimental", then aiUse.reflectionRequired must be "true".
   Error: "Collaborative or experimental AI use requires aiUse.reflectionRequired: true."

4. OBJECTIVE_REQUIRES_EVIDENCE (severity: warning)
   If no assessment.evidence token is set, learner progress cannot be evaluated.
   Warning: "No assessment evidence defined. Consider setting assessment.evidence."

5. LOW_BANDWIDTH_NEEDS_ALTERNATIVES (severity: warning)
   If bandwidth.assumption is "low" or "offline-capable", then accessibility.mediaAlternatives should include "downloadable-assets".
   Warning: "Low-bandwidth context without downloadable assets. Add accessibility.mediaAlternatives: [downloadable-assets]."

RESPONSE FORMAT:
Return a JSON object:
{
  "valid": boolean,
  "errors": [{"rule": "...", "message": "..."}],
  "warnings": [{"rule": "...", "message": "..."}],
  "suggestions": [{"message": "..."}]
}
```

## User Prompt: Validate a Pedagogy Block

```
Validate this pedagogy block against OER Design System validation rules:

[PASTE PEDAGOGY BLOCK YAML OR JSON HERE]

Return all errors, warnings, and suggestions.
```

## Example Validation Request and Response

**Input:**
```yaml
pedagogy:
  theme: constructivist-studio
  tokens:
    revision.required: "true"
    feedback.timing: after-submission
    aiUse.policy: collaborative-disclosed
```

**Expected output:**
```json
{
  "valid": false,
  "errors": [
    {
      "rule": "REVISION_REQUIRES_TIMELY_FEEDBACK",
      "message": "revision.required is true but feedback.timing is after-submission. Revision requires timely feedback."
    },
    {
      "rule": "AI_USE_REQUIRES_DISCLOSURE",
      "message": "aiUse.policy is collaborative-disclosed but aiUse.disclosureRequired is not set to true."
    },
    {
      "rule": "AI_COLLABORATIVE_REQUIRES_REFLECTION",
      "message": "aiUse.policy is collaborative-disclosed but aiUse.reflectionRequired is not set to true."
    }
  ],
  "warnings": [],
  "suggestions": []
}
```

## Automated Validation in Workflows

For automated validation in CI/CD pipelines, see the `@ois/spec` package:

```typescript
import { validatePedagogyBlock } from '@ois/spec';

const errors = validatePedagogyBlock(pedagogyBlock);
if (errors.length > 0) {
  console.error('Validation errors:', errors);
  process.exit(1);
}
```

See [For Platform Developers](/implementation/for-platforms/) for full CI integration patterns.
