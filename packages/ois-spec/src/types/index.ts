// ─────────────────────────────────────────────
// OIS Core Types
// ─────────────────────────────────────────────

export type TokenCategory =
  | "scaffolding"
  | "agency"
  | "feedback"
  | "assessment"
  | "revision"
  | "reflection"
  | "collaboration"
  | "accessibility"
  | "localization"
  | "aiUse";

export type TokenType = "enum" | "boolean" | "enum-multi" | "enum-or-free";

export interface TokenValue {
  value: string;
  definition: string;
  useWhen?: string;
}

export interface PedagogicalToken {
  id: string;
  name: string;
  category: TokenCategory;
  type: TokenType;
  values?: TokenValue[];
  defaultValue?: string | boolean;
  definition: string;
  useWhen?: string;
  doNotUseWhen?: string;
  examples?: string[];
  relatedTokens?: string[];
  oerSchemaMapping?: string;
  aiGuidance?: string;
}

// ─────────────────────────────────────────────
// Patterns
// ─────────────────────────────────────────────

export interface PatternPhase {
  phase: number;
  label: string;
  learnerAction?: string;
  instructorAction?: string;
  evidence?: string;
}

export interface InstructionalPattern {
  id: string;
  name: string;
  summary: string;
  problem?: string;
  context?: string[];
  sequence: PatternPhase[];
  recommendedTokens?: Record<string, string | boolean | string[]>;
  assessmentEvidence?: string[];
  compatibleThemes?: string[];
  aiGuidance?: string;
}

// ─────────────────────────────────────────────
// Themes
// ─────────────────────────────────────────────

export interface PedagogicalTheme {
  id: string;
  name: string;
  summary: string;
  description?: string;
  tokens: Record<string, string | boolean | string[]>;
  preferredPatterns: string[];
  recommendedRendererProfiles?: string[];
  bestFor?: string[];
  aiGuidance?: string;
}

// ─────────────────────────────────────────────
// Renderers
// ─────────────────────────────────────────────

export type RendererOutputType =
  | "student-facing-assignment"
  | "student-facing-content"
  | "facilitation-guide"
  | "student-checklist"
  | "instructor-guide"
  | "assessment-rubric"
  | "ai-disclosure"
  | "course-map"
  | "lms-assignment"
  | "ai-context-package";

export interface RendererProfile {
  id: string;
  name: string;
  summary: string;
  outputType: RendererOutputType;
  requiredSections: string[];
  optionalSections?: string[];
  compatiblePatterns?: string[];
  aiGuidance?: string;
}

// ─────────────────────────────────────────────
// Validation Rules
// ─────────────────────────────────────────────

export type ValidationSeverity = "error" | "warning" | "info";

export interface ValidationCondition {
  token: string;
  values?: string[];
  present?: boolean;
  notValues?: string[];
}

export interface ValidationExpected {
  token: string;
  values?: string[];
  present?: boolean;
  includes?: string[];
}

export interface ValidationRule {
  id: string;
  name: string;
  severity: ValidationSeverity;
  condition: ValidationCondition;
  expected: ValidationExpected;
  message: string;
  rationale?: string;
}

// ─────────────────────────────────────────────
// Registry Index
// ─────────────────────────────────────────────

export interface OISIndex {
  version: string;
  generatedAt: string;
  tokens: PedagogicalToken[];
  patterns: InstructionalPattern[];
  themes: PedagogicalTheme[];
  renderers: RendererProfile[];
  validationRules: ValidationRule[];
}

// ─────────────────────────────────────────────
// Pedagogy Block (for embedding in content)
// ─────────────────────────────────────────────

export interface PedagogyBlock {
  theme?: string;
  pattern?: string;
  tokens?: Record<string, string | boolean | string[]>;
}
