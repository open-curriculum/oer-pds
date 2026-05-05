import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { OISIndex } from '@ois/spec';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');
const docsPublicDir = join(__dirname, '../../apps/docs/public');

let index: OISIndex;
try {
  index = JSON.parse(
    readFileSync(join(distDir, 'ois-index.json'), 'utf-8'),
  ) as OISIndex;
} catch {
  console.error('ois-index.json not found in dist. Run build-index.ts first.');
  process.exit(1);
}

// ─────────────────────────────────────────────
// llms.txt — concise file
// ─────────────────────────────────────────────

const tokenList = index.tokens
  .map((t) => `- ${t.id}: ${t.definition}`)
  .join('\n');

const patternList = index.patterns
  .map((p) => `- ${p.id}: ${p.summary}`)
  .join('\n');

const themeList = index.themes.map((t) => `- ${t.id}: ${t.summary}`).join('\n');

const llmsTxt = `# OER Design System

A pedagogical design system vocabulary for learning experience metadata.

> https://open-instructional-systems.org

## Registry

- Full registry (JSON): /ois-index.json
- JSON-LD context: /ois-context.jsonld
- Full specification: /llms-full.txt
- Schemas: /schemas/

## Token Groups (${index.tokens.length} tokens)

${tokenList}

## Patterns (${index.patterns.length})

${patternList}

## Themes (${index.themes.length})

${themeList}

## AI Agent Operating Rules

1. NEVER generate instructional content from vague prompts alone.
2. ALWAYS fetch /ois-index.json first.
3. Select theme → select pattern → resolve tokens → validate → generate.
4. NEVER invent token IDs or values not in the registry.
5. NEVER permit AI use without disclosureRequired: true.
6. ALWAYS output a transparency summary of pedagogical decisions.
`;

// ─────────────────────────────────────────────
// llms-full.txt — complete specification
// ─────────────────────────────────────────────

const fullTokenSections = index.tokens
  .map((t) => {
    const valueLines = (t.values || [])
      .map(
        (v) =>
          `    ${v.value}: ${v.definition}${v.useWhen ? ` (use when: ${v.useWhen})` : ''}`,
      )
      .join('\n');
    return `### ${t.id}
Category: ${t.category}
Type: ${t.type}
Definition: ${t.definition}
${t.defaultValue !== undefined ? `Default: ${t.defaultValue}\n` : ''}${valueLines ? `Values:\n${valueLines}\n` : ''}${t.aiGuidance ? `AI Guidance: ${t.aiGuidance}\n` : ''}`;
  })
  .join('\n');

const fullPatternSections = index.patterns
  .map((p) => {
    const seq = p.sequence
      .map(
        (ph) =>
          `  ${ph.phase}. ${ph.label}${ph.learnerAction ? `\n     Learner: ${ph.learnerAction}` : ''}${ph.instructorAction ? `\n     Instructor: ${ph.instructorAction}` : ''}`,
      )
      .join('\n');
    return `### ${p.id}
${p.summary}
${p.problem ? `Problem: ${p.problem}\n` : ''}Sequence:
${seq}
${p.aiGuidance ? `AI Guidance: ${p.aiGuidance}\n` : ''}`;
  })
  .join('\n');

const fullThemeSections = index.themes
  .map((t) => {
    const tokens = Object.entries(t.tokens)
      .map(([k, v]) => `  ${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
      .join('\n');
    return `### ${t.id}
${t.summary}
Token Defaults:
${tokens}
Preferred Patterns: ${t.preferredPatterns.join(', ')}
${t.aiGuidance ? `AI Guidance: ${t.aiGuidance}\n` : ''}`;
  })
  .join('\n');

const llmsFullTxt = `# OER Design System — Full Specification

Version: ${index.version}
Generated: ${index.generatedAt}

---

## What is the OER Design System?

OER Design System is a pedagogical design system — a set of tokens, patterns, and themes that describe instructional intent in learning materials. It gives instructors, platforms, and AI agents a shared vocabulary for the "how" of teaching, not just the "what."

---

## Tokens

${fullTokenSections}

---

## Patterns

${fullPatternSections}

---

## Themes

${fullThemeSections}

---

## Validation Rules

${index.validationRules
  .map(
    (r) => `### ${r.id} [${r.severity}]
${r.name}
If: ${r.condition.token}${r.condition.values ? ` in [${r.condition.values.join(', ')}]` : r.condition.notValues ? ` not in [${r.condition.notValues.join(', ')}]` : ''}
Then: ${r.expected.token}${r.expected.values ? ` must be [${r.expected.values.join(', ')}]` : r.expected.includes ? ` must include [${r.expected.includes.join(', ')}]` : r.expected.present !== undefined ? ` must ${r.expected.present ? 'be present' : 'be absent'}` : ''}
Message: ${r.message}
${r.rationale ? `Rationale: ${r.rationale}` : ''}`,
  )
  .join('\n\n')}

---

## Implementation Recipe

1. Fetch /ois-index.json
2. Identify learning goal, learner level, domain, constraints
3. Select theme from themes
4. Select pattern from theme.preferredPatterns
5. Resolve tokens (theme defaults → pattern requirements → local overrides)
6. Run validation rules
7. Generate materials using pattern sequence
8. Output transparency summary
9. Output machine-readable pedagogy block
10. Return to user with validation report
`;

mkdirSync(distDir, { recursive: true });
writeFileSync(join(distDir, 'llms.txt'), llmsTxt, 'utf-8');
writeFileSync(join(distDir, 'llms-full.txt'), llmsFullTxt, 'utf-8');
console.log('Written: dist/llms.txt, dist/llms-full.txt');

mkdirSync(docsPublicDir, { recursive: true });
writeFileSync(join(docsPublicDir, 'llms.txt'), llmsTxt, 'utf-8');
writeFileSync(join(docsPublicDir, 'llms-full.txt'), llmsFullTxt, 'utf-8');
console.log(
  'Copied: apps/docs/public/llms.txt, apps/docs/public/llms-full.txt',
);
