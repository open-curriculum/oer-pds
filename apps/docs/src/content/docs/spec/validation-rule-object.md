---
title: Validation Rule Object
description: Formal specification for the ValidationRule object in OIS.
---

## Overview

A `ValidationRule` is a logic check that verifies a pedagogy block is internally consistent. Rules have a condition (when to apply) and an expectation (what must be true).

## JSON Schema

Full schema: [`/schemas/ois-validation-rule.schema.json`](/schemas/ois-validation-rule.schema.json)

## TypeScript Type

```typescript
type RuleSeverity = 'error' | 'warning' | 'info';

interface RuleCondition {
  token: string;
  values: string[];
}

interface RuleExpectation {
  token: string;
  notValues?: string[];
  requiredValues?: string[];
}

interface ValidationRule {
  id: string;
  name: string;
  severity: RuleSeverity;
  condition: RuleCondition;
  expected: RuleExpectation;
  message: string;
  rationale: string;
}
```

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Kebab-case identifier |
| `name` | `string` | yes | Human-readable rule name |
| `severity` | `RuleSeverity` | yes | `error`, `warning`, or `info` |
| `condition` | `RuleCondition` | yes | When the rule activates |
| `expected` | `RuleExpectation` | yes | What must be true when the rule activates |
| `message` | `string` | yes | Error or warning message for the user |
| `rationale` | `string` | yes | Why this rule exists |

## Condition and Expectation

The rule fires when `condition.token` has one of `condition.values`.

When the rule fires:
- If `expected.notValues` is set: `expected.token` must NOT be one of those values
- If `expected.requiredValues` is set: `expected.token` MUST be one of those values

## Severity Levels

| Severity | Meaning |
|----------|---------|
| `error` | A fundamental pedagogical contradiction. Must be resolved. |
| `warning` | A likely problem worth reviewing before publishing. |
| `info` | A suggestion for improving the token bundle. |

## Example Rule (YAML)

```yaml
id: revision-requires-timely-feedback
name: Revision Requires Pre-Submission Feedback
severity: error
condition:
  token: revision.required
  values: ["true"]
expected:
  token: feedback.timing
  notValues: [after-submission]
message: >
  revision.required is true but feedback.timing is after-submission.
  Revision requires timely feedback before the submission deadline.
rationale: >
  If feedback only arrives after the final submission window closes,
  learners have no opportunity to revise in the same activity cycle.
  This makes the revision token meaningless.
```

## Applying Rules Programmatically

```typescript
function checkRule(
  rule: ValidationRule,
  tokens: Record<string, string | string[]>
): string | null {
  const conditionValue = String(tokens[rule.condition.token] ?? '');
  if (!rule.condition.values.includes(conditionValue)) return null;

  const expectedValue = String(tokens[rule.expected.token] ?? '');
  if (rule.expected.notValues?.includes(expectedValue)) {
    return rule.message;
  }
  if (rule.expected.requiredValues && !rule.expected.requiredValues.includes(expectedValue)) {
    return rule.message;
  }
  return null;
}
```

## In the Registry

Validation rules are accessible via:
- `GET /ois-index.json` → `validationRules` array
- `getValidationRuleById(id)` — `@ois/registry`

See [Validation Rules](/validation/) for the complete rule set and [Validation Prompts](/ai/validation-prompts/) for AI-agent validation prompt templates.
