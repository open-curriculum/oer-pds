---
title: Relationship to OERSchema
description: How OIS extends OERSchema — the two vocabularies are complementary, not competing.
sidebar:
  order: 3
---

OIS is designed to **extend OERSchema**, not replace it. The two vocabularies are complementary.

## What Each Layer Describes

| Vocabulary | Describes |
|-----------|-----------|
| **OERSchema** | What a learning resource *is* and how its educational parts relate — learning objectives, assessments, activities, learning patterns, competency levels, prerequisites |
| **OIS** | How the learning experience is pedagogically structured, styled, adapted, and validated — scaffolding, feedback, agency, revision, AI-use policy |

OERSchema provides semantic legibility. OIS provides pedagogical actionability.

## OERSchema Properties and OIS Tokens

Many OIS tokens map naturally onto or complement existing OERSchema properties:

| OIS Token | Related OERSchema Concept |
|-----------|--------------------------|
| `scaffolding.level` | `educationalLevel`, `learningResourceType` |
| `assessment.evidence` | `assesses`, `teaches`, `educationalAlignment` |
| `feedback.mode` | Not yet represented in OERSchema |
| `revision.required` | Not yet represented in OERSchema |
| `reflection.required` | Not yet represented in OERSchema |
| `agency.mode` | Not yet represented in OERSchema |
| `aiUse.policy` | Complementary to AIUL framework |
| `accessibility.mode` | `accessibilityFeature`, `accessibilityHazard`, `accessMode` |

OIS fills gaps that OERSchema currently does not address — particularly around the *process* of learning (feedback, revision, reflection) and the *conditions* of learning (agency, AI use, accessibility design intent).

## How to Use Both Together

In a content frontmatter, OERSchema describes the resource; OIS describes the pedagogy:

```yaml
# OERSchema fields
title: Camera Framing in 3D Animation
description: Learn how camera placement and framing shape viewer attention.
learningObjectives:
  - Analyze how framing shapes viewer attention
  - Create a rendered shot using intentional camera placement
  - Explain how composition choices influence narrative meaning
educationalLevel: intermediate
estimatedDuration: PT2H
license: CC BY 4.0

# OIS pedagogy fields
pedagogy:
  theme: constructivist-studio
  pattern: observe-analyze-create-critique-revise
  tokens:
    scaffolding.level: medium
    feedback.mode: peer-plus-instructor
    assessment.evidence: artifact-plus-reflection
    revision.required: true
  aiUse:
    policy: assisted-disclosed
    disclosureRequired: true
    reflectionRequired: true
```

## JSON-LD Extension

When generating JSON-LD for OERSchema, OIS metadata can be included as an extension:

```json
{
  "@context": [
    "https://schema.org",
    "https://oerschema.org/",
    "https://open-instructional-systems.org/ois-context.jsonld"
  ],
  "@type": ["oer:Lesson", "oer:LearningComponent"],
  "name": "Camera Framing in 3D Animation",
  "ois:pedagogicalTheme": {
    "@id": "ois:constructivist-studio"
  },
  "ois:instructionalPattern": {
    "@id": "ois:observe-analyze-create-critique-revise"
  },
  "ois:pedagogicalTokens": {
    "ois:scaffoldingLevel": "medium",
    "ois:feedbackMode": "peer-plus-instructor",
    "ois:assessmentEvidence": "artifact-plus-reflection",
    "ois:revisionRequired": true
  }
}
```

The `ois-context.jsonld` file defines these terms and is available at [`/ois-context.jsonld`](/ois-context.jsonld).

## Backward Compatibility

OIS does not change or break existing OERSchema behavior. Platforms that implement OERSchema without OIS continue to function normally. OIS metadata is additive.

The goal is eventual convergence — over time, the most useful OIS tokens may become candidates for standardization in OERSchema itself, based on evidence of adoption and utility.
