---
title: OER Design System Specification
description: The formal specification for the OER Design System vocabulary.
sidebar:
  order: 1
  label: Specification
---

The OER Design System specification defines the vocabulary, data schemas, validation rules, and implementation contracts for pedagogical design system metadata.

## Specification Version

**Current version:** `0.1.0-alpha`

The spec is in active development. The token, pattern, theme, and renderer vocabularies defined in this documentation are normative for version 0.1.0.

## Normative Files

| File | Description |
|------|-------------|
| [`/ois-index.json`](/ois-index.json) | Full registry — tokens, patterns, themes, renderers, validation rules |
| [`/schemas/ois-token.schema.json`](/schemas/ois-token.schema.json) | JSON Schema for token definitions |
| [`/schemas/ois-pattern.schema.json`](/schemas/ois-pattern.schema.json) | JSON Schema for pattern definitions |
| [`/schemas/ois-theme.schema.json`](/schemas/ois-theme.schema.json) | JSON Schema for theme definitions |
| [`/schemas/ois-renderer.schema.json`](/schemas/ois-renderer.schema.json) | JSON Schema for renderer profiles |
| [`/schemas/ois-validation-rule.schema.json`](/schemas/ois-validation-rule.schema.json) | JSON Schema for validation rules |

## NPM Packages

| Package | Description |
|---------|-------------|
| `@ois/spec` | TypeScript types, Zod validators, JSON Schemas |
| `@ois/registry` | YAML data files and registry build utilities |

## Principles

1. **Separation of content from pedagogy** — OER Design System metadata is always separate from, never embedded in, learning content.
2. **Composability** — Tokens, patterns, and themes are independently useful and may be combined.
3. **Openness** — The specification is open. Any platform or tool may implement it.
4. **AI legibility** — All OER Design System structures must be machine-readable and semantically unambiguous.
5. **Backward compatibility** — The OER Design System is additive. Adding its metadata to an existing resource should never break it.
6. **Research grounding** — Every token and pattern must trace back to established instructional design research.

## Changelog

See [Changelog](/spec/changelog/).
