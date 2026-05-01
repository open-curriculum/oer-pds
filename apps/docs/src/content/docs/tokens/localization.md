---
title: Localization Tokens
description: Tokens that describe cultural adaptation level and bandwidth assumption.
---

## `localization.level`

**The degree to which the learning experience has been culturally adapted.**

| Value | Meaning |
|-------|---------|
| `none` | Content is not localized; examples and context may be culturally specific |
| `language-only` | Translated but not culturally adapted |
| `examples-localized` | Examples and illustrations are adapted to local context |
| `culturally-adapted` | Examples, context, values, and structures are adapted |
| `community-co-designed` | Content was co-designed with members of the target community |

**AI guidance:** When adapting OER for global reuse, note which level the source content was at and what adaptation level the target requires. Use `community-co-designed` for learning materials about local practice, history, or community knowledge.

---

## `bandwidth.assumption`

**The assumed internet connection quality for learners using this material.**

| Value | Meaning |
|-------|---------|
| `low` | Designed for 2G/low-bandwidth conditions |
| `medium` | Assumes basic broadband |
| `high` | Assumes high-speed connection; may include video-heavy content |
| `offline-capable` | All materials can be used without an internet connection |

**Use when:** The intended global reach of the material includes learners in low-bandwidth environments.

**Validation:** If `bandwidth.assumption` is `low` or `offline-capable`, check that `accessibility.mediaAlternatives` includes `downloadable-assets` or `transcript`.

**AI guidance:** When generating learning materials for global OER platforms, default to `medium` or `low` unless the platform specifically targets high-bandwidth learners. Flag embedded videos, large images, or interactive components that would create barriers for low-bandwidth learners.
