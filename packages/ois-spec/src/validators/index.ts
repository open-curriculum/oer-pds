import { z } from "zod";

// ─────────────────────────────────────────────
// Token validators
// ─────────────────────────────────────────────

export const TokenCategorySchema = z.enum([
  "scaffolding",
  "agency",
  "feedback",
  "assessment",
  "revision",
  "reflection",
  "collaboration",
  "accessibility",
  "localization",
  "aiUse",
]);

export const TokenTypeSchema = z.enum(["enum", "boolean", "enum-multi", "enum-or-free"]);

export const TokenValueSchema = z.object({
  value: z.string(),
  definition: z.string(),
  useWhen: z.string().optional(),
});

export const PedagogicalTokenSchema = z.object({
  id: z.string().regex(/^[a-z][a-zA-Z0-9]*\.[a-z][a-zA-Z0-9]*$/),
  name: z.string(),
  category: TokenCategorySchema,
  type: TokenTypeSchema,
  values: z.array(TokenValueSchema).optional(),
  defaultValue: z.union([z.string(), z.boolean()]).optional(),
  definition: z.string(),
  useWhen: z.string().optional(),
  doNotUseWhen: z.string().optional(),
  examples: z.array(z.string()).optional(),
  relatedTokens: z.array(z.string()).optional(),
  oerSchemaMapping: z.string().optional(),
  aiGuidance: z.string().optional(),
});

// ─────────────────────────────────────────────
// Pattern validators
// ─────────────────────────────────────────────

export const PatternPhaseSchema = z.object({
  phase: z.number(),
  label: z.string(),
  learnerAction: z.string().optional(),
  instructorAction: z.string().optional(),
  evidence: z.string().optional(),
});

export const InstructionalPatternSchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/),
  name: z.string(),
  summary: z.string(),
  problem: z.string().optional(),
  context: z.array(z.string()).optional(),
  sequence: z.array(PatternPhaseSchema),
  recommendedTokens: z.record(z.union([z.string(), z.boolean(), z.array(z.string())])).optional(),
  assessmentEvidence: z.array(z.string()).optional(),
  compatibleThemes: z.array(z.string()).optional(),
  aiGuidance: z.string().optional(),
});

// ─────────────────────────────────────────────
// Theme validators
// ─────────────────────────────────────────────

export const PedagogicalThemeSchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/),
  name: z.string(),
  summary: z.string(),
  description: z.string().optional(),
  tokens: z.record(z.union([z.string(), z.boolean(), z.array(z.string())])),
  preferredPatterns: z.array(z.string()),
  recommendedRendererProfiles: z.array(z.string()).optional(),
  bestFor: z.array(z.string()).optional(),
  aiGuidance: z.string().optional(),
});

// ─────────────────────────────────────────────
// Renderer validators
// ─────────────────────────────────────────────

export const RendererOutputTypeSchema = z.enum([
  "student-facing-assignment",
  "student-facing-content",
  "facilitation-guide",
  "student-checklist",
  "instructor-guide",
  "assessment-rubric",
  "ai-disclosure",
  "course-map",
  "lms-assignment",
  "ai-context-package",
]);

export const RendererProfileSchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/),
  name: z.string(),
  summary: z.string(),
  outputType: RendererOutputTypeSchema,
  requiredSections: z.array(z.string()),
  optionalSections: z.array(z.string()).optional(),
  compatiblePatterns: z.array(z.string()).optional(),
  aiGuidance: z.string().optional(),
});

// ─────────────────────────────────────────────
// Validation Rule validators
// ─────────────────────────────────────────────

export const ValidationSeveritySchema = z.enum(["error", "warning", "info"]);

export const ValidationConditionSchema = z.object({
  token: z.string(),
  values: z.array(z.string()).optional(),
  present: z.boolean().optional(),
  notValues: z.array(z.string()).optional(),
});

export const ValidationExpectedSchema = z.object({
  token: z.string(),
  values: z.array(z.string()).optional(),
  present: z.boolean().optional(),
  includes: z.array(z.string()).optional(),
});

export const ValidationRuleSchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/),
  name: z.string(),
  severity: ValidationSeveritySchema,
  condition: ValidationConditionSchema,
  expected: ValidationExpectedSchema,
  message: z.string(),
  rationale: z.string().optional(),
});

// ─────────────────────────────────────────────
// Registry Index validator
// ─────────────────────────────────────────────

export const OISIndexSchema = z.object({
  version: z.string(),
  generatedAt: z.string(),
  tokens: z.array(PedagogicalTokenSchema),
  patterns: z.array(InstructionalPatternSchema),
  themes: z.array(PedagogicalThemeSchema),
  renderers: z.array(RendererProfileSchema),
  validationRules: z.array(ValidationRuleSchema),
});

// ─────────────────────────────────────────────
// Pedagogy Block validator
// ─────────────────────────────────────────────

export const PedagogyBlockSchema = z.object({
  theme: z.string().optional(),
  pattern: z.string().optional(),
  tokens: z.record(z.union([z.string(), z.boolean(), z.array(z.string())])).optional(),
});
