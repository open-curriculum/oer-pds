---
title: Accessibility Tokens
description: Tokens that describe accessibility design intent and media alternatives.
---

## `accessibility.mode`

**The accessibility design intent of the learning experience.**

| Value | Meaning |
|-------|---------|
| `standard` | No specific accessibility affordances beyond baseline |
| `low-bandwidth` | Designed for learners with limited internet access |
| `screen-reader-first` | Designed to work fully with screen readers |
| `multimodal` | Multiple sensory pathways supported (visual, auditory, tactile) |
| `flexible-deadline` | Timing flexibility is built into the activity structure |
| `universal-design` | Designed following Universal Design for Learning principles |

**OERSchema mapping:** `accessibilityFeature`, `accessibilityHazard`, `accessMode`

---

## `accessibility.mediaAlternatives`

**Media alternatives provided for non-text content.**

| Value | Meaning |
|-------|---------|
| `captions` | Captions for video or audio content |
| `transcript` | Full transcript of spoken content |
| `alt-text` | Descriptive text for images |
| `printable` | Print-ready version available |
| `audio-description` | Audio description of visual content |
| `downloadable-assets` | All assets available for offline use |

**Multiple values are allowed.**

**Validation:** If `accessibility.mode` is `screen-reader-first` or `multimodal`, at least `captions`, `transcript`, and `alt-text` should be present.

**AI guidance:** Always specify `accessibility.mediaAlternatives` when the activity involves video, audio, or complex images. Generate alt-text descriptions for any image examples in your output. Flag when `accessibility.mode: low-bandwidth` but resources include high-bandwidth media without alternatives.
