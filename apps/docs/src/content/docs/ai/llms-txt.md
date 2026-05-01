---
title: llms.txt Reference
description: About the llms.txt and llms-full.txt files published by OIS for AI agent discovery.
---

OIS publishes two machine-readable files following the [llms.txt standard](https://llmstxt.org/) for AI agent discovery.

## `/llms.txt`

A concise file containing:
- What OIS is
- Key links to the registry and schemas
- A summary of token groups, patterns, and themes
- Operating rules for AI agents

Available at: [`/llms.txt`](/llms.txt)

## `/llms-full.txt`

The complete OIS specification in a single plain-text file, formatted for AI agent consumption. Contains:
- Full concept definitions
- All token definitions with values and guidance
- All pattern definitions with sequences
- All theme definitions with token bundles
- All validation rules
- Implementation recipes
- Prompt contracts

Available at: [`/llms-full.txt`](/llms-full.txt)

## Usage

AI agents can fetch and cache these files at the start of any instructional design session:

```javascript
const llms = await fetch('https://open-instructional-systems.org/llms-full.txt').then(r => r.text());
// Include in system context or use to ground responses
```

Or use the structured `ois-index.json` for programmatic access:

```javascript
const ois = await fetch('https://open-instructional-systems.org/ois-index.json').then(r => r.json());
const theme = ois.themes.find(t => t.id === 'constructivist-studio');
```
