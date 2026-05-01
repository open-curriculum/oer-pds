---
title: For OERSchema Integration
description: How to embed OIS pedagogy blocks in OERSchema-compliant JSON-LD content.
---

OIS is designed as a companion vocabulary to [OERSchema](https://oerschema.org). OERSchema describes *what* a learning resource is; OIS describes *how* it is taught.

## The Relationship

OERSchema extends schema.org's `LearningResource` type with open educational resource properties:
- Learning objectives
- Prerequisites
- Subject, level, language
- Standards alignment

OIS adds the `pedagogy` block — the instructional style layer:
- Pedagogical theme
- Token bundle
- Pattern
- Renderer profile

Neither replaces the other. Both are needed for a complete machine-readable description of a learning resource.

## Embedding OIS in JSON-LD

To add OIS to an OERSchema-compliant document, include the OIS JSON-LD context alongside the schema.org context:

```json
{
  "@context": [
    "https://schema.org/",
    "https://oerschema.org/",
    "https://open-curriculum.github.io/oer-pds/ois-context.jsonld"
  ],
  "@type": "LearningResource",
  "name": "Camera Framing in 3D Animation",
  "description": "An introduction to camera shot types and spatial storytelling.",
  "educationalLevel": "Intermediate",
  "inLanguage": "en",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "pedagogy": {
    "@type": "PedagogyBlock",
    "version": "0.1",
    "theme": "constructivist-studio",
    "pattern": "observe-analyze-create-critique-revise",
    "tokens": {
      "scaffolding.level": "medium",
      "agency.mode": "bounded-choice",
      "feedback.mode": "peer-plus-instructor",
      "feedback.timing": "before-submission",
      "assessment.evidence": "artifact-plus-reflection",
      "revision.required": "true",
      "aiUse.policy": "assisted-disclosed",
      "aiUse.disclosureRequired": "true"
    }
  }
}
```

## Property Mapping

| OIS property | OERSchema / schema.org analog | Notes |
|-------------|-------------------------------|-------|
| `pedagogy.theme` | No direct analog | OIS-specific |
| `pedagogy.tokens.scaffolding.level` | `educationalLevel` | More granular in OIS |
| `pedagogy.tokens.assessment.evidence` | `assesses` | OIS specifies evidence type |
| `pedagogy.tokens.aiUse.policy` | No analog | OIS-specific; critical for AI era |
| `pedagogy.tokens.collaboration.structure` | No analog | OIS-specific |
| `pedagogy.tokens.localization.level` | `inLanguage` | OIS adds cultural adaptation depth |
| `pedagogy.tokens.accessibility.*` | `accessibilityFeature`, `accessibilityHazard` | OIS adds UDL orientation |

## In Frontmatter

For Markdown/MDX files with YAML frontmatter, the OIS `pedagogy` block maps directly to a JSON-LD `pedagogy` property when serialized:

```yaml
---
title: Camera Framing in 3D Animation
schema:
  "@type": LearningResource
  license: https://creativecommons.org/licenses/by/4.0/
pedagogy:
  version: "0.1"
  theme: constructivist-studio
  pattern: observe-analyze-create-critique-revise
  tokens:
    scaffolding.level: medium
    aiUse.policy: assisted-disclosed
---
```

## Validation

The OIS `@ois/spec` package includes TypeScript types and Zod validators that can be applied to OERSchema-embedded content during build or CI validation.

```typescript
import { PedagogyBlockSchema } from '@ois/spec';

const result = PedagogyBlockSchema.safeParse(jsonLdObject.pedagogy);
```

See [For Platform Developers](/implementation/for-platforms/) for full integration patterns.
